// Synced from cheneygross-afk/lengo:src/lib/pt-conjugation/verbs.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Brazilian Portuguese verbs the conjugation engine knows by name,
// roughly in order of frequency in everyday Brazilian speech and writing
// (the verbs the course uses come first, with the common ones), so
// "top 50/100" drills can slice this list. A row is
//   "infinitive|English meaning|flags|meaning as a pronominal verb"
// Flags (space-separated):
//   prn    also common with a reflexive pronoun (levantar -> levantar-se)
//   prn!   only used with one (queixar-se, arrepender-se)
//   imp    impersonal: only in the ele form (chove, neva)
//   ei     e -> i in the eu form and the subjunctive (preferir: prefiro, prefira)
//   ou     o -> u in the eu form and the subjunctive (dormir: durmo, durma)
//   uo     u -> o in the tu, ele and eles forms (subir: sobes, sobe, sobem)
//   ii     e -> i wherever the stem is stressed (prevenir: previno, previne)
//   acc    accent on the stressed i/u of the stem (proibir: proíbo; reunir: reúno)
//   mario  -iar verb conjugated like -ear (odiar: odeio, odeia)
// The irregular verbs, the verbs built on them (manter, compor), and the
// patterns that follow from the ending (-ear, -air, -uir, -oer, -uzir and
// the spelling changes) are in irregular.ts and conjugate.ts.

export type PtVerbSpec = {
  inf: string;
  en: string;
  enSe?: string;
  rank: number;
  prn?: "also" | "only";
  impersonal?: boolean;
  /** Stem change not predictable from the ending. */
  radical?: "ei" | "ou" | "uo" | "ii" | "acc" | "mario";
};

const ROWS = `
ser|to be (identity, origin, time, what something is)
estar|to be (states, location, the -ing form: estou falando)
ter|to have; there is/are (in speech: tem)
ir|to go
fazer|to do, to make
poder|can, to be able to; may
dizer|to say, to tell
haver|there to be (há: there is/are); to have (auxiliary, formal)
dar|to give
ver|to see
saber|to know (a fact, how to)
querer|to want
ficar|to stay; to become, to get; to be (located)
vir|to come
falar|to speak, to talk
dever|must, should; to owe
passar|to pass, to spend (time); to iron
achar|to find; to think (an opinion)|prn|to consider oneself
pôr|to put
chegar|to arrive; to be enough (chega!)
deixar|to let, to leave (behind)
gostar|to like (gostar de)
conhecer|to know (a person, a place), to meet|prn|to know each other, to meet
pensar|to think
trabalhar|to work
olhar|to look (at)
parecer|to seem, to look like|prn|to look alike
levar|to take, to carry
começar|to begin, to start
tomar|to take; to drink, to have (a coffee)
voltar|to come back, to return
precisar|to need (precisar de)
chamar|to call|prn|to be called (eu me chamo...)
comer|to eat
morar|to live (in a place)
viver|to live
acontecer|to happen
entender|to understand
perguntar|to ask (a question)
lembrar|to remind; to remember|prn|to remember (lembrar-se de)
trazer|to bring
sair|to go out, to leave
encontrar|to find, to meet|prn|to meet (up)
ouvir|to hear, to listen to
esperar|to wait (for); to hope; to expect
tentar|to try
conseguir|to manage to, to get|ei
pegar|to take, to grab, to catch, to pick up
usar|to use; to wear
escrever|to write
ler|to read
abrir|to open
fechar|to close
pedir|to ask for, to order
pagar|to pay
comprar|to buy
vender|to sell
beber|to drink
dormir|to sleep|ou
acordar|to wake up; to agree
jogar|to play (a game, a sport); to throw
estudar|to study
aprender|to learn
ensinar|to teach
mudar|to change; to move (house)|prn|to move (house)
continuar|to continue, to go on
receber|to receive
perder|to lose; to miss (a bus)
ganhar|to win, to earn; to get (a present)
mostrar|to show
contar|to tell (a story); to count
responder|to answer, to reply
entrar|to come in, to go in, to enter
cair|to fall
correr|to run
andar|to walk; to ride (andar de ônibus)
tocar|to touch; to play (an instrument); to ring
cantar|to sing
dançar|to dance
ajudar|to help
chorar|to cry
rir|to laugh
sentir|to feel|ei prn|to feel (sentir-se bem)
acreditar|to believe
casar|to marry|prn|to get married
morrer|to die
nascer|to be born
crescer|to grow (up)
ligar|to call (on the phone); to turn on; to care (ligar para)
desligar|to hang up; to turn off
assistir|to watch (assistir a); to attend
mandar|to send; to tell (someone to)
procurar|to look for
lavar|to wash|prn|to wash (oneself)
limpar|to clean
cozinhar|to cook
preparar|to prepare|prn|to get ready
servir|to serve; to be useful|ei
cortar|to cut
abraçar|to hug
beijar|to kiss
amar|to love
odiar|to hate|mario
preferir|to prefer|ei
escolher|to choose
decidir|to decide
resolver|to solve; to decide
explicar|to explain
repetir|to repeat|ei
corrigir|to correct
traduzir|to translate
significar|to mean
viajar|to travel
visitar|to visit
descansar|to rest
nadar|to swim
subir|to go up, to climb; to rise|uo
descer|to go down, to get off
sentar|to seat|prn|to sit down
levantar|to lift, to raise|prn|to get up
deitar|to lay down|prn|to lie down, to go to bed
vestir|to dress, to put on (clothes)|ei prn|to get dressed
tirar|to take off, to take out; to take (a photo)
botar|to put (informal)
colocar|to put, to place
guardar|to keep, to put away
esquecer|to forget|prn|to forget (esquecer-se de)
costumar|to usually do, to be used to (costumo acordar cedo: I usually get up early)
prestar|to be any good; to pay (attention: prestar atenção); to provide (a service)
anotar|to write down, to take notes
agendar|to schedule
checar|to check
testar|to test
focar|to focus
perceber|to notice, to realize
notar|to notice
imaginar|to imagine
sonhar|to dream
desejar|to wish, to want
sorrir|to smile
gritar|to shout
brincar|to play (children), to joke
jantar|to have dinner
almoçar|to have lunch
custar|to cost
alugar|to rent
gastar|to spend
economizar|to save (money)
emprestar|to lend
devolver|to give back, to return
trocar|to change, to exchange
experimentar|to try (on), to taste
provar|to prove; to taste; to try on
escutar|to listen (to)
marcar|to mark; to schedule, to book
reservar|to book, to reserve
cancelar|to cancel
confirmar|to confirm
organizar|to organize
planejar|to plan
terminar|to finish, to end; to break up
acabar|to finish, to end; to have just (acabar de)
parar|to stop
seguir|to follow; to keep going|ei
virar|to turn; to become
atravessar|to cross
dirigir|to drive; to direct
estacionar|to park
aceitar|to accept
recusar|to refuse
concordar|to agree
discordar|to disagree
discutir|to discuss; to argue
conversar|to talk, to chat
mentir|to lie (tell a lie)|ei
prometer|to promise
convidar|to invite
agradecer|to thank
desculpar|to forgive, to excuse|prn|to apologize
perdoar|to forgive
reclamar|to complain
queixar|to complain|prn!
preocupar|to worry (someone)|prn|to worry (preocupar-se com)
acalmar|to calm|prn|to calm down
cuidar|to take care of (cuidar de)
proteger|to protect
salvar|to save, to rescue
matar|to kill
machucar|to hurt|prn|to get hurt
doer|to hurt, to ache (minha cabeça dói)
curar|to cure, to heal
tratar|to treat; to deal with
respirar|to breathe
tossir|to cough|ou
espirrar|to sneeze
engordar|to put on weight
emagrecer|to lose weight
melhorar|to improve, to get better
piorar|to get worse
aumentar|to increase
diminuir|to decrease, to reduce
desenvolver|to develop
criar|to create; to raise (children)
construir|to build
destruir|to destroy
produzir|to produce
consertar|to fix, to repair
quebrar|to break
funcionar|to work (function)
apertar|to press, to squeeze; to tighten
empurrar|to push
puxar|to pull
carregar|to carry; to charge (a battery); to load
lançar|to launch, to throw
segurar|to hold
soltar|to let go, to release
pendurar|to hang (up)
encher|to fill
esvaziar|to empty
derrubar|to knock down, to drop
pular|to jump; to skip
caminhar|to walk
passear|to go for a walk, to stroll
voar|to fly
mergulhar|to dive
pescar|to fish
acampar|to camp
desenhar|to draw
pintar|to paint
gravar|to record
filmar|to film
fotografar|to photograph
publicar|to publish
postar|to post (online)
compartilhar|to share
baixar|to download; to lower
digitar|to type
clicar|to click
apagar|to erase, to delete; to turn off (a light)
acender|to light, to turn on
imprimir|to print
enviar|to send
avisar|to warn, to let know
informar|to inform
comunicar|to communicate|prn|to communicate
anunciar|to announce
apresentar|to present, to introduce|prn|to introduce oneself
cumprimentar|to greet
despedir|to dismiss, to fire|prn|to say goodbye (despedir-se de)
elogiar|to praise
criticar|to criticize
brigar|to fight, to argue
bater|to hit, to knock; to beat
chutar|to kick
vencer|to win, to beat
empatar|to draw, to tie (a game)
treinar|to train, to practice
competir|to compete|ei
participar|to take part
torcer|to support (a team), to root for; to twist
votar|to vote
eleger|to elect
governar|to govern
obedecer|to obey
permitir|to allow
proibir|to forbid|acc
exigir|to demand, to require
obrigar|to force, to oblige
impedir|to prevent
evitar|to avoid
desistir|to give up
insistir|to insist
resistir|to resist
existir|to exist
depender|to depend
pertencer|to belong
merecer|to deserve
valer|to be worth
importar|to matter; to import|prn|to mind, to care (importar-se)
interessar|to interest|prn|to be interested (in)
adorar|to love, to adore
detestar|to hate, to detest
aguentar|to stand, to bear
suportar|to bear, to stand
sofrer|to suffer
assustar|to scare|prn|to get scared
surpreender|to surprise
admirar|to admire
respeitar|to respect
confiar|to trust (confiar em)
duvidar|to doubt
desconfiar|to suspect, to distrust
suspeitar|to suspect
crer|to believe
reconhecer|to recognize; to admit
descobrir|to discover, to find out|ou
inventar|to invent, to make up
pesquisar|to research, to search
investigar|to investigate
analisar|to analyze
calcular|to calculate
medir|to measure
pesar|to weigh
comparar|to compare
selecionar|to select
separar|to separate|prn|to split up
juntar|to put together, to gather|prn|to join
unir|to unite, to join
dividir|to divide, to share
somar|to add (up)
incluir|to include
excluir|to exclude, to delete
acrescentar|to add
completar|to complete
preencher|to fill in (a form)
assinar|to sign; to subscribe
entregar|to deliver, to hand in
buscar|to fetch, to pick up; to look for
transportar|to transport
mover|to move
mexer|to move, to stir; to touch, to mess with (mexer em)
cheirar|to smell
calar|to silence|prn|to be quiet, to shut up
sussurrar|to whisper
enganar|to deceive, to fool|prn|to be mistaken
errar|to make a mistake, to get wrong
acertar|to get right, to hit (a target)
transformar|to transform|prn|to turn into
tornar|to make, to turn|prn|to become (tornar-se)
permanecer|to remain
durar|to last
demorar|to take (time), to be long
atrasar|to delay|prn|to be late
adiantar|to bring forward; to help (não adianta: it's no use)
apressar|to hurry|prn|to hurry up
aguardar|to wait (for), to await
faltar|to be missing, to lack; to miss (school, work)
sobrar|to be left over
bastar|to be enough
caber|to fit
conter|to contain|prn|to hold back
manter|to keep, to maintain|prn|to stay, to keep oneself
obter|to obtain, to get
deter|to stop, to detain
reter|to retain, to hold back
entreter|to entertain|prn|to amuse oneself
abster|to abstain|prn!
compor|to compose, to make up
dispor|to arrange; to have (dispor de)|prn|to be willing to
expor|to exhibit, to expose
impor|to impose
opor|to oppose|prn|to object (opor-se a)
propor|to propose, to suggest
supor|to suppose
repor|to replace, to put back
depor|to testify; to depose
pressupor|to presuppose
contrapor|to set against, to contrast
transpor|to cross, to overcome
intervir|to intervene
convir|to suit, to be convenient
provir|to come from, to stem from
advir|to result (from)
satisfazer|to satisfy
desfazer|to undo; to unpack (a suitcase)
refazer|to redo
contradizer|to contradict
prever|to predict, to foresee
rever|to see again; to review
reler|to reread
recair|to fall back, to relapse
distrair|to distract|prn|to get distracted
atrair|to attract
trair|to betray
extrair|to extract
contrair|to contract
subtrair|to subtract
sobressair|to stand out|prn|to stand out
reconstruir|to rebuild
possuir|to own, to possess
contribuir|to contribute
distribuir|to distribute
atribuir|to attribute
concluir|to conclude, to finish
substituir|to replace, to substitute
instruir|to instruct
constituir|to constitute, to make up
influir|to influence
fluir|to flow
usufruir|to enjoy (the use of)
roer|to gnaw, to bite (one's nails)
moer|to grind
conduzir|to drive; to lead
reduzir|to reduce
introduzir|to introduce
seduzir|to seduce
deduzir|to deduce
reproduzir|to reproduce
recear|to fear
nomear|to name, to appoint
basear|to base|prn|to be based (on)
pentear|to comb|prn|to comb one's hair
bloquear|to block
frear|to brake
estrear|to premiere, to debut
chatear|to annoy, to upset|prn|to get upset
rodear|to surround
sortear|to draw (lots), to raffle
semear|to sow
presentear|to give a present to
barbear|to shave|prn|to shave
homenagear|to pay tribute to
folhear|to leaf through
bronzear|to tan|prn|to get a tan
escanear|to scan
nortear|to guide
pleitear|to seek, to claim
remediar|to remedy|mario
ansiar|to long for|mario
incendiar|to set fire to|mario
mediar|to mediate|mario
intermediar|to act as an intermediary|mario
copiar|to copy
negociar|to negotiate
pronunciar|to pronounce
renunciar|to give up, to resign
denunciar|to report, to denounce
iniciar|to begin, to start
financiar|to finance
influenciar|to influence
apreciar|to appreciate, to enjoy
avaliar|to evaluate, to assess
variar|to vary
esquiar|to ski
adiar|to postpone
reunir|to bring together|acc prn|to meet, to get together
saudar|to greet, to salute|acc
prevenir|to prevent; to warn|ii
agredir|to attack, to assault|ii
progredir|to progress|ii
transgredir|to break (a rule)|ii
cobrir|to cover|ou
encobrir|to cover up|ou
engolir|to swallow|ou
fugir|to run away, to flee|uo
consumir|to consume|uo
sumir|to disappear|uo
cuspir|to spit|uo
sacudir|to shake|uo
acudir|to come to the aid of|uo
sugerir|to suggest|ei
referir|to refer|ei prn|to refer to (referir-se a)
transferir|to transfer|ei
interferir|to interfere|ei
conferir|to check|ei
ferir|to wound, to hurt|ei
aderir|to adhere, to join|ei
digerir|to digest|ei
inserir|to insert|ei
divertir|to amuse|ei prn|to have fun
advertir|to warn|ei
investir|to invest|ei
despir|to undress|ei prn|to get undressed
refletir|to reflect|ei
consentir|to consent|ei
desmentir|to deny|ei
perseguir|to pursue, to persecute|ei
prosseguir|to proceed, to continue|ei
inferir|to infer|ei
distinguir|to distinguish
extinguir|to extinguish
erguer|to raise, to lift
expedir|to dispatch, to issue
equivaler|to be equivalent
requerer|to request, to require
acompanhar|to go with, to follow
acostumar|to accustom|prn|to get used to
afirmar|to state, to claim
alcançar|to reach
alimentar|to feed|prn|to eat, to feed oneself
alterar|to change, to alter
amanhecer|to dawn; to wake up (in a state)
anoitecer|to get dark
aparecer|to appear, to show up
aplicar|to apply
apoiar|to support
aproveitar|to make the most of, to enjoy
aproximar|to bring closer|prn|to approach
arrumar|to tidy; to arrange; to get (a job)|prn|to get ready
assumir|to take on, to assume
atender|to answer (the phone); to serve (a customer)
atingir|to reach, to hit
atualizar|to update
autorizar|to authorize
avançar|to advance
cansar|to tire|prn|to get tired
causar|to cause
celebrar|to celebrate
citar|to quote, to mention
cobrar|to charge
colaborar|to collaborate
combinar|to combine; to arrange (combinado!)
comemorar|to celebrate
comentar|to comment
cometer|to commit (a mistake, a crime)
compreender|to understand, to comprise
conectar|to connect
confessar|to confess
considerar|to consider
consultar|to consult
contratar|to hire
controlar|to control
convencer|to convince
conviver|to live with, to get along
cumprir|to fulfill, to keep (a promise)
declarar|to declare
defender|to defend
definir|to define
demonstrar|to demonstrate
desaparecer|to disappear
descrever|to describe
despertar|to wake (up)
destacar|to highlight|prn|to stand out
determinar|to determine
divulgar|to publicize, to spread
dobrar|to fold; to double; to turn (a corner)
dominar|to master, to dominate
educar|to educate, to bring up
elaborar|to draw up, to elaborate
eliminar|to eliminate
embarcar|to board
empregar|to employ, to use
encomendar|to order (goods)
enfrentar|to face
entrevistar|to interview
envolver|to involve|prn|to get involved
escapar|to escape
esclarecer|to clarify
esconder|to hide|prn|to hide
esforçar|to make an effort|prn!
estabelecer|to establish
estender|to extend; to hang out (washing)
estimar|to estimate; to cherish
estragar|to spoil, to ruin|prn|to go bad (food)
examinar|to examine
exercer|to exercise (a profession)
explorar|to explore; to exploit
expressar|to express|prn|to express oneself
falhar|to fail
festejar|to celebrate
fingir|to pretend
fixar|to fix, to set
formar|to form|prn|to graduate
fornecer|to supply
frequentar|to attend, to go to (regularly)
fumar|to smoke
garantir|to guarantee
gerar|to generate
gerenciar|to manage
habitar|to inhabit
identificar|to identify|prn|to identify (with)
ignorar|to ignore; not to know
iluminar|to light up
implicar|to imply; to pick on (implicar com)
incomodar|to bother|prn|to mind, to be bothered
indicar|to indicate; to recommend
instalar|to install|prn|to settle in
integrar|to integrate
interpretar|to interpret; to act
interromper|to interrupt
julgar|to judge
jurar|to swear
justificar|to justify
lamentar|to regret, to be sorry about
largar|to let go of, to drop; to quit
lidar|to deal (with)
limitar|to limit
localizar|to locate|prn|to be located
lutar|to fight
manifestar|to express|prn|to protest; to speak out
mencionar|to mention
meter|to put (in)|prn|to get involved, to meddle
misturar|to mix
modificar|to modify
montar|to assemble, to set up; to ride (a horse)
morder|to bite
negar|to deny
necessitar|to need
observar|to observe
ocorrer|to occur
ocupar|to occupy|prn|to take care of
oferecer|to offer
operar|to operate
orientar|to guide
partir|to leave, to depart; to break
picar|to sting; to chop
plantar|to plant
poupar|to save, to spare
praticar|to practice
prender|to arrest; to fasten
preservar|to preserve
pretender|to intend (not 'to pretend')
programar|to program, to plan
proporcionar|to provide
provocar|to provoke, to cause
queimar|to burn
realizar|to carry out, to achieve
recomendar|to recommend
recordar|to remember
recuperar|to recover|prn|to recover
refletir|to reflect|ei
registrar|to register, to record
relaxar|to relax
remover|to remove
reparar|to notice; to repair
representar|to represent
resgatar|to rescue
resultar|to result
revelar|to reveal
rezar|to pray
roubar|to steal, to rob
secar|to dry
sobreviver|to survive
socorrer|to help (in an emergency)
solicitar|to request
sujar|to make dirty|prn|to get dirty
superar|to overcome
surgir|to appear, to arise
suspender|to suspend
telefonar|to phone
temer|to fear
tremer|to tremble, to shake
utilizar|to use
valorizar|to value
verificar|to check
vigiar|to watch, to keep an eye on
xingar|to swear at, to curse
zangar|to anger|prn|to get angry
abaixar|to lower
abandonar|to abandon
abençoar|to bless
acenar|to wave
acolher|to welcome
adicionar|to add
adivinhar|to guess
adoecer|to fall ill
adotar|to adopt
afastar|to push away|prn|to move away
afetar|to affect
agarrar|to grab
agir|to act
agitar|to shake, to stir up
agradar|to please
alegrar|to cheer up|prn|to be glad
amarrar|to tie
ameaçar|to threaten
apaixonar|to fall in love (apaixonar-se por)|prn!
apanhar|to catch; to pick up; to get beaten
aplaudir|to applaud
apostar|to bet
apontar|to point (at)
aprovar|to approve; to pass (an exam: ser aprovado)
arrepender|to regret|prn!
arriscar|to risk
assaltar|to rob, to mug
atacar|to attack
atirar|to shoot; to throw
bagunçar|to mess up
balançar|to swing, to rock
banhar|to bathe|prn|to bathe, to take a bath
brilhar|to shine
buzinar|to honk
calçar|to put on (shoes)
chover|to rain|imp
nevar|to snow|imp
trovejar|to thunder|imp
ventar|to be windy|imp
garoar|to drizzle|imp
cochilar|to doze, to nap
colar|to stick, to glue; to cheat (in a test)
combater|to fight
conquistar|to conquer, to win
conservar|to preserve
costurar|to sew
cruzar|to cross
culpar|to blame
curtir|to enjoy, to like (informal; also online)
decorar|to decorate; to memorize
dedicar|to dedicate|prn|to devote oneself
demitir|to fire, to dismiss|prn|to resign
depositar|to deposit
derreter|to melt
desabafar|to get something off one's chest
descontar|to discount; to cash (a check); to take it out on
desmaiar|to faint
despejar|to pour; to evict
desperdiçar|to waste
disfarçar|to disguise
disputar|to compete for
doar|to donate
embrulhar|to wrap
encaixar|to fit (in)
encarar|to face
encostar|to lean|prn|to lean
enfeitar|to decorate
enjoar|to feel sick
enrolar|to roll up; to stall
ensaiar|to rehearse
enterrar|to bury
envergonhar|to embarrass|prn|to be ashamed
enxergar|to see, to make out
esbarrar|to bump into
escovar|to brush
esfriar|to cool down; to get cold
espalhar|to spread
espantar|to scare away; to amaze
esquentar|to heat up
estourar|to burst, to pop
expulsar|to expel
falecer|to pass away
favorecer|to favor
ferver|to boil
fofocar|to gossip
fritar|to fry
furar|to pierce; to puncture; to cut in line
gelar|to freeze, to chill
girar|to turn, to spin
gozar|to enjoy; to make fun of
grudar|to stick
guiar|to guide; to drive
herdar|to inherit
hesitar|to hesitate
hospedar|to host|prn|to stay (at a hotel)
inclinar|to tilt|prn|to lean
inscrever|to enroll|prn|to sign up
inspirar|to inspire
irritar|to irritate|prn|to get annoyed
lamber|to lick
latir|to bark
libertar|to free
lotar|to fill up
manchar|to stain
mastigar|to chew
molhar|to wet|prn|to get wet
namorar|to date, to go out with
narrar|to narrate
ofender|to offend|prn|to take offense
ordenar|to order, to arrange
ousar|to dare
parabenizar|to congratulate
parcelar|to pay in installments
patinar|to skate
pecar|to sin
piscar|to blink, to wink
pisar|to step (on)
raspar|to scrape, to shave
reagir|to react
reciclar|to recycle
recolher|to collect
reformar|to renovate
regar|to water (plants)
rejeitar|to reject
renovar|to renew
repartir|to share out
reprovar|to fail (an exam); to disapprove
resmungar|to grumble
retirar|to withdraw, to remove
retornar|to return
revisar|to revise, to check
rodar|to turn, to spin; to travel around
rolar|to roll; to happen (informal)
sacar|to withdraw (cash); to get it (informal)
soar|to sound
socar|to punch
soprar|to blow
sossegar|to calm down
sublinhar|to underline
suar|to sweat
suspirar|to sigh
tapar|to cover
temperar|to season
torrar|to toast; to blow (money)
trancar|to lock
tropeçar|to trip
vacinar|to vaccinate
varrer|to sweep
vazar|to leak
malhar|to work out (at the gym)
pedalar|to cycle
surfar|to surf
zoar|to make fun of; to mess around
topar|to be up for, to agree to; to bump into
rachar|to split (the bill); to crack
desembarcar|to get off, to disembark
decolar|to take off (plane)
pousar|to land; to perch
aterrissar|to land
abastecer|to fill up (with fuel), to supply
multar|to fine
candidatar|to apply (for a job)|prn!
matricular|to enroll|prn|to enroll
atrapalhar|to get in the way, to disturb
desmarcar|to cancel (an appointment)
antecipar|to bring forward
divorciar|to divorce|prn|to get divorced
envelhecer|to grow old
assar|to bake, to roast
descascar|to peel
enxugar|to dry (dishes, tears)
congelar|to freeze
sangrar|to bleed
vomitar|to vomit
receitar|to prescribe
internar|to hospitalize
florescer|to bloom, to flourish
condenar|to convict, to condemn
acusar|to accuse
testemunhar|to witness, to testify
vingar|to avenge|prn|to take revenge
punir|to punish
castigar|to punish
liderar|to lead
coordenar|to coordinate
lucrar|to profit
faturar|to invoice; to earn
deletar|to delete
acessar|to access
navegar|to browse; to sail
travar|to freeze (a computer); to lock
reiniciar|to restart
cadastrar|to register|prn|to sign up
editar|to edit
abordar|to approach, to tackle
abranger|to cover, to include
acarretar|to entail
agregar|to add
alegar|to claim
almejar|to aim for
ampliar|to expand, to enlarge
aprimorar|to improve, to refine
argumentar|to argue (a case)
assegurar|to ensure
atuar|to act, to work (as)
comprovar|to prove
constatar|to note, to establish
contestar|to challenge, to dispute
contemplar|to contemplate; to include
convocar|to summon, to call up
debater|to debate
desempenhar|to perform, to play (a role)
destinar|to set aside, to earmark
dispensar|to do without, to dismiss
efetuar|to carry out
empreender|to undertake; to start a business
enfatizar|to emphasize
enriquecer|to enrich, to get rich
evidenciar|to show, to make evident
expandir|to expand
fomentar|to foster
implementar|to implement
impulsionar|to boost
incentivar|to encourage
mobilizar|to mobilize
otimizar|to optimize
persistir|to persist
pontuar|to point out; to score
predominar|to predominate
priorizar|to prioritize
promover|to promote
propiciar|to provide, to allow
questionar|to question
reivindicar|to demand, to claim
repercutir|to have repercussions
ressaltar|to emphasize
salientar|to point out
solucionar|to solve
subestimar|to underestimate
sustentar|to support, to sustain
tender|to tend
transmitir|to transmit, to broadcast
vincular|to link
ater|to stick to (ater-se a)|prn!
admitir|to admit
adquirir|to acquire
afogar|to drown|prn|to drown
afundar|to sink
alertar|to warn
animar|to cheer up|prn|to get excited
apelar|to appeal
apostar|to bet
arrancar|to pull out, to tear off
assar|to bake
assinalar|to mark, to point out
atrever|to dare|prn!
baratear|to make cheaper
cativar|to captivate
cercar|to surround
cheirar|to smell
chocar|to shock; to collide
circular|to circulate
classificar|to classify|prn|to qualify
cobiçar|to covet
cogitar|to consider
compensar|to make up for; to pay off
competir|to compete|ei
conceder|to grant
confundir|to confuse|prn|to get confused
consolar|to console
consistir|to consist
constar|to be recorded, to appear (in a list)
contentar|to please|prn|to be content (with)
contribuir|to contribute
converter|to convert
correr|to run
corresponder|to correspond
criticar|to criticize
cultivar|to grow, to cultivate
dedicar|to dedicate|prn|to devote oneself
deduzir|to deduce
deparar|to come across (deparar-se com)|prn
derrotar|to defeat
desafiar|to challenge
desagradar|to displease
descartar|to discard, to rule out
desconhecer|not to know
desconectar|to disconnect
desligar|to hang up; to turn off
despachar|to send off, to check in (luggage)
detectar|to detect
dirigir|to drive; to direct
disponibilizar|to make available
distanciar|to distance|prn|to move away
duplicar|to double
elevar|to raise
emitir|to issue, to emit
emocionar|to move (emotionally)|prn|to be moved
encerrar|to close, to end
engatinhar|to crawl
ensaboar|to soap
entusiasmar|to excite|prn|to get excited
equipar|to equip
esgotar|to exhaust, to sell out|prn|to run out
esperar|to wait (for); to hope; to expect
esticar|to stretch
estimular|to stimulate
evoluir|to evolve
exagerar|to exaggerate
exibir|to show, to display
exportar|to export
falsificar|to forge
fascinar|to fascinate
fechar|to close
filtrar|to filter
financiar|to finance
firmar|to firm up, to sign
fluir|to flow
frustrar|to frustrate
fundar|to found
gerir|to manage|ei
gostar|to like
hidratar|to moisturize
igualar|to equal
iludir|to deceive|prn|to fool oneself
imitar|to imitate
incorporar|to incorporate
infectar|to infect
inovar|to innovate
inspecionar|to inspect
intimidar|to intimidate
invadir|to invade
inverter|to reverse
isolar|to isolate
lavar|to wash
legalizar|to legalize
lesar|to harm, to cheat
liberar|to release, to free up
licenciar|to license
manipular|to manipulate
mapear|to map
memorizar|to memorize
migrar|to migrate
moldar|to shape
monitorar|to monitor
motivar|to motivate
mudar|to change
nortear|to guide
ocultar|to hide
optar|to opt, to choose
oscilar|to fluctuate
pagar|to pay
penetrar|to penetrate
perceber|to notice
perfurar|to drill, to pierce
perturbar|to disturb
poluir|to pollute
possibilitar|to make possible
pregar|to nail; to preach
presumir|to presume
procurar|to look for
prolongar|to prolong
prosperar|to prosper
protestar|to protest
qualificar|to qualify
recorrer|to turn to; to appeal
recuar|to back off, to retreat
reforçar|to reinforce
refugiar|to shelter|prn|to take refuge
regular|to regulate
relatar|to report
renascer|to be reborn
residir|to reside
restaurar|to restore
restringir|to restrict
resumir|to summarize
retratar|to portray
reunir|to bring together|acc prn|to meet, to get together
revisar|to revise
satisfazer|to satisfy
simplificar|to simplify
situar|to place|prn|to be located
sinalizar|to signal
sofrer|to suffer
sugerir|to suggest|ei
suprir|to supply, to make up for
tolerar|to tolerate
tranquilizar|to reassure|prn|to calm down
transitar|to pass, to move
tropeçar|to trip
ultrapassar|to overtake, to exceed
vibrar|to vibrate; to be thrilled
violar|to violate
visar|to aim at
zelar|to look after (zelar por)
comparecer|to attend, to show up
remarcar|to reschedule
enfiar|to stick (into), to put on (clothes in a hurry)
fracassar|to fail
agravar|to worsen, to aggravate
encaminhar|to forward, to refer
viralizar|to go viral
recapitular|to recap
fantasiar|to fantasize; to dress up (for a costume party)|prn|to dress up (in costume)
delegar|to delegate
complementar|to complement
acelerar|to speed up
desacelerar|to slow down
printar|to take a screenshot (informal)
riscar|to cross out, to scratch
adaptar|to adapt|prn|to adapt (to)
exceder|to exceed
aconselhar|to advise
disparar|to fire, to shoot off; to soar
decorrer|to elapse; to result (from)
repassar|to pass on; to go over
fitar|to stare at
cassar|to revoke, to strip (of a mandate)
caçar|to hunt
arcar|to bear (costs: arcar com)
desvalorizar|to devalue, to undervalue
escurecer|to get dark
desgrudar|to unstick, to peel off
aposentar|to retire (someone)|prn|to retire
reabrir|to reopen
prejudicar|to harm, to hurt (chances, health)
repensar|to rethink
prorrogar|to extend (a deadline)
decepcionar|to disappoint|prn|to be disappointed
conscientizar|to raise awareness
conciliar|to reconcile, to balance (conciliar trabalho e família)
cunhar|to coin, to mint
reescrever|to rewrite
ajustar|to adjust
sanar|to remedy, to clear up
requentar|to reheat
rebater|to rebut, to hit back
generalizar|to generalize
vaiar|to boo
romper|to break (off)
ninar|to lull to sleep
instaurar|to establish, to set up
cutucar|to poke, to nudge
naufragar|to be shipwrecked, to sink
restar|to remain, to be left
driblar|to dribble (past), to get around
declamar|to recite
arrepiar|to give goosebumps|prn|to get goosebumps
especular|to speculate
restabelecer|to restore|prn|to recover
distorcer|to distort
ajuizar|to file (a lawsuit)|acc
arrecadar|to raise (money), to collect
stalkear|to stalk (online, informal)
comportar|to hold, to allow|prn|to behave
aspirar|to inhale; to vacuum; to aspire (to)
endereçar|to address
sambar|to dance samba
autenticar|to authenticate, to notarize
desbloquear|to unblock, to unlock
alagar|to flood
zombar|to mock (zombar de)
sintonizar|to tune in
redigir|to write, to draft
abdicar|to abdicate, to give up
coçar|to scratch
escalar|to climb; to pick (a team)
magoar|to hurt (feelings)|prn|to get hurt (emotionally)
assobiar|to whistle
arquivar|to file, to archive
capacitar|to train, to qualify
relacionar|to relate, to list|prn|to relate (to), to get involved
dirimir|to settle (a dispute)
condicionar|to condition, to make dependent
formalizar|to formalize
descarregar|to unload; to run down (a battery)
choramingar|to whimper, to whine
sediar|to host (an event)
opinar|to give an opinion
desqualificar|to disqualify
taxar|to tax
atar|to tie
idealizar|to idealize; to conceive
devorar|to devour
mascar|to chew (gum)
recontar|to retell; to recount
censurar|to censor
suicidar|to commit suicide|prn!
autodeclarar|to self-identify|prn!
chefiar|to head, to lead
inaugurar|to open, to inaugurate
torturar|to torture
deslocar|to move, to shift|prn|to get around, to commute
capturar|to capture
escravizar|to enslave
intensificar|to intensify
aprofundar|to deepen|prn|to go deeper (into)
desabar|to collapse
arregaçar|to roll up (sleeves)
chupar|to suck
caricaturar|to caricature
remoer|to brood over, to dwell on
pingar|to drip
germinar|to germinate
desaprender|to unlearn
suplicar|to beg, to plead
bolar|to come up with (a plan, informal)
processar|to process; to sue
pressionar|to pressure; to press
impetrar|to file (a petition)
alinhar|to align
estigmatizar|to stigmatize
lacrar|to seal; to nail it (slang)
visualizar|to view, to see (a message)
flopar|to flop (slang)
humilhar|to humiliate
ceder|to give in; to give up (a seat)
proceder|to proceed
concorrer|to compete, to run (for)
fiscalizar|to inspect, to oversee
regulamentar|to regulate
formular|to formulate
`;

function parse(): PtVerbSpec[] {
  const out: PtVerbSpec[] = [];
  const seen = new Set<string>();
  for (const line of ROWS.split("\n")) {
    if (!line.trim()) continue;
    const [inf, en, flagStr = "", enSe] = line.split("|");
    if (seen.has(inf)) continue;
    seen.add(inf);
    const flags = new Set(flagStr.split(" ").filter(Boolean));
    const radical = (["ei", "ou", "uo", "ii", "acc", "mario"] as const).find((f) => flags.has(f));
    out.push({
      inf,
      en,
      enSe: enSe || undefined,
      rank: out.length + 1,
      prn: flags.has("prn!") ? "only" : flags.has("prn") ? "also" : undefined,
      impersonal: flags.has("imp") || undefined,
      radical,
    });
  }
  return out;
}

export const PT_VERB_SPECS: PtVerbSpec[] = parse();

/** The display infinitive of a spec: "falar", "queixar-se" for a verb only used with se. */
export function specInfinitive(s: PtVerbSpec): string {
  return s.prn === "only" ? `${s.inf}-se` : s.inf;
}
