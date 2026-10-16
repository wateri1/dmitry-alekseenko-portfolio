# Карта применения скиллов и архитектурный план реализации сайта-портфолио

**Проект:** Персональный сайт-портфолио веб-разработчика Дмитрия Алексеенко (с режимом 16:9 PDF-презентации)  
**Базовый документ ТЗ:** [`code_artifact.md`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/code_artifact.md)  
**Назначение документа:** Детальная привязка каждого смыслового блока, интерфейсного решения, этапа копирайтинга и технической верстки к конкретным профессиональным скиллам из доступной библиотеки для достижения премиального агентского качества.

---

## 0. Сводная матрица: Скиллы по блокам и задачам

| Узел / Блок проекта | Ключевые скиллы для работы | Главная цель применения |
| :--- | :--- | :--- |
| **Глобальный фундамент и анти-шаблонный код** | [`full-output-enforcement`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/full-output-enforcement/SKILL.md), [`taste-skill`](file:///C:/Users/Wateri/.gemini/config/skills/taste-skill/SKILL.md), [`design-taste-frontend`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/design-taste-frontend/SKILL.md), [`high-end-visual-design`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/high-end-visual-design/SKILL.md) | Полный рабочий код без усечений и заглушек; авторская эстетика без признаков дешевых AI-шаблонов. |
| **Дизайн-система, токены и палитра** | [`ui-ux-pro-max-skill`](file:///C:/Users/Wateri/.gemini/config/skills/ui-ux-pro-max-skill/SKILL.md), [`minimalist-ui`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/minimalist-ui/SKILL.md), [`industrial-brutalist-ui`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/industrial-brutalist-ui/SKILL.md) | Теплая бумажная палитра (`#F6F5F2`), тонкая сетка 1px, моноширинные бейджи `JetBrains Mono`, строгая типографика. |
| **Блок 1 (Слайд 1). Hero-экран** | [`hero-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/hero-generator/SKILL.md), [`cta-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/cta-generator/SKILL.md), [`navigation-menu-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/navigation-menu-generator/SKILL.md), [`heading-structure`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/heading-structure/SKILL.md), [`grid`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/grid/SKILL.md) | Фокусный главный экран: строгий H1, CTA-кнопка в WhatsApp с гарантией ответа за 15 мин, асимметричная плашка из 3 фактов. |
| **Блок 2 (Слайды 2–3). Кейсы и демо** | [`customer-stories-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/customer-stories-page-generator/SKILL.md), [`card`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/card/SKILL.md), [`tab-accordion`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/tab-accordion/SKILL.md), [`image-optimization`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/image-optimization/SKILL.md) | Формат Problem/Solution, сплит-карточки 5/7 колонок, интерактивный аккордеон для программы курса, баннер «Не нашли нишу?». |
| **Блок 3 (Слайд 4). Анатомия подхода** | [`features-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/features-page-generator/SKILL.md), [`copywriting`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/copywriting/SKILL.md), [`grid`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/grid/SKILL.md) | 2-колоночная швейцарская сетка: контраргументы против агентств, фокус на мобайл и масштабируемый чистый код. |
| **Блок 4 (Слайд 5). Услуги и тарифы** | [`pricing-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/pricing-page-generator/SKILL.md), [`services-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/services-page-generator/SKILL.md), [`card`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/card/SKILL.md), [`redesign-existing-projects`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/redesign-existing-projects/SKILL.md) | Bento-композиция: 2 крупные тарифные карточки (Лендинг, Сайт компании) + горизонтальный блок аудита и редизайна. |
| **Блок 5 (Слайд 6). Процесс 5 шагов** | [`howto-section-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/howto-section-generator/SKILL.md), [`schema-markup`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/schema-markup/SKILL.md), [`minimalist-ui`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/minimalist-ui/SKILL.md) | Хронологический маршрут за 5 шагов с моноширинными бейджами `[ ШАГ 01 ]` и микроразметкой HowTo для поисковиков. |
| **Блок 6 (Слайд 7). FAQ + Темный подвал** | [`faq-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/faq-page-generator/SKILL.md), [`tab-accordion`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/tab-accordion/SKILL.md), [`footer-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/footer-generator/SKILL.md), [`schema-markup`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/schema-markup/SKILL.md) | 4 аккордеона частых вопросов (`FAQPage` JSON-LD), контрастный графитовый блок `#141413` с финальным призывом к расчету. |
| **Презентация 16:9 и Экспорт в PDF** | [`rendering-strategies`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/rendering-strategies/SKILL.md), [`site-crawlability`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/site-crawlability/SKILL.md), [`core-web-vitals`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/core-web-vitals/SKILL.md) | Слайдовая верстка `<section class="slide-section">`, правила `@media print` с пропорциями `16in x 9in` и `break-after: page`. |
| **SEO, Социальные сниппеты и Мессенджеры** | [`open-graph`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/open-graph/SKILL.md), [`twitter-cards`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/twitter-cards/SKILL.md), [`seo-strategy`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/seo-strategy/SKILL.md), [`favicon-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/favicon-generator/SKILL.md) | Идеальные превью при отправке ссылки в WhatsApp/Telegram, валидные метатеги, микроразметка и фавикон. |

---

## 1. Фундаментальный уровень: Стандарты кода и общая стилистика

Перед написанием первой строчки верстки активируются системные скиллы, определяющие планку качества:

### 1. [`full-output-enforcement`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/full-output-enforcement/SKILL.md)
* **Зачем нужен:** Запрещает любые сокращения (`// TODO`, `// rest of code`, плейсхолдеры, усечение CSS/HTML).
* **Как применяется:** При генерации кода сайта гарантирует, что каждый из 6 слайдов, каждый медиа-запрос и все JS-обработчики (аккордеоны, печать) пишутся целиком в полностью рабочем виде.

### 2. [`taste-skill`](file:///C:/Users/Wateri/.gemini/config/skills/taste-skill/SKILL.md) и [`design-taste-frontend`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/design-taste-frontend/SKILL.md)
* **Зачем нужны:** Предотвращают типичные ошибки generic-генераций (фиолетовый неон, дешевый стеклянный блюр, одинаковые карточки с центрированными иконками).
* **Как применяются:**
  * Устанавливают асимметричную швейцарскую композицию.
  * Формируют спокойный, премиальный B2B-характер веб-разработчика, продающего ценность для бизнеса.
  * Контролируют плотность контента и ширину строк (не более 65 символов для удобочитаемости).

### 3. [`ui-ux-pro-max-skill`](file:///C:/Users/Wateri/.gemini/config/skills/ui-ux-pro-max-skill/SKILL.md) + [`minimalist-ui`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/minimalist-ui/SKILL.md)
* **Зачем нужны:** Построение точной палитры и типографических системных токенов в `index.css`.
* **Как применяются:**
  * Настройка CSS Custom Properties:
    ```css
    :root {
      --bg-primary: #F6F5F2;
      --bg-surface: #ECEAE4;
      --border-subtle: #D8D5CD;
      --text-primary: #141413;
      --text-secondary: #5C5B57;
      --accent: #E04F26;
      --accent-hover: #c9411b;
      --font-heading: 'Unbounded', 'Manrope', sans-serif;
      --font-body: 'Onest', 'Golos Text', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
    ```
  * Подключение шрифтов Google Fonts с оптимизированным параметром `display=swap` и кириллическим диапазоном.

---

## 2. Посекционный разбор ТЗ: Привязка скиллов к каждому блоку

### Блок 1 (Слайд 1). Главный экран (Hero-секция)
* **Анализ ТЗ:** Шапка с логотипом и кнопкой WhatsApp, тег-надзаголовок, емкий H1 («Делаю сайты, которые превращают посетителей...»), подзаголовок, акцентная кнопка CTA с микро-текстом (ответ за 15 мин), нижняя плашка из 3 фактов (мобайл, скорость 1.5 сек, прямое общение).
* **Используемые скиллы:**
  1. [`hero-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/hero-generator/SKILL.md) — задает композиционный каркас первого экрана с учетом пропорций 16:9, разделяя смысловой фокус и плашку доверия.
  2. [`heading-structure`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/heading-structure/SKILL.md) — проверка единственного H1 на странице, плотности кернинга (`letter-spacing: -0.03em`) и адаптивных размеров шрифта (`clamp(2rem, 4vw, 3.25rem)`).
  3. [`cta-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/cta-generator/SKILL.md) — верстка главной кнопки: терракотовый фон `#E04F26`, hover-эффект со смещением, контрастный микрокопирайтинг под кнопкой («Отвечаю лично в течение 15 минут...»).
  4. [`navigation-menu-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/navigation-menu-generator/SKILL.md) — проектирование ультра-лаконичного хедера без лишних пунктов меню, уводящих от конверсии.
  5. [`grid`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/grid/SKILL.md) — построение 3-колоночной фактологической плашки с тонкими разделителями `1px solid var(--border-subtle)`.
  6. [`core-web-vitals`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/core-web-vitals/SKILL.md) — исключение сдвигов макета (CLS = 0) и обеспечение мгновенной отрисовки первого экрана (LCP < 1.2s).

---

### Блок 2 (Слайды 2–3). Избранные проекты и отраслевые решения (Кейсы)
* **Анализ ТЗ:** 2 детальных кейса (Автобизнес/детейлинг и Онлайн-курсы) с разбором «Задача бизнеса» / «Что реализовано» / «Живое демо», плюс интерактивный элемент программы курса и баннер «Не нашли свою сферу?».
* **Используемые скиллы:**
  1. [`customer-stories-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/customer-stories-page-generator/SKILL.md) — обеспечивает структуру кейсов высокой убедительности: **Problem → Business Context → Engineering Solution → Result**.
  2. [`card`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/card/SKILL.md) & [`grid`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/grid/SKILL.md) — швейцарская верстка карточек кейса в соотношении 5 колонок (текстовая аналитика) к 7 колонкам (интерактивный мокап интерфейса).
  3. [`tab-accordion`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/tab-accordion/SKILL.md) — реализация компактного раскрывающегося списка модулей курса для Кейса №2, предотвращающая перегрузку страницы простынями текста.
  4. [`image-optimization`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/image-optimization/SKILL.md) — генерация и подключение современных форматов превью (WebP/SVG), адаптивные размеры и правильные `alt`-атрибуты.
  5. [`cta-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/cta-generator/SKILL.md) — интерактивные кнопки перехода к живому демо и дополнительная плашка вовлечения для смежных ниш.

---

### Блок 3 (Слайд 4). Анатомия подхода (Почему эти сайты продают)
* **Анализ ТЗ:** 2-колоночная верстка: слева заголовок H2 («Сайт должен зарабатывать деньги...»), справа — 3 развернутых тезиса (смыслы вместо ТЗ, упор на мобильные, чистый код без ограничений конструкторов).
* **Используемые скиллы:**
  1. [`features-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/features-page-generator/SKILL.md) — презентация преимуществ через решение болей клиента (отличие профессионального разработчика от агентств и конструкторов).
  2. [`copywriting`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/copywriting/SKILL.md) + [`humanizer`](file:///C:/Users/Wateri/.gemini/config/skills/humanizer/SKILL.md) — формулирование тезисов простым, уверенным языком без заумных терминов, вызывающим уважение у предпринимателя.
  3. [`grid`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/grid/SKILL.md) — строгая асимметричная сетка: левый столбец `35%`, правый столбец `65%` с разделительными линиями `border-top: 1px solid var(--border-subtle)` и моноширинными номерами `01 /`, `02 /`, `03 /`.

---

### Блок 4 (Слайд 5). Услуги и продуктовая линейка (Форматы работы)
* **Анализ ТЗ:** 2 карточки тарифов (Одностраничный сайт 5–10 дней, Сайт компании 10–18 дней) + 1 горизонтальная полоса редизайна и доработки с аудитом.
* **Используемые скиллы:**
  1. [`pricing-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/pricing-page-generator/SKILL.md) — проектирование прозрачных тарифов: фиксация цены до старта, состав работ по пунктам, сроки в виде тегов.
  2. [`services-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/services-page-generator/SKILL.md) — позиционирование форматов под четкие бизнес-задачи (быстрый запуск рекламы vs комплексная презентация).
  3. [`redesign-existing-projects`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/redesign-existing-projects/SKILL.md) — проработка оффера нижней плашки: приглашение отправить текущий сайт на бесплатный разбор, снижающее порог входа для лида.
  4. [`card`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/card/SKILL.md) — компоновка Bento-сетки: 2 карточки в верхней строке одинаковой высоты, 1 полноразмерный баннер снизу с легким акцентным фоном.

---

### Блок 5 (Слайд 6). Прозрачный процесс работы
* **Анализ ТЗ:** 5 последовательных этапов от знакомства в WhatsApp за 15 минут до запуска и передачи всех доступов заказчику.
* **Используемые скиллы:**
  1. [`howto-section-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/howto-section-generator/SKILL.md) — визуализация линейного таймлайна с понятными дедлайнами по каждому этапу.
  2. [`minimalist-ui`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/minimalist-ui/SKILL.md) — оформление бейджей этапов через `JetBrains Mono` (`[ ШАГ 01 ]`), создание аккуратной горизонтальной связки между шагами.
  3. [`schema-markup`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/schema-markup/SKILL.md) — внедрение семантической микроразметки `HowTo`, помогающей поисковым ботам распознавать процесс разработки.

---

### Блок 6 (Слайд 7). Частые вопросы (FAQ) + Контрастный подвал (Footer)
* **Анализ ТЗ:** 4 вопроса с подробными ответами (что нужно для старта, смена цен, отсутствие абонентской платы, оплата 50/50), переход в финальный темный блок `#141413` с призывом написать Дмитрию и контактной строкой.
* **Используемые скиллы:**
  1. [`faq-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/faq-page-generator/SKILL.md) & [`tab-accordion`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/tab-accordion/SKILL.md) — создание доступных, плавных аккордеонов без внешних библиотек (с семантическими тегами `<details>` и `<summary>` или кастомным плавным JS).
  2. [`schema-markup`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/schema-markup/SKILL.md) — генерация валидной схемы `FAQPage` (JSON-LD) для расширенных сниппетов в Google и Яндексе.
  3. [`footer-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/footer-generator/SKILL.md) — проектирование акцентного темного футера с визуальным контрастом: снятие барьеров («это ни к чему не обязывает»), крупная кнопка связи и реквизиты.
  4. [`trust-badges-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/trust-badges-generator/SKILL.md) — размещение маркеров надежности (работа по всему СНГ, прямой контакт с автором, прозрачная поэтапная оплата 50/50).

---

## 3. Инженерные особенности: Презентация 16:9, Мобильность и Deeplink

### 1. Архитектура «Сайт = 16:9 PDF Презентация»
* **Используемые скиллы:** [`rendering-strategies`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/rendering-strategies/SKILL.md), [`core-web-vitals`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/core-web-vitals/SKILL.md).
* **Что контролируют скиллы:**
  * Каждый из 6 блоков оборачивается в структурированный контейнер:
    ```html
    <section class="slide-section" id="hero">...</section>
    ```
  * Включение правил `@media print`:
    * Жесткий размер слайда `size: 16in 9in;`.
    * Разрыв страниц `page-break-after: always; break-after: page;`.
    * Точное центрирование контента слайда по вертикали (`display: flex; flex-direction: column; justify-content: center;`).
    * Сокрытие интерактивных браузерных элементов (`.no-print`).
  * Добавление кнопки-переключателя «Режим презентации / Печать в PDF» прямо на сайте.

### 2. Мобильная адаптивность (Mobile-First UX)
* **Используемые скиллы:** [`mobile-friendly`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/mobile-friendly/SKILL.md), [`conversion-optimization`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/conversion-optimization/SKILL.md).
* **Что контролируют скиллы:**
  * Размер интерактивных кнопок не менее 48px по высоте для безошибочного тапа пальцем.
  * Кнопка перехода в WhatsApp всегда находится в зоне доступности большого пальца.
  * Разрушение многоколоночных сеток на смартфонах в логичный вертикальный стек без горизонтального скролла.

### 3. Интеграция с WhatsApp и передача контекста
* **Используемые скиллы:** [`cta-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/cta-generator/SKILL.md), [`copywriting`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/copywriting/SKILL.md).
* **Что контролируют скиллы:**
  * Генерация предзаполненных ссылок с контекстом клика:
    * Из Hero: *«Здравствуйте, Дмитрий! Пишу с вашего сайта-портфолио. Хочу обсудить разработку сайта.»*
    * Из Кейса №1: *«Здравствуйте, Дмитрий! Интересует решение для автобизнеса/услуг...»*
    * Из Тарифа Лендинг: *«Здравствуйте, Дмитрий! Хочу узнать точную стоимость и сроки запуска лендинга...»*
    * Из Блока редизайна: *«Здравствуйте, Дмитрий! Хочу отправить текущий сайт на экспресс-разбор...»*

---

## 4. Подготовка к продвижению, соцсетям и GEO (ИИ-поисковикам)

Чтобы сайт работал не только как визитка, но и привлекал целевой трафик:

1. [`open-graph`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/open-graph/SKILL.md) & [`twitter-cards`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/twitter-cards/SKILL.md) — генерация метаданных `og:title`, `og:description`, `og:image`. При отправке ссылки в WhatsApp или Telegram клиент видит статусную карточку с презентабельным превью и четким оффером.
2. [`favicon-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/favicon-generator/SKILL.md) — минималистичный векторный фавикон в цветах бренда (`#141413` и `#E04F26`), отлично различимый на светлых и темных вкладках браузера.
3. [`generative-engine-optimization`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/generative-engine-optimization/SKILL.md) (GEO) — структурирование фактологических данных о Дмитрии Алексеенко и его услугах, чтобы при поиске через ChatGPT, Perplexity и Google AI сайт корректно цитировался как надежный исполнитель.
4. [`xml-sitemap`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/xml-sitemap/SKILL.md) & [`robots-txt`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/robots-txt/SKILL.md) — базовые файлы поисковой доступности.

---

## 5. План выполнения работ (Action Plan)

1. **Фаза 1: Сборка дизайн-системы и базового шаблона**
   * Создание `index.html` с семантической структурой всех 6 слайд-секций.
   * Создание `style.css` с дизайн-токенами из [`minimalist-ui`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/minimalist-ui/SKILL.md), типографикой и `@media print` правилами 16:9.
2. **Фаза 2: Поэкранная верстка и наполнение контентом**
   * Реализация блоков 1–6 в строгом соответствии с ТЗ из [`code_artifact.md`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/code_artifact.md).
   * Интеграция аккордеонов и адаптивных карточек с использованием [`card`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/card/SKILL.md) и [`tab-accordion`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/tab-accordion/SKILL.md).
3. **Фаза 3: Интерактивность и Deeplink WhatsApp**
   * Привязка скриптов раскрытия аккордеонов и переключения режима презентации.
   * Прошивка таргетированных сообщений для всех кнопок WhatsApp.
4. **Фаза 4: Тестирование и полировка**
   * Тестирование мобильной версии на реальных экранах смартфонов.
   * Проверка экспорта в PDF через диалог печати браузера (Ctrl+P).
   * Валидация Core Web Vitals и чистоты кода по скиллу [`full-output-enforcement`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/full-output-enforcement/SKILL.md).
