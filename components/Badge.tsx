type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className = "" }: Props) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium leading-none",
        "border-[rgba(19,41,75,0.10)] bg-white/58 text-[var(--accent)] backdrop-blur-md",
        "transition-all duration-300 hover:-translate-y-[1px] hover:bg-white/78 hover:shadow-[0_8px_20px_rgba(15,23,42,0.06)]",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}