import { demoClinicContent } from "@/data/demo/clinic";

// Everything here is what a reseller replaces per real clinic sale:
// name, logo, phone, hours, coordinates. Components must never hardcode
// any of this — always import clinicConfig instead.
// The actual demo values live in data/demo/clinic.ts so it is obvious
// at a glance which parts of this file are "real config shape" vs.
// "current demo tenant's data" (see brief section 54).
export const clinicConfig = demoClinicContent;
