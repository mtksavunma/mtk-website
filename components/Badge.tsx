type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium leading-none
      bg-black/5 text-black/80 border-black/10
      dark:bg-white/10 dark:text-white/85 dark:border-white/20
      backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  );
}
