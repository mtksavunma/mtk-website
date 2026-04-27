import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-[var(--accent)] text-white shadow-[0_10px_24px_rgba(19,41,75,0.16)] hover:-translate-y-[1px] hover:shadow-[0_14px_32px_rgba(19,41,75,0.22)] active:scale-[0.98]",

    secondary:
      "border border-[rgba(19,41,75,0.12)] bg-[rgba(255,255,255,0.6)] text-[var(--accent)] backdrop-blur-md hover:bg-white hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(15,23,42,0.06)] active:scale-[0.98]",
  };

  const combined = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return <button className={combined}>{children}</button>;
}