"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

import ResultsSummary from "@/components/ResultsSummary";
import TechCategoryCard from "@/components/TechCategoryCard";
import AIInsights from "@/components/AIInsights";
import CollapsibleJSON from "@/components/CollapsibleJSON";
import CompareWith from "@/components/CompareWith";

import { categorizeTechnologies, normalizeTechList } from "@/lib/categorize";

function ScanContent() {
  const params = useSearchParams();
  const url = params.get("url");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const apiBase = process.env.NEXT_PUBLIC_API_BASE;

  useEffect(() => {
    if (!url) return;

    if (!apiBase) {
      setError("API endpoint not configured.");
      setLoading(false);
      return;
    }

    fetch(`${apiBase}/scan?url=${encodeURIComponent(url)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`API returned ${res.status}`);
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Scan error:", err);
        setError(err.message || "Failed to scan website");
        setLoading(false);
      });
  }, [url, apiBase]);

  if (!url) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">No URL provided</div>
          <a href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Go Home</a>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent mb-4"></div>
          <p className="text-lg">Scanning technologies...</p>
          <p className="text-slate-500 mt-2">{url}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Scan Error</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <a href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Try Again</a>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">No data found for this scan.</div>
      </div>
    );
  }

  const techList = normalizeTechList(data.technologies);
  const categories = categorizeTechnologies(techList);

  const categoryOrder = [
    "Frontend",
    "Backend",
    "CMS",
    "Hosting",
    "CDN",
    "Analytics",
    "Marketing",
    "Security",
    "Payments",
    "Other",
  ];

  const totalTech = techList.length;
  const activeCategories = Object.values(categories).filter((a: string[]) => a.length > 0).length;

  const fallbackInsights = (): string | null => {
    if (!techList.length) return null;
    const techs = techList.slice(0, 8).join(", ");
    const more = techList.length > 8 ? ` and ${techList.length - 8} more` : "";
    return `This website is built using: ${techs}${more}. It follows modern web development practices with a mix of frontend frameworks, backend services, and third-party integrations. The technology stack suggests a focus on performance and scalability.`;
  };

  const aiText = data?.ai_insights || fallbackInsights();

  return (
    <div className="min-h-screen px-6 py-10 max-w-6xl mx-auto">

      <ResultsSummary url={url} />

      <div className="bg-white border rounded-xl p-6 shadow-sm mb-8 text-center">
        <div className="flex justify-center gap-12 md:gap-20">

          <div>
            <div className="text-4xl font-bold text-blue-600">{totalTech}</div>
            <div className="text-slate-600 mt-1">Technologies Detected</div>
          </div>

          <div className="border-l border-gray-200"></div>

          <div>
            <div className="text-4xl font-bold text-green-600">{activeCategories}</div>
            <div className="text-slate-600 mt-1">Categories Used</div>
          </div>

        </div>
      </div>

      <AIInsights insights={aiText} />

      <CompareWith currentUrl={url} />

      <h2 className="text-2xl font-bold mb-6 mt-10">Detected Technologies</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {categoryOrder.map((cat) => {
          const items = (categories[cat] as string[]) || [];
          if (items.length === 0) return null;
          return (
            <TechCategoryCard
              key={cat}
              title={cat}
              items={items}
            />
          );
        })}
      </div>

      <CollapsibleJSON 
        data={data} 
        filename={`${(() => {
          try {
            return new URL(url.startsWith("http") ? url : `https://${url}`).hostname;
          } catch {
            return "scan-result";
          }
        })()}-scan.json`} 
      />

      <div className="mt-10 text-center">
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Scan Another Site
        </a>
      </div>

    </div>
  );
}

export default function ScanPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    }>
      <ScanContent />
    </Suspense>
  );
}
