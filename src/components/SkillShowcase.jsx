import { useState, useRef, useEffect } from "react";
import { SKILLS, MAX_MONTHS } from "@/constants/skills";
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
      <SectionHeader icon={MdCode}>Expertise</SectionHeader>
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
            <div className="space-y-3">
              {group.skills.map((skill, i) => {
                const pct = Math.round((skill.months / MAX_MONTHS) * 100);
                return (
                  <div
                    key={skill.name}
                    className="progress-fade"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-semibold text-play-green dark:text-emerald-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                        {skill.label}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: visible ? `${pct}%` : "0%",
                          background:
                            "linear-gradient(90deg, #01875f 0%, #34d399 100%)",
                        }}
                      ></div>
                    </div>
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
