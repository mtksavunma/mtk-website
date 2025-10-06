type Props = { title?: string; children: React.ReactNode };

export default function Section({ title, children }: Props) {
  return (
    <section className="mt-8 rounded-2xl border border-white/10 p-6 bg-white/5">
      {title && <h2 className="text-lg font-semibold">{title}</h2>}
      <div className={title ? "mt-3" : ""}>{children}</div>
    </section>
  );
}
