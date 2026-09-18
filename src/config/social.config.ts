export interface SocialLink {
  platform: "instagram" | "facebook" | "google" | "tiktok" | "youtube";
  url: string;
  label: string;
}

export const socialConfig: SocialLink[] = [
  { platform: "instagram", url: "https://instagram.com/pawsandears.demo", label: "Instagram" },
  { platform: "facebook", url: "https://facebook.com/pawsandears.demo", label: "Facebook" },
  { platform: "google", url: "https://maps.google.com/?cid=0", label: "Google Maps" },
];
