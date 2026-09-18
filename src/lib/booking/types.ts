import { Locale, PetKind } from "@/types";

export interface BookingPayload {
  pet: PetKind;
  serviceName: string;
  doctorName: string;
  date: string;
  time: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  comment?: string;
  locale: Locale;
}

export interface BookingAdapter {
  name: string;
  submit: (payload: BookingPayload, labels: BookingMessageLabels) => void;
}

export interface BookingMessageLabels {
  title: string;
  pet: string;
  service: string;
  doctor: string;
  date: string;
  time: string;
  owner: string;
  phone: string;
  comment: string;
  anyDoctor: string;
  emailSubject: string;
}
