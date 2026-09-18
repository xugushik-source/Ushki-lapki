import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  id,
  tone = "background",
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "background" | "surface" | "primary";
}) {
  const toneClass =
    tone === "surface"
      ? "bg-surface"
      : tone === "primary"
        ? "bg-primary text-primary-foreground"
        : "bg-background";

  return (
    <section id={id} className={cn("relative py-20 sm:py-28 lg:py-32", toneClass, className)}>
      {children}
    </section>
  );
}
