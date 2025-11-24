"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

function CompareContent() {
  const params = useSearchParams();
  const url1 = params.get("url1");
  const url2 = params.get("url2");

  const [loading, setLoading] = useState(true);
  const [result1, setResult1] = useState<any>(null);
  const [result2, setResult2] = useState<any>(null);

  useEffect(() => {
    if (!url1 || !url2) return;

    const api = process.env.NEXT_PUBLIC_API_BASE;

    Promise.all([
      fetch(`${api}/scan?url=${encodeURIComponent(url1)}`).then((r) => r.json()),
      fetch(`${api}/scan?url=${encodeURIComponent(url2)}`).then((r) => r.json()),
    ])
      .then(([r1, r2]) => {
        setResult1(r1);
        setResult2(r2);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Compare error:", err);
        setLoading(false);
      });
  }, [url1, url2]);

  if (!url1 || !url2) {
    return <div className="p-10 text-center text-red-500">Missing URLs for comparison.</div>;
  }

  if (loading) {
    return (
      <div className="p-10 text-center">
        Comparing <b>{url1}</b> and <b>{url2}</b>...
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Comparison Results</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold">{url1}</h2>
          <pre className="mt-4 bg-gray-100 p-4 rounded-lg overflow-auto">
            {JSON.stringify(result1, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold">{url2}</h2>
          <pre className="mt-4 bg-gray-100 p-4 rounded-lg overflow-auto">
            {JSON.stringify(result2, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <CompareContent />
    </Suspense>
  );
}
