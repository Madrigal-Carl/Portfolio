export default function SectionHeader({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {Icon && (
        <Icon className="text-play-green dark:text-emerald-400 text-[22px]" />
      )}
      <h2 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100">
        {children}
      </h2>
    </div>
  );
}
