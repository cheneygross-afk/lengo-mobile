// Synced from cheneygross-afk/lengo:src/lib/grammar/guides-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { GrammarGuide } from "./types";

export const C2_GUIDES: GrammarGuide[] = [
  {
    slug: "diminutives-and-augmentatives",
    title: "Diminutives and Augmentatives in Spanish: -ito, -illo, -ón, -azo",
    metaTitle: "Spanish Diminutives and Augmentatives",
    description:
      "How Spanish diminutives (-ito, -illo, -ico) and augmentatives (-ón, -azo, -ote) are formed, and what they express: affection, irony or contempt.",
    level: "C2",
    readingLevelPath: "c1c2",
    intro: [
      "Diminutive and augmentative suffixes change size, but mostly they change attitude. Un momentito isn't a smaller moment; it's a friendlier way to ask someone to wait. Un cochazo isn't just a big car; it's an impressive one.",
      "Using them well, and understanding their irony, is a mark of near-native command.",
    ],
    sections: [
      {
        heading: "Forming diminutives",
        body: [
          "Words ending in -o or -a usually replace the vowel with -ito/-ita. Words ending in -e, -n or -r (with two or more syllables) add -cito/-cita. One-syllable words and some others add -ecito/-ecita. Spelling adjusts to keep the sound: poco → poquito, amigo → amiguito, luz → lucecita.",
        ],
        table: {
          headers: ["Base", "Diminutive", "Pattern"],
          rows: [
            ["casa", "casita", "-ito/-ita"],
            ["café", "cafecito", "-cito"],
            ["joven", "jovencito", "-cito"],
            ["pan", "panecillo / pancito", "-ecillo (Spain) / -cito (Am.)"],
            ["pie", "piececito", "-ecito"],
            ["chico", "chiquito", "c → qu"],
            ["ahora", "ahorita", "adverbs too"],
          ],
        },
      },
      {
        heading: "What diminutives express",
        body: [
          "Affection (abuelita, mi amorcito), politeness and softening (¿Me esperas un momentito?, un favorcito), minimizing (es un problemita), and irony or contempt (el listillo, un trabajito de nada).",
        ],
        examples: [
          { es: "Dame un segundito y te atiendo.", en: "Give me just a second and I'll be with you." },
          { es: "¿Otro cafecito?", en: "Another little coffee?" },
          { es: "Menudo listillo estás hecho.", en: "What a smart alec you are." },
          { es: "Ahorita vengo.", en: "I'll be right back. (Mexico: can mean now, soon or much later)" },
        ],
      },
      {
        heading: "Regional preferences",
        body: [
          "-ito is universal. -illo is typical of Andalusia and Spain in general. -ico is typical of Aragon, Navarre, Murcia, Costa Rica (whose people are called ticos), Colombia and Venezuela, especially after t (momentico, gatico). -ín is typical of Asturias; -iño of Galicia.",
        ],
        examples: [
          { es: "un momentico (Colombia)", en: "just a moment" },
          { es: "un poquillo (Andalusia)", en: "a little bit" },
          { es: "pequeñín (Asturias)", en: "little one" },
        ],
      },
      {
        heading: "Augmentatives and pejoratives",
        body: [
          "-ón/-ona (grandullón, mujerona), -azo/-aza (cochazo, golazo, exitazo), -ote/-ota (grandote, palabrota). -azo also means a blow or sudden event: puñetazo, portazo, frenazo, codazo. Pejoratives include -ucho (casucha), -ejo (animalejo), -aco (libraco).",
        ],
        examples: [
          { es: "¡Qué golazo!", en: "What a great goal!" },
          { es: "Dio un portazo y se fue.", en: "He slammed the door and left." },
          { es: "Vivían en un cuartucho sin ventanas.", en: "They lived in a miserable little room with no windows." },
        ],
      },
      {
        heading: "Lexicalized forms: new words",
        body: [
          "Some suffixed words have become independent words with their own meaning: bolsillo (pocket, not a small bag), mantequilla (butter), ventanilla (car or ticket window), cinturón, sillón (armchair), bombilla (light bulb), zapatilla (trainer, slipper), cabezón (stubborn), telón (theater curtain).",
        ],
        examples: [
          { es: "Llevo el móvil en el bolsillo.", en: "I've got my phone in my pocket." },
          { es: "Pregunte en la ventanilla 3.", en: "Ask at window 3." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "cafeíto",
        right: "cafecito (or cafelito in parts of Spain)",
        why: "Words ending in a stressed vowel add -cito.",
      },
      {
        wrong: "pocito",
        right: "poquito",
        why: "c before i changes to qu to keep the hard sound.",
      },
      {
        wrong: "una bolsilla (meaning a pocket)",
        right: "un bolsillo",
        why: "Bolsillo is a lexicalized word; the diminutive of bolsa is bolsita.",
      },
    ],
    faqs: [
      {
        q: "Is using diminutives childish?",
        a: "No. Adults use them all the time, especially in Latin America, to sound friendly and polite. Overusing them in formal writing is what to avoid.",
      },
      {
        q: "Does \"ahorita\" mean right now?",
        a: "It depends on the country and tone. In Mexico it can mean immediately, in a bit, or (with irony) never. In the Caribbean it can even mean \"a while ago.\"",
      },
    ],
    related: ["spanish-adjective-agreement", "register-and-politeness", "discourse-markers"],
  },
  {
    slug: "future-subjunctive",
    title: "The Spanish Future Subjunctive: Fuere, Hubiere, Quien Fuere",
    metaTitle: "Spanish Future Subjunctive: Hablare, Fuere",
    description:
      "The future subjunctive (hablare, fuere, hubiere) is nearly gone from speech but alive in legal texts and sayings. Learn its forms and where to meet it.",
    level: "C2",
    readingLevelPath: "c1c2",
    intro: [
      "Spanish once had a future subjunctive, used for hypothetical future conditions. In modern speech the present subjunctive or present indicative has replaced it, but it survives in laws and regulations, proverbs, and a handful of fixed phrases.",
      "At the Professional & Academic level you don't need to produce it, but you do need to recognize it and understand its tone.",
    ],
    sections: [
      {
        heading: "How it's formed",
        body: [
          "Take the imperfect subjunctive -ra form and change the final -a to -e: hablara → hablare, fuera → fuere, tuviera → tuviere. The compound form uses hubiere + participle.",
        ],
        table: {
          headers: ["", "hablar", "ser / ir", "haber"],
          rows: [
            ["yo", "hablare", "fuere", "hubiere"],
            ["tú", "hablares", "fueres", "hubieres"],
            ["él / ella / usted", "hablare", "fuere", "hubiere"],
            ["nosotros", "habláremos", "fuéremos", "hubiéremos"],
            ["vosotros", "hablareis", "fuereis", "hubiereis"],
            ["ellos / ustedes", "hablaren", "fueren", "hubieren"],
          ],
        },
      },
      {
        heading: "Legal and administrative language",
        body: [
          "Laws, contracts and regulations use it for any case that may arise. A modern plain-language version would use the present subjunctive or indicative.",
        ],
        examples: [
          { es: "El que infringiere esta norma será sancionado.", en: "Whoever infringes this rule shall be penalized." },
          { es: "Si el arrendatario no abonare la renta...", en: "Should the tenant fail to pay the rent..." },
          { es: "En caso de que no hubiere acuerdo, decidirá el juez.", en: "In the event that there is no agreement, the judge shall decide." },
        ],
      },
      {
        heading: "Sayings and fixed phrases",
        body: [
          "Several proverbs and expressions preserve it.",
        ],
        examples: [
          { es: "Adonde fueres, haz lo que vieres.", en: "When in Rome, do as the Romans do." },
          { es: "Sea lo que fuere...", en: "Be that as it may..." },
          { es: "Venga de donde viniere...", en: "Wherever it may come from..." },
        ],
      },
      {
        heading: "What replaces it today",
        body: [
          "After si, use the present indicative; after relatives and conjunctions, the present subjunctive.",
        ],
        examples: [
          { es: "Si alguien llamare → Si alguien llama", en: "If anyone calls" },
          { es: "Quien lo hiciere → Quien lo haga", en: "Whoever does it" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Si tuviere tiempo mañana, te llamo. (in conversation)",
        right: "Si tengo tiempo mañana, te llamo.",
        why: "The future subjunctive sounds archaic or legalistic in everyday speech.",
      },
      {
        wrong: "Cuando lo supiera, te lo diré.",
        right: "Cuando lo sepa, te lo diré.",
        why: "A future time clause now takes the present subjunctive, the modern replacement for the old future subjunctive (supiere), not the imperfect subjunctive.",
      },
    ],
    faqs: [
      {
        q: "Is \"fuere\" a typo for \"fuera\"?",
        a: "No. Fuere is the future subjunctive of ser/ir, still used in fixed phrases like sea como fuere.",
      },
      {
        q: "Do any Spanish speakers still use it naturally?",
        a: "Only in formal registers and some rural or literary styles. Lawyers and notaries use it regularly in writing.",
      },
    ],
    related: ["imperfect-subjunctive", "spanish-subjunctive", "register-and-politeness"],
  },
  {
    slug: "narrative-tenses-and-historical-present",
    title: "Narrative Tenses: The Historical Present and Tense Shifts in Storytelling",
    metaTitle: "Spanish Historical Present and Narrative Tenses",
    description:
      "How Spanish storytellers use tense: the historical present (Colón llega a América en 1492), the narrative imperfect, and -ra as a pluperfect.",
    level: "C2",
    readingLevelPath: "c1c2",
    intro: [
      "Once you master the preterite, imperfect and pluperfect, the next step is seeing how skilled writers break the default patterns for effect. Spanish history books, biographies, news and literature regularly use tenses outside their textbook meaning.",
    ],
    sections: [
      {
        heading: "The historical present",
        body: [
          "Historians, biographers and museum texts often narrate past events in the present tense. It makes events vivid and places the reader inside the timeline. Conversation uses it too, for dramatic moments.",
        ],
        examples: [
          { es: "En 1492 Colón llega a las Antillas.", en: "In 1492 Columbus reaches the Antilles." },
          { es: "Cervantes nace en Alcalá de Henares en 1547.", en: "Cervantes was born in Alcalá de Henares in 1547." },
          { es: "Y entonces va y me dice que no viene.", en: "And then he goes and tells me he's not coming." },
        ],
      },
      {
        heading: "The narrative imperfect",
        body: [
          "Journalism and literature sometimes use the imperfect for single, completed events, to slow the action down or give a documentary feel, often with a date.",
        ],
        examples: [
          { es: "Dos días después, el presidente dimitía.", en: "Two days later, the president resigned." },
          { es: "A las diez, el tren llegaba a la estación.", en: "At ten, the train pulled into the station." },
        ],
      },
      {
        heading: "The -ra form as a pluperfect",
        body: [
          "In formal writing, especially journalism, the imperfect subjunctive -ra form is sometimes used with its old meaning of a pluperfect indicative, usually in relative clauses.",
        ],
        examples: [
          { es: "El edificio, que construyera Gaudí en 1906, será restaurado.", en: "The building, which Gaudí had built in 1906, will be restored." },
        ],
      },
      {
        heading: "The future in the past",
        body: [
          "Historical narrative uses the conditional, or ir a in the imperfect, to anticipate what would happen later from the point of view of the story.",
        ],
        examples: [
          { es: "Aquel joven abogado llegaría a ser presidente.", en: "That young lawyer would go on to become president." },
          { es: "No sabían que aquella sería su última cena juntos.", en: "They didn't know that would be their last dinner together." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Mixing the historical present and preterite in the same paragraph without reason.",
        right: "Choose one narrative tense for the main line of events and keep it.",
        why: "Tense switching in Spanish is a deliberate effect; random switching reads as an error.",
      },
      {
        wrong: "Using \"que construyera\" in conversation.",
        right: "que había construido / que construyó",
        why: "The -ra pluperfect is a written, formal style.",
      },
    ],
    faqs: [
      {
        q: "Is the narrative -ra form correct?",
        a: "It's accepted by the Real Academia, but many style guides discourage overusing it. Recognize it; use it sparingly.",
      },
      {
        q: "Do I need these for the DELE C2?",
        a: "You need to understand them in reading and listening. In writing, a clear, consistent use of the standard past tenses is enough, and a controlled historical present can impress.",
      },
    ],
    related: ["preterite-vs-imperfect", "spanish-pluperfect", "reported-speech"],
  },
];
