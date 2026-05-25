import SkeletonCard from "@/components/SkeletonCard";

export default function SkeletonRow() {
  return (
    <div>
      <div className="skeleton rounded h-6 w-48 mb-4"></div>
      <div className="flex gap-3 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
