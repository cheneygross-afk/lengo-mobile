// Synced from cheneygross-afk/lengo:src/lib/exams/it/cils-due-1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { AUDIO_NOTE, DIALOGUE_NOTE, MONOLOGUE_NOTE, cilsExam, gap, listen, match, paras, q, read, rec, speak, vf, write } from "./text";

// CILS DUE (Upper Intermediate) practice exam 1: cities, work and
// craft. The five sections of the real CILS DUE (B2): a traffic-limited
// zone, a client deadline, evening lectures and a train refund, a radio
// interview with a fresco restorer, colleagues on a four-day week; the
// "15-minute city", a teacher's letter on phones at school, the history
// of the moka with sentences to put back; an interpreter's anecdote with
// the subjunctive, a formal cover letter, idioms; an argued text on mass
// tourism and a letter of complaint; a conversation on languages and a
// talk on local food.
const MOKA = [
  "A. Il risultato è un caffè più denso di quello all'americana, ma meno concentrato di un espresso del bar.",
  "B. In quasi tutte le famiglie ce n'è almeno una, spesso in più misure.",
  "C. Oggi, però, il suo primato non è più così scontato.",
  "D. Molti giovani, dopo anni di capsule, stanno tornando a comprarla.",
  "E. Per questo è vietato portarla in aereo.",
  "F. La sua forma, invece, è cambiata completamente nel tempo.",
];

export const CILS_DUE_1: Exam = cilsExam(
  {
    slug: "cils-due-1",
    level: "B2",
    title: "CILS DUE (Upper Intermediate) practice exam 1",
    description:
      "A full CILS DUE practice exam: a new traffic-limited zone, a client deadline, a train refund, an interview with a fresco restorer, a four-day working week; the \"15-minute city\", a teacher's letter on phones in class, the story of the moka; an interpreter's first conference, a cover letter and idioms; an argued text on mass tourism and a hotel complaint; languages and local food.",
  },
  {
    ascolto: [
      listen(
        1,
        "Ascolta i testi. Per ogni testo scegli la risposta giusta.",
        [
          rec("Testo 1", [
            "Da lunedì prossimo entra in vigore la nuova zona a traffico limitato nel centro storico. I residenti potranno richiedere il permesso gratuito entro la fine del mese; per tutti gli altri, l'accesso sarà consentito soltanto dalle venti alle sette e nei giorni festivi. Le multe partiranno a febbraio, dopo un periodo di prova.",
          ], "m"),
          rec("Testo 2", [
            "M: Senti, per la presentazione al cliente ce la facciamo per giovedì?",
            "F: Sinceramente no. Mancano ancora i dati dell'ufficio vendite, e senza quelli non possiamo chiudere il budget.",
            "M: Allora chiedo al cliente di rimandare a lunedì?",
            "F: Meglio di no, ci tengono molto. Proporrei di presentare giovedì la parte creativa e di mandare il budget per email entro martedì.",
          ], "m"),
          rec("Testo 3", [
            "L'Università per tutti riapre le iscrizioni: dodici incontri serali, da ottobre a marzo, su temi di storia, scienza e attualità, tenuti da docenti universitari. Non servono titoli di studio. La quota è di sessanta euro per l'intero ciclo; chi ha più di settant'anni o è disoccupato partecipa gratuitamente.",
          ]),
          rec("Testo 4", [
            "F: Buongiorno, il mio treno di ieri è arrivato con quasi due ore di ritardo. Ho diritto a un rimborso?",
            "M: Sì: per un ritardo tra sessanta e centodiciannove minuti le spetta il venticinque per cento del prezzo del biglietto; da centoventi minuti in su, il cinquanta per cento. Di quanto è stato il ritardo, esattamente?",
            "F: Un'ora e cinquanta.",
            "M: Allora il venticinque per cento. Deve compilare il modulo online entro dodici mesi.",
          ]),
        ],
        [
          q(
            1,
            "Testo 1. Che cosa cambia per chi non abita in centro?",
            ["Non potrà mai entrare in centro", "Potrà entrare solo la sera, la notte e nei giorni festivi", "Dovrà pagare un permesso", "Potrà entrare solo di giorno"],
            2,
            "For non-residents access is allowed \"soltanto dalle venti alle sette e nei giorni festivi\".",
          ),
          q(
            2,
            "Testo 2. Che cosa propone la donna?",
            ["Rimandare la presentazione a lunedì", "Presentare tutto giovedì", "Presentare giovedì la parte creativa e mandare il budget dopo", "Annullare la presentazione"],
            3,
            "\"Proporrei di presentare giovedì la parte creativa e di mandare il budget per email entro martedì\".",
          ),
          q(
            3,
            "Testo 3. Chi può partecipare senza pagare?",
            ["Gli studenti universitari", "Chi si iscrive entro ottobre", "Tutti i residenti", "Chi ha più di settant'anni o non ha un lavoro"],
            4,
            "\"Chi ha più di settant'anni o è disoccupato\" (unemployed) takes part for free.",
          ),
          q(
            4,
            "Testo 4. Quanto le verrà rimborsato?",
            ["Il venticinque per cento del biglietto", "Il cinquanta per cento del biglietto", "Il prezzo intero", "Niente"],
            1,
            "One hour fifty is 110 minutes: between 60 and 119, so twenty-five per cent.",
          ),
        ],
        `${AUDIO_NOTE} Four short recordings: choose the right answer for each.`,
      ),
      listen(
        2,
        "Ascolta l'intervista radiofonica. Scegli la risposta giusta.",
        [
          rec("Intervista a una restauratrice", [
            "M: Nella puntata di oggi parliamo di un mestiere antico e modernissimo insieme: il restauro. Con noi c'è Anna Corsi, restauratrice di affreschi. Come si diventa restauratori?",
            "F: Oggi serve una laurea specifica: cinque anni tra teoria e laboratorio. Io ho cominciato quasi per caso. Durante l'università ho fatto un tirocinio in una chiesa di campagna e ho capito che volevo passare la vita sui ponteggi.",
            "M: Sui ponteggi?",
            "F: Sì, gran parte del lavoro si fa in alto, sulle impalcature, a volte al freddo, con una luce difficile. È un lavoro fisico, altro che romantico. Ci sono giornate in cui pulisci due centimetri quadrati in otto ore.",
            "M: Qual è l'errore più comune quando si pensa al restauro?",
            "F: Pensare che il restauratore debba rifare l'opera, renderla nuova. È il contrario: il nostro compito è conservare quello che c'è, fermare il degrado e intervenire il meno possibile. Tutto quello che aggiungiamo deve essere riconoscibile e, se possibile, reversibile, cioè si deve poter togliere in futuro.",
            "M: E la tecnologia ha cambiato il vostro lavoro?",
            "F: Moltissimo. Usiamo il laser per pulire, le analisi chimiche per capire i materiali, le fotografie all'infrarosso per vedere i disegni nascosti sotto il colore. Ma alla fine la decisione è sempre umana: la macchina ti dice che cosa c'è, non che cosa fare.",
            "M: Un consiglio a un giovane che vuole fare questo mestiere?",
            "F: Pazienza e umiltà. E prepararsi a un inizio precario: i cantieri durano qualche mese, poi bisogna cercarne un altro.",
          ], "m"),
        ],
        [
          q(
            5,
            "Come ha scoperto la sua passione Anna?",
            ["Da bambina, visitando i musei", "Con un tirocinio in una chiesa durante l'università", "Lavorando in un laboratorio di chimica", "Grazie a un corso online"],
            2,
            "\"Durante l'università ho fatto un tirocinio in una chiesa di campagna\".",
          ),
          q(6, "Come descrive il suo lavoro?", ["Romantico e rilassante", "Ben pagato e sicuro", "Soprattutto al computer", "Faticoso e molto lento"], 4, "\"Un lavoro fisico, altro che romantico\", with days spent cleaning two square centimetres."),
          q(
            7,
            "Secondo Anna, il compito del restauratore è…",
            ["conservare l'opera intervenendo il meno possibile.", "rendere l'opera come nuova.", "ridipingere le parti mancanti.", "sostituire i materiali antichi."],
            1,
            "\"Conservare quello che c'è… e intervenire il meno possibile\"; making it new is the common mistake.",
          ),
          q(8, "Che cosa significa qui «reversibile»?", ["Che si vede da tutte e due le parti", "Che si può togliere in futuro", "Che costa poco", "Che dura per sempre"], 2, "She explains it herself: \"cioè si deve poter togliere in futuro\"."),
          q(
            9,
            "Che cosa dice della tecnologia?",
            ["Ha sostituito il lavoro umano.", "Non si usa nel restauro.", "Aiuta a capire, ma le decisioni restano umane.", "È troppo cara per i piccoli cantieri."],
            3,
            "\"La macchina ti dice che cosa c'è, non che cosa fare\".",
          ),
        ],
        `${AUDIO_NOTE} A radio interview: choose the right answer.`,
      ),
      listen(
        3,
        "Ascolta la conversazione tra due colleghi. Le affermazioni sono vere o false?",
        [
          rec("Conversazione", [
            "F: Hai letto la mail dell'azienda? Da gennaio provano la settimana corta.",
            "M: Sì, quattro giorni di lavoro invece di cinque. Ma a parità di stipendio?",
            "F: Sì, stesso stipendio. Però l'orario giornaliero passa da otto a nove ore.",
            "M: Quindi trentasei ore invece di quaranta. Non male. E il giorno libero lo scegliamo noi?",
            "F: No, lo decide il responsabile di ogni ufficio, perché ci sia sempre qualcuno. È una sperimentazione di sei mesi; alla fine ci faranno compilare un questionario.",
            "M: A me piacerebbe il venerdì libero, ma con tre figli forse mi conviene il mercoledì, quando la piccola non ha scuola il pomeriggio.",
            "F: Io invece temo che nove ore di fila siano tante. Alle sei di sera sono già cotta.",
            "M: Be', proviamo. Male che vada, si torna come prima.",
          ]),
        ],
        [
          vf(10, "Con la settimana corta lo stipendio resta uguale.", true, "\"A parità di stipendio?\" \"Sì, stesso stipendio\"."),
          vf(11, "Si lavorerà otto ore al giorno.", false, "\"L'orario giornaliero passa da otto a nove ore\"."),
          vf(12, "Ogni dipendente sceglie il proprio giorno libero.", false, "\"Lo decide il responsabile di ogni ufficio\"."),
          vf(13, "La sperimentazione durerà sei mesi.", true, "\"È una sperimentazione di sei mesi\"."),
          vf(14, "Per motivi familiari, all'uomo potrebbe convenire il mercoledì libero.", true, "He'd like Fridays, but with three children \"forse mi conviene il mercoledì\"."),
          vf(15, "La donna è sicura che nove ore al giorno non siano un problema.", false, "\"Temo che nove ore di fila siano tante\": she's worried. \"Essere cotto\" is informal for being exhausted."),
        ],
        `${AUDIO_NOTE} Are the statements true (\"Vero\") or false (\"Falso\")?`,
      ),
    ],
    lettura: [
      read(
        1,
        "Leggi l'articolo e scegli la risposta giusta.",
        [
          {
            title: "La città dei quindici minuti",
            body: paras(
              "Immaginate di poter raggiungere a piedi o in bicicletta, in un quarto d'ora, tutto ciò che vi serve: la scuola dei figli, il medico, il supermercato, un parco, la biblioteca, magari anche il posto di lavoro. È l'idea della «città dei quindici minuti», nata in Francia qualche anno fa e discussa oggi da molte amministrazioni, anche in Italia.",
              "Il principio è semplice: invece di concentrare uffici e negozi in centro e le abitazioni in periferia, ogni quartiere dovrebbe offrire i servizi essenziali. I vantaggi, secondo i sostenitori, sono evidenti: meno traffico e meno inquinamento, più tempo libero, strade più vive e più sicure, perché frequentate a tutte le ore.",
              "Non mancano però le critiche. Alcuni urbanisti fanno notare che il modello funziona bene nei centri storici densi, come quelli di molte città italiane, ma molto meno nelle periferie nate negli anni Sessanta e Settanta, dove mancano spazi e investimenti. Altri temono che i quartieri più ricchi migliorino in fretta, mentre quelli poveri restano indietro, con un aumento delle disuguaglianze. E c'è chi osserva che, per molti, il lavoro non si può avvicinare a casa: un operaio o un'infermiera non lavorano da remoto.",
              "A Milano alcuni interventi vanno in questa direzione: piazze sottratte alle auto con un po' di vernice e qualche panchina, scuole aperte al quartiere nel pomeriggio, biblioteche trasformate in centri di servizi. Sono progetti piccoli e poco costosi, che si possono provare e, se non funzionano, cambiare. Forse è proprio questa la lezione più utile: la città non si ridisegna in un giorno, ma un quartiere alla volta.",
            ),
          },
        ],
        [
          q(
            1,
            "Che cos'è la «città dei quindici minuti»?",
            ["Una città in cui i servizi essenziali sono vicini a casa", "Una città in cui i mezzi pubblici passano ogni quindici minuti", "Un progetto per ridurre l'orario di lavoro", "Un quartiere senza automobili"],
            1,
            "Everything you need within a quarter of an hour on foot or by bike: \"ogni quartiere dovrebbe offrire i servizi essenziali\".",
          ),
          q(
            2,
            "Secondo i sostenitori, perché le strade diventerebbero più sicure?",
            ["Perché ci sarebbero più vigili", "Perché sarebbero frequentate a tutte le ore", "Perché le auto andrebbero più piano", "Perché ci sarebbero più telecamere"],
            2,
            "\"Strade più vive e più sicure, perché frequentate a tutte le ore\".",
          ),
          q(
            3,
            "Perché il modello funziona meno nelle periferie degli anni Sessanta e Settanta?",
            ["Perché ci abitano poche persone", "Perché sono troppo lontane dal centro", "Perché mancano spazi e investimenti", "Perché non ci sono scuole"],
            3,
            "\"Dove mancano spazi e investimenti\".",
          ),
          q(
            4,
            "Quale critica riguarda il lavoro?",
            ["Che i negozi chiuderebbero", "Che gli stipendi scenderebbero", "Che gli uffici in centro resterebbero vuoti", "Che molti lavori non si possono fare vicino a casa"],
            4,
            "\"Per molti, il lavoro non si può avvicinare a casa\": a factory worker or a nurse can't work remotely.",
          ),
          q(
            5,
            "Che cosa pensa l'autore dei piccoli interventi di Milano?",
            ["Che sono inutili", "Che sono utili perché si possono provare e correggere", "Che costano troppo", "Che andrebbero fatti solo in centro"],
            2,
            "Small, cheap projects \"che si possono provare e, se non funzionano, cambiare\": the most useful lesson, he says.",
          ),
        ],
        "Read the article and choose the right answer.",
      ),
      read(
        2,
        "Leggi la lettera al giornale. Le affermazioni sono vere o false?",
        [
          {
            title: "Telefoni in classe: il divieto non basta",
            body: paras(
              "Caro direttore,",
              "sono un insegnante di matematica in un liceo di Bari e vorrei intervenire nel dibattito sul divieto dei telefoni in classe. Da quest'anno, nella nostra scuola, gli studenti consegnano il cellulare all'ingresso e lo riprendono all'uscita. Confesso che all'inizio ero scettico: mi sembrava una misura più adatta a una scuola media che a ragazzi di diciotto anni.",
              "Dopo tre mesi devo ammettere di essermi sbagliato, almeno in parte. Durante l'intervallo i ragazzi parlano di più tra loro, giocano a carte, discutono. In classe l'attenzione è migliorata, anche se non in modo miracoloso: chi era distratto prima lo è anche adesso, solo in altri modi.",
              "Quello che mi preoccupa è un altro aspetto. Vietare non basta, se nessuno insegna ai ragazzi a usare la tecnologia in modo consapevole. Fuori dalla scuola il telefono resterà al centro della loro vita, e la scuola non può far finta che non esista. Per questo, insieme ad alcuni colleghi, abbiamo proposto un laboratorio settimanale sull'informazione online: come riconoscere una notizia falsa, come proteggere i propri dati, come gestire il tempo davanti allo schermo.",
              "Il divieto, insomma, può essere un punto di partenza, non un punto di arrivo.",
              "Lettera firmata",
            ),
          },
        ],
        [
          vf(6, "Nella scuola dell'autore gli studenti non possono usare il telefono durante l'orario scolastico.", true, "They hand their phones in on arrival and take them back when they leave."),
          vf(7, "Fin dall'inizio l'autore era favorevole al divieto.", false, "\"All'inizio ero scettico\"."),
          vf(8, "Secondo l'autore, durante l'intervallo i ragazzi comunicano di più tra loro.", true, "\"Durante l'intervallo i ragazzi parlano di più tra loro\"."),
          vf(9, "Con il divieto tutti gli studenti sono diventati attenti.", false, "Attention improved \"non in modo miracoloso\": the distracted ones are still distracted."),
          vf(10, "L'autore pensa che la scuola debba insegnare a usare la tecnologia.", true, "\"Vietare non basta, se nessuno insegna ai ragazzi a usare la tecnologia in modo consapevole\"."),
          vf(11, "Per l'autore il divieto è la soluzione definitiva.", false, "\"Un punto di partenza, non un punto di arrivo\"."),
        ],
        "Read the letter to the editor. Are the statements true (\"Vero\") or false (\"Falso\")?",
      ),
      read(
        3,
        "Leggi il testo. Per ogni spazio scegli la frase giusta. Attenzione: ci sono due frasi in più.",
        [
          {
            title: "La moka",
            body: paras(
              "La moka è uno degli oggetti più presenti nelle case italiane. (12) ______ Nacque in Piemonte negli anni Trenta del Novecento e l'idea venne, si racconta, osservando una lavatrice dell'epoca, in cui l'acqua bollente saliva attraverso un tubo.",
              "Il principio è semplice: l'acqua nella parte bassa si scalda, la pressione del vapore la spinge verso l'alto attraverso il caffè macinato, e la bevanda si raccoglie nella parte superiore. (13) ______",
              "Per decenni la moka è stata il simbolo della colazione in famiglia e del caffè offerto agli ospiti. (14) ______ Negli ultimi anni, infatti, le macchine a capsule hanno conquistato molte cucine, perché sono rapide e pulite.",
              "Eppure la moka resiste. (15) ______ C'è chi la preferisce per il sapore, chi per il rito della preparazione, chi per motivi ambientali, visto che non produce rifiuti di plastica o di alluminio.",
            ),
          },
        ],
        [
          match(12, "", MOKA, "B", "After \"uno degli oggetti più presenti nelle case italiane\", the next sentence says almost every family has one."),
          match(13, "", MOKA, "A", "The paragraph explains how it works; the result is the coffee it makes."),
          match(14, "", MOKA, "C", "\"Però\" turns from decades of success to the capsules that follow with \"infatti\"."),
          match(15, "", MOKA, "D", "\"Eppure la moka resiste\" needs evidence: young people buying it again. E is untrue and F contradicts the text."),
        ],
        "Choose the sentence that fits each gap. Two sentences are not needed.",
        "select",
      ),
    ],
    strutture: [
      read(
        1,
        "Leggi il testo e scegli la forma giusta del verbo per ogni spazio.",
        [
          {
            title: "La mia prima conferenza",
            body: "Quando ho cominciato a lavorare come interprete, credevo che il difficile (1) ______ conoscere bene le lingue. Mi sbagliavo. Alla mia prima conferenza il relatore parlava così velocemente che, se non (2) ______ preparato un glossario la sera prima, non sarei riuscita a tradurre neanche la metà. A un certo punto ha raccontato una barzelletta intraducibile. Allora ho detto al pubblico che il relatore (3) ______ appena fatto una battuta e li ho invitati a ridere. Hanno riso tutti, e il relatore, che non (4) ______ di niente, era soddisfattissimo. Da allora, ogni volta che preparo un intervento, mi assicuro che il cliente mi (5) ______ i testi in anticipo. E se qualcuno mi chiede se (6) ______ questo mestiere, rispondo sempre di sì.",
          },
        ],
        [
          gap(1, ["era", "sia", "fosse", "sarebbe"], 3, "\"Credevo che\" (a past belief) takes the imperfect subjunctive: \"fosse\"."),
          gap(2, ["avrei", "avessi", "avevo", "abbia"], 2, "An unreal past condition: \"se non avessi preparato… non sarei riuscita\"."),
          gap(3, ["aveva", "avesse", "ha", "avrebbe"], 1, "Reporting a fact after a past verb (\"ho detto che\"), an earlier action takes the trapassato: \"aveva appena fatto\"."),
          gap(4, ["si accorgesse", "si accorge", "si fosse accorto", "si era accorto"], 4, "A fact in a relative clause, earlier than \"era soddisfattissimo\": indicative trapassato, \"si era accorto\"."),
          gap(5, ["manda", "mandi", "mandasse", "manderà"], 2, "\"Mi assicuro che\" takes the subjunctive; present main verb, present subjunctive: \"mandi\"."),
          gap(6, ["rifacessi", "rifaccia", "rifarei", "rifeci"], 3, "\"Se\" here introduces an indirect question about a hypothetical: \"mi chiede se rifarei\" (would I do it again). \"Se rifacessi\" would be a condition."),
        ],
        "Read the text and choose the right verb form for each gap.",
      ),
      read(
        2,
        "Leggi la lettera e scegli la parola giusta per ogni spazio.",
        [
          {
            title: "Candidatura",
            body: paras(
              "Gentile dottoressa Lombardi,",
              "Le scrivo in (7) ______ al Suo annuncio per il posto di assistente di redazione. Come può vedere dal curriculum (8) ______, ho lavorato per tre anni presso una casa editrice di Torino, (9) ______ mi sono occupata soprattutto della revisione dei testi.",
              "Sarei lieta di poterLe illustrare la mia esperienza più nel dettaglio nel (10) ______ di un colloquio. Resto a Sua (11) ______ per qualsiasi chiarimento.",
              "In attesa di un Suo cortese (12) ______, Le porgo cordiali saluti.\nGiulia Serra",
            ),
          },
        ],
        [
          gap(7, ["risposta", "cambio", "ritorno", "favore"], 1, "\"In risposta a\": in reply to. A set phrase of formal letters."),
          gap(8, ["attaccato", "allegato", "aggiunto", "legato"], 2, "Documents sent with a letter are \"allegati\": \"il curriculum allegato\"."),
          gap(9, ["che", "quale", "cui", "dove"], 4, "A place: \"dove\" (or \"in cui\"). \"Cui\" alone needs a preposition."),
          gap(10, ["corso", "giro", "tempo", "modo"], 1, "\"Nel corso di\": during, in the course of."),
          gap(11, ["posizione", "disposizione", "dispersione", "proposta"], 2, "\"Resto a Sua disposizione\": I remain at your disposal."),
          gap(12, ["ritorno", "incontro", "riscontro", "scontro"], 3, "\"Un cortese riscontro\" is a polite reply in formal Italian."),
        ],
        "Read the cover letter and choose the right word for each gap.",
      ),
      read(
        3,
        "Scegli la parola o l'espressione giusta per completare la frase.",
        [],
        [
          q(13, "Dopo mesi di discussioni, finalmente le due parti hanno ______ un accordo.", ["arrivato", "raggiunto", "toccato", "preso"], 2, "\"Raggiungere un accordo\": to reach an agreement. \"Arrivare\" would need \"a\" and \"essere\"."),
          q(14, "Non preoccuparti, è facilissimo: è un gioco da ______.", ["ragazzi", "bambini", "giovani", "scuola"], 1, "\"Un gioco da ragazzi\" is the idiom for child's play."),
          q(15, "Il governo ha ______ nuove misure per sostenere le famiglie.", ["navigato", "salpato", "approdato", "varato"], 4, "\"Varare\" (literally to launch a ship) is used for passing laws and measures."),
          q(16, "Ha perso il treno e, ______, anche il portafoglio.", ["in compenso", "per giunta", "del resto", "tuttavia"], 2, "\"Per giunta\": on top of that. \"In compenso\" would introduce something good."),
          q(17, "Abbiamo discusso a lungo, ma alla fine mi ha ______ ragione.", ["fatto", "avuto", "dato", "messo"], 3, "\"Dare ragione a qualcuno\": to admit someone is right. \"Avere ragione\" is to be right yourself."),
        ],
        "Choose the right word or expression to complete each sentence.",
      ),
    ],
    scritta: [
      write(
        1,
        "Scrivi un testo argomentativo (da 140 a 180 parole).",
        {
          prompt:
            "Un forum online sulle città italiane propone il tema: «Turismo di massa: risorsa o minaccia per le città d'arte?». Scrivi un intervento in cui presenti vantaggi e svantaggi del turismo di massa ed esprimi la tua opinione, con almeno un esempio concreto.",
          words: [140, 180],
          rubric: [
            "\"Adeguatezza\": a forum post that weighs the benefits and harms of mass tourism, takes a position and gives at least one concrete example",
            "\"Coerenza e coesione\": an introduction, arguments for and against in separate paragraphs, a conclusion, linked with \"da un lato… dall'altro\", \"tuttavia\", \"inoltre\", \"per concludere\"",
            "\"Competenza grammaticale\": the subjunctive after opinion verbs (\"credo che sia\"), the conditional for proposals (\"si dovrebbe\"), the impersonal \"si\"",
            "\"Competenza lessicale\": topic words (\"affitti brevi\", \"residenti\", \"indotto\", \"sovraffollamento\", \"tutela\") and varied argument verbs",
          ],
          modelAnswer: paras(
            "Il turismo è senza dubbio una risorsa per l'Italia: dà lavoro a milioni di persone, sostiene ristoranti, alberghi e botteghe artigiane e permette di finanziare la tutela dei monumenti. Molte piccole città sopravvivono quasi solo grazie ai visitatori.",
            "Tuttavia, quando i turisti diventano troppi, i problemi superano i vantaggi. Lo vedo ogni estate a Firenze, dove abito da cinque anni: nel centro storico i negozi per i residenti sono stati sostituiti da negozi di souvenir, e gli affitti brevi hanno fatto salire i prezzi delle case. Molti fiorentini sono costretti a trasferirsi in periferia, e il centro rischia di diventare un museo senza abitanti.",
            "Credo quindi che il turismo non vada combattuto, ma governato. Si dovrebbero limitare gli affitti brevi nei centri storici, promuovere le mete meno conosciute e distribuire i visitatori durante tutto l'anno. Solo così le città d'arte potranno restare vive anche per chi ci abita.",
          ),
        },
      ),
      write(
        2,
        "Scrivi una lettera formale (da 80 a 100 parole).",
        {
          prompt:
            "Hai trascorso tre notti in un albergo di Napoli, ma ci sono stati diversi problemi: la camera era diversa da quella prenotata, l'aria condizionata non funzionava e la colazione inclusa non è mai stata servita. Scrivi una lettera di reclamo al direttore dell'albergo e chiedi un rimborso parziale.",
          words: [80, 100],
          rubric: [
            "\"Adeguatezza\": a formal complaint to the hotel manager that states the stay, describes the three problems and asks for a partial refund",
            "\"Coerenza e coesione\": \"Gentile Direttore\", the facts in order, the request, a polite but firm closing and \"Distinti saluti\"",
            "\"Competenza grammaticale\": past tenses for the facts, the formal \"Lei\" (\"Le chiedo\", \"La prego\"), the conditional for requests",
            "\"Competenza lessicale\": \"soggiorno\", \"prenotazione\", \"guasto\", \"disagio\", \"rimborso\", \"reclamo\"",
          ],
          modelAnswer:
            "Gentile Direttore, Le scrivo in merito al mio soggiorno presso il Vostro albergo dal 12 al 15 luglio. Purtroppo il servizio non ha corrisposto a quanto previsto dalla prenotazione. Avevo prenotato una camera doppia con vista mare, ma mi è stata assegnata una camera interna. Inoltre l'aria condizionata era guasta e, nonostante le mie richieste, nessuno è intervenuto. Infine, la colazione inclusa nel prezzo non mi è mai stata servita. Per questi motivi Le chiedo un rimborso parziale della somma pagata. In attesa di una Sua risposta, Le porgo distinti saluti. Sarah Collins",
        },
      ),
    ],
    orale: [
      speak(
        1,
        "Conversazione con l'esaminatore sulle lingue e sulle culture.",
        {
          prompt: "Parla del tuo rapporto con le lingue e con la cultura italiana.",
          points: ["Le lingue che parli e come le hai imparate", "Perché studi italiano", "Differenze culturali che hai notato", "Il ruolo delle lingue nel tuo futuro"],
          examinerQuestions: [
            "Quante lingue parli? Come le hai imparate?",
            "Perché hai deciso di studiare l'italiano?",
            "Che cosa ti ha colpito di più della cultura italiana?",
            "Secondo te, è ancora utile imparare le lingue, con i traduttori automatici?",
          ],
          prepMinutes: 0,
          speakMinutes: 5,
          modelAnswer: paras(
            "– Quante lingue parli? Come le hai imparate?",
            "– Oltre al tedesco, che è la mia lingua madre, parlo inglese e spagnolo. L'inglese l'ho studiato a scuola; lo spagnolo invece l'ho imparato vivendo un anno a Valencia con l'Erasmus, che secondo me è il modo migliore.",
            "– Perché hai deciso di studiare l'italiano?",
            "– Un po' per lavoro, perché la mia azienda ha molti clienti nel Nord Italia, e un po' per passione: da anni passo le vacanze in Liguria e volevo finalmente capire quello che la gente mi diceva.",
            "– Che cosa ti ha colpito di più della cultura italiana?",
            "– Il rapporto con il tempo. All'inizio mi irritava che gli appuntamenti fossero così flessibili, poi ho capito che dietro c'è un'altra idea di priorità: una conversazione con un amico conta più dell'orario.",
            "– È ancora utile imparare le lingue?",
            "– Assolutamente sì. Il traduttore ti aiuta a ordinare al ristorante, ma non a fare una battuta o a capire un'ironia. Una lingua è anche un modo di pensare.",
          ),
        },
        DIALOGUE_NOTE,
      ),
      speak(
        2,
        "Leggi il testo. Hai due minuti per prepararti, poi esponi la tua opinione per circa cinque minuti.",
        {
          prompt: "Presenta il tema del testo ed esprimi la tua opinione, con argomenti ed esempi.",
          material: [
            {
              label: "Testo",
              title: "A chilometro zero",
              body: "Sempre più consumatori scelgono prodotti «a chilometro zero», coltivati o prodotti vicino a dove vengono venduti. I sostenitori dicono che sono più freschi, che inquinano meno e che aiutano l'economia locale. I critici rispondono che spesso costano di più, che non sempre sono più sostenibili e che una dieta solo locale sarebbe poco varia. Mangiare locale è davvero la scelta migliore?",
            },
          ],
          points: ["Riassumi il tema del testo", "Gli argomenti a favore", "Gli argomenti contro", "Le tue abitudini e la tua opinione"],
          examinerQuestions: ["Nel tuo paese ci sono mercati di produttori locali?", "Saresti disposto a spendere di più per mangiare locale?", "Che cosa dovrebbero fare i governi, secondo te?"],
          prepMinutes: 2,
          speakMinutes: 5,
          modelAnswer: paras(
            "Il testo parla dei prodotti a chilometro zero, cioè coltivati vicino al luogo in cui si vendono, e presenta due posizioni opposte.",
            "Da un lato, i sostenitori affermano che questi prodotti sono più freschi, inquinano meno perché viaggiano poco e sostengono gli agricoltori della zona. Dall'altro, i critici fanno notare che costano di più e che non sempre sono più sostenibili: per esempio, un pomodoro coltivato d'inverno in una serra riscaldata può consumare più energia di uno trasportato dal Sud.",
            "Personalmente credo che la verità stia nel mezzo. Io il sabato vado al mercato dei produttori del mio quartiere: compro frutta e verdura di stagione, che hanno un sapore molto migliore e non sono nemmeno troppo care. Però non rinuncerei mai al caffè o alle banane, che nel mio paese non si coltivano.",
            "Secondo me il criterio più importante non è tanto la distanza, quanto la stagionalità. Se mangiamo prodotti di stagione e il più possibile locali, facciamo bene all'ambiente senza diventare fanatici.",
          ),
        },
        MONOLOGUE_NOTE,
      ),
    ],
  },
);
