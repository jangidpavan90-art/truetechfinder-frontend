"use client";

import { useState } from "react";

interface CollapsibleJSONProps {
  data: unknown;
  filename?: string;
}

export default function CollapsibleJSON({ data, filename = "scan-result.json" }: CollapsibleJSONProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!data) return null;

  const jsonText = JSON.stringify(data, null, 2);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(jsonText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Failed to copy:", e);
    }
  };

  const downloadJSON = () => {
    const blob = new Blob([jsonText], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#E7EDF3] hover:bg-[#DCE4EC] rounded-lg text-sm transition text-[#1A2A45]"
        >
          {open ? "Hide Raw JSON" : "View Raw JSON"}
          <svg className="w-4 h-4 transition-transform" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex gap-2">
          <button
            onClick={copyToClipboard}
            className="px-3 py-2 bg-white border border-[#DCE4EC] rounded-md text-sm hover:shadow-sm transition flex items-center gap-2 text-[#1A2A45]"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-[#16A34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                </svg>
                Copy JSON
              </>
            )}
          </button>

          <button
            onClick={downloadJSON}
            className="px-3 py-2 bg-[#FF8A3D] text-white rounded-md text-sm hover:bg-[#E6762E] transition flex items-center gap-2 shadow-sm shadow-[#FF8A3D]/25"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-4 bg-[#1A2A45] text-gray-100 p-4 rounded-lg overflow-auto text-sm" style={{ maxHeight: "420px" }}>
          <pre>{jsonText}</pre>
        </div>
      )}
    </div>
  );
}
