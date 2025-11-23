export default function PricingPreview() {
  return (
    <section id="pricing" className="py-20 bg-white border-t">
      <h2 className="text-4xl font-bold text-center">Simple Pricing</h2>
      <p className="text-center text-gray-600 mt-2">
        Start free. Upgrade when you need more.
      </p>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mt-12 px-6">
        <div className="p-6 border rounded-xl text-center">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="text-gray-700 mt-2">Basic scans</p>
          <p className="text-3xl font-bold mt-4">₹0</p>
        </div>

        <div className="p-6 border rounded-xl text-center bg-blue-50 border-blue-300">
          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="text-gray-700 mt-2">Unlimited scans</p>
          <p className="text-3xl font-bold mt-4">₹999/mo</p>
        </div>

        <div className="p-6 border rounded-xl text-center">
          <h3 className="text-xl font-semibold">Agency</h3>
          <p className="text-gray-700 mt-2">Bulk & monitoring</p>
          <p className="text-3xl font-bold mt-4">₹2499/mo</p>
        </div>
      </div>
    </section>
  );
}
