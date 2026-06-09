export const identity = {
  name: "Abhishek Mahato",
  handle: "abhishek-mahato0",
  role: "Software Engineer",
  focus: ["Full-stack systems", "AI engineering"],
  location: "Kathmandu, Nepal",
  years: "3+",
  email: "abhishek.mahato98258@gmail.com",
  phone: "9825878517",
  github: "https://github.com/abhishek-mahato0",
  linkedin: "https://www.linkedin.com/in/abhishek-mahato-012272239/",
  resume: "/Abhishek-Mahato-resume.pdf",
  tagline: "I build full-stack systems — and teach them to reason.",
  blurb:
    "Full-stack engineer shipping production web platforms used by millions, now wiring language models into the stack. I care about clean abstractions, fast feedback loops, and code that reads like it was meant to be read.",
};

export const stats = [
  { k: "Years shipping", v: "3+" },
  { k: "Users reached", v: "1M+" },
  { k: "npm packages", v: "2" },
  { k: "Prod platforms", v: "6" },
];

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C#", ".NET"],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "Tailwind",
      "ShadCN",
    ],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST", "GraphQL", "gRPC", "WebSockets"],
  },
  {
    group: "Data",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Kafka"],
  },
  {
    group: "AI / ML",
    items: ["LangChain", "HuggingFace", "RAG", "Embeddings", "Vector DBs"],
  },
  {
    group: "Quality",
    items: ["Jest", "Cypress", "Playwright", "Git", "GitLab", "CI/CD"],
  },
];

export const timeline = [
  {
    role: "Fullstack Developer",
    org: "Innovate Tech",
    place: "Baluwatar, Kathmandu",
    span: "Jul 2024 — Present",
    current: true,
    bullets: [
      "Own end-to-end delivery of high-performance web apps across database design, Node.js APIs, and React + TypeScript interfaces.",
      "Built a library of reusable, scalable UI components that cut feature lead time across the team.",
      "Designed robust REST APIs with optimized data-fetching strategies for tight frontend↔backend contracts.",
      "Drive every phase of the SDLC — concept, design, deploy, monitor — in an agile environment.",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Next.js",
      "Socket.io",
      "RTK Query",
    ],
  },
  {
    role: "React Frontend Developer — Trainee",
    org: "Naxa Pvt Ltd",
    place: "Kathmandu",
    span: "Sep 2023 — Jun 2024",
    current: false,
    bullets: [
      "Shipped geospatial dashboards with high-performance map rendering for municipalities and NGOs.",
      "Translated complex data flows into accessible, responsive interfaces.",
    ],
    tech: ["React", "OpenLayers", "MapLibre GL", "React Query", "Redux"],
  },
  {
    role: "React Frontend Developer — Intern",
    org: "Naxa Pvt Ltd",
    place: "Kathmandu",
    span: "Jun 2022 — Sep 2023",
    current: false,
    bullets: [
      "Built dynamic survey forms with validation logic and map-based data visualization.",
      "Learned to optimize React apps with lazy loading and memoization in production.",
    ],
    tech: ["React", "Tailwind", "Framer Motion", "Vite"],
  },
];

export const projects = [
  {
    name: "MySecond Teacher",
    kind: "E-learning platform",
    url: "https://mysecondteacher.com.np",
    scale: "1M+ users · South Asia",
    blurb:
      "Led frontend for an e-learning platform with collaborative ebook editing and real-time annotation over WebSockets. WCAG-compliant, offline-first for low-bandwidth regions.",
    tech: [
      "React",
      "Redux",
      "React Query",
      "WebSockets",
      "TypeScript",
      "CI/CD",
    ],
    accent: "blue",
    preview: "/mst.png",
  },
  {
    name: "HomeSchool Asia",
    kind: "Full-stack platform",
    url: "https://homeschool.asia",
    scale: "1000s of students",
    blurb:
      "Scalable homeschooling platform with real-time classrooms via Kafka + WebSockets, diagnostic assessments, and progress tracking. NestJS, PostgreSQL, Redis caching.",
    tech: ["React", "NestJS", "PostgreSQL", "Kafka", "Redis", "Docker"],
    accent: "mint",
    preview: "/hsa.jpeg",
  },
  {
    name: "Naxa Assessment System",
    kind: "GIS / spatial data",
    url: "https://assessment.naxa.com.np",
    scale: "Municipal scale",
    blurb:
      "Digital address tracking with smart search, GIS household mapping, and an analytics dashboard. High-performance geospatial rendering with MapLibre GL + OpenLayers.",
    tech: ["React", "OpenLayers", "MapLibre GL", "React Query", "Redux"],
    accent: "blue",
    preview: "/assessment.png",
  },
  {
    name: "Digital Metric Addressing",
    kind: "Disaster response",
    url: "https://dma-dev.naxa.com.np/dashboard",
    scale: "NGOs & municipalities",
    blurb:
      "Real-time geospatial survey system with dynamic validated forms and map-based visualization for spatial insights. Tuned with lazy loading + memoization.",
    tech: ["React", "OpenLayers", "MapLibre GL", "Vite", "TypeScript"],
    accent: "mint",
    preview: "/dmaps.png",
  },
  {
    name: "License Appointment System",
    kind: "Full-stack · Next.js",
    url: "https://license-appointment-system.vercel.app/",
    repo: "https://github.com/abhishek-mahato0/license-appointment-system",
    scale: "Role-based · Auth",
    blurb:
      "License scheduling with real-time slots, role-based access, admin dashboards, and audit logs. NextAuth + MongoDB, Shadcn/UI, env-based CI/CD on Vercel.",
    tech: ["Next.js", "MongoDB", "NextAuth", "Shadcn/UI", "Zod"],
    accent: "blue",
    preview: "/license.png",
  },
];

export const packages = [
  {
    name: "schema-validex",
    title: "Schema Validex",
    desc: "A TypeScript-first schema validation library. Custom & nested schemas, per-field errors + success values, custom messages, transform & refinement functions.",
    npm: "https://www.npmjs.com/package/schema-validex",
    repo: "https://github.com/abhishek-mahato0/validex",
    install: "npm i schema-validex",
    tags: ["TypeScript", "Validation"],
  },
  {
    name: "flashcss-vite",
    title: "FlashCSS",
    desc: "A lightweight, utility-first CSS engine for Vite — a TailwindCSS-style hybrid of on-demand compilation + HMR. Responsive, themable, minimal bundle.",
    npm: "https://www.npmjs.com/package/flashcss-vite",
    repo: "https://github.com/abhishek-mahato0/flashcss",
    install: "npm i flashcss-vite",
    tags: ["TypeScript", "Vite", "CSS"],
  },
];

export const blogs = [
  {
    title: "I Built My Own Zod-Like Validation Library in JavaScript",
    blurb:
      "I'd shipped Zod and Yup to production for years without questioning how they work internally. So I rebuilt one — here's what I learned.",
    url: "http://medium.com/@abhishek.mahato98258/i-built-my-own-zod-like-validation-library-in-javascript-heres-what-i-learned-5978a23dafc1",
    read: "8 min",
  },
  {
    title: "How I Created My Own UnoCSS-style Engine as a Vite Plugin",
    blurb:
      "A full walkthrough of building a custom UnoCSS-style engine as a Vite plugin — setup, configuration, and on-demand class generation.",
    url: "https://medium.com/@abhishek.mahato98258/how-i-created-my-own-unocss-style-engine-as-a-vite-plugin-611c7950f9ae",
    read: "12 min",
  },
  {
    title: "Setting Aliases in Your Terminal",
    blurb:
      "Boost developer productivity with shell aliases and Git plugins — custom shortcuts that cut errors and streamline Bash & Zsh workflows.",
    url: "https://medium.com/@abhishek.mahato98258/setting-aliases-in-your-terminal-4ad7721cdc43",
    read: "5 min",
  },
];
