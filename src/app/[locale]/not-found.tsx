import { getDictionary } from "@/locales";
import { DEFAULT_LOCALE } from "@/types";
import { localePath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// Next.js renders this without access to the [locale] param, so we fall
// back to the default locale rather than guessing from the URL.
export default function NotFound() {
  const dict = getDictionary(DEFAULT_LOCALE);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="font-serif text-6xl text-secondary/50">404</p>
      <h1 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">{dict.common.page404Title}</h1>
      <p className="mt-3 max-w-md text-muted-foreground">{dict.common.page404Body}</p>
      <Button href={localePath(DEFAULT_LOCALE)} className="mt-8">
        {dict.common.backToHome}
      </Button>
    </Container>
  );
}
