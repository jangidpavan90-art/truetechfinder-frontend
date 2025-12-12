"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface CompareWithProps {
  currentUrl: string;
}

export default function CompareWith({ currentUrl }: CompareWithProps) {
  const [otherUrl, setOtherUrl] = useState("");
  const router = useRouter();

  const handleCompare = () => {
    if (!otherUrl.trim()) return;

    router.push(
      `/compare?url1=${encodeURIComponent(currentUrl)}&url2=${encodeURIComponent(otherUrl)}`
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCompare();
    }
  };

  return (
    <div className="bg-white border border-[#DCE4EC] rounded-xl p-6 shadow-sm mt-8">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#1A2A45]">
        <svg className="w-6 h-6 text-[#FF8A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        Compare With Another Website
      </h3>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter another URL (e.g. example.com)"
          value={otherUrl}
          onChange={(e) => setOtherUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-4 py-3 border border-[#C4D3E0] rounded-lg text-[#1A2A45] bg-white placeholder-[#7A8A9C] focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/20 focus:border-[#FF8A3D] transition"
        />

        <button
          onClick={handleCompare}
          disabled={!otherUrl.trim()}
          className="px-6 py-3 bg-[#FF8A3D] text-white rounded-lg hover:bg-[#E6762E] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-[#FF8A3D]/25"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Compare
        </button>
      </div>

      <p className="text-sm text-[#7A8A9C] mt-3">
        Enter a competitor or similar website to see a side-by-side technology comparison.
      </p>
    </div>
  );
}
