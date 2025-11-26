"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ResultsSummary from "@/components/ResultsSummary";
import TechCategoryCard from "@/components/TechCategoryCard";
import AIInsights from "@/components/AIInsights";
import { normalizeTechList, categorizeTechnologies } from "@/lib/categorize";

function ScanContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const apiBase = process.env.NEXT_PUBLIC_API_BASE;

    if (!apiBase) {
      setError("API endpoint not configured. Please set NEXT_PUBLIC_API_BASE.");
      setLoading(false);
      return;
    }

    fetch(`${apiBase}/scan?url=${encodeURIComponent(url)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API returned ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Scan error:", err);
        setError(err.message || "Failed to connect to scan API");
        setLoading(false);
      });
  }, [url]);

  if (!url) {
    return (
      <div className="p-10 text-center text-red-500">No URL provided.</div>
    );
  }

  if (loading) {
    return (
      <div className="p-10 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent mb-4"></div>
        <p>Scanning <b>{url}</b>...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center">
        <div className="text-red-500 mb-4">Scan Error</div>
        <p className="text-gray-600 mb-4">{error}</p>
        <p className="text-sm text-gray-500">
          The backend scanner API may not be running. Please ensure your FastAPI backend is active.
        </p>
        <a href="/" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg">
          Try Again
        </a>
      </div>
    );
  }

  if (!data) {
    return <div className="p-10 text-center text-red-500">No data found.</div>;
  }

  const allCategories = categorizeTechnologies(data?.technologies);
  const categories = Object.fromEntries(
    Object.entries(allCategories).filter(([_, value]) => (value as string[]).length > 0)
  );
  const techList = normalizeTechList(data?.technologies);

  const fallbackInsights = (): string | null => {
    if (!techList.length) return null;
    const techs = techList.slice(0, 8).join(", ");
    const more = techList.length > 8 ? ` and ${techList.length - 8} more` : "";
    return `This website is built using: ${techs}${more}. It follows modern web development practices with a mix of frontend frameworks, backend services, and third-party integrations. The technology stack suggests a focus on performance and scalability.`;
  };

  const aiText = data?.ai_insights || fallbackInsights();

  return (
    <div className="min-h-screen px-6 py-10 max-w-5xl mx-auto">
      <ResultsSummary url={url} />

      <AIInsights insights={aiText} />

      <h2 className="text-2xl font-bold mb-6 mt-10">Detected Technologies</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(categories).map(([categoryName, items]) => (
          <TechCategoryCard
            key={categoryName}
            title={categoryName}
            items={items as string[]}
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
