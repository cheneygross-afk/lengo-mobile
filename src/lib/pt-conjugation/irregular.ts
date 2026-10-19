// Synced from cheneygross-afk/lengo:src/lib/pt-conjugation/irregular.ts by scripts/sync-content.mjs -- edit it there, not here.
// Irregular Brazilian Portuguese verbs, as the forms that can't be worked
// out. conjugate.ts builds every tense from them the way Portuguese
// grammars teach it:
//   imperfeito          infinitive stem + -ava / -ia (unless listed)
//   futuro, condicional the infinitive (unless a short stem is listed: far-, dir-, trar-)
//   presente do subj.   eu form of the present minus -o (unless listed)
//   imperf./futuro do subj., mais-que-perfeito
//                       the eles form of the pretérito minus -ram
//                       (fizeram -> fizesse, fizer, fizera)
//   imperativo          tu/vós from the present minus -s; the rest from the subjunctive
// so a verb lists only its present, its pretérito and what departs from
// those rules.
//
// Notation: six forms separated by spaces (eu tu ele nós vós eles), "-"
// where none exists.

export type IrrSpec = {
  pres: string;
  pret?: string;
  impf?: string;
  /** Future and conditional stem ("far" for fazer). */
  fut?: string;
  subj?: string;
  /** Participle used with ter. */
  pp?: string;
  /** Affirmative imperative of tu, when not the present minus -s ("sê", "faz / faze"). */
  impTu?: string;
  /** Affirmative imperative of vós, when not the present minus -s ("sede"). */
  impVos?: string;
  /** No imperative in use (poder, caber, haver). */
  noImp?: boolean;
};

export const IRREGULAR: Record<string, IrrSpec> = {
  ser: {
    pres: "sou és é somos sois são", pret: "fui foste foi fomos fostes foram", impf: "era eras era éramos éreis eram",
    subj: "seja sejas seja sejamos sejais sejam", pp: "sido", impTu: "sê", impVos: "sede",
  },
  estar: {
    pres: "estou estás está estamos estais estão", pret: "estive estiveste esteve estivemos estivestes estiveram",
    subj: "esteja estejas esteja estejamos estejais estejam",
  },
  ter: {
    pres: "tenho tens tem temos tendes têm", pret: "tive tiveste teve tivemos tivestes tiveram",
    impf: "tinha tinhas tinha tínhamos tínheis tinham",
  },
  haver: {
    pres: "hei hás há havemos haveis hão", pret: "houve houveste houve houvemos houvestes houveram",
    subj: "haja hajas haja hajamos hajais hajam", noImp: true,
  },
  ir: {
    pres: "vou vais vai vamos ides vão", pret: "fui foste foi fomos fostes foram",
    subj: "vá vás vá vamos vades vão", pp: "ido",
  },
  vir: {
    pres: "venho vens vem vimos vindes vêm", pret: "vim vieste veio viemos viestes vieram",
    impf: "vinha vinhas vinha vínhamos vínheis vinham", pp: "vindo",
  },
  fazer: {
    pres: "faço fazes faz fazemos fazeis fazem", pret: "fiz fizeste fez fizemos fizestes fizeram", fut: "far", pp: "feito",
    impTu: "faz / faze",
  },
  dizer: {
    pres: "digo dizes diz dizemos dizeis dizem", pret: "disse disseste disse dissemos dissestes disseram", fut: "dir", pp: "dito",
    impTu: "diz / dize",
  },
  trazer: {
    pres: "trago trazes traz trazemos trazeis trazem", pret: "trouxe trouxeste trouxe trouxemos trouxestes trouxeram", fut: "trar",
    impTu: "traz / traze",
  },
  poder: { pres: "posso podes pode podemos podeis podem", pret: "pude pudeste pôde pudemos pudestes puderam", noImp: true },
  querer: {
    pres: "quero queres quer queremos quereis querem", pret: "quis quiseste quis quisemos quisestes quiseram",
    subj: "queira queiras queira queiramos queirais queiram", impTu: "quer",
  },
  saber: {
    pres: "sei sabes sabe sabemos sabeis sabem", pret: "soube soubeste soube soubemos soubestes souberam",
    subj: "saiba saibas saiba saibamos saibais saibam",
  },
  caber: { pres: "caibo cabes cabe cabemos cabeis cabem", pret: "coube coubeste coube coubemos coubestes couberam", noImp: true },
  ver: { pres: "vejo vês vê vemos vedes veem", pret: "vi viste viu vimos vistes viram", pp: "visto" },
  dar: {
    pres: "dou dás dá damos dais dão", pret: "dei deste deu demos destes deram", subj: "dê dês dê demos deis deem",
  },
  pôr: {
    pres: "ponho pões põe pomos pondes põem", pret: "pus puseste pôs pusemos pusestes puseram",
    impf: "punha punhas punha púnhamos púnheis punham", fut: "por", pp: "posto",
  },
  ler: { pres: "leio lês lê lemos ledes leem" },
  crer: { pres: "creio crês crê cremos credes creem" },
  rir: { pres: "rio ris ri rimos rides riem" },
  ouvir: { pres: "ouço ouves ouve ouvimos ouvis ouvem" },
  pedir: { pres: "peço pedes pede pedimos pedis pedem" },
  medir: { pres: "meço medes mede medimos medis medem" },
  perder: { pres: "perco perdes perde perdemos perdeis perdem" },
  valer: { pres: "valho vales vale valemos valeis valem" },
  requerer: { pres: "requeiro requeres requer requeremos requereis requerem", subj: "requeira requeiras requeira requeiramos requeirais requeiram", impTu: "requer / requere" },
  // Like "ver" in the present only; the pretérito and participle are regular (provi, proveu, provido).
  prover: { pres: "provejo provês provê provemos provedes proveem" },
  // Defective: only the forms where "haver" has -av- (reavemos, reavia, reaverei), plus the pretérito family (reouve).
  reaver: {
    pres: "- - - reavemos reaveis -", pret: "reouve reouveste reouve reouvemos reouvestes reouveram",
    subj: "- - - - - -",
  },
  // o -> u where the stem is stressed (pulo, pule, pulem; que eu pula).
  polir: { pres: "pulo pules pule polimos polis pulem" },
  // i -> e in tu, ele, eles (freges, frege, fregem); g -> j before a and o (frijo, frija).
  frigir: { pres: "frijo freges frege frigimos frigis fregem" },
};

/**
 * Verbs built on an irregular verb: [base, prefix]. They take its forms
 * with the prefix (mantenho, mantive), with the accent a longer word
 * needs (tem -> mantém, vens -> intervéns) and pôr's accent dropped in
 * the infinitive (compor).
 */
export const COMPOUNDS: Record<string, [base: string, prefix: string]> = {
  manter: ["ter", "man"], obter: ["ter", "ob"], conter: ["ter", "con"], deter: ["ter", "de"], reter: ["ter", "re"],
  entreter: ["ter", "entre"], abster: ["ter", "abs"], ater: ["ter", "a"], suster: ["ter", "sus"],
  intervir: ["vir", "inter"], convir: ["vir", "con"], provir: ["vir", "pro"], advir: ["vir", "ad"], sobrevir: ["vir", "sobre"],
  satisfazer: ["fazer", "satis"], desfazer: ["fazer", "des"], refazer: ["fazer", "re"], perfazer: ["fazer", "per"],
  contradizer: ["dizer", "contra"], predizer: ["dizer", "pre"], bendizer: ["dizer", "ben"], maldizer: ["dizer", "mal"],
  prever: ["ver", "pre"], rever: ["ver", "re"], antever: ["ver", "ante"],
  reler: ["ler", "re"], descrer: ["crer", "des"], sorrir: ["rir", "sor"],
  despedir: ["pedir", "des"], impedir: ["pedir", "im"], expedir: ["pedir", "ex"],
  equivaler: ["valer", "equi"],
};

/** Every verb in -por is a compound of pôr (compor, propor, supor...). */
export const POR_PREFIX = /^(.+)por$/;

/** Participles that aren't -ado / -ido (besides the irregular verbs' own). */
export const PARTICIPLES: Record<string, string> = {
  abrir: "aberto", reabrir: "reaberto", entreabrir: "entreaberto",
  cobrir: "coberto", descobrir: "descoberto", encobrir: "encoberto", recobrir: "recoberto",
  escrever: "escrito", descrever: "descrito", inscrever: "inscrito", prescrever: "prescrito", reescrever: "reescrito",
  subscrever: "subscrito", transcrever: "transcrito",
};

/**
 * Verbs with two participles: the regular one goes with ter and haver
 * (compound tenses), the short one with ser and estar (passive, result)
 * and agrees like an adjective. `ter` lists what is used with ter, the
 * most usual first.
 */
export const DOUBLE_PARTICIPLES: Record<string, { ter: string[]; serEstar: string; note?: string }> = {
  aceitar: {
    ter: ["aceitado", "aceito"], serEstar: "aceito",
    note: 'With "ser" and "estar": "aceito" ("a proposta foi aceita"). With "ter" both are heard in Brazil: "tinha aceitado" (traditional) and "tinha aceito" (very common). European Portuguese: "aceite".',
  },
  entregar: {
    ter: ["entregado", "entregue"], serEstar: "entregue",
    note: 'With "ser" and "estar": "entregue" ("a encomenda foi entregue", "as cartas foram entregues"). With "ter" the traditional form is "entregado" ("tinha entregado"), though "tinha entregue" is very common in Brazil.',
  },
  ganhar: {
    ter: ["ganho", "ganhado"], serEstar: "ganho",
    note: 'In Brazil the short "ganho" is now normal everywhere: "tenho ganho", "o jogo foi ganho". "Ganhado" (with "ter") sounds old-fashioned.',
  },
  gastar: {
    ter: ["gasto", "gastado"], serEstar: "gasto",
    note: 'In Brazil the short "gasto" is normal everywhere: "tinha gasto tudo", "o dinheiro foi gasto". "Gastado" (with "ter") sounds old-fashioned.',
  },
  pagar: {
    ter: ["pago", "pagado"], serEstar: "pago",
    note: 'In Brazil the short "pago" is normal everywhere: "já tinha pago", "a conta está paga". "Pagado" (with "ter") sounds old-fashioned.',
  },
  pegar: {
    ter: ["pegado", "pego"], serEstar: "pego",
    note: '"Pego" (said with an open or a closed e, depending on the region) is common in Brazilian speech with "ter" and "ser": "tinha pego", "foi pego". Careful writing keeps "pegado" with "ter".',
  },
  eleger: {
    ter: ["elegido", "eleito"], serEstar: "eleito",
    note: 'With "ser" and "estar" only "eleito" ("ela foi eleita"). With "ter" the traditional form is "elegido", but "tinham eleito" is widely used and accepted in Brazil.',
  },
  imprimir: {
    ter: ["imprimido"], serEstar: "impresso",
    note: 'With "ter": "tinha imprimido". With "ser" and "estar": "impresso" ("o relatório já está impresso"). "Tinha impresso" is heard in speech; careful writing keeps "imprimido".',
  },
  prender: { ter: ["prendido"], serEstar: "preso" },
  acender: {
    ter: ["acendido"], serEstar: "aceso",
    note: 'With "ter": "tinha acendido". With "ser" and "estar": "aceso" ("a luz está acesa"). "Tinha aceso" is common in speech; careful writing keeps "acendido".',
  },
  morrer: { ter: ["morrido"], serEstar: "morto" },
  matar: { ter: ["matado"], serEstar: "morto", note: 'With "ter": "tinham matado". With "ser" and "estar" the participle is "morto", the same as for "morrer": "ele foi morto" (he was killed).' },
  salvar: {
    ter: ["salvado", "salvo"], serEstar: "salvo",
    note: 'With "ter" both are correct: "tinha salvado" and "tinha salvo" (very common in Brazil, also for files: "já tinha salvo o arquivo"). With "ser" and "estar" only "salvo": "foram salvos".',
  },
  soltar: {
    ter: ["soltado", "solto"], serEstar: "solto",
    note: 'With "ter" both "tinha soltado" and "tinha solto" are used in Brazil. With "ser" and "estar" only "solto": "o cachorro está solto".',
  },
  limpar: {
    ter: ["limpado"], serEstar: "limpo",
    note: 'With "ter": "tinha limpado". With "ser" and "estar": "limpo" ("a casa está limpa"). "Tinha limpo" is very common in Brazilian speech; careful writing prefers "limpado".',
  },
  secar: { ter: ["secado"], serEstar: "seco" },
  expulsar: { ter: ["expulsado"], serEstar: "expulso" },
  suspender: { ter: ["suspendido"], serEstar: "suspenso" },
  fritar: {
    ter: ["fritado", "frito"], serEstar: "frito",
    note: 'With "ter" both "tinha fritado" and "tinha frito" are used in Brazil. With "ser" and "estar" only "frito": "o peixe foi frito", "a batata está frita".',
  },
  frigir: {
    ter: ["frigido", "frito"], serEstar: "frito",
    note: 'With "ter": "tinha frigido" or "tinha frito". With "ser" and "estar" only "frito".',
  },
  enxugar: { ter: ["enxugado"], serEstar: "enxuto" },
  extinguir: { ter: ["extinguido"], serEstar: "extinto" },
  juntar: { ter: ["juntado"], serEstar: "junto" },
  encher: { ter: ["enchido"], serEstar: "cheio" },
  envolver: { ter: ["envolvido"], serEstar: "envolto" },
  distinguir: { ter: ["distinguido"], serEstar: "distinto" },
};

/** Notes shown on a verb's page (English, Portuguese in double quotes). */
export const VERB_NOTES: Record<string, string[]> = {
  ser: [
    '"Ser" is for what something is: identity, origin, profession, time and characteristics ("ela é médica", "são três horas"). For states and location use "estar". The passive is also built with it: "o livro foi escrito em 1990".',
    'The pretérito of "ser" and "ir" is the same ("fui", "foi", "fomos"): "fui ao Rio" (I went to Rio), "fui feliz" (I was happy). Context tells them apart.',
  ],
  estar: [
    '"Estar" is for states, location and the progressive: "estou cansado", "ela está em casa", "estamos falando". In speech it is often shortened: "tô", "tá", "tamo", "tão" ("tá bom?").',
    'European Portuguese builds the progressive with "a" and the infinitive ("estou a falar"); Brazil uses the gerúndio: "estou falando".',
  ],
  ter: [
    'In Brazilian speech "ter" also means there is / there are: "tem um café aqui perto" (there\'s a café nearby). Formal writing uses "haver": "há um café aqui perto".',
    '"Ter" is the auxiliary of the compound tenses: "eu tinha falado" (I had spoken). "Tenho falado" means \'I have been speaking (lately)\'; \'I have spoken\' is "falei".',
  ],
  haver: [
    'As there is / there are, "haver" is impersonal: always "há", "havia", "houve", even before a plural ("há muitos problemas", never "hão"). In speech Brazilians use "tem" instead.',
    'It is also a formal auxiliary ("ele havia saído" = "ele tinha saído") and is used for time ago: "há dois anos" (two years ago). The other forms ("hei de", "hás de") survive in "haver de" (to be bound to), now mostly literary.',
  ],
  ir: [
    '"Ir" plus an infinitive is the everyday future: "vou viajar amanhã" (I\'m going to travel tomorrow). Brazilians use it far more than the futuro do presente ("viajarei"). Its pretérito is the same as that of "ser".',
  ],
  vir: ['"Vir" means to come toward the speaker; going somewhere else is "ir". Its gerúndio and participle are both "vindo": "estou vindo" (I\'m coming), "tinha vindo" (had come).'],
  pôr: [
    '"Pôr" keeps its circumflex to tell it apart from the preposition "por"; the verbs built on it don\'t need one: "compor", "propor", "supor". In everyday Brazilian speech "botar" and "colocar" are more common.',
  ],
  poder: [
    'The circumflex tells the pretérito "pôde" (he could, managed to) from the present "pode" (he can). "Poder" has no imperative in use.',
  ],
  caber: ['"Caber" (to fit) has no imperative in use.'],
  trazer: ['The x in "trouxe" sounds like ss ("trousse"). The participle is "trazido": "tinha trazido". "Trago" as a participle ("tinha trago") is heard in speech but is considered a mistake.'],
  chegar: ['The participle is "chegado": "tinha chegado". "Tinha chego" is common in Brazilian speech but is considered a mistake in writing.'],
  dar: ['Note the subjunctive: "que eu dê", "que eles deem" (no circumflex since the 2009 spelling reform).'],
  ver: ['Don\'t mix "ver" (to see) with "vir" (to come): "eu vi" (I saw) / "eu vim" (I came); "quando eu vir" (when I see, future subjunctive of "ver") / "quando eu vier" (when I come).'],
  ler: ['"Eles leem", "eles creem", "eles veem" lost their circumflex in the 2009 spelling reform ("lêem", "crêem", "vêem" are the old spellings).'],
  pedir: ['The "eu" form and the whole present subjunctive have -ç-: "peço", "que eu peça". The verbs built on it do the same: "impedir" (impeço), "despedir" (despeço).'],
  ouvir: ['The "eu" form and the present subjunctive have -ç-: "ouço", "que eu ouça". European Portuguese also has "oiço".'],
  perder: ['The "eu" form and the present subjunctive have -c-: "perco", "que eu perca".'],
  valer: ['The "eu" form and the present subjunctive have -lh-: "valho", "que eu valha". "Vale a pena" means it\'s worth it.'],
  sair: ['Like every verb in -air ("cair", "trair", "atrair", "distrair"): "saio", "sai", "saímos", "saem", with an accent where the i is stressed on its own ("saí", "saía", "saído").'],
  construir: ['Like "destruir": "constróis", "constrói", "constroem" (the forms "construis", "construi", "construem" also exist). Other verbs in -uir keep the u: "inclui", "incluem".'],
  odiar: ['One of the -iar verbs conjugated like the -ear verbs where the stem is stressed: "odeio", "odeia", "odeiam", "que eu odeie" (also "remediar", "ansiar", "incendiar", "mediar", "intermediar").'],
  passear: ['Every -ear verb adds an i where the stem is stressed: "passeio", "passeia", "passeiam", "que eu passeie", but "passeamos", "passeei".'],
  querer: ['"Querer" has the subjunctive "queira" and the pretérito "quis". "Queria" (imperfect) is the polite way to ask: "eu queria um café".'],
  dizer: ['The "tu" imperative is "diz" (or the older "dize"); in Brazilian speech "fala" often replaces it: "fala aí!".'],
  saber: ['"Saber" is knowing facts and skills ("sei nadar": I can swim); knowing people and places is "conhecer". The pretérito "soube" often means found out.'],
  conhecer: ['"Conhecer" is knowing people, places and things by experience ("conheço o Rio"); in the pretérito it often means to meet: "conheci a Ana em 2020".'],
  fazer: ['"Faz" is also used for time ago: "faz dois anos" (two years ago), like "há dois anos".'],
  chover: ['Weather verbs are only used in the "ele" form: "chove", "choveu", "vai chover".'],
  doer: ['Mostly used in the "ele" and "eles" forms, with the thing that hurts as the subject: "minha cabeça dói" (my head hurts), "meus pés doem".'],
  rir: ['Like "sorrir": "rio", "ri", "riem", "que eu ria".'],
  requerer: ['Not conjugated like "querer": the present has "requeiro" and the subjunctive "requeira", but the pretérito is regular ("requeri", "requereu") and so is everything built on it ("requeresse", "requerer").'],
  prover: ['Like "ver" in the present ("provejo", "provê", "proveem", "que eu proveja"), but regular elsewhere: "provi", "proveu", "provido". Don\'t confuse it with "provir" (to come from: "provém", "proveio").'],
  reaver: ['A defective verb (to get back): it only has the forms in which "haver" has -av- ("reavemos", "reavia", "reaverei") and the ones built on the pretérito ("reouve", "reouvesse", "reouver"). Where a form is missing, use "recuperar": "eu recupero".'],
  polir: ['The o of the stem becomes u where it is stressed: "pulo", "pule", "pulem", "que eu pula", but "polimos", "poli", "polido".'],
  frigir: ['The i of the stem becomes e in "freges", "frege", "fregem", and the g becomes j before a and o: "frijo", "que eu frija". In everyday Brazil "fritar" is the usual verb; "frigir" survives in "no frigir dos ovos" (when all is said and done).'],
  gostar: ['Always with "de": "gosto de café", "gosto de dançar" (and "de" + "o" = "do": "gosto do Rio").'],
  ficar: ['A very Brazilian verb: to stay ("fiquei em casa"), to become ("ficou nervoso"), to be located ("onde fica o banco?"), to suit ("ficou bem em você").'],
};
