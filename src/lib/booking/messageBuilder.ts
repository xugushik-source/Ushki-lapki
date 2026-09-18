import { BookingMessageLabels, BookingPayload } from "./types";

export function buildBookingMessage(payload: BookingPayload, labels: BookingMessageLabels) {
  const lines = [
    labels.title,
    "",
    `${labels.pet}: ${payload.pet}`,
    `${labels.service}: ${payload.serviceName}`,
    `${labels.doctor}: ${payload.doctorName || labels.anyDoctor}`,
    `${labels.date}: ${payload.date}`,
    `${labels.time}: ${payload.time}`,
    `${labels.owner}: ${payload.ownerName}`,
    `${labels.phone}: ${payload.ownerPhone}`,
  ];
  if (payload.comment) lines.push(`${labels.comment}: ${payload.comment}`);
  return lines.join("\n");
}
