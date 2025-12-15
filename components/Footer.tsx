import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#DCE4EC] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <img src="/logo.png" alt="TrueTechFinder" className="h-10 mb-4" />
          <p className="text-sm text-[#4A5A70] leading-relaxed">
            Find what powers any website — instantly. AI insights, comparison view & export-ready reports.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[#1A2A45]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#4A5A70]">
            <li><Link href="/" className="hover:text-[#FF8A3D] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#FF8A3D] transition">About</Link></li>
            <li><Link href="/pricing" className="hover:text-[#FF8A3D] transition">Pricing</Link></li>
            <li><a href="https://blog.truetechfinder.com" className="hover:text-[#FF8A3D] transition">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[#1A2A45]">Get Started</h4>
          <ul className="space-y-2 text-sm text-[#4A5A70]">
            <li><Link href="/scan" className="hover:text-[#FF8A3D] transition">Scan a Website</Link></li>
            <li><Link href="/privacy" className="hover:text-[#FF8A3D] transition">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-[#DCE4EC] py-4 text-center text-sm text-[#4A5A70]">
        © {new Date().getFullYear()} TrueTechFinder — All rights reserved.
      </div>
    </footer>
  );
}
