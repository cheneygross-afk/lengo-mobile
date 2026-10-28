// Synced from cheneygross-afk/lengo:src/lib/it-conjugation/verbs.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Italian verbs the conjugation engine knows by name, roughly in order
// of frequency in everyday Italian (the verbs the course meets first come
// early), so "top 50/100" drills can slice this list. A row is
//   "infinitive|English meaning|flags|meaning with the reflexive pronoun|note on the auxiliary"
// Flags (space-separated):
//   isc    an -ire verb that adds -isc- (capire: capisco, capisci)
//   E      takes essere in the compound tenses (andare: sono andato)
//   AE     takes avere, and essere in some uses (finire: ho finito il libro / il film è finito)
//   EA     takes essere, and avere in some uses (salire: sono salito / ho salito le scale)
//   prn    also common with a reflexive pronoun (alzare -> alzarsi)
//   prn!   only used with one (pentirsi); the row's infinitive ends in -si
//   cl     a verb with pronouns built in (andarsene, farcela, metterci)
//   ii     an -iare verb whose i is stressed (inviare: invii, inviino)
//   imp    impersonal: only the lui form (piove)
//   imp3   only the lui and loro forms (occorre, occorrono)
// The irregular verbs and the verbs built on them are in irregular.ts; the
// spelling changes (cerchi, comincerò, studi) come from conjugate.ts.

export type ItVerbSpec = {
  inf: string;
  en: string;
  enSe?: string;
  rank: number;
  isc?: boolean;
  aux: "avere" | "essere";
  auxAlt?: "avere" | "essere";
  auxNote?: string;
  prn?: "also" | "only";
  cl?: boolean;
  ii?: boolean;
  impersonal?: "lui" | "3";
};

const ROWS = `
essere|to be|E
avere|to have
fare|to do, to make
dire|to say, to tell
potere|can, to be able to; may
volere|to want
andare|to go|E
stare|to stay; to be (how you are: sto bene)|E
dovere|must, to have to; to owe
sapere|to know (a fact, how to)
vedere|to see|prn|to see each other, to meet up
dare|to give
venire|to come|E
parlare|to speak, to talk
trovare|to find|prn|to be (somewhere); to get on (mi trovo bene)
sentire|to hear; to feel; to smell|prn|to feel (mi sento bene)
prendere|to take; to have (food, drink); to catch (a train)
lasciare|to leave (something, someone); to let
guardare|to look at, to watch
mettere|to put; to put on (clothes)|prn|to put on (clothes); to start (mettersi a)
pensare|to think
portare|to bring, to carry, to take; to wear
passare|to pass, to go by; to spend (time); to drop in|EA||Essere when it means to go by or to drop in ("sono passato da te", "il tempo è passato"), avere with an object ("ho passato l'esame", "abbiamo passato l'estate al mare").
credere|to believe, to think
chiamare|to call|prn|to be called (mi chiamo...)
conoscere|to know (a person, a place); to meet (for the first time)|prn|to know each other; to meet
tenere|to hold, to keep
arrivare|to arrive|E
rimanere|to stay, to remain|E
capire|to understand|isc
uscire|to go out, to leave|E
entrare|to go in, to come in|E
chiedere|to ask (for)
tornare|to come back, to go back, to return|E
cercare|to look for; to try (cercare di)
lavorare|to work
scrivere|to write|prn|to write to each other
leggere|to read
vivere|to live|AE||Both are correct: "ho vissuto a Roma" and "sono vissuto a Roma". Avere is more common in speech, and needed with an object ("ha vissuto una vita felice").
mangiare|to eat
bere|to drink
dormire|to sleep
aspettare|to wait (for)|prn|to expect (aspettarsi)
cominciare|to begin, to start|AE||Avere when someone starts something ("ho cominciato il corso"), essere when the thing itself starts ("il film è cominciato").
finire|to finish, to end|isc AE||Avere when someone finishes something ("ho finito il libro"), essere when the thing itself ends ("il film è finito").
perdere|to lose; to miss (a train)
morire|to die|E
aprire|to open
chiudere|to close, to shut
rispondere|to answer, to reply
diventare|to become|E
succedere|to happen|E
sembrare|to seem, to look like|E
piacere|to please (mi piace: I like)|E
abitare|to live (somewhere)
studiare|to study
ricordare|to remember; to remind|prn|to remember (ricordarsi di)
giocare|to play (a game, a sport)
pagare|to pay (for)
comprare|to buy
vendere|to sell
scegliere|to choose
decidere|to decide
spiegare|to explain
insegnare|to teach
imparare|to learn
usare|to use
servire|to serve; to be needed (mi serve: I need)|EA||Essere when it means to be needed or useful ("mi è servito"), avere when it means to serve ("ha servito la cena").
bastare|to be enough|E
mancare|to be missing; to miss (mi manchi: I miss you)|EA||Essere for to be missing or to be missed ("mi sei mancato"); avere for to fail to hit or to miss a chance ("ha mancato il rigore").
costare|to cost|E
durare|to last|EA||Both are correct: "il film è durato due ore" and "il film ha durato due ore"; essere is more common.
restare|to stay, to remain|E
partire|to leave, to set off|E
salire|to go up, to get on (a bus, a train)|EA||Essere when you go up or get on ("sono salito sul treno"), avere when you climb something ("ho salito le scale").
scendere|to go down, to get off|EA||Essere when you go down or get off ("sono sceso dal treno"), avere when you go down something ("ho sceso le scale").
cadere|to fall|E
nascere|to be born|E
crescere|to grow (up)|EA||Essere for to grow or grow up ("sono cresciuto a Napoli"), avere for to bring up ("ha cresciuto tre figli").
correre|to run|AE||Avere for the activity ("ho corso per un'ora"), essere with a destination ("sono corso a casa").
camminare|to walk
viaggiare|to travel
volare|to fly|AE||Avere for the activity ("ho volato con Alitalia"), essere for flying somewhere or off ("l'uccello è volato via").
nuotare|to swim
ballare|to dance
cantare|to sing
suonare|to play (an instrument); to ring
ascoltare|to listen (to)
guidare|to drive
cucinare|to cook
lavare|to wash|prn|to wash (oneself)
alzare|to raise, to lift|prn|to get up
svegliare|to wake (someone) up|prn|to wake up
vestire|to dress (someone)|prn|to get dressed
divertire|to amuse|prn|to have fun, to enjoy oneself
sedere|to sit|E prn|to sit down
preparare|to prepare|prn|to get ready
riposare|to rest|prn|to rest
fermare|to stop (something, someone)|prn|to stop
muovere|to move|prn|to move; to hurry up (muoviti!)
sposare|to marry|prn|to get married
innamorarsi|to fall in love|prn!
arrabbiarsi|to get angry|prn!
preoccupare|to worry (someone)|prn|to worry
lamentarsi|to complain|prn!
pentirsi|to regret, to be sorry|prn!
accorgersi|to notice, to realise|prn!
vergognarsi|to be ashamed, to be embarrassed|prn!
annoiare|to bore|prn|to be bored
sbrigarsi|to hurry (up)|prn!
abituarsi|to get used to|prn!
fidarsi|to trust|prn!
laurearsi|to graduate|prn!
ammalarsi|to fall ill|prn!
ricevere|to receive
offrire|to offer; to buy (someone a drink: offro io)
soffrire|to suffer
coprire|to cover
scoprire|to discover, to find out
riempire|to fill (in)
seguire|to follow; to take (a course)
fuggire|to run away, to flee|E
scappare|to run away, to escape|E
nascondere|to hide|prn|to hide
rompere|to break|prn|to break
vincere|to win; to beat
convincere|to convince
spingere|to push
dipingere|to paint
piangere|to cry
ridere|to laugh
sorridere|to smile
dividere|to divide, to split, to share
condividere|to share
spendere|to spend (money)
accendere|to turn on, to light
spegnere|to turn off, to put out
comprendere|to understand; to include
sorprendere|to surprise
riprendere|to take back; to resume
promettere|to promise
permettere|to allow|prn|to afford
smettere|to stop (doing something)
ammettere|to admit
ottenere|to get, to obtain
mantenere|to keep, to maintain; to support (financially)
contenere|to contain
sostenere|to support; to maintain (a view); to take (an exam)
appartenere|to belong|EA||Both are correct: "è appartenuto" and "ha appartenuto"; essere is more common.
convenire|to be worth it, to be better (conviene)|E
intervenire|to intervene, to take part|E
svenire|to faint|E
proporre|to propose, to suggest
comporre|to compose; to dial (a number)
supporre|to suppose
porre|to put, to place; to ask (porre una domanda)
esporre|to exhibit; to set out
imporre|to impose
opporre|to oppose|prn|to oppose, to object
tradurre|to translate
produrre|to produce
condurre|to lead, to conduct
introdurre|to introduce; to insert
ridurre|to reduce
trarre|to draw, to pull (trarre una conclusione)
attrarre|to attract
distrarre|to distract|prn|to get distracted
sottrarre|to subtract, to take away
riuscire|to manage to, to succeed|E
descrivere|to describe
iscrivere|to enrol, to register (someone)|prn|to enrol, to sign up
correggere|to correct
proteggere|to protect
rivedere|to see again; to revise
prevedere|to foresee, to forecast
aiutare|to help
amare|to love
accompagnare|to go with, to accompany
affittare|to rent (out)
annullare|to cancel
apprezzare|to appreciate
assaggiare|to taste, to try (food)
attraversare|to cross
augurare|to wish (someone something)
baciare|to kiss
bagnare|to wet|prn|to get wet
bruciare|to burn|AE||Avere with an object ("ho bruciato la cena"), essere when something burns ("la casa è bruciata").
buttare|to throw (away)
cambiare|to change|AE prn|to get changed|Avere when you change something ("ho cambiato casa"), essere when something changes ("Milano è cambiata molto").
caricare|to load; to charge (a phone); to upload
cenare|to have dinner
chiacchierare|to chat
collegare|to connect, to link|prn|to connect, to log on
comunicare|to communicate
confermare|to confirm
considerare|to consider
consigliare|to advise, to recommend
contare|to count; to matter
continuare|to continue, to go on|AE||Avere when someone carries on with something ("ho continuato a studiare"), essere when the thing itself goes on ("la pioggia è continuata").
controllare|to check
copiare|to copy
costruire|to build|isc
creare|to create
curare|to treat, to look after
dimenticare|to forget|prn|to forget (dimenticarsi di)
dimostrare|to show, to prove
disegnare|to draw
desiderare|to wish, to want
domandare|to ask|prn|to wonder
evitare|to avoid
festeggiare|to celebrate
firmare|to sign
fumare|to smoke
funzionare|to work (of machines), to function
gestire|to manage, to run|isc
girare|to turn; to go around; to film
gridare|to shout
guadagnare|to earn
guarire|to recover, to heal|isc EA||Essere when you get better ("sono guarito"), avere when someone or something cures you ("il medico l'ha guarito").
immaginare|to imagine
impedire|to prevent|isc
indicare|to point (at), to show
informare|to inform|prn|to find out
iniziare|to begin, to start|AE||Avere when someone starts something ("ho iniziato un corso"), essere when the thing itself starts ("la lezione è iniziata").
inviare|to send|ii
litigare|to argue, to quarrel
mandare|to send
migliorare|to improve|EA||Essere when something gets better ("il tempo è migliorato"), avere when you make it better ("ho migliorato il mio italiano").
peggiorare|to get worse|EA||Essere when something gets worse ("la situazione è peggiorata"), avere when you make it worse ("hai peggiorato le cose").
aumentare|to increase, to go up|EA||Essere when something goes up ("i prezzi sono aumentati"), avere when you raise it ("hanno aumentato i prezzi").
diminuire|to decrease, to go down|isc EA||Essere when something goes down ("la disoccupazione è diminuita"), avere when you lower it ("hanno diminuito le tasse").
notare|to notice
occupare|to occupy|prn|to deal with, to take care of (occuparsi di)
odiare|to hate
ordinare|to order
organizzare|to organise
osservare|to observe, to watch
parcheggiare|to park
partecipare|to take part
pesare|to weigh
piovere|to rain|imp EA||Both are correct: "è piovuto" and "ha piovuto".
nevicare|to snow|imp EA||Both are correct: "è nevicato" and "ha nevicato".
pranzare|to have lunch
prenotare|to book, to reserve
presentare|to introduce; to present|prn|to introduce oneself
prestare|to lend
preferire|to prefer|isc
provare|to try; to try on; to feel
pulire|to clean|isc
raccontare|to tell (a story)
regalare|to give (as a present)
ringraziare|to thank
ripetere|to repeat
rispettare|to respect
ritornare|to come back, to return|E
rubare|to steal
salutare|to greet, to say hello or goodbye (to)|prn|to say hello or goodbye (to each other)
salvare|to save
sbagliare|to make a mistake, to get wrong|prn|to be wrong
scaricare|to download; to unload
scherzare|to joke
sciare|to ski|ii
scusare|to excuse|prn|to apologise
sognare|to dream
spedire|to send, to post|isc
sperare|to hope
spostare|to move (something)|prn|to move
sistemare|to arrange, to sort out|prn|to settle (in)
suggerire|to suggest|isc
superare|to overtake; to pass (an exam); to get over
tagliare|to cut
telefonare|to phone
temere|to fear, to be afraid of
tirare|to pull; to throw
toccare|to touch; to be someone's turn (tocca a te)
tradire|to betray, to cheat on|isc
trasferire|to transfer|isc prn|to move (house, city)
trattare|to treat; to deal with
visitare|to visit
votare|to vote
abbracciare|to hug|prn|to hug (each other)
accettare|to accept
affrontare|to face, to tackle
aggiornare|to update
allenare|to train|prn|to train, to work out
approfittare|to take advantage
assicurare|to assure; to insure|prn|to make sure
avvicinare|to bring near|prn|to come closer
avvertire|to warn; to feel
calmare|to calm|prn|to calm down
chiarire|to clarify|isc
colpire|to hit, to strike|isc
compilare|to fill in (a form)
condire|to dress, to season|isc
consegnare|to deliver, to hand in
contribuire|to contribute|isc
criticare|to criticise
dedicare|to dedicate|prn|to devote oneself
definire|to define|isc
dichiarare|to declare
dimagrire|to lose weight|isc E
distribuire|to distribute|isc
eliminare|to eliminate
esagerare|to exaggerate
fallire|to fail; to go bankrupt|isc EA||Essere when it means to go bankrupt or fall through ("l'azienda è fallita"), avere when you fail at something ("ha fallito l'esame").
favorire|to favour; to help yourself (favorisca)|isc
ferire|to wound, to hurt|isc prn|to get hurt
fornire|to supply, to provide|isc
garantire|to guarantee|isc
ingrassare|to put on weight|E
inserire|to insert|isc
interessare|to interest|prn|to be interested (in)
investire|to invest; to run over
mentire|to lie (tell lies)
nutrire|to feed, to nourish
obbedire|to obey|isc
ospitare|to put up, to host
proibire|to forbid|isc
punire|to punish|isc
reagire|to react|isc
restituire|to give back, to return|isc
riferire|to report, to pass on|isc prn|to refer (to)
sostituire|to replace|isc
stabilire|to establish|isc prn|to settle
stupire|to amaze|isc prn|to be amazed
unire|to unite, to join|isc
agire|to act|isc
approfondire|to go deeper into|isc
attribuire|to attribute|isc
costituire|to make up, to constitute|isc
digerire|to digest|isc
esaurire|to use up, to exhaust|isc
gradire|to appreciate, to like (gradisce un caffè?)|isc
impazzire|to go mad|isc E
arrossire|to blush|isc E
invecchiare|to grow old|E
sparire|to disappear|isc E
bollire|to boil
cucire|to sew
consentire|to allow
bisognare|to be necessary (bisogna)|imp E
riconoscere|to recognise
dispiacere|to be sorry; to mind (ti dispiace?)|E
accadere|to happen|E imp3
scadere|to expire|E
tacere|to be quiet, to keep quiet
cuocere|to cook (bake, boil)
possedere|to own
valere|to be worth|E
parere|to seem|E
godere|to enjoy|prn|to enjoy (godersi)
apparire|to appear|E
scomparire|to disappear|E
comparire|to appear, to turn up|E
udire|to hear (formal)
compiere|to carry out; to turn (an age: compiere gli anni)
cogliere|to pick; to seize
accogliere|to welcome
raccogliere|to pick up, to collect
togliere|to take off, to remove|prn|to take off (clothes)
sciogliere|to melt; to untie|prn|to melt
porgere|to hand, to offer
sorgere|to rise (the sun); to arise|E
dipendere|to depend|E
pretendere|to demand, to expect
attendere|to wait (for) (formal)
offendere|to offend|prn|to take offence
difendere|to defend|prn|to defend oneself
stendere|to spread out; to hang out (washing)|prn|to lie down
tendere|to tend; to stretch out
sospendere|to suspend
appendere|to hang (up)
rendere|to give back; to make (rende felice)|prn|to make oneself; rendersi conto: to realise
arrendersi|to surrender, to give up|prn!
mordere|to bite
fingere|to pretend
stringere|to squeeze, to tighten; to shake (hands)
costringere|to force
giungere|to arrive, to reach (formal)|E
raggiungere|to reach, to join
aggiungere|to add
distinguere|to distinguish
rivolgere|to turn, to address|prn|to turn to, to ask (rivolgersi a)
svolgere|to carry out, to do|prn|to take place
coinvolgere|to involve
sconvolgere|to upset, to shock
dirigere|to direct, to run|prn|to head (for)
esigere|to demand
redigere|to draw up (a document)
friggere|to fry
sconfiggere|to defeat
assumere|to hire; to take on
presumere|to presume
riassumere|to sum up; to rehire
esprimere|to express
deprimere|to depress
opprimere|to oppress
reprimere|to repress
sopprimere|to abolish, to suppress
discutere|to discuss, to argue
concedere|to grant, to allow
emergere|to emerge|E
immergere|to immerse|prn|to dive (into)
spargere|to scatter, to spread
fondere|to melt, to merge
confondere|to confuse|prn|to get confused, to mix up
diffondere|to spread|prn|to spread
persuadere|to persuade
invadere|to invade
evadere|to escape; to deal with (paperwork)|EA||Essere for to escape ("è evaso dal carcere"), avere for to deal with ("ho evaso la pratica") or to evade ("ha evaso le tasse").
radere|to shave; to raze|prn|to shave
assolvere|to acquit; to fulfil
risolvere|to solve, to resolve
riflettere|to reflect; to think (about)
connettere|to connect|prn|to connect, to log on
scuotere|to shake
riscuotere|to collect (money), to cash
espellere|to expel
torcere|to twist
concludere|to conclude, to finish
escludere|to exclude, to rule out
includere|to include
deludere|to disappoint
illudere|to deceive|prn|to fool oneself
uccidere|to kill
coincidere|to coincide
incidere|to engrave; to have an effect
commuovere|to move (emotionally)|prn|to be moved
promuovere|to promote; to pass (a student)
rimuovere|to remove
sopravvivere|to survive|E
convivere|to live together
percorrere|to travel along, to cover
soccorrere|to help, to rescue
trascorrere|to spend (time)|AE||Avere when you spend time ("ho trascorso l'estate a Lecce"), essere when time goes by ("sono trascorsi due anni").
occorrere|to be needed|E imp3
ricorrere|to turn to, to resort to; to recur|E
concorrere|to compete; to contribute
contraddire|to contradict
benedire|to bless
maledire|to curse
predire|to predict
disdire|to cancel (a booking)
rifare|to redo, to do again
provvedere|to provide, to see to
apprendere|to learn (formal)
commettere|to commit
trasmettere|to broadcast, to pass on
scommettere|to bet
compromettere|to compromise
prescrivere|to prescribe
trascrivere|to transcribe
sottoscrivere|to sign, to subscribe
eleggere|to elect
rileggere|to reread
reggere|to hold up; to bear
riprodurre|to reproduce
dedurre|to deduce
indurre|to lead (someone) to, to induce
estrarre|to extract
contrarre|to contract
disporre|to arrange; to have available
sottoporre|to submit, to subject
ritenere|to believe, to consider
trattenere|to hold back|prn|to stay (for a while)
prevenire|to prevent
avvenire|to happen, to take place|E imp3
riaprire|to reopen
esistere|to exist|E
insistere|to insist
resistere|to resist
assistere|to attend, to watch; to assist
consistere|to consist|E
battere|to beat, to hit; to type
combattere|to fight
cedere|to give way, to give in
procedere|to proceed, to go on
premere|to press
andarsene|to go away, to leave|cl
farcela|to manage, to make it (ce la faccio!)|cl
cavarsela|to get by, to cope|cl
prendersela|to take offence, to get upset|cl
sentirsela|to feel up to (non me la sento)|cl
avercela|to have it in for (ce l'ho con te)|cl
metterci|to take (time: ci metto un'ora)|cl
volerci|to take, to be needed (ci vuole un'ora)|cl E imp3
`;

function parse(): ItVerbSpec[] {
  const out: ItVerbSpec[] = [];
  const seen = new Set<string>();
  for (const line of ROWS.split("\n")) {
    if (!line.trim()) continue;
    const [inf, en, flagStr = "", enSe, auxNote] = line.split("|");
    if (seen.has(inf)) continue;
    seen.add(inf);
    const flags = new Set(flagStr.split(" ").filter(Boolean));
    const aux = flags.has("E") || flags.has("EA") ? "essere" : "avere";
    const auxAlt = flags.has("EA") ? "avere" : flags.has("AE") ? "essere" : undefined;
    out.push({
      inf,
      en,
      enSe: enSe || undefined,
      rank: out.length + 1,
      isc: flags.has("isc") || undefined,
      aux,
      auxAlt,
      auxNote: auxNote || undefined,
      prn: flags.has("prn!") ? "only" : flags.has("prn") ? "also" : undefined,
      cl: flags.has("cl") || undefined,
      ii: flags.has("ii") || undefined,
      impersonal: flags.has("imp3") ? "3" : flags.has("imp") ? "lui" : undefined,
    });
  }
  return out;
}

export const IT_VERB_SPECS: ItVerbSpec[] = parse();

/** The display infinitive of a spec: "parlare", "pentirsi", "andarsene". */
export function specInfinitive(s: ItVerbSpec): string {
  return s.inf;
}
