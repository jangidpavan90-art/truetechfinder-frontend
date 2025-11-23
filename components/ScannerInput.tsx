"use client";
import { useState } from "react";
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
        className="flex-1 px-4 py-3 border rounded-lg text-black"
      />
      <button
        onClick={handleScan}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Scan
      </button>
    </div>
  );
}
