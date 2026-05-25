export default function TechChip({ tech, small }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-gray-100 dark:bg-[#3c3c3c] text-play-green dark:text-emerald-400 ${
        small ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]"
      } font-medium`}
    >
      {tech}
    </span>
  );
}
