// Synced from cheneygross-afk/lengo:src/lib/grammar/relatedStories.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "@/lib/stories/types";

// Picks the free stories a grammar guide recommends: stories at the guide's
// level that use the guide's grammar the most. Stories carry no topic
// metadata, so "uses the grammar" is measured from the text itself -- how
// often the forms the guide teaches turn up, per word, so a long story
// doesn't win just by being long. Deterministic (same guide, same stories)
// so the links are stable for search engines.

// Letters that can sit next to a match without ending the word. \b is
// ASCII-only in JavaScript, so "está" would otherwise end at the "t".
const L = "a-záéíóúüñ";
const word = (body: string) => new RegExp(`(?<![${L}])(?:${body})(?![${L}])`, "gi");

const MARKERS: Record<string, RegExp> = {
  "ser-vs-estar": word("soy|eres|es|somos|son|era|eran|estoy|estás|está|estamos|están|estaba|estaban"),
  "por-vs-para": word("por|para"),
  "preterite-vs-imperfect": word(`[${L}]+(?:aba|abas|ábamos|aban|ía|ías|íamos|ían)`),
  "spanish-subjunctive": word(
    "ojalá|quiero que|quiere que|espero que|espera que|es importante que|es necesario que|para que|antes de que|dudo que|no creo que|cuando (?:llegue|venga|termine|sea|tenga)"
  ),
  "gustar-and-similar-verbs": word("gusta|gustan|gustaba|gustaban|encanta|encantan|interesa|interesan|molesta|duele|duelen"),
  "reflexive-verbs": word(
    `(?:me|te|se|nos) (?:levant|despiert|despert|duch|acuest|acost|lav|vist|sient|sent|llam|qued|va|fue|pon|pus)[${L}]*`
  ),
  "direct-and-indirect-object-pronouns": word("(?:me|te|se|le|nos|les) (?:lo|la|los|las)|lo|le|les"),
  "saber-vs-conocer": word(`sé|sab[${L}]+|supo|conozco|conoc[${L}]+`),
  "spanish-future-tense": word(
    `[${L}]+(?:aré|arás|ará|aremos|arán|eré|erás|erá|eremos|erán|iré|irás|irá|iremos|irán)|(?:voy|vas|va|vamos|van) a`
  ),
  "spanish-commands": word("mira|escucha|ven|espera|oye|toma|haz|pon|ten|dime|déjame|ayúdame|tranquilo|tranquila|vamos"),
  "si-clauses": word("si"),
  "imperfect-subjunctive": word(`(?!para|cara|clara|ahora|fuera de)[${L}]+(?:ara|aras|áramos|aran|iera|ieras|iéramos|ieran|ase|iese)|fuera|fueran|como si`),
};

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/** Up to `count` stories from `stories` that use the guide's grammar most. */
export function storiesForGuide(guideSlug: string, stories: Story[], count = 3): Story[] {
  const marker = MARKERS[guideSlug];
  if (!marker) return stories.slice(0, count);
  const scored = stories.map((story, index) => {
    const text = story.paragraphs.join(" ");
    const hits = text.match(marker)?.length ?? 0;
    return { story, index, score: hits / Math.max(1, wordCount(text)) };
  });
  scored.sort((a, b) => b.score - a.score || a.index - b.index);
  return scored.slice(0, count).map((s) => s.story);
}
