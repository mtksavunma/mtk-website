type Props = { children: React.ReactNode };

export default function Badge({ children }: Props) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}
