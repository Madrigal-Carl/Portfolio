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
      { name: "ReactJS", months: 6, label: "6 months" },
      { name: "HTML", months: 24, label: "2 yrs" },
      { name: "TailwindCSS", months: 12, label: "1 yr" },
      { name: "JavaScript", months: 8, label: "8 months" },
    ],
  },

  {
    category: "Backend",
    icon: MdDns,
    skills: [
      { name: "NodeJS", months: 6, label: "6 months" },
      { name: "ExpressJS", months: 6, label: "6 months" },
      { name: "PHP", months: 6, label: "6 months" },
    ],
  },

  {
    category: "Frameworks",
    icon: MdLayers,
    skills: [
      { name: "Laravel", months: 6, label: "6 months" },
      { name: "Livewire", months: 4, label: "4 months" },
      { name: "Flutter", months: 6, label: "6 months" },
    ],
  },

  {
    category: "Mobile",
    icon: MdSmartphone,
    skills: [{ name: "Dart", months: 6, label: "6 months" }],
  },

  {
    category: "Database",
    icon: MdStorage,
    skills: [
      { name: "MySQL", months: 18, label: "1.5 yrs" },
      { name: "MongoDB", months: 6, label: "6 months" },
      { name: "SQLite", months: 3, label: "3 months" },
      { name: "Sequelize ORM", months: 6, label: "6 months" },
      { name: "Mongoose", months: 6, label: "6 months" },
    ],
  },

  {
    category: "Tools & Deployment",
    icon: MdBuild,
    skills: [
      { name: "Git & GitHub", months: 18, label: "1.5 yrs" },
      { name: "Postman", months: 18, label: "1.5 yrs" },
      { name: "Android Studio", months: 2, label: "2 months" },
    ],
  },
];
