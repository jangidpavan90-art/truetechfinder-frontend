import { getTechIcon } from "./icons/TechIcons";

interface CompareTechTagProps {
  name: string;
  type: "shared" | "uniqueA" | "uniqueB";
}

export default function CompareTechTag({ name, type }: CompareTechTagProps) {
  const Icon = getTechIcon(name);

  const styles = {
    shared: "bg-green-50 border-green-300 text-green-700",
    uniqueA: "bg-blue-50 border-blue-300 text-blue-700",
    uniqueB: "bg-purple-50 border-purple-300 text-purple-700",
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full text-sm ${styles[type]}`}>
      <Icon className="w-4 h-4" />
      <span>{name}</span>
    </div>
  );
}
