// Synced from cheneygross-afk/lengo:src/lib/lessons/de-b1-u15.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";
// German B1, Unit 15: The Passive in Practice.

export const DE_B1_U15: Lesson[] = [
  {
    slug: "b1-passive-perfekt",
    level: "DE-B1",
    number: 1,
    title: "The Passive in the Perfekt: Ist...Worden",
    summary: "Say what has been done: sein + participle + worden (Das Paket ist gestern geliefert worden), and never geworden in the passive.",
    duration: "15 min",
    sections: [
      {
        heading: "Sein + participle + worden",
        body: [
          "In conversation, Germans tell past events in the Perfekt, and the passive is no exception. The Perfekt passive has three parts: a form of \"sein\" in position 2, the participle of the main verb, and \"worden\" at the very end: \"Das Paket ist gestern geliefert worden\" (The parcel was delivered yesterday).",
          "Why \"sein\"? Because \"werden\" always forms its Perfekt with \"sein\" (\"Er ist müde geworden\"). In the passive, \"werden\" is only a helper, so its participle loses the \"ge-\" and becomes \"worden\".",
          "The Perfekt passive and the Präteritum passive mean the same thing. \"Mein Fahrrad ist gestohlen worden\" and \"Mein Fahrrad wurde gestohlen\" both mean My bike was stolen; the Perfekt sounds more like everyday speech, the Präteritum more like a report.",
        ],
        examples: [
          { es: "Das Paket ist gestern geliefert worden.", en: "The parcel was delivered yesterday." },
          { es: "Mein Fahrrad ist gestohlen worden.", en: "My bike has been stolen." },
          { es: "Die Heizung ist endlich repariert worden.", en: "The heating has finally been repaired." },
          { es: "Die Straßen sind letzte Woche gesperrt worden.", en: "The roads were closed last week." },
          { es: "Bist du schon gefragt worden?", en: "Have you been asked yet?" },
          { es: "Die Rechnung ist noch nicht bezahlt worden.", en: "The bill hasn't been paid yet." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German with the Perfekt.", source: "My bike has been stolen.", answer: "Mein Fahrrad ist gestohlen worden.", altAnswers: ["Mein Rad ist gestohlen worden.", "Mein Fahrrad wurde gestohlen."], explanation: "\"Ist\" + \"gestohlen\" + \"worden\" at the end." },
          { type: "listen-choose", audio: "Die Heizung ist endlich repariert worden.", question: "What does it mean?", options: ["The heating has finally been repaired.", "The heating must finally be repaired.", "The heating has finally broken.", "The heating is finally being repaired."], correctIndex: 0, explanation: "\"Ist ... worden\": Perfekt passive, a finished action." },
        ],
      },
      {
        heading: "Worden, never geworden",
        body: [
          "This is the classic mistake: *Das Haus ist gebaut geworden*. \"Geworden\" only appears when \"werden\" is the main verb meaning become: \"Er ist Arzt geworden\" (He became a doctor), \"Es ist kalt geworden\" (It has got cold).",
          "So the test is simple: is there another participle in the sentence? Then it's \"worden\". Is there an adjective or a noun? Then it's \"geworden\". \"Sie ist krank geworden\" (she fell ill) but \"Sie ist operiert worden\" (she was operated on).",
        ],
        examples: [
          { es: "Er ist Arzt geworden.", en: "He became a doctor." },
          { es: "Er ist sofort operiert worden.", en: "He was operated on immediately." },
          { es: "Es ist schon dunkel geworden.", en: "It has already got dark." },
          { es: "Das Haus ist 1970 gebaut worden.", en: "The house was built in 1970." },
          { es: "Die Kinder sind groß geworden.", en: "The children have grown up." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which sentence means: The house was built in 1970?", options: ["Das Haus ist 1970 gebaut worden.", "Das Haus ist 1970 gebaut geworden.", "Das Haus hat 1970 gebaut worden.", "Das Haus ist 1970 geworden gebaut."], correctIndex: 0, explanation: "Passive Perfekt: \"worden\", never \"geworden\"." },
          { type: "fill-blank", prompt: "Write the German for the bold words.", en: "She [became] a teacher.", sentence: "Sie ist Lehrerin ___.", answer: "geworden", explanation: "A noun, no other participle: become, so \"geworden\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into German with the Perfekt.", source: "He was operated on immediately.", answer: "Er ist sofort operiert worden.", altAnswers: ["Er wurde sofort operiert."], explanation: "\"Operiert\" + \"worden\"." },
        ],
      },
      {
        heading: "Questions, negation and subordinate clauses",
        body: [
          "In a question, \"sein\" moves to the front and the rest stays at the end: \"Ist das Paket schon abgeholt worden?\" (Has the parcel been collected yet?). \"Nicht\" and \"noch nicht\" go before the participle: \"Das ist noch nicht entschieden worden\".",
          "In a subordinate clause the conjugated \"sein\" goes to the very end, after \"worden\": \"Ich weiß nicht, ob die Rechnung bezahlt worden ist\". The order is participle, \"worden\", \"ist\".",
        ],
        examples: [
          { es: "Ist das Paket schon abgeholt worden?", en: "Has the parcel been collected yet?" },
          { es: "Das ist noch nicht entschieden worden.", en: "That hasn't been decided yet." },
          { es: "Ich weiß nicht, ob die Rechnung bezahlt worden ist.", en: "I don't know whether the bill has been paid." },
          { es: "Er sagt, dass sein Auto beschädigt worden ist.", en: "He says that his car has been damaged." },
          { es: "Wann ist die Brücke gebaut worden?", en: "When was the bridge built?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German with the Perfekt.", source: "Has the parcel been collected yet?", answer: "Ist das Paket schon abgeholt worden?", altAnswers: ["Wurde das Paket schon abgeholt?"], explanation: "\"Ist\" first, \"abgeholt worden\" at the end." },
          { type: "word-order", prompt: "Put the words in order to say: I don't know whether the bill has been paid.", words: ["Ich weiß nicht,", "ob", "die Rechnung", "bezahlt", "worden", "ist."], translation: "I don't know whether the bill has been paid.", explanation: "Subordinate clause: \"bezahlt worden ist\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into German with the Perfekt.", source: "The parcel was delivered yesterday.", answer: "Das Paket ist gestern geliefert worden.", altAnswers: ["Das Paket wurde gestern geliefert.", "Gestern ist das Paket geliefert worden."], explanation: "\"Ist ... geliefert worden\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German with the Perfekt.", source: "The windows have been cleaned.", answer: "Die Fenster sind geputzt worden.", altAnswers: ["Die Fenster wurden geputzt.", "Die Fenster sind gereinigt worden."], explanation: "Plural: \"sind ... worden\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German with the Perfekt.", source: "My wallet has been found.", answer: "Mein Portemonnaie ist gefunden worden.", altAnswers: ["Mein Geldbeutel ist gefunden worden.", "Meine Geldbörse ist gefunden worden.", "Mein Portmonee ist gefunden worden."], explanation: "\"Gefunden\" + \"worden\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "It has got cold.", answer: "Es ist kalt geworden.", explanation: "Become + adjective: \"geworden\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German with the Perfekt.", source: "We weren't asked.", answer: "Wir sind nicht gefragt worden.", altAnswers: ["Wir wurden nicht gefragt.", "Uns hat niemand gefragt."], explanation: "\"Fragen\" takes the accusative, so \"wir\" can be the subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into German with the Perfekt.", source: "When was the town hall built?", answer: "Wann ist das Rathaus gebaut worden?", altAnswers: ["Wann wurde das Rathaus gebaut?"], explanation: "Question: \"ist\" after the question word." },
      { type: "translate", direction: "en-es", prompt: "Translate into German with the Perfekt.", source: "He says that his car has been damaged.", answer: "Er sagt, dass sein Auto beschädigt worden ist.", altAnswers: ["Er sagt, dass sein Wagen beschädigt worden ist.", "Er sagt, dass sein Auto beschädigt wurde."], explanation: "\"Ist\" at the very end." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The letter [has been sent].", sentence: "Der Brief ist abgeschickt ___.", answer: "worden", explanation: "Passive: \"worden\"." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The children have [grown up].", sentence: "Die Kinder sind groß ___.", answer: "geworden", explanation: "Adjective: become." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Die Rechnung ist noch nicht bezahlt worden.", "Die Rechnung hat noch nicht bezahlt worden.", "Die Rechnung ist noch nicht bezahlt geworden.", "Die Rechnung ist noch nicht worden bezahlt."], correctIndex: 0, explanation: "\"Ist\" + participle + \"worden\"." },
      { type: "dictation", audio: "Mein Fahrrad ist gestern gestohlen worden.", explanation: "\"Gestohlen worden\": Perfekt passive." },
      { type: "speak", text: "Die Heizung ist endlich repariert worden.", prompt: "Say it in German: The heating has finally been repaired.", explanation: "\"Ist ... repariert worden\"." },
    ],
  },
  {
    slug: "b1-passive-with-modals",
    level: "DE-B1",
    number: 2,
    title: "The Passive with Modal Verbs",
    summary: "Say what must, can or may be done: Die Heizung muss repariert werden; Hier darf nicht geparkt werden; Die Wohnung musste renoviert werden.",
    duration: "15 min",
    sections: [
      {
        heading: "Modal + participle + werden",
        body: [
          "To say something must, can or should be done, put the modal verb in position 2 and the passive infinitive at the end: participle + \"werden\". \"Die Heizung muss repariert werden\" (The heating must be repaired). \"Der Antrag kann online gestellt werden\" (The application can be submitted online).",
          "The modal agrees with the subject: \"Das Fenster muss geputzt werden\", but \"Die Fenster müssen geputzt werden\". \"Werden\" itself never changes: it stays an infinitive at the very end.",
          "The trap for English speakers: must be repaired is not *muss repariert sein*. \"Sein\" would describe a finished state. For something that has to be done, it's always \"werden\".",
        ],
        examples: [
          { es: "Die Heizung muss repariert werden.", en: "The heating must be repaired." },
          { es: "Der Antrag kann online gestellt werden.", en: "The application can be submitted online." },
          { es: "Die Fenster müssen geputzt werden.", en: "The windows need to be cleaned." },
          { es: "Das Formular soll bis Freitag abgegeben werden.", en: "The form is to be handed in by Friday." },
          { es: "Kann das noch geändert werden?", en: "Can that still be changed?" },
          { es: "Die Tür kann nicht geöffnet werden.", en: "The door can't be opened." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The heating must be repaired.", answer: "Die Heizung muss repariert werden.", explanation: "\"Muss\" + \"repariert werden\" at the end, not \"repariert sein\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The windows need to be cleaned.", answer: "Die Fenster müssen geputzt werden.", altAnswers: ["Die Fenster müssen gereinigt werden.", "Die Fenster müssen sauber gemacht werden."], explanation: "Plural subject: \"müssen\"." },
        ],
      },
      {
        heading: "Rules: darf nicht, muss, kann",
        body: [
          "Rules and notices love the modal passive. \"Hier darf nicht geparkt werden\" (Parking is not allowed here), \"Hunde müssen an der Leine geführt werden\" (Dogs must be kept on a lead), \"Fahrräder können im Hof abgestellt werden\" (Bikes can be left in the courtyard).",
          "Without a subject, the modal stays in the third person singular: \"Hier darf nicht geraucht werden\". You can also open with \"Es\": \"Es muss mehr getan werden\" (More has to be done).",
        ],
        examples: [
          { es: "Hier darf nicht geparkt werden.", en: "Parking is not allowed here." },
          { es: "Hunde müssen an der Leine geführt werden.", en: "Dogs must be kept on a lead." },
          { es: "Fahrräder können im Hof abgestellt werden.", en: "Bikes can be left in the courtyard." },
          { es: "Im Zug darf nicht geraucht werden.", en: "Smoking is not allowed on the train." },
          { es: "Es muss mehr für Radfahrer getan werden.", en: "More must be done for cyclists." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German with the passive.", source: "Parking is not allowed here.", answer: "Hier darf nicht geparkt werden.", altAnswers: ["Hier darf man nicht parken."], explanation: "\"Darf nicht\" + \"geparkt werden\"." },
          { type: "listen-choose", audio: "Hunde müssen an der Leine geführt werden.", question: "What does the sign say?", options: ["Dogs must be kept on a lead.", "Dogs are not allowed.", "Dogs can be walked here.", "Dogs were kept on a lead."], correctIndex: 0, explanation: "\"Müssen ... geführt werden\": must be kept." },
        ],
      },
      {
        heading: "In the past: musste ... werden",
        body: [
          "For the past, simply put the modal in the Präteritum: \"Die Wohnung musste renoviert werden\" (The flat had to be renovated), \"Das Problem konnte nicht gelöst werden\" (The problem couldn't be solved). This is the normal form even in speech; the Perfekt of a modal passive is too heavy.",
          "In a subordinate clause the modal goes to the very end: \"..., weil die Wohnung renoviert werden musste\". The order is participle, \"werden\", modal.",
        ],
        examples: [
          { es: "Die Wohnung musste renoviert werden.", en: "The flat had to be renovated." },
          { es: "Das Problem konnte nicht gelöst werden.", en: "The problem couldn't be solved." },
          { es: "Der Flug musste abgesagt werden.", en: "The flight had to be cancelled." },
          { es: "Wir sind umgezogen, weil die Wohnung renoviert werden musste.", en: "We moved because the flat had to be renovated." },
          { es: "Der Patient konnte gerettet werden.", en: "The patient could be saved." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The flight had to be cancelled.", answer: "Der Flug musste abgesagt werden.", altAnswers: ["Der Flug musste gestrichen werden.", "Der Flug musste storniert werden."], explanation: "\"Musste\" + \"abgesagt werden\"." },
          { type: "word-order", prompt: "Put the words in order to say: The problem couldn't be solved.", words: ["Das Problem", "konnte", "nicht", "gelöst", "werden."], translation: "The problem couldn't be solved.", explanation: "Participle + \"werden\" at the end." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The application can be submitted online.", answer: "Der Antrag kann online gestellt werden.", altAnswers: ["Der Antrag kann online eingereicht werden."], explanation: "\"Einen Antrag stellen\" → \"gestellt werden\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The door can't be opened.", answer: "Die Tür kann nicht geöffnet werden.", altAnswers: ["Die Tür lässt sich nicht öffnen."], explanation: "\"Nicht\" before the participle." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The car must be washed.", answer: "Das Auto muss gewaschen werden.", altAnswers: ["Der Wagen muss gewaschen werden."], explanation: "Not \"gewaschen sein\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "Smoking is not allowed on the train.", answer: "Im Zug darf nicht geraucht werden.", altAnswers: ["Im Zug darf man nicht rauchen."], explanation: "No subject: \"darf\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "Can that still be changed?", answer: "Kann das noch geändert werden?", explanation: "Modal first in a yes/no question." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The flat had to be renovated.", answer: "Die Wohnung musste renoviert werden.", explanation: "Past: \"musste\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "We moved because the flat had to be renovated.", answer: "Wir sind umgezogen, weil die Wohnung renoviert werden musste.", altAnswers: ["Wir zogen um, weil die Wohnung renoviert werden musste."], explanation: "Modal at the very end." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The form [must] be signed.", sentence: "Das Formular ___ unterschrieben werden.", answer: "muss", explanation: "Singular subject." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The tickets can be [bought] online.", sentence: "Die Tickets können online ___ werden.", answer: "gekauft", explanation: "Participle before \"werden\"." },
      { type: "multiple-choice", question: "Which sentence means: The heating must be repaired?", options: ["Die Heizung muss repariert werden.", "Die Heizung muss repariert sein.", "Die Heizung muss werden repariert.", "Die Heizung wird repariert müssen."], correctIndex: 0, explanation: "Participle + \"werden\"." },
      { type: "dictation", audio: "Der Antrag kann online gestellt werden.", explanation: "Modal + passive infinitive." },
      { type: "speak", text: "Hier darf nicht geparkt werden.", prompt: "Say it in German: Parking is not allowed here.", explanation: "\"Darf nicht\" + passive." },
    ],
  },
  {
    slug: "b1-von-or-durch",
    level: "DE-B1",
    number: 3,
    title: "Von or Durch?",
    summary: "Name who did it with von + dative, and what caused it with durch + accusative: Die Stadt wurde durch ein Erdbeben zerstört.",
    duration: "15 min",
    sections: [
      {
        heading: "Von + dative: the person",
        body: [
          "English uses by for every kind of agent. German makes a distinction. For a person, an institution or anyone who acts on purpose, use \"von\" + dative: \"Das Bild wurde von einem Kind gemalt\" (The picture was painted by a child), \"Der Antrag ist vom Amt abgelehnt worden\".",
          "Remember the dative: \"von dem\" = \"vom\", \"von der\", \"von einem\", \"von einer\", \"von meinen Eltern\".",
        ],
        examples: [
          { es: "Das Bild wurde von einem Kind gemalt.", en: "The picture was painted by a child." },
          { es: "Der Antrag ist vom Amt abgelehnt worden.", en: "The application was rejected by the office." },
          { es: "Die Kirche wurde von den Bürgern gebaut.", en: "The church was built by the townspeople." },
          { es: "Ich bin von meiner Chefin gelobt worden.", en: "I was praised by my boss." },
          { es: "Das Fest wird von einem Verein organisiert.", en: "The festival is organised by a club." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The picture was painted by a child.", answer: "Das Bild wurde von einem Kind gemalt.", altAnswers: ["Das Bild ist von einem Kind gemalt worden."], explanation: "\"Von einem\": dative." },
          { type: "fill-blank", prompt: "Write the German for the bold words.", en: "I was praised by [my] boss.", sentence: "Ich wurde von ___ Chefin gelobt.", answer: "meiner", explanation: "\"Von\" + dative feminine: \"meiner\"." },
        ],
      },
      {
        heading: "Durch + accusative: the means or cause",
        body: [
          "For a cause, a means or an impersonal force (a storm, a fire, a phone call, a mistake), use \"durch\" + accusative: \"Die Stadt wurde durch ein Erdbeben zerstört\" (The town was destroyed by an earthquake), \"Er wurde durch einen Anruf geweckt\" (He was woken by a phone call).",
          "\"Durch\" often answers how or through what: \"Der Schaden ist durch einen Fehler entstanden\", \"Die Brücke wurde durch das Hochwasser beschädigt\".",
          "Sometimes both are possible with a slight difference: \"von dem Lärm geweckt\" is common in speech, but in writing \"durch\" sounds clearer for things.",
        ],
        examples: [
          { es: "Die Stadt wurde durch ein Erdbeben zerstört.", en: "The town was destroyed by an earthquake." },
          { es: "Er wurde durch einen Anruf geweckt.", en: "He was woken by a phone call." },
          { es: "Die Brücke wurde durch das Hochwasser beschädigt.", en: "The bridge was damaged by the flood." },
          { es: "Das Feuer ist durch eine Kerze verursacht worden.", en: "The fire was caused by a candle." },
          { es: "Viele Bäume wurden durch den Sturm umgeworfen.", en: "Many trees were knocked down by the storm." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "He was woken by a phone call.", answer: "Er wurde durch einen Anruf geweckt.", altAnswers: ["Er ist durch einen Anruf geweckt worden.", "Er wurde von einem Anruf geweckt."], explanation: "\"Durch einen\": accusative." },
          { type: "listen-choose", audio: "Die Brücke wurde durch das Hochwasser beschädigt.", question: "What happened?", options: ["The flood damaged the bridge.", "The bridge was built over the river.", "The bridge was repaired after the flood.", "Someone damaged the bridge on purpose."], correctIndex: 0, explanation: "\"Durch das Hochwasser\": the cause." },
        ],
      },
      {
        heading: "Choosing in context",
        body: [
          "Ask one question: is this someone who acts, or something that happens? \"Der Dieb wurde von der Polizei gefasst\" (the police acted), but \"Der Dieb wurde durch eine Kamera erkannt\" (the camera was the means).",
          "Don't forget the cases: \"von\" always dative, \"durch\" always accusative. \"Von dem Sturm\" but \"durch den Sturm\".",
        ],
        examples: [
          { es: "Der Dieb wurde von der Polizei gefasst.", en: "The thief was caught by the police." },
          { es: "Der Dieb wurde durch eine Kamera erkannt.", en: "The thief was identified through a camera." },
          { es: "Das Dach wurde durch den Sturm beschädigt.", en: "The roof was damaged by the storm." },
          { es: "Das Dach wurde von einem Dachdecker repariert.", en: "The roof was repaired by a roofer." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which sentence means: The roof was damaged by the storm?", options: ["Das Dach wurde durch den Sturm beschädigt.", "Das Dach wurde durch dem Sturm beschädigt.", "Das Dach wurde von den Sturm beschädigt.", "Das Dach wurde mit dem Sturm beschädigt."], correctIndex: 0, explanation: "\"Durch\" + accusative \"den Sturm\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The roof was repaired by a roofer.", answer: "Das Dach wurde von einem Dachdecker repariert.", altAnswers: ["Das Dach ist von einem Dachdecker repariert worden."], explanation: "A person: \"von\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The town was destroyed by an earthquake.", answer: "Die Stadt wurde durch ein Erdbeben zerstört.", altAnswers: ["Die Stadt ist durch ein Erdbeben zerstört worden."], explanation: "A natural force: \"durch\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The festival is organised by a club.", answer: "Das Fest wird von einem Verein organisiert.", altAnswers: ["Das Fest wird von einem Verein veranstaltet."], explanation: "An organisation: \"von\" + dative." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The thief was caught by the police.", answer: "Der Dieb wurde von der Polizei gefasst.", altAnswers: ["Der Dieb ist von der Polizei gefasst worden.", "Der Dieb wurde von der Polizei festgenommen."], explanation: "\"Von der Polizei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The fire was caused by a candle.", answer: "Das Feuer wurde durch eine Kerze verursacht.", altAnswers: ["Das Feuer ist durch eine Kerze verursacht worden.", "Der Brand wurde durch eine Kerze verursacht."], explanation: "A cause: \"durch\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "Many trees were knocked down by the storm.", answer: "Viele Bäume wurden durch den Sturm umgeworfen.", altAnswers: ["Viele Bäume sind durch den Sturm umgeworfen worden.", "Viele Bäume wurden vom Sturm umgeworfen."], explanation: "\"Durch den Sturm\": accusative." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The application was rejected by the office.", answer: "Der Antrag wurde vom Amt abgelehnt.", altAnswers: ["Der Antrag ist vom Amt abgelehnt worden."], explanation: "\"Vom\" = \"von dem\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The church was built by the townspeople.", answer: "Die Kirche wurde von den Bürgern gebaut.", altAnswers: ["Die Kirche ist von den Bürgern gebaut worden."], explanation: "Dative plural: \"den Bürgern\"." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The bridge was damaged [by the] flood.", sentence: "Die Brücke wurde ___ das Hochwasser beschädigt.", answer: "durch", explanation: "Cause: \"durch\"." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The letter was written [by the] mayor.", sentence: "Der Brief wurde ___ Bürgermeister geschrieben.", answer: "vom", altAnswers: ["von dem"], explanation: "A person: \"vom\"." },
      { type: "word-order", prompt: "Put the words in order to say: He was woken by the noise.", words: ["Er", "wurde", "durch", "den Lärm", "geweckt."], translation: "He was woken by the noise.", explanation: "\"Durch\" + accusative." },
      { type: "dictation", audio: "Das Dach wurde durch den Sturm beschädigt.", explanation: "\"Durch den Sturm\"." },
      { type: "speak", text: "Das Bild wurde von einem Kind gemalt.", prompt: "Say it in German: The picture was painted by a child.", explanation: "\"Von\" + dative." },
    ],
  },
  {
    slug: "b1-minimal-pairs-geworden-worden",
    level: "DE-B1",
    number: 4,
    title: "Minimal Pairs: Geworden / Worden",
    summary: "Hear and choose between become (Er ist krank geworden) and the passive (Er ist operiert worden).",
    duration: "15 min",
    sections: [
      {
        heading: "One syllable apart",
        body: [
          "\"Geworden\" and \"worden\" differ by a single unstressed syllable, and in fast speech the \"ge-\" can be very short. Listen for the word before them: an adjective or noun (\"krank\", \"dunkel\", \"Lehrerin\") means become, so \"geworden\"; a participle (\"operiert\", \"renoviert\", \"gebaut\") means passive, so \"worden\".",
          "\"Er ist krank geworden\" (He fell ill) vs \"Er ist operiert worden\" (He was operated on). \"Es ist dunkel geworden\" (It got dark) vs \"Es ist renoviert worden\" (It was renovated).",
        ],
        examples: [
          { es: "Er ist krank geworden.", en: "He fell ill." },
          { es: "Er ist operiert worden.", en: "He was operated on." },
          { es: "Es ist dunkel geworden.", en: "It got dark." },
          { es: "Es ist renoviert worden.", en: "It was renovated." },
          { es: "Sie ist Ärztin geworden.", en: "She became a doctor." },
          { es: "Sie ist befördert worden.", en: "She was promoted." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Er ist operiert worden.", question: "What did you hear?", options: ["He was operated on.", "He fell ill.", "He became a surgeon.", "He has to be operated on."], correctIndex: 0, explanation: "Participle \"operiert\" + \"worden\": passive." },
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "He fell ill.", answer: "Er ist krank geworden.", altAnswers: ["Er wurde krank."], explanation: "Adjective: \"geworden\"." },
        ],
      },
      {
        heading: "Pairs with things",
        body: [
          "The same contrast works with things and places. \"Das Wetter ist besser geworden\" (The weather has got better) vs \"Das Wetter ist vorhergesagt worden\" (The weather was forecast). \"Die Straße ist breiter geworden\" vs \"Die Straße ist verbreitert worden\": the first describes a change, the second an action someone performed.",
          "A comparative (\"besser\", \"teurer\", \"größer\") always signals become: \"Alles ist teurer geworden\".",
        ],
        examples: [
          { es: "Das Wetter ist besser geworden.", en: "The weather has got better." },
          { es: "Alles ist teurer geworden.", en: "Everything has got more expensive." },
          { es: "Die Straße ist verbreitert worden.", en: "The road has been widened." },
          { es: "Die Stadt ist größer geworden.", en: "The town has got bigger." },
          { es: "Die Preise sind erhöht worden.", en: "The prices have been raised." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "Everything has got more expensive.", answer: "Alles ist teurer geworden.", explanation: "Comparative: become." },
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The prices have been raised.", answer: "Die Preise sind erhöht worden.", altAnswers: ["Die Preise wurden erhöht."], explanation: "Participle \"erhöht\": passive." },
          { type: "listen-choose", audio: "Die Stadt ist größer geworden.", question: "What did you hear?", options: ["The town has got bigger.", "The town has been enlarged.", "The town must get bigger.", "The town was built bigger."], correctIndex: 0, explanation: "Comparative + \"geworden\"." },
        ],
      },
      {
        heading: "In a subordinate clause",
        body: [
          "At the end of a subordinate clause, \"ist\" follows: \"..., dass er krank geworden ist\" vs \"..., dass er operiert worden ist\". Listen to the two words before \"ist\" and decide.",
          "In writing, a quick check helps: delete the word before \"worden\" or \"geworden\". If what's left is a participle, it's the passive.",
        ],
        examples: [
          { es: "Ich habe gehört, dass er krank geworden ist.", en: "I heard that he's fallen ill." },
          { es: "Ich habe gehört, dass er operiert worden ist.", en: "I heard that he's been operated on." },
          { es: "Weißt du, ob das Haus verkauft worden ist?", en: "Do you know whether the house has been sold?" },
          { es: "Sie erzählt, dass es kalt geworden ist.", en: "She says that it has got cold." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "Do you know whether the house has been sold?", answer: "Weißt du, ob das Haus verkauft worden ist?", altAnswers: ["Wissen Sie, ob das Haus verkauft worden ist?", "Weißt du, ob das Haus verkauft wurde?"], explanation: "\"Verkauft worden ist\" at the end." },
          { type: "fill-blank", prompt: "Write the German for the bold words.", en: "I heard that he has [become] a father.", sentence: "Ich habe gehört, dass er Vater ___ ist.", answer: "geworden", explanation: "Noun: become." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Es ist renoviert worden.", question: "What did you hear?", options: ["It was renovated.", "It got dark.", "It became new.", "It must be renovated."], correctIndex: 0, explanation: "\"Renoviert worden\": passive." },
      { type: "listen-choose", audio: "Sie ist Ärztin geworden.", question: "What did you hear?", options: ["She became a doctor.", "She was examined by a doctor.", "She was promoted.", "She is being treated."], correctIndex: 0, explanation: "Noun + \"geworden\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "It got dark.", answer: "Es ist dunkel geworden.", altAnswers: ["Es wurde dunkel."], explanation: "Adjective: \"geworden\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "She was promoted.", answer: "Sie ist befördert worden.", altAnswers: ["Sie wurde befördert."], explanation: "Participle: \"worden\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The weather has got better.", answer: "Das Wetter ist besser geworden.", altAnswers: ["Das Wetter wurde besser."], explanation: "Comparative: become." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The road has been widened.", answer: "Die Straße ist verbreitert worden.", altAnswers: ["Die Straße wurde verbreitert."], explanation: "Passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "My brother has become a teacher.", answer: "Mein Bruder ist Lehrer geworden.", explanation: "Noun: \"geworden\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The children were vaccinated.", answer: "Die Kinder sind geimpft worden.", altAnswers: ["Die Kinder wurden geimpft."], explanation: "\"Geimpft\" + \"worden\"." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The house has [been] sold.", sentence: "Das Haus ist verkauft ___.", answer: "worden", explanation: "Passive." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The town has [got] bigger.", sentence: "Die Stadt ist größer ___.", answer: "geworden", explanation: "Comparative: become." },
      { type: "multiple-choice", question: "Which sentence is wrong?", options: ["Das Haus ist gebaut geworden.", "Das Haus ist gebaut worden.", "Er ist alt geworden.", "Es ist spät geworden."], correctIndex: 0, explanation: "After a participle it must be \"worden\"." },
      { type: "speak", text: "Er ist krank geworden, und dann ist er operiert worden.", prompt: "Say it in German: He fell ill, and then he was operated on.", explanation: "Both forms in one sentence." },
    ],
  },
  {
    slug: "b1-talk-about-you-your-city",
    level: "DE-B1",
    number: 5,
    title: "Talk About You: Your City",
    summary: "Tell your town's history and changes in the passive: Meine Stadt wurde im 12. Jahrhundert gegründet; Der Bahnhof ist neu gebaut worden.",
    duration: "15 min",
    sections: [
      {
        heading: "The history of my town",
        body: [
          "Town history is a natural home for the Präteritum passive: \"Meine Stadt wurde im 12. Jahrhundert gegründet\" (My town was founded in the 12th century), \"Die Burg wurde im Krieg zerstört\" (The castle was destroyed in the war).",
          "Useful verbs: \"gründen\" (found), \"bauen\" (build), \"zerstören\" (destroy), \"wieder aufbauen\" (rebuild), \"erweitern\" (extend), \"nennen\" (name). Centuries take an ordinal: \"im 12. Jahrhundert\", read \"im zwölften Jahrhundert\".",
        ],
        examples: [
          { es: "Meine Stadt wurde im 12. Jahrhundert gegründet.", en: "My town was founded in the 12th century." },
          { es: "Die Burg wurde im Krieg zerstört.", en: "The castle was destroyed in the war." },
          { es: "Nach dem Krieg wurde die Altstadt wieder aufgebaut.", en: "After the war the old town was rebuilt." },
          { es: "Die Stadt wurde nach einem Fluss benannt.", en: "The town was named after a river." },
          { es: "Im 19. Jahrhundert wurde die erste Fabrik gebaut.", en: "In the 19th century the first factory was built." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "My town was founded in the 12th century.", answer: "Meine Stadt wurde im 12. Jahrhundert gegründet.", altAnswers: ["Meine Stadt wurde im zwölften Jahrhundert gegründet.", "Meine Stadt ist im 12. Jahrhundert gegründet worden."], explanation: "\"Wurde\" + \"gegründet\"." },
          { type: "listen-choose", audio: "Nach dem Krieg wurde die Altstadt wieder aufgebaut.", question: "What happened after the war?", options: ["The old town was rebuilt.", "The old town was destroyed.", "A new town was founded.", "The old town was sold."], correctIndex: 0, explanation: "\"Wieder aufgebaut\": rebuilt." },
        ],
      },
      {
        heading: "What has changed",
        body: [
          "For recent changes, the Perfekt passive sounds natural in conversation: \"Der Bahnhof ist neu gebaut worden\" (The station has been rebuilt), \"In der Innenstadt sind viele Bäume gepflanzt worden\".",
          "Combine with time words: \"vor zwei Jahren\", \"letztes Jahr\", \"in den letzten Jahren\", \"seit Kurzem\".",
        ],
        examples: [
          { es: "Der Bahnhof ist neu gebaut worden.", en: "The station has been rebuilt." },
          { es: "In der Innenstadt sind viele Bäume gepflanzt worden.", en: "Lots of trees have been planted in the town centre." },
          { es: "Vor zwei Jahren ist das Schwimmbad geschlossen worden.", en: "Two years ago the swimming pool was closed." },
          { es: "Die Fußgängerzone ist erweitert worden.", en: "The pedestrian zone has been extended." },
          { es: "In den letzten Jahren sind viele Wohnungen gebaut worden.", en: "A lot of flats have been built in recent years." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German with the Perfekt.", source: "The station has been rebuilt.", answer: "Der Bahnhof ist neu gebaut worden.", altAnswers: ["Der Bahnhof ist neu errichtet worden.", "Der Bahnhof wurde neu gebaut."], explanation: "\"Ist ... gebaut worden\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into German with the Perfekt.", source: "Two years ago the swimming pool was closed.", answer: "Vor zwei Jahren ist das Schwimmbad geschlossen worden.", altAnswers: ["Vor zwei Jahren wurde das Schwimmbad geschlossen.", "Das Schwimmbad ist vor zwei Jahren geschlossen worden."], explanation: "Time phrase first, then \"ist\"." },
        ],
      },
      {
        heading: "What should be done",
        body: [
          "To give your opinion about the future of your town, use the modal passive: \"Es muss mehr für Radfahrer getan werden\" (More must be done for cyclists), \"Die Busse sollten öfter fahren\" or \"Das alte Kino sollte renoviert werden\".",
          "\"Sollte\" + passive is a polite suggestion; \"muss\" + passive is a strong demand.",
        ],
        examples: [
          { es: "Es muss mehr für Radfahrer getan werden.", en: "More must be done for cyclists." },
          { es: "Das alte Kino sollte renoviert werden.", en: "The old cinema should be renovated." },
          { es: "Mehr Spielplätze müssen gebaut werden.", en: "More playgrounds need to be built." },
          { es: "Die Mieten dürfen nicht weiter erhöht werden.", en: "Rents mustn't be raised any further." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "More must be done for cyclists.", answer: "Es muss mehr für Radfahrer getan werden.", altAnswers: ["Für Radfahrer muss mehr getan werden."], explanation: "\"Getan werden\" at the end." },
          { type: "speak", text: "Das alte Kino sollte renoviert werden.", prompt: "Say it in German: The old cinema should be renovated.", explanation: "\"Sollte\" + passive: a suggestion." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The castle was destroyed in the war.", answer: "Die Burg wurde im Krieg zerstört.", altAnswers: ["Die Burg ist im Krieg zerstört worden.", "Das Schloss wurde im Krieg zerstört."], explanation: "\"Zerstören\" → \"zerstört\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The town was named after a river.", answer: "Die Stadt wurde nach einem Fluss benannt.", altAnswers: ["Die Stadt ist nach einem Fluss benannt worden."], explanation: "\"Benennen nach\": name after." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "A lot of flats have been built in recent years.", answer: "In den letzten Jahren sind viele Wohnungen gebaut worden.", altAnswers: ["In den letzten Jahren wurden viele Wohnungen gebaut."], explanation: "Plural: \"sind ... worden\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The pedestrian zone has been extended.", answer: "Die Fußgängerzone ist erweitert worden.", altAnswers: ["Die Fußgängerzone wurde erweitert."], explanation: "\"Erweitern\" → \"erweitert\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "More playgrounds need to be built.", answer: "Mehr Spielplätze müssen gebaut werden.", altAnswers: ["Es müssen mehr Spielplätze gebaut werden."], explanation: "Plural: \"müssen\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "Rents mustn't be raised any further.", answer: "Die Mieten dürfen nicht weiter erhöht werden.", altAnswers: ["Die Mieten dürfen nicht mehr erhöht werden."], explanation: "\"Dürfen nicht\": must not." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The first factory was built in the 19th century.", answer: "Die erste Fabrik wurde im 19. Jahrhundert gebaut.", altAnswers: ["Im 19. Jahrhundert wurde die erste Fabrik gebaut.", "Die erste Fabrik wurde im neunzehnten Jahrhundert gebaut."], explanation: "\"Im\" + century." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "Lots of trees have [been planted].", sentence: "Viele Bäume sind gepflanzt ___.", answer: "worden", explanation: "Perfekt passive." },
      { type: "word-order", prompt: "Put the words in order to say: The old town was rebuilt after the war.", words: ["Die Altstadt", "wurde", "nach dem Krieg", "wieder", "aufgebaut."], translation: "The old town was rebuilt after the war.", explanation: "Participle last." },
      { type: "matching", instructions: "Match the German with the English.", pairs: [{ left: "gründen", right: "to found" }, { left: "zerstören", right: "to destroy" }, { left: "erweitern", right: "to extend" }, { left: "wieder aufbauen", right: "to rebuild" }, { left: "benennen", right: "to name" }], explanation: "Key verbs for town history." },
      { type: "dictation", audio: "Meine Stadt wurde im zwölften Jahrhundert gegründet.", explanation: "Centuries are read as ordinals." },
      { type: "speak", text: "Der Bahnhof ist vor zwei Jahren neu gebaut worden.", prompt: "Say it in German: The station was rebuilt two years ago.", explanation: "Perfekt passive." },
    ],
  },
  {
    slug: "b1-vocabulary-practice-6",
    level: "DE-B1",
    number: 6,
    title: "B1 Vocabulary Practice, Part 6 of 10",
    summary: "High-frequency B1 vocabulary: repairs, tools, damage and insurance (die Versicherung, der Schaden, kaputtgehen).",
    duration: "15 min",
    sections: [
      {
        heading: "When things break",
        body: [
          "Things break in German with \"kaputtgehen\" (separable, with \"sein\"): \"Die Waschmaschine ist kaputtgegangen\". If someone breaks it, it's \"kaputt machen\": \"Wer hat das kaputt gemacht?\" A thing that doesn't work \"funktioniert nicht\" or \"geht nicht\".",
          "Other key words: \"der Schaden\" (damage), \"beschädigen\" (damage), \"defekt\" (faulty), \"der Riss\" (crack), \"tropfen\" (drip), \"verstopft\" (blocked).",
        ],
        examples: [
          { es: "Die Waschmaschine ist kaputtgegangen.", en: "The washing machine has broken down." },
          { es: "Wer hat die Lampe kaputt gemacht?", en: "Who broke the lamp?" },
          { es: "Der Wasserhahn tropft.", en: "The tap is dripping." },
          { es: "Das Waschbecken ist verstopft.", en: "The sink is blocked." },
          { es: "In der Wand ist ein Riss.", en: "There's a crack in the wall." },
          { es: "Der Schaden ist nicht groß.", en: "The damage isn't big." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The washing machine has broken down.", answer: "Die Waschmaschine ist kaputtgegangen.", altAnswers: ["Die Waschmaschine ist kaputt."], explanation: "\"Kaputtgehen\" takes \"sein\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The tap is dripping.", answer: "Der Wasserhahn tropft.", explanation: "\"Tropfen\": drip." },
        ],
      },
      {
        heading: "Tools and repairs",
        body: [
          "Some basic tools: \"der Hammer\", \"der Schraubenzieher\" (screwdriver), \"die Zange\" (pliers), \"der Bohrer\" (drill), \"die Schraube\" (screw), \"der Nagel\" (nail). You \"reparieren\" or \"in Ordnung bringen\" something, or you \"lassen\" it repaired: \"Ich lasse das Fahrrad reparieren\".",
          "Tradespeople: \"der Handwerker\", \"der Klempner\" (plumber), \"der Elektriker\". A repair shop is \"die Werkstatt\".",
        ],
        examples: [
          { es: "Hast du einen Schraubenzieher?", en: "Do you have a screwdriver?" },
          { es: "Ich lasse das Fahrrad reparieren.", en: "I'm having the bike repaired." },
          { es: "Der Klempner kommt morgen früh.", en: "The plumber is coming tomorrow morning." },
          { es: "Das Auto ist in der Werkstatt.", en: "The car is at the garage." },
          { es: "Wir brauchen einen Handwerker.", en: "We need a tradesperson." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "I'm having the bike repaired.", answer: "Ich lasse das Fahrrad reparieren.", altAnswers: ["Ich lasse mein Fahrrad reparieren.", "Ich lasse das Rad reparieren."], explanation: "\"Lassen\" + infinitive." },
          { type: "listen-choose", audio: "Das Auto ist in der Werkstatt.", question: "Where is the car?", options: ["At the garage.", "In the car park.", "At the insurance company.", "At home in the garage."], correctIndex: 0, explanation: "\"Die Werkstatt\": repair shop." },
        ],
      },
      {
        heading: "Insurance",
        body: [
          "\"Die Versicherung\" means both insurance and the insurance company. You \"melden\" a damage claim: \"Ich habe den Schaden der Versicherung gemeldet\". The insurance \"zahlt\" or \"übernimmt die Kosten\" (covers the costs).",
          "Common types: \"die Haftpflichtversicherung\" (liability insurance, very common in Germany), \"die Hausratversicherung\" (contents insurance), \"die Krankenversicherung\".",
        ],
        examples: [
          { es: "Ich habe den Schaden der Versicherung gemeldet.", en: "I reported the damage to the insurance company." },
          { es: "Die Versicherung übernimmt die Kosten.", en: "The insurance covers the costs." },
          { es: "Hast du eine Haftpflichtversicherung?", en: "Do you have liability insurance?" },
          { es: "Der Schaden wurde von der Versicherung bezahlt.", en: "The damage was paid for by the insurance." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The insurance covers the costs.", answer: "Die Versicherung übernimmt die Kosten.", altAnswers: ["Die Versicherung zahlt die Kosten.", "Die Versicherung bezahlt die Kosten."], explanation: "\"Die Kosten übernehmen\"." },
          { type: "fill-blank", prompt: "Write the German for the bold words.", en: "I reported the [damage].", sentence: "Ich habe den ___ gemeldet.", answer: "Schaden", explanation: "\"Der Schaden\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The sink is blocked.", answer: "Das Waschbecken ist verstopft.", altAnswers: ["Die Spüle ist verstopft."], explanation: "\"Verstopft\": blocked." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "Who broke the lamp?", answer: "Wer hat die Lampe kaputt gemacht?", altAnswers: ["Wer hat die Lampe kaputtgemacht?"], explanation: "Someone did it: \"kaputt machen\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The plumber is coming tomorrow.", answer: "Der Klempner kommt morgen.", altAnswers: ["Der Installateur kommt morgen."], explanation: "\"Der Klempner\": plumber." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "There's a crack in the wall.", answer: "In der Wand ist ein Riss.", altAnswers: ["Die Wand hat einen Riss.", "Es gibt einen Riss in der Wand."], explanation: "\"Der Riss\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The heating must be repaired by an electrician.", answer: "Die Heizung muss von einem Elektriker repariert werden.", explanation: "Modal passive + \"von\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The damage was paid for by the insurance.", answer: "Der Schaden wurde von der Versicherung bezahlt.", altAnswers: ["Der Schaden ist von der Versicherung bezahlt worden."], explanation: "\"Von der Versicherung\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "My phone broke yesterday.", answer: "Mein Handy ist gestern kaputtgegangen.", altAnswers: ["Gestern ist mein Handy kaputtgegangen."], explanation: "\"Ist ... kaputtgegangen\"." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "Do you have a [screwdriver]?", sentence: "Hast du einen ___?", answer: "Schraubenzieher", altAnswers: ["Schraubendreher"], explanation: "\"Der Schraubenzieher\"." },
      { type: "matching", instructions: "Match the German with the English.", pairs: [{ left: "der Hammer", right: "hammer" }, { left: "die Zange", right: "pliers" }, { left: "der Bohrer", right: "drill" }, { left: "die Schraube", right: "screw" }, { left: "der Nagel", right: "nail" }], explanation: "Basic tools." },
      { type: "word-order", prompt: "Put the words in order to say: The car has been at the garage since Monday.", words: ["Das Auto", "ist", "seit Montag", "in der", "Werkstatt."], translation: "The car has been at the garage since Monday.", explanation: "\"Seit\" + present tense." },
      { type: "dictation", audio: "Die Versicherung übernimmt die Kosten.", explanation: "\"Übernimmt\": covers." },
      { type: "speak", text: "Die Waschmaschine ist kaputtgegangen. Wir brauchen einen Handwerker.", prompt: "Say it in German: The washing machine has broken down. We need a tradesperson.", explanation: "\"Kaputtgehen\" with \"sein\"." },
    ],
  },
  {
    slug: "b1-fill-the-story-how-cheese-is-made",
    level: "DE-B1",
    number: 7,
    title: "Fill the Story: Wie Bergkäse gemacht wird",
    summary: "A visit to an Allgäu dairy told in gaps that need the present, Präteritum and Perfekt passive and the passive with modals.",
    duration: "15 min",
    sections: [
      {
        heading: "Morning at the dairy",
        body: [
          "Lena visits a small \"Sennerei\" (mountain dairy) in the Allgäu, where Herr Berktold shows her how \"Bergkäse\" is made. He describes the daily process in the present passive: \"Die Milch wird jeden Morgen von den Bauern gebracht\".",
          "The milk is heated in a big copper kettle, \"der Kupferkessel\", and \"das Lab\" (rennet) is added so that it thickens. Notice how every step has \"wird\" or \"werden\" in position 2 and the participle at the end.",
        ],
        examples: [
          { es: "Die Milch wird jeden Morgen von den Bauern gebracht.", en: "The milk is brought by the farmers every morning." },
          { es: "Dann wird sie im Kupferkessel erhitzt.", en: "Then it's heated in the copper kettle." },
          { es: "Danach wird das Lab dazugegeben.", en: "After that the rennet is added." },
          { es: "Die Masse wird mit einer Harfe geschnitten.", en: "The mass is cut with a curd harp." },
          { es: "Hier wird nur Heumilch verwendet.", en: "Only hay milk is used here." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The milk [is] brought every morning.", sentence: "Die Milch ___ jeden Morgen gebracht.", answer: "wird", explanation: "Singular present passive." },
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "Then the milk is heated.", answer: "Dann wird die Milch erhitzt.", altAnswers: ["Dann wird die Milch erwärmt.", "Danach wird die Milch erhitzt."], explanation: "\"Erhitzen\" → \"erhitzt\"." },
          { type: "listen-choose", audio: "Hier wird nur Heumilch verwendet.", question: "What does Herr Berktold say?", options: ["Only hay milk is used here.", "Hay is made here.", "Hay milk was used here in the past.", "Only hay milk must be used."], correctIndex: 0, explanation: "\"Wird verwendet\": is used." },
        ],
      },
      {
        heading: "The history of the dairy",
        body: [
          "Herr Berktold tells some history: \"Die Sennerei wurde 1890 gegründet. Früher wurde der Käse mit der Hand gerührt\". For recent changes he uses the Perfekt passive: \"Vor zehn Jahren ist der Keller erweitert worden\".",
          "Remember: \"worden\", not \"geworden\", whenever there is a participle.",
        ],
        examples: [
          { es: "Die Sennerei wurde 1890 gegründet.", en: "The dairy was founded in 1890." },
          { es: "Früher wurde der Käse mit der Hand gerührt.", en: "In the past the cheese was stirred by hand." },
          { es: "Vor zehn Jahren ist der Keller erweitert worden.", en: "Ten years ago the cellar was extended." },
          { es: "Die alte Hütte ist durch einen Sturm zerstört worden.", en: "The old hut was destroyed by a storm." },
          { es: "Sie wurde von den Bauern wieder aufgebaut.", en: "It was rebuilt by the farmers." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The dairy [was] founded in 1890.", sentence: "Die Sennerei ___ 1890 gegründet.", answer: "wurde", explanation: "Präteritum passive." },
          { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The cellar has [been] extended.", sentence: "Der Keller ist erweitert ___.", answer: "worden", explanation: "Perfekt passive: \"worden\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "In the past the cheese was stirred by hand.", answer: "Früher wurde der Käse mit der Hand gerührt.", altAnswers: ["Früher wurde der Käse von Hand gerührt."], explanation: "\"Wurde\" + \"gerührt\"." },
        ],
      },
      {
        heading: "In the cellar",
        body: [
          "In the cellar the wheels of cheese mature for months. Herr Berktold explains the rules with the modal passive: \"Die Laibe müssen jeden Tag gewendet werden\" (The wheels have to be turned every day), \"Sie müssen mit Salzwasser eingerieben werden\".",
          "At the end Lena asks: \"Kann der Käse hier gekauft werden?\" and the answer is yes: \"Natürlich, er kann im Laden probiert und gekauft werden\".",
        ],
        examples: [
          { es: "Die Laibe müssen jeden Tag gewendet werden.", en: "The wheels have to be turned every day." },
          { es: "Sie müssen mit Salzwasser eingerieben werden.", en: "They have to be rubbed with salt water." },
          { es: "Der Käse muss mindestens vier Monate reifen.", en: "The cheese has to mature for at least four months." },
          { es: "Kann der Käse hier gekauft werden?", en: "Can the cheese be bought here?" },
          { es: "Er kann im Laden probiert werden.", en: "It can be tasted in the shop." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The wheels must be [turned] every day.", sentence: "Die Laibe müssen jeden Tag ___ werden.", answer: "gewendet", explanation: "Participle before \"werden\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "Can the cheese be bought here?", answer: "Kann der Käse hier gekauft werden?", explanation: "Modal first in a question." },
        ],
      },
    ],
    exercises: [
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The rennet [is] added.", sentence: "Das Lab ___ dazugegeben.", answer: "wird", explanation: "Present passive." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The mass is [cut] with a harp.", sentence: "Die Masse wird mit einer Harfe ___.", answer: "geschnitten", explanation: "\"Schneiden\" → \"geschnitten\"." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The hut was destroyed [by a] storm.", sentence: "Die Hütte wurde ___ einen Sturm zerstört.", answer: "durch", explanation: "A cause: \"durch\"." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "It was rebuilt [by the] farmers.", sentence: "Sie wurde ___ den Bauern wieder aufgebaut.", answer: "von", explanation: "People: \"von\" + dative." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The milk is brought by the farmers.", answer: "Die Milch wird von den Bauern gebracht.", altAnswers: ["Die Milch wird von den Bauern geliefert."], explanation: "\"Von den Bauern\": dative plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The wheels have to be turned every day.", answer: "Die Laibe müssen jeden Tag gewendet werden.", altAnswers: ["Die Käselaibe müssen jeden Tag gewendet werden.", "Die Laibe müssen täglich gewendet werden."], explanation: "Modal passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "Ten years ago the cellar was extended.", answer: "Vor zehn Jahren ist der Keller erweitert worden.", altAnswers: ["Vor zehn Jahren wurde der Keller erweitert."], explanation: "Perfekt passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The cheese can be tasted in the shop.", answer: "Der Käse kann im Laden probiert werden.", altAnswers: ["Der Käse kann im Geschäft probiert werden."], explanation: "\"Kann\" + \"probiert werden\"." },
      { type: "word-order", prompt: "Put the words in order to say: Only hay milk is used here.", words: ["Hier", "wird", "nur", "Heumilch", "verwendet."], translation: "Only hay milk is used here.", explanation: "Participle last." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Die Laibe müssen mit Salzwasser eingerieben werden.", "Die Laibe müssen mit Salzwasser eingerieben sein.", "Die Laibe muss mit Salzwasser eingerieben werden.", "Die Laibe müssen mit Salzwasser werden eingerieben."], correctIndex: 0, explanation: "Plural modal, participle + \"werden\"." },
      { type: "dictation", audio: "Früher wurde der Käse mit der Hand gerührt.", explanation: "Präteritum passive." },
      { type: "speak", text: "Die Milch wird jeden Morgen von den Bauern gebracht.", prompt: "Say it in German: The milk is brought by the farmers every morning.", explanation: "Present passive with \"von\"." },
    ],
  },
  {
    slug: "b1-frequent-words-work-organisation",
    level: "DE-B1",
    number: 8,
    title: "Frequent Words: Work, Ideas and Organisation",
    summary: "Die Besprechung, das Projekt, die Abteilung, der Termin, organisieren, planen, verschieben (verschob, verschoben), absagen, die Frist, erledigen.",
    duration: "15 min",
    sections: [
      {
        heading: "Meetings and appointments",
        body: [
          "\"Die Besprechung\" is a work meeting (\"das Meeting\" is also common in offices). \"Der Termin\" is any fixed appointment: at the doctor's, with a client, a deadline date. You \"vereinbaren\" or \"ausmachen\" a Termin, and you can \"verschieben\" it (postpone: \"verschob\", \"hat verschoben\") or \"absagen\" it (cancel).",
          "In the passive: \"Die Besprechung ist auf Donnerstag verschoben worden\" (The meeting has been moved to Thursday), \"Der Termin wurde abgesagt\".",
        ],
        examples: [
          { es: "Die Besprechung beginnt um zehn.", en: "The meeting starts at ten." },
          { es: "Ich habe morgen einen Termin beim Arzt.", en: "I have a doctor's appointment tomorrow." },
          { es: "Können wir den Termin verschieben?", en: "Can we postpone the appointment?" },
          { es: "Die Besprechung ist auf Donnerstag verschoben worden.", en: "The meeting has been moved to Thursday." },
          { es: "Der Kunde hat den Termin abgesagt.", en: "The client cancelled the appointment." },
          { es: "Sie verschob die Reise um eine Woche.", en: "She postponed the trip by a week." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "Can we postpone the appointment?", answer: "Können wir den Termin verschieben?", explanation: "\"Verschieben\": postpone." },
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The meeting has been moved to Thursday.", answer: "Die Besprechung ist auf Donnerstag verschoben worden.", altAnswers: ["Die Besprechung wurde auf Donnerstag verschoben.", "Das Meeting ist auf Donnerstag verschoben worden."], explanation: "\"Verschieben auf\" + accusative." },
          { type: "listen-choose", audio: "Der Kunde hat den Termin abgesagt.", question: "What happened?", options: ["The client cancelled the appointment.", "The client made an appointment.", "The client postponed the appointment.", "The client was late."], correctIndex: 0, explanation: "\"Absagen\": cancel." },
        ],
      },
      {
        heading: "Projects and departments",
        body: [
          "\"Das Projekt\" (stress on the last syllable) is run by \"die Abteilung\" (department) or \"das Team\". You \"planen\" and \"organisieren\" it, and someone is \"verantwortlich für\" (responsible for) it.",
          "\"Die Idee\" can be \"gut\", \"neu\" or \"verrückt\"; you \"haben\", \"vorschlagen\" (suggest) or \"umsetzen\" (put into practice) an idea.",
        ],
        examples: [
          { es: "Unsere Abteilung plant ein neues Projekt.", en: "Our department is planning a new project." },
          { es: "Wer ist für das Projekt verantwortlich?", en: "Who is responsible for the project?" },
          { es: "Die Feier wird von der Personalabteilung organisiert.", en: "The party is being organised by the HR department." },
          { es: "Ich möchte eine Idee vorschlagen.", en: "I'd like to suggest an idea." },
          { es: "Die Idee wurde sofort umgesetzt.", en: "The idea was put into practice immediately." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "Who is responsible for the project?", answer: "Wer ist für das Projekt verantwortlich?", altAnswers: ["Wer ist verantwortlich für das Projekt?"], explanation: "\"Verantwortlich für\" + accusative." },
          { type: "fill-blank", prompt: "Write the German for the bold words.", en: "Our [department] is planning a new project.", sentence: "Unsere ___ plant ein neues Projekt.", answer: "Abteilung", explanation: "\"Die Abteilung\"." },
        ],
      },
      {
        heading: "Deadlines and getting things done",
        body: [
          "\"Die Frist\" is a deadline: \"Die Frist endet am Freitag\", \"eine Frist einhalten\" (meet a deadline), \"die Frist verlängern\" (extend the deadline). \"Die Deadline\" is also used in offices.",
          "\"Erledigen\" means get done or deal with: \"Ich habe alles erledigt\", \"Das muss bis morgen erledigt werden\". \"Erledigt!\" on its own means Done!",
        ],
        examples: [
          { es: "Die Frist endet am Freitag.", en: "The deadline is on Friday." },
          { es: "Wir konnten die Frist nicht einhalten.", en: "We couldn't meet the deadline." },
          { es: "Die Frist ist um eine Woche verlängert worden.", en: "The deadline has been extended by a week." },
          { es: "Das muss bis morgen erledigt werden.", en: "That has to be done by tomorrow." },
          { es: "Ich habe heute alles erledigt.", en: "I got everything done today." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "That has to be done by tomorrow.", answer: "Das muss bis morgen erledigt werden.", explanation: "Modal passive with \"erledigen\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The deadline has been extended by a week.", answer: "Die Frist ist um eine Woche verlängert worden.", altAnswers: ["Die Frist wurde um eine Woche verlängert.", "Die Deadline ist um eine Woche verlängert worden."], explanation: "\"Um\" + amount." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The meeting starts at ten.", answer: "Die Besprechung beginnt um zehn.", altAnswers: ["Die Besprechung fängt um zehn an.", "Das Meeting beginnt um zehn.", "Die Besprechung beginnt um zehn Uhr."], explanation: "\"Die Besprechung\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "She postponed the trip by a week.", answer: "Sie verschob die Reise um eine Woche.", altAnswers: ["Sie hat die Reise um eine Woche verschoben."], explanation: "\"Verschieben, verschob, verschoben\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The appointment was cancelled.", answer: "Der Termin wurde abgesagt.", altAnswers: ["Der Termin ist abgesagt worden."], explanation: "\"Absagen\" → \"abgesagt\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "We couldn't meet the deadline.", answer: "Wir konnten die Frist nicht einhalten.", altAnswers: ["Wir haben die Frist nicht einhalten können."], explanation: "\"Eine Frist einhalten\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "The party is being organised by the HR department.", answer: "Die Feier wird von der Personalabteilung organisiert.", altAnswers: ["Die Party wird von der Personalabteilung organisiert."], explanation: "\"Von der\" + department." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "I got everything done today.", answer: "Ich habe heute alles erledigt.", altAnswers: ["Heute habe ich alles erledigt."], explanation: "\"Erledigen\": get done." },
      { type: "translate", direction: "en-es", prompt: "Translate into German.", source: "I'd like to suggest an idea.", answer: "Ich möchte eine Idee vorschlagen.", altAnswers: ["Ich würde gern eine Idee vorschlagen."], explanation: "\"Vorschlagen\": suggest." },
      { type: "fill-blank", prompt: "Write the German for the bold words.", en: "The [deadline] is on Friday.", sentence: "Die ___ endet am Freitag.", answer: "Frist", explanation: "\"Die Frist\"." },
      { type: "matching", instructions: "Match the German with the English.", pairs: [{ left: "verschieben", right: "to postpone" }, { left: "absagen", right: "to cancel" }, { left: "erledigen", right: "to get done" }, { left: "planen", right: "to plan" }, { left: "organisieren", right: "to organise" }], explanation: "Key work verbs." },
      { type: "word-order", prompt: "Put the words in order to say: The project must be finished by May.", words: ["Das Projekt", "muss", "bis Mai", "abgeschlossen", "werden."], translation: "The project must be finished by May.", explanation: "Modal passive." },
      { type: "dictation", audio: "Die Besprechung ist auf Donnerstag verschoben worden.", explanation: "Perfekt passive." },
      { type: "speak", text: "Können wir den Termin auf nächste Woche verschieben?", prompt: "Say it in German: Can we postpone the appointment to next week?", explanation: "\"Verschieben auf\" + accusative." },
    ],
  },
];

export const DE_B1_U15_WRITING: WriteExercise = {
  type: "write",
  prompt: "Something in your flat or house went wrong (a burst pipe, a storm, a broken heating system). Write an email to your landlord or your insurance company: say what happened and what has already been done, what still has to be done, and ask when it can be repaired. Use the passive where the action matters more than who did it.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Perfekt passive for what has been done: \"ist ... repariert worden\" (never \"geworden\")",
    "Modal passive for what still needs doing: \"muss ... ersetzt werden\", \"kann ... repariert werden\"",
    "\"Durch\" + accusative for the cause and \"von\" + dative for a person or company",
    "A polite email frame: \"Sehr geehrte Frau ...\", \"Mit freundlichen Grüßen\"",
  ],
  modelAnswer: "Sehr geehrte Frau Albrecht,\n\nleider muss ich Ihnen einen Schaden in meiner Wohnung melden. Letzte Nacht ist das Fenster im Schlafzimmer durch den Sturm beschädigt worden, und der Boden ist nass geworden. Das Wasser ist schon von mir aufgewischt worden, und das Fenster wurde provisorisch mit Folie abgedeckt. Heute Morgen ist ein Handwerker von der Firma Kessler gekommen. Er sagt, dass die Scheibe komplett ersetzt werden muss. Außerdem sollte der Boden von einem Fachmann geprüft werden.\n\nKönnten Sie mir bitte sagen, wann die Reparatur durchgeführt werden kann? Muss der Schaden auch der Versicherung gemeldet werden? Fotos habe ich angehängt.\n\nMit freundlichen Grüßen\nDaniel Weber",
  explanation: "The email uses the Perfekt passive for completed actions (\"ist ... beschädigt worden\", \"ist ... aufgewischt worden\") and keeps \"geworden\" for become (\"nass geworden\"). The modal passive expresses what still needs doing (\"ersetzt werden muss\", \"durchgeführt werden kann\"), \"durch den Sturm\" names the cause and \"von einem Fachmann\" the person.",
};
