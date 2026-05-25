import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SectionHeader from "@/components/SectionHeader";
import TechChip from "@/components/TechChip";
import SkillShowcase from "@/components/SkillShowcase";
import { EXPERIENCE } from "@/constants/experience";
import { EDUCATION } from "@/constants/education";
import { CERTIFICATES } from "@/constants/certificates";
import {
  FiLink,
  FiMail,
  FiAward,
  FiBriefcase,
  FiLinkedin,
  FiFacebook,
  FiCheckCircle,
} from "react-icons/fi";
import { FaSchool } from "react-icons/fa";
import {
  MdWork,
  MdSchool,
  MdVerified,
  MdWorkspacePremium,
  MdWavingHand,
} from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import hero from "@/assets/hero.png";

export default function AboutPage() {
  const [selectedCert, setSelectedCert] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCert]);

  return (
    <div className="max-w-4xl mx-auto pb-20 md:pb-4 px-4 sm:px-6 py-6 space-y-6">
      {/* Profile Header */}
      <div className="bg-gray-50 dark:bg-[#2d2d2d] rounded-2xl p-5 sm:p-7 border border-gray-200 dark:border-gray-700 fade-up">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <img
            src={hero}
            alt="Carl Madrigal"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100">
              Carl Madrigal
            </h1>
            <p className="text-play-green dark:text-emerald-400 font-medium mt-1">
              Web Developer
            </p>
            <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-play-green dark:hover:text-emerald-400 transition-colors"
              >
                <FiFacebook className="w-[22px] h-[22px]" />
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-play-green dark:hover:text-emerald-400 transition-colors"
              >
                <FiLinkedin className="w-[22px] h-[22px]" />
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-play-green dark:hover:text-emerald-400 transition-colors"
              >
                <FiMail className="w-[22px] h-[22px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="fade-up">
        <SectionHeader icon={MdWavingHand}>Introduction</SectionHeader>

        <div className="bg-gray-50 dark:bg-[#2d2d2d] rounded-xl p-4 sm:p-5 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Hi! I'm Carl Salido Madrigal, an entry-level Full-Stack Developer
            from the Philippines specializing in React, Node.js, Laravel, and
            Flutter. I have hands-on experience building web and mobile
            applications through internships, freelance work, and academic
            projects, with a focus on full-stack development, REST APIs,
            database design, MVC architecture, and user-friendly systems. I'm
            currently seeking opportunities to grow as a developer and
            contribute to real-world projects.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="fade-up">
        <SectionHeader icon={MdWork}>Experience</SectionHeader>
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
        <SectionHeader icon={MdSchool}>Education</SectionHeader>
        <div className="space-y-3">
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-[#2d2d2d] rounded-xl p-4 sm:p-5 flex items-start gap-3 border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-play-greenLight dark:bg-[#01875f22] flex items-center justify-center flex-shrink-0">
                {edu.icon && (
                  <edu.icon className="text-play-green dark:text-emerald-400 text-[20px]" />
                )}
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

      {/* CERTIFICATES */}
      <section className="fade-up">
        <SectionHeader icon={MdVerified}>Certificates</SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {CERTIFICATES.map((certificate, i) => (
            <button
              key={i}
              onClick={() => setSelectedCert(certificate)}
              className="flex items-center gap-3 text-left bg-gray-50 dark:bg-[#2d2d2d] rounded-xl p-4 sm:p-5 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
            >
              <FaAward className="text-play-green dark:text-emerald-400 text-[22px]" />

              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {certificate.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {certificate.year}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedCert &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="max-w-2xl w-full bg-white dark:bg-[#2d2d2d] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {selectedCert.year}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full max-h-[500px] object-contain bg-black"
              />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
