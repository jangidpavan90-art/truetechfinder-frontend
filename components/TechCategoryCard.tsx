import TechTag from "./TechTag";

interface TechCategoryCardProps {
  title: string;
  items?: string[];
}

export default function TechCategoryCard({ title, items = [] }: TechCategoryCardProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <TechTag key={i} name={item} />
        ))}
      </div>
    </div>
  );
}
