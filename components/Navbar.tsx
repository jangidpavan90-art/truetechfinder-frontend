"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-[#E7EDF3] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <Link href="/">
          <img src="/logo.png" alt="TrueTechFinder" className="h-10 cursor-pointer" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-[#1A2A45]">
            <Link href="/" className="hover:text-[#FF8A3D] transition">Home</Link>
            <Link href="/about" className="hover:text-[#FF8A3D] transition">About</Link>
            <a href="https://blog.truetechfinder.com" className="hover:text-[#FF8A3D] transition">Blog</a>
          </nav>
          
          <Link href="/">
            <button className="px-4 py-2 bg-[#FF8A3D] text-white rounded-lg hover:bg-[#E6762E] transition shadow-md shadow-[#FF8A3D]/25">
              Scan a Website
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-[#1A2A45]"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#E7EDF3] py-4 px-6 flex flex-col gap-4 text-[#1A2A45]">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <a href="https://blog.truetechfinder.com" onClick={() => setOpen(false)}>Blog</a>
          <Link href="/" onClick={() => setOpen(false)}>
            <button className="mt-2 px-4 py-2 bg-[#FF8A3D] text-white rounded-lg w-full hover:bg-[#E6762E]">
              Scan a Website
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
