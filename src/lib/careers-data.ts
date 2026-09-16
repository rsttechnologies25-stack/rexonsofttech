export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  compensation?: string;
  compensationNotice?: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  highlights?: string[];
}

export const POSITIONS: JobPosition[] = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Developer (React / Next.js / Node.js)",
    department: "Engineering",
    location: "Chennai, Tamil Nadu",
    type: "Full-Time",
    experience: "1 - 4 Years",
    compensation: "Competitive / Performance Bonuses",
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
    id: "marketing-bde",
    title: "Marketing Executive / Business Development Executive",
    department: "Marketing & Business Development",
    location: "Chennai / Hybrid / Remote",
    type: "Full-Time / Part-Time",
    experience: "Fresher to Experienced",
    compensation: "Commission / Performance-Based Only",
    compensationNotice: "This is a commission-only opportunity with no fixed monthly salary. You will earn based on your marketing performance, successful lead generation, client acquisition, and business conversions with uncapped earning potential.",
    overview: "We are looking for motivated individuals (open to freshers as well as experienced professionals) to join our growing marketing and business development team. You will be responsible for identifying potential business customers, generating qualified leads, promoting RexonSoftTech's technology services, and converting opportunities into clients.",
    responsibilities: [
      "Identify and research potential customers and businesses across manufacturing, retail, e-commerce, and services.",
      "Generate qualified leads through online and offline channels (LinkedIn, email, phone calls, WhatsApp, and social media).",
      "Promote RexonSoftTech's custom ERP, billing engines, web applications, mobile apps, and AI solutions.",
      "Build and maintain strong relationships with prospective business clients and decision-makers.",
      "Understand customer requirements and communicate them effectively to the technical and business teams.",
      "Follow up with potential clients regularly, schedule client meetings, and coordinate technical discussions.",
      "Maintain prospect information, track outreach pipelines, and report lead conversions.",
      "Assist with social media and digital marketing activities, and explore new industry opportunities."
    ],
    requirements: [
      "Freshers welcome: Good communication skills, confidence in speaking with new people, willingness to learn, and target-oriented attitude (Training and guidance provided).",
      "Experienced candidates: Prior experience in B2B marketing, software sales, lead generation, inside sales, or client acquisition will be preferred.",
      "Strong verbal and written communication and interpersonal skills.",
      "Basic computer/internet literacy, research and prospecting capability, and disciplined follow-up ability.",
      "Available for either dedicated Full-Time engagement or flexible Part-Time commitment (students, freelancers, and graduates welcome)."
    ],
    highlights: [
      "No fixed salary – Uncapped commission & incentive structure on conversions",
      "Comprehensive training and guidance provided for freshers",
      "Open to Full-Time and flexible Part-Time schedules",
      "Clear career growth path: Executive → Senior BDE → BD Manager → Sales Leadership"
    ]
  },
  {
    id: "erp-consultant",
    title: "ERP Business Analyst & Solutions Consultant",
    department: "Solutions & Architecture",
    location: "Chennai, Tamil Nadu",
    type: "Full-Time",
    experience: "2 - 5 Years",
    compensation: "Competitive / Industry Standard",
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
    compensation: "Competitive / Industry Standard",
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
