// Mobile mirror of the web app's src/lib/highlightColors.ts -- same
// values and default, so the color picked here (written to
// profiles.highlight_color, the same Supabase table/column the website
// reads) is the one the website's own reading-highlighter uses too. Hex
// swatches stand in for the web version's Tailwind classes.
export const HIGHLIGHT_COLORS = [
  { value: "amber", label: "Amber", swatch: "#fcd34d" },
  { value: "green", label: "Green", swatch: "#86efac" },
  { value: "blue", label: "Blue", swatch: "#93c5fd" },
  { value: "pink", label: "Pink", swatch: "#f9a8d4" },
] as const;

export type HighlightColor = (typeof HIGHLIGHT_COLORS)[number]["value"];

export const DEFAULT_HIGHLIGHT_COLOR: HighlightColor = "amber";
