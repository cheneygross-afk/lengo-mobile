// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u07.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 7: The Subjunctive, Part 1: Forms. Congiuntivo presente of
// regular verbs (-are → -i, -ere / -ire → -a), essere and avere, common
// irregulars from the io present, spelling, and when to add che io / che tu.
// Frames used: penso che, voglio che, spero che (their rules come in Units 8-9).
// Conventions: docs/italian-course/authoring.md.
export const IT_B1_U07: Lesson[] = [
  {
    slug: "b1-subjunctive-regular",
    level: "IT-B1",
    number: 1,
    title: "The Subjunctive: Regular Forms",
    summary: "Che io parli, che tu prenda, che lui dorma, che finiscano: the swapped vowel (-are → -i, -ere / -ire → -a).",
    duration: "17 min",
    sections: [
      {
        heading: "A new mood",
        body: [
          "The \"congiuntivo\" (subjunctive) is not a new tense but a new mood: it's the form a verb takes after \"che\" when the main verb expresses an opinion, a wish or a hope. In this unit you'll meet it in three frames: \"penso che\" (I think), \"voglio che\" (I want ... to) and \"spero che\" (I hope). Units 8 to 11 explain exactly which triggers need it; here the job is the forms.",
          "The key is a swapped vowel. In the present indicative, -are verbs have \"a\" (\"parla\") and \"-ere / -ire\" verbs have \"e\" (\"prende\", \"dorme\"). In the subjunctive they swap: \"parli\", \"prenda\", \"dorma\".",
        ],
        examples: [
          { es: "Penso che Luca lavori troppo.", en: "I think Luca works too much." },
          { es: "Spero che tu dorma bene.", en: "I hope you sleep well." },
          { es: "Voglio che Marta prenda il treno.", en: "I want Marta to take the train." },
          { es: "Penso che i miei vicini parlino tedesco.", en: "I think my neighbors speak German." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Luca works too much.", answer: "Penso che Luca lavori troppo.", altAnswers: ["Credo che Luca lavori troppo."], explanation: "\"Lavorare\" → \"lavori\": the \"a\" becomes \"i\"." },
          { type: "multiple-choice", question: "\"Spero che tu ___ bene.\" (dormire)", options: ["dorma", "dormi", "dormo", "dormire"], correctIndex: 0, explanation: "\"-ire\" verbs swap to \"-a\"." },
        ],
      },
      {
        heading: "-are verbs: parli",
        body: [
          "\"Parlare\": \"che io parli, che tu parli, che lui / lei parli, che noi parliamo, che voi parliate, che loro parlino\". The three singular forms are identical; \"noi\" is the same as the present; \"voi\" ends in \"-iate\".",
          "Stress in the \"loro\" form stays where it is in the present: \"PARlano\" → \"PARlino\", \"ABitano\" → \"ABitino\". Spelling: \"-care / -gare\" verbs add an \"h\" to keep the hard sound (\"cerchi\", \"paghi\", \"cerchiamo\"); \"-ciare / -giare\" verbs keep a single \"i\" (\"mangi\", \"cominci\").",
          "The same goes for other \"-iare\" verbs whose \"i\" is unstressed: \"studiare\" gives \"che tu studi\", \"che studino\", never \"studii\" or \"mangii\". Only when the \"i\" is stressed in the present does it survive: \"invio\" → \"che tu invii\", \"scio\" → \"che loro sciino\". One side effect: for these verbs the \"voi\" subjunctive looks exactly like the present (\"mangiate\", \"studiate\", \"cambiate\"), so only the context and the \"che\" tell you which mood it is.",
        ],
        examples: [
          { es: "Spero che tu non paghi troppo.", en: "I hope you don't pay too much." },
          { es: "Voglio che cerchiate un altro albergo.", en: "I want you to look for another hotel. (plural)" },
          { es: "Penso che in Spagna mangino tardi.", en: "I think they eat late in Spain." },
          { es: "Spero che il film cominci presto.", en: "I hope the film starts soon." },
          { es: "Penso che abitino in centro.", en: "I think they live in the center." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you don't pay too much. (to a friend)", answer: "Spero che tu non paghi troppo.", altAnswers: ["Spero che non paghi troppo."], explanation: "\"Pagare\" → \"paghi\": the \"h\" keeps the hard g." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope the film [starts] soon.", sentence: "Spero che il film ___ presto.", answer: "cominci", altAnswers: ["inizi"], explanation: "\"Cominciare\" → \"cominci\", one i." },
        ],
      },
      {
        heading: "-ere and -ire verbs: prenda, dorma, finisca",
        body: [
          "\"Prendere\": \"prenda, prenda, prenda, prendiamo, prendiate, prendano\". \"Dormire\" works the same way: \"dorma ... dormano\". Stress again stays put: \"PRENdano\", \"DORmano\".",
          "Verbs with \"-isc-\" keep it where the present has it: \"che io finisca, tu finisca, lui finisca, noi finiamo, voi finiate, loro finiscano\". So: \"capisca\", \"preferisca\", \"pulisca\".",
        ],
        examples: [
          { es: "Penso che leggano molto.", en: "I think they read a lot." },
          { es: "Spero che Anna finisca presto.", en: "I hope Anna finishes soon." },
          { es: "Voglio che apriate la finestra.", en: "I want you to open the window. (plural)" },
          { es: "Penso che Tom capisca l'italiano.", en: "I think Tom understands Italian." },
          { es: "Spero che scrivano presto.", en: "I hope they write soon." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Tom understands Italian.", answer: "Penso che Tom capisca l'italiano.", altAnswers: ["Credo che Tom capisca l'italiano."], explanation: "\"Capire\" → \"capisca\"." },
          { type: "listen-choose", audio: "Spero che scrivano presto.", question: "Who is going to write?", options: ["They are.", "I am.", "You are.", "We are."], correctIndex: 0, explanation: "\"Scrivano\": loro." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope Anna finishes soon.", answer: "Spero che Anna finisca presto.", explanation: "\"-isc-\" stays: \"finisca\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want Marta to take the train.", answer: "Voglio che Marta prenda il treno.", explanation: "\"Prendere\" → \"prenda\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they live in the center.", answer: "Penso che abitino in centro.", altAnswers: ["Credo che abitino in centro.", "Penso che vivano in centro.", "Credo che vivano in centro."], explanation: "Stress: \"ABitino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they read a lot.", answer: "Penso che leggano molto.", altAnswers: ["Credo che leggano molto.", "Penso che leggano tanto."], explanation: "\"Leggere\" → \"leggano\" (hard g)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to look for another hotel. (plural)", answer: "Voglio che cerchiate un altro albergo.", altAnswers: ["Voglio che cerchiate un altro hotel."], explanation: "\"Cercare\" → \"cerchiate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they win.", answer: "Spero che vincano.", altAnswers: ["Spero che loro vincano."], explanation: "\"Vincere\" → \"vincano\" (hard c)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Giorgio prefers the sea.", answer: "Penso che Giorgio preferisca il mare.", altAnswers: ["Credo che Giorgio preferisca il mare."], explanation: "\"Preferire\" → \"preferisca\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I want you to [open] the window. (plural)", sentence: "Voglio che ___ la finestra.", answer: "apriate", explanation: "\"Voi\": \"-iate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope we [arrive] on time.", sentence: "Spero che ___ in orario.", answer: "arriviamo", explanation: "\"Noi\" = same as the present." },
      { type: "multiple-choice", question: "How do you say: I hope they eat with us?", options: ["Spero che mangino con noi.", "Spero che mangiano con noi.", "Spero che mangiino con noi.", "Spero che manghino con noi."], correctIndex: 0, explanation: "\"-giare\" verbs keep one \"i\" and no \"h\": \"mangino\". \"Mangiano\" is the indicative." },
      { type: "dictation", audio: "Spero che tu dorma bene e che domani ti senta meglio.", explanation: "\"Dorma\", \"senta\": -ire verbs swap to -a." },
      { type: "speak", text: "Spero che parlino piano e che non usino troppe parole difficili.", prompt: "Say it in Italian: I hope they speak slowly and don't use too many difficult words.", tip: "PAR-li-no, U-si-no: stress on the first syllable.", explanation: "Two -are verbs in the loro form." },
    ],
  },
  {
    slug: "b1-subjunctive-essere-avere",
    level: "IT-B1",
    number: 2,
    title: "The Subjunctive of Essere and Avere",
    summary: "Sia, siamo, siate, siano; abbia, abbiamo, abbiate, abbiano.",
    duration: "17 min",
    sections: [
      {
        heading: "Essere: sia",
        body: [
          "\"Che io sia, tu sia, lui / lei sia, noi siamo, voi siate, loro siano\". You'll use it constantly: \"Penso che sia vero\" (I think it's true), \"Spero che siate contenti\".",
          "Pronounce \"sia\" as two syllables: SI-a. \"Siano\" is SI-a-no. Don't confuse it with \"stia\" (from \"stare\"): \"Spero che tu stia bene\" is about health and mood, \"Spero che tu sia contento\" about a state you're in.",
        ],
        examples: [
          { es: "Penso che sia vero.", en: "I think it's true." },
          { es: "Spero che siate contenti.", en: "I hope you're happy. (plural)" },
          { es: "Penso che il museo sia chiuso il lunedì.", en: "I think the museum is closed on Mondays." },
          { es: "Spero che i biglietti non siano troppo cari.", en: "I hope the tickets aren't too expensive." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think it's true.", answer: "Penso che sia vero.", altAnswers: ["Credo che sia vero."], explanation: "\"Essere\" → \"sia\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope the tickets [aren't] too expensive.", sentence: "Spero che i biglietti non ___ troppo cari.", answer: "siano", explanation: "Loro: \"siano\"." },
        ],
      },
      {
        heading: "Avere: abbia",
        body: [
          "\"Che io abbia, tu abbia, lui / lei abbia, noi abbiamo, voi abbiate, loro abbiano\". The \"noi\" form is identical to the present, so only the other five are new.",
          "Many everyday expressions use \"avere\": \"avere ragione\" (to be right), \"avere fame\", \"avere fretta\", \"avere bisogno di\". So: \"Penso che tu abbia ragione\", \"Spero che abbiano fame\".",
        ],
        examples: [
          { es: "Penso che tu abbia ragione.", en: "I think you're right." },
          { es: "Spero che abbiano fame: ho cucinato tanto!", en: "I hope they're hungry: I've cooked so much!" },
          { es: "Penso che Paolo abbia fretta.", en: "I think Paolo is in a hurry." },
          { es: "Spero che abbiate tempo domani.", en: "I hope you have time tomorrow. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think you're right. (to a friend)", answer: "Penso che tu abbia ragione.", altAnswers: ["Credo che tu abbia ragione."], explanation: "\"Avere ragione\" = to be right." },
          { type: "listen-choose", audio: "Spero che abbiate tempo domani.", question: "Who should have time?", options: ["You (plural).", "I.", "We.", "He."], correctIndex: 0, explanation: "\"Abbiate\": voi." },
        ],
      },
      {
        heading: "C'è → ci sia",
        body: [
          "\"C'è\" and \"ci sono\" become \"ci sia\" and \"ci siano\": \"Penso che ci sia un problema\", \"Spero che ci siano posti liberi\". This is one of the most useful subjunctive phrases in daily life.",
          "Match the verb to what follows, as with \"c'è / ci sono\": \"Spero che ci sia un tavolo\", but \"Spero che ci siano due tavoli\". And spell \"abbia\" with a double \"b\", like \"abbiamo\": a single b is a common slip in writing, as is falling back on the indicative (\"penso che tu hai ragione\"), which you'll hear in casual speech but should not write.",
        ],
        examples: [
          { es: "Penso che ci sia un problema.", en: "I think there's a problem." },
          { es: "Spero che ci siano posti liberi.", en: "I hope there are seats free." },
          { es: "Spero che ci sia il sole domenica.", en: "I hope it's sunny on Sunday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think there's a problem.", answer: "Penso che ci sia un problema.", altAnswers: ["Credo che ci sia un problema."], explanation: "\"C'è\" → \"ci sia\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you're happy. (plural)", answer: "Spero che siate contenti.", altAnswers: ["Spero che siate contente.", "Spero che voi siate contenti."], explanation: "Voi: \"siate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the museum is closed on Mondays.", answer: "Penso che il museo sia chiuso il lunedì.", altAnswers: ["Credo che il museo sia chiuso il lunedì."], explanation: "\"Sia chiuso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Paolo is in a hurry.", answer: "Penso che Paolo abbia fretta.", altAnswers: ["Credo che Paolo abbia fretta."], explanation: "\"Avere fretta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope there are seats free.", answer: "Spero che ci siano posti liberi.", altAnswers: ["Spero che ci siano dei posti liberi.", "Spero che ci siano ancora posti liberi."], explanation: "\"Ci sono\" → \"ci siano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to be ready at eight. (to a friend)", answer: "Voglio che tu sia pronto alle otto.", altAnswers: ["Voglio che tu sia pronta alle otto."], explanation: "\"Tu sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they have the keys.", answer: "Spero che abbiano le chiavi.", altAnswers: ["Spero che loro abbiano le chiavi."], explanation: "Loro: \"abbiano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the children are tired.", answer: "Penso che i bambini siano stanchi.", altAnswers: ["Credo che i bambini siano stanchi."], explanation: "Loro: \"siano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope it [is] sunny on Sunday.", sentence: "Spero che ci ___ il sole domenica.", answer: "sia", explanation: "\"C'è il sole\" → \"ci sia il sole\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [have] time tomorrow. (plural)", sentence: "Spero che ___ tempo domani.", answer: "abbiate", explanation: "Voi: \"abbiate\"." },
      { type: "matching", instructions: "Match each subject to the subjunctive of essere.", pairs: [{ left: "che io", right: "sia" }, { left: "che noi", right: "siamo" }, { left: "che voi", right: "siate" }, { left: "che loro", right: "siano" }], explanation: "Only \"siamo\" matches the present." },
      { type: "dictation", audio: "Penso che abbiate ragione, ma spero che non sia troppo tardi.", explanation: "\"Abbiate\", \"sia\"." },
      { type: "speak", text: "Spero che ci sia ancora posto e che i biglietti non siano troppo cari.", prompt: "Say it in Italian: I hope there's still room and that the tickets aren't too expensive.", tip: "SI-a, SI-a-no: two and three syllables.", explanation: "\"Ci sia\", \"siano\"." },
    ],
  },
  {
    slug: "b1-subjunctive-irregular-1",
    level: "IT-B1",
    number: 3,
    title: "Irregular Subjunctives, Part 1 of 2",
    summary: "Vada, faccia, venga, stia, dia, dica (from the io present: vado → vada, faccio → faccia).",
    duration: "17 min",
    sections: [
      {
        heading: "Start from the io form",
        body: [
          "Most irregular subjunctives are regular once you start from the \"io\" present: drop the \"-o\" and add \"-a\". \"Vado\" → \"vada\", \"faccio\" → \"faccia\", \"vengo\" → \"venga\", \"dico\" → \"dica\". The singular is \"-a\" for all three persons, the \"loro\" form adds \"-no\": \"vadano\", \"facciano\", \"vengano\", \"dicano\".",
          "\"Stare\" and \"dare\" are short: \"stia, stia, stia, stiano\" and \"dia, dia, dia, diano\". Keep \"dia\" (from \"dare\") apart from \"dica\" (from \"dire\"): \"Spero che mi dia una mano\" (I hope he gives me a hand) but \"Spero che mi dica la verità\" (I hope she tells me the truth). And \"che io dia\" never takes an accent, unlike the present \"dà\".",
        ],
        examples: [
          { es: "Spero che tu vada in vacanza.", en: "I hope you go on vacation." },
          { es: "Voglio che facciano i compiti.", en: "I want them to do their homework." },
          { es: "Spero che Luisa venga alla festa.", en: "I hope Luisa comes to the party." },
          { es: "Spero che tua madre stia meglio.", en: "I hope your mother is feeling better." },
          { es: "Penso che dicano la verità.", en: "I think they're telling the truth." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope Luisa comes to the party.", answer: "Spero che Luisa venga alla festa.", explanation: "\"Vengo\" → \"venga\"." },
          { type: "multiple-choice", question: "\"Voglio che ___ i compiti.\" (loro, fare)", options: ["facciano", "fanno", "fanno fare", "faccino"], correctIndex: 0, explanation: "\"Faccio\" → \"faccia\" → \"facciano\"." },
        ],
      },
      {
        heading: "Noi and voi come from noi",
        body: [
          "For \"noi\" and \"voi\", start from the \"noi\" present instead: \"andiamo\" → \"andiamo, andiate\"; \"facciamo\" → \"facciamo, facciate\"; \"veniamo\" → \"veniamo, veniate\"; \"diciamo\" → \"diciamo, diciate\"; \"stiamo, stiate\"; \"diamo, diate\".",
          "So never \"vadiamo\" or \"vadiate\": the \"vad-\" stem is only for the singular and \"loro\".",
        ],
        examples: [
          { es: "Voglio che andiate a letto presto.", en: "I want you to go to bed early. (plural)" },
          { es: "Spero che veniate a trovarci.", en: "I hope you come and visit us. (plural)" },
          { es: "Penso che diate troppi soldi ai ragazzi.", en: "I think you give the kids too much money. (plural)" },
          { es: "Voglio che mi diciate tutto.", en: "I want you to tell me everything. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to go to bed early. (plural)", answer: "Voglio che andiate a letto presto.", explanation: "\"Andiamo\" → \"andiate\"." },
          { type: "listen-choose", audio: "Spero che veniate a trovarci.", question: "Who is invited?", options: ["You (plural).", "He.", "They.", "I."], correctIndex: 0, explanation: "\"Veniate\": voi." },
        ],
      },
      {
        heading: "You already know these forms",
        body: [
          "Formal commands with \"Lei\" are subjunctive forms: \"Venga!\", \"Dica!\", \"Vada pure\", \"Faccia con calma\", \"Stia tranquillo\", \"Mi dia un chilo di pane\". Every time a shop assistant said \"Dica!\", you were hearing the subjunctive.",
          "Two fixed phrases worth stealing: \"Spero che vada tutto bene\" (I hope all goes well) and \"Che cosa vuoi che ti dica?\" (What do you want me to say?).",
        ],
        examples: [
          { es: "Dica, signora!", en: "Yes, madam, how can I help?" },
          { es: "Stia tranquillo, non è niente.", en: "Don't worry, it's nothing. (formal)" },
          { es: "Spero che vada tutto bene.", en: "I hope all goes well." },
          { es: "Che cosa vuoi che ti dica?", en: "What do you want me to say?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope all goes well.", answer: "Spero che vada tutto bene.", altAnswers: ["Spero che tutto vada bene."], explanation: "\"Andare bene\" → \"vada bene\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you want me to say? (to a friend)", answer: "Che cosa vuoi che ti dica?", altAnswers: ["Cosa vuoi che ti dica?", "Che vuoi che ti dica?"], explanation: "\"Dica\": io, after \"vuoi che\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you go on vacation. (to a friend)", answer: "Spero che tu vada in vacanza.", altAnswers: ["Spero che vada in vacanza.", "Spero che tu vada in ferie."], explanation: "\"Vado\" → \"vada\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope your mother is feeling better. (to a friend)", answer: "Spero che tua madre stia meglio.", altAnswers: ["Spero che tua mamma stia meglio."], explanation: "\"Stare\" → \"stia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they're telling the truth.", answer: "Penso che dicano la verità.", altAnswers: ["Credo che dicano la verità."], explanation: "\"Dico\" → \"dica\" → \"dicano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to tell me everything. (plural)", answer: "Voglio che mi diciate tutto.", explanation: "\"Diciamo\" → \"diciate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope it's nice weather tomorrow.", answer: "Spero che domani faccia bel tempo.", altAnswers: ["Spero che faccia bel tempo domani."], explanation: "\"Fa bel tempo\" → \"faccia bel tempo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the boss gives too much work.", answer: "Penso che il capo dia troppo lavoro.", altAnswers: ["Credo che il capo dia troppo lavoro."], explanation: "\"Dare\" → \"dia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want them to come at seven.", answer: "Voglio che vengano alle sette.", altAnswers: ["Voglio che loro vengano alle sette."], explanation: "\"Vengano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope the children [are] well.", sentence: "Spero che i bambini ___ bene.", answer: "stiano", explanation: "\"Stare bene\" → \"stiano bene\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I want you to [do] the shopping. (plural)", sentence: "Voglio che ___ la spesa.", answer: "facciate", explanation: "\"Facciamo\" → \"facciate\"." },
      { type: "matching", instructions: "Match each io present to its subjunctive.", pairs: [{ left: "vado", right: "vada" }, { left: "faccio", right: "faccia" }, { left: "vengo", right: "venga" }, { left: "dico", right: "dica" }], explanation: "Drop -o, add -a." },
      { type: "dictation", audio: "Spero che vengano anche loro e che facciano presto.", explanation: "\"Vengano\", \"facciano\"." },
      { type: "speak", text: "Spero che tua sorella stia meglio e che venga in montagna con noi.", prompt: "Say it in Italian: I hope your sister is feeling better and comes to the mountains with us.", tip: "STI-a: two syllables.", explanation: "\"Stia\", \"venga\"." },
    ],
  },
  {
    slug: "b1-subjunctive-irregular-2",
    level: "IT-B1",
    number: 4,
    title: "Irregular Subjunctives, Part 2 of 2",
    summary: "Possa, voglia, debba, sappia, esca, beva, tenga, rimanga, scelga.",
    duration: "17 min",
    sections: [
      {
        heading: "Modal verbs",
        body: [
          "The modals follow the \"io\" rule: \"posso\" → \"possa\", \"voglio\" → \"voglia\", \"devo\" → \"debba\" (from the old form \"debbo\"). Plurals: \"possiamo, possiate, possano\"; \"vogliamo, vogliate, vogliano\"; \"dobbiamo, dobbiate, debbano\".",
          "\"Sapere\" is the odd one out: \"io so\" gives no clue, so learn \"sappia, sappia, sappia, sappiamo, sappiate, sappiano\".",
          "Watch the double consonants, which are where most written mistakes happen: \"possa\" (double s), \"debba\" and \"abbia\" (double b), \"sappia\" (double p). \"Voglia\" keeps the \"gli\" sound of \"voglio\". Remember also that the \"loro\" form copies the \"io\" stem, so \"possano\", \"vogliano\", \"sappiano\", while \"noi\" and \"voi\" go back to the regular stem.",
        ],
        examples: [
          { es: "Spero che tu possa venire.", en: "I hope you can come." },
          { es: "Penso che Giulia voglia cambiare lavoro.", en: "I think Giulia wants to change jobs." },
          { es: "Penso che tu debba riposare.", en: "I think you should rest." },
          { es: "Penso che lui sappia tutto.", en: "I think he knows everything." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you can come. (to a friend)", answer: "Spero che tu possa venire.", altAnswers: ["Spero che possa venire."], explanation: "\"Posso\" → \"possa\"." },
          { type: "multiple-choice", question: "\"Penso che lui ___ tutto.\" (sapere)", options: ["sappia", "sa", "sapia", "saccia"], correctIndex: 0, explanation: "\"Sapere\" → \"sappia\", double p." },
        ],
      },
      {
        heading: "Esca, beva, tenga, rimanga, scelga",
        body: [
          "Five more from the \"io\" present: \"esco\" → \"esca\", \"bevo\" → \"beva\", \"tengo\" → \"tenga\", \"rimango\" → \"rimanga\", \"scelgo\" → \"scelga\". The \"loro\" forms: \"escano, bevano, tengano, rimangano, scelgano\".",
          "For \"noi\" and \"voi\", go back to the \"noi\" present: \"usciamo, usciate\" (not \"esciate\"), \"beviamo, beviate\", \"teniamo, teniate\", \"rimaniamo, rimaniate\", \"scegliamo, scegliate\". The sound changes with the stem: a hard \"g\" in \"rimanga\" and \"scelga\" (like \"rimango\", \"scelgo\"), but the soft \"gli\" in \"scegliamo\" and \"scegliate\". Writing \"scelgiate\" or \"rimagnate\" mixes the two stems.",
        ],
        examples: [
          { es: "Spero che esca il sole.", en: "I hope the sun comes out." },
          { es: "Penso che beva troppo caffè.", en: "I think he drinks too much coffee." },
          { es: "Voglio che tu tenga questi soldi.", en: "I want you to keep this money." },
          { es: "Spero che rimangano a cena.", en: "I hope they stay for dinner." },
          { es: "Voglio che scelga lei il ristorante.", en: "I want her to choose the restaurant." },
          { es: "Spero che usciate presto dall'ufficio.", en: "I hope you get out of the office early. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they stay for dinner.", answer: "Spero che rimangano a cena.", altAnswers: ["Spero che restino a cena."], explanation: "\"Rimango\" → \"rimanga\" → \"rimangano\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [get out] of the office early. (plural)", sentence: "Spero che ___ presto dall'ufficio.", answer: "usciate", explanation: "From \"usciamo\", not \"esc-\"." },
          { type: "listen-choose", audio: "Spero che esca il sole.", question: "What does the speaker hope?", options: ["That the sun comes out.", "That he goes out.", "That it rains.", "That the sun sets."], correctIndex: 0, explanation: "\"Uscire\" → \"esca\"." },
        ],
      },
      {
        heading: "In shops and in fixed phrases",
        body: [
          "As with Part 1, the formal command is the subjunctive form: \"Tenga il resto\" (keep the change), \"Rimanga pure seduto\" (do stay seated), \"Scelga lei\" (you choose).",
          "\"Che io sappia\" is a handy fixed phrase meaning as far as I know: \"Che io sappia, il museo è aperto anche la domenica.\"",
        ],
        examples: [
          { es: "Tenga il resto.", en: "Keep the change. (formal)" },
          { es: "Rimanga pure seduto.", en: "Please stay seated. (formal)" },
          { es: "Che io sappia, il museo è aperto anche la domenica.", en: "As far as I know, the museum is open on Sundays too." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Keep the change. (formal)", answer: "Tenga il resto.", altAnswers: ["Tenga pure il resto."], explanation: "\"Tengo\" → \"tenga\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As far as I know, the museum is open on Sundays too.", answer: "Che io sappia, il museo è aperto anche la domenica.", altAnswers: ["Che io sappia, il museo è aperto anche di domenica."], explanation: "\"Che io sappia\" = as far as I know." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Giulia wants to change jobs.", answer: "Penso che Giulia voglia cambiare lavoro.", altAnswers: ["Credo che Giulia voglia cambiare lavoro."], explanation: "\"Voglio\" → \"voglia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think you should rest. (to a friend)", answer: "Penso che tu debba riposare.", altAnswers: ["Credo che tu debba riposare.", "Penso che tu debba riposarti."], explanation: "\"Devo\" → \"debba\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he drinks too much coffee.", answer: "Penso che beva troppo caffè.", altAnswers: ["Penso che lui beva troppo caffè.", "Credo che beva troppo caffè."], explanation: "\"Bevo\" → \"beva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to keep this money. (to a friend)", answer: "Voglio che tu tenga questi soldi.", explanation: "\"Tengo\" → \"tenga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want her to choose the restaurant.", answer: "Voglio che scelga lei il ristorante.", altAnswers: ["Voglio che lei scelga il ristorante."], explanation: "\"Scelgo\" → \"scelga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they know the way.", answer: "Spero che sappiano la strada.", altAnswers: ["Spero che conoscano la strada."], explanation: "\"Sappiano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope the students can understand.", answer: "Spero che gli studenti possano capire.", explanation: "\"Possano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they have to leave early.", answer: "Penso che debbano partire presto.", altAnswers: ["Credo che debbano partire presto.", "Penso che debbano andare via presto."], explanation: "\"Debbano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [know] what you're doing. (plural)", sentence: "Spero che ___ che cosa fate.", answer: "sappiate", explanation: "\"Sappiamo\" → \"sappiate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I want you to [choose] the wine. (plural)", sentence: "Voglio che ___ il vino.", answer: "scegliate", explanation: "From \"scegliamo\"." },
      { type: "dictation", audio: "Spero che possiate rimanere e che vogliate cenare con noi.", explanation: "\"Possiate\", \"vogliate\"." },
      { type: "speak", text: "Penso che Marco sappia la verità, ma non voglia dirla.", prompt: "Say it in Italian: I think Marco knows the truth but doesn't want to say it.", tip: "SAP-pia: hold the double p.", explanation: "\"Sappia\", \"voglia\"." },
    ],
  },
  {
    slug: "b1-drill-subjunctive-regular",
    level: "IT-B1",
    number: 5,
    title: "Drill: Regular Subjunctive",
    summary: "Produce the subjunctive of forty regular verbs in penso che, voglio che and spero che frames.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Swap the vowel",
        body: [
          "-are → \"-i\" (\"parli, parliamo, parliate, parlino\"); \"-ere / -ire\" → \"-a\" (\"prenda, dorma, prendano\"); \"-isc-\" verbs keep it (\"finisca, finiscano\"). Watch the spelling: \"paghi\", \"cerchi\", \"mangi\".",
        ],
        examples: [
          { es: "Spero che arrivino presto.", en: "I hope they arrive soon." },
          { es: "Penso che vendano la casa.", en: "I think they're selling the house." },
          { es: "Voglio che tu pulisca la cucina.", en: "I want you to clean the kitchen." },
          { es: "Spero che non dimentichi le chiavi.", en: "I hope she doesn't forget her keys." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they're selling the house.", answer: "Penso che vendano la casa.", altAnswers: ["Credo che vendano la casa."], explanation: "\"Vendere\" → \"vendano\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to clean the kitchen. (to a friend)", answer: "Voglio che tu pulisca la cucina.", explanation: "\"Pulire\" → \"pulisca\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they arrive soon.", answer: "Spero che arrivino presto.", altAnswers: ["Spero che arrivino subito."], explanation: "\"Arrivare\" → \"arrivino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope she doesn't forget her keys.", answer: "Spero che non dimentichi le chiavi.", altAnswers: ["Spero che lei non dimentichi le chiavi."], explanation: "\"Dimenticare\" → \"dimentichi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Sara works in a bank.", answer: "Penso che Sara lavori in banca.", altAnswers: ["Credo che Sara lavori in banca."], explanation: "\"Lavori\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to listen to me. (plural)", answer: "Voglio che mi ascoltiate.", explanation: "\"Ascoltare\" → \"ascoltiate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope the shop opens at nine.", answer: "Spero che il negozio apra alle nove.", explanation: "\"Aprire\" → \"apra\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they're leaving tomorrow.", answer: "Penso che partano domani.", altAnswers: ["Credo che partano domani."], explanation: "\"Partire\" → \"partano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want him to call me tonight.", answer: "Voglio che mi chiami stasera.", altAnswers: ["Voglio che lui mi chiami stasera."], explanation: "\"Chiamare\" → \"chiami\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you don't miss the train. (plural)", answer: "Spero che non perdiate il treno.", explanation: "\"Perdere\" → \"perdiate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the children eat too many sweet things.", answer: "Penso che i bambini mangino troppi dolci.", altAnswers: ["Credo che i bambini mangino troppi dolci."], explanation: "\"Mangino\": one i." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to pay by card. (to a friend)", answer: "Voglio che tu paghi con la carta.", altAnswers: ["Voglio che tu paghi con il bancomat."], explanation: "\"Pagare\" → \"paghi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope they [understand] the instructions.", sentence: "Spero che ___ le istruzioni.", answer: "capiscano", explanation: "\"-isc-\": \"capiscano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think Luca [plays] the guitar.", sentence: "Penso che Luca ___ la chitarra.", answer: "suoni", explanation: "\"Suonare\" → \"suoni\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I want you to [look for] a cheaper apartment. (plural)", sentence: "Voglio che ___ un appartamento meno caro.", answer: "cerchiate", explanation: "\"Cercare\" → \"cerchiate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope the lesson [starts] on time.", sentence: "Spero che la lezione ___ in orario.", answer: "cominci", altAnswers: ["inizi"], explanation: "\"Cominciare\" → \"cominci\"." },
      { type: "dictation", audio: "Spero che vi divertiate e che dormiate un po'.", explanation: "\"Divertiate\", \"dormiate\"." },
      { type: "dictation", audio: "Penso che preferiscano il mare e che non amino la montagna.", explanation: "\"Preferiscano\", \"amino\"." },
      { type: "speak", text: "Voglio che studiate, che puliate la camera e che spegniate il telefono.", prompt: "Say it in Italian (to two kids): I want you to study, clean your room and turn off your phone.", tip: "stu-DIA-te, pu-LIA-te, spe-GNA-te: stress on the a.", explanation: "Three voi forms in \"-iate\"." },
    ],
  },
  {
    slug: "b1-drill-subjunctive-irregular",
    level: "IT-B1",
    number: 6,
    title: "Drill: Irregular Subjunctive",
    summary: "Produce the twenty irregular subjunctives at speed: sia, abbia, vada, faccia, possa, sappia and more.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "The twenty to know",
        body: [
          "From the \"io\" present: \"vada, faccia, venga, dica, possa, voglia, esca, beva, tenga, rimanga, scelga\" (plus \"debba\"). Learn by heart: \"sia, abbia, stia, dia, sappia\". \"Noi\" and \"voi\" come from the \"noi\" present: \"andiamo, andiate\", \"usciamo, usciate\".",
        ],
        examples: [
          { es: "Spero che non sia niente di grave.", en: "I hope it's nothing serious." },
          { es: "Penso che vadano in Sardegna.", en: "I think they're going to Sardinia." },
          { es: "Voglio che mi diate una mano.", en: "I want you to give me a hand. (plural)" },
          { es: "Spero che tu sappia nuotare.", en: "I hope you can swim." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope it's nothing serious.", answer: "Spero che non sia niente di grave.", altAnswers: ["Spero che non sia nulla di grave."], explanation: "\"Sia\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they're going to Sardinia.", answer: "Penso che vadano in Sardegna.", altAnswers: ["Credo che vadano in Sardegna."], explanation: "\"Vadano\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to give me a hand. (plural)", answer: "Voglio che mi diate una mano.", explanation: "\"Diamo\" → \"diate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you can swim. (to a friend)", answer: "Spero che tu sappia nuotare.", altAnswers: ["Spero che sappia nuotare."], explanation: "\"Sapere\" + infinitive = to know how to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Elena is at home.", answer: "Penso che Elena sia a casa.", altAnswers: ["Credo che Elena sia a casa."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they have a good time.", answer: "Spero che si divertano.", altAnswers: ["Spero che loro si divertano."], explanation: "Regular, but useful: \"si divertano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want him to do it now.", answer: "Voglio che lo faccia adesso.", altAnswers: ["Voglio che lo faccia ora.", "Voglio che lui lo faccia adesso."], explanation: "\"Faccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you come with us. (plural)", answer: "Spero che veniate con noi.", explanation: "\"Veniamo\" → \"veniate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think she has two brothers.", answer: "Penso che abbia due fratelli.", altAnswers: ["Penso che lei abbia due fratelli.", "Credo che abbia due fratelli."], explanation: "\"Abbia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want them to stay here.", answer: "Voglio che rimangano qui.", altAnswers: ["Voglio che restino qui.", "Voglio che rimangano qua."], explanation: "\"Rimangano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope it's not too hot.", answer: "Spero che non faccia troppo caldo.", explanation: "\"Fa caldo\" → \"faccia caldo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [are] well. (plural)", sentence: "Spero che ___ bene.", answer: "stiate", explanation: "\"Stiamo\" → \"stiate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think he [has to] work on Saturday.", sentence: "Penso che ___ lavorare sabato.", answer: "debba", explanation: "\"Dovere\" → \"debba\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I want you to [tell] me the truth. (to a friend)", sentence: "Voglio che tu mi ___ la verità.", answer: "dica", explanation: "\"Dico\" → \"dica\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope they [go out] together.", sentence: "Spero che ___ insieme.", answer: "escano", explanation: "\"Esco\" → \"escano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't want you [to drink] and drive. (plural)", sentence: "Non voglio che ___ e poi guidiate.", answer: "beviate", explanation: "From \"beviamo\"." },
      { type: "dictation", audio: "Voglio che teniate il cane in casa e che scegliate voi il nome.", explanation: "\"Teniate\", \"scegliate\"." },
      { type: "dictation", audio: "Spero che possano venire e che non vadano via presto.", explanation: "\"Possano\", \"vadano\"." },
      { type: "speak", text: "Spero che tu stia bene, che abbia tempo e che possa venire sabato.", prompt: "Say it in Italian (to a friend): I hope you're well, you have time and you can come on Saturday.", tip: "One breath per \"che\" clause.", explanation: "\"Stia\", \"abbia\", \"possa\"." },
    ],
  },
  {
    slug: "b1-subjunctive-pronouns",
    level: "IT-B1",
    number: 7,
    title: "When to Say Che Io, Che Tu",
    summary: "The three singular forms are the same; add the pronoun when it's unclear (penso che tu abbia ragione).",
    duration: "17 min",
    sections: [
      {
        heading: "Three persons, one form",
        body: [
          "In the subjunctive \"io\", \"tu\" and \"lui / lei\" share one form: \"che io parli, che tu parli, che lui parli\". Normally Italian drops subject pronouns, but here they often carry the meaning.",
          "\"Penso che abbia ragione\" could mean I think he / she / you (formal) is right. If you mean the friend in front of you, say \"Penso che tu abbia ragione\". Out of context, \"che abbia\" is heard as he or she.",
        ],
        examples: [
          { es: "Penso che tu abbia ragione.", en: "I think you're right. (to a friend)" },
          { es: "Penso che lei abbia ragione.", en: "I think she's right." },
          { es: "Spero che Lei stia bene, signora.", en: "I hope you're well, madam." },
          { es: "Voglio che tu venga con me.", en: "I want you to come with me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think you're right. (to a friend)", answer: "Penso che tu abbia ragione.", altAnswers: ["Credo che tu abbia ragione."], explanation: "\"Tu\" removes the ambiguity." },
          { type: "multiple-choice", question: "Which sentence clearly means \"I hope YOU (friend) can come\"?", options: ["Spero che tu possa venire.", "Spero che possa venire.", "Spero che possiate venire.", "Spero che possano venire."], correctIndex: 0, explanation: "Without \"tu\", the listener hears he or she." },
        ],
      },
      {
        heading: "Che io: when someone else wants something from me",
        body: [
          "\"Che io\" appears when the main verb has a different subject: \"Mia madre vuole che io studi medicina\" (My mother wants me to study medicine). Without \"io\", the sentence would mean she wants him or her to study.",
          "When the subject is a name or a noun, no pronoun is needed: \"Spero che Marco venga\". And in the plural the forms are clear on their own: \"spero che veniate\", \"penso che abbiano ragione\".",
        ],
        examples: [
          { es: "Mia madre vuole che io studi medicina.", en: "My mother wants me to study medicine." },
          { es: "Il capo vuole che io lavori sabato.", en: "The boss wants me to work on Saturday." },
          { es: "Spero che Marco venga.", en: "I hope Marco comes." },
          { es: "Penso che abbiano ragione.", en: "I think they're right." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My mother wants me to study medicine.", answer: "Mia madre vuole che io studi medicina.", altAnswers: ["Mia mamma vuole che io studi medicina."], explanation: "\"Che io\" makes it clear." },
          { type: "listen-choose", audio: "Il capo vuole che io lavori sabato.", question: "Who has to work on Saturday?", options: ["The speaker.", "The boss.", "A colleague.", "Everyone."], correctIndex: 0, explanation: "\"Che io lavori\"." },
        ],
      },
      {
        heading: "Lei, the formal you",
        body: [
          "With formal \"Lei\", the form is the same third person: \"Spero che Lei stia bene\", \"Penso che Lei abbia ragione\". In writing, many keep the capital L for politeness.",
        ],
        examples: [
          { es: "Penso che Lei abbia ragione, dottore.", en: "I think you're right, doctor." },
          { es: "Spero che Lei possa aiutarmi.", en: "I hope you can help me. (formal)" },
          { es: "Spero che Lei si trovi bene in Italia.", en: "I hope you're enjoying Italy. (formal)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you can help me. (formal)", answer: "Spero che Lei possa aiutarmi.", altAnswers: ["Spero che Lei mi possa aiutare.", "Spero che lei possa aiutarmi.", "Spero che possa aiutarmi."], explanation: "Formal \"Lei\" + third person." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think she's right.", answer: "Penso che lei abbia ragione.", altAnswers: ["Credo che lei abbia ragione.", "Penso che abbia ragione."], explanation: "\"Lei\" for clarity." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to come with me. (to a friend)", answer: "Voglio che tu venga con me.", explanation: "\"Tu venga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The boss wants me to work on Saturday.", answer: "Il capo vuole che io lavori sabato.", altAnswers: ["Il capo vuole che io lavori di sabato."], explanation: "\"Che io\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you're well, madam.", answer: "Spero che Lei stia bene, signora.", altAnswers: ["Spero che lei stia bene, signora.", "Signora, spero che Lei stia bene."], explanation: "Formal \"Lei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My friends want me to stay.", answer: "I miei amici vogliono che io rimanga.", altAnswers: ["I miei amici vogliono che io resti.", "Le mie amiche vogliono che io rimanga.", "Le mie amiche vogliono che io resti."], explanation: "\"Che io rimanga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you like the present. (to a friend)", answer: "Spero che il regalo ti piaccia.", altAnswers: ["Spero che ti piaccia il regalo."], explanation: "\"Piacere\" → \"piaccia\"; \"ti\" already shows who." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think you're tired. (to a friend)", answer: "Penso che tu sia stanco.", altAnswers: ["Penso che tu sia stanca.", "Credo che tu sia stanco.", "Credo che tu sia stanca."], explanation: "\"Tu sia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Dad wants [me to drive].", sentence: "Papà vuole che ___.", answer: "io guidi", explanation: "Without \"io\", \"guidi\" would be unclear." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope [you understand]. (formal)", sentence: "Spero che ___.", answer: "Lei capisca", altAnswers: ["lei capisca"], explanation: "Formal \"Lei\"." },
      { type: "multiple-choice", question: "In which sentence is a subject pronoun NOT needed?", options: ["Spero che veniate.", "Spero che tu venga.", "Vuole che io venga.", "Penso che lei venga."], correctIndex: 0, explanation: "\"Veniate\" can only be voi." },
      { type: "dictation", audio: "I miei genitori vogliono che io torni a casa per Natale.", explanation: "\"Che io torni\"." },
      { type: "speak", text: "Penso che tu abbia ragione, ma lui vuole che io aspetti.", prompt: "Say it in Italian: I think you're right, but he wants me to wait.", tip: "Stress the pronouns lightly: TU, I-o.", explanation: "\"Tu\" and \"io\" make each subject clear." },
    ],
  },
  {
    slug: "b1-error-hunt-subjunctive-forms",
    level: "IT-B1",
    number: 8,
    title: "Error Hunt: Subjunctive Forms",
    summary: "Fix subjunctive form errors: che lui va (vada), che io sono (sia), che loro fanno (facciano), che tu parla, che vadino (vadano).",
    duration: "17 min",
    sections: [
      {
        heading: "The indicative slipped in",
        body: [
          "Emma is writing to her host family in Lecce before her stay. Her Italian is good, but she keeps using the indicative after \"che\": \"Spero che la casa è vicina al mare\", \"Mia madre vuole che io sono prudente\".",
          "The fix is the subjunctive: \"sia vicina\", \"che io sia prudente\". The same goes for irregular verbs: \"che lui va\" becomes \"vada\", \"che loro fanno\" becomes \"facciano\".",
        ],
        examples: [
          { es: "Spero che la casa sia vicina al mare.", en: "I hope the house is near the sea. (not: è vicina)" },
          { es: "Mia madre vuole che io sia prudente.", en: "My mother wants me to be careful. (not: che io sono)" },
          { es: "Spero che vostro figlio vada d'accordo con me.", en: "I hope your son gets on with me. (not: va d'accordo)" },
          { es: "Penso che facciano il bagno tutti i giorni.", en: "I think they go swimming every day. (not: fanno)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Emma wrote \"Spero che la casa è vicina al mare\". Write it correctly: I hope the house is near the sea.", source: "I hope the house is near the sea.", answer: "Spero che la casa sia vicina al mare.", explanation: "\"Spero che\" + subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Emma wrote \"Mia madre vuole che io sono prudente\". Write it correctly: My mother wants me to be careful.", source: "My mother wants me to be careful.", answer: "Mia madre vuole che io sia prudente.", altAnswers: ["Mia mamma vuole che io sia prudente.", "Mia madre vuole che io stia attenta."], explanation: "\"Io sia\"." },
        ],
      },
      {
        heading: "Wrong endings",
        body: [
          "Two classic slips. First, \"che tu parla\": the -are subjunctive ends in \"-i\", so \"che tu parli\". Second, \"che vadino\" or \"che facci\": these are heard in some regional speech, but the standard forms are \"vadano\" and \"faccia\". Irregular \"loro\" forms just add \"-no\" to the singular: \"vada\" → \"vadano\".",
        ],
        examples: [
          { es: "Spero che tu parli un po' di inglese.", en: "I hope you speak a bit of English. (not: che tu parla)" },
          { es: "Spero che i ragazzi vadano in spiaggia con me.", en: "I hope the boys go to the beach with me. (not: vadino)" },
          { es: "Penso che stiano tutti bene.", en: "I think they're all well. (not: stiino)" },
          { es: "Spero che non sia un problema.", en: "I hope it isn't a problem. (not: è)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Emma wrote \"Spero che i ragazzi vadino in spiaggia con me\". Write it correctly: I hope the boys go to the beach with me.", source: "I hope the boys go to the beach with me.", answer: "Spero che i ragazzi vadano in spiaggia con me.", altAnswers: ["Spero che i ragazzi vadano al mare con me."], explanation: "\"Vada\" + \"-no\"." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Spero che tu parli italiano.", "Spero che tu parla italiano.", "Spero che tu parle italiano.", "Spero che tu parlassi italiano."], correctIndex: 0, explanation: "-are → \"-i\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Emma wrote \"Spero che vostro figlio va d'accordo con me\". Write it correctly: I hope your son gets on with me.", source: "I hope your son gets on with me.", answer: "Spero che vostro figlio vada d'accordo con me.", explanation: "\"Vado\" → \"vada\"." },
      { type: "translate", direction: "en-es", prompt: "Emma wrote \"Penso che fanno il bagno tutti i giorni\". Write it correctly: I think they go swimming every day.", source: "I think they go swimming every day.", answer: "Penso che facciano il bagno tutti i giorni.", altAnswers: ["Credo che facciano il bagno tutti i giorni.", "Penso che facciano il bagno ogni giorno."], explanation: "\"Fare\" → \"facciano\"." },
      { type: "translate", direction: "en-es", prompt: "Emma wrote \"Spero che tu parla un po' di inglese\". Write it correctly: I hope you speak a bit of English.", source: "I hope you speak a bit of English.", answer: "Spero che tu parli un po' di inglese.", explanation: "\"Parli\"." },
      { type: "translate", direction: "en-es", prompt: "Emma wrote \"Spero che non è un problema\". Write it correctly: I hope it isn't a problem.", source: "I hope it isn't a problem.", answer: "Spero che non sia un problema.", explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Emma wrote \"Penso che stiino tutti bene\". Write it correctly: I think they're all well.", source: "I think they're all well.", answer: "Penso che stiano tutti bene.", altAnswers: ["Credo che stiano tutti bene."], explanation: "\"Stia\" + \"-no\"." },
      { type: "translate", direction: "en-es", prompt: "Emma wrote \"Voglio che mi dicete la verità\". Write it correctly: I want you to tell me the truth. (plural)", source: "I want you to tell me the truth. (plural)", answer: "Voglio che mi diciate la verità.", explanation: "From \"diciamo\": \"diciate\"." },
      { type: "fill-blank", prompt: "Emma wrote \"che io ho\". Write the Italian for the bold words.", en: "My father wants [me to have] a phone with me.", sentence: "Mio padre vuole che ___ un telefono con me.", answer: "io abbia", explanation: "\"Io abbia\"." },
      { type: "fill-blank", prompt: "Emma wrote \"che sapete\". Write the Italian for the bold words.", en: "I hope [you know] I'm vegetarian. (plural)", sentence: "Spero che ___ che sono vegetariana.", answer: "sappiate", explanation: "\"Sapere\" → \"sappiate\"." },
      { type: "word-order", prompt: "Put the words in order to say: I hope you can pick me up.", words: ["Spero", "che", "possiate", "venirmi", "a", "prendere."], translation: "I hope you can pick me up. (plural)", explanation: "\"Possiate\", not \"potete\"." },
      { type: "multi-select", question: "Which are correct subjunctive forms? Choose all that apply.", options: ["che lui vada", "che loro vadino", "che io sia", "che tu parla", "che loro facciano", "che voi andiate"], correctIndexes: [0, 2, 4, 5], explanation: "\"Vadano\" and \"parli\" are the right forms." },
      { type: "dictation", audio: "Spero che la camera sia tranquilla e che ci sia il wifi.", explanation: "\"Sia\", \"ci sia\"." },
      { type: "speak", text: "Spero che la casa sia vicina al mare e che i ragazzi vadano in spiaggia con me.", prompt: "Say Emma's corrected sentence: I hope the house is near the sea and the boys go to the beach with me.", tip: "VA-da-no: stress on the first syllable.", explanation: "\"Sia\", \"vadano\"." },
    ],
  },
  {
    slug: "b1-listening-lab-subjunctive",
    level: "IT-B1",
    number: 9,
    title: "Listening Lab: Hearing the Subjunctive",
    summary: "Spot subjunctive forms in natural speech: a voicemail from Mom and a chat at the coffee machine.",
    duration: "18 min",
    sections: [
      {
        heading: "A voicemail from Mom",
        body: [
          "Chiara has just moved to Milan for work. Her mother leaves a voicemail: \"Ciao tesoro, sono la mamma. Spero che tu stia bene e che il nuovo appartamento ti piaccia. Papà vuole che tu ci chiami stasera, perché pensa che tu abbia dimenticato il suo compleanno... scherzo! Spero che non faccia troppo freddo lassù. Un bacio!\"",
          "Listen for the forms after \"che\": \"stia\", \"piaccia\", \"chiami\", \"faccia\". (\"Abbia dimenticato\" is a past subjunctive: you'll learn it in Unit 12.)",
        ],
        examples: [
          { es: "Spero che tu stia bene e che il nuovo appartamento ti piaccia.", en: "I hope you're well and that you like the new apartment." },
          { es: "Papà vuole che tu ci chiami stasera.", en: "Dad wants you to call us tonight." },
          { es: "Spero che non faccia troppo freddo lassù.", en: "I hope it's not too cold up there." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Papà vuole che tu ci chiami stasera.", question: "What does Dad want?", options: ["Chiara to call them tonight.", "To call Chiara tonight.", "Chiara to visit tonight.", "To go out tonight."], correctIndex: 0, explanation: "\"Che tu ci chiami\": you call us." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope it's not too cold up there.", answer: "Spero che non faccia troppo freddo lassù.", explanation: "\"Faccia freddo\"." },
        ],
      },
      {
        heading: "At the coffee machine",
        body: [
          "Two of Chiara's new colleagues talk at the coffee machine. Davide: \"Penso che la nuova sia brava. Spero che rimanga.\" Silvia: \"Anch'io. Però il capo vuole che lavoriamo anche sabato, e penso che lei non lo sappia ancora.\" Davide: \"Allora è meglio che glielo diciamo noi.\"",
          "Forms to catch: \"sia\", \"rimanga\", \"lavoriamo\" (the same as the present!), \"sappia\", \"diciamo\". \"È meglio che\" is another trigger: you'll study it in Unit 10.",
        ],
        examples: [
          { es: "Penso che la nuova sia brava.", en: "I think the new girl is good." },
          { es: "Spero che rimanga.", en: "I hope she stays." },
          { es: "Il capo vuole che lavoriamo anche sabato.", en: "The boss wants us to work on Saturday too." },
          { es: "Penso che lei non lo sappia ancora.", en: "I don't think she knows yet." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The boss wants us to work on Saturday too.", answer: "Il capo vuole che lavoriamo anche sabato.", altAnswers: ["Il capo vuole che lavoriamo anche il sabato.", "Il capo vuole che anche sabato lavoriamo."], explanation: "\"Lavoriamo\": noi subjunctive = present." },
          { type: "dictation", audio: "Penso che la nuova sia brava. Spero che rimanga.", explanation: "\"Sia\", \"rimanga\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Spero che tu stia bene e che il nuovo appartamento ti piaccia.", question: "What does Mom hope?", options: ["That Chiara is well and likes the apartment.", "That Chiara finds an apartment.", "That Chiara comes home.", "That the apartment is cheap."], correctIndex: 0, explanation: "\"Stia bene\", \"ti piaccia\"." },
      { type: "listen-choose", audio: "Penso che lei non lo sappia ancora.", question: "What does Silvia think?", options: ["Chiara doesn't know yet.", "Chiara already knows.", "The boss doesn't know.", "Davide knows everything."], correctIndex: 0, explanation: "\"Non lo sappia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you're well. (to a friend)", answer: "Spero che tu stia bene.", explanation: "\"Stia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you like the new apartment. (to a friend)", answer: "Spero che il nuovo appartamento ti piaccia.", altAnswers: ["Spero che ti piaccia il nuovo appartamento.", "Spero che la nuova casa ti piaccia."], explanation: "\"Piaccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Dad wants you to call us tonight.", answer: "Papà vuole che tu ci chiami stasera.", altAnswers: ["Papà vuole che ci chiami stasera.", "Il papà vuole che tu ci chiami stasera."], explanation: "\"Chiami\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the new girl is good.", answer: "Penso che la nuova sia brava.", altAnswers: ["Credo che la nuova sia brava.", "Penso che la ragazza nuova sia brava."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope she stays.", answer: "Spero che rimanga.", altAnswers: ["Spero che resti.", "Spero che lei rimanga."], explanation: "\"Rimanga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think she knows yet.", answer: "Penso che lei non lo sappia ancora.", altAnswers: ["Penso che non lo sappia ancora.", "Non credo che lo sappia ancora.", "Non penso che lo sappia ancora."], explanation: "\"Sappia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope it's not too [cold] up there.", sentence: "Spero che non ___ troppo freddo lassù.", answer: "faccia", explanation: "\"Fare freddo\" → \"faccia freddo\"." },
      { type: "multi-select", question: "Which words in the coffee-machine chat are subjunctives? Choose all that apply.", options: ["sia", "rimanga", "lavoriamo", "sappia", "penso", "vuole"], correctIndexes: [0, 1, 2, 3], explanation: "\"Penso\" and \"vuole\" are the triggers, in the indicative." },
      { type: "dictation", audio: "Il capo vuole che lavoriamo anche sabato.", explanation: "\"Lavoriamo\" looks like the present." },
      { type: "speak", text: "Ciao mamma, sto bene! Spero che anche voi stiate bene e che papà non sia arrabbiato.", prompt: "Reply to Mom in Italian: Hi Mom, I'm fine! I hope you're well too and that Dad isn't angry.", tip: "STI-a-te: three syllables.", explanation: "\"Stiate\", \"sia\"." },
    ],
  },
  {
    slug: "b1-mission-wishes-for-a-friend",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: Good Wishes",
    summary: "Write wishes for a friend's new job: spero che ti piaccia, che i colleghi siano simpatici.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Your friend's new job",
        body: [
          "Your mission: your friend Francesca starts a new job on Monday at a design studio in Turin. Write her a message with good wishes. Most of your sentences will start with \"Spero che...\" and need the subjunctive.",
          "\"Piacere\" is irregular: \"piaccio\" → \"piaccia\", \"piacciano\". So: \"Spero che il lavoro ti piaccia\", \"Spero che i colleghi ti piacciano\".",
        ],
        examples: [
          { es: "Spero che il nuovo lavoro ti piaccia.", en: "I hope you like the new job." },
          { es: "Spero che i colleghi siano simpatici.", en: "I hope your colleagues are nice." },
          { es: "Spero che il capo non sia troppo severo.", en: "I hope the boss isn't too strict." },
          { es: "Spero che tu possa usare le tue idee.", en: "I hope you can use your ideas." },
          { es: "Spero che lo studio non sia troppo lontano da casa.", en: "I hope the studio isn't too far from home." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you like the new job. (to a friend)", answer: "Spero che il nuovo lavoro ti piaccia.", altAnswers: ["Spero che ti piaccia il nuovo lavoro."], explanation: "\"Piacere\" → \"piaccia\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [like] your colleagues.", sentence: "Spero che i colleghi ti ___.", answer: "piacciano", explanation: "Plural subject: \"piacciano\"." },
        ],
      },
      {
        heading: "Signing off",
        body: [
          "Before a big day, Italians say \"In bocca al lupo!\" (literally, into the wolf's mouth), and the answer is \"Crepi!\" Other warm endings: \"Fammi sapere com'è andata\" (let me know how it went), \"Un abbraccio\".",
          "Mix in a \"voglio che\" for a friendly order: \"Voglio che tu mi racconti tutto!\"",
        ],
        examples: [
          { es: "In bocca al lupo per lunedì!", en: "Good luck for Monday!" },
          { es: "Voglio che tu mi racconti tutto!", en: "I want you to tell me everything!" },
          { es: "Fammi sapere com'è andata.", en: "Let me know how it went." },
          { es: "Un abbraccio forte.", en: "A big hug." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to tell me everything! (to a friend)", answer: "Voglio che tu mi racconti tutto!", altAnswers: ["Voglio che mi racconti tutto!", "Voglio che tu mi dica tutto!"], explanation: "\"Raccontare\" → \"racconti\"." },
          { type: "multiple-choice", question: "Your friend says \"In bocca al lupo!\" What do you answer?", options: ["Crepi!", "Prego!", "Anche a te!", "Salute!"], correctIndex: 0, explanation: "The traditional reply is \"Crepi!\" (may the wolf die). Some people now answer \"Viva il lupo!\" instead." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope your colleagues are nice. (to a friend)", answer: "Spero che i colleghi siano simpatici.", altAnswers: ["Spero che i tuoi colleghi siano simpatici."], explanation: "\"Siano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope the boss isn't too strict.", answer: "Spero che il capo non sia troppo severo.", altAnswers: ["Spero che il capo non sia troppo esigente."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you can use your ideas. (to a friend)", answer: "Spero che tu possa usare le tue idee.", altAnswers: ["Spero che possa usare le tue idee."], explanation: "\"Possa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope the studio isn't too far from home.", answer: "Spero che lo studio non sia troppo lontano da casa.", explanation: "\"Sia lontano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you earn well. (to a friend)", answer: "Spero che tu guadagni bene.", altAnswers: ["Spero che guadagni bene."], explanation: "\"Guadagnare\" → \"guadagni\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they give you a nice desk. (to a friend)", answer: "Spero che ti diano una bella scrivania.", explanation: "\"Dare\" → \"diano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me know how it went.", answer: "Fammi sapere com'è andata.", altAnswers: ["Fammi sapere come è andata."], explanation: "A fixed phrase." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [find] a nice apartment near the studio.", sentence: "Spero che ___ un bell'appartamento vicino allo studio.", answer: "trovi", altAnswers: ["tu trovi"], explanation: "\"Trovare\" → \"trovi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [have] some free time.", sentence: "Spero che ___ un po' di tempo libero.", answer: "tu abbia", altAnswers: ["abbia"], explanation: "\"Tu abbia\"." },
      { type: "word-order", prompt: "Put the words in order to say: I want you to tell me everything!", words: ["Voglio", "che", "tu", "mi", "racconti", "tutto!"], translation: "I want you to tell me everything!", explanation: "\"Che tu\" + subjunctive." },
      { type: "listen-choose", audio: "Spero che i colleghi ti piacciano.", question: "What does the speaker hope?", options: ["That you like your colleagues.", "That your colleagues like you.", "That your colleagues are on time.", "That you meet your colleagues."], correctIndex: 0, explanation: "\"Ti piacciano\": you like them." },
      { type: "speak", text: "Cara Francesca, in bocca al lupo per lunedì! Spero che il lavoro ti piaccia e che i colleghi siano simpatici.", prompt: "Say your message in Italian: Dear Francesca, good luck for Monday! I hope you like the job and your colleagues are nice.", tip: "PIAC-cia: double c, one beat.", explanation: "\"Piaccia\", \"siano\"." },
    ],
  },
];

export const IT_B1_U07_WRITING: WriteExercise = {
  type: "write",
  prompt: "A friend is moving to a new city for work or study. Write a message wishing them well. Say what you hope for them (spero che...), what you think they will find (penso che...) and one thing you want them to do (voglio che...).",
  minWords: 60,
  maxWords: 120,
  rubric: [
    "Uses the present subjunctive after spero che, penso che and voglio che",
    "Forms regular subjunctives correctly (-are → -i, -ere / -ire → -a, -isc- kept)",
    "Uses irregular subjunctives correctly (sia, abbia, possa, faccia, piaccia, vada...)",
    "Adds tu or io after che when the singular form would be unclear, and writes a warm, informal message",
  ],
  modelAnswer: "Caro Matteo, allora è deciso: parti per Bologna! Sono un po' triste, ma sono anche contento per te. Spero che la nuova casa ti piaccia e che i coinquilini siano simpatici. Penso che Bologna sia perfetta per te: c'è tanta musica e si mangia benissimo. Spero che l'università non ti dia troppo stress e che tu possa trovare subito nuovi amici. Però voglio che tu mi chiami ogni tanto e che mi racconti tutto! E spero che tu abbia un letto in più, perché a novembre vengo a trovarti. In bocca al lupo! Un abbraccio, Sara",
  explanation: "After \"spero che\", \"penso che\" and \"voglio che\" every verb is in the subjunctive: \"piaccia\", \"siano\", \"sia\", \"dia\", \"possa\", \"chiami\", \"racconti\", \"abbia\". \"Tu\" is added where the singular form would be unclear (\"che tu possa\", \"che tu mi chiami\"). \"Sono contento\" and \"c'è tanta musica\" are not after a trigger, so they stay in the indicative.",
};
