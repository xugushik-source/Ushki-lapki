import { Locale } from "@/types";
import { Dictionary } from "./types";
import { en } from "./en";
import { de } from "./de";
import { fr } from "./fr";
import { it } from "./it";
import { ru } from "./ru";

const dictionaries: Record<Locale, Dictionary> = { en, de, fr, it, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export type { Dictionary } from "./types";
