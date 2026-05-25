export default function SectionHeader({ icon, children }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="material-icons-outlined text-play-green dark:text-emerald-400 text-[22px]">
        {icon}
      </span>
      <h2 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100">
        {children}
      </h2>
    </div>
  );
}
