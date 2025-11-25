interface TechCategoryCardProps {
  title: string;
  items?: string[];
}

export default function TechCategoryCard({ title, items = [] }: TechCategoryCardProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
