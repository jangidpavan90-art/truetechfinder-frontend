export default function UseCasesSection() {
  const useCases = [
    {
      title: "For Agencies",
      desc: "Instantly audit client websites and recommend upgrades.",
    },
    {
      title: "For Marketers",
      desc: "See what tech competitors are using to improve strategy.",
    },
    {
      title: "For Developers",
      desc: "Understand tech stacks before starting integration or migration.",
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center">Who is this for?</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-6">
        {useCases.map((u, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl border hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{u.title}</h3>
            <p className="text-gray-600">{u.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
