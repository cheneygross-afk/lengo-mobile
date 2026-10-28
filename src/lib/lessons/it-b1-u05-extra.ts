// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u05-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 5 Extra Practice: The Trapassato Prossimo. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U05_EXTRA: Lesson[] = [
  {
    slug: "b1-trapassato-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Trapassato Forms",
    summary: "Fresh sentences forming the trapassato with avere and essere.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Avevo or ero?",
        body: [
          "Same auxiliary as the passato prossimo, now in the imperfetto: \"avevo dormito\", \"ero tornata\", \"ci eravamo visti\". With \"essere\" the participle agrees with the subject; with \"avere\" it agrees only with a direct pronoun before it.",
        ],
        examples: [
          { es: "Avevo dormito solo tre ore.", en: "I had only slept three hours." },
          { es: "Sofia era tornata da Londra.", en: "Sofia had come back from London." },
          { es: "Ci eravamo visti a una festa.", en: "We had seen each other at a party." },
          { es: "Avevate già ordinato?", en: "Had you already ordered? (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had only slept three hours.", answer: "Avevo dormito solo tre ore.", altAnswers: ["Avevo dormito soltanto tre ore."], explanation: "\"Dormire\": avere." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sofia had come back from London.", answer: "Sofia era tornata da Londra.", explanation: "\"Tornare\": essere + agreement." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Had you already ordered? (plural)", answer: "Avevate già ordinato?", altAnswers: ["Voi avevate già ordinato?"], explanation: "\"Avevate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had seen each other at a party.", answer: "Ci eravamo visti a una festa.", altAnswers: ["Ci eravamo viste a una festa."], explanation: "Reciprocal: essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop had opened at nine.", answer: "Il negozio aveva aperto alle nove.", explanation: "Shops \"aprono\" with avere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandparents had emigrated to Argentina.", answer: "I miei nonni erano emigrati in Argentina.", explanation: "\"Emigrare\": essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She had cried all night.", answer: "Aveva pianto tutta la notte.", explanation: "\"Piangere\" → \"pianto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They had moved to Turin.", answer: "Si erano trasferiti a Torino.", altAnswers: ["Si erano trasferite a Torino."], explanation: "\"Trasferirsi\": essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had turned off the light.", answer: "Avevo spento la luce.", explanation: "\"Spegnere\" → \"spento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Had you ever been abroad? (to a friend)", answer: "Eri mai stato all'estero?", altAnswers: ["Eri mai stata all'estero?"], explanation: "\"Essere stato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The guests [had brought] some wine.", sentence: "Gli ospiti ___ del vino.", answer: "avevano portato", explanation: "\"Portare\": avere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Prices [had gone up] a lot.", sentence: "I prezzi ___ molto.", answer: "erano saliti", altAnswers: ["erano aumentati"], explanation: "\"Salire\" without an object: essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The pizza? [We'd already eaten it].", sentence: "La pizza? ___.", answer: "L'avevamo già mangiata", explanation: "Agreement with \"la\"." },
      { type: "word-order", prompt: "Put the words in order to say: The children had broken a window.", words: ["I", "bambini", "avevano", "rotto", "una", "finestra."], translation: "The children had broken a window.", explanation: "\"Rompere\" → \"rotto\"." },
      { type: "listen-choose", audio: "Si erano trasferiti a Torino.", question: "What did you hear?", options: ["Si erano trasferiti a Torino.", "Si sono trasferiti a Torino.", "Si erano trasferite a Torino.", "Si erano trasferito a Torino."], correctIndex: 0, explanation: "\"Erano\" + masculine plural." },
      { type: "dictation", audio: "Avevo spento la luce e mi ero addormentata.", explanation: "Avere, then essere." },
      { type: "speak", text: "Avevo dormito solo tre ore ed ero stanchissimo.", prompt: "Say it in Italian: I'd only slept three hours and I was exhausted.", tip: "\"Ed ero\": link the d to the vowel.", explanation: "Trapassato + imperfetto." },
    ],
  },
  {
    slug: "b1-trapassato-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Ordering Events",
    summary: "Fresh sentences choosing between passato prossimo and trapassato to show what came first.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Which came first?",
        body: [
          "Main events, one after another: passato prossimo. An event that had already happened before another past event: trapassato. Clues: \"già\", \"appena\", \"ancora\", \"mai\", \"perché\", \"dopo che\".",
        ],
        examples: [
          { es: "Quando ho acceso la TV, la partita era appena finita.", en: "When I turned on the TV, the match had just finished." },
          { es: "Ho acceso la TV e ho guardato la partita.", en: "I turned on the TV and watched the match." },
          { es: "Non avevo ancora pagato quando è saltata la luce.", en: "I hadn't paid yet when the power went off." },
          { es: "Era arrabbiata perché nessuno l'aveva aiutata.", en: "She was angry because nobody had helped her." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I turned on the TV, the match had just finished.", answer: "Quando ho acceso la TV, la partita era appena finita.", altAnswers: ["Quando ho acceso la televisione, la partita era appena finita."], explanation: "\"Appena\" + trapassato." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She was angry because nobody had helped her.", answer: "Era arrabbiata perché nessuno l'aveva aiutata.", explanation: "Cause: trapassato, agreement with \"l'\" (la)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I turned on the TV and watched the match.", answer: "Ho acceso la TV e ho guardato la partita.", altAnswers: ["Ho acceso la televisione e ho guardato la partita.", "Ho acceso la TV e ho visto la partita."], explanation: "Events in order." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hadn't paid yet when the power went off.", answer: "Non avevo ancora pagato quando è saltata la luce.", altAnswers: ["Non avevo ancora pagato quando è andata via la luce."], explanation: "\"Non ... ancora\" + trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When we arrived at the beach, it had started to rain.", answer: "Quando siamo arrivati in spiaggia, aveva cominciato a piovere.", altAnswers: ["Quando siamo arrivati in spiaggia, era cominciato a piovere.", "Quando siamo arrivate in spiaggia, aveva cominciato a piovere."], explanation: "Weather verbs accept both auxiliaries." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He sold the car he had bought a year before.", answer: "Ha venduto la macchina che aveva comprato un anno prima.", explanation: "\"Un anno prima\" = a year before." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wasn't hungry because I'd had a big lunch.", answer: "Non avevo fame perché avevo pranzato abbondantemente.", altAnswers: ["Non avevo fame perché avevo mangiato molto a pranzo.", "Non avevo fame perché avevo fatto un pranzo abbondante."], explanation: "Cause: trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After everyone had left, I tidied up.", answer: "Dopo che tutti erano andati via, ho messo in ordine.", altAnswers: ["Dopo che tutti se n'erano andati, ho messo in ordine.", "Dopo che tutti erano andati via, ho riordinato."], explanation: "\"Dopo che\" + trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I knocked, but nobody answered.", answer: "Ho bussato, ma nessuno ha risposto.", explanation: "Same moment: passato prossimo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I knocked, but they had gone out.", answer: "Ho bussato, ma erano usciti.", altAnswers: ["Ho bussato, ma erano uscite."], explanation: "Earlier: trapassato." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I recognized the song: I [had heard] it on the radio.", sentence: "Ho riconosciuto la canzone: l'___ alla radio.", answer: "avevo sentita", altAnswers: ["avevo sentito"], explanation: "Agreement with \"la canzone\" (common, not compulsory in speech)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The meeting [had already started] when I logged in.", sentence: "La riunione ___ quando mi sono collegato.", answer: "era già cominciata", altAnswers: ["era già iniziata"], explanation: "\"Cominciare\" without an object: essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [had never tried] Sardinian food before.", sentence: "___ la cucina sarda prima.", answer: "Non avevamo mai provato", explanation: "Experience up to a past moment." },
      { type: "word-order", prompt: "Put the words in order to say: He told me he had changed his job.", words: ["Mi", "ha", "detto", "che", "aveva", "cambiato", "lavoro."], translation: "He told me he had changed his job.", explanation: "Reported earlier event." },
      { type: "listen-choose", audio: "Quando ho acceso la TV, la partita era appena finita.", question: "Did the speaker see the match?", options: ["No, it had just finished.", "Yes, from the beginning.", "Yes, the second half.", "No, it hadn't started yet."], correctIndex: 0, explanation: "\"Era appena finita\" = had just finished." },
      { type: "dictation", audio: "Ho bussato, ma erano già usciti.", explanation: "\"Bussare\" = to knock." },
      { type: "speak", text: "Quando mi sono collegato, la riunione era già cominciata.", prompt: "Say it in Italian: When I logged in, the meeting had already started.", tip: "col-le-GA-to: double l.", explanation: "Main event + earlier event." },
    ],
  },
  {
    slug: "b1-trapassato-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Reported Explanations",
    summary: "Report what people told you about the past: mi ha detto che aveva perso il treno.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "He said he had...",
        body: [
          "When you report a past event someone told you about, their passato prossimo becomes your trapassato: \"Ho perso il treno\" → \"Mi ha detto che aveva perso il treno\". Pronouns and possessives shift too: \"mio\" → \"suo\", \"io\" → \"lui / lei\".",
        ],
        examples: [
          { es: "\"Ho perso il treno.\" → Ha detto che aveva perso il treno.", en: "\"I missed the train.\" → He said he had missed the train." },
          { es: "\"Siamo stati in Puglia.\" → Hanno detto che erano stati in Puglia.", en: "\"We were in Puglia.\" → They said they had been in Puglia." },
          { es: "\"Ho finito il mio progetto.\" → Ha detto che aveva finito il suo progetto.", en: "\"I've finished my project.\" → She said she had finished her project." },
          { es: "Mi ha spiegato che si era rotto la gamba sciando.", en: "He explained that he'd broken his leg skiing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They said they had been in Puglia.", answer: "Hanno detto che erano stati in Puglia.", altAnswers: ["Hanno detto che erano state in Puglia."], explanation: "\"Siamo stati\" → \"erano stati\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She said she had finished her project.", answer: "Ha detto che aveva finito il suo progetto.", altAnswers: ["Ha detto che aveva finito il progetto.", "Mi ha detto che aveva finito il suo progetto."], explanation: "\"Mio\" → \"suo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He explained that he'd broken his leg skiing.", answer: "Mi ha spiegato che si era rotto la gamba sciando.", altAnswers: ["Ha spiegato che si era rotto la gamba sciando."], explanation: "\"Rompersi la gamba\": essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia told me she had passed the exam.", answer: "Giulia mi ha detto che aveva passato l'esame.", altAnswers: ["Giulia mi ha detto che aveva superato l'esame."], explanation: "\"Ho passato\" → \"aveva passato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doctor said I had done the right thing.", answer: "Il medico ha detto che avevo fatto la cosa giusta.", altAnswers: ["Il dottore ha detto che avevo fatto la cosa giusta."], explanation: "\"Hai fatto\" → \"avevo fatto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They wrote that they had arrived safely.", answer: "Hanno scritto che erano arrivati sani e salvi.", altAnswers: ["Hanno scritto che erano arrivati bene.", "Hanno scritto che erano arrivate sane e salve."], explanation: "\"Sani e salvi\" = safe and sound." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco told us he had never seen snow.", answer: "Marco ci ha detto che non aveva mai visto la neve.", explanation: "\"Non ... mai\" + trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She admitted she had forgotten.", answer: "Ha ammesso che se n'era dimenticata.", altAnswers: ["Ha ammesso che aveva dimenticato.", "Ha ammesso che se ne era dimenticata."], explanation: "\"Ammettere\" = to admit." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I explained that I had lost my phone.", answer: "Ho spiegato che avevo perso il telefono.", altAnswers: ["Ho spiegato che avevo perso il cellulare."], explanation: "Reporting yourself works the same." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The neighbors said they had heard a noise.", answer: "I vicini hanno detto che avevano sentito un rumore.", explanation: "\"Sentire un rumore\" = to hear a noise." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He told me he [had gone] to bed early.", sentence: "Mi ha detto che ___ a letto presto.", answer: "era andato", explanation: "\"Andare\": essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My sister said she [had met] a nice guy.", sentence: "Mia sorella ha detto che ___ un ragazzo simpatico.", answer: "aveva conosciuto", altAnswers: ["aveva incontrato"], explanation: "\"Conoscere\" = to meet (for the first time)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They said they [had gotten married] in secret.", sentence: "Hanno detto che ___ in segreto.", answer: "si erano sposati", explanation: "\"Sposarsi\": essere." },
      { type: "word-order", prompt: "Put the words in order to say: She said she had left the keys at home.", words: ["Ha", "detto", "che", "aveva", "lasciato", "le", "chiavi", "a", "casa."], translation: "She said she had left the keys at home.", explanation: "Reported past." },
      { type: "listen-choose", audio: "Mi ha spiegato che si era rotto la gamba sciando.", question: "How did he break his leg?", options: ["skiing", "running", "falling down the stairs", "playing soccer"], correctIndex: 0, explanation: "\"Sciando\" = while skiing." },
      { type: "dictation", audio: "Ha detto che non aveva mai visto la neve.", explanation: "\"Non aveva mai visto\"." },
      { type: "speak", text: "Luca mi ha detto che aveva perso il treno e che era arrivato a mezzanotte.", prompt: "Report: Luca told me he had missed the train and had arrived at midnight.", tip: "mez-za-NOT-te: two double consonants.", explanation: "Two reported events." },
    ],
  },
];
