"use client";
import React, { useState } from "react";
import ScannerInput from "./ScannerInput";
import CompareInput from "./CompareInput";

export default function ToggleScanMode() {
  const [mode, setMode] = useState("single");

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setMode("single")}
          className={`px-4 py-2 rounded-lg ${
            mode === "single"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Single Scan
        </button>

        <button
          onClick={() => setMode("compare")}
          className={`px-4 py-2 rounded-lg ${
            mode === "compare"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Compare Scan
        </button>
      </div>

      {/* Conditional Rendering */}
      {mode === "single" ? <ScannerInput /> : <CompareInput />}
    </div>
  );
}
