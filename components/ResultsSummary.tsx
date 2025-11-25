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
    <div className="bg-blue-600 text-white p-8 rounded-xl mb-10">
      <h2 className="text-3xl font-bold">{getDomain(url)}</h2>
      <p className="text-blue-100 mt-2">
        Complete technology analysis and AI-powered insights.
      </p>

      <div className="mt-6">
        <a
          href="/"
          className="px-5 py-3 bg-white text-blue-600 rounded-lg font-semibold"
        >
          Scan Another Website
        </a>
      </div>
    </div>
  );
}
