import { clinicConfig } from "@/config/clinic.config";
import { ACTIVE_BOOKING_ADAPTER, externalBookingUrl } from "@/config/booking.config";
import { BookingAdapter } from "./types";
import { buildBookingMessage } from "./messageBuilder";

const whatsappAdapter: BookingAdapter = {
  name: "whatsapp",
  submit(payload, labels) {
    const text = buildBookingMessage(payload, labels);
    const url = `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  },
};

const emailAdapter: BookingAdapter = {
  name: "email",
  submit(payload, labels) {
    const body = buildBookingMessage(payload, labels);
    const url = `mailto:${clinicConfig.email}?subject=${encodeURIComponent(
      labels.emailSubject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  },
};

const externalUrlAdapter: BookingAdapter = {
  name: "externalUrl",
  submit(payload) {
    const url = new URL(externalBookingUrl || window.location.origin);
    url.searchParams.set("pet", payload.pet);
    url.searchParams.set("service", payload.serviceName);
    url.searchParams.set("date", payload.date);
    url.searchParams.set("time", payload.time);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  },
};

// Future adapters (Supabase, a CRM/API) plug in here without touching the
// wizard UI — that is the whole point of the adapter boundary (brief section 27).
const adapters: Record<string, BookingAdapter> = {
  whatsapp: whatsappAdapter,
  email: emailAdapter,
  externalUrl: externalUrlAdapter,
};

export const activeBookingAdapter = adapters[ACTIVE_BOOKING_ADAPTER];
