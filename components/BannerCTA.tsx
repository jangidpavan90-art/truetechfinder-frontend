import Link from "next/link";

export default function BannerCTA() {
  return (
    <section className="bg-blue-600 text-white py-16 text-center">
      <h2 className="text-3xl font-bold">Start your first scan now — it's free!</h2>
      <p className="text-blue-100 mt-2">No signup required.</p>

      <Link
        href="/"
        className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold"
      >
        Scan a Website
      </Link>
    </section>
  );
}
