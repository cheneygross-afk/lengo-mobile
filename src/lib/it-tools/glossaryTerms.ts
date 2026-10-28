// Synced from cheneygross-afk/lengo:src/lib/it-tools/glossaryTerms.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Italian glossary's reference lists, written by hand: the grammar
// terms the course and its grammar guides use, explained in plain English,
// and the false friends that trip up English speakers. English text with
// Italian in "double quotes" (TapText's mixed mode speaks the Italian).

export type ItGrammarTerm = {
  /** The English term: "Auxiliary verb". */
  term: string;
  /** The Italian name grammars use: "verbo ausiliare". */
  it: string;
  /** What it means, in plain English, with an example or two. */
  def: string;
};

export const IT_GRAMMAR_TERMS: ItGrammarTerm[] = [
  {
    term: "Article",
    it: "articolo",
    def: 'The little word before a noun. Definite (the): "il", "lo", "la", "l\'", "i", "gli", "le". Indefinite (a, an): "un", "uno", "una", "un\'". Which one depends on the gender, the number and the first sound of the next word: "il libro", "lo studente", "l\'amico", "gli amici".',
  },
  {
    term: "Gender",
    it: "genere",
    def: 'Every Italian noun is masculine or feminine, even things: "il tavolo" (masculine), "la sedia" (feminine). Most nouns in -o are masculine and most in -a feminine; nouns in -e can be either ("il fiore", "la notte").',
  },
  {
    term: "Agreement",
    it: "accordo",
    def: 'Adjectives, articles and some participles change their ending to match the noun\'s gender and number: "la casa bianca", "i libri rossi", "le ragazze sono arrivate".',
  },
  {
    term: "Articulated preposition",
    it: "preposizione articolata",
    def: 'A preposition fused with the article that follows it: "di" + "il" = "del", "a" + "la" = "alla", "in" + "il" = "nel", "su" + "lo" = "sullo", "da" + "gli" = "dagli". "Vado al mare" (I\'m going to the seaside).',
  },
  {
    term: "Partitive",
    it: "partitivo",
    def: 'Some, any: "di" plus the article. "Compro del pane" (I\'m buying some bread), "ci sono dei problemi" (there are some problems).',
  },
  {
    term: "Subject pronoun",
    it: "pronome soggetto",
    def: '"io", "tu", "lui", "lei", "noi", "voi", "loro". Usually left out, because the verb ending already shows the person: "parlo italiano" (I speak Italian). Said aloud for emphasis or contrast: "io pago, tu no".',
  },
  {
    term: "Formal you",
    it: "Lei (forma di cortesia)",
    def: 'The polite "you" for strangers, customers and older people: "Lei", with the verb in the third person singular, like "lei" (she). "Lei è di Roma?" (are you from Rome?). Often written with a capital L in letters and emails.',
  },
  {
    term: "Auxiliary verb",
    it: "verbo ausiliare",
    def: 'The helper verb of the compound tenses: "avere" or "essere". Most verbs take "avere" ("ho mangiato"); verbs of movement and change, reflexive verbs and "essere" itself take "essere" ("sono andato", "mi sono alzata", "è stato").',
  },
  {
    term: "Past participle",
    it: "participio passato",
    def: 'The form used in the compound tenses: "parlato", "creduto", "dormito". Many common verbs have an irregular one: "fatto", "detto", "visto", "preso", "messo", "scritto".',
  },
  {
    term: "Participle agreement",
    it: "accordo del participio",
    def: 'With "essere" the participle agrees with the subject: "Marco è partito", "Giulia è partita", "sono partiti". With "avere" it agrees only with a direct object pronoun in front of it: "le ho viste" (I saw them, women).',
  },
  {
    term: "Present perfect",
    it: "passato prossimo",
    def: 'The everyday past for finished actions: auxiliary plus participle. "Ieri ho lavorato" (yesterday I worked), "siamo usciti alle otto" (we went out at eight).',
  },
  {
    term: "Imperfect",
    it: "imperfetto",
    def: 'The past of description, habit and background: "da bambino giocavo a calcio" (as a child I used to play football), "pioveva quando sono uscito" (it was raining when I went out).',
  },
  {
    term: "Pluperfect",
    it: "trapassato prossimo",
    def: 'Had done: the imperfect of the auxiliary plus the participle. "Quando sono arrivato, il treno era già partito" (when I arrived, the train had already left).',
  },
  {
    term: "Remote past",
    it: "passato remoto",
    def: 'The past of history, novels and fairy tales: "Dante nacque a Firenze", "C\'era una volta un re che ebbe tre figlie". In speech most Italians use the passato prossimo instead, though in Tuscany and the South the remote past is still spoken.',
  },
  {
    term: "Future",
    it: "futuro semplice",
    def: 'Will: "domani partirò" (I\'ll leave tomorrow). Also a guess about the present: "saranno le otto" (it must be about eight). The futuro anteriore ("avrò finito") is will have done, or a guess about the past: "avrà perso il treno" (he must have missed the train).',
  },
  {
    term: "Conditional",
    it: "condizionale",
    def: 'Would: "comprerei una casa al mare". Also for polite requests and advice: "vorrei un caffè", "dovresti dormire di più". The past conditional ("avrei comprato") is would have, and the future seen from the past: "ha detto che sarebbe venuto" (he said he would come).',
  },
  {
    term: "Subjunctive",
    it: "congiuntivo",
    def: 'The mood of opinion, wish, doubt and feeling, mostly after "che": "penso che sia vero", "voglio che tu venga", "è strano che non risponda". Also after some conjunctions: "benché", "affinché", "prima che".',
  },
  {
    term: "Sequence of tenses",
    it: "concordanza dei tempi",
    def: 'The tense of the subjunctive follows the main verb: "penso che arrivi domani" (present), but "pensavo che arrivasse il giorno dopo" (past main verb, imperfect subjunctive), and "pensavo che fosse già arrivato" (pluperfect subjunctive).',
  },
  {
    term: "If-sentence",
    it: "periodo ipotetico",
    def: 'Real: "se piove, resto a casa". Possible: "se avessi tempo, verrei" (if I had time, I would come). Impossible, about the past: "se l\'avessi saputo, sarei venuto" (if I had known, I would have come). Never the conditional after "se".',
  },
  {
    term: "Imperative",
    it: "imperativo",
    def: 'Commands: "parla!" (tu), "parli!" (Lei), "parliamo!" (let\'s), "parlate!" (voi). The negative with "tu" is "non" plus the infinitive: "non parlare!". Pronouns join the tu, noi and voi forms: "dimmi", "fallo", "andiamoci".',
  },
  {
    term: "Gerund",
    it: "gerundio",
    def: 'The -ando / -endo form: "parlando", "leggendo". With "stare" it makes the progressive: "sto mangiando" (I\'m eating right now). Alone it means while, by or since: "camminando ho visto Marco" (while walking I saw Marco).',
  },
  {
    term: "Infinitive",
    it: "infinito",
    def: 'The dictionary form, in -are, -ere or -ire (and a few in -rre: "porre", "tradurre", "trarre"). Also the negative command for "tu" and the form after modal verbs: "devo partire".',
  },
  {
    term: "Modal verb",
    it: "verbo modale (servile)",
    def: '"Potere", "volere", "dovere" (and "sapere" in the sense of can): followed by an infinitive. In the compound tenses they usually take the auxiliary of the verb that follows: "ho dovuto lavorare", but "sono dovuto partire".',
  },
  {
    term: "Reflexive verb",
    it: "verbo riflessivo",
    def: 'A verb with a pronoun that refers back to the subject: "alzarsi" (to get up), "mi alzo", "ti alzi", "si alza". Reflexive verbs take "essere": "mi sono alzata alle sette".',
  },
  {
    term: "Pronominal verb",
    it: "verbo pronominale",
    def: 'A verb with pronouns built in and a meaning of its own: "andarsene" (to leave: "me ne vado"), "farcela" (to manage: "ce la faccio"), "cavarsela" (to get by), "metterci" (to take time: "ci metto un\'ora").',
  },
  {
    term: "Direct object pronoun",
    it: "pronome diretto",
    def: 'Stands for the thing or person the verb acts on: "mi", "ti", "lo", "la", "ci", "vi", "li", "le". It goes before the verb: "lo compro" (I\'ll buy it), "la conosci?" (do you know her?).',
  },
  {
    term: "Indirect object pronoun",
    it: "pronome indiretto",
    def: 'To or for someone: "mi", "ti", "gli" (to him, and in speech to them), "le" (to her), "Le" (to you, formal), "ci", "vi", "gli". "Gli scrivo domani" (I\'ll write to him tomorrow), "mi piace" (it pleases me: I like it).',
  },
  {
    term: "Combined pronouns",
    it: "pronomi combinati",
    def: 'An indirect and a direct pronoun together: "mi" becomes "me", "ti" becomes "te", and "gli" and "le" both become "glie-": "me lo dai?" (will you give it to me?), "glielo dico" (I\'ll tell him / her).',
  },
  {
    term: "Ci",
    it: "particella ci",
    def: 'There, to that place: "ci vado domani" (I\'m going there tomorrow). Also about it, on it: "ci penso io" (I\'ll take care of it). And in many set phrases: "c\'è", "ci vuole", "ci metto".',
  },
  {
    term: "Ne",
    it: "particella ne",
    def: 'Of it, of them, some: "quante mele vuoi? Ne voglio due" (I want two of them). Also from there and about it: "ne parliamo domani" (we\'ll talk about it tomorrow).',
  },
  {
    term: "Impersonal si",
    it: "si impersonale",
    def: 'One, people, you in general: "si mangia bene qui" (you eat well here), "in Italia si cena tardi" (in Italy people have dinner late).',
  },
  {
    term: "Passive si",
    it: "si passivante",
    def: '"Si" with a verb that agrees with its object, like a passive: "si vende casa" (house for sale), "si vendono appartamenti" (flats for sale).',
  },
  {
    term: "Passive voice",
    it: "forma passiva",
    def: '"Essere" (or "venire", in the simple tenses) plus the participle: "il ponte è stato costruito nel 1950", "la lettera viene spedita domani". The doer comes after "da": "scritto da Calvino".',
  },
  {
    term: "Relative pronoun",
    it: "pronome relativo",
    def: '"Che" (who, which, that) for subjects and objects: "il libro che leggo". "Cui" after a preposition: "la città in cui vivo", "l\'amico a cui scrivo". "Il quale", "la quale" are more formal.',
  },
  {
    term: "Comparative and superlative",
    it: "comparativo e superlativo",
    def: '"Più ... di" (more ... than), "meno ... di" (less ... than), "così ... come" (as ... as). "Il più bello" (the most beautiful), and "bellissimo" (very beautiful). Irregular ones: "migliore" (better), "peggiore" (worse), "ottimo" (excellent).',
  },
  {
    term: "Suffixes",
    it: "alterati",
    def: 'Endings that change the size or the feeling of a word: "-ino", "-etto" (small, dear: "gattino", "casetta"), "-one" (big: "librone"), "-accio" (bad: "tempaccio", awful weather).',
  },
  {
    term: "Elision",
    it: "elisione",
    def: 'A vowel dropped before another vowel and replaced by an apostrophe: "l\'amico", "un\'amica", "c\'è", "dov\'è", "quest\'anno".',
  },
  {
    term: "Truncation",
    it: "troncamento",
    def: 'A final vowel or syllable dropped with no apostrophe: "buon giorno", "signor Rossi", "dottor Bianchi", "un amico" (never "un\'amico" for a man).',
  },
  {
    term: "Double consonants",
    it: "consonanti doppie",
    def: 'Written double, said longer, and they change the meaning: "pala" (shovel) and "palla" (ball), "caro" (dear) and "carro" (cart), "nono" (ninth) and "nonno" (grandfather).',
  },
  {
    term: "Written accent",
    it: "accento grafico",
    def: 'Written only on a stressed final vowel and on a few short words: "città", "perché", "più", "è" (is, unlike "e", and). Grave on most vowels ("è", "più"), acute on a closed e ("perché", "né").',
  },
  {
    term: "Implicit clause",
    it: "forma implicita",
    def: 'A clause with an infinitive, gerund or participle instead of a conjugated verb: "dopo aver mangiato" (after eating), "essendo stanco" (being tired), "finito il lavoro" (once the work was done).',
  },
  {
    term: "Reported speech",
    it: "discorso indiretto",
    def: 'Telling what someone said: "Marco dice: \'Sono stanco\'" becomes "Marco dice che è stanco", and in the past "Marco ha detto che era stanco". Tenses, pronouns and words like "qui" and "domani" shift.',
  },
  {
    term: "Connector",
    it: "connettivo",
    def: 'A word that links ideas: "però" (but), "quindi" (so), "cioè" (that is), "comunque" (anyway), "infatti" (indeed), "insomma" (in short), "tuttavia" (however).',
  },
  {
    term: "Register",
    it: "registro",
    def: 'How formal the language is: "ciao, come stai?" (informal), "buongiorno, come sta?" (formal), and the written register of offices and laws ("La preghiamo di...", "si comunica che...").',
  },
];

export type ItFalseFriend = {
  /** The Italian word. */
  it: string;
  /** What it means. */
  means: string;
  /** The English word it looks like, and the Italian for that. */
  notEn: string;
  notIt: string;
  /** An example sentence (Italian), and its English. */
  ex: string;
  exEn: string;
};

export const IT_FALSE_FRIENDS: ItFalseFriend[] = [
  { it: "la camera", means: "a room, a bedroom", notEn: "a camera", notIt: "la macchina fotografica", ex: "Ho prenotato una camera doppia.", exEn: "I've booked a double room." },
  { it: "i parenti", means: "relatives", notEn: "parents", notIt: "i genitori", ex: "A Natale vengono tutti i parenti.", exEn: "All the relatives come at Christmas." },
  { it: "la libreria", means: "a bookshop; a bookcase", notEn: "a library", notIt: "la biblioteca", ex: "Ho comprato il libro in libreria.", exEn: "I bought the book at the bookshop." },
  { it: "la fattoria", means: "a farm", notEn: "a factory", notIt: "la fabbrica", ex: "I nonni vivono in una fattoria.", exEn: "My grandparents live on a farm." },
  { it: "la fabbrica", means: "a factory", notEn: "fabric", notIt: "il tessuto, la stoffa", ex: "Lavora in una fabbrica di scarpe.", exEn: "She works in a shoe factory." },
  { it: "eventualmente", means: "if need be, possibly", notEn: "eventually", notIt: "alla fine, prima o poi", ex: "Eventualmente ti chiamo domani.", exEn: "If need be, I'll call you tomorrow." },
  { it: "attualmente", means: "currently, at present", notEn: "actually", notIt: "in realtà, veramente", ex: "Attualmente vivo a Torino.", exEn: "I currently live in Turin." },
  { it: "morbido", means: "soft", notEn: "morbid", notIt: "morboso", ex: "Questo cuscino è molto morbido.", exEn: "This pillow is very soft." },
  { it: "educato", means: "polite, well-mannered", notEn: "educated", notIt: "istruito, colto", ex: "È un bambino molto educato.", exEn: "He's a very polite child." },
  { it: "pretendere", means: "to demand, to expect", notEn: "to pretend", notIt: "fingere", ex: "Pretende una risposta subito.", exEn: "He demands an answer right away." },
  { it: "sensibile", means: "sensitive", notEn: "sensible", notIt: "sensato, ragionevole", ex: "Ho la pelle sensibile.", exEn: "I have sensitive skin." },
  { it: "il magazzino", means: "a warehouse, a storeroom", notEn: "a magazine", notIt: "la rivista", ex: "La merce è in magazzino.", exEn: "The goods are in the warehouse." },
  { it: "confrontare", means: "to compare", notEn: "to confront", notIt: "affrontare", ex: "Confrontiamo i prezzi prima di comprare.", exEn: "Let's compare the prices before buying." },
  { it: "l'argomento", means: "a topic, a subject", notEn: "an argument", notIt: "la discussione, il litigio", ex: "Cambiamo argomento.", exEn: "Let's change the subject." },
  { it: "annoiato", means: "bored", notEn: "annoyed", notIt: "infastidito, seccato", ex: "I ragazzi sono annoiati.", exEn: "The kids are bored." },
  { it: "la cantina", means: "a cellar; a winery", notEn: "a canteen", notIt: "la mensa", ex: "Il vino è in cantina.", exEn: "The wine is in the cellar." },
  { it: "il preservativo", means: "a condom", notEn: "a preservative", notIt: "il conservante", ex: "Questa marmellata è senza conservanti.", exEn: "This jam has no preservatives (\"conservanti\", never \"preservativi\")." },
  { it: "l'estate", means: "summer", notEn: "an estate", notIt: "la tenuta, la proprietà", ex: "Quest'estate andiamo in Sicilia.", exEn: "This summer we're going to Sicily." },
  { it: "il romanzo", means: "a novel", notEn: "a romance", notIt: "la storia d'amore", ex: "Sto leggendo un romanzo di Calvino.", exEn: "I'm reading a novel by Calvino." },
  { it: "la novella", means: "a short story, a tale", notEn: "a novel", notIt: "il romanzo", ex: "Il Decameron è una raccolta di novelle.", exEn: "The Decameron is a collection of tales." },
  { it: "largo", means: "wide, broad", notEn: "large", notIt: "grande", ex: "La strada è larga dieci metri.", exEn: "The road is ten metres wide." },
  { it: "caldo", means: "hot, warm", notEn: "cold", notIt: "freddo", ex: "Oggi fa molto caldo.", exEn: "It's very hot today." },
  { it: "il rumore", means: "a noise", notEn: "a rumour", notIt: "la voce, la diceria", ex: "Che cos'è questo rumore?", exEn: "What's that noise?" },
  { it: "simpatico", means: "nice, likeable", notEn: "sympathetic", notIt: "comprensivo, solidale", ex: "Il tuo amico è molto simpatico.", exEn: "Your friend is very nice." },
  { it: "ricordare", means: "to remember; to remind", notEn: "to record", notIt: "registrare", ex: "Non ricordo il suo nome.", exEn: "I don't remember his name." },
  { it: "la lussuria", means: "lust", notEn: "luxury", notIt: "il lusso", ex: "La lussuria è uno dei sette peccati capitali.", exEn: "Lust is one of the seven deadly sins." },
  { it: "crudo", means: "raw", notEn: "crude", notIt: "rozzo, volgare", ex: "Il prosciutto crudo è il mio preferito.", exEn: "Prosciutto crudo (cured, uncooked ham) is my favourite." },
  { it: "il cocomero", means: "a watermelon", notEn: "a cucumber", notIt: "il cetriolo", ex: "D'estate mangiamo il cocomero.", exEn: "In summer we eat watermelon." },
  { it: "tremendo", means: "terrible, awful", notEn: "tremendous (huge, great)", notIt: "enorme, straordinario", ex: "Ho un mal di testa tremendo.", exEn: "I have a terrible headache." },
  { it: "la patente", means: "a driving licence", notEn: "a patent", notIt: "il brevetto", ex: "Ho preso la patente a diciotto anni.", exEn: "I got my driving licence at eighteen." },
  { it: "bravo", means: "good (at something), skilled", notEn: "brave", notIt: "coraggioso", ex: "Sei bravo in matematica.", exEn: "You're good at maths." },
  { it: "occorrere", means: "to be needed", notEn: "to occur", notIt: "succedere, accadere", ex: "Occorrono due ore per arrivare.", exEn: "It takes two hours to get there." },
  { it: "fastidioso", means: "annoying", notEn: "fastidious", notIt: "pignolo, esigente", ex: "Questo rumore è fastidioso.", exEn: "This noise is annoying." },
  { it: "conveniente", means: "good value, cheap", notEn: "convenient", notIt: "comodo, pratico", ex: "Il menù del pranzo è conveniente.", exEn: "The lunch menu is good value." },
  { it: "intossicato", means: "poisoned (by food or gas)", notEn: "intoxicated (drunk)", notIt: "ubriaco", ex: "Dopo aver mangiato le cozze si è intossicato.", exEn: "He got food poisoning after eating the mussels." },
  { it: "l'editore", means: "a publisher", notEn: "an editor", notIt: "il redattore, il curatore", ex: "L'editore pubblica dieci libri all'anno.", exEn: "The publisher brings out ten books a year." },
  { it: "la lettura", means: "reading", notEn: "a lecture", notIt: "la lezione, la conferenza", ex: "La lettura è il mio passatempo preferito.", exEn: "Reading is my favourite pastime." },
  { it: "il collegio", means: "a boarding school; a board (of people)", notEn: "a college (university)", notIt: "l'università", ex: "Ha studiato in un collegio svizzero.", exEn: "She went to a Swiss boarding school." },
  { it: "il tasto", means: "a key (on a keyboard), a button", notEn: "taste", notIt: "il gusto, il sapore", ex: "Premi il tasto verde.", exEn: "Press the green button." },
  { it: "candido", means: "pure white; innocent", notEn: "candid", notIt: "franco, schietto", ex: "Un vestito candido.", exEn: "A pure white dress." },
  { it: "la stampa", means: "the press; printing", notEn: "a stamp", notIt: "il francobollo", ex: "La notizia è su tutta la stampa.", exEn: "The news is all over the press." },
  { it: "domandare", means: "to ask", notEn: "to demand", notIt: "esigere, pretendere", ex: "Posso domandarti una cosa?", exEn: "Can I ask you something?" },
];
