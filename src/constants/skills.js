import {
  MdWeb,
  MdDns,
  MdLayers,
  MdSmartphone,
  MdStorage,
  MdBuild,
} from "react-icons/md";

export const MAX_MONTHS = 60;
export const SKILLS = [
  {
    category: "Frontend",
    icon: MdWeb,
    skills: [
      { name: "ReactJS", months: 36, label: "3 yrs" },
      { name: "HTML", months: 60, label: "5 yrs" },
      { name: "TailwindCSS", months: 24, label: "2 yrs" },
      { name: "JavaScript", months: 48, label: "4 yrs" },
    ],
  },

  {
    category: "Backend",
    icon: MdDns,
    skills: [
      { name: "NodeJS", months: 36, label: "3 yrs" },
      { name: "ExpressJS", months: 30, label: "2½ yrs" },
      { name: "PHP", months: 48, label: "4 yrs" },
    ],
  },

  {
    category: "Frameworks",
    icon: MdLayers,
    skills: [
      { name: "Laravel", months: 36, label: "3 yrs" },
      { name: "Livewire", months: 18, label: "1½ yrs" },
      { name: "Flutter", months: 24, label: "2 yrs" },
    ],
  },

  {
    category: "Mobile",
    icon: MdSmartphone,
    skills: [
      { name: "Dart", months: 12, label: "1 yr" },
      { name: "Android Studio", months: 24, label: "2 yrs" },
    ],
  },

  {
    category: "Database",
    icon: MdStorage,
    skills: [
      { name: "MySQL", months: 36, label: "3 yrs" },
      { name: "MongoDB", months: 24, label: "2 yrs" },
      { name: "SQLite", months: 12, label: "1 yr" },
      { name: "Sequelize ORM", months: 18, label: "1½ yrs" },
      { name: "Mongoose", months: 18, label: "1 yr" },
    ],
  },

  {
    category: "Tools & Deployment",
    icon: MdBuild,
    skills: [
      { name: "Git & GitHub", months: 36, label: "3 yrs" },
      { name: "Docker", months: 18, label: "1½ yrs" },
      { name: "Postman", months: 24, label: "2 yrs" },
      { name: "Vercel", months: 24, label: "2 yrs" },
      { name: "Render", months: 36, label: "3 yrs" },
    ],
  },
];
