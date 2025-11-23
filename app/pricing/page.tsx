export default function PricingPage() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gray-50">
      <h1 className="text-5xl font-bold text-center">Pricing</h1>
      <p className="text-center text-gray-600 mt-4">
        Choose the plan that fits your needs.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 mt-16">
        
        {/* Free Plan */}
        <div className="bg-white p-8 rounded-xl border shadow-sm text-center">
          <h2 className="text-2xl font-bold">Free</h2>
          <p className="text-gray-600 mt-2">For casual users</p>
          <p className="text-4xl font-bold mt-4">₹0</p>

          <ul className="mt-6 text-gray-700 space-y-2">
            <li>• Basic tech detection</li>
            <li>• Up to 10 scans/day</li>
            <li>• Limited insights</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-400 shadow-md text-center">
          <h2 className="text-2xl font-bold text-blue-700">Pro</h2>
          <p className="text-blue-600 mt-2">For professionals</p>
          <p className="text-4xl font-bold mt-4 text-blue-700">₹999/mo</p>

          <ul className="mt-6 text-gray-700 space-y-2">
            <li>• Unlimited scans</li>
            <li>• Full AI insights</li>
            <li>• Priority scanning</li>
            <li>• Save scans</li>
          </ul>
        </div>

        {/* Agency Plan */}
        <div className="bg-white p-8 rounded-xl border shadow-sm text-center">
          <h2 className="text-2xl font-bold">Agency</h2>
          <p className="text-gray-600 mt-2">For teams</p>
          <p className="text-4xl font-bold mt-4">₹2499/mo</p>

          <ul className="mt-6 text-gray-700 space-y-2">
            <li>• Unlimited scans</li>
            <li>• Team accounts</li>
            <li>• Bulk & scheduled scans</li>
            <li>• Client reporting</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
