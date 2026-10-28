// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u13-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 13 Extra Practice: Italian Literature, Part 2. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U13_EXTRA: Lesson[] = [
  {
    slug: "c1-literature-2-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Pirandello and Svevo",
    summary: "More Pirandello novelle, La giara and Ciàula scopre la luna, and the apocalyptic ending of La coscienza di Zeno.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Two novelle and an ending",
        body: [
          "In La giara, a rich, quarrelsome landowner, don Lollò, finds his huge new oil jar cracked. The mender, zi' Dima, repairs it from the inside with his own glue, and ends up trapped in it, because the neck is too narrow. Who owns the jar now, and who must pay to break it? Pirandello's comedy turns on stubbornness and the law.",
          "In Ciàula scopre la luna, a simple, mistreated miner who fears the dark of night climbs out of the mine and, for the first time, really sees the moon. He cries with wonder. Pirandello's humor becomes tenderness.",
          "La coscienza di Zeno ends with a dark prophecy: modern life is \"inquinata alle radici\" (polluted at the roots), and Zeno imagines a man inventing an explosive that will blow up the earth, returning it to a nebula. Written in the 1920s, the page still feels uncomfortably modern.",
        ],
        examples: [
          { es: "La giara nuova di don Lollò si è spaccata.", en: "Don Lollò's new jar has cracked." },
          { es: "Zi' Dima resta chiuso dentro la giara.", en: "Zi' Dima ends up shut inside the jar." },
          { es: "Ciàula ha paura del buio della notte.", en: "Ciàula is afraid of the dark of night." },
          { es: "Per la prima volta vede davvero la luna, e piange.", en: "For the first time he really sees the moon, and he cries." },
          { es: "La vita attuale è inquinata alle radici.", en: "Modern life is polluted at the roots." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For the first time he really sees the moon.", answer: "Per la prima volta vede davvero la luna.", altAnswers: ["Per la prima volta vede veramente la luna.", "Vede davvero la luna per la prima volta."], explanation: "\"Per la prima volta\" = for the first time." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The mender ends up trapped inside the jar.", answer: "Il conciatore resta intrappolato dentro la giara.", altAnswers: ["Il riparatore resta intrappolato dentro la giara.", "Il conciatore rimane intrappolato dentro la giara.", "Il riparatore rimane chiuso dentro la giara.", "Il conciatore resta chiuso dentro la giara."], explanation: "\"Restare\" + participle = to end up." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don Lollò's new jar has cracked.", answer: "La giara nuova di don Lollò si è spaccata.", altAnswers: ["La nuova giara di don Lollò si è spaccata.", "La giara nuova di don Lollò si è rotta."], explanation: "\"Spaccarsi\" = to crack, split." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The neck of the jar is too narrow.", answer: "Il collo della giara è troppo stretto.", altAnswers: ["La bocca della giara è troppo stretta."], explanation: "\"Stretto\" = narrow." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who has to pay to break the jar?", answer: "Chi deve pagare per rompere la giara?", altAnswers: ["Chi deve pagare se si rompe la giara?", "Chi paga per rompere la giara?"], explanation: "\"Dovere\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Ciàula is afraid of the dark.", answer: "Ciàula ha paura del buio.", explanation: "\"Avere paura di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Modern life is polluted at the roots.", answer: "La vita attuale è inquinata alle radici.", altAnswers: ["La vita moderna è inquinata alle radici."], explanation: "\"Attuale\" = present-day, not actual." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The page still feels modern.", answer: "La pagina sembra ancora moderna.", altAnswers: ["La pagina appare ancora moderna.", "La pagina risulta ancora moderna.", "La pagina sembra ancora attuale."], explanation: "\"Sembrare\" + adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [cries with wonder].", sentence: "___ di meraviglia.", answer: "Piange", explanation: "\"Piangere di\" + emotion." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [climbs out of] the mine.", sentence: "___ dalla miniera.", answer: "Esce", altAnswers: ["Risale", "Sale fuori"], explanation: "\"Uscire da\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Pirandello's humor [becomes] tenderness.", sentence: "L'umorismo di Pirandello ___ tenerezza.", answer: "diventa", altAnswers: ["si fa", "si trasforma in"], explanation: "\"Diventare\" + noun." },
      { type: "word-order", prompt: "Put the words in order to say: He repairs the jar from the inside.", words: ["Ripara", "la", "giara", "dall'interno."], translation: "He repairs the jar from the inside.", explanation: "\"Dall'interno\" = from the inside." },
      { type: "multiple-choice", question: "What is the comic core of La giara?", options: ["A mender trapped in the jar he has just repaired", "A jar full of gold", "A landowner who sells his jar", "A jar that talks"], correctIndex: 0, explanation: "Stubbornness and the law." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la giara", right: "the large oil jar" },
          { left: "la miniera", right: "the mine" },
          { left: "il buio", right: "the dark" },
          { left: "inquinato", right: "polluted" },
        ],
        explanation: "Vocabulary from the three texts.",
      },
      { type: "listen-choose", audio: "Ciàula esce dalla miniera e, per la prima volta, vede la luna.", question: "What happens?", options: ["He comes out of the mine and sees the moon for the first time.", "He goes into the mine at night.", "He loses his way in the mine.", "He sees the sun after a long night."], correctIndex: 0, explanation: "\"Esce dalla miniera\"." },
      { type: "dictation", audio: "La vita attuale è inquinata alle radici.", explanation: "Zeno's final prophecy." },
      { type: "speak", text: "Zi' Dima ripara la giara dall'interno e resta chiuso dentro.", prompt: "Say it in Italian: Zi' Dima repairs the jar from the inside and ends up shut in it.", tip: "GIA-ra: the gi is soft, like the j in jar.", explanation: "La giara in one sentence." },
    ],
  },
  {
    slug: "c1-literature-2-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Short Stories",
    summary: "Two original micro-stories in modern Italian: read them, analyze their technique and translate their key sentences.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Il binario 4 and La ricetta",
        body: [
          "Il binario 4: \"Ogni venerdì alle 18:40 la signora Ferri scendeva al binario 4 e aspettava il regionale da Parma. Non arrivava nessuno. Il capostazione aveva smesso di chiederle chi aspettasse. Qualcuno, evidentemente. Qualcuno che un venerdì sarebbe arrivato.\" The last two sentences slide into free indirect speech: her conviction, in the narrator's voice.",
          "La ricetta: \"La ricetta della nonna diceva: farina quanto basta, zucchero quanto basta, uova quante ne vuoi. Ho capito solo dopo che non era una ricetta, era una lezione di fiducia.\" First person, passato prossimo, and a final sentence that changes the meaning of everything before it.",
        ],
        examples: [
          { es: "Ogni venerdì alle 18:40 la signora Ferri scendeva al binario 4.", en: "Every Friday at 6:40 p.m. Mrs. Ferri went down to platform 4." },
          { es: "Il capostazione aveva smesso di chiederle chi aspettasse.", en: "The stationmaster had stopped asking her who she was waiting for." },
          { es: "Qualcuno che un venerdì sarebbe arrivato.", en: "Someone who would arrive one Friday." },
          { es: "Farina quanto basta, zucchero quanto basta.", en: "Flour as needed, sugar as needed." },
          { es: "Non era una ricetta, era una lezione di fiducia.", en: "It wasn't a recipe, it was a lesson in trust." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The stationmaster had stopped asking her who she was waiting for.", answer: "Il capostazione aveva smesso di chiederle chi aspettasse.", altAnswers: ["Il capostazione aveva smesso di chiederle chi aspettava.", "Il capostazione aveva smesso di domandarle chi aspettasse."], explanation: "Indirect question: subjunctive in literary style, indicative in plainer style." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It wasn't a recipe, it was a lesson in trust.", answer: "Non era una ricetta, era una lezione di fiducia.", explanation: "\"Lezione di\" + noun." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every Friday she waited for the regional train from Parma.", answer: "Ogni venerdì aspettava il regionale da Parma.", altAnswers: ["Ogni venerdì aspettava il treno regionale da Parma.", "Tutti i venerdì aspettava il regionale da Parma."], explanation: "Imperfetto for a habit." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody arrived.", answer: "Non arrivava nessuno.", altAnswers: ["Nessuno arrivava.", "Non arrivò nessuno."], explanation: "\"Non\" + verb + \"nessuno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Someone who would arrive one Friday.", answer: "Qualcuno che un venerdì sarebbe arrivato.", altAnswers: ["Qualcuno che sarebbe arrivato un venerdì."], explanation: "Past conditional: future in the past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I only understood later.", answer: "Ho capito solo dopo.", altAnswers: ["L'ho capito solo dopo.", "Ho capito soltanto dopo.", "Solo dopo ho capito.", "Ho capito solo più tardi."], explanation: "\"Solo dopo\" = only later." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Eggs, as many as you like.", answer: "Uova, quante ne vuoi.", altAnswers: ["Uova quante ne vuoi."], explanation: "\"Quante ne vuoi\": \"ne\" for of them." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The last sentence changes the meaning of the story.", answer: "L'ultima frase cambia il senso del racconto.", altAnswers: ["L'ultima frase cambia il significato del racconto.", "L'ultima frase cambia il senso della storia."], explanation: "\"Il senso\" = the meaning." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Flour [as needed].", sentence: "Farina ___.", answer: "quanto basta", explanation: "\"Quanto basta\" (q.b. in recipes) = as much as needed." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She went down [to platform] 4.", sentence: "Scendeva ___ 4.", answer: "al binario", explanation: "\"Il binario\" = platform, track." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Someone, [evidently].", sentence: "Qualcuno, ___.", answer: "evidentemente", explanation: "The narrator echoes her certainty." },
      { type: "word-order", prompt: "Put the words in order to say: It was a lesson in trust.", words: ["Era", "una", "lezione", "di", "fiducia."], translation: "It was a lesson in trust.", explanation: "\"Fiducia\" = trust." },
      { type: "multiple-choice", question: "In Il binario 4, whose belief is \"Qualcuno che un venerdì sarebbe arrivato\"?", options: ["Mrs. Ferri's, in free indirect speech", "The stationmaster's", "The narrator's certain knowledge", "The train driver's"], correctIndex: 0, explanation: "Her conviction, in the narrator's tense." },
      { type: "multiple-choice", question: "What does \"quanto basta\" teach the narrator of La ricetta?", options: ["To trust her own judgment", "To weigh everything exactly", "To use less sugar", "To cook with her grandmother"], correctIndex: 0, explanation: "\"Una lezione di fiducia\"." },
      { type: "listen-choose", audio: "Ogni venerdì alle diciotto e quaranta scendeva al binario quattro.", question: "When did she go to the platform?", options: ["Every Friday at 6:40 p.m.", "Every day at 4", "Every Friday at 2:40 p.m.", "On the fourth of every month"], correctIndex: 0, explanation: "\"Alle diciotto e quaranta\" = 6:40 p.m. (the 24-hour clock)." },
      { type: "dictation", audio: "Non era una ricetta, era una lezione di fiducia.", explanation: "The final twist." },
      { type: "speak", text: "Ogni venerdì la signora Ferri aspettava il treno. Non arrivava nessuno.", prompt: "Read the start of Il binario 4 aloud.", tip: "Pause before \"Non arrivava nessuno\": let the silence work.", explanation: "Habit and absence." },
    ],
  },
];
