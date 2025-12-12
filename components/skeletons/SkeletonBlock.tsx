export default function SkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-[#DCE4EC] rounded-md ${className}`} />
  );
}
