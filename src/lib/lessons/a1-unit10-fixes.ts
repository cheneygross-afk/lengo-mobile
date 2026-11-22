// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-unit10-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { applyLessonFixes, applySpokenFixes, choose, chooseSentence, edit, fbIs, mcIs, trIs, type Ex, type LessonFix } from "./unit-fixes";

// A1 Unit 10 (Beginner final review): content fixes from Claude's audit in
// Ricardo's format (ES-A1-U10_CL_2026-11-22). Content only. See
// unit-fixes.ts for why some items become choices: the checker forgives
// semos, tiengo, Vivemos, custa, Queres and hacendo as typos, and the
// lessons teach exactly somos, tengo, vivimos, cuesta, quieres and haciendo.
// Split lessons (Parts 1 and 2 of 3, and the level test) are fixed under
// their base slug, because the fixes run before the split.

const carro = (s: string) => s.split("coche").join("carro");
const listenIs = (audio: string) => (e: Ex) => e.type === "listen-choose" && e.audio === audio;
const piso = (s: string) => s.split("Vivimos en un piso").join("Vivimos en un apartamento");
const FAMILY = "Tengo una hermana, Lola. Lola tiene doce años y es muy simpática. Vivimos en un piso en Valencia y tenemos un perro.";

const FIXES: Record<string, LessonFix> = {
  // L01-L02
  "a1-final-review-1": {
    goal: "use ser, articles, agreeing adjectives and -ar verbs together, without notes.",
    items: [
      chooseSentence("Nosotros son estudiantes.", ["Nosotros semos estudiantes.", "Nosotros sois estudiantes.", "Nosotros es estudiantes."]),
      edit(trIs("el coche rojo"), (e) => ({ ...e, source: "el carro rojo", answer: "los carros rojos", altAnswers: ["los coches rojos", "los autos rojos"], explanation: carro(e.explanation) })),
    ],
  },
  // L03-L04
  "a1-final-review-2": {
    goal: "use -er and -ir verbs, ser or estar, possessives and small prepositions together, without notes.",
    text: [["el coche del profesor", "el carro del profesor"]],
    items: [chooseSentence("Vivo en una casa pequeña.", ["Vivemos en una casa pequeña.", "Viven en una casa pequeña.", "Vivamos en una casa pequeña."])],
  },
  // L05
  "a1-final-review-3": {
    goal: "ask questions with the right word and accent, say what people like with gustar, and use tener, ir, hacer and hay.",
    items: [choose("Yo ___ veinte años.", ["tiengo", "soy", "estoy"])],
  },
  // L06
  "a1r-challenge-mixed-error-hunt": {
    goal: "find and fix one mistake per sentence from any Beginner topic, then change the sentence and keep it right.",
    items: [edit(mcIs("Which sentences are correct?"), (e) => ({ ...e, options: e.options.map(carro) }))],
  },
  // L07
  "a1r-challenge-dialogue-marathon": {
    goal: "keep up with four everyday conversations (meeting, plans, the market, goodbye) and answer each one in the right form.",
    items: [
      choose("—¿Ustedes son hermanos? —Sí, ___ hermanos.", ["semos", "son", "somo"]),
      choose("¿Y cuánto ___ aquel melón?", ["custa", "cuestan", "costa"]),
      edit((e) => e.type === "matching" && e.pairs.some((p) => p.left.includes("coche")), (e) => ({ ...e, pairs: e.pairs.map((p: { left: string; right: string }) => ({ ...p, left: carro(p.left) })) })),
    ],
  },
  // L08
  "a1r-challenge-translation-relay": {
    goal: "translate both ways across every Beginner topic, choosing ser, estar, tener, hay or gustar each time.",
  },
  // L09
  "a1r-challenge-build-a-sentence": {
    goal: "build long sentences in the safe order (time, subject, verb, object, place, reason) and join two ideas with y, pero, porque or así que.",
  },
  // L10
  "a1r-challenge-day-in-madrid-morning": {
    goal: "order breakfast, ask the way and describe what you see, with hay or está for places and ser or estar for descriptions.",
    items: [
      edit(trIs("Bread with tomato and an orange juice, please."), (e) => ({ ...e, answer: "Pan con tomate y un jugo de naranja, por favor.", altAnswers: ["Pan con tomate y un zumo de naranja, por favor."], explanation: "Jugo is the word in Latin America; in Spain, where Emma is, you'll also hear zumo." })),
    ],
  },
  // L11
  "a1r-challenge-day-in-madrid-evening": {
    goal: "chat over lunch, shop with gustar and cuesta / cuestan, and make plans for the evening with ir a.",
    text: [
      ["Me gusta este bolso. ¿Cuánto cuesta?", "Me gusta esta bolsa. ¿Cuánto cuesta?"],
      ["me gusta este bolso, le gustan estas bufandas", "me gusta esta bolsa, le gustan estas bufandas"],
    ],
    items: [
      edit(trIs("I like this bag but it's very expensive."), (e) => ({ ...e, answer: "Me gusta esta bolsa pero es muy cara.", altAnswers: ["Me gusta esta bolsa, pero es muy cara.", "Me gusta este bolso pero es muy caro.", "Me gusta este bolso, pero es muy caro."], explanation: "One bag, so gusta; cara agrees with bolsa (in Spain, un bolso: caro)." })),
      edit(trIs("Do you (formal) like these bags?"), (e) => ({ ...e, answer: "¿Le gustan estas bolsas?", altAnswers: ["¿A usted le gustan estas bolsas?", "¿Le gustan estos bolsos?", "¿A usted le gustan estos bolsos?"], explanation: "Usted takes le; plural bolsas takes gustan." })),
    ],
  },
  // L12
  "a1r-challenge-your-introduction": {
    goal: "write a five-line profile: your name, age, where you're from and live, what you do, and what you like.",
    items: [
      choose("Me llamo Paula y ___ veinticinco años.", ["tiengo", "soy", "estoy"]),
      edit(trIs("Soy un camarero y trabajo en un restaurante."), (e) => ({ ...e, source: "Soy un mesero y trabajo en un restaurante.", answer: "Soy mesero y trabajo en un restaurante.", altAnswers: ["Soy camarero y trabajo en un restaurante."] })),
    ],
  },
  // L14-L15
  "a1r-exit-ticket": {
    goal: "show you're ready for the Elementary level: read, listen and write about everyday life, getting at least 70% right.",
    text: [["compañero de piso", "compañero de apartamento"], ["periódicos y ordenadores", "periódicos y computadoras"]],
    items: [
      edit(mcIs("Who is Tomás?"), (e) => ({ ...e, options: e.options.map((o: string) => o.split("flatmate").join("roommate")), explanation: "\"Soy tu nuevo compañero de apartamento\": he is her new roommate." })),
      edit(listenIs(FAMILY), (e) => ({ ...e, audio: piso(e.audio), options: e.options.map((o: string) => o.split("flat").join("apartment")), explanation: piso(e.explanation) })),
      choose("Yo ___ dos hermanos.", ["tiengo", "tiene", "soy"]),
      choose("¿___ jugar al fútbol?", ["Queres", "Quieren", "Querer"], { en: "[Do you want] to play soccer?" }),
      chooseSentence("Mi hermana vive en Lima.", ["Vivemos en Lima.", "Viven en Lima.", "Vive en Lima."]),
      chooseSentence("Hago la cena.", ["Estoy hacendo la cena.", "Estoy hago la cena.", "Soy haciendo la cena."]),
      edit(fbIs("¿___ cuesta el billete?"), (e) => ({ ...e, sentence: "¿___ cuesta el boleto?" })),
    ],
  },
};

export function withUnit10Fixes(lessons: Lesson[]): Lesson[] {
  return applyLessonFixes(lessons, FIXES);
}

export function withUnit10SpokenFixes(lessons: Lesson[], keep: (from: Lesson, to: Lesson) => Lesson): Lesson[] {
  return applySpokenFixes(lessons, FIXES, keep);
}
