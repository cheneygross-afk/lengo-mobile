// Synced from cheneygross-afk/lengo:src/lib/lessons/skills-samples.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// A few listening, speaking and writing exercises (listen-choose,
// dictation, speak, write -- see types.ts), added to one existing A1
// lesson so the new exercise types run end to end before the lessons
// built around them are written. Appended to the named lesson's final
// review by withSkillSamples() in a1.ts; remove an entry here to take its
// exercises out again.
const SAMPLES: Record<string, Exercise[]> = {
  "a1r-dialogue-first-meetings": [
    {
      type: "listen-choose",
      audio: "Mucho gusto.",
      question: "Listen. What does the person say?",
      options: ["Nice to meet you.", "Good morning.", "See you later.", "Thank you very much."],
      correctIndex: 0,
      explanation: "Mucho gusto means \"nice to meet you\" -- what you say when you're introduced to someone.",
    },
    {
      type: "listen-choose",
      audio: "¿De dónde eres?",
      question: "Listen. What is the person asking?",
      options: ["What's your name?", "Where do you live?", "Who are you?", "Where are you from?"],
      correctIndex: 3,
      explanation: "¿De dónde eres? is \"Where are you from?\" (to someone you call tú). The answer starts with Soy de...",
    },
    {
      type: "listen-choose",
      audio: "Son de México.",
      question: "Listen. Who is from Mexico?",
      options: ["I", "you (a friend)", "she", "they"],
      correctIndex: 3,
      explanation: "Son de México: son is the form for ellos / ellas (and ustedes). I would be soy, a friend eres, she es.",
    },
    {
      type: "dictation",
      audio: "Me llamo Ana.",
      explanation: "Me llamo Ana -- \"my name is Ana\". Llamo is spelled with ll.",
    },
    {
      type: "dictation",
      audio: "Soy de México.",
      explanation: "Soy de México -- \"I'm from Mexico\". México has a written accent on the é (MÉ-xi-co), and the x sounds like a Spanish j.",
    },
    {
      type: "dictation",
      audio: "¿Cómo te llamas?",
      explanation: "¿Cómo te llamas? -- \"What's your name?\" Question words like cómo carry an accent.",
    },
    {
      type: "speak",
      text: "Mucho gusto.",
      tip: "Keep the vowels short and pure: the u in mucho and gusto is always \"oo\", never \"uh\".",
      explanation: "Mucho gusto: MU-cho GUS-to, stress on the first syllable of each word.",
    },
    {
      type: "speak",
      text: "Soy de Colombia.",
      tip: "Spanish o is short and clean -- not the English \"oh-oo\" glide.",
      explanation: "Soy de Colombia: co-LOM-bia, with the stress on lom.",
    },
    {
      type: "speak",
      text: "¿Cómo se llama usted?",
      tip: "Say ll like the y in \"yes\".",
      explanation: "¿Cómo se llama usted? is the formal \"What's your name?\" Let your voice rise at the end of the question.",
    },
    {
      type: "write",
      prompt:
        "Introduce yourself to a new classmate. It's a casual chat with someone your age, so use tú: say hello, give your name and where you're from, then ask them a question.",
      minWords: 12,
      maxWords: 40,
      rubric: [
        "Greet the person (hola, buenos días...)",
        "Say your name with me llamo or soy",
        "Say where you're from with soy de",
        "Ask a question with tú, such as ¿De dónde eres? (To an older stranger you'd use usted: ¿De dónde es usted?)",
      ],
      modelAnswer: "¡Hola! Me llamo Sam. Soy estudiante. Soy de Canadá. Mucho gusto. ¿Cómo te llamas? ¿De dónde eres?",
      explanation: "An introduction in Spanish follows the same steps as in English: greet, name, origin, then ask back. Classmates use tú (¿Cómo te llamas? ¿De dónde eres?); with a teacher or an older stranger, switch to usted (¿Cómo se llama usted? ¿De dónde es usted?).",
    },
  ],
};

/** `lessons` with the sample exercises appended to their lessons' final reviews. */
export function withSkillSamples(lessons: Lesson[]): Lesson[] {
  const known = new Set(lessons.map((l) => l.slug));
  for (const slug of Object.keys(SAMPLES)) {
    if (!known.has(slug)) throw new Error(`withSkillSamples: unknown lesson "${slug}"`);
  }
  return lessons.map((l) => (SAMPLES[l.slug] ? { ...l, exercises: [...l.exercises, ...SAMPLES[l.slug]] } : l));
}
