// The French and German courses' and the Brazilian Portuguese course's
// grammar guides behind one interface, for the shared grammar screens. Each
// course's guides load on demand (grammar/french.ts, grammar/german.ts,
// grammar/portuguese.ts); examples are normalized to
// { es, en } -- the target language and English -- the shape the guide
// layout shares with the Spanish guides.
import type { GrammarGuide } from "./types";
import { DIPLOMA_FOR_LEVEL as FR_DIPLOMA_FOR_LEVEL } from "./fr-types";
import { DIPLOMA_FOR_LEVEL as DE_DIPLOMA_FOR_LEVEL } from "./de-types";
import { CERTIFICATE_FOR_LEVEL as PT_CERTIFICATE_FOR_LEVEL } from "./pt-types";
import { loadFrenchGuides } from "./french";
import { loadGermanGuides } from "./german";
import { loadPortugueseGuides } from "./portuguese";
import { FRENCH_LANG, GERMAN_LANG, PORTUGUESE_LANG, type SpeechLang } from "@/lib/speech";

export type GuideCourse = "fr" | "de" | "pt";

type GuideLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type CourseGuide = Pick<GrammarGuide, "title" | "intro" | "sections" | "mistakes" | "faqs"> & {
  slug: string;
  description: string;
  level: GuideLevel;
  related: string[];
  /** Slugs of the course lessons that teach this point, in course order. */
  lessons: string[];
};

export type GuideCourseConfig = {
  /** "French", "German", "Portuguese". */
  name: string;
  lang: SpeechLang;
  /** "DELF A1", "Goethe-Zertifikat A1", "Celpe-Bras Intermediário" ...;
   * null for a level with no exam of its own (Portuguese A1 and A2). */
  diploma: Record<GuideLevel, string | null>;
  load: () => Promise<CourseGuide[]>;
};

const cache = new Map<GuideCourse, Promise<CourseGuide[]>>();

function cached(course: GuideCourse, load: () => Promise<CourseGuide[]>): () => Promise<CourseGuide[]> {
  return () => {
    let pending = cache.get(course);
    if (!pending) {
      pending = load();
      pending.catch(() => cache.delete(course));
      cache.set(course, pending);
    }
    return pending;
  };
}

export const GUIDE_COURSES: Record<GuideCourse, GuideCourseConfig> = {
  fr: {
    name: "French",
    lang: FRENCH_LANG,
    diploma: FR_DIPLOMA_FOR_LEVEL,
    load: cached("fr", async () =>
      (await loadFrenchGuides()).map((g) => ({
        ...g,
        sections: g.sections.map((sec) => ({ ...sec, examples: sec.examples?.map((ex) => ({ es: ex.fr, en: ex.en })) })),
      }))
    ),
  },
  de: {
    name: "German",
    lang: GERMAN_LANG,
    diploma: DE_DIPLOMA_FOR_LEVEL,
    load: cached("de", async () =>
      (await loadGermanGuides()).map((g) => ({
        ...g,
        sections: g.sections.map((sec) => ({ ...sec, examples: sec.examples?.map((ex) => ({ es: ex.de, en: ex.en })) })),
      }))
    ),
  },
  pt: {
    name: "Portuguese",
    lang: PORTUGUESE_LANG,
    diploma: PT_CERTIFICATE_FOR_LEVEL,
    load: cached("pt", async () =>
      (await loadPortugueseGuides()).map((g) => ({
        ...g,
        sections: g.sections.map((sec) => ({ ...sec, examples: sec.examples?.map((ex) => ({ es: ex.pt, en: ex.en })) })),
      }))
    ),
  },
};
