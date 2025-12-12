import { getTechIcon } from "./icons/TechIcons";

interface TechTagProps {
  name: string;
}

export default function TechTag({ name }: TechTagProps) {
  const Icon = getTechIcon(name);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#DCE4EC] rounded-full text-sm shadow-sm hover:shadow transition">
      <span className="text-[#FF8A3D]">
        <Icon className="w-4 h-4" />
      </span>
      <span className="text-[#1A2A45]">{name}</span>
    </div>
  );
}
