export default function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Technology Detection",
      desc: "We extract tech stacks using advanced AI — fast, accurate, and insightful.",
    },
    {
      title: "Website Comparison",
      desc: "Compare two websites side-by-side with full tech breakdowns.",
    },
    {
      title: "Fast & Lightweight",
      desc: "Instant results without slow and outdated scanning engines.",
    },
    {
      title: "Clear, Beautiful UI",
      desc: "Designed for marketers, developers and founders.",
    },
    {
      title: "Modern Tech Stack",
      desc: "Built with FastAPI, Next.js, and OpenAI for best-in-class performance.",
    },
    {
      title: "Future: Bulk & Monitoring",
      desc: "Scheduled scans, tracking & alerts — coming soon.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center">Features</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
