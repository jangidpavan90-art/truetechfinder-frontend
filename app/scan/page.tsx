"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScanPage() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (!url) return;

    const apiBase = process.env.NEXT_PUBLIC_API_BASE;

    fetch(`${apiBase}/scan?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Scan error:", err);
        setLoading(false);
      });
  }, [url]);

  if (!url) {
    return <div className="p-10 text-center text-red-500">No URL provided.</div>;
  }

  if (loading) {
    return <div className="p-10 text-center">Scanning <b>{url}</b>...</div>;
  }

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold">Results for {url}</h1>

      <pre className="mt-6 bg-gray-100 p-4 rounded-lg overflow-auto">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
}
