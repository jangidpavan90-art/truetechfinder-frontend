"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import CompareCategoryCard from "@/components/CompareCategoryCard";

const normalizeTechList = (techData: unknown): string[] => {
  if (!techData) return [];
  if (Array.isArray(techData)) return techData.map(String);
  if (typeof techData === "string") return techData.split(",").map((t) => t.trim()).filter(Boolean);
  if (typeof techData === "object") return Object.values(techData as Record<string, unknown>).map(String);
  return [];
};

const categorizeTech = (tech: string): string => {
  const t = tech.toLowerCase();
  
  if (t.includes("react") || t.includes("vue") || t.includes("angular") || t.includes("tailwind") || t.includes("bootstrap") || t.includes("jquery") || t.includes("next") || t.includes("nuxt") || t.includes("svelte")) {
    return "Frontend";
  }
  if (t.includes("node") || t.includes("python") || t.includes("php") || t.includes("ruby") || t.includes("java") || t.includes("express") || t.includes("django") || t.includes("laravel") || t.includes("rails")) {
    return "Backend";
  }
  if (t.includes("wordpress") || t.includes("shopify") || t.includes("drupal") || t.includes("wix") || t.includes("squarespace") || t.includes("webflow") || t.includes("ghost") || t.includes("joomla")) {
    return "CMS";
  }
  if (t.includes("cloudflare") || t.includes("vercel") || t.includes("aws") || t.includes("azure") || t.includes("netlify") || t.includes("heroku") || t.includes("digitalocean") || t.includes("google cloud") || t.includes("linode")) {
    return "Hosting";
  }
  if (t.includes("cdn") || t.includes("fastly") || t.includes("akamai") || t.includes("cloudfront")) {
    return "CDN";
  }
  if (t.includes("analytics") || t.includes("google tag") || t.includes("gtm") || t.includes("tag manager") || t.includes("hotjar") || t.includes("mixpanel") || t.includes("segment") || t.includes("plausible") || t.includes("heap")) {
    return "Analytics";
  }
  if (t.includes("pixel") || t.includes("ads") || t.includes("facebook") || t.includes("hubspot") || t.includes("mailchimp") || t.includes("intercom") || t.includes("drift") || t.includes("marketo")) {
    return "Marketing";
  }
  if (t.includes("ssl") || t.includes("security") || t.includes("recaptcha") || t.includes("hcaptcha") || t.includes("captcha") || t.includes("auth0") || t.includes("okta") || t.includes("cloudflare")) {
    return "Security";
  }
  if (t.includes("stripe") || t.includes("paypal") || t.includes("square") || t.includes("braintree") || t.includes("checkout") || t.includes("shopify pay")) {
    return "Payments";
  }
  return "Other";
};

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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent mb-4"></div>
          <p className="text-lg">Comparing technologies...</p>
          <p className="text-slate-500 mt-2">
            <span className="text-blue-600">{url1}</span> vs <span className="text-purple-600">{url2}</span>
          </p>
        </div>
      </div>
    );
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

  const categories = ["Frontend", "Backend", "CMS", "Hosting", "CDN", "Analytics", "Marketing", "Security", "Payments", "Other"];

  const getCategoryData = (category: string) => {
    return {
      shared: shared.filter(t => categorizeTech(t) === category),
      aOnly: aOnly.filter(t => categorizeTech(t) === category),
      bOnly: bOnly.filter(t => categorizeTech(t) === category),
    };
  };

  const formatUrl = (url: string) => {
    try {
      return new URL(url.startsWith("http") ? url : `https://${url}`).hostname;
    } catch {
      return url;
    }
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
        <div className="flex justify-center gap-8 md:gap-16 text-center">
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
          <div className="border-l border-gray-200"></div>
          <div>
            <div className="text-4xl font-bold text-slate-700">{techA.length + techB.length - shared.length}</div>
            <div className="text-slate-600 mt-1">Total Unique</div>
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
        {categories.map(cat => {
          const data = getCategoryData(cat);
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
