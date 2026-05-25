import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FeaturedBanner({ projects }) {
  const [current, setCurrent] = useState(0);
  const featured = projects.filter((p) => p.featured);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);
  if (featured.length === 0) return null;
  const p = featured[current];
  return (
    <div className="px-4 sm:px-6 mb-6 fade-up">
      <Link to={`/project/${p.id}`} className="block group cursor-pointer">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative h-[200px] md:h-[280px]">
            <img
              src={p.screenshots[0]}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <span className="inline-block px-2.5 py-1 rounded-full bg-play-green text-white text-xs font-medium mb-2">
                Featured
              </span>
              <h2 className="text-xl md:text-2xl font-medium text-white mb-1">
                {p.title}
              </h2>
              <p className="text-sm text-gray-200 line-clamp-2 max-w-xl">
                {p.longDescription}
              </p>
              <div className="flex items-center gap-2 mt-3">
                {p.techStack.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 sm:right-6 flex gap-1.5">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-white w-5" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
