"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ScannerInput() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const normalizeUrl = (input: string): string => {
    let normalized = input.trim();
    if (!normalized) return "";
    
    if (!normalized.startsWith("http://") && !normalized.startsWith("https://")) {
      normalized = "https://" + normalized;
    }
    
    return normalized;
  };

  const handleScan = () => {
    if (!url.trim()) {
      alert("Please enter a URL first.");
      return;
    }
    const normalizedUrl = normalizeUrl(url);
    router.push(`/scan?url=${encodeURIComponent(normalizedUrl)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleScan();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8 flex gap-2">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a website URL (e.g. example.com)"
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
