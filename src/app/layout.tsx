import type { Metadata } from "next";

// Sibling to [locale]/layout.tsx, not a parent of it — this only wraps the
// true root "/" redirect page below, so [locale]'s own <html>/<body> never
// nests inside this one.
export const metadata: Metadata = {
  title: "Redirecting…",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
