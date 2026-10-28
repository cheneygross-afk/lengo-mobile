// Synced from cheneygross-afk/lengo:src/lib/it-conjugation/irregular.ts by scripts/sync-content.mjs -- edit it there, not here.
// Irregular Italian verbs, as the forms that can't be worked out.
// conjugate.ts builds every tense from them the way Italian grammars teach:
//   imperfetto          the imperfect stem + -vo, -vi, -va, -vamo, -vate, -vano
//                       (parla-, crede-, dormi-; face- for fare, dice- for dire)
//   passato remoto      a "strong" stem in the io, lui and loro forms
//                       (scriss-i, scriss-e, scriss-ero) and the imperfect
//                       stem in the others (scrive-sti, scrive-mmo, scrive-ste)
//   futuro, condiz.     the infinitive minus -e (unless a short stem is listed: sar-, andr-, verr-)
//   congiuntivo pres.   the io form of the present minus -o, + -a (venga, esca),
//                       with noi and voi from the present noi form (veniamo, veniate)
//   congiuntivo imperf. the imperfect stem + -ssi (facessi, dicessi)
//   gerundio            the imperfect stem + -ndo where it is listed (facendo, dicendo)
//   imperativo          tu and voi from the present (vieni, venite), the rest
//                       from the subjunctive (venga, veniamo, vengano)
// so a verb lists only what departs from those rules.
//
// Notation: six forms separated by spaces (io tu lui noi voi loro); two
// accepted forms of one person joined by "/" ("devo/debbo").

export type IrrSpec = {
  /** Present indicative, six forms. */
  pres?: string;
  /** Imperfect stem ("face" for fare), or six full forms (essere). */
  impf?: string;
  /** Strong stem of the passato remoto ("scriss"), or six full forms (essere, dare). */
  pr?: string;
  /** Stem of the passato remoto's tu, noi and voi forms when not the imperfect stem ("ste" for stare). */
  prWeak?: string;
  /** Future and conditional stem ("sar" for essere). */
  fut?: string;
  /** Present subjunctive, six forms. */
  cg?: string;
  /** Imperfect subjunctive stem ("fo" for essere: fossi). */
  cgimpf?: string;
  /** Past participle. */
  pp?: string;
  /** Another accepted participle ("perduto"). */
  ppAlt?: string;
  /** Gerund, when not built from the imperfect stem. */
  ger?: string;
  /** Imperative for tu, when not the present tu form ("va'/vai", "sii"). */
  impTu?: string;
  /** Imperative for voi, when not the present voi form ("siate"). */
  impVoi?: string;
  /** No imperative in use (potere, dovere, volere). */
  noImp?: boolean;
};

export const IRREGULAR: Record<string, IrrSpec> = {
  essere: {
    pres: "sono sei è siamo siete sono", impf: "ero eri era eravamo eravate erano", pr: "fui fosti fu fummo foste furono",
    fut: "sar", cg: "sia sia sia siamo siate siano", cgimpf: "fo", pp: "stato", ger: "essendo", impTu: "sii", impVoi: "siate",
  },
  avere: {
    pres: "ho hai ha abbiamo avete hanno", pr: "ebb", fut: "avr", cg: "abbia abbia abbia abbiamo abbiate abbiano", impTu: "abbi", impVoi: "abbiate",
  },
  andare: { pres: "vado vai va andiamo andate vanno", fut: "andr", impTu: "va'/vai" },
  fare: { pres: "faccio fai fa facciamo fate fanno", impf: "face", pr: "fec", fut: "far", pp: "fatto", impTu: "fa'/fai" },
  rifare: { pres: "rifaccio rifai rifà rifacciamo rifate rifanno", impf: "riface", pr: "rifec", fut: "rifar", pp: "rifatto", impTu: "rifai" },
  dare: {
    pres: "do dai dà diamo date danno", pr: "diedi/detti desti diede/dette demmo deste diedero/dettero", fut: "dar",
    cg: "dia dia dia diamo diate diano", cgimpf: "de", impTu: "da'/dai",
  },
  stare: {
    pres: "sto stai sta stiamo state stanno", pr: "stett", prWeak: "ste", fut: "star", cg: "stia stia stia stiamo stiate stiano", cgimpf: "ste",
    impTu: "sta'/stai",
  },
  dire: { pres: "dico dici dice diciamo dite dicono", impf: "dice", pr: "diss", fut: "dir", pp: "detto", impTu: "di'" },
  venire: { pres: "vengo vieni viene veniamo venite vengono", pr: "venn", fut: "verr", pp: "venuto" },
  tenere: { pres: "tengo tieni tiene teniamo tenete tengono", pr: "tenn", fut: "terr" },
  rimanere: { pres: "rimango rimani rimane rimaniamo rimanete rimangono", pr: "rimas", fut: "rimarr", pp: "rimasto" },
  potere: { pres: "posso puoi può possiamo potete possono", fut: "potr", noImp: true },
  volere: { pres: "voglio vuoi vuole vogliamo volete vogliono", pr: "voll", fut: "vorr", noImp: true },
  dovere: {
    pres: "devo/debbo devi deve dobbiamo dovete devono/debbono", fut: "dovr", cg: "debba debba debba dobbiamo dobbiate debbano", noImp: true,
  },
  sapere: {
    pres: "so sai sa sappiamo sapete sanno", pr: "sepp", fut: "sapr", cg: "sappia sappia sappia sappiamo sappiate sappiano",
    impTu: "sappi", impVoi: "sappiate",
  },
  bere: { pres: "bevo bevi beve beviamo bevete bevono", impf: "beve", pr: "bevv", fut: "berr", pp: "bevuto" },
  uscire: { pres: "esco esci esce usciamo uscite escono" },
  salire: { pres: "salgo sali sale saliamo salite salgono" },
  morire: { pres: "muoio muori muore moriamo morite muoiono", pp: "morto" },
  udire: { pres: "odo odi ode udiamo udite odono" },
  cucire: { pres: "cucio cuci cuce cuciamo cucite cuciono" },
  riempire: { pres: "riempio riempi riempie riempiamo riempite riempiono", ger: "riempiendo" },
  compiere: {
    pres: "compio compi compie compiamo compite compiono", impf: "compi", pr: "compii compisti compì compimmo compiste compirono",
    fut: "compir", pp: "compiuto", ger: "compiendo",
  },
  apparire: { pres: "appaio appari appare appariamo apparite appaiono", pr: "apparv", pp: "apparso" },
  aprire: { pp: "aperto" },
  coprire: { pp: "coperto" },
  scoprire: { pp: "scoperto" },
  offrire: { pp: "offerto" },
  soffrire: { pp: "sofferto" },
  porre: { pres: "pongo poni pone poniamo ponete pongono", impf: "pone", pr: "pos", fut: "porr", pp: "posto" },
  tradurre: {
    pres: "traduco traduci traduce traduciamo traducete traducono", impf: "traduce", pr: "traduss", fut: "tradurr", pp: "tradotto",
  },
  trarre: { pres: "traggo trai trae traiamo traete traggono", impf: "trae", pr: "trass", fut: "trarr", pp: "tratto" },
  scegliere: { pres: "scelgo scegli sceglie scegliamo scegliete scelgono", pr: "scels", pp: "scelto" },
  cogliere: { pres: "colgo cogli coglie cogliamo cogliete colgono", pr: "cols", pp: "colto" },
  togliere: { pres: "tolgo togli toglie togliamo togliete tolgono", pr: "tols", pp: "tolto" },
  sciogliere: { pres: "sciolgo sciogli scioglie sciogliamo sciogliete sciolgono", pr: "sciols", pp: "sciolto" },
  spegnere: { pres: "spengo spegni spegne spegniamo spegnete spengono", pr: "spens", pp: "spento" },
  piacere: { pres: "piaccio piaci piace piacciamo piacete piacciono", pr: "piacqu" },
  tacere: { pres: "taccio taci tace tacciamo tacete tacciono", pr: "tacqu" },
  nascere: { pr: "nacqu", pp: "nato" },
  conoscere: { pr: "conobb" },
  crescere: { pr: "crebb" },
  cuocere: { pres: "cuocio cuoci cuoce cuociamo cuocete cuociono", pr: "coss", pp: "cotto" },
  muovere: { pr: "moss", pp: "mosso" },
  sedere: { pres: "siedo siedi siede sediamo sedete siedono" },
  possedere: { pres: "possiedo possiedi possiede possediamo possedete possiedono" },
  valere: { pres: "valgo vali vale valiamo valete valgono", pr: "vals", fut: "varr", pp: "valso" },
  parere: { pres: "paio pari pare paiamo parete paiono", pr: "parv", fut: "parr", pp: "parso" },
  cadere: { pr: "cadd", fut: "cadr" },
  vedere: { pr: "vid", fut: "vedr", pp: "visto", ppAlt: "veduto" },
  prevedere: { pr: "previd", fut: "prevedr", pp: "previsto" },
  provvedere: { pr: "provvid", pp: "provveduto" },
  vivere: { pr: "viss", fut: "vivr", pp: "vissuto" },
  godere: { fut: "godr" },
  piovere: { pr: "piovv" },
  chiedere: { pr: "chies", pp: "chiesto" },
  rispondere: { pr: "rispos", pp: "risposto" },
  nascondere: { pr: "nascos", pp: "nascosto" },
  prendere: { pr: "pres", pp: "preso" },
  mettere: { pr: "mis", pp: "messo" },
  leggere: { pr: "less", pp: "letto" },
  reggere: { pr: "ress", pp: "retto" },
  proteggere: { pr: "protess", pp: "protetto" },
  scrivere: { pr: "scriss", pp: "scritto" },
  rompere: { pr: "rupp", pp: "rotto" },
  chiudere: { pr: "chius", pp: "chiuso" },
  concludere: { pr: "conclus", pp: "concluso" },
  deludere: { pr: "delus", pp: "deluso" },
  illudere: { pr: "illus", pp: "illuso" },
  decidere: { pr: "decis", pp: "deciso" },
  uccidere: { pr: "uccis", pp: "ucciso" },
  coincidere: { pr: "coincis", pp: "coinciso" },
  incidere: { pr: "incis", pp: "inciso" },
  ridere: { pr: "ris", pp: "riso" },
  dividere: { pr: "divis", pp: "diviso" },
  perdere: { pr: "pers", pp: "perso", ppAlt: "perduto" },
  spendere: { pr: "spes", pp: "speso" },
  accendere: { pr: "acces", pp: "acceso" },
  scendere: { pr: "sces", pp: "sceso" },
  offendere: { pr: "offes", pp: "offeso" },
  difendere: { pr: "difes", pp: "difeso" },
  attendere: { pr: "attes", pp: "atteso" },
  tendere: { pr: "tes", pp: "teso" },
  pretendere: { pr: "pretes", pp: "preteso" },
  stendere: { pr: "stes", pp: "steso" },
  sospendere: { pr: "sospes", pp: "sospeso" },
  dipendere: { pr: "dipes", pp: "dipeso" },
  appendere: { pr: "appes", pp: "appeso" },
  rendere: { pr: "res", pp: "reso" },
  arrendere: { pr: "arres", pp: "arreso" },
  correre: { pr: "cors", pp: "corso" },
  vincere: { pr: "vins", pp: "vinto" },
  spingere: { pr: "spins", pp: "spinto" },
  dipingere: { pr: "dipins", pp: "dipinto" },
  fingere: { pr: "fins", pp: "finto" },
  stringere: { pr: "strins", pp: "stretto" },
  piangere: { pr: "pians", pp: "pianto" },
  giungere: { pr: "giuns", pp: "giunto" },
  distinguere: { pr: "distins", pp: "distinto" },
  volgere: { pr: "vols", pp: "volto" },
  accorgere: { pr: "accors", pp: "accorto" },
  porgere: { pr: "pors", pp: "porto" },
  sorgere: { pr: "sors", pp: "sorto" },
  dirigere: { pr: "diress", pp: "diretto" },
  esigere: { pp: "esatto" },
  redigere: { pr: "redass", pp: "redatto" },
  friggere: { pr: "friss", pp: "fritto" },
  sconfiggere: { pr: "sconfiss", pp: "sconfitto" },
  assumere: { pr: "assuns", pp: "assunto" },
  presumere: { pr: "presuns", pp: "presunto" },
  esprimere: { pr: "espress", pp: "espresso" },
  deprimere: { pr: "depress", pp: "depresso" },
  opprimere: { pr: "oppress", pp: "oppresso" },
  reprimere: { pr: "repress", pp: "represso" },
  sopprimere: { pr: "soppress", pp: "soppresso" },
  discutere: { pr: "discuss", pp: "discusso" },
  succedere: { pr: "success", pp: "successo" },
  concedere: { pr: "concess", pp: "concesso" },
  emergere: { pr: "emers", pp: "emerso" },
  immergere: { pr: "immers", pp: "immerso" },
  spargere: { pr: "spars", pp: "sparso" },
  mordere: { pr: "mors", pp: "morso" },
  fondere: { pr: "fus", pp: "fuso" },
  persuadere: { pr: "persuas", pp: "persuaso" },
  invadere: { pr: "invas", pp: "invaso" },
  evadere: { pr: "evas", pp: "evaso" },
  radere: { pr: "ras", pp: "raso" },
  assolvere: { pr: "assols", pp: "assolto" },
  risolvere: { pr: "risols", pp: "risolto" },
  riflettere: { pp: "riflettuto" },
  connettere: { pr: "conness", pp: "connesso" },
  scuotere: { pr: "scoss", pp: "scosso" },
  espellere: { pr: "espuls", pp: "espulso" },
  torcere: { pr: "tors", pp: "torto" },
};

/**
 * Verbs built on another one: [base verb, prefix added, prefix of the base
 * replaced]. "mantenere" is "man" + tenere (mantengo, mantenni, manterrò);
 * "produrre" swaps the "tra" of tradurre for "pro" (produco, produssi).
 */
export const COMPOUNDS: Record<string, [base: string, prefix: string, strip?: string]> = {
  comporre: ["porre", "com"],
  proporre: ["porre", "pro"],
  supporre: ["porre", "sup"],
  esporre: ["porre", "es"],
  imporre: ["porre", "im"],
  opporre: ["porre", "op"],
  disporre: ["porre", "dis"],
  sottoporre: ["porre", "sotto"],
  produrre: ["tradurre", "pro", "tra"],
  condurre: ["tradurre", "con", "tra"],
  introdurre: ["tradurre", "intro", "tra"],
  ridurre: ["tradurre", "ri", "tra"],
  dedurre: ["tradurre", "de", "tra"],
  indurre: ["tradurre", "in", "tra"],
  riprodurre: ["tradurre", "ripro", "tra"],
  attrarre: ["trarre", "at"],
  distrarre: ["trarre", "dis"],
  sottrarre: ["trarre", "sot"],
  estrarre: ["trarre", "es"],
  contrarre: ["trarre", "con"],
  ottenere: ["tenere", "ot"],
  mantenere: ["tenere", "man"],
  contenere: ["tenere", "con"],
  sostenere: ["tenere", "sos"],
  appartenere: ["tenere", "appar"],
  ritenere: ["tenere", "ri"],
  trattenere: ["tenere", "trat"],
  convenire: ["venire", "con"],
  intervenire: ["venire", "inter"],
  prevenire: ["venire", "pre"],
  svenire: ["venire", "s"],
  avvenire: ["venire", "av"],
  riuscire: ["uscire", "ri"],
  contraddire: ["dire", "contrad"],
  benedire: ["dire", "bene"],
  maledire: ["dire", "male"],
  predire: ["dire", "pre"],
  disdire: ["dire", "dis"],
  rivedere: ["vedere", "ri"],
  comprendere: ["prendere", "com"],
  sorprendere: ["prendere", "sor"],
  riprendere: ["prendere", "ri"],
  apprendere: ["prendere", "ap"],
  promettere: ["mettere", "pro"],
  permettere: ["mettere", "per"],
  smettere: ["mettere", "s"],
  ammettere: ["mettere", "am"],
  commettere: ["mettere", "com"],
  trasmettere: ["mettere", "tras"],
  scommettere: ["mettere", "scom"],
  compromettere: ["mettere", "compro"],
  descrivere: ["scrivere", "de"],
  iscrivere: ["scrivere", "i"],
  prescrivere: ["scrivere", "pre"],
  trascrivere: ["scrivere", "tra"],
  sottoscrivere: ["scrivere", "sotto"],
  eleggere: ["leggere", "e"],
  rileggere: ["leggere", "ri"],
  correggere: ["reggere", "cor"],
  escludere: ["concludere", "es", "con"],
  includere: ["concludere", "in", "con"],
  sorridere: ["ridere", "sor"],
  condividere: ["dividere", "con"],
  percorrere: ["correre", "per"],
  soccorrere: ["correre", "soc"],
  trascorrere: ["correre", "tras"],
  occorrere: ["correre", "oc"],
  ricorrere: ["correre", "ri"],
  concorrere: ["correre", "con"],
  convincere: ["vincere", "con"],
  costringere: ["stringere", "co"],
  raggiungere: ["giungere", "rag"],
  aggiungere: ["giungere", "ag"],
  rivolgere: ["volgere", "ri"],
  svolgere: ["volgere", "s"],
  coinvolgere: ["volgere", "coin"],
  sconvolgere: ["volgere", "scon"],
  riassumere: ["assumere", "ri"],
  confondere: ["fondere", "con"],
  diffondere: ["fondere", "dif"],
  commuovere: ["muovere", "com"],
  promuovere: ["muovere", "pro"],
  rimuovere: ["muovere", "ri"],
  sopravvivere: ["vivere", "soprav"],
  convivere: ["vivere", "con"],
  accogliere: ["cogliere", "ac"],
  raccogliere: ["cogliere", "rac"],
  riaprire: ["aprire", "ri"],
  riscuotere: ["scuotere", "ri"],
  riconoscere: ["conoscere", "ri"],
  dispiacere: ["piacere", "dis"],
  accadere: ["cadere", "ac"],
  scadere: ["cadere", "s"],
  scomparire: ["apparire", "scom", "ap"],
  comparire: ["apparire", "com", "ap"],
};

/** Verbs with their own entry above that are still built on another verb (shown as "conjugated like"). */
export const MODEL_OF: Record<string, string> = { rifare: "fare", prevedere: "vedere", provvedere: "vedere" };

/** Imperative tu forms of the compounds of dire: "contraddici", not "contraddi'". */
export const DIRE_COMPOUNDS = new Set(["contraddire", "benedire", "maledire", "predire", "disdire"]);

/** Verbs only some of whose forms exist in use. */
export const DEFECTIVE_NOTES: Record<string, string> = {
  potere: 'No imperative: ask with the conditional instead ("potresti...?").',
  dovere: "No imperative.",
  volere: 'No imperative in everyday use; formal letters use the subjunctive form "vogliate" ("vogliate scusare il ritardo": please excuse the delay).',
};

// Notes shown on the big irregular verbs' pages (English, Italian in
// double quotes). Generated notes cover the rest.
export const VERB_NOTES: Record<string, string[]> = {
  essere: [
    'The most irregular verb in Italian: "sono" is both \'I am\' and \'they are\' (the subject or the context tells them apart).',
    'Its compound tenses use "essere" itself and borrow the participle of "stare": "sono stato", "sono stata" (I have been). The participle agrees with the subject.',
    'Mind the accent: "è" (is) has one, "e" (and) doesn\'t.',
  ],
  avere: [
    'The h is silent and only there to tell "ho", "hai", "ha", "hanno" from "o" (or), "ai" (to the), "a" (to) and "anno" (year).',
    'It is the auxiliary of most verbs in the compound tenses: "ho mangiato", "avevo finito", "avrò letto".',
  ],
  andare: [
    'Two stems: "vad-" where the stress falls on it ("vado", "vai", "va", "vanno", "vada") and "and-" elsewhere ("andiamo", "andavo", "andrò", with no e in the future).',
    'Takes "essere": "sono andato", "siamo andate". The tu command is "va\'" or "vai".',
  ],
  fare: [
    'Most forms come from the old infinitive "facere": "facevo", "facendo", "facessi", "facesti".',
    'The tu command is "fa\'" or "fai"; with a pronoun the consonant doubles: "fammi vedere" (let me see), "fallo!" (do it!).',
  ],
  dare: [
    'Only "dà" (gives) has an accent, to tell it from "da" (from). "do", "dai", "danno" have none.',
    'Passato remoto: "diedi" and "detti" are both correct, as are "diede" / "dette" and "diedero" / "dettero". The tu command is "da\'" or "dai": "dammi" (give me).',
  ],
  stare: [
    'Used for how you are ("sto bene"), where you stay ("sto a casa"), the progressive ("sto mangiando": I\'m eating) and "stare per" (to be about to). Its participle "stato" is shared with "essere".',
    'Imperfect subjunctive "stessi", passato remoto "stetti", tu command "sta\'" or "stai". Never "stassi" or "stiede".',
  ],
  dire: [
    'Most forms come from the old infinitive "dicere": "dicevo", "dicendo", "dicessi". The tu command is "di\'", which doubles a pronoun\'s consonant: "dimmi" (tell me), "dillo" (say it).',
    '"Voi dite" (you say) is irregular, but "voi dicevate", "che voi diciate" are regular from "dic-".',
  ],
  venire: [
    'A g before a and o ("vengo", "vengono", "venga"), "vie-" where the e is stressed ("vieni", "viene"), and "verr-" in the future and conditional. Takes "essere": "sono venuto".',
  ],
  tenere: ['Conjugated like "venire" but with "avere": "tengo", "tieni", "terrò", "tenni", "ho tenuto". Its compounds ("mantenere", "ottenere", "sostenere") follow it.'],
  potere: [
    '"Può" (he can) has an accent; "puoi" (you can) doesn\'t. In the compound tenses it takes the auxiliary of the verb that follows: "non ho potuto mangiare" but "non sono potuto venire".',
  ],
  volere: [
    '"Vorrei" (I would like) is the polite way to ask for something. In the compound tenses it takes the auxiliary of the verb that follows: "ho voluto mangiare", "sono voluto partire".',
  ],
  dovere: [
    '"Devo" and "debbo", "devono" and "debbono" are both correct; "devo" and "devono" are far more common. Present subjunctive "debba" (also "deva").',
    'In the compound tenses it takes the auxiliary of the verb that follows: "ho dovuto lavorare" but "sono dovuto partire". The conditional "dovresti" (you should) gives advice.',
  ],
  sapere: [
    '"Sapere" is to know a fact or how to do something ("so nuotare"); a person or a place is "conoscere". In the passato prossimo it means \'found out\': "l\'ho saputo ieri".',
  ],
  uscire: ['The stem is "esc-" where it is stressed ("esco", "esci", "esce", "escono", "esca") and "usc-" elsewhere ("usciamo", "uscivo"). Takes "essere". "Riuscire" (to manage) follows it: "riesco".'],
  bere: ['All its forms except the infinitive, the future and the conditional come from "bev-": "bevo", "bevevo", "bevendo", "bevuto"; future "berrò", passato remoto "bevvi".'],
  rimanere: ['A g before a and o ("rimango", "rimangono", "rimanga"), "rimarr-" in the future, "rimasi" and "rimasto" in the past. Takes "essere".'],
  morire: ['The stem is "muoi-" or "muor-" where it is stressed ("muoio", "muori", "muore", "muoiono"); participle "morto". Takes "essere": "è morto nel 1980".'],
  piacere: [
    'Used back to front: what you like is the subject. "Mi piace la pizza" (I like pizza: pizza pleases me), "mi piacciono i film" (I like films). It takes "essere", and the participle agrees with the thing liked: "mi è piaciuta la città".',
  ],
  porre: ['From the old infinitive "ponere": "pongo", "ponevo", "ponendo", "posi", "posto"; future "porrò". Its compounds ("proporre", "comporre", "supporre", "esporre") follow it.'],
  tradurre: ['From the old infinitive "traducere": "traduco", "traducevo", "traducendo", "tradussi", "tradotto"; future "tradurrò". Every verb in -durre ("produrre", "condurre", "ridurre", "introdurre") follows it.'],
  trarre: ['"Traggo", "trai", "trae", "traevo", "trassi", "tratto"; future "trarrò". Mostly written, and in its compounds: "attrarre", "distrarre", "sottrarre", "estrarre".'],
  scegliere: ['"Gl" becomes "lg" before o and a: "scelgo", "scelgono", "scelga"; passato remoto "scelsi", participle "scelto". "Cogliere", "togliere" and "sciogliere" work the same way.'],
  sedere: ['"Sied-" where the stem is stressed ("siedo", "siedi", "siede", "siedono", "sieda"), "sed-" elsewhere. Mostly used as "sedersi": "siediti!" (sit down!), "si sieda!" (to someone you call Lei).'],
  conoscere: [
    '"Conoscere" is to know a person or a place, and in the passato prossimo to meet for the first time: "ho conosciuto Marco a Roma". The participle adds an i to keep the sh sound: "conosciuto".',
  ],
  compiere: [
    'Most forms come from the old infinitive "compire": "compivo", "compii", "compirò", "compissi"; the present is "compio", "compi", "compie", "compiono", the participle "compiuto", the gerund "compiendo".',
    '"Compiere gli anni" is to have a birthday: "domani compio trent\'anni" (I turn thirty tomorrow).',
  ],
  piovere: ['Only used in the lui form, with no subject: "piove" (it\'s raining), "pioverà" (it will rain). In the past both "è piovuto" and "ha piovuto" are correct. Passato remoto "piovve".'],
  rifare: ['Conjugated like "fare", with the prefix: "rifaccio", "rifai", "rifeci", "rifatto". Unlike "fa", "rifà" (he redoes) has an accent, and the tu command is "rifai".'],
  provvedere: ['Like "vedere" in the passato remoto ("provvidi", "provvide"), but with a regular future ("provvederò") and participle ("provveduto"). "Provvedere a" is to see to something: "provvedo io alle bibite" (I\'ll see to the drinks).'],
  vedere: ['Future "vedrò" (no e), passato remoto "vidi", participle "visto" ("veduto" is also correct, but formal).'],
};
