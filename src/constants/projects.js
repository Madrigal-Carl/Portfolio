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

export const PROJECTS = [
  {
    id: 1,
    title: "S.H.A.P.E: Mobile Learning Application for Special Needs Education",
    description:
      "S.H.A.P.E is a mobile learning application developed for students under Special Needs Education (SNED). The application allows students to access educational activities and interactive games even without internet connection through offline functionality. Integrated with a web management system, teachers can upload lessons, monitor student progress, manage curriculum and semesters, and track achievements through an awards system. The platform also includes automated grading and progress tracking features.",
    category: "mobile",
    buildTime: "4mo",
    techStack: ["Flutter", "Dart", "Flame Engine", "SQLite"],
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
      "Git&Github",
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
    ],
  },
  {
    id: 3,
    title: "CHL SmartSolutions",
    description:
      "An eCommerce web application with CMS, inventory management, and role-based functionalities for customers, cashiers, technicians, and administrators.",
    category: "web",
    buildTime: "5mo",
    techStack: ["Laravel", "Livewire", "PHP", "MySQL", "Git&GitHub", "VS Code"],
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
    ],
    methodology: "Agile Methodology",
  },
  {
    id: 4,
    title: "WindShieldRVS",
    description:
      "A web-based house assessment system that evaluates the vulnerability of one-storey houses against strong winds through a guided assessment process.",
    category: "web",
    buildTime: "2mo",
    techStack: ["Laravel", "Livewire", "PHP", "MySQL", "Git&GitHub", "VS Code"],
    thumbnail: rvsLogo,
    screenshots: [rvs1, rvs2, rvs3, rvs4],
    github: "#",
    liveDemo: "",
    completedAt: "2025-12-01",
    features: [
      "Guided house assessment form",
      "Automated vulnerability rating generation",
      "Strong wind risk evaluation",
      "Assessment submission management",
      "Admin dashboard for monitoring assessments",
      "House location tracking",
      "Responsive web interface",
    ],
    methodology: "Agile Methodology",
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
