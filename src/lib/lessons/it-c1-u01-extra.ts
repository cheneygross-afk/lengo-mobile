// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u01-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 1 Extra Practice: The Remote Past for Writing. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U01_EXTRA: Lesson[] = [
  {
    slug: "c1-passato-remoto-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Regular Forms",
    summary: "Fresh narrative sentences with regular -are, -ere and -ire verbs in the passato remoto, in every person.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A summer in Puglia",
        body: [
          "The sentences in this practice tell one story: a group of friends who spent a summer restoring a farmhouse, a \"masseria\", in Puglia. Regular endings only: \"-ai, -asti, -ò, -ammo, -aste, -arono\"; \"-ei / -etti, -esti, -é / -ette, -emmo, -este, -erono / -ettero\"; \"-ii, -isti, -ì, -immo, -iste, -irono\".",
          "Check the accent on every lui / lei form and the double m on every noi form.",
        ],
        examples: [
          { es: "Arrivammo a Ostuni ai primi di luglio.", en: "We arrived in Ostuni at the beginning of July." },
          { es: "Francesca pulì le stanze una per una.", en: "Francesca cleaned the rooms one by one." },
          { es: "I ragazzi ripararono il tetto in due settimane.", en: "The boys repaired the roof in two weeks." },
          { es: "Io verniciai le persiane di verde.", en: "I painted the shutters green." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "We arrived in Ostuni at the beginning of July.", answer: "Arrivammo a Ostuni ai primi di luglio.", altAnswers: ["Arrivammo a Ostuni all'inizio di luglio."], explanation: "\"Arrivammo\": double m; \"ai primi di\" = at the beginning of." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "Francesca cleaned the rooms one by one.", answer: "Francesca pulì le stanze una per una.", altAnswers: ["Francesca pulì le stanze una alla volta."], explanation: "\"Pulire\" → \"pulì\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "The boys repaired the roof in two weeks.", answer: "I ragazzi ripararono il tetto in due settimane.", explanation: "\"Ripararono\": ri-pa-RA-ro-no." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "We sold the old furniture at the market.", answer: "Vendemmo i vecchi mobili al mercato.", explanation: "\"Vendemmo\": noi form of \"vendere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "Matteo received a letter from the town hall.", answer: "Matteo ricevette una lettera dal comune.", altAnswers: ["Matteo ricevé una lettera dal comune.", "Matteo ricevette una lettera dal municipio."], explanation: "\"Ricevette\" or \"ricevé\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "Why did you sleep in the garden? (to one person)", answer: "Perché dormisti in giardino?", explanation: "Tu: \"dormisti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "The neighbors helped us with the wall.", answer: "I vicini ci aiutarono con il muro.", altAnswers: ["I vicini ci aiutarono col muro."], explanation: "\"Aiutarono\"; \"ci\" = us." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "In August we finished the kitchen.", answer: "Ad agosto finimmo la cucina.", altAnswers: ["In agosto finimmo la cucina."], explanation: "\"Finimmo\": noi of \"finire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "Did you (plural) believe the builder?", answer: "Credeste al muratore?", altAnswers: ["Voi credeste al muratore?"], explanation: "Voi has one form: \"credeste\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "Chiara cooked for everyone every evening.", answer: "Chiara cucinava per tutti ogni sera.", altAnswers: ["Ogni sera Chiara cucinava per tutti."], explanation: "A trap: \"ogni sera\" is a habit, so the imperfetto, not the passato remoto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "One evening a storm [broke out].", sentence: "Una sera ___ un temporale.", answer: "scoppiò", explanation: "A single event: \"scoppiò\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I lost] the keys of the gate.", sentence: "___ le chiavi del cancello.", answer: "Perdei", altAnswers: ["Persi", "Perdetti"], explanation: "\"Perdere\" has three io forms: \"persi\", \"perdei\", \"perdetti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The owners [thanked] us warmly.", sentence: "I proprietari ci ___ calorosamente.", answer: "ringraziarono", explanation: "\"Ringraziare\" → \"ringraziarono\"; one i only." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We left] on the first of September.", sentence: "___ il primo settembre.", answer: "Partimmo", explanation: "\"Partimmo\": double m." },
      { type: "multiple-choice", question: "Which form means she repeated (passato remoto)?", options: ["ripeté", "ripetette", "ripeto", "ripeteva"], correctIndex: 0, explanation: "Stems in t prefer \"-é\": \"ripeté\"." },
      { type: "listen-choose", audio: "Restammo fino a settembre.", question: "What did you hear?", options: ["Restammo fino a settembre.", "Restiamo fino a settembre.", "Restarono fino a settembre.", "Restavamo fino a settembre."], correctIndex: 0, explanation: "The double m: \"restammo\", we stayed." },
      { type: "dictation", audio: "Pulimmo, verniciammo e alla fine festeggiammo.", explanation: "Three noi forms with a double m." },
      { type: "speak", text: "Quell'estate restaurammo una masseria, lavorammo molto e ci divertimmo ancora di più.", prompt: "Say it in Italian (passato remoto): That summer we restored a farmhouse, worked a lot and had even more fun.", tip: "Every noi form: a long m.", explanation: "Three regular noi forms." },
    ],
  },
  {
    slug: "c1-passato-remoto-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Irregular Forms",
    summary: "Fresh narrative sentences with the irregular passato remoto in all persons, built on the 1-3-3 pattern.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A wartime memoir",
        body: [
          "These sentences come from an invented memoir, written years later by a woman who was a young teacher in Friuli in 1917 (a diary written day by day would use the passato prossimo; a memoir looks back and uses the passato remoto). Irregular verbs change in the io, lui / lei and loro forms and stay regular in tu, noi and voi: \"vidi, vedesti, vide, vedemmo, vedeste, videro\".",
          "Watch the verbs that don't follow 1-3-3: \"essere\" (\"fui, fosti, fu, fummo, foste, furono\") is irregular everywhere.",
        ],
        examples: [
          { es: "Quella mattina vidi i primi soldati in paese.", en: "That morning I saw the first soldiers in the village." },
          { es: "Il sindaco disse a tutti di restare in casa.", en: "The mayor told everyone to stay indoors." },
          { es: "Fummo costretti a chiudere la scuola.", en: "We were forced to close the school." },
          { es: "Mio fratello scrisse da Udine.", en: "My brother wrote from Udine." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "That morning I saw the first soldiers in the village.", answer: "Quella mattina vidi i primi soldati in paese.", explanation: "\"Vidi\": io form of \"vedere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "We were forced to close the school.", answer: "Fummo costretti a chiudere la scuola.", altAnswers: ["Fummo costrette a chiudere la scuola."], explanation: "\"Fummo\" + participle agreeing with the subject." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "The mayor told everyone to stay indoors.", answer: "Il sindaco disse a tutti di restare in casa.", altAnswers: ["Il sindaco disse a tutti di rimanere in casa."], explanation: "\"Disse\" + \"di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "My brother wrote from Udine.", answer: "Mio fratello scrisse da Udine.", explanation: "\"Scrivere\" → \"scrisse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "The children asked me where their fathers were.", answer: "I bambini mi chiesero dove fossero i loro padri.", altAnswers: ["I bambini mi chiesero dove erano i loro padri."], explanation: "\"Chiesero\"; the subjunctive in the indirect question is more formal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "I didn't know what to answer.", answer: "Non seppi che cosa rispondere.", altAnswers: ["Non seppi cosa rispondere.", "Non seppi che rispondere."], explanation: "\"Seppi\": double p." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "In November the rain came.", answer: "A novembre venne la pioggia.", altAnswers: ["In novembre venne la pioggia.", "A novembre arrivò la pioggia.", "In novembre arrivò la pioggia."], explanation: "\"Venne\": subject after the verb, as often in narrative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "You (plural) did a lot for the village.", answer: "Faceste molto per il paese.", altAnswers: ["Voi faceste molto per il paese.", "Faceste tanto per il paese."], explanation: "Voi uses the long stem: \"faceste\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "The old church bell fell and broke.", answer: "La vecchia campana della chiesa cadde e si ruppe.", explanation: "\"Cadde\", \"si ruppe\": doubled consonants." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "We decided to leave.", answer: "Decidemmo di partire.", altAnswers: ["Decidemmo di andarcene."], explanation: "Noi is regular: \"decidemmo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My mother [wanted] to stay at all costs.", sentence: "Mia madre ___ restare a tutti i costi.", answer: "volle", explanation: "\"Volle\" = insisted, wanted and did." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I put] the books in a box.", sentence: "___ i libri in una cassa.", answer: "Misi", explanation: "\"Mettere\" → \"misi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A child [was born] in the cellar.", sentence: "In cantina ___ un bambino.", answer: "nacque", explanation: "\"Nascere\" → \"nacque\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[They lived] in the mountains until spring.", sentence: "___ in montagna fino alla primavera.", answer: "Vissero", explanation: "\"Vivere\" → \"vissero\"." },
      { type: "multiple-choice", question: "Which form means you (one person) took?", options: ["prendesti", "presi", "presesti", "prese"], correctIndex: 0, explanation: "Tu is regular: \"prendesti\"." },
      { type: "listen-choose", audio: "Tennero duro fino alla fine.", question: "What does it mean?", options: ["They held out until the end.", "They held hands until the end.", "They kept quiet until the end.", "He held out until the end."], correctIndex: 0, explanation: "\"Tenere duro\" = to hold out; \"tennero\" = they." },
      { type: "dictation", audio: "Ebbi paura, ma non lo dissi a nessuno.", explanation: "\"Ebbi\", \"dissi\": io forms." },
      { type: "speak", text: "Fu un inverno durissimo: vedemmo partire i nostri uomini e non sapemmo nulla per mesi.", prompt: "Say it in Italian (passato remoto): It was a very hard winter: we saw our men leave and heard nothing for months.", tip: "\"Vedemmo\", \"sapemmo\": regular noi forms.", explanation: "\"Fu\" sums up the period; \"vedemmo\", \"sapemmo\" are regular noi forms." },
    ],
  },
];
