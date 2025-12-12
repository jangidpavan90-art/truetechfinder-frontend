"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CompareInput() {
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const router = useRouter();

  const normalizeUrl = (input: string): string => {
    let normalized = input.trim();
    if (!normalized) return "";
    
    if (!normalized.startsWith("http://") && !normalized.startsWith("https://")) {
      normalized = "https://" + normalized;
    }
    
    return normalized;
  };

  const handleCompare = () => {
    if (!url1.trim() || !url2.trim()) {
      alert("Please enter both URLs before comparing.");
      return;
    }
    const normalizedUrl1 = normalizeUrl(url1);
    const normalizedUrl2 = normalizeUrl(url2);
    router.push(`/compare?url1=${encodeURIComponent(normalizedUrl1)}&url2=${encodeURIComponent(normalizedUrl2)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCompare();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 grid grid-cols-1 gap-4">
      <input
        type="text"
        placeholder="First website URL (e.g. example.com)"
        className="px-4 py-3 border border-[#C4D3E0] rounded-lg text-[#1A2A45] bg-white placeholder-[#7A8A9C] focus:outline-none focus:border-[#FF8A3D] focus:ring-2 focus:ring-[#FF8A3D]/20 transition"
        value={url1}
        onChange={(e) => setUrl1(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <input
        type="text"
        placeholder="Second website URL (e.g. competitor.com)"
        className="px-4 py-3 border border-[#C4D3E0] rounded-lg text-[#1A2A45] bg-white placeholder-[#7A8A9C] focus:outline-none focus:border-[#FF8A3D] focus:ring-2 focus:ring-[#FF8A3D]/20 transition"
        value={url2}
        onChange={(e) => setUrl2(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={handleCompare}
        className="px-6 py-3 bg-[#FF8A3D] text-white rounded-lg hover:bg-[#E6762E] mt-2 transition shadow-md shadow-[#FF8A3D]/25 font-medium"
      >
        Compare
      </button>
    </div>
  );
}
