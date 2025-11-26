interface AIInsightsProps {
  insights: string | null | undefined;
}

export default function AIInsights({ insights }: AIInsightsProps) {
  if (!insights) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-sm mt-8">
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
        <span className="text-blue-600 text-2xl">⚡</span> 
        <span className="text-slate-800">AI Insights</span>
      </h3>

      <p className="text-slate-700 leading-relaxed">{insights}</p>
    </div>
  );
}
