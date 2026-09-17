import { CopyField } from "@/components/copy-field";
import {
  googleEmbed,
  googleOpen,
  type Place,
  yandexOpen,
  yandexWidget,
} from "@/data/places";

export function PlaceMap({ place }: { place: Place }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10">
      <div className="grid gap-0 lg:grid-cols-2">
        <iframe
          title={`Яндекс.Карты: ${place.title}`}
          src={yandexWidget(place)}
          className="h-72 w-full border-0 bg-navy-2 lg:h-full min-h-[320px]"
          loading="lazy"
        />
        <iframe
          title={`Google Maps: ${place.title}`}
          src={googleEmbed(place)}
          className="h-72 w-full border-0 bg-navy-2 lg:h-full min-h-[320px]"
          loading="lazy"
        />
      </div>
      <div className="grid gap-5 p-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{place.role}</p>
          <h3 className="font-serif mt-2 text-3xl">{place.title}</h3>
          <p className="mt-3 text-sm leading-6 text-cream/75">
            {place.city}, {place.address}
          </p>
          <p className="mt-2 text-sm text-cream/60">{place.hours}</p>
          <ul className="mt-3 space-y-1 text-sm text-cream/80">
            {place.phones.map((phone) => (
              <li key={phone}>{phone}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-cream/55">{place.note}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={yandexOpen(place)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-4 py-2 text-sm text-navy"
            >
              Открыть в Яндекс.Картах
            </a>
            <a
              href={place.gisUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-cream/80"
            >
              Открыть в 2ГИС
            </a>
            <a
              href={googleOpen(place)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-cream/80"
            >
              Открыть в Google Maps
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          <CopyField label="Название на карте" value={place.mapName} />
          <CopyField label="Категория" value={place.category} />
          <CopyField label="Описание карточки" value={place.mapDescription} />
          <div className="rounded-2xl border border-white/10 p-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
              какие фото загрузить в карточку
            </p>
            <ul className="mt-2 space-y-2 text-sm leading-6 text-cream/75">
              {place.photosToShoot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
