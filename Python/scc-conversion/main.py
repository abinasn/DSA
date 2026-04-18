import sys
from pathlib import Path

from pycaption import WebVTTReader, SCCWriter


def convert(input_path: str, output_path: str) -> None:

    vtt_content = Path(input_path).read_text(encoding="utf-8")
    caption_set = WebVTTReader().read(vtt_content)
    scc_output = SCCWriter().write(caption_set)
    Path(output_path).write_text(scc_output, encoding="utf-8")
    print(f"✓ Converted {input_path} -> {output_path}")


if __name__ == "__main__":
    input_file = sys.argv[1] if len(sys.argv) > 1 else "input.vtt"
    output_file = sys.argv[2] if len(sys.argv) > 2 else "output.scc"
    convert(input_file, output_file)
