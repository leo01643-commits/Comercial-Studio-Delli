# Prompt de continuação — UI do VendaFlow (enviar ao Lovable quando os créditos voltarem)

> Contexto: o Prompt 1 de adaptação foi parcialmente executado. O BACKEND está pronto (migrations, funil, triggers tg_consulta_funil/tg_etapa_pedido_concluida, itens_ciclo_fase, semear_templates comercial, camada de IA reescrita). Falta a UI. Colar o texto abaixo no chat do projeto Lovable `76f4bb5b-dca4-4c16-a167-3e0bf4a30cab` (ou reenviar via MCP).

---

Sim — continue e CONCLUA todo o restante do escopo do prompt anterior, sem parar para perguntar. Checklist do que falta (confira cada item ao final):
1. Rebrand global VendaFlow 🤝 + azul-petróleo (#0F3E4D/#14586B): __root.tsx, AppShell, metadados/manifest/favicon, e-mails Resend, paywall, tela Assinar, tela admin, onboarding ("criar empresa"). NÃO mexer na landing "/".
2. Vocabulário de vendas em TODAS as telas: cliente/orçamento/proposta enviada/próxima abordagem/segmentos/informações estratégicas/vendedor-assistente-auxiliar, funil (em elaboração → enviada → em negociação → ganha/perdida/expirada) com pedido de motivo_perda ao marcar perdida.
3. Telas de clientes e orçamentos com os campos novos: empresa+cargo no cliente; titulo (obra/projeto), valor, data_prevista_execucao, validade no orçamento.
4. Checklist de execução no orçamento ganho (etapas_pedido): concluir etapa → botão "avisar cliente" gera mensagem na Caixa de saída; última etapa concluída → abre ciclo pós-venda (fase='pos_venda', toques D+7/D+30/D+90 das configuracoes) — o backend disso já existe, é só a UI.
5. Seção "Arquivos" (anexos + bucket privado "anexos") na ficha do cliente e do orçamento: upload PDF/imagem, listar, baixar, excluir.
6. Grade dos 8 avisos + digest diário com os textos novos (incluindo "obra se aproximando" 30 dias antes da data_prevista_execucao e etapa de execução prevista/atrasada).
7. Configurações: labels novos, defaults do ciclo pré-venda (~D+2/D+7/D+15/D+30 — colunas prevenda_toque1..4_dias já existem), próxima abordagem padrão 30d, esconder sinal/48h/valor cheio/valores sugeridos (avançado desligado), flag mostrar_contratos ocultando "Contratos recorrentes" da navegação quando false. Relabel dos flags de interações (aderencia_treino/aderencia_dieta/sintoma_piorou → sinais comerciais, ex.: "achou caro", "obra adiada" — manter colunas).
8. Meta Pixel: constante única com placeholder "TROCAR_PELO_PIXEL_VENDAFLOW".
Ao final, faça a verificação: buscar "NutriFlow", "NutriCRM", "nutri", "paciente", "consulta" no código (fora da landing "/") e me listar o que restou e qualquer pendência.

---

Depois deste prompt, enviar o **Prompt 2 da landing** (arquivo `prompt-landing.md` nesta pasta).
