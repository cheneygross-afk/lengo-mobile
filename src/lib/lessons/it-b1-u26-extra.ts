// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u26-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 26 Extra Practice: Health and the SSN. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U26_EXTRA: Lesson[] = [
  {
    slug: "b1-health-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Symptoms",
    summary: "Fresh sentences describing symptoms, their duration and how they've changed.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Better, worse, the same",
        body: [
          "To tell the doctor how things have changed: \"va meglio\" (it's better), \"è peggiorato\" (it's gotten worse), \"è uguale\", \"è passato\" (it's gone). \"Peggiorare\" and \"migliorare\" take \"essere\" when the illness is the subject: \"La tosse è peggiorata\".",
        ],
        examples: [
          { es: "La tosse è peggiorata negli ultimi due giorni.", en: "The cough has gotten worse in the last two days." },
          { es: "Il mal di testa è passato, ma ho ancora la nausea.", en: "The headache's gone, but I still feel sick." },
          { es: "Oggi va un po' meglio.", en: "It's a bit better today." },
          { es: "Ho un'eruzione sulle braccia da sabato.", en: "I've had a rash on my arms since Saturday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cough has gotten worse.", answer: "La tosse è peggiorata.", altAnswers: ["La tosse è aumentata."], explanation: "\"Peggiorare\" takes \"essere\" here; \"peggiorata\" agrees with \"tosse\"." },
          { type: "listen-choose", audio: "Il mal di testa è passato, ma ho ancora la nausea.", question: "How is the patient now?", options: ["no headache, but still nauseous", "headache and nausea", "no symptoms", "worse headache"], correctIndex: 0, explanation: "\"È passato\" = it's gone." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a bit better today.", answer: "Oggi va un po' meglio.", altAnswers: ["Oggi sto un po' meglio.", "Va un po' meglio oggi.", "Oggi va un pochino meglio."], explanation: "\"Un po'\" with an apostrophe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The fever has gone, but I'm still tired.", answer: "La febbre è passata, ma sono ancora stanco.", altAnswers: ["La febbre è passata, ma sono ancora stanca.", "La febbre è passata, però sono ancora stanco.", "La febbre è passata, però sono ancora stanca."], explanation: "\"Passata\" agrees with \"febbre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've had a rash since Saturday.", answer: "Ho uno sfogo da sabato.", altAnswers: ["Ho un'eruzione cutanea da sabato.", "Da sabato ho uno sfogo.", "Ho un'eruzione da sabato."], explanation: "\"Uno sfogo\": \"uno\" before s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My neck hurts when I turn my head.", answer: "Mi fa male il collo quando giro la testa.", altAnswers: ["Il collo mi fa male quando giro la testa.", "Ho male al collo quando giro la testa."], explanation: "\"Girare\" = to turn." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't sleep because of the cough.", answer: "Non riesco a dormire per la tosse.", altAnswers: ["Non riesco a dormire a causa della tosse.", "Per la tosse non riesco a dormire."], explanation: "\"Per\" or \"a causa di\" = because of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My eyes are itchy.", answer: "Mi prudono gli occhi.", altAnswers: ["Gli occhi mi prudono.", "Ho prurito agli occhi."], explanation: "\"Prudere\" agrees with \"occhi\": \"prudono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've lost my voice.", answer: "Ho perso la voce.", altAnswers: ["Sono senza voce.", "Mi è andata via la voce."], explanation: "\"Perdere la voce\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The pain is stronger in the morning.", answer: "Il dolore è più forte la mattina.", altAnswers: ["Il dolore è più forte di mattina.", "La mattina il dolore è più forte."], explanation: "\"La mattina\" = in the morning(s)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I feel] better than yesterday.", sentence: "___ meglio di ieri.", answer: "Mi sento", altAnswers: ["Sto"], explanation: "\"Sentirsi\" or \"stare\" + \"meglio\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My knee [has swollen].", sentence: "Il ginocchio ___.", answer: "si è gonfiato", altAnswers: ["è gonfio", "è gonfiato"], explanation: "\"Gonfiarsi\" = to swell." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I've been coughing] since Tuesday.", sentence: "___ da martedì.", answer: "Tossisco", altAnswers: ["Ho la tosse"], explanation: "\"Tossire\" (-isc-): \"tossisco\"." },
      { type: "word-order", prompt: "Put the words in order to say: The headache has gone.", words: ["Il", "mal", "di", "testa", "è", "passato."], translation: "The headache has gone.", explanation: "\"Passare\" with \"essere\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "è peggiorato", right: "it's gotten worse" }, { left: "va meglio", right: "it's better" }, { left: "è passato", right: "it's gone" }, { left: "si è gonfiato", right: "it has swollen" }, { left: "mi prude", right: "it itches" }], explanation: "How symptoms change." },
      { type: "multiple-choice", question: "\"Ho ancora un po' di tosse\" means ...", options: ["I still have a bit of a cough.", "I don't have a cough any more.", "I have a cough again.", "I've had a cough for a while."], correctIndex: 0, explanation: "\"Ancora\" = still." },
      { type: "dictation", audio: "La tosse è peggiorata negli ultimi due giorni.", explanation: "\"Peggiorata\": double g." },
      { type: "speak", text: "Oggi va un po' meglio: la febbre è passata, ma ho ancora mal di gola.", prompt: "Update the doctor: It's a bit better today: the fever's gone, but I still have a sore throat.", tip: "Pause at the colon, then list.", explanation: "\"Va meglio\", \"è passata\", \"ancora\"." },
    ],
  },
  {
    slug: "b1-health-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Prescriptions",
    summary: "Fresh pharmacy conversations and leaflet instructions with prescriptions, doses and generics.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "At the pharmacy counter",
        body: [
          "Pharmacists often offer \"il generico\" (the generic) instead of the brand: \"Vuole il generico? Costa meno\". If you want the brand you pay the difference. \"Da banco\" medicines need no prescription; \"la farmacia di turno\" is the one open at night and on holidays.",
        ],
        examples: [
          { es: "Vuole il generico? Costa meno.", en: "Would you like the generic? It's cheaper." },
          { es: "Preferisco il farmaco di marca.", en: "I prefer the brand-name medicine." },
          { es: "Questo è un farmaco da banco, non serve la ricetta.", en: "This is over the counter, you don't need a prescription." },
          { es: "Qual è la farmacia di turno stanotte?", en: "Which pharmacy is on duty tonight?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Which pharmacy is open tonight?", answer: "Qual è la farmacia di turno stanotte?", altAnswers: ["Quale farmacia è di turno stanotte?", "Quale farmacia è aperta stanotte?"], explanation: "\"Di turno\" = on duty." },
          { type: "listen-choose", audio: "Vuole il generico? Costa meno ed è uguale.", question: "What does the pharmacist offer?", options: ["a cheaper generic", "a free sample", "a stronger medicine", "a different dose"], correctIndex: 0, explanation: "\"Il generico\" = the generic version." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like the generic, please.", answer: "Vorrei il generico, per favore.", altAnswers: ["Prendo il generico, per favore.", "Mi dia il generico, per favore."], explanation: "\"Vorrei\" for a polite order." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here's the prescription code.", answer: "Ecco il codice della ricetta.", altAnswers: ["Ecco il numero della ricetta.", "Questo è il codice della ricetta."], explanation: "\"Ecco\" = here is." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How many times a day should I take it?", answer: "Quante volte al giorno devo prenderlo?", altAnswers: ["Quante volte al giorno lo devo prendere?", "Quante volte al giorno va preso?", "Quante volte al giorno devo prenderla?"], explanation: "\"Lo\" or \"la\" for the medicine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You don't need a prescription for this.", answer: "Per questo non serve la ricetta.", altAnswers: ["Non serve la ricetta per questo.", "Per questo non ci vuole la ricetta."], explanation: "\"Non serve\" = isn't needed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you have it in tablets? (formal)", answer: "Ce l'ha in compresse?", altAnswers: ["Lo ha in compresse?", "Ce l'avete in compresse?", "Ce l'ha in pastiglie?"], explanation: "\"Averlo\" in speech becomes \"ce l'ho, ce l'ha\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It must be taken with water.", answer: "Va preso con l'acqua.", altAnswers: ["Va preso con acqua.", "Va assunto con acqua.", "Deve essere preso con l'acqua."], explanation: "\"Va\" + participle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I take it before going to bed.", answer: "Lo prendo prima di andare a letto.", altAnswers: ["La prendo prima di andare a letto.", "Lo prendo prima di dormire."], explanation: "\"Prima di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've finished the antibiotic.", answer: "Ho finito l'antibiotico.", altAnswers: ["Ho finito la cura antibiotica.", "Ho finito di prendere l'antibiotico."], explanation: "\"La cura\" = course of treatment." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Shake well] before use.", sentence: "___ prima dell'uso.", answer: "Agitare bene", explanation: "Leaflet infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This is [an over-the-counter medicine].", sentence: "Questo è ___.", answer: "un farmaco da banco", explanation: "\"Da banco\": sold over the counter." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I prefer] the brand name.", sentence: "___ quello di marca.", answer: "Preferisco", explanation: "\"Preferire\" (-isc-)." },
      { type: "word-order", prompt: "Put the words in order to say: Do not take on an empty stomach.", words: ["Non", "assumere", "a", "stomaco", "vuoto."], translation: "Do not take on an empty stomach.", explanation: "Leaflet negative: \"non\" + infinitive." },
      { type: "multiple-choice", question: "It's Sunday night. Where do you buy medicine?", options: ["la farmacia di turno", "la parafarmacia del centro commerciale", "il pronto soccorso", "il CUP"], correctIndex: 0, explanation: "Pharmacies take turns to open at night and on holidays." },
      { type: "dictation", audio: "Vuole il generico? Costa meno.", explanation: "\"Generico\": stress on the e, ge-NE-ri-co." },
      { type: "speak", text: "Buonasera, ho una ricetta per un antibiotico. Va bene il generico.", prompt: "At the pharmacy: Good evening, I have a prescription for an antibiotic. The generic is fine.", tip: "\"Antibiotico\": an-ti-bi-O-ti-co.", explanation: "Prescription + accepting the generic." },
    ],
  },
  {
    slug: "b1-health-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Emergencies",
    summary: "Fresh dialogues: calling 112, explaining an accident, and helping someone else.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Calling 112",
        body: [
          "The operator asks: \"Qual è l'emergenza?\", \"Dove si trova?\", \"La persona è cosciente? Respira?\". Answer short and clear: what, where, how many. \"Un'ambulanza\", \"è svenuto\" (he's fainted), \"perde sangue\" (he's bleeding), \"non respira bene\".",
        ],
        examples: [
          { es: "Pronto, c'è stato un incidente in via Roma, all'altezza del numero 40.", en: "Hello, there's been an accident in Via Roma, near number 40." },
          { es: "Un signore è svenuto alla fermata dell'autobus.", en: "A man has fainted at the bus stop." },
          { es: "È cosciente, ma perde sangue dalla testa.", en: "He's conscious, but bleeding from the head." },
          { es: "Mandate subito un'ambulanza, per favore.", en: "Send an ambulance right away, please." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A woman has fainted.", answer: "Una signora è svenuta.", altAnswers: ["Una donna è svenuta."], explanation: "\"Svenire\" takes \"essere\"; \"svenuta\" agrees." },
          { type: "listen-choose", audio: "È cosciente, ma perde sangue dalla testa.", question: "What's the situation?", options: ["conscious but bleeding from the head", "unconscious and not breathing", "conscious and fine", "bleeding from the arm"], correctIndex: 0, explanation: "\"Perdere sangue\" = to bleed." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's been an accident.", answer: "C'è stato un incidente.", altAnswers: ["È successo un incidente."], explanation: "\"C'è stato\": past of \"c'è\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Send an ambulance, please.", answer: "Mandate un'ambulanza, per favore.", altAnswers: ["Mandate subito un'ambulanza, per favore.", "Mandi un'ambulanza, per favore.", "Serve un'ambulanza, per favore."], explanation: "\"Un'ambulanza\": feminine, apostrophe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He isn't breathing well.", answer: "Non respira bene.", altAnswers: ["Lui non respira bene.", "Respira male."], explanation: "\"Respirare\" = to breathe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My friend has cut her hand.", answer: "La mia amica si è tagliata la mano.", altAnswers: ["La mia amica si è tagliata una mano.", "La mia amica si è fatta un taglio alla mano."], explanation: "Reflexive + body part, with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where are you? (formal)", answer: "Dove si trova?", altAnswers: ["Dov'è?", "Lei dove si trova?", "Dove si trova Lei?"], explanation: "\"Trovarsi\" = to be (somewhere)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't move him!", answer: "Non spostatelo!", altAnswers: ["Non lo spostate!", "Non spostarlo!", "Non lo spostare!", "Non lo sposti!"], explanation: "Negative imperative with a pronoun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ambulance is arriving.", answer: "L'ambulanza sta arrivando.", altAnswers: ["L'ambulanza arriva.", "Sta arrivando l'ambulanza."], explanation: "\"Stare\" + gerund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Is she conscious]?", sentence: "___?", answer: "È cosciente", explanation: "\"Cosciente\" = conscious." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [hit] his head on the ground.", sentence: "Ha ___ la testa per terra.", answer: "battuto", explanation: "\"Battere la testa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[He's having trouble] breathing.", sentence: "___ a respirare.", answer: "Fa fatica", altAnswers: ["Ha difficoltà"], explanation: "\"Fare fatica a\" + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: A man has fallen off his scooter.", words: ["Un", "signore", "è", "caduto", "dal", "motorino."], translation: "A man has fallen off his scooter.", explanation: "\"Cadere da\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "svenire", right: "to faint" }, { left: "perdere sangue", right: "to bleed" }, { left: "cosciente", right: "conscious" }, { left: "l'ambulanza", right: "ambulance" }, { left: "l'incidente", right: "accident" }], explanation: "Emergency vocabulary." },
      { type: "multiple-choice", question: "The operator asks \"Dove si trova?\". What do you give?", options: ["the street and a landmark", "your name", "your tax code", "the time"], correctIndex: 0, explanation: "Location first." },
      { type: "dictation", audio: "Un signore è svenuto alla fermata dell'autobus.", explanation: "\"Svenuto\" with \"è\"." },
      { type: "speak", text: "Pronto, c'è stato un incidente in via Garibaldi. Un ragazzo è caduto dalla bici e perde sangue. Mandate un'ambulanza!", prompt: "Call 112: Hello, there's been an accident in Via Garibaldi. A boy has fallen off his bike and is bleeding. Send an ambulance!", tip: "Say the street name slowly and clearly.", explanation: "What, where, how bad, what you need." },
    ],
  },
];
