import Link from "next/link";
import ToggleScanMode from "../components/ToggleScanMode";

export default function Home() {
  return (
    <div className="min-h-screen">

      <section className="gradient-hero pt-20 pb-24 text-center relative overflow-hidden">
        
        <div className="floating-shape w-32 h-32 bg-[#FF8A3D] top-10 left-10 animate-pulse-slow"></div>
        <div className="floating-shape w-40 h-40 bg-[#C4D3E0] bottom-20 right-10 animate-pulse-slow-delay-2"></div>
        <div className="floating-shape w-24 h-24 bg-[#FF8A3D] top-1/3 right-1/4 animate-pulse-slow-delay-1"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-[#1A2A45]">
            See What Technology Any Website Uses — <br className="hidden md:block" />
            <span className="text-[#FF8A3D]">With AI-Powered Insights</span>
          </h1>

          <p className="text-lg md:text-xl text-[#4A5A70] max-w-3xl mx-auto mb-10 leading-relaxed">
            Scan any website to detect CMS, hosting, analytics, frameworks, security tools and more — 
            with clear, human-readable AI insights instead of raw lists.
          </p>

          <ToggleScanMode />

          <p className="mt-4 text-sm text-[#4A5A70]">
            Free to use &bull; No signup required
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap text-sm text-[#4A5A70]">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Trusted by founders, agencies & marketers
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              AI-optimized detection
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Quick results in seconds
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1A2A45]">
            Stop Guessing What Tools Websites Use
          </h2>
          <p className="text-lg text-[#4A5A70] leading-relaxed max-w-3xl mx-auto">
            TrueTechFinder shows you exactly what technologies power any website — including CMS, 
            infrastructure, analytics, JavaScript frameworks, security tools and more — without technical complexity.
          </p>
        </div>
      </section>

      <section className="bg-[#F3F7FA] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#1A2A45]">
            Built For
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border border-[#DCE4EC] rounded-xl p-6 text-center hover:shadow-md transition">
              <div className="w-14 h-14 bg-[#FF8A3D]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#FF8A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#1A2A45]">Agencies</h3>
              <p className="text-sm text-[#4A5A70]">Audit clients & competitors quickly</p>
            </div>

            <div className="bg-white border border-[#DCE4EC] rounded-xl p-6 text-center hover:shadow-md transition">
              <div className="w-14 h-14 bg-[#FF8A3D]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#FF8A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#1A2A45]">Founders</h3>
              <p className="text-sm text-[#4A5A70]">Validate tech decisions with real data</p>
            </div>

            <div className="bg-white border border-[#DCE4EC] rounded-xl p-6 text-center hover:shadow-md transition">
              <div className="w-14 h-14 bg-[#FF8A3D]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#FF8A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#1A2A45]">Marketers</h3>
              <p className="text-sm text-[#4A5A70]">Uncover tracking & analytics tools</p>
            </div>

            <div className="bg-white border border-[#DCE4EC] rounded-xl p-6 text-center hover:shadow-md transition">
              <div className="w-14 h-14 bg-[#FF8A3D]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#FF8A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#1A2A45]">Developers</h3>
              <p className="text-sm text-[#4A5A70]">Inspect tech stacks instantly</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#1A2A45]">
            All the Tech Insights You Need
          </h2>
          <p className="text-center text-[#4A5A70] mb-12 text-lg">
            Organized, Explained, Ready
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-5 bg-[#F3F7FA] rounded-xl">
              <div className="w-10 h-10 bg-[#FF8A3D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF8A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A2A45] mb-1">AI-Powered Tech Detection</h3>
                <p className="text-sm text-[#4A5A70]">Smart analysis with human-readable insights</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#F3F7FA] rounded-xl">
              <div className="w-10 h-10 bg-[#FF8A3D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF8A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A2A45] mb-1">CMS, Hosting & Frameworks</h3>
                <p className="text-sm text-[#4A5A70]">Full stack identification in one scan</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#F3F7FA] rounded-xl">
              <div className="w-10 h-10 bg-[#FF8A3D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF8A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A2A45] mb-1">Side-by-Side Comparisons</h3>
                <p className="text-sm text-[#4A5A70]">Compare any two websites instantly</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#F3F7FA] rounded-xl">
              <div className="w-10 h-10 bg-[#FF8A3D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF8A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A2A45] mb-1">Smart Site Previews</h3>
                <p className="text-sm text-[#4A5A70]">Screenshots and favicons for context</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#F3F7FA] rounded-xl">
              <div className="w-10 h-10 bg-[#FF8A3D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF8A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A2A45] mb-1">Export-Ready Results</h3>
                <p className="text-sm text-[#4A5A70]">JSON export + PDF coming soon</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#F3F7FA] rounded-xl">
              <div className="w-10 h-10 bg-[#FF8A3D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF8A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A2A45] mb-1">Fast, Clear, Categorized</h3>
                <p className="text-sm text-[#4A5A70]">Results organized by category</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/" className="inline-block px-8 py-3 bg-[#FF8A3D] text-white rounded-lg text-lg font-medium hover:bg-[#E6762E] hover:scale-[1.03] transition shadow-lg shadow-[#FF8A3D]/25">
              Start a Free Scan
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#E7EDF3] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#1A2A45]">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-[#FF8A3D] text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-[#FF8A3D]/25 group-hover:scale-105 transition">
                1
              </div>
              <h4 className="font-semibold text-lg mb-2 text-[#1A2A45]">Paste a Website URL</h4>
              <p className="text-[#4A5A70] text-sm">Enter any website you want to analyze</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-[#FF8A3D] text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-[#FF8A3D]/25 group-hover:scale-105 transition">
                2
              </div>
              <h4 className="font-semibold text-lg mb-2 text-[#1A2A45]">See Detected Technologies</h4>
              <p className="text-[#4A5A70] text-sm">Get a complete list of all tools found</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-[#FF8A3D] text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-[#FF8A3D]/25 group-hover:scale-105 transition">
                3
              </div>
              <h4 className="font-semibold text-lg mb-2 text-[#1A2A45]">Get AI-Driven Insights</h4>
              <p className="text-[#4A5A70] text-sm">Understand what each technology means</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-[#FF8A3D] text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-[#FF8A3D]/25 group-hover:scale-105 transition">
                4
              </div>
              <h4 className="font-semibold text-lg mb-2 text-[#1A2A45]">Compare & Export Results</h4>
              <p className="text-[#4A5A70] text-sm">Analyze competitors and save reports</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center bg-[#D9E4EE] relative overflow-hidden">
        <div className="floating-shape w-20 h-20 bg-[#FF8A3D] top-10 right-20 animate-pulse-slow"></div>
        <div className="floating-shape w-16 h-16 bg-[#C4D3E0] bottom-10 left-20 animate-pulse-slow-delay-1-5"></div>

        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2A45]">Ready to See What Powers Any Website?</h2>
          <p className="text-[#4A5A70] mb-8 text-lg">
            Free to use during beta — no signup required and unlimited scans.
          </p>

          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[#FF8A3D] text-white rounded-lg text-lg font-medium hover:bg-[#E6762E] hover:scale-[1.03] transition shadow-lg shadow-[#FF8A3D]/25"
          >
            Start Free Scan
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#4A5A70] mb-8">
            Ready to learn more? Visit the{" "}
            <a href="https://blog.truetechfinder.com" className="text-[#FF8A3D] hover:underline font-medium">Blog</a>
            {" "}or compare two websites below.
          </p>
          <ToggleScanMode />
        </div>
      </section>

      <section className="bg-[#1A2A45] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF8A3D] mb-3">50+</div>
              <div className="text-[#C4D3E0] text-lg">Technologies Detected</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF8A3D] mb-3">10</div>
              <div className="text-[#C4D3E0] text-lg">Smart Categories</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF8A3D] mb-3">AI</div>
              <div className="text-[#C4D3E0] text-lg">Powered Insights</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
