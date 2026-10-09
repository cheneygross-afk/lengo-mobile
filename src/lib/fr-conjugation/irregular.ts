// Synced from cheneygross-afk/lengo:src/lib/fr-conjugation/irregular.ts by scripts/sync-content.mjs -- edit it there, not here.
// Irregular French verbs, as principal parts. conjugate.ts builds every
// tense from them, the way French grammars teach it:
//   imparfait        nous form of the present minus -ons (+ -ais...)
//   futur/condit.    the future stem (default: the infinitive, -re loses its e)
//   subj. présent    ils form minus -ent for je/tu/il/ils, nous stem for nous/vous
//   impératif        tu/nous/vous of the present (tu drops -s after -e: ouvre, va)
//   participe prés.  nous stem + -ant
//   subj. imparfait  from the passé simple (fus -> fusse, fût)
// so a verb lists only its present and what departs from those rules.
//
// Notation: six forms separated by spaces, "-" where none exists; the
// passé simple as "stem:type" with type a (alla), i (prit), u (fut) or
// in (vint), or as six forms.

export type IrrSpec = {
  pres: string;
  ps?: string;
  fut?: string;
  impf?: string;
  subj?: string;
  subji?: string;
  pp?: string;
  /** "-" for none (falloir). */
  ppr?: string;
  /** tu nous vous, "-" for none. */
  imp?: string;
};

export const IRREGULAR: Record<string, IrrSpec> = {
  être: {
    pres: "suis es est sommes êtes sont", impf: "ét", fut: "ser", subj: "sois sois soit soyons soyez soient",
    ps: "f:u", pp: "été", ppr: "étant", imp: "sois soyons soyez",
  },
  avoir: {
    pres: "ai as a avons avez ont", fut: "aur", subj: "aie aies ait ayons ayez aient",
    ps: "e:u", pp: "eu", ppr: "ayant", imp: "aie ayons ayez",
  },
  aller: { pres: "vais vas va allons allez vont", fut: "ir", subj: "aille ailles aille allions alliez aillent", ps: "all:a", pp: "allé" },
  faire: { pres: "fais fais fait faisons faites font", fut: "fer", subj: "fasse fasses fasse fassions fassiez fassent", ps: "f:i", pp: "fait" },
  dire: { pres: "dis dis dit disons dites disent", ps: "d:i", pp: "dit" },
  pouvoir: {
    pres: "peux peux peut pouvons pouvez peuvent", fut: "pourr", subj: "puisse puisses puisse puissions puissiez puissent",
    ps: "p:u", pp: "pu", imp: "- - -",
  },
  voir: { pres: "vois vois voit voyons voyez voient", fut: "verr", ps: "v:i", pp: "vu" },
  savoir: {
    pres: "sais sais sait savons savez savent", fut: "saur", subj: "sache saches sache sachions sachiez sachent",
    ps: "s:u", pp: "su", ppr: "sachant", imp: "sache sachons sachez",
  },
  vouloir: {
    pres: "veux veux veut voulons voulez veulent", fut: "voudr", subj: "veuille veuilles veuille voulions vouliez veuillent",
    ps: "voul:u", pp: "voulu", imp: "veuille veuillons veuillez",
  },
  venir: { pres: "viens viens vient venons venez viennent", fut: "viendr", ps: "v:in", pp: "venu" },
  tenir: { pres: "tiens tiens tient tenons tenez tiennent", fut: "tiendr", ps: "t:in", pp: "tenu" },
  falloir: {
    pres: "- - faut - - -", impf: "fall", fut: "faudr", subj: "- - faille - - -", ps: "fall:u", pp: "fallu", ppr: "-", imp: "- - -",
  },
  pleuvoir: {
    pres: "- - pleut - - -", impf: "pleuv", fut: "pleuvr", subj: "- - pleuve - - -", ps: "pl:u", pp: "plu", ppr: "pleuvant", imp: "- - -",
  },
  devoir: { pres: "dois dois doit devons devez doivent", fut: "devr", ps: "d:u", pp: "dû" },
  croire: { pres: "crois crois croit croyons croyez croient", ps: "cr:u", pp: "cru" },
  prendre: { pres: "prends prends prend prenons prenez prennent", ps: "pr:i", pp: "pris" },
  mettre: { pres: "mets mets met mettons mettez mettent", ps: "m:i", pp: "mis" },
  connaître: { pres: "connais connais connaît connaissons connaissez connaissent", ps: "conn:u", pp: "connu" },
  paraître: { pres: "parais parais paraît paraissons paraissez paraissent", ps: "par:u", pp: "paru" },
  naître: { pres: "nais nais naît naissons naissez naissent", ps: "naqu:i", pp: "né" },
  mourir: { pres: "meurs meurs meurt mourons mourez meurent", fut: "mourr", ps: "mour:u", pp: "mort" },
  partir: { pres: "pars pars part partons partez partent", ps: "part:i", pp: "parti" },
  dormir: { pres: "dors dors dort dormons dormez dorment", ps: "dorm:i", pp: "dormi" },
  sentir: { pres: "sens sens sent sentons sentez sentent", ps: "sent:i", pp: "senti" },
  servir: { pres: "sers sers sert servons servez servent", ps: "serv:i", pp: "servi" },
  ouvrir: { pres: "ouvre ouvres ouvre ouvrons ouvrez ouvrent", fut: "ouvrir", ps: "ouvr:i", pp: "ouvert" },
  courir: { pres: "cours cours court courons courez courent", fut: "courr", ps: "cour:u", pp: "couru" },
  vivre: { pres: "vis vis vit vivons vivez vivent", ps: "véc:u", pp: "vécu" },
  suivre: { pres: "suis suis suit suivons suivez suivent", ps: "suiv:i", pp: "suivi" },
  conduire: { pres: "conduis conduis conduit conduisons conduisez conduisent", ps: "conduis:i", pp: "conduit" },
  craindre: { pres: "crains crains craint craignons craignez craignent", ps: "craign:i", pp: "craint" },
  peindre: { pres: "peins peins peint peignons peignez peignent", ps: "peign:i", pp: "peint" },
  joindre: { pres: "joins joins joint joignons joignez joignent", ps: "joign:i", pp: "joint" },
  rire: { pres: "ris ris rit rions riez rient", ps: "r:i", pp: "ri" },
  plaire: { pres: "plais plais plaît plaisons plaisez plaisent", ps: "pl:u", pp: "plu" },
  taire: { pres: "tais tais tait taisons taisez taisent", ps: "t:u", pp: "tu" },
  valoir: {
    pres: "vaux vaux vaut valons valez valent", fut: "vaudr", subj: "vaille vailles vaille valions valiez vaillent", ps: "val:u", pp: "valu",
  },
  asseoir: { pres: "assieds assieds assied asseyons asseyez asseyent", fut: "assiér", ps: "ass:i", pp: "assis" },
  lire: { pres: "lis lis lit lisons lisez lisent", ps: "l:u", pp: "lu" },
  écrire: { pres: "écris écris écrit écrivons écrivez écrivent", ps: "écriv:i", pp: "écrit" },
  boire: { pres: "bois bois boit buvons buvez boivent", ps: "b:u", pp: "bu" },
  recevoir: { pres: "reçois reçois reçoit recevons recevez reçoivent", fut: "recevr", ps: "reç:u", pp: "reçu" },
  acquérir: { pres: "acquiers acquiers acquiert acquérons acquérez acquièrent", fut: "acquerr", ps: "acqu:i", pp: "acquis" },
  fuir: { pres: "fuis fuis fuit fuyons fuyez fuient", ps: "fu:i", pp: "fui" },
  vaincre: { pres: "vaincs vaincs vainc vainquons vainquez vainquent", ps: "vainqu:i", pp: "vaincu" },
  résoudre: { pres: "résous résous résout résolvons résolvez résolvent", ps: "résol:u", pp: "résolu" },
  coudre: { pres: "couds couds coud cousons cousez cousent", ps: "cous:i", pp: "cousu" },
  battre: { pres: "bats bats bat battons battez battent", ps: "batt:i", pp: "battu" },
  rompre: { pres: "romps romps rompt rompons rompez rompent", ps: "romp:i", pp: "rompu" },
  cueillir: { pres: "cueille cueilles cueille cueillons cueillez cueillent", fut: "cueiller", ps: "cueill:i", pp: "cueilli" },
  suffire: { pres: "suffis suffis suffit suffisons suffisez suffisent", ps: "suff:i", pp: "suffi" },
  conclure: { pres: "conclus conclus conclut concluons concluez concluent", ps: "concl:u", pp: "conclu" },
  émouvoir: { pres: "émeus émeus émeut émouvons émouvez émeuvent", fut: "émouvr", ps: "ém:u", pp: "ému" },
  vêtir: { pres: "vêts vêts vêt vêtons vêtez vêtent", ps: "vêt:i", pp: "vêtu" },
  haïr: {
    pres: "hais hais hait haïssons haïssez haïssent", ps: "haïs haïs haït haïmes haïtes haïrent",
    subji: "haïsse haïsses haït haïssions haïssiez haïssent", pp: "haï", imp: "hais haïssons haïssez",
  },
  bouillir: { pres: "bous bous bout bouillons bouillez bouillent", ps: "bouill:i", pp: "bouilli" },
  distraire: { pres: "distrais distrais distrait distrayons distrayez distraient", ps: "- - - - - -", pp: "distrait" },
  nuire: { pres: "nuis nuis nuit nuisons nuisez nuisent", ps: "nuis:i", pp: "nui" },
  envoyer: { pres: "envoie envoies envoie envoyons envoyez envoient", fut: "enverr", ps: "envoy:a", pp: "envoyé" },
};

/**
 * Verbs conjugated like a model, with a different beginning: devenir is
 * de + venir, inscrire is ins + (é)crire. The prefix is worked out from
 * the two infinitives; the second element overrides single parts.
 */
export const LIKE: Record<string, [model: string, over?: Partial<IrrSpec>]> = {
  devenir: ["venir"], revenir: ["venir"], souvenir: ["venir"], prévenir: ["venir"], intervenir: ["venir"],
  parvenir: ["venir"], convenir: ["venir"], survenir: ["venir"], provenir: ["venir"],
  obtenir: ["tenir"], retenir: ["tenir"], maintenir: ["tenir"], contenir: ["tenir"], appartenir: ["tenir"],
  entretenir: ["tenir"], soutenir: ["tenir"], détenir: ["tenir"], abstenir: ["tenir"],
  apprendre: ["prendre"], comprendre: ["prendre"], reprendre: ["prendre"], surprendre: ["prendre"], entreprendre: ["prendre"],
  permettre: ["mettre"], promettre: ["mettre"], admettre: ["mettre"], remettre: ["mettre"], soumettre: ["mettre"],
  commettre: ["mettre"], transmettre: ["mettre"],
  reconnaître: ["connaître"], apparaître: ["paraître"], disparaître: ["paraître"],
  sortir: ["partir"], repartir: ["partir"], endormir: ["dormir"], ressentir: ["sentir"], consentir: ["sentir"],
  mentir: ["sentir"], démentir: ["sentir"],
  offrir: ["ouvrir"], couvrir: ["ouvrir"], découvrir: ["ouvrir"], souffrir: ["ouvrir"],
  parcourir: ["courir"], secourir: ["courir"],
  survivre: ["vivre"], poursuivre: ["suivre"],
  construire: ["conduire"], détruire: ["conduire"], produire: ["conduire"], traduire: ["conduire"], réduire: ["conduire"],
  introduire: ["conduire"], séduire: ["conduire"], reproduire: ["conduire"], cuire: ["conduire"],
  plaindre: ["craindre"], contraindre: ["craindre"],
  éteindre: ["peindre"], atteindre: ["peindre"],
  rejoindre: ["joindre"],
  sourire: ["rire"], déplaire: ["plaire"],
  élire: ["lire"], relire: ["lire"],
  décrire: ["écrire"], inscrire: ["écrire"],
  apercevoir: ["recevoir"], décevoir: ["recevoir"], concevoir: ["recevoir"], percevoir: ["recevoir"],
  conquérir: ["acquérir"], enfuir: ["fuir"], convaincre: ["vaincre"],
  combattre: ["battre"], abattre: ["battre"], débattre: ["battre"],
  interrompre: ["rompre"],
  accueillir: ["cueillir"], recueillir: ["cueillir"],
  inclure: ["conclure", { pp: "inclus" }], exclure: ["conclure"],
  promouvoir: ["émouvoir"],
  extraire: ["distraire"],
  revoir: ["voir"],
  prévoir: ["voir", { fut: "prévoir", ps: "prév:i" }],
  refaire: ["faire"], défaire: ["faire"], satisfaire: ["faire"],
  prédire: ["dire", { pres: "prédis prédis prédit prédisons prédisez prédisent" }],
  interdire: ["dire", { pres: "interdis interdis interdit interdisons interdisez interdisent" }],
  contredire: ["dire", { pres: "contredis contredis contredit contredisons contredisez contredisent" }],
  renvoyer: ["envoyer"],
};
