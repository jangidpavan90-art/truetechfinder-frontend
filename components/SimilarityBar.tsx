interface SimilarityBarProps {
  score: number;
}

export default function SimilarityBar({ score }: SimilarityBarProps) {
  const getScoreColor = () => {
    if (score >= 70) return "bg-[#16A34A]";
    if (score >= 40) return "bg-[#FF8A3D]";
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
        <span className="text-sm font-medium text-[#4A5A70]">Similarity Score</span>
        <span className="text-sm text-[#7A8A9C]">{getScoreLabel()}</span>
      </div>
      <div className="w-full bg-[#E7EDF3] rounded-full h-4 overflow-hidden">
        <div
          className={`h-4 ${getScoreColor()} transition-all duration-500 ease-out`}
          style={{ width: `${score}%` }}
        />
      </div>
      <div className="mt-2 text-center">
        <span className="text-2xl font-bold text-[#1A2A45]">{score}%</span>
        <span className="text-[#7A8A9C] ml-2">match</span>
      </div>
    </div>
  );
}
