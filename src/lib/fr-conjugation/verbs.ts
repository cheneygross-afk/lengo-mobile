// Synced from cheneygross-afk/lengo:src/lib/fr-conjugation/verbs.ts by scripts/sync-content.mjs -- edit it there, not here.
// The French verbs the conjugation engine knows by name, roughly in order
// of frequency (after the Lexique 3 film-subtitle and book counts), so
// "top 50/100" drills can slice this list. A row is
//   "infinitive|English meaning|flags|meaning with se"
// Flags (space-separated):
//   E      compound tenses with être (aller, venir, tomber...)
//   B      être when it has no direct object, avoir when it has one
//          (monter, sortir, passer...); the tables show être
//   prn    also common as a pronominal verb (lever -> se lever)
//   prn!   only pronominal (se souvenir, s'asseoir)
//   en     pronominal with en (s'en aller)
//   dbl    -eler/-eter verb that doubles the consonant (appelle, jette)
//          rather than taking è (achète)
//   imp    impersonal: only with il (il faut, il pleut)
// Irregular verbs get their forms from irregular.ts; -er spelling changes
// (ç, ge, è, y -> i) are worked out in conjugate.ts.

export type FrVerbSpec = {
  inf: string;
  en: string;
  enSe?: string;
  rank: number;
  aux: "avoir" | "être";
  auxBoth: boolean;
  prn?: "also" | "only";
  en_?: boolean;
  dbl?: boolean;
  impersonal?: boolean;
};

const ROWS = `
être|to be
avoir|to have
faire|to do, to make|prn|to become, to get (used to); to be done
dire|to say, to tell|prn|to tell oneself, to think
pouvoir|can, to be able to
aller|to go|E
voir|to see|prn|to see oneself, to be obvious
savoir|to know (a fact, how to)
vouloir|to want
venir|to come|E
falloir|to be necessary (il faut: one must)|imp
devoir|must, to have to, to owe
croire|to believe, to think
trouver|to find|prn|to be (located), to find oneself
donner|to give
prendre|to take
parler|to speak, to talk
aimer|to love, to like
passer|to pass, to spend (time), to stop by|B prn|to happen
mettre|to put, to put on|prn|to start (se mettre à), to get into
demander|to ask|prn|to wonder
tenir|to hold
sembler|to seem
laisser|to let, to leave
rester|to stay, to remain|E
penser|to think
entendre|to hear|prn|to get along
regarder|to look at, to watch
répondre|to answer, to reply
rendre|to give back; to make (+ adjective)|prn|to go (to a place); to surrender
connaître|to know (a person, a place)
paraître|to seem, to appear
arriver|to arrive, to happen|E
sentir|to feel, to smell|prn|to feel (well, tired...)
attendre|to wait (for)|prn|to expect
vivre|to live
chercher|to look for
sortir|to go out, to leave|B
comprendre|to understand
porter|to carry, to wear
entrer|to enter, to come in|E
devenir|to become|E
revenir|to come back|E
écrire|to write
appeler|to call|dbl prn|to be called (je m'appelle)
tomber|to fall|E
reprendre|to take back, to resume
commencer|to begin, to start
suivre|to follow
montrer|to show
partir|to leave|E
mourir|to die|E
ouvrir|to open
lire|to read
servir|to serve|prn|to help oneself; to use (se servir de)
jouer|to play
perdre|to lose|prn|to get lost
recevoir|to receive
changer|to change
oublier|to forget
présenter|to present, to introduce|prn|to introduce oneself
permettre|to allow, to permit
apprendre|to learn, to teach
continuer|to continue
compter|to count
retrouver|to find (again), to meet up with|prn|to meet up, to end up
quitter|to leave (a place, a person)
garder|to keep
apporter|to bring
rappeler|to call back, to remind|dbl prn|to remember
sourire|to smile
lever|to raise, to lift|prn|to get up
rencontrer|to meet
tourner|to turn
marcher|to walk; to work (a machine)
monter|to go up, to get in|B
pousser|to push, to grow
reconnaître|to recognize
poser|to put down, to ask (a question)
tirer|to pull, to shoot
tuer|to kill
finir|to finish
essayer|to try
expliquer|to explain
offrir|to offer, to give (a gift)
souvenir|to remember|prn!
considérer|to consider
décider|to decide
travailler|to work
manger|to eat
jeter|to throw|dbl
agir|to act|prn|to be about (il s'agit de)
apparaître|to appear|E
courir|to run
produire|to produce
envoyer|to send
boire|to drink
dormir|to sleep
payer|to pay
acheter|to buy
conduire|to drive, to lead
asseoir|to sit down|prn!
battre|to beat|prn|to fight
retourner|to go back, to return; to turn over|B prn|to turn around
descendre|to go down, to get off|B
ajouter|to add
occuper|to occupy|prn|to take care of
préparer|to prepare|prn|to get ready
répéter|to repeat
crier|to shout
cacher|to hide|prn|to hide
toucher|to touch
choisir|to choose
réussir|to succeed, to pass (an exam)
arrêter|to stop, to arrest|prn|to stop
aider|to help
habiter|to live (in a place)
dépendre|to depend
pleurer|to cry
naître|to be born|E
aller|to go away, to leave|en
appartenir|to belong
craindre|to fear
voler|to fly, to steal
promettre|to promise
chanter|to sing
sauver|to save|prn|to run away
espérer|to hope
préférer|to prefer
amener|to bring (someone)
élever|to raise, to bring up
mener|to lead
couvrir|to cover
découvrir|to discover
obtenir|to get, to obtain
tendre|to hold out, to tend
défendre|to defend, to forbid
plaire|to please (ça me plaît: I like it)
remettre|to put back, to hand in
souffrir|to suffer
taire|to be quiet, to keep quiet|prn!
rire|to laugh
fermer|to close
frapper|to hit, to knock
importer|to matter, to import
exister|to exist
établir|to establish
assurer|to assure, to insure|prn|to make sure
annoncer|to announce
former|to form, to train
entraîner|to lead to, to train|prn|to practise, to train
tenter|to try, to tempt
proposer|to propose, to suggest
représenter|to represent
souhaiter|to wish
imaginer|to imagine
signifier|to mean
traverser|to cross
obliger|to force, to oblige
remplir|to fill
désirer|to desire, to want
inviter|to invite
retenir|to hold back, to remember
installer|to install, to set up|prn|to settle (in)
prévoir|to foresee, to plan
remarquer|to notice
risquer|to risk
accepter|to accept
refuser|to refuse
raconter|to tell (a story)
reposer|to put back|prn|to rest
coucher|to put to bed|prn|to go to bed
réveiller|to wake (someone)|prn|to wake up
laver|to wash|prn|to wash (oneself)
habiller|to dress|prn|to get dressed
promener|to walk (a dog)|prn|to go for a walk
dépêcher|to hurry|prn!
amuser|to amuse|prn|to have fun
ennuyer|to bore, to bother|prn|to be bored
intéresser|to interest|prn|to be interested (in)
inquiéter|to worry|prn|to worry
marier|to marry (off)|prn|to get married
tromper|to deceive|prn|to be mistaken
moquer|to make fun (of)|prn!
apercevoir|to notice, to catch sight of|prn|to realize
écouter|to listen (to)
gagner|to win, to earn
vendre|to sell
valoir|to be worth
pleuvoir|to rain|imp
neiger|to snow|imp
attaquer|to attack
baisser|to lower
briller|to shine
casser|to break
causer|to cause; to chat
chasser|to hunt, to chase away
coûter|to cost
creuser|to dig
danser|to dance
déclarer|to declare
déposer|to drop off, to put down
détruire|to destroy
diriger|to direct, to manage
disparaître|to disappear
distinguer|to distinguish
douter|to doubt|prn|to suspect
durer|to last
éclairer|to light (up)
effacer|to erase
embrasser|to kiss, to hug
empêcher|to prevent
employer|to use, to employ
emporter|to take (away)
enlever|to remove, to take off
enseigner|to teach
entourer|to surround
éprouver|to feel, to experience
éteindre|to turn off, to put out
étendre|to spread, to stretch|prn|to lie down
étonner|to surprise|prn|to be surprised
éviter|to avoid
exiger|to demand, to require
exprimer|to express
fixer|to fix, to stare at
glisser|to slip, to slide
goûter|to taste
grandir|to grow up
hésiter|to hesitate
ignorer|to not know, to ignore
indiquer|to indicate
interroger|to question
jurer|to swear
lancer|to throw, to launch
libérer|to free
louer|to rent; to praise
manquer|to miss, to lack
mériter|to deserve
mesurer|to measure
murmurer|to murmur, to whisper
nommer|to name, to appoint
noter|to note
nourrir|to feed
observer|to observe
obéir|to obey
oser|to dare
partager|to share
peindre|to paint
pencher|to lean|prn|to lean (over)
peser|to weigh
placer|to place
plaindre|to pity|prn|to complain
planter|to plant
plonger|to dive
posséder|to own, to possess
prêter|to lend
prier|to pray, to beg
prononcer|to pronounce
protéger|to protect
prouver|to prove
ramasser|to pick up
ramener|to bring back
ranger|to tidy, to put away
rapporter|to bring back, to report
rassurer|to reassure
recommencer|to start again
réfléchir|to think (about), to reflect
regretter|to regret, to miss
rejoindre|to join, to meet up with
relever|to raise again, to note|prn|to get back up
remercier|to thank
remonter|to go back up|B
remplacer|to replace
rentrer|to go home, to come back in|B
renverser|to knock over
réparer|to repair
repousser|to push back, to postpone
résoudre|to solve
respirer|to breathe
ressembler|to look like, to resemble
retirer|to withdraw, to take off
réunir|to gather|prn|to meet
rêver|to dream
rouler|to roll, to drive
saisir|to seize, to grasp
saluer|to greet
satisfaire|to satisfy
sauter|to jump
secouer|to shake
sécher|to dry
séparer|to separate|prn|to split up
serrer|to squeeze, to shake (hands)
signer|to sign
songer|to think (of), to dream
sonner|to ring
soulever|to lift
soutenir|to support
suffire|to be enough
supporter|to stand, to bear
supposer|to suppose
surprendre|to surprise
surveiller|to watch, to supervise
téléphoner|to phone
terminer|to finish, to end
traduire|to translate
traîner|to drag, to hang around
trembler|to tremble
vérifier|to check
visiter|to visit (a place)
voyager|to travel
accompagner|to accompany
accorder|to grant
accueillir|to welcome
acquérir|to acquire
admettre|to admit
admirer|to admire
adresser|to address|prn|to speak (to), to contact
affirmer|to assert
allumer|to light, to turn on
améliorer|to improve
appliquer|to apply
apprécier|to appreciate
approcher|to bring closer|prn|to come near
appuyer|to press, to lean
arracher|to tear out, to pull out
arranger|to arrange, to suit
atteindre|to reach
attirer|to attract
augmenter|to increase
avancer|to move forward
avouer|to admit, to confess
baigner|to bathe|prn|to go swimming
bâtir|to build
bouger|to move
brûler|to burn
calmer|to calm|prn|to calm down
céder|to give in, to give up
cesser|to stop
charger|to load, to charge
coller|to stick
combattre|to fight
commander|to order
commettre|to commit
communiquer|to communicate
comparer|to compare
compléter|to complete
composer|to compose, to dial
concerner|to concern
conclure|to conclude
confier|to entrust|prn|to confide
confondre|to confuse
conserver|to keep
consister|to consist
construire|to build
consulter|to consult
contenir|to contain
convaincre|to convince
convenir|to suit, to agree
copier|to copy
corriger|to correct
coudre|to sew
couper|to cut
créer|to create
croiser|to cross, to pass (someone)
cueillir|to pick (flowers, fruit)
cuire|to cook
débarrasser|to clear|prn|to get rid of
décevoir|to disappoint
déchirer|to tear
décrire|to describe
défaire|to undo
déjeuner|to have lunch
demeurer|to remain, to live
déménager|to move (house)
démontrer|to demonstrate
dépasser|to overtake, to exceed
déplacer|to move|prn|to get around
déplaire|to displease
déranger|to disturb
dessiner|to draw
deviner|to guess
dîner|to have dinner
diminuer|to decrease
discuter|to discuss, to talk
disposer|to have (at one's disposal)
distraire|to distract|prn|to amuse oneself
divorcer|to divorce
doubler|to double, to overtake
écraser|to crush, to run over
élire|to elect
éloigner|to move away|prn|to move away
emmener|to take (someone)
émouvoir|to move (emotionally)
encourager|to encourage
endormir|to fall asleep|prn!
engager|to hire|prn|to commit
enfermer|to lock up
enfuir|to run away|prn!
enregistrer|to record, to check in
entreprendre|to undertake
entretenir|to maintain
envahir|to invade
envisager|to consider, to plan
épouser|to marry
essuyer|to wipe
estimer|to estimate, to consider
étudier|to study
évoquer|to mention, to evoke
examiner|to examine
excuser|to excuse|prn|to apologize
exercer|to exercise, to practise
exposer|to exhibit, to expose
fabriquer|to make, to manufacture
fêter|to celebrate
fournir|to supply
franchir|to cross, to clear
fumer|to smoke
geler|to freeze
gêner|to bother
gérer|to manage
guérir|to heal, to cure
habituer|to accustom|prn|to get used to
haïr|to hate
hurler|to howl, to yell
inclure|to include
informer|to inform
inscrire|to enroll, to write down|prn|to sign up
insister|to insist
interdire|to forbid
interrompre|to interrupt
introduire|to introduce, to insert
inventer|to invent
joindre|to join, to attach, to reach
juger|to judge
lâcher|to let go
loger|to stay, to house
lutter|to fight, to struggle
maintenir|to maintain
marquer|to mark, to score
mélanger|to mix
mentir|to lie
mordre|to bite
nager|to swim
nettoyer|to clean
nier|to deny
organiser|to organize
pardonner|to forgive
parier|to bet
parcourir|to travel through, to skim
participer|to take part
parvenir|to reach, to manage (to)|E
pendre|to hang
persuader|to persuade
plier|to fold
poursuivre|to pursue, to continue
prédire|to predict
prévenir|to warn
profiter|to take advantage, to enjoy
projeter|to project, to plan|dbl
provoquer|to cause, to provoke
publier|to publish
punir|to punish
raccrocher|to hang up
ralentir|to slow down
rater|to miss, to fail
rechercher|to look for, to research
réclamer|to claim, to demand
recommander|to recommend
recueillir|to collect
reculer|to move back
réduire|to reduce
refaire|to do again
régler|to settle, to adjust
rejeter|to reject|dbl
relire|to reread
rembourser|to pay back
remuer|to stir, to move
renoncer|to give up
renouveler|to renew|dbl
renseigner|to inform|prn|to find out
renvoyer|to send back, to fire
répandre|to spread
repartir|to leave again|E
réserver|to book, to reserve
résister|to resist
respecter|to respect
ressentir|to feel
révéler|to reveal
revoir|to see again
rougir|to blush
soigner|to look after, to treat
soumettre|to submit
soupçonner|to suspect
souffler|to blow
souligner|to underline, to stress
subir|to undergo, to suffer
suggérer|to suggest
supplier|to beg
supprimer|to delete, to remove
survivre|to survive
tousser|to cough
trahir|to betray
traiter|to treat, to deal with
transformer|to transform
transmettre|to pass on, to transmit
transporter|to carry, to transport
unir|to unite
utiliser|to use
vaincre|to defeat
veiller|to stay up, to watch over
verser|to pour
vieillir|to grow old
viser|to aim
voter|to vote
adorer|to love, to adore
détester|to hate
dépenser|to spend (money)
économiser|to save (money)
cuisiner|to cook
brosser|to brush|prn|to brush (one's teeth, hair)
raser|to shave|prn|to shave
maquiller|to make up|prn|to put on make-up
doucher|to shower|prn!
garer|to park|prn|to park
emprunter|to borrow
bavarder|to chat
skier|to ski
épeler|to spell|dbl
télécharger|to download
imprimer|to print
annuler|to cancel
attraper|to catch
grossir|to put on weight
maigrir|to lose weight
applaudir|to applaud
réagir|to react
garantir|to guarantee
avertir|to warn
définir|to define
accomplir|to accomplish
atterrir|to land
agrandir|to enlarge
évanouir|to faint|prn!
fâcher|to anger|prn|to get angry
méfier|to be wary (of)|prn!
débrouiller|to sort out|prn|to manage, to get by
détendre|to relax, to loosen|prn|to relax
achever|to complete, to finish off
consacrer|to devote
contrôler|to control, to check
développer|to develop
constater|to note, to notice
réaliser|to carry out, to realize
concevoir|to design, to conceive
fonctionner|to work, to function
assister|to attend
impliquer|to involve
intégrer|to integrate
influencer|to influence
évaluer|to evaluate
analyser|to analyse
aborder|to tackle, to approach
adopter|to adopt
bénéficier|to benefit
citer|to quote
confirmer|to confirm
contribuer|to contribute
correspondre|to correspond
critiquer|to criticize
justifier|to justify
limiter|to limit
négocier|to negotiate
opposer|to oppose|prn|to be opposed (to)
renforcer|to strengthen
reproduire|to reproduce
accéder|to access
adapter|to adapt|prn|to adapt
autoriser|to allow
conquérir|to conquer
exclure|to exclude
extraire|to extract
nuire|to harm
percevoir|to perceive
prétendre|to claim
promouvoir|to promote
rompre|to break
contredire|to contradict
intervenir|to intervene|E
secourir|to help, to rescue
contraindre|to force
démentir|to deny
consentir|to consent
bouillir|to boil
fuir|to flee
abattre|to knock down, to cut down
débattre|to debate
séduire|to seduce, to charm
introduire|to introduce
vêtir|to dress, to clothe
fondre|to melt
mordre|to bite
tordre|to twist
suspendre|to hang, to suspend
abstenir|to abstain|prn!
survenir|to occur|E
provenir|to come from|E
détenir|to hold, to detain
soutenir|to support
appeler|to call
mentionner|to mention
préciser|to specify
indiquer|to indicate
conseiller|to advise
accuser|to accuse
expédier|to send, to ship
loger|to stay, to house
plaisanter|to joke
dévoiler|to unveil
gâcher|to waste, to spoil
`;

function parse(): FrVerbSpec[] {
  const out: FrVerbSpec[] = [];
  const seen = new Set<string>();
  for (const line of ROWS.split("\n")) {
    if (!line.trim()) continue;
    const [inf, en, flagStr = "", enSe] = line.split("|");
    const flags = new Set(flagStr.split(" ").filter(Boolean));
    const enFlag = flags.has("en");
    const key = enFlag ? `en ${inf}` : inf;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({
      inf,
      en,
      enSe: enSe || undefined,
      rank: out.length + 1,
      aux: flags.has("E") || flags.has("B") ? "être" : "avoir",
      auxBoth: flags.has("B"),
      prn: flags.has("prn!") || enFlag ? "only" : flags.has("prn") ? "also" : undefined,
      en_: enFlag || undefined,
      dbl: flags.has("dbl") || undefined,
      impersonal: flags.has("imp") || undefined,
    });
  }
  return out;
}

export const FR_VERB_SPECS: FrVerbSpec[] = parse();

/** The display infinitive of a spec: "parler", "se souvenir", "s'asseoir", "s'en aller". */
export function specInfinitive(s: FrVerbSpec): string {
  if (s.prn !== "only") return s.inf;
  return reflexiveInfinitive(s.inf, !!s.en_);
}

export function reflexiveInfinitive(base: string, en: boolean): string {
  if (en) return `s'en ${base}`;
  return /^([aeiouyàâéèêîôû]|h(?!ai|aï|url|ât|auss|ant|arc|ach|iss|eurt|asard|al[eè]t|onn))/i.test(base) ? `s'${base}` : `se ${base}`;
}
