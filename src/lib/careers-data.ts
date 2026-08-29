export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

export const POSITIONS: JobPosition[] = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Developer (React / Next.js / Node.js)",
    department: "Engineering",
    location: "Chennai, Tamil Nadu",
    type: "Full-Time",
    experience: "1 - 4 Years",
    overview: "We are seeking a talented full-stack engineer to build modern, responsive web applications and custom business automation tools using Next.js, React, TypeScript, and relational databases.",
    responsibilities: [
      "Develop high-performance client-facing web portals and responsive dashboards.",
      "Architect clean backend APIs, authentication filters, and database schemas.",
      "Integrate payment gateways, GST e-invoicing APIs, and third-party webhooks.",
      "Collaborate directly with senior architects and client project stakeholders."
    ],
    requirements: [
      "Proficiency in React.js, Next.js (App Router), TypeScript, and Tailwind CSS.",
      "Solid understanding of relational databases (PostgreSQL/MySQL) and RESTful APIs.",
      "Familiarity with Git version control and modern deployment workflows.",
      "Strong problem-solving attitude and passion for building scalable software."
    ]
  },
  {
    id: "erp-consultant",
    title: "ERP Business Analyst & Solutions Consultant",
    department: "Solutions & Architecture",
    location: "Chennai, Tamil Nadu",
    type: "Full-Time",
    experience: "2 - 5 Years",
    overview: "Bridge the gap between client operational demands and software architecture. You will analyze business workflows (manufacturing, retail, steel fabrication) and define ERP functional specifications.",
    responsibilities: [
      "Conduct discovery sessions with business leaders to map shop-floor and accounting workflows.",
      "Draft detailed functional requirement specifications (FRS) and module wireframes.",
      "Supervise ERP implementation phases, data migration from legacy Excel/Tally, and user testing.",
      "Conduct training sessions for client department heads and administrative staff."
    ],
    requirements: [
      "Proven experience in business process mapping, ERP consulting, or software requirement analysis.",
      "Good understanding of Indian business workflows (GST billing, inventory management, purchase cycles).",
      "Strong verbal and written communication skills in English and Tamil.",
      "Degree in Engineering, Computer Applications, or Business Administration."
    ]
  },
  {
    id: "uiux-frontend",
    title: "UI/UX Designer & Frontend Specialist",
    department: "Product Design",
    location: "Chennai / Hybrid",
    type: "Full-Time",
    experience: "1 - 3 Years",
    overview: "Craft intuitive, aesthetic user interfaces for enterprise management software, e-commerce storefronts, and mobile applications that delight business users.",
    responsibilities: [
      "Design wireframes, high-fidelity prototypes, and component design systems in Figma.",
      "Translate UX wireframes into clean, semantic Tailwind CSS and React frontend components.",
      "Conduct usability tests and iterate on dashboard typography, spacing, and micro-interactions.",
      "Ensure cross-browser compatibility and mobile responsiveness on all deliverables."
    ],
    requirements: [
      "Strong portfolio demonstrating UI/UX design for web applications and mobile apps.",
      "Expertise in Figma, modern CSS/Tailwind, and component-based frontend libraries.",
      "Sharp eye for clean typography, information hierarchy, and professional whitespace.",
      "Understanding of web accessibility and performance optimization standards."
    ]
  }
];
