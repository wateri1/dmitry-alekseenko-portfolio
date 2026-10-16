---
trigger: always_on
description: Обязательное применение скиллов перед написанием кода, верстки и контента
---

# Регламент обязательного использования скиллов (Skills Enforcement Rule)

Настоящее правило является безусловным стандартом разработки в рамках данного проекта и имеет высший приоритет при выполнении любых задач по верстке, дизайну, копирайтингу, рефакторингу и оптимизации.

---

## 1. Главное требование: "Skill-First" подход
Перед тем как написать, изменить или сгенерировать любой файл (HTML, CSS, JS, Markdown), компонент или блок интерфейса, **ТЫ ОБЯЗАН СВЕРИТЬСЯ С СООТВЕТСТВУЮЩИМ СКИЛЛОМ**:

1. **Запрещено писать код или тексты "из головы"**, если в библиотеке скиллов (`.agents/skills/` или глобальных `skills/`) есть скилл, отвечающий за данный тип блока, страницы или задачи.
2. **Обязательное чтение через `view_file`**: Перед реализацией блока необходимо открыть и изучить соответствующий `SKILL.md` (например, `hero-generator`, `cta-generator`, `tab-accordion`, `pricing-page-generator`, `card`, `grid`, `footer-generator`).
3. **Единый источник соответствия (SSOT)**: Карта соответствия блоков и скиллов зафиксирована в файле [`code_artifact_skills_roadmap.md`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/code_artifact_skills_roadmap.md). Сверяйся с ней перед каждым этапом.

---

## 2. Матрица обязательных скиллов по типам задач

### А. Верстка блоков сайта (Page & Component Generators)
* **Главный экран (Hero):** Перед написанием секции ОБЯЗАТЕЛЬНО изучить [`hero-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/hero-generator/SKILL.md), [`cta-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/cta-generator/SKILL.md) и [`heading-structure`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/heading-structure/SKILL.md).
* **Кейсы и портфолио:** ОБЯЗАТЕЛЬНО изучить [`customer-stories-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/customer-stories-page-generator/SKILL.md), [`card`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/card/SKILL.md), [`tab-accordion`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/tab-accordion/SKILL.md) и [`image-optimization`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/image-optimization/SKILL.md).
* **Смысловой подход и преимущества:** ОБЯЗАТЕЛЬНО изучить [`features-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/features-page-generator/SKILL.md) и [`grid`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/grid/SKILL.md).
* **Тарифы и услуги:** ОБЯЗАТЕЛЬНО изучить [`pricing-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/pricing-page-generator/SKILL.md), [`services-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/services-page-generator/SKILL.md) и [`redesign-existing-projects`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/redesign-existing-projects/SKILL.md).
* **Процесс работы (шаги):** ОБЯЗАТЕЛЬНО изучить [`howto-section-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/howto-section-generator/SKILL.md) и [`schema-markup`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/schema-markup/SKILL.md).
* **FAQ и подвал:** ОБЯЗАТЕЛЬНО изучить [`faq-page-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/faq-page-generator/SKILL.md), [`tab-accordion`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/tab-accordion/SKILL.md), [`footer-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/footer-generator/SKILL.md) и [`trust-badges-generator`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/trust-badges-generator/SKILL.md).

### Б. Визуальная эстетика и дизайн-система (Anti-Slop Standards)
* Строго следовать требованиям [`design-taste-frontend`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/design-taste-frontend/SKILL.md), [`taste-skill`](file:///C:/Users/Wateri/.gemini/config/skills/taste-skill/SKILL.md) и [`high-end-visual-design`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/high-end-visual-design/SKILL.md).
* Никаких дешевых эффектов: запрещен грязный размытый стеклянный блюр, фиолетово-неоновые градиенты, центрированные списки из одинаковых карточек с круглыми иконками.
* Стилистика: теплый бумажный минимализм ([`minimalist-ui`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/minimalist-ui/SKILL.md)) со швейцарской модульной сеткой и тонкими границами 1px (`#D8D5CD`).
* Использовать точные дизайн-токены и шрифтовые пары из [`ui-ux-pro-max-skill`](file:///C:/Users/Wateri/.gemini/config/skills/ui-ux-pro-max-skill/SKILL.md).

### В. Полный и завершенный код (Full-Output Enforcement)
* Строго соблюдать скилл [`full-output-enforcement`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/full-output-enforcement/SKILL.md):
  * **Запрещены любые пропуски в коде**: `// ...`, `// rest of code`, `// implement here`, `/* TODO */`, `...`.
  * Каждый файл пишется целиком от начала до конца в 100% рабочем состоянии.
  * Если код объемный, разбивать работу на законченные логические этапы, но никогда не усекать содержимое файлов.

### Г. Тексты и формулировки (Copywriting & Tone of Voice)
* Следовать скиллам [`copywriting`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/copywriting/SKILL.md) и [`humanizer`](file:///C:/Users/Wateri/.gemini/config/skills/humanizer/SKILL.md):
  * Говорить на языке конкретной выгоды для бизнеса (деньги, конверсия, заявки в WhatsApp, скорость).
  * Устранять напыщенные штампы («инновационный», «команда профессионалов», «уникальный подход»).
  * Подача от первого лица (Дмитрий Алексеенко — персональная ответственность, прямой контакт без посредников).

### Д. Режим презентации 16:9 и Mobile-First
* Соблюдать скиллы [`rendering-strategies`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/rendering-strategies/SKILL.md) и [`mobile-friendly`](file:///c:/Users/Wateri/Desktop/antigravity/sites/portfolio_site/.agents/skills/mobile-friendly/SKILL.md):
  * Каждый из 6 блоков должен идеально вписываться в пропорции 16:9 (`@media print` с `size: 16in 9in`).
  * На мобильных устройствах все кликабельные элементы (особенно кнопки WhatsApp) должны быть не менее 48px в высоту и попадать в удобную зону для пальца.

---

## 3. Чек-лист самопроверки перед сдачей каждого блока
Перед тем как завершить ответ или заявить о готовности блока/файла, проверь:
1. [ ] Изучил ли я `SKILL.md` соответствующего блока перед написанием кода?
2. [ ] Соответствует ли структура требованиям из скилла?
3. [ ] Нет ли в коде плейсхолдеров, `TODO` и урезанных мест (согласно `full-output-enforcement`)?
4. [ ] Соответствуют ли шрифты, цвета и отступы утвержденной дизайн-системе?
5. [ ] Корректно ли блок ведет себя при масштабировании в формат 16:9 и на мобильных устройствах?
