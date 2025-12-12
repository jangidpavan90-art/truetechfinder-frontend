interface ResultsSummaryProps {
  url: string;
}

export default function ResultsSummary({ url }: ResultsSummaryProps) {
  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#1A2A45] to-[#2A3A55] text-white p-8 rounded-xl mb-10">
      <h2 className="text-3xl font-bold">{getDomain(url)}</h2>
      <p className="text-[#C4D3E0] mt-2">
        Complete technology analysis and AI-powered insights.
      </p>

      <div className="mt-6">
        <a
          href="/"
          className="px-5 py-3 bg-[#FF8A3D] text-white rounded-lg font-semibold hover:bg-[#E6762E] transition shadow-md shadow-[#FF8A3D]/25"
        >
          Scan Another Website
        </a>
      </div>
    </div>
  );
}
