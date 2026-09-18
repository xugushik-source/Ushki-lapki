import { demoDoctors } from "@/data/demo/doctors";

// What a reseller edits per clinic: the team roster.
// Current values are demo content (brief section 54) — see data/demo/doctors.ts.
export const doctors = demoDoctors;

export function getDoctorBySlug(slug: string) {
  return doctors.find((d) => d.slug === slug);
}
