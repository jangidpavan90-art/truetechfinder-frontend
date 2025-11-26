import SkeletonBlock from "./SkeletonBlock";

export default function ScanSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">

      <SkeletonBlock className="h-12 w-2/3 mx-auto" />

      <div className="bg-white border rounded-xl p-6 shadow-sm flex justify-center gap-10">
        <SkeletonBlock className="h-10 w-20" />
        <SkeletonBlock className="h-10 w-20" />
      </div>

      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <SkeletonBlock className="h-6 w-40 mb-4" />
        <SkeletonBlock className="h-4 w-full mb-2" />
        <SkeletonBlock className="h-4 w-5/6" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white border rounded-xl p-6 shadow-sm">
            <SkeletonBlock className="h-6 w-32 mb-4" />
            <div className="flex gap-2 flex-wrap">
              {[1, 2, 3, 4, 5].map((x) => (
                <SkeletonBlock key={x} className="h-7 w-28" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <SkeletonBlock className="h-10 w-48 mt-10" />

      <div className="border-t pt-10">
        <SkeletonBlock className="h-6 w-64 mx-auto mb-8" />
        <div className="flex flex-col gap-6">
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <SkeletonBlock className="h-6 w-48 mb-4" />
            <SkeletonBlock className="h-10 w-full" />
          </div>
          <SkeletonBlock className="h-12 w-48 mx-auto" />
        </div>
      </div>

    </div>
  );
}
