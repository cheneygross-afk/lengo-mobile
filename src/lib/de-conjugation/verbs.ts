// Synced from cheneygross-afk/lengo:src/lib/de-conjugation/verbs.ts by scripts/sync-content.mjs -- edit it there, not here.
// The German verbs the conjugation engine knows by name, roughly in order
// of frequency (everyday speech and the Goethe word lists first), so
// "top 50/100" drills can slice this list. A row is
//   "infinitive|English meaning|flags|meaning with sich"
// A middle dot marks a separable prefix: "an·fangen" (ich fange an,
// angefangen). Inseparable prefixes (be-, ver-, er-...; über-, unter-...
// when there is no dot) are found by the engine.
// Flags (space-separated):
//   S      Perfekt with sein (gehen, kommen, aufstehen...)
//   SH     sein, but haben with a direct object (fahren: ich bin nach
//          Berlin gefahren / ich habe das Auto gefahren); the tables show sein
//   HS     haben, but sein when nothing is acted on (brechen: das Glas ist
//          gebrochen); the tables show haben
//          (no flag: haben, or for a simple strong verb what irregular.ts says)
//   prn    also common as a reflexive verb (waschen -> sich waschen)
//   prn!   only reflexive (sich freuen, sich beeilen)
//   D      the reflexive pronoun is dative (sich etwas merken: ich merke mir)
//   w      weak although it looks like a strong verb (bereiten: bereitete,
//          not "beritt"; aufhängen: hängte auf)
//   imp    impersonal: only with es (es regnet)

export type DeVerbSpec = {
  /** Infinitive without the dot or sich: "anfangen", "freuen". */
  inf: string;
  /** Separable prefix ("an"), if marked. */
  sep?: string;
  en: string;
  /** Meaning of the reflexive verb, for prn verbs. */
  enRefl?: string;
  rank: number;
  aux?: "haben" | "sein";
  auxAlt?: "haben" | "sein";
  prn?: "also" | "only";
  dat?: boolean;
  weak?: boolean;
  impersonal?: boolean;
};

const ROWS = `
sein|to be|S
haben|to have
werden|to become; will (future); to be (passive)|S
können|can, to be able to
müssen|must, to have to
sagen|to say
machen|to make, to do
geben|to give
kommen|to come|S
sollen|should, to be supposed to
wollen|to want
gehen|to go, to walk|S
wissen|to know (a fact)
sehen|to see
lassen|to let; to leave; to have (something) done
stehen|to stand
finden|to find; to think (have an opinion)
bleiben|to stay, to remain|S
liegen|to lie (be lying), to be located
heißen|to be called; to mean
denken|to think
nehmen|to take
tun|to do
dürfen|may, to be allowed to
glauben|to believe
halten|to hold; to stop; to keep
nennen|to name, to call
mögen|to like
zeigen|to show
führen|to lead
sprechen|to speak
bringen|to bring
leben|to live
fahren|to drive, to go (by vehicle), to ride|SH
meinen|to mean; to think, to be of the opinion
fragen|to ask
kennen|to know (be familiar with)
gelten|to be valid, to count as
stellen|to put (upright), to place
spielen|to play
arbeiten|to work
brauchen|to need
folgen|to follow|S
lernen|to learn, to study
bestehen|to exist; to pass (an exam); to insist (on)
verstehen|to understand
setzen|to set, to put|prn|to sit down
bekommen|to get, to receive
beginnen|to begin, to start
erzählen|to tell, to narrate
versuchen|to try
schreiben|to write
laufen|to run; to walk; to be on (a film)|S
erklären|to explain
entsprechen|to correspond to
sitzen|to sit, to be sitting
ziehen|to pull; to move (house)|SH
scheinen|to shine; to seem
fallen|to fall|S
gehören|to belong (to)
entstehen|to arise, to come into being|S
erhalten|to receive, to get; to preserve
treffen|to meet; to hit|prn|to meet (up)
suchen|to look for, to search
legen|to lay, to put (lying down)|prn|to lie down
vor·stellen|to introduce; to present|prn|to introduce oneself
handeln|to act; to trade|prn|to be about (es handelt sich um)
erreichen|to reach, to achieve
tragen|to carry; to wear
schaffen|to manage, to make it, to get done
lesen|to read
verlieren|to lose
dar·stellen|to represent, to portray
erkennen|to recognise
entwickeln|to develop|prn|to develop, to evolve
reden|to talk
aus·sehen|to look (appear)
erscheinen|to appear; to be published|S
bilden|to form; to educate
an·fangen|to begin, to start
erwarten|to expect, to await
wohnen|to live (reside)
betreffen|to concern, to affect
warten|to wait
vergehen|to pass (time)|S
helfen|to help
gewinnen|to win
schließen|to close; to conclude
fühlen|to feel|prn|to feel (well, ill...)
bieten|to offer
interessieren|to interest|prn|to be interested (in)
erinnern|to remind|prn|to remember
ergeben|to result in, to yield|prn|to surrender; to arise
an·bieten|to offer
studieren|to study (at university)
verbinden|to connect, to join
an·sehen|to look at|prn D|to watch, to have a look at (sich etwas ansehen)
fehlen|to be missing, to be absent
bedeuten|to mean
vergleichen|to compare
an·nehmen|to accept; to assume
lieben|to love
ändern|to change|prn|to change (become different)
kaufen|to buy
hören|to hear; to listen
öffnen|to open|prn|to open (up)
verlassen|to leave|prn|to rely (on)
treten|to step; to kick|SH
entscheiden|to decide|prn|to make up one's mind
schicken|to send
gefallen|to please (es gefällt mir: I like it)
benutzen|to use
erleben|to experience
dienen|to serve
steigen|to climb, to rise|S
verkaufen|to sell
kosten|to cost; to taste
lachen|to laugh
holen|to fetch, to get
bezahlen|to pay (for)
zahlen|to pay
essen|to eat
trinken|to drink
schlafen|to sleep
fliegen|to fly|SH
rufen|to call, to shout
an·rufen|to call (on the phone), to ring
auf·stehen|to get up, to stand up|S
an·kommen|to arrive; to depend (on)|S
ein·kaufen|to shop, to go shopping
mit·kommen|to come along|S
zurück·kommen|to come back|S
fern·sehen|to watch television
ein·laden|to invite
aus·gehen|to go out|S
auf·hören|to stop, to quit
auf·machen|to open
zu·machen|to close
mit·bringen|to bring along
fest·stellen|to establish, to notice
statt·finden|to take place
teil·nehmen|to take part, to participate
kennen·lernen|to get to know, to meet
ein·schlafen|to fall asleep|S
auf·wachen|to wake up|S
an·ziehen|to put on (clothes); to attract|prn|to get dressed
aus·ziehen|to take off (clothes); to move out|HS prn|to get undressed
um·ziehen|to move (house)|S prn|to get changed
ein·steigen|to get in, to board|S
aus·steigen|to get out, to get off|S
um·steigen|to change (trains, buses)|S
ab·fahren|to depart, to leave|S
zu·hören|to listen (to)
vor·bereiten|to prepare|w prn|to prepare (oneself)
freuen|to be glad; to look forward to (sich freuen auf)|prn!
waschen|to wash|prn|to wash (oneself), to have a wash
duschen|to shower|prn|to have a shower
beeilen|to hurry (up)|prn!
ärgern|to annoy|prn|to be annoyed
wundern|to surprise|prn|to be surprised, to wonder
kümmern|to concern|prn|to take care of (sich kümmern um)
beschweren|to weigh down|prn|to complain
bedanken|to say thank you|prn!
verabschieden|to say goodbye to; to pass (a law)|prn|to say goodbye
erholen|to recover, to have a rest|prn!
gewöhnen|to accustom|prn|to get used to
konzentrieren|to concentrate|prn|to concentrate
verlieben|to fall in love|prn!
streiten|to argue, to quarrel|prn|to argue (with each other)
unterhalten|to entertain; to maintain|prn|to talk, to have a conversation
bewerben|to apply (for a job)|prn!
entschuldigen|to excuse|prn|to apologise
merken|to notice|prn D|to remember, to make a note of (sich etwas merken)
leisten|to achieve, to perform|prn D|to afford (sich etwas leisten)
wünschen|to wish|prn D|to wish for (sich etwas wünschen)
überlegen|to think about, to consider|prn D|to think over (sich etwas überlegen)
irren|to err|prn|to be mistaken
verletzen|to injure, to hurt|prn|to hurt oneself
beschäftigen|to employ, to occupy|prn|to deal with, to be busy with
befinden|to deem|prn|to be (located)
fürchten|to fear|prn|to be afraid
regnen|to rain|imp
schneien|to snow|imp
reisen|to travel|S
tanzen|to dance
singen|to sing
kochen|to cook
backen|to bake
putzen|to clean
spazieren|to stroll, to go for a walk|S
schwimmen|to swim|SH
wandern|to hike|S
rennen|to run, to race|S
springen|to jump|S
klettern|to climb|S
fliehen|to flee|S
sterben|to die|S
passieren|to happen|S
geschehen|to happen|S
gelingen|to succeed (es gelingt mir: I manage to)|S
wachsen|to grow|S
werfen|to throw
fangen|to catch
schlagen|to hit, to beat
vor·schlagen|to suggest
stehlen|to steal
lügen|to lie (tell lies)
schweigen|to be silent
schreien|to scream, to shout
weinen|to cry
lächeln|to smile
sammeln|to collect
klingeln|to ring (a bell)
wechseln|to change, to exchange
feiern|to celebrate
liefern|to deliver
besuchen|to visit
bestellen|to order
zählen|to count
wählen|to choose; to vote
schmecken|to taste
danken|to thank
schenken|to give (as a present)
hoffen|to hope
packen|to pack
ein·packen|to pack, to wrap
aus·packen|to unpack
verbrauchen|to consume, to use up
dauern|to last, to take (time)
stören|to disturb
zerstören|to destroy
rauchen|to smoke
schauen|to look
an·schauen|to look at|prn D|to watch (sich etwas anschauen)
bauen|to build
trauen|to trust|prn|to dare
vertrauen|to trust
erlauben|to allow
teilen|to share, to divide
mit·teilen|to inform, to tell
verteilen|to distribute
lehren|to teach
spüren|to sense, to feel
berühren|to touch
spülen|to rinse; to wash up
malen|to paint
wiederholen|to repeat
verdienen|to earn
planen|to plan
trennen|to separate|prn|to split up, to separate
träumen|to dream
auf·räumen|to tidy up
stimmen|to be right, to be correct; to vote
bestimmen|to determine, to decide
zu·stimmen|to agree
kämpfen|to fight
schimpfen|to grumble, to scold
drücken|to press, to push
drucken|to print
blicken|to look, to glance
klicken|to click
stecken|to put, to stick
entdecken|to discover
decken|to cover; to lay (the table)
wecken|to wake (someone) up
lenken|to steer
tanken|to fill up (with fuel)
winken|to wave
parken|to park
bemerken|to notice, to remark
wirken|to have an effect; to seem
regeln|to regulate, to settle
zweifeln|to doubt
verhandeln|to negotiate
behandeln|to treat
bügeln|to iron
segeln|to sail|SH
fördern|to promote, to support
verbessern|to improve|prn|to improve
verhindern|to prevent
steuern|to steer, to control
zögern|to hesitate
zittern|to tremble, to shake
bedauern|to regret
füttern|to feed
plaudern|to chat
erobern|to conquer
äußern|to express|prn|to comment, to give one's opinion
erweitern|to extend, to expand
scheitern|to fail|S
verändern|to change|prn|to change
verlängern|to extend, to prolong
versichern|to insure; to assure
verwechseln|to confuse, to mix up
bewundern|to admire
telefonieren|to talk on the phone
fotografieren|to photograph
reparieren|to repair
diskutieren|to discuss
organisieren|to organise
probieren|to try (out), to taste
funktionieren|to work, to function
informieren|to inform|prn|to find out (about)
akzeptieren|to accept
kritisieren|to criticise
existieren|to exist
reagieren|to react
produzieren|to produce
kontrollieren|to check, to control
analysieren|to analyse
definieren|to define
garantieren|to guarantee
riskieren|to risk
investieren|to invest
präsentieren|to present
publizieren|to publish
abonnieren|to subscribe (to)
gratulieren|to congratulate
korrigieren|to correct
markieren|to mark
notieren|to note down
trainieren|to train, to work out
explodieren|to explode|S
marschieren|to march|S
operieren|to operate (on)
kopieren|to copy
buchstabieren|to spell
demonstrieren|to demonstrate
rasieren|to shave|prn|to shave
renovieren|to renovate
recherchieren|to research
kommunizieren|to communicate
ignorieren|to ignore
motivieren|to motivate
profitieren|to profit, to benefit
regieren|to govern, to rule
reservieren|to reserve, to book
servieren|to serve (food)
sortieren|to sort
transportieren|to transport
antworten|to answer
beantworten|to answer (a question, a letter)
achten|to pay attention (to); to respect
beachten|to observe, to take note of
betrachten|to look at, to regard
beobachten|to watch, to observe
übernachten|to stay overnight
heiraten|to marry, to get married
mieten|to rent
vermieten|to rent out, to let
bitten|to ask (for), to request
raten|to advise; to guess
retten|to save, to rescue
wetten|to bet
leiten|to lead, to manage
begleiten|to accompany|w
bereiten|to prepare (food, joy)|w
verbreiten|to spread|prn|to spread
bearbeiten|to edit, to work on
berichten|to report
richten|to direct, to aim|prn|to go by (sich richten nach)
gründen|to found, to set up
landen|to land|SH
melden|to report|prn|to get in touch
senden|to send; to broadcast
wenden|to turn|prn|to turn (to someone)
enden|to end
beenden|to finish, to end
verwenden|to use
baden|to bathe, to have a bath
schaden|to harm, to damage
testen|to test
töten|to kill
husten|to cough
leuchten|to shine, to glow
starten|to start; to take off|SH
atmen|to breathe
rechnen|to calculate; to count on (mit)
zeichnen|to draw
trocknen|to dry|SH
widmen|to dedicate|prn|to devote oneself (to)
ordnen|to put in order, to arrange
begegnen|to meet (by chance), to encounter|S
leugnen|to deny
heizen|to heat
grüßen|to greet, to say hello
küssen|to kiss
lösen|to solve; to loosen
schützen|to protect
nutzen|to use, to make use of
besitzen|to own, to possess
übersetzen|to translate
ersetzen|to replace
mixen|to mix
hassen|to hate
passen|to fit, to suit
verpassen|to miss (a train, a chance)
vermissen|to miss (someone)
fassen|to grasp, to take hold of
reißen|to tear, to rip|HS
beißen|to bite
schmeißen|to chuck, to throw
gießen|to pour; to water (plants)
genießen|to enjoy
fließen|to flow|S
schießen|to shoot
beschließen|to decide, to resolve
ab·schließen|to lock; to complete
messen|to measure
vergessen|to forget
fressen|to eat (of animals)
entlassen|to dismiss, to discharge
blasen|to blow
befehlen|to order, to command
empfehlen|to recommend
bergen|to rescue, to recover
bersten|to burst|S
biegen|to bend|SH
binden|to tie, to bind
braten|to fry, to roast
brechen|to break|HS
brennen|to burn
dreschen|to thresh
dringen|to penetrate, to force one's way|S
erlöschen|to go out (fire, light)|S
erschrecken|to be startled, to get a fright|S
fechten|to fence
flechten|to braid, to weave
gebären|to give birth to
gedeihen|to thrive|S
genesen|to recover (from an illness)|S
gleichen|to resemble
gleiten|to glide, to slide|S
glimmen|to glow, to smoulder
graben|to dig
greifen|to grab, to reach (for)
hängen|to hang (be hanging)
hauen|to hit, to bash
heben|to lift, to raise
klingen|to sound
kneifen|to pinch
kriechen|to crawl|S
laden|to load
leiden|to suffer
leihen|to lend
meiden|to avoid
mahlen|to grind
melken|to milk
misslingen|to fail, to go wrong|S
pfeifen|to whistle
preisen|to praise
quellen|to well up, to swell|S
reiben|to rub
reiten|to ride (a horse)|SH
riechen|to smell
ringen|to wrestle, to struggle
rinnen|to run, to trickle|S
saufen|to drink (of animals), to booze
saugen|to suck
scheiden|to separate, to divorce|HS
schelten|to scold
schieben|to push
schleichen|to creep, to sneak|S
schleifen|to sharpen, to grind
schlingen|to wind, to wrap; to gulp
schmelzen|to melt|SH
schneiden|to cut
schreiten|to stride|S
schwellen|to swell|S
schwinden|to dwindle, to fade|S
schwingen|to swing
schwören|to swear (an oath)
sinken|to sink|S
sinnen|to ponder, to brood
spinnen|to spin; to be crazy
sprießen|to sprout|S
stechen|to sting, to prick
stinken|to stink
stoßen|to push, to bump; to come across (auf)|HS
streichen|to paint; to cross out; to stroke
treiben|to drive; to do (sport)
trügen|to deceive
verderben|to spoil, to ruin|HS
verzeihen|to forgive
weichen|to give way, to yield|S
weisen|to point, to show
werben|to advertise; to recruit
wiegen|to weigh
winden|to wind, to twist
wringen|to wring
zwingen|to force
frieren|to freeze, to be cold|HS
betrügen|to cheat, to deceive
ab·holen|to pick up, to collect
ab·geben|to hand in
an·geben|to state, to indicate; to show off
auf·geben|to give up; to post (a letter)
aus·geben|to spend (money)
zu·geben|to admit
zurück·geben|to give back
vergeben|to forgive; to award
ab·nehmen|to lose weight; to take off
auf·nehmen|to record; to take in
zu·nehmen|to gain weight; to increase
mit·nehmen|to take along
übernehmen|to take over
unternehmen|to undertake, to do
benehmen|to behave|prn!
ab·schreiben|to copy
auf·schreiben|to write down
beschreiben|to describe
unterschreiben|to sign
verschreiben|to prescribe
vor·kommen|to happen, to occur; to seem|S
um·kommen|to die, to perish|S
entkommen|to escape|S
herein·kommen|to come in|S
vorbei·kommen|to drop by, to come past|S
heraus·finden|to find out
weiter·gehen|to go on, to continue|S
los·gehen|to start; to set off|S
weg·gehen|to go away, to leave|S
vorbei·gehen|to go past|S
um·gehen|to deal with, to handle (mit)|S
begehen|to commit (a crime, an error)
zu·sehen|to watch
wieder·sehen|to see again
vor·sehen|to plan, to provide for
gestehen|to confess, to admit
widerstehen|to resist
missverstehen|to misunderstand
empfangen|to receive
behalten|to keep
enthalten|to contain
verhalten|to hold back|prn|to behave
an·halten|to stop
aus·halten|to bear, to stand
fest·halten|to hold on to|prn|to hold on
ein·halten|to keep to, to comply with
beraten|to advise|prn|to confer
verraten|to betray; to give away (a secret)
ein·fallen|to occur to (es fällt mir ein: I think of it)|S
aus·fallen|to be cancelled; to fail|S
auf·fallen|to be noticeable, to strike|S
hin·fallen|to fall down|S
verschlafen|to oversleep
nach·schlagen|to look up
ertragen|to bear, to endure
vertragen|to tolerate|prn|to get along (with)
ein·tragen|to enter (in a list)|prn|to sign up
übertragen|to broadcast; to transfer
bei·tragen|to contribute
betragen|to amount to
erziehen|to bring up, to educate
beziehen|to cover; to receive|prn|to refer (to)
ein·ziehen|to move in|S
vor·ziehen|to prefer
verbieten|to forbid, to ban
erfinden|to invent
empfinden|to feel, to perceive
erwerben|to acquire
weg·werfen|to throw away
vor·werfen|to reproach
entwerfen|to design, to draft
übertreffen|to surpass, to exceed
versprechen|to promise
besprechen|to discuss
widersprechen|to contradict
aus·sprechen|to pronounce|prn|to speak one's mind
beweisen|to prove
erfahren|to find out, to learn; to experience
los·fahren|to set off, to drive off|S
mit·fahren|to ride along, to get a lift|S
zurück·fahren|to drive back, to go back|S
herunter·laden|to download
zu·lassen|to allow, to admit
ab·biegen|to turn (off)|S
ein·brechen|to break in|S
unterbrechen|to interrupt
zerbrechen|to break (into pieces)|HS
verschwinden|to disappear|S
ertrinken|to drown|S
zerfallen|to fall apart, to disintegrate|S
verunglücken|to have an accident|S
geraten|to get (into), to end up (in)|S
gelangen|to reach, to get (to)|S
entgehen|to escape, to elude|S
missglücken|to fail, to go wrong|S
erfolgen|to take place, to follow|S
erfrieren|to freeze to death|S
verhungern|to starve (to death)|S
ersticken|to suffocate, to choke|SH
erwachen|to wake up, to awaken|S
erkranken|to fall ill|S
verfallen|to decay; to expire|S
entfliehen|to escape (from)|S
verstummen|to fall silent|S
versinken|to sink|S
verlaufen|to go, to turn out (of an event)|S prn|to get lost
entgleisen|to derail, to go off the rails|S
betrinken|to get drunk|prn!
verbringen|to spend (time)
um·bringen|to kill
bei·bringen|to teach
nach·denken|to think (about), to reflect
an·erkennen|to recognise, to acknowledge
verbrennen|to burn|HS
überweisen|to transfer (money)
hin·weisen|to point out
aus·leihen|to borrow; to lend
verleihen|to award; to lend
begreifen|to grasp, to understand
an·greifen|to attack
unterstreichen|to underline
übertreiben|to exaggerate
unterscheiden|to distinguish|prn|to differ
ab·fliegen|to take off, to depart (by plane)|S
verschieben|to postpone, to move
vermeiden|to avoid
ab·hängen|to depend (on)
auf·hängen|to hang up|w
ab·sagen|to cancel
zu·sagen|to accept (an invitation), to promise
aus·machen|to turn off; to arrange; to matter
an·machen|to turn on
mit·machen|to take part, to join in
auf·passen|to pay attention, to look out
an·passen|to adapt, to adjust|prn|to adapt
ein·richten|to furnish, to set up
vor·haben|to plan, to intend
weiter·machen|to carry on
fest·legen|to fix, to set
hin·legen|to put down|prn|to lie down
hin·setzen|to put down|prn|to sit down
ab·waschen|to wash up
ab·trocknen|to dry (the dishes)
aus·füllen|to fill in (a form)
an·melden|to register|prn|to sign up, to register
um·tauschen|to exchange (goods)
aus·wählen|to choose, to select
an·hören|to listen to|prn D|to listen to (sich etwas anhören)
aus·drücken|to express|prn|to express oneself
an·kreuzen|to tick, to put a cross by
ein·setzen|to use, to deploy|prn|to stand up for
fort·setzen|to continue
zusammen·fassen|to summarise
auf·bauen|to build up, to set up
ein·schalten|to switch on
aus·schalten|to switch off
vor·lesen|to read aloud
her·stellen|to produce, to manufacture
ein·stellen|to hire; to adjust|prn|to get ready (for)
aus·stellen|to exhibit; to issue
weh·tun|to hurt
leid·tun|to be sorry (es tut mir leid: I'm sorry)
aus·ruhen|to rest|prn|to have a rest
wohl·fühlen|to feel good, to feel at home|prn!
erledigen|to deal with, to get done
beleidigen|to insult
kündigen|to hand in one's notice; to cancel (a contract)
benötigen|to need
bestätigen|to confirm
berücksichtigen|to take into account
beruhigen|to calm|prn|to calm down
umarmen|to hug
überraschen|to surprise
überzeugen|to convince
unterrichten|to teach
unterstützen|to support
untersuchen|to examine
verstecken|to hide|prn|to hide
vereinbaren|to agree on, to arrange
verzichten|to do without, to give up
verlangen|to demand
vermuten|to suppose, to suspect
verreisen|to go away (on a trip)|S
behaupten|to claim
bemühen|to trouble|prn|to make an effort, to try hard
betonen|to stress, to emphasise
bewegen|to move|prn|to move; to exercise
beantragen|to apply for
begründen|to justify
beurteilen|to judge
bewerten|to evaluate, to rate
erfüllen|to fulfil
ergänzen|to complete, to supplement
erhöhen|to raise, to increase
erkälten|to catch a cold|prn!
ermöglichen|to make possible
ernähren|to feed|prn|to eat, to live on
eröffnen|to open (a shop, an account)
erwähnen|to mention
entfernen|to remove|prn|to move away
entspannen|to relax|prn|to relax
enttäuschen|to disappoint
gestalten|to design, to shape
verabreden|to arrange|prn|to arrange to meet
langweilen|to bore|prn|to be bored
erkundigen|to enquire, to ask (about)|prn!
schämen|to be ashamed|prn!
verspäten|to be late|prn!
sorgen|to care (for)|prn|to worry (about)
besorgen|to get, to obtain
versorgen|to supply, to look after
borgen|to borrow; to lend
kriegen|to get
siegen|to win
reichen|to be enough; to hand, to pass
klagen|to complain
wagen|to dare
jagen|to hunt, to chase
kleben|to stick, to glue
streben|to strive
üben|to practise
loben|to praise
tauchen|to dive|SH
untersuchen|to examine
buchen|to book
fluchen|to swear, to curse
mischen|to mix
wischen|to wipe
rutschen|to slip, to slide|S
tauschen|to swap, to exchange
täuschen|to deceive|prn|to be mistaken
klatschen|to clap
prüfen|to test, to check
überprüfen|to check, to verify
impfen|to vaccinate
hüpfen|to hop|S
klopfen|to knock
nicken|to nod
eilen|to hurry|S
frühstücken|to have breakfast
sparen|to save (money)
gucken|to look
duzen|to say du (to someone)
siezen|to say Sie (to someone)
joggen|to jog|SH
surfen|to surf
lohnen|to reward|prn|to be worth it
erschaffen|to create
spalten|to split
salzen|to salt
weben|to weave
sieden|to boil, to simmer
schnauben|to snort
triefen|to drip, to be dripping wet
speien|to spit, to spew
gären|to ferment
schallen|to resound, to ring out
stieben|to fly about (sparks, dust)
klimmen|to climb (literary)
schinden|to maltreat, to work (someone) to death
schleißen|to strip (feathers); to wear out
verdrießen|to annoy, to vex (literary)
wägen|to weigh up, to ponder
zeihen|to accuse (of) (literary)
`;

function parse(): DeVerbSpec[] {
  const out: DeVerbSpec[] = [];
  const seen = new Set<string>();
  let rank = 0;
  for (const line of ROWS.trim().split("\n")) {
    const [raw, en, flagStr = "", enRefl] = line.split("|");
    const inf = raw.replace("·", "");
    if (seen.has(inf)) continue;
    seen.add(inf);
    rank++;
    const flags = new Set(flagStr.split(" ").filter(Boolean));
    const spec: DeVerbSpec = { inf, en, rank };
    if (raw.includes("·")) spec.sep = raw.split("·")[0];
    if (enRefl) spec.enRefl = enRefl;
    if (flags.has("S")) spec.aux = "sein";
    if (flags.has("SH")) {
      spec.aux = "sein";
      spec.auxAlt = "haben";
    }
    if (flags.has("HS")) {
      spec.aux = "haben";
      spec.auxAlt = "sein";
    }
    if (flags.has("prn")) spec.prn = "also";
    if (flags.has("prn!")) spec.prn = "only";
    if (flags.has("D")) spec.dat = true;
    if (flags.has("w")) spec.weak = true;
    if (flags.has("imp")) spec.impersonal = true;
    out.push(spec);
  }
  return out;
}

export const DE_VERB_SPECS: DeVerbSpec[] = parse();

/** The display infinitive of a spec: "machen", "anfangen", "sich freuen". */
export function specInfinitive(s: DeVerbSpec): string {
  return s.prn === "only" ? `sich ${s.inf}` : s.inf;
}
