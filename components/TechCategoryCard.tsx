import TechTag from "./TechTag";
import { getCategoryIcon } from "./icons/CategoryIcons";

interface TechCategoryCardProps {
  title: string;
  items?: string[];
}

export default function TechCategoryCard({ title, items = [] }: TechCategoryCardProps) {
  if (!items || items.length === 0) return null;

  const Icon = getCategoryIcon(title);

  return (
    <div className="bg-white border border-[#DCE4EC] rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-[#FF8A3D]" />
        <h3 className="text-xl font-semibold text-[#1A2A45]">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <TechTag key={i} name={item} />
        ))}
      </div>
    </div>
  );
}
