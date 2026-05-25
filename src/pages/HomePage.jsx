import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CategoryTabs from "@/components/CategoryTabs";
import SkeletonRow from "@/components/SkeletonRow";
import SkeletonCard from "@/components/SkeletonCard";
import FeaturedBanner from "@/components/FeaturedBanner";
import ProjectRow from "@/components/ProjectRow";
import SkillShowcase from "@/components/SkillShowcase";
import { useRecentlyViewed } from "@/contexts/RecentlyViewedContext";
import { PROJECTS } from "@/constants/projects";
import { MdHistory, MdNewReleases, MdTrendingUp, MdSend } from "react-icons/md";

export default function HomePage() {
  const { viewed } = useRecentlyViewed();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const filtered = useMemo(() => {
    let result = PROJECTS;
    if (category) result = result.filter((p) => p.category === category);
    return result;
  }, [category]);

  const featured = filtered.filter((p) => p.featured);
  const recent = filtered.filter((p) => p.recent);
  const recentViewed = viewed
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 5);

  return (
    <div className="max-w-6xl mx-auto pb-20 md:pb-4">
      <CategoryTabs activeCategory={category} setActiveCategory={setCategory} />
      <div className="py-6 space-y-6">
        {loading ? (
          <div className="px-4 sm:px-6 space-y-8">
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
          </div>
        ) : (
          <>
            {featured.length > 0 && <FeaturedBanner projects={filtered} />}
            {recentViewed.length > 0 && (
              <ProjectRow
                title="Recently Viewed"
                projects={recentViewed}
                icon={MdHistory}
                showMore
              />
            )}
            {recent.length > 0 && (
              <ProjectRow
                title="Recently Completed"
                projects={recent}
                icon={MdNewReleases}
                showMore
                seeMoreLink="/projects"
              />
            )}
            {filtered.length > 0 && (
              <ProjectRow
                title="Projects"
                projects={filtered}
                icon={MdTrendingUp}
                showMore
                seeMoreLink="/projects"
              />
            )}
            <SkillShowcase padded />
            <div className="px-4 sm:px-6">
              <div className="play-green-grad rounded-xl p-6 text-white text-center">
                <h3 className="text-lg font-medium mb-2">
                  Have a project in mind?
                </h3>
                <p className="text-sm text-emerald-100 mb-4">
                  Let's build something amazing together
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-play-green font-medium px-6 py-2.5 rounded-full text-sm hover:shadow-lg transition-shadow"
                >
                  <MdSend className="text-[18px]" />
                  Get in Touch
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
