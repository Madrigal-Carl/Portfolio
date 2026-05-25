import { CATEGORIES } from "@/constants/categories";

export default function CategoryTabs({ activeCategory, setActiveCategory }) {
  return (
    <div className="sticky top-14 md:top-[60px] z-30 bg-white dark:bg-[#1f1f1f] border-b border-gray-200 dark:border-gray-700">
      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center gap-2 px-4 sm:px-6 py-3 overflow-x-auto hide-scroll">
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
      </div>
    </div>
  );
}
