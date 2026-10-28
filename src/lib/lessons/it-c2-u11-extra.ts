// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u11-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 11 Extra Practice: Scientific and Medical Italian.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
// The discharge letter, the visit and the abstract are invented for the course.
export const IT_C2_U11_EXTRA: Lesson[] = [
  {
    slug: "c2-science-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Medicine",
    summary: "Read a fresh discharge letter and a visit to the family doctor, and move between clinical and everyday Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A discharge letter",
        body: [
          "An invented hospital discharge letter, written for this course. \"Si dimette in data odierna il sig. R. M., di anni 67, ricoverato il 3 marzo per dolore toracico insorto a riposo. L'ECG all'ingresso mostrava alterazioni compatibili con ischemia; la coronarografia ha evidenziato una stenosi critica della coronaria destra, trattata con angioplastica e impianto di stent. Il decorso è stato regolare. Si consiglia: astensione dal fumo, controllo cardiologico a trenta giorni, prosecuzione della terapia in atto.\"",
          "Note the impersonal \"si dimette\" with the patient as object, \"di anni 67\" for the age, and \"insorto\" (from \"insorgere\") for a symptom that started. Tell the patient the same thing in everyday words: \"Lei aveva un'arteria del cuore quasi chiusa e gliel'abbiamo riaperta.\"",
        ],
        examples: [
          { es: "Si dimette in data odierna il paziente.", en: "The patient is discharged today." },
          { es: "Ricoverato per dolore toracico insorto a riposo.", en: "Admitted for chest pain that began at rest." },
          { es: "Alterazioni compatibili con ischemia.", en: "Changes consistent with ischemia." },
          { es: "La coronarografia ha evidenziato una stenosi critica.", en: "The coronary angiogram showed a critical narrowing." },
          { es: "Il decorso è stato regolare.", en: "Recovery was uneventful." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Recovery was uneventful.", answer: "Il decorso è stato regolare.", altAnswers: ["Il decorso è stato privo di complicanze.", "Il decorso è stato senza complicanze."], explanation: "\"Decorso\" is the course of an illness or recovery; \"regolare\" is the standard clinical word for uneventful." },
          { type: "listen-choose", audio: "Si consiglia astensione dal fumo e controllo cardiologico a trenta giorni.", question: "What is the patient advised to do?", options: ["stop smoking and see a cardiologist in a month", "smoke less and rest for thirty days", "stop all medication for a month", "come back to hospital tomorrow"], correctIndex: 0, explanation: "\"Astensione dal fumo\" = no smoking; \"a trenta giorni\" = thirty days from now." },
        ],
      },
      {
        heading: "At the family doctor's",
        body: [
          "An invented visit. \"Dottore, da tre giorni ho la febbre e un mal di gola che non passa.\" \"Vediamo. Apra la bocca... Ha le tonsille arrossate e gonfie. Fa fatica a deglutire?\" \"Sì, mi fa male anche bere.\" \"Le prescrivo un antibiotico per sei giorni, una compressa ogni dodici ore, a stomaco pieno. Se tra quarantotto ore la febbre non scende, torni da me.\" \"Mi serve il certificato per il lavoro?\" \"Lo mando io all'INPS per via telematica.\"",
          "The doctor uses \"Lei\" and the formal imperative (\"apra\", \"torni\"). \"Deglutire\" is the clinical verb, \"mandare giù\" the everyday one; \"a stomaco pieno\" and \"a digiuno\" are what the pharmacist will repeat.",
        ],
        examples: [
          { es: "Da tre giorni ho la febbre.", en: "I've had a temperature for three days." },
          { es: "Ha le tonsille arrossate e gonfie.", en: "Your tonsils are red and swollen." },
          { es: "Fa fatica a deglutire?", en: "Do you have trouble swallowing?" },
          { es: "Una compressa ogni dodici ore, a stomaco pieno.", en: "One tablet every twelve hours, after food." },
          { es: "Se la febbre non scende, torni da me.", en: "If the fever doesn't come down, come back and see me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you have trouble swallowing? (formal)", answer: "Fa fatica a deglutire?", altAnswers: ["Ha difficoltà a deglutire?", "Fa fatica a mandare giù?", "Ha difficoltà a mandare giù?"], explanation: "\"Fare fatica a\" + infinitive; \"deglutire\" is the clinical verb." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "One tablet every twelve hours, [after food].", sentence: "Una compressa ogni dodici ore, ___.", answer: "a stomaco pieno", altAnswers: ["dopo i pasti"], explanation: "\"A stomaco pieno\" vs \"a digiuno\" (on an empty stomach)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The patient is discharged today.", answer: "Si dimette in data odierna il paziente.", altAnswers: ["Il paziente viene dimesso in data odierna.", "Il paziente viene dimesso oggi.", "Il paziente è dimesso in data odierna."], explanation: "\"Dimettere\" = to discharge; \"in data odierna\" is the bureaucratic today." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Admitted for chest pain that began at rest.", answer: "Ricoverato per dolore toracico insorto a riposo.", altAnswers: ["Ricoverato per dolore toracico comparso a riposo.", "Ricoverata per dolore toracico insorto a riposo."], explanation: "\"Insorto\", past participle of \"insorgere\", is the clinical verb for a symptom appearing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The angiogram showed a critical narrowing.", answer: "La coronarografia ha evidenziato una stenosi critica.", altAnswers: ["La coronarografia ha mostrato una stenosi critica.", "La coronarografia ha rilevato una stenosi critica."], explanation: "\"Evidenziare\" is the report verb for showing; \"stenosi\" is invariable." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Continue the current treatment.", answer: "Proseguire la terapia in atto.", altAnswers: ["Prosecuzione della terapia in atto.", "Proseguire la terapia in corso.", "Continuare la terapia in atto."], explanation: "\"In atto\" / \"in corso\" = current; a letter uses the infinitive or a noun, not the imperative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've had a sore throat for three days.", answer: "Ho mal di gola da tre giorni.", altAnswers: ["Da tre giorni ho mal di gola.", "Da tre giorni ho il mal di gola.", "Ho il mal di gola da tre giorni."], explanation: "\"Da\" + present tense for something still going on; English uses the present perfect." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm prescribing you an antibiotic for six days. (formal)", answer: "Le prescrivo un antibiotico per sei giorni.", altAnswers: ["Le prescrivo un antibiotico per sei giorni di terapia."], explanation: "\"Le\" is the formal indirect object: to you." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the fever doesn't come down, come back and see me. (formal)", answer: "Se la febbre non scende, torni da me.", altAnswers: ["Se la febbre non cala, torni da me.", "Se la febbre non scende, ritorni da me."], explanation: "\"Torni\" is the formal imperative; \"da me\" = to my office." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Changes [consistent with] ischemia.", sentence: "Alterazioni ___ ischemia.", answer: "compatibili con", explanation: "\"Compatibile con\" = consistent with: the cautious clinical phrasing." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A man [aged] 67.", sentence: "Un uomo ___ 67.", answer: "di anni", explanation: "\"Di anni 67\" is the record-keeping order; in speech, \"di 67 anni\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do not take it] on an empty stomach. (formal)", sentence: "___ a digiuno.", answer: "Non lo prenda", altAnswers: ["Non la prenda"], explanation: "Formal negative imperative: \"non\" + present subjunctive, pronoun before the verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll send the certificate to INPS [online].", sentence: "Mando io il certificato all'INPS ___.", answer: "per via telematica", altAnswers: ["online"], explanation: "\"Per via telematica\" is the official phrase for online." },
      { type: "word-order", prompt: "Put the words in order to say: Your tonsils are red and swollen.", words: ["Ha", "le", "tonsille", "arrossate", "e gonfie."], translation: "Your tonsils are red and swollen.", explanation: "Italian says 'you have the tonsils red': \"avere\" + article, no possessive." },
      { type: "matching", instructions: "Match the clinical term to the everyday one.", pairs: [{ left: "deglutire", right: "mandare giù" }, { left: "dolore toracico", right: "male al petto" }, { left: "cefalea", right: "mal di testa" }, { left: "ipertensione", right: "pressione alta" }, { left: "dimettere", right: "mandare a casa" }], explanation: "Doctors write the left column and say the right one to patients." },
      { type: "dictation", audio: "La coronarografia ha evidenziato una stenosi critica della coronaria destra.", explanation: "\"Stenosi\" is stressed on the first syllable: STE-no-si." },
      { type: "speak", text: "Lei aveva un'arteria del cuore quasi chiusa e gliel'abbiamo riaperta.", prompt: "Explain the procedure to the patient in plain Italian.", tip: "\"Gliel'abbiamo\" runs together: glie-la-BBIA-mo.", explanation: "\"Gliel'\" = \"glie\" + \"la\" elided before the vowel." },
    ],
  },
  {
    slug: "c2-science-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Science",
    summary: "Read a fresh research abstract and a popular-science paragraph, and practice both registers.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "An abstract",
        body: [
          "An invented abstract, written for this course. \"Obiettivo: valutare l'effetto dei tetti verdi sulla temperatura superficiale in un quartiere di Milano. Metodi: nell'estate 2025 sono stati confrontati 24 edifici con copertura vegetale e 24 edifici di controllo. Risultati: la temperatura superficiale dei tetti verdi è risultata mediamente inferiore di 18 °C rispetto ai tetti tradizionali. Conclusioni: i dati suggeriscono che le coperture vegetali possano contribuire a mitigare l'isola di calore urbana, ma sono necessari studi su scala più ampia.\"",
          "Note the passive \"sono stati confrontati\", the verb \"risultare\" for findings, and the hedge \"suggeriscono che... possano\" with the subjunctive.",
        ],
        examples: [
          { es: "Obiettivo: valutare l'effetto dei tetti verdi.", en: "Aim: to assess the effect of green roofs." },
          { es: "Sono stati confrontati 24 edifici.", en: "Twenty-four buildings were compared." },
          { es: "La temperatura è risultata inferiore di 18 °C.", en: "The temperature was found to be 18 °C lower." },
          { es: "I dati suggeriscono che possano mitigare il calore.", en: "The data suggest that they may reduce the heat." },
          { es: "Sono necessari studi su scala più ampia.", en: "Larger-scale studies are needed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Larger-scale studies are needed.", answer: "Sono necessari studi su scala più ampia.", altAnswers: ["Servono studi su scala più ampia.", "Sono necessari studi su più ampia scala."], explanation: "\"Su scala più ampia\" = on a larger scale; \"necessari\" agrees with \"studi\"." },
          { type: "listen-choose", audio: "La temperatura superficiale dei tetti verdi è risultata mediamente inferiore di diciotto gradi.", question: "What does it mean?", options: ["Green roofs were on average 18 degrees cooler.", "Green roofs were 18 degrees warmer.", "The temperature fell by 18 degrees in the whole district.", "Only 18 green roofs were cooler."], correctIndex: 0, explanation: "\"Inferiore di\" gives the size of the difference." },
        ],
      },
      {
        heading: "Popular science",
        body: [
          "A popular-science paragraph about the Campi Flegrei, written for this course. \"A Pozzuoli il suolo si alza e si abbassa: è il bradisismo, una parola che viene dal greco e significa, più o meno, 'movimento lento'. Dal 2005 il terreno si è sollevato di oltre un metro. Perché? Secondo l'interpretazione più diffusa, sotto la caldera gas e fluidi caldi spingono le rocce verso l'alto, un po' come il vapore che solleva il coperchio di una pentola.\"",
          "The popular register uses a question to the reader, a familiar comparison (\"un po' come\") and short sentences. The abstract would say \"si è registrato un sollevamento del suolo\"; the paragraph says \"il terreno si è sollevato\".",
        ],
        examples: [
          { es: "Il suolo si alza e si abbassa.", en: "The ground rises and falls." },
          { es: "Dal 2005 il terreno si è sollevato di oltre un metro.", en: "Since 2005 the ground has risen by more than a meter." },
          { es: "Gas e fluidi caldi spingono le rocce verso l'alto.", en: "Hot gases and fluids push the rocks upwards." },
          { es: "Un po' come il vapore che solleva il coperchio.", en: "A bit like the steam that lifts the lid." },
          { es: "Si è registrato un sollevamento del suolo.", en: "Ground uplift has been recorded." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Since 2005 the ground has risen by more than a meter.", answer: "Dal 2005 il terreno si è sollevato di oltre un metro.", altAnswers: ["Dal 2005 il suolo si è sollevato di oltre un metro.", "Dal 2005 il terreno si è alzato di più di un metro.", "Dal 2005 il suolo si è alzato di più di un metro."], explanation: "\"Di\" gives the amount of change: \"di oltre un metro\"." },
          { type: "word-order", prompt: "Put the words in order to say: Hot gases push the rocks upwards.", words: ["Gas", "caldi", "spingono", "le rocce", "verso l'alto."], translation: "Hot gases push the rocks upwards.", explanation: "\"Gas\" is invariable: \"il gas\", \"i gas\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Aim: to assess the effect of green roofs.", answer: "Obiettivo: valutare l'effetto dei tetti verdi.", altAnswers: ["Scopo: valutare l'effetto dei tetti verdi.", "Obiettivo: valutare gli effetti dei tetti verdi."], explanation: "Abstract headings take a bare infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Twenty-four buildings were compared.", answer: "Sono stati confrontati 24 edifici.", altAnswers: ["Sono stati confrontati ventiquattro edifici.", "Vennero confrontati 24 edifici.", "Si sono confrontati 24 edifici."], explanation: "Passive with \"essere\"; the participle agrees with \"edifici\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The temperature was found to be lower.", answer: "La temperatura è risultata inferiore.", altAnswers: ["La temperatura è risultata più bassa."], explanation: "\"Risultare\" takes \"essere\" and agrees: \"è risultata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The data suggest that green roofs may help.", answer: "I dati suggeriscono che i tetti verdi possano aiutare.", altAnswers: ["I dati suggeriscono che i tetti verdi possano essere utili.", "I dati suggeriscono che i tetti verdi possano contribuire."], explanation: "\"Suggerire che\" in a hedge takes the subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ground rises and falls.", answer: "Il suolo si alza e si abbassa.", altAnswers: ["Il terreno si alza e si abbassa.", "Il suolo sale e scende.", "Il terreno sale e scende."], explanation: "Reflexive \"alzarsi\" / \"abbassarsi\" for a thing moving by itself." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Ground uplift has been recorded.", answer: "Si è registrato un sollevamento del suolo.", altAnswers: ["È stato registrato un sollevamento del suolo.", "Si è registrato un sollevamento del terreno."], explanation: "The technical register turns the verb into a noun: \"sollevamento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Why does this happen?", answer: "Perché succede?", altAnswers: ["Perché accade?", "Perché avviene?", "Perché succede questo?", "Come mai succede?"], explanation: "A question to the reader is a hallmark of popular science." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Green roofs could help [mitigate] the urban heat island.", sentence: "I tetti verdi potrebbero contribuire a ___ l'isola di calore urbana.", answer: "mitigare", altAnswers: ["ridurre", "attenuare"], explanation: "\"Mitigare\" is the scientific verb; \"ridurre\" the everyday one." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "18 °C lower [compared with] traditional roofs.", sentence: "Inferiore di 18 °C ___ tetti tradizionali.", answer: "rispetto ai", explanation: "\"Rispetto a\" + article: \"ai\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The temperature was [on average] lower.", sentence: "La temperatura è risultata ___ inferiore.", answer: "mediamente", altAnswers: ["in media"], explanation: "\"Mediamente\" in writing, \"in media\" in speech." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[A bit like] a pot boiling.", sentence: "___ una pentola che bolle.", answer: "Un po' come", explanation: "\"Un po'\" takes an apostrophe, never an accent." },
      { type: "word-order", prompt: "Put the words in order to say: Larger-scale studies are needed.", words: ["Sono", "necessari", "studi", "su scala", "più ampia."], translation: "Larger-scale studies are needed.", explanation: "Verb first, then the subject: the usual order with \"essere necessario\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "la copertura vegetale", right: "green roofing" }, { left: "il gruppo di controllo", right: "control group" }, { left: "il sollevamento", right: "uplift" }, { left: "la caldera", right: "volcanic crater basin" }, { left: "su scala più ampia", right: "on a larger scale" }], explanation: "Research and geology vocabulary." },
      { type: "dictation", audio: "I dati suggeriscono che le coperture vegetali possano contribuire a mitigare l'isola di calore urbana.", explanation: "\"Possano\": subjunctive after a hedging verb." },
      { type: "speak", text: "A Pozzuoli il suolo si alza e si abbassa: è il bradisismo.", prompt: "Introduce the topic as a science presenter would.", tip: "\"Bradisismo\": bra-di-SIS-mo, the s before m is voiced.", explanation: "Short sentence, then the term: the popular order." },
    ],
  },
];
