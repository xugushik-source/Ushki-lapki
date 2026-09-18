import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { demoBlog } from "@/data/demo/blog";
import { routePath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

export function BlogListPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section className="pt-32 sm:pt-40">
      <Container>
        <Heading as="h1" eyebrow={dict.nav.petCare}>
          {dict.blogPage.heading}
        </Heading>
        <p className="mt-4 max-w-xl text-muted-foreground">{dict.blogPage.subheading}</p>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoBlog.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={routePath(locale, "blog", post.slug)}
                className="group block overflow-hidden rounded-[var(--radius)] bg-surface shadow-[var(--shadow-lift)]"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title[locale]}
                    fill
                    sizes="(min-width:1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                    {post.category[locale]}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-foreground">{post.title[locale]}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt[locale]}</p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {post.readingMinutes} {dict.blogPage.readingTimeLabel}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
