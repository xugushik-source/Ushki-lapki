import { getDictionary } from "@/locales";
import { resolveLocale } from "@/lib/routes";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <div className="px-6 py-24 text-center">
      <h1 className="font-serif text-4xl">{dict.hero.headlineLines.join(" ")}</h1>
    </div>
  );
}
