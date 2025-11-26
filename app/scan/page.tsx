"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ResultsSummary from "@/components/ResultsSummary";
import TechCategoryCard from "@/components/TechCategoryCard";
import AIInsights from "@/components/AIInsights";

const normalizeTechList = (techData: unknown): string[] => {
  if (!techData) return [];

  if (Array.isArray(techData)) {
    return techData.map(String);
  }

  if (typeof techData === "string") {
    return techData.split(",").map((t) => t.trim()).filter(Boolean);
  }

  if (typeof techData === "object") {
    return Object.values(techData as Record<string, unknown>).map(String);
  }

  console.warn("Unknown technologies format:", techData);
  return [];
};

const categorizeTechnologies = (techData: unknown) => {
  const list = normalizeTechList(techData);

  const categories: Record<string, string[]> = {
    Frontend: [],
    Backend: [],
    CMS: [],
    Hosting: [],
    CDN: [],
    Analytics: [],
    Marketing: [],
    Security: [],
    Payments: [],
    Other: [],
  };

  list.forEach((tech) => {
    const t = tech.toLowerCase();

    if (t.includes("react") || t.includes("vue") || t.includes("angular") || t.includes("tailwind") || t.includes("bootstrap") || t.includes("jquery") || t.includes("next") || t.includes("nuxt")) {
      categories.Frontend.push(tech);
    } 
    else if (t.includes("node") || t.includes("python") || t.includes("php") || t.includes("ruby") || t.includes("java") || t.includes("express") || t.includes("django") || t.includes("laravel")) {
      categories.Backend.push(tech);
    }
    else if (t.includes("wordpress") || t.includes("shopify") || t.includes("drupal") || t.includes("wix") || t.includes("squarespace") || t.includes("webflow") || t.includes("ghost")) {
      categories.CMS.push(tech);
    }
    else if (t.includes("cloudflare") || t.includes("vercel") || t.includes("aws") || t.includes("azure") || t.includes("netlify") || t.includes("heroku") || t.includes("digitalocean") || t.includes("google cloud")) {
      categories.Hosting.push(tech);
    }
    else if (t.includes("cdn") || t.includes("fastly") || t.includes("akamai")) {
      categories.CDN.push(tech);
    }
    else if (t.includes("analytics") || t.includes("google tag") || t.includes("gtm") || t.includes("tag manager") || t.includes("hotjar") || t.includes("mixpanel") || t.includes("segment") || t.includes("plausible")) {
      categories.Analytics.push(tech);
    }
    else if (t.includes("pixel") || t.includes("ads") || t.includes("facebook") || t.includes("hubspot") || t.includes("mailchimp") || t.includes("intercom") || t.includes("drift")) {
      categories.Marketing.push(tech);
    }
    else if (t.includes("ssl") || t.includes("security") || t.includes("recaptcha") || t.includes("hcaptcha") || t.includes("captcha") || t.includes("auth0") || t.includes("okta")) {
      categories.Security.push(tech);
    }
    else if (t.includes("stripe") || t.includes("paypal") || t.includes("square") || t.includes("braintree") || t.includes("checkout")) {
      categories.Payments.push(tech);
    }
    else {
      categories.Other.push(tech);
    }
  });

  return Object.fromEntries(
    Object.entries(categories).filter(([_, value]) => value.length > 0)
  );
};

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

  const categories = categorizeTechnologies(data?.technologies);
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
