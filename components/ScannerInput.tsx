"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ScannerInput() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleScan = () => {
    if (!url) {
      alert("Please enter a URL first.");
      return;
    }
    router.push(`/scan?url=${encodeURIComponent(url)}`);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8 flex gap-2">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter a website URL"
        className="flex-1 px-4 py-3 border border-[#C4D3E0] rounded-lg text-[#1A2A45] bg-white placeholder-[#7A8A9C] focus:outline-none focus:border-[#FF8A3D] focus:ring-2 focus:ring-[#FF8A3D]/20 transition"
      />
      <button
        onClick={handleScan}
        className="px-6 py-3 bg-[#FF8A3D] text-white rounded-lg hover:bg-[#E6762E] transition shadow-md shadow-[#FF8A3D]/25 font-medium"
      >
        Scan
      </button>
    </div>
  );
}
