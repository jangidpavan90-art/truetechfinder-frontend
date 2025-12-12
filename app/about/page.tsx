export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-24 bg-[#F3F7FA]">
      <h1 className="text-5xl font-bold text-center text-[#1A2A45]">About TrueTechFinder</h1>

      <p className="max-w-3xl mx-auto text-center text-[#4A5A70] mt-6 text-lg">
        TrueTechFinder is a modern, AI-powered platform designed to help
        founders, marketers, developers, and agencies understand any website's
        technology stack instantly.

        <br /><br />
        Our mission is simple: make technology intelligence accessible,
        accurate, and fast — without the complexity of legacy tools.
      </p>

      <div className="max-w-4xl mx-auto mt-16 bg-white p-10 rounded-xl border border-[#DCE4EC] shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#1A2A45]">Our Vision</h2>
        <p className="text-[#4A5A70] text-center text-lg">
          We aim to build the most intuitive and intelligent technology discovery
          platform — combining deep scanning with AI insights.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl border border-[#DCE4EC] shadow-sm text-center">
          <div className="w-12 h-12 bg-[#FFEDD5] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#FF8A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#1A2A45] mb-2">Lightning Fast</h3>
          <p className="text-[#4A5A70]">Get technology insights in seconds, not minutes.</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#DCE4EC] shadow-sm text-center">
          <div className="w-12 h-12 bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#16A34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#1A2A45] mb-2">Accurate Data</h3>
          <p className="text-[#4A5A70]">Our AI ensures precise detection with minimal false positives.</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#DCE4EC] shadow-sm text-center">
          <div className="w-12 h-12 bg-[#E7EDF3] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#1A2A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#1A2A45] mb-2">Easy to Use</h3>
          <p className="text-[#4A5A70]">Simple interface designed for professionals of all levels.</p>
        </div>
      </div>
    </div>
  );
}
