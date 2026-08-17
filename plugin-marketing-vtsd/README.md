# Plugin — Marketing VTSD

Método de marketing digital do **Venda Todo Santo Dia** (Leandro Ladeira), destilado das
apostilas e mapas mentais do curso, mais os aprendizados de construir páginas de venda reais
com geradores de IA.

Feito para o Studio Delli, mas **portátil para qualquer negócio** — as skills descrevem método,
não um produto específico.

---

## As 8 skills

| Skill | Para quê |
|---|---|
| `pagina-de-vendas` | Criar e auditar página de vendas. As 16 seções, densidade, CTA, oferta, bônus |
| `copywriting` | Fundamentos: persuasão, Blair Warren, 26 gatilhos, coesão e coerência |
| `vsl` | Roteiro de vídeo de vendas e depoimento |
| `anuncios-meta` | As 4 anatomias de criativo e as 18 limitações criativas |
| `trafego-estrategia` | Fluxo de venda, camadas do perpétuo, públicos, CPA, rituais |
| `produto-digital` | Posicionamento, mecanismo único, precificação e formato |
| `conteudo-organico` | Linha editorial, Reels, Stories, Lives, YouTube |
| `transcrever-video` | Transcrição local com faster-whisper, sem API e sem custo |

As skills disparam sozinhas pelo contexto da conversa. Também dá para pedir pelo nome:
*"usa a skill de página de vendas"*.

---

## Como instalar

Num terminal interativo do Claude Code, dentro do projeto onde quer usar:

```bash
/plugin marketplace add "G:/My Drive/Studio Delli (1)/06 IA e Automação/Claude Code/plugin-marketing-vtsd"
```

Alternativa sem instalar: copie a pasta `skills/` para dentro de `.claude/skills/` do projeto.
Funciona igual, mas cada projeto fica com a sua cópia — se o método evoluir, você atualiza em
vários lugares.

---

## Como usar em um negócio novo

O método é o mesmo; o que muda é o contexto. Quatro passos.

### 1. Crie a pasta do projeto com um CLAUDE.md

O CLAUDE.md é o que diferencia um negócio do outro. Copie um dos existentes em
`05 Marketing e Conteúdo/projetos/` e troque a seção **Contexto dos negócios** por:

- o que o negócio vende e para quem
- ticket e se é perpétuo ou lançamento
- canais de venda
- o que **não** pode ser prometido
- provas disponíveis (clientes, projetos, depoimentos, números reais)

### 2. Preencha o briefing

Use `projetos/pagina-de-vendas/briefing-modelo.md`. Sem transformação, entregáveis, provas e
garantia, não comece a escrever — o resultado vira texto genérico.

### 3. Trabalhe na ordem

```
produto-digital → copywriting → pagina-de-vendas → vsl → anuncios-meta → trafego-estrategia
   posicionar       escrever        montar a PV      gravar   criar anúncio    levar tráfego
```

Pular o primeiro é o erro mais comum. Página boa de produto mal posicionado não vende.

### 4. Reaproveite as referências

Os swipe files ficam em `05 Marketing e Conteúdo/vtsd/materiais/Modulo05/ReferenciasdeCopy/` —
30 páginas de vendas reais e 33 anúncios. Eles não são específicos do Studio Delli e servem
para qualquer nicho. **Leia pelo menos uma referência do mesmo formato antes de propor
estrutura.**

---

## O que estas skills não fazem

- Não substituem o curso. São o método destilado, não as aulas.
- Não inventam prova. Se o negócio não tem depoimento, a skill manda usar prova de trabalho ou
  rodar um beta — nunca fabricar.
- Não operam contas de anúncio. Para isso, use `trafego-conexao` e `trafego-criar-campanha`,
  as skills oficiais do curso, em `05 Marketing e Conteúdo/vtsd/skills-oficiais/`.

---

## Origem

Destilado do curso **Venda Todo Santo Dia**, de Leandro Ladeira, a partir das apostilas e mapas
mentais do módulo 5 (Copywriting) e do índice das 150 aulas. Uso interno da Studio Delli para
aplicar o método aos próprios produtos — não redistribui o conteúdo do curso.
