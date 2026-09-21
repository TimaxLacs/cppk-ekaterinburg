export type BotOption = {
  label: string;
  next: string;
};

export type BotNode = {
  id: string;
  text: string;
  lessons?: { title: string; body: string }[];
  source?: string;
  site?: { label: string; href: string };
  operator?: string;
  options: BotOption[];
};

export const botNodes: BotNode[] = [
  {
    id: "start",
    text: "Здравствуйте. Справочник образовательного центра ЦППК. Отвечаю по программам, документам и адресам на основе утверждённых материалов. Запись и договор оформляются на сайте. Что вам нужно?",
    options: [
      { label: "Открыть справочник", next: "handbook" },
      { label: "Запись на обучение", next: "enroll" },
      { label: "Живу на Васильевском", next: "strelka" },
    ],
  },
  {
    id: "handbook",
    text: "Справочник. Ответы короткие, с указанием источника. Если вопроса нет в базе, лучше уточнить в учебной части, чем получать догадку. Выберите тему.",
    options: [
      { label: "Документы на категорию B", next: "faq-docs-b" },
      { label: "Кому нужен ДОПОГ", next: "faq-dopog" },
      { label: "Адреса площадок", next: "faq-address" },
      { label: "Филиал Екатеринбург", next: "faq-address-ekb" },
      { label: "Типичная ошибка на эстакаде", next: "faq-ramp" },
      { label: "C, D или CE: что выбрать", next: "faq-cargo" },
      { label: "К записи", next: "enroll" },
    ],
  },
  {
    id: "faq-docs-b",
    text: "Для оформления на категорию B обычно нужны паспорт, медицинская справка установленного образца и фотография. Для несовершеннолетних требуется согласие законного представителя.",
    source: "Памятка приёма ЦППК. Актуальный перечень и бланки: страница категории B на сайте. Сообщение в мессенджере не заменяет перечень на сайте.",
    site: {
      label: "Перечень на сайте",
      href: "/site?program=b&utm_source=bot&utm_medium=handbook&utm_campaign=docs_b",
    },
    options: [
      { label: "Другой вопрос", next: "handbook" },
      { label: "Запись", next: "enroll" },
    ],
  },
  {
    id: "faq-dopog",
    text: "Свидетельство ДОПОГ нужно водителю, который перевозит опасный груз сверх порога малых количеств. Как правило, требуются категория C или CE и стаж. Базовый курс не включает цистерны, класс 1 и класс 7: для них отдельные модули.",
    source: "Описание программ ЦППК / соглашение ДОПОГ. Это справка по линейке центра, не юридическое заключение по конкретной перевозке.",
    site: {
      label: "Страница ДОПОГ",
      href: "/site?program=dopog&utm_source=bot&utm_medium=handbook&utm_campaign=dopog",
    },
    options: [
      { label: "Другой вопрос", next: "handbook" },
      { label: "Соединить со специалистом ДОПОГ", next: "operator-dopog" },
    ],
  },
  {
    id: "faq-address",
    text: "Учебный центр в Санкт-Петербурге: ул. Болотная, д. 1. Автодром: Полюстровский пр., д. 41, к. 2. Режим Петербурга: пн-чт 9:00-18:00, пт 9:00-17:00. Филиал в Екатеринбурге: отдельная карточка.",
    source: "Раздел «Контакты» cppkspb.ru.",
    site: {
      label: "Контакты и схема",
      href: "/site?program=b&utm_source=bot&utm_medium=handbook&utm_campaign=address",
    },
    options: [
      { label: "Другой вопрос", next: "handbook" },
      { label: "Филиал Екатеринбург", next: "faq-address-ekb" },
      { label: "К меню", next: "start" },
    ],
  },
  {
    id: "faq-address-ekb",
    text: "Филиал в Екатеринбурге: ул. 8 Марта, д. 158, офис 207. Автодром по 2ГИС: Верхняя Пышма, ул. Петрова, д. 59а. Почта ekb@cppkspb.ru. Телефон один: +7 (343) 257-57-92. Режим кабинета: пн-чт 9:00-18:00, пт 9:00-17:00, обед 13:00-13:48.",
    source: "Кабинет, телефон, почта и часы: cppkspb.ru/about и cppkspb.ru/sveden/employees. Адрес площадки: 2ГИС.",
    site: {
      label: "Запись на программу",
      href: "/site?program=b&utm_source=bot&utm_medium=handbook&utm_campaign=ekb_address",
    },
    options: [
      { label: "Другой вопрос", next: "handbook" },
      { label: "Соединить с филиалом", next: "operator-ekb" },
      { label: "Адреса Петербурга", next: "faq-address" },
    ],
  },
  {
    id: "faq-ramp",
    text: "На упражнении «эстакада» частая ошибка: слабая фиксация на стояночном тормозе и раннее снятие ноги со сцепления, из-за чего автомобиль откатывается. Упражнение отрабатывается на площадке центра.",
    source: "Методическая памятка площадки ЦППК. Не заменяет занятие с инструктором. Клип упражнения публикуется в сообществе VK.",
    options: [
      { label: "Другой вопрос", next: "handbook" },
      { label: "Запись на категорию B", next: "cat-b" },
    ],
  },
  {
    id: "faq-cargo",
    text: "C: переподготовка с B, около 2 месяцев. D: с B или C, 2-3 месяца. CE: нужна открытая C, около 1,5 месяца. При двух программах на сайте указана скидка 15% на вторую. Экзамен на технике центра.",
    source: "Раздел «Обучение» cppkspb.ru. Цены и сроки проверяйте на сайте перед заявкой.",
    site: {
      label: "C / D / CE на сайте",
      href: "/site?program=cargo&utm_source=bot&utm_medium=handbook&utm_campaign=cargo",
    },
    options: [
      { label: "Другой вопрос", next: "handbook" },
      { label: "Учебная часть", next: "operator-study" },
    ],
  },
  {
    id: "enroll",
    text: "Запись. Выберите программу. Бот не принимает оплату и не заключает договор.",
    options: [
      { label: "Категория B", next: "cat-b" },
      { label: "C, D или CE", next: "cargo" },
      { label: "ДОПОГ", next: "dopog" },
      { label: "Самоходная техника", next: "tech" },
      { label: "ДПО, юридическое лицо", next: "org" },
      { label: "Вернуться в справочник", next: "handbook" },
    ],
  },
  {
    id: "cat-b",
    text: "Категория B: срок около 3 месяцев, вождение по согласованным слотам, сопровождение на экзамене в ГИБДД, приём с 17 лет. На сайте указано 45 000 руб. Проверьте сумму перед заявкой.",
    lessons: [
      {
        title: "Где проходит обучение",
        body: "Теория: ул. Болотная, д. 1. Площадка: Полюстровский пр., д. 41, к. 2.",
      },
      {
        title: "Как оформляется заявка",
        body: "Форма на сайте, затем учебная часть и договор. Бот заявки не подписывает.",
      },
    ],
    site: {
      label: "Открыть категорию B на сайте",
      href: "/site?program=b&utm_source=bot&utm_medium=max&utm_campaign=cat_b",
    },
    options: [
      { label: "Справочник", next: "handbook" },
      { label: "Учебная часть", next: "operator-study" },
    ],
  },
  {
    id: "cargo",
    text: "Переподготовка C, D, CE. Сроки и цены: страница программ. Экзамен на технике центра.",
    site: {
      label: "Смотреть C / D / CE",
      href: "/site?program=cargo&utm_source=bot&utm_medium=max&utm_campaign=cargo",
    },
    options: [
      { label: "Справочник", next: "handbook" },
      { label: "Учебная часть", next: "operator-study" },
    ],
  },
  {
    id: "dopog",
    text: "ДОПОГ: базовый курс 4 дня, специализированные 2 дня. Группы, по данным сайта, каждые две недели. Экзамен на территории центра.",
    site: {
      label: "Открыть ДОПОГ на сайте",
      href: "/site?program=dopog&utm_source=bot&utm_medium=max&utm_campaign=dopog",
    },
    options: [
      { label: "Справка: кому нужен ДОПОГ", next: "faq-dopog" },
      { label: "Специалист ДОПОГ", next: "operator-dopog" },
    ],
  },
  {
    id: "tech",
    text: "Самоходная техника: погрузчик, экскаватор, каток, бульдозер, трактор, внедорожные категории. Экзамен в Гостехнадзоре, сопровождение центра.",
    site: {
      label: "Самоходная техника на сайте",
      href: "/site?program=tech&utm_source=bot&utm_medium=max&utm_campaign=tech",
    },
    options: [
      { label: "Справочник", next: "handbook" },
      { label: "Специалист", next: "operator-tech" },
    ],
  },
  {
    id: "org",
    text: "Для организаций: БДД, контролёр ТС, охрана труда, пожарная безопасность, закупки, противодействие коррупции. Очно и с ДОТ. Договор и счёт через учебную часть.",
    site: {
      label: "Программы для юридических лиц",
      href: "/site?program=org&utm_source=bot&utm_medium=max&utm_campaign=org",
    },
    options: [
      { label: "Справочник", next: "handbook" },
      { label: "Учебная часть", next: "operator-study" },
    ],
  },
  {
    id: "strelka",
    text: "Новости острова публикуются в «Стрелке». Этот бот отвечает по обучению. Если вопрос о дворе, афише или ЖКХ, его не нужно направлять в учебную часть.",
    options: [
      { label: "Справочник ЦППК", next: "handbook" },
      { label: "Нужны права", next: "cat-b" },
      { label: "Вопрос про остров", next: "operator-strelka" },
    ],
  },
  {
    id: "operator-study",
    text: "Передаю учебную часть. Напишите программу, удобное время и город (Санкт-Петербург или Екатеринбург). Ответ в рабочие часы: пн-чт 9:00-18:00, пт до 17:00.",
    operator: "Учебная часть",
    options: [{ label: "В начало", next: "start" }],
  },
  {
    id: "operator-dopog",
    text: "Передаю направление ДОПОГ. Укажите: базовый курс, цистерны, 1 класс, 7 класс или консультант, и нужна ли ближайшая группа.",
    operator: "ДОПОГ",
    options: [{ label: "В начало", next: "start" }],
  },
  {
    id: "operator-tech",
    text: "Передаю самоходную технику. Укажите машину и категорию, если известны.",
    operator: "Самоходная техника",
    options: [{ label: "В начало", next: "start" }],
  },
  {
    id: "operator-strelka",
    text: "Очередь редактора «Стрелки». Пришлите фото, адрес и суть. Реклама без пользы для острова не публикуется.",
    operator: "Стрелка",
    options: [{ label: "В начало", next: "start" }],
  },
  {
    id: "operator-ekb",
    text: "Передаю учебную часть филиала в Екатеринбурге. Напишите программу и удобное время. Ответ в рабочие часы филиала: пн-чт 9:00-18:00, пт до 17:00, обед 13:00-13:48 по Екатеринбургу.",
    operator: "Филиал Екатеринбург",
    options: [{ label: "В начало", next: "start" }],
  },
];

export function getBotNode(id: string) {
  return botNodes.find((node) => node.id === id) ?? botNodes[0];
}
