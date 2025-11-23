import ScannerInput from "../components/ScannerInput";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        Discover any website's technology stack instantly
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mt-4">
        AI-powered scanning and insights for developers, marketers, and founders.
      </p>

      <ScannerInput />

      <div className="mt-16 max-w-3xl mx-auto text-gray-700">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <p className="mt-4">Enter a website → We scan it → You get insights.</p>
      </div>
    </main>
  );
}
