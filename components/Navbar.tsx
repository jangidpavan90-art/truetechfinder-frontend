"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        TrueTechFinder
      </Link>

      <div className="flex gap-6 text-gray-700">
        <Link href="/pricing" className="hover:text-blue-600">
          Pricing
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link href="/blog" className="hover:text-blue-600">
          Blog
        </Link>

        <Link href="/login" className="hover:text-blue-600">
          Login
        </Link>

        <Link
          href="/signup"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
