import { Link } from "react-router-dom";
import { useRecentlyViewed } from "@/contexts/RecentlyViewedContext";
import TechChip from "@/components/TechChip";

export default function ProjectCard({ project, size = "normal" }) {
  const { addViewed } = useRecentlyViewed();
  const isSmall = size === "small";
  const maxTechShow = 2;
  const visibleTech = project.techStack.slice(0, maxTechShow);
  const extraTech = project.techStack.length - maxTechShow;
  return (
    <Link
      to={`/project/${project.id}`}
      onClick={() => addViewed(project.id)}
      className="group flex-1 min-w-[160px] max-w-[220px]"
    >
      <div className="card-hover rounded-xl overflow-hidden bg-white dark:bg-[#2d2d2d] border border-gray-100 dark:border-gray-700 cursor-pointer h-full flex flex-col">
        <div
          className={`relative overflow-hidden ${
            isSmall ? "h-[90px] md:h-[100px]" : "h-[100px] md:h-[115px]"
          }`}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {project.recent && (
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-play-green text-white text-[9px] font-medium">
              New
            </span>
          )}
        </div>
        <div className="p-2.5 flex flex-col flex-1">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
            {project.title}
          </h3>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 mt-0.5 leading-tight flex-1">
            {project.description}
          </p>
          <div className="flex items-center gap-1 mt-2 flex-wrap">
            {visibleTech.map((t) => (
              <TechChip key={t} tech={t} small />
            ))}
            {extraTech > 0 && (
              <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-[#3c3c3c] text-gray-500 dark:text-gray-400 px-2 py-0.5 text-[10px] font-medium">
                +{extraTech} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
