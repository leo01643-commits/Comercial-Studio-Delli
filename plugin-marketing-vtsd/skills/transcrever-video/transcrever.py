#!/usr/bin/env python3
"""
Transcricao local de video/audio com faster-whisper. Sem API, sem custo.

Uso:
    python transcrever.py <arquivo_ou_pasta> [--modelo small] [--idioma pt] [--saida DIR]

Aceita qualquer formato que o ffmpeg leia (mp4, mkv, mov, mp3, m4a, wav, webm).
Gera um .md com texto corrido e um .srt com marcacao de tempo, ao lado do original
ou em --saida.
"""
import argparse
import pathlib
import sys
import time

EXTS = {".mp4", ".mkv", ".mov", ".avi", ".webm", ".mp3", ".m4a", ".wav", ".flac", ".ogg"}


def hhmmss(seconds: float, sep: str = ",") -> str:
    ms = int(round(seconds * 1000))
    h, ms = divmod(ms, 3600000)
    m, ms = divmod(ms, 60000)
    s, ms = divmod(ms, 1000)
    return f"{h:02d}:{m:02d}:{s:02d}{sep}{ms:03d}"


def transcrever(caminho: pathlib.Path, modelo, idioma: str, saida: pathlib.Path):
    inicio = time.time()
    segmentos, info = modelo.transcribe(
        str(caminho),
        language=idioma or None,
        vad_filter=True,
        vad_parameters={"min_silence_duration_ms": 500},
        beam_size=5,
    )

    linhas_md, linhas_srt = [], []
    for i, seg in enumerate(segmentos, 1):
        texto = seg.text.strip()
        if not texto:
            continue
        linhas_md.append(f"**[{hhmmss(seg.start, '.')[:-4]}]** {texto}")
        linhas_srt.append(
            f"{i}\n{hhmmss(seg.start)} --> {hhmmss(seg.end)}\n{texto}\n"
        )

    saida.mkdir(parents=True, exist_ok=True)
    base = saida / caminho.stem

    corpo = "\n\n".join(linhas_md)
    cabecalho = (
        f"# {caminho.stem}\n\n"
        f"- Arquivo: `{caminho.name}`\n"
        f"- Idioma detectado: {info.language} "
        f"(confianca {info.language_probability:.2f})\n"
        f"- Duracao: {hhmmss(info.duration, '.')[:-4]}\n\n---\n\n"
    )
    base.with_suffix(".md").write_text(cabecalho + corpo, encoding="utf-8")
    base.with_suffix(".srt").write_text("\n".join(linhas_srt), encoding="utf-8")

    dur = time.time() - inicio
    print(
        f"OK  {caminho.name}  ->  {base.with_suffix('.md').name}  "
        f"({len(linhas_md)} segmentos, {dur:.0f}s)"
    )


def main():
    p = argparse.ArgumentParser()
    p.add_argument("alvo", help="arquivo ou pasta")
    p.add_argument("--modelo", default="small",
                   help="tiny, base, small, medium, large-v3 (padrao: small)")
    p.add_argument("--idioma", default="pt", help="codigo do idioma, ex: pt (padrao: pt)")
    p.add_argument("--saida", default=None, help="pasta de saida")
    args = p.parse_args()

    alvo = pathlib.Path(args.alvo)
    if not alvo.exists():
        sys.exit(f"ERRO: nao encontrado: {alvo}")

    arquivos = (
        [alvo] if alvo.is_file()
        else sorted(f for f in alvo.rglob("*") if f.suffix.lower() in EXTS)
    )
    if not arquivos:
        sys.exit("ERRO: nenhum arquivo de midia encontrado")

    from faster_whisper import WhisperModel

    print(f"Carregando modelo '{args.modelo}' (primeira vez baixa o modelo)...")
    modelo = WhisperModel(args.modelo, device="cpu", compute_type="int8")
    print(f"{len(arquivos)} arquivo(s) para transcrever.\n")

    for f in arquivos:
        destino = pathlib.Path(args.saida) if args.saida else f.parent
        try:
            transcrever(f, modelo, args.idioma, destino)
        except Exception as e:
            print(f"FALHA  {f.name}: {e}")


if __name__ == "__main__":
    main()
