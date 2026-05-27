import {
  shapeLogo,
  shape1,
  shape3,
  shape4,
  shape5,
  shape6,
  shape7,
  shape8,
  shape9,
  shape10,
  shape11,
  shape12,
} from "@/assets/projects/shape";
import {
  chlLogo,
  chl1,
  chl2,
  chl3,
  chl4,
  chl5,
  chl6,
} from "@/assets/projects/chl";
import { rvsLogo, rvs1, rvs2, rvs3, rvs4 } from "@/assets/projects/rvs";
import {
  tableoLogo,
  tableo1,
  tableo2,
  tableo3,
  tableo4,
  tableo5,
} from "@/assets/projects/tableo";
import {
  swiftLogo,
  swift1,
  swift2,
  swift3,
  swift4,
  swift5,
  swift6,
  swift7,
  swift8,
  swift9,
} from "@/assets/projects/swift";

export const PROJECTS = [
  {
    id: 1,
    title: "S.H.A.P.E: Mobile Learning Application for Special Needs Education",
    description:
      "S.H.A.P.E is a mobile learning application developed for students under Special Needs Education (SNED). The application allows students to access educational activities and interactive games even without internet connection through offline functionality. It includes a total of 20+ interactive educational games designed to enhance learning engagement. Integrated with a web management system, teachers can upload lessons, monitor student progress, manage curriculum and semesters, and track achievements through an awards system. The platform also includes automated grading and progress tracking features.",
    category: "mobile",
    buildTime: "4mo",
    techStack: ["Flutter", "Dart", "Flame Engine", "SQLite", "Git & GitHub"],
    thumbnail: shapeLogo,
    screenshots: [shape8, shape9, shape10, shape11, shape12],
    github: "#",
    liveDemo: "",
    featured: true,
    completedAt: "2025-12-01",
    features: [
      "Offline gameplay functionality",
      "Interactive educational activities",
      "Student progress tracking",
      "Awards and achievement system",
    ],
    contributions: [
      "Frontend development (UI and feature implementation)",
      "Backend integration and API handling",
      "Development of 5+ interactive educational games",
    ],
  },
  {
    id: 2,
    title: "S.H.A.P.E Admin & Learning Management System",
    description:
      "The S.H.A.P.E web application serves as the administrative and educational management platform for teachers and school administrators. Teachers can upload activities and lessons, monitor student performance, manage semesters and curriculum structures, and review automated grading results. The system also includes student tracking, awards management, and centralized content management integrated with the mobile application.",
    category: "web",
    buildTime: "5mo",
    techStack: [
      "Laravel",
      "Livewire",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Git & GitHub",
    ],
    thumbnail: shapeLogo,
    screenshots: [shape1, shape3, shape4, shape5, shape6, shape7],
    github: "#",
    liveDemo: "",
    featured: true,
    completedAt: "2025-12-01",
    features: [
      "Lesson and activity management",
      "Student monitoring dashboard",
      "Automated grading system",
      "Awards and achievement management",
      "Semester and curriculum management",
      "Teacher and admin role management",
      "Exportable reports (Docx)",
    ],
    contributions: [
      "Frontend development (UI implementation and integration)",
      "Backend development (APIs, logic, and database design)",
      "System integration and feature implementation",
    ],
  },
  {
    id: 3,
    title: "CHL SmartSolutions",
    description:
      "An eCommerce web application with CMS, inventory management, and role-based functionalities for customers, cashiers, technicians, and administrators.",
    category: "web",
    buildTime: "5mo",
    techStack: ["Laravel", "Livewire", "PHP", "MySQL", "Git & GitHub"],
    thumbnail: chlLogo,
    screenshots: [chl1, chl2, chl3, chl4, chl5, chl6],
    github: "#",
    liveDemo: "",
    featured: true,
    completedAt: "2025-11-01",
    features: [
      "Role-based access control",
      "Inventory management system",
      "Online order tracking",
      "Cashier management for walk-in customers",
      "Service task management for technicians",
      "CMS for product and content management",
      "Order and staff monitoring dashboard",
      "Exportable reports (Csv)",
    ],
    contributions: [
      "Frontend development (UI implementation and integration)",
      "Backend development (APIs, logic, and database design)",
      "System architecture and full feature implementation",
    ],
  },
  {
    id: 4,
    title: "WindShieldRVS",
    description:
      "A web-based house assessment system that evaluates the vulnerability of one-storey houses against strong winds through a guided assessment process.",
    category: "web",
    buildTime: "2mo",
    techStack: ["Laravel", "Livewire", "PHP", "MySQL", "Git & GitHub"],
    thumbnail: rvsLogo,
    screenshots: [rvs1, rvs2, rvs3, rvs4],
    github: "#",
    liveDemo: "",
    featured: false,
    completedAt: "2025-12-01",
    features: [
      "Guided house assessment form",
      "Automated vulnerability rating generation",
      "Strong wind risk evaluation",
      "Assessment submission management",
      "Admin dashboard for monitoring assessments",
      "House location tracking",
      "Responsive web interface",
      "Exportable reports (PDF)",
    ],
    contributions: [
      "Frontend development (UI implementation and integration)",
      "Backend development (APIs, logic, and database design)",
      "System design, deployment, and full implementation",
    ],
  },
  {
    id: 5,
    title: "Tableo: Event Tabulation System",
    description:
      "A web-based event tabulation system designed for managing scoring and ranking of candidates in competitions. It supports judge score submissions, automated tallying, tie-break handling, and real-time result computation with exportable reports.",
    category: "web",
    buildTime: "2mo",
    techStack: [
      "ReactJS",
      "ExpressJS",
      "Sequelize",
      "MySQL",
      "JavaScript",
      "Git & GitHub",
    ],
    thumbnail: tableoLogo,
    screenshots: [tableo1, tableo2, tableo3, tableo4, tableo5],
    github: "#",
    liveDemo: "",
    featured: false,
    completedAt: "2026-03-01",
    features: [
      "Judge scoring and submission system",
      "Automated score tallying and ranking",
      "Tie-score handling and resolution",
      "Candidate management system",
      "Real-time results computation",
      "Exportable reports (PDF)",
    ],
    contributions: [
      "Backend development (API, scoring logic, and database design)",
      "Frontend support and UI adjustments for core features",
    ],
  },
  {
    id: 6,
    title: "SwiftDocs: Online Document Request System",
    description:
      "A web-based document request and tracking system for students to request academic documents online. It features role-based access for admins, staff, RMO, and cashier. The system supports request tracking, document verification, payment processing, and release management, along with reporting and sales monitoring.",
    category: "web",
    buildTime: "2mo",
    techStack: [
      "ReactJS",
      "ExpressJS",
      "Sequelize",
      "MySQL",
      "JavaScript",
      "Git & GitHub",
      "Docker",
    ],
    thumbnail: swiftLogo,
    screenshots: [
      swift1,
      swift2,
      swift3,
      swift4,
      swift5,
      swift6,
      swift7,
      swift8,
      swift9,
    ],
    github: "#",
    liveDemo: "",
    featured: true,
    completedAt: "2026-04-01",
    features: [
      "Online document request system",
      "Real-time request tracking",
      "Role-based access control (Admin, Staff, RMO, Cashier)",
      "Document verification and release workflow",
      "Sales and analytics dashboard",
      "Exportable reports (PDF)",
    ],
    contributions: [
      "Full-stack development (frontend and backend implementation)",
      "System architecture, API design, and database design",
      "End-to-end feature development and integration",
    ],
  },
];

export const isRecent = (completedAt) => {
  const now = new Date();
  const projectDate = new Date(completedAt);
  const twoMonthsAgo = new Date(
    now.getFullYear(),
    now.getMonth() - 2,
    now.getDate(),
  );
  return projectDate >= twoMonthsAgo;
};

export const getProjectsWithRecent = () => {
  return PROJECTS.map((project) => ({
    ...project,
    recent: isRecent(project.completedAt),
  }));
};
