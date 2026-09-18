import { notFound } from "next/navigation";

// Any unmatched path under a valid locale falls through here so the
// localized not-found.tsx renders instead of Next's generic default.
export default function CatchAll() {
  notFound();
}
