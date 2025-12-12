"use client";
import React, { useState } from "react";
import ScannerInput from "./ScannerInput";
import CompareInput from "./CompareInput";

export default function ToggleScanMode() {
  const [mode, setMode] = useState("single");

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setMode("single")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            mode === "single"
              ? "bg-[#FF8A3D] text-white shadow-md shadow-[#FF8A3D]/25"
              : "bg-white text-[#1A2A45] border border-[#C4D3E0] hover:border-[#FF8A3D]"
          }`}
        >
          Single Scan
        </button>

        <button
          onClick={() => setMode("compare")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            mode === "compare"
              ? "bg-[#FF8A3D] text-white shadow-md shadow-[#FF8A3D]/25"
              : "bg-white text-[#1A2A45] border border-[#C4D3E0] hover:border-[#FF8A3D]"
          }`}
        >
          Compare Scan
        </button>
      </div>

      {mode === "single" ? <ScannerInput /> : <CompareInput />}
    </div>
  );
}
