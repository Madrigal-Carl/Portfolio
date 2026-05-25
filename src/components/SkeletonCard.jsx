export default function SkeletonCard() {
  return (
    <div className="flex-shrink-0 w-[160px] md:w-[200px]">
      <div className="skeleton rounded-xl h-[120px] md:h-[130px] w-full mb-2"></div>
      <div className="skeleton rounded h-4 w-3/4 mb-1.5"></div>
      <div className="skeleton rounded h-3 w-full mb-1"></div>
      <div className="skeleton rounded h-3 w-2/3"></div>
    </div>
  );
}
