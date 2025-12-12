"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import CompareCategoryCard from "@/components/CompareCategoryCard";
import SimilarityBar from "@/components/SimilarityBar";
import CollapsibleJSON from "@/components/CollapsibleJSON";
import CompareSkeleton from "@/components/skeletons/CompareSkeleton";
import SitePreview from "@/components/SitePreview";
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
      <div className="min-h-screen flex items-center justify-center bg-[#E7EDF3]">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Missing URLs for comparison</div>
          <a href="/" className="px-4 py-2 bg-[#FF8A3D] text-white rounded-lg hover:bg-[#E6762E] transition">Go Home</a>
        </div>
      </div>
    );
  }

  if (loading) {
    return <CompareSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E7EDF3]">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Comparison Error</div>
          <p className="text-[#4A5A70] mb-4">{error}</p>
          <a href="/" className="px-4 py-2 bg-[#FF8A3D] text-white rounded-lg hover:bg-[#E6762E] transition">Try Again</a>
        </div>
      </div>
    );
  }

  if (!result1 || !result2) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E7EDF3]">
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
    <div className="min-h-screen px-6 py-10 max-w-6xl mx-auto bg-[#F3F7FA]">
      <h1 className="text-3xl font-bold mb-2 text-center text-[#1A2A45]">
        Technology Comparison
      </h1>
      <p className="text-center text-lg mb-8">
        <span className="text-[#FF8A3D] font-semibold">{formatUrl(url1)}</span>
        <span className="mx-3 text-[#7A8A9C]">vs</span>
        <span className="text-[#1A2A45] font-semibold">{formatUrl(url2)}</span>
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <SitePreview url={url1} compact accentColor="orange" />
        <SitePreview url={url2} compact accentColor="slate" />
      </div>

      <div className="bg-white border border-[#DCE4EC] rounded-xl p-6 shadow-sm mb-10">
        <div className="flex justify-center gap-8 md:gap-16 text-center mb-6">
          <div>
            <div className="text-4xl font-bold text-[#16A34A]">{shared.length}</div>
            <div className="text-[#4A5A70] mt-1">Shared</div>
          </div>
          <div className="border-l border-[#DCE4EC]"></div>
          <div>
            <div className="text-4xl font-bold text-[#FF8A3D]">{aOnly.length}</div>
            <div className="text-[#4A5A70] mt-1">Only {formatUrl(url1)}</div>
          </div>
          <div className="border-l border-[#DCE4EC]"></div>
          <div>
            <div className="text-4xl font-bold text-[#1A2A45]">{bOnly.length}</div>
            <div className="text-[#4A5A70] mt-1">Only {formatUrl(url2)}</div>
          </div>
        </div>

        <SimilarityBar score={score} />

        <div className="mt-6 p-4 bg-gradient-to-r from-[#FFF7ED] to-[#FEF3C7] rounded-lg border border-[#FDBA74]">
          <div className="flex items-start gap-2">
            <span className="text-[#FF8A3D] text-xl">⚡</span>
            <div>
              <h4 className="font-semibold text-[#1A2A45] mb-1">AI Analysis</h4>
              <p className="text-[#4A5A70] leading-relaxed">{insights}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#DCFCE7] border border-[#16A34A]"></div>
            <span className="text-[#4A5A70]">Shared technologies</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#FFEDD5] border border-[#FF8A3D]"></div>
            <span className="text-[#4A5A70]">Unique to {formatUrl(url1)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#E7EDF3] border border-[#4A5A70]"></div>
            <span className="text-[#4A5A70]">Unique to {formatUrl(url2)}</span>
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
          <h4 className="text-lg font-semibold mb-2 text-[#FF8A3D]">Raw Data — {formatUrl(url1)}</h4>
          <CollapsibleJSON data={result1} filename={`${formatUrl(url1)}-scan.json`} />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-[#1A2A45]">Raw Data — {formatUrl(url2)}</h4>
          <CollapsibleJSON data={result2} filename={`${formatUrl(url2)}-scan.json`} />
        </div>
      </div>

      <div className="mt-10 text-center">
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-[#FF8A3D] text-white rounded-lg hover:bg-[#E6762E] transition shadow-md shadow-[#FF8A3D]/25"
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
      <div className="min-h-screen flex items-center justify-center bg-[#E7EDF3]">
        <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-[#FF8A3D] border-t-transparent"></div>
      </div>
    }>
      <CompareContent />
    </Suspense>
  );
}
