// DEMO CONTENT — local landing pages (brief section 45). These exist to
// demonstrate the pattern, not as an automatically-generated doorway-page
// farm: each one below has genuinely distinct, locally-specific copy, and
// the architecture only ever publishes a city page when someone writes one.
// Two examples, both English/Boston since that's this demo tenant's market —
// a German deployment would write German copy for its own cities the same way.
export interface LocalPage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  neighborhoods: string[];
  ctaLabel: string;
}

export const localPages: Record<string, LocalPage> = {
  "veterinarian-boston": {
    slug: "veterinarian-boston",
    metaTitle: "Veterinarian in Boston, MA | Paws & Ears",
    metaDescription:
      "A full-service veterinary clinic in Boston offering wellness exams, diagnostics, surgery and dental care — easy to reach from the Seaport, South End and Back Bay.",
    eyebrow: "Boston, Massachusetts",
    h1: "Your veterinarian in Boston",
    intro:
      "Paws & Ears sits just off the Seaport, a short drive from the South End, Back Bay and South Boston. If you're searching for a Boston vet who treats your pet like family and explains things in plain English, we'd like to meet you both.",
    sections: [
      {
        heading: "Easy to reach, easy to park",
        body: "We're a few minutes from I-93 and the Seaport, with free on-site parking directly in front of the clinic — no hunting for street parking with a nervous cat in the carrier.",
      },
      {
        heading: "One clinic, most of what your pet needs",
        body: "Wellness exams, vaccinations, in-house diagnostics, surgery, dentistry and a dedicated exotic-animal specialist — most Boston pet owners never need to be referred across town for routine care.",
      },
      {
        heading: "Local, not corporate",
        body: "You'll see familiar faces at the front desk and, where possible, the same doctor visit after visit — something that gets harder to find as Boston's veterinary groups keep consolidating.",
      },
    ],
    neighborhoods: ["Seaport", "South End", "Back Bay", "South Boston", "Downtown"],
    ctaLabel: "Book a Boston appointment",
  },
  "emergency-vet-boston": {
    slug: "emergency-vet-boston",
    metaTitle: "Emergency Vet in Boston, MA — 24/7 | Paws & Ears",
    metaDescription:
      "24/7 emergency veterinary care in Boston. Call ahead if you can — difficulty breathing, uncontrolled bleeding, suspected poisoning and collapse are always emergencies.",
    eyebrow: "Boston, Massachusetts — 24/7",
    h1: "Emergency vet in Boston, open 24/7",
    intro:
      "If your pet is in distress right now, call the number below before you drive — it lets our team have a room and the right equipment ready before you arrive. We're located just off the Seaport with parking directly at the door.",
    sections: [
      {
        heading: "When to come in immediately",
        body: "Difficulty breathing, a bloated or distended abdomen, uncontrolled bleeding, repeated vomiting, or any inability to stand — these don't wait for a scheduled appointment. Call our emergency line and head in.",
      },
      {
        heading: "What happens when you arrive",
        body: "A technician meets you at intake to assess how urgent the situation is, so pets in real danger are seen before pets who can safely wait a few minutes.",
      },
      {
        heading: "After hours, still local",
        body: "Our emergency line is answered by our own team, not an out-of-state call center — the person you speak to at 2 a.m. knows this clinic and can tell you honestly whether to come in now or it's safe to wait for morning.",
      },
    ],
    neighborhoods: ["Seaport", "South End", "Back Bay", "South Boston", "Downtown"],
    ctaLabel: "Call our Boston emergency line",
  },
};
