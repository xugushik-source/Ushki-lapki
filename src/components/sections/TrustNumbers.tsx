import { Dictionary } from "@/locales";
import { clinicConfig } from "@/config/clinic.config";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { FadeUp } from "@/components/ui/FadeUp";

export function TrustNumbers({ dict }: { dict: Dictionary }) {
  const { stats } = clinicConfig;
  const patientsNumeric = Number(stats.patients.replace(/[^\d]/g, ""));
  const patientsSuffix = stats.patients.replace(/[\d,]/g, "");

  const items = [
    { value: stats.yearsOfCare, suffix: "+", label: dict.trust.yearsLabel },
    { value: patientsNumeric, suffix: patientsSuffix, label: dict.trust.patientsLabel },
    { value: stats.veterinarians, suffix: "", label: dict.trust.vetsLabel },
  ];

  return (
    <div className="relative z-20 -mt-16 px-4 sm:-mt-20 sm:px-0">
      <Container>
        <FadeUp>
          <div className="grid grid-cols-2 gap-6 rounded-[var(--radius)] bg-surface p-8 shadow-[var(--shadow-soft)] sm:grid-cols-4 sm:p-10">
            {items.map((item) => (
              <div key={item.label} className="text-center sm:text-left">
                <p className="font-serif text-3xl text-primary sm:text-4xl">
                  <Counter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
            <div className="text-center sm:text-left">
              <p className="font-serif text-3xl text-primary sm:text-4xl">{stats.emergencyAvailability}</p>
              <p className="mt-1 text-sm text-muted-foreground">{dict.trust.emergencyLabel}</p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </div>
  );
}
