export const about = {
  summary:
    "Computer Science and Engineering graduate specializing in Artificial Intelligence & Machine Learning, with strong skills in Python, machine learning, backend development, and modern web technologies.",
  detail:
    "I enjoy building practical software that brings together intelligent features, reliable backend systems, and intuitive interfaces. My work spans everything from API design and database modeling to deployment and containerization.",
  stack: [
    "Python",
    "FastAPI",
    "React.js",
    "Django",
    "PostgreSQL",
    "Docker",
    "AI",
    "Machine Learning",
    "REST API's",
    "Git/GitHub",
  ],
};

export const skillGroups = [
  {
    id: "languages",
    index: "A",
    title: "Languages",
    items: ["Python", "JavaScript"],
  },
  {
    id: "backend",
    index: "B",
    title: "Backend",
    items: ["FastAPI", "Django", "JWT", "REST APIs"],
  },
  {
    id: "frontend",
    index: "C",
    title: "Frontend",
    items: ["React.js", "CSS"],
  },
  {
    id: "database",
    index: "D",
    title: "Database",
    items: ["PostgreSQL", "SQLite", "MongoDB"],
  },
  // {
  //   id: "ai-ml",
  //   index: "E",
  //   title: "AI / Machine Learning",
  //   items: ["Machine Learning", "Random Forest", "K-Means", "Google Gemini", "LangChain"],
  // },
  {
    id: "tools",
    index: "F",
    title: "Tools & Infrastructure",
    items: ["Git", "GitHub", "Docker"],
  },
];

export const experience = [
  {
    id: "quanhack",
    role: "Software Engineer Intern",
    company: "QuanHack",
    period: "May 2026 – Present",
    current: true,
    highlights: [
      "Contributed to the development of an enterprise-grade OKR management system using FastAPI and MongoDB.",
      "Assisted in implementing an AI Agent Subsystem powered by Google Gemini and LangChain.",
      "Worked on features including SMART Key Result generation and dynamic capability building.",
      "Worked with Docker and serverless deployment strategies to maintain consistent development and production environments.",
    ],
    stack: ["FastAPI", "MongoDB", "Gen AI", "LangChain", "Docker", "React JS"],
  },
];

export const projects = [
  {
    id: "air-pollution-monitoring",
    index: "01",
    badge: "Major Project | 2025–2026",
    title: "IoT-Based Real-Time Air Pollution Monitoring System with Machine Learning",
    problem:
      "Air quality data is sparse, expensive to collect, and rarely actionable at the local level for individuals.",
    solution:
      "A low-cost IoT system that captures live sensor readings, processes them through machine learning, and delivers location-based AQI insights and alerts on a mobile application.",
    built:
      "Designed the Arduino sensor pipeline (MQ135, MQ7, DHT22), built the Python/Flask backend and API layer, trained the Random Forest model, and implemented AQI visualization and alerting in a Flutter app.",
    stack: [
      "Arduino",
      "MQ135",
      "MQ7",
      "DHT22",
      "Python",
      "Flask",
      "Machine Learning",
      "Random Forest",
      "Flutter",
    ],
    architecture: [
      "Sensors",
      "Backend",
      "ML Processing",
      "Database / API",
      "Mobile Application",
    ],
    results: [
      "Random Forest model reached 92.14% accuracy",
      "Real-time AQI visualization with location-based monitoring and alerts",
      "Co-authored IEEE conference publication from this work",
    ],
    links: [],
  },
  {
    id: "disease-prediction",
    index: "02",
    badge: "Mini Project",
    title: "AI-Driven Disease Prediction & Doctor Consultancy System",
    problem:
      "People need trustworthy first-pass health guidance and a direct path to professional consultation without fragmented tools.",
    solution:
      "A Django-based platform that interprets user-reported symptoms with generative AI and connects patients to doctors with secure appointment booking.",
    built:
      "Implemented the Django backend, AI disease-prediction flow using Google Gemini / GenAI for real-time health insights, and the doctor consultancy with appointment booking and secure patient data management.",
    stack: ["Django", "Google Gemini", "GenAI", "REST", "Secure Data Handling"],
    architecture: null,
    results: [
      "Combines AI inference with web application logic in one working system",
      "End-to-end flow: symptoms → prediction → consultation → booking",
    ],
    links: [
            {
        label: "View Repository",
        href: "https://github.com/gsreedev/health_consultant",
        external: true,
      }
    ],
  },
  {
    id: "ecommerce",
    index: "03",
    badge: "Personal Project | 2025",
    title: "E-Commerce Web Application",
    problem:
      "A full-storefront backend with real cart behavior, search, and administrative control — built to prove core full-stack fundamentals.",
    solution:
      "A Django e-commerce application with product discovery, session-based cart management, and a custom admin panel for CRUD operations.",
    built:
      "Built product search with pagination, dynamic shopping cart (add / increment / decrement / remove), custom admin panel with CRUD operations on SQLite via Django ORM, and session-based cart persistence.",
    stack: ["Django", "Bootstrap", "SQLite", "Django ORM", "Session Management"],
    architecture: null,
    results: [
      "Complete storefront lifecycle from search to cart to administration",
      "Demonstrates backend fundamentals: ORM design, sessions, server-rendered UI",
    ],
    links: [
      {
        label: "View Repository",
        href: "https://github.com/gsreedev/ecommerce_webapp_shopease",
        external: true,
      }
    ],
  },
];

export const publication = {
  title:
    "A Hybrid IoT and Machine Learning Approach for Real-Time Air Pollution Detection and Prediction",
  venue: "IEEE conference paper (co-authored)",
  contributions: [
    "Low-cost IoT system built on Arduino-based sensors",
    "K-Means clustering for pattern discovery in sensor data",
    "Random Forest regression for pollution prediction",
    "Flutter application for real-time monitoring and prediction",
    "R² score of 0.92 on prediction results",
  ],
  // Set to the real DOI / publisher URL when available — no link is invented here.
  link: "https://ieeexplore.ieee.org/document/11425902",
};

export const education = [
  {
    id: "btech",
    degree: "Bachelor of Technology",
    focus: "Computer Science and Engineering — Artificial Intelligence & Machine Learning",
    institution: "Sree Buddha College of Engineering",
    period: "2022 – 2026",
    result: "CGPA: 7.4/10",
    primary: true,
  },
  {
    id: "hse",
    degree: "Higher Secondary Education",
    focus: "Science Stream",
    institution: "Sree Buddha Central School, Edakulangara",
    period: "2020 – 2022",
    result: "Percentage: 74%",
    primary: true,
  },
  {
    id: "hs",
    degree: "High School",
    focus: "General Education",
    institution: "Sree Buddha Central School, Edakulangara",
    period: "2018 – 2020",
    result: "Percentage: 94%",
    primary: true,
  }

];

export const certifications = [
  {
    id: "fullstack-ai",
    title: "Full Stack Web Development with AI Tools",
    issuer: "Next Gen Employability Program",
    link: "https://drive.google.com/file/d/1g85UjGAC_QSqA93EwoibKR7V7UmwVd5H/view?usp=drive_link",
  },
  {
    id: "ibm-python",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM / Coursera",
    link: "https://coursera.org/share/e0c374eb56dd1755e9d6ec76e7d78abe",
  },
  {
    id: "python-bootcamp",
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-1d9f023c-fb39-48b2-bbcb-912aac40d927/",
  },
  {
    id: "meta-apis",
    title: "APIs",
    issuer: "Meta / Coursera",
    link: "https://coursera.org/share/7fb1ffea3a378f92badf053f5e7d8e8a",
  },
];
