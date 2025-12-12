import { getTechIcon } from "./icons/TechIcons";

interface CompareTechTagProps {
  name: string;
  type: "shared" | "uniqueA" | "uniqueB";
}

export default function CompareTechTag({ name, type }: CompareTechTagProps) {
  const Icon = getTechIcon(name);

  const styles = {
    shared: "bg-[#DCFCE7] border-[#16A34A] text-[#166534]",
    uniqueA: "bg-[#FFEDD5] border-[#FF8A3D] text-[#9A3412]",
    uniqueB: "bg-[#E7EDF3] border-[#4A5A70] text-[#1A2A45]",
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full text-sm ${styles[type]}`}>
      <Icon className="w-4 h-4" />
      <span>{name}</span>
    </div>
  );
}
