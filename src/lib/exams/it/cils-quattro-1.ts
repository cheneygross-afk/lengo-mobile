// Synced from cheneygross-afk/lengo:src/lib/exams/it/cils-quattro-1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { AUDIO_NOTE, DIALOGUE_NOTE, MONOLOGUE_NOTE, cilsExam, gap, listen, match, paras, q, read, rec, speak, vf, write } from "./text";

// CILS QUATTRO (Mastery) practice exam 1: memory, words and time. The
// five sections of the real CILS QUATTRO (C2): an ironic radio comment,
// two researchers and a reviewer, a literary prize not awarded, a
// lawyer's voicemail, a literary translator on "tradurre è tradire", two
// readers disagreeing about a novel; the right to be forgotten, a
// literary vignette, the historic cafés; a narrative with fine
// concordance of tenses, academic register, idioms; an essay on the
// humanities and work and an exhibition review; a conversation on
// language and identity and a talk on Seneca's idea of time.
const CAFFE = [
  "A. Erano luoghi di conversazione e di dibattito, talvolta di vera e propria elaborazione politica.",
  "B. Il loro fascino derivava anche da una certa mescolanza sociale.",
  "C. Informatori della polizia ne frequentavano le sale, annotando discorsi e frequentazioni.",
  "D. La nascita di nuovi mezzi di comunicazione ne ridusse la funzione civile.",
  "E. Molti di quei caffè sono oggi soprattutto mete turistiche, con prezzi adeguati alla loro fama.",
  "F. Il caffè, come bevanda, arrivò in Europa soltanto alla fine dell'Ottocento.",
  "G. Per questo motivo alle donne fu vietato di leggere i giornali.",
];

export const CILS_QUATTRO_1: Exam = cilsExam(
  {
    slug: "cils-quattro-1",
    level: "C2",
    title: "CILS QUATTRO (Mastery) practice exam 1",
    description:
      "A full CILS QUATTRO practice exam: an ironic comment on train timetables, a peer review, a poetry prize not awarded, a hearing postponed, a literary translator on betrayal and voice, two readers at odds over a novel; the right to be forgotten, a notary's last winter, the historic cafés; fine concordance of tenses, academic register and idioms; an essay on the humanities and an exhibition review; language and identity, and Seneca on time.",
  },
  {
    ascolto: [
      listen(
        1,
        "Ascolta i testi. Per ogni testo scegli la risposta giusta.",
        [
          rec("Testo 1", [
            "Ancora una volta, il nuovo orario dei treni regionali è stato presentato come una «rivoluzione per i pendolari». Peccato che, a una lettura attenta, la rivoluzione consista nel sopprimere tre corse serali e nell'allungare di sette minuti il tempo di percorrenza delle altre. Chi ogni mattina si alza alle cinque saprà senz'altro apprezzare.",
          ], "m"),
          rec("Testo 2", [
            "F: Hai letto le osservazioni del revisore sul nostro articolo?",
            "M: Sì. A parte qualche pignoleria sulla bibliografia, contesta il campione: dice che quaranta intervistati non bastano per generalizzare.",
            "F: Non ha tutti i torti, però noi non abbiamo mai preteso di generalizzare. Lo scriviamo già nell'introduzione.",
            "M: Evidentemente non in modo abbastanza chiaro. Proporrei di riformulare quel passaggio e di aggiungere un paragrafo sui limiti dello studio, invece di metterci a polemizzare.",
          ]),
          rec("Testo 3", [
            "La giuria del premio, dopo una lunga discussione, ha deciso all'unanimità di non assegnare quest'anno il riconoscimento per la sezione di poesia, ritenendo che nessuna delle opere in concorso raggiungesse il livello richiesto dal bando. La somma prevista sarà destinata a borse di studio per giovani traduttori.",
          ]),
          rec("Testo 4", [
            "Avvocato Ferraresi, buongiorno. Le confermo che l'udienza è stata rinviata d'ufficio al ventidue novembre, per l'assenza di un testimone. Nel frattempo la controparte si è detta disponibile a valutare un accordo transattivo: se il Suo cliente fosse interessato, converrebbe sentirci entro la fine del mese.",
          ], "m"),
        ],
        [
          q(1, "Testo 1. Qual è l'atteggiamento del commentatore?", ["Entusiasta", "Ironico e critico", "Neutrale", "Indifferente"], 2, "The \"rivoluzione\" means fewer trains and longer journeys; \"saprà senz'altro apprezzare\" is sarcastic."),
          q(
            2,
            "Testo 2. Che cosa propone l'uomo?",
            ["Di rispondere polemicamente al revisore", "Di ampliare il campione", "Di chiarire nel testo i limiti dello studio", "Di ritirare l'articolo"],
            3,
            "Rewrite the passage and add \"un paragrafo sui limiti dello studio, invece di metterci a polemizzare\".",
          ),
          q(
            3,
            "Testo 3. Che cosa ha deciso la giuria?",
            ["Di premiare due opere a pari merito", "Di rimandare la decisione", "Di cambiare il bando", "Di non assegnare il premio per la poesia"],
            4,
            "\"Di non assegnare quest'anno il riconoscimento per la sezione di poesia\"; the money goes to young translators.",
          ),
          q(
            4,
            "Testo 4. Che cosa propone la controparte?",
            ["Di valutare un accordo", "Di rinunciare alla causa", "Di cambiare testimone", "Di anticipare l'udienza"],
            1,
            "\"Disponibile a valutare un accordo transattivo\": open to an out-of-court settlement. The hearing was postponed, not brought forward.",
          ),
        ],
        `${AUDIO_NOTE} Four short recordings: choose the right answer for each.`,
      ),
      listen(
        2,
        "Ascolta l'intervista. Scegli la risposta giusta.",
        [
          rec("Intervista a una traduttrice letteraria", [
            "M: Si dice che tradurre sia tradire. Ne parliamo con Lucia Benassi, traduttrice letteraria dall'inglese e dal russo. È d'accordo con il proverbio?",
            "F: È un bel gioco di parole, ma lo trovo un po' pigro. Presuppone che esista un originale intatto e una copia che inevitabilmente lo rovina. In realtà ogni traduzione è un'interpretazione, come lo è ogni lettura. Il tradimento vero è la traduzione che pretende di essere invisibile, che leviga tutto ciò che nell'originale è spigoloso.",
            "M: Che cosa intende per spigoloso?",
            "F: Le ripetizioni volute, per esempio, o una sintassi faticosa che l'autore ha scelto per una ragione. L'editore, a volte, mi chiede di rendere il testo più scorrevole. Ma se l'autore ha voluto che il lettore inciampasse, rendere il testo scorrevole significa cambiare libro.",
            "M: Esistono parole davvero intraducibili?",
            "F: Parole singole sì, ma meno di quanto si creda. Il problema non è quasi mai la parola, è il contesto culturale che porta con sé. Pensi all'umorismo: una battuta che si regge su un doppio senso va spesso ricostruita da zero, con un altro doppio senso. È lì che il traduttore diventa un po' autore, e deve accettarne la responsabilità.",
            "M: E le traduzioni automatiche? La preoccupano?",
            "F: Mi preoccupa meno la macchina in sé che l'idea, molto diffusa, che tradurre consista nel trovare equivalenti. Per i testi tecnici gli strumenti automatici sono già utili. Per la letteratura, dove ogni scelta è un'interpretazione, il rischio è una lingua media, corretta e senza voce.",
          ], "m"),
        ],
        [
          q(
            5,
            "Che cosa pensa la traduttrice del proverbio «tradurre è tradire»?",
            ["Che sia del tutto vero", "Che sia un'idea un po' superficiale", "Che valga solo per la poesia", "Che sia stato inventato dagli editori"],
            2,
            "\"È un bel gioco di parole, ma lo trovo un po' pigro\": it assumes an intact original spoiled by a copy.",
          ),
          q(
            6,
            "Qual è, per lei, il «tradimento vero»?",
            ["Una traduzione che vuole essere invisibile e leviga ogni asperità", "Una traduzione che cambia il titolo", "Una traduzione troppo letterale", "Una traduzione fatta in fretta"],
            1,
            "\"La traduzione che pretende di essere invisibile, che leviga tutto ciò che nell'originale è spigoloso\".",
          ),
          q(
            7,
            "Perché rifiuta di rendere il testo «più scorrevole»?",
            ["Perché richiede troppo tempo", "Perché l'editore non la paga", "Perché la difficoltà può essere una scelta dell'autore", "Perché il pubblico preferisce i testi difficili"],
            3,
            "If the author wanted the reader to stumble, smoothing the text \"significa cambiare libro\".",
          ),
          q(
            8,
            "Che cosa dice dell'umorismo?",
            ["Che non si può mai tradurre", "Che va spiegato in nota", "Che va eliminato", "Che va spesso ricostruito da zero con un altro gioco di parole"],
            4,
            "A pun \"va spesso ricostruita da zero, con un altro doppio senso\": there the translator becomes a little an author.",
          ),
          q(
            9,
            "Che cosa la preoccupa delle traduzioni automatiche?",
            ["Che costino troppo poco", "L'idea che tradurre significhi trovare equivalenti", "Che sbaglino la grammatica", "Che sostituiscano i testi tecnici"],
            2,
            "\"Mi preoccupa meno la macchina in sé che l'idea… che tradurre consista nel trovare equivalenti\".",
          ),
        ],
        `${AUDIO_NOTE} An interview with a literary translator: choose the right answer.`,
      ),
      listen(
        3,
        "Ascolta la conversazione tra due lettori. Le affermazioni sono vere o false?",
        [
          rec("Conversazione", [
            "F: Allora, ti è piaciuto il romanzo?",
            "M: Mi ha lasciato perplesso. Riconosco che è scritto magnificamente, ma ho avuto la sensazione che l'autrice si compiacesse della propria bravura. Ogni frase sembra fatta apposta per essere sottolineata.",
            "F: Io invece l'ho trovato commovente proprio per questo. Quella prosa così controllata è il modo in cui la protagonista trattiene il dolore. Quando, nell'ultimo capitolo, la sintassi si spezza, è come se crollasse anche lei.",
            "M: È una lettura affascinante, lo ammetto. Ma allora perché aspettare trecento pagine?",
            "F: Perché il crollo ha senso solo dopo tanta compostezza. Comunque non sei l'unico: anche Paolo l'ha trovato freddo.",
            "M: Paolo trova freddo tutto ciò che non lo fa piangere entro le prime dieci pagine.",
            "F: Su questo non posso darti torto!",
          ]),
        ],
        [
          vf(10, "All'uomo il romanzo è piaciuto senza riserve.", false, "\"Mi ha lasciato perplesso\": he admires the writing but finds it self-satisfied."),
          vf(11, "L'uomo riconosce la qualità della scrittura.", true, "\"Riconosco che è scritto magnificamente\"."),
          vf(12, "Per la donna lo stile controllato riflette lo stato d'animo della protagonista.", true, "The controlled prose is how the heroine \"trattiene il dolore\"."),
          vf(13, "Nell'ultimo capitolo la prosa diventa ancora più controllata.", false, "\"La sintassi si spezza\": the prose breaks down with her."),
          vf(14, "L'uomo trova interessante l'interpretazione della donna.", true, "\"È una lettura affascinante, lo ammetto\"."),
          vf(15, "L'uomo considera Paolo un lettore molto obiettivo.", false, "His remark is ironic: Paolo finds cold anything that doesn't make him cry within ten pages."),
        ],
        `${AUDIO_NOTE} Are the statements true (\"Vero\") or false (\"Falso\")?`,
      ),
    ],
    lettura: [
      read(
        1,
        "Leggi il saggio e scegli la risposta giusta.",
        [
          {
            title: "Il diritto di essere dimenticati",
            body: paras(
              "Per gran parte della storia umana, dimenticare è stato il destino naturale di quasi tutto ciò che accadeva. Le parole dette svanivano nell'aria, le lettere ingiallivano nei cassetti, e perfino le colpe, con il tempo, sbiadivano nella memoria collettiva. Ricordare richiedeva uno sforzo: si scolpivano lapidi, si compilavano archivi, si tramandavano racconti. L'oblio, invece, non costava nulla.",
              "La rete ha rovesciato questo equilibrio. Oggi è il ricordo a essere automatico, mentre l'oblio richiede un'azione deliberata, spesso complessa. Un articolo di cronaca di vent'anni fa, una fotografia imbarazzante, un commento scritto d'impulso possono riemergere in qualsiasi momento, privati del loro contesto, a disposizione di un datore di lavoro o di un conoscente curioso.",
              "Da qui nasce il cosiddetto «diritto all'oblio», riconosciuto in Europa in varie forme: la possibilità di chiedere che informazioni non più pertinenti, legate al proprio nome, non compaiano più tra i risultati dei motori di ricerca. Non si tratta di cancellare il passato, precisano i giuristi, ma di renderlo meno facilmente reperibile, quando l'interesse pubblico a conoscerlo è venuto meno.",
              "Le obiezioni non mancano, e non sono pretestuose. Chi decide che cosa sia ancora «pertinente»? Un politico potrebbe invocare l'oblio per far dimenticare scelte discutibili; un'impresa, per nascondere vecchie condanne. Gli storici, dal canto loro, temono che una memoria filtrata impoverisca le fonti di domani. Il bilanciamento tra il diritto all'informazione e quello alla riservatezza resta, dunque, un esercizio delicato, da compiere caso per caso.",
              "Eppure la questione supera il diritto. Una società che non dimentica nulla rischia di diventare una società che non perdona nulla. La possibilità di cambiare, di non essere ridotti per sempre al nostro errore peggiore, presuppone un certo grado di oblio. Forse, più che di un diritto all'oblio, dovremmo parlare di un diritto alla trasformazione: quello di essere giudicati per ciò che siamo diventati, e non soltanto per ciò che siamo stati.",
            ),
          },
        ],
        [
          q(
            1,
            "Secondo l'autore, nel passato…",
            ["ricordare era facile e dimenticare difficile.", "dimenticare era naturale, ricordare richiedeva uno sforzo.", "non esistevano archivi.", "le colpe non si dimenticavano mai."],
            2,
            "\"Ricordare richiedeva uno sforzo… L'oblio, invece, non costava nulla\".",
          ),
          q(
            2,
            "Che cosa ha cambiato la rete?",
            ["Ha reso l'oblio automatico.", "Ha eliminato gli archivi.", "Ha reso automatico il ricordo e faticoso l'oblio.", "Ha reso le informazioni meno accessibili."],
            3,
            "\"Oggi è il ricordo a essere automatico, mentre l'oblio richiede un'azione deliberata\".",
          ),
          q(
            3,
            "Secondo i giuristi, il diritto all'oblio consiste nel…",
            ["rendere meno reperibili informazioni non più di interesse pubblico.", "cancellare definitivamente il passato.", "vietare gli articoli di cronaca.", "punire chi diffonde fotografie."],
            1,
            "\"Non si tratta di cancellare il passato… ma di renderlo meno facilmente reperibile\".",
          ),
          q(
            4,
            "Quale preoccupazione esprimono gli storici?",
            ["Che gli archivi costino troppo", "Che i politici scrivano la storia", "Che nessuno legga più", "Che una memoria filtrata impoverisca le fonti future"],
            4,
            "\"Gli storici… temono che una memoria filtrata impoverisca le fonti di domani\".",
          ),
          q(
            5,
            "Che cosa propone l'autore nella conclusione?",
            ["Di abolire il diritto all'oblio", "Di parlare piuttosto di un diritto alla trasformazione", "Di affidare la decisione ai motori di ricerca", "Di cancellare tutto dopo vent'anni"],
            2,
            "\"Più che di un diritto all'oblio, dovremmo parlare di un diritto alla trasformazione\".",
          ),
        ],
        "Read the essay and choose the right answer.",
      ),
      read(
        2,
        "Leggi il racconto. Le affermazioni sono vere o false?",
        [
          {
            title: "L'ultimo inverno del notaio",
            body: paras(
              "Il notaio Bellandi non aveva mai amato la neve. Gli pareva un'esagerazione della natura, uno di quei gesti teatrali di cui la gente semplice si compiace. Eppure, la mattina in cui la vide coprire i tetti di Borgo San Fermo, rimase a lungo alla finestra, con la tazza del caffè che gli si raffreddava tra le mani.",
              "Da quando la moglie era morta, le giornate gli si erano fatte lunghe e uguali. Continuava a recarsi in studio ogni mattina alle otto, più per abitudine che per necessità: i clienti erano ormai pochi, e i più giovani preferivano lo studio associato che due ragazzi venuti da Milano avevano aperto in piazza, con le vetrine illuminate e una segretaria che sorrideva a tutti.",
              "Quel giorno, però, non uscì. Si sedette invece allo scrittoio della moglie, che non aveva più aperto, e trovò in un cassetto un quaderno dalla copertina verde. Dentro, con la sua calligrafia minuta, lei aveva annotato per trent'anni le piccole cose che lui non aveva mai notato: il giorno in cui erano fioriti i ciliegi, il nome del garzone del fornaio, una frase detta da lui a cena, sottolineata due volte.",
              "Il notaio lesse fino a sera. Quando la luce se ne andò, non accese la lampada.",
            ),
          },
        ],
        [
          vf(6, "Al notaio la neve era sempre piaciuta molto.", false, "\"Non aveva mai amato la neve\": he found it theatrical."),
          vf(7, "Quella mattina il notaio osservò la neve a lungo.", true, "\"Rimase a lungo alla finestra\", letting his coffee go cold."),
          vf(8, "Il notaio andava in studio perché aveva molti clienti.", false, "\"Più per abitudine che per necessità: i clienti erano ormai pochi\"."),
          vf(9, "I clienti più giovani preferivano un altro studio.", true, "They chose the new joint practice in the square."),
          vf(10, "Il quaderno era stato scritto dal notaio.", false, "It was his wife's, in \"la sua calligrafia minuta\", noting what he had never noticed."),
          vf(11, "La moglie aveva annotato una frase detta dal marito.", true, "\"Una frase detta da lui a cena, sottolineata due volte\"."),
        ],
        "Read the story. Are the statements true (\"Vero\") or false (\"Falso\")?",
      ),
      read(
        3,
        "Leggi il testo. Per ogni spazio scegli la frase giusta. Attenzione: ci sono due frasi in più.",
        [
          {
            title: "I caffè storici",
            body: paras(
              "Nel Settecento e nell'Ottocento, in molte città europee, i caffè furono assai più che luoghi di ristoro. (12) ______ Al Florian di Venezia o al Pedrocchi di Padova si leggevano le gazzette, si commentavano le notizie e si discutevano idee che altrove sarebbero apparse sovversive.",
              "(13) ______ In un'epoca in cui i salotti aristocratici erano accessibili soltanto su invito, il caffè offriva uno spazio relativamente aperto, dove un giovane avvocato poteva sedere accanto a un nobile e a un mercante.",
              "Non sorprende, dunque, che le autorità guardassero a questi locali con sospetto. (14) ______ In alcune città, durante i moti risorgimentali, i caffè divennero veri e propri centri di cospirazione.",
              "Con il Novecento il loro ruolo mutò. (15) ______ Restarono luoghi d'incontro di scrittori e artisti, ma la discussione pubblica si spostò progressivamente sui giornali, alla radio e, più tardi, in televisione.",
              "(16) ______ Eppure, chi oggi si siede a uno di quei tavolini di marmo avverte ancora, forse, l'eco di quelle conversazioni.",
            ),
          },
        ],
        [
          match(12, "", CAFFE, "A", "\"Assai più che luoghi di ristoro\" is explained by what follows: reading, commenting, debating."),
          match(13, "", CAFFE, "B", "The next sentence describes the social mix: a lawyer beside a noble and a merchant."),
          match(14, "", CAFFE, "C", "\"Con sospetto\" leads to police informers, then to conspiracy."),
          match(15, "", CAFFE, "D", "\"Il loro ruolo mutò\": new media took over their civic role, as the next sentence says."),
          match(16, "", CAFFE, "E", "\"Eppure\" contrasts today's tourist cafés with the echo of the past. F is false (coffee reached Europe in the 1600s) and G is unsupported."),
        ],
        "Choose the sentence that fits each gap. Two sentences are not needed.",
        "select",
      ),
    ],
    strutture: [
      read(
        1,
        "Leggi il testo e scegli la forma giusta per ogni spazio.",
        [
          {
            title: "La partenza",
            body: "Giovanni (1) ______ di partire da anni. Già da ragazzo, ogni volta che le cose (2) ______ male, sognava di imbarcarsi su una nave diretta in qualche porto lontano. Ma non l'aveva mai fatto: un po' per pigrizia, un po' perché temeva che, una volta partito, nessuno (3) ______ la sua mancanza. Quell'autunno, tuttavia, qualcosa cambiò. (4) ______ il lavoro e venduta la casa, si trovò per la prima volta libero da ogni legame. Chi lo conosceva bene avrebbe giurato che non (5) ______ mai il coraggio di andarsene; eppure, la mattina del primo novembre, il suo posto al bar era vuoto. Se qualcuno (6) ______ chiesto il perché, avrebbe risposto che non stava fuggendo, ma tornando.",
          },
        ],
        [
          gap(1, ["pensava", "pensò", "ha pensato", "pensasse"], 1, "Something going on for some time in the past, with \"da anni\": imperfect, \"pensava\"."),
          gap(2, ["andarono", "andavano", "andassero", "fossero andate"], 2, "\"Ogni volta che\" describes a repeated past situation: imperfect indicative, \"andavano\"."),
          gap(3, ["sentirebbe", "sentiva", "avrebbe sentito", "senta"], 3, "The future seen from the past (\"temeva che… una volta partito\"): past conditional, \"avrebbe sentito\"."),
          gap(4, ["Lasciando", "Lasciati", "Lasciare", "Lasciato"], 4, "An absolute participle agreeing with \"il lavoro\": \"lasciato il lavoro e venduta la casa\", having left his job and sold the house."),
          gap(5, ["avrebbe avuto", "avesse", "avrà", "ebbe"], 1, "Again a future in the past, after \"avrebbe giurato che\": \"non avrebbe mai avuto il coraggio\"."),
          gap(6, ["gli avrebbe", "gli avesse", "gli aveva", "gli abbia"], 2, "An unreal past condition: \"se qualcuno gli avesse chiesto… avrebbe risposto\"."),
        ],
        "Read the text and choose the right form for each gap.",
      ),
      read(
        2,
        "Leggi la recensione e scegli la forma giusta per ogni spazio.",
        [
          {
            title: "Una tesi audace",
            body: "Il saggio (7) ______ una tesi tanto audace quanto discutibile: che la lingua italiana (8) ______ il proprio carattere unitario non nelle corti, bensì nei mercati. A (9) ______ di tale ipotesi, l'autore porta numerosi documenti commerciali del Quattrocento, la cui lingua appare sorprendentemente omogenea. (10) ______ l'indubbio valore della documentazione, resta da chiarire in che misura quegli scritti rappresentino l'uso comune, (11) ______ quello di una ristretta élite mercantile. La questione, in ogni caso, merita di essere (12) ______.",
          },
        ],
        [
          gap(7, ["avanza", "avanzi", "avanzasse", "avanzerebbe"], 1, "A main clause stating what the book does: \"il saggio avanza una tesi\", puts forward a thesis."),
          gap(8, ["ha acquisito", "abbia acquisito", "acquisisce", "acquisirà"], 2, "A thesis reported as a claim, not a fact, takes the subjunctive: \"che la lingua abbia acquisito\"."),
          gap(9, ["sostentamento", "sostituzione", "sostegno", "sospensione"], 3, "\"A sostegno di\": in support of."),
          gap(10, ["Ferma restando", "Fermi restando", "Ferme restando", "Fermo restando"], 4, "\"Fermo restando\" (granted, without prejudice to) agrees here with \"il valore\", masculine singular."),
          gap(11, ["anziché", "benché", "affinché", "purché"], 1, "\"Anziché\": rather than, the usage of all or that of a merchant elite."),
          gap(12, ["approfondito", "approfondire", "approfondita", "approfondite"], 3, "The participle agrees with \"la questione\": \"merita di essere approfondita\"."),
        ],
        "Read the review and choose the right form for each gap.",
      ),
      read(
        3,
        "Scegli il significato più vicino all'espressione tra virgolette.",
        [],
        [
          q(13, "Le sue promesse si sono rivelate «specchietti per le allodole».", ["impegni mantenuti", "inganni per attirare gli ingenui", "regali costosi", "discorsi noiosi"], 2, "A \"specchietto per le allodole\" (a mirror to lure larks) is a lure to fool the naive."),
          q(14, "Il ministro ha «glissato» sulla domanda del giornalista.", ["ha evitato di rispondere", "ha risposto con precisione", "ha alzato la voce", "ha ripetuto la domanda"], 1, "\"Glissare su\": to skate over, avoid a subject."),
          q(15, "La sua è stata una «vittoria di Pirro».", ["una vittoria schiacciante", "una vittoria inattesa", "una vittoria ottenuta a un prezzo troppo alto", "una vittoria contestata"], 3, "A Pyrrhic victory costs the winner so much it is almost a defeat."),
          q(16, "Il progetto è finito «in una bolla di sapone».", ["è stato un grande successo", "è stato rimandato", "è costato molto", "non ha avuto alcun seguito"], 4, "\"Finire in una bolla di sapone\": to come to nothing."),
          q(17, "Con quello stipendio riesce a malapena a «sbarcare il lunario».", ["arrivare a fine mese", "viaggiare", "fare carriera", "risparmiare molto"], 1, "\"Sbarcare il lunario\": to make ends meet."),
        ],
        "Choose the meaning closest to each expression in quotation marks.",
      ),
    ],
    scritta: [
      write(
        1,
        "Scrivi un saggio breve (da 250 a 300 parole).",
        {
          prompt:
            "Una rivista culturale propone il tema: «Nel mondo del lavoro di domani conteranno soltanto le competenze tecniche, o la cultura umanistica avrà ancora un ruolo?». Scrivi un saggio breve in cui sviluppi una tesi personale, confrontandoti con le posizioni opposte e sostenendo le tue argomentazioni con esempi.",
          words: [250, 300],
          rubric: [
            "\"Adeguatezza\": an essay for a cultural magazine with a personal, nuanced thesis that engages with the opposing view and supports it with examples",
            "\"Coerenza e coesione\": a title, an introduction that problematises the question, a tightly argued development, a conclusion that goes beyond summary",
            "\"Competenza grammaticale\": full control of complex syntax, concessive and hypothetical clauses, nominalisation, without errors",
            "\"Competenza lessicale\": rich, precise and idiomatic vocabulary, with a register suited to a cultural magazine",
          ],
          modelAnswer: paras(
            "Il tecnico e l'umanista: una falsa alternativa",
            "Da qualche anno, ogni discussione sul futuro del lavoro sembra approdare alla stessa conclusione: serviranno ingegneri, programmatori, analisti di dati, mentre la cultura umanistica sarebbe un lusso per pochi, destinato a un pubblico sempre più ristretto. Questa tesi ha il merito della semplicità, ma poggia su un equivoco.",
            "È innegabile che le competenze tecniche siano oggi indispensabili e ben retribuite, né avrebbe senso negarlo in nome di una nostalgia per il liceo classico. Tuttavia, proprio la rapidità con cui le tecnologie cambiano rende quelle competenze deperibili: ciò che si impara oggi sarà in parte superato tra cinque anni. A durare è piuttosto la capacità di interpretare, di argomentare, di cogliere il contesto in cui uno strumento viene usato.",
            "Si pensi ai sistemi di intelligenza artificiale. Costruirli è un compito tecnico; decidere a quali scopi destinarli, quali dati considerare legittimi, quali errori ritenere tollerabili, sono questioni etiche, giuridiche, perfino linguistiche. Non a caso molte aziende tecnologiche assumono filosofi e linguisti nei propri gruppi di lavoro.",
            "Ciò non significa che l'umanista possa permettersi di ignorare la tecnica: chi non ne comprende i principi rischia di subirla, o di criticarla in modo superficiale. Il profilo più prezioso, a mio avviso, sarà quello di chi sa muoversi tra i due mondi, traducendo dall'uno all'altro.",
            "La vera alternativa, dunque, non è tra tecnica e cultura, ma tra una formazione che addestra a eseguire e una che insegna a pensare. Se la scuola e l'università sapranno tenerlo presente, smetteremo di contrapporre le due culture e cominceremo finalmente a farle dialogare, con vantaggio per entrambe.",
          ),
        },
      ),
      write(
        2,
        "Scrivi una recensione (da 150 a 200 parole).",
        {
          prompt:
            "Scrivi per una rivista culturale la recensione di una mostra che hai visitato di recente: presenta il tema e l'allestimento, valuta i punti di forza e i limiti e indica a quale pubblico la consiglieresti.",
          words: [150, 200],
          rubric: [
            "\"Adeguatezza\": a review for a cultural magazine that presents the exhibition, judges its strengths and limits and recommends it to a public",
            "\"Coerenza e coesione\": a title, a hook, description, assessment and recommendation in a fluent, well-linked text",
            "\"Competenza grammaticale\": precise and varied structures, including concessive clauses and the subjunctive, without errors",
            "\"Competenza lessicale\": the vocabulary of art criticism (\"allestimento\", \"curatela\", \"percorso espositivo\", \"didascalie\", \"suggestivo\")",
          ],
          modelAnswer: paras(
            "La strada come palcoscenico",
            "Raccontare un secolo di fotografia di strada in poco più di duecento immagini era un'impresa ambiziosa, e la mostra allestita nelle sale dell'ex mercato coperto ci riesce in buona parte.",
            "Il percorso espositivo, organizzato per temi più che in ordine cronologico, accosta con intelligenza autori lontani nel tempo: le prime fotografie di venditori ambulanti dialogano con gli scatti di una metropoli contemporanea, rivelando quanto poco siano cambiati i gesti quotidiani. Suggestiva soprattutto l'ultima sala, dove le immagini sono proiettate su grandi teli e il visitatore si trova, letteralmente, in mezzo alla folla.",
            "Qualche riserva, invece, sull'apparato didattico. Le didascalie, pur accurate, sono così sintetiche che chi non conosce la storia della fotografia rischia di perdere il filo; un'audioguida o qualche pannello introduttivo in più avrebbero giovato.",
            "Nel complesso, una mostra che consiglierei senz'altro agli appassionati di fotografia, ma anche a chi ama semplicemente osservare le città. Conviene però andarci con calma, magari in un giorno feriale.",
          ),
        },
      ),
    ],
    orale: [
      speak(
        1,
        "Conversazione con l'esaminatore su lingua, identità e appartenenza.",
        {
          prompt: "Parla del rapporto tra le lingue che conosci e la tua identità.",
          points: ["Il tuo rapporto con le lingue che parli", "Se cambi quando cambi lingua", "Che cosa significa per te sentirsi a casa", "Il futuro delle lingue minoritarie"],
          examinerQuestions: [
            "Si sente una persona diversa quando parla italiano?",
            "C'è una parola italiana che le piace particolarmente, o che trova intraducibile?",
            "Che cosa significa per Lei sentirsi a casa in un paese?",
            "Le lingue minoritarie e i dialetti vanno protetti, secondo Lei?",
          ],
          prepMinutes: 0,
          speakMinutes: 6,
          modelAnswer: paras(
            "– Si sente una persona diversa quando parla italiano?",
            "– In un certo senso sì. In inglese tendo a essere più ironico e distaccato; in italiano mi accorgo di gesticolare di più, di alzare la voce senza volerlo, di essere più diretto nelle emozioni. Non credo di cambiare carattere, ma ogni lingua mette in luce una parte diversa di me.",
            "– C'è una parola italiana che le piace particolarmente?",
            "– «Magari». È una parola minuscola che contiene un intero atteggiamento verso la vita: il desiderio, lo scetticismo, a volte una punta di malinconia. In inglese devo usare una frase intera, e comunque perdo qualcosa.",
            "– Che cosa significa per Lei sentirsi a casa?",
            "– Credo che coincida con il momento in cui si smette di tradurre mentalmente. Quando, a Bologna, ho cominciato a sognare in italiano e a capire le battute dei miei colleghi senza chiedere spiegazioni, ho sentito che quel posto era diventato anche mio.",
            "– Le lingue minoritarie vanno protette?",
            "– Senza dubbio, ma non imbalsamate. Proteggere una lingua significa darle occasioni di essere usata: a scuola, nei media, nella vita pubblica. Una lingua che si parla solo nei musei è già morta.",
          ),
        },
        DIALOGUE_NOTE,
      ),
      speak(
        2,
        "Leggi il testo. Hai tre minuti per prepararti, poi esponi le tue riflessioni per circa sei minuti.",
        {
          prompt: "Commenta il pensiero del testo, collegalo al presente ed esprimi la tua posizione.",
          material: [
            {
              label: "Testo",
              title: "Sul tempo",
              body: "«Non abbiamo poco tempo: ne perdiamo molto. La vita è abbastanza lunga, e ci è stata data con larghezza sufficiente per compiere grandi cose, se fosse impiegata bene tutta.» (Seneca, da «La brevità della vita», I secolo d.C.)",
            },
          ],
          points: ["Che cosa sostiene l'autore", "È ancora attuale? Perché", "Il rapporto tra tempo, lavoro e tecnologia oggi", "Che cosa significa, per te, impiegare bene il tempo"],
          examinerQuestions: ["Le sembra di perdere molto tempo?", "Il tempo libero deve sempre essere «utile»?", "La tecnologia ci ha fatto guadagnare tempo o ce ne ha tolto?"],
          prepMinutes: 3,
          speakMinutes: 6,
          modelAnswer: paras(
            "Il passo di Seneca rovescia un luogo comune che conosciamo bene: non è la vita a essere breve, siamo noi a sprecarla. L'autore non nega i limiti dell'esistenza, ma sposta la responsabilità sull'uso che ne facciamo.",
            "A distanza di duemila anni, l'osservazione mi sembra più attuale che mai, anche se le forme della dispersione sono cambiate. Seneca pensava alle ambizioni politiche, ai banchetti, alle visite di cortesia; noi potremmo pensare alle notifiche, alle riunioni inutili, alle ore passate a scorrere contenuti che dimentichiamo un minuto dopo. Paradossalmente, la tecnologia che ci ha liberato da molti compiti faticosi ha moltiplicato le occasioni di distrazione.",
            "Vorrei però introdurre una distinzione. «Impiegare bene» il tempo non significa riempirlo di attività produttive. C'è un'ossessione contemporanea per l'efficienza che finisce per trasformare anche il riposo in un dovere: si ottimizza il sonno, si misura la passeggiata. Credo che lo stesso Seneca, che dava tanta importanza alla riflessione, avrebbe considerato tempo ben speso anche una conversazione senza scopo o un pomeriggio di lettura.",
            "Per me, dunque, perdere tempo significa vivere distrattamente, senza scegliere. Impiegarlo bene vuol dire esserne consapevoli, anche quando decidiamo, deliberatamente, di non fare nulla.",
          ),
        },
        MONOLOGUE_NOTE,
      ),
    ],
  },
);
