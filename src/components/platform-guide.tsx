import { brandCadence, platformRules } from "@/data/platform";

export function PlatformGuide({ brand }: { brand: "strelka" | "cppk" }) {
  const cadence = brandCadence[brand];

  return (
    <div className="grid gap-4">
      <div className="grid gap-3 md:grid-cols-3">
        {(
          [
            ["vk", cadence.vk],
            ["telegram", cadence.telegram],
            ["max", cadence.max],
          ] as const
        ).map(([id, line]) => (
          <article key={id} className="rounded-3xl border border-gold/20 bg-gold/8 p-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
              {platformRules[id].name} · ритм
            </p>
            <p className="mt-2 text-sm leading-6 text-cream/80">{line}</p>
          </article>
        ))}
      </div>
      {(["vk", "telegram", "max"] as const).map((id) => {
        const item = platformRules[id];
        return (
          <article key={id} className="rounded-3xl border border-white/10 p-6">
            <h3 className="font-serif text-3xl">{item.name}</h3>
            <p className="mt-2 text-xs leading-5 text-cream/45">{item.sources}</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-gold">охват</p>
                <ul className="mt-2 space-y-2 text-sm leading-6 text-cream/75">
                  {item.reach.map((row) => (
                    <li key={row}>{row}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-gold">время</p>
                <ul className="mt-2 space-y-2 text-sm leading-6 text-cream/75">
                  {item.timing.map((row) => (
                    <li key={row}>{row}</li>
                  ))}
                </ul>
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-gold">
                  ежедневность
                </p>
                <p className="mt-2 text-sm leading-6 text-cream/75">{item.daily}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
