export type Place = {
  id: string;
  title: string;
  role: string;
  city: string;
  address: string;
  lat: number;
  lon: number;
  phones: string[];
  hours: string;
  category: string;
  mapName: string;
  mapDescription: string;
  gisUrl: string;
  photosToShoot: string[];
  note: string;
};

export const people: {
  name: string;
  role: string;
  phone: string;
  where: string;
}[] = [];

export const phones = {
  ekbBranch: "+7 (343) 257-57-92",
  ekbAutodrome: "+7 (343) 328-29-30",
  ekbStudyMobile: "+7 (343) 257-57-92",
  ekbEmail: "ekb@cppkspb.ru",
  spbReception: "+7 (812) 297-57-36",
  spbStudy1: "+7 (911) 928-14-78",
  spbStudy2: "+7 (812) 297-57-82",
  spbEmailStudy: "edu@cppkspb.ru",
  spbEmailMail: "mail@cppkspb.ru",
};

export const places: Place[] = [
  {
    id: "spb-center",
    title: "Учебный центр, Санкт-Петербург",
    role: "Теория, приёмная, договоры",
    city: "Санкт-Петербург",
    address: "ул. Болотная, д. 1",
    lat: 59.9608,
    lon: 30.3482,
    phones: [phones.spbReception, phones.spbStudy1, phones.spbStudy2],
    hours: "Пн-чт 9:00-18:00, пт 9:00-17:00, сб-вс выходной",
    category: "Учебный центр / автошкола",
    mapName: "ЦППК, учебный центр",
    mapDescription:
      "ФГАОУ ДПО «Межрегиональный ЦППК» им. В. К. Артюха. Образовательный центр Росавтодора. Теория, запись, документы. Практика: автодром Полюстровский пр., д. 41, к. 2.",
    gisUrl: "https://2gis.ru/spb/search/ЦППК%20Болотная%201",
    photosToShoot: [
      "Фасад и вход с читаемым номером дома",
      "Вывеска или табличка учреждения",
      "Ресепшен / учебная часть без документов слушателей",
      "Один учебный класс",
    ],
    note: "На картах это головная точка Петербурга. Не писать сюда адреса Екатеринбурга.",
  },
  {
    id: "spb-autodrome",
    title: "Автодром, Санкт-Петербург",
    role: "Площадка практики",
    city: "Санкт-Петербург",
    address: "Полюстровский пр., д. 41, к. 2",
    lat: 59.9715,
    lon: 30.3918,
    phones: [phones.spbStudy1, phones.spbStudy2],
    hours: "По расписанию учебной части. Не копировать часы кабинета, если площадка работает иначе.",
    category: "Автодром / автошкола",
    mapName: "ЦППК, автодром",
    mapDescription:
      "Учебная площадка образовательного центра Росавтодора. Категория B и профессиональные категории. Теория: ул. Болотная, д. 1.",
    gisUrl: "https://2gis.ru/spb/search/ЦППК%20Полюстровский%2041",
    photosToShoot: [
      "Общий вид площадки с разметкой, без номеров чужих машин крупно",
      "Въезд и указатель",
      "Одно упражнение (эстакада, парковка) без лиц без согласия",
      "Учебный автомобиль сбоку, если есть маркировка центра",
    ],
    note: "Отдельная карточка на картах, не филиал внутри Болотной.",
  },
  {
    id: "ekb-center",
    title: "Учебный центр, Екатеринбург",
    role: "Теория и учебная часть филиала",
    city: "Екатеринбург",
    address: "ул. 8 Марта, д. 158, офис 207, 2 этаж",
    lat: 56.8084,
    lon: 60.6108,
    phones: [phones.ekbBranch, phones.ekbStudyMobile],
    hours: "Пн-чт 9:00-18:00, пт 9:00-17:00, обед 13:00-13:48, сб-вс выходной",
    category: "Учебный центр / автошкола",
    mapName: "ЦППК, филиал в Екатеринбурге",
    mapDescription:
      "Филиал ФГАОУ ДПО «Межрегиональный ЦППК» им. В. К. Артюха. Категория B, ДОПОГ, самоходная техника, БДД. Практика: автодром, г. Верхняя Пышма, ул. Петрова, д. 59а.",
    gisUrl: "https://2gis.ru/ekaterinburg/firm/1267165676267616",
    photosToShoot: [
      "Фасад 8 Марта, 158 и вход в здание",
      "Табличка этажа / офис 207",
      "Коридор и учебный класс",
      "Логотип на двери или стойке, если есть",
    ],
    note: "Офис 207 сверить на месте. Ближайшее метро: Чкаловская. Автодром в другом городе, не в этом дворе.",
  },
  {
    id: "ekb-autodrome",
    title: "Автодром, Верхняя Пышма",
    role: "Площадка практики филиала",
    city: "Верхняя Пышма",
    address: "ул. Петрова, д. 59а",
    lat: 56.9542,
    lon: 60.618,
    phones: [phones.ekbAutodrome, phones.ekbStudyMobile],
    hours: "Часы площадки не публиковать. В агрегаторах встречается круглосуточно или 06:00-00:00, в карточку не ставить.",
    category: "Автодром / автошкола",
    mapName: "ЦППК, автодром",
    mapDescription:
      "Учебная площадка филиала ЦППК. Верхняя Пышма, ул. Петрова, д. 59а. Теория и запись: Екатеринбург, ул. 8 Марта, д. 158.",
    gisUrl: "https://2gis.ru/verhnyaya-pyshma/firm/70000001006981186",
    photosToShoot: [
      "Въезд с улицы Петрова и номер 59а",
      "Общий план площадки",
      "Разметка упражнений",
      "Бытовка / инструкторская, если есть вывеска ЦППК",
    ],
    note: "Это отдельный населённый пункт. На карточке 8 Марта не писать «автодром здесь». Карточка 2ГИС уже есть, её нужно забрать и поправить.",
  },
];

export function yandexWidget(place: Place) {
  const query = `${place.city}, ${place.address}`;
  return `https://yandex.ru/map-widget/v1/?ll=${place.lon},${place.lat}&z=16&l=map&pt=${place.lon},${place.lat},pm2rdm&text=${encodeURIComponent(query)}`;
}

export function yandexOpen(place: Place) {
  return `https://yandex.ru/maps/?ll=${place.lon},${place.lat}&z=16&text=${encodeURIComponent(`${place.city}, ${place.address}`)}`;
}

export function googleOpen(place: Place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.city}, ${place.address}`)}`;
}

export function googleEmbed(place: Place) {
  return `https://maps.google.com/maps?q=${place.lat},${place.lon}&z=16&output=embed`;
}
