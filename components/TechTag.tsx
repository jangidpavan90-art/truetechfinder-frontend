import { getTechIcon } from "./icons/TechIcons";

interface TechTagProps {
  name: string;
}

export default function TechTag({ name }: TechTagProps) {
  const Icon = getTechIcon(name);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm shadow-sm hover:shadow transition">
      <span className="text-blue-600">
        <Icon className="w-4 h-4" />
      </span>
      <span className="text-slate-700">{name}</span>
    </div>
  );
}
