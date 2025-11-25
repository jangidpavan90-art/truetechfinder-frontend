"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ResultsSummary from "@/components/ResultsSummary";
import TechCategoryCard from "@/components/TechCategoryCard";

function ScanContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!url) return;

    const apiBase = process.env.NEXT_PUBLIC_API_BASE;

    fetch(`${apiBase}/scan?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Scan error:", err);
        setLoading(false);
      });
  }, [url]);

  if (!url) {
    return (
      <div className="p-10 text-center text-red-500">No URL provided.</div>
    );
  }

  if (loading) {
    return <div className="p-10 text-center">Scanning <b>{url}</b>...</div>;
  }

  if (!data) {
    return <div className="p-10 text-center text-red-500">No data found.</div>;
  }

  const categories = data?.categories || {};

  return (
    <div className="min-h-screen px-6 py-10 max-w-5xl mx-auto">
      <ResultsSummary url={url} />

      <h2 className="text-2xl font-bold mb-6">Detected Technologies</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(categories).map(([categoryName, techList]) => (
          <TechCategoryCard
            key={categoryName}
            title={categoryName}
            items={techList as string[]}
          />
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Raw Data (optional)</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default function ScanPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ScanContent />
    </Suspense>
  );
}
