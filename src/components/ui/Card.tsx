import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius)] bg-surface shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
