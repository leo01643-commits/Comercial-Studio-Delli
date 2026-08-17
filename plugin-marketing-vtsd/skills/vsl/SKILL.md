---
name: vsl
description: Escreve e estrutura roteiros de VSL (vídeo de vendas) e vídeos de conversão pelo método Venda Todo Santo Dia. Use ao roteirizar vídeo de vendas, vídeo do topo da página, pitch gravado, webinário ou vídeo de captura. Gatilhos "VSL", "vídeo de vendas", "roteiro do vídeo", "o que falar no vídeo", "gravar o vídeo da página", "pitch", "webinário".
---

# VSL — vídeo de vendas

Base: módulo 5 do Venda Todo Santo Dia. As páginas de alto faturamento analisadas **abrem com
vídeo, não com imagem estática** — e a aula de VSL é a mais longa do módulo de copy. É peça
central, não acessório.

---

## Antes de roteirizar: três definições

1. **Temperatura do público.** Tráfego frio (anúncio) precisa de mais aquecimento;
   tráfego de canal próprio já chega aquecido. Um VSL bem-feito serve aos dois: quem já
   conhece pula para o preço, quem não conhece aquece ali mesmo.
2. **Ticket.** Ticket baixo aguenta conversão direta — fale o preço no vídeo. Ticket alto pede
   conversa; o vídeo leva para agendamento, não para checkout.
3. **O argumento central.** O mesmo da página. O vídeo não pode defender outra tese.

---

## Estrutura de 4 minutos (venda direta, ticket baixo)

| Tempo | Bloco | O que faz |
|---|---|---|
| 0:00–0:15 | **Gancho + filtro** | Urgência oculta (dúvida, dor ou desejo) e "para quem é" na primeira frase |
| 0:15–0:45 | **Confirma a suspeita** | O leitor já desconfiava; você dá nome ao problema |
| 0:45–1:15 | **Justifica o fracasso** | "Não é falta de talento" + conte que você também travou |
| 1:15–2:15 | **Demonstração** | Mostre a coisa funcionando. É o trecho que mais vende |
| 2:15–2:45 | **Inimigo comum** | A prática que você combate — nunca uma pessoa |
| 2:45–3:30 | **Oferta** | O que vem junto, o preço, a comparação de valor |
| 3:30–4:00 | **Garantia e CTA** | Assuma o risco e diga exatamente o que fazer |

### Regras de execução

- **Fale o preço em voz alta** em ticket baixo. Esconder cria atrito sem ganho.
- **Compartilhe a tela na demonstração** e ocupe o quadro inteiro. Prova visual vale mais que
  qualquer adjetivo.
- **Primeiros 15 segundos sem introdução.** Nada de "olá, seja bem-vindo, hoje eu vou falar".
  Comece pelo gancho.
- **Um CTA, repetido.** Não ofereça dois caminhos.
- Produção importa menos que clareza. Áudio limpo > câmera cara.

---

## Estrutura longa (webinário / ticket alto)

Mesma espinha, com dois blocos adicionais antes da oferta:

- **Conteúdo de valor real** — ensine algo aplicável antes de vender. É o que compra o direito
  de fazer a oferta.
- **Quebra de objeções uma a uma** — cada objeção vira um bloco curto, com a resposta e, se
  possível, uma prova.

---

## Onde o VSL entra na página

Deixe o campo do vídeo pronto **antes de gravar**. Padrão que funciona:

- Uma constante (`VSL_VIDEO_ID`) no topo do componente
- Vazia: mostra a imagem principal
- Preenchida: troca pelo player **no mesmo espaço e proporção**, sem quebrar o layout
- O player mantém a mesma moldura visual da imagem que substituiu

Assim a página pode ir ao ar antes do vídeo existir, e o vídeo entra sem retrabalho.

---

## Checklist do roteiro

- [ ] Gancho nos primeiros 15 segundos, sem introdução
- [ ] Público filtrado na primeira frase
- [ ] Confirma uma suspeita real do espectador
- [ ] Justifica o fracasso dele sem tirar a responsabilidade
- [ ] Tem demonstração visual, não só fala
- [ ] O inimigo é uma prática, não uma pessoa ou empresa
- [ ] Lógica, emoção e credibilidade aparecem
- [ ] Preço dito em voz alta (ticket baixo)
- [ ] Garantia declarada
- [ ] Um único CTA, repetido
- [ ] Nenhuma promessa sem lastro

## Relacionado

- `copywriting` — os fundamentos que sustentam o roteiro
- `pagina-de-vendas` — onde o VSL é publicado
- `transcrever-video` — transcreva o VSL depois de gravado; a transcrição vira legenda, e-mail e legenda de post
