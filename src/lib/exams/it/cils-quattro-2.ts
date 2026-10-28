// Synced from cheneygross-afk/lengo:src/lib/exams/it/cils-quattro-2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { AUDIO_NOTE, DIALOGUE_NOTE, MONOLOGUE_NOTE, cilsExam, gap, listen, match, paras, q, read, rec, speak, vf, write } from "./text";

// CILS QUATTRO (Mastery) practice exam 2: places, belonging and public
// goods. The five sections of the real CILS QUATTRO (C2): a comment on
// hybrid work, a disputed set of minutes, a museum room closed for
// restoration, a building manager's voicemail, an architect on
// abandoned villages, a friend torn about going home; experts and
// citizens, an aunt's piano, public libraries; a narrative with fine
// concordance of tenses, a formal letter, idioms; an essay on mass
// tourism and a letter to a newspaper; a conversation on city and
// country life and a talk on Leopardi's idea of boredom.
const BIBLIOTECHE = [
  "A. Con la diffusione della lettura digitale, molti ne avevano previsto la scomparsa.",
  "B. L'idea di una biblioteca aperta a chiunque, senza distinzione di ceto, è relativamente recente.",
  "C. Le cose cambiarono lentamente tra Ottocento e Novecento, con l'estendersi dell'istruzione obbligatoria.",
  "D. Oggi, del resto, il prestito di libri cartacei rappresenta soltanto una parte delle loro attività.",
  "E. Per molte persone anziane o sole, sono anche uno dei pochi luoghi pubblici in cui si può restare a lungo senza spendere nulla.",
  "F. Le prime biblioteche pubbliche nacquero in Italia soltanto nel Duemila.",
  "G. Per questo motivo i bibliotecari sono contrari all'uso dei computer.",
];

export const CILS_QUATTRO_2: Exam = cilsExam(
  {
    slug: "cils-quattro-2",
    level: "C2",
    title: "CILS QUATTRO (Mastery) practice exam 2",
    description:
      "A full CILS QUATTRO practice exam: a comment on hybrid work, a disputed set of minutes, a museum room closed for restoration, a building manager's voicemail, an architect on reviving abandoned villages, a friend torn about going home; trust in experts, an aunt's secret piano, public libraries; fine concordance of tenses, a formal letter and idioms; an essay on mass tourism and a letter to a newspaper; city and country life, and Leopardi on boredom.",
  },
  {
    ascolto: [
      listen(
        1,
        "Ascolta i testi. Per ogni testo scegli la risposta giusta.",
        [
          rec("Testo 1", [
            "Qualche anno fa sembrava che il lavoro da remoto dovesse svuotare per sempre gli uffici. Oggi molte aziende richiamano i dipendenti alla scrivania, e c'è chi parla già di fallimento. Come spesso accade, la verità sta nel mezzo: quasi ovunque si sta affermando un modello ibrido, con due o tre giorni in sede e gli altri a casa. Meno rivoluzionario di quanto si annunciasse, ma probabilmente più duraturo.",
          ], "m"),
          rec("Testo 2", [
            "F: Hai visto la bozza del verbale? C'è scritto che il bilancio è stato approvato all'unanimità.",
            "M: All'unanimità? Ma io mi sono astenuto, e l'ho anche motivato.",
            "F: Allora va corretto prima della firma. Mandami due righe con la tua dichiarazione di voto, così la inseriamo.",
            "M: Te le mando stasera. Non vorrei che tra un anno qualcuno mi rinfacciasse di averlo votato.",
          ]),
          rec("Testo 3", [
            "Si informano i gentili visitatori che, a causa dei lavori di restauro, la sala degli arazzi resterà chiusa fino a nuovo avviso. Il biglietto acquistato oggi darà diritto, entro sei mesi dalla riapertura della sala, a un ingresso gratuito per visitarla. Ci scusiamo per il disagio.",
          ]),
          rec("Testo 4", [
            "Signora Galli, buongiorno, sono l'amministratore del condominio. Le ricordo che l'assemblea straordinaria è convocata per giovedì alle diciotto, per deliberare sul rifacimento della facciata. Qualora non potesse intervenire, potrà farsi rappresentare da un altro condomino compilando la delega che trova allegata alla convocazione.",
          ], "m"),
        ],
        [
          q(
            1,
            "Testo 1. Qual è la tesi del commentatore?",
            ["Il lavoro da remoto è stato un fallimento.", "Gli uffici sono destinati a scomparire.", "Si sta diffondendo un compromesso tra ufficio e casa.", "I lavoratori preferiscono tutti l'ufficio."],
            3,
            "\"La verità sta nel mezzo\": a hybrid model, less revolutionary but probably more lasting.",
          ),
          q(
            2,
            "Testo 2. Che cosa contesta l'uomo?",
            ["Che il verbale riporti in modo sbagliato il suo voto", "Che il bilancio sia stato approvato", "Che la riunione sia durata troppo", "Che la collega non l'abbia invitato"],
            1,
            "The draft says the vote was unanimous, but he abstained: \"io mi sono astenuto\".",
          ),
          q(
            3,
            "Testo 3. Che cosa offre il museo ai visitatori di oggi?",
            ["Il rimborso del biglietto", "Una visita guidata alle altre sale", "Uno sconto sul prossimo biglietto", "Un ingresso gratuito per vedere la sala dopo la riapertura"],
            4,
            "Today's ticket gives a free entry to the tapestry room within six months of its reopening.",
          ),
          q(
            4,
            "Testo 4. Che cosa può fare la signora Galli se non può partecipare all'assemblea?",
            ["Votare per telefono", "Delegare un altro condomino", "Chiedere di rinviare l'assemblea", "Mandare le sue osservazioni per iscritto"],
            2,
            "\"Potrà farsi rappresentare da un altro condomino\" by filling in the proxy form (\"la delega\").",
          ),
        ],
        `${AUDIO_NOTE} Four short recordings: choose the right answer for each.`,
      ),
      listen(
        2,
        "Ascolta l'intervista. Scegli la risposta giusta.",
        [
          rec("Intervista a un'architetta", [
            "M: Negli ultimi anni si parla molto dei borghi abbandonati da far rinascere. Ne parliamo con Elena Rinaldi, architetta, che da tempo lavora sui paesi dell'Appennino. Da dove nasce tanto interesse?",
            "F: In parte dalla pandemia, che ha fatto scoprire a molti che si può lavorare lontano dalle città. Ma lo spopolamento è un fenomeno antico: comincia nel dopoguerra, quando intere famiglie scesero a valle o emigrarono in cerca di lavoro.",
            "M: Basta restaurare le case per far tornare la gente?",
            "F: È l'errore più comune. Ho visto borghi restaurati in modo impeccabile e rimasti vuoti, come scenografie. Una comunità ha bisogno di una scuola, di un medico, di una connessione decente, di un autobus che passi più di due volte al giorno. Senza servizi, le belle facciate non bastano.",
            "M: E il turismo?",
            "F: Può aiutare, ma con prudenza. Se ogni casa diventa un alloggio per le vacanze, il paese si anima d'estate e muore d'inverno. Preferisco i progetti che mescolano residenti stabili, artigiani e qualche struttura ricettiva.",
            "M: Che cosa consiglierebbe a chi sogna di trasferirsi in un borgo?",
            "F: Di passarci prima un inverno intero. L'idillio estivo è facile; la vera prova è gennaio, con la nebbia e i negozi chiusi. E poi di arrivare in punta di piedi: chi pretende di insegnare agli abitanti come si vive difficilmente viene accolto.",
          ], "m"),
        ],
        [
          q(
            5,
            "Secondo l'architetta, lo spopolamento dei borghi…",
            ["è cominciato con la pandemia.", "è cominciato nel dopoguerra.", "riguarda soltanto il Sud.", "si è ormai concluso."],
            2,
            "\"Lo spopolamento è un fenomeno antico: comincia nel dopoguerra\"; the pandemic only revived interest.",
          ),
          q(
            6,
            "Qual è, per lei, «l'errore più comune»?",
            ["Credere che basti restaurare le case", "Costruire case nuove", "Chiudere le scuole", "Affidare i progetti agli stranieri"],
            1,
            "Restored villages can stay empty \"come scenografie\": without services, fine façades are not enough.",
          ),
          q(
            7,
            "Che cosa pensa del turismo?",
            ["Che sia l'unica soluzione possibile", "Che vada vietato nei borghi", "Che porti lavoro soprattutto d'inverno", "Che possa aiutare, senza sostituire i residenti stabili"],
            4,
            "\"Può aiutare, ma con prudenza\": if every house becomes a holiday let, the village dies in winter.",
          ),
          q(
            8,
            "Che cosa consiglia a chi vuole trasferirsi in un borgo?",
            ["Di comprare casa al più presto", "Di arrivare in piena estate", "Di trascorrervi prima un inverno intero", "Di aprire subito un'attività"],
            3,
            "\"Di passarci prima un inverno intero\": the real test is January, not the summer idyll.",
          ),
          q(
            9,
            "Che cosa significa, nell'intervista, «arrivare in punta di piedi»?",
            ["Arrivare con discrezione, rispettando gli abitanti", "Arrivare di notte", "Arrivare a piedi, senza automobile", "Arrivare senza bagagli"],
            1,
            "Quietly and respectfully: those who try to teach the locals how to live are rarely welcomed.",
          ),
        ],
        `${AUDIO_NOTE} An interview with an architect: choose the right answer.`,
      ),
      listen(
        3,
        "Ascolta la conversazione tra due amici. Le affermazioni sono vere o false?",
        [
          rec("Conversazione", [
            "F: Allora, hai deciso? Accetti il posto a Valdora?",
            "M: Ci sto ancora pensando. Lo stipendio è più basso, ma con quello che pago d'affitto qui, alla fine mi resterebbe di più in tasca.",
            "F: E i tuoi genitori che cosa dicono?",
            "M: Mia madre è al settimo cielo, ovviamente. Ed è proprio questo che mi frena: ho paura di ritrovarmi a trentacinque anni a pranzo da loro ogni domenica, come quando ne avevo quindici.",
            "F: Be', qualche domenica potresti anche dire di no!",
            "M: Facile a dirsi. E poi a Valdora conosco tutti, e tutti sanno tutto di me. Qui nessuno mi chiede niente, ed è riposante.",
            "F: Però, se non sbaglio, ti lamentavi proprio di sentirti solo in città.",
            "M: Hai ragione, è una contraddizione. Vorrei l'anonimato della città e gli amici del paese. Che è come volere la botte piena e la moglie ubriaca.",
          ]),
        ],
        [
          vf(10, "Il nuovo lavoro offre uno stipendio più alto.", false, "\"Lo stipendio è più basso\", but with lower rent he would keep more."),
          vf(11, "Tenendo conto dell'affitto, l'uomo risparmierebbe di più a Valdora.", true, "\"Con quello che pago d'affitto qui, alla fine mi resterebbe di più\"."),
          vf(12, "La madre dell'uomo è contraria al suo ritorno.", false, "\"Mia madre è al settimo cielo\": she is delighted."),
          vf(13, "L'uomo teme di tornare alle abitudini di quando era ragazzo.", true, "Sunday lunch with his parents every week, \"come quando ne avevo quindici\"."),
          vf(14, "In città l'uomo apprezza il fatto di non essere osservato.", true, "\"Qui nessuno mi chiede niente, ed è riposante\"."),
          vf(15, "L'uomo pensa di poter avere facilmente entrambe le cose.", false, "\"Volere la botte piena e la moglie ubriaca\" means wanting two incompatible things."),
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
            title: "Esperti e cittadini",
            body: paras(
              "C'è stato un tempo, non lontanissimo, in cui la parola del medico, del professore o dell'ingegnere era accolta con un rispetto quasi reverenziale. Non sempre a ragione: l'autorità, allora, si fondava spesso più sul titolo che sulla competenza, e metterla in dubbio era considerato una mancanza di educazione prima ancora che un errore.",
              "Oggi la situazione appare capovolta. Chiunque, con un telefono in mano, può consultare in pochi secondi una quantità di informazioni che un tempo avrebbe richiesto settimane di biblioteca, e molti ne deducono di poter fare a meno degli specialisti. Il paziente arriva dal medico con la diagnosi già pronta; il genitore discute con l'insegnante i metodi didattici.",
              "Sarebbe facile liquidare il fenomeno come ignoranza presuntuosa. Ma una parte della sfiducia ha radici reali: gli esperti hanno commesso errori, talvolta gravi, e non sempre li hanno ammessi; alcuni hanno messo la propria autorità al servizio di interessi economici; altri si sono espressi con una sicurezza che i dati non giustificavano.",
              "Il paradosso è che la risposta a questi errori non può essere l'abolizione della competenza, ma soltanto una competenza migliore. Il metodo scientifico, del resto, non promette verità definitive: è un sistema per correggere gli sbagli, che funziona proprio perché nessuna affermazione vi è sottratta al controllo. Chi lo abbandona in nome dello spirito critico finisce, ironicamente, per affidarsi a fonti assai meno verificabili.",
              "Ricostruire la fiducia richiederà dunque uno sforzo da entrambe le parti: agli esperti, la disponibilità a spiegare non soltanto che cosa sanno, ma anche quanto sono sicuri di saperlo; ai cittadini, la pazienza di distinguere tra il dubbio che cerca prove e quello che le rifiuta.",
            ),
          },
        ],
        [
          q(
            1,
            "Secondo l'autore, in passato l'autorità degli esperti…",
            ["era sempre meritata.", "si basava spesso più sul titolo che sulla competenza.", "era contestata da tutti.", "dipendeva dalle biblioteche."],
            2,
            "\"L'autorità, allora, si fondava spesso più sul titolo che sulla competenza\".",
          ),
          q(
            2,
            "Che cosa ha cambiato l'accesso immediato alle informazioni?",
            ["Ha reso i medici più disponibili.", "Ha aumentato il rispetto per gli insegnanti.", "Ha eliminato gli errori di diagnosi.", "Ha convinto molti di poter fare a meno degli specialisti."],
            4,
            "\"Molti ne deducono di poter fare a meno degli specialisti\": patients arrive with their own diagnosis.",
          ),
          q(
            3,
            "Secondo l'autore, la sfiducia verso gli esperti…",
            ["ha in parte cause reali.", "è soltanto frutto di ignoranza.", "riguarda soltanto i medici.", "è nata insieme alla scienza moderna."],
            1,
            "\"Una parte della sfiducia ha radici reali\": unadmitted errors, conflicts of interest, overconfidence.",
          ),
          q(
            4,
            "Che cosa dice l'autore del metodo scientifico?",
            ["Che garantisce verità definitive", "Che è riservato agli esperti", "Che funziona perché permette di correggere gli errori", "Che va abbandonato in nome dello spirito critico"],
            3,
            "\"È un sistema per correggere gli sbagli, che funziona proprio perché nessuna affermazione vi è sottratta al controllo\".",
          ),
          q(
            5,
            "Che cosa chiede l'autore ai cittadini?",
            ["Di fidarsi ciecamente degli esperti", "Di distinguere il dubbio che cerca prove da quello che le rifiuta", "Di non consultare più la rete", "Di diventare esperti a loro volta"],
            2,
            "\"La pazienza di distinguere tra il dubbio che cerca prove e quello che le rifiuta\".",
          ),
        ],
        "Read the essay and choose the right answer.",
      ),
      read(
        2,
        "Leggi il racconto. Le affermazioni sono vere o false?",
        [
          {
            title: "Il pianoforte di zia Ada",
            body: paras(
              "Nessuno, in famiglia, aveva mai sentito zia Ada suonare. Il pianoforte stava nel salotto buono, coperto da uno scialle di seta, e serviva soprattutto a reggere le fotografie dei nipoti e un vaso di ortensie finte. Quando qualcuno le chiedeva perché lo tenesse, rispondeva che era un mobile come un altro, e cambiava discorso.",
              "Dopo il funerale toccò a me svuotare la casa. Gli antiquari passarono, toccarono, scossero la testa: uno strumento vecchio, scordato, che nessuno avrebbe comprato. Stavo per rassegnarmi a pagare qualcuno perché lo portasse via, quando, sollevando il coperchio, trovai un fascio di spartiti legati con un nastro.",
              "Erano pagine scritte a mano, con una grafia che riconobbi subito: piccole composizioni, valzer, una ninna nanna, ciascuna datata e firmata con una sola lettera, «A.». L'ultima risaliva al 1958, l'anno in cui, mi avevano sempre raccontato, la zia aveva rinunciato al conservatorio per accudire la madre malata.",
              "Il pianoforte, alla fine, non lo vendetti. Lo feci accordare, e mia figlia, che ha nove anni e nessuna pazienza, ha imparato a suonare la ninna nanna. La suona male, saltando le note difficili. Credo che alla zia piacerebbe lo stesso.",
            ),
          },
        ],
        [
          vf(6, "In famiglia avevano sentito spesso zia Ada suonare il pianoforte.", false, "\"Nessuno, in famiglia, aveva mai sentito zia Ada suonare\"."),
          vf(7, "La zia evitava di parlare del pianoforte.", true, "She called it \"un mobile come un altro\" and changed the subject."),
          vf(8, "Gli antiquari giudicarono il pianoforte di grande valore.", false, "They shook their heads: old, out of tune, unsellable."),
          vf(9, "Il narratore trovò degli spartiti dentro il pianoforte.", true, "Under the lid, \"un fascio di spartiti legati con un nastro\"."),
          vf(10, "Le composizioni erano opera di un musicista famoso.", false, "They were the aunt's own, in a handwriting the narrator recognised, signed \"A.\"."),
          vf(11, "Il narratore pensa che alla zia farebbe piacere sentire suonare la bambina.", true, "\"Credo che alla zia piacerebbe lo stesso\", even played badly."),
        ],
        "Read the story. Are the statements true (\"Vero\") or false (\"Falso\")?",
      ),
      read(
        3,
        "Leggi il testo. Per ogni spazio scegli la frase giusta. Attenzione: ci sono due frasi in più.",
        [
          {
            title: "Le biblioteche pubbliche",
            body: paras(
              "(12) ______ Per secoli i libri furono beni rari e costosi, custoditi in monasteri, università e palazzi privati, e consultarli era un privilegio riservato a pochi studiosi.",
              "(13) ______ Insieme alla scuola per tutti nacque il bisogno di luoghi in cui chi aveva imparato a leggere potesse continuare a farlo, anche senza poter comprare libri.",
              "(14) ______ Le previsioni, almeno finora, si sono rivelate sbagliate: le biblioteche non sono sparite, ma si sono trasformate.",
              "(15) ______ Vi si tengono corsi di lingua per stranieri, letture per bambini, incontri con autori; si può usare un computer, stampare un documento, chiedere aiuto per compilare un modulo online.",
              "(16) ______ In un'epoca in cui quasi ogni spazio urbano chiede di consumare qualcosa, questa gratuità è forse il loro servizio più prezioso.",
            ),
          },
        ],
        [
          match(12, "", BIBLIOTECHE, "B", "\"Relativamente recente\" is explained by what follows: for centuries books were a privilege of the few."),
          match(13, "", BIBLIOTECHE, "C", "Compulsory schooling leads to \"la scuola per tutti\" in the next sentence."),
          match(14, "", BIBLIOTECHE, "A", "\"Le previsioni… si sono rivelate sbagliate\" refers back to the predicted disappearance."),
          match(15, "", BIBLIOTECHE, "D", "Lending is only part of what they do: the next sentence lists the other activities."),
          match(16, "", BIBLIOTECHE, "E", "\"Senza spendere nulla\" leads to \"questa gratuità\". F is false and G is not in the text."),
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
            title: "Il ritorno",
            body: "Quando, una mattina di marzo, Marta (1) ______ al paese dopo vent'anni di assenza, nessuno la riconobbe. La casa dei nonni era ancora lì, ma qualcuno ne (2) ______ le persiane di un verde acceso che a lei parve quasi offensivo. Le sembrò che anche la piazza (3) ______ più piccola di come la ricordava. (4) ______ arrivata davanti al bar, esitò: se fosse entrata, (5) ______ costretta a spiegare a tutti perché se ne fosse andata, e perché fosse tornata. Decise quindi di proseguire, non senza (6) ______ un'ultima occhiata alla vetrina, dove la fotografia della squadra di calcio del 1990 era ancora appesa al solito posto.",
          },
        ],
        [
          gap(1, ["tornava", "fosse tornata", "sarebbe tornata", "tornò"], 4, "A single completed event in a past narrative: passato remoto, \"tornò\"."),
          gap(2, ["dipingeva", "aveva dipinto", "dipinse", "avesse dipinto"], 2, "Someone had painted them before she arrived: trapassato prossimo, \"aveva dipinto\"."),
          gap(3, ["fu", "era", "fosse", "sarebbe"], 3, "\"Le sembrò che\" expresses an impression and takes the subjunctive: \"fosse\"."),
          gap(4, ["Una volta", "Pur essendo", "Benché", "Dopo che"], 1, "\"Una volta arrivata\": once she had arrived. \"Dopo che\" would need a verb (\"dopo che fu arrivata\")."),
          gap(5, ["fosse stata", "era stata", "sarà stata", "sarebbe stata"], 4, "The main clause of an unreal past condition (\"se fosse entrata\"): past conditional, \"sarebbe stata\"."),
          gap(6, ["lanciando", "lanciato", "aver lanciato", "lanciasse"], 3, "\"Non senza\" takes the infinitive, here past: \"non senza aver lanciato\", not without having cast a last look."),
        ],
        "Read the text and choose the right form for each gap.",
      ),
      read(
        2,
        "Leggi la lettera e scegli la forma giusta per ogni spazio.",
        [
          {
            title: "Una lettera al Comune",
            body: "Gentile Assessore, mi rivolgo a Lei in (7) ______ di presidente dell'associazione «Amici del parco Vittoria». (8) ______ regolamento comunale, le aree verdi devono essere curate con regolarità. Ciononostante, da mesi le panchine sono rotte e l'erba non viene tagliata, (9) ______ le numerose segnalazioni dei residenti. Chiediamo pertanto un intervento urgente, affinché la situazione (10) ______ al più presto. Le saremmo inoltre grati se (11) ______ indicarci i tempi previsti per i lavori. (12) ______ di un Suo cortese riscontro, porgiamo distinti saluti.",
          },
        ],
        [
          gap(7, ["qualità", "quanto", "merito", "base"], 1, "\"In qualità di\": in my capacity as."),
          gap(8, ["Nel senso del", "Ai sensi del", "Al senso del", "Per i sensi del"], 2, "\"Ai sensi del regolamento\": under the regulations, the fixed formula of legal and administrative Italian."),
          gap(9, ["poiché", "sebbene", "affinché", "malgrado"], 4, "Before a noun (\"le segnalazioni\") the concession needs a preposition: \"malgrado\". \"Sebbene\" introduces a clause with a verb."),
          gap(10, ["venga risolta", "viene risolta", "verrà risolta", "sarebbe risolta"], 1, "\"Affinché\" always takes the subjunctive: \"venga risolta\"."),
          gap(11, ["vorrebbe", "voglia", "volesse", "vuole"], 3, "\"Le saremmo grati se\" is a polite hypothesis: imperfect subjunctive, \"volesse\"."),
          gap(12, ["Attendendo", "In attesa", "Aspettando", "Nell'aspettare"], 2, "\"In attesa di un Suo cortese riscontro\": the set closing formula. The verbs would not take \"di\"."),
        ],
        "Read the letter and choose the right form for each gap.",
      ),
      read(
        3,
        "Scegli il significato più vicino all'espressione tra virgolette.",
        [],
        [
          q(13, "Gli abbiamo chiesto più volte di restituire il prestito, ma «fa orecchie da mercante».", ["risponde con gentilezza", "non ha soldi", "finge di non sentire", "promette di pagare"], 3, "\"Fare orecchie da mercante\": to turn a deaf ear."),
          q(14, "Per «tagliare la testa al toro», abbiamo deciso di votare subito.", ["chiudere la questione in modo netto", "evitare ogni rischio", "punire i responsabili", "rimandare la decisione"], 1, "\"Tagliare la testa al toro\": to settle a matter once and for all."),
          q(15, "Dopo le vacanze sono completamente «al verde».", ["riposato", "abbronzato", "pieno di energia", "senza soldi"], 4, "\"Essere al verde\": to be broke."),
          q(16, "Credevo che fosse la sorella di Luca, ma ho «preso un granchio».", ["ho avuto fortuna", "mi sono sbagliato", "ho capito tutto", "mi sono offeso"], 2, "\"Prendere un granchio\": to make a blunder, get it wrong."),
          q(17, "Smettila di «menare il can per l'aia» e dimmi che cosa è successo.", ["arrabbiarti", "scherzare", "fare domande", "tirarla per le lunghe senza arrivare al punto"], 4, "\"Menare il can per l'aia\": to beat about the bush."),
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
            "Un settimanale propone il tema: «Il turismo di massa è una ricchezza o una minaccia per le città d'arte?». Scrivi un saggio breve in cui sviluppi una tesi personale, confrontandoti con le posizioni opposte e sostenendo le tue argomentazioni con esempi.",
          words: [250, 300],
          rubric: [
            "\"Adeguatezza\": an essay for a weekly magazine with a personal, nuanced thesis that weighs the benefits and costs of mass tourism with examples",
            "\"Coerenza e coesione\": a title, an introduction that frames the problem, a well-structured argument with counter-arguments, a conclusion with a proposal",
            "\"Competenza grammaticale\": full control of complex syntax, concessive and hypothetical clauses, impersonal and passive forms, without errors",
            "\"Competenza lessicale\": rich, precise vocabulary (\"sovraffollamento\", \"residenti\", \"affitti brevi\", \"indotto\", \"sostenibile\") in a suitable register",
          ],
          modelAnswer: paras(
            "Visitare senza consumare",
            "Chi abbia attraversato un centro storico italiano in agosto conosce la scena: vicoli intasati, file interminabili davanti ai musei, negozi di souvenir là dove un tempo c'erano il fornaio e il ciabattino. Viene spontaneo concludere che il turismo di massa sia una minaccia. La questione, però, merita più cautela.",
            "Sarebbe ipocrita negare che il turismo porti ricchezza. Intere economie locali vivono di alberghi, ristoranti, guide e artigiani; molti monumenti vengono restaurati anche grazie agli incassi dei biglietti. Né si può pretendere che l'arte resti un privilegio di chi ha tempo e denaro per viaggiare fuori stagione.",
            "Il problema non è dunque il numero dei visitatori in sé, ma la loro concentrazione e il modello che ne deriva. Quando gli affitti brevi rendono più di un contratto ordinario, i residenti vengono espulsi verso le periferie, e il centro si trasforma in un parco a tema che si svuota la sera. A quel punto la città perde proprio ciò che i turisti venivano a cercare: una vita autentica.",
            "Le soluzioni esistono, anche se nessuna è indolore. Si potrebbero limitare le nuove licenze per gli affitti turistici, prenotare l'accesso ai luoghi più fragili, promuovere itinerari meno noti e distribuire i flussi nell'arco dell'anno. Altrettanto importante sarebbe educare i visitatori a un turismo più lento, che preferisca tre giorni in un solo luogo a tre città in un giorno.",
            "In definitiva, il turismo è una ricchezza finché resta ospite della città, e diventa una minaccia quando ne prende il posto. Governarlo non significa chiudere le porte, ma difendere il diritto degli abitanti a restare.",
          ),
        },
      ),
      write(
        2,
        "Scrivi una lettera al direttore di un quotidiano (da 150 a 200 parole).",
        {
          prompt:
            "Il quotidiano della tua città ha pubblicato un articolo favorevole alla chiusura totale del centro storico alle automobili. Scrivi una lettera al direttore in cui esprimi la tua opinione, argomentandola e proponendo eventuali correttivi.",
          words: [150, 200],
          rubric: [
            "\"Adeguatezza\": a letter to the editor that refers to the article, takes a clear position, argues it and suggests improvements",
            "\"Coerenza e coesione\": a formal opening, a reference to the article, ordered arguments, a closing and signature",
            "\"Competenza grammaticale\": precise and varied structures, including the subjunctive and hypothetical clauses, without errors",
            "\"Competenza lessicale\": the vocabulary of urban life (\"zona a traffico limitato\", \"mezzi pubblici\", \"parcheggi di scambio\", \"commercianti\") in a formal register",
          ],
          modelAnswer: paras(
            "Gentile Direttore,",
            "ho letto con interesse l'articolo pubblicato domenica scorsa sulla proposta di chiudere il centro storico alle automobili. Condivido l'obiettivo, ma temo che, se la misura venisse applicata senza alcuna gradualità, rischierebbe di produrre l'effetto opposto a quello desiderato.",
            "Un centro libero dal traffico è senza dubbio più vivibile: l'aria è più pulita, le strade tornano ai pedoni e i monumenti smettono di fare da sfondo ai parcheggi. Tuttavia, una chiusura totale penalizzerebbe soprattutto gli anziani, le persone con disabilità e i piccoli commercianti, che già faticano a resistere alla concorrenza dei centri commerciali.",
            "Proporrei quindi di procedere per fasi: prima potenziare i mezzi pubblici e creare parcheggi di scambio ai margini del centro, poi estendere progressivamente la zona pedonale, prevedendo permessi per i residenti e fasce orarie per le consegne.",
            "Una città più verde è possibile, a patto che non diventi una città per pochi.",
            "Cordiali saluti,",
            "Giulia Serafini",
          ),
        },
      ),
    ],
    orale: [
      speak(
        1,
        "Conversazione con l'esaminatore sulla vita in città e in campagna.",
        {
          prompt: "Parla del luogo in cui vivi e del rapporto tra città e campagna oggi.",
          points: ["Il luogo in cui vivi e che cosa ti lega a esso", "Vantaggi e limiti della vita in città", "Il ritorno ai piccoli centri", "Dove ti piacerebbe vivere tra vent'anni"],
          examinerQuestions: [
            "Si considera una persona di città o di campagna?",
            "Che cosa le mancherebbe se lasciasse la città in cui vive?",
            "Secondo Lei, il lavoro da remoto cambierà davvero il rapporto tra città e piccoli centri?",
            "Dove le piacerebbe vivere tra vent'anni, e perché?",
          ],
          prepMinutes: 0,
          speakMinutes: 6,
          modelAnswer: paras(
            "– Si considera una persona di città o di campagna?",
            "– Per nascita sono di città, ma per temperamento, temo, sono un ibrido. Ho bisogno del rumore e delle occasioni che offre una grande città, eppure dopo qualche settimana senza vedere un orizzonte comincio a sentirmi in gabbia.",
            "– Che cosa le mancherebbe se lasciasse la città in cui vive?",
            "– Soprattutto la possibilità di scegliere: un cinema che proietta film in lingua originale, una libreria aperta fino a tardi, l'incontro casuale con persone diversissime da me. In un piccolo paese si conoscono tutti, ma si rischia di conoscere sempre le stesse persone.",
            "– Il lavoro da remoto cambierà il rapporto tra città e piccoli centri?",
            "– In parte l'ha già cambiato, ma non bisogna sopravvalutarlo. Possono lavorare a distanza soprattutto le professioni intellettuali; un infermiere o un idraulico no. E senza scuole, trasporti e servizi sanitari, nessuna connessione veloce basta a convincere una famiglia a trasferirsi.",
            "– Dove le piacerebbe vivere tra vent'anni?",
            "– Forse in una città di medie dimensioni, abbastanza grande da avere un teatro e un ospedale, abbastanza piccola da poterla attraversare in bicicletta. Mi sembra il compromesso più ragionevole, anche se, me ne rendo conto, è il sogno di molti.",
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
              title: "Sulla noia",
              body: "«La noia è in qualche modo il più sublime dei sentimenti umani.» (Giacomo Leopardi, «Pensieri», LXVIII, XIX secolo)",
            },
          ],
          points: ["Che cosa intende l'autore", "Perché la noia potrebbe essere «sublime»", "Il rapporto con la noia nell'epoca degli schermi", "La tua esperienza personale"],
          examinerQuestions: ["Quando è stata l'ultima volta che si è annoiato davvero?", "I bambini di oggi hanno ancora il tempo di annoiarsi?", "La noia può essere creativa?"],
          prepMinutes: 3,
          speakMinutes: 6,
          modelAnswer: paras(
            "La frase di Leopardi colpisce perché rovescia il giudizio comune. Di solito consideriamo la noia un sentimento meschino, quasi una colpa: chi si annoia, si dice, non sa godere di ciò che ha. Leopardi, invece, la colloca al vertice dei sentimenti umani.",
            "Se ho capito bene il suo pensiero, la noia è sublime perché nasce dalla sproporzione tra l'animo umano e il mondo. Ci annoiamo perché nessuna cosa concreta riesce a soddisfare del tutto il nostro desiderio, che è in qualche modo infinito. In questo senso, la noia sarebbe il segno di una grandezza: un animale sazio non si annoia, un essere umano sì.",
            "Oggi il nostro rapporto con la noia è cambiato radicalmente. Ogni minuto vuoto, in coda alla posta o sull'autobus, viene immediatamente riempito dallo schermo del telefono. Non ci annoiamo quasi più, ma non sono sicuro che ci abbiamo guadagnato. Molti psicologi sostengono che proprio nei momenti di vuoto la mente rielabora le esperienze e produce idee nuove.",
            "Personalmente, ricordo con una certa nostalgia i lunghi pomeriggi d'estate della mia infanzia, quando non c'era niente da fare e bisognava inventarsi qualcosa. Credo che lì sia nato il mio amore per la lettura. Per questo, pur senza arrivare alla metafisica di Leopardi, penso che dovremmo concederci, ogni tanto, il lusso di annoiarci.",
          ),
        },
        MONOLOGUE_NOTE,
      ),
    ],
  },
);
