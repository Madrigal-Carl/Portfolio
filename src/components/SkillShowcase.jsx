import { useState, useRef, useEffect } from "react";
import { SKILLS } from "@/constants/skills";
import SectionHeader from "@/components/SectionHeader";
import { MdCode } from "react-icons/md";

export default function SkillShowcase({ padded = false }) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mb-6 fade-up ${padded ? "px-4 sm:px-6" : ""}`}
    >
      <SectionHeader icon={MdCode}>Skills & Expertise</SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="rounded-xl p-4 sm:p-5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2d2d2d] transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-play-green flex items-center justify-center shadow-sm">
                <group.icon className="text-white text-[16px]" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {group.category}
              </h3>
              <span className="ml-auto text-[10px] font-medium text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-[#1f1f1f] px-2 py-0.5 rounded-full">
                {group.skills.length} skills
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {group.skills.map((skill, i) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="progress-fade flex items-center justify-between rounded-lg border border-gray-100 dark:border-gray-800 px-3 py-2 hover:bg-gray-50 dark:hover:bg-[#252525] transition-colors"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon className="text-play-green text-lg shrink-0" />

                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate">
                        {skill.name}
                      </span>
                    </div>

                    <span className="text-[10px] font-semibold text-play-green dark:text-emerald-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {skill.level}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
