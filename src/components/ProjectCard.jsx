import { Link } from "react-router-dom";
import { useRecentlyViewed } from "@/contexts/RecentlyViewedContext";
import TechChip from "@/components/TechChip";

export default function ProjectCard({
  project,
  size = "normal",
  minWidth = "180px",
}) {
  const { addViewed } = useRecentlyViewed();

  const isSmall = size === "small";

  const maxTechShow = 2;
  const visibleTech = project.techStack.slice(0, maxTechShow);
  const extraTech = project.techStack.length - maxTechShow;

  return (
    <Link
      to={`/project/${project.id}`}
      onClick={() => addViewed(project.id)}
      className="group flex-1 max-w-[220px]"
      style={{ minWidth }}
    >
      {" "}
      {/* Thumbnail */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-[#3a3a3a] ${
          isSmall ? "aspect-[1/1]" : "aspect-[1/1]"
        }`}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {project.recent && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-play-green text-white text-[10px] font-medium shadow">
            New
          </span>
        )}
      </div>
      {/* Info */}
      <div className="pt-3">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-1">
          {project.title}
        </h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {visibleTech.map((tech) => (
            <TechChip key={tech} tech={tech} small />
          ))}

          {extraTech > 0 && (
            <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-[#3c3c3c] text-gray-500 dark:text-gray-400 px-2 py-0.5 text-[10px] font-medium">
              +{extraTech}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
