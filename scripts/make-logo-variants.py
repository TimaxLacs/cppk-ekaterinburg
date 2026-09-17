#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path("/workspace")
SRC_SIGNET = ROOT / "public/brand/logo/signet-navy-800.png"
SRC_LOCKUP = ROOT / "public/brand/logo/logo-ekb-800.png"
OUT = ROOT / "public/brand/logo/variants"
COVERS = ROOT / "public/brand/channels"
NAVY = (0, 16, 40)
GOLD = (196, 154, 58)
CREAM = (247, 243, 232)
WHITE = (255, 255, 255)
TEAL = (8, 92, 94)
GRAPHITE = (36, 42, 48)
BLACK = (10, 10, 10)
WINE = (78, 22, 28)


def remap(src: Path, dest: Path, bg: tuple[int, int, int], accent: tuple[int, int, int], fill: tuple[int, int, int]) -> None:
    arr = np.asarray(Image.open(src).convert("RGB"), dtype=np.float32)
    navy = np.array(NAVY, dtype=np.float32)
    gold = np.array([222.0, 163.0, 10.0], dtype=np.float32)
    cream = np.array([243.0, 233.0, 212.0], dtype=np.float32)
    d_n = np.linalg.norm(arr - navy, axis=2)
    d_g = np.linalg.norm(arr - gold, axis=2)
    d_c = np.linalg.norm(arr - cream, axis=2)
    stack = np.stack([d_n, d_g, d_c], axis=2)
    inv = 1.0 / np.clip(stack, 6.0, None)
    w = inv / inv.sum(axis=2, keepdims=True)
    palette = np.array([bg, accent, fill], dtype=np.float32)
    out = w @ palette
    Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), "RGB").save(dest, optimize=True)


def cover(dest: Path, bg: tuple[int, int, int], lockup: Path, signet: Path) -> None:
    w, h = 1590, 400
    img = Image.new("RGB", (w, h), bg)
    mark = Image.open(lockup).convert("RGB").resize((380, 380), Image.Resampling.LANCZOS)
    badge = Image.open(signet).convert("RGB").resize((320, 320), Image.Resampling.LANCZOS)
    img.paste(mark, (80, 10))
    img.paste(badge, (1180, 40))
    img.save(dest, optimize=True)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    COVERS.mkdir(parents=True, exist_ok=True)

    remap(SRC_SIGNET, OUT / "signet-navy-gold.png", NAVY, GOLD, CREAM)
    remap(SRC_SIGNET, OUT / "signet-cream-navy.png", CREAM, NAVY, NAVY)
    remap(SRC_SIGNET, OUT / "signet-white-navy.png", WHITE, NAVY, NAVY)
    remap(SRC_SIGNET, OUT / "signet-gold-navy.png", GOLD, NAVY, CREAM)
    remap(SRC_SIGNET, OUT / "signet-teal-cream.png", TEAL, CREAM, CREAM)
    remap(SRC_SIGNET, OUT / "signet-black-white.png", BLACK, WHITE, WHITE)
    remap(SRC_SIGNET, OUT / "signet-white-gold.png", WHITE, GOLD, GOLD)
    remap(SRC_SIGNET, OUT / "signet-graphite-gold.png", GRAPHITE, GOLD, CREAM)
    remap(SRC_SIGNET, OUT / "signet-navy-white.png", NAVY, WHITE, WHITE)
    remap(SRC_SIGNET, OUT / "signet-cream-gold.png", CREAM, GOLD, NAVY)
    remap(SRC_SIGNET, OUT / "signet-wine-gold.png", WINE, GOLD, CREAM)

    remap(SRC_LOCKUP, OUT / "logo-ekb-navy.png", NAVY, GOLD, CREAM)
    remap(SRC_LOCKUP, OUT / "logo-ekb-cream.png", CREAM, GOLD, NAVY)
    remap(SRC_LOCKUP, OUT / "logo-ekb-gold.png", GOLD, NAVY, NAVY)
    remap(SRC_LOCKUP, OUT / "logo-ekb-white.png", WHITE, NAVY, NAVY)
    remap(SRC_LOCKUP, OUT / "logo-ekb-teal.png", TEAL, CREAM, CREAM)
    remap(SRC_LOCKUP, OUT / "logo-ekb-black.png", BLACK, GOLD, CREAM)
    remap(SRC_LOCKUP, OUT / "logo-ekb-graphite.png", GRAPHITE, GOLD, CREAM)
    remap(SRC_LOCKUP, OUT / "logo-ekb-wine.png", WINE, GOLD, CREAM)

    cover(COVERS / "cover-ekb-navy.png", NAVY, OUT / "logo-ekb-navy.png", OUT / "signet-navy-gold.png")
    cover(COVERS / "cover-ekb-cream.png", CREAM, OUT / "logo-ekb-cream.png", OUT / "signet-cream-navy.png")
    cover(COVERS / "cover-ekb-gold.png", GOLD, OUT / "logo-ekb-gold.png", OUT / "signet-gold-navy.png")
    print("variants ready")


if __name__ == "__main__":
    main()
