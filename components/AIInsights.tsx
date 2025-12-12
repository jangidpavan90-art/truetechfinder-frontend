interface AIInsightsProps {
  insights: string | null | undefined;
}

export default function AIInsights({ insights }: AIInsightsProps) {
  if (!insights) return null;

  return (
    <div className="bg-gradient-to-r from-[#FFF7ED] to-[#FEF3C7] border border-[#FDBA74] rounded-xl p-6 shadow-sm mt-8">
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
        <span className="text-[#FF8A3D] text-2xl">⚡</span> 
        <span className="text-[#1A2A45]">AI Insights</span>
      </h3>

      <p className="text-[#4A5A70] leading-relaxed">{insights}</p>
    </div>
  );
}
