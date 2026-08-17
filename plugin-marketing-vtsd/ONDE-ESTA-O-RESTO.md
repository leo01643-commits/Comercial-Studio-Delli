# O que não está neste repositório

Este repositório traz o **plugin** (as 8 skills de método). Os materiais do curso e as skills
oficiais de operação de Meta Ads continuam no Google Drive, porque são arquivos grandes e/ou
conteúdo do curso que não deve ser redistribuído.

## Skills oficiais do curso — execução no Meta Ads

Projeto `trafego-com-ia-mcp`, em
`Studio Delli/05 Marketing e Conteúdo/vtsd/skills-oficiais/trafego-com-ia-mcp/`:

| Skill | Tamanho | Função |
|---|---|---|
| `trafego-conexao` | ~40 KB | Conectar e autenticar a conta de anúncios via MCP |
| `trafego-criar-campanha` | ~43 KB | Criar campanha, conjunto e anúncio no Meta Ads |

Também há, no mesmo projeto: `commands/trafego-conexao.md`, `commands/trafego-criar-campanha.md`,
uma pasta `criativos/`, `docs/`, `entregas/` e um `CLAUDE.md` de ~25 KB.

**Divisão de trabalho:** `trafego-estrategia` (deste plugin) decide o que montar e por quê;
`trafego-conexao` e `trafego-criar-campanha` executam no Meta Ads. Use esta antes, aquelas depois.

## Materiais e swipe files

`Studio Delli/05 Marketing e Conteúdo/vtsd/`:

- `indice-curso.md` — índice das 150 aulas
- `materiais/Modulo05/02-Anncios-mapamental.pdf` — mapa mental de anúncios (base da skill `anuncios-meta`)
- `materiais/Modulo05/ReferenciasdeCopy/` — 30 páginas de vendas reais e 33 anúncios
  (`13.Anunciosdedescoberta/`, `14.Relacionamento/`)
- `transcricoes/` — transcrições geradas pela skill `transcrever-video`

## Instalar a partir do Drive (máquina local)

```bash
/plugin marketplace add "G:/My Drive/Studio Delli (1)/06 IA e Automação/Claude Code/plugin-marketing-vtsd"
```

## Instalar a partir deste repositório

Útil em sessões que não têm o Drive montado (Claude Code na web, por exemplo):

```bash
/plugin marketplace add ./plugin-marketing-vtsd
```

Ou copie `plugin-marketing-vtsd/skills/` para `.claude/skills/` do projeto.
