// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u15-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 15 Extra Practice: Film and Theatre Language. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U15_EXTRA: Lesson[] = [
  {
    slug: "c1-film-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Plot Summaries",
    summary: "Summarise three invented films in the present tense, with clear sequencing and no spoilers.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Three short plots",
        body: [
          "Il ritorno: \"Dopo vent'anni a Berlino, Franco torna nel suo paese in Calabria per vendere la casa dei genitori. All'inizio vuole ripartire subito; poi incontra la vicina, che conserva le lettere di sua madre.\" La gara: \"Una squadra di ragazze di Bari si prepara a una gara di canottaggio. Nel frattempo l'allenatrice nasconde un segreto.\" Il silenzio: \"Una famiglia di Trento smette di parlarsi dopo un incidente. Finché un giorno...\"",
          "Each uses the present, one time connector and a pause before the twist. \"Finché un giorno...\" is the classic cliffhanger.",
        ],
        examples: [
          { es: "Dopo vent'anni a Berlino, Franco torna nel suo paese.", en: "After twenty years in Berlin, Franco returns to his village." },
          { es: "All'inizio vuole ripartire subito.", en: "At first he wants to leave again immediately." },
          { es: "Nel frattempo l'allenatrice nasconde un segreto.", en: "Meanwhile the coach is hiding a secret." },
          { es: "Una famiglia smette di parlarsi dopo un incidente.", en: "A family stops talking to each other after an accident." },
          { es: "Finché un giorno qualcuno bussa alla porta.", en: "Until one day someone knocks at the door." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (plot summary).", source: "After twenty years in Berlin, Franco returns to his village.", answer: "Dopo vent'anni a Berlino, Franco torna nel suo paese.", altAnswers: ["Dopo vent'anni a Berlino, Franco torna al suo paese.", "Dopo vent'anni a Berlino Franco torna nel suo paese.", "Dopo venti anni a Berlino, Franco torna nel suo paese."], explanation: "Present tense; \"paese\" = home village." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (plot summary).", source: "Meanwhile the coach is hiding a secret.", answer: "Nel frattempo l'allenatrice nasconde un segreto.", altAnswers: ["Intanto l'allenatrice nasconde un segreto.", "Nel frattempo l'allenatore nasconde un segreto."], explanation: "Simple present for 'is hiding'." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (plot summary).", source: "At first he wants to leave again immediately.", answer: "All'inizio vuole ripartire subito.", altAnswers: ["All'inizio vuole ripartire immediatamente.", "Inizialmente vuole ripartire subito."], explanation: "\"Ripartire\" = to leave again." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (plot summary).", source: "He comes back to sell his parents' house.", answer: "Torna per vendere la casa dei genitori.", altAnswers: ["Torna per vendere la casa dei suoi genitori.", "Ritorna per vendere la casa dei genitori."], explanation: "\"Per\" + infinitive = purpose." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (plot summary).", source: "The neighbour keeps his mother's letters.", answer: "La vicina conserva le lettere di sua madre.", altAnswers: ["La vicina conserva le lettere della madre.", "La vicina tiene le lettere di sua madre."], explanation: "\"Conservare\" = to keep, preserve." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (plot summary).", source: "A team of girls is preparing for a rowing race.", answer: "Una squadra di ragazze si prepara a una gara di canottaggio.", altAnswers: ["Una squadra di ragazze si sta preparando a una gara di canottaggio.", "Una squadra di ragazze si prepara per una gara di canottaggio."], explanation: "\"Prepararsi a / per\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (plot summary).", source: "A family stops talking to each other.", answer: "Una famiglia smette di parlarsi.", explanation: "\"Parlarsi\" = to talk to each other." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (plot summary).", source: "Until one day someone knocks at the door.", answer: "Finché un giorno qualcuno bussa alla porta.", altAnswers: ["Fino a quando un giorno qualcuno bussa alla porta.", "Finché un giorno qualcuno non bussa alla porta."], explanation: "\"Finché\" + present for a cliffhanger." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (plot summary).", source: "The film tells the story of a coach and her team.", answer: "Il film racconta la storia di un'allenatrice e della sua squadra.", altAnswers: ["Il film racconta la storia di un'allenatrice e la sua squadra."], explanation: "\"Un'allenatrice\": apostrophe for the feminine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Later] he discovers the truth.", sentence: "___ scopre la verità.", answer: "In seguito", altAnswers: ["Poi", "Successivamente", "Più tardi"], explanation: "Sequencing connector." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The film [is set] in Calabria.", sentence: "Il film ___ in Calabria.", answer: "è ambientato", altAnswers: ["si svolge"], explanation: "\"Essere ambientato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We won't say more].", sentence: "___.", answer: "Non diciamo di più", altAnswers: ["Non aggiungiamo altro", "Non diciamo altro"], explanation: "The anti-spoiler formula." },
      { type: "word-order", prompt: "Put the words in order to say: He has been living in Berlin for twenty years.", words: ["Vive", "a", "Berlino", "da", "vent'anni."], translation: "He has been living in Berlin for twenty years.", explanation: "\"Da\" + present." },
      { type: "multiple-choice", question: "Which sentence avoids a spoiler?", options: ["Ma un giorno arriva una lettera che cambia tutto.", "Alla fine Franco muore e la casa viene venduta.", "L'allenatrice è in realtà la madre di una ragazza.", "Nell'ultima scena scopriamo che era tutto un sogno."], correctIndex: 0, explanation: "A hint, not the outcome." },
      { type: "multiple-choice", question: "Which tense is standard for a plot summary?", options: ["the present", "the passato remoto", "the imperfetto", "the future"], correctIndex: 0, explanation: "As in literary analysis." },
      { type: "listen-choose", audio: "All'inizio vuole ripartire subito; poi incontra la vicina.", question: "What happens after he arrives?", options: ["He wants to leave, then meets the neighbour.", "He stays and buys the house.", "He meets his mother.", "He sells the house immediately."], correctIndex: 0, explanation: "\"All'inizio... poi\"." },
      { type: "dictation", audio: "Finché un giorno qualcuno bussa alla porta.", explanation: "The classic cliffhanger." },
      { type: "speak", text: "Dopo vent'anni all'estero, Franco torna nel suo paese per vendere la casa dei genitori. All'inizio vuole ripartire subito.", prompt: "Summarise the plot aloud: After twenty years abroad, Franco returns to his village to sell his parents' house. At first he wants to leave again immediately.", tip: "Keep a steady present-tense rhythm.", explanation: "A plot opening." },
    ],
  },
  {
    slug: "c1-film-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Theatre",
    summary: "Talk about Italian theatre beyond the commedia dell'arte: Pirandello on stage and Eduardo De Filippo's Naples.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Pirandello and Eduardo",
        body: [
          "In Pirandello's Sei personaggi in cerca d'autore (1921), a company rehearsing a play is interrupted by six characters abandoned by their author, who demand to have their drama performed. The audience at the Rome premiere shouted \"Manicomio!\" (madhouse!); it became one of the most influential plays of the century.",
          "Eduardo De Filippo (1900-1984) wrote and acted in comedies about Neapolitan families. In Natale in casa Cupiello, Luca Cupiello obsessively builds his nativity scene and keeps asking his son \"Te piace 'o presepe?\" (do you like the crib?). In Napoli milionaria! (1945) the closing line, \"Ha da passà 'a nuttata\" (the night must pass), became a national expression of hope after hard times.",
          "Theatre words: \"il palcoscenico\" (stage), \"la prova\" (rehearsal), \"il sipario\" (curtain), \"la prima\" (opening night), \"il copione\" (script), \"la messa in scena\" (staging).",
        ],
        examples: [
          { es: "Sei personaggi interrompono le prove di una compagnia.", en: "Six characters interrupt a company's rehearsal." },
          { es: "Alla prima il pubblico gridò «Manicomio!».", en: "At the premiere the audience shouted 'Madhouse!'" },
          { es: "Luca Cupiello costruisce il presepe ogni Natale.", en: "Luca Cupiello builds the crib every Christmas." },
          { es: "Ha da passà 'a nuttata.", en: "The night must pass. (Neapolitan)" },
          { es: "Si alza il sipario.", en: "The curtain rises." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Six characters interrupt a company's rehearsal.", answer: "Sei personaggi interrompono le prove di una compagnia.", altAnswers: ["Sei personaggi interrompono la prova di una compagnia."], explanation: "\"Le prove\" = rehearsals." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The curtain rises.", answer: "Si alza il sipario.", altAnswers: ["Il sipario si alza."], explanation: "\"Alzarsi\" = to rise." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The characters demand to have their drama performed.", answer: "I personaggi chiedono di far rappresentare il loro dramma.", altAnswers: ["I personaggi pretendono che il loro dramma venga rappresentato.", "I personaggi chiedono che il loro dramma sia rappresentato.", "I personaggi vogliono che il loro dramma venga rappresentato."], explanation: "\"Pretendere che\" + subjunctive, or \"far\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the premiere the audience shouted.", answer: "Alla prima il pubblico gridò.", altAnswers: ["Alla prima il pubblico urlò.", "Alla prima il pubblico ha gridato."], explanation: "\"La prima\" = opening night." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Eduardo wrote and acted in his own comedies.", answer: "Eduardo scriveva e recitava le sue commedie.", altAnswers: ["Eduardo scrisse e recitò le sue commedie.", "Eduardo scriveva e interpretava le sue commedie."], explanation: "Italians call him simply \"Eduardo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you like the crib?", answer: "Ti piace il presepe?", altAnswers: ["Ti piace il presepio?"], explanation: "Standard Italian for \"Te piace 'o presepe?\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The night must pass.", answer: "Deve passare la nottata.", altAnswers: ["La nottata deve passare.", "Ha da passare la nottata."], explanation: "\"Ha da passà\" = \"deve passare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The staging is very modern.", answer: "La messa in scena è molto moderna.", altAnswers: ["L'allestimento è molto moderno."], explanation: "\"La messa in scena\" = the staging." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The actors are on [the stage].", sentence: "Gli attori sono sul ___.", answer: "palcoscenico", altAnswers: ["palco"], explanation: "\"Il palcoscenico\", short \"il palco\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The director hands out [the script].", sentence: "Il regista distribuisce ___.", answer: "il copione", explanation: "\"Il copione\" = the script." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The play [became] a classic.", sentence: "La commedia ___ un classico.", answer: "divenne", altAnswers: ["diventò", "è diventata"], explanation: "Passato remoto for history." },
      { type: "word-order", prompt: "Put the words in order to say: The audience shouted 'Madhouse!'", words: ["Il", "pubblico", "gridò", "«Manicomio!»."], translation: "The audience shouted 'Madhouse!'", explanation: "Italian uses «guillemets» for quotations." },
      { type: "multiple-choice", question: "When an Italian says \"Ha da passà 'a nuttata\" about a crisis, she means ...", options: ["We must wait for hard times to pass.", "We should go out tonight.", "The night is too long.", "Let's stay awake."], correctIndex: 0, explanation: "Eduardo's line of hope." },
      {
        type: "matching",
        instructions: "Match the theatre word to its meaning.",
        pairs: [
          { left: "il sipario", right: "the curtain" },
          { left: "la prova", right: "the rehearsal" },
          { left: "la prima", right: "opening night" },
          { left: "il copione", right: "the script" },
          { left: "il palcoscenico", right: "the stage" },
        ],
        explanation: "Theatre vocabulary.",
      },
      { type: "listen-choose", audio: "Sei personaggi abbandonati dal loro autore cercano qualcuno che rappresenti il loro dramma.", question: "What do the six characters want?", options: ["Someone to stage their drama", "A new author to kill them", "To leave the theatre", "To watch the rehearsal"], correctIndex: 0, explanation: "\"Cercano qualcuno che\" + subjunctive." },
      { type: "dictation", audio: "Si alza il sipario e comincia la prova.", explanation: "Theatre vocabulary." },
      { type: "speak", text: "Ha da passà 'a nuttata: dobbiamo solo resistere ancora un po'.", prompt: "Comfort a friend: The night must pass: we just have to hold on a bit longer.", tip: "Say the Neapolitan line slowly, then switch to standard Italian.", explanation: "Eduardo's line in everyday use." },
    ],
  },
];
