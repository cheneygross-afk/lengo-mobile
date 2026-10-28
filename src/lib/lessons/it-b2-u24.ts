// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u24.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Upper Intermediate (B2) Unit 24: Law and Rights. Contracts,
// fines and appeals, consumer rights and rights at work; review in context
// of the passive, andare + participle, qualora / nel caso in cui and
// impersonal language.
// Conventions: docs/italian-course/authoring.md.
export const IT_B2_U24: Lesson[] = [
  {
    slug: "b2-everyday-legal-language",
    level: "IT-B2",
    number: 1,
    title: "Everyday Legal Language",
    summary: "Read and talk about contracts: parties, clauses, signatures, deadlines, renewal and withdrawal.",
    duration: "17 min",
    sections: [
      {
        heading: "The contract and its parties",
        body: [
          "\"Il contratto\" is made between \"le parti\" (the parties) and is \"firmato\" or, in formal language, \"sottoscritto\" (signed). It is divided into \"clausole\" (clauses) and \"articoli\". In a rental contract \"il locatore\" is the landlord and \"il conduttore\" the tenant, though in conversation everyone says \"il proprietario\" and \"l'inquilino\".",
          "Contracts love the passive and \"andare\" + participle for obligations: \"il canone va pagato entro il giorno 5 di ogni mese\" (the rent must be paid by the 5th). \"Essere tenuto a\" + infinitive (to be obliged to) is the other key phrase: \"il conduttore è tenuto a comunicare eventuali guasti\". \"Entro\" means by, no later than; \"entro e non oltre\" makes it absolute.",
          "Signing has its own vocabulary: \"apporre la firma\" (to put your signature), \"in calce\" (at the foot of the page), \"la sigla\" (initials on each page). \"Il sottoscritto\" (the undersigned) opens many forms and declarations, followed by a third-person verb: \"il sottoscritto dichiara\".",
        ],
        examples: [
          { es: "Il contratto è stato firmato da entrambe le parti.", en: "The contract was signed by both parties." },
          { es: "Il canone va pagato entro il giorno 5 di ogni mese.", en: "The rent must be paid by the 5th of each month." },
          { es: "L'inquilino è tenuto a comunicare eventuali guasti.", en: "The tenant must report any faults." },
          { es: "Leggi bene tutte le clausole prima di firmare.", en: "Read all the clauses carefully before you sign." },
          { es: "La domanda va presentata entro e non oltre il 30 aprile.", en: "The application must be submitted no later than 30 April." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in contract style.", source: "The rent must be paid by the 5th of each month.", answer: "Il canone va pagato entro il giorno 5 di ogni mese.", altAnswers: ["Il canone deve essere pagato entro il giorno 5 di ogni mese.", "L'affitto va pagato entro il 5 di ogni mese.", "Il canone va pagato entro il 5 di ogni mese."], explanation: "\"Andare\" + participle = must be; \"entro\" = by." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The contract was signed by both parties.", answer: "Il contratto è stato firmato da entrambe le parti.", altAnswers: ["Il contratto è stato sottoscritto da entrambe le parti.", "Il contratto è stato firmato da tutte e due le parti."], explanation: "\"Entrambe\" agrees with \"le parti\" (feminine)." },
          { type: "multiple-choice", question: "In a rental contract, who is \"il conduttore\"?", options: ["the tenant", "the landlord", "the estate agent", "the driver"], correctIndex: 0, explanation: "Legal terms: \"locatore\" = landlord, \"conduttore\" = tenant." },
        ],
      },
      {
        heading: "Deadlines, renewal and notice",
        body: [
          "\"La scadenza\" is the expiry date or deadline; the verb is \"scadere\" and takes \"essere\": \"il contratto è scaduto\", \"la carta d'identità scade a maggio\". At the end, a contract \"si rinnova\" (is renewed) automatically unless one party sends \"la disdetta\" (notice of termination) with \"il preavviso\" (period of notice) required.",
          "\"Il recesso\" is the right to withdraw from a contract before it ends: \"recedere dal contratto\". \"La caparra\" or \"il deposito cauzionale\" is the deposit, returned at the end if there's no damage.",
          "Watch the false friends: \"il deposito\" alone can be a warehouse or storage; \"l'affitto\" is the rent (and renting), \"il canone\" the formal word for a periodic payment, including the TV licence fee (\"il canone RAI\").",
        ],
        examples: [
          { es: "Il contratto scade il 31 dicembre.", en: "The contract expires on 31 December." },
          { es: "La mia carta d'identità è scaduta.", en: "My identity card has expired." },
          { es: "Il contratto si rinnova automaticamente ogni anno.", en: "The contract renews automatically every year." },
          { es: "Bisogna mandare la disdetta con sei mesi di preavviso.", en: "You have to give six months' notice." },
          { es: "Il proprietario non mi ha ancora restituito la caparra.", en: "The landlord still hasn't returned my deposit." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My identity card has expired.", answer: "La mia carta d'identità è scaduta.", altAnswers: ["Mi è scaduta la carta d'identità."], explanation: "\"Scadere\" takes \"essere\": \"è scaduta\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You have to give [six months' notice].", sentence: "Bisogna mandare la disdetta con ___.", answer: "sei mesi di preavviso", explanation: "\"Il preavviso\" = period of notice." },
          { type: "listen-choose", audio: "Il proprietario non mi ha ancora restituito la caparra.", question: "What's the problem?", options: ["The landlord hasn't returned the deposit.", "The tenant hasn't paid the deposit.", "The landlord wants a bigger deposit.", "The contract has no deposit."], correctIndex: 0, explanation: "\"Restituire la caparra\" = return the deposit." },
        ],
      },
      {
        heading: "Conditions and exceptions",
        body: [
          "Contracts foresee problems with \"qualora\" and \"nel caso in cui\" + subjunctive: \"qualora il conduttore non paghi\", \"nel caso in cui si verifichino danni\" (if damage occurs). \"Salvo\" means unless or except: \"salvo diverso accordo tra le parti\" (unless otherwise agreed), \"salvo disdetta\".",
          "\"Ai sensi di\" (under, pursuant to) cites the law: \"ai sensi dell'articolo 5\". Impersonal formulas address the reader without naming them: \"si fa presente che\" (please note that), \"si ricorda che\".",
          "Legal Italian prefers long sentences built on participles and nouns: \"in caso di mancato pagamento\" (in the event of non-payment), \"a seguito della disdetta\". Read them slowly, finding the main verb first.",
        ],
        examples: [
          { es: "Qualora il conduttore non paghi, il contratto si intende risolto.", en: "Should the tenant fail to pay, the contract is considered terminated." },
          { es: "Nel caso in cui si verifichino danni, la caparra non verrà restituita.", en: "If any damage occurs, the deposit will not be returned." },
          { es: "Salvo diverso accordo tra le parti, le spese sono a carico dell'inquilino.", en: "Unless otherwise agreed, expenses are borne by the tenant." },
          { es: "Ai sensi dell'articolo 5, il recesso va comunicato per iscritto.", en: "Under article 5, withdrawal must be notified in writing." },
          { es: "Si fa presente che il pagamento in contanti non è ammesso.", en: "Please note that cash payment is not accepted." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in contract style.", source: "Should the tenant fail to pay, the contract is terminated.", answer: "Qualora il conduttore non paghi, il contratto si intende risolto.", altAnswers: ["Qualora l'inquilino non paghi, il contratto si intende risolto.", "Nel caso in cui il conduttore non paghi, il contratto si intende risolto.", "Qualora il conduttore non paghi, il contratto è risolto."], explanation: "\"Qualora\" + present subjunctive \"paghi\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Unless otherwise agreed], expenses are borne by the tenant.", sentence: "___, le spese sono a carico dell'inquilino.", answer: "Salvo diverso accordo", altAnswers: ["Salvo diverso accordo tra le parti", "Salvo accordi diversi"], explanation: "\"Salvo\" = unless, except." },
          { type: "speak", text: "Ai sensi dell'articolo 5, il recesso va comunicato per iscritto.", prompt: "Read the clause aloud: Under article 5, withdrawal must be notified in writing.", tip: "re-CES-so: double s.", explanation: "\"Andare\" + participle; \"per iscritto\" = in writing." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Read all the clauses before you sign. (to a friend)", answer: "Leggi tutte le clausole prima di firmare.", altAnswers: ["Leggi bene tutte le clausole prima di firmare.", "Leggi tutte le clausole prima di firmarlo."], explanation: "\"Prima di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The contract expires on 31 December.", answer: "Il contratto scade il 31 dicembre.", explanation: "\"Scadere\"; months lower case." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tenant must report any faults.", answer: "L'inquilino è tenuto a comunicare eventuali guasti.", altAnswers: ["Il conduttore è tenuto a comunicare eventuali guasti.", "L'inquilino deve comunicare eventuali guasti.", "L'inquilino è tenuto a segnalare eventuali guasti."], explanation: "\"Essere tenuto a\" = to be obliged to; \"eventuali\" = any." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The contract renews automatically.", answer: "Il contratto si rinnova automaticamente.", altAnswers: ["Il contratto viene rinnovato automaticamente.", "Il contratto si rinnova in automatico."], explanation: "\"Rinnovarsi\" = to be renewed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Please note that cash payment is not accepted.", answer: "Si fa presente che il pagamento in contanti non è ammesso.", altAnswers: ["Si fa presente che non è ammesso il pagamento in contanti.", "Si ricorda che il pagamento in contanti non è ammesso.", "Si fa presente che il pagamento in contanti non è accettato."], explanation: "\"Si fa presente che\" = please note that." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The landlord still hasn't returned my deposit.", answer: "Il proprietario non mi ha ancora restituito la caparra.", altAnswers: ["Il proprietario non mi ha ancora restituito il deposito.", "Il proprietario non mi ha ancora ridato la caparra."], explanation: "\"Non ... ancora\" = still not." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If damage [occurs], the deposit will not be returned.", sentence: "Nel caso in cui ___ danni, la caparra non verrà restituita.", answer: "si verifichino", explanation: "\"Nel caso in cui\" + subjunctive; \"verificarsi\" = to occur." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The application must be submitted [no later than] 30 April.", sentence: "La domanda va presentata ___ il 30 aprile.", answer: "entro e non oltre", altAnswers: ["entro"], explanation: "\"Entro e non oltre\" = no later than." },
      { type: "word-order", prompt: "Put the words in order to say: Withdrawal must be notified in writing.", words: ["Il recesso", "va", "comunicato", "per", "iscritto."], translation: "Withdrawal must be notified in writing.", explanation: "\"Va comunicato\" = must be notified." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "la clausola", right: "clause" }, { left: "la scadenza", right: "expiry date, deadline" }, { left: "la disdetta", right: "notice of termination" }, { left: "il recesso", right: "withdrawal" }, { left: "la caparra", right: "deposit" }], explanation: "Core contract vocabulary." },
      { type: "dictation", audio: "Il contratto si rinnova automaticamente, salvo disdetta.", explanation: "\"Salvo disdetta\" = unless notice is given." },
      { type: "speak", text: "Prima di firmare il contratto, vorrei leggere bene tutte le clausole.", prompt: "Tell the agent: Before signing the contract, I'd like to read all the clauses carefully.", tip: "CLAU-so-le: stress on clau.", explanation: "\"Prima di\" + infinitive; \"vorrei\" for politeness." },
    ],
  },
  {
    slug: "b2-fines-and-appeals",
    level: "IT-B2",
    number: 2,
    title: "Fines and Appeals",
    summary: "Understand a traffic fine, its deadlines and discounts, and how to appeal to the prefetto or the giudice di pace.",
    duration: "17 min",
    sections: [
      {
        heading: "The fine",
        body: [
          "\"La multa\" (officially \"la sanzione\") arrives as \"un verbale\" (an official report) from \"la polizia locale\" (also still called \"i vigili\"). Classic causes: \"l'eccesso di velocità\" caught by \"l'autovelox\" (speed camera), entering \"la ZTL\" (zona a traffico limitato, the restricted traffic zone of historic centres) without a permit, \"il divieto di sosta\" (no-parking zone).",
          "Driving fines can also cost points: \"la decurtazione dei punti della patente\". \"Prendere una multa\" is the everyday phrase; formally, a driver \"viene sanzionato\" (is fined). \"Per\" + past infinitive gives the reason: \"è stato multato per aver superato il limite\".",
          "Officers who stop you use set phrases: \"patente e libretto, prego\" (licence and registration, please). \"Il libretto di circolazione\" is the car's registration document, and \"l'assicurazione\" its insurance.",
        ],
        examples: [
          { es: "Ho preso una multa per eccesso di velocità.", en: "I got a speeding fine." },
          { es: "Mi è arrivato un verbale per un accesso alla ZTL.", en: "I've received a ticket for entering the restricted traffic zone." },
          { es: "È stato multato per aver superato il limite di 20 chilometri orari.", en: "He was fined for going 20 km/h over the limit." },
          { es: "Ho parcheggiato in divieto di sosta e mi hanno fatto la multa.", en: "I parked in a no-parking zone and got a ticket." },
          { es: "Oltre alla multa, mi hanno tolto tre punti dalla patente.", en: "On top of the fine, I lost three points on my licence." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I got a speeding fine.", answer: "Ho preso una multa per eccesso di velocità.", altAnswers: ["Mi hanno fatto una multa per eccesso di velocità.", "Ho preso una multa per eccesso di velocità!"], explanation: "\"Prendere una multa per\" + cause." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He was fined for exceeding the limit.", answer: "È stato multato per aver superato il limite.", altAnswers: ["È stato multato per avere superato il limite.", "È stato sanzionato per aver superato il limite."], explanation: "\"Per\" + past infinitive for the reason." },
          { type: "multiple-choice", question: "What is \"la ZTL\"?", options: ["a restricted traffic zone in a city centre", "a toll motorway", "a speed camera", "a car park"], correctIndex: 0, explanation: "\"Zona a traffico limitato\": only permit holders may drive in." },
        ],
      },
      {
        heading: "Paying: deadlines and discounts",
        body: [
          "The fine is notified (\"notificato\") by post if you weren't stopped on the spot. You pay \"entro 60 giorni\" from notification; if you pay \"entro 5 giorni\", you get a 30 per cent discount (\"lo sconto del 30 per cento\"). Pay late and the amount rises.",
          "The key verbs: \"notificare\" (to serve officially), \"pagare in misura ridotta\" (pay the reduced amount), \"la ricevuta\" (receipt). \"Dalla notifica\" means from the date of notification: count the days carefully.",
          "Most fines are now paid through \"pagoPA\", the public payment system, at a bank, post office or tobacconist's, or online with the code printed on the ticket. Keep proof: \"conservare la ricevuta\" is advice you'll hear from everyone.",
        ],
        examples: [
          { es: "La multa va pagata entro 60 giorni dalla notifica.", en: "The fine must be paid within 60 days of notification." },
          { es: "Se paghi entro cinque giorni, hai lo sconto del 30 per cento.", en: "If you pay within five days, you get a 30 per cent discount." },
          { es: "Il verbale mi è stato notificato a casa la settimana scorsa.", en: "The ticket was served at my home last week." },
          { es: "Conserva la ricevuta del pagamento.", en: "Keep the payment receipt." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The fine must be paid within 60 days.", answer: "La multa va pagata entro 60 giorni.", altAnswers: ["La multa deve essere pagata entro 60 giorni.", "La multa va pagata entro sessanta giorni.", "La multa deve essere pagata entro sessanta giorni."], explanation: "\"Andare\" + participle; \"entro\" = within." },
          { type: "listen-choose", audio: "Se paghi entro cinque giorni, hai lo sconto del 30 per cento.", question: "What's the advantage of paying quickly?", options: ["a 30% discount", "no points lost", "a 5% discount", "no advantage"], correctIndex: 0, explanation: "\"Lo sconto del 30 per cento\" within five days." },
        ],
      },
      {
        heading: "Appealing",
        body: [
          "If you think the fine is wrong, you \"fai ricorso\" (appeal), not \"appello\". There are two routes: \"il ricorso al Prefetto\", within 60 days, free, in writing; or \"il ricorso al giudice di pace\" (justice of the peace, a local judge for minor cases), within 30 days, with a fee. While you appeal you don't pay, but if you lose you may pay more.",
          "Appeals argue with formal causal connectors: \"poiché\", \"dal momento che\", \"in quanto\" (since, inasmuch as). The request: \"chiedo l'annullamento del verbale\" (I request that the ticket be cancelled). \"Il ricorso è stato accolto\" (accepted) or \"respinto\" (rejected).",
        ],
        examples: [
          { es: "Ho deciso di fare ricorso al giudice di pace.", en: "I've decided to appeal to the justice of the peace." },
          { es: "Il ricorso al Prefetto va presentato entro 60 giorni.", en: "An appeal to the Prefect must be lodged within 60 days." },
          { es: "Chiedo l'annullamento del verbale, in quanto l'auto era stata venduta.", en: "I request the cancellation of the ticket, since the car had been sold." },
          { es: "Il mio ricorso è stato accolto.", en: "My appeal was upheld." },
          { es: "Se il ricorso viene respinto, la multa può raddoppiare.", en: "If the appeal is rejected, the fine can double." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've decided to appeal to the justice of the peace.", answer: "Ho deciso di fare ricorso al giudice di pace.", altAnswers: ["Ho deciso di presentare ricorso al giudice di pace."], explanation: "\"Fare ricorso\", never \"fare appello\" for a fine." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My appeal [was upheld].", sentence: "Il mio ricorso ___.", answer: "è stato accolto", explanation: "\"Accogliere\" → \"accolto\" = accepted, upheld." },
          { type: "speak", text: "Chiedo l'annullamento del verbale, in quanto l'auto era stata venduta.", prompt: "State your request: I request that the ticket be cancelled, since the car had been sold.", tip: "an-nul-la-MEN-to: two double consonants.", explanation: "\"In quanto\" = since, formal; pluperfect passive for the earlier event." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I parked in a no-parking zone.", answer: "Ho parcheggiato in divieto di sosta.", explanation: "\"In divieto di sosta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've received a ticket for the restricted traffic zone.", answer: "Mi è arrivato un verbale per la ZTL.", altAnswers: ["Ho ricevuto un verbale per la ZTL.", "Mi è arrivata una multa per la ZTL.", "Ho ricevuto una multa per la ZTL."], explanation: "\"Arrivare\" with an indirect pronoun: \"mi è arrivato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you pay within five days, you get a discount. (to a friend)", answer: "Se paghi entro cinque giorni, hai lo sconto.", altAnswers: ["Se paghi entro cinque giorni hai uno sconto.", "Se paghi entro cinque giorni, ti fanno lo sconto."], explanation: "Real condition: present + present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The appeal was rejected.", answer: "Il ricorso è stato respinto.", altAnswers: ["Il ricorso è stato rigettato.", "Il ricorso fu respinto."], explanation: "\"Respingere\" → \"respinto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On top of the fine, I lost three points.", answer: "Oltre alla multa, ho perso tre punti.", altAnswers: ["Oltre alla multa, mi hanno tolto tre punti.", "Oltre alla multa ho perso tre punti della patente."], explanation: "\"Oltre a\" = on top of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ticket was served last week.", answer: "Il verbale è stato notificato la settimana scorsa.", altAnswers: ["Il verbale mi è stato notificato la settimana scorsa.", "La multa è stata notificata la settimana scorsa."], explanation: "\"Notificare\" = to serve officially." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I want to [appeal] against the fine.", sentence: "Voglio ___ contro la multa.", answer: "fare ricorso", altAnswers: ["presentare ricorso"], explanation: "\"Fare ricorso\" = to appeal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He was fined [for running] a red light.", sentence: "È stato multato ___ con il rosso.", answer: "per essere passato", altAnswers: ["per esser passato"], explanation: "\"Per\" + past infinitive; \"passare\" takes \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: An appeal to the Prefect must be lodged within 60 days.", words: ["Il ricorso", "al Prefetto", "va presentato", "entro", "60 giorni."], translation: "An appeal to the Prefect must be lodged within 60 days.", explanation: "\"Va presentato\" = must be lodged." },
      { type: "multiple-choice", question: "You want to contest a fine. What do you say?", options: ["Voglio fare ricorso.", "Voglio fare appello.", "Voglio fare un reclamo al giudice di multa.", "Voglio chiamare il mio avvocato di multa."], correctIndex: 0, explanation: "\"Fare ricorso\" is the term for contesting a fine." },
      { type: "dictation", audio: "Il mio ricorso al giudice di pace è stato accolto.", explanation: "\"Accolto\" = upheld." },
      { type: "speak", text: "Mi è arrivata una multa per la ZTL, ma ho il permesso: faccio ricorso.", prompt: "Tell a friend: I got a fine for the restricted zone, but I have a permit: I'm appealing.", tip: "ZTL: said zeta-ti-elle.", explanation: "\"Mi è arrivata\" agrees with \"una multa\"." },
    ],
  },
  {
    slug: "b2-consumer-rights",
    level: "IT-B2",
    number: 3,
    title: "Consumer Rights",
    summary: "Know your rights when you buy: the two-year guarantee, the 14-day withdrawal right online, returns and refunds.",
    duration: "17 min",
    sections: [
      {
        heading: "The guarantee",
        body: [
          "Under Italian and EU law every new product has \"la garanzia legale di conformità\" for two years from delivery: if it's faulty (\"difettoso\", \"guasto\"), the seller must \"riparare\" or \"sostituire\" it (repair or replace), and if that's impossible, give \"una riduzione del prezzo\" or \"il rimborso\" (refund). The responsibility is the seller's: the shop can't just send you to the manufacturer.",
          "\"La garanzia convenzionale\" is an extra guarantee offered by the manufacturer. Keep \"lo scontrino\" (the receipt) or \"la fattura\" (invoice): it's your \"prova d'acquisto\" (proof of purchase).",
          "Describe the fault precisely: \"non si accende\" (it won't switch on), \"si spegne da solo\" (it switches itself off), \"perde acqua\" (it leaks), \"fa un rumore strano\". The fault must not be your doing: \"il danno non è dovuto a un uso improprio\" (the damage isn't due to misuse).",
        ],
        examples: [
          { es: "La lavatrice si è rotta dopo otto mesi: è ancora in garanzia.", en: "The washing machine broke after eight months: it's still under guarantee." },
          { es: "Il venditore deve ripararla o sostituirla.", en: "The seller has to repair or replace it." },
          { es: "Il negozio non può mandarmi dal produttore.", en: "The shop can't send me to the manufacturer." },
          { es: "Conservate sempre lo scontrino come prova d'acquisto.", en: "Always keep the receipt as proof of purchase." },
          { es: "Il prodotto era difettoso fin dall'inizio.", en: "The product was faulty from the start." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's still under guarantee.", answer: "È ancora in garanzia.", explanation: "\"Essere in garanzia\" = to be under guarantee." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The seller has to repair it or replace it.", answer: "Il venditore deve ripararlo o sostituirlo.", altAnswers: ["Il venditore deve ripararla o sostituirla.", "Il venditore è tenuto a ripararlo o sostituirlo."], explanation: "Pronouns attach to the infinitive." },
          { type: "multiple-choice", question: "Your new phone is faulty after a year. Who is legally responsible?", options: ["the shop that sold it", "only the manufacturer", "nobody after six months", "the phone company"], correctIndex: 0, explanation: "The legal guarantee is \"a carico del venditore\" (the seller's responsibility)." },
        ],
      },
      {
        heading: "Withdrawal, returns and refunds",
        body: [
          "For purchases made online or by phone, you have \"il diritto di recesso\": 14 days to change your mind \"senza dover dare spiegazioni\" (without giving reasons). You send the item back (\"il reso\", the return) and the seller must \"rimborsare\" you, usually within 14 days. Shipping back may be \"a carico del cliente\" (at the customer's expense).",
          "In a physical shop there's no legal right to return a working item: many shops offer \"il cambio\" (exchange) or \"un buono\" (credit note) as a courtesy. \"Rimborsare\" is to refund, \"il rimborso\" the refund.",
        ],
        examples: [
          { es: "Per gli acquisti online si hanno 14 giorni per il recesso.", en: "For online purchases you have 14 days to withdraw." },
          { es: "Ho fatto il reso e aspetto il rimborso.", en: "I've sent it back and I'm waiting for the refund." },
          { es: "Le spese di spedizione del reso sono a carico del cliente.", en: "Return shipping costs are borne by the customer." },
          { es: "In negozio mi hanno offerto solo un buono.", en: "In the shop they only offered me a credit note." },
          { es: "Posso cambiarlo con una taglia più grande?", en: "Can I exchange it for a bigger size?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've sent it back and I'm waiting for the refund.", answer: "Ho fatto il reso e aspetto il rimborso.", altAnswers: ["Ho fatto il reso e sto aspettando il rimborso.", "L'ho rimandato indietro e aspetto il rimborso."], explanation: "\"Fare il reso\" = to return an item." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Shipping costs are [borne by the customer].", sentence: "Le spese di spedizione sono ___.", answer: "a carico del cliente", explanation: "\"A carico di\" = paid by, the responsibility of." },
          { type: "listen-choose", audio: "In negozio mi hanno offerto solo un buono.", question: "What did the shop offer?", options: ["only a credit note", "a full refund", "a repair", "nothing"], correctIndex: 0, explanation: "\"Un buono\" = a voucher, credit note." },
        ],
      },
      {
        heading: "Asserting your rights",
        body: [
          "Be firm and polite: \"vorrei far valere la garanzia\" (I'd like to claim under the guarantee), \"secondo il Codice del Consumo, ho diritto a\" + noun or infinitive. If the shop refuses: \"mi può mettere per iscritto il rifiuto?\" (can you put the refusal in writing?) and then \"un reclamo\" (a complaint) or an association for consumers.",
          "\"Avere diritto a\" takes a noun or infinitive: \"ho diritto al rimborso\", \"ho diritto a restituirlo\".",
          "A formal written complaint, \"un reclamo scritto\", often goes by \"PEC\" (posta elettronica certificata), the Italian certified email with legal value, or by \"raccomandata con ricevuta di ritorno\" (registered post with proof of delivery).",
        ],
        examples: [
          { es: "Vorrei far valere la garanzia.", en: "I'd like to claim under the guarantee." },
          { es: "Secondo il Codice del Consumo, ho diritto al rimborso.", en: "Under the Consumer Code, I'm entitled to a refund." },
          { es: "Mi può mettere per iscritto il rifiuto?", en: "Could you put the refusal in writing?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm entitled to a refund.", answer: "Ho diritto al rimborso.", altAnswers: ["Ho diritto a un rimborso."], explanation: "\"Avere diritto a\" + noun." },
          { type: "speak", text: "Buongiorno, vorrei far valere la garanzia: il prodotto è difettoso.", prompt: "At the shop: Good morning, I'd like to claim under the guarantee: the product is faulty.", tip: "di-fet-TO-so: double t.", explanation: "\"Far valere\" = to enforce, claim." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The washing machine broke after eight months.", answer: "La lavatrice si è rotta dopo otto mesi.", explanation: "\"Rompersi\" takes \"essere\": \"si è rotta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Always keep the receipt. (to everyone)", answer: "Conservate sempre lo scontrino.", altAnswers: ["Tenete sempre lo scontrino.", "Conservate sempre la ricevuta."], explanation: "\"Lo scontrino\": s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For online purchases you have 14 days to withdraw.", answer: "Per gli acquisti online si hanno 14 giorni per il recesso.", altAnswers: ["Per gli acquisti online ci sono 14 giorni per il recesso.", "Per gli acquisti online hai 14 giorni per recedere.", "Per gli acquisti online si hanno quattordici giorni per il recesso."], explanation: "Impersonal \"si hanno\" (plural object)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I exchange it for a bigger size?", answer: "Posso cambiarlo con una taglia più grande?", altAnswers: ["Posso cambiarla con una taglia più grande?", "Lo posso cambiare con una taglia più grande?", "Si può cambiare con una taglia più grande?"], explanation: "\"Cambiare con\" = to exchange for." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, to the shop assistant.", source: "Could you put the refusal in writing?", answer: "Mi può mettere per iscritto il rifiuto?", altAnswers: ["Può mettermi per iscritto il rifiuto?", "Potrebbe mettermi per iscritto il rifiuto?", "Mi potrebbe mettere per iscritto il rifiuto?"], explanation: "\"Per iscritto\" = in writing; \"Lei\" form." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The product was faulty from the start.", answer: "Il prodotto era difettoso fin dall'inizio.", altAnswers: ["Il prodotto era difettoso dall'inizio.", "Il prodotto era guasto fin dall'inizio."], explanation: "\"Fin da\" = right from." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd like to [claim under] the guarantee.", sentence: "Vorrei ___ la garanzia.", answer: "far valere", altAnswers: ["fare valere"], explanation: "\"Far valere\" = to enforce." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm entitled to] return it.", sentence: "___ restituirlo.", answer: "Ho diritto a", explanation: "\"Avere diritto a\" + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: The shop can't send me to the manufacturer.", words: ["Il negozio", "non può", "mandarmi", "dal", "produttore."], translation: "The shop can't send me to the manufacturer.", explanation: "\"Da\" + person or company = to someone's place." },
      { type: "multiple-choice", question: "You bought a jumper in a shop and simply don't like it. What does the law say?", options: ["The shop doesn't have to take it back, though many offer an exchange.", "You have 14 days to return it for a refund.", "You have two years to return it.", "The shop must refund you within a week."], correctIndex: 0, explanation: "The 14-day \"recesso\" covers online and phone purchases, not shop purchases." },
      { type: "dictation", audio: "Secondo il Codice del Consumo, ho diritto al rimborso.", explanation: "\"Avere diritto a\" + \"il\" = \"al\"." },
      { type: "speak", text: "Ho comprato questo asciugacapelli due mesi fa e non funziona più. È ancora in garanzia.", prompt: "At the shop: I bought this hairdryer two months ago and it doesn't work any more. It's still under guarantee.", tip: "a-sciu-ga-CA-pel-li: sc before i is sh.", explanation: "\"Non ... più\" = no longer." },
    ],
  },
  {
    slug: "b2-work-rights",
    level: "IT-B2",
    number: 4,
    title: "Rights at Work",
    summary: "Talk about holidays, sick leave, maternity, the tredicesima, the TFR and the end of a job.",
    duration: "17 min",
    sections: [
      {
        heading: "Holidays and sick leave",
        body: [
          "Paid holiday is \"le ferie\" (always plural): by law at least four weeks a year. You \"prendi\" or \"chiedi\" i giorni di ferie, and \"sei in ferie\" (on holiday from work). \"Le vacanze\" is the general word for holidays, but at work and in contracts it's \"ferie\". \"I permessi\" are hours off for personal reasons.",
          "When you're ill you're \"in malattia\" (on sick leave): your doctor, \"il medico di base\", sends \"il certificato medico\" online to the social security office, and you may receive \"la visita fiscale\" (a home check) during set hours. \"Mettersi in malattia\" is to take sick leave.",
          "Bank holidays are \"i giorni festivi\" or \"le feste\"; a long weekend made by a bank holiday plus a day off is \"il ponte\" (the bridge): \"facciamo il ponte del 25 aprile\".",
        ],
        examples: [
          { es: "Ad agosto prendo tre settimane di ferie.", en: "In August I'm taking three weeks off." },
          { es: "Il direttore è in ferie fino al 20.", en: "The manager is on holiday until the 20th." },
          { es: "Ho chiesto un permesso per andare dal dentista.", en: "I asked for time off to go to the dentist." },
          { es: "Sono in malattia da lunedì.", en: "I've been on sick leave since Monday." },
          { es: "Il medico ha mandato il certificato online.", en: "The doctor sent the certificate online." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In August I'm taking three weeks off.", answer: "Ad agosto prendo tre settimane di ferie.", altAnswers: ["A agosto prendo tre settimane di ferie.", "In agosto prendo tre settimane di ferie.", "Ad agosto mi prendo tre settimane di ferie."], explanation: "Paid leave = \"le ferie\"; \"ad\" before a vowel is common." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've been on sick leave since Monday.", answer: "Sono in malattia da lunedì.", altAnswers: ["Da lunedì sono in malattia."], explanation: "Present + \"da\" for something still going on." },
          { type: "multiple-choice", question: "A colleague's out-of-office says \"Sono in ferie fino al 3 settembre\". Why is she away?", options: ["She's on holiday.", "She's ill.", "She's on maternity leave.", "She's been fired."], correctIndex: 0, explanation: "\"In ferie\" = on (paid) holiday." },
        ],
      },
      {
        heading: "Extra months and parenthood",
        body: [
          "Most Italian employees receive \"la tredicesima\", a thirteenth monthly salary paid in December, and in some sectors \"la quattordicesima\" in summer. When a job ends, the employer pays \"il TFR\" (trattamento di fine rapporto), a severance sum built up at roughly one month's pay for each year worked. Your pay and these items appear on \"la busta paga\" (payslip).",
          "\"Il congedo di maternità\" (maternity leave) is compulsory: five months, usually two before and three after the birth. Fathers have \"il congedo di paternità\" (paternity leave), and either parent can take \"il congedo parentale\" (parental leave) later.",
          "\"Lo stipendio\" (salary) is quoted \"lordo\" (gross) or \"netto\" (net), and often as \"la RAL\" (retribuzione annua lorda), the gross annual pay, which includes the tredicesima.",
        ],
        examples: [
          { es: "Con la tredicesima di dicembre paghiamo i regali.", en: "We pay for the presents with the December bonus month." },
          { es: "Quando ho lasciato l'azienda mi hanno dato il TFR.", en: "When I left the company they paid me my severance." },
          { es: "Controlla bene la busta paga ogni mese.", en: "Check your payslip carefully every month." },
          { es: "Giulia è in maternità fino a marzo.", en: "Giulia is on maternity leave until March." },
          { es: "Mio marito ha preso il congedo di paternità.", en: "My husband took paternity leave." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia is on maternity leave until March.", answer: "Giulia è in maternità fino a marzo.", altAnswers: ["Giulia è in congedo di maternità fino a marzo."], explanation: "\"Essere in maternità\" is the everyday phrase." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In December we get [the thirteenth month's pay].", sentence: "A dicembre prendiamo ___.", answer: "la tredicesima", explanation: "\"La tredicesima (mensilità)\": never \"bonus di Natale\"." },
          { type: "listen-choose", audio: "Quando ho lasciato l'azienda mi hanno dato il TFR.", question: "What did the speaker receive?", options: ["severance pay", "a pay rise", "a Christmas bonus", "a fine"], correctIndex: 0, explanation: "\"Il TFR\" = trattamento di fine rapporto, severance." },
        ],
      },
      {
        heading: "Contracts and the end of a job",
        body: [
          "\"Il contratto a tempo indeterminato\" is a permanent contract, \"a tempo determinato\" a fixed-term one, often after \"il periodo di prova\" (probation). Most terms come from \"il contratto collettivo\" (national collective agreement) for each sector. A job ends with \"le dimissioni\" (resignation: \"dare le dimissioni\", \"dimettersi\") or \"il licenziamento\" (dismissal: \"essere licenziato\").",
          "Both need \"il preavviso\": the notice period fixed by the collective agreement. Note: \"licenziare\" means to fire, not to license; a licence is \"una licenza\" or, for driving, \"la patente\".",
          "\"Licenziarsi\" is used in speech for to quit (\"mi sono licenziato\"), though the formal term is \"dare le dimissioni\". Being made redundant for economic reasons is \"il licenziamento per motivi economici\".",
        ],
        examples: [
          { es: "Finalmente ho un contratto a tempo indeterminato.", en: "I've finally got a permanent contract." },
          { es: "Il periodo di prova dura tre mesi.", en: "The probation period lasts three months." },
          { es: "Ha dato le dimissioni con un mese di preavviso.", en: "She resigned with a month's notice." },
          { es: "L'hanno licenziato senza giusta causa.", en: "They fired him without just cause." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've finally got a permanent contract.", answer: "Finalmente ho un contratto a tempo indeterminato.", altAnswers: ["Ho finalmente un contratto a tempo indeterminato."], explanation: "\"A tempo indeterminato\" = open-ended, permanent." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She resigned with a month's notice.", answer: "Ha dato le dimissioni con un mese di preavviso.", altAnswers: ["Si è dimessa con un mese di preavviso."], explanation: "\"Dare le dimissioni\" or \"dimettersi\"." },
          { type: "speak", text: "Il periodo di prova dura tre mesi, poi il contratto diventa a tempo indeterminato.", prompt: "Explain: The probation lasts three months, then the contract becomes permanent.", tip: "in-de-ter-mi-NA-to: stress on na.", explanation: "\"Diventare\" + adjective phrase." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The manager is on holiday until the 20th.", answer: "Il direttore è in ferie fino al 20.", altAnswers: ["Il direttore è in ferie fino al venti.", "La direttrice è in ferie fino al 20."], explanation: "At work, holiday = \"le ferie\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I asked for time off to go to the dentist.", answer: "Ho chiesto un permesso per andare dal dentista.", explanation: "\"Un permesso\" = hours off; \"dal dentista\" = to the dentist's." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Check your payslip every month. (to a friend)", answer: "Controlla la busta paga ogni mese.", altAnswers: ["Controlla bene la busta paga ogni mese.", "Controlla la tua busta paga ogni mese."], explanation: "\"La busta paga\" = payslip." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My husband took paternity leave.", answer: "Mio marito ha preso il congedo di paternità.", altAnswers: ["Mio marito ha fatto il congedo di paternità."], explanation: "\"Il congedo\" = leave." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They fired him without just cause.", answer: "L'hanno licenziato senza giusta causa.", altAnswers: ["È stato licenziato senza giusta causa."], explanation: "\"Licenziare\" = to fire." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The probation period lasts three months.", answer: "Il periodo di prova dura tre mesi.", explanation: "\"Il periodo di prova\" = probation." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Paid holiday] is at least four weeks a year.", sentence: "___ sono almeno quattro settimane all'anno.", answer: "Le ferie", explanation: "\"Le ferie\" is always plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When the job ends you get [the severance pay].", sentence: "Quando il lavoro finisce ricevi ___.", answer: "il TFR", altAnswers: ["il trattamento di fine rapporto"], explanation: "\"Il TFR\" = trattamento di fine rapporto." },
      { type: "word-order", prompt: "Put the words in order to say: We pay for the presents with the December bonus month.", words: ["Con la", "tredicesima", "paghiamo", "i regali."], translation: "We pay for the presents with the December bonus month.", explanation: "\"La tredicesima\" = 13th monthly salary." },
      { type: "multiple-choice", question: "\"Si è dimesso\" means ...", options: ["he resigned", "he was fired", "he retired", "he was demoted"], correctIndex: 0, explanation: "\"Dimettersi\" = to resign; \"licenziare\" = to fire." },
      { type: "dictation", audio: "Il medico ha mandato il certificato e sono in malattia fino a venerdì.", explanation: "\"In malattia\" = on sick leave." },
      { type: "speak", text: "A dicembre prendo la tredicesima e ad agosto ho tre settimane di ferie.", prompt: "Tell a friend: In December I get my thirteenth month and in August I have three weeks' holiday.", tip: "tre-di-CE-si-ma: stress on ce.", explanation: "\"La tredicesima\", \"le ferie\"." },
    ],
  },
  {
    slug: "b2-drill-legal-vocabulary",
    level: "IT-B2",
    number: 5,
    title: "Drill: Legal Vocabulary",
    summary: "High-repetition production of contract, fine, consumer and work vocabulary.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Contracts and fines",
        body: [
          "Recall: \"il contratto\", \"la clausola\", \"firmare\", \"la scadenza\", \"scadere\", \"la disdetta\", \"il preavviso\", \"il recesso\", \"la caparra\", \"la multa\", \"il verbale\", \"il ricorso\", \"il giudice di pace\", \"accolto\", \"respinto\".",
        ],
        examples: [
          { es: "Il contratto d'affitto scade a giugno.", en: "The rental contract expires in June." },
          { es: "Ho mandato la disdetta per raccomandata.", en: "I sent the notice by registered post." },
          { es: "Il verbale contiene un errore nella targa.", en: "The ticket has a mistake in the number plate." },
          { es: "Il ricorso è stato accolto dal giudice.", en: "The appeal was upheld by the judge." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I sent the notice by registered post.", answer: "Ho mandato la disdetta per raccomandata.", altAnswers: ["Ho inviato la disdetta per raccomandata.", "Ho mandato la disdetta con raccomandata."], explanation: "\"Per raccomandata\" = by registered post." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ticket has a mistake in the number plate.", answer: "Il verbale contiene un errore nella targa.", altAnswers: ["Nel verbale c'è un errore nella targa.", "Il verbale ha un errore nella targa."], explanation: "\"La targa\" = number plate." },
        ],
      },
      {
        heading: "Consumers and workers",
        body: [
          "Recall: \"la garanzia\", \"difettoso\", \"riparare\", \"sostituire\", \"il reso\", \"il rimborso\", \"lo scontrino\", \"le ferie\", \"la malattia\", \"la maternità\", \"la tredicesima\", \"il TFR\", \"la busta paga\", \"le dimissioni\", \"il licenziamento\".",
        ],
        examples: [
          { es: "Il rimborso arriva entro quattordici giorni.", en: "The refund arrives within fourteen days." },
          { es: "Senza scontrino non posso fare il reso.", en: "Without the receipt I can't return it." },
          { es: "Ho ancora dieci giorni di ferie da prendere.", en: "I still have ten days of holiday to take." },
          { es: "Ha ricevuto la lettera di licenziamento.", en: "He received his letter of dismissal." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I still have ten days of holiday to take.", answer: "Ho ancora dieci giorni di ferie da prendere.", altAnswers: ["Mi restano ancora dieci giorni di ferie."], explanation: "\"Da\" + infinitive = still to be taken." },
          { type: "listen-choose", audio: "Senza scontrino non posso fare il reso.", question: "Why can't the speaker return the item?", options: ["no receipt", "too late", "it's damaged", "it was on sale"], correctIndex: 0, explanation: "\"Senza scontrino\" = without a receipt." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rental contract expires in June.", answer: "Il contratto d'affitto scade a giugno.", altAnswers: ["Il contratto di affitto scade a giugno.", "Il contratto d'affitto scade in giugno."], explanation: "\"Scadere\" = to expire." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The refund arrives within fourteen days.", answer: "Il rimborso arriva entro quattordici giorni.", altAnswers: ["Il rimborso arriva entro 14 giorni."], explanation: "\"Entro\" = within." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He received his letter of dismissal.", answer: "Ha ricevuto la lettera di licenziamento.", explanation: "\"Il licenziamento\" = dismissal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The deposit is three months' rent.", answer: "La caparra è di tre mensilità.", altAnswers: ["La caparra è di tre mesi di affitto.", "Il deposito è di tre mensilità.", "La caparra è pari a tre mensilità."], explanation: "\"Mensilità\" = monthly payment." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The hairdryer is faulty.", answer: "L'asciugacapelli è difettoso.", altAnswers: ["Il phon è difettoso.", "L'asciugacapelli è guasto."], explanation: "\"Difettoso\" agrees with the masculine noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's on maternity leave.", answer: "È in maternità.", altAnswers: ["È in congedo di maternità."], explanation: "\"Essere in maternità\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I signed the contract yesterday.", answer: "Ho firmato il contratto ieri.", altAnswers: ["Ieri ho firmato il contratto."], explanation: "\"Firmare\" = to sign." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The appeal was rejected.", answer: "Il ricorso è stato respinto.", altAnswers: ["Il ricorso è stato rigettato."], explanation: "\"Respinto\" = rejected." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My passport [has expired].", sentence: "Il mio passaporto ___.", answer: "è scaduto", explanation: "\"Scadere\" takes \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm still waiting for [the refund].", sentence: "Sto ancora aspettando ___.", answer: "il rimborso", explanation: "\"Il rimborso\" = refund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [resigned] last week.", sentence: "___ la settimana scorsa.", answer: "Si è dimesso", altAnswers: ["Ha dato le dimissioni"], explanation: "\"Dimettersi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They gave me [a speeding fine].", sentence: "Mi hanno dato ___.", answer: "una multa per eccesso di velocità", explanation: "\"Eccesso di velocità\" = speeding." },
      { type: "dictation", audio: "Ho mandato la disdetta con sei mesi di preavviso.", explanation: "\"La disdetta\" and \"il preavviso\"." },
      { type: "speak", text: "Il prodotto è difettoso: vorrei la sostituzione o il rimborso.", prompt: "At the shop: The product is faulty: I'd like a replacement or a refund.", tip: "so-sti-tu-ZIO-ne: stress on zio.", explanation: "Nouns from \"sostituire\" and \"rimborsare\"." },
    ],
  },
  {
    slug: "b2-drill-legal-structures",
    level: "IT-B2",
    number: 6,
    title: "Drill: Legal Structures",
    summary: "High-repetition production of the passive, andare + participle and qualora in legal and official sentences.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Must be done: andare + participle",
        body: [
          "Pattern: \"va\" / \"vanno\" + participle agreeing with the subject = must be: \"la domanda va presentata\", \"i documenti vanno allegati\". Only in simple tenses. Passive with \"essere\" or \"venire\" for what is or was done: \"il contratto è stato firmato\", \"la multa viene notificata\".",
        ],
        examples: [
          { es: "I documenti vanno allegati alla domanda.", en: "The documents must be attached to the application." },
          { es: "La multa viene notificata per posta.", en: "The fine is served by post." },
          { es: "Il modulo va compilato in stampatello.", en: "The form must be filled in in block capitals." },
          { es: "La caparra verrà restituita alla fine del contratto.", en: "The deposit will be returned at the end of the contract." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The documents must be attached to the application.", answer: "I documenti vanno allegati alla domanda.", altAnswers: ["I documenti devono essere allegati alla domanda."], explanation: "\"Vanno allegati\": plural verb and participle." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The form must be filled in in block capitals.", answer: "Il modulo va compilato in stampatello.", altAnswers: ["Il modulo deve essere compilato in stampatello."], explanation: "\"In stampatello\" = in block capitals." },
        ],
      },
      {
        heading: "Should it happen: qualora",
        body: [
          "Pattern: \"qualora\" / \"nel caso in cui\" + present subjunctive, then present or future: \"qualora il prodotto risulti difettoso, verrà sostituito\". For a past frame, imperfect subjunctive: \"qualora fosse necessario\".",
        ],
        examples: [
          { es: "Qualora il prodotto risulti difettoso, verrà sostituito.", en: "Should the product prove faulty, it will be replaced." },
          { es: "Nel caso in cui il pagamento non arrivi, il servizio sarà sospeso.", en: "If payment doesn't arrive, the service will be suspended." },
          { es: "Qualora fosse necessario, La contatteremo.", en: "Should it be necessary, we will contact you." },
          { es: "Qualora non si presenti, perderà il diritto al rimborso.", en: "Should you fail to attend, you will lose your right to a refund." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal style.", source: "Should the product prove faulty, it will be replaced.", answer: "Qualora il prodotto risulti difettoso, verrà sostituito.", altAnswers: ["Qualora il prodotto risulti difettoso, sarà sostituito.", "Nel caso in cui il prodotto risulti difettoso, verrà sostituito.", "Nel caso in cui il prodotto risulti difettoso, sarà sostituito."], explanation: "\"Qualora\" + subjunctive \"risulti\"." },
          { type: "listen-choose", audio: "Nel caso in cui il pagamento non arrivi, il servizio sarà sospeso.", question: "What happens if payment doesn't arrive?", options: ["The service is suspended.", "The price goes up.", "The contract is renewed.", "Nothing."], correctIndex: 0, explanation: "\"Sarà sospeso\" = will be suspended." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with andare + participle.", source: "The fine must be paid within 60 days.", answer: "La multa va pagata entro 60 giorni.", altAnswers: ["La multa va pagata entro sessanta giorni."], explanation: "\"Va pagata\" agrees with \"la multa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with andare + participle.", source: "The receipts must be kept.", answer: "Gli scontrini vanno conservati.", explanation: "\"Vanno conservati\": plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with andare + participle.", source: "The notice must be sent by registered post.", answer: "La disdetta va inviata per raccomandata.", altAnswers: ["La disdetta va mandata per raccomandata.", "La disdetta va spedita per raccomandata."], explanation: "\"Va inviata\" agrees with \"la disdetta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The fine is served by post.", answer: "La multa viene notificata per posta.", altAnswers: ["La multa è notificata per posta.", "Il verbale viene notificato per posta."], explanation: "\"Venire\" passive for a process." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The deposit will be returned at the end.", answer: "La caparra verrà restituita alla fine.", altAnswers: ["La caparra sarà restituita alla fine.", "Il deposito verrà restituito alla fine.", "Il deposito sarà restituito alla fine."], explanation: "Future passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal style.", source: "Should it be necessary, we will contact you.", answer: "Qualora fosse necessario, La contatteremo.", altAnswers: ["Qualora fosse necessario, la contatteremo.", "Qualora sia necessario, La contatteremo.", "Qualora sia necessario, la contatteremo.", "Nel caso in cui fosse necessario, La contatteremo."], explanation: "\"Qualora\" + subjunctive; \"La\" = formal you." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal style.", source: "Should the tenant leave early, he must give six months' notice.", answer: "Qualora il conduttore lasci l'immobile prima, deve dare sei mesi di preavviso.", altAnswers: ["Qualora l'inquilino lasci la casa prima, deve dare sei mesi di preavviso.", "Qualora il conduttore receda, deve dare sei mesi di preavviso.", "Nel caso in cui l'inquilino lasci la casa prima, deve dare sei mesi di preavviso."], explanation: "\"Qualora\" + \"lasci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The contract was signed yesterday.", answer: "Il contratto è stato firmato ieri.", altAnswers: ["Il contratto è stato sottoscritto ieri.", "Ieri è stato firmato il contratto."], explanation: "Passato prossimo passive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The forms [must be signed].", sentence: "I moduli ___.", answer: "vanno firmati", altAnswers: ["devono essere firmati"], explanation: "\"Vanno\" + plural participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Should you fail [to attend], you will lose the refund.", sentence: "Qualora non ___, perderà il rimborso.", answer: "si presenti", explanation: "\"Presentarsi\" in the subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If the payment [doesn't arrive], the service will be suspended.", sentence: "Nel caso in cui il pagamento non ___, il servizio sarà sospeso.", answer: "arrivi", explanation: "\"Nel caso in cui\" + subjunctive." },
      { type: "word-order", prompt: "Put the words in order to say: The documents must be attached to the application.", words: ["I documenti", "vanno", "allegati", "alla", "domanda."], translation: "The documents must be attached to the application.", explanation: "\"Vanno allegati\"." },
      { type: "dictation", audio: "Qualora il prodotto risulti difettoso, verrà sostituito.", explanation: "\"Risulti\": subjunctive after \"qualora\"." },
      { type: "speak", text: "La domanda va presentata entro il 30 aprile; qualora mancassero documenti, verrà respinta.", prompt: "Read the notice: The application must be submitted by 30 April; should documents be missing, it will be rejected.", tip: "man-CAS-se-ro: double s.", explanation: "\"Va presentata\", then \"qualora\" + imperfect subjunctive." },
    ],
  },
  {
    slug: "b2-reading-lab-contract-clauses",
    level: "IT-B2",
    number: 7,
    title: "Reading Lab: Contract Clauses",
    summary: "Read the key clauses of an Italian rental contract and work out what the tenant can and can't do.",
    duration: "17 min",
    sections: [
      {
        heading: "Duration and rent",
        body: [
          "Below are clauses from \"un contratto di locazione ad uso abitativo\" (a residential lease) for a flat in Bologna. The standard Italian lease runs \"quattro più quattro\": four years, renewed automatically for four more. Read for the obligations: \"da pagarsi\" (to be paid), \"entro\", \"mediante\" (by means of).",
          "\"Il canone annuo\" is the yearly rent, paid in \"rate mensili anticipate\" (monthly instalments in advance). \"Il bonifico bancario\" is a bank transfer. Legal Italian often uses \"è fissato in\" (is set at) for amounts.",
        ],
        examples: [
          { es: "Art. 1. Il contratto ha la durata di quattro anni, dal 1° ottobre 2025 al 30 settembre 2029.", en: "Art. 1. The contract runs for four years, from 1 October 2025 to 30 September 2029." },
          { es: "Si rinnova automaticamente per altri quattro anni, salvo disdetta nei casi previsti dalla legge.", en: "It renews automatically for another four years, unless notice is given in the cases provided for by law." },
          { es: "Art. 2. Il canone annuo è fissato in 9.600 euro.", en: "Art. 2. The annual rent is set at 9,600 euros." },
          { es: "Va pagato in rate mensili anticipate di 800 euro entro il giorno 5 di ogni mese.", en: "It must be paid in monthly instalments in advance of 800 euros by the 5th of each month." },
          { es: "Il pagamento avviene mediante bonifico bancario.", en: "Payment is made by bank transfer." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "How much is the monthly rent, and when is it due?", options: ["800 euros, by the 5th of each month", "9,600 euros, by the 5th of each month", "800 euros, at the end of each month", "400 euros, every two weeks"], correctIndex: 0, explanation: "\"Rate mensili anticipate di 800 euro entro il giorno 5\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Payment is made by bank transfer.", answer: "Il pagamento avviene mediante bonifico bancario.", altAnswers: ["Il pagamento avviene tramite bonifico bancario.", "Il pagamento si effettua con bonifico bancario.", "Il pagamento avviene con bonifico bancario."], explanation: "\"Avvenire\" = to take place; \"mediante\" = by means of." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The contract runs for four years.", answer: "Il contratto ha la durata di quattro anni.", altAnswers: ["Il contratto dura quattro anni.", "Il contratto ha una durata di quattro anni."], explanation: "\"Avere la durata di\" is the formal phrase." },
        ],
      },
      {
        heading: "Deposit and withdrawal",
        body: [
          "The deposit clause opens with \"a garanzia degli obblighi assunti\" (as security for the obligations undertaken) and ends with a condition: \"previa verifica\" (subject to prior inspection). \"Previo\" / \"previa\" + noun means after, subject to.",
          "The withdrawal clause gives the tenant a way out: \"recedere in qualsiasi momento\", \"dandone avviso\" (giving notice of it) by registered letter. \"Ne\" in \"dandone\" refers back to the withdrawal.",
        ],
        examples: [
          { es: "Art. 3. A garanzia degli obblighi assunti, il conduttore versa 2.400 euro, pari a tre mensilità.", en: "Art. 3. As security for the obligations undertaken, the tenant pays 2,400 euros, equal to three months' rent." },
          { es: "La somma sarà restituita al termine della locazione, previa verifica dello stato dell'immobile.", en: "The sum will be returned at the end of the lease, subject to an inspection of the property." },
          { es: "Art. 4. Il conduttore può recedere dal contratto in qualsiasi momento.", en: "Art. 4. The tenant may withdraw from the contract at any time." },
          { es: "Deve darne avviso al locatore con lettera raccomandata almeno sei mesi prima.", en: "He must notify the landlord by registered letter at least six months in advance." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "When does the tenant get the deposit back?", options: ["At the end of the lease, after the flat is inspected.", "After the first year.", "Never.", "Whenever he asks."], correctIndex: 0, explanation: "\"Al termine della locazione, previa verifica dello stato dell'immobile\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tenant may withdraw at any time.", answer: "Il conduttore può recedere in qualsiasi momento.", altAnswers: ["L'inquilino può recedere in qualsiasi momento.", "Il conduttore può recedere in qualunque momento.", "L'inquilino può recedere in qualunque momento."], explanation: "\"Recedere\" = to withdraw from a contract." },
          { type: "listen-choose", audio: "Deve darne avviso al locatore con lettera raccomandata almeno sei mesi prima.", question: "How must the tenant give notice?", options: ["by registered letter, six months ahead", "by phone, one month ahead", "by email, six months ahead", "in person, three months ahead"], correctIndex: 0, explanation: "\"Lettera raccomandata\", \"sei mesi prima\"." },
        ],
      },
      {
        heading: "Prohibitions and expenses",
        body: [
          "Prohibitions use \"è vietato\" + infinitive; permission depends on \"il consenso scritto\". The expenses clause divides costs with \"a carico di\": ordinary building costs (\"le spese condominiali ordinarie\") are the tenant's, extraordinary ones (a new roof, say) the landlord's.",
          "\"Sublocare\" is to sublet; \"in tutto o in parte\" = wholly or partly.",
        ],
        examples: [
          { es: "Art. 5. È vietato sublocare l'immobile, in tutto o in parte, senza il consenso scritto del locatore.", en: "Art. 5. Subletting the property, wholly or partly, without the landlord's written consent is forbidden." },
          { es: "Art. 6. Le spese condominiali ordinarie sono a carico del conduttore.", en: "Art. 6. Ordinary building service charges are borne by the tenant." },
          { es: "Quelle straordinarie sono a carico del locatore.", en: "Extraordinary ones are borne by the landlord." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Subletting without written consent is forbidden.", answer: "È vietato sublocare senza il consenso scritto.", altAnswers: ["È vietato subaffittare senza il consenso scritto.", "È vietato sublocare senza consenso scritto."], explanation: "\"È vietato\" + infinitive." },
          { type: "speak", text: "Le spese ordinarie sono a carico dell'inquilino, quelle straordinarie del proprietario.", prompt: "Explain to a friend: Ordinary costs are paid by the tenant, extraordinary ones by the owner.", tip: "stra-or-di-NA-rie: five syllables.", explanation: "\"A carico di\"; \"quelle\" replaces \"le spese\"." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "The roof of the building needs replacing. Who pays, according to the contract?", options: ["the landlord", "the tenant", "both equally", "the building manager"], correctIndex: 0, explanation: "Extraordinary costs are \"a carico del locatore\"." },
      { type: "multiple-choice", question: "Can the tenant rent out one room to a friend?", options: ["Only with the landlord's written consent.", "Yes, freely.", "Yes, if the friend pays the deposit.", "Only after four years."], correctIndex: 0, explanation: "\"È vietato sublocare, in tutto o in parte, senza il consenso scritto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The annual rent is set at 9,600 euros.", answer: "Il canone annuo è fissato in 9.600 euro.", altAnswers: ["Il canone annuale è fissato in 9.600 euro.", "L'affitto annuo è di 9.600 euro."], explanation: "\"È fissato in\" = is set at." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The deposit is equal to three months' rent.", answer: "Il deposito è pari a tre mensilità.", altAnswers: ["La caparra è pari a tre mensilità.", "Il deposito cauzionale è pari a tre mensilità."], explanation: "\"Pari a\" = equal to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It renews automatically for another four years.", answer: "Si rinnova automaticamente per altri quattro anni.", altAnswers: ["Si rinnova in automatico per altri quattro anni."], explanation: "\"Altri\" before the number = another." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The sum will be returned at the end of the lease.", answer: "La somma sarà restituita al termine della locazione.", altAnswers: ["La somma verrà restituita al termine della locazione.", "La somma sarà restituita alla fine della locazione.", "La somma verrà restituita alla fine del contratto."], explanation: "\"Al termine di\" = at the end of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Ordinary costs are borne by the tenant.", answer: "Le spese ordinarie sono a carico del conduttore.", altAnswers: ["Le spese ordinarie sono a carico dell'inquilino."], explanation: "\"A carico di\" = borne by." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The deposit is returned [subject to] an inspection.", sentence: "Il deposito viene restituito ___ verifica.", answer: "previa", explanation: "\"Previa\" agrees with \"verifica\" (feminine)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The tenant must [give notice of it] six months ahead.", sentence: "Il conduttore deve ___ sei mesi prima.", answer: "darne avviso", explanation: "\"Ne\" = of it (the withdrawal), attached to the infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: The rent must be paid by the 5th of each month.", words: ["Il canone", "va pagato", "entro", "il giorno 5", "di ogni mese."], translation: "The rent must be paid by the 5th of each month.", explanation: "\"Va pagato\": obligation." },
      { type: "dictation", audio: "Il conduttore può recedere dal contratto in qualsiasi momento.", explanation: "\"Recedere da\" = to withdraw from." },
      { type: "speak", text: "Il contratto è un quattro più quattro e il canone va pagato entro il 5 del mese.", prompt: "Summarise the lease: It's a four-plus-four contract and the rent must be paid by the 5th of the month.", tip: "CA-no-ne: stress on ca.", explanation: "Everyday summary of the formal text." },
    ],
  },
  {
    slug: "b2-dialogue-lab-consumer-complaint",
    level: "IT-B2",
    number: 8,
    title: "Dialogue Lab: A Faulty Product",
    summary: "Return a broken coffee machine to the shop, insist politely on the legal guarantee and agree on a solution.",
    duration: "17 min",
    sections: [
      {
        heading: "The problem",
        body: [
          "Marco bought a coffee machine ten months ago; it has stopped working. He goes back to the shop. Both use \"Lei\": \"Mi dica\" (how can I help?), \"Senta\", \"Le spiego\". Marco describes the problem with \"non funziona più\" (it no longer works) and \"da un giorno all'altro\" (from one day to the next).",
          "The assistant's first answer is a classic brush-off: \"Deve rivolgersi al produttore\" (you need to contact the manufacturer). \"Rivolgersi a\" = to turn to, contact.",
        ],
        examples: [
          { es: "Buongiorno, mi dica.", en: "Good morning, how can I help?" },
          { es: "Ho comprato questa macchina del caffè dieci mesi fa e non funziona più.", en: "I bought this coffee machine ten months ago and it doesn't work any more." },
          { es: "Si è bloccata da un giorno all'altro.", en: "It stopped working from one day to the next." },
          { es: "Mi dispiace, ma deve rivolgersi direttamente al produttore.", en: "I'm sorry, but you need to contact the manufacturer directly." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought this coffee machine ten months ago and it doesn't work any more.", answer: "Ho comprato questa macchina del caffè dieci mesi fa e non funziona più.", altAnswers: ["Ho comprato questa macchinetta del caffè dieci mesi fa e non funziona più.", "Dieci mesi fa ho comprato questa macchina del caffè e non funziona più."], explanation: "\"Fa\" after the time = ago; \"non ... più\" = no longer." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the shop assistant.", source: "You need to contact the manufacturer.", answer: "Deve rivolgersi al produttore.", altAnswers: ["Si deve rivolgere al produttore.", "Deve contattare il produttore."], explanation: "\"Rivolgersi a\"; \"deve\" for \"Lei\"." },
          { type: "multiple-choice", question: "The assistant greets Marco. What's the natural shop greeting?", options: ["Buongiorno, mi dica.", "Ciao, dimmi.", "Buongiorno, dimmi tutto, amico.", "Salve, cosa vuoi?"], correctIndex: 0, explanation: "\"Mi dica\": formal imperative of \"dire\", standard in shops." },
        ],
      },
      {
        heading: "Insisting politely",
        body: [
          "Marco answers firmly but politely: \"Veramente\" (actually, as a polite contradiction) + the law. \"Ai sensi del Codice del Consumo, la garanzia legale è a carico del venditore\". He shows his proof of purchase: \"Ecco lo scontrino\".",
          "The assistant gives way: \"Allora la mandiamo in assistenza\" (we'll send it for repair). \"Ci vorranno circa tre settimane\": \"volerci\" + time = it will take.",
        ],
        examples: [
          { es: "Veramente la garanzia legale è a carico del venditore.", en: "Actually, the legal guarantee is the seller's responsibility." },
          { es: "Lo dice il Codice del Consumo.", en: "That's what the Consumer Code says." },
          { es: "Ecco lo scontrino.", en: "Here's the receipt." },
          { es: "Va bene, allora la mandiamo in assistenza.", en: "All right, then we'll send it off for repair." },
          { es: "Ci vorranno circa tre settimane.", en: "It'll take about three weeks." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Actually, the guarantee is the seller's responsibility.", answer: "Veramente la garanzia è a carico del venditore.", altAnswers: ["In realtà la garanzia è a carico del venditore.", "Veramente, la garanzia è a carico del venditore."], explanation: "\"Veramente\" opens a polite contradiction." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It'll take] about three weeks.", sentence: "___ circa tre settimane.", answer: "Ci vorranno", explanation: "\"Volerci\" agrees with the time: \"ci vorranno tre settimane\"." },
          { type: "listen-choose", audio: "Va bene, allora la mandiamo in assistenza.", question: "What will the shop do?", options: ["send the machine for repair", "give a refund", "give a new machine", "send Marco to the manufacturer"], correctIndex: 0, explanation: "\"In assistenza\" = to the repair service." },
        ],
      },
      {
        heading: "Agreeing on a solution",
        body: [
          "Marco covers the next problem with \"qualora\": \"Qualora non fosse riparabile, vorrei la sostituzione\". The assistant agrees, using combined pronouns: \"gliela sostituiamo\" (we'll replace it for you). Marco asks for written confirmation and closes politely.",
        ],
        examples: [
          { es: "Qualora non fosse riparabile, vorrei la sostituzione.", en: "Should it not be repairable, I'd like a replacement." },
          { es: "Certo, in quel caso gliela sostituiamo.", en: "Of course, in that case we'll replace it for you." },
          { es: "Mi può dare una ricevuta della consegna?", en: "Could you give me a receipt for handing it in?" },
          { es: "Grazie mille, arrivederci.", en: "Thank you very much, goodbye." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Should it not be repairable, I'd like a replacement.", answer: "Qualora non fosse riparabile, vorrei la sostituzione.", altAnswers: ["Qualora non sia riparabile, vorrei la sostituzione.", "Nel caso in cui non fosse riparabile, vorrei la sostituzione.", "Se non fosse riparabile, vorrei la sostituzione."], explanation: "\"Qualora\" + subjunctive; \"vorrei\" for a polite request." },
          { type: "speak", text: "Certo, in quel caso gliela sostituiamo.", prompt: "You're the assistant: Of course, in that case we'll replace it for you.", tip: "GLIE-la: gli + la in one word.", explanation: "\"Gliela\" = \"le\" (to you, formal) + \"la\" (the machine)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It stopped working from one day to the next.", answer: "Si è bloccata da un giorno all'altro.", altAnswers: ["Ha smesso di funzionare da un giorno all'altro.", "Si è rotta da un giorno all'altro."], explanation: "\"Da un giorno all'altro\" = suddenly." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here's the receipt.", answer: "Ecco lo scontrino.", altAnswers: ["Ecco la ricevuta."], explanation: "\"Ecco\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That's what the Consumer Code says.", answer: "Lo dice il Codice del Consumo.", altAnswers: ["È quello che dice il Codice del Consumo.", "Lo prevede il Codice del Consumo."], explanation: "\"Lo\" for the whole idea." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It'll take about three weeks.", answer: "Ci vorranno circa tre settimane.", altAnswers: ["Ci vorranno più o meno tre settimane."], explanation: "\"Volerci\" in the future, plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, to the shop assistant.", source: "Could you give me a receipt?", answer: "Mi può dare una ricevuta?", altAnswers: ["Mi potrebbe dare una ricevuta?", "Può darmi una ricevuta?", "Potrebbe darmi una ricevuta?"], explanation: "\"Lei\" form with \"può\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the shop assistant.", source: "We'll send it off for repair.", answer: "La mandiamo in assistenza.", altAnswers: ["La mandiamo in riparazione.", "La mandiamo al centro assistenza."], explanation: "\"La\" = the machine (feminine)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In that case [we'll replace it for you].", sentence: "In quel caso ___.", answer: "gliela sostituiamo", explanation: "\"Le\" + \"la\" = \"gliela\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You need to [contact] the manufacturer.", sentence: "Deve ___ al produttore.", answer: "rivolgersi", explanation: "\"Rivolgersi a\" = to contact, turn to." },
      { type: "word-order", prompt: "Put the words in order to say: Actually, the legal guarantee is the seller's responsibility.", words: ["Veramente", "la garanzia", "legale", "è a carico", "del venditore."], translation: "Actually, the legal guarantee is the seller's responsibility.", explanation: "\"A carico di\" = the responsibility of." },
      { type: "multiple-choice", question: "The assistant says \"Deve rivolgersi al produttore\". What's the best reply?", options: ["Veramente la garanzia legale è a carico del venditore.", "Va bene, grazie, arrivederci.", "Lei è maleducato!", "Allora la butto."], correctIndex: 0, explanation: "Polite but firm, and legally right." },
      { type: "dictation", audio: "Qualora non fosse riparabile, vorrei la sostituzione.", explanation: "\"Qualora\" + imperfect subjunctive." },
      { type: "speak", text: "Buongiorno, ho comprato questa macchina del caffè dieci mesi fa e non funziona più. Ecco lo scontrino.", prompt: "Open the conversation: Good morning, I bought this coffee machine ten months ago and it doesn't work any more. Here's the receipt.", tip: "scon-TRI-no: stress on tri.", explanation: "Problem, time, proof." },
    ],
  },
  {
    slug: "b2-error-hunt-legal",
    level: "IT-B2",
    number: 9,
    title: "Error Hunt: Legal Language",
    summary: "Fix the calques and slips in legal and work Italian: tredicesima, ricorso, ferie, and è scaduto.",
    duration: "16 min",
    sections: [
      {
        heading: "Work words",
        body: [
          "\"*Il bonus di Natale\" is an English idea: the December payment Italian employees receive is \"la tredicesima\", a full extra month's salary set by contract, not a discretionary bonus. \"Un bonus\" in Italy usually means a one-off government benefit or a performance bonus (\"un premio di produzione\").",
          "\"*Le vacanze pagate\" should be \"le ferie\": that's the legal word for paid leave, always plural. \"Le vacanze\" is the holiday you go on; \"le ferie\" is the time off you're entitled to: \"ho ancora otto giorni di ferie\", \"vado in vacanza in Sicilia\".",
        ],
        examples: [
          { es: "A dicembre arriva la tredicesima.", en: "The thirteenth month's pay arrives in December." },
          { es: "Quest'anno l'azienda ha dato anche un premio di produzione.", en: "This year the company also paid a performance bonus." },
          { es: "Ho ancora otto giorni di ferie.", en: "I still have eight days' paid leave." },
          { es: "Con le ferie di agosto vado in vacanza in Sicilia.", en: "I'm using my August leave to go on holiday to Sicily." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"*il bonus di Natale\". Write it correctly: The thirteenth month's pay arrives in December.", source: "The thirteenth month's pay arrives in December.", answer: "A dicembre arriva la tredicesima.", altAnswers: ["La tredicesima arriva a dicembre.", "La tredicesima arriva in dicembre."], explanation: "\"La tredicesima\" is the contractual 13th salary." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"*vacanze pagate\". Write it correctly: I still have eight days' paid leave.", source: "I still have eight days' paid leave.", answer: "Ho ancora otto giorni di ferie.", altAnswers: ["Mi restano ancora otto giorni di ferie.", "Mi restano otto giorni di ferie."], explanation: "Paid leave = \"le ferie\"." },
          { type: "multiple-choice", question: "Which sentence uses \"ferie\" and \"vacanza\" correctly?", options: ["Prendo le ferie e vado in vacanza.", "Prendo la vacanza e vado in ferie a Roma.", "Ho tre vacanze pagate.", "Vado in ferie in Sicilia con i bambini della scuola."], correctIndex: 0, explanation: "You take \"le ferie\" (leave) and go \"in vacanza\" (on holiday)." },
        ],
      },
      {
        heading: "Ricorso, not appello",
        body: [
          "\"*Ho fatto un appello contro la multa\": in Italian law \"l'appello\" is the appeal against a court judgement to a higher court. Against a fine or an administrative decision you \"fai ricorso\" or \"presenti ricorso\": \"ho fatto ricorso contro la multa\". (At university, \"l'appello\" is something else again: an exam date.)",
          "Similarly, \"una denuncia\" is a report to the police (\"sporgere denuncia\" = to report a crime), while a complaint to a company is \"un reclamo\". \"*Fare una denuncia al negozio\" sounds like you're calling the police on the shop.",
        ],
        examples: [
          { es: "Ho fatto ricorso contro la multa.", en: "I appealed against the fine." },
          { es: "La sentenza è stata impugnata in appello.", en: "The judgement was challenged on appeal." },
          { es: "Ho sporto denuncia per il furto della bici.", en: "I reported the theft of my bike to the police." },
          { es: "Ho mandato un reclamo al servizio clienti.", en: "I sent a complaint to customer service." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"*ho fatto un appello contro la multa\". Write it correctly: I appealed against the fine.", source: "I appealed against the fine.", answer: "Ho fatto ricorso contro la multa.", altAnswers: ["Ho presentato ricorso contro la multa."], explanation: "Fines and administrative acts: \"ricorso\"." },
          { type: "fill-blank", prompt: "A learner wrote \"*ho fatto una denuncia\" to a phone company. Write the Italian for the bold words.", en: "I sent [a complaint] to customer service.", sentence: "Ho mandato ___ al servizio clienti.", answer: "un reclamo", explanation: "Complaints to companies are \"reclami\"; \"una denuncia\" goes to the police." },
          { type: "listen-choose", audio: "Ho sporto denuncia per il furto della bici.", question: "What did the speaker do?", options: ["reported a theft to the police", "complained to a shop", "appealed a fine", "bought a bike"], correctIndex: 0, explanation: "\"Sporgere denuncia\" = to file a police report." },
        ],
      },
      {
        heading: "Scadere takes essere",
        body: [
          "\"*Il contratto ha scaduto ieri\" uses the wrong auxiliary: \"scadere\" is intransitive and takes \"essere\": \"il contratto è scaduto ieri\", \"la patente è scaduta\". The participle agrees: \"le offerte sono scadute\". The same goes for \"decorrere\" (to run from): \"i termini sono decorsi\".",
        ],
        examples: [
          { es: "Il contratto è scaduto ieri.", en: "The contract expired yesterday." },
          { es: "Mi è scaduta la patente e non me ne sono accorto.", en: "My driving licence expired and I didn't notice." },
          { es: "Le offerte sono scadute a fine mese.", en: "The offers expired at the end of the month." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"*il contratto ha scaduto ieri\". Write it correctly: The contract expired yesterday.", source: "The contract expired yesterday.", answer: "Il contratto è scaduto ieri.", explanation: "\"Scadere\" takes \"essere\"." },
          { type: "speak", text: "Mi è scaduta la patente e non me ne sono accorto.", prompt: "Say it in Italian: My driving licence expired and I didn't notice.", tip: "sca-DU-ta: stress on du.", explanation: "\"Scaduta\" agrees with \"la patente\"; \"accorgersene\" = to notice it." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Fix \"*Ho preso il mio bonus di Natale\" and write: I got my thirteenth month's pay.", source: "I got my thirteenth month's pay.", answer: "Ho preso la tredicesima.", altAnswers: ["Mi è arrivata la tredicesima.", "Ho ricevuto la tredicesima."], explanation: "\"La tredicesima\", with no possessive needed." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Ho tre settimane di vacanze pagate\" and write: I have three weeks' paid leave.", source: "I have three weeks' paid leave.", answer: "Ho tre settimane di ferie.", altAnswers: ["Ho tre settimane di ferie pagate."], explanation: "\"Ferie\" already means paid leave." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Voglio fare appello contro il verbale\" and write: I want to appeal against the ticket.", source: "I want to appeal against the ticket.", answer: "Voglio fare ricorso contro il verbale.", altAnswers: ["Voglio presentare ricorso contro il verbale.", "Voglio fare ricorso contro la multa."], explanation: "\"Ricorso\" for fines." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*La mia carta d'identità ha scaduto\" and write: My identity card has expired.", source: "My identity card has expired.", answer: "La mia carta d'identità è scaduta.", altAnswers: ["Mi è scaduta la carta d'identità."], explanation: "\"Essere scaduto\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Ho fatto una denuncia alla compagnia telefonica\" and write: I made a complaint to the phone company.", source: "I made a complaint to the phone company.", answer: "Ho fatto un reclamo alla compagnia telefonica.", altAnswers: ["Ho presentato un reclamo alla compagnia telefonica.", "Ho mandato un reclamo alla compagnia telefonica."], explanation: "\"Reclamo\" for companies." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I reported the theft to the police.", answer: "Ho sporto denuncia per il furto.", altAnswers: ["Ho denunciato il furto alla polizia.", "Ho fatto denuncia per il furto."], explanation: "Here \"denuncia\" is right." },
      { type: "fill-blank", prompt: "Fix \"*Le offerte hanno scaduto\" and write the Italian for the bold words.", en: "The offers [expired] at the end of the month.", sentence: "Le offerte ___ a fine mese.", answer: "sono scadute", explanation: "\"Essere\" + feminine plural participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The company paid [a performance bonus].", sentence: "L'azienda ha pagato ___.", answer: "un premio di produzione", altAnswers: ["un premio di risultato", "un premio"], explanation: "A real bonus is \"un premio\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'm using my August leave to go on holiday.", words: ["Con le ferie", "di agosto", "vado", "in vacanza."], translation: "I'm using my August leave to go on holiday.", explanation: "\"Le ferie\" (leave) vs \"la vacanza\" (trip)." },
      { type: "multi-select", question: "Which sentences are correct? Choose all that apply.", options: ["Il contratto è scaduto.", "Il contratto ha scaduto.", "Ho fatto ricorso contro la multa.", "Ho fatto appello contro la multa.", "A dicembre prendo la tredicesima.", "Ho ancora dieci giorni di ferie."], correctIndexes: [0, 2, 4, 5], explanation: "\"È scaduto\", \"ricorso\", \"tredicesima\", \"ferie\"." },
      { type: "dictation", audio: "Ho fatto ricorso contro la multa e il ricorso è stato accolto.", explanation: "\"Ricorso\" twice; \"accolto\" = upheld." },
      { type: "speak", text: "A dicembre prendo la tredicesima, e con le ferie di agosto vado in vacanza.", prompt: "Fix it and say it: a learner said \"A dicembre prendo il bonus di Natale, e con le vacanze pagate di agosto vado in vacanza.\"", tip: "FE-rie: two syllables.", explanation: "\"La tredicesima\" and \"le ferie\"." },
    ],
  },
  {
    slug: "b2-mission-appeal-letter",
    level: "IT-B2",
    number: 10,
    title: "Real-World Mission: Appeal a Fine",
    summary: "Write a formal appeal to the Prefetto against a restricted-zone fine, with the standard structure and formulas.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "Heading and identification",
        body: [
          "Your mission: you received a fine for entering Bologna's ZTL on 12 March, but you were driving a hire car and you had booked a hotel inside the zone, which should have registered your number plate. You'll write \"un ricorso al Prefetto\". It starts with the addressee (\"Al Signor Prefetto di Bologna\"), \"Oggetto:\" (subject line) and your identification in the third person: \"Il sottoscritto Mark Taylor, nato a Leeds il 4/5/1985, residente a ...\".",
          "\"Il sottoscritto\" / \"la sottoscritta\" (the undersigned) is followed by the verb in the third person: \"Il sottoscritto ... presenta ricorso avverso il verbale n. 1234\". \"Avverso\" is the bureaucratic for against.",
        ],
        examples: [
          { es: "Al Signor Prefetto di Bologna", en: "To the Prefect of Bologna" },
          { es: "Oggetto: ricorso avverso il verbale n. 1234 del 12 marzo", en: "Re: appeal against ticket no. 1234 of 12 March" },
          { es: "Il sottoscritto Mark Taylor, nato a Leeds il 4 maggio 1985, residente a Londra,", en: "I, the undersigned Mark Taylor, born in Leeds on 4 May 1985, resident in London," },
          { es: "presenta ricorso avverso il verbale indicato in oggetto.", en: "hereby appeals against the ticket referred to above." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal letter style.", source: "Re: appeal against ticket no. 1234", answer: "Oggetto: ricorso avverso il verbale n. 1234", altAnswers: ["Oggetto: ricorso contro il verbale n. 1234", "Oggetto: ricorso avverso il verbale numero 1234"], explanation: "\"Oggetto:\" introduces the subject; \"avverso\" = against." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The undersigned] Mark Taylor hereby appeals.", sentence: "___ Mark Taylor presenta ricorso.", answer: "Il sottoscritto", explanation: "Third person after \"il sottoscritto\"." },
          { type: "multiple-choice", question: "A woman is writing. How does she identify herself?", options: ["La sottoscritta Anna Bianchi", "Il sottoscritto Anna Bianchi", "Io sottoscritta Anna Bianchi, presento", "Anna Bianchi sottoscrive"], correctIndex: 0, explanation: "\"La sottoscritta\" agrees with the writer." },
        ],
      },
      {
        heading: "The facts and the grounds",
        body: [
          "Set out the facts with \"premesso che\" (given that, whereas) and the grounds with \"considerato che\" or \"in quanto\". Use the pluperfect and passive for what had happened: \"l'albergo aveva comunicato la targa alla polizia locale\", \"il veicolo era stato noleggiato\".",
          "Each point is short and factual. Attach evidence: \"si allega\" or \"si allegano\" + documents (\"si allegano la conferma della prenotazione e il contratto di noleggio\").",
        ],
        examples: [
          { es: "Premesso che il giorno 12 marzo il sottoscritto alloggiava presso un albergo del centro storico,", en: "Given that on 12 March the undersigned was staying at a hotel in the historic centre," },
          { es: "considerato che l'albergo aveva comunicato la targa del veicolo alla polizia locale,", en: "considering that the hotel had notified the local police of the vehicle's number plate," },
          { es: "l'accesso alla ZTL era da ritenersi autorizzato.", en: "access to the restricted zone should be considered authorised." },
          { es: "Si allegano la conferma della prenotazione e il contratto di noleggio.", en: "Please find attached the booking confirmation and the hire contract." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal style.", source: "The hotel had notified the police of the number plate.", answer: "L'albergo aveva comunicato la targa alla polizia.", altAnswers: ["L'albergo aveva comunicato la targa alla polizia locale.", "L'hotel aveva comunicato la targa alla polizia.", "L'hotel aveva comunicato la targa alla polizia locale."], explanation: "Pluperfect for the earlier event." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal style.", source: "Please find attached the booking confirmation.", answer: "Si allega la conferma della prenotazione.", altAnswers: ["Si allega conferma della prenotazione.", "In allegato la conferma della prenotazione."], explanation: "\"Si allega\" (singular) / \"si allegano\" (plural)." },
          { type: "listen-choose", audio: "Premesso che il giorno 12 marzo il sottoscritto alloggiava presso un albergo del centro storico.", question: "What fact is being stated?", options: ["He was staying at a hotel on 12 March.", "He booked a hotel for 12 March but didn't go.", "He parked outside a hotel.", "He worked at a hotel."], correctIndex: 0, explanation: "\"Alloggiava presso\" = was staying at." },
        ],
      },
      {
        heading: "The request and the close",
        body: [
          "The request uses \"chiede\" (still third person) + noun: \"chiede l'annullamento del verbale\" (requests the cancellation of the ticket) or \"chiede che il verbale venga annullato\" with the subjunctive. Close with the place and date, \"Distinti saluti\" and the signature (\"In fede\" is also used on forms).",
        ],
        examples: [
          { es: "Per i motivi sopra esposti, chiede l'annullamento del verbale.", en: "For the reasons set out above, he requests the cancellation of the ticket." },
          { es: "Chiede che il verbale venga annullato.", en: "He requests that the ticket be cancelled." },
          { es: "Londra, 2 aprile. Distinti saluti, Mark Taylor", en: "London, 2 April. Yours faithfully, Mark Taylor" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal style.", source: "For the reasons set out above, he requests the cancellation of the ticket.", answer: "Per i motivi sopra esposti, chiede l'annullamento del verbale.", altAnswers: ["Per i motivi esposti, chiede l'annullamento del verbale.", "Per i motivi sopra esposti chiede l'annullamento del verbale."], explanation: "\"Sopra esposti\" = set out above." },
          { type: "speak", text: "Per i motivi sopra esposti, chiede che il verbale venga annullato.", prompt: "Read the request aloud: For the reasons set out above, he requests that the ticket be cancelled.", tip: "an-nul-LA-to: two double consonants.", explanation: "\"Chiedere che\" + subjunctive \"venga annullato\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal style.", source: "The undersigned hereby appeals against the ticket.", answer: "Il sottoscritto presenta ricorso avverso il verbale.", altAnswers: ["Il sottoscritto presenta ricorso contro il verbale.", "La sottoscritta presenta ricorso avverso il verbale."], explanation: "Third person after \"il sottoscritto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal style.", source: "The vehicle had been hired.", answer: "Il veicolo era stato noleggiato.", altAnswers: ["Il veicolo era stato preso a noleggio.", "L'auto era stata noleggiata."], explanation: "Pluperfect passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal style.", source: "Access to the zone should be considered authorised.", answer: "L'accesso alla zona era da ritenersi autorizzato.", altAnswers: ["L'accesso alla ZTL era da ritenersi autorizzato.", "L'accesso alla zona è da ritenersi autorizzato.", "L'accesso alla ZTL è da ritenersi autorizzato."], explanation: "\"Da ritenersi\" = to be considered." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal style.", source: "He requests that the ticket be cancelled.", answer: "Chiede che il verbale venga annullato.", altAnswers: ["Chiede che il verbale sia annullato.", "Chiede l'annullamento del verbale."], explanation: "\"Chiedere che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal style.", source: "Please find attached the hire contract.", answer: "Si allega il contratto di noleggio.", altAnswers: ["In allegato il contratto di noleggio."], explanation: "\"Il noleggio\" = hire, rental of a vehicle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Given that] on 12 March he was staying in Bologna, ...", sentence: "___ il 12 marzo alloggiava a Bologna, ...", answer: "Premesso che", explanation: "\"Premesso che\" introduces the facts." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He appeals [against] the ticket.", sentence: "Presenta ricorso ___ il verbale.", answer: "avverso", altAnswers: ["contro"], explanation: "\"Avverso\" is the bureaucratic against." },
      { type: "word-order", prompt: "Put the words in order to say: For the reasons set out above, he requests the cancellation of the ticket.", words: ["Per i motivi", "sopra esposti,", "chiede", "l'annullamento", "del verbale."], translation: "For the reasons set out above, he requests the cancellation of the ticket.", explanation: "Standard closing request." },
      { type: "multiple-choice", question: "Which closing fits a formal appeal?", options: ["Distinti saluti", "Un abbraccio", "Ciao e grazie", "A presto!"], correctIndex: 0, explanation: "\"Distinti saluti\" is the formal close." },
      { type: "dictation", audio: "Si allegano la conferma della prenotazione e il contratto di noleggio.", explanation: "\"Si allegano\": plural, two documents." },
      { type: "speak", text: "Il sottoscritto presenta ricorso avverso il verbale e ne chiede l'annullamento.", prompt: "Read it aloud: The undersigned appeals against the ticket and requests its cancellation.", tip: "sot-to-SCRIT-to: two double consonants.", explanation: "\"Ne\" = of it (the ticket)." },
    ],
  },
];

export const IT_B2_U24_WRITING: WriteExercise = {
  type: "write",
  prompt: "You received a parking fine in Florence for a car you had already sold two weeks before the date on the ticket. Write a formal appeal (ricorso) to the Prefetto: heading and subject line, your identification as \"il sottoscritto / la sottoscritta\", the facts with \"premesso che\", your grounds, the attached documents and your request, with a formal close.",
  minWords: 120,
  maxWords: 200,
  rubric: [
    "Uses the formal layout: addressee, Oggetto, il sottoscritto / la sottoscritta with third-person verbs, place, date, Distinti saluti",
    "Sets out facts and grounds with premesso che, considerato che, in quanto and the pluperfect or passive for earlier events (era stata venduta)",
    "Lists attachments with si allega / si allegano and makes the request with chiede + noun or chiede che + subjunctive",
    "Uses legal vocabulary accurately (ricorso, verbale, annullamento, targa, avverso) and never appello for a fine",
  ],
  modelAnswer: "Al Signor Prefetto di Firenze\n\nOggetto: ricorso avverso il verbale n. 5678 del 18 settembre\n\nLa sottoscritta Sarah Collins, nata a Bristol il 12 giugno 1990 e residente a Firenze in via dei Serragli 14, presenta ricorso avverso il verbale indicato in oggetto, relativo a una sosta vietata in via Guelfa.\n\nPremesso che l'automobile targata AB123CD era stata venduta dalla sottoscritta il 4 settembre, come risulta dall'atto di vendita registrato presso il Pubblico Registro Automobilistico, considerato che alla data dell'infrazione il veicolo non era più di sua proprietà, la sottoscritta ritiene di non essere responsabile della violazione contestata, in quanto il verbale avrebbe dovuto essere notificato al nuovo proprietario.\n\nSi allegano la copia dell'atto di vendita e la copia del verbale.\n\nPer i motivi sopra esposti, la sottoscritta chiede che il verbale venga annullato.\n\nFirenze, 2 ottobre\n\nDistinti saluti\nSarah Collins",
  explanation: "The appeal follows the standard layout, identifies the writer as \"la sottoscritta\" with third-person verbs, and builds the case with \"premesso che\", \"considerato che\" and \"in quanto\". The pluperfect passive \"era stata venduta\" places the sale before the fine, \"si allegano\" lists the evidence, and \"chiede che il verbale venga annullato\" makes the request with the subjunctive.",
};
