// Synced from cheneygross-afk/lengo:src/lib/exams/it/cils-tre-2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { AUDIO_NOTE, DIALOGUE_NOTE, MONOLOGUE_NOTE, PHOTO_NOTE, cilsExam, gap, listen, match, paras, q, read, rec, speak, vf, write } from "./text";

// CILS TRE (Advanced) practice exam 2: landscape, media and family. The
// five sections of the real CILS TRE (C1): a weather alert, a conference
// venue, a museum audio guide and a landlord's voicemail, a fact-checker
// on false news, siblings deciding how to care for their mother; the
// landscape as a common good, a literary memory of a summer house,
// opinions on moving back to the countryside; a scientific report with
// the subjunctive, connectors, idioms; an article on free museums and a
// formal request to the mayor; a conversation on culture and a photo of
// a closed newsstand.
const PEOPLE = ["A. Lorenzo", "B. Teresa", "C. Andrea", "D. Sofia", "E. Franco"];

export const CILS_TRE_2: Exam = cilsExam(
  {
    slug: "cils-tre-2",
    level: "C1",
    title: "CILS TRE (Advanced) practice exam 2",
    description:
      "A second full CILS TRE practice exam: a storm alert in Liguria, a conference venue lost, a disputed painting, a boiler repair, a fact-checker on false news, siblings caring for their mother; the landscape and land take, a summer house remembered, five voices on village life; a scientific report, connectors and idioms; an article on free museums and a request to the mayor; culture, and whether newspapers have a future.",
  },
  {
    ascolto: [
      listen(
        1,
        "Ascolta i testi. Per ogni testo scegli la risposta giusta.",
        [
          rec("Testo 1", [
            "La Protezione civile ha diramato un'allerta arancione per le prossime trentasei ore su gran parte della Liguria: sono previsti temporali forti e persistenti, con il rischio di esondazione dei corsi d'acqua minori. Si raccomanda di evitare gli spostamenti non necessari e di non sostare nei sottopassi.",
          ], "m"),
          rec("Testo 2", [
            "F: Per il convegno di maggio, hai pensato alla sala?",
            "M: Avevo opzionato l'aula magna dell'università, ma ci hanno appena comunicato che è inagibile per lavori fino a giugno.",
            "F: E adesso? Abbiamo già mandato gli inviti!",
            "M: Ho sentito l'ex convento di San Domenico: hanno una sala da duecento posti, libera proprio quel fine settimana. Costa un po' di più, ma è a due passi dalla stazione.",
            "F: Allora blocchiamola subito, prima che ce la soffi qualcun altro.",
          ]),
          rec("Testo 3", [
            "Sala sette. Il dipinto che avete di fronte fu a lungo attribuito a un allievo del maestro. Solo vent'anni fa, durante un restauro, le indagini rivelarono sotto la superficie un disegno preparatorio così sicuro, e corretto più volte in corso d'opera, da far pensare alla mano del maestro stesso. Oggi la maggior parte degli studiosi accetta questa attribuzione, ma il dibattito non è del tutto chiuso.",
          ]),
          rec("Testo 4", [
            "Buonasera, sono Bertolini, il proprietario. La chiamo per la questione della caldaia: il tecnico può venire giovedì tra le nove e le undici. Se Lei non c'è, potrebbe lasciare le chiavi alla portinaia? Ah, e Le confermo che la riparazione è a carico mio, come previsto dal contratto, visto che si tratta di manutenzione straordinaria.",
          ], "m"),
        ],
        [
          q(
            1,
            "Testo 1. Che cosa si raccomanda ai cittadini?",
            ["Di lasciare la regione", "Di evitare gli spostamenti non necessari e i sottopassi", "Di chiudere i negozi", "Di salire ai piani alti"],
            2,
            "\"Evitare gli spostamenti non necessari e non sostare nei sottopassi\", where water collects.",
          ),
          q(
            2,
            "Testo 2. Perché devono cambiare sala?",
            ["Perché l'aula magna è troppo piccola", "Perché costa troppo", "Perché l'aula magna è chiusa per lavori", "Perché è lontana dalla stazione"],
            3,
            "The \"aula magna\" is \"inagibile per lavori fino a giugno\": unusable during building work. \"Soffiare\" here means to snatch.",
          ),
          q(
            3,
            "Testo 3. Che cosa ha cambiato l'attribuzione del dipinto?",
            ["Il disegno preparatorio emerso durante un restauro", "La firma scoperta sul retro", "Un documento d'archivio", "La testimonianza di un allievo"],
            1,
            "The underdrawing, so sure and corrected as the work went on, pointed to the master himself.",
          ),
          q(4, "Testo 4. Chi paga la riparazione della caldaia?", ["L'inquilina", "La portinaia", "Il tecnico", "Il proprietario"], 4, "\"La riparazione è a carico mio\": the landlord pays, because it's \"manutenzione straordinaria\"."),
        ],
        `${AUDIO_NOTE} Four short recordings: choose the right answer for each.`,
      ),
      listen(
        2,
        "Ascolta l'intervista. Scegli la risposta giusta.",
        [
          rec("Intervista a una fact-checker", [
            "M: Ogni giorno circolano in rete migliaia di notizie false. Chiara Ruggeri fa la fact-checker: il suo lavoro è verificarle. Chiara, come si riconosce una notizia falsa?",
            "F: Spesso dal tono, prima ancora che dal contenuto. Le notizie false giocano sulle emozioni: indignazione, paura, stupore. Titoli in maiuscolo, punti esclamativi, frasi come «nessuno ve lo dirà». Quando una notizia ci fa arrabbiare molto, è il momento di fermarsi.",
            "M: E poi?",
            "F: Poi si cerca la fonte originale. Chi l'ha detto, dove, quando? Molte notizie false non sono del tutto inventate: sono vere a metà, oppure vere ma vecchie, rilanciate come se fossero di oggi. La foto di un'alluvione di dieci anni fa, per esempio, usata per un evento di ieri.",
            "M: Le persone condividono queste notizie in malafede?",
            "F: Raramente. La maggior parte le condivide perché confermano quello che già pensa. È un meccanismo psicologico normale, si chiama pregiudizio di conferma. Per questo correggere qualcuno con aggressività non funziona: si sente attaccato e si chiude.",
            "M: Che cosa funziona, allora?",
            "F: Più che smentire, conviene insegnare il metodo. Nelle scuole dove facciamo laboratori, i ragazzi imparano a fare due o tre verifiche semplici. E scoprono che il dubbio, se ben usato, è uno strumento di libertà, non di sfiducia verso tutto.",
            "M: Lei è ottimista?",
            "F: Cautamente. Gli strumenti per verificare non sono mai stati così accessibili. Il problema è il tempo: verificare richiede minuti, condividere un secondo.",
          ], "m"),
        ],
        [
          q(5, "Secondo Chiara, che cosa tradisce spesso una notizia falsa?", ["Il tono emotivo", "La lunghezza", "La presenza di dati", "Il nome dell'autore"], 1, "\"Spesso dal tono, prima ancora che dal contenuto\": outrage, fear, capital letters."),
          q(
            6,
            "Che cosa dice delle notizie false?",
            ["Sono sempre completamente inventate.", "Spesso sono vere a metà, oppure vecchie e riproposte.", "Si trovano solo sui social.", "Riguardano solo la politica."],
            2,
            "\"Sono vere a metà, oppure vere ma vecchie, rilanciate come se fossero di oggi\".",
          ),
          q(
            7,
            "Perché, secondo lei, la gente condivide notizie false?",
            ["Per guadagnare soldi", "Per malafede", "Perché confermano ciò che già pensa", "Perché non sa usare internet"],
            3,
            "\"Perché confermano quello che già pensa\": confirmation bias, \"pregiudizio di conferma\".",
          ),
          q(
            8,
            "Che cosa propone come soluzione?",
            ["Correggere con decisione chi sbaglia", "Vietare i social ai ragazzi", "Chiudere i siti che diffondono notizie false", "Insegnare un metodo per verificare"],
            4,
            "\"Più che smentire, conviene insegnare il metodo\"; aggressive correction backfires.",
          ),
          q(
            9,
            "Qual è, per lei, il problema principale?",
            ["Che verificare richiede più tempo che condividere", "Che gli strumenti sono troppo cari", "Che le scuole non collaborano", "Che i giornali non verificano"],
            1,
            "\"Verificare richiede minuti, condividere un secondo\".",
          ),
        ],
        `${AUDIO_NOTE} An interview with a fact-checker: choose the right answer.`,
      ),
      listen(
        3,
        "Ascolta la conversazione tra due fratelli. Le affermazioni sono vere o false?",
        [
          rec("Conversazione", [
            "F: Ho parlato con il medico della mamma. Dice che da sola, ormai, non può più stare.",
            "M: Lo temevo. Dopo la caduta di marzo non è più la stessa. Hai pensato a una soluzione?",
            "F: Le possibilità sono tre: una badante a tempo pieno, una residenza per anziani, oppure trasferirla da uno di noi.",
            "M: Da me è impossibile, lo sai: tre stanze, due bambini, e io sono sempre in viaggio per lavoro.",
            "F: E da me ci sono le scale. Lei comunque vuole restare a casa sua, l'ha detto chiaramente.",
            "M: Allora la badante. Costa, ma possiamo dividere la spesa a metà, e c'è anche l'indennità che le spetta.",
            "F: D'accordo. Però vorrei che la scegliessimo insieme, e con la mamma presente. Non voglio che si senta messa da parte.",
            "M: Hai ragione. Sabato vengo su e facciamo i colloqui tutti e tre insieme.",
          ]),
        ],
        [
          vf(10, "Secondo il medico, la madre può ancora vivere da sola.", false, "\"Da sola, ormai, non può più stare\"."),
          vf(11, "La madre è caduta a marzo.", true, "\"Dopo la caduta di marzo non è più la stessa\"."),
          vf(12, "Il fratello ha spazio sufficiente per ospitare la madre.", false, "\"Da me è impossibile\": three rooms, two children."),
          vf(13, "La madre preferisce restare a casa sua.", true, "\"Vuole restare a casa sua, l'ha detto chiaramente\"."),
          vf(14, "I fratelli divideranno la spesa della badante.", true, "\"Possiamo dividere la spesa a metà\"."),
          vf(15, "La sorella vuole scegliere la badante senza coinvolgere la madre.", false, "She wants to choose \"insieme, e con la mamma presente\"."),
        ],
        `${AUDIO_NOTE} Are the statements true (\"Vero\") or false (\"Falso\")?`,
      ),
    ],
    lettura: [
      read(
        1,
        "Leggi il testo e scegli la risposta giusta.",
        [
          {
            title: "Il paesaggio come bene comune",
            body: paras(
              "L'articolo 9 della Costituzione italiana affida alla Repubblica il compito di tutelare «il paesaggio e il patrimonio storico e artistico della Nazione». È una formula che, letta oggi, colpisce per la sua modernità: i costituenti non pensavano soltanto ai monumenti, ma all'insieme di campi, coste, colline e centri abitati che rende riconoscibile un territorio.",
              "Eppure, negli ultimi decenni, quel paesaggio è stato profondamente trasformato. Capannoni, centri commerciali, villette a schiera e infrastrutture hanno coperto ogni anno migliaia di ettari di terreno agricolo o naturale. Il fenomeno ha un nome tecnico, «consumo di suolo», e conseguenze tutt'altro che estetiche: un terreno coperto dal cemento non assorbe più l'acqua piovana, e le alluvioni diventano più frequenti e più gravi.",
              "Le cause sono molteplici. Per molti comuni gli oneri di urbanizzazione, cioè le somme versate da chi costruisce, sono stati a lungo una fonte di entrate a cui era difficile rinunciare. A questo si aggiunge un modello di sviluppo che ha privilegiato la costruzione del nuovo rispetto al recupero dell'esistente: costruire in un campo, dove non bisogna demolire né bonificare, costa meno che ristrutturare un edificio abbandonato in città.",
              "Negli ultimi anni, tuttavia, qualcosa si muove. Diverse regioni hanno adottato leggi che limitano le nuove costruzioni nelle aree libere e incentivano la rigenerazione urbana. Vecchie fabbriche diventano biblioteche, scuole, abitazioni; caserme dismesse si trasformano in parchi. Sono interventi più complessi e più lenti, ma restituiscono alle città spazi che sembravano perduti.",
              "Il paesaggio, in fondo, non è uno sfondo immobile, ma il risultato di scelte collettive. Tutelarlo non significa impedire ogni cambiamento, ma decidere con consapevolezza che cosa valga la pena trasformare e che cosa, invece, convenga lasciare alle generazioni future.",
            ),
          },
        ],
        [
          q(1, "Che cosa colpisce l'autore dell'articolo 9 della Costituzione?", ["La sua modernità", "La sua brevità", "Il fatto che parli solo di monumenti", "Il fatto che sia stato modificato"], 1, "\"Colpisce per la sua modernità\": it already protected the landscape as a whole, not just monuments."),
          q(
            2,
            "Perché il consumo di suolo non è solo un problema estetico?",
            ["Perché fa aumentare i prezzi delle case", "Perché il terreno coperto non assorbe l'acqua e le alluvioni aumentano", "Perché riduce il turismo", "Perché danneggia i monumenti"],
            2,
            "\"Un terreno coperto dal cemento non assorbe più l'acqua piovana, e le alluvioni diventano più frequenti\".",
          ),
          q(
            3,
            "Che cosa sono gli «oneri di urbanizzazione»?",
            ["Le tasse pagate dai residenti", "I costi per demolire un edificio", "Le somme versate al comune da chi costruisce", "I finanziamenti europei"],
            3,
            "The text defines them: \"cioè le somme versate da chi costruisce\", income the councils were reluctant to give up.",
          ),
          q(
            4,
            "Perché si è preferito costruire nei campi?",
            ["Perché i campi sono più vicini alle città", "Perché lo chiedevano gli agricoltori", "Perché la legge lo imponeva", "Perché costa meno che recuperare edifici abbandonati in città"],
            4,
            "No demolition or clean-up is needed in a field, so it \"costa meno che ristrutturare un edificio abbandonato\".",
          ),
          q(
            5,
            "Secondo l'autore, tutelare il paesaggio significa…",
            ["impedire ogni cambiamento.", "decidere consapevolmente che cosa trasformare.", "costruire solo in città.", "tornare al passato."],
            2,
            "\"Non significa impedire ogni cambiamento, ma decidere con consapevolezza che cosa valga la pena trasformare\".",
          ),
        ],
        "Read the text and choose the right answer.",
      ),
      read(
        2,
        "Leggi il racconto. Le affermazioni sono vere o false?",
        [
          {
            title: "La casa al mare",
            body: paras(
              "Ogni anno, il primo di luglio, mia madre apriva la casa al mare con lo stesso rituale. Spalancava le finestre una dopo l'altra, come se dovesse far uscire l'inverno, e noi bambini correvamo a togliere i teli bianchi dai mobili, che là sotto sembravano fantasmi addormentati. Mio padre, che ci raggiungeva solo il sabato, telefonava la sera per sapere se il mare era «già buono»: per lui l'acqua non era mai abbastanza calda prima di agosto.",
              "La casa non era bella. Le pareti si scrostavano per l'umidità, il bagno era minuscolo e l'acqua calda bastava per due docce, non di più. Ma aveva una terrazza da cui si vedeva tutto il golfo, e la sera, quando il vento cambiava direzione, arrivava l'odore dei pini. Mia madre diceva che quell'odore, da solo, valeva il viaggio.",
              "Quando, molti anni dopo, abbiamo dovuto venderla, ho capito che non stavamo cedendo quattro stanze umide, ma un calendario intero: le estati in cui avevo imparato a nuotare, a leggere senza fretta, ad annoiarmi. Il nuovo proprietario ha rifatto il bagno e ridipinto le pareti. Non ho mai avuto il coraggio di tornarci.",
            ),
          },
        ],
        [
          vf(6, "La madre apriva la casa ogni anno nello stesso giorno.", true, "\"Ogni anno, il primo di luglio\", with the same ritual."),
          vf(7, "Il padre passava tutta l'estate al mare con la famiglia.", false, "He joined them \"solo il sabato\" and phoned in the evenings."),
          vf(8, "Secondo il padre, il mare era già caldo a luglio.", false, "\"Per lui l'acqua non era mai abbastanza calda prima di agosto\"."),
          vf(9, "La casa aveva alcuni difetti evidenti.", true, "Peeling walls, a tiny bathroom, hot water for two showers."),
          vf(10, "Dalla terrazza si vedeva il golfo.", true, "\"Una terrazza da cui si vedeva tutto il golfo\"."),
          vf(11, "Il narratore è tornato a vedere la casa dopo la vendita.", false, "\"Non ho mai avuto il coraggio di tornarci\"."),
        ],
        "Read the story. Are the statements true (\"Vero\") or false (\"Falso\")?",
      ),
      read(
        3,
        "Leggi le opinioni di cinque persone sul ritorno a vivere nei piccoli paesi. Per ogni affermazione scegli la persona giusta. Attenzione: c'è una persona in più.",
        [
          {
            label: "A",
            title: "Lorenzo, 34 anni, programmatore",
            body: "«Mi sono trasferito in un borgo dell'Appennino due anni fa. Lavoro da remoto, la connessione è buona e la qualità della vita è altissima. Mi manca solo un cinema vicino.»",
          },
          {
            label: "B",
            title: "Teresa, 61 anni, agricoltrice",
            body: "«Chi arriva dalla città pensa che la campagna sia una vacanza perenne. Ma qui si lavora dall'alba al tramonto, e quando grandina a giugno perdi il raccolto di un anno.»",
          },
          {
            label: "C",
            title: "Andrea, 27 anni, cuoco",
            body: "«Ho aperto un'osteria nel paese dei miei nonni. I primi clienti sono stati gli anziani del posto, che all'inizio erano diffidenti: ci sono voluti mesi perché si fidassero di me.»",
          },
          {
            label: "D",
            title: "Sofia, 45 anni, insegnante",
            body: "«Il problema sono i servizi. La scuola più vicina è a trenta chilometri e d'inverno la strada è spesso chiusa per neve. Senza investimenti pubblici, i paesi non si ripopolano.»",
          },
          {
            label: "E",
            title: "Franco, 70 anni, pensionato",
            body: "«Sono tornato nel paese dove sono nato dopo quarant'anni in fabbrica a Torino. Ho ritrovato pochi amici e molte case vuote, ma non tornerei indietro.»",
          },
        ],
        [
          match(12, "Chi viene dalla città spesso idealizza la vita in campagna.", PEOPLE, "B", "Teresa: city people think the country is \"una vacanza perenne\"."),
          match(13, "Ci vuole tempo per essere accettati dalla comunità locale.", PEOPLE, "C", "Andrea: the older locals were \"diffidenti\"; it took months for them to trust him."),
          match(14, "Senza scuole e strade non si può pensare di ripopolare i paesi.", PEOPLE, "D", "Sofia: \"Il problema sono i servizi… Senza investimenti pubblici, i paesi non si ripopolano\"."),
          match(15, "Grazie al lavoro a distanza, vivo meglio di prima.", PEOPLE, "A", "Lorenzo works remotely and finds \"la qualità della vita è altissima\". Franco is retired."),
        ],
        "Match each statement to the person who makes it. One person is not needed.",
        "select",
      ),
    ],
    strutture: [
      read(
        1,
        "Leggi il testo e scegli la forma giusta per ogni spazio.",
        [
          {
            title: "Vita nelle profondità del lago",
            body: "Si ritiene che il lago (1) ______ origine circa diecimila anni fa, alla fine dell'ultima glaciazione. Fino a pochi anni fa si pensava che le sue acque (2) ______ prive di vita al di sotto dei cento metri. Una spedizione condotta lo scorso inverno, tuttavia, (3) ______ in profondità alcune specie di batteri finora sconosciute. «Qualora i risultati (4) ______ confermati», spiega la responsabile della ricerca, «dovremmo rivedere molte delle nostre ipotesi.» Prima di pubblicare i dati, il gruppo attenderà che i campioni (5) ______ analizzati anche da un laboratorio indipendente. (6) ______ le analisi, i risultati saranno presentati a un convegno internazionale.",
          },
        ],
        [
          gap(1, ["ha avuto", "abbia avuto", "avesse", "avrà"], 2, "\"Si ritiene che\" (it is believed) takes the subjunctive; a past event, so the perfect subjunctive: \"abbia avuto\"."),
          gap(2, ["fossero", "sono", "siano", "sarebbero"], 1, "After a past main verb (\"si pensava che\"), a simultaneous state takes the imperfect subjunctive: \"fossero\"."),
          gap(3, ["individuasse", "abbia individuato", "ha individuato", "individuerebbe"], 3, "A main clause stating a fact: indicative, \"ha individuato\"."),
          gap(4, ["verranno", "vengono", "sarebbero", "venissero"], 4, "\"Qualora\" (if, should) always takes the subjunctive: \"qualora venissero confermati\"."),
          gap(5, ["siano stati", "sono stati", "saranno", "erano stati"], 1, "\"Attendere che\" takes the subjunctive; the analysis must be complete first, so the perfect: \"siano stati analizzati\"."),
          gap(6, ["Concluso", "Concluse", "Concludendo", "Concludere"], 2, "An absolute participle agrees with its noun: \"concluse le analisi\" (feminine plural), once the tests are over."),
        ],
        "Read the text and choose the right form for each gap.",
      ),
      read(
        2,
        "Leggi il testo e scegli il connettivo giusto per ogni spazio.",
        [
          {
            title: "Lavoro agile: luci e ombre",
            body: "Il lavoro agile ha molti sostenitori; (7) ______, non mancano i dubbi. (8) ______ permetta di risparmiare tempo e denaro, può infatti favorire l'isolamento. (9) ______ i dati più recenti, la produttività non cala, (10) ______ aumenta leggermente. Resta il fatto che non tutte le mansioni si prestano a essere svolte a distanza, (11) ______ è necessario valutare caso per caso. (12) ______, il modello più diffuso sarà probabilmente quello ibrido.",
          },
        ],
        [
          gap(7, ["tuttavia", "quindi", "infatti", "cioè"], 1, "A contrast with the previous clause: \"tuttavia\", however."),
          gap(8, ["Poiché", "Sebbene", "Dato che", "Siccome"], 2, "The subjunctive \"permetta\" and the contrast (saves time, but isolates) call for \"sebbene\", although."),
          gap(9, ["Malgrado", "Invece di", "Stando a", "Pur di"], 3, "\"Stando a\": according to, on the basis of."),
          gap(10, ["oppure", "ovvero", "dunque", "anzi"], 4, "\"Anzi\" corrects upward: it doesn't fall; on the contrary, it rises."),
          gap(11, ["per cui", "benché", "affinché", "purché"], 1, "A consequence: \"per cui\", which is why."),
          gap(12, ["Ad esempio", "Al contrario", "In definitiva", "In compenso"], 3, "A conclusion: \"in definitiva\", all things considered."),
        ],
        "Read the text and choose the right connector for each gap.",
      ),
      read(
        3,
        "Scegli la parola giusta per completare l'espressione.",
        [],
        [
          q(13, "Quando ha saputo la notizia, è rimasto di ______.", ["stucco", "gesso", "marmo", "vetro"], 1, "\"Rimanere di stucco\": to be dumbfounded."),
          q(14, "Ha vinto la gara per un ______: l'avversario era a pochi centimetri.", ["braccio", "pelo", "piede", "dito"], 2, "\"Per un pelo\": by a whisker."),
          q(15, "Non è il caso di fare di tutta l'erba un ______: non tutti i politici sono corrotti.", ["mazzo", "prato", "fascio", "covone"], 3, "\"Fare di tutta l'erba un fascio\": to lump everything together."),
          q(16, "Con quella domanda ha messo il ______ nella piaga.", ["coltello", "sale", "naso", "dito"], 4, "\"Mettere il dito nella piaga\": to touch a sore point."),
          q(17, "Per l'inaugurazione hanno fatto le cose in ______: c'erano perfino i fuochi d'artificio.", ["grande", "grosso", "largo", "alto"], 1, "\"Fare le cose in grande\": to do things on a grand scale."),
        ],
        "Choose the word that completes each idiom.",
      ),
    ],
    scritta: [
      write(
        1,
        "Scrivi un articolo (da 200 a 250 parole).",
        {
          prompt:
            "Il comune della tua città propone di rendere gratuito l'ingresso a tutti i musei civici, coprendo i costi con le tasse locali. Scrivi un articolo d'opinione per il giornale cittadino: valuta i pro e i contro della proposta e prendi una posizione motivata.",
          words: [200, 250],
          rubric: [
            "\"Adeguatezza\": an opinion piece for a local paper that weighs the proposal fairly and takes a reasoned position",
            "\"Coerenza e coesione\": a title, an opening that sets out the proposal, the arguments in a clear order, objections answered, a conclusion that echoes the opening",
            "\"Competenza grammaticale\": complex sentences with the subjunctive, the conditional and hypothetical periods, passive and impersonal forms",
            "\"Competenza lessicale\": precise vocabulary of culture and public spending (\"patrimonio\", \"fruizione\", \"bilancio\", \"gettito\", \"accessibilità\")",
          ],
          modelAnswer: paras(
            "Musei gratis: un investimento, non un regalo",
            "La proposta del comune di abolire il biglietto dei musei civici ha diviso la città. C'è chi la considera un atto di civiltà e chi la giudica uno spreco di denaro pubblico, in un momento in cui scuole e strade avrebbero bisogno di ben altri interventi.",
            "Le obiezioni meritano attenzione. Il gettito dei biglietti non è irrilevante, e c'è il rischio che i musei, privati di un'entrata propria, finiscano per dipendere interamente dalle scelte politiche del momento. Inoltre, a beneficiarne sarebbero anche i turisti, che potrebbero contribuire senza difficoltà.",
            "Eppure credo che i vantaggi superino i costi. Le esperienze di altre città europee dimostrano che, quando l'ingresso è gratuito, i visitatori locali aumentano in modo significativo, soprattutto tra le famiglie e i giovani, che oggi entrano in un museo quasi solo con la scuola. Un patrimonio che i cittadini non frequentano è un patrimonio che, a poco a poco, smettono di sentire come proprio.",
            "Una soluzione equilibrata esiste: ingresso gratuito per i residenti e biglietto per i turisti. Si garantirebbe così la fruizione a chi mantiene i musei con le proprie tasse, senza rinunciare del tutto alle entrate. La cultura, in fondo, non è un lusso, ma un servizio pubblico.",
          ),
        },
      ),
      write(
        2,
        "Scrivi una lettera formale (da 120 a 150 parole).",
        {
          prompt:
            "Sei il presidente di un'associazione culturale che organizza corsi, letture e concerti. Nel tuo quartiere c'è una vecchia scuola comunale chiusa da anni. Scrivi al sindaco: presenta l'associazione, chiedi di poter usare l'edificio e spiega che cosa offrireste in cambio al quartiere.",
          words: [120, 150],
          rubric: [
            "\"Adeguatezza\": a formal request to the mayor that introduces the association, asks to use the building and offers something to the neighbourhood",
            "\"Coerenza e coesione\": \"Egregio Signor Sindaco\" or \"Gentile Sindaco\", a clear purpose, the proposal, the commitments, a courteous close",
            "\"Competenza grammaticale\": formal \"Lei\", the conditional and subjunctive for requests (\"Le saremmo grati se volesse\"), passive forms",
            "\"Competenza lessicale\": \"comodato d'uso\", \"manutenzione\", \"iniziative\", \"cittadinanza\", \"disponibilità\"",
          ],
          modelAnswer: paras(
            "Gentile Signor Sindaco,",
            "Le scrivo in qualità di presidente dell'associazione culturale Il Ponte, che da otto anni organizza nel quartiere San Paolo corsi di lingua per stranieri, letture per bambini e piccoli concerti, sempre a ingresso libero.",
            "Negli ultimi anni le nostre attività sono cresciute, ma ci manca una sede adeguata. Per questo Le saremmo molto grati se volesse valutare la concessione in comodato d'uso della scuola di via dei Mille, chiusa ormai da cinque anni.",
            "In cambio, l'associazione si impegnerebbe a curare la piccola manutenzione dell'edificio, a riaprire il cortile come spazio verde per le famiglie e a mettere le sale a disposizione delle altre realtà del quartiere.",
            "Restiamo a Sua disposizione per un incontro e La ringraziamo per l'attenzione.",
            "Distinti saluti,\nElena Martini",
          ),
        },
      ),
    ],
    orale: [
      speak(
        1,
        "Conversazione con l'esaminatore sulla cultura e sui mezzi di informazione.",
        {
          prompt: "Parla del tuo rapporto con la cultura e con l'informazione.",
          points: ["Come ti informi", "Il ruolo della cultura nella tua vita", "Un evento culturale che ricordi", "Il rapporto tra cultura e denaro pubblico"],
          examinerQuestions: [
            "Come si informa di solito? Legge i giornali, ascolta la radio, usa i social?",
            "Si fida delle informazioni che trova in rete?",
            "C'è un evento culturale, una mostra o uno spettacolo, che ricorda in modo particolare?",
            "Secondo Lei, lo Stato dovrebbe finanziare la cultura? In che misura?",
          ],
          prepMinutes: 0,
          speakMinutes: 6,
          modelAnswer: paras(
            "– Come si informa di solito?",
            "– Ho abbandonato da tempo la televisione. La mattina ascolto la rassegna stampa alla radio mentre vado al lavoro, e nel fine settimana leggo con calma un quotidiano, in carta, perché mi obbliga a soffermarmi anche su articoli che online non aprirei mai.",
            "– Si fida delle informazioni che trova in rete?",
            "– Dipende dalla fonte, ovviamente. Ho preso l'abitudine di controllare chi firma un articolo e se la notizia è riportata anche altrove. Diffido soprattutto dei titoli che mi fanno arrabbiare: spesso sono pensati proprio per questo.",
            "– C'è un evento culturale che ricorda in modo particolare?",
            "– Una rappresentazione teatrale all'aperto, in un anfiteatro antico in Sicilia. Al tramonto si sentivano le cicale, poi è calato il buio e sono rimaste solo le voci degli attori. Non capivo ogni parola, ma è stata una delle esperienze più intense della mia vita.",
            "– Lo Stato dovrebbe finanziare la cultura?",
            "– Credo di sì, perché il mercato da solo premia ciò che vende, non necessariamente ciò che vale. Il rischio, però, è che i finanziamenti diventino uno strumento di consenso politico: per questo servirebbero criteri trasparenti e commissioni indipendenti.",
          ),
        },
        DIALOGUE_NOTE,
      ),
      speak(
        2,
        "Guarda la foto e leggi la domanda. Hai tre minuti per prepararti, poi parla per circa sei minuti.",
        {
          prompt: "Descrivi la foto e discuti la domanda, con argomenti ed esempi.",
          material: [
            {
              label: "Foto",
              title: "L'ultima edicola",
              body: "Immagine: un'edicola chiusa all'angolo di una piazza, con la serranda abbassata e un cartello scritto a mano: «Chiuso definitivamente. Grazie a tutti per questi quarant'anni». Accanto, alla fermata dell'autobus, alcune persone leggono le notizie sul telefono. Domanda: i giornali di carta hanno ancora un futuro?",
            },
          ],
          points: ["Descrivi la scena e il suo significato", "Perché le edicole chiudono", "Che cosa si perde e che cosa si guadagna", "Il futuro dell'informazione, secondo te"],
          examinerQuestions: ["Nel suo paese le edicole stanno scomparendo?", "Pagherebbe per leggere un giornale online?", "Che cosa rende affidabile una fonte di informazione?"],
          prepMinutes: 3,
          speakMinutes: 6,
          modelAnswer: paras(
            "La foto racconta una piccola storia che riassume un grande cambiamento. Un'edicola ha chiuso dopo quarant'anni e il proprietario saluta i clienti con un cartello scritto a mano; a pochi metri, alla fermata dell'autobus, tutti leggono le notizie sul telefono. Il contrasto è quasi didascalico.",
            "Le ragioni della crisi sono note: le notizie si trovano gratis e in tempo reale, la pubblicità si è spostata sulle piattaforme digitali e i lettori più giovani non hanno mai avuto l'abitudine di comprare un quotidiano. Le edicole, che vivevano soprattutto dei giornali, sono le prime a pagarne le conseguenze.",
            "Che cosa si perde? Innanzitutto un presidio di quartiere: l'edicolante conosceva tutti, dava indicazioni, teneva da parte il giornale per gli anziani. Ma si perde anche un certo modo di leggere: il giornale di carta ha un inizio e una fine, e una gerarchia di notizie decisa da una redazione, non da un algoritmo.",
            "Detto questo, non credo che il giornalismo stia morendo; sta cambiando supporto. Alcuni quotidiani hanno trovato un modello sostenibile con gli abbonamenti digitali, e io stessa pago due abbonamenti online. Forse la carta sopravviverà come prodotto di nicchia, magari settimanale e più riflessivo. L'importante è che sopravviva l'informazione di qualità, e che i lettori capiscano che ha un costo.",
          ),
        },
        `${PHOTO_NOTE} ${MONOLOGUE_NOTE}`,
      ),
    ],
  },
);
