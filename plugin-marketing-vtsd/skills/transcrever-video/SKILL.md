---
name: transcrever-video
description: Transcreve vídeos e áudios localmente com faster-whisper, sem API e sem custo, gerando markdown com timestamps e legenda .srt. Use para transcrever aulas, seus vídeos do YouTube, gravações de call, ou anúncios de referência para virar swipe file de copy. Gatilhos "transcrever", "transcrição", "legenda", "srt", "o que esse vídeo fala", "extrair texto do vídeo", "transcreve essa aula", "transcreve esse reel".
---

# Transcrever vídeo/áudio localmente

Roda 100% na máquina com `faster-whisper`. **Sem API key, sem custo, sem enviar nada para fora.**

## Comando

```bash
python ".claude/skills/transcrever-video/transcrever.py" "<arquivo_ou_pasta>" --modelo small --idioma pt --saida "vtsd/transcricoes"
```

Interpretador (o `faster-whisper` está neste venv):

```
C:\Users\leo01\AppData\Local\hermes\hermes-agent\venv\Scripts\python.exe
```

### Parâmetros

| Flag | Padrão | Observação |
|---|---|---|
| `--modelo` | `small` | `tiny`, `base`, `small`, `medium`, `large-v3` |
| `--idioma` | `pt` | código ISO; omita para detecção automática |
| `--saida` | ao lado do original | pasta de destino |

Aceita **arquivo ou pasta** (varre recursivamente `.mp4 .mkv .mov .avi .webm .mp3 .m4a .wav .flac .ogg`).

### Escolha do modelo

| Modelo | Velocidade | Quando usar |
|---|---|---|
| `small` | ~3x tempo real (CPU) | Padrão. Ótimo para português claro. |
| `medium` | ~1x tempo real | Áudio ruim, muito jargão técnico, sotaque forte |
| `large-v3` | lento | Só quando precisa de precisão máxima |

O modelo é baixado na primeira execução e fica em cache (`~/.cache/huggingface`).

## Saída

Para cada arquivo, dois produtos ao lado:

- **`.md`** — cabeçalho (idioma, confiança, duração) + texto com timestamps `**[00:01:23]**`
- **`.srt`** — legenda pronta para subir no YouTube ou editor

## Casos de uso

### 1. Transcrever seus próprios vídeos do YouTube
Vira matéria-prima para Reels, carrossel, e-mail e seções de página de vendas. O conteúdo já
está gravado — transcrever é reaproveitar.

### 2. Swipe file de anúncios
Transcreva os anúncios de referência em
`vtsd/materiais/Modulo05/ReferenciasdeCopy/13.Anunciosdedescoberta/` e
`14.Relacionamento/` para estudar o **gancho** em texto. Combine com a skill `anuncios-meta`
para classificar cada um por anatomia e limitação criativa.

### 3. Aulas e calls
Qualquer arquivo local de aula, mentoria ou reunião gravada.

## Baixar vídeo antes de transcrever

Para vídeo público (YouTube, etc.), `yt-dlp` já está instalado — baixe só o áudio, é bem
mais rápido:

```bash
yt-dlp -x --audio-format mp3 -o "%(title)s.%(ext)s" "<url>"
```

> **Não use isto para conteúdo protegido por login/DRM de plataforma paga.** Os vídeos do
> Hotmart Club têm marca d'água com o ID do usuário e os Termos de Uso proíbem download.
> Para o curso VTSD, use as **apostilas e mapas mentais em PDF** já baixados em
> `vtsd/materiais/` — são o mesmo conteúdo já editado e estruturado, e melhores para consulta.

## Depois de transcrever

A transcrição bruta é insumo, não entregável. Passe por uma das skills:

- `pagina-de-vendas` — virar seção de PV
- `anuncios-meta` — virar gancho e roteiro de anúncio
- `conteudo-organico` — virar Reel, carrossel ou linha editorial
