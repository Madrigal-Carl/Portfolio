import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "@/constants/projects";
import TechChip from "../components/TechChip";
import ProjectRow from "../components/ProjectRow";
import { useRecentlyViewed } from "@/contexts/RecentlyViewedContext";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === parseInt(id));
  const { addViewed } = useRecentlyViewed();
  const [ssIndex, setSsIndex] = useState(0);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    if (project) addViewed(project.id);
    setImgLoading(true);
    window.scrollTo(0, 0);
  }, [id, project]);

  if (!project)
    return (
      <div className="flex flex-col items-center py-20 px-4 sm:px-6">
        <span className="material-icons-outlined text-gray-300 dark:text-gray-600 text-[64px] mb-4">
          error_outline
        </span>
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
  const allScreenshots = [project.thumbnail, ...project.screenshots];

  return (
    <div className="max-w-5xl mx-auto pb-20 md:pb-4">
      <div className="hidden md:block px-4 sm:px-6">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 py-3 text-sm transition-colors"
        >
          <span className="material-icons-outlined text-[18px]">
            arrow_back
          </span>{" "}
          Back
        </button>
      </div>

      <div className="relative mx-4 sm:mx-6 rounded-2xl overflow-hidden mb-6">
        <div className="h-[180px] md:h-[260px]">
          <img
            src={allScreenshots[ssIndex + 1] || project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            onLoad={() => setImgLoading(false)}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="flex gap-2 px-4 sm:px-6 mb-6 overflow-x-auto hide-scroll">
        {allScreenshots.map((ss, i) => (
          <button
            key={i}
            onClick={() => setSsIndex(i)}
            className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
              i === ssIndex
                ? "border-play-green"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={ss}
              className="w-20 h-14 md:w-28 md:h-[70px] object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <div className="px-4 sm:px-6">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={project.thumbnail}
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover shadow-md flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-sm text-play-green dark:text-emerald-400 font-medium">
                {project.category.charAt(0).toUpperCase() +
                  project.category.slice(1)}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <a
            href={project.liveDemo}
            className="flex-1 flex items-center justify-center gap-2 bg-play-green hover:bg-play-greenDark text-white font-medium py-3 rounded-lg text-sm transition-colors shadow-sm"
          >
            <span className="material-icons-outlined text-[18px]">
              open_in_new
            </span>
            View Project
          </a>
          <a
            href={project.github}
            className="flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2d2d2d] transition-colors"
          >
            <span className="material-icons-outlined text-[18px]">code</span>
            GitHub
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className="text-lg font-medium text-play-green dark:text-emerald-400">
              {project.techStack.length}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Technologies
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-play-green dark:text-emerald-400">
              {project.features.length}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Features
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-play-green dark:text-emerald-400">
              {project.buildTime}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Build Time
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-2">
            About this project
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-3">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechChip key={tech} tech={tech} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-3">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2.5 py-2">
                <span className="text-play-green dark:text-emerald-400 mt-0.5 flex-shrink-0 text-sm">
                  •
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>

        {similar.length > 0 && (
          <div className="mb-8 -mx-4 sm:-mx-6">
            <div className="px-4 sm:px-6 mb-3">
              <h2 className="text-base font-medium text-gray-900 dark:text-gray-100">
                Similar Projects
              </h2>
            </div>
            <ProjectRow title="" projects={similar} />
          </div>
        )}
      </div>

      <div className="fixed bottom-20 md:bottom-6 right-4 z-40">
        <a
          href={project.liveDemo}
          className="flex items-center gap-2 bg-play-green hover:bg-play-greenDark text-white font-medium px-5 py-3 rounded-full text-sm shadow-lg hover:shadow-xl transition-all"
        >
          <span className="material-icons-outlined text-[18px]">
            visibility
          </span>
          View Project
        </a>
      </div>
    </div>
  );
}
