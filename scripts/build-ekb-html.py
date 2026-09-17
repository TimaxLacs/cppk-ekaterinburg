#!/usr/bin/env python3
from __future__ import annotations

import html
from pathlib import Path
import sys

from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from playbook_html import load_playbook, render_channels, render_map_edit, render_map_promo, render_posts, render_start

ROOT = Path("/workspace")
PUBLIC = ROOT / "public"
OUT_PUBLIC = PUBLIC / "oformlenie.html"
OUT_ROOT = ROOT / "oformlenie.html"


def data_uri(path: Path, max_side: int = 720, quality: int = 82) -> str:
    img = Image.open(path).convert("RGBA")
    w, h = img.size
    scale = min(1.0, max_side / max(w, h))
    if scale < 1:
        img = img.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", img.size, (247, 243, 232))
    canvas.paste(img, mask=img.split()[-1])
    from io import BytesIO
    import base64

    buf = BytesIO()
    canvas.save(buf, format="JPEG", quality=quality, optimize=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode("ascii")


def esc(text: str) -> str:
    return html.escape(text, quote=True)


def img_tag(src: str, alt: str, cls: str = "img") -> str:
    return f'<img class="{cls}" src="{src}" alt="{esc(alt)}" />'


SIGNETS = [
    ("signet-navy-gold.png", "Тёмный круг, золотой знак", "Основной для аватара ВК, Telegram и MAX."),
    ("signet-cream-navy.png", "Светлый круг, тёмный знак", "Для белых обложек и печати."),
    ("signet-white-navy.png", "Белый круг, тёмный знак", "Если фон тёмный, знак должен остаться читаемым."),
    ("signet-gold-navy.png", "Золотой круг, тёмный знак", "Для обложки и праздничных материалов."),
    ("signet-navy-white.png", "Тёмный круг, белый знак", "Если золото на экране плохо читается."),
    ("signet-cream-gold.png", "Светлый круг, золотой знак", "Для светлой полиграфии с акцентом."),
    ("signet-white-gold.png", "Белый круг, золотой знак", "Для тёмной обложки ВК."),
    ("signet-graphite-gold.png", "Графит, золотой знак", "Запасной тёмный вариант."),
    ("signet-teal-cream.png", "Бирюзовый круг, светлый знак", "Дополнительный цвет. Не ставить основным."),
    ("signet-wine-gold.png", "Бордовый круг, золотой знак", "Праздничный запасной цвет."),
    ("signet-black-white.png", "Чёрный круг, белый знак", "Для одноцветной печати."),
]

LOCKUPS = [
    ("logo-ekb-navy.png", "Тёмная плашка", "Если в кадре должно быть имя филиала."),
    ("logo-ekb-cream.png", "Светлая плашка", "Для печати и светлых макетов."),
    ("logo-ekb-gold.png", "Золотая плашка", "Акцент. Не ставить в мелкий аватар."),
    ("logo-ekb-white.png", "Белая плашка", "Для тёмного фона."),
    ("logo-ekb-graphite.png", "Графитовая плашка", "Запасной тёмный вариант с названием."),
    ("logo-ekb-black.png", "Чёрная плашка", "Для одноцветной тёмной печати."),
    ("logo-ekb-teal.png", "Бирюзовая плашка", "Дополнительный цвет."),
    ("logo-ekb-wine.png", "Бордовая плашка", "Праздничный запасной цвет."),
]

COVERS = [
    ("cover-ekb-navy.png", "Обложка ВК, тёмная", "Основная шапка сообщества."),
    ("cover-ekb-cream.png", "Обложка ВК, светлая", "Если лента светлая и нужен спокойный фон."),
    ("cover-ekb-gold.png", "Обложка ВК, золотая", "Акцент. Проверить обрезку в редакторе ВК."),
]


def main() -> None:
    playbook = load_playbook()
    uris: dict[str, str] = {}
    for name, _, _ in SIGNETS + LOCKUPS:
        uris[name] = data_uri(PUBLIC / "brand/logo/variants" / name)
    for name, _, _ in COVERS:
        uris[name] = data_uri(PUBLIC / "brand/channels" / name, max_side=1100, quality=80)

    signet_cards = []
    for name, title, note in SIGNETS:
        signet_cards.append(
            f'<article class="card"><div class="ph">{img_tag(uris[name], title, "logo")}</div>'
            f"<h3>{esc(title)}</h3><p>{esc(note)}</p>"
            f"<p class=\"file\">public/brand/logo/variants/{esc(name)}</p></article>"
        )

    lockup_cards = []
    for name, title, note in LOCKUPS:
        lockup_cards.append(
            f'<article class="card"><div class="ph">{img_tag(uris[name], title, "logo")}</div>'
            f"<h3>{esc(title)}</h3><p>{esc(note)}</p>"
            f"<p class=\"file\">public/brand/logo/variants/{esc(name)}</p></article>"
        )

    cover_cards = []
    for name, title, note in COVERS:
        cover_cards.append(
            f'<article class="card"><div class="ph">{img_tag(uris[name], title, "cover")}</div>'
            f"<h3>{esc(title)}</h3><p>{esc(note)}</p>"
            f"<p class=\"file\">public/brand/channels/{esc(name)}</p></article>"
        )

    maps_promo = render_map_promo(playbook)
    map_edit_html = render_map_edit(playbook)
    start_html = render_start(playbook)
    channels_html = render_channels(playbook)
    posts_html = render_posts(playbook)

    page = f"""<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>ЦППК Екатеринбург. Оформление</title>
<style>
:root {{
  --bg:#f7f3e8; --ink:#1b2430; --muted:#5c6570; --line:#d7cbb3;
  --navy:#1b3a4b; --gold:#c4a46a; --paper:#fffdf8;
}}
* {{ box-sizing:border-box; }}
html,body {{ margin:0; background:var(--bg); color:var(--ink);
  font:16px/1.55 "Source Serif 4", Georgia, serif; }}
body {{ padding:88px 16px 72px; }}
.wrap {{ max-width:980px; margin:0 auto; }}
.toc {{ position:sticky; top:0; z-index:5; margin:0 -16px 22px; padding:12px 16px; }}
.kicker {{ color:var(--gold); letter-spacing:.16em; text-transform:uppercase; font:12px/1.3 Arial,sans-serif; }}
h1,h2,h3 {{ font-family:Arial,Helvetica,sans-serif; margin:0 0 10px; }}
h1 {{ font-size:34px; line-height:1.15; }}
h2 {{ font-size:24px; margin-top:42px; }}
h3 {{ font-size:16px; }}
p,li {{ color:var(--ink); }}
.lead,.muted,.file {{ color:var(--muted); }}
.file {{ font:12px/1.4 ui-monospace,monospace; word-break:break-all; }}
.rule {{ height:1px; background:var(--line); border:0; margin:22px 0; }}
.grid {{ display:grid; gap:14px; }}
@media (min-width:720px) {{ .g2 {{ grid-template-columns:1fr 1fr; }} .g3 {{ grid-template-columns:1fr 1fr 1fr; }} }}
.card,.box {{ background:var(--paper); border:1px solid var(--line); border-radius:18px; padding:16px; }}
.ph {{ background:#ece6d6; border-radius:14px; min-height:160px; display:flex; align-items:center; justify-content:center; overflow:hidden; margin-bottom:10px; }}
.logo {{ width:100%; height:220px; object-fit:contain; display:block; }}
.cover {{ width:100%; height:140px; object-fit:cover; display:block; }}
.copy {{ width:100%; min-height:72px; border:1px solid var(--line); border-radius:10px; padding:10px; font:13px/1.45 Arial,sans-serif; background:#fff; }}
.btn {{ display:inline-block; margin-top:8px; padding:8px 12px; border-radius:999px; border:1px solid var(--navy); background:var(--navy); color:#fff; font:13px Arial,sans-serif; cursor:pointer; }}
.toc a {{ color:var(--navy); }}
iframe.map {{ width:100%; height:240px; border:0; border-radius:14px; }}
.note {{ font-size:14px; color:var(--muted); }}
table.week {{ width:100%; border-collapse:collapse; font:14px/1.45 Arial,sans-serif; margin:12px 0 22px; }}
table.week th, table.week td {{ border:1px solid var(--line); padding:8px 10px; vertical-align:top; }}
table.week th {{ background:#ece6d6; text-align:left; }}
</style>
</head>
<body>
<div class="wrap">
<p class="kicker">Филиал · Екатеринбург</p>
<h1>ЦППК Екатеринбург. Оформление кабинетов и каналов</h1>
<p class="lead">Один HTML-файл: контакты, логотипы, каналы, типы постов, карты и инструкция, как править Яндекс, 2ГИС и Google.</p>
<p class="note">Источник контактов: карточка филиала на cppkspb.ru/about, учебная часть филиала, 2ГИС.</p>

<nav class="toc box">
<ol>
<li><a href="#kontakty">Контакты</a></li>
<li><a href="#start">Порядок запуска</a></li>
<li><a href="#logo">Логотипы</a></li>
<li><a href="#foto">Фото</a></li>
<li><a href="#karty">Карты</a></li>
<li><a href="#kak-pravit">Как править карты</a></li>
<li><a href="#kanaly">Каналы</a></li>
<li><a href="#posty">Типы постов</a></li>
</ol>
</nav>

<h2 id="kontakty">1. Контакты</h2>
<div class="grid g2">
<article class="card">
<h3>Кабинет</h3>
<p>620085, г. Екатеринбург, ул. 8 Марта, д. 158, офис 207, 2 этаж</p>
<p>ekb@cppkspb.ru</p>
<p>+7 (343) 257-57-92</p>
<p>пн-чт 09:00-18:00, пт 09:00-17:00, обед 13:00-13:48</p>
</article>
<article class="card">
<h3>Автодром</h3>
<p>г. Верхняя Пышма, ул. Петрова, д. 59а</p>
<p>+7 (343) 328-29-30</p>
<p>Режим автодрома в карточку не ставить, пока филиал не подтвердит часы письменно.</p>
</article>
</div>
<article class="card" style="margin-top:14px">
<h3>Учебная часть</h3>
<p>Ксения Алексеевна</p>
<p>+7 (922) 207-83-69</p>
<p>Этот номер ставить в сообщениях об записи и в подписи канала.</p>
</article>
<p class="note">Номера 812 и почту edu@cppkspb.ru в эти карточки не копировать.</p>

{start_html}

<h2 id="logo">3. Логотипы</h2>
<p>Для аватара канала брать круглый знак без длинного названия. Плашку с текстом «ЦППК Екатеринбург» ставить на обложку, в шапку сайта и в печать.</p>
<h3>Знак</h3>
<div class="grid g3">{"".join(signet_cards)}</div>
<h3 style="margin-top:28px">Плашка с названием филиала</h3>
<div class="grid g3">{"".join(lockup_cards)}</div>
<h3 style="margin-top:28px">Обложки ВК</h3>
<div class="grid">{"".join(cover_cards)}</div>
<div class="box" style="margin-top:14px">
<p><strong>Что ставить куда</strong></p>
<ul>
<li>Аватар ВК, Telegram, MAX: тёмный круг, золотой знак.</li>
<li>Светлая обложка и печать: светлый круг, тёмный знак.</li>
<li>Тёмная обложка: белый круг, золотой знак.</li>
<li>Если имя филиала должно читаться в кадре: тёмная плашка.</li>
<li>Бирюзовый вариант не делать основным. Это запасной цвет.</li>
</ul>
</div>

<h2 id="foto">4. Фото кабинета и автодрома</h2>
<div class="grid g2">
<article class="card">
<h3>Кабинет, ул. 8 Марта, 158</h3>
<ul>
<li>Вход в здание и табличка с номером.</li>
<li>Лестница или указатель на 2 этаж.</li>
<li>Дверь офиса 207.</li>
<li>Ресепшен и зона ожидания.</li>
<li>Учебный класс без личных данных на доске.</li>
</ul>
</article>
<article class="card">
<h3>Автодром, ул. Петрова, 59а</h3>
<ul>
<li>Въезд и табличка адреса.</li>
<li>Площадка целиком.</li>
<li>Разметка и конусы.</li>
<li>Учебный автомобиль сбоку, без номеров крупным планом, если филиал не дал согласие.</li>
<li>Не снимать чужие лица без согласия.</li>
</ul>
</article>
</div>
<p class="note">Формат: горизонталь 1600 px и больше, вертикаль для историй. На фото только площадки филиала.</p>

<h2 id="karty">5. Карты</h2>
{maps_promo}
<div class="grid g2">
<article class="card">
<h3>Кабинет. Яндекс</h3>
<iframe class="map" title="Кабинет ЦППК Екатеринбург, Яндекс" src="https://yandex.ru/map-widget/v1/?ll=60.610800,56.808400&z=16&pt=60.610800,56.808400,pm2rdm&l=map"></iframe>
<p><a href="https://yandex.ru/maps/?ll=60.610800,56.808400&z=16&text={esc('Екатеринбург, ул. 8 Марта, д. 158')}">Открыть в Яндекс.Картах</a></p>
</article>
<article class="card">
<h3>Кабинет. Google</h3>
<iframe class="map" title="Кабинет ЦППК Екатеринбург, Google" src="https://maps.google.com/maps?q=56.8084,60.6108&z=16&output=embed"></iframe>
<p><a href="https://www.google.com/maps/search/?api=1&query={esc('Екатеринбург, ул. 8 Марта, д. 158')}">Открыть в Google Maps</a></p>
</article>
<article class="card">
<h3>Кабинет. 2ГИС</h3>
<p>Екатеринбург, ул. 8 Марта, д. 158, офис 207, 2 этаж.</p>
<p><a href="https://2gis.ru/ekaterinburg/firm/1267165676267616">2gis.ru/ekaterinburg/firm/1267165676267616</a></p>
<p>Если в описании ещё указан автодром на 8 Марта, убрать эту строку.</p>
</article>
<article class="card">
<h3>Автодром. Яндекс</h3>
<iframe class="map" title="Автодром ЦППК Верхняя Пышма, Яндекс" src="https://yandex.ru/map-widget/v1/?ll=60.618000,56.954200&z=16&pt=60.618000,56.954200,pm2rdm&l=map"></iframe>
<p><a href="https://yandex.ru/maps/?ll=60.618000,56.954200&z=16&text={esc('Верхняя Пышма, ул. Петрова, д. 59а')}">Открыть в Яндекс.Картах</a></p>
</article>
<article class="card">
<h3>Автодром. Google</h3>
<iframe class="map" title="Автодром ЦППК Верхняя Пышма, Google" src="https://maps.google.com/maps?q=56.9542,60.618&z=16&output=embed"></iframe>
<p><a href="https://www.google.com/maps/search/?api=1&query={esc('Верхняя Пышма, ул. Петрова, д. 59а')}">Открыть в Google Maps</a></p>
</article>
<article class="card">
<h3>Автодром. 2ГИС</h3>
<p>г. Верхняя Пышма, ул. Петрова, д. 59а.</p>
<p><a href="https://2gis.ru/verhnyaya-pyshma/firm/70000001006981186">2gis.ru/verhnyaya-pyshma/firm/70000001006981186</a></p>
<p>На карточке писать Верхнюю Пышму, не только Екатеринбург.</p>
</article>
</div>
<div class="box" style="margin-top:14px">
<p><strong>Что сделать владельцу</strong></p>
<ol>
<li>Яндекс Бизнес: подтвердить кабинет, добавить фото, телефон +7 (343) 257-57-92, почту ekb@cppkspb.ru, часы кабинета.</li>
<li>Там же завести или подтвердить точку автодрома: Верхняя Пышма, Петрова, 59а, телефон +7 (343) 328-29-30. Часы не писать.</li>
<li>2ГИС: в кабинете поправить описание, если там ещё указан автодром на 8 Марта. Автодром должен вести на Петрова, 59а.</li>
<li>Google Business: две карточки с теми же адресами. Без петербургских телефонов.</li>
</ol>
</div>

{map_edit_html}

{channels_html}
{posts_html}

<hr class="rule" />
<p class="note">Цены, часы автодрома и чужие адреса не добавлять. Если данные изменятся, править этот файл и карточки карт в один день.</p>
</div>
<script>
function copyPrev(btn) {{
  const field = btn.previousElementSibling;
  field.select();
  navigator.clipboard.writeText(field.value);
  btn.textContent = "Скопировано";
  setTimeout(() => btn.textContent = "Копировать", 1200);
}}
</script>
</body>
</html>
"""
    OUT_PUBLIC.write_text(page, encoding="utf-8")
    OUT_ROOT.write_text(page, encoding="utf-8")
    print(f"wrote {OUT_PUBLIC} ({OUT_PUBLIC.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
