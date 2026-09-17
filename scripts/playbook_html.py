from __future__ import annotations

import html
import json
import subprocess
from pathlib import Path

ROOT = Path("/workspace")


def esc(text: str) -> str:
    return html.escape(text, quote=True)


def copy_block(label: str, value: str, height: str = "120px") -> str:
    return (
        f"<label>{esc(label)}</label>"
        f'<textarea class="copy" readonly style="min-height:{height}">{esc(value)}</textarea>'
        '<button class="btn" type="button" onclick="copyPrev(this)">Копировать</button>'
    )


def load_playbook() -> dict:
    out_dir = Path("/tmp/ekb-playbook-js")
    out_dir.mkdir(parents=True, exist_ok=True)
    tsc = ROOT / "node_modules/.bin/tsc"
    cmd = [
        str(tsc) if tsc.exists() else "npx",
        str(ROOT / "src/data/ekb-playbook.ts"),
        str(ROOT / "src/data/map-edit.ts"),
        str(ROOT / "src/data/ekb.ts"),
        str(ROOT / "src/data/oformlenie.ts"),
        "--outDir",
        str(out_dir),
        "--module",
        "commonjs",
        "--target",
        "es2017",
        "--skipLibCheck",
    ]
    if not tsc.exists():
        cmd = ["npx", "--yes", "tsc", *cmd[1:]]
    subprocess.check_call(cmd, cwd=str(ROOT))
    script = (
        "const a=require('./ekb-playbook.js');"
        "const b=require('./map-edit.js');"
        "const c=require('./ekb.js');"
        "const d=require('./oformlenie.js');"
        "process.stdout.write(JSON.stringify({...a,...b,...c,...d}))"
    )
    raw = subprocess.check_output(["node", "-e", script], cwd=str(out_dir))
    return json.loads(raw)


def render_start(playbook: dict) -> str:
    chunks = [
        '<h2 id="start">2. Порядок запуска</h2>',
        "<ol>",
    ]
    for item in playbook["ekbLaunchOrder"]:
        chunks.append(f"<li>{esc(item)}</li>")
    chunks.append("</ol>")
    market = playbook["ekbMarket"]
    chunks.append('<div class="grid g2">')
    chunks.append(f'<article class="card"><h3>Аудитория</h3><p>{esc(market["audience"])}</p></article>')
    chunks.append(f'<article class="card"><h3>Рынок</h3><p>{esc(market["size"])}</p></article>')
    chunks.append(f'<article class="card"><h3>Чем отличается филиал</h3><p>{esc(market["advantage"])}</p></article>')
    chunks.append('<article class="card"><h3>Конкуренты</h3><ul>')
    for item in market["competitors"]:
        chunks.append(f"<li>{esc(item)}</li>")
    chunks.append("</ul></article></div>")
    chunks.append("<p><strong>Не делать</strong></p><ul>")
    for item in playbook["ekbDoNot"]:
        chunks.append(f"<li>{esc(item)}</li>")
    chunks.append("</ul>")
    return "\n".join(chunks)


def kit_for(playbook: dict, platform: str) -> dict | None:
    for kit in playbook.get("socialKits", []):
        if kit["platform"] == platform:
            return kit
    return None


def render_channels(playbook: dict) -> str:
    chunks = ['<h2 id="kanaly">7. Каналы: шапки и ведение</h2>']
    for channel in playbook["ekbChannels"]:
        cid = channel["id"]
        kit = kit_for(playbook, channel["platform"])
        chunks.append(f'<h3 id="channel-{esc(cid)}">{esc(channel["platform"])}: {esc(channel["title"])}</h3>')
        chunks.append(f'<p>{esc(channel["role"])}</p>')
        if kit:
            chunks.append(copy_block("Название", kit["name"], "56px"))
            chunks.append(copy_block("Адрес / юзернейм", kit["handle"], "56px"))
            if kit.get("status"):
                chunks.append(copy_block("Статус", kit["status"], "56px"))
            chunks.append(copy_block("Описание", kit["description"], "160px"))
            chunks.append(copy_block("Закреп", kit["pin"], "180px"))
            if kit.get("buttons"):
                chunks.append("<p>Кнопки: " + ", ".join(esc(b) for b in kit["buttons"]) + "</p>")
        chunks.append('<div class="grid g2">')
        for title, key in (
            ("Кто читает", "audience"),
            ("Зачем канал", "goal"),
            ("Почему не дубль", "why"),
            ("Слоты", "slots"),
        ):
            chunks.append(
                f'<article class="card"><h3>{esc(title)}</h3><p>{esc(channel[key])}</p></article>'
            )
        chunks.append("</div>")
        chunks.append(f'<p><strong>Ритм.</strong> {esc(channel["cadence"])}</p>')
        chunks.append("<ul>")
        for item in channel["notFor"]:
            chunks.append(f"<li>{esc(item)}</li>")
        chunks.append("</ul>")
        if cid == "vk":
            chunks.append('<div class="grid g3">')
            for item in playbook["ekbVkFormats"]:
                chunks.append(
                    f'<article class="card"><h3>{esc(item["name"])}</h3><p>{esc(item["how"])}</p></article>'
                )
            chunks.append("</div>")
            chunks.append("<p><strong>Шапка первой недели</strong></p><ul>")
            for item in playbook.get("ekbVkHousekeeping", []):
                chunks.append(f"<li>{esc(item)}</li>")
            chunks.append("</ul>")
        chunks.append('<table class="week"><thead><tr><th>День</th><th>Стена / канал</th><th>Дополнительно</th></tr></thead><tbody>')
        for row in channel["week"]:
            chunks.append(
                f'<tr><td>{esc(row["day"])}</td><td>{esc(row["wall"])}</td><td>{esc(row["extra"])}</td></tr>'
            )
        chunks.append("</tbody></table>")
        for post in channel["firstPosts"]:
            chunks.append(copy_block(post["title"], post["text"], "160px"))
        chunks.append("<ul>")
        for item in channel["moderation"]:
            chunks.append(f"<li>{esc(item)}</li>")
        chunks.append("</ul>")
        chunks.append(copy_block("UTM на сайт", channel["utm"], "64px"))
    return "\n".join(chunks)


def render_posts(playbook: dict) -> str:
    chunks = [
        '<h2 id="posty">8. Типы постов сообщества</h2>',
        "<p>Десять рубрик. Цену не подставлять из памяти. Источник правила указывать в тексте.</p>",
        '<div class="grid g3">',
    ]
    for item in playbook["ekbContentMix"]:
        chunks.append(
            f'<article class="card"><h3>{esc(str(item["value"]))}%</h3><p>{esc(item["label"])}</p></article>'
        )
    chunks.append("</div>")
    for item in playbook["ekbPostTypes"]:
        chunks.append(f'<article class="card" id="post-{esc(item["id"])}">')
        chunks.append(f'<h3>{esc(item["name"])} · {esc(item["line"])}</h3>')
        chunks.append(f'<p>{esc(item["purpose"])}</p>')
        chunks.append(f'<p class="note">Когда: {esc(item["when"])}. Кадр: {esc(item["photo"])}</p>')
        vk_text = f'{item["vk"]["title"]}\n\n{item["vk"]["text"]}'
        chunks.append('<div class="grid g3">')
        chunks.append(
            "<div>"
            f'<p><strong>ВКонтакте.</strong> {esc(item["vk"]["format"])}</p>'
            f'{copy_block("Текст ВК", vk_text, "180px")}'
            "</div>"
        )
        chunks.append(
            "<div>"
            f'<p><strong>Telegram.</strong> {esc(item["telegram"]["format"])}</p>'
            f'{copy_block("Текст Telegram", item["telegram"]["text"], "180px")}'
            "</div>"
        )
        chunks.append(
            "<div>"
            f'<p><strong>MAX.</strong> {esc(item["max"]["format"])}</p>'
            f'{copy_block("Текст MAX", item["max"]["text"], "180px")}'
            "</div>"
        )
        chunks.append("</div></article>")
    chunks.append('<h3>Одна тема, три формата</h3>')
    chunks.append('<table class="week"><thead><tr><th>Тема</th><th>ВК</th><th>Telegram</th><th>MAX</th></tr></thead><tbody>')
    for row in playbook["ekbAdaptation"]:
        chunks.append(
            f'<tr><td>{esc(row["theme"])}</td><td>{esc(row["vk"])}</td>'
            f'<td>{esc(row["telegram"])}</td><td>{esc(row["max"])}</td></tr>'
        )
    chunks.append("</tbody></table>")
    return "\n".join(chunks)


def render_map_promo(playbook: dict) -> str:
    promo = playbook["ekbMapPromo"]
    chunks = [
        f'<p>{esc(promo["why"])}</p>',
        "<ul>",
    ]
    for item in promo["rules"]:
        chunks.append(f"<li>{esc(item)}</li>")
    chunks.append("</ul>")
    chunks.append('<div class="grid g3">')
    for item in promo["reviews"]:
        chunks.append(
            f'<article class="card"><h3>{esc(item["q"])}</h3><p>{esc(item["a"])}</p></article>'
        )
    chunks.append("</div>")
    return "\n".join(chunks)


def render_map_edit(playbook: dict) -> str:
    chunks = [
        '<h2 id="kak-pravit">6. Как поменять инфу на каждой карте</h2>',
        "<p>Сначала забрать права. Потом править поля. Кабинет и автодром в каждом сервисе это две заявки.</p>",
        "<p><strong>Что держать под рукой</strong></p><ul>",
    ]
    for item in playbook["mapEditDocs"]:
        chunks.append(f"<li>{esc(item)}</li>")
    chunks.append("</ul>")
    for guide in playbook["mapEditGuides"]:
        chunks.append(f'<h3 id="map-edit-{esc(guide["id"])}">{esc(guide["name"])}</h3>')
        chunks.append(
            f'<p><a href="{esc(guide["cabinetUrl"])}">Кабинет владельца</a> · '
            f'<a href="{esc(guide["mapsUrl"])}">Карты</a> · '
            f'<a href="{esc(guide["helpUrl"])}">Справка</a></p>'
        )
        chunks.append("<p><strong>Как найти карточку</strong></p><ul>")
        for item in guide["find"]:
            chunks.append(f"<li>{esc(item)}</li>")
        chunks.append("</ul><p><strong>Как забрать права</strong></p><ol>")
        for item in guide["claim"]:
            chunks.append(f"<li>{esc(item)}</li>")
        chunks.append("</ol><p><strong>Где нажать, чтобы поменять инфу</strong></p><ol>")
        for item in guide["edit"]:
            chunks.append(f"<li>{esc(item)}</li>")
        chunks.append("</ol>")
        for row in guide["fields"]:
            chunks.append(f'<article class="card"><h3>{esc(row["field"])}</h3>')
            chunks.append(copy_block("Кабинет, 8 Марта", row["cabinet"], "72px"))
            chunks.append(copy_block("Автодром, Петрова", row["autodrome"], "72px"))
            chunks.append("</article>")
        chunks.append("<p><strong>Если доступа владельца ещё нет</strong></p><ul>")
        for item in guide["noAccess"]:
            chunks.append(f"<li>{esc(item)}</li>")
        chunks.append("</ul>")
    return "\n".join(chunks)
