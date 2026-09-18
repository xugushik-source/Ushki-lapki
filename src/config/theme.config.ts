export type ThemeName = "forest" | "sand" | "blue" | "dark";

// The value actually applied (as data-theme="forest" on <html>) — flip this one
// line to re-skin every clinic deployment. Palettes themselves live in globals.css
// as CSS variables so no component ever reads a raw color value.
export const ACTIVE_THEME: ThemeName = "forest";

export const themeNames: Record<ThemeName, string> = {
  forest: "Forest",
  sand: "Sand",
  blue: "Blue",
  dark: "Dark",
};
