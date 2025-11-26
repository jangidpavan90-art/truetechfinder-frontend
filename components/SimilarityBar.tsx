interface SimilarityBarProps {
  score: number;
}

export default function SimilarityBar({ score }: SimilarityBarProps) {
  const getScoreColor = () => {
    if (score >= 70) return "bg-green-500";
    if (score >= 40) return "bg-yellow-500";
    return "bg-red-400";
  };

  const getScoreLabel = () => {
    if (score >= 70) return "Highly Similar";
    if (score >= 40) return "Moderately Similar";
    return "Low Similarity";
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-600">Similarity Score</span>
        <span className="text-sm text-slate-500">{getScoreLabel()}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className={`h-4 ${getScoreColor()} transition-all duration-500 ease-out`}
          style={{ width: `${score}%` }}
        />
      </div>
      <div className="mt-2 text-center">
        <span className="text-2xl font-bold text-slate-800">{score}%</span>
        <span className="text-slate-500 ml-2">match</span>
      </div>
    </div>
  );
}
