export type BookingAdapterName = "whatsapp" | "email" | "externalUrl";

// Swap this one value to change how every "Book" button on the site behaves.
// The wizard UI (features/booking) never talks to WhatsApp/email/an API directly —
// it only calls submitBooking(), which dispatches to whichever adapter is active here.
export const ACTIVE_BOOKING_ADAPTER: BookingAdapterName = "whatsapp";

export const externalBookingUrl = "";
