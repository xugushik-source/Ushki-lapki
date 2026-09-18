import { cn } from "@/lib/cn";

type HeadingTag = "h1" | "h2" | "h3" | "h4";

export function Heading({
  as: Tag = "h2",
  eyebrow,
  className,
  children,
}: {
  as?: HeadingTag;
  eyebrow?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const sizeClass = {
    h1: "text-4xl sm:text-6xl lg:text-7xl",
    h2: "text-3xl sm:text-5xl lg:text-6xl",
    h3: "text-2xl sm:text-3xl lg:text-4xl",
    h4: "text-xl sm:text-2xl",
  }[Tag];

  return (
    <div className={className}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "font-serif leading-[1.05] tracking-tight text-foreground",
          sizeClass,
        )}
      >
        {children}
      </Tag>
    </div>
  );
}
