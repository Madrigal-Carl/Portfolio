import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "@/constants/projects";
import TechChip from "../components/TechChip";
import ProjectRow from "../components/ProjectRow";
import { useRecentlyViewed } from "@/contexts/RecentlyViewedContext";
import {
  MdArrowBack,
  MdOpenInNew,
  MdCode,
  MdVisibility,
  MdErrorOutline,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function ProjectDetailsPage() {
  const { id } = useParams();

  const project = PROJECTS.find((p) => p.id === parseInt(id));

  const { addViewed } = useRecentlyViewed();

  const [ssIndex, setSsIndex] = useState(0);

  useEffect(() => {
    if (project) addViewed(project.id);

    window.scrollTo(0, 0);
  }, [id, project]);

  if (!project)
    return (
      <div className="flex flex-col items-center py-20 px-4 sm:px-6">
        <MdErrorOutline className="text-gray-300 dark:text-gray-600 text-[64px] mb-4" />

        <p className="text-gray-500 dark:text-gray-400">Project not found</p>

        <Link
          to="/"
          className="mt-4 text-play-green dark:text-emerald-400 text-sm font-medium hover:underline"
        >
          Go back home
        </Link>
      </div>
    );

  const similar = PROJECTS.filter(
    (p) => p.id !== project.id && p.category === project.category,
  ).slice(0, 6);

  const allScreenshots = project.screenshots || [];

  const hasLiveDemo = Boolean(project.liveDemo);

  const nextImage = () => {
    setSsIndex((prev) => (prev === allScreenshots.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSsIndex((prev) => (prev === 0 ? allScreenshots.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-6xl mx-auto pb-20 md:pb-4 mt-4 md:mt-0">
      {/* Back Button */}
      <div className="hidden md:block px-4 sm:px-6">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 py-3 text-sm transition-colors"
        >
          <MdArrowBack className="text-[18px]" />
          Back
        </button>
      </div>

      <div className="px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
          {/* Thumbnail */}
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-white dark:bg-[#2d2d2d] flex-shrink-0 shadow-sm">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <div className="flex-1 min-w-0 pt-1 text-center md:text-left">
            <h1 className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
              {project.title}
            </h1>

            <p className="text-sm md:text-base text-play-green dark:text-emerald-400 mt-1 font-medium">
              {project.category.charAt(0).toUpperCase() +
                project.category.slice(1)}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.slice(0, 5).map((tech) => (
                <TechChip key={tech} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <a
            href={hasLiveDemo ? project.liveDemo : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 font-medium py-3 rounded-xl text-sm transition-colors shadow-sm ${
              hasLiveDemo
                ? "bg-play-green hover:bg-play-greenDark text-white"
                : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed pointer-events-none"
            }`}
          >
            <MdOpenInNew className="text-[18px]" />

            {hasLiveDemo ? "View Project" : "No Live Demo"}
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2d2d2d] transition-colors"
          >
            <MdCode className="text-[18px]" />
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8 py-4 border-y border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className="text-lg font-semibold text-play-green dark:text-emerald-400">
              {project.techStack.length}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Technologies
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-play-green dark:text-emerald-400">
              {project.features.length}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Features
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-play-green dark:text-emerald-400">
              {project.buildTime}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Build Time
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        {allScreenshots.length > 0 && (
          <div className="mb-8">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-black">
              <div className="h-[220px] md:h-[400px]">
                <img
                  src={allScreenshots[ssIndex]}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Prev Button */}
              {allScreenshots.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                >
                  <MdChevronLeft className="text-[26px]" />
                </button>
              )}

              {/* Next Button */}
              {allScreenshots.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                >
                  <MdChevronRight className="text-[26px]" />
                </button>
              )}
            </div>

            {/* Thumbnails */}
            <div
              className="
    flex gap-3 mt-3 overflow-x-auto pb-2
    md:max-w-full md:scrollbar-thin
    hide-scroll md:hide-scrollbar-none
  "
            >
              {allScreenshots.map((ss, i) => (
                <button
                  key={i}
                  onClick={() => setSsIndex(i)}
                  className={`flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                    i === ssIndex
                      ? "border-play-green"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={ss}
                    alt=""
                    className="w-24 h-16 md:w-36 md:h-24 object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* About */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
            About this project
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechChip key={tech} tech={tech} />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2.5 py-2">
                <GoDotFill className="text-play-green dark:text-emerald-400 mt-0.5 flex-shrink-0 text-sm" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contributions */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Contributions
          </h2>

          <div className="flex flex-col">
            {project.contributions.map((f, i) => (
              <div key={i} className="flex items-start gap-2.5 py-2">
                <GoDotFill className="text-play-green dark:text-emerald-400 mt-0.5 flex-shrink-0 text-sm" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Projects */}
        {similar.length > 0 && (
          <div className="mb-8 -mx-4 sm:-mx-6">
            <div className="px-4 sm:px-6 mb-3">
              <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                Similar Projects
              </h2>
            </div>

            <ProjectRow title="" projects={similar} />
          </div>
        )}
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-20 md:bottom-6 right-4 z-40">
        <a
          href={hasLiveDemo ? project.liveDemo : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 font-medium px-5 py-3 rounded-full text-sm shadow-lg transition-all ${
            hasLiveDemo
              ? "bg-play-green hover:bg-play-greenDark text-white hover:shadow-xl"
              : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed pointer-events-none"
          }`}
        >
          <MdVisibility className="text-[18px]" />

          {hasLiveDemo ? "View Project" : "No Demo"}
        </a>
      </div>
    </div>
  );
}
