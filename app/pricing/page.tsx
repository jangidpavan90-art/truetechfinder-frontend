export default function PricingPage() {
  return (
    <div className="min-h-screen px-6 py-24 bg-[#E7EDF3]">
      <h1 className="text-5xl font-bold text-center text-[#1A2A45]">Pricing</h1>
      <p className="text-center text-[#4A5A70] mt-4">
        Choose the plan that fits your needs.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 mt-16">
        
        <div className="bg-white p-8 rounded-xl border border-[#DCE4EC] shadow-sm text-center">
          <h2 className="text-2xl font-bold text-[#1A2A45]">Free</h2>
          <p className="text-[#4A5A70] mt-2">For casual users</p>
          <p className="text-4xl font-bold mt-4 text-[#1A2A45]">₹0</p>

          <ul className="mt-6 text-[#4A5A70] space-y-2">
            <li>• Basic tech detection</li>
            <li>• Up to 10 scans/day</li>
            <li>• Limited insights</li>
          </ul>
          
          <button className="mt-8 w-full py-3 bg-[#E7EDF3] text-[#1A2A45] rounded-lg font-medium hover:bg-[#DCE4EC] transition">
            Get Started
          </button>
        </div>

        <div className="bg-gradient-to-b from-[#FFF7ED] to-white p-8 rounded-xl border-2 border-[#FF8A3D] shadow-lg text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FF8A3D] text-white text-sm font-semibold rounded-full">
            Popular
          </div>
          <h2 className="text-2xl font-bold text-[#FF8A3D]">Pro</h2>
          <p className="text-[#9A3412] mt-2">For professionals</p>
          <p className="text-4xl font-bold mt-4 text-[#1A2A45]">₹999<span className="text-lg font-normal text-[#4A5A70]">/mo</span></p>

          <ul className="mt-6 text-[#4A5A70] space-y-2">
            <li>• Unlimited scans</li>
            <li>• Full AI insights</li>
            <li>• Priority scanning</li>
            <li>• Save scans</li>
          </ul>
          
          <button className="mt-8 w-full py-3 bg-[#FF8A3D] text-white rounded-lg font-medium hover:bg-[#E6762E] transition shadow-md shadow-[#FF8A3D]/25">
            Upgrade to Pro
          </button>
        </div>

        <div className="bg-white p-8 rounded-xl border border-[#DCE4EC] shadow-sm text-center">
          <h2 className="text-2xl font-bold text-[#1A2A45]">Agency</h2>
          <p className="text-[#4A5A70] mt-2">For teams</p>
          <p className="text-4xl font-bold mt-4 text-[#1A2A45]">₹2499<span className="text-lg font-normal text-[#4A5A70]">/mo</span></p>

          <ul className="mt-6 text-[#4A5A70] space-y-2">
            <li>• Unlimited scans</li>
            <li>• Team accounts</li>
            <li>• Bulk & scheduled scans</li>
            <li>• Client reporting</li>
          </ul>
          
          <button className="mt-8 w-full py-3 bg-[#1A2A45] text-white rounded-lg font-medium hover:bg-[#2A3A55] transition">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
}
