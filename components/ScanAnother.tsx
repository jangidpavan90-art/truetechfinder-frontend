"use client";

import { useRouter } from "next/navigation";

export default function ScanAnother() {
  const router = useRouter();

  return (
    <div className="text-center">
      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-[#FF8A3D] text-white rounded-lg hover:bg-[#E6762E] transition inline-flex items-center gap-2 shadow-md shadow-[#FF8A3D]/25"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Scan Another Website
      </button>
    </div>
  );
}
