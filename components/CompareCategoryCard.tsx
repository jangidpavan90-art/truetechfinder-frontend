import CompareTechTag from "./CompareTechTag";
import { getCategoryIcon } from "./icons/CategoryIcons";

interface CompareCategoryCardProps {
  title: string;
  shared?: string[];
  aOnly?: string[];
  bOnly?: string[];
}

export default function CompareCategoryCard({ 
  title, 
  shared = [], 
  aOnly = [], 
  bOnly = [] 
}: CompareCategoryCardProps) {
  const Icon = getCategoryIcon(title);

  if (shared.length === 0 && aOnly.length === 0 && bOnly.length === 0) return null;

  return (
    <div className="bg-white border border-[#DCE4EC] rounded-xl p-6 shadow-sm">
      
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-6 h-6 text-[#FF8A3D]" />
        <h3 className="text-xl font-semibold text-[#1A2A45]">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div>
          <h4 className="font-semibold mb-2 text-[#FF8A3D]">Unique to Site A</h4>
          <div className="flex flex-wrap gap-2">
            {aOnly.length > 0 ? (
              aOnly.map((tech, i) => (
                <CompareTechTag key={i} name={tech} type="uniqueA" />
              ))
            ) : (
              <span className="text-[#7A8A9C] text-sm">None</span>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-[#16A34A]">Shared</h4>
          <div className="flex flex-wrap gap-2">
            {shared.length > 0 ? (
              shared.map((tech, i) => (
                <CompareTechTag key={i} name={tech} type="shared" />
              ))
            ) : (
              <span className="text-[#7A8A9C] text-sm">None</span>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-[#4A5A70]">Unique to Site B</h4>
          <div className="flex flex-wrap gap-2">
            {bOnly.length > 0 ? (
              bOnly.map((tech, i) => (
                <CompareTechTag key={i} name={tech} type="uniqueB" />
              ))
            ) : (
              <span className="text-[#7A8A9C] text-sm">None</span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
