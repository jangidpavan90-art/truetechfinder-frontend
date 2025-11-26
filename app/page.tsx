import ToggleScanMode from "../components/ToggleScanMode";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="pt-20 pb-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900">
          Find What Powers Any Website — <span className="text-blue-600">Instantly</span>.
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          TrueTechFinder reveals full technology stacks with AI insights, rich categorization, 
          live previews, and side-by-side comparisons — all in seconds.
        </p>

        <ToggleScanMode />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Why TrueTechFinder?</h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Enhanced Detection</h3>
            <p className="text-slate-600">
              Automatically categorize tech stacks with AI-driven insights — frontend, backend, CMS,
              hosting, analytics, and more.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Side-By-Side Comparisons</h3>
            <p className="text-slate-600">
              Compare any two websites and discover shared and unique technologies with similarity scoring.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Site Preview</h3>
            <p className="text-slate-600">
              Get instant screenshots, favicons, and structured breakdowns in a clean, modern dashboard.
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-10">

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Export-Ready Reports</h3>
            <p className="text-slate-600">
              Download raw JSON data or copy results to clipboard. Full PDF export coming soon.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">For Developers, Agencies & Marketers</h3>
            <p className="text-slate-600">
              Perfect for competitive analysis, client audits, market research, and technical reviews.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-white py-20 border-t">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center px-6">

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
            <h4 className="font-semibold text-lg mb-2">Enter a URL</h4>
            <p className="text-slate-500 text-sm">Paste any website address</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
            <h4 className="font-semibold text-lg mb-2">We Analyze</h4>
            <p className="text-slate-500 text-sm">Our engine scans the site</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
            <h4 className="font-semibold text-lg mb-2">AI Insights</h4>
            <p className="text-slate-500 text-sm">Get categorized results</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">4</div>
            <h4 className="font-semibold text-lg mb-2">Compare & Export</h4>
            <p className="text-slate-500 text-sm">Analyze and download</p>
          </div>

        </div>
      </section>

      <section className="py-20 text-center bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl font-bold mb-4">Start Scanning in Seconds</h2>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
          No sign-up required. No limits during beta. Just enter a URL and discover.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Scan a Website
          </a>
          <a
            href="/pricing"
            className="px-8 py-3 bg-white border border-gray-300 text-slate-700 rounded-lg text-lg hover:shadow-sm transition"
          >
            View Pricing
          </a>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-400">Technologies Detected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">10</div>
              <div className="text-slate-400">Smart Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">AI</div>
              <div className="text-slate-400">Powered Insights</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
