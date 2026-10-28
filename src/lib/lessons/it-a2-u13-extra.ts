// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u13-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 13 Extra Practice: Commands, Part 2: Lei. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U13_EXTRA: Lesson[] = [
  {
    slug: "a2-lei-imperative-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Lei Commands",
    summary: "Fresh Lei commands at the hotel, the office and the station.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Polite instructions",
        body: [
          "-are → \"-i\", -ere / -ire → \"-a\", irregulars from the io form (\"vada\", \"venga\", \"tenga\"), and \"stia\", \"dia\", \"abbia\", \"sia\". Pronouns before: \"si accomodi\", \"lo compili\".",
        ],
        examples: [
          { es: "Lasci la chiave alla reception.", en: "Leave the key at reception." },
          { es: "Prenoti la colazione entro le 22:00.", en: "Book breakfast by 22:00." },
          { es: "Mostri il documento, per favore.", en: "Show your ID, please." },
          { es: "Ci dia un momento.", en: "Give us a moment." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Leave the key at reception. (to a guest)", answer: "Lasci la chiave alla reception.", altAnswers: ["Lasci la chiave in reception."], explanation: "\"Lasciare\" → \"lasci\": one i." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Show your ID, please.", answer: "Mostri il documento, per favore.", altAnswers: ["Per favore, mostri il documento.", "Mi mostri il documento, per favore."], explanation: "\"Mostrare\" → \"mostri\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Book breakfast by ten p.m.", answer: "Prenoti la colazione entro le 22:00.", altAnswers: ["Prenoti la colazione entro le ventidue.", "Prenoti la colazione entro le dieci di sera."], explanation: "\"Prenotare\" → \"prenoti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Give us a moment, please.", answer: "Ci dia un momento, per favore.", altAnswers: ["Ci dia un attimo, per favore."], explanation: "\"Ci\" + \"dia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Choose the room you prefer. (to a guest)", answer: "Scelga la camera che preferisce.", explanation: "\"Scelgo\" → \"scelga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Read the instructions carefully.", answer: "Legga attentamente le istruzioni.", altAnswers: ["Legga le istruzioni attentamente.", "Legga bene le istruzioni."], explanation: "\"Leggo\" → \"legga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come back after lunch. (to a client)", answer: "Torni dopo pranzo.", altAnswers: ["Ritorni dopo pranzo.", "Torni dopo il pranzo."], explanation: "\"Torni\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't leave your luggage unattended.", answer: "Non lasci il bagaglio incustodito.", altAnswers: ["Non lasci i bagagli incustoditi."], explanation: "Lei negative: \"non lasci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Hold the door, please. (to a stranger)", answer: "Tenga la porta, per favore.", altAnswers: ["Per favore, tenga la porta."], explanation: "\"Tengo\" → \"tenga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Know that we close at seven. (to a customer)", answer: "Sappia che chiudiamo alle sette.", explanation: "\"Sapere\" → \"sappia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Wait for me] outside, please.", sentence: "___ fuori, per favore.", answer: "Mi aspetti", explanation: "\"Mi\" + \"aspetti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Go] to window three.", sentence: "___ allo sportello tre.", answer: "Vada", explanation: "\"Vado\" → \"vada\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Use] the lift on the right.", sentence: "___ l'ascensore a destra.", answer: "Usi", altAnswers: ["Prenda"], explanation: "\"Usare\" → \"usi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Remember] the receipt!", sentence: "___ lo scontrino!", answer: "Si ricordi", altAnswers: ["Non dimentichi"], explanation: "\"Ricordarsi\" → \"si ricordi\"." },
      { type: "listen-choose", audio: "Si accomodi in sala d'attesa.", question: "What should you do?", options: ["take a seat in the waiting room", "go to the cash desk", "come back later", "wait outside"], correctIndex: 0, explanation: "\"Sala d'attesa\" = waiting room." },
      { type: "dictation", audio: "Lasci la chiave e torni dopo pranzo.", explanation: "\"Lasci\", \"torni\": -are Lei commands." },
      { type: "speak", text: "Buonasera, mi dia il documento e scelga la camera.", prompt: "At hotel reception, say in Italian: Good evening, give me your ID and choose the room.", tip: "\"Scelga\": SCEL-ga, the sc is soft like sh.", explanation: "\"Mi dia\", \"scelga\"." },
    ],
  },
  {
    slug: "a2-lei-imperative-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Tu or Lei?",
    summary: "Mixed situations where you choose between tu and Lei commands.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Read the situation",
        body: [
          "Friends, family, children, classmates → tu. Shop staff, customers, officials, older strangers → Lei. A title (\"signora\", \"dottore\", \"professore\") is a strong sign of Lei.",
        ],
        examples: [
          { es: "Professore, ripeta, per favore.", en: "Professor, please repeat." },
          { es: "Mamma, ripeti, per favore.", en: "Mum, say it again, please." },
          { es: "Nonna, siediti qui!", en: "Grandma, sit here!" },
          { es: "Signora, si sieda qui!", en: "Madam, sit here!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandma, sit here!", answer: "Nonna, siediti qui!", altAnswers: ["Nonna, siediti qua!"], explanation: "Family → tu, even grandparents." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Professor, please repeat.", answer: "Professore, ripeta, per favore.", altAnswers: ["Professore, può ripetere, per favore?"], explanation: "A title → Lei." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Mum, look! (to your mother)", answer: "Mamma, guarda!", explanation: "Family: tu." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Look, sir, there's a mistake on the bill.", answer: "Guardi, signore, c'è un errore nel conto.", altAnswers: ["Guardi, c'è un errore nel conto."], explanation: "Lei: \"guardi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come with me, Chiara.", answer: "Vieni con me, Chiara.", explanation: "Tu: \"vieni\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come with me, madam.", answer: "Venga con me, signora.", explanation: "Lei: \"venga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't open it, Luca! (the parcel)", answer: "Non aprirlo, Luca!", altAnswers: ["Non lo aprire, Luca!"], explanation: "Tu negative + pronoun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't open it, sir! (the parcel)", answer: "Non lo apra, signore!", explanation: "Lei negative: pronoun before." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Doctor, [tell me] the truth.", sentence: "Dottore, ___ la verità.", answer: "mi dica", explanation: "Lei: \"mi dica\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Dad, [tell me] the truth.", sentence: "Papà, ___ la verità.", answer: "dimmi", explanation: "Tu: \"dimmi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Excuse me], is this the bus for the airport? (to a stranger)", sentence: "___, è questo l'autobus per l'aeroporto?", answer: "Scusi", altAnswers: ["Mi scusi"], explanation: "Stranger → \"scusi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Excuse me], I didn't see you! (to a classmate)", sentence: "___, non ti ho visto!", answer: "Scusa", altAnswers: ["Scusami"], explanation: "Classmate → \"scusa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Be careful] on the stairs, Mr Conti.", sentence: "___ sulle scale, signor Conti.", answer: "Stia attento", altAnswers: ["Faccia attenzione"], explanation: "Lei: \"stia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Be careful] on the stairs, Sofia.", sentence: "___ sulle scale, Sofia.", answer: "Stai attenta", altAnswers: ["Sta' attenta", "Fai attenzione", "Fa' attenzione"], explanation: "Tu: \"stai\" / \"sta'\"." },
      { type: "multiple-choice", question: "A new colleague, older than you, still uses Lei. How do you ask her to wait?", options: ["Aspetti un attimo!", "Aspetta un attimo!", "Aspettare un attimo!", "Aspettate un attimo!"], correctIndex: 0, explanation: "Lei: \"aspetti\"." },
      { type: "dictation", audio: "Nonna, siediti! Signora, si sieda anche Lei.", explanation: "Tu then Lei." },
      { type: "speak", text: "Scusi, signore, mi faccia passare. Luca, vieni!", prompt: "On a crowded bus, say in Italian: Excuse me, sir, let me through. Luca, come on!", tip: "\"Mi faccia\": no doubling with the Lei form.", explanation: "Lei to the stranger, tu to your friend." },
    ],
  },
  {
    slug: "a2-lei-imperative-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Signs and Recipes",
    summary: "Infinitive instructions on signs, labels and recipe cards.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "The impersonal infinitive",
        body: [
          "Signs, labels and recipe cards use the infinitive: \"Lavare a 30 gradi\", \"Tenere lontano dalla portata dei bambini\", \"Servire caldo\". Bans: \"Non\" + infinitive or \"Vietato\" + infinitive.",
        ],
        examples: [
          { es: "Lavare a 30 gradi.", en: "Wash at 30 degrees." },
          { es: "Tenere fuori dalla portata dei bambini.", en: "Keep out of the reach of children." },
          { es: "Servire caldo.", en: "Serve hot." },
          { es: "Vietato dare da mangiare agli animali.", en: "Do not feed the animals." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Write it as on a label.", source: "Wash at 30 degrees.", answer: "Lavare a 30 gradi.", altAnswers: ["Lavare a trenta gradi."], explanation: "Infinitive on a label." },
          { type: "translate", direction: "en-es", prompt: "Write it as on a recipe card.", source: "Serve hot.", answer: "Servire caldo.", explanation: "Infinitive in a recipe." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Write it as on a label.", source: "Keep out of the reach of children.", answer: "Tenere fuori dalla portata dei bambini.", altAnswers: ["Tenere lontano dalla portata dei bambini."], explanation: "A standard medicine label." },
      { type: "translate", direction: "en-es", prompt: "Write the sign in Italian.", source: "Do not feed the animals.", answer: "Vietato dare da mangiare agli animali.", altAnswers: ["Non dare da mangiare agli animali."], explanation: "\"Dare da mangiare\" = to feed." },
      { type: "translate", direction: "en-es", prompt: "Write it as on a recipe card.", source: "Boil the water.", answer: "Far bollire l'acqua.", altAnswers: ["Fare bollire l'acqua.", "Portare l'acqua a ebollizione."], explanation: "\"Far bollire\" = to bring to the boil." },
      { type: "translate", direction: "en-es", prompt: "Write it as on a recipe card.", source: "Add the eggs one at a time.", answer: "Aggiungere le uova una alla volta.", altAnswers: ["Aggiungere le uova una per volta."], explanation: "\"Le uova\" is feminine: \"una alla volta\"." },
      { type: "translate", direction: "en-es", prompt: "Write the sign in Italian.", source: "Do not lean out.", answer: "Non sporgersi.", altAnswers: ["È pericoloso sporgersi."], explanation: "Reflexive infinitive." },
      { type: "translate", direction: "en-es", prompt: "Write it as on a label.", source: "Do not iron.", answer: "Non stirare.", explanation: "\"Stirare\" = to iron." },
      { type: "translate", direction: "en-es", prompt: "Write the sign in Italian.", source: "Keep right.", answer: "Tenere la destra.", explanation: "On escalators and roads." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Stir] well and serve.", sentence: "___ bene e servire.", answer: "Mescolare", altAnswers: ["Girare"], explanation: "Recipe infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Store] in a cool, dry place.", sentence: "___ in luogo fresco e asciutto.", answer: "Conservare", explanation: "A standard food label." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Press] the button and wait.", sentence: "___ il pulsante e attendere.", answer: "Premere", explanation: "\"Premere\" = to press; \"attendere\" = to wait (formal)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[No] swimming.", sentence: "___ fare il bagno.", answer: "Vietato", altAnswers: ["È vietato"], explanation: "\"Vietato\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Bake] in the oven for 40 minutes.", sentence: "___ in forno per 40 minuti.", answer: "Cuocere", explanation: "\"Cuocere in forno\" = to bake." },
      { type: "matching", instructions: "Match the label to its meaning.", pairs: [{ left: "Agitare prima dell'uso", right: "Shake before use" }, { left: "Non stirare", right: "Do not iron" }, { left: "Servire freddo", right: "Serve cold" }, { left: "Tenere la destra", right: "Keep right" }, { left: "Premere il pulsante", right: "Press the button" }], explanation: "Labels and signs in the infinitive." },
      { type: "listen-choose", audio: "Cuocere in forno per quaranta minuti.", question: "How long does it bake?", options: ["forty minutes", "fourteen minutes", "four minutes", "an hour and forty minutes"], correctIndex: 0, explanation: "\"Quaranta\" = forty." },
      { type: "dictation", audio: "Mescolare bene e servire caldo.", explanation: "Two recipe infinitives." },
      { type: "speak", text: "Premere il pulsante e attendere il segnale.", prompt: "Read the notice aloud in Italian: Press the button and wait for the signal.", tip: "PRE-me-re: stress on the first syllable.", explanation: "Infinitive instructions." },
    ],
  },
];
