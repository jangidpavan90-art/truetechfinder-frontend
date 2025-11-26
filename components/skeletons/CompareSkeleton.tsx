import SkeletonBlock from "./SkeletonBlock";

export default function CompareSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">

      <SkeletonBlock className="h-10 w-80 mx-auto" />
      <SkeletonBlock className="h-6 w-96 mx-auto" />

      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <div className="flex justify-center gap-10 mb-6">
          <SkeletonBlock className="h-16 w-20" />
          <SkeletonBlock className="h-16 w-20" />
          <SkeletonBlock className="h-16 w-20" />
        </div>
        <SkeletonBlock className="h-4 w-full mb-6" />
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
          <SkeletonBlock className="h-5 w-32 mb-3" />
          <SkeletonBlock className="h-4 w-full mb-2" />
          <SkeletonBlock className="h-4 w-4/5" />
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <SkeletonBlock className="h-4 w-32" />
        <SkeletonBlock className="h-4 w-32" />
        <SkeletonBlock className="h-4 w-32" />
      </div>

      <div className="flex flex-col gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white border rounded-xl p-6 shadow-sm">
            <SkeletonBlock className="h-6 w-32 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SkeletonBlock className="h-24" />
              <SkeletonBlock className="h-24" />
              <SkeletonBlock className="h-24" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <SkeletonBlock className="h-32" />
        <SkeletonBlock className="h-32" />
      </div>

      <SkeletonBlock className="h-12 w-48 mx-auto" />

    </div>
  );
}
