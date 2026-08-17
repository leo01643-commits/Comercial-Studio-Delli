# Gerador do dossiê

O arquivo `../VTSD-Dossie-Trafego-Pago-e-Criativos.docx` é gerado por estes
quatro scripts, encadeados por `require`:

| Arquivo | Conteúdo |
|---|---|
| `gen1.js` | Infraestrutura: estilos, paleta, helpers de título, parágrafo, lista, tabela, citação e caixa |
| `gen2.js` | Capa, sumário e Partes 0 a 5 (mapa, ordem, produto, copy, página de vendas, VSL) |
| `gen3.js` | Partes 6 a 8 (criativos, estratégia de tráfego, execução no Meta Ads) |
| `gen4.js` | Partes 9 a 17, montagem do documento e escrita do arquivo |

## Regerar

```bash
npm install docx
node gen4.js ../VTSD-Dossie-Trafego-Pago-e-Criativos.docx
```

Para editar o conteúdo, mexa em `gen2/gen3/gen4` e rode de novo — não edite o
.docx à mão, senão a próxima geração sobrescreve.

O helper de parágrafo aceita `**negrito**` e `*itálico*` no texto.
