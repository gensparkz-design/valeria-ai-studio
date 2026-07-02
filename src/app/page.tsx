"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Brain,
  ChevronDown,
  Database,
  Globe,
  Image as ImageIcon,
  MessageCircle,
  PenTool,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";

type Lang = "en" | "ru";

const data = {
  en: {
    book: "Book a Call",
    badge: "AI Product • AI Agents • MVP • Automation",
    heroTitle: "AI Product Management & Automation Studio",
    heroText:
      "I help businesses turn ideas into AI-powered products, build MVPs, automate workflows, create AI content and launch digital solutions faster.",
    primary: "Discuss Project",
    secondary: "View Solutions",
    telegram: "Message on Telegram",
    solutionsTitle: "Solutions",
    solutionsText:
      "Business-focused AI solutions designed to save time, automate work and launch products faster.",
    casePreview: "Case Preview",
    whyTitle: "Why Choose Me",
    whyText:
      "Product thinking, AI tools and fast execution for practical business results.",
    aboutTitle: "About Valeria",
    aboutText:
      "Hi, I am Valeria — AI Product Manager and AI Solutions Builder. I combine product thinking, project management experience and modern AI tools to help businesses validate ideas, build MVPs and automate workflows.",
    pricingTitle: "Pricing",
    contactTitle: "Let us build your AI solution",
    contactText:
      "Tell me about your project, and I will help define the fastest useful version.",
    send: "Send Project Request",
    discuss: "Discuss Project",
    logoTagline: "AI Product Studio",
    consoleLabel: "AI Agent Console",
    consoleTitle: "Valeria AI Assistant",
    online: "Online",
    nav: {
      solutions: "Solutions",
      why: "Why Me",
      about: "About",
      pricing: "Pricing",
      contact: "Contact",
    },
    stats: [
      ["AI Services", "9+"],
      ["MVP & Prototypes", "Fast"],
      ["Automation", "24/7"],
      ["Product Approach", "End-to-End"],
    ] as [string, string][],
    steps: [
      "Client request received",
      "Analyzing business task",
      "Building MVP roadmap",
      "Preparing proposal",
    ],
    formFields: ["Name", "Email", "Company", "Project budget"],
    formDescription: "Project description",
    footerTagline: "AI Products • MVP • Automation • AI Agents",
  },
  ru: {
    contactTitle: "Давайте создадим ваше AI-решение",
contactText:
  "Расскажите о проекте, и я помогу определить самый быстрый и полезный вариант решения.",
telegram: "Написать в Telegram",
send: "Отправить заявку",
discuss: "Обсудить проект",
    heroText:
      "Помогаю бизнесу превращать идеи в AI-продукты, запускать MVP, автоматизировать процессы, создавать контент и быстрее выводить цифровые решения на рынок.",
    primary: "Обсудить проект",
    secondary: "Посмотреть решения",
    solutionsTitle: "Решения",
    solutionsText:
      "AI-решения для бизнеса: от продуктовой стратегии до рабочих инструментов и автоматизации.",
    casePreview: "Пример работы",
    whyTitle: "Почему выбирают меня",
    whyText:
      "Продуктовое мышление, AI-инструменты и быстрая реализация для реальных бизнес-задач.",
    aboutTitle: "Обо мне",
    aboutText:
      "Меня зовут Валерия. Я AI Product Manager и AI Solutions Builder. Я соединяю продуктовое мышление, опыт управления проектами и современные AI-инструменты, чтобы помогать бизнесу проверять идеи, запускать MVP и автоматизировать процессы.",
    pricingTitle: "Стоимость",
    contactTitle: "Давайте создадим ваше AI-решение",
    contactText:
      "Расскажите о проекте, и я помогу определить самый быстрый и полезный вариант решения.",
    send: "Отправить заявку",
    discuss: "Обсудить проект",
    logoTagline: "AI-продуктовая студия",
    consoleLabel: "AI Agent Console",
    consoleTitle: "Valeria AI Assistant",
    online: "Онлайн",
    nav: {
      solutions: "Решения",
      why: "Почему я",
      about: "Обо мне",
      pricing: "Стоимость",
      contact: "Контакты",
    },
    stats: [
      ["AI-услуги", "9+"],
      ["MVP и прототипы", "Fast"],
      ["Автоматизация", "24/7"],
      ["Продуктовый подход", "End-to-End"],
    ] as [string, string][],
    steps: [
      "Заявка клиента получена",
      "Анализ бизнес-задачи",
      "Создание MVP-roadmap",
      "Подготовка предложения",
    ],
    formFields: ["Имя", "Email", "Компания", "Бюджет проекта"],
    formDescription: "Описание проекта",
    footerTagline: "AI-продукты • MVP • Автоматизация • AI-агенты",
  },
};
const solutions = {
  en: [
    {
      icon: Brain,
      title: "AI Product Management",
      text: "Product discovery, MVP strategy, CJM, JTBD, roadmaps and product metrics.",
      example: {
        title: "Example: AI service product strategy",
        bullets: [
          "Defined target users and business problem",
          "Created MVP scope and product hypothesis",
          "Built CJM and JTBD scenarios",
          "Designed roadmap for launch and growth",
          "Selected key metrics: conversion, activation, retention",
        ],
      },
    },
    {
      icon: Rocket,
      title: "MVP Development",
      text: "AI-powered MVPs, prototypes, dashboards and web applications.",
      example: {
        title: "Example: MVP for Telegram booking bot",
        bullets: [
          "Created basic user flow",
          "Built prototype screens",
          "Defined core features for first release",
          "Prepared launch roadmap",
          "Added simple automation logic",
        ],
      },
    },
    {
      icon: Bot,
      title: "AI Agents",
      text: "Custom assistants for support, sales, HR, operations and internal workflows.",
      example: {
        title: "Example: Support AI agent",
        bullets: [
          "Connected knowledge base and FAQ sources",
          "Designed conversation flow and tone",
          "Added escalation to a human operator",
          "Integrated with CRM and tickets",
          "Reduced average response time",
        ],
      },
    },
    {
      icon: Zap,
      title: "Business Automation",
      text: "CRM workflows, reports, repetitive tasks, documents and API integrations.",
      example: {
        title: "Example: Lead processing automation",
        bullets: [
          "Automated client request collection",
          "Created AI-generated manager summaries",
          "Added lead qualification logic",
          "Connected notifications",
          "Reduced manual work for the team",
        ],
      },
    },
    {
      icon: MessageCircle,
      title: "Telegram Bots",
      text: "Bots for bookings, support, FAQs, reminders, notifications and lead generation.",
      example: {
        title: "Example: Booking Telegram bot",
        bullets: [
          "Built step-by-step booking flow",
          "Added slot and availability logic",
          "Connected reminders and notifications",
          "Collected leads into a database",
          "Enabled admin management panel",
        ],
      },
    },
    {
      icon: PenTool,
      title: "AI Content",
      text: "Landing pages, SEO articles, product descriptions, emails and sales copy.",
      example: {
        title: "Example: AI content pipeline",
        bullets: [
          "Defined tone of voice and templates",
          "Generated SEO article drafts",
          "Produced product descriptions at scale",
          "Prepared email sequences",
          "Set up review and editing workflow",
        ],
      },
    },
    {
      icon: ImageIcon,
      title: "AI Images",
      text: "Marketing creatives, banners, mockups, illustrations and brand visuals.",
      example: {
        title: "Example: Marketing creatives batch",
        bullets: [
          "Defined visual style and brand guidelines",
          "Generated banner and ad variations",
          "Created product mockups",
          "Prepared social media visuals",
          "Delivered export-ready assets",
        ],
      },
    },
    {
      icon: Database,
      title: "Documents AI",
      text: "PDF analysis, summaries, knowledge bases and data extraction.",
      example: {
        title: "Example: Document knowledge base",
        bullets: [
          "Ingested and parsed PDF documents",
          "Generated structured summaries",
          "Extracted key data fields",
          "Built searchable knowledge base",
          "Enabled Q&A over documents",
        ],
      },
    },
    {
      icon: Globe,
      title: "Business Websites",
      text: "Modern landing pages, service websites and AI web apps.",
      example: {
        title: "Example: Service landing page",
        bullets: [
          "Defined structure and key sections",
          "Designed modern responsive layout",
          "Wrote conversion-focused copy",
          "Added lead capture form",
          "Prepared for fast launch",
        ],
      },
    },
  ],

  ru: [
    {
      icon: Brain,
      title: "AI Product Management",
      text: "Продуктовая стратегия, MVP, CJM, JTBD, roadmap и продуктовые метрики.",
      example: {
        title: "Пример: продуктовая стратегия AI-сервиса",
        bullets: [
          "Определены целевые пользователи и бизнес-задача",
          "Сформирован MVP-scope и продуктовая гипотеза",
          "Подготовлены CJM и JTBD-сценарии",
          "Составлен roadmap запуска и развития",
          "Выбраны ключевые метрики: конверсия, активация, удержание",
        ],
      },
    },
    {
      icon: Rocket,
      title: "Разработка MVP",
      text: "AI-MVP, прототипы, дашборды, лендинги и веб-приложения.",
      example: {
        title: "Пример: MVP Telegram-бота для записи",
        bullets: [
          "Создан базовый пользовательский сценарий",
          "Подготовлены экраны прототипа",
          "Определены ключевые функции первой версии",
          "Составлен roadmap запуска",
          "Добавлена базовая логика автоматизации",
        ],
      },
    },
    {
      icon: Bot,
      title: "AI-агенты",
      text: "AI-помощники для поддержки, продаж, HR, операций и внутренних процессов.",
      example: {
        title: "Пример: AI-агент поддержки",
        bullets: [
          "Подключены база знаний и источники FAQ",
          "Спроектирован сценарий диалога и тон",
          "Добавлена передача оператору",
          "Настроена интеграция с CRM и тикетами",
          "Снижено среднее время ответа",
        ],
      },
    },
    {
      icon: Zap,
      title: "Автоматизация бизнеса",
      text: "CRM, отчеты, повторяющиеся задачи, документы и API-интеграции.",
      example: {
        title: "Пример: автоматизация обработки заявок",
        bullets: [
          "Автоматизирован сбор клиентских заявок",
          "Созданы AI-сводки для менеджера",
          "Добавлена логика квалификации лидов",
          "Подключены уведомления",
          "Снижена ручная нагрузка на команду",
        ],
      },
    },
    {
      icon: MessageCircle,
      title: "Telegram-боты",
      text: "Боты для записи, заявок, поддержки, FAQ, напоминаний и лидогенерации.",
      example: {
        title: "Пример: Telegram-бот для записи",
        bullets: [
          "Построен пошаговый сценарий записи",
          "Добавлена логика слотов и доступности",
          "Подключены напоминания и уведомления",
          "Заявки собираются в базу данных",
          "Добавлена панель управления для админа",
        ],
      },
    },
    {
      icon: PenTool,
      title: "AI-контент",
      text: "Лендинги, SEO-статьи, описания товаров, email-рассылки и продающие тексты.",
      example: {
        title: "Пример: конвейер AI-контента",
        bullets: [
          "Определены tone of voice и шаблоны",
          "Сгенерированы черновики SEO-статей",
          "Массово подготовлены описания товаров",
          "Подготовлены email-цепочки",
          "Настроен процесс ревью и редактуры",
        ],
      },
    },
    {
      icon: ImageIcon,
      title: "AI-изображения",
      text: "Креативы, баннеры, mockups, иллюстрации и визуалы для бренда.",
      example: {
        title: "Пример: пакет маркетинговых креативов",
        bullets: [
          "Определены визуальный стиль и гайдлайны",
          "Сгенерированы варианты баннеров и рекламы",
          "Созданы mockups продукта",
          "Подготовлены визуалы для соцсетей",
          "Переданы готовые к экспорту ассеты",
        ],
      },
    },
    {
      icon: Database,
      title: "Документы AI",
      text: "Анализ PDF, резюме документов, базы знаний и извлечение данных.",
      example: {
        title: "Пример: база знаний по документам",
        bullets: [
          "Загружены и разобраны PDF-документы",
          "Сформированы структурированные резюме",
          "Извлечены ключевые поля данных",
          "Построена база знаний с поиском",
          "Включён режим вопросов и ответов",
        ],
      },
    },
    {
      icon: Globe,
      title: "Сайты для бизнеса",
      text: "Лендинги, сайты услуг, личные бренды и AI-веб-приложения.",
      example: {
        title: "Пример: лендинг услуги",
        bullets: [
          "Определены структура и ключевые блоки",
          "Спроектирован современный адаптивный макет",
          "Написан продающий текст под конверсию",
          "Добавлена форма сбора заявок",
          "Подготовлен быстрый запуск",
        ],
      },
    },
  ],
};

const whyData = {
  en: [
    ["🎯", "Product Thinking", "Every solution starts with the business goal, user and metric."],
    ["⚡", "Fast Execution", "From idea to working MVP in days, not months."],
    ["🤖", "Modern AI Stack", "LLMs, agents, automation and integrations for real tasks."],
  ],
  ru: [
    ["🎯", "Продуктовое мышление", "Каждое решение начинается с бизнес-цели, пользователя и метрики."],
    ["⚡", "Быстрая реализация", "От идеи до рабочего MVP за дни, а не месяцы."],
    ["🤖", "Современный AI-стек", "LLM, агенты, автоматизация и интеграции под реальные задачи."],
  ],
};

const pricing = {
  en: [
    { title: "Starter AI Bot", price: "$500+", items: ["Telegram / web bot", "FAQ & lead capture", "Basic automation"] },
    { title: "Business Automation", price: "$1,500+", items: ["Workflow automation", "CRM & API integrations", "Dashboards"] },
    { title: "Custom AI Product", price: "$3,000+", items: ["Full MVP build", "Product strategy", "Custom integrations"] },
  ],
  ru: [
    { title: "Starter AI Bot", price: "$500+", items: ["Telegram / веб-бот", "FAQ и сбор заявок", "Базовая автоматизация"] },
    { title: "Business Automation", price: "$1,500+", items: ["Автоматизация процессов", "CRM и API-интеграции", "Дашборды"] },
    { title: "Custom AI Product", price: "$3,000+", items: ["Разработка MVP под ключ", "Продуктовая стратегия", "Индивидуальные интеграции"] },
  ],
};
export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const [openSolution, setOpenSolution] = useState<number | null>(null);

  const t = data[lang];
  const solutionCards = solutions[lang];
  const whyCards = whyData[lang];
  const priceCards = pricing[lang];

  const navItems: [string, string][] = [
    ["#solutions", t.nav.solutions],
    ["#why", t.nav.why],
    ["#about", t.nav.about],
    ["#pricing", t.nav.pricing],
    ["#contact", t.nav.contact],
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060a] text-white antialiased">
      <style>{`
        @keyframes vxSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes vxFloat {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vx-anim {
            animation: none !important;
          }
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(40%_40%_at_80%_20%,rgba(168,85,247,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      </div>
      <header className="fixed inset-x-0 top-0 z-50 h-[96px] border-b border-white/10 bg-[#05060a]/60 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-6 px-6">
          <a href="#top" className="group relative flex shrink-0 items-center gap-6">
            <span className="relative flex h-20 w-20 items-center justify-center">
              <span
                className="vx-anim absolute inset-0"
                style={{ animation: "vxSpin 12s linear infinite" }}
              >
                <span className="absolute inset-0 rounded-full border border-cyan-400/25" />
                <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]" />
              </span>

              <span
                className="vx-anim absolute inset-[-28px]"
                style={{ animation: "vxSpin 18s linear infinite" }}
              >
                <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
                  <defs>
                    <path
                      id="vxOrbitPath"
                      d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                    />
                  </defs>

                  <text
                    className="fill-white/60"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "6px",
                      fontWeight: 600,
                    }}
                  >
                    <textPath href="#vxOrbitPath" startOffset="0%">
                      VALERIA · AI · STUDIO ·
                    </textPath>
                  </text>
                </svg>
              </span>

              <span className="relative h-14 w-14 rounded-full bg-[radial-gradient(circle_at_30%_25%,#a5f3fc,#22d3ee_35%,#7c3aed_85%)] shadow-[0_0_18px_4px_rgba(34,211,238,0.45)] transition-all duration-500 group-hover:shadow-[0_0_28px_8px_rgba(124,58,237,0.65)]">
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.35),transparent_45%)]" />
              </span>
            </span>

            <span className="ml-4 hidden flex-col leading-none sm:flex">
              <span className="text-2xl font-bold tracking-tight text-white">
                Valeria AI Studio
              </span>

              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/70">
                {t.logoTagline}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl lg:flex">
            {navItems.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="group/nav relative rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {label}

                <span className="pointer-events-none absolute bottom-1 left-4 right-4 h-px origin-center scale-x-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-transform duration-300 group-hover/nav:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <div className="relative flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
              <span
                className={
                  "absolute bottom-1 top-1 w-11 rounded-full bg-gradient-to-r from-cyan-400/90 to-cyan-300/90 shadow-[0_0_16px_rgba(34,211,238,0.5)] transition-all duration-300 " +
                  (lang === "en" ? "left-1" : "left-12")
                }
              />

              <button
                type="button"
                onClick={() => setLang("en")}
                className={
                  "relative z-10 w-11 rounded-full py-1.5 text-sm font-semibold transition-colors duration-300 " +
                  (lang === "en" ? "text-black" : "text-white/60 hover:text-white")
                }
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => setLang("ru")}
                className={
                  "relative z-10 w-11 rounded-full py-1.5 text-sm font-semibold transition-colors duration-300 " +
                  (lang === "ru" ? "text-black" : "text-white/60 hover:text-white")
                }
              >
                RU
              </button>
            </div>

            <a
              href="#contact"
              className="relative hidden items-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(124,58,237,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(34,211,238,0.55)] sm:inline-flex"
            >
              {t.book}
            </a>
          </div>
        </div>
      </header>

      <div className="h-[96px]" aria-hidden="true" />
      <section id="top" className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <Sparkles size={14} className="text-cyan-300" />
              {t.badge}
            </span>

            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              {t.heroText}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_30px_rgba(34,211,238,0.35)]"
              >
                {t.primary}
                <ArrowRight size={18} />
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                {t.secondary}
  
              </a>
              <a
  href="https://t.me/genspark"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-7 py-3.5 font-semibold text-cyan-200 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
>
  Telegram
</a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/50">{t.consoleLabel}</p>
                  <h3 className="text-2xl font-semibold">{t.consoleTitle}</h3>
                </div>

                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-200">
                  {t.online}
                </span>
              </div>

              {t.steps.map((item, index) => (
                <div
                  key={item}
                  className="mb-4 rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                      {index + 1}
                    </div>

                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-4">
          {t.stats.map(([label, value]) => (
            <div
              key={label}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 text-center transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="text-5xl font-bold text-cyan-300">
                {value}
              </div>

              <div className="mt-3 text-white/60">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-5xl font-bold">{t.solutionsTitle}</h2>

        <p className="mt-5 max-w-3xl text-lg text-white/60">
          {t.solutionsText}
        </p>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {solutionCards.map(({ icon: Icon, title, text, example }, index) => {
            const isOpen = openSolution === index;

            return (
              <div
                key={title}
                onClick={() => setOpenSolution(isOpen ? null : index)}
                aria-expanded={isOpen}
                className={
                  "group relative cursor-pointer overflow-hidden rounded-[2rem] border bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 " +
                  (isOpen
                    ? "border-cyan-400/50 bg-white/10 shadow-[0_20px_60px_rgba(34,211,238,0.18)]"
                    : "border-white/10 hover:border-cyan-400/40")
                }
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/20" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <Icon className="text-cyan-300" size={34} />

                  <ChevronDown
                    className={
                      "shrink-0 text-white/50 transition-all duration-300 " +
                      (isOpen
                        ? "rotate-180 text-cyan-300"
                        : "group-hover:text-white/80")
                    }
                    size={22}
                  />
                </div>

                <h3 className="relative z-10 mt-6 text-2xl font-semibold">
                  {title}
                </h3>

                <p className="relative z-10 mt-5 leading-8 text-white/65">
                  {text}
                </p>

                <div
                  className={
                    "relative z-10 grid transition-all duration-500 ease-out " +
                    (isOpen
                      ? "mt-6 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="overflow-hidden">
  <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-6">

    <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
      {t.casePreview}
    </span>

    <h4 className="mt-4 text-lg font-semibold text-white">
      {example.title}
    </h4>

    <ul className="mt-4 space-y-3">
      {example.bullets.map((bullet) => (
        <li
          key={bullet}
          className="flex items-start gap-3 text-sm leading-6 text-white/70"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>

  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="why" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-5xl font-bold">{t.whyTitle}</h2>

        <p className="mt-5 max-w-3xl text-lg text-white/60">
          {t.whyText}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whyCards.map(([emoji, title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="text-4xl">{emoji}</div>

              <h3 className="mt-5 text-2xl font-semibold">
                {title}
              </h3>

              <p className="mt-4 leading-8 text-white/65">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur">
          <h2 className="text-5xl font-bold">{t.aboutTitle}</h2>

          <p className="mt-8 max-w-5xl text-xl leading-10 text-white/75">
            {t.aboutText}
          </p>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-5xl font-bold">{t.pricingTitle}</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {priceCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <div className="mt-5 text-5xl font-bold text-cyan-300">
                {item.price}
              </div>

              <ul className="mt-7 space-y-3 text-white/65">
                {item.items.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-10 inline-flex rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_30px_rgba(34,211,238,0.35)]"
              >
                {t.discuss}
              </a>
            </div>
          ))}
        </div>
      </section>
      <section id="why" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-5xl font-bold">{t.whyTitle}</h2>

        <p className="mt-5 max-w-3xl text-lg text-white/60">
          {t.whyText}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whyCards.map(([emoji, title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="text-4xl">{emoji}</div>

              <h3 className="mt-5 text-2xl font-semibold">
                {title}
              </h3>

              <p className="mt-4 leading-8 text-white/65">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur">
          <h2 className="text-5xl font-bold">{t.aboutTitle}</h2>

          <p className="mt-8 max-w-5xl text-xl leading-10 text-white/75">
            {t.aboutText}
          </p>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-5xl font-bold">{t.pricingTitle}</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {priceCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <div className="mt-5 text-5xl font-bold text-cyan-300">
                {item.price}
              </div>

              <ul className="mt-7 space-y-3 text-white/65">
                {item.items.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-10 inline-flex rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_30px_rgba(34,211,238,0.35)]"
              >
                {t.discuss}
              </a>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-5xl font-bold">{t.contactTitle}</h2>

        <p className="mt-5 max-w-3xl text-lg text-white/60">
          {t.contactText}
        </p>

        <form className="mt-12 grid gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-2">
          {t.formFields.map((field) => (
            <input
              key={field}
              placeholder={field}
              className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-400/40"
            />
          ))}

          <textarea
            placeholder={t.formDescription}
            rows={6}
            className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-400/40 md:col-span-2"
          />

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_30px_rgba(34,211,238,0.35)] md:col-span-2"
          >
            {t.send}
            <ArrowRight size={18} />
          </button>
        </form>
        <div className="mt-10 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 backdrop-blur-xl">

  <h3 className="text-2xl font-semibold">
    Prefer Telegram?
  </h3>

  <p className="mt-3 text-white/65">
    You can message me directly and receive a faster response.
  </p>

  <a
    href="https://t.me/genspark"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex items-center rounded-full bg-cyan-400 px-8 py-3 font-semibold text-black transition hover:scale-105"
  >
    @genspark
  </a>

</div>
      </section>

      <footer className="mt-20 border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold">Valeria AI Studio</h3>

            <p className="mt-2 text-white/50">
              {t.footerTagline}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
          <a
    href="https://t.me/genspark"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/10 px-5 py-3 text-white transition hover:bg-white/10"
>
    Telegram
</a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-5 py-3 text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>

            <a
              href="mailto:genspark.z@gmail.com"
              className="rounded-full border border-white/10 px-5 py-3 text-white transition hover:bg-white/10"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}