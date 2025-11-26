import ToggleScanMode from "../components/ToggleScanMode";

export default function Home() {
  return (
    <div className="min-h-screen">

      <section className="gradient-hero pt-24 pb-32 text-center relative overflow-hidden">
        
        <div className="floating-shape w-32 h-32 bg-blue-300 top-10 left-10 animate-pulse-slow"></div>
        <div className="floating-shape w-40 h-40 bg-purple-300 bottom-20 right-10 animate-pulse-slow-delay-2"></div>
        <div className="floating-shape w-24 h-24 bg-green-300 top-1/3 right-1/4 animate-pulse-slow-delay-1"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900">
            Find What Powers Any Website — <span className="text-blue-600">Instantly</span>.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            AI-enhanced technology detection, side-by-side comparisons, smart previews, 
            and export-ready insights — all in seconds.
          </p>

          <ToggleScanMode />

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white shadow-xl border border-slate-200 rounded-2xl overflow-hidden animate-float">
              <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-4 text-sm text-slate-500">TrueTechFinder Dashboard</span>
              </div>
              <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">example.com</div>
                    <div className="text-sm text-slate-500">12 technologies detected</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {['React', 'Next.js', 'Tailwind', 'Vercel', 'Node.js', 'PostgreSQL', 'Stripe', 'Cloudflare'].map((tech, i) => (
                    <div key={i} className="bg-slate-100 rounded-lg px-3 py-2 text-sm text-slate-700 text-center font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Why TrueTechFinder?</h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition group">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition">
              <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">AI-Enhanced Detection</h3>
            <p className="text-slate-600 leading-relaxed">
              Categorized technology detection with icons, insights, hosting layers, frameworks, analytics and more.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition group">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition">
              <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Side-By-Side Comparisons</h3>
            <p className="text-slate-600 leading-relaxed">
              Compare any two sites with shared tech, uniqueness, similarity scoring, and visual differences.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition group">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition">
              <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Smart Site Preview</h3>
            <p className="text-slate-600 leading-relaxed">
              Instant screenshots, favicons, categories, and UI-friendly breakdowns for every scanned website.
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-10">

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition group">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition">
              <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Export-Ready Reports</h3>
            <p className="text-slate-600 leading-relaxed">
              Download raw JSON data or copy results to clipboard. Full PDF export coming soon for professional reports.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition group">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition">
              <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Built for Teams</h3>
            <p className="text-slate-600 leading-relaxed">
              Perfect for developers, agencies, and marketers doing competitive analysis, audits, or technical reviews.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-white py-24 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">How It Works</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center px-6">

          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-5 shadow-lg group-hover:scale-105 transition">
              1
            </div>
            <h4 className="font-semibold text-lg mb-2 text-slate-900">Enter a URL</h4>
            <p className="text-slate-500 text-sm">Paste any website address you want to analyze</p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-5 shadow-lg group-hover:scale-105 transition">
              2
            </div>
            <h4 className="font-semibold text-lg mb-2 text-slate-900">We Analyze</h4>
            <p className="text-slate-500 text-sm">Our engine scans and detects technologies</p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-5 shadow-lg group-hover:scale-105 transition">
              3
            </div>
            <h4 className="font-semibold text-lg mb-2 text-slate-900">AI Insights</h4>
            <p className="text-slate-500 text-sm">Get categorized results with smart analysis</p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-5 shadow-lg group-hover:scale-105 transition">
              4
            </div>
            <h4 className="font-semibold text-lg mb-2 text-slate-900">Compare & Export</h4>
            <p className="text-slate-500 text-sm">Analyze competitors and download reports</p>
          </div>

        </div>
      </section>

      <section className="py-24 text-center gradient-hero relative overflow-hidden">
        <div className="floating-shape w-20 h-20 bg-blue-300 top-10 right-20 animate-pulse-slow"></div>
        <div className="floating-shape w-16 h-16 bg-purple-300 bottom-10 left-20 animate-pulse-slow-delay-1-5"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Start Scanning in Seconds</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto text-lg">
            No signup required during beta. Unlimited scans. Discover what powers any website.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 hover:scale-[1.03] transition inline-flex items-center gap-2 shadow-lg shadow-blue-600/25"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Scan a Website
            </a>
            <a
              href="/pricing"
              className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg text-lg font-medium hover:shadow-md hover:scale-[1.02] transition"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-3">50+</div>
              <div className="text-slate-400 text-lg">Technologies Detected</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-400 mb-3">10</div>
              <div className="text-slate-400 text-lg">Smart Categories</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-3">AI</div>
              <div className="text-slate-400 text-lg">Powered Insights</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
