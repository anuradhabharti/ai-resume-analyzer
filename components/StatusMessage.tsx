interface StatusMessageProps {
  status: string | null;
}

export default function StatusMessage({
  status,
}: StatusMessageProps) {
  if (!status) return null;

  return (
    <div className="mt-5 rounded-xl bg-black/30 border border-white/10 p-3 text-center text-sm text-white">
      {status}
    </div>
  );
}