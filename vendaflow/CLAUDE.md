# CLAUDE.md — Projeto VendaFlow

> Contexto completo do produto para agentes trabalhando neste projeto.
> Origem: remix do NutriFlow (projeto Lovable `bb802b45-a75f-406d-8791-69b897165e51`), adaptado para follow-up comercial.
> Estado: **em adaptação — ver seção 6 (pendências).**

## 1. O que é o VendaFlow

SaaS de follow-up comercial **coringa** (serve para qualquer vendedor/empresa que envia orçamentos), multi-empresa, pt-BR, mobile-first. Marca: **VendaFlow** (🤝, azul-petróleo #0F3E4D/#14586B). Resolve o calcanhar de aquiles de quem vende por proposta: o orçamento é enviado e o vendedor esquece de acompanhar — alguém mais atento faz uma proposta melhor e leva a venda. Nasceu da dor real do Leo (Studio Delli, orçamentos de luminárias para obras), mas o produto é genérico por decisão de posicionamento.

**O loop do produto (3 fases):**
1. **Pré-venda** — vendedor envia orçamento → marca "proposta enviada" → (opcional) grava áudio de 1 min sobre a conversa (IA transcreve e preenche: resumo, próximos passos, data da próxima abordagem) → sistema agenda o ciclo de follow-up (~D+2 "recebeu? dúvidas?", ~D+7 "preço/prazo ok? reunião?", ~D+15 "condição especial? venda parcial?", ~D+30 última tentativa; intervalos ajustáveis) → IA redige cada mensagem **no tom do vendedor** (aprende com 2-3 mensagens reais coladas nas configurações), citando a última resposta do cliente → equipe revisa e envia com 1 toque no WhatsApp (wa.me) → resposta registrada vira memória + flags (ex.: "⚠ achou caro", "obra adiada").
2. **Execução (venda ganha)** — orçamento marcado "ganha" semeia checklist de etapas do pedido (Produção → Entrega → NF → Pagamento → Entrega final/instalação, editáveis); concluir cada etapa oferece "avisar cliente" (mensagem redigida pela IA na Caixa de saída) — o cliente nunca se sente largado durante fabricação/entrega/NF/boleto.
3. **Pós-venda** — concluída a última etapa, abre ciclo de pós-venda: D+7 (instalação/uso deu certo? foi fácil?), D+30 (resultado? precisa de algo?), D+90 (semente do próximo negócio).

**Nada é enviado sem revisão humana** (posicionamento anti-spam, herdado do NutriFlow). Envio automático real por WhatsApp API é a escada Premium/Full (infra já existe internamente).

**Avisos automáticos (8):** proposta sem resposta há X dias · próxima abordagem vencendo · validade da proposta vencendo · **data prevista de execução da obra se aproximando** (30 dias antes — hora de retomar) · pagamento pendente · etapa de execução prevista/atrasada · aniversário do contato · reativação de clientes sumidos (até 3 convites, 1/mês).

**Outros pilares (herdados):** telas Hoje/Semana/Calendário · Caixa de saída · resumo diário 7h por e-mail (Resend) · papéis vendedor/assistente/auxiliar — "informações estratégicas" (margem, desconto máximo, concorrentes) visíveis só ao vendedor · importação Excel/CSV · seleção em massa · filtro por último contato · templates etapa × segmento editáveis · **anexos**: PDFs da proposta, plantas, planilhas na ficha do cliente e do orçamento (bucket privado).

## 2. Mapeamento NutriFlow → VendaFlow

O banco NÃO foi renomeado (tabelas/colunas/enums preservados); só a linguagem de UI mudou.

| Banco (mantido) | UI VendaFlow |
|---|---|
| clinicas | Empresas (tenants) |
| perfis.papel nutri/secretaria/estagiaria | vendedor(a) / assistente / auxiliar |
| pacientes | Clientes (+ colunas novas `empresa`, `cargo`) |
| pacientes_clinico | Informações estratégicas (situação/dor, o que fecha o negócio, margem/desconto máx/concorrentes) — só vendedor |
| consultas | Orçamentos (+ `titulo`, `data_prevista_execucao`, `validade`, `motivo_perda`) |
| consultas.status | Funil: em_elaboracao → enviada → em_negociacao → ganha / perdida / expirada |
| consultas.tipo primeira/retorno | proposta nova / revisão de proposta |
| ciclos (+ `fase` pre_venda/pos_venda) | Ciclo de follow-up |
| areas | Segmentos (construção civil, corporativo, varejo, indústria, arquitetura & design, serviços) |
| retorno | Próxima abordagem (default 30 dias) |
| planos_paciente | Contratos recorrentes (oculto por default; flag `mostrar_contratos`) |
| **novas**: etapas_pedido, anexos | Checklist de execução do pedido · Arquivos |

Regras herdadas que não fazem sentido em vendas B2B ficaram **desativadas por default, com colunas preservadas**: sinal, regra das 48h/atestado, valor cheio após 90 dias, preço sugerido por tipo de consulta.

## 3. Modelo comercial

Idêntico ao NutriFlow: "Plano VendaFlow" R$ 99/mês ou anual −20% (R$ 79,20/mês), preços em `src/lib/comercial.ts`; trial 30 dias sem cartão; pós-trial modo leitura → Stripe Checkout → webhook ativa `assinatura_ate`; tela admin da plataforma; escada Premium (300 msgs/mês) / Full (1.500) com WhatsApp API já implementada internamente.

## 4. Stack e infraestrutura

- **Lovable** projeto `76f4bb5b-dca4-4c16-a167-3e0bf4a30cab` (workspace `jjtteh5SAKhUInRLb9N4`). Editor: lovable.dev/projects/76f4bb5b-… · Preview: id-preview--76f4bb5b-….lovable.app · Publicação pendente.
- Stack TanStack Start + TS + Tailwind/shadcn; Lovable Cloud (Supabase `ubjxeaqgojnhjhhyeosz`, Postgres com RLS multi-tenant por `clinica_id`, auth, server functions).
- **pg_cron**: job `vendaflow-gerar-fila-diaria` (jobid 1, `0 10 * * *` UTC = 7h Recife) → `gerar_fila_todas()` + `net.http_post` no hook `/api/public/hooks/digest` com a publishable key nova. ATENÇÃO: neste banco o http_post fica no schema `net` (no NutriFlow era `extensions`).
- **Funções-chave** (copiadas no remix): criar_clinica (trial 30d), tg_consulta_realizada (agora dispara em status 'enviada'), tg_consulta_cancelada, gerar_fila_clinica/gerar_fila_todas (idempotente), semear_templates, render_template, admin_definir_assinatura, entrar_com_convite, estado_acesso_clinica.
- **Secrets NÃO copiados no remix** (pendências do Leo): `RESEND_API_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` (webhook novo no painel Stripe apontando para o domínio novo). Meta Pixel: placeholder `TROCAR_PELO_PIXEL_VENDAFLOW`.

## 5. Método de trabalho (OBRIGATÓRIO — herdado do NutriFlow)

1. **Créditos do Lovable são caros**: consolidar tudo em prompts completos; a copy de venda é escrita pelo agente, não pelo Lovable.
2. **SQL direto no banco é grátis** (`query_database`): dados de teste, correções, verificações, auditorias. Correção de função direto no banco → pedir sync da migration no prompt seguinte.
3. **Verificar tudo após cada build** com evidências (query_database, read_file, list_edits). Builds levam 5–15 min.
4. Decisões de negócio são do Leo (preços, marca, funil); defaults sensatos quando ele disser "executa".

## 6. Estado atual / pendências (27/08/2026)

**BACKEND PRONTO E TESTADO** (via SQL direto, sem créditos):
- [x] Remix criado e verificado (13 tabelas + 2 novas, funções, triggers, RLS)
- [x] pg_cron reagendado: `vendaflow-gerar-fila-diaria` jobid 1 (`net.http_post`, não `extensions.`)
- [x] Migrations do Prompt 1: funil novo em consultas.status, colunas titulo/data_prevista_execucao/validade/motivo_perda, pacientes.empresa/cargo, ciclos.fase, etapas_pedido, anexos, configuracoes prevenda_toque1..4 (2/7/15/30) e posvenda_toque1..3 (7/30/90), mostrar_contratos
- [x] Funções novas do funil: `tg_consulta_funil` ('enviada' abre ciclo pré-venda; 'ganha' encerra ciclo, ignora fila pendente e semeia 5 etapas; 'perdida'/'expirada' encerra tudo), `tg_etapa_pedido_concluida` (última etapa → ciclo pós-venda), `itens_ciclo_fase`
- [x] `semear_templates` comercial (18 templates: prevenda_d2..d30, posvenda_1..3, aviso_pedido, etapa_pedido, execucao, pagamento, aniversario, reativação etc.)
- [x] IA reescrita (`src/lib/ia.server.ts` + `ia.functions.ts`): redação consultiva por fase do funil, áudio pós-proposta estrutura resumo/próximos passos/próxima abordagem
- [x] Dados demo: empresa "Delli Iluminação (Demo)" (id `11111111-1111-4111-8111-111111111111`, is_platform_admin, Full até 2027) com 10 clientes B2B cobrindo o funil inteiro — 9 ciclos pré-venda, 1 pós-venda (aberto pelo trigger ao concluir a 5ª etapa do Hotel Mar Azul), 16 mensagens na fila, interações com memória (⚠ pediu desconto / ⚠ achou caro / ✅ instalação ok). OBS: sem usuário auth vinculado — após o Leo se cadastrar, vincular com `UPDATE perfis SET clinica_id='11111111-...' WHERE user_id='<uid>'` ou usar a tela admin.

**BLOQUEADO — workspace Lovable SEM CRÉDITOS** (lovable.dev/settings/billing):
- [ ] UI do Prompt 1 (rebrand visual, telas com campos novos, checklist de execução, Arquivos, avisos, Configurações, Pixel) → reenviar `prompt-continuacao-ui.md`
- [ ] Prompt 2: landing 12 seções → enviar `prompt-landing.md` (copy final pronta)
- [ ] Checklist de lançamento pós-builds (cadastro→trial, paywall, marca antiga zerada no front)

**Pendências do Leo:** adicionar créditos no Lovable · colar RESEND_API_KEY (o Lovable já pediu no chat), STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET · webhook novo no painel Stripe · novo Meta Pixel · Publish · domínio próprio depois
