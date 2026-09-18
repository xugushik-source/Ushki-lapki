"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dog, Cat, PawPrint, Check } from "lucide-react";
import { Locale, PetKind } from "@/types";
import { Dictionary } from "@/locales";
import { services } from "@/config/services.config";
import { doctors } from "@/config/doctors.config";
import { activeBookingAdapter } from "@/lib/booking/adapters";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import Image from "next/image";

const STEP_COUNT = 7;

interface FormState {
  pet: PetKind | null;
  serviceSlug: string | null;
  doctorSlug: string | null;
  date: string;
  time: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  comment: string;
}

const initialState: FormState = {
  pet: null,
  serviceSlug: null,
  doctorSlug: null,
  date: "",
  time: "",
  ownerName: "",
  ownerPhone: "",
  ownerEmail: "",
  comment: "",
};

export function BookingWizard({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const selectedService = useMemo(
    () => services.find((s) => s.slug.en === form.serviceSlug),
    [form.serviceSlug],
  );
  const availableDoctors = useMemo(() => {
    if (!selectedService) return doctors;
    const matching = doctors.filter((d) => d.serviceSlugs.includes(selectedService.slug.en));
    return matching.length ? matching : doctors;
  }, [selectedService]);
  const selectedDoctor = useMemo(
    () => doctors.find((d) => d.slug === form.doctorSlug),
    [form.doctorSlug],
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function canProceed() {
    switch (step) {
      case 0:
        return !!form.pet;
      case 1:
        return !!form.serviceSlug;
      case 2:
        return true;
      case 3:
        return !!form.date;
      case 4:
        return !!form.time;
      case 5:
        return !!form.ownerName && !!form.ownerPhone;
      default:
        return true;
    }
  }

  function handleSubmit() {
    activeBookingAdapter.submit(
      {
        pet: form.pet ?? "dog",
        serviceName: selectedService?.name[locale] ?? "",
        doctorName: selectedDoctor?.name ?? "",
        date: form.date,
        time: form.time,
        ownerName: form.ownerName,
        ownerPhone: form.ownerPhone,
        ownerEmail: form.ownerEmail,
        comment: form.comment,
        locale,
      },
      dict.booking.whatsappLabels,
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg rounded-[var(--radius)] bg-surface p-10 text-center shadow-[var(--shadow-soft)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-7 w-7" />
        </div>
        <h2 className="mt-6 font-serif text-2xl text-foreground">{dict.booking.successTitle}</h2>
        <p className="mt-3 text-muted-foreground">{dict.booking.successBody}</p>
      </div>
    );
  }

  const petOptions: { key: PetKind; label: string; icon: typeof Dog }[] = [
    { key: "dog", label: dict.booking.stepPet.dog, icon: Dog },
    { key: "cat", label: dict.booking.stepPet.cat, icon: Cat },
    { key: "other", label: dict.booking.stepPet.other, icon: PawPrint },
  ];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-10 flex gap-1.5" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={STEP_COUNT}>
        {Array.from({ length: STEP_COUNT }).map((_, i) => (
          <div
            key={i}
            className={cn("h-1.5 flex-1 rounded-full", i <= step ? "bg-primary" : "bg-border")}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.3 }}
        >
          {step === 0 && (
            <StepShell title={dict.booking.stepPet.title} subtitle={dict.booking.stepPet.subtitle}>
              <div className="grid grid-cols-3 gap-4">
                {petOptions.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => update("pet", key)}
                    aria-pressed={form.pet === key}
                    className={cn(
                      "flex flex-col items-center gap-3 rounded-[var(--radius)] border-2 p-6 transition-colors",
                      form.pet === key ? "border-primary bg-primary/5" : "border-border",
                    )}
                  >
                    <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                    <span className="font-medium text-foreground">{label}</span>
                  </button>
                ))}
              </div>
            </StepShell>
          )}

          {step === 1 && (
            <StepShell title={dict.booking.stepService.title} subtitle={dict.booking.stepService.subtitle}>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <button
                    key={service.slug.en}
                    onClick={() => update("serviceSlug", service.slug.en)}
                    aria-pressed={form.serviceSlug === service.slug.en}
                    className={cn(
                      "rounded-2xl border-2 p-4 text-left transition-colors",
                      form.serviceSlug === service.slug.en ? "border-primary bg-primary/5" : "border-border",
                    )}
                  >
                    <span className="font-medium text-foreground">{service.name[locale]}</span>
                  </button>
                ))}
              </div>
            </StepShell>
          )}

          {step === 2 && (
            <StepShell title={dict.booking.stepDoctor.title} subtitle={dict.booking.stepDoctor.subtitle}>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() => update("doctorSlug", null)}
                  aria-pressed={form.doctorSlug === null}
                  className={cn(
                    "rounded-2xl border-2 p-4 text-left transition-colors",
                    form.doctorSlug === null ? "border-primary bg-primary/5" : "border-border",
                  )}
                >
                  <span className="font-medium text-foreground">{dict.booking.stepDoctor.any}</span>
                </button>
                {availableDoctors.map((doctor) => (
                  <button
                    key={doctor.slug}
                    onClick={() => update("doctorSlug", doctor.slug)}
                    aria-pressed={form.doctorSlug === doctor.slug}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border-2 p-3 text-left transition-colors",
                      form.doctorSlug === doctor.slug ? "border-primary bg-primary/5" : "border-border",
                    )}
                  >
                    <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <Image src={doctor.photo} alt={doctor.name} fill sizes="40px" className="object-cover" />
                    </span>
                    <span>
                      <span className="block font-medium text-foreground">{doctor.name}</span>
                      <span className="block text-xs text-muted-foreground">{doctor.specialty[locale]}</span>
                    </span>
                  </button>
                ))}
              </div>
            </StepShell>
          )}

          {step === 3 && (
            <StepShell title={dict.booking.stepDate.title} subtitle={dict.booking.stepDate.subtitle}>
              <input
                type="date"
                value={form.date}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => update("date", e.target.value)}
                className="w-full rounded-2xl border border-border bg-surface px-5 py-4 text-foreground"
              />
            </StepShell>
          )}

          {step === 4 && (
            <StepShell title={dict.booking.stepTime.title} subtitle={dict.booking.stepTime.subtitle}>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30"].map((slot) => (
                  <button
                    key={slot}
                    onClick={() => update("time", slot)}
                    aria-pressed={form.time === slot}
                    className={cn(
                      "rounded-full border-2 px-4 py-2.5 text-sm font-medium transition-colors",
                      form.time === slot ? "border-primary bg-primary/5" : "border-border",
                    )}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </StepShell>
          )}

          {step === 5 && (
            <StepShell title={dict.booking.stepOwner.title} subtitle={dict.booking.stepOwner.subtitle}>
              <div className="grid gap-4">
                <Field label={dict.booking.stepOwner.name}>
                  <input
                    value={form.ownerName}
                    onChange={(e) => update("ownerName", e.target.value)}
                    required
                    className="w-full rounded-2xl border border-border bg-surface px-5 py-3 text-foreground"
                  />
                </Field>
                <Field label={dict.booking.stepOwner.phone}>
                  <input
                    type="tel"
                    value={form.ownerPhone}
                    onChange={(e) => update("ownerPhone", e.target.value)}
                    required
                    className="w-full rounded-2xl border border-border bg-surface px-5 py-3 text-foreground"
                  />
                </Field>
                <Field label={dict.booking.stepOwner.email}>
                  <input
                    type="email"
                    value={form.ownerEmail}
                    onChange={(e) => update("ownerEmail", e.target.value)}
                    className="w-full rounded-2xl border border-border bg-surface px-5 py-3 text-foreground"
                  />
                </Field>
                <Field label={dict.booking.stepOwner.comment}>
                  <textarea
                    value={form.comment}
                    onChange={(e) => update("comment", e.target.value)}
                    placeholder={dict.booking.stepOwner.commentPlaceholder}
                    rows={3}
                    className="w-full rounded-2xl border border-border bg-surface px-5 py-3 text-foreground"
                  />
                </Field>
              </div>
            </StepShell>
          )}

          {step === 6 && (
            <StepShell title={dict.booking.stepConfirm.title} subtitle={dict.booking.stepConfirm.subtitle}>
              <dl className="grid gap-3 rounded-2xl bg-background p-6 text-sm">
                <SummaryRow label={dict.booking.whatsappLabels.pet} value={form.pet ?? ""} />
                <SummaryRow label={dict.booking.whatsappLabels.service} value={selectedService?.name[locale] ?? ""} />
                <SummaryRow
                  label={dict.booking.whatsappLabels.doctor}
                  value={selectedDoctor?.name ?? dict.booking.stepDoctor.any}
                />
                <SummaryRow label={dict.booking.whatsappLabels.date} value={form.date} />
                <SummaryRow label={dict.booking.whatsappLabels.time} value={form.time} />
                <SummaryRow label={dict.booking.whatsappLabels.owner} value={form.ownerName} />
                <SummaryRow label={dict.booking.whatsappLabels.phone} value={form.ownerPhone} />
              </dl>
            </StepShell>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between">
        <Button
          variant="ghost"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className={step === 0 ? "invisible" : ""}
        >
          {dict.booking.back}
        </Button>
        {step < STEP_COUNT - 1 ? (
          <Button onClick={() => setStep((s) => s + 1)} disabled={!canProceed()}>
            {dict.booking.next}
          </Button>
        ) : (
          <Button onClick={handleSubmit}>{dict.booking.submit}</Button>
        )}
      </div>
    </div>
  );
}

function StepShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-foreground sm:text-3xl">{title}</h2>
      <p className="mt-2 text-muted-foreground">{subtitle}</p>
      <div className="mt-8">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground">{value}</dd>
    </div>
  );
}
