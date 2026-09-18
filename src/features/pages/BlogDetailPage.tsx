import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { demoBlog } from "@/data/demo/blog";
import { doctors } from "@/config/doctors.config";
import { clinicConfig } from "@/config/clinic.config";
import { routePath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

export function BlogDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const dict = getDictionary(locale);
  const post = demoBlog.find((p) => p.slug === slug);
  if (!post) notFound();

  const reviewer = doctors.find((d) => d.slug === post.reviewerDoctorSlug);
  const related = demoBlog.filter((p) => post.relatedSlugs.includes(p.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[locale],
    author: { "@type": "Organization", name: post.authorName },
    reviewedBy: reviewer ? { "@type": "Person", name: reviewer.name } : undefined,
    datePublished: post.publishedAt,
    publisher: {
      "@type": "VeterinaryCare",
      name: `${clinicConfig.name[locale]} ${clinicConfig.legalSuffix[locale]}`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Section className="pt-32 sm:pt-40">
        <Container className="max-w-2xl">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{post.category[locale]}</p>
            <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">{post.title[locale]}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{post.authorName}</span>
              <span aria-hidden="true">·</span>
              <span>{new Date(post.publishedAt).toLocaleDateString(locale)}</span>
              <span aria-hidden="true">·</span>
              <span>
                {post.readingMinutes} {dict.blogPage.readingTimeLabel}
              </span>
              {reviewer ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    {dict.blogPage.reviewedBy} {reviewer.name}
                  </span>
                </>
              ) : null}
            </div>
          </FadeUp>

          <div className="relative mt-8 aspect-16/9 overflow-hidden rounded-[var(--radius)]">
            <Image src={post.image} alt={post.title[locale]} fill sizes="100vw" className="object-cover" priority />
          </div>

          <FadeUp className="prose mt-10 max-w-none text-muted-foreground">
            {post.body[locale].split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-5 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </FadeUp>

          <div className="mt-12 rounded-[var(--radius)] bg-surface p-8 text-center shadow-[var(--shadow-lift)]">
            <p className="text-muted-foreground">{dict.blogPage.ctaBody}</p>
            <Button href={routePath(locale, "contacts")} className="mt-4">
              {dict.nav.contacts}
            </Button>
          </div>

          {related.length ? (
            <div className="mt-14">
              <h2 className="font-serif text-2xl text-foreground">{dict.blogPage.relatedHeading}</h2>
              <ul className="mt-4 space-y-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={routePath(locale, "blog", p.slug)}
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {p.title[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
