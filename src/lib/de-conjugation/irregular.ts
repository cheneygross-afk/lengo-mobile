// Synced from cheneygross-afk/lengo:src/lib/de-conjugation/irregular.ts by scripts/sync-content.mjs -- edit it there, not here.
// Strong, mixed and irregular German verbs, as principal parts.
// conjugate.ts builds every tense from them, the way German grammars
// teach it:
//   Präsens        regular endings on the infinitive stem, except du and
//                  er/sie/es, which take the changed stem when there is one
//                  (geben -> du gibst, er gibt; fahren -> du fährst)
//   Präteritum     the Präteritum stem with strong endings (gab, gabst,
//                  gab, gaben, gabt, gaben), or weak ones when it ends in
//                  -te (dachte, dachtest)
//   Konjunktiv II  the Präteritum stem with umlaut + -e (gab -> gäbe,
//                  kam -> käme, ging -> ginge), unless given
//   Konjunktiv I   the infinitive stem + -e, -est, -e, -en, -et, -en
//   Imperativ      du: the changed stem when e changes to i/ie (gib, lies,
//                  nimm), else the infinitive stem (fahr, lauf)
// Prefixed verbs (anfangen, verstehen, bekommen) are built on these
// automatically, so only the simple verb is listed here, plus the few
// whose simple verb doesn't exist (beginnen, verlieren, vergessen).
//
// A row is "infinitive|changed present stem|Präteritum|Partizip II|Konjunktiv II|aux":
//   changed present stem  the du/er stem when it differs ("gib", "fähr",
//                         "hält"), "-" when it doesn't; "a/b" for two
//   Präteritum, Partizip II, Konjunktiv II
//                         "a/b" for two accepted forms; "-" for the default
//                         Konjunktiv II
//   aux                   h (haben), s (sein), sh (sein; haben with a
//                         direct object: ich bin/habe das Auto gefahren),
//                         hs (haben; sein when nothing is done to anything:
//                         das Eis ist geschmolzen... see verbs.ts for each verb)

export type StrongSpec = {
  inf: string;
  /** Changed du/er stems ("gib"), or null. */
  presStems: string[] | null;
  /** Präteritum er forms ("gab", "dachte"). */
  praet: string[];
  pp: string[];
  /** Konjunktiv II ich forms ("gäbe"). */
  k2: string[];
  aux: "haben" | "sein";
  auxAlt: "haben" | "sein" | null;
};

const ROWS = `
backen|bäck/back|backte|gebacken|backte|h
befehlen|befiehl|befahl|befohlen|beföhle/befähle|h
beginnen|-|begann|begonnen|begänne/begönne|h
beißen|-|biss|gebissen|-|h
bergen|birg|barg|geborgen|bärge|h
bersten|birst|barst|geborsten|bärste|s
biegen|-|bog|gebogen|-|sh
bieten|-|bot|geboten|-|h
binden|-|band|gebunden|-|h
bitten|-|bat|gebeten|-|h
blasen|bläs|blies|geblasen|-|h
bleiben|-|blieb|geblieben|-|s
braten|brät|briet|gebraten|-|h
brechen|brich|brach|gebrochen|-|hs
brennen|-|brannte|gebrannt|brennte|h
bringen|-|brachte|gebracht|brächte|h
denken|-|dachte|gedacht|dächte|h
dreschen|drisch|drosch|gedroschen|drösche|h
dringen|-|drang|gedrungen|-|s
empfehlen|empfiehl|empfahl|empfohlen|empföhle/empfähle|h
erlöschen|erlisch|erlosch|erloschen|-|s
erschaffen|-|erschuf|erschaffen|-|h
erschrecken|erschrick|erschrak|erschrocken|erschräke|s
essen|iss|aß|gegessen|-|h
fahren|fähr|fuhr|gefahren|-|sh
fallen|fäll|fiel|gefallen|-|s
fangen|fäng|fing|gefangen|-|h
fechten|ficht|focht|gefochten|-|h
finden|-|fand|gefunden|-|h
flechten|flicht|flocht|geflochten|-|h
fliegen|-|flog|geflogen|-|sh
fliehen|-|floh|geflohen|-|s
fließen|-|floss|geflossen|-|s
fressen|friss|fraß|gefressen|-|h
frieren|-|fror|gefroren|-|h
geben|gib|gab|gegeben|-|h
gebären|-|gebar|geboren|-|h
gedeihen|-|gedieh|gediehen|-|s
gehen|-|ging|gegangen|-|s
gelingen|-|gelang|gelungen|-|s
gelten|gilt|galt|gegolten|gälte/gölte|h
genesen|-|genas|genesen|-|s
genießen|-|genoss|genossen|-|h
geschehen|geschieh|geschah|geschehen|-|s
gewinnen|-|gewann|gewonnen|gewönne/gewänne|h
gießen|-|goss|gegossen|-|h
gleichen|-|glich|geglichen|-|h
gleiten|-|glitt|geglitten|-|s
glimmen|-|glomm|geglommen|-|h
graben|gräb|grub|gegraben|-|h
greifen|-|griff|gegriffen|-|h
gären|-|gor/gärte|gegoren/gegärt|göre/gärte|hs
halten|hält|hielt|gehalten|-|h
hauen|-|haute/hieb|gehauen|haute|h
heben|-|hob|gehoben|-|h
heißen|-|hieß|geheißen|-|h
helfen|hilf|half|geholfen|hülfe/hälfe|h
hängen|-|hing|gehangen|-|h
kennen|-|kannte|gekannt|kennte|h
klimmen|-|klomm|geklommen|-|s
klingen|-|klang|geklungen|-|h
kneifen|-|kniff|gekniffen|-|h
kommen|-|kam|gekommen|-|s
kriechen|-|kroch|gekrochen|-|s
laden|läd|lud|geladen|-|h
lassen|läss|ließ|gelassen|-|h
laufen|läuf|lief|gelaufen|-|s
leiden|-|litt|gelitten|-|h
leihen|-|lieh|geliehen|-|h
lesen|lies|las|gelesen|-|h
liegen|-|lag|gelegen|-|h
lügen|-|log|gelogen|-|h
mahlen|-|mahlte|gemahlen|mahlte|h
meiden|-|mied|gemieden|-|h
melken|-|melkte/molk|gemolken|melkte|h
messen|miss|maß|gemessen|-|h
misslingen|-|misslang|misslungen|-|s
nehmen|nimm|nahm|genommen|-|h
nennen|-|nannte|genannt|nennte|h
pfeifen|-|pfiff|gepfiffen|-|h
preisen|-|pries|gepriesen|-|h
quellen|quill|quoll|gequollen|-|s
raten|rät|riet|geraten|-|h
reiben|-|rieb|gerieben|-|h
reiten|-|ritt|geritten|-|sh
reißen|-|riss|gerissen|-|hs
rennen|-|rannte|gerannt|rennte|s
riechen|-|roch|gerochen|-|h
ringen|-|rang|gerungen|-|h
rinnen|-|rann|geronnen|-|s
rufen|-|rief|gerufen|-|h
salzen|-|salzte|gesalzen/gesalzt|salzte|h
saufen|säuf|soff|gesoffen|-|h
saugen|-|sog/saugte|gesogen/gesaugt|söge/saugte|h
schallen|-|schallte/scholl|geschallt|schallte/schölle|h
scheiden|-|schied|geschieden|-|hs
scheinen|-|schien|geschienen|-|h
schelten|schilt|schalt|gescholten|schölte|h
schieben|-|schob|geschoben|-|h
schießen|-|schoss|geschossen|-|h
schinden|-|schindete|geschunden|schindete|h
schlafen|schläf|schlief|geschlafen|-|h
schlagen|schläg|schlug|geschlagen|-|h
schleichen|-|schlich|geschlichen|-|s
schleifen|-|schliff|geschliffen|-|h
schleißen|-|schliss|geschlissen|-|h
schließen|-|schloss|geschlossen|-|h
schlingen|-|schlang|geschlungen|-|h
schmeißen|-|schmiss|geschmissen|-|h
schmelzen|schmilz|schmolz|geschmolzen|-|sh
schnauben|-|schnaubte/schnob|geschnaubt/geschnoben|schnaubte/schnöbe|h
schneiden|-|schnitt|geschnitten|-|h
schreiben|-|schrieb|geschrieben|-|h
schreien|-|schrie|geschrien|-|h
schreiten|-|schritt|geschritten|-|s
schweigen|-|schwieg|geschwiegen|-|h
schwellen|schwill|schwoll|geschwollen|-|s
schwimmen|-|schwamm|geschwommen|schwömme/schwämme|sh
schwinden|-|schwand|geschwunden|-|s
schwingen|-|schwang|geschwungen|-|h
schwören|-|schwor|geschworen|schwüre/schwöre|h
sehen|sieh|sah|gesehen|-|h
senden|-|sandte/sendete|gesandt/gesendet|sendete|h
sieden|-|sott/siedete|gesotten/gesiedet|sötte/siedete|h
singen|-|sang|gesungen|-|h
sinken|-|sank|gesunken|-|s
sinnen|-|sann|gesonnen|sänne/sönne|h
sitzen|-|saß|gesessen|-|h
spalten|-|spaltete|gespalten/gespaltet|spaltete|h
speien|-|spie|gespien|-|h
spinnen|-|spann|gesponnen|spönne/spänne|h
sprechen|sprich|sprach|gesprochen|-|h
sprießen|-|spross|gesprossen|-|s
springen|-|sprang|gesprungen|-|s
stechen|stich|stach|gestochen|-|h
stehen|-|stand|gestanden|stünde/stände|h
stehlen|stiehl|stahl|gestohlen|stähle/stöhle|h
steigen|-|stieg|gestiegen|-|s
sterben|stirb|starb|gestorben|stürbe|s
stieben|-|stob|gestoben|-|s
stinken|-|stank|gestunken|-|h
stoßen|stöß|stieß|gestoßen|-|hs
streichen|-|strich|gestrichen|-|h
streiten|-|stritt|gestritten|-|h
tragen|träg|trug|getragen|-|h
treffen|triff|traf|getroffen|-|h
treiben|-|trieb|getrieben|-|h
treten|tritt|trat|getreten|-|sh
triefen|-|triefte/troff|getrieft|triefte/tröffe|h
trinken|-|trank|getrunken|-|h
trügen|-|trog|getrogen|-|h
verderben|verdirb|verdarb|verdorben|verdürbe|hs
verdrießen|-|verdross|verdrossen|-|h
vergessen|vergiss|vergaß|vergessen|-|h
verlieren|-|verlor|verloren|-|h
verzeihen|-|verzieh|verziehen|-|h
wachsen|wächs|wuchs|gewachsen|-|s
waschen|wäsch|wusch|gewaschen|-|h
weben|-|webte/wob|gewebt/gewoben|webte/wöbe|h
weichen|-|wich|gewichen|-|s
weisen|-|wies|gewiesen|-|h
wenden|-|wandte/wendete|gewandt/gewendet|wendete|h
werben|wirb|warb|geworben|würbe|h
werfen|wirf|warf|geworfen|würfe|h
wiegen|-|wog|gewogen|-|h
winden|-|wand|gewunden|-|h
wringen|-|wrang|gewrungen|-|h
wägen|-|wog/wägte|gewogen/gewägt|wöge/wägte|h
zeihen|-|zieh|geziehen|-|h
ziehen|-|zog|gezogen|-|sh
zwingen|-|zwang|gezwungen|-|h
`;

const AUX: Record<string, [StrongSpec["aux"], StrongSpec["auxAlt"]]> = {
  h: ["haben", null],
  s: ["sein", null],
  sh: ["sein", "haben"],
  hs: ["haben", "sein"],
};

const UMLAUT: [RegExp, string][] = [
  [/au/, "äu"],
  [/a/, "ä"],
  [/o/, "ö"],
  [/u/, "ü"],
];

/** gab -> gäbe, kam -> käme, ging -> ginge, schrie -> schriee: the default Konjunktiv II. */
export function defaultK2(praet: string): string {
  let s = praet;
  // Umlaut the last vowel group of the stem.
  const m = s.match(/^(.*?)(au|[aou])([^aeiouäöü]*)$/);
  if (m) {
    const v = UMLAUT.find(([re]) => re.test(m[2]))![1];
    s = m[1] + v + m[3];
  }
  return `${s}e`;
}

function parse(): Record<string, StrongSpec> {
  const out: Record<string, StrongSpec> = {};
  for (const line of ROWS.trim().split("\n")) {
    const [inf, pres, praet, pp, k2, aux] = line.split("|");
    const praets = praet.split("/");
    out[inf] = {
      inf,
      presStems: pres === "-" ? null : pres.split("/"),
      praet: praets,
      pp: pp.split("/"),
      k2: k2 === "-" ? [defaultK2(praets[0])] : k2.split("/"),
      aux: AUX[aux][0],
      auxAlt: AUX[aux][1],
    };
  }
  return out;
}

/** The strong and mixed verbs, by infinitive. */
export const STRONG: Record<string, StrongSpec> = parse();

type Six = (string | null)[];

/** Verbs whose present (and more) can't be built from rules: sein, haben, werden, tun, wissen and the modals. */
export type FullSpec = {
  kind: "irregular" | "modal";
  pres: Six;
  /** Präteritum er form. */
  praet: string;
  /** Six Präteritum forms when they don't follow from the stem. */
  praetForms?: Six;
  pp: string;
  /** Konjunktiv II forms. */
  k2: Six;
  /** Konjunktiv I forms, when they don't follow from the infinitive stem. */
  k1?: Six;
  /** du, ihr, Sie; null: no imperative (the modals). */
  imp: [string, string, string] | null;
  partizip1?: string;
  aux: "haben" | "sein";
};

const s6 = (s: string): Six => s.split(",").map((w) => (w.trim() === "-" ? null : w.trim()));

export const FULL: Record<string, FullSpec> = {
  sein: {
    kind: "irregular",
    pres: s6("bin, bist, ist, sind, seid, sind"),
    praet: "war",
    praetForms: s6("war, warst, war, waren, wart, waren"),
    pp: "gewesen",
    k2: s6("wäre, wärst / wärest, wäre, wären, wärt / wäret, wären"),
    k1: s6("sei, seist / seiest, sei, seien, seiet, seien"),
    imp: ["sei", "seid", "seien Sie"],
    partizip1: "seiend",
    aux: "sein",
  },
  haben: {
    kind: "irregular",
    pres: s6("habe, hast, hat, haben, habt, haben"),
    praet: "hatte",
    pp: "gehabt",
    k2: s6("hätte, hättest, hätte, hätten, hättet, hätten"),
    imp: ["hab / habe", "habt", "haben Sie"],
    aux: "haben",
  },
  werden: {
    kind: "irregular",
    pres: s6("werde, wirst, wird, werden, werdet, werden"),
    praet: "wurde",
    pp: "geworden",
    k2: s6("würde, würdest, würde, würden, würdet, würden"),
    imp: ["werde", "werdet", "werden Sie"],
    aux: "sein",
  },
  tun: {
    kind: "irregular",
    pres: s6("tue, tust, tut, tun, tut, tun"),
    praet: "tat",
    praetForms: s6("tat, tatest / tatst, tat, taten, tatet, taten"),
    pp: "getan",
    k2: s6("täte, tätest, täte, täten, tätet, täten"),
    k1: s6("tue, tuest, tue, tuen, tuet, tuen"),
    imp: ["tu / tue", "tut", "tun Sie"],
    partizip1: "tuend",
    aux: "haben",
  },
  wissen: {
    kind: "irregular",
    pres: s6("weiß, weißt, weiß, wissen, wisst, wissen"),
    praet: "wusste",
    pp: "gewusst",
    k2: s6("wüsste, wüsstest, wüsste, wüssten, wüsstet, wüssten"),
    imp: ["wisse", "wisst", "wissen Sie"],
    aux: "haben",
  },
  können: {
    kind: "modal",
    pres: s6("kann, kannst, kann, können, könnt, können"),
    praet: "konnte",
    pp: "gekonnt",
    k2: s6("könnte, könntest, könnte, könnten, könntet, könnten"),
    imp: null,
    aux: "haben",
  },
  müssen: {
    kind: "modal",
    pres: s6("muss, musst, muss, müssen, müsst, müssen"),
    praet: "musste",
    pp: "gemusst",
    k2: s6("müsste, müsstest, müsste, müssten, müsstet, müssten"),
    imp: null,
    aux: "haben",
  },
  dürfen: {
    kind: "modal",
    pres: s6("darf, darfst, darf, dürfen, dürft, dürfen"),
    praet: "durfte",
    pp: "gedurft",
    k2: s6("dürfte, dürftest, dürfte, dürften, dürftet, dürften"),
    imp: null,
    aux: "haben",
  },
  sollen: {
    kind: "modal",
    pres: s6("soll, sollst, soll, sollen, sollt, sollen"),
    praet: "sollte",
    pp: "gesollt",
    k2: s6("sollte, solltest, sollte, sollten, solltet, sollten"),
    imp: null,
    aux: "haben",
  },
  wollen: {
    kind: "modal",
    pres: s6("will, willst, will, wollen, wollt, wollen"),
    praet: "wollte",
    pp: "gewollt",
    k2: s6("wollte, wolltest, wollte, wollten, wolltet, wollten"),
    imp: null,
    aux: "haben",
  },
  mögen: {
    kind: "modal",
    pres: s6("mag, magst, mag, mögen, mögt, mögen"),
    praet: "mochte",
    pp: "gemocht",
    k2: s6("möchte, möchtest, möchte, möchten, möchtet, möchten"),
    imp: null,
    aux: "haben",
  },
};

/** Every strong, mixed and irregular simple verb the engine knows. */
export function irregularBaseCount(): number {
  return Object.keys(STRONG).length + Object.keys(FULL).length;
}
