// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u03.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian C1 Unit 3: Literary and Formal Syntax. Subject-verb inversion,
// the infinitive as a noun, absolute participles and gerunds, long
// hypotactic sentences and their punctuation.
// Conventions: docs/italian-course/authoring.md.
export const IT_C1_U03: Lesson[] = [
  {
    slug: "c1-inversion",
    level: "IT-C1",
    number: 1,
    title: "Inversion",
    summary: "Put the verb before the subject where Italian expects it: after quotations, with new information, in news openings and in formal hypotheticals.",
    duration: "19 min",
    sections: [
      {
        heading: "New information goes last",
        body: [
          "Italian word order is freer than English, and its main principle is simple: what is new or important goes at the end. That is why verbs of arriving, happening, existing and changing often come before their subject: \"È arrivato il treno\", \"Sono cambiate molte cose\", \"Mancano tre giorni alla partenza\". The subject is the news, so it closes the sentence.",
          "English speakers tend to write \"Il treno è arrivato\". It is correct, but it means something slightly different: we were talking about the train, and the news is that it has arrived. \"È arrivato il treno\" answers what's happened?",
          "The same principle explains \"L'ha detto Marco\" (it was Marco who said it): the stressed new element, Marco, goes last.",
        ],
        examples: [
          { es: "È arrivato il treno da Bari.", en: "The train from Bari has arrived." },
          { es: "Negli ultimi anni sono cambiate molte cose.", en: "A lot has changed in recent years." },
          { es: "Mancano tre giorni alla partenza.", en: "There are three days left before departure." },
          { es: "Esiste un problema più grave.", en: "There is a more serious problem." },
          { es: "L'ha detto Marco, non io.", en: "Marco said it, not me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, with the subject last.", source: "A lot has changed in recent years.", answer: "Negli ultimi anni sono cambiate molte cose.", altAnswers: ["Sono cambiate molte cose negli ultimi anni."], explanation: "New subject after the verb; agreement with \"cose\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are three days left before departure.", answer: "Mancano tre giorni alla partenza.", explanation: "\"Mancare\": verb first, plural agreement with \"giorni\"." },
        ],
      },
      {
        heading: "Quotations and news",
        body: [
          "After a quotation, the reporting verb comes before its subject: \"«Non ci sono alternative», ha dichiarato il ministro\". Never \"*il ministro ha dichiarato\" after the quote. Journalism also opens with the verb: \"Ha dichiarato il sindaco: «...»\", \"Si è svolta ieri a Torino la cerimonia di premiazione\", \"Sarà inaugurata domani la nuova linea della metropolitana\".",
          "In literary narrative, inversion marks a solemn or emphatic tone: \"Così parlò il vecchio\", \"Entrò allora un uomo vestito di nero\", \"Disse il presidente: ...\". Use it sparingly in your own prose: once in a paragraph gives rhythm; every sentence sounds parodic.",
        ],
        examples: [
          { es: "«Non ci sono alternative», ha dichiarato il ministro.", en: "\"There are no alternatives\", the minister declared." },
          { es: "Si è svolta ieri a Torino la cerimonia di premiazione.", en: "The award ceremony took place in Turin yesterday." },
          { es: "Sarà inaugurata domani la nuova linea della metropolitana.", en: "The new underground line will be opened tomorrow." },
          { es: "Così parlò il vecchio, e nessuno osò rispondere.", en: "Thus spoke the old man, and no one dared to answer." },
          { es: "Entrò allora un uomo vestito di nero.", en: "Then a man dressed in black came in." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style, verb first).", source: "The award ceremony took place in Turin yesterday.", answer: "Si è svolta ieri a Torino la cerimonia di premiazione.", altAnswers: ["Si è tenuta ieri a Torino la cerimonia di premiazione.", "Si è svolta ieri a Torino la cerimonia di consegna dei premi."], explanation: "News openings put the verb first and the event last." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"There are no alternatives\", [the minister declared].", sentence: "«Non ci sono alternative», ___.", answer: "ha dichiarato il ministro", altAnswers: ["dichiarò il ministro"], explanation: "After a quotation: verb + subject." },
        ],
      },
      {
        heading: "Hypotheticals without se",
        body: [
          "Formal and literary Italian can drop \"se\" in an if clause and start with the subjunctive verb: \"Fosse vero, sarebbe uno scandalo\" (were it true, it would be a scandal), \"Avessi saputo, sarei venuto\" (had I known, I would have come). English does something similar with were and had. The meaning is identical to \"se fosse vero\".",
          "This inversion is common in speech too, in short exclamations: \"Avessi vent'anni di meno!\" (if only I were twenty years younger!). In formal writing, \"Qualora\" or \"Ove\" + subjunctive do a similar job: \"Ove necessario, si provvederà\".",
        ],
        examples: [
          { es: "Fosse vero, sarebbe uno scandalo.", en: "Were it true, it would be a scandal." },
          { es: "Avessi saputo, sarei venuto prima.", en: "Had I known, I would have come earlier." },
          { es: "Avessi vent'anni di meno!", en: "If only I were twenty years younger!" },
          { es: "Ove necessario, si provvederà a sostituire il materiale.", en: "Where necessary, the material will be replaced." },
          { es: "Fosse stato per me, saremmo rimasti a casa.", en: "If it had been up to me, we'd have stayed at home." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, without se.", source: "Had I known, I would have come earlier.", answer: "Avessi saputo, sarei venuto prima.", altAnswers: ["Avessi saputo, sarei venuta prima.", "L'avessi saputo, sarei venuto prima.", "L'avessi saputo, sarei venuta prima."], explanation: "Subjunctive first, no \"se\": formal and literary." },
          { type: "listen-choose", audio: "Fosse stato per me, saremmo rimasti a casa.", question: "What does it mean?", options: ["If it had been up to me, we'd have stayed at home.", "Because of me, we stayed at home.", "It was me who stayed at home.", "If I'm right, we'll stay at home."], correctIndex: 0, explanation: "\"Fosse stato per me\" = if it had been up to me." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with the subject last.", source: "The train from Bari has arrived.", answer: "È arrivato il treno da Bari.", altAnswers: ["È arrivato il treno di Bari."], explanation: "New subject after the verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (with the stress on Marco).", source: "Marco said it, not me.", answer: "L'ha detto Marco, non io.", altAnswers: ["Lo ha detto Marco, non io."], explanation: "The new, stressed element goes last." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style, verb first).", source: "The new underground line will be opened tomorrow.", answer: "Sarà inaugurata domani la nuova linea della metropolitana.", altAnswers: ["Verrà inaugurata domani la nuova linea della metropolitana."], explanation: "News inversion: verb, time, subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "Then a man dressed in black came in.", answer: "Entrò allora un uomo vestito di nero.", altAnswers: ["Allora entrò un uomo vestito di nero."], explanation: "Verb before the new subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without se.", source: "Were it true, it would be a scandal.", answer: "Fosse vero, sarebbe uno scandalo.", explanation: "\"Fosse vero\" = \"se fosse vero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If only I were twenty years younger!", answer: "Avessi vent'anni di meno!", altAnswers: ["Magari avessi vent'anni di meno!", "Se avessi vent'anni di meno!"], explanation: "Exclamative subjunctive without \"se\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There is] a more serious problem.", sentence: "___ un problema più grave.", answer: "Esiste", altAnswers: ["C'è"], explanation: "\"Esiste\" + new subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Thus [spoke the old man].", sentence: "Così ___.", answer: "parlò il vecchio", explanation: "Solemn literary inversion." },
      { type: "word-order", prompt: "Put the words in order to say: Where necessary, the material will be replaced.", words: ["Ove", "necessario,", "si", "provvederà", "a", "sostituire", "il", "materiale."], translation: "Where necessary, the material will be replaced.", explanation: "\"Ove\" = where, if; formal." },
      { type: "multiple-choice", question: "Which is the natural news sentence?", options: ["«Siamo pronti», ha detto il sindaco.", "«Siamo pronti», il sindaco ha detto.", "«Siamo pronti», detto ha il sindaco.", "Il sindaco «Siamo pronti» ha detto."], correctIndex: 0, explanation: "After a quote: verb + subject." },
      { type: "dictation", audio: "Si è svolta ieri a Torino la cerimonia di premiazione.", explanation: "Verb first in a news opening." },
      { type: "speak", text: "«Non ci sono alternative», ha dichiarato il ministro al termine della riunione.", prompt: "Read the news line aloud: 'There are no alternatives', the minister declared at the end of the meeting.", tip: "Drop your voice for the reporting clause.", explanation: "Quotation, then inverted reporting verb." },
    ],
  },
  {
    slug: "c1-infinitive-as-noun",
    level: "IT-C1",
    number: 2,
    title: "The Infinitive as a Noun",
    summary: "Use the infinitive with an article as a noun: il viaggiare, il suo continuo lamentarsi, l'essere stato, al calar del sole.",
    duration: "19 min",
    sections: [
      {
        heading: "Il viaggiare",
        body: [
          "Any Italian infinitive can become a masculine singular noun with an article: \"il viaggiare\" (travelling), \"il mangiare\", \"lo scrivere\". English uses the -ing form for this; Italian uses the infinitive. Without the article, an infinitive subject is also fine: \"Viaggiare apre la mente\". The article makes it more formal and more noun-like: \"Il viaggiare apre la mente\".",
          "Don't translate travelling with the gerund: \"*Viaggiando apre la mente\" is wrong, because the gerund is never a subject or object in Italian. This is the most common error of English speakers here.",
          "The nominal infinitive keeps its verbal nature: it can take an object (\"il leggere romanzi\"), an adverb (\"il parlare piano\") and attached pronouns (\"il vedersi ogni giorno\").",
        ],
        examples: [
          { es: "Il viaggiare apre la mente.", en: "Travelling broadens the mind." },
          { es: "Leggere romanzi mi rilassa.", en: "Reading novels relaxes me." },
          { es: "Il vedersi ogni giorno non li stancava.", en: "Seeing each other every day didn't tire them." },
          { es: "Lo scrivere a mano sta scomparendo.", en: "Handwriting is disappearing." },
          { es: "Il parlare piano è una forma di rispetto.", en: "Speaking quietly is a form of respect." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Travelling broadens the mind.", answer: "Il viaggiare apre la mente.", altAnswers: ["Viaggiare apre la mente."], explanation: "Infinitive as subject, with or without \"il\"; never the gerund." },
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Leggere romanzi mi rilassa.", "Leggendo romanzi mi rilassa.", "La lettura romanzi mi rilassa.", "Il leggendo romanzi mi rilassa."], correctIndex: 0, explanation: "The subject is an infinitive: \"leggere\"." },
        ],
      },
      {
        heading: "Possessives, adjectives and the past",
        body: [
          "With an article the infinitive can take possessives and adjectives, which is where it becomes truly elegant: \"il suo continuo lamentarsi\" (his constant complaining), \"quel tuo modo di fare\" (that way you have), \"il dolce far niente\" (the sweet idleness). The adjective goes before the infinitive.",
          "The past infinitive works as a noun too: \"L'aver sbagliato non è grave; il non averlo ammesso sì\" (having made a mistake isn't serious; not having admitted it is). \"L'essere stato\" = having been. Note \"aver\" without its final e, usual before a participle.",
        ],
        examples: [
          { es: "Il suo continuo lamentarsi ci esaurisce.", en: "His constant complaining wears us out." },
          { es: "Non sopporto quel suo modo di fare.", en: "I can't stand the way he behaves." },
          { es: "L'aver sbagliato non è grave; il non averlo ammesso sì.", en: "Having made a mistake isn't serious; not having admitted it is." },
          { es: "L'essere stato in prigione lo segnò per sempre.", en: "Having been in prison marked him forever." },
          { es: "Il dolce far niente delle vacanze.", en: "The sweet idleness of the holidays." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "His constant complaining wears us out.", answer: "Il suo continuo lamentarsi ci esaurisce.", altAnswers: ["Il suo continuo lamentarsi ci sfinisce.", "Il suo lamentarsi continuo ci esaurisce."], explanation: "Article + possessive + adjective + infinitive with the pronoun attached." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Having made a mistake] isn't serious.", sentence: "___ non è grave.", answer: "L'aver sbagliato", altAnswers: ["L'avere sbagliato", "Aver sbagliato", "Avere sbagliato"], explanation: "Past infinitive as a noun." },
        ],
      },
      {
        heading: "Fixed phrases and real nouns",
        body: [
          "Some nominal infinitives are fixed time expressions: \"al calar del sole\" (at sunset), \"al sorgere del sole\" (at sunrise), \"sul far della sera\" (at dusk), \"col passare del tempo\" (with the passing of time), \"nel fare\" (while doing). The final e often drops in these set phrases: \"calar\", \"far\".",
          "A few have become ordinary nouns with plurals: \"il dovere / i doveri\" (duty), \"il piacere / i piaceri\", \"il potere / i poteri\", \"il parere / i pareri\" (opinion), \"il sapere\" (knowledge), \"gli averi\" (possessions). These behave like any noun and take any article.",
        ],
        examples: [
          { es: "Al calar del sole i pescatori tornarono in porto.", en: "At sunset the fishermen returned to port." },
          { es: "Col passare del tempo il dolore si attenuò.", en: "With the passing of time the pain eased." },
          { es: "Nel fare le valigie ho dimenticato il passaporto.", en: "While packing I forgot my passport." },
          { es: "Ho chiesto il parere di due esperti.", en: "I asked two experts for their opinion." },
          { es: "I diritti e i doveri dei cittadini.", en: "The rights and duties of citizens." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "With the passing of time the pain eased.", answer: "Col passare del tempo il dolore si attenuò.", altAnswers: ["Con il passare del tempo il dolore si attenuò.", "Col passare del tempo il dolore si è attenuato.", "Con il passare del tempo il dolore si è attenuato."], explanation: "\"Col passare del tempo\": fixed phrase with a nominal infinitive." },
          { type: "listen-choose", audio: "Al calar del sole i pescatori tornarono in porto.", question: "When did the fishermen return?", options: ["At sunset", "At sunrise", "At midday", "Before the storm"], correctIndex: 0, explanation: "\"Al calar del sole\" = at sunset." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Reading novels relaxes me.", answer: "Leggere romanzi mi rilassa.", altAnswers: ["Il leggere romanzi mi rilassa.", "Leggere i romanzi mi rilassa."], explanation: "Infinitive subject, never the gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Handwriting is disappearing.", answer: "Lo scrivere a mano sta scomparendo.", altAnswers: ["Scrivere a mano sta scomparendo.", "La scrittura a mano sta scomparendo."], explanation: "\"Lo scrivere\": \"lo\" before s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having been in prison marked him forever.", answer: "L'essere stato in prigione lo segnò per sempre.", altAnswers: ["Essere stato in prigione lo segnò per sempre.", "L'essere stato in carcere lo segnò per sempre.", "L'essere stato in prigione lo ha segnato per sempre."], explanation: "Past infinitive with \"essere\" as a noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "While packing I forgot my passport.", answer: "Nel fare le valigie ho dimenticato il passaporto.", altAnswers: ["Facendo le valigie ho dimenticato il passaporto.", "Nel fare la valigia ho dimenticato il passaporto."], explanation: "\"Nel\" + infinitive = while doing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rights and duties of citizens.", answer: "I diritti e i doveri dei cittadini.", explanation: "\"Dovere\" has become a full noun with a plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't stand the way he behaves.", answer: "Non sopporto quel suo modo di fare.", altAnswers: ["Non sopporto il suo modo di fare."], explanation: "\"Modo di fare\" = way of behaving." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Seeing each other] every day didn't tire them.", sentence: "___ ogni giorno non li stancava.", answer: "Il vedersi", altAnswers: ["Vedersi"], explanation: "Reflexive pronoun attached to the nominal infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[At sunrise] the village woke up.", sentence: "___ il paese si svegliò.", answer: "Al sorgere del sole", explanation: "Fixed nominal infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: Speaking quietly is a form of respect.", words: ["Il", "parlare", "piano", "è", "una", "forma", "di", "rispetto."], translation: "Speaking quietly is a form of respect.", explanation: "The infinitive keeps its adverb: \"parlare piano\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il dovere", right: "duty" },
          { left: "il parere", right: "opinion" },
          { left: "il sapere", right: "knowledge" },
          { left: "gli averi", right: "possessions" },
          { left: "il potere", right: "power" },
        ],
        explanation: "Infinitives that have become ordinary nouns.",
      },
      { type: "dictation", audio: "L'aver sbagliato non è grave; il non averlo ammesso sì.", explanation: "Two past infinitives used as nouns." },
      { type: "speak", text: "Il viaggiare apre la mente, ma il continuo spostarsi stanca anche il corpo.", prompt: "Say it in Italian: Travelling broadens the mind, but constantly moving around tires the body too.", tip: "\"Spostarsi\": the reflexive pronoun stays attached.", explanation: "Two nominal infinitives." },
    ],
  },
  {
    slug: "c1-absolute-constructions",
    level: "IT-C1",
    number: 3,
    title: "Absolute Constructions",
    summary: "Write formal absolute participles and gerunds: terminata la riunione, considerato che, dato il ritardo, essendo assente il direttore.",
    duration: "19 min",
    sections: [
      {
        heading: "The absolute participle",
        body: [
          "You met the absolute participle at Upper Intermediate level: \"Finita la cena, uscimmo\". In formal prose it is everywhere. The participle comes first and agrees with the noun that follows: \"Terminata la riunione\", \"Approvato il bilancio\", \"Concluse le indagini\", \"Visti i risultati\". It expresses time (once X was done) or cause (since X), and its subject can differ from the main clause.",
          "Pronouns attach to the participle: \"Firmatolo, lo consegnò\" (having signed it, he handed it over), \"Vistala arrivare, le andò incontro\". These forms are formal but alive in written Italian. With reflexive verbs the pronoun also attaches: \"Alzatosi, uscì\", \"Sedutasi, cominciò a parlare\".",
          "In English, translate with once, after, having or a full clause; never leave a dangling participle.",
        ],
        examples: [
          { es: "Terminata la riunione, i consiglieri lasciarono la sala.", en: "Once the meeting was over, the councillors left the room." },
          { es: "Approvato il bilancio, l'assemblea si sciolse.", en: "The budget having been approved, the assembly broke up." },
          { es: "Concluse le indagini, il caso fu archiviato.", en: "Once the investigation was closed, the case was dismissed." },
          { es: "Firmatolo, lo consegnò al notaio.", en: "Having signed it, he handed it to the notary." },
          { es: "Sedutasi, la presidente cominciò a parlare.", en: "Once she had sat down, the chairwoman began to speak." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, with an absolute participle.", source: "Once the meeting was over, the councillors left the room.", answer: "Terminata la riunione, i consiglieri lasciarono la sala.", altAnswers: ["Terminata la riunione, i consiglieri hanno lasciato la sala.", "Finita la riunione, i consiglieri lasciarono la sala.", "Conclusa la riunione, i consiglieri lasciarono la sala."], explanation: "Participle first, agreeing with \"riunione\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Having signed it], he handed it to the notary.", sentence: "___, lo consegnò al notaio.", answer: "Firmatolo", explanation: "Pronoun attached to the absolute participle." },
        ],
      },
      {
        heading: "Dato, visto, considerato",
        body: [
          "Some participles have become prepositions or conjunctions of cause: \"dato\", \"visto\", \"considerato\". As prepositions they still agree with the noun: \"dato il ritardo\", \"data l'ora\", \"dati i costi\", \"viste le circostanze\", \"considerata la situazione\". As conjunctions, followed by \"che\", they are invariable: \"dato che\", \"visto che\", \"considerato che\" + indicative.",
          "Other fixed forms: \"fatta eccezione per\" (except for), \"fatto salvo\" (without prejudice to, legal), \"tenuto conto di\" (taking into account), \"a partire da\". In burocratese they pile up; in good formal prose one per sentence is enough.",
        ],
        examples: [
          { es: "Dato il ritardo, il convegno è stato rinviato.", en: "Given the delay, the conference has been postponed." },
          { es: "Data l'ora, vi conviene prendere un taxi.", en: "Given the time, you'd better take a taxi." },
          { es: "Viste le circostanze, la decisione è comprensibile.", en: "In view of the circumstances, the decision is understandable." },
          { es: "Considerato che i fondi sono esauriti, il progetto si ferma.", en: "Considering that the funds have run out, the project stops." },
          { es: "Fatta eccezione per due studenti, tutti hanno superato l'esame.", en: "Except for two students, everyone passed the exam." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style).", source: "Given the time, you'd better take a taxi.", answer: "Data l'ora, vi conviene prendere un taxi.", altAnswers: ["Data l'ora, ti conviene prendere un taxi.", "Data l'ora, Le conviene prendere un taxi.", "Vista l'ora, vi conviene prendere un taxi.", "Vista l'ora, ti conviene prendere un taxi."], explanation: "\"Data\" agrees with \"l'ora\"." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Viste le circostanze", "Visto le circostanze", "Vista le circostanze", "Visti le circostanze"], correctIndex: 0, explanation: "Agreement with \"circostanze\" (feminine plural); \"visto le\" is heard but avoided in careful writing." },
        ],
      },
      {
        heading: "The absolute gerund",
        body: [
          "The gerund can also have its own subject, placed after it: \"Essendo assente il direttore, la riunione fu rinviata\" (the director being absent...). \"Stando così le cose\" (this being the case) and \"Permettendolo il tempo\" (weather permitting) are fixed formal phrases. This construction is formal and written; in speech use \"siccome\" or \"dato che\".",
          "Watch the same-subject rule. A gerund without its own subject refers to the subject of the main clause: \"*Essendo malato, il medico mi ha visitato\" means the doctor was ill. If you mean I was ill, write \"Siccome ero malato, il medico mi ha visitato\".",
        ],
        examples: [
          { es: "Essendo assente il direttore, la riunione fu rinviata.", en: "As the director was absent, the meeting was postponed." },
          { es: "Stando così le cose, non abbiamo scelta.", en: "This being the case, we have no choice." },
          { es: "Permettendolo il tempo, la cerimonia si terrà all'aperto.", en: "Weather permitting, the ceremony will be held outdoors." },
          { es: "Siccome ero malato, il medico è venuto a casa.", en: "Since I was ill, the doctor came to my home." },
          { es: "Volendo, si può prenotare online.", en: "If you like, you can book online." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style, absolute gerund).", source: "This being the case, we have no choice.", answer: "Stando così le cose, non abbiamo scelta.", altAnswers: ["Stando così le cose, non abbiamo alternative."], explanation: "Fixed absolute gerund: \"stando così le cose\"." },
          { type: "listen-choose", audio: "Essendo assente il direttore, la riunione fu rinviata.", question: "Why was the meeting postponed?", options: ["The director was absent.", "The director postponed it.", "Too many people were absent.", "The director was ill."], correctIndex: 0, explanation: "The gerund has its own subject: \"il direttore\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with an absolute participle.", source: "The budget having been approved, the assembly broke up.", answer: "Approvato il bilancio, l'assemblea si sciolse.", altAnswers: ["Approvato il bilancio, l'assemblea si è sciolta."], explanation: "\"Approvato\" agrees with \"bilancio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with an absolute participle.", source: "Once the investigation was closed, the case was dismissed.", answer: "Concluse le indagini, il caso fu archiviato.", altAnswers: ["Concluse le indagini, il caso è stato archiviato.", "Chiuse le indagini, il caso fu archiviato."], explanation: "\"Concluse\" agrees with \"indagini\" (feminine plural)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style).", source: "Given the delay, the conference has been postponed.", answer: "Dato il ritardo, il convegno è stato rinviato.", altAnswers: ["Dato il ritardo, il convegno è stato rimandato.", "Visto il ritardo, il convegno è stato rinviato."], explanation: "\"Dato\" + masculine noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style).", source: "Except for two students, everyone passed the exam.", answer: "Fatta eccezione per due studenti, tutti hanno superato l'esame.", altAnswers: ["Fatta eccezione per due studenti, tutti hanno passato l'esame.", "Tranne due studenti, tutti hanno superato l'esame."], explanation: "\"Fatta eccezione per\" = except for." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style, absolute gerund).", source: "Weather permitting, the ceremony will be held outdoors.", answer: "Permettendolo il tempo, la cerimonia si terrà all'aperto.", altAnswers: ["Tempo permettendo, la cerimonia si terrà all'aperto."], explanation: "Formal absolute gerund; \"tempo permettendo\" is the common modern variant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style).", source: "Considering that the funds have run out, the project stops.", answer: "Considerato che i fondi sono esauriti, il progetto si ferma.", altAnswers: ["Considerato che i fondi si sono esauriti, il progetto si ferma.", "Dato che i fondi sono esauriti, il progetto si ferma."], explanation: "\"Considerato che\" + indicative, invariable." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Once she had sat down], the chairwoman began to speak.", sentence: "___, la presidente cominciò a parlare.", answer: "Sedutasi", explanation: "Reflexive pronoun attached, feminine agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Given the costs], we will postpone the work.", sentence: "___, rinvieremo i lavori.", answer: "Dati i costi", altAnswers: ["Visti i costi", "Considerati i costi"], explanation: "Agreement: \"dati\" + masculine plural." },
      { type: "word-order", prompt: "Put the words in order to say: This being the case, we have no choice.", words: ["Stando", "così", "le", "cose,", "non", "abbiamo", "scelta."], translation: "This being the case, we have no choice.", explanation: "Absolute gerund with its own subject \"le cose\"." },
      { type: "multiple-choice", question: "You mean: Since I was ill, the doctor visited me. Which is correct?", options: ["Siccome ero malato, il medico mi ha visitato.", "Essendo malato, il medico mi ha visitato.", "Essendo malato, mi ha visitato il medico.", "Malato, il medico mi ha visitato."], correctIndex: 0, explanation: "A subjectless gerund refers to the main subject: here it would make the doctor ill." },
      { type: "dictation", audio: "Terminata la riunione, i consiglieri lasciarono la sala.", explanation: "\"Terminata\" agrees with \"riunione\"." },
      { type: "speak", text: "Viste le circostanze e considerato il ritardo, la decisione è comprensibile.", prompt: "Say it in Italian (formal): In view of the circumstances and considering the delay, the decision is understandable.", tip: "\"Viste\" and \"considerato\": each agrees with its own noun.", explanation: "Two agreeing participles used as prepositions." },
    ],
  },
  {
    slug: "c1-long-sentences",
    level: "IT-C1",
    number: 4,
    title: "Building Long Sentences",
    summary: "Build long, clear hypotactic sentences with subordinate chains, relative links like il che and il quale, and the punctuation that holds them together.",
    duration: "19 min",
    sections: [
      {
        heading: "One main clause, many supports",
        body: [
          "Formal Italian prose tolerates, and often prefers, sentences much longer than English: forty or fifty words are normal in an essay or a report. The secret is hypotaxis: one main clause carries the message, and subordinate clauses hang from it, each adding cause, time, concession, purpose or condition.",
          "Build from the core outwards. Core: \"Il comune ha deciso di chiudere il centro storico al traffico\". Add cause: \"poiché i livelli di inquinamento avevano superato i limiti\". Add concession: \"nonostante le proteste dei commercianti\". Add purpose: \"affinché i residenti possano respirare un'aria più pulita\". Then order: \"Nonostante le proteste dei commercianti, il comune ha deciso di chiudere il centro storico al traffico, poiché i livelli di inquinamento avevano superato i limiti, affinché i residenti possano respirare un'aria più pulita.\"",
          "Check the moods as you go: \"nonostante\" and \"affinché\" + subjunctive, \"poiché\" + indicative. In a long sentence a wrong mood is easy to miss.",
        ],
        examples: [
          { es: "Il comune ha deciso di chiudere il centro storico al traffico.", en: "The council has decided to close the historic centre to traffic." },
          { es: "Nonostante le proteste dei commercianti, il comune ha deciso di chiudere il centro.", en: "Despite the shopkeepers' protests, the council has decided to close the centre." },
          { es: "Poiché i livelli di inquinamento avevano superato i limiti, si è intervenuti.", en: "Since pollution levels had exceeded the limits, action was taken." },
          { es: "Si sono piantati mille alberi affinché i residenti possano respirare un'aria più pulita.", en: "A thousand trees have been planted so that residents can breathe cleaner air." },
          { es: "Benché il progetto fosse costoso, fu approvato all'unanimità.", en: "Although the project was expensive, it was approved unanimously." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style).", source: "Despite the shopkeepers' protests, the council has decided to close the centre.", answer: "Nonostante le proteste dei commercianti, il comune ha deciso di chiudere il centro.", altAnswers: ["Malgrado le proteste dei commercianti, il comune ha deciso di chiudere il centro.", "Il comune ha deciso di chiudere il centro nonostante le proteste dei commercianti."], explanation: "\"Nonostante\" + noun; the main clause carries the message." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A thousand trees have been planted so that residents [can breathe] cleaner air.", sentence: "Si sono piantati mille alberi affinché i residenti ___ un'aria più pulita.", answer: "possano respirare", explanation: "\"Affinché\" + subjunctive." },
        ],
      },
      {
        heading: "Relative links: il quale, il che, ciò che",
        body: [
          "Long sentences need precise links. \"Il quale\" / \"la quale\" replaces \"che\" when \"che\" would be ambiguous: \"la sorella di Marco, la quale vive a Londra\" makes clear that the sister, not Marco, lives in London. After prepositions, \"cui\" and \"il quale\" alternate: \"il progetto al quale lavoriamo\" = \"il progetto a cui lavoriamo\".",
          "\"Il che\" refers to the whole previous clause: \"Il treno è stato cancellato, il che ha creato molti disagi\" (which caused a lot of disruption). English which in this sense is never plain \"che\" in Italian: \"*che ha creato\" would seem to refer to the train.",
          "Avoid chains of \"che\": \"Il libro che ho letto che mi hai prestato che parla di...\" is a learner's tell. Vary with participles (\"il libro prestatomi\"), \"il quale\" or a new sentence.",
        ],
        examples: [
          { es: "Ho scritto alla sorella di Marco, la quale vive a Londra.", en: "I wrote to Marco's sister, who lives in London." },
          { es: "Il progetto al quale lavoriamo da un anno è quasi finito.", en: "The project we have been working on for a year is almost finished." },
          { es: "Il treno è stato cancellato, il che ha creato molti disagi.", en: "The train was cancelled, which caused a lot of disruption." },
          { es: "Non ha risposto, il che mi sembra strano.", en: "He hasn't answered, which seems strange to me." },
          { es: "Ciò che conta è il risultato.", en: "What counts is the result." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train was cancelled, which caused a lot of disruption.", answer: "Il treno è stato cancellato, il che ha creato molti disagi.", altAnswers: ["Il treno è stato cancellato, cosa che ha creato molti disagi.", "Il treno è stato soppresso, il che ha creato molti disagi."], explanation: "\"Il che\" refers to the whole event, not the train." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, making clear the sister lives in London.", source: "I wrote to Marco's sister, who lives in London.", answer: "Ho scritto alla sorella di Marco, la quale vive a Londra.", explanation: "\"La quale\" removes the ambiguity of \"che\"." },
        ],
      },
      {
        heading: "Punctuation that carries the weight",
        body: [
          "Commas: never between subject and verb, even when the subject is long (\"*Tutti gli studenti iscritti al corso, devono presentarsi\" is wrong). Put commas around an inciso, a parenthetical insertion: \"Il sindaco, a quanto pare, si dimetterà\". A non-restrictive relative takes commas; a restrictive one doesn't: \"I treni, che erano in ritardo, ...\" (all the trains) vs \"I treni che erano in ritardo ...\" (only the late ones).",
          "The semicolon separates long coordinated blocks that already contain commas; the colon introduces an explanation, a list or a consequence: \"Il motivo è semplice: mancano i fondi\". Italian uses the colon more than English, often where English uses a dash or because.",
        ],
        examples: [
          { es: "Tutti gli studenti iscritti al corso devono presentarsi alle nove.", en: "All the students enrolled on the course must report at nine." },
          { es: "Il sindaco, a quanto pare, si dimetterà.", en: "The mayor, it seems, will resign." },
          { es: "I treni che erano in ritardo sono stati cancellati.", en: "The trains that were late have been cancelled." },
          { es: "I treni, che erano in ritardo, sono stati cancellati.", en: "The trains, which were late, have been cancelled." },
          { es: "Il motivo è semplice: mancano i fondi.", en: "The reason is simple: there's no money." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which sentence is punctuated correctly?", options: ["Tutti gli studenti iscritti al corso devono presentarsi alle nove.", "Tutti gli studenti iscritti al corso, devono presentarsi alle nove.", "Tutti gli studenti, iscritti al corso devono presentarsi alle nove.", "Tutti gli studenti iscritti, al corso devono presentarsi alle nove."], correctIndex: 0, explanation: "No comma between subject and verb, however long the subject." },
          { type: "listen-choose", audio: "I treni che erano in ritardo sono stati cancellati.", question: "Which trains were cancelled?", options: ["Only the late ones", "All the trains", "None of the trains", "Only the early ones"], correctIndex: 0, explanation: "No pause, no commas: a restrictive relative, only the late trains." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style).", source: "Although the project was expensive, it was approved unanimously.", answer: "Benché il progetto fosse costoso, fu approvato all'unanimità.", altAnswers: ["Benché il progetto fosse costoso, è stato approvato all'unanimità.", "Sebbene il progetto fosse costoso, fu approvato all'unanimità.", "Sebbene il progetto fosse costoso, è stato approvato all'unanimità."], explanation: "\"Benché\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He hasn't answered, which seems strange to me.", answer: "Non ha risposto, il che mi sembra strano.", altAnswers: ["Non ha risposto, cosa che mi sembra strana."], explanation: "\"Il che\" for the whole clause." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What counts is the result.", answer: "Ciò che conta è il risultato.", altAnswers: ["Quello che conta è il risultato."], explanation: "\"Ciò che\" = what, formal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The mayor, it seems, will resign.", answer: "Il sindaco, a quanto pare, si dimetterà.", altAnswers: ["Il sindaco, pare, si dimetterà.", "Il sindaco, a quanto sembra, si dimetterà."], explanation: "An inciso between commas." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style).", source: "The project we have been working on for a year is almost finished.", answer: "Il progetto al quale lavoriamo da un anno è quasi finito.", altAnswers: ["Il progetto a cui lavoriamo da un anno è quasi finito.", "Il progetto su cui lavoriamo da un anno è quasi finito.", "Il progetto sul quale lavoriamo da un anno è quasi finito."], explanation: "\"Al quale\" or \"a cui\"; \"da\" + present for an ongoing period." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The reason is simple: there's no money.", answer: "Il motivo è semplice: mancano i fondi.", altAnswers: ["Il motivo è semplice: mancano i soldi.", "La ragione è semplice: mancano i fondi."], explanation: "The colon introduces the explanation." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Since] pollution levels had exceeded the limits, action was taken.", sentence: "___ i livelli di inquinamento avevano superato i limiti, si è intervenuti.", answer: "Poiché", altAnswers: ["Siccome", "Dato che", "Visto che"], explanation: "\"Poiché\" + indicative; it can open the sentence." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I wrote to the professor, [whose] book I had read.", sentence: "Ho scritto al professore, ___ libro avevo letto.", answer: "il cui", explanation: "\"Il cui\" + noun = whose." },
      { type: "word-order", prompt: "Put the words in order to say: The trains, which were late, have been cancelled.", words: ["I", "treni,", "che", "erano", "in", "ritardo,", "sono", "stati", "cancellati."], translation: "The trains, which were late, have been cancelled.", explanation: "Commas make the relative non-restrictive: all the trains." },
      { type: "multiple-choice", question: "Which version of the sentence avoids the chain of che?", options: ["Il libro prestatomi da Giulia, che parla di Venezia, è bellissimo.", "Il libro che mi hai prestato che parla di Venezia che è bellissimo.", "Il libro che Giulia mi ha prestato che parla di Venezia è bellissimo.", "Il libro che che parla di Venezia è bellissimo."], correctIndex: 0, explanation: "A participle (\"prestatomi\") replaces one relative clause." },
      { type: "dictation", audio: "Il treno è stato cancellato, il che ha creato molti disagi.", explanation: "\"Il che\": which, referring to the whole clause." },
      { type: "speak", text: "Nonostante le proteste, il comune ha chiuso il centro al traffico, il che ha migliorato la qualità dell'aria.", prompt: "Say it in Italian: Despite the protests, the council closed the centre to traffic, which improved air quality.", tip: "A short pause at each comma.", explanation: "Concession, main clause, \"il che\"." },
    ],
  },
  {
    slug: "c1-drill-formal-syntax",
    level: "IT-C1",
    number: 5,
    title: "Drill: Formal Syntax",
    summary: "Transform sentences at speed: inversion, nominal infinitives, absolute participles and gerunds, and il che.",
    duration: "25 min",
    kind: "drill",
    sections: [
      {
        heading: "Five transformations",
        body: [
          "Each item asks you to produce one formal structure: subject after the verb for new information or after quotes; infinitive as a noun; absolute participle agreeing with its noun; absolute gerund with its own subject; \"il che\" for a whole clause.",
          "Keep agreement in mind: \"terminata la lezione\", \"dati i tempi\", \"viste le difficoltà\".",
        ],
        examples: [
          { es: "Dopo che la lezione era terminata, uscimmo. → Terminata la lezione, uscimmo.", en: "After the lesson had ended, we went out. → Once the lesson was over, we went out." },
          { es: "Il ministro ha detto: «Basta». → «Basta», ha detto il ministro.", en: "The minister said: \"Enough\". → \"Enough\", said the minister." },
          { es: "Correre ogni mattina mi fa bene. → Il correre ogni mattina mi fa bene.", en: "Running every morning does me good." },
          { es: "Siccome il tempo lo permetteva, uscimmo. → Permettendolo il tempo, uscimmo.", en: "Since the weather allowed it, we went out. → Weather permitting, we went out." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, with an absolute participle.", source: "Once the lesson was over, we went out.", answer: "Terminata la lezione, uscimmo.", altAnswers: ["Finita la lezione, uscimmo.", "Terminata la lezione, siamo usciti.", "Finita la lezione, siamo usciti.", "Finita la lezione, siamo uscite.", "Terminata la lezione, siamo uscite."], explanation: "\"Terminata\" agrees with \"lezione\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style).", source: "\"Enough\", said the minister.", answer: "«Basta», ha detto il ministro.", altAnswers: ["«Basta», disse il ministro.", "\"Basta\", ha detto il ministro."], explanation: "Verb before subject after a quote." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with an absolute participle.", source: "Once the contract was signed, the work began.", answer: "Firmato il contratto, iniziarono i lavori.", altAnswers: ["Firmato il contratto, cominciarono i lavori.", "Firmato il contratto, sono iniziati i lavori.", "Firmato il contratto, i lavori iniziarono."], explanation: "\"Firmato\" agrees with \"contratto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with an absolute participle.", source: "Once the rules were explained, the game started.", answer: "Spiegate le regole, il gioco cominciò.", altAnswers: ["Spiegate le regole, cominciò il gioco.", "Spiegate le regole, il gioco è cominciato.", "Spiegate le regole, il gioco iniziò."], explanation: "\"Spiegate\" agrees with \"regole\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with an absolute participle and pronoun.", source: "Having read it, she put the letter away.", answer: "Lettala, mise via la lettera.", altAnswers: ["Lettala, ripose la lettera.", "Dopo averla letta, mise via la lettera."], explanation: "\"Lettala\": pronoun attached, agreement with \"la\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style).", source: "In view of the difficulties, we will postpone the trip.", answer: "Viste le difficoltà, rinvieremo il viaggio.", altAnswers: ["Viste le difficoltà, rimanderemo il viaggio.", "Date le difficoltà, rinvieremo il viaggio.", "Considerate le difficoltà, rinvieremo il viaggio."], explanation: "\"Viste\" agrees with \"difficoltà\" (feminine plural)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style, verb first).", source: "The new museum opened yesterday in Naples.", answer: "Ha aperto ieri a Napoli il nuovo museo.", altAnswers: ["È stato inaugurato ieri a Napoli il nuovo museo.", "Si è aperto ieri a Napoli il nuovo museo."], explanation: "News: verb, time, place, subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Running every morning does me good.", answer: "Correre ogni mattina mi fa bene.", altAnswers: ["Il correre ogni mattina mi fa bene."], explanation: "Infinitive subject, never the gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Her constant apologising irritates me.", answer: "Il suo continuo scusarsi mi irrita.", altAnswers: ["Il suo continuo scusarsi mi dà fastidio.", "Il suo scusarsi continuo mi irrita."], explanation: "Nominal infinitive with possessive and adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Prices went up, which surprised no one.", answer: "I prezzi sono aumentati, il che non ha sorpreso nessuno.", altAnswers: ["I prezzi sono saliti, il che non ha sorpreso nessuno.", "I prezzi aumentarono, il che non sorprese nessuno."], explanation: "\"Il che\" for the whole clause." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style, absolute gerund).", source: "As the president was ill, the vice-president spoke.", answer: "Essendo malato il presidente, parlò il vicepresidente.", altAnswers: ["Essendo il presidente malato, parlò il vicepresidente.", "Essendo malato il presidente, ha parlato il vicepresidente."], explanation: "Absolute gerund with its own subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Given the hour], the shops were closed.", sentence: "___, i negozi erano chiusi.", answer: "Data l'ora", altAnswers: ["Vista l'ora", "Considerata l'ora"], explanation: "\"Data\" agrees with \"ora\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Once she had got up], she opened the window.", sentence: "___, aprì la finestra.", answer: "Alzatasi", explanation: "Reflexive attached, feminine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There are] still two places available.", sentence: "___ ancora due posti disponibili.", answer: "Restano", altAnswers: ["Ci sono", "Rimangono"], explanation: "Verb first, new subject last." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[With the passing of] the years, the town changed.", sentence: "___ anni, la città cambiò.", answer: "Col passare degli", altAnswers: ["Con il passare degli"], explanation: "Fixed nominal infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Were it] possible, we'd leave tomorrow.", sentence: "___ possibile, partiremmo domani.", answer: "Fosse", explanation: "Subjunctive first, no \"se\"." },
      { type: "dictation", audio: "Approvato il bilancio, la seduta fu tolta.", explanation: "\"Togliere la seduta\" = to close a session." },
      { type: "dictation", audio: "Stando così le cose, non resta che aspettare.", explanation: "\"Non resta che\" = all that's left is." },
      { type: "speak", text: "Terminata la riunione e approvato il bilancio, i consiglieri lasciarono la sala.", prompt: "Say it in Italian: Once the meeting was over and the budget approved, the councillors left the room.", tip: "\"Terminata\" / \"approvato\": each agrees with its own noun.", explanation: "Two absolute participles." },
    ],
  },
  {
    slug: "c1-reading-lab-formal-prose",
    level: "IT-C1",
    number: 6,
    title: "Reading Lab: Formal Prose",
    summary: "Read an essay passage on slowness and the modern city, and analyse how its long sentences are built.",
    duration: "19 min",
    sections: [
      {
        heading: "The thesis",
        body: [
          "The passage in this lab was written for the course in the style of an Italian \"saggio breve\", the short essay found in cultural magazines and in the newspapers' Sunday supplements. Its subject: whether slowness is a luxury or a necessity in the modern city. Read each sentence and identify the main clause first, then the subordinate clauses around it.",
          "The opening sentence is typical: a concession, a long subject with a relative clause, an inciso, and the main verb only near the end. Glosses: \"la lentezza\" (slowness), \"rivendicare\" (to claim as a right), \"il ritmo\" (pace), \"frenetico\" (hectic).",
        ],
        examples: [
          { es: "Benché sia diventata quasi uno slogan, la lentezza merita di essere presa sul serio.", en: "Although it has become almost a slogan, slowness deserves to be taken seriously." },
          { es: "Chi vive in una grande città, dove tutto sembra correre, conosce bene questo bisogno.", en: "Anyone who lives in a big city, where everything seems to rush, knows this need well." },
          { es: "Rivendicare il diritto alla lentezza non significa rifiutare il progresso.", en: "Claiming the right to slowness doesn't mean rejecting progress." },
          { es: "Significa, piuttosto, scegliere il ritmo della propria vita.", en: "It means, rather, choosing the pace of one's own life." },
          { es: "Il ritmo frenetico del lavoro lascia poco spazio al pensiero.", en: "The hectic pace of work leaves little room for thought." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Claiming the right to slowness doesn't mean rejecting progress.", answer: "Rivendicare il diritto alla lentezza non significa rifiutare il progresso.", altAnswers: ["Il rivendicare il diritto alla lentezza non significa rifiutare il progresso."], explanation: "Infinitive subject: \"rivendicare\"; English -ing becomes an infinitive." },
          { type: "multiple-choice", question: "In \"Chi vive in una grande città, dove tutto sembra correre, conosce bene questo bisogno\", what is the main verb?", options: ["conosce", "vive", "sembra", "correre"], correctIndex: 0, explanation: "\"Chi vive...\" is the subject; \"dove...\" is an inciso; \"conosce\" is the main verb." },
        ],
      },
      {
        heading: "The argument",
        body: [
          "The second paragraph supports the thesis with an example and a consequence. Note the absolute participle that opens it, the \"il che\" that links two ideas, and the colon that introduces the conclusion.",
          "The author also uses the nominal infinitive \"il camminare\" and the formal \"ciò\" to refer back. These choices give the text its essayistic register without making it obscure.",
        ],
        examples: [
          { es: "Chiusi al traffico alcuni quartieri, molte città hanno riscoperto il camminare.", en: "Having closed some neighbourhoods to traffic, many cities have rediscovered walking." },
          { es: "I residenti passano più tempo nelle strade, il che rafforza i legami tra vicini.", en: "Residents spend more time in the streets, which strengthens ties between neighbours." },
          { es: "Ciò dimostra che la lentezza ha anche un valore sociale.", en: "This shows that slowness also has a social value." },
          { es: "La conclusione è evidente: rallentare non è un lusso, ma una necessità.", en: "The conclusion is clear: slowing down is not a luxury but a necessity." },
          { es: "Resta da capire chi possa permettersi di rallentare.", en: "It remains to be seen who can afford to slow down." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Residents spend more time in the streets, which strengthens ties between neighbours.", answer: "I residenti passano più tempo nelle strade, il che rafforza i legami tra vicini.", altAnswers: ["I residenti passano più tempo per strada, il che rafforza i legami tra vicini.", "I residenti trascorrono più tempo nelle strade, il che rafforza i legami tra vicini."], explanation: "\"Il che\" refers to the whole first clause." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It remains to be seen who [can afford] to slow down.", sentence: "Resta da capire chi ___ di rallentare.", answer: "possa permettersi", altAnswers: ["si possa permettere", "può permettersi"], explanation: "An indirect question in formal style takes the subjunctive." },
        ],
      },
      {
        heading: "Style notes",
        body: [
          "Compare the essay's sentences with how you would say the same in conversation. Essay: \"Chiusi al traffico alcuni quartieri, molte città hanno riscoperto il camminare.\" Conversation: \"Molte città hanno chiuso alcuni quartieri alle macchine e la gente ha ricominciato a camminare.\" The essay compresses with participles and nominal infinitives; speech strings clauses with \"e\".",
          "Note too \"piuttosto\" (rather) set between commas as an inciso, and the final sentence beginning with \"Resta da\": essays often end with an open question rather than a firm conclusion.",
        ],
        examples: [
          { es: "Molte città hanno chiuso alcuni quartieri alle macchine.", en: "Many cities have closed some neighbourhoods to cars." },
          { es: "La gente ha ricominciato a camminare.", en: "People have started walking again." },
          { es: "Significa, piuttosto, scegliere.", en: "It means, rather, choosing." },
          { es: "Resta da vedere se questa tendenza durerà.", en: "It remains to be seen whether this trend will last." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (essay style, with an absolute participle).", source: "Having closed some neighbourhoods to traffic, many cities have rediscovered walking.", answer: "Chiusi al traffico alcuni quartieri, molte città hanno riscoperto il camminare.", altAnswers: ["Chiusi alcuni quartieri al traffico, molte città hanno riscoperto il camminare."], explanation: "\"Chiusi\" agrees with \"quartieri\"; \"il camminare\" is a nominal infinitive." },
          { type: "listen-choose", audio: "La conclusione è evidente: rallentare non è un lusso, ma una necessità.", question: "What is the author's conclusion?", options: ["Slowing down is a necessity, not a luxury.", "Slowing down is a luxury for the rich.", "Cities should be faster.", "Walking is dangerous in cities."], correctIndex: 0, explanation: "\"Non è un lusso, ma una necessità\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although it has become almost a slogan, slowness deserves to be taken seriously.", answer: "Benché sia diventata quasi uno slogan, la lentezza merita di essere presa sul serio.", altAnswers: ["Sebbene sia diventata quasi uno slogan, la lentezza merita di essere presa sul serio."], explanation: "\"Benché\" + past subjunctive; agreement with \"lentezza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It means, rather, choosing the pace of one's own life.", answer: "Significa, piuttosto, scegliere il ritmo della propria vita.", explanation: "\"Proprio\" = one's own; the infinitive renders choosing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This shows that slowness also has a social value.", answer: "Ciò dimostra che la lentezza ha anche un valore sociale.", altAnswers: ["Questo dimostra che la lentezza ha anche un valore sociale."], explanation: "\"Ciò\" refers back to the previous idea." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The hectic pace of work leaves little room for thought.", answer: "Il ritmo frenetico del lavoro lascia poco spazio al pensiero.", altAnswers: ["Il ritmo frenetico del lavoro lascia poco spazio per pensare."], explanation: "\"Lasciare spazio a\" = to leave room for." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It remains to be seen whether this trend will last.", answer: "Resta da vedere se questa tendenza durerà.", altAnswers: ["Rimane da vedere se questa tendenza durerà."], explanation: "\"Resta da\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Anyone who lives in a big city, [where everything seems to rush], knows this need.", sentence: "Chi vive in una grande città, ___, conosce questo bisogno.", answer: "dove tutto sembra correre", explanation: "An inciso between commas." },
      { type: "word-order", prompt: "Put the words in order to say: Slowing down is not a luxury but a necessity.", words: ["Rallentare", "non", "è", "un", "lusso,", "ma", "una", "necessità."], translation: "Slowing down is not a luxury but a necessity.", explanation: "Infinitive subject; \"non... ma\" contrast." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la lentezza", right: "slowness" },
          { left: "rivendicare", right: "to claim as a right" },
          { left: "frenetico", right: "hectic" },
          { left: "i legami", right: "ties, bonds" },
          { left: "rallentare", right: "to slow down" },
        ],
        explanation: "Key words of the essay.",
      },
      { type: "multiple-choice", question: "Why does the essay end with \"Resta da capire chi possa permettersi di rallentare\"?", options: ["To open a further question about inequality", "To contradict the thesis completely", "To summarise the examples", "To thank the reader"], correctIndex: 0, explanation: "Essays often close by opening a new question." },
      { type: "dictation", audio: "Ciò dimostra che la lentezza ha anche un valore sociale.", explanation: "\"Ciò\": formal this." },
      { type: "speak", text: "Rivendicare il diritto alla lentezza non significa rifiutare il progresso, ma scegliere il ritmo della propria vita.", prompt: "Read the essay's key sentence aloud: Claiming the right to slowness doesn't mean rejecting progress, but choosing the pace of one's own life.", tip: "Stress the contrast: \"non... ma\".", explanation: "Three infinitives in one sentence." },
    ],
  },
  {
    slug: "c1-error-hunt-formal-syntax",
    level: "IT-C1",
    number: 7,
    title: "Error Hunt: Formal Syntax",
    summary: "Fix run-on sentences, broken subordinate clauses, wrong agreement in absolute participles and misplaced commas.",
    duration: "19 min",
    sections: [
      {
        heading: "Run-ons and fragments",
        body: [
          "These sentences come from learners' formal writing. The first family is structural. A run-on joins two main clauses with a comma alone: \"*Il progetto è costoso, il comune non ha i fondi\". Italian needs a connector or stronger punctuation: \"Il progetto è costoso e il comune non ha i fondi\", \"Il progetto è costoso; il comune, inoltre, non ha i fondi\", or a subordinate: \"Poiché il comune non ha i fondi, ...\".",
          "A fragment is a subordinate clause left without its main clause: \"*Benché il progetto fosse stato approvato.\" As a full stop ends it, the reader waits for the rest. Join it to the main clause: \"Benché il progetto fosse stato approvato, i lavori non cominciarono\".",
        ],
        examples: [
          { es: "Il progetto è costoso e il comune non ha i fondi.", en: "The project is expensive and the council doesn't have the funds." },
          { es: "Poiché il comune non ha i fondi, il progetto è sospeso.", en: "Since the council doesn't have the funds, the project is suspended." },
          { es: "Benché il progetto fosse stato approvato, i lavori non cominciarono.", en: "Although the project had been approved, the work did not begin." },
          { es: "Il progetto è costoso; il comune, inoltre, non ha i fondi.", en: "The project is expensive; moreover, the council doesn't have the funds." },
          { es: "Le piogge sono state scarse, quindi il raccolto è stato povero.", en: "Rainfall was scarce, so the harvest was poor." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Benché il progetto fosse stato approvato.\" as a full sentence. Write it correctly: Although the project had been approved, the work did not begin.", source: "Although the project had been approved, the work did not begin.", answer: "Benché il progetto fosse stato approvato, i lavori non cominciarono.", altAnswers: ["Benché il progetto fosse stato approvato, i lavori non sono cominciati.", "Sebbene il progetto fosse stato approvato, i lavori non cominciarono.", "Benché il progetto fosse stato approvato, i lavori non iniziarono."], explanation: "The concessive clause needs its main clause." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Le piogge sono state scarse, il raccolto è stato povero\". Write it correctly with a connector: Rainfall was scarce, so the harvest was poor.", source: "Rainfall was scarce, so the harvest was poor.", answer: "Le piogge sono state scarse, quindi il raccolto è stato povero.", altAnswers: ["Le piogge sono state scarse, perciò il raccolto è stato povero.", "Le piogge sono state scarse e quindi il raccolto è stato povero.", "Le piogge sono state scarse, per cui il raccolto è stato povero."], explanation: "Two main clauses need a connector: \"quindi\"." },
        ],
      },
      {
        heading: "Absolute participles and gerunds gone wrong",
        body: [
          "The absolute participle agrees with its own noun, not with the main subject: \"*Terminato la riunione\" → \"Terminata la riunione\"; \"*Viste il problema\" → \"Visto il problema\". With a pronoun, attach it: \"*La firmata\" → \"Firmatala\".",
          "The gerund without a subject must share the main clause's subject. \"*Uscendo dal cinema, la pioggia ci sorprese\" says the rain was leaving the cinema. Fix: \"Uscendo dal cinema, fummo sorpresi dalla pioggia\" or \"Mentre uscivamo dal cinema, la pioggia ci sorprese\".",
        ],
        examples: [
          { es: "Terminata la riunione, tutti tornarono a casa.", en: "Once the meeting was over, everyone went home." },
          { es: "Visto il problema, abbiamo chiamato un tecnico.", en: "Given the problem, we called a technician." },
          { es: "Uscendo dal cinema, fummo sorpresi dalla pioggia.", en: "Coming out of the cinema, we were caught by the rain." },
          { es: "Mentre uscivamo dal cinema, la pioggia ci sorprese.", en: "As we were coming out of the cinema, the rain caught us." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Terminato la riunione, tutti tornarono a casa\". Write it correctly: Once the meeting was over, everyone went home.", source: "Once the meeting was over, everyone went home.", answer: "Terminata la riunione, tutti tornarono a casa.", altAnswers: ["Finita la riunione, tutti tornarono a casa.", "Terminata la riunione, tutti sono tornati a casa.", "Conclusa la riunione, tutti tornarono a casa."], explanation: "Agreement with \"riunione\"." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Uscendo dal cinema, la pioggia ci sorprese\". Write it correctly: As we were coming out of the cinema, the rain caught us.", source: "As we were coming out of the cinema, the rain caught us.", answer: "Mentre uscivamo dal cinema, la pioggia ci sorprese.", altAnswers: ["Mentre uscivamo dal cinema, ci sorprese la pioggia.", "Mentre uscivamo dal cinema, la pioggia ci ha sorpresi."], explanation: "Different subjects: use \"mentre\" + finite verb." },
        ],
      },
      {
        heading: "Commas in the wrong place",
        body: [
          "The commonest punctuation error in Italian is the comma between subject and verb, often after a long subject: \"*La decisione presa ieri dal consiglio di amministrazione, ha sorpreso tutti\". Remove it. The second is the missing closing comma of an inciso: \"*Il direttore, come previsto si è dimesso\" → \"Il direttore, come previsto, si è dimesso\".",
          "Third: a comma before a restrictive relative changes the meaning: \"*Gli studenti, che non hanno pagato, non possono iscriversi\" suggests no student has paid. If you mean only those who haven't paid, write it without commas.",
        ],
        examples: [
          { es: "La decisione presa ieri dal consiglio ha sorpreso tutti.", en: "The decision taken yesterday by the board surprised everyone." },
          { es: "Il direttore, come previsto, si è dimesso.", en: "The director, as expected, has resigned." },
          { es: "Gli studenti che non hanno pagato non possono iscriversi.", en: "Students who haven't paid cannot enrol." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Il direttore, come previsto si è dimesso\". Write it correctly: The director, as expected, has resigned.", source: "The director, as expected, has resigned.", answer: "Il direttore, come previsto, si è dimesso.", explanation: "An inciso needs a comma on both sides." },
          { type: "listen-choose", audio: "Gli studenti che non hanno pagato non possono iscriversi.", question: "Who cannot enrol?", options: ["Only the students who haven't paid", "All the students", "Students who have paid", "Nobody"], correctIndex: 0, explanation: "Restrictive relative, no commas: only those who haven't paid." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"La decisione presa ieri dal consiglio, ha sorpreso tutti\". Write it correctly: The decision taken yesterday by the board surprised everyone.", source: "The decision taken yesterday by the board surprised everyone.", answer: "La decisione presa ieri dal consiglio ha sorpreso tutti.", explanation: "No comma between subject and verb." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Viste il problema, abbiamo chiamato un tecnico\". Write it correctly: Given the problem, we called a technician.", source: "Given the problem, we called a technician.", answer: "Visto il problema, abbiamo chiamato un tecnico.", altAnswers: ["Dato il problema, abbiamo chiamato un tecnico."], explanation: "\"Visto\" agrees with \"problema\" (masculine)." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Il treno è stato cancellato, che ha creato disagi\". Write it correctly: The train was cancelled, which caused disruption.", source: "The train was cancelled, which caused disruption.", answer: "Il treno è stato cancellato, il che ha creato disagi.", altAnswers: ["Il treno è stato cancellato, cosa che ha creato disagi."], explanation: "For a whole clause: \"il che\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Viaggiando apre la mente\". Write it correctly: Travelling broadens the mind.", source: "Travelling broadens the mind.", answer: "Viaggiare apre la mente.", altAnswers: ["Il viaggiare apre la mente."], explanation: "The subject is an infinitive, never a gerund." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Essendo stanco, il capo mi ha mandato a casa\" meaning that she was tired. Write it correctly: Since I was tired, my boss sent me home.", source: "Since I was tired, my boss sent me home.", answer: "Siccome ero stanca, il capo mi ha mandato a casa.", altAnswers: ["Siccome ero stanco, il capo mi ha mandato a casa.", "Dato che ero stanca, il capo mi ha mandata a casa.", "Siccome ero stanca, il capo mi ha mandata a casa.", "Poiché ero stanca, il capo mi ha mandato a casa."], explanation: "The gerund would make the boss tired." },
      { type: "fill-blank", prompt: "A learner wrote \"Firmato la lettera\". Write the Italian for the bold words.", en: "[Once the letter was signed], she posted it.", sentence: "___, la spedì.", answer: "Firmata la lettera", explanation: "Agreement with \"lettera\"." },
      { type: "fill-blank", prompt: "A learner wrote a run-on. Write the Italian for the bold word.", en: "The shop is closed, [so] we'll come back tomorrow.", sentence: "Il negozio è chiuso, ___ torneremo domani.", answer: "quindi", altAnswers: ["perciò", "per cui", "dunque"], explanation: "A connector joins the two main clauses." },
      { type: "word-order", prompt: "Put the words in order to say: Although it was late, the meeting continued.", words: ["Benché", "fosse", "tardi,", "la", "riunione", "continuò."], translation: "Although it was late, the meeting continued.", altOrders: [["La", "riunione", "continuò", "benché", "fosse", "tardi."]], explanation: "Subordinate + main clause." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Il sindaco, secondo i giornali, si dimetterà.", "Il sindaco, secondo i giornali si dimetterà.", "Il sindaco secondo i giornali, si dimetterà.", "Il sindaco, secondo, i giornali si dimetterà."], correctIndex: 0, explanation: "The inciso is closed on both sides." },
      { type: "dictation", audio: "Il direttore, come previsto, si è dimesso.", explanation: "Commas around \"come previsto\"." },
      { type: "speak", text: "Benché il progetto fosse stato approvato, i lavori non cominciarono mai, il che provocò molte proteste.", prompt: "Say it in Italian: Although the project had been approved, the work never began, which caused many protests.", tip: "Pause at both commas.", explanation: "Concession, main clause, \"il che\"." },
    ],
  },
  {
    slug: "c1-transform-paratactic-hypotactic",
    level: "IT-C1",
    number: 8,
    title: "Transformations: Short to Long",
    summary: "Combine strings of short sentences into formal hypotactic prose with subordinate clauses, participles and relative links.",
    duration: "19 min",
    sections: [
      {
        heading: "From and to because, although, so that",
        body: [
          "Parataxis puts clauses side by side: \"Pioveva. Siamo rimasti a casa. Abbiamo letto.\" Hypotaxis ranks them: \"Poiché pioveva, siamo rimasti a casa a leggere\". Formal Italian prefers the second, because it makes the logical relation explicit. Your first job when combining is to name that relation: cause, concession, purpose, time, condition or consequence.",
          "Then choose the connector and check its mood. Cause: \"poiché\", \"dato che\", \"siccome\" (only at the start) + indicative. Concession: \"benché\", \"sebbene\", \"nonostante\" + subjunctive, or \"anche se\" + indicative. Purpose: \"affinché\", \"perché\" + subjunctive, or \"per\" + infinitive with the same subject. Condition: \"qualora\", \"nel caso in cui\" + subjunctive.",
        ],
        examples: [
          { es: "Pioveva. Siamo rimasti a casa.", en: "It was raining. We stayed at home." },
          { es: "Poiché pioveva, siamo rimasti a casa.", en: "Since it was raining, we stayed at home." },
          { es: "Il museo è piccolo. Attira molti visitatori. → Benché sia piccolo, il museo attira molti visitatori.", en: "Although it is small, the museum attracts many visitors." },
          { es: "Abbiamo prolungato l'orario affinché tutti possano visitare la mostra.", en: "We've extended the opening hours so that everyone can visit the exhibition." },
          { es: "Qualora il treno fosse in ritardo, avvisateci.", en: "Should the train be late, let us know." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Combine into one formal sentence: The museum is small. It attracts many visitors. (Although it is small, ...)", source: "Although it is small, the museum attracts many visitors.", answer: "Benché sia piccolo, il museo attira molti visitatori.", altAnswers: ["Sebbene sia piccolo, il museo attira molti visitatori.", "Nonostante sia piccolo, il museo attira molti visitatori.", "Benché il museo sia piccolo, attira molti visitatori."], explanation: "Concession: \"benché\" + subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Combine into one formal sentence: We extended the opening hours. Everyone can visit the exhibition. (so that)", source: "We've extended the opening hours so that everyone can visit the exhibition.", answer: "Abbiamo prolungato l'orario affinché tutti possano visitare la mostra.", altAnswers: ["Abbiamo prolungato l'orario perché tutti possano visitare la mostra.", "Abbiamo esteso l'orario affinché tutti possano visitare la mostra."], explanation: "Purpose with a different subject: \"affinché\" + subjunctive." },
        ],
      },
      {
        heading: "Compress with participles and relatives",
        body: [
          "Formal prose also shortens: a time clause becomes an absolute participle, a description becomes a relative or a participle. \"Il consiglio ha approvato il bilancio. Poi ha discusso il nuovo piano.\" → \"Approvato il bilancio, il consiglio ha discusso il nuovo piano.\" \"Abbiamo un nuovo direttore. È arrivato da Milano. Ha grande esperienza.\" → \"Il nuovo direttore, arrivato da Milano, ha grande esperienza.\"",
          "Use \"il quale\" or \"cui\" to absorb a sentence that refers back: \"Ho letto il rapporto. Nel rapporto si parla di tagli.\" → \"Ho letto il rapporto, nel quale si parla di tagli.\"",
        ],
        examples: [
          { es: "Approvato il bilancio, il consiglio ha discusso il nuovo piano.", en: "Having approved the budget, the board discussed the new plan." },
          { es: "Il nuovo direttore, arrivato da Milano, ha grande esperienza.", en: "The new director, who has come from Milan, has great experience." },
          { es: "Ho letto il rapporto, nel quale si parla di tagli.", en: "I've read the report, in which cuts are discussed." },
          { es: "La città, fondata dai Romani, conserva le mura antiche.", en: "The city, founded by the Romans, preserves its ancient walls." },
          { es: "Il libro, uscito a marzo, ha già venduto centomila copie.", en: "The book, which came out in March, has already sold a hundred thousand copies." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Combine with a participle: The city was founded by the Romans. It preserves its ancient walls.", source: "The city, founded by the Romans, preserves its ancient walls.", answer: "La città, fondata dai Romani, conserva le mura antiche.", altAnswers: ["La città, fondata dai Romani, conserva le antiche mura."], explanation: "The participle \"fondata\" replaces a relative clause." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've read the report, [in which] cuts are discussed.", sentence: "Ho letto il rapporto, ___ si parla di tagli.", answer: "nel quale", altAnswers: ["in cui"], explanation: "\"Nel quale\" or \"in cui\" absorbs the second sentence." },
        ],
      },
      {
        heading: "Don't overdo it",
        body: [
          "Hypotaxis has limits. A sentence with four subordinate levels (\"Ho saputo che il direttore, il quale aveva detto che avrebbe ritenuto opportuno che...\") loses the reader. A good rule: one main clause, two or three subordinates, and the main verb within the first fifteen words.",
          "Italian style guides also warn against \"stile nominale\" overload: too many abstract nouns (\"effettuazione\", \"messa in atto\") make prose heavy. Combining sentences should make the logic clearer, not the text denser.",
        ],
        examples: [
          { es: "Il direttore ha annunciato che il progetto sarà rinviato.", en: "The director has announced that the project will be postponed." },
          { es: "Il progetto sarà rinviato. Il motivo è semplice: mancano i fondi.", en: "The project will be postponed. The reason is simple: there are no funds." },
          { es: "Si è deciso di rinviare il progetto.", en: "It has been decided to postpone the project." },
          { es: "Si è proceduto all'effettuazione del rinvio del progetto.", en: "The postponement of the project was carried out. (heavy nominal style)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into clear formal Italian (no heavy nominal style).", source: "It has been decided to postpone the project.", answer: "Si è deciso di rinviare il progetto.", altAnswers: ["Si è deciso di rimandare il progetto.", "È stato deciso di rinviare il progetto."], explanation: "A verb (\"rinviare\") is clearer than \"effettuazione del rinvio\"." },
          { type: "listen-choose", audio: "Il progetto sarà rinviato. Il motivo è semplice: mancano i fondi.", question: "Why will the project be postponed?", options: ["There is no money.", "The director has resigned.", "Nobody likes it.", "It is too simple."], correctIndex: 0, explanation: "\"Mancano i fondi\" = there are no funds." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Combine into one sentence: It was raining. We stayed at home. (since)", source: "Since it was raining, we stayed at home.", answer: "Poiché pioveva, siamo rimasti a casa.", altAnswers: ["Siccome pioveva, siamo rimasti a casa.", "Dato che pioveva, siamo rimasti a casa.", "Poiché pioveva, siamo rimaste a casa.", "Siccome pioveva, siamo rimaste a casa."], explanation: "Cause + indicative." },
      { type: "translate", direction: "en-es", prompt: "Combine with an absolute participle: The board approved the budget. Then it discussed the new plan.", source: "Having approved the budget, the board discussed the new plan.", answer: "Approvato il bilancio, il consiglio ha discusso il nuovo piano.", altAnswers: ["Approvato il bilancio, il consiglio discusse il nuovo piano."], explanation: "\"Approvato\" agrees with \"bilancio\"." },
      { type: "translate", direction: "en-es", prompt: "Combine with a participle: The book came out in March. It has already sold a hundred thousand copies.", source: "The book, which came out in March, has already sold a hundred thousand copies.", answer: "Il libro, uscito a marzo, ha già venduto centomila copie.", altAnswers: ["Il libro, uscito in marzo, ha già venduto centomila copie.", "Il libro, che è uscito a marzo, ha già venduto centomila copie."], explanation: "\"Uscito\" replaces \"che è uscito\"." },
      { type: "translate", direction: "en-es", prompt: "Combine into one sentence: Should the train be late, let us know. (qualora, plural)", source: "Should the train be late, let us know.", answer: "Qualora il treno fosse in ritardo, avvisateci.", altAnswers: ["Qualora il treno sia in ritardo, avvisateci.", "Nel caso in cui il treno fosse in ritardo, avvisateci."], explanation: "\"Qualora\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Combine into one sentence: The new director has come from Milan. He has great experience.", source: "The new director, who has come from Milan, has great experience.", answer: "Il nuovo direttore, arrivato da Milano, ha grande esperienza.", altAnswers: ["Il nuovo direttore, che è arrivato da Milano, ha grande esperienza.", "Il nuovo direttore, venuto da Milano, ha grande esperienza.", "Il nuovo direttore, arrivato da Milano, ha una grande esperienza."], explanation: "Participle as a compressed relative." },
      { type: "translate", direction: "en-es", prompt: "Combine into one sentence: He studied a lot. He failed the exam. (although)", source: "Although he studied a lot, he failed the exam.", answer: "Benché avesse studiato molto, non ha superato l'esame.", altAnswers: ["Sebbene avesse studiato molto, non ha superato l'esame.", "Benché abbia studiato molto, non ha superato l'esame.", "Anche se aveva studiato molto, non ha superato l'esame.", "Pur avendo studiato molto, non ha superato l'esame."], explanation: "\"Benché\" + subjunctive, or \"pur\" + gerund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We're leaving early [so as to avoid] the traffic.", sentence: "Partiamo presto ___ il traffico.", answer: "per evitare", explanation: "Same subject: \"per\" + infinitive, not \"affinché\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Although it is] small, the museum attracts many visitors.", sentence: "___ piccolo, il museo attira molti visitatori.", answer: "Benché sia", altAnswers: ["Sebbene sia", "Nonostante sia", "Pur essendo"], explanation: "Concession + subjunctive." },
      { type: "word-order", prompt: "Put the words in order to say: Since it was raining, we stayed at home to read.", words: ["Poiché", "pioveva,", "siamo", "rimasti", "a", "casa", "a", "leggere."], translation: "Since it was raining, we stayed at home to read.", explanation: "Three short sentences become one." },
      { type: "multiple-choice", question: "Which combination is the clearest formal sentence?", options: ["Il direttore ha annunciato che il progetto sarà rinviato per mancanza di fondi.", "Il direttore ha annunciato che si è proceduto all'effettuazione del rinvio del progetto.", "Il direttore ha annunciato, il progetto, sarà rinviato, mancano i fondi.", "Il direttore il quale ha annunciato che il progetto che sarà rinviato."], correctIndex: 0, explanation: "One main clause, one subordinate, a clear cause." },
      { type: "dictation", audio: "Il libro, uscito a marzo, ha già venduto centomila copie.", explanation: "\"Uscito\": participle between commas." },
      { type: "speak", text: "Approvato il bilancio, il consiglio ha discusso il nuovo piano, nel quale si parla di tagli.", prompt: "Say it in Italian: Having approved the budget, the board discussed the new plan, in which cuts are discussed.", tip: "Mark the commas with short pauses.", explanation: "Absolute participle + relative link." },
    ],
  },
  {
    slug: "c1-mission-formal-paragraph",
    level: "IT-C1",
    number: 9,
    title: "Real-World Mission: A Formal Paragraph",
    summary: "Write 200 words of formal prose for a local cultural magazine, using hypotaxis, absolute constructions and careful punctuation.",
    duration: "19 min",
    sections: [
      {
        heading: "The brief",
        body: [
          "Your mission: the cultural magazine of the town where you live in Italy asks residents to contribute a short essay paragraph on the theme \"La biblioteca nel XXI secolo\" (the library in the twenty-first century). They want 200 words of formal, readable prose.",
          "Start with a topic sentence that states your thesis in one main clause, possibly with a concession: \"Benché molti la considerino superata nell'era digitale, la biblioteca pubblica svolge oggi una funzione più importante che mai.\" The reader should know your position after one sentence.",
        ],
        examples: [
          { es: "Benché molti la considerino superata, la biblioteca svolge oggi una funzione importante.", en: "Although many consider it outdated, the library plays an important role today." },
          { es: "Nell'era digitale, l'accesso all'informazione sembra illimitato.", en: "In the digital age, access to information seems unlimited." },
          { es: "La biblioteca pubblica svolge una funzione più importante che mai.", en: "The public library plays a more important role than ever." },
          { es: "Si tratta di un luogo aperto a tutti, senza distinzioni.", en: "It is a place open to everyone, without distinction." },
          { es: "Il tema merita una riflessione più ampia.", en: "The subject deserves broader reflection." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "The public library plays a more important role than ever.", answer: "La biblioteca pubblica svolge una funzione più importante che mai.", altAnswers: ["La biblioteca pubblica svolge un ruolo più importante che mai.", "La biblioteca pubblica ha una funzione più importante che mai."], explanation: "\"Svolgere una funzione\" = to play a role; \"più... che mai\" = more... than ever." },
          { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "Although many consider it outdated, the library plays an important role today.", answer: "Benché molti la considerino superata, la biblioteca svolge oggi una funzione importante.", altAnswers: ["Sebbene molti la considerino superata, la biblioteca svolge oggi una funzione importante.", "Benché molti la ritengano superata, la biblioteca svolge oggi una funzione importante."], explanation: "\"Benché\" + subjunctive; \"la\" refers forward to \"biblioteca\"." },
        ],
      },
      {
        heading: "Developing the argument",
        body: [
          "Support the thesis with two arguments, each in one well-built sentence. Use an absolute participle to compress a premise (\"Diminuiti i luoghi pubblici gratuiti, ...\"), \"il che\" to draw a consequence, and a nominal infinitive for elegance (\"lo studiare in silenzio\", \"il ritrovarsi\").",
          "Mark the structure with connectors: \"In primo luogo\", \"Inoltre\", \"D'altra parte\", \"Non a caso\". One per sentence is enough; formal Italian dislikes connector chains.",
        ],
        examples: [
          { es: "In primo luogo, la biblioteca offre a tutti l'accesso gratuito alla cultura.", en: "First, the library offers everyone free access to culture." },
          { es: "Diminuiti i luoghi pubblici gratuiti, la biblioteca è diventata un punto d'incontro.", en: "With fewer free public spaces, the library has become a meeting point." },
          { es: "Molti anziani vi imparano a usare il computer, il che riduce l'isolamento.", en: "Many elderly people learn to use computers there, which reduces isolation." },
          { es: "Inoltre, lo studiare in silenzio è diventato quasi un lusso.", en: "Moreover, studying in silence has become almost a luxury." },
          { es: "Non a caso, le sale studio sono sempre piene.", en: "It is no coincidence that the study rooms are always full." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "Many elderly people learn to use computers there, which reduces isolation.", answer: "Molti anziani vi imparano a usare il computer, il che riduce l'isolamento.", altAnswers: ["Molti anziani ci imparano a usare il computer, il che riduce l'isolamento.", "Molti anziani vi imparano a usare il computer, cosa che riduce l'isolamento."], explanation: "\"Vi\" = there, formal; \"il che\" draws the consequence." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Moreover, [studying in silence] has become almost a luxury.", sentence: "Inoltre, ___ è diventato quasi un lusso.", answer: "lo studiare in silenzio", altAnswers: ["studiare in silenzio"], explanation: "Nominal infinitive: \"lo studiare\"." },
        ],
      },
      {
        heading: "Closing the paragraph",
        body: [
          "Close with a sentence that returns to the thesis and widens it, without repeating it word for word: \"Investire nelle biblioteche significa, in definitiva, investire nella coesione della comunità.\" \"In definitiva\", \"in conclusione\" and \"in ultima analisi\" introduce it.",
          "Final check: no comma between subject and verb, incisi closed on both sides, the right mood after every connector, agreement in every absolute participle. Read the paragraph aloud: if you run out of breath before the main verb, split the sentence.",
        ],
        examples: [
          { es: "Investire nelle biblioteche significa, in definitiva, investire nella comunità.", en: "Investing in libraries means, ultimately, investing in the community." },
          { es: "In ultima analisi, la biblioteca è un presidio di democrazia.", en: "In the final analysis, the library is a bastion of democracy." },
          { es: "Chiuderla vorrebbe dire impoverire tutti.", en: "Closing it would mean impoverishing everyone." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "Investing in libraries means, ultimately, investing in the community.", answer: "Investire nelle biblioteche significa, in definitiva, investire nella comunità.", altAnswers: ["Investire nelle biblioteche significa, in ultima analisi, investire nella comunità.", "Investire nelle biblioteche vuol dire, in definitiva, investire nella comunità."], explanation: "Infinitive subject and complement; the inciso between commas." },
          { type: "listen-choose", audio: "Chiuderla vorrebbe dire impoverire tutti.", question: "What does the writer claim?", options: ["Closing the library would make everyone poorer.", "The library will close soon.", "Everyone wants to close the library.", "The library is too expensive."], correctIndex: 0, explanation: "\"Vorrebbe dire\" = would mean; \"impoverire\" = to impoverish." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "In the digital age, access to information seems unlimited.", answer: "Nell'era digitale, l'accesso all'informazione sembra illimitato.", altAnswers: ["Nell'era digitale l'accesso all'informazione sembra illimitato.", "Nell'epoca digitale, l'accesso all'informazione sembra illimitato."], explanation: "\"Accesso a\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "First, the library offers everyone free access to culture.", answer: "In primo luogo, la biblioteca offre a tutti l'accesso gratuito alla cultura.", altAnswers: ["Innanzitutto, la biblioteca offre a tutti l'accesso gratuito alla cultura.", "In primo luogo, la biblioteca offre a tutti un accesso gratuito alla cultura."], explanation: "\"In primo luogo\" opens the first argument." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "It is no coincidence that the study rooms are always full.", answer: "Non a caso, le sale studio sono sempre piene.", altAnswers: ["Non è un caso che le sale studio siano sempre piene.", "Non a caso le sale studio sono sempre piene."], explanation: "\"Non a caso\" + indicative, or \"non è un caso che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "It is a place open to everyone, without distinction.", answer: "Si tratta di un luogo aperto a tutti, senza distinzioni.", altAnswers: ["È un luogo aperto a tutti, senza distinzioni."], explanation: "\"Si tratta di\": formal it is." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian, with an absolute participle.", source: "With fewer free public spaces, the library has become a meeting point.", answer: "Diminuiti i luoghi pubblici gratuiti, la biblioteca è diventata un punto d'incontro.", altAnswers: ["Diminuiti i luoghi pubblici gratuiti, la biblioteca è diventata un punto di incontro."], explanation: "\"Diminuiti\" agrees with \"luoghi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The subject [deserves] broader reflection.", sentence: "Il tema ___ una riflessione più ampia.", answer: "merita", explanation: "\"Meritare\" = to deserve." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In the final analysis], the library is a bastion of democracy.", sentence: "___, la biblioteca è un presidio di democrazia.", answer: "In ultima analisi", altAnswers: ["In definitiva", "In conclusione"], explanation: "A closing connector." },
      { type: "word-order", prompt: "Put the words in order to say: Closing it would mean impoverishing everyone.", words: ["Chiuderla", "vorrebbe", "dire", "impoverire", "tutti."], translation: "Closing it would mean impoverishing everyone.", explanation: "Infinitive subject with an attached pronoun." },
      { type: "multiple-choice", question: "Which opening sentence works best for the paragraph?", options: ["Benché molti la considerino superata, la biblioteca pubblica svolge oggi una funzione più importante che mai.", "Allora, la biblioteca, cioè, è importante.", "La biblioteca, che è un luogo che ha dei libri che si leggono, è importante.", "Le biblioteche, sono importanti, oggi."], correctIndex: 0, explanation: "A clear thesis in one hypotactic sentence." },
      { type: "dictation", audio: "In ultima analisi, la biblioteca è un presidio di democrazia.", explanation: "\"Presidio\" = stronghold, bastion." },
      { type: "speak", text: "Benché molti la considerino superata, la biblioteca pubblica svolge oggi una funzione più importante che mai.", prompt: "Read your topic sentence aloud: Although many consider it outdated, the public library plays a more important role today than ever.", tip: "Short pause after \"superata\", then a steady voice to the end.", explanation: "Concession + thesis." },
    ],
  },
  {
    slug: "c1-listening-lab-formal-speech",
    level: "IT-C1",
    number: 10,
    title: "Listening Lab: A Formal Speech",
    summary: "Follow a ceremonial speech at the opening of a university's academic year: formulas, long sentences and inversion at speaking pace.",
    duration: "19 min",
    sections: [
      {
        heading: "The greeting",
        body: [
          "You are listening to the rector of an Italian university opening the new academic year, the \"inaugurazione dell'anno accademico\", a formal ceremony with authorities, professors in gowns and students. The speech, written for the course, follows the conventions of the genre.",
          "It opens with the \"saluti\": a long list of greetings in order of rank. Listen for \"Signor Prefetto\", \"Autorità civili e militari\", \"Magnifici Rettori\", \"gentili ospiti\", \"care studentesse e cari studenti\". Formal speeches today name both genders. Glosses: \"rivolgere un saluto\" (to extend a greeting), \"porgere\" (to offer, formal).",
        ],
        examples: [
          { es: "Signor Prefetto, Autorità civili e militari, gentili ospiti.", en: "Prefect, civil and military authorities, distinguished guests." },
          { es: "Care studentesse e cari studenti.", en: "Dear students." },
          { es: "Desidero rivolgere a tutti voi un caloroso saluto.", en: "I wish to extend a warm greeting to all of you." },
          { es: "Porgo un ringraziamento particolare a chi ha reso possibile questa giornata.", en: "I offer special thanks to those who have made this day possible." },
          { es: "È con grande emozione che apro oggi il nuovo anno accademico.", en: "It is with great emotion that I open the new academic year today." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "I wish to extend a warm greeting to all of you.", answer: "Desidero rivolgere a tutti voi un caloroso saluto.", altAnswers: ["Desidero rivolgere un caloroso saluto a tutti voi.", "Desidero rivolgere a tutti un caloroso saluto."], explanation: "\"Rivolgere un saluto a\": formal greeting formula." },
          { type: "listen-choose", audio: "È con grande emozione che apro oggi il nuovo anno accademico.", question: "What is the rector doing?", options: ["Opening the new academic year", "Closing the university", "Awarding degrees", "Announcing his retirement"], correctIndex: 0, explanation: "\"Apro... il nuovo anno accademico\"." },
        ],
      },
      {
        heading: "The theme",
        body: [
          "The core of the speech is a reflection on the university's role. Listen for the cleft structure \"È... che\" (it is... that), absolute participles, and a hypothetical without \"se\". Speakers of formal Italian also use the nominal infinitive and inversion for rhythm, as you studied in this unit.",
          "Glosses: \"l'ateneo\" (the university, formal), \"il sapere\" (knowledge), \"la sfida\" (challenge), \"il territorio\" (the local area).",
        ],
        examples: [
          { es: "Superata la fase più difficile, il nostro ateneo guarda al futuro con fiducia.", en: "With the most difficult phase behind us, our university looks to the future with confidence." },
          { es: "Il sapere non è un privilegio, ma un bene comune.", en: "Knowledge is not a privilege but a common good." },
          { es: "Fosse anche l'unica cosa che vi lasciamo, sarebbe già molto.", en: "Even if it were the only thing we leave you, it would already be a great deal." },
          { es: "Spetta a noi raccogliere la sfida.", en: "It falls to us to take up the challenge." },
          { es: "Il dialogare con il territorio è parte della nostra missione.", en: "Engaging with the local area is part of our mission." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "Knowledge is not a privilege but a common good.", answer: "Il sapere non è un privilegio, ma un bene comune.", altAnswers: ["La conoscenza non è un privilegio, ma un bene comune."], explanation: "\"Il sapere\": a nominal infinitive used as a noun." },
          { type: "listen-choose", audio: "Superata la fase più difficile, il nostro ateneo guarda al futuro con fiducia.", question: "How does the university look to the future?", options: ["With confidence", "With fear", "With uncertainty", "With indifference"], correctIndex: 0, explanation: "\"Con fiducia\" = with confidence." },
        ],
      },
      {
        heading: "The closing formula",
        body: [
          "Italian academic ceremonies end with a fixed formula, pronounced by the rector: \"Dichiaro aperto l'anno accademico 2025-2026\". Before it, the speaker usually addresses the students directly with wishes, often in the subjunctive: \"Che questo sia per voi un anno di scoperte\".",
          "The independent subjunctive (\"che sia\", \"possa\") expresses a wish; you will study it in Unit 7. Recognise it here as part of the ceremonial register.",
        ],
        examples: [
          { es: "Che questo sia per voi un anno di scoperte.", en: "May this be a year of discoveries for you." },
          { es: "Possiate trovare qui ciò che cercate.", en: "May you find here what you are looking for." },
          { es: "Vi auguro un anno ricco di soddisfazioni.", en: "I wish you a year full of satisfaction." },
          { es: "Dichiaro aperto l'anno accademico 2025-2026.", en: "I declare the 2025-2026 academic year open." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "I wish you a year full of satisfaction.", answer: "Vi auguro un anno ricco di soddisfazioni.", altAnswers: ["Vi auguro un anno pieno di soddisfazioni."], explanation: "\"Augurare\" + indirect object." },
          { type: "dictation", audio: "Dichiaro aperto l'anno accademico.", explanation: "The fixed closing formula; \"aperto\" agrees with \"anno\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Porgo un ringraziamento particolare a chi ha reso possibile questa giornata.", question: "Who does the rector thank?", options: ["Those who made the day possible", "The students who passed their exams", "The prefect only", "Nobody in particular"], correctIndex: 0, explanation: "\"A chi ha reso possibile\" = to those who made possible." },
      { type: "listen-choose", audio: "Spetta a noi raccogliere la sfida.", question: "What does the rector say?", options: ["It's up to us to take up the challenge.", "We expect someone else to solve it.", "The challenge is over.", "We have lost the challenge."], correctIndex: 0, explanation: "\"Spetta a noi\" = it falls to us." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "It is with great emotion that I open the new academic year today.", answer: "È con grande emozione che apro oggi il nuovo anno accademico.", altAnswers: ["È con grande emozione che oggi apro il nuovo anno accademico."], explanation: "Cleft sentence: \"È con... che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "I offer special thanks to those who have made this day possible.", answer: "Porgo un ringraziamento particolare a chi ha reso possibile questa giornata.", altAnswers: ["Rivolgo un ringraziamento particolare a chi ha reso possibile questa giornata."], explanation: "\"Porgere\" = to offer, formal." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "It falls to us to take up the challenge.", answer: "Spetta a noi raccogliere la sfida.", altAnswers: ["Tocca a noi raccogliere la sfida."], explanation: "\"Spettare a\" = to be up to someone." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian, without se.", source: "Even if it were the only thing we leave you, it would already be a great deal.", answer: "Fosse anche l'unica cosa che vi lasciamo, sarebbe già molto.", altAnswers: ["Anche se fosse l'unica cosa che vi lasciamo, sarebbe già molto."], explanation: "\"Fosse anche\" = even if it were." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "May this be a year of discoveries for you.", answer: "Che questo sia per voi un anno di scoperte.", altAnswers: ["Che questo sia un anno di scoperte per voi."], explanation: "Independent subjunctive of wish." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[With the most difficult phase behind us], our university looks to the future.", sentence: "___, il nostro ateneo guarda al futuro.", answer: "Superata la fase più difficile", explanation: "Absolute participle agreeing with \"fase\"." },
      { type: "word-order", prompt: "Put the words in order to say: I declare the academic year open.", words: ["Dichiaro", "aperto", "l'anno", "accademico."], translation: "I declare the academic year open.", explanation: "The participle comes before the noun in this formula." },
      { type: "multiple-choice", question: "Why does the rector say \"care studentesse e cari studenti\"?", options: ["Formal speeches today address both genders explicitly.", "There are only two groups of students.", "It's a regional form.", "It's a mistake for cari studenti."], correctIndex: 0, explanation: "Inclusive address is now standard in institutional speech." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "Engaging with the local area is part of our mission.", answer: "Il dialogare con il territorio è parte della nostra missione.", altAnswers: ["Dialogare con il territorio è parte della nostra missione.", "Il dialogo con il territorio è parte della nostra missione.", "Dialogare con il territorio fa parte della nostra missione."], explanation: "A nominal infinitive, \"il dialogare\", as subject." },
      { type: "dictation", audio: "Il sapere non è un privilegio, ma un bene comune.", explanation: "\"Il sapere\" = knowledge." },
      { type: "speak", text: "Care studentesse e cari studenti, vi auguro un anno ricco di soddisfazioni. Dichiaro aperto l'anno accademico.", prompt: "Close the ceremony as the rector: Dear students, I wish you a year full of satisfaction. I declare the academic year open.", tip: "Solemn, slow, a clear pause before \"Dichiaro\".", explanation: "Wishes, then the fixed formula." },
    ],
  },
];

export const IT_C1_U03_WRITING: WriteExercise = {
  type: "write",
  prompt: "The cultural magazine of your Italian town invites residents to write a formal paragraph on the theme \"La città e il tempo libero\" (the city and free time). Write one paragraph of formal prose: a thesis, two arguments and a closing sentence.",
  minWords: 160,
  maxWords: 230,
  rubric: [
    "States a clear thesis in the first sentence, ideally with a concession (benché, sebbene + subjunctive)",
    "Builds long but clear sentences: one main clause with subordinates, il che or il quale as links",
    "Uses at least one absolute participle with correct agreement and one infinitive as a noun",
    "Punctuates correctly: no comma between subject and verb, incisi closed on both sides, and connectors that mark the structure (in primo luogo, inoltre, in definitiva)",
  ],
  modelAnswer: "Benché si parli spesso della città come di un luogo di lavoro e di fretta, è proprio nel tempo libero che essa rivela la sua vera natura. In primo luogo, gli spazi pubblici, come le piazze, i parchi e le biblioteche, offrono a tutti, senza distinzioni di reddito, la possibilità di incontrarsi, il che rafforza il senso di comunità. Chiusi al traffico alcuni quartieri del centro, molte città italiane hanno visto crescere il numero di persone che vi passeggiano la sera, soprattutto famiglie e anziani. Inoltre, il ritrovarsi all'aperto, una volta abitudine quotidiana, è diventato per molti giovani un'alternativa ai locali a pagamento, che non tutti possono permettersi. D'altra parte, non mancano i problemi: la mancanza di manutenzione e l'assenza di servizi rischiano di rendere questi spazi poco accoglienti. Spetta dunque alle amministrazioni investire nella cura del verde e nell'illuminazione, affinché i cittadini possano viverli in sicurezza. In definitiva, una città che sa offrire tempo libero di qualità è una città che si prende cura di chi la abita.",
  explanation: "The paragraph opens with a concessive thesis (\"Benché si parli\") and a cleft (\"è proprio nel tempo libero che\"). \"Il che\" links a consequence, \"Chiusi al traffico alcuni quartieri\" is an absolute participle agreeing with \"quartieri\", and \"il ritrovarsi\" is a nominal infinitive. Incisi are closed on both sides, \"affinché\" takes the subjunctive, and \"In primo luogo\", \"Inoltre\", \"D'altra parte\" and \"In definitiva\" mark the structure.",
};
