import { useEffect } from "react";
import SectionHeader from "@/components/SectionHeader";
import TechChip from "@/components/TechChip";
import SkillShowcase from "@/components/SkillShowcase";
import { EXPERIENCE } from "@/constants/experience";
import { EDUCATION } from "@/constants/education";
import { ACHIEVEMENTS } from "@/constants/achievements";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto pb-20 md:pb-4 px-4 sm:px-6 py-6 space-y-6">
      {/* Profile Header */}
      <div className="bg-gray-50 dark:bg-[#2d2d2d] rounded-2xl p-5 sm:p-7 border border-gray-200 dark:border-gray-700 fade-up">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full play-green-grad flex items-center justify-center text-white text-4xl font-medium shadow-lg flex-shrink-0">
            AC
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100">
              Alex Chen
            </h1>
            <p className="text-play-green dark:text-emerald-400 font-medium mt-1">
              Senior Full Stack Developer
            </p>
            <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-play-green dark:hover:text-emerald-400 transition-colors"
              >
                <span className="material-icons-outlined text-[22px]">
                  link
                </span>
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-play-green dark:hover:text-emerald-400 transition-colors"
              >
                <svg
                  className="w-[22px] h-[22px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-play-green dark:hover:text-emerald-400 transition-colors"
              >
                <span className="material-icons-outlined text-[22px]">
                  mail
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="fade-up">
        <SectionHeader icon="waving_hand">Introduction</SectionHeader>
        <div className="bg-gray-50 dark:bg-[#2d2d2d] rounded-xl p-4 sm:p-5 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            Hi there! I'm Alex, a passionate full stack developer who loves
            crafting beautiful, performant web and mobile applications. With 6+
            years of experience building modern digital experiences, I
            specialize in transforming complex ideas into clean, user-friendly
            products.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            My journey in software development started with curiosity and has
            grown into a deep commitment to writing quality code and delivering
            impactful solutions. I enjoy working across the entire stack — from
            designing intuitive frontends with React and Flutter, to building
            robust backends with Node.js and Laravel.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open source, or sharing knowledge with the developer
            community. I believe great software is built at the intersection of
            thoughtful design and solid engineering.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="fade-up">
        <SectionHeader icon="work">Experience</SectionHeader>
        <div className="relative pl-6 border-l-2 border-play-green/30 dark:border-emerald-400/30">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="relative mb-6 last:mb-0">
              <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-play-green dark:bg-emerald-400 border-4 border-white dark:border-[#1f1f1f]"></div>
              <div className="bg-gray-50 dark:bg-[#2d2d2d] rounded-xl p-4 sm:p-5 ml-2 border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-play-green dark:text-emerald-400 font-medium mb-1">
                  {exp.period}
                </p>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {exp.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <TechChip key={t} tech={t} small />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="fade-up">
        <SectionHeader icon="school">Education</SectionHeader>
        <div className="space-y-3">
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-[#2d2d2d] rounded-xl p-4 sm:p-5 flex items-start gap-3 border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-play-greenLight dark:bg-[#01875f22] flex items-center justify-center flex-shrink-0">
                <span className="material-icons-outlined text-play-green dark:text-emerald-400 text-[20px]">
                  {edu.icon}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {edu.degree}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {edu.school} · {edu.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="fade-up">
        <SkillShowcase />
      </section>

      {/* ACHIEVEMENTS */}
      <section className="fade-up">
        <SectionHeader icon="verified">ACHIEVEMENTS</SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ACHIEVEMENTS.map((achievement, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl p-4 sm:p-5 border border-gray-200 dark:border-gray-700"
            >
              <span className="material-icons-outlined text-play-green dark:text-emerald-400 text-[22px]">
                workspace_premium
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {achievement}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
