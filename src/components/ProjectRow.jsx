import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectRow({
  title,
  projects,
  icon,
  showMore,
  seeMoreLink,
}) {
  const ref = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const checkScroll = useCallback(() => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  }, []);
  useEffect(() => {
    checkScroll();
    const el = ref.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);
  const scroll = (dir) => {
    if (ref.current)
      ref.current.scrollBy({ left: dir * 400, behavior: "smooth" });
  };
  if (!projects || projects.length === 0) return null;
  return (
    <section className="mb-6 fade-up">
      <div className="flex items-center justify-between px-4 sm:px-6 mb-3">
        <div className="flex items-center gap-2">
          {icon && (
            <span className="material-icons-outlined text-play-green dark:text-emerald-400 text-[20px]">
              {icon}
            </span>
          )}
          <h2 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100">
            {title}
          </h2>
        </div>
        {showMore && (
          <Link
            to={seeMoreLink || "/projects"}
            className="text-play-green dark:text-emerald-400 text-sm font-medium hover:underline flex items-center gap-1"
          >
            See more{" "}
            <span className="material-icons-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
        )}
      </div>
      <div className="relative group/row">
        {canScrollLeft && (
          <button
            onClick={() => scroll(-1)}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white dark:bg-[#2d2d2d] shadow-lg border border-gray-200 dark:border-gray-600 items-center justify-center hover:scale-105 transition-transform hidden md:flex"
          >
            <span className="material-icons-outlined text-[18px]">
              chevron_left
            </span>
          </button>
        )}
        <div
          ref={ref}
          className="flex gap-3 px-4 sm:px-6 overflow-x-auto hide-scroll scroll-smooth"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        {canScrollRight && (
          <button
            onClick={() => scroll(1)}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white dark:bg-[#2d2d2d] shadow-lg border border-gray-200 dark:border-gray-600 items-center justify-center hover:scale-105 transition-transform hidden md:flex"
          >
            <span className="material-icons-outlined text-[18px]">
              chevron_right
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
