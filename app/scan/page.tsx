"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ResultsSummary from "@/components/ResultsSummary";
import TechCategoryCard from "@/components/TechCategoryCard";

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

  const categories = categorizeTechnologies(data?.technologies);

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
