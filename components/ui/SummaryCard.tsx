interface SummaryCardProps {
  summary: string;
}

export default function SummaryCard({
  summary,
}: SummaryCardProps) {
  return (
    <div className="rounded-2xl bg-slate-900 p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Resume Summary
      </h2>

      <p className="leading-7 text-slate-300">
        {summary}
      </p>
    </div>
  );
}