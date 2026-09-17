import {
  coverVariants as oformlenieCovers,
  lockupVariants,
  signetVariants,
} from "@/data/oformlenie";

export { lockupVariants, signetVariants };

export const coverVariants = [
  ...oformlenieCovers,
  {
    file: "/brand/channels/cover-cppk-ekb-vk.png",
    title: "Обложка ВК, готовый макет филиала",
    use: "Основная шапка сообщества. В редакторе ВК проверить, что «ЦППК» и «Екатеринбург» не обрезались.",
  },
  {
    file: "/brand/channels/cover-cppk-ekb-16x9.png",
    title: "Широкий макет 16×9",
    use: "Telegram, MAX, Авито, Direct. Не ставить как единственную шапку ВК: пропорция другая.",
  },
];

export const photoKit = [
  {
    use: "Аватар каналов, 800×800",
    file: "/brand/channels/avatar-cppk-ekb-800.png",
    path: "/workspace/public/brand/channels/avatar-cppk-ekb-800.png",
    size: "800×800",
    caption: "Знак филиала. Края мессенджеры обрежут в круг, смысл держать в центре.",
  },
  {
    use: "Аватар MAX, 512×512",
    file: "/brand/channels/avatar-cppk-ekb-512.png",
    path: "/workspace/public/brand/channels/avatar-cppk-ekb-512.png",
    size: "512×512",
    caption: "Тот же знак, меньший квадрат.",
  },
  {
    use: "Знак, тёмный круг, золото",
    file: "/brand/logo/variants/signet-navy-gold.png",
    path: "/workspace/public/brand/logo/variants/signet-navy-gold.png",
    size: "квадрат знака",
    caption: "Основной аватар, если нужен чистый круг без обложки канала.",
  },
  {
    use: "Плашка с названием филиала",
    file: "/brand/logo/variants/logo-ekb-navy.png",
    path: "/workspace/public/brand/logo/variants/logo-ekb-navy.png",
    size: "800×800",
    caption: "Когда в кадре должно читаться имя филиала. Не для мелкого аватара.",
  },
  {
    use: "Обложка ВК, тёмная",
    file: "/brand/channels/cover-ekb-navy.png",
    path: "/workspace/public/brand/channels/cover-ekb-navy.png",
    size: "1590×400, проверить обрезку",
    caption: "Запасная шапка, если готовый макет cover-cppk-ekb-vk.png режут поля ВК.",
  },
  {
    use: "Обложка ВК, светлая",
    file: "/brand/channels/cover-ekb-cream.png",
    path: "/workspace/public/brand/channels/cover-ekb-cream.png",
    size: "1590×400",
    caption: "Светлая лента.",
  },
  {
    use: "Обложка ВК, золотая",
    file: "/brand/channels/cover-ekb-gold.png",
    path: "/workspace/public/brand/channels/cover-ekb-gold.png",
    size: "1590×400",
    caption: "Акцент. Проверить читаемость золота на экране.",
  },
  {
    use: "Готовая шапка ВК филиала",
    file: "/brand/channels/cover-cppk-ekb-vk.png",
    path: "/workspace/public/brand/channels/cover-cppk-ekb-vk.png",
    size: "1590×400",
    caption: "Ставить первой.",
  },
  {
    use: "Широкий кадр 16×9",
    file: "/brand/channels/cover-cppk-ekb-16x9.png",
    path: "/workspace/public/brand/channels/cover-cppk-ekb-16x9.png",
    size: "16×9",
    caption: "Мессенджеры, объявления, превью поиска.",
  },
  {
    use: "Макет визуальной системы",
    file: "/brand/channels/photo-cppk-800.png",
    path: "/workspace/public/brand/channels/photo-cppk-800.png",
    size: "800×800",
    caption:
      "Это макет визуальной системы, не фотография кабинета на ул. 8 Марта, д. 158. Как снимок места не публиковать.",
  },
  {
    use: "Широкая шапка филиала",
    file: "/brand/channels/cover-cppk-ekb-wide.png",
    path: "/workspace/public/brand/channels/cover-cppk-ekb-wide.png",
    size: "широкий кадр",
    caption: "Макет шапки с адресом 8 Марта, 158. Не фотография здания.",
  },
  {
    use: "Карточка кабинета",
    file: "/brand/photos/card-office.jpg",
    path: "/workspace/public/brand/photos/card-office.jpg",
    size: "16×9",
    caption: "Адресный макет кабинета. Живой фасад 8 Марта ещё нужно снять.",
  },
  {
    use: "Карточка автодрома",
    file: "/brand/photos/card-autodrome.jpg",
    path: "/workspace/public/brand/photos/card-autodrome.jpg",
    size: "16×9",
    caption: "Адресный макет площадки. Живой въезд с Петрова ещё нужно снять.",
  },
];
