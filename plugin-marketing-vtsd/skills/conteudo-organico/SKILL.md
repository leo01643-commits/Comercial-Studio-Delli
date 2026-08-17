---
name: conteudo-organico
description: Planeja e escreve conteúdo orgânico para Instagram e YouTube usando a taxonomia do Venda Todo Santo Dia — linha editorial, formatos de Reels, Stories, Lives, YouTube SEO e recomendados. Use ao definir linha editorial, escolher o que postar, escrever roteiro de Reel, planejar Stories ou otimizar título/thumb de vídeo. Gatilhos "linha editorial", "o que postar", "roteiro de reel", "stories", "live", "youtube", "SEO do vídeo", "título do vídeo", "calendário de conteúdo", "conteúdo orgânico", "não sei o que gravar".
---

# Conteúdo orgânico — Instagram e YouTube (método VTSD)

Fonte: módulo 8 (Conteúdo) do Venda Todo Santo Dia.

> **Proveniência.** O módulo 8 não traz apostila em PDF; o detalhe está nos vídeos. Esta skill
> organiza os formatos a partir do índice real do curso. As 18 aulas estão listadas em
> `vtsd/indice-curso.md`.

Contexto padrão: canal **Studio Delli** no YouTube + Instagram, vendendo o curso de DIALux
(R$ 297) para arquitetos, designers de interiores e lighting designers.

---

## 1. Linha editorial vem antes do formato

O erro comum é escolher formato ("vou fazer um Reel") antes de decidir o que a conta defende.
A linha editorial responde: **sobre o que você fala, contra o que você fala, e o que você
nunca fala.**

Para o Studio Delli, três eixos sustentam a venda do curso sem parecer propaganda:

| Eixo | Função na venda |
|---|---|
| **Técnico** (cálculo, norma, lux vs lúmen, IRC, UGR) | Prova de autoridade — sustenta o preço |
| **Crítico** (projeto no achismo, erros comuns, mito do "spot a cada 1,5 m") | Cria o inimigo comum e a urgência |
| **Resultado** (antes/depois, projeto entregue, bastidor) | Prova visual e desejo |

Regra: todo conteúdo deve caber em um dos eixos. Se não cabe, não é da conta.

## 2. Instagram — formatos de Reels

Sete formatos que o curso destrincha. Use como cardápio quando travar:

| Formato | O que é | Aplicado ao Studio Delli |
|---|---|---|
| **Histórias pessoais** | Narrativa própria | "O projeto que eu refiz três vezes" |
| **Trends e opiniões** | Pegar assunto do momento e opinar | Opinar sobre tendência de iluminação em projeto viral |
| **POV e memes** | Humor de nicho | POV: o cliente pediu "luz aconchegante" |
| **Cortes de podcast** | Recorte de fala longa | Cortes das suas lives e vídeos longos |
| **Caixinha de perguntas** | Responder pergunta real | Dúvidas de DIALux que chegam |
| **Perguntas e respostas** | Formato direto de dúvida | "Lux ou lúmen?" |
| **Problema × Solução** | O mais direto para conversão | "Sala escura mesmo com 12 spots. O erro é…" |

**Stories** é aula à parte no curso — é onde mora o relacionamento diário e a venda mais direta.

## 3. Instagram — Lives

Quatro tipos, cada um com função distinta:

- **Tipos e temas** — a estrutura geral de quando e sobre o que fazer live
- **Entrevista com alunos** — prova social ao vivo (o depoimento mais difícil de falsificar)
- **Entrevista com autoridades** — empresta autoridade de terceiros
- **Consultoria aleatória** — resolve o problema de alguém ao vivo; demonstra competência
  melhor que qualquer argumento

*Para o DIALux:* "consultoria aleatória" é o formato mais forte — abrir o DIALux e resolver o
projeto de um seguidor ao vivo **é** a demonstração do produto.

## 4. YouTube

Quatro frentes no curso:

- **Fundamentos** — o que o canal precisa ter para funcionar
- **SEO** — ser achado na busca (título, descrição, tags, o que a pessoa digita)
- **Recomendados** — ser sugerido pelo algoritmo (retenção, CTR, sessão)
- **Linha editorial no YouTube** — diferente da do Instagram: aqui a intenção de busca manda

**SEO e Recomendados são jogos distintos.** SEO atende quem já procura ("como usar DIALux");
Recomendados atende quem nem sabia que queria. Um canal que só faz SEO cresce devagar; um que
só faz recomendado não converte. Precisa dos dois.

### Ferramentas disponíveis
As tools `vidiq_*` estão conectadas nesta máquina — use para pesquisa de palavra-chave,
análise de concorrente, outliers, score de título e thumbnail:

- `vidiq_keyword_research` — validar demanda de busca antes de gravar
- `vidiq_outliers` / `vidiq_similar_videos` — achar o que performa no nicho
- `vidiq_score_title` / `vidiq_score_thumbnail` — testar antes de publicar

## 5. Da audiência para a venda

Conteúdo orgânico não vende sozinho — ele **alimenta** os públicos de tráfego. Ver
`anuncios-meta`:

- Conteúdo que performa organicamente é candidato natural a **anúncio de descoberta**
- Quem assistiu 50%/90% vira público de **relacionamento**
- Quem clicou e foi à página vira público de **remarketing**

Por isso vale transcrever o que já performou e reaproveitar — ver `transcrever-video`.

---

## Processo

### Definir linha editorial
1. Escolher os eixos (para o Studio Delli: técnico, crítico, resultado)
2. Para cada eixo, listar 10 temas concretos
3. Distribuir os temas nos formatos do cardápio acima
4. Definir frequência sustentável — constância vence volume

### Roteiro de Reel
1. Escolher **eixo** e **formato**
2. **Gancho nos 3 primeiros segundos** — mesma lógica de `anuncios-meta`: dúvida, dor ou desejo
3. **Filtro de público** logo no início ("se você é arquiteto…")
4. Entregar o que o gancho prometeu
5. CTA compatível: orgânico pede *siga / comente / salva*, não *compre*

### Vídeo de YouTube
1. Validar demanda com `vidiq_keyword_research`
2. Decidir se é jogo de **SEO** ou de **Recomendados**
3. Título e thumb antes do roteiro (se não dá título bom, o tema é fraco)
4. Roteiro com retenção: entregar valor cedo, não guardar tudo para o fim

## Checklist

- [ ] O conteúdo cabe em um dos eixos da linha editorial
- [ ] O gancho está nos primeiros segundos
- [ ] O público está filtrado logo no início
- [ ] Entrega o que o gancho prometeu
- [ ] CTA compatível com orgânico
- [ ] Nenhuma afirmação técnica de iluminação sem lastro — na dúvida, consultar a skill
  `gpt-lighting-agent` ou os materiais técnicos do Studio Delli

## Relacionado

- `anuncios-meta` — conteúdo que performa vira criativo pago
- `transcrever-video` — reaproveitar o que já foi gravado
- `pagina-de-vendas` — destino final do tráfego orgânico
- `anthropic-skills:scriptwriter` e `anthropic-skills:studio-delli-roteirista` — roteiro dos vídeos do canal
