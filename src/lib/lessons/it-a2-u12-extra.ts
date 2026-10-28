// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u12-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 12 Extra Practice: Commands, Part 1. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U12_EXTRA: Lesson[] = [
  {
    slug: "a2-imperative-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Tu and Voi Commands",
    summary: "Fresh sentences with tu and voi commands at home, at school and in town.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "One friend or a group?",
        body: [
          "Tu: \"-a\" for -are verbs, \"-i\" for the rest (\"-isci\" for -isc- verbs). Voi: the present (\"-ate\", \"-ete\", \"-ite\"), with \"siate\" and \"abbiate\". New verbs: \"riempire\" (to fill), \"apparecchiare\" (to set the table), \"attraversare\" (to cross), \"spostare\" (to move).",
        ],
        examples: [
          { es: "Apparecchia la tavola, per favore.", en: "Set the table, please." },
          { es: "Attraversate sulle strisce!", en: "Cross at the zebra crossing! (plural)" },
          { es: "Riempi la bottiglia d'acqua.", en: "Fill the water bottle." },
          { es: "Spostate la macchina, è in divieto!", en: "Move the car, it's in a no-parking zone! (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Set the table, please. (to your son)", answer: "Apparecchia la tavola, per favore.", altAnswers: ["Per favore, apparecchia la tavola."], explanation: "-are verb: \"apparecchia\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cross at the zebra crossing! (to two children)", answer: "Attraversate sulle strisce!", explanation: "Voi: \"attraversate\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fill the water bottle. (to a friend)", answer: "Riempi la bottiglia d'acqua.", altAnswers: ["Riempi la bottiglia dell'acqua."], explanation: "\"Riempire\" → \"riempi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Move the car! (to two friends)", answer: "Spostate la macchina!", altAnswers: ["Spostate l'auto!"], explanation: "Voi present: \"spostate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wash your hands before dinner. (to a child)", answer: "Lavati le mani prima di cena.", altAnswers: ["Lavati le mani prima della cena."], explanation: "\"Lavarsi le mani\": \"lava\" + \"ti\"; no word for your." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Turn up the volume! (to a friend)", answer: "Alza il volume!", explanation: "\"Alzare\" → \"alza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Read the instructions first. (to friends)", answer: "Leggete prima le istruzioni.", altAnswers: ["Prima leggete le istruzioni.", "Leggete le istruzioni prima."], explanation: "Voi: \"leggete\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Be careful on the stairs! (to a group)", answer: "State attenti sulle scale!", altAnswers: ["State attente sulle scale!"], explanation: "Voi of \"stare\": \"state\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Serve the soup, it's ready. (to a friend)", answer: "Servi la zuppa, è pronta.", altAnswers: ["Servi la minestra, è pronta."], explanation: "\"Servire\" → \"servi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Choose a seat by the window. (to a friend)", answer: "Scegli un posto vicino al finestrino.", altAnswers: ["Scegli un posto vicino alla finestra.", "Scegli un posto al finestrino."], explanation: "\"Scegliere\" → \"scegli\"; \"il finestrino\" is a train or car window." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Tidy up] your room! (to a child)", sentence: "___ la tua camera!", answer: "Metti in ordine", altAnswers: ["Riordina", "Sistema"], explanation: "\"Mettere in ordine\" = to tidy up." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Send] the photos to everyone! (to friends)", sentence: "___ le foto a tutti!", answer: "Mandate", altAnswers: ["Inviate"], explanation: "Voi: \"mandate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Finish] your coffee, we're leaving! (to a friend)", sentence: "___ il caffè, partiamo!", answer: "Finisci", explanation: "-isc- verb: \"finisci\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Be] quiet, the film is starting! (to friends)", sentence: "___ zitti, comincia il film!", answer: "State", explanation: "\"Stare zitti\" = to be quiet." },
      { type: "listen-choose", audio: "Spegnete i telefoni, per favore.", question: "What does it mean?", options: ["Switch off your phones, please. (to a group)", "Switch off your phone, please. (to one friend)", "Don't switch off your phones.", "We're switching off our phones."], correctIndex: 0, explanation: "\"Spegnete\" = voi command." },
      { type: "dictation", audio: "Apparecchia la tavola e riempi i bicchieri.", explanation: "\"Apparecchia\" (-are), \"riempi\" (-ire)." },
      { type: "speak", text: "Ragazzi, lavatevi le mani e venite a tavola!", prompt: "Say it in Italian to your children: Kids, wash your hands and come to the table!", tip: "la-VA-te-vi: stress on the second syllable.", explanation: "Voi commands, one reflexive." },
    ],
  },
  {
    slug: "a2-imperative-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Negative Commands",
    summary: "Fresh negative commands for tu, noi and voi.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Don't, in three persons",
        body: [
          "Tu: \"non\" + infinitive (\"non fumare\"). Noi and voi: \"non\" + the form (\"non fumiamo\", \"non fumate\"). Short forms disappear in the negative: \"non andare\", \"non fare\", \"non dire\", \"non essere\".",
        ],
        examples: [
          { es: "Non fare rumore, i vicini dormono.", en: "Don't make noise, the neighbours are asleep." },
          { es: "Non andate via, è presto!", en: "Don't go, it's early! (plural)" },
          { es: "Non diciamo niente alla nonna.", en: "Let's not say anything to Grandma." },
          { es: "Non lasciare la bici fuori.", en: "Don't leave the bike outside." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't make noise, the neighbours are asleep. (to a friend)", answer: "Non fare rumore, i vicini dormono.", explanation: "\"Non fare\", not \"non fa'\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't go, it's early! (to friends)", answer: "Non andate via, è presto!", explanation: "Voi negative: \"non andate\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't leave the bike outside. (to a friend)", answer: "Non lasciare la bici fuori.", altAnswers: ["Non lasciare la bicicletta fuori."], explanation: "\"Non lasciare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's not say anything to Grandma.", answer: "Non diciamo niente alla nonna.", altAnswers: ["Non diciamo nulla alla nonna."], explanation: "Noi negative: \"non diciamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't smoke here. (to a friend)", answer: "Non fumare qui.", altAnswers: ["Non fumare qua."], explanation: "\"Non fumare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't be late! (to a friend)", answer: "Non fare tardi!", altAnswers: ["Non arrivare in ritardo!"], explanation: "\"Fare tardi\" = to be late." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't drink and drive! (to friends)", answer: "Non bevete se guidate!", explanation: "Voi: \"non bevete\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't go out without an umbrella. (to a friend)", answer: "Non uscire senza ombrello.", altAnswers: ["Non uscire senza l'ombrello."], explanation: "\"Non uscire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's not take the motorway.", answer: "Non prendiamo l'autostrada.", explanation: "\"Non prendiamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't be rude! (to a friend)", answer: "Non essere maleducato!", altAnswers: ["Non essere maleducata!"], explanation: "\"Non essere\", never \"non sii\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Don't throw] paper in the plastic bin. (to a friend)", sentence: "___ la carta nella plastica.", answer: "Non buttare", explanation: "\"Buttare\" = to throw away." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Don't run] in the corridor! (to children)", sentence: "___ nel corridoio!", answer: "Non correte", explanation: "Voi: \"non correte\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Don't give] chocolate to the dog! (to a friend)", sentence: "___ il cioccolato al cane!", answer: "Non dare", explanation: "\"Non dare\", not \"non da'\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Don't be] afraid, it's easy. (to a friend)", sentence: "___ paura, è facile.", answer: "Non avere", explanation: "\"Non avere paura\" = don't be afraid." },
      { type: "multiple-choice", question: "Your friend wants to leave the party. Which is correct?", options: ["Non andare via!", "Non va' via!", "Non vai via!", "Non vada via!"], correctIndex: 0, explanation: "Negative \"tu\": infinitive \"andare\". \"Non vai via\" is a statement or question." },
      { type: "dictation", audio: "Non fare rumore e non correre.", explanation: "Two negative \"tu\" commands." },
      { type: "speak", text: "Non preoccuparti, non è niente. Non avere paura!", prompt: "Comfort a friend in Italian: Don't worry, it's nothing. Don't be afraid!", tip: "Calm, falling tone.", explanation: "Negative \"tu\" commands with the infinitive." },
    ],
  },
  {
    slug: "a2-imperative-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Commands with Pronouns",
    summary: "Fresh commands with attached, doubled and placed pronouns.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Where the pronoun goes",
        body: [
          "Positive: attached (\"prendilo\", \"aspettateci\", \"sediamoci\"). Short forms double (\"dimmi\", \"fallo\", \"vacci\", \"dammelo\" is a preview of two pronouns together). Negative tu: \"non dirlo\" or \"non lo dire\".",
        ],
        examples: [
          { es: "Aspettateci al bar!", en: "Wait for us at the bar! (plural)" },
          { es: "Mandami un messaggio.", en: "Send me a message." },
          { es: "Non dirlo a nessuno!", en: "Don't tell anyone!" },
          { es: "Riposati un po'.", en: "Rest a bit." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wait for us at the bar! (to friends)", answer: "Aspettateci al bar!", explanation: "Voi + \"ci\": \"aspettateci\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Send me a message. (to a friend)", answer: "Mandami un messaggio.", altAnswers: ["Scrivimi un messaggio."], explanation: "\"Manda\" + \"mi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rest a bit. (to a friend)", answer: "Riposati un po'.", explanation: "\"Riposa\" + \"ti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't tell anyone! (to a friend)", answer: "Non dirlo a nessuno!", altAnswers: ["Non lo dire a nessuno!"], explanation: "Attached or before." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Give me your number. (to a friend)", answer: "Dammi il tuo numero.", explanation: "\"Da'\" + \"mi\" = \"dammi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's meet at six.", answer: "Vediamoci alle sei.", altAnswers: ["Incontriamoci alle sei."], explanation: "Noi + \"ci\": \"vediamoci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Calm down! (to a friend)", answer: "Calmati!", explanation: "\"Calma\" + \"ti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Phone him tonight. (to a friend)", answer: "Telefonagli stasera.", altAnswers: ["Chiamalo stasera."], explanation: "\"Telefonare a lui\" → \"gli\"; \"chiamare\" takes \"lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The milk? Buy it at the supermarket. (to a friend)", answer: "Il latte? Compralo al supermercato.", explanation: "\"Compra\" + \"lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't wake her up! (to friends)", answer: "Non svegliatela!", altAnswers: ["Non la svegliate!"], explanation: "Voi negative: attached or before." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do me] a favour. (to a friend)", sentence: "___ un favore.", answer: "Fammi", explanation: "\"Fa'\" + \"mi\" doubles." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "These shoes? [Try them on]! (to a friend)", sentence: "Queste scarpe? ___!", answer: "Provale", explanation: "\"Prova\" + \"le\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Write to us] from Sicily! (to friends)", sentence: "___ dalla Sicilia!", answer: "Scriveteci", explanation: "\"Scrivete\" + \"ci\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Tell her] I'm sorry. (to a friend)", sentence: "___ che mi dispiace.", answer: "Dille", explanation: "\"Di'\" + \"le\" doubles: \"dille\"." },
      { type: "listen-choose", audio: "Dille che mi dispiace.", question: "What did you hear?", options: ["Dille che mi dispiace.", "Digli che mi dispiace.", "Dimmi che ti dispiace.", "Dile che mi dispiace."], correctIndex: 0, explanation: "\"Dille\" = tell her, with a long l." },
      { type: "dictation", audio: "Calmati e siediti qui.", explanation: "Two reflexive \"tu\" commands." },
      { type: "speak", text: "Vediamoci alle sei. Mandami un messaggio quando arrivi!", prompt: "Say it in Italian to a friend: Let's meet at six. Send me a message when you arrive!", tip: "ve-DIA-mo-ci: the stress stays on the verb.", explanation: "\"Vediamoci\" (noi) and \"mandami\" (tu)." },
    ],
  },
];
