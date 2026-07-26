interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-lg">
      {children}
    </div>
  );
}