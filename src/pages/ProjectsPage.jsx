import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/constants/projects";
import { CATEGORIES } from "@/constants/categories";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTab, setActiveTab] = useState("recent");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    let result = PROJECTS;
    if (activeCategory)
      result = result.filter((p) => p.category === activeCategory);
    return result;
  }, [activeCategory]);

  const recentProjects = filtered.filter((p) => p.recent);
  const allProjects = filtered;
  const displayProjects = activeTab === "recent" ? recentProjects : allProjects;

  return (
    <div className="flex flex-col min-h-[calc(100vh-60px)] max-w-6xl mx-auto pb-20 md:pb-4 px-4 sm:px-6 py-6">
      <div className="fade-up flex-1">
        <div className="flex items-center gap-3 mb-6">
          <Link
            to="/"
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-[#3c3c3c] transition-colors"
          >
            <span className="material-icons-outlined text-gray-600 dark:text-gray-400 text-[22px]">
              arrow_back
            </span>
          </Link>
          <div>
            <h1 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100">
              Projects
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Browse all projects and recently completed work
            </p>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("recent")}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
              activeTab === "recent"
                ? "chip-active"
                : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2d2d2d]"
            }`}
          >
            Recently Completed ({recentProjects.length})
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
              activeTab === "all"
                ? "chip-active"
                : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2d2d2d]"
            }`}
          >
            All Projects ({allProjects.length})
          </button>
        </div>

        <div className="flex items-center gap-2 mb-6 overflow-x-auto hide-scroll pb-1">
          <button
            onClick={() => setActiveCategory(null)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
              !activeCategory
                ? "chip-active"
                : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2d2d2d]"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setActiveCategory(activeCategory === cat.id ? null : cat.id)
              }
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                activeCategory === cat.id
                  ? "chip-active"
                  : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2d2d2d]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {activeTab === "recent" && (
          <div className="flex items-center gap-2 mb-4">
            <span className="material-icons-outlined text-play-green dark:text-emerald-400 text-[20px]">
              new_releases
            </span>
            <h2 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100">
              Recently Completed
            </h2>
          </div>
        )}
        {activeTab === "all" && (
          <div className="flex items-center gap-2 mb-4">
            <span className="material-icons-outlined text-play-green dark:text-emerald-400 text-[20px]">
              folder
            </span>
            <h2 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100">
              All Projects
            </h2>
          </div>
        )}

        {displayProjects.length === 0 ? (
          <div className="flex flex-col items-center py-16">
            <span className="material-icons-outlined text-gray-300 dark:text-gray-600 text-[64px] mb-4">
              folder_off
            </span>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              No projects found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {displayProjects.map((p) => (
              <ProjectCard key={p.id} project={p} size="small" />
            ))}
          </div>
        )}
      </div>

      <div className="mt-auto pt-8">
        <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm flex-wrap gap-2">
            <span className="text-gray-500 dark:text-gray-400">
              Showing {displayProjects.length} project
              {displayProjects.length !== 1 ? "s" : ""}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 dark:text-gray-400">
                <span className="text-play-green dark:text-emerald-400 font-semibold">
                  {recentProjects.length}
                </span>{" "}
                recently completed
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                <span className="text-play-green dark:text-emerald-400 font-semibold">
                  {allProjects.length}
                </span>{" "}
                total
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
