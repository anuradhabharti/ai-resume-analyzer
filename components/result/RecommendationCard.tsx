import { CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface RecommendationCardProps {
  title: string;
  items: string[];
  Icon?: LucideIcon;
}

export default function RecommendationCard({
  title,
  items,
  Icon,
}: RecommendationCardProps) {
  return (
    <div className="rounded-2xl bg-slate-900 p-6">
      <div className="mb-4 flex items-center gap-3">
        {Icon ? <Icon className="h-5 w-5 text-blue-400" /> : null}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}