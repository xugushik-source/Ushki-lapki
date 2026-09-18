import { MapPin } from "lucide-react";
import { clinicConfig } from "@/config/clinic.config";

// Lightweight static map placeholder — swap for a real Google/Mapbox embed
// keyed by clinicConfig.coordinates once an API key is configured for the client.
export function Map({ className }: { className?: string }) {
  const { lat, lng } = clinicConfig.coordinates;

  return (
    <a
      href={clinicConfig.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex items-center justify-center overflow-hidden rounded-[var(--radius)] bg-[radial-gradient(circle_at_30%_20%,var(--secondary),var(--primary))] ${className ?? ""}`}
      aria-label="Open directions in Google Maps"
    >
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(var(--surface)_1px,transparent_1px),linear-gradient(90deg,var(--surface)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative flex flex-col items-center gap-2 text-primary-foreground">
        <MapPin className="h-9 w-9" strokeWidth={1.5} />
        <span className="text-sm font-medium">
          {lat.toFixed(4)}, {lng.toFixed(4)}
        </span>
      </div>
    </a>
  );
}
