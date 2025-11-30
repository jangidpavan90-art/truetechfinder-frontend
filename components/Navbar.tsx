"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <Link href="/">
          <img src="/logo-header.svg" alt="TrueTechFinder" className="h-9 cursor-pointer" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <Link href="/scan" className="hover:text-slate-900 transition">Scan</Link>
          <Link href="/compare" className="hover:text-slate-900 transition">Compare</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition">Pricing</Link>
          <Link href="/blog" className="hover:text-slate-900 transition">Blog</Link>
          <Link href="/about" className="hover:text-slate-900 transition">About</Link>
        </nav>

        <div className="hidden md:flex">
          <Link href="/scan">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Scan a Website
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t py-4 px-6 flex flex-col gap-4 text-slate-700">
          <Link href="/scan" onClick={() => setOpen(false)}>Scan</Link>
          <Link href="/compare" onClick={() => setOpen(false)}>Compare</Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/scan" onClick={() => setOpen(false)}>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg w-full">
              Scan a Website
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
