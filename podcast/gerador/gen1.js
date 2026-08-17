// Gerador do dossiê VTSD — parte 1: infraestrutura e helpers
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  PageBreak, LevelFormat, TableOfContents, convertInchesToTwip,
} = require("docx");

const AZUL = "1F3864";
const AZUL_CLARO = "2E5C9A";
const CINZA = "595959";
const DOURADO = "8C6D1F";
const FUNDO_CAB = "1F3864";
const FUNDO_ZEBRA = "EEF2F8";
const FUNDO_CAIXA = "F7F4EC";
const LARGURA = 9020;

const children = [];
const add = (...els) => els.forEach((e) => children.push(e));

// ---------- helpers ----------
function h1(texto) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 480, after: 200 },
    children: [new TextRun({ text: texto, bold: true, size: 34, color: AZUL, font: "Calibri" })],
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: AZUL, space: 6 } },
  });
}
function h2(texto) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 340, after: 140 },
    children: [new TextRun({ text: texto, bold: true, size: 27, color: AZUL_CLARO, font: "Calibri" })],
  });
}
function h3(texto) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 240, after: 100 },
    children: [new TextRun({ text: texto, bold: true, size: 23, color: CINZA, font: "Calibri" })],
  });
}
// parágrafo com marcação simples: **negrito** e *itálico*
function runs(texto, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let ultimo = 0, m;
  while ((m = re.exec(texto)) !== null) {
    if (m.index > ultimo) out.push(new TextRun({ text: texto.slice(ultimo, m.index), ...base }));
    const t = m[0];
    if (t.startsWith("**")) out.push(new TextRun({ text: t.slice(2, -2), bold: true, ...base }));
    else out.push(new TextRun({ text: t.slice(1, -1), italics: true, ...base }));
    ultimo = m.index + t.length;
  }
  if (ultimo < texto.length) out.push(new TextRun({ text: texto.slice(ultimo), ...base }));
  return out;
}
function p(texto, opts = {}) {
  return new Paragraph({
    spacing: { after: 140, line: 276 },
    alignment: AlignmentType.JUSTIFIED,
    children: runs(texto, { size: 22, font: "Calibri", color: "1A1A1A", ...(opts.run || {}) }),
    ...opts.par,
  });
}
function li(texto, nivel = 0) {
  return new Paragraph({
    numbering: { reference: "bul", level: nivel },
    spacing: { after: 70, line: 276 },
    children: runs(texto, { size: 22, font: "Calibri", color: "1A1A1A" }),
  });
}
function ol(texto, nivel = 0) {
  return new Paragraph({
    numbering: { reference: "num", level: nivel },
    spacing: { after: 70, line: 276 },
    children: runs(texto, { size: 22, font: "Calibri", color: "1A1A1A" }),
  });
}
function citacao(texto, autor) {
  const kids = [new Paragraph({
    spacing: { before: 60, after: autor ? 40 : 60, line: 276 },
    children: runs(texto, { size: 22, font: "Calibri", italics: true, color: "333333" }),
  })];
  if (autor) kids.push(new Paragraph({
    spacing: { after: 60 },
    children: [new TextRun({ text: "— " + autor, size: 20, font: "Calibri", color: CINZA })],
  }));
  return new Table({
    columnWidths: [LARGURA],
    width: { size: LARGURA, type: WidthType.DXA },
    borders: {
      top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE }, insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: { style: BorderStyle.NONE },
      left: { style: BorderStyle.SINGLE, size: 18, color: DOURADO },
    },
    rows: [new TableRow({
      children: [new TableCell({
        width: { size: LARGURA, type: WidthType.DXA },
        margins: { top: 120, bottom: 120, left: 220, right: 160 },
        children: kids,
      })],
    })],
  });
}
function caixa(titulo, linhas) {
  const kids = [new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text: titulo, bold: true, size: 22, font: "Calibri", color: DOURADO })],
  })];
  linhas.forEach((l) => kids.push(new Paragraph({
    spacing: { after: 80, line: 276 },
    alignment: AlignmentType.JUSTIFIED,
    children: runs(l, { size: 21, font: "Calibri", color: "2A2A2A" }),
  })));
  return new Table({
    columnWidths: [LARGURA],
    width: { size: LARGURA, type: WidthType.DXA },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 6, color: DOURADO },
      bottom: { style: BorderStyle.SINGLE, size: 6, color: DOURADO },
      left: { style: BorderStyle.SINGLE, size: 6, color: DOURADO },
      right: { style: BorderStyle.SINGLE, size: 6, color: DOURADO },
    },
    rows: [new TableRow({
      children: [new TableCell({
        width: { size: LARGURA, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: FUNDO_CAIXA },
        margins: { top: 160, bottom: 160, left: 200, right: 200 },
        children: kids,
      })],
    })],
  });
}
function tabela(cabecalhos, linhas, larguras) {
  const w = larguras || cabecalhos.map(() => Math.floor(LARGURA / cabecalhos.length));
  const dif = LARGURA - w.reduce((a, b) => a + b, 0);
  w[w.length - 1] += dif;
  const cab = new TableRow({
    tableHeader: true,
    children: cabecalhos.map((c, i) => new TableCell({
      width: { size: w[i], type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: FUNDO_CAB },
      margins: { top: 90, bottom: 90, left: 130, right: 130 },
      children: [new Paragraph({
        children: [new TextRun({ text: c, bold: true, size: 20, font: "Calibri", color: "FFFFFF" })],
      })],
    })),
  });
  const corpo = linhas.map((linha, idx) => new TableRow({
    children: linha.map((cel, i) => new TableCell({
      width: { size: w[i], type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: idx % 2 ? "FFFFFF" : FUNDO_ZEBRA },
      margins: { top: 90, bottom: 90, left: 130, right: 130 },
      children: [new Paragraph({
        spacing: { line: 260 },
        children: runs(String(cel), { size: 20, font: "Calibri", color: "1A1A1A" }),
      })],
    })),
  }));
  return new Table({
    columnWidths: w,
    width: { size: LARGURA, type: WidthType.DXA },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: "B8C4D9" },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: "B8C4D9" },
      left: { style: BorderStyle.SINGLE, size: 4, color: "B8C4D9" },
      right: { style: BorderStyle.SINGLE, size: 4, color: "B8C4D9" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: "D6DEEA" },
      insideVertical: { style: BorderStyle.SINGLE, size: 2, color: "D6DEEA" },
    },
    rows: [cab, ...corpo],
  });
}
function esp(n = 1) {
  return new Paragraph({ spacing: { after: 120 * n }, children: [new TextRun({ text: "" })] });
}
function quebra() {
  return new Paragraph({ children: [new PageBreak()] });
}
function legenda(texto) {
  return new Paragraph({
    spacing: { before: 80, after: 200 },
    children: runs(texto, { size: 18, font: "Calibri", color: CINZA, italics: true }),
  });
}

module.exports = {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, PageBreak,
  LevelFormat, TableOfContents, BorderStyle, WidthType, ShadingType,
  children, add, h1, h2, h3, p, li, ol, citacao, caixa, tabela, esp, quebra, legenda, runs,
  AZUL, AZUL_CLARO, CINZA, DOURADO, LARGURA,
};
