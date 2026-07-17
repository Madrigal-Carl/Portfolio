import {
  MdWeb,
  MdDns,
  MdLayers,
  MdSmartphone,
  MdStorage,
  MdBuild,
} from "react-icons/md";

import {
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiLivewire,
  SiFlutter,
  SiDart,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiSequelize,
  SiMongoose,
  SiGit,
  SiPostman,
  SiAndroidstudio,
  SiVercel,
  SiRender,
  SiCss,
} from "react-icons/si";

export const SKILLS = [
  {
    category: "Frontend",
    icon: MdWeb,
    skills: [
      { name: "ReactJS", level: "Intermediate", icon: SiReact },
      { name: "HTML", level: "Proficient", icon: SiHtml5 },
      { name: "CSS", level: "Proficient", icon: SiCss },
      { name: "TailwindCSS", level: "Advanced", icon: SiTailwindcss },
      { name: "JavaScript", level: "Intermediate", icon: SiJavascript },
    ],
  },

  {
    category: "Backend",
    icon: MdDns,
    skills: [
      { name: "NodeJS", level: "Intermediate", icon: SiNodedotjs },
      { name: "PHP", level: "Intermediate", icon: SiPhp },
    ],
  },

  {
    category: "Frameworks",
    icon: MdLayers,
    skills: [
      { name: "Laravel", level: "Intermediate", icon: SiLaravel },
      { name: "Livewire", level: "Intermediate", icon: SiLivewire },
      { name: "ExpressJS", level: "Intermediate", icon: SiExpress },
      { name: "Flutter", level: "Basic", icon: SiFlutter },
    ],
  },

  {
    category: "Mobile",
    icon: MdSmartphone,
    skills: [{ name: "Dart", level: "Basic", icon: SiDart }],
  },

  {
    category: "Database",
    icon: MdStorage,
    skills: [
      { name: "MySQL", level: "Advanced", icon: SiMysql },
      { name: "MongoDB", level: "Intermediate", icon: SiMongodb },
      { name: "SQLite", level: "Basic", icon: SiSqlite },
      { name: "Sequelize ORM", level: "Intermediate", icon: SiSequelize },
      { name: "Mongoose", level: "Intermediate", icon: SiMongoose },
    ],
  },

  {
    category: "Tools & Deployment",
    icon: MdBuild,
    skills: [
      { name: "Git & GitHub", level: "Proficient", icon: SiGit },
      { name: "Postman", level: "Proficient", icon: SiPostman },
      { name: "Android Studio", level: "Basic", icon: SiAndroidstudio },
      { name: "Vercel", level: "Basic", icon: SiVercel },
      { name: "Render", level: "Basic", icon: SiRender },
    ],
  },
];
