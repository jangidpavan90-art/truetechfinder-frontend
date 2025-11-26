"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import CompareCategoryCard from "@/components/CompareCategoryCard";
import SimilarityBar from "@/components/SimilarityBar";
import CollapsibleJSON from "@/components/CollapsibleJSON";
import CompareSkeleton from "@/components/skeletons/CompareSkeleton";
import { normalizeTechList, categorizeTechnologies, categorizeTech } from "@/lib/categorize";
import { generateComparisonInsights } from "@/lib/compareInsights";

function CompareContent() {
  const params = useSearchParams();
  const url1 = params.get("url1");
  const url2 = params.get("url2");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [result1, setResult1] = useState<any>(null);
  const [result2, setResult2] = useState<any>(null);

  useEffect(() => {
    if (!url1 || !url2) return;

    const api = process.env.NEXT_PUBLIC_API_BASE;

    if (!api) {
      setError("API endpoint not configured.");
      setLoading(false);
      return;
    }

    Promise.all([
      fetch(`${api}/scan?url=${encodeURIComponent(url1)}`).then((r) => {
        if (!r.ok) throw new Error(`Failed to scan ${url1}`);
        return r.json();
      }),
      fetch(`${api}/scan?url=${encodeURIComponent(url2)}`).then((r) => {
        if (!r.ok) throw new Error(`Failed to scan ${url2}`);
        return r.json();
      }),
    ])
      .then(([r1, r2]) => {
        setResult1(r1);
        setResult2(r2);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Compare error:", err);
        setError(err.message || "Failed to compare sites");
        setLoading(false);
      });
  }, [url1, url2]);

  if (!url1 || !url2) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Missing URLs for comparison</div>
          <a href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Go Home</a>
        </div>
      </div>
    );
  }

  if (loading) {
    return <CompareSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Comparison Error</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <a href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Try Again</a>
        </div>
      </div>
    );
  }

  if (!result1 || !result2) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Failed to load comparison data.</div>
      </div>
    );
  }

  const techA = normalizeTechList(result1.technologies);
  const techB = normalizeTechList(result2.technologies);

  const techALower = techA.map(t => t.toLowerCase());
  const techBLower = techB.map(t => t.toLowerCase());

  const shared = techA.filter(t => techBLower.includes(t.toLowerCase()));
  const aOnly = techA.filter(t => !techBLower.includes(t.toLowerCase()));
  const bOnly = techB.filter(t => !techALower.includes(t.toLowerCase()));

  const total = shared.length + aOnly.length + bOnly.length;
  const score = total === 0 ? 0 : Math.round((shared.length / total) * 100);

  const insights = generateComparisonInsights(url1, url2, shared, aOnly, bOnly, score);

  const categoriesA = categorizeTechnologies(techA);
  const categoriesB = categorizeTechnologies(techB);

  const categoryNames = ["Frontend", "Backend", "CMS", "Hosting", "CDN", "Analytics", "Marketing", "Security", "Payments", "Other"];

  const getCategoryComparison = (category: string) => {
    const catA = categoriesA[category] || [];
    const catB = categoriesB[category] || [];
    
    const catALower = catA.map((t: string) => t.toLowerCase());
    const catBLower = catB.map((t: string) => t.toLowerCase());
    
    return {
      shared: catA.filter((t: string) => catBLower.includes(t.toLowerCase())),
      aOnly: catA.filter((t: string) => !catBLower.includes(t.toLowerCase())),
      bOnly: catB.filter((t: string) => !catALower.includes(t.toLowerCase())),
    };
  };

  return (
    <div className="min-h-screen px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Technology Comparison
      </h1>
      <p className="text-center text-lg mb-8">
        <span className="text-blue-600 font-semibold">{formatUrl(url1)}</span>
        <span className="mx-3 text-slate-400">vs</span>
        <span className="text-purple-600 font-semibold">{formatUrl(url2)}</span>
      </p>

      <div className="bg-white border rounded-xl p-6 shadow-sm mb-10">
        <div className="flex justify-center gap-8 md:gap-16 text-center mb-6">
          <div>
            <div className="text-4xl font-bold text-green-600">{shared.length}</div>
            <div className="text-slate-600 mt-1">Shared</div>
          </div>
          <div className="border-l border-gray-200"></div>
          <div>
            <div className="text-4xl font-bold text-blue-600">{aOnly.length}</div>
            <div className="text-slate-600 mt-1">Only {formatUrl(url1)}</div>
          </div>
          <div className="border-l border-gray-200"></div>
          <div>
            <div className="text-4xl font-bold text-purple-600">{bOnly.length}</div>
            <div className="text-slate-600 mt-1">Only {formatUrl(url2)}</div>
          </div>
        </div>

        <SimilarityBar score={score} />

        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 text-xl">⚡</span>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">AI Analysis</h4>
              <p className="text-slate-700 leading-relaxed">{insights}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-100 border border-green-300"></div>
            <span className="text-slate-600">Shared technologies</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-100 border border-blue-300"></div>
            <span className="text-slate-600">Unique to {formatUrl(url1)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-purple-100 border border-purple-300"></div>
            <span className="text-slate-600">Unique to {formatUrl(url2)}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {categoryNames.map(cat => {
          const data = getCategoryComparison(cat);
          if (data.shared.length === 0 && data.aOnly.length === 0 && data.bOnly.length === 0) {
            return null;
          }
          return (
            <CompareCategoryCard
              key={cat}
              title={cat}
              shared={data.shared}
              aOnly={data.aOnly}
              bOnly={data.bOnly}
            />
          );
        })}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-2 text-blue-600">Raw Data — {formatUrl(url1)}</h4>
          <CollapsibleJSON data={result1} filename={`${formatUrl(url1)}-scan.json`} />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-purple-600">Raw Data — {formatUrl(url2)}</h4>
          <CollapsibleJSON data={result2} filename={`${formatUrl(url2)}-scan.json`} />
        </div>
      </div>

      <div className="mt-10 text-center">
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Compare More Sites
        </a>
      </div>
    </div>
  );
}

function formatUrl(url: string): string {
  try {
    return new URL(url.startsWith("http") ? url : `https://${url}`).hostname;
  } catch {
    return url;
  }
}

export default function ComparePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    }>
      <CompareContent />
    </Suspense>
  );
}
