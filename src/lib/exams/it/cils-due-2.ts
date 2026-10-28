// Synced from cheneygross-afk/lengo:src/lib/exams/it/cils-due-2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { AUDIO_NOTE, DIALOGUE_NOTE, MONOLOGUE_NOTE, PHOTO_NOTE, cilsExam, gap, listen, match, paras, q, read, rec, speak, vf, write } from "./text";

// CILS DUE (Upper Intermediate) practice exam 2: health, reading and
// living together. The five sections of the real CILS DUE (B2): a
// hospital notice, a film review between friends, an electronics
// collection and a gym contract, a neurologist on sleep, neighbours on
// solar panels; the reading habits of Italians, the rules of a photo
// competition, headlines and news items; houses for one euro, combined
// pronouns, formal register; an article on the dream job and a formal
// proposal to the town council; a conversation on free time and a photo
// on shopping.
const HEADLINES = [
  "A. Più verde contro il caldo",
  "B. Chiude la biblioteca del centro",
  "C. Più tempo per studiare e leggere",
  "D. Studiare di notte conviene",
  "E. Notti in bianco, voti più bassi",
  "F. Si paga con un gesto",
];

export const CILS_DUE_2: Exam = cilsExam(
  {
    slug: "cils-due-2",
    level: "B2",
    title: "CILS DUE (Upper Intermediate) practice exam 2",
    description:
      "A second full CILS DUE practice exam: a hospital notice, a slow film, an electronics collection, a gym contract, a neurologist on sleep and neighbours arguing over solar panels; how much Italians read, a photo competition and local news; a village selling houses for one euro, combined pronouns and formal register; the dream job and a proposal to the town council; free time and shopping.",
  },
  {
    ascolto: [
      listen(
        1,
        "Ascolta i testi. Per ogni testo scegli la risposta giusta.",
        [
          rec("Testo 1", [
            "Si comunica che, per lavori di ristrutturazione, da lunedì il centro prelievi si trasferisce al piano terra dell'edificio B. Gli orari restano invariati: dalle sette e trenta alle dieci, dal lunedì al sabato. Per gli esami che richiedono il digiuno, si raccomanda di non mangiare nulla dopo la mezzanotte.",
          ]),
          rec("Testo 2", [
            "F: Allora, com'era il film di ieri sera?",
            "M: Mah, la fotografia era splendida e gli attori bravissimi, però la storia mi è sembrata lenta. Due ore e mezza per raccontare quello che si poteva dire in novanta minuti.",
            "F: Quindi non me lo consigli?",
            "M: Te lo consiglio se ti piacciono i paesaggi. Se cerchi una trama avvincente, lascia perdere.",
          ]),
          rec("Testo 3", [
            "Il tuo vecchio telefono non funziona più? Non buttarlo nell'indifferenziata! Questo sabato, nel parcheggio del centro commerciale Le Querce, puoi consegnare gratuitamente piccoli elettrodomestici, telefoni, computer e batterie. Per ogni oggetto consegnato riceverai un buono sconto di cinque euro da spendere nei negozi del centro.",
          ], "m"),
          rec("Testo 4", [
            "M: Buongiorno, vorrei disdire l'abbonamento annuale. Mi trasferisco a Genova per lavoro.",
            "F: Capisco. Il contratto prevede un preavviso di trenta giorni, da comunicare per raccomandata. Però, in caso di trasferimento documentato, può anche sospenderlo e riprenderlo in una nostra palestra a Genova.",
            "M: Ah, avete una sede a Genova? Allora preferisco così.",
          ], "m"),
        ],
        [
          q(1, "Testo 1. Che cosa cambia da lunedì?", ["L'orario dei prelievi", "Il luogo dei prelievi", "Il prezzo degli esami", "Il giorno di chiusura"], 2, "The blood-test centre moves to the ground floor of building B; \"gli orari restano invariati\"."),
          q(
            2,
            "Testo 2. Che cosa pensa l'uomo del film?",
            ["È perfetto in tutto.", "Gli attori non sono bravi.", "È bello da vedere, ma troppo lento.", "È troppo breve."],
            3,
            "Splendid photography and actors, \"però la storia mi è sembrata lenta\".",
          ),
          q(3, "Testo 3. Che cosa si riceve consegnando un oggetto?", ["Un buono sconto di cinque euro", "Cinque euro in contanti", "Un telefono nuovo", "Un biglietto per il parcheggio"], 1, "\"Un buono sconto di cinque euro\": a voucher for the shops, not cash."),
          q(
            4,
            "Testo 4. Che cosa decide di fare l'uomo?",
            ["Disdire l'abbonamento con una raccomandata", "Pagare una penale", "Smettere di fare sport", "Continuare l'abbonamento in una palestra di Genova"],
            4,
            "When he hears they have a gym in Genoa, \"allora preferisco così\": he'll suspend it and carry on there.",
          ),
        ],
        `${AUDIO_NOTE} Four short recordings: choose the right answer for each.`,
      ),
      listen(
        2,
        "Ascolta l'intervista radiofonica. Scegli la risposta giusta.",
        [
          rec("Intervista: dormire bene", [
            "M: Dormiamo poco e male: lo dicono le statistiche e lo confermano gli specialisti. Ne parliamo con la dottoressa Laura Pini, neurologa, esperta di disturbi del sonno. Dottoressa, quanto dovremmo dormire?",
            "F: Un adulto, in media, tra le sette e le nove ore. Ma più della quantità conta la regolarità: andare a letto e alzarsi più o meno alla stessa ora, anche nel fine settimana. Chi la domenica dorme fino a mezzogiorno si crea una specie di jet lag settimanale.",
            "M: Qual è il nemico numero uno del sonno oggi?",
            "F: Gli schermi, senza dubbio. Non tanto per la luce, come si pensava qualche anno fa, quanto per quello che ci fanno fare: una serie dopo l'altra, i messaggi, le notizie. Il cervello resta attivo proprio quando dovrebbe rallentare. Io consiglio di lasciare il telefono fuori dalla camera da letto.",
            "M: E il caffè?",
            "F: Il caffè va benissimo la mattina. Il problema è che la caffeina resta nell'organismo per molte ore: un espresso alle cinque del pomeriggio può ancora disturbare il sonno a mezzanotte.",
            "M: Che cosa fare quando non si riesce a dormire?",
            "F: Non restare a letto a girarsi e rigirarsi. Dopo una ventina di minuti è meglio alzarsi, andare in un'altra stanza con una luce bassa e fare qualcosa di noioso, finché non torna il sonno. E se l'insonnia dura più di tre mesi, bisogna rivolgersi a un medico, non al fai da te.",
          ], "m"),
        ],
        [
          q(5, "Secondo la dottoressa, che cosa conta più delle ore di sonno?", ["La regolarità degli orari", "Il materasso", "La temperatura della stanza", "La cena"], 1, "\"Più della quantità conta la regolarità\"."),
          q(
            6,
            "Che cos'è il «jet lag settimanale»?",
            ["La stanchezza dopo un viaggio", "L'effetto di orari molto diversi nel fine settimana", "Un disturbo dei piloti", "La difficoltà di dormire in aereo"],
            2,
            "Sleeping until noon on Sunday upsets the body clock like a time change, every week.",
          ),
          q(
            7,
            "Perché gli schermi disturbano il sonno, secondo la dottoressa?",
            ["Soprattutto per la luce", "Perché fanno rumore", "Perché tengono attivo il cervello", "Perché sono troppo grandi"],
            3,
            "\"Non tanto per la luce… quanto per quello che ci fanno fare\": the brain stays active.",
          ),
          q(
            8,
            "Che cosa dice del caffè?",
            ["Va evitato sempre.", "Va bene la mattina, ma la caffeina resta in circolo per molte ore.", "Aiuta a dormire.", "Si può bere fino a mezzanotte."],
            2,
            "\"Va benissimo la mattina\", but an espresso at five can still disturb sleep at midnight.",
          ),
          q(
            9,
            "Che cosa consiglia a chi non riesce a dormire?",
            ["Restare a letto al buio", "Prendere un farmaco", "Bere una tisana", "Alzarsi e fare qualcosa di noioso in un'altra stanza"],
            4,
            "After about twenty minutes, get up, go to another room with low light and do something boring.",
          ),
        ],
        `${AUDIO_NOTE} A radio interview: choose the right answer.`,
      ),
      listen(
        3,
        "Ascolta il dialogo tra due vicini di casa. Le affermazioni sono vere o false?",
        [
          rec("Dialogo", [
            "F: Buonasera, signor Gatti. Viene anche Lei all'assemblea di giovedì?",
            "M: Purtroppo no, sono via per lavoro. Ma di che cosa si parla?",
            "F: Dei pannelli solari sul tetto. L'amministratore ha portato tre preventivi; il più economico costa novantamila euro per tutto il palazzo.",
            "M: Novantamila! E chi li paga?",
            "F: Si dividono in base ai millesimi, come le altre spese. Per un appartamento come il Suo sarebbero circa tremila euro, ma una parte si recupera con le detrazioni fiscali, in dieci anni.",
            "M: E il risparmio sulla bolletta?",
            "F: Riguarda solo le parti comuni: l'ascensore, le luci delle scale, il cancello. Però l'amministratore dice che la spesa si ripaga in otto o nove anni.",
            "M: Mah, non sono del tutto convinto. Comunque Le lascio la delega: voti Lei per me, mi fido.",
            "F: Va bene, ma mi dica almeno se è favorevole o contrario.",
            "M: Favorevole, se si sceglie il preventivo più economico.",
          ]),
        ],
        [
          vf(10, "Il signor Gatti parteciperà all'assemblea.", false, "\"Purtroppo no, sono via per lavoro\"."),
          vf(11, "Il preventivo più economico costa novantamila euro.", true, "\"Il più economico costa novantamila euro per tutto il palazzo\"."),
          vf(12, "Le spese saranno divise in parti uguali tra tutti gli appartamenti.", false, "\"In base ai millesimi\": according to each flat's share of the building, not equally."),
          vf(13, "I pannelli faranno risparmiare sulla bolletta di ogni appartamento.", false, "The saving \"riguarda solo le parti comuni\": the lift, the stair lights, the gate."),
          vf(14, "Il signor Gatti dà alla vicina la delega per votare.", true, "\"Le lascio la delega: voti Lei per me\"."),
          vf(15, "Il signor Gatti è favorevole, ma solo al preventivo più economico.", true, "\"Favorevole, se si sceglie il preventivo più economico\"."),
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
            title: "Leggere: una crisi da ripensare",
            body: paras(
              "Ogni anno, quando escono le statistiche sulla lettura, i titoli dei giornali si somigliano: gli italiani leggono poco, meno dei francesi e dei tedeschi, e sempre meno. Più della metà degli adulti, secondo le indagini, non legge neanche un libro all'anno. I dati sono reali, ma raccontano solo una parte della storia.",
              "Le indagini, infatti, misurano soprattutto i libri di carta letti per piacere. Restano fuori, o quasi, gli audiolibri, che negli ultimi anni hanno conquistato chi passa molto tempo in macchina o sui mezzi pubblici, e i lunghi articoli letti sul telefono. Chi ascolta un romanzo mentre va al lavoro, si chiedono alcuni studiosi, non è forse un lettore?",
              "Altri esperti invitano alla prudenza. Leggere su carta e ascoltare non sono esattamente la stessa cosa: chi legge controlla il ritmo, torna indietro, si ferma a riflettere; chi ascolta segue il ritmo della voce, e la mente si distrae più facilmente. E la lettura sullo schermo, spesso interrotta da notifiche e pubblicità, tende a essere più superficiale.",
              "Su un punto, comunque, sono tutti d'accordo: l'abitudine alla lettura nasce in famiglia e a scuola. I bambini che vedono i genitori leggere e che hanno libri in casa diventano più spesso lettori da adulti. Per questo molte biblioteche hanno avviato progetti di lettura ad alta voce già per i neonati: non per insegnare a leggere in anticipo, ma per far nascere il piacere di ascoltare una storia.",
            ),
          },
        ],
        [
          q(
            1,
            "Che cosa dicono di solito i giornali sulla lettura in Italia?",
            ["Che gli italiani leggono sempre di più", "Che gli italiani leggono poco e sempre meno", "Che i francesi leggono meno degli italiani", "Che i dati non sono affidabili"],
            2,
            "The headlines say \"gli italiani leggono poco… e sempre meno\".",
          ),
          q(
            2,
            "Che cosa non misurano bene le indagini, secondo il testo?",
            ["I libri di carta", "I libri per bambini", "Gli audiolibri e gli articoli letti sul telefono", "I libri scolastici"],
            3,
            "\"Restano fuori, o quasi, gli audiolibri… e i lunghi articoli letti sul telefono\".",
          ),
          q(
            3,
            "Secondo alcuni esperti, qual è una differenza tra leggere e ascoltare?",
            ["Chi legge controlla il ritmo, chi ascolta si distrae più facilmente.", "Chi ascolta capisce di più.", "Leggere è più faticoso.", "Ascoltare costa di più."],
            1,
            "\"Chi legge controlla il ritmo… chi ascolta segue il ritmo della voce, e la mente si distrae più facilmente\".",
          ),
          q(4, "Com'è spesso la lettura sullo schermo?", ["Più profonda", "Più lenta", "Più piacevole", "Più superficiale"], 4, "Interrupted by notifications and ads, it \"tende a essere più superficiale\"."),
          q(
            5,
            "Perché alcune biblioteche leggono ad alta voce ai neonati?",
            ["Per insegnare a leggere prima", "Per far nascere il piacere delle storie", "Per aiutare i genitori a riposare", "Per vendere più libri"],
            2,
            "\"Non per insegnare a leggere in anticipo, ma per far nascere il piacere di ascoltare una storia\".",
          ),
        ],
        "Read the article and choose the right answer.",
      ),
      read(
        2,
        "Leggi il regolamento del concorso. Le affermazioni sono vere o false?",
        [
          {
            title: "Concorso fotografico «Acqua in città»",
            body: [
              "1. Il concorso è aperto a tutti i fotografi non professionisti maggiorenni, residenti in Italia o all'estero.",
              "2. Ogni partecipante può presentare al massimo tre fotografie, a colori o in bianco e nero, scattate nell'ultimo anno. Non sono ammesse fotografie già premiate in altri concorsi.",
              "3. Le immagini possono essere ritoccate solo per luminosità, contrasto e colore; non sono ammessi fotomontaggi.",
              "4. La partecipazione è gratuita. Le fotografie devono essere inviate attraverso il sito entro le ore 24 del 30 settembre.",
              "5. Una giuria di fotografi e giornalisti sceglierà i tre vincitori. Al primo classificato andrà un premio di 1.000 euro; le trenta migliori fotografie saranno esposte in una mostra a novembre.",
              "6. Gli autori mantengono i diritti sulle proprie immagini, ma autorizzano gli organizzatori a usarle, citandone il nome, per promuovere il concorso.",
            ].join("\n"),
          },
        ],
        [
          vf(6, "Un fotografo professionista può partecipare.", false, "Only \"fotografi non professionisti maggiorenni\"."),
          vf(7, "Si possono inviare fino a tre fotografie.", true, "\"Al massimo tre fotografie\"."),
          vf(8, "Si può presentare una foto che ha già vinto un altro concorso.", false, "\"Non sono ammesse fotografie già premiate in altri concorsi\"."),
          vf(9, "Si può modificare il contrasto di una foto.", true, "Retouching is allowed \"per luminosità, contrasto e colore\"."),
          vf(10, "Per partecipare bisogna pagare una quota.", false, "\"La partecipazione è gratuita\"."),
          vf(11, "Gli organizzatori possono usare le foto per promuovere il concorso, indicando l'autore.", true, "Authors keep the rights but allow promotional use \"citandone il nome\"."),
        ],
        "Read the competition rules. Are the statements true (\"Vero\") or false (\"Falso\")?",
      ),
      read(
        3,
        "Leggi le notizie. Per ogni notizia scegli il titolo giusto. Attenzione: ci sono due titoli in più.",
        [
          {
            label: "12",
            body: "Dopo tre anni di lavori riapre al pubblico la biblioteca civica. Le sale di lettura, completamente rinnovate, saranno aperte anche la domenica e la sera fino alle 22.",
          },
          {
            label: "13",
            body: "Una ricerca condotta su duemila studenti mostra che chi dorme meno di sei ore prima di un esame ottiene risultati peggiori, anche se ha studiato di più.",
          },
          {
            label: "14",
            body: "Il comune ha deciso di piantare cinquemila alberi entro il prossimo anno, soprattutto nei quartieri periferici, dove le temperature estive sono più alte.",
          },
          {
            label: "15",
            body: "Da gennaio i biglietti dell'autobus si potranno pagare direttamente a bordo, avvicinando la carta di credito o il telefono al lettore. Le macchinette per i biglietti di carta resteranno attive fino a dicembre.",
          },
        ],
        [
          match(12, "Notizia 12", HEADLINES, "C", "The library reopens with longer hours, Sundays and evenings: more time to study and read. B says the opposite."),
          match(13, "Notizia 13", HEADLINES, "E", "\"Notti in bianco\" are sleepless nights; the study links them to worse results. D says the opposite."),
          match(14, "Notizia 14", HEADLINES, "A", "Trees where summers are hottest: more green against the heat."),
          match(15, "Notizia 15", HEADLINES, "F", "Paying by tapping a card or phone: \"con un gesto\"."),
        ],
        "Match each news item to its headline. Two headlines are not needed.",
        "select",
      ),
    ],
    strutture: [
      read(
        1,
        "Leggi il testo e scegli la forma giusta per ogni spazio.",
        [
          {
            title: "Case a un euro",
            body: "Il paese di Roccalta, (1) ______ su una collina a pochi chilometri dal mare, rischiava di spopolarsi: in vent'anni gli abitanti si erano dimezzati. Poi il sindaco ha avuto un'idea: (2) ______ le case abbandonate a un euro, a condizione che i nuovi proprietari le (3) ______ entro tre anni. All'inizio nessuno ci credeva, ma in pochi mesi (4) ______ arrivate centinaia di richieste da tutto il mondo. Oggi in paese vivono famiglie olandesi, americane e argentine. «Se qualcuno me l'(5) ______ cinque anni fa, non ci avrei creduto», racconta il barista. «Finalmente si (6) ______ di nuovo bambini per strada.»",
          },
        ],
        [
          gap(1, ["situando", "situata", "situato", "situi"], 3, "A past participle used as an adjective agrees with \"il paese\": \"situato\"."),
          gap(2, ["vendere", "vendendo", "venduto", "vende"], 1, "After \"un'idea:\" the idea itself is an infinitive: \"vendere le case\"."),
          gap(3, ["ristrutturano", "ristrutturassero", "ristrutturerebbero", "ristrutturino"], 2, "\"A condizione che\" takes the subjunctive; in a past context, the imperfect subjunctive: \"ristrutturassero\"."),
          gap(4, ["hanno", "sono", "sarebbero", "avevano"], 2, "\"Arrivare\" takes \"essere\": \"sono arrivate centinaia di richieste\", agreeing with \"richieste\"."),
          gap(5, ["avrebbe detto", "aveva detto", "dicesse", "avesse detto"], 4, "An unreal past condition: \"se qualcuno me l'avesse detto\" + \"non ci avrei creduto\"."),
          gap(6, ["vedono", "vede", "vedano", "vedesse"], 1, "With the passive \"si\", the verb agrees with the plural noun: \"si vedono bambini\"."),
        ],
        "Read the text and choose the right form for each gap.",
      ),
      read(
        2,
        "Leggi il testo e scegli i pronomi giusti per ogni spazio.",
        [
          {
            title: "Il libro di cucina",
            body: "Ieri Marta mi ha chiesto in prestito il mio libro di cucina. «Certo, (7) ______ porto domani», le ho detto, «ma devi restituir(8) ______ entro sabato, perché devo preparare una cena.» Lei (9) ______ ha ringraziato ed è andata via contenta. Stamattina però (10) ______ ha mandato un messaggio: «Ho rovesciato il caffè sul tuo libro! (11) ______ compro uno nuovo, promesso.» Le ho risposto di non preoccupar(12) ______: in fondo è solo un libro.",
          },
        ],
        [
          gap(7, ["ti lo", "te la", "glielo", "te lo"], 4, "'It to you': \"ti\" + \"lo\" becomes \"te lo\". \"Glielo\" would be to him or her."),
          gap(8, ["melo", "mela", "mi", "glielo"], 1, "Pronouns join the infinitive: \"restituirmelo\", give it back to me (\"il libro\", masculine)."),
          gap(9, ["ci", "mi", "me", "la"], 2, "\"Ringraziare\" takes a direct object: \"mi ha ringraziato\", she thanked me."),
          gap(10, ["le", "gli", "mi", "me"], 3, "'Sent me': \"mi ha mandato\"."),
          gap(11, ["Te ne", "Te lo", "Ti ne", "Te la"], 1, "\"Ne\" stands for 'one of them' with \"uno nuovo\", and \"ti\" + \"ne\" becomes \"te ne\"."),
          gap(12, ["ti", "ne", "si", "ci"], 3, "The one not to worry is Marta, so the reflexive is third person: \"di non preoccuparsi\"."),
        ],
        "Read the text and choose the right pronouns for each gap.",
      ),
      read(
        3,
        "Per ogni frase informale scegli la versione adatta a un'email formale.",
        [],
        [
          q(
            13,
            "«Ti ricordo che domani c'è la riunione.»",
            ["Ti ricordo che domani c'è la riunione, ok?", "Ricordati della riunione di domani!", "Le ricordo che domani si terrà la riunione.", "Domani riunione, non dimenticare."],
            3,
            "The formal \"Le ricordo\" (Lei) and \"si terrà\", the formal verb for meetings taking place.",
          ),
          q(14, "«Scusa il ritardo.»", ["Scusa per il ritardo, eh.", "Mi scuso per il ritardo.", "Scusami tanto!", "Scusa scusa!"], 2, "\"Mi scuso per\" is the neutral-formal way to apologise in writing."),
          q(15, "«Fammi sapere.»", ["Fammelo sapere presto.", "Dimmi qualcosa.", "Resto in attesa di un Suo riscontro.", "Fammi un fischio."], 3, "\"Resto in attesa di un Suo riscontro\" closes a formal e-mail; the others use \"tu\" and are informal."),
          q(16, "«Ho avuto un sacco di problemi.»", ["Ho avuto un casino di problemi.", "Ho avuto un mucchio di guai.", "Ne ho passate di tutti i colori.", "Ho incontrato numerose difficoltà."], 4, "\"Numerose difficoltà\" is the formal version; \"un sacco\", \"un casino\" and \"un mucchio\" are colloquial."),
          q(17, "«Ci vediamo giovedì per parlarne.»", ["Potremmo incontrarci giovedì per discuterne.", "Ci becchiamo giovedì.", "Giovedì ne parliamo, va'.", "Vediamoci giovedì, dai."], 1, "The conditional \"potremmo\" softens the proposal, and \"discuterne\" is more formal than \"parlarne\"."),
        ],
        "Choose the version of each informal sentence that fits a formal e-mail.",
      ),
    ],
    scritta: [
      write(
        1,
        "Scrivi un articolo (da 140 a 180 parole).",
        {
          prompt:
            "Una rivista online per giovani lancia il dibattito «Il lavoro dei sogni: meglio la passione o la stabilità?». Scrivi un articolo in cui confronti le due scelte, racconti un'esperienza tua o di una persona che conosci ed esprimi la tua opinione.",
          words: [140, 180],
          rubric: [
            "\"Adeguatezza\": an article for young readers that compares passion and security, includes a personal example and states an opinion",
            "\"Coerenza e coesione\": a title, an opening question or image, both sides, the example, a conclusion, linked with \"se da una parte… dall'altra\", \"eppure\", \"insomma\"",
            "\"Competenza grammaticale\": the subjunctive after \"credo che\" and \"è importante che\", hypotheses with \"se\", past tenses in the example",
            "\"Competenza lessicale\": \"precarietà\", \"posto fisso\", \"realizzarsi\", \"gratificazione\", \"rischio\", \"mettersi in gioco\"",
          ],
          modelAnswer: paras(
            "Passione o posto fisso?",
            "Per la generazione dei nostri genitori la risposta era semplice: prima il posto fisso, poi, se avanzava tempo, le passioni. Oggi molti giovani la pensano diversamente e preferiscono un lavoro che li faccia sentire realizzati, anche a costo di guadagnare meno.",
            "Se da una parte la stabilità permette di fare progetti, come comprare una casa o avere figli, dall'altra un lavoro che non ci piace può diventare una prigione. Mio cugino, per esempio, ha lasciato un impiego sicuro in banca per aprire un piccolo laboratorio di ceramica. I primi due anni sono stati durissimi; eppure oggi dice di non essere mai stato così felice, e il laboratorio comincia ad andare bene.",
            "Credo però che non sia giusto trasformare la passione in un obbligo. Non tutti possono permettersi di rischiare, ed è importante che chi sceglie la sicurezza non si senta un fallito. Insomma, la scelta migliore è quella fatta con consapevolezza.",
          ),
        },
      ),
      write(
        2,
        "Scrivi un'email formale (da 80 a 100 parole).",
        {
          prompt:
            "Vicino alla stazione della tua città ci sono pochissimi posti per lasciare la bicicletta, e molti ciclisti la legano ai pali o alle ringhiere. Scrivi un'email all'assessore alla mobilità del Comune: descrivi il problema, proponi una soluzione e chiedi un incontro.",
          words: [80, 100],
          rubric: [
            "\"Adeguatezza\": a formal e-mail to the councillor that describes the problem, proposes a solution and asks for a meeting",
            "\"Coerenza e coesione\": \"Gentile Assessore\", who you are, the problem, the proposal, the request and \"Distinti saluti\"",
            "\"Competenza grammaticale\": formal \"Lei\" throughout, the conditional for proposals (\"si potrebbe\", \"sarebbe utile\"), the subjunctive after \"credo che\"",
            "\"Competenza lessicale\": \"rastrelliere\", \"parcheggio custodito\", \"pendolari\", \"marciapiede\", \"proposta\"",
          ],
          modelAnswer:
            "Gentile Assessore, Le scrivo a nome di un gruppo di pendolari che ogni giorno raggiungono la stazione in bicicletta. Le rastrelliere disponibili sono soltanto venti e la mattina sono già occupate alle sette; molti di noi sono quindi costretti a legare la bici ai pali o alle ringhiere, ostacolando il passaggio sui marciapiedi. Credo che sarebbe utile installare nuove rastrelliere nel piazzale laterale, oggi poco usato, e valutare un piccolo parcheggio custodito. Saremmo lieti di illustrarLe la nostra proposta in un breve incontro. Distinti saluti, Thomas Klein",
        },
      ),
    ],
    orale: [
      speak(
        1,
        "Conversazione con l'esaminatore sul tempo libero e sulla cultura.",
        {
          prompt: "Parla di come passi il tempo libero e del tuo rapporto con libri, film e musica.",
          points: ["Che cosa fai nel tempo libero", "Un libro, un film o una serie che ti ha colpito", "Come scegli che cosa leggere o guardare", "Cultura dal vivo o a casa"],
          examinerQuestions: [
            "Come passi di solito il tempo libero?",
            "C'è un libro o un film che ti ha colpito particolarmente? Perché?",
            "Come scegli che cosa leggere o guardare?",
            "Preferisci andare a teatro o al cinema, o guardare tutto a casa?",
          ],
          prepMinutes: 0,
          speakMinutes: 5,
          modelAnswer: paras(
            "– Come passi di solito il tempo libero?",
            "– Dipende dalla stagione. D'estate sto il più possibile all'aria aperta, in bicicletta o in montagna; d'inverno leggo molto e vado spesso al cinema con mio marito.",
            "– C'è un libro o un film che ti ha colpito particolarmente?",
            "– Sì, un romanzo che ho letto l'anno scorso, la storia di una famiglia di pescatori in un'isola del Sud. Mi ha colpito perché racconta un mondo che sta scomparendo senza nostalgia, con molta ironia. L'ho letto in italiano, con il dizionario accanto, ed è stata una bella soddisfazione.",
            "– Come scegli che cosa leggere o guardare?",
            "– Mi fido dei consigli degli amici più che delle recensioni. E ascolto un paio di podcast di libri.",
            "– Preferisci il cinema o guardare tutto a casa?",
            "– Il cinema, senza dubbio. A casa mi distraggo, guardo il telefono; in sala invece mi lascio prendere dalla storia. E poi mi piace commentare il film all'uscita, magari davanti a un gelato.",
          ),
        },
        DIALOGUE_NOTE,
      ),
      speak(
        2,
        "Guarda la foto e leggi la domanda. Hai due minuti per prepararti, poi parla per circa cinque minuti.",
        {
          prompt: "Descrivi la foto e rispondi alla domanda, con argomenti ed esempi.",
          material: [
            {
              label: "Foto",
              title: "Il primo giorno dei saldi",
              body: "Immagine: una lunga fila di persone davanti a un negozio di abbigliamento, alle nove di mattina, nel primo giorno dei saldi. Molti hanno già in mano diverse buste. Domanda: compriamo troppo? Che cosa si può fare per consumare in modo più responsabile?",
            },
          ],
          points: ["Che cosa mostra la foto", "Perché compriamo così tanto", "Le conseguenze per l'ambiente", "Che cosa fai tu e che cosa si potrebbe fare"],
          examinerQuestions: ["Ti è mai capitato di fare la fila per i saldi?", "Compri mai vestiti di seconda mano?", "Di chi è la responsabilità: dei consumatori o delle aziende?"],
          prepMinutes: 2,
          speakMinutes: 5,
          modelAnswer: paras(
            "La foto mostra una lunga fila davanti a un negozio di abbigliamento, la mattina presto, il primo giorno dei saldi. Molte persone hanno già diverse buste in mano, quindi probabilmente sono passate anche da altri negozi.",
            "Secondo me sì, compriamo troppo, soprattutto vestiti. I prezzi sono così bassi che comprare una maglietta non sembra una decisione: è quasi un gesto automatico. E i saldi creano un senso di urgenza, come se un'occasione persa non tornasse più.",
            "Il problema è che la produzione di abiti consuma moltissima acqua ed energia, e molti capi vengono buttati dopo pochi mesi. Io stessa, qualche anno fa, ho svuotato l'armadio e ho trovato vestiti che non avevo mai messo.",
            "Da allora cerco di seguire una regola semplice: prima di comprare qualcosa, aspetto una settimana. Se dopo sette giorni lo voglio ancora, lo compro. E spesso vado nei negozi dell'usato. Credo che anche le aziende debbano fare la loro parte, ma il cambiamento comincia da scelte piccole come queste.",
          ),
        },
        `${PHOTO_NOTE} ${MONOLOGUE_NOTE}`,
      ),
    ],
  },
);
