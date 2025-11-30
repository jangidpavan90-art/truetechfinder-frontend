import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <img src="/logo-mark.svg" alt="TrueTechFinder" className="h-10 mb-4" />
          <p className="text-sm text-slate-600 leading-relaxed">
            Find what powers any website — instantly. AI insights, comparison view & export-ready reports.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-slate-900">Product</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/scan" className="hover:text-slate-900 transition">Scan</Link></li>
            <li><Link href="/compare" className="hover:text-slate-900 transition">Compare</Link></li>
            <li><Link href="/pricing" className="hover:text-slate-900 transition">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-slate-900">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/about" className="hover:text-slate-900 transition">About</Link></li>
            <li><Link href="/blog" className="hover:text-slate-900 transition">Blog</Link></li>
            <li><Link href="/privacy" className="hover:text-slate-900 transition">Privacy</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} TrueTechFinder — All rights reserved.
      </div>
    </footer>
  );
}
