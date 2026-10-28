// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u25.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 25: Housing. Rental ads, viewings, the contract, the
// condominio, polite requests and complaints; conditional, si, andare +
// participle, relatives, è necessario che. Conventions:
// docs/italian-course/authoring.md.
export const IT_B1_U25: Lesson[] = [
  {
    slug: "b1-renting-ads",
    level: "IT-B1",
    number: 1,
    title: "Reading Rental Ads",
    summary: "Decode Italian rental ads: the type of apartment, furnishing, costs, floor, energy class and the abbreviations.",
    duration: "17 min",
    sections: [
      {
        heading: "Affittasi bilocale",
        body: [
          "Italian apartments are counted by rooms (\"locali\"), not by bedrooms, and the kitchen and bathroom don't count: \"un monolocale\" is a studio, \"un bilocale\" has a living room and one bedroom, \"un trilocale\" a living room and two bedrooms. So an English two-bedroom apartment is \"un trilocale\". Size is in square meters: \"60 mq\" (metri quadri).",
          "\"Affittasi\" is the shop-sign form of \"si affitta\" (for rent), like \"vendesi\" (for sale). \"Arredato\" means furnished, \"semiarredato\" part-furnished, \"vuoto\" or \"non arredato\" unfurnished. \"Cucina abitabile\" is a kitchen big enough to eat in; \"angolo cottura\" is a kitchenette.",
        ],
        examples: [
          { es: "Affittasi bilocale arredato, 55 mq, zona Navigli.", en: "For rent: furnished one-bedroom apartment, 55 sq m, Navigli area." },
          { es: "Monolocale con angolo cottura, ideale per studenti.", en: "Studio with kitchenette, ideal for students." },
          { es: "Trilocale con cucina abitabile e doppi servizi.", en: "Two-bedroom apartment with an eat-in kitchen and two bathrooms." },
          { es: "Cerco un bilocale vicino alla metro.", en: "I'm looking for a one-bedroom apartment near the metro." },
          { es: "L'appartamento è semiarredato: c'è la cucina ma non ci sono i letti.", en: "The apartment is part-furnished: there's a kitchen but no beds." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm looking for a furnished studio.", answer: "Cerco un monolocale arredato.", altAnswers: ["Sto cercando un monolocale arredato.", "Io cerco un monolocale arredato."], explanation: "\"Monolocale\": one room. \"Arredato\" follows the noun." },
          { type: "multiple-choice", question: "You need two bedrooms and a living room. Which ad fits?", options: ["Affittasi trilocale", "Affittasi bilocale", "Affittasi monolocale", "Affittasi due camere"], correctIndex: 0, explanation: "Living room + two bedrooms = three \"locali\": \"trilocale\"." },
        ],
      },
      {
        heading: "Costs: affitto, spese, provvigione",
        body: [
          "\"L'affitto\" (or \"il canone\") is the monthly rent. \"Spese condominiali\" are the building's running costs (cleaning, elevator, sometimes heating), and the ad says whether they're \"incluse\" / \"comprese\" or \"escluse\". \"Riscaldamento centralizzato\" is shared heating, paid through the condominio; \"termoautonomo\" means the apartment has its own boiler.",
          "Through an agency you pay \"la provvigione\" (the agency fee), often one month's rent. \"No agenzie\" in a private ad means the owner doesn't want agents calling. \"Libero da subito\" = available now.",
          "Student ads add their own words: \"camera singola\" or \"doppia\" (a single or shared room), \"posto letto\" (a bed in a shared room), \"zona ben servita\" (good transport). \"Trattativa riservata\" means the price is given on request. A classic scam is an apartment that is too cheap, with an owner \"abroad\" who wants the deposit before you see it: never pay anything before you have seen the place and the contract.",
        ],
        examples: [
          { es: "Affitto 750 euro al mese, spese condominiali escluse.", en: "Rent 750 euros a month, building charges not included." },
          { es: "Spese comprese, riscaldamento centralizzato.", en: "Charges included, shared central heating." },
          { es: "Appartamento termoautonomo, libero da subito.", en: "Apartment with its own heating, available now." },
          { es: "Privato affitta, no agenzie.", en: "Private landlord, no agencies." },
          { es: "La provvigione dell'agenzia è pari a una mensilità.", en: "The agency fee is equal to one month's rent." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rent is 800 euros a month, charges included.", answer: "L'affitto è di 800 euro al mese, spese incluse.", altAnswers: ["L'affitto è 800 euro al mese, spese incluse.", "L'affitto è di 800 euro al mese, spese comprese.", "L'affitto è 800 euro al mese, spese comprese."], explanation: "\"Al mese\" = per month; \"incluse\" agrees with \"spese\"." },
          { type: "listen-choose", audio: "Appartamento termoautonomo, libero da subito.", question: "What do you learn?", options: ["It has its own heating and is available now.", "Heating is free and it's available soon.", "It's furnished and free of charge.", "It has no heating and is free."], correctIndex: 0, explanation: "\"Termoautonomo\" = own heating; \"libero da subito\" = available now." },
        ],
      },
      {
        heading: "Floor, elevator and energy class",
        body: [
          "\"Piano terra\" is the ground floor and \"primo piano\" the floor above it: what Americans call the first floor is the Italian \"piano terra\", so an American third floor is \"secondo piano\". \"Piano rialzato\" is a raised ground floor; \"ultimo piano\" the top floor; \"mansarda\" an attic apartment. Many old buildings have \"senza ascensore\": check before you rent the fifth floor.",
          "Every ad must show \"la classe energetica\", from A4 (best) to G (worst), which tells you how much heating will cost. Extras: \"posto auto\" (parking space), \"cantina\" (cellar), \"balcone\", \"terrazzo\".",
        ],
        examples: [
          { es: "Quarto piano senza ascensore.", en: "Fourth floor, no elevator." },
          { es: "Mansarda luminosa all'ultimo piano, classe energetica G.", en: "Bright attic apartment on the top floor, energy class G." },
          { es: "Piano rialzato con balcone e cantina.", en: "Raised ground floor with a balcony and a cellar." },
          { es: "Con posto auto in cortile.", en: "With a parking space in the courtyard." },
          { es: "Abito al secondo piano di un palazzo dell'Ottocento.", en: "I live on the second floor of a 19th-century building." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The apartment is on the third floor, with an elevator.", answer: "L'appartamento è al terzo piano, con ascensore.", altAnswers: ["L'appartamento è al terzo piano, con l'ascensore.", "L'appartamento si trova al terzo piano, con ascensore."], explanation: "\"Al\" + ordinal + \"piano\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Studio [on the ground floor], no balcony.", sentence: "Monolocale ___, senza balcone.", answer: "al piano terra", altAnswers: ["a piano terra", "al pianoterra", "a pianterreno", "al pianterreno"], explanation: "\"Piano terra\" = ground floor." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For rent: unfurnished two-bedroom apartment.", answer: "Affittasi trilocale non arredato.", altAnswers: ["Affittasi trilocale vuoto.", "Si affitta trilocale non arredato.", "Si affitta trilocale vuoto."], explanation: "Two bedrooms + living room = \"trilocale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are the building charges included?", answer: "Le spese condominiali sono incluse?", altAnswers: ["Le spese condominiali sono comprese?", "Le spese sono incluse?", "Le spese sono comprese?"], explanation: "\"Spese\" is feminine plural: \"incluse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there an elevator?", answer: "C'è l'ascensore?", altAnswers: ["C'è un ascensore?", "Il palazzo ha l'ascensore?"], explanation: "\"C'è\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The apartment has its own heating.", answer: "L'appartamento è termoautonomo.", altAnswers: ["L'appartamento ha il riscaldamento autonomo.", "L'appartamento ha il riscaldamento indipendente."], explanation: "\"Termoautonomo\": own boiler, own bills." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I live on the top floor.", answer: "Abito all'ultimo piano.", altAnswers: ["Vivo all'ultimo piano.", "Io abito all'ultimo piano."], explanation: "\"All'\" before a vowel." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Studio [with a kitchenette], 30 sq m.", sentence: "Monolocale ___, 30 mq.", answer: "con angolo cottura", explanation: "\"Angolo cottura\": literally cooking corner." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The agency fee [is equal to] one month's rent.", sentence: "La provvigione ___ una mensilità.", answer: "è pari a", altAnswers: ["corrisponde a", "è di"], explanation: "\"Pari a\" = equal to." },
      { type: "word-order", prompt: "Put the words in order to say: Bright attic apartment with a terrace.", words: ["Mansarda", "luminosa", "con", "terrazzo."], translation: "Bright attic apartment with a terrace.", explanation: "Ad style: nouns and adjectives, no verb." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "il monolocale", right: "studio apartment" }, { left: "il bilocale", right: "one-bedroom apartment" }, { left: "arredato", right: "furnished" }, { left: "la cantina", right: "cellar" }, { left: "il posto auto", right: "parking space" }], explanation: "Count the rooms, not the bedrooms." },
      { type: "multiple-choice", question: "An ad says \"spese escluse\". What does it mean?", options: ["You pay the building charges on top of the rent.", "There are no charges.", "The charges are included.", "Students are excluded."], correctIndex: 0, explanation: "\"Escluse\" = not included." },
      { type: "dictation", audio: "Affittasi bilocale arredato, spese escluse.", explanation: "\"Affittasi\": double f, double t." },
      { type: "speak", text: "Buongiorno, chiamo per l'annuncio del bilocale arredato. È ancora disponibile?", prompt: "Call about an ad: Good morning, I'm calling about the ad for the furnished one-bedroom apartment. Is it still available?", tip: "\"Bilocale\": bi-LO-ca-le.", explanation: "\"Chiamo per l'annuncio\" opens the call." },
    ],
  },
  {
    slug: "b1-viewing-a-flat",
    level: "IT-B1",
    number: 2,
    title: "Viewing an Apartment",
    summary: "Book a viewing and ask the landlord the right questions politely, with the conditional and si.",
    duration: "17 min",
    sections: [
      {
        heading: "Booking the viewing",
        body: [
          "A viewing is \"una visita\" and the verb is \"vedere\" or \"visitare l'appartamento\". Book it with the conditional: \"Sarebbe possibile vedere l'appartamento questa settimana?\", \"Quando potrei passare?\". The landlord is \"il proprietario / la proprietaria\"; in conversation many people say \"il padrone di casa\".",
          "Use \"Lei\" with the landlord and the agent. If they switch to \"tu\" first, follow them.",
          "Watch the pronoun for the place: \"lo\" for \"l'appartamento\", \"la\" for \"la casa\" or \"la stanza\" (\"Posso vederla?\"), and the past participle follows it: \"L'ho visto\" (the apartment), \"L'ho vista\" (the house). To ask without sounding blunt, wrap the question: \"Vorrei sapere se le spese sono comprese\", \"Mi può dire quanto è la caparra?\", with normal word order after \"se\" or \"quanto\". To leave without committing: \"Mi piace molto, ci penso e Le faccio sapere entro domani\".",
        ],
        examples: [
          { es: "Sarebbe possibile vedere l'appartamento questa settimana?", en: "Would it be possible to see the apartment this week?" },
          { es: "Quando potrei passare a vederlo?", en: "When could I come by to see it?" },
          { es: "Va bene giovedì alle sei?", en: "Is Thursday at six all right?" },
          { es: "Il proprietario abita al piano di sopra.", en: "The owner lives on the floor above." },
          { es: "Ci vediamo davanti al portone.", en: "See you in front of the main door." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When could I come and see it?", answer: "Quando potrei passare a vederlo?", altAnswers: ["Quando potrei venire a vederlo?", "Quando potrei vederlo?"], explanation: "\"Passare / venire a\" + infinitive; \"lo\" = the apartment." },
          { type: "listen-choose", audio: "Va bene giovedì alle sei? Ci vediamo davanti al portone.", question: "Where will they meet?", options: ["in front of the building's main door", "at the agency", "in the apartment", "at the bus stop"], correctIndex: 0, explanation: "\"Il portone\" = the building's main door." },
        ],
      },
      {
        heading: "Questions about money",
        body: [
          "The essential questions: \"Le spese sono comprese?\", \"A quanto ammontano le spese condominiali?\" (how much do they come to), \"Quanto è la caparra?\" (the deposit, usually two or three months' rent), \"Il contratto è registrato?\". A registered contract protects you, and the anagrafe or the questura may ask for it when you register your residence or renew a permit.",
          "\"Ammontare a\" = to amount to. \"Le bollette\" are the bills (luce, gas, acqua).",
        ],
        examples: [
          { es: "A quanto ammontano le spese condominiali?", en: "How much are the building charges?" },
          { es: "Quanto è la caparra? Due mensilità?", en: "How much is the deposit? Two months' rent?" },
          { es: "Le bollette sono intestate a Lei o all'inquilino?", en: "Are the bills in your name or the tenant's?" },
          { es: "Il contratto è regolarmente registrato?", en: "Is the contract properly registered?" },
          { es: "Quanto si spende in media di riscaldamento?", en: "How much does heating cost on average?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much is the deposit?", answer: "Quanto è la caparra?", altAnswers: ["Quant'è la caparra?", "A quanto ammonta la caparra?", "Di quanto è la caparra?"], explanation: "\"La caparra\" = the deposit in a rental." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "How much [does heating cost] on average?", sentence: "Quanto ___ in media di riscaldamento?", answer: "si spende", explanation: "Impersonal \"si\": how much does one spend." },
        ],
      },
      {
        heading: "Rules and the place",
        body: [
          "Ask about rules with the impersonal \"si\": \"Si possono tenere animali?\" (can you keep pets?), \"Si può fumare sul balcone?\", \"Si può fare la residenza?\" (can I register my residence here?). With a plural noun the verb is plural: \"si possono\".",
          "Then look around and comment: \"Com'è la zona di sera?\", \"I vicini sono tranquilli?\", \"Da che parte è esposto?\" (which way does it face?). \"Esposto a sud\" means sunny, a big plus.",
        ],
        examples: [
          { es: "Si possono tenere animali?", en: "Are pets allowed?" },
          { es: "Si può fare la residenza qui?", en: "Can I register my residence here?" },
          { es: "Com'è la zona di sera?", en: "What's the area like in the evening?" },
          { es: "Il soggiorno è esposto a sud, quindi è molto luminoso.", en: "The living room faces south, so it's very bright." },
          { es: "I vicini sono tranquilli, sono quasi tutti pensionati.", en: "The neighbors are quiet, nearly all retired." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are pets allowed?", answer: "Si possono tenere animali?", altAnswers: ["Si possono tenere gli animali?", "Sono ammessi animali?", "Sono ammessi gli animali?", "Posso tenere animali?"], explanation: "Si passivante: plural verb with a plural noun." },
          { type: "multiple-choice", question: "Which question is correct?", options: ["Si può fumare sul balcone?", "Si possono fumare sul balcone?", "Se può fumare sul balcone?", "Si può fumando sul balcone?"], correctIndex: 0, explanation: "No plural noun: \"si può\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would it be possible to see the apartment tomorrow?", answer: "Sarebbe possibile vedere l'appartamento domani?", altAnswers: ["Potrei vedere l'appartamento domani?", "Si potrebbe vedere l'appartamento domani?", "Sarebbe possibile visitare l'appartamento domani?"], explanation: "\"Sarebbe possibile\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much are the building charges?", answer: "A quanto ammontano le spese condominiali?", altAnswers: ["Quanto sono le spese condominiali?", "Quanto costano le spese condominiali?", "Di quanto sono le spese condominiali?"], explanation: "\"Ammontare a\" = to amount to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I register my residence here?", answer: "Si può fare la residenza qui?", altAnswers: ["Posso fare la residenza qui?", "Posso prendere la residenza qui?", "Si può prendere la residenza qui?"], explanation: "\"Fare la residenza\" = to register as resident." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is the contract registered?", answer: "Il contratto è registrato?", altAnswers: ["Il contratto viene registrato?", "Il contratto è regolarmente registrato?"], explanation: "Registration at the Agenzia delle Entrate makes it legal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bedroom faces south.", answer: "La camera da letto è esposta a sud.", altAnswers: ["La camera è esposta a sud.", "La camera da letto dà a sud."], explanation: "\"Esposta\" agrees with \"camera\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What's the area like at night?", answer: "Com'è la zona di notte?", altAnswers: ["Com'è la zona la notte?", "Com'è il quartiere di notte?", "Com'è la zona di sera?"], explanation: "\"Com'è\" = what is it like." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Are the bills [in your name]? (formal)", sentence: "Le bollette sono ___?", answer: "intestate a Lei", altAnswers: ["a Suo nome", "a nome Suo", "intestate a lei"], explanation: "\"Intestare a\" = to put in someone's name." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Can you smoke] on the balcony?", sentence: "___ sul balcone?", answer: "Si può fumare", altAnswers: ["Posso fumare"], explanation: "Impersonal \"si può\" + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: When could I come by to see it?", words: ["Quando", "potrei", "passare", "a", "vederlo?"], translation: "When could I come by to see it?", explanation: "\"Lo\" attached to the infinitive." },
      { type: "multiple-choice", question: "The landlord says \"La caparra è di tre mensilità\". What does it mean?", options: ["The deposit is three months' rent.", "The rent is due every three months.", "The contract lasts three months.", "Three months are free."], correctIndex: 0, explanation: "\"Mensilità\" = a month's payment." },
      { type: "dictation", audio: "Si possono tenere animali in questo palazzo?", explanation: "\"Si possono\": plural, because \"animali\" is plural." },
      { type: "speak", text: "Scusi, le spese sono comprese? E quanto è la caparra?", prompt: "Ask the landlord: Excuse me, are the charges included? And how much is the deposit?", tip: "\"Caparra\": double r, rolled.", explanation: "The two money questions every viewing needs." },
    ],
  },
  {
    slug: "b1-the-contract",
    level: "IT-B1",
    number: 3,
    title: "The Rental Contract",
    summary: "Understand the main Italian rental contracts, the deposit, notice, utilities and the rules written as va + participle.",
    duration: "17 min",
    sections: [
      {
        heading: "4+4, 3+2 and short lets",
        body: [
          "The standard contract is \"il 4+4\": four years, renewed automatically for four more unless the landlord has a legal reason to end it. \"Il 3+2\" (\"a canone concordato\") has a rent agreed with local tenants' unions and costs the owner less tax. \"Il transitorio\" lasts from one to eighteen months, and students sign \"il contratto per studenti universitari\".",
          "The contract must be registered (\"registrato\") with the Agenzia delle Entrate. You may also see \"cedolare secca\": a flat-rate tax the landlord can choose; for you it means the rent can't go up with inflation during the contract.",
        ],
        examples: [
          { es: "Abbiamo firmato un contratto quattro più quattro.", en: "We signed a four-plus-four contract." },
          { es: "Il contratto transitorio dura al massimo diciotto mesi.", en: "The short-term contract lasts eighteen months at most." },
          { es: "Il proprietario ha scelto la cedolare secca.", en: "The landlord has chosen the flat-rate tax." },
          { es: "Il contratto va registrato entro trenta giorni.", en: "The contract must be registered within thirty days." },
          { es: "Con il canone concordato l'affitto è più basso.", en: "With the agreed-rent contract the rent is lower." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The contract must be registered.", answer: "Il contratto va registrato.", altAnswers: ["Il contratto deve essere registrato.", "Il contratto deve venire registrato."], explanation: "\"Andare\" + participle = must be." },
          { type: "multiple-choice", question: "An Erasmus student needs an apartment for ten months. Which contract fits best?", options: ["un contratto per studenti universitari", "un 4+4", "un contratto a tempo indeterminato", "un contratto di lavoro"], correctIndex: 0, explanation: "Student contracts last from six months to three years." },
        ],
      },
      {
        heading: "Caparra, disdetta, preavviso",
        body: [
          "\"La caparra\" (or \"il deposito cauzionale\") is the deposit: by law no more than three months' rent, returned with interest at the end if the apartment is undamaged. Don't call it \"il deposito\" alone: that's a storeroom or a bank deposit.",
          "To leave, you send \"la disdetta\" (notice of termination), usually by registered letter (\"raccomandata con ricevuta di ritorno\") or certified email (PEC), with \"sei mesi di preavviso\". \"Disdire il contratto\" conjugates like \"dire\": \"ho disdetto\".",
          "Avoid \"l'affitto in nero\": an unregistered rent paid off the books. It is illegal, it leaves you without protection, and you can't use it to register your residence. Durations, deposits and tax rules change, so before you sign check the current rules with a tenants' union (such as SUNIA) or a CAF office.",
        ],
        examples: [
          { es: "La caparra mi verrà restituita alla fine del contratto.", en: "The deposit will be returned to me at the end of the contract." },
          { es: "Il preavviso è di sei mesi.", en: "The notice period is six months." },
          { es: "Ho mandato la disdetta con raccomandata.", en: "I sent the notice by registered mail." },
          { es: "Abbiamo disdetto il contratto a gennaio.", en: "We gave notice on the contract in January." },
          { es: "Se l'appartamento è danneggiato, il proprietario può trattenere la caparra.", en: "If the apartment is damaged, the owner can keep the deposit." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The notice period is three months.", answer: "Il preavviso è di tre mesi.", altAnswers: ["Il preavviso è tre mesi.", "Ci sono tre mesi di preavviso."], explanation: "\"Essere di\" + amount." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [gave notice on] the contract.", sentence: "Abbiamo ___ il contratto.", answer: "disdetto", explanation: "\"Disdire\" → \"disdetto\", like \"dire\" → \"detto\"." },
        ],
      },
      {
        heading: "Le utenze",
        body: [
          "\"Le utenze\" are the utility accounts: electricity (\"la luce\"), gas, water, internet. For a long rental you usually transfer them into your name (\"fare la voltura\") or open new ones (\"attivare\"). In contracts and house rules obligations appear as \"va\" + participle: \"L'affitto va pagato entro il giorno 5 di ogni mese\".",
          "\"È necessario che\" and \"bisogna che\" take the subjunctive: \"È necessario che l'inquilino comunichi i guasti\" (the tenant must report faults).",
        ],
        examples: [
          { es: "L'affitto va pagato entro il giorno 5 di ogni mese.", en: "The rent must be paid by the 5th of each month." },
          { es: "Ho fatto la voltura della luce e del gas.", en: "I transferred the electricity and gas into my name." },
          { es: "È necessario che l'inquilino comunichi subito eventuali guasti.", en: "The tenant must report any faults at once." },
          { es: "Bisogna che tu attivi internet prima di trasferirti.", en: "You need to set up the internet before you move in." },
          { es: "Le bollette dell'acqua sono comprese nelle spese.", en: "Water bills are included in the charges." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The tenant [must report] any faults.", sentence: "È necessario che l'inquilino ___ eventuali guasti.", answer: "comunichi", altAnswers: ["segnali"], explanation: "Subjunctive after \"è necessario che\"; -care verbs add h: \"comunichi\"." },
          { type: "dictation", audio: "L'affitto va pagato entro il cinque del mese.", explanation: "\"Va pagato\" = must be paid." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rent must be paid by bank transfer.", answer: "L'affitto va pagato con bonifico.", altAnswers: ["L'affitto va pagato tramite bonifico.", "L'affitto deve essere pagato con bonifico.", "L'affitto va pagato con bonifico bancario."], explanation: "\"Il bonifico\" = bank transfer." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The deposit is two months' rent.", answer: "La caparra è di due mensilità.", altAnswers: ["La caparra è di due mesi di affitto.", "Il deposito cauzionale è di due mensilità."], explanation: "\"Caparra\", not \"deposito\" alone." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I sent the notice by registered letter.", answer: "Ho mandato la disdetta con raccomandata.", altAnswers: ["Ho inviato la disdetta con raccomandata.", "Ho mandato la disdetta con una raccomandata.", "Ho spedito la disdetta con raccomandata."], explanation: "\"La raccomandata\" = registered letter." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We signed a four-year contract.", answer: "Abbiamo firmato un contratto di quattro anni.", altAnswers: ["Abbiamo firmato un contratto quattro più quattro."], explanation: "\"Firmare\" = to sign." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need to transfer the gas into your name. (to a friend)", answer: "Bisogna che tu faccia la voltura del gas.", altAnswers: ["Devi fare la voltura del gas.", "È necessario che tu faccia la voltura del gas.", "Devi intestarti il gas."], explanation: "\"Bisogna che\" + subjunctive \"faccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Water is included in the charges.", answer: "L'acqua è compresa nelle spese.", altAnswers: ["L'acqua è inclusa nelle spese."], explanation: "\"Compresa\" agrees with \"acqua\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The deposit [will be returned] at the end.", sentence: "La caparra ___ alla fine.", answer: "verrà restituita", altAnswers: ["sarà restituita", "verrà resa", "sarà resa"], explanation: "Future passive with \"venire\" or \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The landlord [has chosen] the flat-rate tax.", sentence: "Il proprietario ___ la cedolare secca.", answer: "ha scelto", explanation: "\"Scegliere\" → \"scelto\"." },
      { type: "word-order", prompt: "Put the words in order to say: The contract must be registered within thirty days.", words: ["Il", "contratto", "va", "registrato", "entro", "trenta", "giorni."], translation: "The contract must be registered within thirty days.", explanation: "\"Entro\" = within, by." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "la caparra", right: "the deposit" }, { left: "la disdetta", right: "notice to end a contract" }, { left: "il preavviso", right: "notice period" }, { left: "le utenze", right: "utility accounts" }, { left: "l'inquilino", right: "the tenant" }], explanation: "Contract vocabulary." },
      { type: "listen-choose", audio: "Se l'appartamento è danneggiato, il proprietario può trattenere la caparra.", question: "When can the owner keep the deposit?", options: ["if the apartment is damaged", "if you leave early", "if you're late with the rent", "never"], correctIndex: 0, explanation: "\"Danneggiato\" = damaged; \"trattenere\" = to keep back." },
      { type: "speak", text: "Il contratto è un quattro più quattro, la caparra è di due mensilità e il preavviso è di sei mesi.", prompt: "Explain your contract aloud: It's a four-plus-four, the deposit is two months' rent and the notice is six months.", tip: "\"Preavviso\": double v.", explanation: "Three key facts of a rental contract." },
    ],
  },
  {
    slug: "b1-condominium-life",
    level: "IT-B1",
    number: 4,
    title: "Life in a Condominio",
    summary: "Understand how a condominio works: the amministratore, the residents' meeting, recycling and the house rules.",
    duration: "17 min",
    sections: [
      {
        heading: "Who runs the building",
        body: [
          "Most Italians live in \"un condominio\": a block where each apartment is owned separately and the shared parts (stairs, roof, elevator, courtyard) belong to everyone. \"L'amministratore di condominio\", a professional paid by the owners, collects the charges, calls in repairs and enforces the rules. Some buildings also have \"il portiere\" (the concierge), who takes in parcels.",
          "Decisions are taken at \"la riunione\" or \"l'assemblea di condominio\". Owners vote; tenants (\"gli inquilini\") can usually attend for some topics, such as heating. Costs are split by \"millesimi\": each apartment's share in thousandths.",
        ],
        examples: [
          { es: "L'amministratore ha convocato la riunione di condominio per martedì.", en: "The building manager has called the residents' meeting for Tuesday." },
          { es: "Il portiere mi ha tenuto il pacco.", en: "The concierge kept my package for me." },
          { es: "Le spese per l'ascensore vengono divise in base ai millesimi.", en: "The elevator costs are split according to each apartment's share." },
          { es: "All'assemblea si è deciso di rifare la facciata.", en: "At the meeting it was decided to redo the façade." },
          { es: "Se si rompe qualcosa nelle parti comuni, bisogna chiamare l'amministratore.", en: "If something breaks in the common areas, you need to call the manager." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The building manager has called a meeting.", answer: "L'amministratore ha convocato una riunione.", altAnswers: ["L'amministratore ha convocato un'assemblea.", "L'amministratore di condominio ha convocato una riunione.", "L'amministratore ha indetto una riunione."], explanation: "\"Convocare\" = to call (a meeting)." },
          { type: "multiple-choice", question: "The elevator is broken. Who do you call?", options: ["l'amministratore", "il proprietario del bar", "il sindaco", "l'inquilino del primo piano"], correctIndex: 0, explanation: "Shared parts are the amministratore's job." },
        ],
      },
      {
        heading: "La raccolta differenziata",
        body: [
          "Trash is sorted at home: \"umido\" or \"organico\" (food waste), \"carta\" (paper and cardboard), \"plastica\" (often with metal cans), \"vetro\" (glass) and \"indifferenziato\" (everything else). Many cities collect door to door (\"porta a porta\") on set days, so the building has a \"calendario della raccolta\".",
          "Rules are written with \"va\" + participle or the si passivante: \"Il vetro va portato nella campana\" (the glass must be taken to the glass recycling bin), \"I sacchi si espongono la sera prima\".",
        ],
        examples: [
          { es: "L'umido si raccoglie il lunedì e il giovedì.", en: "Food waste is collected on Mondays and Thursdays." },
          { es: "Il vetro va portato nella campana in fondo alla strada.", en: "Glass must be taken to the glass recycling bin at the end of the street." },
          { es: "I sacchi vanno esposti la sera prima, dopo le 20.", en: "Bags must be put out the evening before, after 8 p.m." },
          { es: "I cartoni della pizza sporchi vanno nell'indifferenziato.", en: "Greasy pizza boxes go in general waste." },
          { es: "Dove si butta la plastica?", en: "Where does plastic go?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where does the glass go?", answer: "Dove si butta il vetro?", altAnswers: ["Dove va il vetro?", "Dove va buttato il vetro?", "Dove si mette il vetro?"], explanation: "Si passivante: \"si butta\" with a singular noun." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The bags [must be put out] in the evening.", sentence: "I sacchi ___ la sera.", answer: "vanno esposti", altAnswers: ["devono essere esposti", "vanno messi fuori"], explanation: "\"Vanno\" + participle agreeing with \"sacchi\"." },
        ],
      },
      {
        heading: "Quiet hours and the courtyard",
        body: [
          "\"Il regolamento di condominio\" usually sets quiet hours (\"le ore di silenzio\"), often 14-16 and 22-8: no drilling, no loud music. It may also forbid hanging laundry on the street side, leaving bikes in the hall or letting dogs into the courtyard.",
          "Bothered by a neighbor? Italians first knock and talk, then write to the amministratore. \"Dare fastidio\" is to bother: \"La musica mi dà fastidio\".",
          "Sorting rules are set by each comune, so they change from city to city: in one town cans go with plastic, in the next with glass. Check the comune's website, app or printed \"calendario\" rather than what worked in your last city. Small building words you'll need: \"il citofono\" (the intercom), \"il pianerottolo\" (the landing), \"la cassetta delle lettere\" (the mailbox).",
        ],
        examples: [
          { es: "Dalle 22 alle 8 non si possono fare lavori rumorosi.", en: "From 10 p.m. to 8 a.m. noisy work is not allowed." },
          { es: "È vietato lasciare le biciclette nell'androne.", en: "Leaving bikes in the entrance hall is forbidden." },
          { es: "Non si stendono i panni sul lato strada.", en: "Laundry isn't hung out on the street side." },
          { es: "Il cane del vicino abbaia tutto il giorno e mi dà fastidio.", en: "The neighbor's dog barks all day and it bothers me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Leaving bikes in the hall is forbidden.", answer: "È vietato lasciare le biciclette nell'androne.", altAnswers: ["È vietato lasciare le bici nell'androne.", "Non si possono lasciare le biciclette nell'androne.", "Non si possono lasciare le bici nell'androne."], explanation: "\"È vietato\" + infinitive." },
          { type: "listen-choose", audio: "Dalle ventidue alle otto non si possono fare lavori rumorosi.", question: "What is the rule?", options: ["No noisy work from 10 p.m. to 8 a.m.", "No work from 8 a.m. to 10 p.m.", "Noisy work only at night.", "No visitors after 10 p.m."], correctIndex: 0, explanation: "\"Lavori rumorosi\" = noisy work." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Food waste is collected on Mondays.", answer: "L'umido si raccoglie il lunedì.", altAnswers: ["L'umido viene raccolto il lunedì.", "L'organico si raccoglie il lunedì.", "L'organico viene raccolto il lunedì."], explanation: "\"Il lunedì\" = every Monday." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The meeting is on Tuesday evening.", answer: "La riunione è martedì sera.", altAnswers: ["La riunione di condominio è martedì sera.", "L'assemblea è martedì sera."], explanation: "No article: this Tuesday." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Glass must be taken to the glass recycling bin.", answer: "Il vetro va portato nella campana.", altAnswers: ["Il vetro deve essere portato nella campana.", "Il vetro va portato alla campana."], explanation: "\"Va portato\" = must be taken." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The neighbor's music bothers me.", answer: "La musica del vicino mi dà fastidio.", altAnswers: ["La musica della vicina mi dà fastidio.", "Mi dà fastidio la musica del vicino.", "Mi dà fastidio la musica della vicina."], explanation: "\"Dare fastidio a\": the music is the subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The concierge took my package.", answer: "Il portiere ha ritirato il mio pacco.", altAnswers: ["Il portiere ha preso il mio pacco.", "La portinaia ha ritirato il mio pacco.", "Il portinaio ha ritirato il mio pacco."], explanation: "\"Ritirare un pacco\" = to collect a package." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the meeting it was decided to repair the roof.", answer: "All'assemblea si è deciso di riparare il tetto.", altAnswers: ["Alla riunione si è deciso di riparare il tetto.", "All'assemblea è stato deciso di riparare il tetto.", "Alla riunione è stato deciso di riparare il tetto."], explanation: "Impersonal \"si\" in the past takes \"essere\": \"si è deciso\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Where does] paper [go]?", sentence: "___ la carta?", answer: "Dove si butta", altAnswers: ["Dove va", "Dove si mette"], explanation: "Si passivante, singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The costs are split [according to] each apartment's share.", sentence: "Le spese vengono divise ___ millesimi.", answer: "in base ai", explanation: "\"In base a\" = according to." },
      { type: "word-order", prompt: "Put the words in order to say: Greasy pizza boxes go in general waste.", words: ["I", "cartoni", "della", "pizza", "sporchi", "vanno", "nell'indifferenziato."], translation: "Greasy pizza boxes go in general waste.", explanation: "Dirty cardboard can't be recycled as paper." },
      { type: "multiple-choice", question: "Which is the food-waste bin?", options: ["l'umido", "il vetro", "la carta", "l'indifferenziato"], correctIndex: 0, explanation: "\"Umido\" (literally damp) = organic waste." },
      { type: "dictation", audio: "Il vetro va portato nella campana in fondo alla strada.", explanation: "\"In fondo a\" = at the end of." },
      { type: "speak", text: "Scusi, dove si butta la plastica? E in che giorni si raccoglie?", prompt: "Ask a neighbor: Excuse me, where does plastic go? And which days is it collected?", tip: "\"Raccoglie\": the gl sounds like the lli in million.", explanation: "Two si passivante questions." },
    ],
  },
  {
    slug: "b1-drill-housing-requests",
    level: "IT-B1",
    number: 5,
    title: "Drill: Requests and Complaints",
    summary: "Produce polite requests and firm complaints for landlords, neighbors and the amministratore.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Soft to firm",
        body: [
          "Requests: \"Potrebbe ...?\", \"Le dispiacerebbe ...?\", \"Sarebbe possibile ...?\". Complaints: state the fact, the effect and what you want: \"Da una settimana il riscaldamento non funziona. Le chiedo di intervenire al più presto\". For a firm but polite request, use \"La prego di\" + infinitive: \"La prego di abbassare la musica\".",
        ],
        examples: [
          { es: "Le dispiacerebbe abbassare la musica dopo le undici?", en: "Would you mind turning the music down after eleven?" },
          { es: "Da una settimana il riscaldamento non funziona.", en: "The heating hasn't worked for a week." },
          { es: "Le chiedo di intervenire al più presto.", en: "I ask you to deal with it as soon as possible." },
          { es: "La prego di far controllare la caldaia.", en: "Please have the boiler checked." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you mind turning the music down? (formal)", answer: "Le dispiacerebbe abbassare la musica?", altAnswers: ["Le dispiace abbassare la musica?", "Potrebbe abbassare la musica?"], explanation: "\"Le dispiacerebbe\" + infinitive: the politest form." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The heating hasn't worked for a week.", answer: "Da una settimana il riscaldamento non funziona.", altAnswers: ["Il riscaldamento non funziona da una settimana."], explanation: "Present + \"da\": still broken." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you send a plumber? (formal)", answer: "Potrebbe mandare un idraulico?", altAnswers: ["Mi potrebbe mandare un idraulico?", "Potrebbe mandarmi un idraulico?", "Potrebbe chiamare un idraulico?"], explanation: "\"L'idraulico\" = the plumber." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The elevator has been broken for three days.", answer: "L'ascensore è rotto da tre giorni.", altAnswers: ["L'ascensore non funziona da tre giorni.", "Da tre giorni l'ascensore è rotto.", "Da tre giorni l'ascensore non funziona."], explanation: "Present + \"da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Please have the window fixed. (formal)", answer: "La prego di far riparare la finestra.", altAnswers: ["Per favore, faccia riparare la finestra.", "Le chiedo di far riparare la finestra."], explanation: "\"Pregare di\" + \"far\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a leak in the bathroom.", answer: "C'è una perdita in bagno.", altAnswers: ["C'è una perdita nel bagno.", "C'è una perdita d'acqua in bagno."], explanation: "\"Una perdita\" = a leak." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Please don't leave your bike on the stairs. (formal)", answer: "La prego di non lasciare la bici sulle scale.", altAnswers: ["Per favore, non lasci la bici sulle scale.", "La prego di non lasciare la bicicletta sulle scale.", "Per favore, non lasci la bicicletta sulle scale."], explanation: "\"Pregare qualcuno di\" + infinitive; Lei negative imperative \"non lasci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would it be possible to repaint the stairwell?", answer: "Sarebbe possibile ridipingere le scale?", altAnswers: ["Sarebbe possibile ritinteggiare le scale?", "Si potrebbero ridipingere le scale?"], explanation: "\"Sarebbe possibile\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The noise wakes me up every night.", answer: "Il rumore mi sveglia ogni notte.", altAnswers: ["Il rumore mi sveglia tutte le notti."], explanation: "\"Svegliare qualcuno\": \"mi sveglia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I ask you to deal with it urgently. (formal)", answer: "Le chiedo di intervenire con urgenza.", altAnswers: ["Le chiedo di intervenire urgentemente.", "Le chiedo di intervenire al più presto."], explanation: "\"Chiedere a qualcuno di\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It's not the first time] this has happened.", sentence: "___ che succede.", answer: "Non è la prima volta", explanation: "\"Non è la prima volta che\" + present." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The neighbors [need to respect] the quiet hours.", sentence: "Bisogna che i vicini ___ le ore di silenzio.", answer: "rispettino", explanation: "Present subjunctive after \"bisogna che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I've already reported] the problem twice.", sentence: "___ il problema due volte.", answer: "Ho già segnalato", altAnswers: ["Ho già comunicato"], explanation: "\"Segnalare\" = to report." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Could you] check the boiler? (formal)", sentence: "___ controllare la caldaia?", answer: "Potrebbe", altAnswers: ["Può", "Lei potrebbe"], explanation: "Conditional for politeness." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The window doesn't close] properly.", sentence: "___ bene.", answer: "La finestra non si chiude", altAnswers: ["La finestra non chiude"], explanation: "\"Chiudersi\": the window doesn't close itself." },
      { type: "word-order", prompt: "Put the words in order to say: I'm writing to report a problem.", words: ["Le", "scrivo", "per", "segnalare", "un", "problema."], translation: "I'm writing to report a problem.", explanation: "\"Per\" + infinitive = in order to." },
      { type: "multiple-choice", question: "Which is the firmest but still polite line?", options: ["Le chiedo di intervenire al più presto.", "Mi scusi tanto, se ha tempo, magari...", "Lo ripari subito!", "Fai qualcosa!"], correctIndex: 0, explanation: "A clear request in \"Lei\", no imperative." },
      { type: "dictation", audio: "Da una settimana c'è una perdita in cucina.", explanation: "\"Perdita\": one t." },
      { type: "dictation", audio: "Le dispiacerebbe non fare rumore dopo le ventidue?", explanation: "A negative infinitive: \"non fare\"." },
      { type: "speak", text: "Buongiorno, Le scrivo per segnalare che da tre giorni l'ascensore non funziona. Le chiedo di intervenire al più presto.", prompt: "Say it in Italian: Good morning, I'm writing to report that the elevator hasn't worked for three days. I ask you to deal with it as soon as possible.", tip: "Slow on \"al più presto\": that's the request.", explanation: "Fact with present + \"da\", then a clear request." },
    ],
  },
  {
    slug: "b1-drill-housing-descriptions",
    level: "IT-B1",
    number: 6,
    title: "Drill: Describing an Apartment",
    summary: "Describe apartments with relative clauses and comparisons: the apartment that I rented, bigger than, the brightest room.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Che, cui, più ... di",
        body: [
          "\"Che\" for subject or direct object (\"la casa che ho visto\"), \"cui\" after a preposition (\"il palazzo in cui abito\", \"la zona di cui ti parlavo\"). Comparisons: \"più / meno ... di\" before a noun or pronoun (\"più grande del mio\"), \"più ... che\" between two adjectives or verbs (\"più comoda che bella\").",
        ],
        examples: [
          { es: "L'appartamento che ho visto ieri è più luminoso del mio.", en: "The apartment I saw yesterday is brighter than mine." },
          { es: "Il palazzo in cui abito è degli anni Sessanta.", en: "The building I live in is from the sixties." },
          { es: "È una casa più comoda che bella.", en: "It's a house that's more comfortable than beautiful." },
          { es: "È la camera più silenziosa della casa.", en: "It's the quietest room in the house." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The building I live in is very old.", answer: "Il palazzo in cui abito è molto vecchio.", altAnswers: ["Il palazzo dove abito è molto vecchio.", "Il palazzo in cui vivo è molto vecchio.", "Il palazzo dove vivo è molto vecchio."], explanation: "\"In cui\" or \"dove\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This apartment is bigger than mine.", answer: "Questo appartamento è più grande del mio.", altAnswers: ["Quest'appartamento è più grande del mio."], explanation: "\"Più ... di\" + \"il mio\" = \"del mio\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The apartment I rented has two balconies.", answer: "L'appartamento che ho affittato ha due balconi.", altAnswers: ["L'appartamento che ho preso in affitto ha due balconi."], explanation: "\"Che\" as direct object." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the brightest room in the house.", answer: "È la stanza più luminosa della casa.", altAnswers: ["È la camera più luminosa della casa."], explanation: "Superlative: article + noun + \"più\" + adjective + \"di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The area I told you about is very quiet. (to a friend)", answer: "La zona di cui ti ho parlato è molto tranquilla.", altAnswers: ["La zona di cui ti parlavo è molto tranquilla.", "Il quartiere di cui ti ho parlato è molto tranquillo."], explanation: "\"Parlare di\" → \"di cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The new kitchen is not as big as the old one.", answer: "La cucina nuova è meno grande di quella vecchia.", altAnswers: ["La nuova cucina è meno grande di quella vecchia.", "La cucina nuova è meno grande della vecchia.", "La cucina nuova non è grande come quella vecchia.", "La cucina nuova non è grande quanto quella vecchia.", "La nuova cucina non è grande come quella vecchia.", "La cucina nuova è più piccola di quella vecchia."], explanation: "\"Quella\" replaces \"la cucina\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rent here is higher than in the center.", answer: "Qui l'affitto è più alto che in centro.", altAnswers: ["L'affitto qui è più alto che in centro."], explanation: "Before a preposition (\"in centro\") use \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The owner, who lives upstairs, is very kind.", answer: "Il proprietario, che abita al piano di sopra, è molto gentile.", altAnswers: ["La proprietaria, che abita al piano di sopra, è molto gentile.", "Il proprietario, che vive al piano di sopra, è molto gentile."], explanation: "\"Che\" as subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's an apartment whose windows face the sea.", answer: "È un appartamento le cui finestre danno sul mare.", altAnswers: ["È un appartamento le cui finestre si affacciano sul mare."], explanation: "\"Le cui\" agrees with \"finestre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Our apartment is as big as yours. (to a friend)", answer: "Il nostro appartamento è grande come il tuo.", altAnswers: ["Il nostro appartamento è grande quanto il tuo.", "Il nostro appartamento è tanto grande quanto il tuo."], explanation: "\"Come\" or \"quanto\" for equality." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The street [where] I live is pedestrian.", sentence: "La via ___ abito è pedonale.", answer: "in cui", altAnswers: ["dove"], explanation: "\"In cui\" = where." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The house is [more practical than] pretty.", sentence: "La casa è ___ carina.", answer: "più pratica che", explanation: "Two adjectives: \"più ... che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This apartment is [cheaper than] that one.", sentence: "Questo appartamento è ___ quello.", answer: "più economico di", altAnswers: ["meno caro di"], explanation: "Before a pronoun like \"quello\": \"più ... di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The friend [with whom] I share the apartment is from Bari.", sentence: "L'amico ___ divido l'appartamento è di Bari.", answer: "con cui", altAnswers: ["con il quale", "col quale"], explanation: "Preposition + \"cui\"." },
      { type: "word-order", prompt: "Put the words in order to say: It's the quietest apartment I've seen.", words: ["È", "l'appartamento", "più", "silenzioso", "che", "ho", "visto."], translation: "It's the quietest apartment I've seen.", explanation: "Superlative + \"che\" clause. In careful Italian the clause after a superlative often takes the subjunctive, \"che abbia visto\"; the indicative is normal in speech." },
      { type: "multiple-choice", question: "\"Questa zona è più cara ___ quella.\" Which word fits?", options: ["di", "che", "come", "a"], correctIndex: 0, explanation: "Before a pronoun: \"di\"." },
      { type: "dictation", audio: "La casa in cui abito è più grande della tua.", explanation: "\"Della tua\" = than yours." },
      { type: "dictation", audio: "È una zona più tranquilla che comoda.", explanation: "Two adjectives compared: \"che\"." },
      { type: "speak", text: "L'appartamento che ho visto oggi è più piccolo del mio, ma è più luminoso e costa meno.", prompt: "Compare aloud: The apartment I saw today is smaller than mine, but it's brighter and costs less.", tip: "\"Luminoso\": lu-mi-NO-so.", explanation: "Relative \"che\" + comparisons." },
    ],
  },
  {
    slug: "b1-dialogue-lab-noisy-neighbour",
    level: "IT-B1",
    number: 7,
    title: "Dialogue Lab: The Noisy Neighbor",
    summary: "Follow a polite but firm conversation about noise between two neighbors in Torino, and choose the right replies.",
    duration: "17 min",
    sections: [
      {
        heading: "Knocking on the door",
        body: [
          "Tom has lived in a condominio in Torino for three months. His upstairs neighbor, il signor Ferraris, moves furniture and plays the drums late at night. Tom knocks. He starts politely, in \"Lei\", with an apology for the disturbance: \"Mi scusi se La disturbo\".",
          "Then the facts, with present + \"da\" and the imperfetto for repeated past events: \"Da qualche settimana, la sera tardi, si sente molto rumore. Ieri sera suonava la batteria fino all'una\".",
        ],
        examples: [
          { es: "Buonasera, sono Tom, il vicino del terzo piano.", en: "Good evening, I'm Tom, your neighbor from the third floor." },
          { es: "Mi scusi se La disturbo a quest'ora.", en: "Sorry to bother you at this hour." },
          { es: "Da qualche settimana, la sera tardi, si sente molto rumore.", en: "For a few weeks now there's been a lot of noise late in the evening." },
          { es: "Ieri sera qualcuno suonava la batteria fino all'una.", en: "Last night someone was playing the drums until one." },
          { es: "Ah, è mio figlio. Non pensavo di fare così tanto rumore.", en: "Oh, that's my son. I didn't think we were making so much noise." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry to bother you. (formal)", answer: "Mi scusi se La disturbo.", altAnswers: ["Mi scusi se la disturbo.", "Scusi se La disturbo.", "Scusi il disturbo."], explanation: "\"Disturbare qualcuno\": direct object, formal \"La\"." },
          { type: "listen-choose", audio: "Ah, è mio figlio. Non pensavo di fare così tanto rumore.", question: "How does the neighbor react?", options: ["He didn't realize it was so loud.", "He says Tom is lying.", "He says the noise is from another apartment.", "He's angry with Tom."], correctIndex: 0, explanation: "\"Non pensavo di\" + infinitive: same subject." },
        ],
      },
      {
        heading: "Asking for a change",
        body: [
          "Tom makes a concrete request with the conditional: \"Sarebbe possibile smettere entro le dieci?\", \"Le dispiacerebbe mettere dei feltrini sotto le sedie?\" (felt pads). He mentions the rules without threatening: \"Il regolamento dice che dopo le ventidue bisogna fare silenzio\".",
          "Ferraris answers defensively at first: \"Ma è solo un'ora!\". Tom concedes and holds firm: \"Lo capisco, però io mi alzo alle sei\".",
        ],
        examples: [
          { es: "Sarebbe possibile smettere entro le dieci?", en: "Would it be possible to stop by ten?" },
          { es: "Le dispiacerebbe mettere dei feltrini sotto le sedie?", en: "Would you mind putting felt pads under the chairs?" },
          { es: "Il regolamento dice che dopo le ventidue bisogna fare silenzio.", en: "The rules say you have to keep quiet after 10 p.m." },
          { es: "Ma è solo un'ora!", en: "But it's only an hour!" },
          { es: "Lo capisco, però io mi alzo alle sei per lavorare.", en: "I understand, but I get up at six for work." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would it be possible to stop by ten?", answer: "Sarebbe possibile smettere entro le dieci?", altAnswers: ["Sarebbe possibile smettere per le dieci?", "Si potrebbe smettere entro le dieci?", "Potreste smettere entro le dieci?"], explanation: "\"Entro\" = by (a time limit)." },
          { type: "multiple-choice", question: "The neighbor says \"Ma è solo un'ora!\". What's Tom's best reply?", options: ["Lo capisco, però io mi alzo alle sei.", "Lei è maleducato!", "Va bene, non importa niente.", "Chiamo subito la polizia!"], correctIndex: 0, explanation: "Concede, then hold your point: \"lo capisco, però\"." },
        ],
      },
      {
        heading: "The agreement",
        body: [
          "They agree: \"Va bene, dirò a mio figlio di smettere alle dieci\" (reported command: \"dire di\" + infinitive). Tom thanks him and keeps the door open: \"Se c'è qualche problema, mi faccia sapere\". Ferraris closes on a friendly note: \"Ma si figuri, tra vicini bisogna aiutarsi\".",
        ],
        examples: [
          { es: "Va bene, dirò a mio figlio di smettere alle dieci.", en: "All right, I'll tell my son to stop at ten." },
          { es: "La ringrazio, è molto gentile.", en: "Thank you, that's very kind." },
          { es: "Se c'è qualche problema, mi faccia sapere.", en: "If there's any problem, let me know." },
          { es: "Si figuri, tra vicini bisogna aiutarsi.", en: "Not at all, neighbors should help each other." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll tell my son [to stop] at ten.", sentence: "Dirò a mio figlio ___ alle dieci.", answer: "di smettere", explanation: "\"Dire a qualcuno di\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Not at all. (formal)", answer: "Si figuri.", altAnswers: ["Si figuri!", "Ma si figuri."], explanation: "\"Si figuri\" is the formal \"figurati\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Good evening, I'm the neighbor from the second floor.", answer: "Buonasera, sono il vicino del secondo piano.", altAnswers: ["Buonasera, sono la vicina del secondo piano."], explanation: "\"Del secondo piano\" = from the second floor." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For a few weeks there's been a lot of noise.", answer: "Da qualche settimana c'è molto rumore.", altAnswers: ["Da qualche settimana si sente molto rumore.", "C'è molto rumore da qualche settimana."], explanation: "\"Qualche\" + singular; present + \"da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Last night the music went on until two.", answer: "Ieri sera la musica è andata avanti fino alle due.", altAnswers: ["Ieri notte la musica è andata avanti fino alle due.", "Ieri sera la musica è durata fino alle due."], explanation: "\"Andare avanti\" = to go on." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I understand, but I work early.", answer: "Lo capisco, però lavoro presto.", altAnswers: ["Capisco, però lavoro presto.", "Lo capisco, ma lavoro presto.", "Capisco, ma lavoro presto.", "Lo capisco, però io lavoro presto."], explanation: "\"Lo capisco, però\": concede, then object." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there's a problem, let me know. (formal)", answer: "Se c'è un problema, mi faccia sapere.", altAnswers: ["Se c'è qualche problema, mi faccia sapere.", "Se ci sono problemi, mi faccia sapere."], explanation: "Lei imperative \"faccia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I didn't think [we were making] so much noise.", sentence: "Non pensavo di ___ così tanto rumore.", answer: "fare", explanation: "Same subject: \"pensare di\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Would you mind] closing the window? (formal)", sentence: "___ chiudere la finestra?", answer: "Le dispiacerebbe", altAnswers: ["Le dispiace"], explanation: "\"Dispiacere a\": \"Le\"." },
      { type: "word-order", prompt: "Put the words in order to say: Neighbors should help each other.", words: ["Tra", "vicini", "bisogna", "aiutarsi."], translation: "Neighbors should help each other.", explanation: "\"Aiutarsi\" = to help each other." },
      { type: "multiple-choice", question: "How does Tom open the conversation?", options: ["Mi scusi se La disturbo.", "Senti, basta con questo rumore!", "Ciao, sei tu che fai rumore?", "Lei deve smettere subito."], correctIndex: 0, explanation: "An apology first: polite, formal, then the facts." },
      { type: "multiple-choice", question: "\"Si sente molto rumore\" means ...", options: ["You can hear a lot of noise.", "He feels very noisy.", "She hears a lot of noise.", "It feels too loud to him."], correctIndex: 0, explanation: "Impersonal \"si sente\" = one hears." },
      { type: "dictation", audio: "Il regolamento dice che dopo le ventidue bisogna fare silenzio.", explanation: "\"Bisogna\" + infinitive." },
      { type: "speak", text: "Mi scusi se La disturbo. Da qualche settimana si sente molto rumore la sera. Sarebbe possibile smettere entro le dieci?", prompt: "Talk to the neighbor: Sorry to bother you. For a few weeks there's been a lot of noise in the evening. Would it be possible to stop by ten?", tip: "Polite but steady: no rising pitch on the request.", explanation: "Apology, fact, request." },
    ],
  },
  {
    slug: "b1-reading-lab-house-rules",
    level: "IT-B1",
    number: 8,
    title: "Reading Lab: Condominium Rules",
    summary: "Read extracts from a regolamento condominiale and work out what is allowed, forbidden and required.",
    duration: "18 min",
    sections: [
      {
        heading: "Article 1: common areas",
        body: [
          "Rules are written in the impersonal register: \"è vietato\" + infinitive, \"è consentito\" (allowed), \"è obbligatorio\", \"va / vanno\" + participle, \"si\" + verb, and the formal \"i condòmini\" (the residents, stressed on the -dò-, not to be confused with \"i condomìni\", the buildings).",
          "Read this extract: \"Art. 1. È vietato depositare biciclette, passeggini o altri oggetti nell'androne e sulle scale. Le parti comuni vanno lasciate libere e pulite. È consentito l'uso del cortile ai bambini dalle 16 alle 19.\"",
        ],
        examples: [
          { es: "È vietato depositare oggetti sulle scale.", en: "Leaving objects on the stairs is forbidden." },
          { es: "Le parti comuni vanno lasciate libere e pulite.", en: "Common areas must be left clear and clean." },
          { es: "È consentito l'uso del cortile ai bambini dalle 16 alle 19.", en: "Children may use the courtyard from 4 to 7 p.m." },
          { es: "I condòmini sono tenuti a rispettare il regolamento.", en: "Residents are required to respect the rules." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "According to Article 1, where can you leave a stroller?", options: ["Nowhere in the hall or on the stairs.", "In the hall only.", "On the stairs from 4 to 7 p.m.", "In the courtyard at night."], correctIndex: 0, explanation: "\"Passeggini\" are among the objects forbidden in the \"androne\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Common areas must be left clean.", answer: "Le parti comuni vanno lasciate pulite.", altAnswers: ["Le parti comuni devono essere lasciate pulite."], explanation: "\"Vanno lasciate\": plural feminine, agreeing with \"parti\"." },
        ],
      },
      {
        heading: "Article 2: noise and pets",
        body: [
          "\"Art. 2. Dalle ore 22 alle ore 8 e dalle 14 alle 16 è necessario che i condòmini evitino rumori molesti. I lavori di ristrutturazione si possono eseguire solo nei giorni feriali. Gli animali domestici sono ammessi, purché non disturbino la quiete e vengano tenuti al guinzaglio nelle parti comuni.\"",
          "\"Purché\" (provided that) takes the subjunctive, like \"è necessario che\". \"Giorni feriali\" are working days, Monday to Saturday: a false friend for anyone who thinks of \"ferie\" (vacation). Sundays and public holidays are \"giorni festivi\".",
        ],
        examples: [
          { es: "È necessario che i condòmini evitino rumori molesti.", en: "Residents must avoid disturbing noise." },
          { es: "I lavori si possono eseguire solo nei giorni feriali.", en: "Building work may only be done on working days." },
          { es: "Gli animali sono ammessi, purché non disturbino.", en: "Pets are allowed, provided they don't disturb anyone." },
          { es: "I cani vanno tenuti al guinzaglio nelle parti comuni.", en: "Dogs must be kept on a leash in common areas." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Can you drill a wall on Sunday?", options: ["No, only on working days.", "Yes, after 4 p.m.", "Yes, before 10 p.m.", "Only with permission from the neighbors."], correctIndex: 0, explanation: "\"Giorni feriali\" = working days, so not Sunday." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Pets are allowed, provided they [don't disturb] anyone.", sentence: "Gli animali sono ammessi, purché non ___ nessuno.", answer: "disturbino", explanation: "\"Purché\" + subjunctive." },
        ],
      },
      {
        heading: "Article 3: trash and payments",
        body: [
          "\"Art. 3. I rifiuti vanno conferiti negli appositi contenitori secondo il calendario della raccolta differenziata. Le spese condominiali vanno versate entro il giorno 5 di ogni bimestre. In caso di ritardo l'amministratore potrà applicare gli interessi previsti dalla legge.\"",
          "Bureaucratic verbs: \"conferire\" (to hand over, here to put out trash), \"versare\" (to pay in), \"appositi\" (the special, designated ones). A \"bimestre\" is a two-month period.",
        ],
        examples: [
          { es: "I rifiuti vanno conferiti negli appositi contenitori.", en: "Trash must be placed in the designated bins." },
          { es: "Le spese vanno versate entro il giorno 5 di ogni bimestre.", en: "Charges must be paid by the 5th of every two-month period." },
          { es: "In caso di ritardo si applicano gli interessi.", en: "In case of late payment, interest is charged." },
          { es: "Ho versato la quota del condominio ieri.", en: "I paid my building charges yesterday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The charges must be paid by the 5th.", answer: "Le spese vanno versate entro il 5.", altAnswers: ["Le spese vanno pagate entro il 5.", "Le spese devono essere pagate entro il 5.", "Le spese vanno versate entro il giorno 5.", "Le spese vanno pagate entro il giorno 5."], explanation: "\"Vanno\" + participle agreeing with \"spese\"." },
          { type: "listen-choose", audio: "I rifiuti vanno conferiti negli appositi contenitori.", question: "What does the rule say?", options: ["Put trash in the designated bins.", "Trash is collected daily.", "Don't put out trash at night.", "Bins are provided by the amministratore."], correctIndex: 0, explanation: "\"Appositi contenitori\" = designated bins." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's forbidden to leave bikes in the hall.", answer: "È vietato lasciare le biciclette nell'androne.", altAnswers: ["È vietato lasciare biciclette nell'androne.", "È vietato depositare biciclette nell'androne.", "È vietato lasciare le bici nell'androne."], explanation: "\"È vietato\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Dogs must be kept on a leash.", answer: "I cani vanno tenuti al guinzaglio.", altAnswers: ["I cani devono essere tenuti al guinzaglio.", "I cani devono stare al guinzaglio."], explanation: "\"Vanno tenuti\": masculine plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Residents must respect the quiet hours.", answer: "I condòmini devono rispettare le ore di silenzio.", altAnswers: ["I condomini devono rispettare le ore di silenzio.", "È necessario che i condòmini rispettino le ore di silenzio.", "È necessario che i condomini rispettino le ore di silenzio.", "I condòmini sono tenuti a rispettare le ore di silenzio.", "I condomini sono tenuti a rispettare le ore di silenzio."], explanation: "\"Essere tenuto a\" = to be required to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Work is allowed only on working days.", answer: "I lavori sono consentiti solo nei giorni feriali.", altAnswers: ["I lavori sono ammessi solo nei giorni feriali.", "I lavori si possono fare solo nei giorni feriali.", "I lavori sono permessi solo nei giorni feriali."], explanation: "\"Feriale\" = working day." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Children can play in the courtyard from four to seven.", answer: "I bambini possono giocare in cortile dalle 16 alle 19.", altAnswers: ["I bambini possono giocare nel cortile dalle 16 alle 19.", "I bambini possono giocare in cortile dalle quattro alle sette.", "I bambini possono giocare nel cortile dalle quattro alle sette."], explanation: "\"Dalle ... alle\" for a time span; notices use the 24-hour clock." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You can keep a cat, [provided that] it doesn't go into the courtyard.", sentence: "Si può tenere un gatto, ___ non vada in cortile.", answer: "purché", altAnswers: ["a patto che", "a condizione che"], explanation: "\"Purché\" + subjunctive \"vada\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Children may use] the courtyard in the afternoon.", sentence: "___ il cortile il pomeriggio.", answer: "I bambini possono usare", altAnswers: ["I bambini possono utilizzare"], explanation: "Plain modal: \"possono\" + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: Trash must be put in the designated bins.", words: ["I", "rifiuti", "vanno", "messi", "negli", "appositi", "contenitori."], translation: "Trash must be put in the designated bins.", explanation: "\"Negli\" before \"appositi\" (vowel)." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "è vietato", right: "it's forbidden" }, { left: "è consentito", right: "it's allowed" }, { left: "i giorni feriali", right: "working days" }, { left: "il guinzaglio", right: "the leash (for a dog)" }, { left: "l'androne", right: "the entrance hall" }], explanation: "Rule vocabulary." },
      { type: "multiple-choice", question: "\"Le spese vanno versate entro il 5 di ogni bimestre\". How often do you pay?", options: ["every two months", "twice a month", "every five months", "once a year"], correctIndex: 0, explanation: "\"Bimestre\" = two months." },
      { type: "multiple-choice", question: "What are \"i condòmini\"?", options: ["the residents", "the buildings", "the managers", "the rules"], correctIndex: 0, explanation: "Stress on -dò-: people. \"Condomìni\": buildings." },
      { type: "dictation", audio: "È necessario che i condòmini evitino rumori molesti.", explanation: "\"Evitino\": subjunctive of \"evitare\"." },
      { type: "speak", text: "Nel mio palazzo è vietato lasciare le bici nell'androne e i cani vanno tenuti al guinzaglio.", prompt: "Explain your building's rules aloud: In my building it's forbidden to leave bikes in the hall, and dogs must be kept on a leash.", tip: "\"Guinzaglio\": gwin-TSA-lyo.", explanation: "\"È vietato\" + infinitive, \"vanno\" + participle." },
    ],
  },
  {
    slug: "b1-error-hunt-housing",
    level: "IT-B1",
    number: 9,
    title: "Error Hunt: Housing",
    summary: "Fix the false friends and slips English speakers make about apartments, rooms, rent and deposits.",
    duration: "17 min",
    sections: [
      {
        heading: "Camera, stanza, appartamento",
        body: [
          "Each sentence below has one mistake. \"Ho affittato una camera in centro\" is fine if you rent a room in a shared apartment, but wrong if you mean a whole apartment: that's \"un appartamento\" or \"una casa\". \"La camera\" is a bedroom or hotel room, never a camera (\"la macchina fotografica\").",
          "\"Due stanze di letto\" is a calque: Italian says \"due camere da letto\". \"La stanza\" is any room; the number of rooms is \"i locali\". And \"il salotto\" or \"il soggiorno\" is the living room, never \"la sala di vivere\".",
        ],
        examples: [
          { es: "Ho affittato un appartamento in centro.", en: "I've rented an apartment in the center." },
          { es: "Affitto una camera in un appartamento condiviso.", en: "I rent a room in a shared apartment." },
          { es: "La casa ha due camere da letto e un soggiorno.", en: "The house has two bedrooms and a living room." },
          { es: "Quante stanze ci sono?", en: "How many rooms are there?" },
          { es: "Ho dimenticato la macchina fotografica in camera.", en: "I left the camera in the bedroom." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"due stanze di letto\". Write it correctly: The apartment has two bedrooms.", source: "The apartment has two bedrooms.", answer: "L'appartamento ha due camere da letto.", altAnswers: ["L'appartamento ha due camere.", "Nell'appartamento ci sono due camere da letto."], explanation: "\"Camera da letto\": with \"da\", for purpose." },
          { type: "multiple-choice", question: "You rent a whole apartment. Which sentence is right?", options: ["Ho affittato un appartamento.", "Ho affittato una camera.", "Ho affittato un piano.", "Ho affittato una stanza di vivere."], correctIndex: 0, explanation: "\"Camera\" is one room only." },
        ],
      },
      {
        heading: "Affitto, caparra, bollette",
        body: [
          "\"Pago la renta\" mixes in Spanish: the Italian is \"pago l'affitto\". \"La rendita\" exists, but it's income from property or investments. For the money you leave as security, say \"la caparra\" or \"il deposito cauzionale\", not \"il deposito\" alone.",
          "\"Le bollette\" are bills for utilities; \"il conto\" is the bill at a restaurant; \"la fattura\" is an invoice. And \"affittare\" works both ways: the landlord \"affitta\" the apartment to you, you \"prendi in affitto\" or simply \"affitti\" it.",
        ],
        examples: [
          { es: "Pago l'affitto il primo del mese.", en: "I pay the rent on the first of the month." },
          { es: "Ho lasciato una caparra di due mensilità.", en: "I left a deposit of two months' rent." },
          { es: "Le bollette della luce arrivano ogni due mesi.", en: "Electricity bills come every two months." },
          { es: "Il proprietario affitta l'appartamento a studenti.", en: "The landlord rents the apartment to students." },
          { es: "Abbiamo preso in affitto una casa al mare.", en: "We rented a house at the seaside." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"pago la renta\". Write it correctly: I pay the rent by transfer.", source: "I pay the rent by transfer.", answer: "Pago l'affitto con bonifico.", altAnswers: ["Pago l'affitto tramite bonifico.", "Pago l'affitto con un bonifico.", "Io pago l'affitto con bonifico."], explanation: "\"L'affitto\" = the rent." },
          { type: "fill-blank", prompt: "A learner wrote \"il deposito\". Write the Italian for the bold words.", en: "The landlord gave me back [the deposit].", sentence: "Il proprietario mi ha restituito ___.", answer: "la caparra", altAnswers: ["il deposito cauzionale"], explanation: "\"La caparra\" in a rental." },
        ],
      },
      {
        heading: "Grammar slips",
        body: [
          "\"È necessario che pago\" needs the subjunctive: \"che io paghi\". \"Le spese va pagato\" forgets agreement: \"le spese vanno pagate\". And \"abito qui per due anni\" for something still true: \"abito qui da due anni\".",
        ],
        examples: [
          { es: "È necessario che tu paghi entro venerdì.", en: "You need to pay by Friday." },
          { es: "Le spese vanno pagate ogni mese.", en: "The charges must be paid every month." },
          { es: "Abito qui da due anni.", en: "I've lived here for two years." },
          { es: "Bisogna che l'amministratore chiami un tecnico.", en: "The manager needs to call a technician." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "A learner wrote \"le spese va pagato\". Write the Italian for the bold words.", en: "The charges [must be paid] by the 10th.", sentence: "Le spese ___ entro il 10.", answer: "vanno pagate", explanation: "Plural verb, feminine plural participle." },
          { type: "listen-choose", audio: "Abito qui da due anni.", question: "What does it mean?", options: ["I've lived here for two years.", "I lived here two years ago.", "I'll live here for two years.", "I lived here for two years, then left."], correctIndex: 0, explanation: "Present + \"da\": still living here." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"ho affittato una camera\" for a whole apartment. Write it correctly: We've rented an apartment in Bologna.", source: "We've rented an apartment in Bologna.", answer: "Abbiamo affittato un appartamento a Bologna.", altAnswers: ["Abbiamo preso in affitto un appartamento a Bologna.", "Noi abbiamo affittato un appartamento a Bologna."], explanation: "A whole apartment: \"un appartamento\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"tre stanze di letto\". Write it correctly: The house has three bedrooms.", source: "The house has three bedrooms.", answer: "La casa ha tre camere da letto.", altAnswers: ["La casa ha tre camere.", "Nella casa ci sono tre camere da letto."], explanation: "\"Camere da letto\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"la sala di vivere\". Write it correctly: The living room is very bright.", source: "The living room is very bright.", answer: "Il soggiorno è molto luminoso.", altAnswers: ["Il salotto è molto luminoso.", "Il soggiorno è luminosissimo.", "Il salotto è luminosissimo."], explanation: "\"Il soggiorno\" or \"il salotto\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"ho perso la mia camera\" meaning a camera. Write it correctly: I've lost my camera.", source: "I've lost my camera.", answer: "Ho perso la macchina fotografica.", altAnswers: ["Ho perso la mia macchina fotografica.", "Io ho perso la macchina fotografica."], explanation: "\"Camera\" = room; a camera is \"la macchina fotografica\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"abito qui per tre anni\". Write it correctly: I've been living here for three years.", source: "I've been living here for three years.", answer: "Abito qui da tre anni.", altAnswers: ["Vivo qui da tre anni.", "Sono tre anni che abito qui.", "Sono tre anni che vivo qui."], explanation: "Present + \"da\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"il conto della luce\". Write it correctly: The electricity bill is very high.", source: "The electricity bill is very high.", answer: "La bolletta della luce è molto alta.", altAnswers: ["La bolletta della luce è altissima.", "La bolletta dell'elettricità è molto alta."], explanation: "Utility bill = \"la bolletta\"." },
      { type: "fill-blank", prompt: "A learner wrote \"è necessario che pago\". Write the Italian for the bold words.", en: "I need [to pay] the deposit.", sentence: "È necessario che io ___ la caparra.", answer: "paghi", explanation: "Subjunctive with h: \"paghi\"." },
      { type: "fill-blank", prompt: "A learner wrote \"la renta\". Write the Italian for the bold words.", en: "[The rent] has gone up.", sentence: "___ è aumentato.", answer: "L'affitto", altAnswers: ["Il canone"], explanation: "\"L'affitto\" is masculine: \"aumentato\"." },
      { type: "word-order", prompt: "Put the words in order to say: I rent a room in a shared apartment.", words: ["Affitto", "una", "camera", "in", "un", "appartamento", "condiviso."], translation: "I rent a room in a shared apartment.", explanation: "Here \"camera\" is right: one room." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Le bollette vanno pagate entro la scadenza.", "Le bollette va pagato entro la scadenza.", "Le bollette vanno pagati entro la scadenza.", "Le bollette va pagate entro la scadenza."], correctIndex: 0, explanation: "Verb and participle both agree with \"bollette\"." },
      { type: "dictation", audio: "Ho lasciato una caparra di due mensilità.", explanation: "\"Mensilità\": stress on the final à." },
      { type: "speak", text: "Abito in un trilocale da due anni: ha due camere da letto e un soggiorno, e pago l'affitto il primo del mese.", prompt: "Fix it and say it: a learner said \"Abito in un trilocale per due anni, con due stanze di letto, e pago la renta il primo.\"", tip: "\"Trilocale\": tri-LO-ca-le.", explanation: "\"Da\" for ongoing, \"camere da letto\", \"l'affitto\"." },
    ],
  },
  {
    slug: "b1-mission-complaint-to-amministratore",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: A Complaint",
    summary: "Write a formal complaint email to the amministratore about a problem in the building, from subject line to closing.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "The problem",
        body: [
          "Your mission: the main door of your building in Via Marconi 14, Bologna, doesn't close properly. For two weeks strangers have been getting in, someone has left trash in the courtyard, and you've already told the concierge twice. Write to the amministratore, il ragionier Lodi (\"Rag.\" is the title of an accountant).",
          "Subject line first, then the formal opening: \"Oggetto: Guasto al portone, Via Marconi 14\", \"Gentile Rag. Lodi, sono Kate Walsh, inquilina dell'interno 7\". \"L'interno\" is the apartment number.",
        ],
        examples: [
          { es: "Oggetto: Guasto al portone, Via Marconi 14", en: "Subject: Broken main door, Via Marconi 14" },
          { es: "Gentile Rag. Lodi,", en: "Dear Mr. Lodi, (an accountant)" },
          { es: "sono Kate Walsh, inquilina dell'interno 7.", en: "I'm Kate Walsh, the tenant of apartment 7." },
          { es: "Le scrivo per segnalare un problema nelle parti comuni.", en: "I'm writing to report a problem in the common areas." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm the tenant of apartment 7.", answer: "Sono l'inquilina dell'interno 7.", altAnswers: ["Sono l'inquilino dell'interno 7.", "Sono l'inquilina dell'appartamento 7.", "Sono l'inquilino dell'appartamento 7."], explanation: "\"Interno\" = apartment number in an address." },
          { type: "multiple-choice", question: "Which subject line is right?", options: ["Oggetto: Guasto al portone, Via Marconi 14", "Ciao, problema!!!", "Il portone", "Urgente urgente urgente"], correctIndex: 0, explanation: "\"Oggetto:\" + what + where." },
        ],
      },
      {
        heading: "Facts and consequences",
        body: [
          "Give the facts with time expressions: \"Da circa due settimane il portone non si chiude bene\". Then the consequences with the passato prossimo: \"Più volte sono entrate persone estranee e ieri qualcuno ha lasciato dei sacchi di rifiuti in cortile\". Show you've tried: \"Ho già segnalato il problema al portiere due volte, ma non è stato fatto niente\".",
        ],
        examples: [
          { es: "Da circa due settimane il portone non si chiude bene.", en: "For about two weeks the main door hasn't closed properly." },
          { es: "Più volte sono entrate persone estranee.", en: "Strangers have come in several times." },
          { es: "Ieri qualcuno ha lasciato dei sacchi di rifiuti in cortile.", en: "Yesterday someone left bags of trash in the courtyard." },
          { es: "Ho già segnalato il problema al portiere, ma non è stato fatto niente.", en: "I've already reported it to the concierge, but nothing has been done." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nothing has been done.", answer: "Non è stato fatto niente.", altAnswers: ["Non è stato fatto nulla.", "Non si è fatto niente.", "Non si è fatto nulla."], explanation: "Passive with \"essere\": \"è stato fatto\"; \"non ... niente\" around it." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[For about two weeks] the door hasn't closed.", sentence: "___ il portone non si chiude.", answer: "Da circa due settimane", explanation: "\"Da\" + period + present." },
        ],
      },
      {
        heading: "The request and closing",
        body: [
          "Make the request clear: \"Le chiedo quindi di far riparare il portone al più presto\" (\"far riparare\": to have it repaired). Add urgency with a subjunctive: \"È importante che il problema venga risolto prima delle vacanze, quando molti condòmini saranno via\". Close: \"Ringraziando per l'attenzione, porgo distinti saluti\".",
        ],
        examples: [
          { es: "Le chiedo quindi di far riparare il portone al più presto.", en: "I therefore ask you to have the door repaired as soon as possible." },
          { es: "È importante che il problema venga risolto entro la fine del mese.", en: "It's important that the problem is solved by the end of the month." },
          { es: "Resto a disposizione per qualsiasi chiarimento.", en: "I'm available for any clarification." },
          { es: "Ringraziando per l'attenzione, porgo distinti saluti.", en: "Thanking you for your attention, sincerely." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I ask you to have the door repaired. (formal)", answer: "Le chiedo di far riparare il portone.", altAnswers: ["Le chiedo di fare riparare il portone.", "Le chiedo di far riparare la porta.", "La prego di far riparare il portone."], explanation: "\"Far riparare\": have it repaired by someone." },
          { type: "listen-choose", audio: "È importante che il problema venga risolto entro la fine del mese.", question: "What does the writer want?", options: ["The problem solved by the end of the month.", "To end the contract this month.", "To pay at the end of the month.", "A meeting at the end of the month."], correctIndex: 0, explanation: "\"Venga risolto\": passive subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm writing to report a problem.", answer: "Le scrivo per segnalare un problema.", altAnswers: ["Scrivo per segnalare un problema.", "Le scrivo per segnalarLe un problema.", "Le scrivo per segnalarle un problema."], explanation: "\"Segnalare\" = to report." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The main door doesn't close properly.", answer: "Il portone non si chiude bene.", altAnswers: ["Il portone non chiude bene.", "Il portone non si chiude correttamente."], explanation: "\"Chiudersi\": it doesn't close." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Strangers have come in several times.", answer: "Più volte sono entrate persone estranee.", altAnswers: ["Sono entrate più volte persone estranee.", "Più volte sono entrati degli estranei.", "Sono entrati degli estranei più volte."], explanation: "\"Entrare\" takes \"essere\": the participle agrees with \"persone\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've already told the concierge twice.", answer: "L'ho già detto al portiere due volte.", altAnswers: ["Ho già avvisato il portiere due volte.", "L'ho già segnalato al portiere due volte.", "Ho già informato il portiere due volte."], explanation: "\"Avvisare qualcuno\" (direct) or \"dirlo a qualcuno\" (indirect)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important that the door is repaired soon.", answer: "È importante che il portone venga riparato presto.", altAnswers: ["È importante che il portone sia riparato presto.", "È importante che il portone venga riparato al più presto.", "È importante che il portone sia riparato al più presto."], explanation: "\"È importante che\" + passive subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [therefore] ask you to intervene.", sentence: "Le chiedo ___ di intervenire.", answer: "quindi", altAnswers: ["pertanto", "perciò", "dunque"], explanation: "\"Quindi\" draws the conclusion." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Thanking you] for your attention, sincerely.", sentence: "___ per l'attenzione, porgo distinti saluti.", answer: "Ringraziando", altAnswers: ["RingraziandoLa", "Ringraziandola"], explanation: "Gerund in the closing formula." },
      { type: "word-order", prompt: "Put the words in order to say: Yesterday someone left trash in the courtyard.", words: ["Ieri", "qualcuno", "ha", "lasciato", "dei", "rifiuti", "in", "cortile."], translation: "Yesterday someone left trash in the courtyard.", explanation: "\"Qualcuno\" takes a singular verb." },
      { type: "multiple-choice", question: "Which closing fits this email?", options: ["Ringraziando per l'attenzione, porgo distinti saluti.", "Un bacio, Kate", "A presto, ciao!", "Fammi sapere, ok?"], correctIndex: 0, explanation: "Formal letter, formal closing." },
      { type: "dictation", audio: "Ho già segnalato il problema al portiere due volte.", explanation: "\"Segnalato\": gn as in \"bagno\"." },
      { type: "speak", text: "Da due settimane il portone non si chiude bene. Le chiedo di farlo riparare al più presto.", prompt: "Summarize your complaint by phone: For two weeks the main door hasn't closed properly. I ask you to have it repaired as soon as possible.", tip: "\"Farlo riparare\": the pronoun joins \"fare\".", explanation: "Fact with \"da\", request with \"far riparare\"." },
    ],
  },
];

export const IT_B1_U25_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a formal email to the amministratore of your building. Since last week the heating in your apartment hasn't worked well and the stairs haven't been cleaned. Introduce yourself (apartment number), describe the two problems and what you've already done, make a clear request, and close formally.",
  minWords: 90,
  maxWords: 150,
  rubric: [
    "Has a subject line (Oggetto: ...) and a formal greeting (Gentile ...)",
    "Uses present + da for problems still going on (da una settimana il riscaldamento non funziona)",
    "Uses polite request forms (Le chiedo di ..., Sarebbe possibile ...?, Potrebbe ...?)",
    "Uses at least one structure from the unit: va / vanno + participle, è necessario che + subjunctive, far + infinitive",
    "Closes with a formal formula (In attesa di un Suo riscontro, cordiali / distinti saluti)",
  ],
  modelAnswer: "Oggetto: Riscaldamento e pulizia delle scale, Via Garibaldi 22. Gentile Sig.ra Bertolini, sono Daniel Moore, inquilino dell'interno 5. Le scrivo per segnalare due problemi. Da una settimana il riscaldamento del mio appartamento funziona male: i termosifoni restano freddi fino a mezzogiorno. Ho già controllato la valvola, ma non è cambiato niente. Inoltre, le scale non vengono pulite da dieci giorni e c'è molta sporcizia sul pianerottolo. Secondo il regolamento le parti comuni vanno pulite ogni settimana. Le chiedo quindi di far controllare l'impianto da un tecnico e di contattare l'impresa delle pulizie. È necessario che il problema del riscaldamento venga risolto prima del freddo. In attesa di un Suo cortese riscontro, porgo distinti saluti. Daniel Moore",
  explanation: "The email states each problem with present + \"da\" (\"da una settimana ... funziona male\", \"non vengono pulite da dieci giorni\"), cites the rule with \"vanno pulite\", asks with \"Le chiedo di far controllare\" and adds urgency with \"è necessario che ... venga risolto\". \"Inoltre\" and \"quindi\" link the paragraphs.",
};
