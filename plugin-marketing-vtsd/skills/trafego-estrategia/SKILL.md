---
name: trafego-estrategia
description: Define a estratégia de tráfego pago antes de subir campanha — estrutura de camadas do perpétuo, escolha do fluxo de venda, montagem de públicos, objetivos por etapa e rituais de otimização. Use ao planejar tráfego, decidir estrutura de campanha, escolher entre conversão direta e isca digital, montar públicos ou definir o que otimizar. Gatilhos "estratégia de tráfego", "como estruturar a campanha", "que fluxo usar", "públicos", "quanto investir", "campanha não converte", "otimizar campanha", "escalar".
---

# Estratégia de tráfego pago — método VTSD

Base: módulos 4 (Fluxos de Venda) e 7 (Tráfego Pago) do Venda Todo Santo Dia.

> Esta skill é de **estratégia**: o que montar e por quê. A **execução** no Meta Ads é feita
> pelas skills oficiais do curso, `trafego-conexao` e `trafego-criar-campanha`. Use esta antes,
> aquelas depois.

---

## 1. Primeiro: escolher o fluxo, não a campanha

O erro comum é começar pela campanha. Comece pelo **fluxo de venda** — ele determina o resto.

| Fluxo | Quando usar |
|---|---|
| **Conversão direta** | Ticket baixo, oferta simples. Anúncio → página → checkout |
| **Conversão + remarketing** | O básico de qualquer perpétuo: quem visitou e não comprou volta a ver anúncio |
| **Isca digital** | Ticket médio/alto, ou quando o público ainda não sabe que tem o problema |
| **Webinário** | Ticket alto, oferta que precisa de explicação longa |
| **Quiz** | Quando a segmentação muda a oferta |
| **WhatsApp** | Venda consultiva, ticket alto |
| **Pré-checkout e recuperação** | Sempre. Carrinho abandonado é a venda mais barata |

**Regra prática de ticket:** ticket baixo aguenta conversão direta — mandar o anúncio direto
para a página funciona. Isca digital e webinário fazem mais sentido conforme o ticket sobe.

---

## 2. As três camadas do perpétuo

Perpétuo não é uma campanha, são três rodando ao mesmo tempo:

| Camada | Objetivo | Público | O que o anúncio faz |
|---|---|---|---|
| **Distribuição** | Alcance / views | Interesses, lookalike, aberto · exclui seguidores e clientes | Entrega conteúdo, gera reconhecimento |
| **Conversão** | Lead ou venda | Interesses + lookalike + seguidores e listas mornas · exclui clientes | Leva para a página |
| **Remarketing** | Venda | Quem entrou na página · exclui clientes | Fecha quem já demonstrou intenção |

**Excluir clientes em todas as camadas.** Pagar para anunciar a quem já comprou é queimar verba.

A anatomia do criativo muda por camada — ver skill `anuncios-meta`: gancho, CTA e objetivo são
diferentes em descoberta, relacionamento, conversão e remarketing.

---

## 3. Públicos

**Comece amplo.** O algoritmo (Advantage+ / Andromeda) encontra melhor que segmentação manual
quando há sinal de conversão suficiente. Segmentação estreita demais no início trava o
aprendizado.

Ordem de montagem:
1. **Aberto ou interesses amplos** para distribuição
2. **Lookalike** a partir de compradores, assim que houver base
3. **Públicos de engajamento** (viu 50% / 90% do vídeo, visitou a página) para conversão e remarketing
4. **Exclusão de clientes** em tudo

Sem pixel ativo e evento mapeado, nada disso funciona. Pixel é pré-requisito duro.

---

## 4. Ritmo de investimento

- **Suba campanha PAUSED** e revise antes de ativar.
- **Não mexa na campanha nas primeiras 48–72h.** Otimizar cedo demais reinicia o aprendizado.
- **Escale devagar.** Aumento agressivo de orçamento joga a campanha de volta para aprendizado.
- **Um teste por vez.** Trocar criativo e público juntos torna o resultado ilegível.

---

## 5. Rituais de otimização

Rotina, não improviso. O que olhar, em ordem:

1. **CPA / CAC** contra o ticket. É o número que decide se continua.
2. **CTR do criativo.** CTR baixo é problema de criativo ou de público, não de orçamento.
3. **Conversão da página.** Muito clique e pouca venda = a página não sustenta a promessa do
   anúncio. Nesse caso, o problema não é tráfego — é a página. Ver `pagina-de-vendas`.
4. **Frequência.** Subiu muito? O público saturou; troque criativo ou amplie o público.
5. **Onde o funil vaza.** Compare: viu anúncio → clicou → chegou na página → iniciou checkout →
   comprou. A maior queda percentual é onde trabalhar.

**Diagnóstico de "não está vendendo", em ordem:** oferta → página → criativo → público →
orçamento. Quase nunca é o último.

---

## 6. Métrica que importa

- **CPA** (custo por aquisição) contra o ticket e a margem
- **ROAS** só faz sentido com o custo real do produto na conta
- **CAC** contra o LTV — se há upsell, recorrência ou segundo produto, o CAC aceitável sobe

Definir o **CPA máximo aceitável antes de subir a campanha**. Sem esse número, não existe
decisão de pausar ou escalar — existe achismo.

---

## 7. Antes de subir qualquer campanha

- [ ] Fluxo de venda definido
- [ ] Página pronta e testada no celular
- [ ] Pixel instalado e evento de compra disparando
- [ ] CPA máximo aceitável definido
- [ ] Criativos de pelo menos 3 ângulos diferentes (ver `anuncios-meta`)
- [ ] Público de exclusão de clientes montado
- [ ] Orçamento diário que suporte pelo menos 3x o CPA alvo

## Relacionado

- `anuncios-meta` — as 4 anatomias de criativo e as 18 limitações criativas
- `trafego-conexao` e `trafego-criar-campanha` — execução no Meta Ads (skills oficiais do curso)
- `pagina-de-vendas` — quando o problema é conversão, não tráfego
- `conteudo-organico` — o que performa organicamente vira criativo pago
