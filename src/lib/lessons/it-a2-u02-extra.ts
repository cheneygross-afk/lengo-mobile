// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u02-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 2 Extra Practice: Past Tense with Essere. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U02_EXTRA: Lesson[] = [
  {
    slug: "a2-past-essere-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Essere Verbs",
    summary: "Fresh sentences with essere verbs and agreement.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Who went where?",
        body: [
          "Essere + participle, agreeing with the subject: \"-o, -a, -i, -e\". Check the subject first, then the ending.",
        ],
        examples: [
          { es: "Il pacco è arrivato stamattina.", en: "The parcel arrived this morning." },
          { es: "Le lettere sono arrivate ieri.", en: "The letters arrived yesterday." },
          { es: "Siamo saliti fino in cima.", en: "We climbed up to the top." },
          { es: "La lezione è durata due ore.", en: "The lesson lasted two hours." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The parcel arrived this morning.", answer: "Il pacco è arrivato stamattina.", altAnswers: ["Stamattina è arrivato il pacco.", "Il pacco è arrivato questa mattina."], explanation: "Things agree too: \"il pacco\" → \"arrivato\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lesson lasted two hours.", answer: "La lezione è durata due ore.", explanation: "\"Durare\" takes \"essere\": \"durata\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The letters arrived yesterday.", answer: "Le lettere sono arrivate ieri.", altAnswers: ["Ieri sono arrivate le lettere."], explanation: "\"Lettere\" feminine plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We climbed up to the top.", answer: "Siamo saliti fino in cima.", altAnswers: ["Siamo salite fino in cima.", "Siamo saliti in cima."], explanation: "\"Salire\" = to go up." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Francesca went to the doctor's.", answer: "Francesca è andata dal medico.", altAnswers: ["Francesca è andata dal dottore."], explanation: "\"Dal\" + person = to someone's place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film lasted three hours.", answer: "Il film è durato tre ore.", explanation: "\"Durato\" agrees with \"film\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My brothers stayed at home.", answer: "I miei fratelli sono rimasti a casa.", altAnswers: ["I miei fratelli sono restati a casa.", "I miei fratelli sono stati a casa."], explanation: "\"Rimasti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you go down to the beach? (to a woman you call tu)", answer: "Sei scesa in spiaggia?", altAnswers: ["Sei scesa alla spiaggia?", "Tu sei scesa in spiaggia?"], explanation: "\"Scendere\" → \"scesa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nothing happened.", answer: "Non è successo niente.", altAnswers: ["Non è successo nulla."], explanation: "\"Succedere\" → \"successo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tomatoes cost three euros.", answer: "I pomodori sono costati tre euro.", altAnswers: ["I pomodori sono costati 3 euro."], explanation: "\"Costati\" agrees with \"pomodori\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The guests [left] at midnight.", sentence: "Gli ospiti ___ a mezzanotte.", answer: "sono andati via", altAnswers: ["sono partiti", "se ne sono andati"], explanation: "\"Andare via\" = to leave a place." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My cousin (a woman) [became] a lawyer.", sentence: "Mia cugina ___ avvocato.", answer: "è diventata", explanation: "\"Diventata\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We came] by train. (two women)", sentence: "___ in treno.", answer: "Siamo venute", altAnswers: ["Noi siamo venute"], explanation: "\"Venute\": women." },
      { type: "multiple-choice", question: "The pizzas arrived. Which is right?", options: ["Le pizze sono arrivate.", "Le pizze hanno arrivato.", "Le pizze sono arrivati.", "Le pizze è arrivata."], correctIndex: 0, explanation: "\"Pizze\" feminine plural: \"arrivate\"." },
      { type: "listen-choose", audio: "La riunione è durata tre ore.", question: "How long did the meeting last?", options: ["three hours", "two hours", "three days", "an hour"], correctIndex: 0, explanation: "\"Tre ore\"." },
      { type: "dictation", audio: "Il treno è partito e siamo rimasti in stazione.", explanation: "\"Partito\" (il treno), \"rimasti\" (noi)." },
      { type: "speak", text: "Sono uscito alle otto, sono andato al cinema e sono tornato a mezzanotte.", prompt: "Say it as a man: I went out at eight, went to the cinema and came back at midnight.", tip: "-o on every participle.", explanation: "Three essere verbs." },
    ],
  },
  {
    slug: "a2-past-essere-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Reflexives in the Past",
    summary: "Daily routines retold in the past with reflexive verbs.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Yesterday's routine",
        body: [
          "Turn routines into the past: \"Mi alzo\" → \"Mi sono alzato / alzata\". The pronoun stays in front, \"essere\" follows, and the participle agrees.",
        ],
        examples: [
          { es: "Mi sono fatto la doccia.", en: "I had a shower." },
          { es: "Ci siamo preparati per la cena.", en: "We got ready for dinner." },
          { es: "Si è truccata in bagno.", en: "She put on her make-up in the bathroom." },
          { es: "Vi siete messi d'accordo?", en: "Have you come to an agreement?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had a shower. (a man speaking)", answer: "Mi sono fatto la doccia.", altAnswers: ["Ho fatto la doccia.", "Io mi sono fatto la doccia."], explanation: "\"Farsi la doccia\" (reflexive) or \"fare la doccia\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She put on her make-up in the bathroom.", answer: "Si è truccata in bagno.", altAnswers: ["Lei si è truccata in bagno."], explanation: "\"Truccarsi\" = to put on make-up." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We got ready for dinner.", answer: "Ci siamo preparati per la cena.", altAnswers: ["Ci siamo preparate per la cena."], explanation: "\"Prepararsi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you come to an agreement? (plural)", answer: "Vi siete messi d'accordo?", altAnswers: ["Vi siete messe d'accordo?"], explanation: "\"Mettersi d'accordo\" = to agree." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco shaved quickly.", answer: "Marco si è fatto la barba in fretta.", altAnswers: ["Marco si è rasato in fretta."], explanation: "\"Farsi la barba\" = to shave." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children got dressed on their own.", answer: "I bambini si sono vestiti da soli.", explanation: "\"Da soli\" = on their own." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you sit down? (to a woman you call tu)", answer: "Ti sei seduta?", altAnswers: ["Tu ti sei seduta?"], explanation: "\"Sedersi\" → \"seduto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I went to bed at eleven. (a woman speaking)", answer: "Sono andata a letto alle undici.", altAnswers: ["Mi sono coricata alle undici."], explanation: "\"Andare a letto\": essere, not reflexive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia and Sara woke up late.", answer: "Giulia e Sara si sono svegliate tardi.", explanation: "Two women: \"-e\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My father [rested] after lunch.", sentence: "Mio padre ___ dopo pranzo.", answer: "si è riposato", explanation: "\"Riposato\" agrees with \"padre\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We hurried].", sentence: "___.", answer: "Ci siamo sbrigati", altAnswers: ["Ci siamo sbrigate", "Ci siamo affrettati"], explanation: "\"Sbrigarsi\" = to hurry." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Did you brush your teeth]? (to a boy)", sentence: "___ i denti?", answer: "Ti sei lavato", explanation: "\"Lavarsi i denti\"." },
      { type: "word-order", prompt: "Put the words in order to say: Chiara got up and had a shower.", words: ["Chiara", "si", "è", "alzata", "e", "si", "è", "fatta", "la", "doccia."], translation: "Chiara got up and had a shower.", explanation: "\"Si è\" + \"-a\" each time." },
      { type: "multiple-choice", question: "We (a mixed group) got bored. Which is right?", options: ["Ci siamo annoiati.", "Ci siamo annoiate.", "Ci abbiamo annoiati.", "Siamo ci annoiati."], correctIndex: 0, explanation: "Mixed: \"-i\"." },
      { type: "listen-choose", audio: "Si sono alzati alle sei.", question: "Who got up at six?", options: ["they", "he", "she", "I"], correctIndex: 0, explanation: "\"Si sono\" + \"-i\"." },
      { type: "dictation", audio: "Mi sono svegliata, mi sono lavata e mi sono vestita.", explanation: "Three reflexives with \"-a\"." },
      { type: "speak", text: "Ieri mi sono alzato alle sette, mi sono fatto la doccia e mi sono riposato la sera.", prompt: "Say it as a man: Yesterday I got up at seven, had a shower and rested in the evening.", tip: "\"Mi sono\" every time.", explanation: "Three reflexive verbs in -o." },
    ],
  },
  {
    slug: "a2-past-essere-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Mi È Piaciuto",
    summary: "Say what you liked on twelve trips, agreeing piaciuto with the thing.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "What did you like?",
        body: [
          "Agree \"piaciuto\" with what was liked: \"il museo\" → \"piaciuto\", \"la chiesa\" → \"piaciuta\", \"i ristoranti\" → \"piaciuti\", \"le piazze\" → \"piaciute\". Plural things take \"sono\".",
        ],
        examples: [
          { es: "A Torino mi è piaciuto il Museo Egizio.", en: "In Turin I liked the Egyptian Museum." },
          { es: "A Lecce ci sono piaciute le chiese.", en: "In Lecce we liked the churches." },
          { es: "A Verona le è piaciuta l'Arena.", en: "In Verona she liked the Arena." },
          { es: "A Napoli gli sono piaciuti i musei.", en: "In Naples he liked the museums." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Lecce we liked the churches.", answer: "A Lecce ci sono piaciute le chiese.", altAnswers: ["A Lecce le chiese ci sono piaciute."], explanation: "\"Chiese\" feminine plural." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Verona she liked the Arena.", answer: "A Verona le è piaciuta l'Arena.", altAnswers: ["A Verona l'Arena le è piaciuta."], explanation: "\"Le\" = to her; \"Arena\" feminine." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Turin I liked the Egyptian Museum.", answer: "A Torino mi è piaciuto il Museo Egizio.", altAnswers: ["A Torino il Museo Egizio mi è piaciuto."], explanation: "\"Museo\" masculine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Naples he liked the museums.", answer: "A Napoli gli sono piaciuti i musei.", altAnswers: ["A Napoli i musei gli sono piaciuti."], explanation: "\"Gli\" = to him." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you like Florence? (to a friend)", answer: "Ti è piaciuta Firenze?", altAnswers: ["Firenze ti è piaciuta?"], explanation: "Cities: feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Bologna we liked the food a lot.", answer: "A Bologna ci è piaciuto molto il cibo.", altAnswers: ["A Bologna il cibo ci è piaciuto molto.", "A Bologna ci è piaciuto tanto il cibo."], explanation: "\"Il cibo\": \"piaciuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Venice I didn't like the crowds.", answer: "A Venezia non mi è piaciuta la folla.", altAnswers: ["A Venezia la folla non mi è piaciuta."], explanation: "\"La folla\" is singular in Italian." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Palermo they liked the markets.", answer: "A Palermo gli sono piaciuti i mercati.", altAnswers: ["A Palermo sono piaciuti loro i mercati.", "A Palermo i mercati gli sono piaciuti."], explanation: "\"Gli\" = to them in speech." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Cagliari I liked the beaches.", answer: "A Cagliari mi sono piaciute le spiagge.", altAnswers: ["A Cagliari le spiagge mi sono piaciute."], explanation: "\"Spiagge\" feminine plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Milan we enjoyed walking in the centre.", answer: "A Milano ci è piaciuto camminare in centro.", altAnswers: ["A Milano ci è piaciuto passeggiare in centro."], explanation: "Infinitive: \"piaciuto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Siena [Marco liked] the square.", sentence: "A Siena ___ la piazza.", answer: "a Marco è piaciuta", explanation: "\"Piazza\" feminine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Bari [did you like] the old town? (plural)", sentence: "A Bari ___ la città vecchia?", answer: "vi è piaciuta", explanation: "\"Vi\" = to you (plural)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Genoa [I liked] the focaccia.", sentence: "A Genova ___ la focaccia.", answer: "mi è piaciuta", explanation: "\"Focaccia\" feminine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Trieste [we liked] the cafés.", sentence: "A Trieste ___ i caffè.", answer: "ci sono piaciuti", explanation: "\"I caffè\" masculine plural." },
      { type: "multiple-choice", question: "I liked the gardens (i giardini). Which is right?", options: ["Mi sono piaciuti i giardini.", "Mi è piaciuto i giardini.", "Mi sono piaciute i giardini.", "Ho piaciuto i giardini."], correctIndex: 0, explanation: "Masculine plural: \"sono piaciuti\"." },
      { type: "listen-choose", audio: "Non ci è piaciuto l'albergo.", question: "What didn't they like?", options: ["the hotel", "the food", "the city", "the beaches"], correctIndex: 0, explanation: "\"L'albergo\" = the hotel." },
      { type: "dictation", audio: "Mi è piaciuta Roma, ma mi sono piaciuti di più i musei.", explanation: "\"Piaciuta\", \"piaciuti\"." },
      { type: "speak", text: "A Firenze mi sono piaciuti i musei e mi è piaciuta la cucina.", prompt: "Say it in Italian: In Florence I liked the museums and the food.", tip: "pia-CIU-ti, pia-CIU-ta.", explanation: "Two agreements." },
    ],
  },
];
