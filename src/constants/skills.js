import {
  MdWeb,
  MdDns,
  MdLayers,
  MdSmartphone,
  MdStorage,
  MdBuild,
} from "react-icons/md";

export const MAX_MONTHS = 30;

export const SKILLS = [
  {
    category: "Frontend",
    icon: MdWeb,
    skills: [
      { name: "ReactJS", months: 6, label: "0.5 yr" },
      { name: "HTML", months: 24, label: "2 yrs" },
      { name: "TailwindCSS", months: 12, label: "1 yr" },
      { name: "JavaScript", months: 8, label: "0.7 yr" },
    ],
  },

  {
    category: "Backend",
    icon: MdDns,
    skills: [
      { name: "NodeJS", months: 6, label: "0.5 yr" },
      { name: "ExpressJS", months: 6, label: "0.5 yr" },
      { name: "PHP", months: 6, label: "0.5 yr" },
    ],
  },

  {
    category: "Frameworks",
    icon: MdLayers,
    skills: [
      { name: "Laravel", months: 6, label: "0.5 yr" },
      { name: "Livewire", months: 6, label: "0.5 yr" },
      { name: "Flutter", months: 6, label: "0.5 yr" },
    ],
  },

  {
    category: "Mobile",
    icon: MdSmartphone,
    skills: [
      { name: "Dart", months: 6, label: "0.5 yr" },
      { name: "Android Studio", months: 2, label: "0.2 yr" },
    ],
  },

  {
    category: "Database",
    icon: MdStorage,
    skills: [
      { name: "MySQL", months: 18, label: "1.5 yrs" },
      { name: "MongoDB", months: 6, label: "0.5 yr" },
      { name: "SQLite", months: 3, label: "0.25 yr" },
      { name: "Sequelize ORM", months: 6, label: "0.5 yr" },
      { name: "Mongoose", months: 6, label: "0.5 yr" },
    ],
  },

  {
    category: "Tools & Deployment",
    icon: MdBuild,
    skills: [
      { name: "Git & GitHub", months: 18, label: "1.5 yrs" },
      { name: "Docker", months: 6, label: "0.5 yr" },
      { name: "Postman", months: 18, label: "1.5 yrs" },
      { name: "Vercel", months: 3, label: "0.25 yr" },
      { name: "Render", months: 3, label: "0.25 yr" },
    ],
  },
];
