import type { CourseId } from "@/lib/courses";

// A few large letters of each course's language, drawn as decoration on
// the lesson's first screen (same set as the website's courseGlyphs.ts).
// Purely visual: never part of lesson text.
export const COURSE_GLYPHS: Record<CourseId, [string, string, string]> = {
  es: ["ñ", "¿", "á"],
  fr: ["é", "ç", "ô"],
  ja: ["あ", "カ", "語"],
  zh: ["字", "你", "ā"],
  en: ["Aa", "th", "&"],
  de: ["ß", "ü", "ä"],
  pt: ["ã", "ç", "õ"],
  ko: ["한", "글", "ㅎ"],
  it: ["è", "gl", "ò"],
};
