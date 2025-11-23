import ToggleScanMode from "../components/ToggleScanMode";
import FeaturesSection from "../components/FeaturesSection";
import UseCasesSection from "../components/UseCasesSection";
import PricingPreview from "../components/PricingPreview";
import BannerCTA from "../components/BannerCTA";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <main className="min-h-screen bg-gray-50 px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Discover any website's technology stack instantly
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          AI-powered scanning and insights for developers, marketers and agencies.
        </p>

        {/* Toggle between Single Scan / Compare */}
        <ToggleScanMode />
      </main>

      {/* Features */}
      <FeaturesSection />

      {/* Use Cases */}
      <UseCasesSection />

      {/* Pricing Preview */}
      <PricingPreview />

      {/* Call to action */}
      <BannerCTA />
    </>
  );
}
