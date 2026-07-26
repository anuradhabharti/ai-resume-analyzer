interface ATSScoreProps {
  score: number;
}

export default function ATSScore({
  score,
}: ATSScoreProps) {
  return (
    <div className="rounded-2xl bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold">
        ATS Score
      </h2>

      <div className="flex items-center justify-center">
        <div className="flex h-36 w-36 items-center justify-center rounded-full border-8 border-blue-500 text-4xl font-bold">
          {score}
        </div>
      </div>
    </div>
  );
}