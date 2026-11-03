// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-b1-u30.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French B1, Unit 30: Survival Situations: Offices, Shops & Work.

export const FR_B1_U30_WRITING: WriteExercise = {
  type: "write",
  prompt: "Three weeks ago you bought a washing machine from an online shop. It broke down after a week, a technician came and said it was faulty, and the shop has not answered your two emails. Write a formal letter of complaint (80-150 words): explain what happened, say what you find unacceptable, and ask for a replacement or a refund.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Uses a formal frame (\"Madame, Monsieur\", \"Je me permets de vous écrire\", \"Je vous prie d'agréer...\") and \"vous\" throughout",
    "Explains the events with the passé composé and the plus-que-parfait (\"j'avais commandé\", \"le technicien a constaté\")",
    "Complains with the subjunctive (\"Il est inadmissible que\", \"Ce n'est pas normal que\" + subjunctive)",
    "Makes the request with the polite conditional (\"Je vous serais reconnaissant(e) de\", \"Je souhaiterais\") and complaint vocabulary (\"défectueux\", \"rembourser\", \"échanger\", \"la garantie\")",
  ],
  modelAnswer: "Madame, Monsieur,\n\nJe me permets de vous écrire au sujet du lave-linge que j'avais commandé sur votre site le 3 mars (commande n° 45127). L'appareil est tombé en panne au bout d'une semaine. Le technicien que vous m'avez envoyé a constaté qu'il était défectueux. Depuis, je vous ai écrit deux fois, mais je n'ai reçu aucune réponse.\n\nIl est inadmissible qu'un client attende deux semaines sans pouvoir laver son linge, et ce n'est pas normal que votre service client ne réponde pas. L'appareil est encore sous garantie.\n\nJe vous serais donc reconnaissante de bien vouloir l'échanger ou me rembourser dans les plus brefs délais.\n\nDans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.\n\nNathalie Roux",
  explanation: "The plus-que-parfait sets the earlier purchase (\"j'avais commandé\") behind the events in the passé composé. \"Il est inadmissible que\" and \"ce n'est pas normal que\" express a judgement and take the subjunctive (\"attende\", \"réponde\"). \"Je vous serais reconnaissante de bien vouloir\" + infinitive is the standard polite request in a formal letter.",
};

export const FR_B1_U30: Lesson[] = [
  {
    slug: "b1-survival-paperwork",
    level: "FR-B1",
    number: 1,
    title: "Survival: Paperwork and Offices",
    summary: "Find your way through French administration: the préfecture, the mairie, the CAF, appointments, supporting documents and the language of procedures.",
    duration: "15 min",
    sections: [
      {
        heading: "Who does what",
        body: [
          "French bureaucracy is famous, and knowing which office handles what saves days. \"La mairie\" (town hall) deals with births, marriages, local life and electoral lists. \"La préfecture\" (the state's office in each département) issues \"les titres de séjour\" (residence permits) and, for some procedures, driving licences. \"La CAF\" (Caisse d'allocations familiales) pays family and housing benefits (\"les APL\", help with rent). \"La Sécurité sociale\" (\"la Sécu\", or \"l'Assurance maladie\") reimburses medical costs and gives you \"une carte Vitale\". \"France Travail\" helps job seekers.",
        ],
        examples: [
          { es: "Pour le titre de séjour, il faut s'adresser à la préfecture.", en: "For the residence permit, you have to go to the prefecture." },
          { es: "J'ai fait ma demande d'APL en ligne sur le site de la CAF.", en: "I applied for housing benefit online on the CAF website." },
          { es: "Ma carte Vitale n'est toujours pas arrivée.", en: "My health insurance card still hasn't arrived." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "You need a residence permit. Where do you go?", options: ["À la préfecture", "À la CAF", "À la Sécurité sociale", "À la poste"], correctIndex: 0, explanation: "\"Les titres de séjour\" are issued by \"la préfecture\". The CAF handles family and housing benefits." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My housing benefit is paid by the CAF.", answer: "Mes APL sont versées par la CAF.", altAnswers: ["La CAF me verse les APL.", "Mes APL sont payées par la CAF.", "C'est la CAF qui me verse les APL."], explanation: "Benefits are \"versées\" (paid) by the CAF; \"les APL\" is feminine plural, so the participle agrees." },
        ],
      },
      {
        heading: "Démarches, queues and counters",
        body: [
          "Most procedures (\"les démarches\") now start online: \"faire une demande en ligne\", \"créer un compte\", \"prendre rendez-vous en ligne\". At the office itself you go to \"l'accueil\" (reception), take \"un ticket\", wait your turn (\"faire la queue\", \"attendre son tour\") and are called to \"le guichet\" (the counter).",
        ],
        examples: [
          { es: "On a fait la queue pendant deux heures à la mairie.", en: "We queued for two hours at the town hall." },
          { es: "Il faut prendre rendez-vous en ligne, on ne peut plus venir sans rendez-vous.", en: "You have to book an appointment online, you can't just turn up any more." },
          { es: "Présentez-vous au guichet 4 avec votre ticket.", en: "Go to counter 4 with your ticket." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "At reception, you have to [wait your turn].", sentence: "À l'accueil, il faut ___.", answer: "attendre son tour", altAnswers: ["attendre votre tour", "faire la queue"], explanation: "\"Attendre son tour\" = to wait your turn; with impersonal \"il faut\" the possessive is \"son\"." },
          { type: "multiple-choice", question: "The official says « Présentez-vous au guichet 2 ». What do you do?", options: ["Go to counter 2.", "Introduce yourself to two people.", "Fill in form 2.", "Come back in two days."], correctIndex: 0, explanation: "\"Se présenter au guichet\" = to go to the counter; \"le guichet\" is the counter window." },
        ],
      },
      {
        heading: "Les justificatifs",
        body: [
          "Every procedure needs supporting documents: \"un justificatif de domicile\" (proof of address: a recent bill), \"une pièce d'identité\" (ID: passport or ID card), \"un acte de naissance\" (birth certificate), \"une photo d'identité\", \"un relevé de compte\" or \"un RIB\". Copies are \"des photocopies\"; originals \"des originaux\". Officials will say \"Il faut que vous fournissiez...\", \"Il manque une pièce\" (a document is missing), \"Votre dossier est incomplet\".",
        ],
        examples: [
          { es: "Il manque une pièce à votre dossier.", en: "A document is missing from your file." },
          { es: "Veuillez joindre une copie de votre passeport.", en: "Please attach a copy of your passport." },
          { es: "Apportez les originaux et des photocopies.", en: "Bring the originals and photocopies." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What does « une pièce » mean at the town hall?", options: ["a document", "a room", "a coin", "a play"], correctIndex: 0, explanation: "In paperwork, \"une pièce\" (short for \"pièce justificative\") is a document. In a flat it's a room, and \"une pièce de monnaie\" is a coin." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Two documents are missing.", answer: "Il manque deux pièces.", altAnswers: ["Il manque deux documents.", "Il manque deux justificatifs."], explanation: "\"Il manque\" is impersonal: the verb stays singular even with a plural noun after it." },
        ],
      },
      {
        heading: "Fournir, remplir, joindre",
        body: [
          "\"Fournir\" (to provide) is the key verb, and since requirements are usually stated with \"il faut que\", you need its subjunctive: \"que je fournisse, que vous fournissiez\". Its cousins \"remplir\" (to fill in, \"remplir un formulaire\") and \"joindre\" (to attach, \"veuillez joindre une copie\") are just as common. Note \"une pièce\" here is a document, not a room or a coin.",
        ],
        examples: [
          { es: "Il faut que vous fournissiez un justificatif de domicile de moins de trois mois.", en: "You need to provide proof of address less than three months old." },
          { es: "J'ai rempli le formulaire, mais j'ai oublié de le signer.", en: "I filled in the form, but I forgot to sign it." },
          { es: "Il faut que je fasse traduire mon acte de naissance.", en: "I need to get my birth certificate translated." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "You need [to provide] an ID photo.", sentence: "Il faut que vous ___ une photo d'identité.", answer: "fournissiez", explanation: "\"Il faut que\" + subjunctive: \"que vous fournissiez\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Il faut que je remplis ce formulaire.", answer: "Il faut que je remplisse ce formulaire.", explanation: "\"Il faut que\" + subjunctive: \"remplir\" → \"que je remplisse\" (stem \"rempliss-\")." },
        ],
      },
      {
        heading: "Official language: passive and on",
        body: [
          "Official messages and letters hide the agent with the passive: \"Votre dossier a été transmis au service compétent\" (Your file has been passed on to the relevant department), \"Votre demande est en cours de traitement\" (Your application is being processed), \"Votre rendez-vous a été annulé\". On the phone, the same official says \"On a transmis votre dossier\", \"On vous enverra un courrier\".",
        ],
        examples: [
          { es: "Votre dossier a été transmis au service compétent.", en: "Your file has been passed on to the relevant department." },
          { es: "Votre demande est en cours de traitement.", en: "Your application is being processed." },
          { es: "On vous enverra un courrier dans quelques semaines.", en: "We'll send you a letter in a few weeks." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change it to the passive.", source: "On a transmis votre demande à la préfecture.", answer: "Votre demande a été transmise à la préfecture.", explanation: "Passive passé composé: \"a été\" + participle agreeing with \"votre demande\" (feminine): \"transmise\"." },
          { type: "listen-choose", audio: "Votre rendez-vous a été reporté au 3 mai.", question: "What does it mean?", options: ["Your appointment has been moved to 3 May.", "Your appointment has been cancelled.", "Your appointment is on 3 March.", "You must book before 3 May."], correctIndex: 0, explanation: "\"Reporter\" = to postpone, move to a later date; \"a été reporté\" is the passive." },
        ],
      },
      {
        heading: "Delays and receipts",
        body: [
          "Other key phrases: \"Vous recevrez une réponse sous quinze jours\" (within a fortnight), \"le délai\" (the processing time), \"un récépissé\" (a receipt proving you applied, valid while you wait), \"renouveler\" (to renew), \"un formulaire Cerfa\" (the official numbered forms).",
        ],
        examples: [
          { es: "Le délai est de deux mois environ.", en: "The processing time is about two months." },
          { es: "En attendant, ce récépissé vous permet de travailler.", en: "In the meantime, this receipt allows you to work." },
          { es: "Mon titre de séjour doit être renouvelé avant juin.", en: "My residence permit has to be renewed before June." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "You'll receive an answer [within] ten days.", sentence: "Vous recevrez une réponse ___ dix jours.", answer: "sous", altAnswers: ["dans les"], explanation: "\"Sous\" + a period = within, the usual official word." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I have to renew my passport.", answer: "Je dois renouveler mon passeport.", altAnswers: ["Il faut que je renouvelle mon passeport.", "Il faut que je fasse renouveler mon passeport.", "Je dois faire renouveler mon passeport."], explanation: "\"Renouveler\" = to renew; with \"il faut que\", the subjunctive \"renouvelle\"." },
      { type: "translate", direction: "en-es", prompt: "Change it to the passé composé.", source: "Je remplis le formulaire et je le signe.", answer: "J'ai rempli le formulaire et je l'ai signé.", explanation: "Passé composé with avoir; the pronoun \"le\" goes before the auxiliary and becomes \"l'\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[Please] send us the originals.", sentence: "___ nous envoyer les originaux.", answer: "Veuillez", altAnswers: ["Merci de"], explanation: "\"Veuillez\" + infinitive is the formal written please." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I need to get my documents photocopied.", answer: "Je dois faire photocopier mes documents.", altAnswers: ["Il faut que je fasse photocopier mes documents.", "Je dois faire photocopier mes papiers.", "Il faut que je fasse photocopier mes papiers."], explanation: "To get something done by someone else: \"faire\" + infinitive." },
      { type: "matching", instructions: "Match each office with what it does.", pairs: [{ left: "la préfecture", right: "residence permits" }, { left: "la CAF", right: "family and housing benefits" }, { left: "la Sécurité sociale", right: "reimbursing medical costs" }, { left: "la mairie", right: "births, marriages and local services" }], explanation: "Knowing which \"administration\" to contact is half the battle." },
      { type: "multiple-choice", question: "At the counter, the official says: \"Votre dossier est incomplet.\" What does she mean?", options: ["Something is missing from your file.", "Your file has been lost.", "Your file has been accepted.", "Your file is being processed."], correctIndex: 0, explanation: "\"Incomplet\" means incomplete: you need to bring \"la pièce manquante\"." },
      { type: "word-order", prompt: "Put the words in order to say: My application has been accepted.", words: ["Ma", "demande", "a", "été", "acceptée."], translation: "My application has been accepted.", explanation: "Passive passé composé: \"acceptée\" agrees with \"ma demande\"." },
      { type: "dictation", audio: "Mon récépissé expire à la fin du mois.", explanation: "\"Un récépissé\" proves you applied; \"expirer\" = to run out." },
      { type: "speak", text: "Bonjour, j'ai rendez-vous à dix heures pour mon titre de séjour.", prompt: "Say it in French at the reception desk: Hello, I have an appointment at ten for my residence permit.", explanation: "\"Avoir rendez-vous\" with no article; \"pour\" + the purpose." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Your appointment has been cancelled.", answer: "Votre rendez-vous a été annulé.", altAnswers: ["Ton rendez-vous a été annulé.", "On a annulé votre rendez-vous."], explanation: "Passive passé composé: \"a été\" + participle, agreeing with \"rendez-vous\" (masculine)." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je suis allé à la CAF pour mon titre de séjour.", answer: "Je suis allé à la préfecture pour mon titre de séjour.", altAnswers: ["Je suis allée à la préfecture pour mon titre de séjour."], explanation: "Residence permits are handled by \"la préfecture\"; the CAF pays family and housing benefits." },
    ],
  },
  {
    slug: "b1-survival-complaining-politely",
    level: "FR-B1",
    number: 2,
    title: "Survival: Complaining Politely",
    summary: "Make a complaint firmly but politely, in person and in a DELF B1-style letter: je voudrais faire une réclamation, il est inadmissible que, je vous serais reconnaissant de.",
    duration: "15 min",
    sections: [
      {
        heading: "Saying what's wrong",
        body: [
          "A complaint in a shop, hotel or on the phone starts calmly: \"Je voudrais faire une réclamation\" (I'd like to make a complaint), \"J'ai un problème avec...\", \"Je ne suis pas satisfait de...\" (I'm not satisfied with). Then the facts, in the past: \"J'ai commandé..., j'ai reçu..., le produit ne fonctionne pas\".",
        ],
        examples: [
          { es: "Bonjour, je voudrais faire une réclamation.", en: "Hello, I'd like to make a complaint." },
          { es: "Je ne suis pas satisfaite du service.", en: "I'm not satisfied with the service." },
          { es: "J'ai commandé un canapé gris et j'ai reçu un canapé beige.", en: "I ordered a grey sofa and received a beige one." },
          { es: "La chambre n'avait pas été nettoyée quand on est arrivés.", en: "The room hadn't been cleaned when we arrived." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "You received the wrong size. Which opening is right for customer service?", options: ["Bonjour, j'ai un problème avec ma commande.", "Salut, ça va pas du tout !", "Je complains de ma commande.", "Je porte plainte pour ma commande."], correctIndex: 0, explanation: "Start calmly and politely: \"j'ai un problème avec...\". \"Complaindre\" doesn't exist, and \"porter plainte\" means going to the police." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I ordered a blue jumper and received a red one.", answer: "J'ai commandé un pull bleu et j'ai reçu un pull rouge.", altAnswers: ["J'ai commandé un pull bleu et j'en ai reçu un rouge.", "J'ai commandé un pull bleu et j'ai reçu un rouge."], explanation: "The facts go in the passé composé: \"j'ai commandé\", \"j'ai reçu\"." },
        ],
      },
      {
        heading: "Réclamation, se plaindre, porter plainte",
        body: [
          "\"Une réclamation\" is the official word for a complaint to a company. \"Se plaindre\" is to complain in general (\"je me plains\", \"je me suis plaint\"); \"porter plainte\" means to press charges with the police, a much bigger step. Don't use \"complaindre\": it doesn't exist.",
        ],
        examples: [
          { es: "Les voisins se sont plaints du bruit.", en: "The neighbours complained about the noise." },
          { es: "On m'a volé mon vélo, alors j'ai porté plainte.", en: "My bike was stolen, so I reported it to the police." },
          { es: "Je me plains rarement, mais là, c'est trop.", en: "I rarely complain, but this is too much." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "My sister complained about the delay. Which is right?", options: ["Ma sœur s'est plainte du retard.", "Ma sœur a plaint du retard.", "Ma sœur a porté plainte du retard.", "Ma sœur s'est plaint le retard."], correctIndex: 0, explanation: "\"Se plaindre de\" is pronominal: être, agreement (\"plainte\") and \"de\" + le → \"du\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je vais complaindre au directeur.", answer: "Je vais me plaindre au directeur.", explanation: "\"Complaindre\" doesn't exist: to complain is the pronominal \"se plaindre\", here \"me plaindre\" before the infinitive." },
        ],
      },
      {
        heading: "Expressing indignation with the subjunctive",
        body: [
          "To say something is unacceptable, use a judgement + \"que\" + subjunctive: \"Ce n'est pas normal que\", \"Il est inadmissible que\" (it's unacceptable that), \"Je trouve inacceptable que\", \"Je suis surpris que\", \"Je regrette que\". The subjunctive comes from the judgement, not from the fact being uncertain.",
          "If the fact is in the past, use the past subjunctive (\"avoir\" / \"être\" in the subjunctive + participle): \"Il est inadmissible que personne ne m'ait prévenu\" (that nobody warned me), \"Je suis surpris que le colis ne soit pas arrivé\".",
        ],
        examples: [
          { es: "Ce n'est pas normal que j'attende depuis trois semaines.", en: "It's not right that I've been waiting for three weeks." },
          { es: "Il est inadmissible que personne ne réponde au téléphone.", en: "It's unacceptable that nobody answers the phone." },
          { es: "Je trouve inacceptable que vous ne vouliez pas me rembourser.", en: "I find it unacceptable that you won't refund me." },
          { es: "Il est inadmissible que personne ne m'ait prévenue.", en: "It's unacceptable that nobody warned me." },
          { es: "Je suis surpris que le colis ne soit toujours pas arrivé.", en: "I'm surprised the parcel still hasn't arrived." },
          { es: "Je regrette que vous n'ayez pas pris ma demande au sérieux.", en: "I'm sorry that you didn't take my request seriously." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "It's not right that the lift [doesn't work].", sentence: "Ce n'est pas normal que l'ascenseur ne ___ pas.", answer: "marche", altAnswers: ["fonctionne"], explanation: "A judgement + \"que\" takes the subjunctive; \"marcher\" looks the same as the present here." },
          { type: "translate", direction: "en-es", prompt: "Change \"Je sais que\" to \"Il est inadmissible que\".", source: "Je sais que le train est encore en retard.", answer: "Il est inadmissible que le train soit encore en retard.", explanation: "\"Savoir que\" takes the indicative; a judgement like \"inadmissible\" needs the subjunctive: \"soit\"." },
        ],
      },
      {
        heading: "Asking for a solution: je vous serais reconnaissant de...",
        body: [
          "The request is where politeness matters most. The classic formula of French letters is \"Je vous serais reconnaissant(e) de\" + infinitive (I would be grateful if you would...): \"Je vous serais reconnaissant de bien vouloir me rembourser\". \"Bien vouloir\" (kindly) adds extra courtesy. Other options: \"Je souhaiterais\", \"Je vous demande de\", \"Merci de bien vouloir...\".",
          "Remedies: \"un remboursement\" (refund), \"un échange\", \"un geste commercial\" (a goodwill gesture: a discount or voucher), \"un dédommagement\" (compensation), \"dans les plus brefs délais\" (as soon as possible).",
        ],
        examples: [
          { es: "Je vous serais reconnaissant de bien vouloir me rembourser.", en: "I would be grateful if you would refund me." },
          { es: "Je souhaiterais un échange ou un remboursement.", en: "I would like an exchange or a refund." },
          { es: "Merci de bien vouloir me répondre dans les plus brefs délais.", en: "Please reply as soon as possible." },
          { es: "L'hôtel nous a proposé un geste commercial.", en: "The hotel offered us a goodwill gesture." },
          { es: "Si je n'ai pas de réponse sous huit jours, je contacterai une association de consommateurs.", en: "If I don't get a reply within a week, I'll contact a consumer association." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I would be grateful if you would send me a new one. (a woman writing)", answer: "Je vous serais reconnaissante de bien vouloir m'en envoyer un nouveau.", altAnswers: ["Je vous serais reconnaissante de m'en envoyer un nouveau.", "Je vous serais reconnaissante de bien vouloir m'en envoyer une nouvelle.", "Je vous serais reconnaissante de m'en envoyer une nouvelle."], explanation: "\"Je vous serais reconnaissante de\" + infinitive, with feminine agreement; \"en\" stands for the item." },
          { type: "multiple-choice", question: "What is « un geste commercial » ?", options: ["a goodwill gesture, such as a discount", "a sales pitch", "a business handshake", "an advert"], correctIndex: 0, explanation: "\"Un geste commercial\" is what a company offers to make up for a problem: a discount, a voucher, a free night." },
        ],
      },
      {
        heading: "A DELF B1 complaint letter",
        body: [
          "In the DELF B1 writing paper, a complaint letter is a classic task. The examiners expect: an opening (\"Madame, Monsieur,\"), the reason for writing (\"Je me permets de vous écrire au sujet de...\" / \"Je vous écris pour vous faire part de mon mécontentement concernant...\"), the facts in the past, your judgement (subjunctive), your request (conditional), sometimes a consequence (si + present + future), and the closing formula.",
        ],
        examples: [
          { es: "Je me permets de vous écrire au sujet de ma commande du 12 mai.", en: "I am writing to you regarding my order of 12 May." },
          { es: "Je vous écris pour vous faire part de mon mécontentement.", en: "I am writing to express my dissatisfaction." },
          { es: "Sans réponse de votre part, je serai obligé de saisir le médiateur.", en: "Without a reply from you, I will have to refer the matter to the ombudsman." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[I am writing to you] regarding the delivery.", sentence: "___ au sujet de la livraison.", answer: "Je me permets de vous écrire", altAnswers: ["Je vous écris"], explanation: "\"Je me permets de vous écrire\" is the standard formal opener." },
          { type: "multiple-choice", question: "Which sentence correctly states a consequence in a complaint letter?", options: ["Sans réponse de votre part, je contacterai un avocat.", "Si vous ne me répondrez pas, je contacterai un avocat.", "Si vous ne me répondez pas, je contactais un avocat.", "Sans réponse de votre part, je contacter un avocat."], correctIndex: 0, explanation: "A consequence uses the future (\"je contacterai\"). After \"si\" the present is required, never the future." },
        ],
      },
      {
        heading: "Closing the letter",
        body: [
          "The closing is long and fixed: \"Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.\" A slightly shorter version: \"Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\" In an email, \"Cordialement\" is acceptable.",
        ],
        examples: [
          { es: "Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.", en: "I look forward to your reply. Yours faithfully." },
          { es: "Veuillez trouver ci-joint une copie de la facture.", en: "Please find attached a copy of the invoice." },
          { es: "Cordialement, Julie Martin", en: "Kind regards, Julie Martin" },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which is the right closing for a formal complaint letter?", options: ["Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.", "Bisous et à bientôt.", "Je vous embrasse.", "Salut, merci d'avance."], correctIndex: 0, explanation: "The formal closing formula is long and fixed; the others are for friends and family." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[Please find attached] my receipt.", sentence: "___ mon ticket de caisse.", answer: "Veuillez trouver ci-joint", altAnswers: ["Vous trouverez ci-joint"], explanation: "\"Veuillez trouver ci-joint\" = please find attached; \"ci-joint\" stays invariable before the noun." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We're not satisfied with the room.", answer: "Nous ne sommes pas satisfaits de la chambre.", altAnswers: ["On n'est pas satisfaits de la chambre.", "Nous ne sommes pas satisfaites de la chambre.", "On n'est pas satisfaites de la chambre."], explanation: "\"Satisfait de\" agrees with the subject: \"satisfaits\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's unacceptable that nobody called me back.", answer: "Il est inadmissible que personne ne m'ait rappelé.", altAnswers: ["Il est inadmissible que personne ne m'ait rappelée.", "C'est inadmissible que personne ne m'ait rappelé.", "C'est inadmissible que personne ne m'ait rappelée.", "Il est inacceptable que personne ne m'ait rappelé.", "Il est inacceptable que personne ne m'ait rappelée."], explanation: "A past fact after a judgement: past subjunctive \"m'ait rappelé\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I'm surprised that you [haven't] replied to me yet.", sentence: "Je suis surpris que vous ne m'___ pas encore répondu.", answer: "ayez", explanation: "Surprise takes the subjunctive; past subjunctive of avoir for vous: \"ayez\" + participle." },
      { type: "translate", direction: "en-es", prompt: "Change it to the passé composé.", source: "Le technicien ne vient pas.", answer: "Le technicien n'est pas venu.", explanation: "\"Venir\" takes être; \"ne... pas\" goes around the auxiliary." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We'd like compensation.", answer: "Nous souhaiterions un dédommagement.", altAnswers: ["Nous voudrions un dédommagement.", "Nous aimerions un dédommagement.", "On voudrait un dédommagement.", "On souhaiterait un dédommagement."], explanation: "The conditional is the polite way to ask; \"un dédommagement\" = compensation." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Si je n'aurai pas de réponse, je contacterai la banque.", answer: "Si je n'ai pas de réponse, je contacterai la banque.", explanation: "Never the future after \"si\": si + present, then the future." },
      { type: "word-order", prompt: "Put the words in order to say: Please contact me as soon as possible.", words: ["Merci", "de", "me", "contacter", "dans", "les", "plus", "brefs", "délais."], translation: "Please contact me as soon as possible.", explanation: "\"Merci de\" + infinitive is a polite formal please; \"dans les plus brefs délais\" = as soon as possible." },
      { type: "listen-choose", audio: "Je regrette que vous n'ayez pas tenu votre promesse.", question: "What does it mean?", options: ["I'm sorry you didn't keep your promise.", "I'm sorry I didn't keep my promise.", "I regret making you a promise.", "You regret not keeping your promise."], correctIndex: 0, explanation: "\"Je regrette que\" + past subjunctive \"vous n'ayez pas tenu\": you are the one who didn't keep it." },
      { type: "speak", text: "Ce n'est pas normal que le chauffage ne fonctionne toujours pas.", prompt: "Tell the receptionist it's not right that the heating still doesn't work.", explanation: "\"Ce n'est pas normal que\" + subjunctive \"fonctionne\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'm sorry that the hotel didn't warn us.", answer: "Je regrette que l'hôtel ne nous ait pas prévenus.", altAnswers: ["Je regrette que l'hôtel ne nous ait pas prévenues."], explanation: "\"Regretter que\" + past subjunctive; \"prévenus\" agrees with \"nous\"." },
    ],
  },
  {
    slug: "b1-mixed-practice-advice-column",
    level: "FR-B1",
    number: 3,
    title: "Mixed Practice: The Advice Column",
    summary: "Readers write in with their problems and the agony aunt answers, mixing the subjunctive, the conditional, si-clauses and imperatives with pronouns.",
    duration: "15 min",
    sections: [
      {
        heading: "The columnist's toolkit",
        body: [
          "Advice columns (\"le courrier du cœur\" for love problems, \"la rubrique conseils\" more generally) are a perfect place to mix the Intermediate tools. The reader explains the problem with the present and the past; the columnist answers with the conditional (\"vous devriez\", \"à votre place, je...\"), with \"il faudrait que\" + subjunctive, with si-clauses and with imperatives.",
        ],
        examples: [
          { es: "Il faudrait que vous fixiez des règles ensemble.", en: "You should set some rules together." },
          { es: "Si j'étais vous, je proposerais un planning.", en: "If I were you, I'd suggest a rota." },
          { es: "À votre place, je lui écrirais un petit mot.", en: "If I were you, I'd write him a note." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which reply sounds like advice from a columnist?", options: ["À votre place, je lui parlerais.", "À votre place, je lui parle.", "Si j'étais vous, je lui parlerai.", "Si j'aurais été vous, je lui parle."], correctIndex: 0, explanation: "Advice about an imagined situation uses the conditional: \"à votre place, je parlerais\". The present or future doesn't fit, and \"si\" never takes the conditional." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "You [should] talk to him.", sentence: "Vous ___ lui parler.", answer: "devriez", altAnswers: ["pourriez"], explanation: "\"Devoir\" in the conditional gives advice: \"vous devriez\"." },
        ],
      },
      {
        heading: "Letter 1: the flatmate who never washes up",
        body: [
          "Clément writes: \"Mon colocataire ne fait jamais la vaisselle. Je lui en ai déjà parlé deux fois, mais rien ne change. Je commence à en avoir assez.\" The answer: \"Il faudrait que vous fixiez des règles ensemble. Si j'étais vous, je proposerais un planning. Parlez-lui-en calmement, et ne lui faites pas de reproches devant vos amis.\"",
          "Notice the imperatives with pronouns: \"parlez-lui-en\" (affirmative: verb + lui + en), \"ne lui faites pas de reproches\" (negative: pronoun before the verb).",
        ],
        examples: [
          { es: "Mon colocataire ne fait jamais la vaisselle.", en: "My flatmate never does the washing-up." },
          { es: "Je lui en ai déjà parlé deux fois, mais rien ne change.", en: "I've already talked to him about it twice, but nothing changes." },
          { es: "Parlez-lui-en calmement.", en: "Talk to him about it calmly." },
          { es: "Ne lui faites pas de reproches devant vos amis.", en: "Don't criticise him in front of your friends." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Make it negative.", source: "Parlez-lui-en devant ses amis.", answer: "Ne lui en parlez pas devant ses amis.", explanation: "In a negative command the pronouns go back before the verb: \"ne lui en parlez pas\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Ne dites-lui pas tout de suite.", answer: "Ne lui dites pas tout de suite.", explanation: "Negative imperative: the pronoun goes before the verb, inside \"ne... pas\"." },
        ],
      },
      {
        heading: "Letter 2: the friend who borrowed money",
        body: [
          "Amina writes: \"Il y a six mois, j'ai prêté 500 euros à ma meilleure amie. Elle m'avait promis de me les rendre en un mois. Depuis, elle n'en parle plus. J'ai peur que notre amitié soit finie si je les lui réclame.\"",
        ],
        examples: [
          { es: "Elle m'avait promis de me les rendre en un mois.", en: "She had promised to give it back to me within a month." },
          { es: "J'ai peur que notre amitié soit finie.", en: "I'm afraid our friendship is over." },
          { es: "Une vraie amie comprendra.", en: "A real friend will understand." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change it to the plus-que-parfait.", source: "Il m'a promis de venir.", answer: "Il m'avait promis de venir.", explanation: "The plus-que-parfait sets an earlier promise behind the story: \"a\" → \"avait\"." },
          { type: "multiple-choice", question: "I'm afraid she's angry. Which is right?", options: ["J'ai peur qu'elle soit fâchée.", "J'ai peur qu'elle est fâchée.", "J'ai peur qu'elle sera fâchée.", "J'ai peur elle soit fâchée."], correctIndex: 0, explanation: "\"Avoir peur que\" + subjunctive: \"soit\". \"Que\" can never be left out." },
        ],
      },
      {
        heading: "The columnist's answer to Amina",
        body: [
          "The plus-que-parfait (\"elle m'avait promis\") sets the earlier promise; \"avoir peur que\" + subjunctive expresses the fear. The columnist answers: \"Je comprends que vous soyez gênée. Mais une vraie amie comprendra. Demandez-les-lui simplement, sans l'accuser. Si elle ne peut pas tout rembourser, proposez-lui de payer en plusieurs fois.\"",
          "Note \"je comprends que\" + subjunctive when it means I understand why / I sympathise (\"Je comprends que vous soyez gênée\"). \"Les lui\" and \"les-lui\" carry \"les\" = the 500 euros.",
        ],
        examples: [
          { es: "Je comprends que vous soyez gênée.", en: "I understand that you feel awkward." },
          { es: "Demandez-les-lui simplement, sans l'accuser.", en: "Just ask her for it, without accusing her." },
          { es: "Si elle ne peut pas tout rembourser, proposez-lui de payer en plusieurs fois.", en: "If she can't pay it all back, suggest she pays in instalments." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "The keys? Give them back to her. (polite)", options: ["Les clés ? Rendez-les-lui.", "Les clés ? Rendez-lui-les.", "Les clés ? Les lui rendez.", "Les clés ? Rendez-leur-les."], correctIndex: 0, explanation: "Affirmative imperative: direct object \"les\" before indirect \"lui\", joined with hyphens." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I understand that your sister [wants] to leave.", sentence: "Je comprends que votre sœur ___ partir.", answer: "veuille", explanation: "\"Je comprends que\" meaning I sympathise takes the subjunctive: \"vouloir\" → \"qu'elle veuille\"." },
        ],
      },
      {
        heading: "Letter 3: the dream job abroad",
        body: [
          "Julien writes: \"On m'a proposé un poste à Montréal. C'est le travail de mes rêves, mais ma copine ne veut pas quitter Lyon. Qu'est-ce que vous feriez à ma place ?\"",
          "The columnist mixes hypotheses and real conditions: \"À votre place, je ne déciderais rien tout seul. Si vous partiez sans elle, vous le regretteriez peut-être. Il est important que vous en discutiez tous les deux. Si elle accepte de venir un an, essayez ! Et si elle refuse, ne lui en voulez pas.\"",
        ],
        examples: [
          { es: "On m'a proposé un poste à Montréal.", en: "I've been offered a job in Montreal." },
          { es: "Qu'est-ce que vous feriez à ma place ?", en: "What would you do in my shoes?" },
          { es: "Si vous partiez sans elle, vous le regretteriez peut-être.", en: "If you left without her, you might regret it." },
          { es: "Il est important que vous en discutiez tous les deux.", en: "It's important that you both talk it over." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change it to an imagined situation (si + imparfait).", source: "Si elle part, il sera triste.", answer: "Si elle partait, il serait triste.", explanation: "Imagined: si + imparfait (\"partait\"), then the conditional (\"serait\")." },
          { type: "multiple-choice", question: "Which sentence gives an instruction after a real condition?", options: ["Si elle accepte, partez ensemble !", "Si elle accepterait, partez ensemble !", "Si elle acceptera, partez ensemble !", "Si elle acceptait, partez ensemble !"], correctIndex: 0, explanation: "A real condition takes si + present, then an imperative. Never the future or conditional after \"si\"." },
        ],
      },
      {
        heading: "En vouloir à quelqu'un",
        body: [
          "\"En vouloir à quelqu'un\" means to hold something against someone, to be angry with them: \"Je ne t'en veux pas\" (I'm not angry with you). In the negative imperative: \"Ne lui en voulez pas\".",
        ],
        examples: [
          { es: "Si elle refuse, ne lui en voulez pas.", en: "If she says no, don't hold it against her." },
          { es: "Je ne t'en veux pas, je comprends.", en: "I'm not angry with you, I understand." },
          { es: "Elle en veut encore à son frère.", en: "She's still angry with her brother." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Je ne lui en veux pas du tout.", question: "What does it mean?", options: ["I'm not angry with him at all.", "I don't want any at all.", "He isn't angry with me at all.", "I don't want him at all."], correctIndex: 0, explanation: "\"En vouloir à quelqu'un\" = to be angry with someone; \"lui\" is the person, \"je\" the one who isn't angry." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Are you angry with me? (to a friend)", answer: "Tu m'en veux ?", altAnswers: ["Est-ce que tu m'en veux ?"], explanation: "\"En vouloir à quelqu'un\": \"m'\" is me, \"en\" is part of the expression." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If I were you, I'd talk to the landlord. (polite)", answer: "Si j'étais vous, je parlerais au propriétaire.", altAnswers: ["À votre place, je parlerais au propriétaire."], explanation: "\"Si j'étais vous\" / \"à votre place\" + conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Have you talked to them about it? (polite)", answer: "Vous leur en avez parlé ?", altAnswers: ["Est-ce que vous leur en avez parlé ?", "Leur en avez-vous parlé ?"], explanation: "\"Parler de quelque chose à quelqu'un\" → \"leur en\" before the auxiliary." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[Don't lend him] any more money. (polite)", sentence: "___ plus d'argent.", answer: "Ne lui prêtez", explanation: "Negative imperative: \"ne\" + pronoun + verb; \"plus\" replaces \"pas\" here." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "He had promised to call me back.", answer: "Il m'avait promis de me rappeler.", explanation: "Plus-que-parfait for the earlier promise; \"me\" before the infinitive \"rappeler\"." },
      { type: "multiple-choice", question: "It's important that she knows the truth. Which is right?", options: ["Il est important qu'elle sache la vérité.", "Il est important qu'elle sait la vérité.", "Il est important qu'elle saura la vérité.", "Il est important de elle sache la vérité."], correctIndex: 0, explanation: "\"Il est important que\" + subjunctive; \"savoir\" is irregular: \"qu'elle sache\"." },
      { type: "word-order", prompt: "Put the words in order to say: Don't hold it against them. (polite)", words: ["Ne", "leur", "en", "voulez", "pas."], translation: "Don't hold it against them. (polite)", explanation: "\"En vouloir à\" in a negative imperative: \"ne leur en voulez pas\"." },
      { type: "dictation", audio: "Il faudrait que vous lui disiez ce que vous ressentez.", explanation: "\"Il faudrait que\" + subjunctive \"disiez\"; \"ce que\" = what." },
      { type: "speak", text: "Si j'étais toi, j'accepterais le poste.", prompt: "Tell a friend: if I were you, I'd accept the job.", explanation: "\"Si j'étais toi\" + conditional \"accepterais\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Si j'étais vous, je lui parle.", answer: "Si j'étais vous, je lui parlerais.", altAnswers: ["À votre place, je lui parlerais."], explanation: "After si + imparfait, the result goes in the conditional: \"je lui parlerais\"." },
    ],
  },
  {
    slug: "b1-survival-returns-and-exchanges",
    level: "FR-B1",
    number: 4,
    title: "Survival: Returning and Exchanging",
    summary: "Return or exchange goods in a French shop: refunds, credit notes, receipts, guarantees, the sales, and the difference between la taille and la pointure.",
    duration: "14 min",
    sections: [
      {
        heading: "Je voudrais échanger cet article",
        body: [
          "In a shop, the key verbs are \"échanger\" (to exchange), \"rembourser\" (to refund) and \"rapporter\" (to bring back). \"Un article\" is the shop word for an item. You'll need \"le ticket de caisse\" (the receipt; on paper or by email) and the shop's conditions: many shops take returns \"sous trente jours\" (within 30 days) if the item is \"dans son emballage d'origine\" (in its original packaging) with \"l'étiquette\" (the tag).",
        ],
        examples: [
          { es: "Bonjour, je voudrais échanger cet article.", en: "Hello, I'd like to exchange this item." },
          { es: "Vous avez le ticket de caisse ?", en: "Have you got the receipt?" },
          { es: "Les échanges sont acceptés sous trente jours.", en: "Exchanges are accepted within thirty days." },
          { es: "L'article doit être dans son emballage d'origine.", en: "The item must be in its original packaging." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'd like to return these shoes.", answer: "Je voudrais rapporter ces chaussures.", altAnswers: ["J'aimerais rapporter ces chaussures.", "Je voudrais rendre ces chaussures.", "J'aimerais rendre ces chaussures."], explanation: "\"Rapporter\" = to bring back; the conditional keeps it polite." },
          { type: "multiple-choice", question: "The sign says « Échanges sous 15 jours avec le ticket de caisse ». What does it mean?", options: ["You can exchange within 15 days with the receipt.", "You get a refund after 15 days.", "Exchanges cost 15 euros.", "You need ticket number 15."], correctIndex: 0, explanation: "\"Sous 15 jours\" = within 15 days; \"le ticket de caisse\" is the receipt." },
        ],
      },
      {
        heading: "Refunds, credit notes and online orders",
        body: [
          "Important: in a physical shop, French law doesn't oblige the shop to refund you if you simply change your mind; it's a goodwill policy. Many shops will offer \"un avoir\" (a credit note, store credit) instead of cash. Online, you have \"un délai de rétractation\" of 14 days (a right to cancel).",
        ],
        examples: [
          { es: "On ne rembourse pas, mais on peut vous faire un avoir.", en: "We don't give refunds, but we can give you a credit note." },
          { es: "J'ai rapporté le pull parce que la couleur ne me plaisait pas.", en: "I took the jumper back because I didn't like the colour." },
          { es: "Sur Internet, vous avez quatorze jours pour changer d'avis.", en: "Online, you have fourteen days to change your mind." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "The sales assistant offers you \"un avoir\". What is it?", options: ["A credit note to spend in the shop", "A cash refund", "A discount on the next sale", "A repair under guarantee"], correctIndex: 0, explanation: "\"Un avoir\" is store credit: you don't get your money back, but you can spend it there." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The shop isn't [obliged] to refund you.", sentence: "Le magasin n'est pas ___ de vous rembourser.", answer: "obligé", explanation: "\"Être obligé de\" + infinitive = to be obliged to." },
        ],
      },
      {
        heading: "What's wrong with it",
        body: [
          "Say why you're bringing it back: \"Ça ne me va pas\" (it doesn't fit / suit me), \"C'est trop petit / trop grand\", \"Je voudrais la taille au-dessus / en dessous\" (the next size up / down), \"Il est défectueux\" (it's faulty), \"Il ne marche pas\", \"Il y a un défaut\", \"C'est abîmé\" (damaged), \"Il manque une pièce\".",
        ],
        examples: [
          { es: "Ce pantalon ne me va pas, il est trop serré.", en: "These trousers don't fit me, they're too tight." },
          { es: "Le grille-pain est défectueux : il ne chauffe plus.", en: "The toaster is faulty: it doesn't heat up any more." },
          { es: "Le carton était abîmé et il manquait une pièce.", en: "The box was damaged and a part was missing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "This dress doesn't fit me, it's too big.", answer: "Cette robe ne me va pas, elle est trop grande.", altAnswers: ["Cette robe ne me va pas, elle est trop large."], explanation: "\"Aller\" is used for fit: \"ne me va pas\"; \"grande\" agrees with \"la robe\"." },
          { type: "listen-choose", audio: "Il manque une pièce dans le carton.", question: "What does it mean?", options: ["A part is missing from the box.", "The box is damaged.", "There's a coin in the box.", "One room is missing."], correctIndex: 0, explanation: "\"Il manque\" = something is missing; \"une pièce\" here is a part." },
        ],
      },
      {
        heading: "Taille or pointure?",
        body: [
          "The trap: \"la taille\" is clothes size (\"Vous faites quelle taille ?\" \"Je fais du 40\"), but shoe size is \"la pointure\": \"Vous faites quelle pointure ?\" \"Je chausse du 42\" or \"Je fais du 42\". Note \"aller\" for fit: \"Cette veste vous va très bien\" (that jacket really suits you).",
        ],
        examples: [
          { es: "Vous l'auriez dans la taille au-dessus ?", en: "Would you have it in the next size up?" },
          { es: "Vous faites quelle pointure ?", en: "What shoe size are you?" },
          { es: "Je chausse du 39.", en: "I take a size 39 shoe." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "In a clothes shop you want a smaller size. What do you ask?", options: ["Vous l'auriez dans la taille en dessous ?", "Vous l'auriez dans la pointure en dessous ?", "Vous l'auriez plus petite taille ?", "Vous l'auriez dans la taille au-dessus ?"], correctIndex: 0, explanation: "Clothes size is \"la taille\"; smaller is \"en dessous\", bigger \"au-dessus\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Vous faites quelle taille de chaussures ?", answer: "Vous faites quelle pointure ?", altAnswers: ["Quelle pointure faites-vous ?", "Quelle est votre pointure ?"], explanation: "Shoe size has its own word: \"la pointure\". \"La taille\" is for clothes." },
        ],
      },
      {
        heading: "Guarantees",
        body: [
          "For appliances and electronics, \"la garantie\" covers faults: \"L'appareil est encore sous garantie\" (still under guarantee). In France, \"la garantie légale de conformité\" lasts two years for new products; the shop must repair or replace a faulty item. \"Le service après-vente\" (\"le SAV\") handles repairs.",
        ],
        examples: [
          { es: "Mon téléphone est encore sous garantie.", en: "My phone is still under guarantee." },
          { es: "Il faut que vous contactiez le service après-vente.", en: "You need to contact the after-sales service." },
          { es: "Le vendeur m'a dit que la réparation serait gratuite.", en: "The salesman told me the repair would be free." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The guarantee lasts two years.", answer: "La garantie dure deux ans.", explanation: "\"Durer\" = to last; \"la garantie\" is feminine." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "You need [to send] it to the after-sales service.", sentence: "Il faut que vous l'___ au service après-vente.", answer: "envoyiez", explanation: "\"Il faut que\" + subjunctive: \"envoyer\" → \"que vous envoyiez\"." },
        ],
      },
      {
        heading: "The sales",
        body: [
          "\"Les soldes\" (the sales) happen twice a year at dates fixed by law, in January and in summer. Items \"soldés\" (in the sale) are often \"ni repris ni échangés\" (no returns or exchanges), but a faulty item is still covered. Watch for the passive with \"être\" in shop signs and conditions: \"Les articles soldés ne sont ni repris ni échangés\".",
        ],
        examples: [
          { es: "Les articles soldés ne sont ni repris ni échangés.", en: "Sale items cannot be returned or exchanged." },
          { es: "Je l'ai acheté pendant les soldes, à moins cinquante pour cent.", en: "I bought it in the sales, at fifty per cent off." },
          { es: "S'il est défectueux, on vous le remplace.", en: "If it's faulty, we'll replace it for you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change it to the passive.", source: "On ne reprend pas les articles soldés.", answer: "Les articles soldés ne sont pas repris.", explanation: "Passive: \"les articles\" becomes the subject, \"ne sont pas repris\" agrees with it." },
          { type: "multiple-choice", question: "What does « soldé » mean on a label?", options: ["reduced, in the sale", "sold out", "already sold", "out of stock"], correctIndex: 0, explanation: "\"Soldé\" = in the sale, at a reduced price. Sold out is \"épuisé\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I've lost the receipt, but I paid by card.", answer: "J'ai perdu le ticket de caisse, mais j'ai payé par carte.", altAnswers: ["J'ai perdu le ticket, mais j'ai payé par carte.", "J'ai perdu le ticket de caisse, mais j'ai payé avec ma carte.", "J'ai perdu mon ticket de caisse, mais j'ai payé par carte."], explanation: "\"Le ticket de caisse\" = the receipt; \"payer par carte\" = to pay by card." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "This jacket really suits you. (to a friend)", answer: "Cette veste te va très bien.", altAnswers: ["Cette veste te va vraiment bien."], explanation: "\"Aller à quelqu'un\" = to suit; \"te\" before the verb." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I'd prefer [a refund] to a credit note.", sentence: "Je préférerais ___ plutôt qu'un avoir.", answer: "un remboursement", explanation: "\"Un remboursement\" = a refund; \"un avoir\" is store credit." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My son takes a size 30 shoe.", answer: "Mon fils chausse du 30.", altAnswers: ["Mon fils fait du 30.", "Mon fils fait du trente.", "Mon fils chausse du trente."], explanation: "\"Chausser du\" (or \"faire du\") + shoe size." },
      { type: "translate", direction: "en-es", prompt: "Change \"le téléphone\" to a pronoun.", source: "On vous remplace le téléphone.", answer: "On vous le remplace.", explanation: "\"Vous\" before \"le\": first and second person pronouns come first." },
      { type: "word-order", prompt: "Put the words in order to say: The shoes were too small, so I took them back.", words: ["Les", "chaussures", "étaient", "trop", "petites,", "alors", "je", "les", "ai", "rapportées."], translation: "The shoes were too small, so I took them back.", explanation: "Imparfait for the description; \"rapportées\" agrees with \"les\" (the shoes) placed before." },
      { type: "listen-choose", audio: "Vous faites quelle taille ?", question: "What did you hear?", options: ["Vous faites quelle taille ?", "Vous faites quelle pointure ?", "Vous faites quel travail ?", "Vous faites quelle tâche ?"], correctIndex: 0, explanation: "\"Quelle taille\" asks about clothes size; \"quelle pointure\" about shoes." },
      { type: "speak", text: "Bonjour, je voudrais me faire rembourser cet article.", prompt: "Say it in French: Hello, I'd like to get a refund for this item.", explanation: "\"Se faire rembourser\" = to get oneself refunded." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Il faut que je fais réparer mon ordinateur.", answer: "Il faut que je fasse réparer mon ordinateur.", explanation: "\"Il faut que\" + subjunctive: \"faire\" → \"que je fasse\"." },
    ],
  },
  {
    slug: "b1-themed-review-beating-shyness",
    level: "FR-B1",
    number: 5,
    title: "Themed Review: Beating Shyness",
    summary: "A shy student joins a theatre club: fears with avoir peur que, past feelings, what changed, and highlighting with ce qui... c'est.",
    duration: "14 min",
    sections: [
      {
        heading: "Before: a shy student",
        body: [
          "Lucas, 19, is studying law in Rennes. He tells how shy he used to be. Description of the past goes in the imparfait: \"J'étais très timide\", \"Je rougissais dès qu'on me parlait\" (I blushed as soon as anyone spoke to me), \"Je n'osais pas lever la main\" (I didn't dare put my hand up).",
        ],
        examples: [
          { es: "J'étais tellement timide que je n'osais pas lever la main.", en: "I was so shy that I didn't dare put my hand up." },
          { es: "Je rougissais dès qu'on me parlait.", en: "I blushed as soon as anyone spoke to me." },
          { es: "Je restais dans mon coin pendant les soirées.", en: "I'd stay in my corner at parties." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "When I was little, I [didn't dare] speak to adults.", sentence: "Quand j'étais petit, je ___ parler aux adultes.", answer: "n'osais pas", altAnswers: ["n'osais jamais"], explanation: "A habit in the past goes in the imparfait: \"je n'osais pas\", with \"ne... pas\" around the verb." },
        ],
      },
      {
        heading: "J'avais peur que... / j'avais peur de...",
        body: [
          "Fears about other people take \"avoir peur que\" + subjunctive. In the past, the subjunctive stays present in form: \"J'avais peur que les autres se moquent de moi\" (I was afraid the others would laugh at me). The subjunctive has no future; English would after a past fear becomes a present subjunctive. When it's your own action, use \"avoir peur de\" + infinitive: \"J'avais peur de dire une bêtise\".",
        ],
        examples: [
          { es: "J'avais peur que les autres se moquent de moi.", en: "I was afraid the others would laugh at me." },
          { es: "J'avais peur de dire une bêtise.", en: "I was afraid of saying something stupid." },
          { es: "Je craignais qu'on me trouve ennuyeux.", en: "I was worried people would find me boring." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "I was afraid my parents would be disappointed. Which is right?", options: ["J'avais peur que mes parents soient déçus.", "J'avais peur que mes parents seraient déçus.", "J'avais peur que mes parents sont déçus.", "J'avais peur de mes parents soient déçus."], correctIndex: 0, explanation: "\"Avoir peur que\" + present subjunctive, even in the past: English would becomes \"soient\"." },
          { type: "translate", direction: "en-es", prompt: "Change it so the fear is about your own action: use avoir peur de.", source: "J'avais peur que tu rates le train.", answer: "J'avais peur de rater le train.", explanation: "Same subject (I fear, I miss): \"avoir peur de\" + infinitive, no subjunctive." },
        ],
      },
      {
        heading: "The turning point: j'ai failli...",
        body: [
          "In his second year, a friend dragged him to a theatre club. The turning point is told in the passé composé: \"Un jour, une amie m'a inscrit au club de théâtre\", \"Au début, j'ai failli abandonner\" (I nearly gave up). \"Faillir\" + infinitive in the passé composé means nearly did something.",
        ],
        examples: [
          { es: "Une amie m'a inscrit au club de théâtre sans me demander mon avis.", en: "A friend signed me up for the drama club without asking me." },
          { es: "Au début, j'ai failli abandonner.", en: "At first, I nearly gave up." },
          { es: "Le metteur en scène m'a donné un rôle de méchant.", en: "The director gave me the role of a villain." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I [nearly] fell off the stage.", sentence: "J'ai ___ tomber de la scène.", answer: "failli", explanation: "\"Faillir\" + infinitive in the passé composé = nearly did something." },
        ],
      },
      {
        heading: "Se mettre à: starting something",
        body: [
          "\"Se mettre à\" + infinitive means to start doing something: \"Je me suis mis à parler aux autres\", \"Elle s'est mise à rire\". It's more vivid than \"commencer à\" and very common in storytelling. As a pronominal verb, it takes être and agrees: \"elle s'est mise\".",
        ],
        examples: [
          { es: "Petit à petit, je me suis mis à parler aux autres.", en: "Little by little, I started talking to the others." },
          { es: "Elle s'est mise à rire en me voyant sur scène.", en: "She burst out laughing when she saw me on stage." },
          { es: "J'ai découvert que j'aimais faire rire les gens.", en: "I discovered that I liked making people laugh." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "'She started to cry.' Which is correct?", options: ["Elle s'est mise à pleurer.", "Elle s'est mis à pleurer.", "Elle a mis à pleurer.", "Elle s'est mise de pleurer."], correctIndex: 0, explanation: "\"Se mettre à\" + infinitive; pronominal, so être and agreement: \"mise\"." },
          { type: "translate", direction: "en-es", prompt: "Change to elles.", source: "Il s'est mis à chanter.", answer: "Elles se sont mises à chanter.", explanation: "\"Se mettre à\" is pronominal: être, and the participle agrees with the subject, \"mises\"." },
        ],
      },
      {
        heading: "Looking back: ce qui, ce que, ce dont",
        body: [
          "To highlight the key element, French uses \"ce qui... c'est\" (when the element is the subject) and \"ce que... c'est\" (when it's the object): \"Ce qui m'a aidé, c'est le groupe\" (What helped me was the group), \"Ce que j'ai appris, c'est que tout le monde a peur\". With \"de\" verbs: \"Ce dont j'avais besoin, c'était de confiance\".",
        ],
        examples: [
          { es: "Ce qui m'a aidé, c'est l'ambiance du groupe.", en: "What helped me was the atmosphere in the group." },
          { es: "Ce que j'ai compris, c'est que tout le monde a le trac.", en: "What I understood is that everyone gets stage fright." },
          { es: "Ce dont j'avais besoin, c'était de confiance en moi.", en: "What I needed was self-confidence." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What I remember is the first rehearsal. Which is right?", options: ["Ce dont je me souviens, c'est la première répétition.", "Ce que je me souviens, c'est la première répétition.", "Ce qui je me souviens, c'est la première répétition.", "Dont je me souviens, c'est la première répétition."], correctIndex: 0, explanation: "\"Se souvenir de\" is built with de, so \"ce dont\"; the \"ce\" is needed when there's no noun before it." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Ce que j'avais besoin, c'était d'un ami.", answer: "Ce dont j'avais besoin, c'était d'un ami.", explanation: "\"Avoir besoin de\" takes \"ce dont\", not \"ce que\"." },
        ],
      },
      {
        heading: "Advice to other shy people",
        body: [
          "Advice to other shy people mixes the imperative and the subjunctive: \"N'ayez pas peur de vous tromper\", \"Il faut que vous sortiez de votre zone de confort\", \"Si vous êtes timide, inscrivez-vous à une activité de groupe\".",
        ],
        examples: [
          { es: "N'ayez pas peur de vous tromper.", en: "Don't be afraid of making mistakes." },
          { es: "Il faut que vous sortiez de votre zone de confort.", en: "You need to get out of your comfort zone." },
          { es: "Aujourd'hui, je suis fier d'avoir osé.", en: "Today I'm proud that I dared." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "N'aie pas peur de parler en public.", question: "What does it mean?", options: ["Don't be afraid of speaking in public.", "I'm not afraid of speaking in public.", "Don't speak in public.", "He's afraid of speaking in public."], correctIndex: 0, explanation: "\"N'aie pas peur\" is the tu imperative of \"avoir peur\": don't be afraid." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "You need [to sign up] for a club. (to a friend)", sentence: "Il faut que tu t'___ à un club.", answer: "inscrives", explanation: "\"Il faut que\" + subjunctive: \"s'inscrire\" → \"que tu t'inscrives\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I blushed every time the teacher asked me a question.", answer: "Je rougissais chaque fois que le professeur me posait une question.", altAnswers: ["Je rougissais à chaque fois que le professeur me posait une question.", "Je rougissais chaque fois que le prof me posait une question.", "Je rougissais à chaque fois que le prof me posait une question.", "Je rougissais chaque fois que la professeure me posait une question."], explanation: "A repeated situation in the past: imparfait for both verbs." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My sister was afraid people would laugh at her.", answer: "Ma sœur avait peur qu'on se moque d'elle.", altAnswers: ["Ma sœur avait peur que les gens se moquent d'elle.", "Ma sœur craignait qu'on se moque d'elle.", "Ma sœur craignait que les gens se moquent d'elle."], explanation: "\"Avoir peur que\" + present subjunctive; \"se moquer de\" = to laugh at." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "After a month, [she started] to enjoy the rehearsals.", sentence: "Au bout d'un mois, ___ à aimer les répétitions.", answer: "elle s'est mise", explanation: "\"Se mettre à\" in the passé composé: être, agreement \"mise\"." },
      { type: "translate", direction: "en-es", prompt: "Change to tu.", source: "N'ayez pas peur de poser des questions.", answer: "N'aie pas peur de poser des questions.", explanation: "The tu imperative of avoir is \"aie\" (with an e), the vous form \"ayez\"." },
      { type: "multiple-choice", question: "I was afraid of being late. Which is right?", options: ["J'avais peur d'être en retard.", "J'avais peur que je sois en retard.", "J'avais peur être en retard.", "J'avais peur que je serais en retard."], correctIndex: 0, explanation: "Same subject: \"avoir peur de\" + infinitive. \"Que je\" with the same subject is avoided." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'm proud that I spoke in front of a hundred people.", answer: "Je suis fier d'avoir parlé devant cent personnes.", altAnswers: ["Je suis fière d'avoir parlé devant cent personnes."], explanation: "\"Fier de\" + past infinitive for something you did." },
      { type: "word-order", prompt: "Put the words in order to say: I nearly said no.", words: ["J'ai", "failli", "dire", "non."], translation: "I nearly said no.", explanation: "\"Faillir\" + infinitive = nearly do something." },
      { type: "dictation", audio: "Je n'osais jamais demander de l'aide à mes voisins.", explanation: "Imparfait for a past habit; \"ne... jamais\" around \"osais\"." },
      { type: "speak", text: "Au début, je n'osais pas parler.", prompt: "Say: at first, I didn't dare speak.", explanation: "Imparfait \"osais\" for how things were; \"oser\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Il faut que tu sors de ta coquille.", answer: "Il faut que tu sortes de ta coquille.", explanation: "\"Il faut que\" + subjunctive: \"sortir\" → \"que tu sortes\". (\"Sortir de sa coquille\" = to come out of your shell.)" },
    ],
  },
  {
    slug: "b1-fill-the-story-how-comte-is-made",
    level: "FR-B1",
    number: 6,
    title: "Fill the Story: How Comté Is Made",
    summary: "Follow a wheel of Comté from the cow to the cellar, filling in a process story told with the passive, on and the pronominal passive.",
    duration: "14 min",
    sections: [
      {
        heading: "Comté and the fruitières",
        body: [
          "Comté is France's best-selling cheese with a protected origin (\"une AOP\", appellation d'origine protégée). It's made in the Jura mountains from \"lait cru\" (raw milk) of Montbéliarde cows, in small village dairies called \"fruitières\", where farmers have pooled their milk for centuries.",
        ],
        examples: [
          { es: "Les vaches sont nourries d'herbe et de foin, jamais d'ensilage.", en: "The cows are fed on grass and hay, never silage." },
          { es: "Il faut environ 450 litres de lait pour une seule meule.", en: "It takes about 450 litres of milk for a single wheel." },
          { es: "Les fruitières sont de petites fromageries de village.", en: "These are small village dairies." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What is « une fruitière » in the Jura?", options: ["a village cheese dairy", "a fruit shop", "an orchard", "a cow farm"], correctIndex: 0, explanation: "Despite the name, \"une fruitière\" is the village dairy where farmers pool their milk to make cheese." },
        ],
      },
      {
        heading: "Three ways to hide the agent",
        body: [
          "A process is the perfect place for the three ways of hiding the agent. The passive (\"Le lait est collecté\") stresses what happens to the product. \"On\" (\"On collecte le lait\") is more conversational. The pronominal passive (\"Le comté se fabrique...\") describes how something is generally done. Here is the beginning of the story told by Marc, the cheesemaker.",
        ],
        examples: [
          { es: "Le lait est collecté deux fois par jour dans les fermes du village.", en: "The milk is collected twice a day from the village farms." },
          { es: "On verse le lait dans de grandes cuves en cuivre.", en: "The milk is poured into large copper vats." },
          { es: "Le comté se fabrique avec du lait cru.", en: "This cheese is made with raw milk." },
          { es: "Le lait doit être transformé dans les vingt-quatre heures.", en: "The milk must be processed within twenty-four hours." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change it to the passive.", source: "On transporte le lait en camion.", answer: "Le lait est transporté en camion.", explanation: "Passive: \"le lait\" becomes the subject, \"être\" + participle agreeing with it." },
          { type: "multiple-choice", question: "Which sentence describes how something is generally done?", options: ["Le beurre se fait avec de la crème.", "Le beurre est fait par Marc.", "Marc fait le beurre.", "On a fait du beurre hier."], correctIndex: 0, explanation: "The pronominal passive (\"se fait\") describes the general method, with no agent and no particular moment." },
        ],
      },
      {
        heading: "In the vat",
        body: [
          "Marc continues: \"On chauffe le lait à environ 32 degrés, puis on ajoute la présure (rennet), qui fait cailler le lait. Au bout de quarante minutes, le lait s'est transformé en caillé (curd). Le caillé est découpé en grains de la taille d'un grain de riz, puis il est chauffé à 54 degrés en étant brassé (stirred) sans arrêt.\"",
        ],
        examples: [
          { es: "Au bout de quarante minutes, le lait s'est transformé en caillé.", en: "After forty minutes, the milk has turned into curd." },
          { es: "Le caillé est découpé en petits grains.", en: "The curd is cut into small grains." },
          { es: "Le mélange est chauffé à 54 degrés et brassé sans arrêt.", en: "The mixture is heated to 54 degrees and stirred constantly." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change it to the passive.", source: "On mélange le lait et la présure.", answer: "Le lait et la présure sont mélangés.", explanation: "Two subjects make a plural: \"sont mélangés\", masculine plural because one of them is masculine." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "After an hour, the cheese [is taken out] of the vat.", sentence: "Au bout d'une heure, le fromage ___ de la cuve.", answer: "est sorti", altAnswers: ["est retiré"], explanation: "Present passive: \"est\" + participle; \"au bout de\" = after a period." },
        ],
      },
      {
        heading: "Time markers and faire + infinitive",
        body: [
          "Notice the time markers that structure a process: \"d'abord\", \"puis\", \"ensuite\", \"au bout de\" (after, at the end of a period), \"une fois que\" + passé composé or futur antérieur, \"enfin\". And \"faire\" + infinitive for what makes something happen: \"la présure fait cailler le lait\" (makes the milk curdle).",
        ],
        examples: [
          { es: "D'abord, on chauffe le lait à 32 degrés.", en: "First, the milk is heated to 32 degrees." },
          { es: "Ensuite, on ajoute la présure, qui fait cailler le lait.", en: "Then rennet is added, which makes the milk curdle." },
          { es: "Une fois que le caillé est prêt, on le met dans des moules.", en: "Once the curd is ready, it's put into moulds." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "« Le soleil fait mûrir les fruits. » What does it mean?", options: ["The sun makes the fruit ripen.", "The sun ripens itself.", "The fruit is made by the sun.", "The sun is ripe."], correctIndex: 0, explanation: "\"Faire\" + infinitive = to make something happen: \"faire mûrir\" = make ripen." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[Once] the milk is hot, the rennet is added.", sentence: "___ le lait est chaud, on ajoute la présure.", answer: "Une fois que", altAnswers: ["Quand", "Dès que"], explanation: "\"Une fois que\" = once, a time marker for the next step." },
        ],
      },
      {
        heading: "Pressing, salting and the cellar",
        body: [
          "\"Les meules sont pressées pendant une journée, puis elles sont plongées dans de la saumure (brine) ou frottées au sel. Ensuite, elles sont affinées (matured) en cave pendant au moins quatre mois, parfois plus de trois ans. Pendant l'affinage, elles sont retournées et frottées régulièrement.\"",
        ],
        examples: [
          { es: "Les meules sont pressées pendant une journée.", en: "The wheels are pressed for a day." },
          { es: "Elles sont ensuite frottées au sel.", en: "They're then rubbed with salt." },
          { es: "Le fromage est affiné en cave pendant au moins quatre mois.", en: "The cheese is matured in a cellar for at least four months." },
          { es: "Pendant l'affinage, les meules sont retournées régulièrement.", en: "During maturing, the wheels are turned regularly." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The cheeses [are stored] in a cool cellar.", sentence: "Les fromages ___ dans une cave fraîche.", answer: "sont stockés", altAnswers: ["sont conservés", "sont gardés"], explanation: "Passive: \"sont\" + participle agreeing with \"les fromages\"." },
          { type: "translate", direction: "en-es", prompt: "Change it to the passive.", source: "On sale les meules à la main.", answer: "Les meules sont salées à la main.", explanation: "\"Les meules\" (feminine plural) becomes the subject, so \"salées\"." },
        ],
      },
      {
        heading: "Se conserver, se manger",
        body: [
          "\"Se conserver\" (to keep), \"se vendre\" (to sell), \"se manger\" (to be eaten) are pronominal passives common in food talk: \"Le comté se conserve plusieurs semaines au frigo\", \"Il se mange à l'apéritif ou en fondue\", \"Les meules se vendent jusqu'à 2 000 euros\".",
        ],
        examples: [
          { es: "Le comté se conserve plusieurs semaines au frigo.", en: "This cheese keeps for several weeks in the fridge." },
          { es: "Il se mange à l'apéritif, en fondue ou dans un gratin.", en: "It's eaten as an appetiser, in fondue or in a gratin." },
          { es: "Le vin rouge se boit à température ambiante.", en: "Red wine is drunk at room temperature." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "This white wine is drunk chilled. Which is right?", options: ["Ce vin blanc se boit frais.", "Ce vin blanc se boivent frais.", "Ce vin blanc boit frais.", "Ce vin blanc est se bu frais."], correctIndex: 0, explanation: "Pronominal passive: \"se\" + verb agreeing with the subject, here singular \"se boit\". Without \"se\", the wine would be doing the drinking." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "This cheese is eaten melted.", answer: "Ce fromage se mange fondu.", altAnswers: ["Ce fromage est mangé fondu.", "On mange ce fromage fondu."], explanation: "The pronominal passive \"se mange\" says how it's usually eaten." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The cows are milked twice a day.", answer: "Les vaches sont traites deux fois par jour.", altAnswers: ["On trait les vaches deux fois par jour."], explanation: "\"Traire\" (to milk) has the participle \"trait\": passive \"sont traites\", agreeing with \"les vaches\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Some cheeses are matured for three years.", answer: "Certains fromages sont affinés pendant trois ans.", altAnswers: ["Certains fromages sont affinés trois ans.", "On affine certains fromages pendant trois ans."], explanation: "Passive \"sont affinés\" agreeing with \"certains fromages\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "In a few weeks, the cheese [has changed] colour.", sentence: "En quelques semaines, le fromage ___ de couleur.", answer: "a changé", explanation: "\"Changer de couleur\" = to change colour; passé composé with avoir." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It takes ten litres of milk to make one kilo of cheese.", answer: "Il faut dix litres de lait pour faire un kilo de fromage.", explanation: "\"Il faut\" + quantity = it takes; \"pour\" + infinitive." },
      { type: "multiple-choice", question: "Which sentence is the pronominal passive?", options: ["Le comté se vend dans toute la France.", "Le comté est vendu dans toute la France.", "On vend le comté dans toute la France.", "Les fromagers vendent le comté dans toute la France."], correctIndex: 0, explanation: "\"Se vend\" = is sold, with the reflexive \"se\" and no agent; the others are the passive, \"on\" and the active." },
      { type: "word-order", prompt: "Put the words in order to say: Once the wheels are pressed, they are salted.", words: ["Une", "fois", "que", "les", "meules", "sont", "pressées,", "on", "les", "sale."], translation: "Once the wheels are pressed, they are salted.", explanation: "Passive for the first step, \"on\" for the next, with \"les\" before the verb." },
      { type: "matching", instructions: "Match the cheese-making words with their meanings.", pairs: [{ left: "la présure", right: "rennet" }, { left: "le caillé", right: "curd" }, { left: "une meule", right: "a wheel of cheese" }, { left: "l'affinage", right: "maturing" }, { left: "la saumure", right: "brine" }], explanation: "The vocabulary of the fruitière, from the vat to the cellar." },
      { type: "listen-choose", audio: "Le comté se déguste en fines lamelles.", question: "What does it mean?", options: ["Comté is enjoyed in thin slices.", "Comté is cut into thick blocks.", "Comté tastes of lemon.", "Only experts taste comté."], correctIndex: 0, explanation: "\"Se déguster\" is a pronominal passive: is enjoyed. \"De fines lamelles\" = thin slices." },
      { type: "speak", text: "D'abord, on fait chauffer le lait, ensuite on le verse dans des moules.", prompt: "Say: first we heat the milk, then we pour it into moulds.", explanation: "\"Faire chauffer\" = to heat; \"d'abord\", \"ensuite\" order the steps; \"le\" before the verb." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "On a laissé le fromage reposer, puis il a affiné en cave.", answer: "On a laissé le fromage reposer, puis il a été affiné en cave.", altAnswers: ["On a laissé le fromage reposer, puis on l'a affiné en cave."], explanation: "The cheese doesn't mature anything itself: it is matured, so the passive \"a été affiné\"." },
    ],
  },
  {
    slug: "b1-mixed-practice-travel-plans",
    level: "FR-B1",
    number: 7,
    title: "Mixed Practice: Travel Plans",
    summary: "Plan a trip with friends by mixing the futur antérieur, si-clauses, il faut que + subjunctive and demonstrative pronouns.",
    duration: "14 min",
    sections: [
      {
        heading: "Suggestions and conditions",
        body: [
          "Four friends, Chloé, Yanis, Emma and Hugo, are planning a long weekend in the Basque Country. Suggestions use \"si\" + imparfait on its own (\"Si on prenait le train ?\") or \"on pourrait\" + infinitive. Real conditions use \"si\" + present + future: \"Si on part vendredi soir, on évitera les bouchons\".",
          "Preferences: \"je préférerais\" (conditional for a gentle preference), \"ça me dirait bien de\" (I'd quite fancy), \"ça m'est égal\" (I don't mind).",
        ],
        examples: [
          { es: "Si on prenait le train plutôt que la voiture ?", en: "What if we took the train instead of the car?" },
          { es: "On pourrait louer une maison près de Biarritz.", en: "We could rent a house near Biarritz." },
          { es: "Si on part vendredi soir, on évitera les bouchons.", en: "If we leave on Friday evening, we'll avoid the traffic jams." },
          { es: "Je préférerais dormir à Saint-Jean-de-Luz, c'est plus calme.", en: "I'd rather stay in Saint-Jean-de-Luz, it's quieter." },
          { es: "Ça me dirait bien de faire du surf.", en: "I'd quite fancy doing some surfing." },
          { es: "Le train ou le covoiturage, ça m'est égal.", en: "The train or car-sharing, I don't mind." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What if we went to the mountains instead?", options: ["Et si on allait plutôt à la montagne ?", "Et si on irait plutôt à la montagne ?", "Et si on ira plutôt à la montagne ?", "Et s'on allait plutôt à la montagne ?"], correctIndex: 0, explanation: "A suggestion is \"si\" + imparfait. Never the conditional or future after \"si\", and \"si\" only elides before il / ils." },
          { type: "translate", direction: "en-es", prompt: "Change it to a real condition (si + present, then the future).", source: "Si on partait tôt, on arriverait pour le déjeuner.", answer: "Si on part tôt, on arrivera pour le déjeuner.", explanation: "A real condition: si + present (\"part\"), then the future (\"arrivera\")." },
        ],
      },
      {
        heading: "Organising: il faut qu'on... and dès qu'on aura...",
        body: [
          "Tasks and obligations: \"Il faut qu'on réserve avant jeudi\", \"Il faudrait que quelqu'un fasse les courses\", \"Il faut que tu prennes ton permis\" (subjunctive after il faut que). \"Qu'on\" is very common in speech for \"que nous\".",
          "Sequencing future actions: \"dès que\", \"quand\", \"une fois que\", \"après que\" + futur antérieur when one action must be finished before the next: \"Dès qu'on aura réservé, je t'enverrai le lien\", \"Quand tout le monde aura payé, je ferai les comptes\". The main clause stays in the future or imperative.",
        ],
        examples: [
          { es: "Il faut qu'on réserve avant jeudi, sinon ce sera complet.", en: "We need to book before Thursday, otherwise it'll be full." },
          { es: "Il faudrait que quelqu'un fasse les courses en arrivant.", en: "Someone should do the shopping when we arrive." },
          { es: "Dès qu'on aura réservé, je t'enverrai le lien.", en: "As soon as we've booked, I'll send you the link." },
          { es: "Quand tout le monde aura payé, je ferai les comptes.", en: "When everyone has paid, I'll do the accounts." },
          { es: "Il faut qu'on parte tôt pour avoir une place au parking.", en: "We need to leave early to get a parking space." },
          { es: "Une fois qu'on sera arrivés, on ira directement à la plage.", en: "Once we've arrived, we'll go straight to the beach." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Once everyone [has arrived], we'll eat.", sentence: "Une fois que tout le monde ___, on mangera.", answer: "sera arrivé", explanation: "\"Une fois que\" + futur antérieur for what's finished first; \"arriver\" takes être, and \"tout le monde\" is singular." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Il faut que quelqu'un va chercher les clés.", answer: "Il faut que quelqu'un aille chercher les clés.", explanation: "\"Il faut que\" + subjunctive: \"aller\" → \"qu'il aille\"." },
        ],
      },
      {
        heading: "Who does what: celui qui, celle de...",
        body: [
          "Demonstrative pronouns avoid repeating nouns: \"celui\" / \"celle\" / \"ceux\" / \"celles\" + \"qui\", \"que\", \"de\" or \"-ci\" / \"-là\". \"Celui qui conduit ne boit pas\" (The one who drives doesn't drink: a famous French road-safety slogan). \"On prend la voiture d'Emma ou celle de Hugo ?\" (Emma's car or Hugo's?).",
          "And possessive pronouns: \"Ta valise est plus grande que la mienne\", \"On met nos sacs dans le coffre ? Les tiens d'abord\".",
        ],
        examples: [
          { es: "Celui qui conduit ne boit pas.", en: "The one who drives doesn't drink." },
          { es: "On prend la voiture d'Emma ou celle de Hugo ?", en: "Shall we take Emma's car or Hugo's?" },
          { es: "Les chambres qui donnent sur la mer sont plus chères que celles qui donnent sur la rue.", en: "The rooms overlooking the sea are more expensive than those overlooking the street." },
          { es: "Ta valise est plus grande que la mienne.", en: "Your suitcase is bigger than mine." },
          { es: "Ceux qui veulent faire du surf doivent réserver le cours.", en: "Those who want to go surfing have to book the lesson." },
          { es: "Ce restaurant-ci est complet, essayons celui-là.", en: "This restaurant is full, let's try that one." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "This tent or that one?", options: ["Cette tente-ci ou celle-là ?", "Cette tente-ci ou celui-là ?", "Cette tente-ci ou cette-là ?", "Cette tente-ci ou celle-ci-là ?"], correctIndex: 0, explanation: "\"Tente\" is feminine, so \"celle\"; \"-là\" points to the other one. \"Cette\" can't stand alone without a noun." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Ton sac est plus lourd que la mienne.", answer: "Ton sac est plus lourd que le mien.", explanation: "The possessive pronoun agrees with the noun it replaces: \"sac\" is masculine, so \"le mien\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If it rains, we'll visit the museums.", answer: "S'il pleut, on visitera les musées.", altAnswers: ["S'il pleut, nous visiterons les musées.", "S'il pleut, on ira voir les musées."], explanation: "\"S'il\" + present, then the future." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We should book the restaurant.", answer: "Il faudrait qu'on réserve le restaurant.", altAnswers: ["Il faudrait que nous réservions le restaurant.", "On devrait réserver le restaurant.", "Nous devrions réserver le restaurant."], explanation: "\"Il faudrait que\" + subjunctive; \"on devrait\" also works." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "When we [have visited] the old town, we'll go for a swim.", sentence: "Quand on ___ la vieille ville, on ira se baigner.", answer: "aura visité", explanation: "\"Quand\" + futur antérieur for the action finished first; the main verb stays in the future." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My bike is older than yours. (to a friend)", answer: "Mon vélo est plus vieux que le tien.", altAnswers: ["Mon vélo est plus ancien que le tien."], explanation: "\"Vélo\" is masculine and you speak to a friend: \"le tien\"." },
      { type: "translate", direction: "en-es", prompt: "Change it to a suggestion with on pourrait.", source: "On loue des vélos.", answer: "On pourrait louer des vélos.", explanation: "\"On pourrait\" (conditional) + infinitive turns a plan into a gentle suggestion." },
      { type: "multiple-choice", question: "The people who arrive late will sleep on the sofa. Which is right?", options: ["Ceux qui arrivent en retard dormiront sur le canapé.", "Celui qui arrivent en retard dormiront sur le canapé.", "Ceux que arrivent en retard dormiront sur le canapé.", "Ce qui arrivent en retard dormiront sur le canapé."], correctIndex: 0, explanation: "Several people: \"ceux qui\", with \"qui\" as the subject of \"arrivent\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'd rather go by train, it's less tiring.", words: ["Je", "préférerais", "y", "aller", "en", "train,", "c'est", "moins", "fatigant."], translation: "I'd rather go by train, it's less tiring.", explanation: "The conditional \"préférerais\" is a gentle preference; \"y aller\" = to go there." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'd quite fancy visiting Bayonne.", answer: "Ça me dirait bien de visiter Bayonne.", altAnswers: ["J'aimerais bien visiter Bayonne.", "Ça me dirait de visiter Bayonne.", "Ça me tenterait bien de visiter Bayonne."], explanation: "\"Ça me dirait (bien) de\" + infinitive = I'd quite fancy." },
      { type: "dictation", audio: "Une fois qu'on aura trouvé un logement, on réservera les billets.", explanation: "\"Une fois que\" + futur antérieur, then the future." },
      { type: "speak", text: "Et si on partait jeudi ?", prompt: "Suggest to your friends: what if we left on Thursday?", explanation: "\"Si\" + imparfait alone, with a rising tone, is a suggestion." },
      { type: "listen-choose", audio: "Celle de Chloé est plus confortable.", question: "What does it mean?", options: ["Chloe's is more comfortable.", "Chloe is more comfortable.", "That one is more comfortable for Chloe.", "Chloe's ones are more comfortable."], correctIndex: 0, explanation: "\"Celle de Chloé\" = Chloe's (one), standing for a feminine noun such as \"la voiture\"." },
    ],
  },
  {
    slug: "b1-survival-repairs-at-home",
    level: "FR-B1",
    number: 8,
    title: "Survival: Breakdowns at Home",
    summary: "Describe a leak or a breakdown, call the right tradesperson, ask for a quote and say how long the problem has been going on.",
    duration: "14 min",
    sections: [
      {
        heading: "Une fuite, une panne",
        body: [
          "Two key nouns: \"une fuite\" (a leak: \"il y a une fuite sous l'évier\") and \"une panne\" (a breakdown: \"le chauffe-eau est en panne\", the water heater has broken down). \"Tomber en panne\" is to break down; \"ne plus marcher\" / \"ne plus fonctionner\" is to stop working. \"Être bouché\" is to be blocked (\"l'évier est bouché\", \"les toilettes sont bouchées\"); \"déboucher\" is to unblock.",
        ],
        examples: [
          { es: "Il y a une fuite sous l'évier de la cuisine.", en: "There's a leak under the kitchen sink." },
          { es: "Le chauffe-eau est en panne, on n'a plus d'eau chaude.", en: "The water heater has broken down, we've got no hot water." },
          { es: "La chasse d'eau ne marche plus.", en: "The toilet won't flush any more." },
          { es: "Le lavabo est bouché, l'eau ne s'écoule pas.", en: "The washbasin is blocked, the water won't drain." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"La chaudière est tombée en panne.\" What happened?", options: ["The boiler broke down.", "The boiler fell over.", "The boiler is leaking.", "The boiler was replaced."], correctIndex: 0, explanation: "\"Tomber en panne\" = to break down; nothing physically falls." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Le lave-vaisselle est tombé en fuite.", answer: "Le lave-vaisselle est tombé en panne.", explanation: "Machines \"tombent en panne\" (break down); \"une fuite\" is a leak, and you say \"il y a une fuite\"." },
        ],
      },
      {
        heading: "Household words",
        body: [
          "Household words: \"l'évier\" (kitchen sink), \"le lavabo\" (washbasin), \"la chasse d'eau\" (the toilet flush), \"le robinet\" (tap), \"le chauffe-eau\" or \"le ballon d'eau chaude\" (water heater), \"la chaudière\" (boiler), \"les plombs ont sauté\" (the fuses have blown), \"une prise\" (a socket).",
        ],
        examples: [
          { es: "Les plombs ont sauté quand j'ai branché le radiateur.", en: "The fuses blew when I plugged in the heater." },
          { es: "Le robinet de la salle de bains goutte toute la nuit.", en: "The bathroom tap drips all night." },
          { es: "La prise de la cuisine ne marche plus.", en: "The kitchen socket doesn't work any more." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"Les plombs ont sauté.\" What has happened?", options: ["The fuses have blown.", "The pipes have burst.", "The plumber has left.", "The locks have been changed."], correctIndex: 0, explanation: "\"Les plombs\" (old lead fuses) \"ont sauté\" = the fuses have blown; the power is off." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The shower is blocked.", answer: "La douche est bouchée.", explanation: "\"Être bouché\" = to be blocked; it agrees with \"la douche\"." },
        ],
      },
      {
        heading: "Calling the right person",
        body: [
          "\"Un plombier\" (plumber) for leaks and water heaters, \"un électricien\", \"un serrurier\" (locksmith: \"je me suis enfermé dehors\", I've locked myself out), \"un chauffagiste\" (heating engineer). In a rented flat, call \"le propriétaire\" or \"l'agence\" first: big repairs are the landlord's job, small maintenance the tenant's.",
        ],
        examples: [
          { es: "Je me suis enfermée dehors, il me faut un serrurier.", en: "I've locked myself out, I need a locksmith." },
          { es: "J'ai appelé la propriétaire pour qu'elle envoie un plombier.", en: "I called the landlady so that she'd send a plumber." },
          { es: "L'électricien passera entre 14 heures et 18 heures.", en: "The electrician will come between 2 and 6 p.m." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I need an electrician, the sockets don't work any more.", answer: "Il me faut un électricien, les prises ne marchent plus.", altAnswers: ["J'ai besoin d'un électricien, les prises ne marchent plus.", "Il me faut un électricien, les prises ne fonctionnent plus.", "J'ai besoin d'un électricien, les prises ne fonctionnent plus."], explanation: "\"Il me faut\" = I need; \"ne... plus\" = not any more." },
        ],
      },
      {
        heading: "On the phone: polite and practical",
        body: [
          "On the phone, use the polite conditional: \"Pourriez-vous passer demain matin ?\", \"Est-ce que vous pourriez venir aujourd'hui ? C'est urgent\". Ask for \"un devis\" (a quote) before the work: \"Vous pouvez me faire un devis ?\", \"Combien coûte le déplacement ?\" (call-out fee).",
        ],
        examples: [
          { es: "Pourriez-vous passer demain matin ? C'est assez urgent.", en: "Could you come round tomorrow morning? It's quite urgent." },
          { es: "Vous pouvez me faire un devis avant de commencer ?", en: "Can you give me a quote before you start?" },
          { es: "Combien coûte le déplacement ?", en: "How much is the call-out fee?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Turn it into a polite request with the conditional.", source: "Vous pouvez venir cet après-midi ?", answer: "Pourriez-vous venir cet après-midi ?", altAnswers: ["Vous pourriez venir cet après-midi ?", "Est-ce que vous pourriez venir cet après-midi ?"], explanation: "The conditional \"pourriez\" softens the request; inversion makes it polished." },
          { type: "multiple-choice", question: "What is « un devis » ?", options: ["a written quote", "a paid bill", "a spare part", "a call-out fee"], correctIndex: 0, explanation: "\"Un devis\" is the quote you ask for before the work; the call-out fee is \"le déplacement\"." },
        ],
      },
      {
        heading: "Ça fait trois jours que...",
        body: [
          "To insist on how long the problem has lasted, use \"ça fait\" + duration + \"que\" + present, or present + \"depuis\": \"Ça fait trois jours qu'on n'a pas d'eau chaude\", \"On n'a pas de chauffage depuis lundi\". English uses a perfect tense (we haven't had); French uses the present because the situation is still going on.",
        ],
        examples: [
          { es: "Ça fait trois jours qu'on n'a pas d'eau chaude.", en: "We haven't had hot water for three days." },
          { es: "On n'a plus de chauffage depuis lundi.", en: "We've had no heating since Monday." },
          { es: "Ça fait une semaine que j'attends le plombier.", en: "I've been waiting for the plumber for a week." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change it to ça fait... que.", source: "Le frigo ne marche plus depuis deux jours.", answer: "Ça fait deux jours que le frigo ne marche plus.", altAnswers: ["Cela fait deux jours que le frigo ne marche plus."], explanation: "\"Ça fait\" + duration + \"que\" + present: the same meaning as present + \"depuis\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je n'ai pas eu d'eau chaude depuis lundi.", answer: "Je n'ai pas d'eau chaude depuis lundi.", altAnswers: ["Je n'ai plus d'eau chaude depuis lundi."], explanation: "Still going on, so French uses the present with \"depuis\", where English uses I haven't had." },
        ],
      },
      {
        heading: "Causes and frustration",
        body: [
          "To explain the cause, the plus-que-parfait sets the earlier event: \"Le plombier était déjà venu la semaine dernière, mais la fuite a recommencé\". And the subjunctive for your frustration: \"Ce n'est pas normal qu'on attende si longtemps\".",
        ],
        examples: [
          { es: "Le plombier était déjà venu, mais la fuite a recommencé.", en: "The plumber had already come, but the leak started again." },
          { es: "Ce n'est pas normal qu'on attende si longtemps.", en: "It's not right that we're waiting so long." },
          { es: "Si personne ne vient demain, j'appellerai l'agence.", en: "If nobody comes tomorrow, I'll call the agency." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "It's not right that the landlord [doesn't answer].", sentence: "Ce n'est pas normal que le propriétaire ne ___ pas.", answer: "réponde", explanation: "A judgement + \"que\" takes the subjunctive: \"réponde\"." },
          { type: "speak", text: "L'électricien était déjà passé, mais la lumière s'est encore éteinte.", prompt: "Say the electrician had already come, but the light went out again.", explanation: "Plus-que-parfait for the earlier visit, passé composé for the new event." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The washing machine has broken down.", answer: "La machine à laver est tombée en panne.", altAnswers: ["Le lave-linge est tombé en panne.", "La machine à laver est en panne.", "Le lave-linge est en panne."], explanation: "\"Tomber en panne\" takes être: \"est tombée\" agrees with \"la machine\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The toilet is blocked.", answer: "Les toilettes sont bouchées.", altAnswers: ["Les WC sont bouchés.", "Les W.-C. sont bouchés."], explanation: "\"Les toilettes\" is feminine plural in French, so \"bouchées\" agrees." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The [tap] in the kitchen is leaking.", sentence: "Le ___ de la cuisine fuit.", answer: "robinet", explanation: "\"Le robinet\" = the tap; \"fuir\" = to leak." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If the leak starts again, call me. (polite)", answer: "Si la fuite recommence, appelez-moi.", altAnswers: ["Si la fuite reprend, appelez-moi."], explanation: "\"Si\" + present, then the imperative." },
      { type: "word-order", prompt: "Put the words in order to say: The plumber will come between nine and noon.", words: ["Le", "plombier", "passera", "entre", "neuf", "heures", "et", "midi."], translation: "The plumber will come between nine and noon.", explanation: "Future \"passera\"; \"passer\" = to come round." },
      { type: "listen-choose", audio: "L'eau ne s'écoule plus dans la baignoire.", question: "What does it mean?", options: ["The water doesn't drain from the bath any more.", "There's no more water in the bath.", "The bath is leaking.", "The water in the bath is too hot."], correctIndex: 0, explanation: "\"S'écouler\" = to drain away; \"ne... plus\" = not any more. The bath is blocked." },
      { type: "dictation", audio: "Ça fait deux semaines que la chaudière fait un bruit bizarre.", explanation: "\"Ça fait\" + duration + \"que\" + present for a problem still going on." },
      { type: "speak", text: "J'aimerais avoir un devis avant les travaux.", prompt: "Tell the plumber you'd like a quote before the work.", explanation: "\"Un devis\" = a quote; the conditional \"j'aimerais\" is polite." },
    ],
  },
  {
    slug: "b1-themed-review-teaching-and-learning",
    level: "FR-B1",
    number: 9,
    title: "Themed Review: Teaching and Learning",
    summary: "A teacher and a learner compare experiences: ce dont j'avais besoin, il faut qu'on s'entraîne, si j'avais su, on apprend mieux quand...",
    duration: "14 min",
    sections: [
      {
        heading: "The learner: ce dont j'avais besoin",
        body: [
          "Sarah, an English nurse who moved to Toulouse, talks to her French teacher, Mme Lefèvre, about learning French. She uses relatives to say what she needed: \"Ce dont j'avais besoin, c'était de parler\" (\"avoir besoin de\" → \"ce dont\"), \"Ce qui me bloquait, c'était la peur de me tromper\", \"Ce que je trouvais difficile, c'était le subjonctif\".",
        ],
        examples: [
          { es: "Ce dont j'avais besoin, c'était de parler avec des gens.", en: "What I needed was to talk to people." },
          { es: "Ce qui me bloquait, c'était la peur de me tromper.", en: "What held me back was the fear of making mistakes." },
          { es: "Ce que je trouvais le plus difficile, c'était le subjonctif.", en: "What I found hardest was the subjunctive." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[What I was afraid of] was speaking on the phone.", sentence: "___, c'était de parler au téléphone.", answer: "Ce dont j'avais peur", explanation: "\"Avoir peur de\" → \"ce dont\"; imparfait for a past state." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Ce que j'avais besoin, c'était d'un bon dictionnaire.", answer: "Ce dont j'avais besoin, c'était d'un bon dictionnaire.", explanation: "\"Avoir besoin de\" needs \"ce dont\", not \"ce que\"." },
        ],
      },
      {
        heading: "Looking back: si j'avais su",
        body: [
          "\"Si j'avais su\" (If I'd known) is a very common chunk on its own or with a conditional idea: \"Si j'avais su, j'aurais commencé plus tôt\". For now, use it as a fixed expression of regret: \"Si j'avais su !\".",
        ],
        examples: [
          { es: "Au début, je ne comprenais rien quand les gens parlaient vite.", en: "At first I didn't understand anything when people spoke fast." },
          { es: "J'avais appris le français à l'école, mais j'avais tout oublié.", en: "I had learned French at school, but I'd forgotten everything." },
          { es: "Si j'avais su que c'était si utile !", en: "If only I'd known it was so useful!" },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "When would you say « Si j'avais su ! » ?", options: ["When you regret not knowing something earlier", "When you're sure about the future", "When you're asking for information", "When you're giving advice to a friend"], correctIndex: 0, explanation: "\"Si j'avais su !\" = If only I'd known! It expresses regret about the past." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "At first, I didn't know any words.", answer: "Au début, je ne connaissais aucun mot.", altAnswers: ["Au début, je ne connaissais pas de mots.", "Au début, je ne savais aucun mot.", "Au départ, je ne connaissais aucun mot."], explanation: "Imparfait for a past state; \"ne... aucun\" = not any." },
        ],
      },
      {
        heading: "The teacher: on apprend mieux quand...",
        body: [
          "Mme Lefèvre gives her view. General truths go in the present: \"On apprend mieux quand on s'amuse\", \"On retient mieux ce qu'on utilise\". Advice and obligations use the subjunctive: \"Il faut qu'on s'entraîne tous les jours\", \"Il est essentiel que les élèves osent parler\", \"J'aimerais que mes élèves lisent davantage\".",
        ],
        examples: [
          { es: "On apprend mieux quand on s'amuse.", en: "You learn better when you're enjoying yourself." },
          { es: "Il faut qu'on s'entraîne un peu tous les jours.", en: "We need to practise a bit every day." },
          { es: "Il est essentiel que les élèves osent parler.", en: "It's essential that learners dare to speak." },
          { es: "J'aimerais que mes élèves lisent davantage.", en: "I'd like my students to read more." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "It's important that you [revise] before the test. (polite)", sentence: "Il est important que vous ___ avant le contrôle.", answer: "révisiez", explanation: "\"Il est important que\" + subjunctive: \"réviser\" → \"que vous révisiez\"." },
          { type: "translate", direction: "en-es", prompt: "Change it so that it starts with Il faut que.", source: "On doit parler tous les jours.", answer: "Il faut qu'on parle tous les jours.", altAnswers: ["Il faut que nous parlions tous les jours."], explanation: "\"Il faut que\" + subjunctive replaces \"devoir\" + infinitive." },
        ],
      },
      {
        heading: "Teaching words",
        body: [
          "Teaching vocabulary: \"un enseignant\" / \"une enseignante\" (teacher, general), \"un professeur\" (\"un prof\"), \"un élève\" (school pupil or language learner), \"un apprenant\" (learner, in teaching jargon), \"s'entraîner\" (to practise), \"réviser\" (to revise), \"retenir\" (to remember, retain), \"progresser\" (to improve).",
        ],
        examples: [
          { es: "On retient mieux les mots qu'on utilise.", en: "You remember the words you use better." },
          { es: "Vous avez beaucoup progressé depuis septembre.", en: "You've made a lot of progress since September." },
          { es: "Je révise mes verbes dans le train.", en: "I revise my verbs on the train." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which verb means to remember, to retain?", options: ["retenir", "réviser", "progresser", "s'entraîner"], correctIndex: 0, explanation: "\"Retenir\" = to retain; \"réviser\" = to revise, \"progresser\" = to improve, \"s'entraîner\" = to practise." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My students have improved a lot.", answer: "Mes élèves ont beaucoup progressé.", altAnswers: ["Mes élèves ont fait beaucoup de progrès.", "Mes apprenants ont beaucoup progressé."], explanation: "\"Progresser\" = to improve; \"beaucoup\" sits between the auxiliary and the participle." },
        ],
      },
      {
        heading: "Comparing then and now",
        body: [
          "Both compare their experiences: Sarah with the plus-que-parfait and the imparfait (\"Je n'avais jamais appris de langue étrangère avant\"), the teacher with \"depuis\" and \"ça fait... que\" (\"Ça fait vingt ans que j'enseigne\"), and both with the conditional for what they'd change: \"Si je recommençais, je ferais un séjour linguistique\" (If I started again, I'd do a language stay).",
        ],
        examples: [
          { es: "Ça fait vingt ans que j'enseigne le français aux adultes.", en: "I've been teaching French to adults for twenty years." },
          { es: "Je n'avais jamais appris de langue étrangère avant.", en: "I'd never learned a foreign language before." },
          { es: "Si je recommençais, je ferais un séjour linguistique.", en: "If I started again, I'd do a language stay abroad." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I've been learning French for three years.", answer: "Ça fait trois ans que j'apprends le français.", altAnswers: ["J'apprends le français depuis trois ans.", "Il y a trois ans que j'apprends le français.", "Cela fait trois ans que j'apprends le français."], explanation: "Still going on: present + \"depuis\", or \"ça fait... que\"." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "If I were the teacher, I [would give] less homework.", sentence: "Si j'étais le prof, je ___ moins de devoirs.", answer: "donnerais", explanation: "\"Si\" + imparfait, then the conditional." },
        ],
      },
      {
        heading: "Apprendre: to learn and to teach",
        body: [
          "Note \"apprendre quelque chose à quelqu'un\" = to teach someone something: \"Elle m'a appris à conjuguer\" (She taught me to conjugate). \"Apprendre\" works in both directions; \"enseigner\" is only to teach.",
        ],
        examples: [
          { es: "C'est ma voisine qui m'a appris à faire des phrases au subjonctif.", en: "It was my neighbour who taught me to make sentences in the subjunctive." },
          { es: "Mes élèves m'apprennent aussi beaucoup de choses.", en: "My students teach me a lot of things too." },
          { es: "J'ai appris à nager à six ans.", en: "I learned to swim when I was six." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "« Mon grand-père m'a appris les échecs. » What does it mean?", options: ["My grandfather taught me chess.", "I taught my grandfather chess.", "My grandfather learned chess.", "I learned chess without my grandfather."], correctIndex: 0, explanation: "\"Apprendre quelque chose à quelqu'un\" = to teach; \"m'\" is the person taught." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Mon père m'a appris de cuisiner.", answer: "Mon père m'a appris à cuisiner.", explanation: "\"Apprendre à\" + infinitive, never \"de\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "What I liked best was the conversation classes.", answer: "Ce que j'aimais le plus, c'était les cours de conversation.", altAnswers: ["Ce que j'aimais le plus, c'étaient les cours de conversation.", "Ce que je préférais, c'était les cours de conversation.", "Ce que je préférais, c'étaient les cours de conversation."], explanation: "\"Ce que\" is the object of \"aimais\"; the highlighted element follows \"c'était\"." },
      { type: "translate", direction: "en-es", prompt: "Turn it into the plus-que-parfait.", source: "J'ai oublié mon cahier.", answer: "J'avais oublié mon cahier.", explanation: "Plus-que-parfait: \"avoir\" in the imparfait + participle." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "It's essential that you [understand] the rule. (to a friend)", sentence: "Il est essentiel que tu ___ la règle.", answer: "comprennes", explanation: "\"Il est essentiel que\" + subjunctive: \"comprendre\" → \"que tu comprennes\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We need to revise every evening.", answer: "Il faut qu'on révise tous les soirs.", altAnswers: ["Il faut que nous révisions tous les soirs.", "On doit réviser tous les soirs.", "Nous devons réviser tous les soirs.", "Il faut réviser tous les soirs."], explanation: "\"Il faut que\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "She taught me to read music.", answer: "Elle m'a appris à lire la musique.", altAnswers: ["Elle m'a appris à lire les partitions.", "Elle m'a enseigné à lire la musique."], explanation: "\"Apprendre à quelqu'un à\" + infinitive = to teach someone to do something." },
      { type: "multiple-choice", question: "« Les enfants apprennent beaucoup de choses à leurs parents. » What does it mean?", options: ["Children teach their parents a lot.", "Parents teach their children a lot.", "Children learn a lot from their parents.", "Parents learn a lot at school."], correctIndex: 0, explanation: "\"À leurs parents\" marks the people taught, so the children are teaching." },
      { type: "word-order", prompt: "Put the words in order to say: You remember what you repeat better.", words: ["On", "retient", "mieux", "ce", "qu'on", "répète."], translation: "You remember what you repeat better.", explanation: "\"Retenir\" = to remember; \"ce que\" (here \"ce qu'\") = what." },
      { type: "dictation", audio: "Vous parlez beaucoup mieux depuis janvier.", explanation: "Present + \"depuis\" for a change that still holds." },
      { type: "speak", text: "Ce qui m'aidait, c'était de regarder des films.", prompt: "Say what helped you: watching films.", explanation: "\"Ce qui\" is the subject of \"aidait\"; \"de\" before the infinitive after \"c'était\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If I had more time, I'd read French novels.", answer: "Si j'avais plus de temps, je lirais des romans français.", altAnswers: ["Si j'avais davantage de temps, je lirais des romans français.", "Si j'avais plus de temps, je lirais des romans en français."], explanation: "\"Si\" + imparfait, then the conditional \"lirais\"." },
      { type: "listen-choose", audio: "Ça fait dix ans qu'elle enseigne l'anglais.", question: "What does it mean?", options: ["She has been teaching English for ten years.", "She taught English ten years ago.", "She has been learning English for ten years.", "She'll teach English for ten years."], correctIndex: 0, explanation: "\"Ça fait... que\" + present = an activity still going on; \"enseigner\" = to teach." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "J'espère que mes élèves fassent des progrès.", answer: "J'espère que mes élèves feront des progrès.", altAnswers: ["J'espère que mes élèves font des progrès."], explanation: "\"Espérer que\" takes the indicative, never the subjunctive." },
    ],
  },
  {
    slug: "b1-quick-round-intermediate-in-ten-seconds",
    level: "FR-B1",
    number: 10,
    title: "Quick Round: The Intermediate Level in Ten Seconds",
    summary: "One-line prompts at speed, each testing a different Intermediate structure: subjunctive, conditional, si-clauses, pasts, relatives, passive and pronouns.",
    duration: "12 min",
    sections: [
      {
        heading: "Round 1: moods",
        body: [
          "This lesson is a sprint: each prompt targets one Intermediate structure. Aim to answer in under ten seconds. First, the three moods beyond the indicative. Subjunctive after necessity, emotion, wish and doubt (\"il faut que tu viennes\", \"je doute qu'il sache\"). Conditional for politeness, advice and hypotheses (\"tu devrais\", \"je voudrais\"). Imperative with pronouns (\"dis-le-moi\", \"ne t'inquiète pas\").",
        ],
        examples: [
          { es: "Il faut que tu viennes ce soir.", en: "You have to come tonight." },
          { es: "Je doute qu'il sache la réponse.", en: "I doubt he knows the answer." },
          { es: "Tu devrais te reposer.", en: "You should rest." },
          { es: "Dis-le-moi tout de suite.", en: "Tell me right away." },
          { es: "Ne t'inquiète pas, tout ira bien.", en: "Don't worry, everything will be fine." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I doubt she can come.", answer: "Je doute qu'elle puisse venir.", explanation: "\"Douter que\" + subjunctive: \"pouvoir\" → \"qu'elle puisse\"." },
          { type: "translate", direction: "en-es", prompt: "Make it negative.", source: "Dis-le-lui.", answer: "Ne le lui dis pas.", explanation: "In a negative imperative the pronouns go back before the verb: \"ne le lui dis pas\"." },
        ],
      },
      {
        heading: "Quick rules: espérer, penser, si",
        body: [
          "Quick rules to have at your fingertips: \"espérer que\" + indicative; \"penser que\" + indicative but \"je ne pense pas que\" + subjunctive; never the future or conditional after \"si\" (if).",
        ],
        examples: [
          { es: "J'espère que tu as passé un bon week-end.", en: "I hope you had a good weekend." },
          { es: "Je ne pense pas qu'il soit là.", en: "I don't think he's there." },
          { es: "Si tu veux, je t'aide.", en: "If you want, I'll help you." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "I hope you feel better. Which is right?", options: ["J'espère que tu vas mieux.", "J'espère que tu ailles mieux.", "J'espère que tu irais mieux.", "J'espère de tu vas mieux."], correctIndex: 0, explanation: "\"Espérer que\" takes the indicative." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Si tu viendras, on mangera ensemble.", answer: "Si tu viens, on mangera ensemble.", explanation: "Never the future after \"si\": present after \"si\", future in the main clause." },
        ],
      },
      {
        heading: "Round 2: conditions and time",
        body: [
          "Real condition: \"si\" + present + future / imperative. Hypothesis: \"si\" + imparfait + conditional. Future sequence: \"quand\" / \"dès que\" + future or futur antérieur. Past sequence: passé composé for events, imparfait for background, plus-que-parfait for the earlier past.",
        ],
        examples: [
          { es: "S'il fait beau, on ira à la plage.", en: "If the weather's nice, we'll go to the beach." },
          { es: "Si j'avais une voiture, je partirais en week-end.", en: "If I had a car, I'd go away for the weekend." },
          { es: "Quand tu auras fini, appelle-moi.", en: "When you've finished, call me." },
          { es: "Il pleuvait quand je suis sorti.", en: "It was raining when I went out." },
          { es: "Elle avait déjà mangé quand on est arrivés.", en: "She had already eaten when we arrived." },
          { es: "Je viens de recevoir ton message.", en: "I've just got your message." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If I won the lottery, I'd buy a house.", answer: "Si je gagnais au loto, j'achèterais une maison.", altAnswers: ["Si je gagnais à la loterie, j'achèterais une maison.", "Si je gagnais au loto, je m'achèterais une maison."], explanation: "\"Si\" + imparfait, then the conditional." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "As soon as you [arrive], text me. (to a friend)", sentence: "Dès que tu ___, envoie-moi un texto.", answer: "arriveras", altAnswers: ["seras arrivé", "seras arrivée"], explanation: "\"Dès que\" + future for a future event; English uses the present." },
        ],
      },
      {
        heading: "Round 3: relatives, passive and pronouns",
        body: [
          "Relatives: \"qui\" (subject), \"que\" (object), \"où\" (place and time), \"dont\" (de + noun), \"ce qui\" / \"ce que\" / \"ce dont\" (what). Passive: \"être\" + agreeing participle; or \"on\"; or \"se\" + verb. Pronoun order before the verb: me/te/se/nous/vous → le/la/les → lui/leur → y → en.",
        ],
        examples: [
          { es: "C'est le livre dont je t'ai parlé.", en: "It's the book I told you about." },
          { es: "Ce qui m'énerve, c'est le bruit.", en: "What annoys me is the noise." },
          { es: "Le musée a été construit en 1890.", en: "The museum was built in 1890." },
          { es: "Ça ne se dit pas.", en: "That's not something you say." },
          { es: "Je le lui ai rendu hier.", en: "I gave it back to him yesterday." },
          { es: "Il y en a encore ?", en: "Is there any left?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's the dictionary I need.", answer: "C'est le dictionnaire dont j'ai besoin.", explanation: "\"Avoir besoin de\" → \"dont\"." },
          { type: "listen-choose", audio: "Je les leur ai montrés.", question: "What does it mean?", options: ["I showed them to them.", "They showed them to me.", "I showed it to him.", "I'll show them to them."], correctIndex: 0, explanation: "\"Les leur\" = them to them; the participle agrees with \"les\" placed before." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "You have to call your mother. (to a friend)", answer: "Il faut que tu appelles ta mère.", altAnswers: ["Tu dois appeler ta mère."], explanation: "\"Il faut que\" + subjunctive \"appelles\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Don't get up. (to a friend)", answer: "Ne te lève pas.", explanation: "Negative pronominal imperative: the pronoun stays before the verb." },
      { type: "translate", direction: "en-es", prompt: "Turn it into the passive.", source: "On a vendu la maison en mai.", answer: "La maison a été vendue en mai.", explanation: "Passive: \"a été\" + participle agreeing with \"la maison\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Voici l'outil que j'ai besoin.", answer: "Voici l'outil dont j'ai besoin.", explanation: "\"Avoir besoin de\" → \"dont\", not \"que\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The bridge [was destroyed] in 1944.", sentence: "Le pont ___ en 1944.", answer: "a été détruit", explanation: "Passive passé composé: \"a été\" + participle agreeing with \"le pont\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "You [should] sleep more. (to a friend)", sentence: "Tu ___ dormir plus.", answer: "devrais", explanation: "Advice: the conditional of \"devoir\"." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Je pense qu'il viendra demain.", "Je pense qu'il vienne demain.", "Je pense qu'il soit venu demain.", "Je pense de il viendra demain."], correctIndex: 0, explanation: "\"Penser que\" in the affirmative takes the indicative; only \"je ne pense pas que\" takes the subjunctive." },
      { type: "word-order", prompt: "Put the words in order to say: That's not something you do.", words: ["Ça", "ne", "se", "fait", "pas."], translation: "That's not something you do.", explanation: "Pronominal passive: \"ça se fait\" = it's done; negative = it's not done." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We've just arrived.", answer: "On vient d'arriver.", altAnswers: ["Nous venons d'arriver."], explanation: "\"Venir de\" + infinitive = to have just done something." },
      { type: "dictation", audio: "Il n'y en a plus.", explanation: "\"Y en\": the fixed order in \"il y en a\"; \"ne... plus\" = no more." },
      { type: "speak", text: "S'il pleut, on restera à la maison.", prompt: "Say it in French: If it rains, we'll stay at home.", explanation: "\"S'il\" + present, then the future \"restera\"." },
      { type: "translate", direction: "en-es", prompt: "Change it to a hypothesis (si + imparfait).", source: "Si tu viens, on ira au cinéma.", answer: "Si tu venais, on irait au cinéma.", explanation: "Hypothesis: \"si\" + imparfait \"venais\", then the conditional \"irait\"." },
    ],
  },
  {
    slug: "b1-survival-job-interview",
    level: "FR-B1",
    number: 11,
    title: "Survival: The Job Interview",
    summary: "Prepare a French job interview: CV and cover letter vocabulary, contract types, salary, the classic questions and how to answer them in formal vous.",
    duration: "15 min",
    sections: [
      {
        heading: "Applying: le CV et la lettre de motivation",
        body: [
          "To apply (\"postuler\", \"poser sa candidature\"), you send \"un CV\" (one or two pages, often with a photo in France, though it's optional) and \"une lettre de motivation\" (cover letter). The job ad is \"une offre d'emploi\" or \"une annonce\"; the job is \"un poste\". Then, if you're shortlisted, you're invited to \"un entretien d'embauche\" (job interview).",
        ],
        examples: [
          { es: "J'ai postulé pour un poste de comptable à Nantes.", en: "I applied for an accountant's job in Nantes." },
          { es: "Je joins mon CV et ma lettre de motivation.", en: "I'm enclosing my CV and cover letter." },
          { es: "On m'a convoqué à un entretien d'embauche jeudi.", en: "I've been called for a job interview on Thursday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I saw a job ad on the internet.", answer: "J'ai vu une offre d'emploi sur internet.", altAnswers: ["J'ai vu une annonce sur internet.", "J'ai vu une offre d'emploi sur Internet.", "J'ai vu une annonce sur Internet."], explanation: "A job ad is \"une offre d'emploi\" or \"une annonce\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "J'ai appliqué pour un poste de serveur.", answer: "J'ai postulé pour un poste de serveur.", altAnswers: ["J'ai postulé à un poste de serveur.", "J'ai posé ma candidature pour un poste de serveur.", "J'ai candidaté pour un poste de serveur."], explanation: "To apply for a job is \"postuler\"; \"appliquer\" is for a rule or a cream." },
        ],
      },
      {
        heading: "Contracts and salary",
        body: [
          "Contracts: \"un CDI\" (contrat à durée indéterminée: permanent), \"un CDD\" (contrat à durée déterminée: fixed-term), \"un stage\" (an internship: \"un stagiaire\" is an intern), \"l'intérim\" (temping), \"la période d'essai\" (probation). Salary is quoted \"brut\" (gross) or \"net\" (after social charges): \"2 500 euros brut par mois\". Often it's given per year: \"35 000 euros brut annuels\".",
        ],
        examples: [
          { es: "C'est un CDD de six mois, renouvelable.", en: "It's a six-month fixed-term contract, renewable." },
          { es: "Le salaire est de 2 400 euros brut par mois.", en: "The salary is 2,400 euros gross per month." },
          { es: "Après mon stage, ils m'ont proposé un CDI.", en: "After my internship, they offered me a permanent contract." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "The company offers you \"un CDI\". What is it?", options: ["A permanent contract", "A fixed-term contract", "An internship", "A temping assignment"], correctIndex: 0, explanation: "CDI = contrat à durée indéterminée, the permanent contract every French job seeker hopes for." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "She's [an intern] in a law firm.", sentence: "Elle est ___ dans un cabinet d'avocats.", answer: "stagiaire", explanation: "\"Un stage\" is the internship; the person is \"un / une stagiaire\"." },
        ],
      },
      {
        heading: "The classic questions",
        body: [
          "The interviewer uses \"vous\" throughout, and so do you, even if they're younger. Classic questions: \"Parlez-moi de vous\" (Tell me about yourself), \"Pourquoi voulez-vous ce poste ?\", \"Pourquoi avez-vous quitté votre dernier emploi ?\", \"Quels sont vos points forts / vos points faibles ?\", \"Où vous voyez-vous dans cinq ans ?\", \"Quelles sont vos prétentions salariales ?\" (What salary are you expecting?), \"Avez-vous des questions ?\".",
        ],
        examples: [
          { es: "Parlez-moi un peu de vous.", en: "Tell me a bit about yourself." },
          { es: "Pourquoi voulez-vous ce poste ?", en: "Why do you want this job?" },
          { es: "Quels sont vos points forts ?", en: "What are your strengths?" },
          { es: "Pourquoi avez-vous quitté votre dernier emploi ?", en: "Why did you leave your last job?" },
          { es: "Quelles sont vos prétentions salariales ?", en: "What salary are you expecting?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Why did you choose our company? (polite)", answer: "Pourquoi avez-vous choisi notre entreprise ?", altAnswers: ["Pourquoi est-ce que vous avez choisi notre entreprise ?", "Pourquoi avez-vous choisi notre société ?"], explanation: "Formal inversion in the passé composé: \"avez-vous choisi\"." },
          { type: "listen-choose", audio: "Qu'est-ce qui vous motive dans votre travail ?", question: "What is the interviewer asking?", options: ["What motivates you in your work?", "What did you do in your last job?", "Why do you want to change jobs?", "How much do you earn at the moment?"], correctIndex: 0, explanation: "\"Qu'est-ce qui\" asks about the subject: what motivates you." },
        ],
      },
      {
        heading: "Imperatives and inversion",
        body: [
          "Notice \"Parlez-moi de vous\": an imperative with a pronoun, not a question. And \"Où vous voyez-vous\": inversion with a pronominal verb.",
        ],
        examples: [
          { es: "Où vous voyez-vous dans cinq ans ?", en: "Where do you see yourself in five years?" },
          { es: "Présentez-vous en quelques mots.", en: "Introduce yourself in a few words." },
          { es: "Comment vous organisez-vous au travail ?", en: "How do you organise yourself at work?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Turn it into a polite imperative.", source: "Vous pouvez me parler de votre parcours ?", answer: "Parlez-moi de votre parcours.", explanation: "The imperative \"parlez\" + \"moi\" after the verb, as in \"Parlez-moi de vous\"." },
          { type: "word-order", prompt: "Put the words in order to say: How do you get on with your colleagues?", words: ["Comment", "vous", "entendez-vous", "avec", "vos", "collègues ?"], translation: "How do you get on with your colleagues?", explanation: "\"S'entendre\" with inversion: the reflexive \"vous\" first, then \"entendez-vous\"." },
        ],
      },
      {
        heading: "Your background and motivation",
        body: [
          "For your background, combine the passé composé and the plus-que-parfait: \"J'ai travaillé trois ans chez Airbus. Avant, j'avais fait un stage dans une PME\" (a small business). For motivation, the conditional and \"ce qui\": \"Ce qui m'attire dans ce poste, c'est...\", \"J'aimerais mettre mes compétences au service de...\", \"Ce poste me permettrait de...\".",
        ],
        examples: [
          { es: "Avant, j'avais fait un stage dans une PME.", en: "Before that, I had done an internship in a small company." },
          { es: "Ce qui m'attire dans ce poste, c'est le travail en équipe.", en: "What attracts me to this job is the teamwork." },
          { es: "Ce poste me permettrait d'évoluer.", en: "This job would allow me to progress." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Before that, I [had worked] in a hotel.", sentence: "Avant, j'___ dans un hôtel.", answer: "avais travaillé", explanation: "Plus-que-parfait for an earlier step in your career." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "What I like about this company is its values.", answer: "Ce qui me plaît dans cette entreprise, ce sont ses valeurs.", altAnswers: ["Ce qui me plaît dans cette entreprise, c'est ses valeurs.", "Ce que j'aime dans cette entreprise, ce sont ses valeurs.", "Ce que j'aime dans cette entreprise, c'est ses valeurs.", "Ce qui me plaît dans cette société, ce sont ses valeurs."], explanation: "\"Ce qui\" is the subject of \"plaît\"; \"ce sont\" before a plural." },
        ],
      },
      {
        heading: "Talking about experience",
        body: [
          "The trap: experience. \"Une expérience professionnelle\" (work experience) is countable: \"J'ai une première expérience dans la vente\" (I have some initial experience in sales), \"J'ai cinq ans d'expérience dans le marketing\". \"Je suis expérimenté en\" exists but sounds stiff in speech; say \"j'ai de l'expérience dans\" / \"en\". And careful with \"actuellement\" (currently), not *actually*: \"Je suis actuellement en poste chez...\" (I currently work at...).",
        ],
        examples: [
          { es: "J'ai cinq ans d'expérience dans le marketing.", en: "I have five years' experience in marketing." },
          { es: "Je suis actuellement en poste dans une banque.", en: "I currently work in a bank." },
          { es: "Mon point faible, c'est que j'ai parfois du mal à déléguer.", en: "My weakness is that I sometimes find it hard to delegate." },
          { es: "Je serais disponible à partir du 1er septembre.", en: "I would be available from 1 September." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "« Actuellement, je suis au chômage. » What does it mean?", options: ["At the moment, I'm unemployed.", "Actually, I'm unemployed.", "I was unemployed until recently.", "Actually, I'm not unemployed."], correctIndex: 0, explanation: "\"Actuellement\" = currently; actually is \"en fait\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I have two years' experience in tourism.", answer: "J'ai deux ans d'expérience dans le tourisme.", altAnswers: ["J'ai deux ans d'expérience en tourisme.", "J'ai une expérience de deux ans dans le tourisme."], explanation: "\"Avoir X ans d'expérience dans / en\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Tell me about your last job. (polite)", answer: "Parlez-moi de votre dernier emploi.", altAnswers: ["Parlez-moi de votre dernier poste.", "Parlez-moi de votre dernier travail."], explanation: "Imperative + \"moi\"; \"parler de\" = to talk about." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "They offered me a fixed-term contract.", answer: "On m'a proposé un CDD.", altAnswers: ["Ils m'ont proposé un CDD.", "On m'a offert un CDD.", "Ils m'ont offert un CDD."], explanation: "A fixed-term contract is \"un CDD\"; \"proposer quelque chose à quelqu'un\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "This training [would allow me] to change jobs.", sentence: "Cette formation ___ de changer de métier.", answer: "me permettrait", explanation: "Conditional of \"permettre\" for an imagined benefit; \"permettre à quelqu'un de\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Make it more modest with the conditional.", source: "Je suis disponible tout de suite.", answer: "Je serais disponible tout de suite.", explanation: "The conditional \"serais\" makes the statement modest and polite." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I currently work in a hotel.", answer: "Je travaille actuellement dans un hôtel.", altAnswers: ["Actuellement, je travaille dans un hôtel.", "Je suis actuellement en poste dans un hôtel."], explanation: "\"Actuellement\" = currently." },
      { type: "multiple-choice", question: "Which sentence is natural French for 'I have experience in sales'?", options: ["J'ai de l'expérience dans la vente.", "J'ai d'expérience dans la vente.", "J'ai une expérience en ventes faites.", "Je suis expériencé dans la vente."], correctIndex: 0, explanation: "\"Avoir de l'expérience dans\" is the natural phrase, with the partitive \"de l'\"; the others are calques or don't exist." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je cherche un poste dans quel je peux évoluer.", answer: "Je cherche un poste dans lequel je peux évoluer.", altAnswers: ["Je cherche un poste où je peux évoluer.", "Je cherche un poste dans lequel je pourrais évoluer.", "Je cherche un poste où je pourrais évoluer."], explanation: "After a preposition, use \"lequel\" (agreeing with \"poste\"), not \"quel\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'd like to work in a bigger team.", words: ["J'aimerais", "travailler", "dans", "une", "équipe", "plus", "grande."], translation: "I'd like to work in a bigger team.", explanation: "The conditional \"j'aimerais\" + infinitive for a polite wish." },
      { type: "dictation", audio: "Avez-vous des questions sur le poste ?", explanation: "Formal inversion \"avez-vous\"; \"le poste\" = the job." },
      { type: "speak", text: "Mon point fort, c'est l'organisation.", prompt: "Say your strength is organisation.", explanation: "\"Mon point fort, c'est...\" puts your strength first, then names it." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Why do you want to leave your current job? (polite)", answer: "Pourquoi voulez-vous quitter votre poste actuel ?", altAnswers: ["Pourquoi voulez-vous quitter votre emploi actuel ?", "Pourquoi est-ce que vous voulez quitter votre poste actuel ?", "Pourquoi souhaitez-vous quitter votre poste actuel ?"], explanation: "\"Quitter\" takes a direct object; \"actuel\" = current." },
      { type: "listen-choose", audio: "Le poste est à pourvoir dès le mois prochain.", question: "What does the ad say?", options: ["The job starts next month.", "The job was filled last month.", "The interviews are next month.", "The salary goes up next month."], correctIndex: 0, explanation: "\"Un poste à pourvoir\" = a vacancy to be filled; \"dès\" = from." },
    ],
  },
  {
    slug: "b1-mixed-practice-relatives-and-pronouns",
    level: "FR-B1",
    number: 12,
    title: "Mixed Practice: Relatives and Pronouns",
    summary: "Recombine relative pronouns and object pronouns in realistic workplace emails and messages.",
    duration: "14 min",
    sections: [
      {
        heading: "Relatives in workplace emails",
        body: [
          "Work emails are full of relatives: they link information without repeating nouns. \"Qui\" (subject: \"le client qui a appelé\"), \"que\" (object: \"le rapport que tu m'as envoyé\"), \"où\" (place or time: \"la réunion où on a décidé...\", \"le jour où\"), \"dont\" (replacing de + noun: \"le projet dont je t'ai parlé\", \"le dossier dont j'ai besoin\").",
        ],
        examples: [
          { es: "Le client qui a appelé ce matin voudrait un devis.", en: "The client who called this morning would like a quote." },
          { es: "Merci pour le rapport que tu m'as envoyé.", en: "Thanks for the report you sent me." },
          { es: "Voici le document dont vous avez besoin.", en: "Here is the document you need." },
          { es: "La réunion où on a pris cette décision a duré trois heures.", en: "The meeting where we made that decision lasted three hours." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The supplier who called yesterday wants a meeting.", answer: "Le fournisseur qui a appelé hier veut une réunion.", altAnswers: ["Le fournisseur qui a appelé hier voudrait une réunion.", "Le fournisseur qui a téléphoné hier veut une réunion."], explanation: "\"Qui\" is the subject of \"a appelé\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Voici le dossier que tu as besoin.", answer: "Voici le dossier dont tu as besoin.", altAnswers: ["Voilà le dossier dont tu as besoin."], explanation: "\"Avoir besoin de\" → \"dont\", not \"que\"." },
        ],
      },
      {
        heading: "Lequel after a preposition; agreement",
        body: [
          "With a preposition other than \"de\": \"lequel\" and its forms, or \"qui\" for people: \"le collègue avec qui je travaille\", \"la société pour laquelle je travaille\", \"les raisons pour lesquelles...\". Watch agreement after \"que\": \"la présentation que j'ai faite\".",
        ],
        examples: [
          { es: "La société pour laquelle je travaille vient d'être rachetée.", en: "The company I work for has just been bought." },
          { es: "C'est la présentation que Julie a faite lundi.", en: "It's the presentation Julie gave on Monday." },
          { es: "Le collègue avec qui je partage mon bureau est très calme.", en: "The colleague I share my office with is very calm." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The reasons why I left are personal.", answer: "Les raisons pour lesquelles je suis parti sont personnelles.", altAnswers: ["Les raisons pour lesquelles je suis partie sont personnelles."], explanation: "\"Pour lesquelles\" agrees with \"raisons\" (feminine plural)." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "It's the letter Paul [wrote].", sentence: "C'est la lettre que Paul a ___.", answer: "écrite", explanation: "\"Que\" (= la lettre) comes before \"avoir\", so the participle agrees: \"écrite\"." },
        ],
      },
      {
        heading: "Pronouns in replies",
        body: [
          "Replies to work messages replace what was already mentioned: \"Tu as envoyé le contrat au client ?\" → \"Oui, je le lui ai envoyé hier\". \"Vous avez parlé du budget à la directrice ?\" → \"Oui, je lui en ai parlé\". \"Tu peux me transférer les mails ?\" → \"Je te les transfère tout de suite\".",
        ],
        examples: [
          { es: "Le contrat ? Je le lui ai envoyé hier.", en: "The contract? I sent it to him yesterday." },
          { es: "Le budget ? Oui, je lui en ai parlé ce matin.", en: "The budget? Yes, I talked to her about it this morning." },
          { es: "Les mails ? Je te les transfère tout de suite.", en: "The emails? I'll forward them to you right away." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Replace le contrat and au client with pronouns.", source: "J'ai envoyé le contrat au client.", answer: "Je le lui ai envoyé.", explanation: "\"Le\" (the contract) before \"lui\" (to him), both before the auxiliary." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The files? I'll give them to you tomorrow. (to a friend)", answer: "Les dossiers ? Je te les donne demain.", altAnswers: ["Les dossiers ? Je te les donnerai demain.", "Les dossiers ? Je vais te les donner demain."], explanation: "\"Te\" before \"les\", both before the verb." },
        ],
      },
      {
        heading: "Modals and imperatives",
        body: [
          "Remember: in compound tenses the pronouns go before the auxiliary; with a modal verb they go before the infinitive (\"je vais te les envoyer\"); in an affirmative imperative they follow the verb (\"envoie-les-moi\", \"transférez-le-lui\").",
        ],
        examples: [
          { es: "Je vais vous les envoyer avant midi.", en: "I'm going to send them to you before noon." },
          { es: "Le planning ? Envoyez-le-moi dès qu'il sera prêt.", en: "The schedule? Send it to me as soon as it's ready." },
          { es: "Des chiffres ? Je n'en ai pas encore reçu.", en: "Figures? I haven't received any yet." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The invoice? [Send it to him] today. (polite)", sentence: "La facture ? ___ aujourd'hui.", answer: "Envoyez-la-lui", explanation: "Affirmative imperative: verb + \"la\" + \"lui\", joined by hyphens." },
          { type: "translate", direction: "en-es", prompt: "Make it negative.", source: "Envoie-les-moi.", answer: "Ne me les envoie pas.", explanation: "In a negative imperative the pronouns go back before the verb, and \"moi\" becomes \"me\"." },
        ],
      },
      {
        heading: "Putting it together: one message",
        body: [
          "Here's a message from a team manager, Nadia, to her assistant Romain, combining both tools: \"Romain, le rapport dont on a parlé hier est prêt. Je l'ai mis dans le dossier partagé. Tu peux l'envoyer aux clients que j'ai rencontrés jeudi ? Si M. Faure te demande les chiffres, donne-les-lui, mais ne lui parle pas encore du nouveau projet. Merci !\"",
        ],
        examples: [
          { es: "Le rapport dont on a parlé hier est prêt.", en: "The report we talked about yesterday is ready." },
          { es: "Je l'ai mis dans le dossier partagé.", en: "I've put it in the shared folder." },
          { es: "Tu peux l'envoyer aux clients que j'ai rencontrés jeudi ?", en: "Can you send it to the clients I met on Thursday?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "La collègue que j'ai parlé est en congé.", answer: "La collègue dont j'ai parlé est en congé.", altAnswers: ["La collègue à qui j'ai parlé est en congé.", "La collègue de qui j'ai parlé est en congé."], explanation: "\"Parler de\" → \"dont\"; \"que\" is only for a direct object." },
          { type: "word-order", prompt: "Put the words in order to say: The meeting we talked about is cancelled.", words: ["La", "réunion", "dont", "on", "a", "parlé", "est", "annulée."], translation: "The meeting we talked about is cancelled.", explanation: "\"Parler de\" → \"dont\"; \"annulée\" agrees with \"la réunion\"." },
        ],
      },
      {
        heading: "A clear antecedent",
        body: [
          "Each pronoun points back to something clear: \"l'\" = le rapport, \"les-lui\" = les chiffres to M. Faure, \"lui\" = M. Faure. In good writing, every pronoun has a clear antecedent; if it might be ambiguous, repeat the noun.",
        ],
        examples: [
          { es: "S'il te demande les chiffres, donne-les-lui.", en: "If he asks you for the figures, give them to him." },
          { es: "Ne lui parle pas encore du nouveau projet.", en: "Don't tell him about the new project yet." },
          { es: "Les documents ? Je les ai rangés dans l'armoire.", en: "The documents? I put them away in the cupboard." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "« Paul a vu Marc. Il lui a donné le dossier. » Why might a careful writer repeat a name here?", options: ["Il and lui could each be Paul or Marc.", "Il can't refer to a person.", "Lui must always be replaced by a name.", "The sentence has no pronoun."], correctIndex: 0, explanation: "With two men in the sentence, the pronouns are ambiguous; repeating a name makes the message clear." },
          { type: "speak", text: "Si elle te demande le code, donne-le-lui.", prompt: "Tell a colleague: if she asks you for the code, give it to her.", explanation: "\"Si\" + present, then the affirmative imperative \"donne-le-lui\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Thanks for the photos you sent me. (to a friend)", answer: "Merci pour les photos que tu m'as envoyées.", altAnswers: ["Merci des photos que tu m'as envoyées."], explanation: "\"Que\" (= les photos) comes before \"avoir\", so \"envoyées\" agrees." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The office where I work is near the station.", answer: "Le bureau où je travaille est près de la gare.", explanation: "\"Où\" for a place." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "These are the decisions we [made] yesterday.", sentence: "Ce sont les décisions qu'on a ___ hier.", answer: "prises", explanation: "\"Prendre une décision\"; \"que\" (= les décisions) comes first, so \"prises\" agrees." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The holidays? I haven't talked to them about it yet.", answer: "Les vacances ? Je ne leur en ai pas encore parlé.", explanation: "\"Parler de quelque chose à quelqu'un\" → \"leur en parler\"; \"ne... pas encore\" around the auxiliary." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'm going to explain it to you this afternoon. (polite)", answer: "Je vais vous l'expliquer cet après-midi.", explanation: "With \"aller\" + infinitive, the pronouns go before the infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The day we signed the contract, it was snowing.", answer: "Le jour où on a signé le contrat, il neigeait.", altAnswers: ["Le jour où nous avons signé le contrat, il neigeait."], explanation: "\"Le jour où\" for a time; imparfait for the background." },
      { type: "multiple-choice", question: "Some coffee? Which answer means 'I haven't bought any'?", options: ["Je n'en ai pas acheté.", "Je ne l'ai pas acheté.", "Je n'y ai pas acheté.", "J'en n'ai pas acheté."], correctIndex: 0, explanation: "\"En\" for an indefinite quantity, placed after \"ne\"." },
      { type: "word-order", prompt: "Put the words in order to say: The keys? I've given them back to her.", words: ["Les", "clés ?", "Je", "les", "lui", "ai", "rendues."], translation: "The keys? I've given them back to her.", explanation: "\"Les\" before \"lui\" before the auxiliary; \"rendues\" agrees with \"les\" (les clés)." },
      { type: "listen-choose", audio: "Ne leur en parle pas avant lundi.", question: "What does it mean?", options: ["Don't talk to them about it before Monday.", "Don't talk to him about it after Monday.", "Talk to them about it on Monday.", "They didn't talk about it before Monday."], correctIndex: 0, explanation: "Negative imperative: \"leur en\" before the verb; \"leur\" = to them, \"en\" = about it." },
      { type: "dictation", audio: "Le dossier dont tu m'as parlé est sur ton bureau.", explanation: "\"Parler de\" → \"dont\"." },
      { type: "translate", direction: "en-es", prompt: "Turn it into the passé composé.", source: "Je te les envoie.", answer: "Je te les ai envoyés.", altAnswers: ["Je te les ai envoyées."], explanation: "The pronouns go before the auxiliary, and \"envoyés\" agrees with \"les\" placed before." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The colleague [I had lunch with] is from Lille.", sentence: "La collègue ___ vient de Lille.", answer: "avec qui j'ai déjeuné", altAnswers: ["avec laquelle j'ai déjeuné"], explanation: "The preposition goes before the relative: \"avec qui\" (or \"avec laquelle\")." },
    ],
  },
  {
    slug: "b1-survival-car-hire-petrol",
    level: "FR-B1",
    number: 13,
    title: "Survival: Hiring a Car and the Petrol Station",
    summary: "Hire a car, understand the insurance excess, fill up with the right fuel, pay the motorway toll and cope with a flat tyre.",
    duration: "14 min",
    sections: [
      {
        heading: "At the rental desk",
        body: [
          "To hire a car: \"louer une voiture\" at \"une agence de location\". You'll need \"le permis de conduire\" (driving licence; \"le permis\" for short), \"une carte bancaire\" for \"la caution\" (the deposit blocked on your card), and you'll be asked about \"l'assurance\" (insurance). The key concept is \"la franchise\" (the excess: what you pay if there's damage): \"La franchise est de 1 200 euros\", \"Vous pouvez la réduire avec une assurance complémentaire\".",
        ],
        examples: [
          { es: "Je voudrais louer une voiture pour une semaine.", en: "I'd like to hire a car for a week." },
          { es: "Vous avez votre permis de conduire et une carte bancaire ?", en: "Have you got your driving licence and a bank card?" },
          { es: "La franchise est de 1 200 euros en cas d'accident.", en: "The excess is 1,200 euros in the event of an accident." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "The agent says: \"La franchise est de 800 euros.\" What does it mean?", options: ["You pay up to 800 euros if the car is damaged.", "The rental costs 800 euros.", "There's an 800-euro discount.", "The fuel costs 800 euros."], correctIndex: 0, explanation: "\"La franchise\" is the excess: the amount you pay yourself in case of damage." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We'd like to hire a van for the weekend.", answer: "Nous voudrions louer une camionnette pour le week-end.", altAnswers: ["On voudrait louer une camionnette pour le week-end.", "Nous aimerions louer une camionnette pour le week-end.", "On aimerait louer une camionnette pour le week-end.", "Nous voudrions louer un utilitaire pour le week-end."], explanation: "To hire is \"louer\"; the conditional \"voudrions\" is polite." },
        ],
      },
      {
        heading: "Gearbox, mileage, full tank",
        body: [
          "Other vocabulary: \"une boîte manuelle / automatique\" (manual / automatic gearbox), \"le kilométrage illimité\" (unlimited mileage), \"rendre la voiture\" (to return it), \"le plein\": \"La voiture doit être rendue avec le plein\" (with a full tank). False friend: \"la location\" is renting, not location (which is \"l'emplacement\" or \"le lieu\").",
        ],
        examples: [
          { es: "Est-ce que le kilométrage est illimité ?", en: "Is the mileage unlimited?" },
          { es: "La voiture doit être rendue avec le plein.", en: "The car must be returned with a full tank." },
          { es: "Je préférerais une boîte automatique.", en: "I'd prefer an automatic." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"La location de voiture\" means:", options: ["car hire", "the car's location", "the car park", "the car's position on the map"], correctIndex: 0, explanation: "False friend: \"la location\" is renting; a location is \"un emplacement\" or \"un lieu\"." },
          { type: "translate", direction: "en-es", prompt: "Turn it into the passive (doivent être...).", source: "Il faut rendre les clés avant midi.", answer: "Les clés doivent être rendues avant midi.", explanation: "Passive infinitive \"être rendues\", agreeing with \"les clés\"." },
        ],
      },
      {
        heading: "Essence or gazole?",
        body: [
          "The most expensive trap in France: \"l'essence\" means petrol (gasoline), and \"le gazole\" (or \"le gasoil\", \"le diesel\") is diesel. Petrol pumps say \"SP95\", \"SP98\" (sans-plomb, unleaded) or \"E10\"; diesel says \"Gazole\" (yellow handle). \"Faire le plein\" is to fill up; \"mettre de l'essence\" or \"prendre de l'essence\" is to get petrol.",
        ],
        examples: [
          { es: "Attention, cette voiture roule au gazole, pas à l'essence.", en: "Careful, this car runs on diesel, not petrol." },
          { es: "On s'arrête faire le plein à la prochaine station ?", en: "Shall we stop to fill up at the next station?" },
          { es: "J'ai mis cinquante euros de sans-plomb.", en: "I put in fifty euros of unleaded." },
          { es: "Le réservoir est presque vide, le voyant est allumé.", en: "The tank's nearly empty, the warning light is on." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Your hire car takes petrol. Which pump do you use?", options: ["SP95", "Gazole", "Diesel", "Gasoil"], correctIndex: 0, explanation: "SP95 is unleaded petrol (sans-plomb); the other three are all names for diesel." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I put in thirty euros of diesel.", answer: "J'ai mis trente euros de gazole.", altAnswers: ["J'ai mis trente euros de diesel.", "J'ai mis trente euros de gasoil."], explanation: "Diesel is \"le gazole\"; \"mettre\" + amount + \"de\"." },
        ],
      },
      {
        heading: "Automatic stations and service areas",
        body: [
          "Many stations are automatic, especially at night (\"une station automatique\", \"payer à la pompe\"); on the motorway you'll find \"une aire d'autoroute\" (a service area) or \"une aire de repos\" (a rest area with just toilets and picnic tables).",
        ],
        examples: [
          { es: "La pompe n'accepte pas ma carte étrangère.", en: "The pump won't take my foreign card." },
          { es: "On fera une pause sur une aire d'autoroute.", en: "We'll take a break at a motorway service area." },
          { es: "Il n'y a que des toilettes sur cette aire de repos.", en: "There are only toilets at this rest area." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Il faut payer à la pompe avec une carte.", question: "What does it mean?", options: ["You have to pay at the pump by card.", "You have to pay at the till in cash.", "The pump doesn't take cards.", "You pay after filling up, inside the shop."], correctIndex: 0, explanation: "\"Payer à la pompe\" = to pay at the pump, as at automatic stations." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Is there a service area before Lyon?", answer: "Il y a une aire d'autoroute avant Lyon ?", altAnswers: ["Est-ce qu'il y a une aire d'autoroute avant Lyon ?", "Y a-t-il une aire d'autoroute avant Lyon ?", "Il y a une aire de service avant Lyon ?", "Est-ce qu'il y a une aire de service avant Lyon ?"], explanation: "A motorway service area is \"une aire d'autoroute\"." },
        ],
      },
      {
        heading: "Le péage",
        body: [
          "Most French motorways have tolls: \"le péage\" (the toll, and the toll booth). Lanes: \"t\" for télépéage (electronic tag), a card symbol for cards, a green arrow for all payments. \"Prendre un ticket\" when you get on, \"payer au péage\" when you get off.",
        ],
        examples: [
          { es: "Le péage coûte combien jusqu'à Bordeaux ?", en: "How much is the toll to Bordeaux?" },
          { es: "Prends un ticket à l'entrée de l'autoroute.", en: "Take a ticket when you get on the motorway." },
          { es: "On paie au péage à la sortie.", en: "We pay at the toll booth when we come off." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "At the toll, what is the lane marked « t » for?", options: ["Cars with an electronic tag", "Trucks only", "Cash payments", "Tourists"], correctIndex: 0, explanation: "\"t\" = télépéage, for cars with an electronic tag." },
          { type: "word-order", prompt: "Put the words in order to say: I don't have a tag, I'll pay by card.", words: ["Je", "n'ai", "pas", "de", "badge,", "je", "vais", "payer", "par", "carte."], translation: "I don't have a tag, I'll pay by card.", explanation: "\"Pas de\" after a negative; \"payer par carte\" = to pay by card." },
        ],
      },
      {
        heading: "Breakdowns",
        body: [
          "Trouble on the road: \"une crevaison\" (a puncture: \"j'ai crevé\", I've got a flat), \"la roue de secours\" (spare wheel), \"la batterie est à plat\" (the battery's flat), \"tomber en panne\", \"la dépanneuse\" (the breakdown truck), \"appeler l'assistance\". On a motorway you must use \"une borne d'appel d'urgence\" (an emergency phone) or 112, and put on \"le gilet jaune\" (the high-vis vest) before getting out.",
        ],
        examples: [
          { es: "J'ai crevé sur l'autoroute, il faut que je change la roue.", en: "I've got a flat tyre on the motorway, I need to change the wheel." },
          { es: "Il n'y a pas de roue de secours dans le coffre.", en: "There's no spare wheel in the boot." },
          { es: "La batterie est à plat, la voiture ne démarre pas.", en: "The battery's flat, the car won't start." },
          { es: "La dépanneuse arrivera dans quarante minutes.", en: "The breakdown truck will arrive in forty minutes." },
          { es: "Mettez votre gilet jaune avant de sortir de la voiture.", en: "Put on your high-vis vest before getting out of the car." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Ma batterie est à plat, vous pouvez m'aider ?", question: "What is the driver saying?", options: ["My battery's flat, can you help me?", "My tyre is flat, can you help me?", "I've run out of petrol, can you help me?", "My car is fine, thank you for your help."], correctIndex: 0, explanation: "\"La batterie est à plat\" = the battery's flat." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "La voiture ne commence pas.", answer: "La voiture ne démarre pas.", altAnswers: ["La voiture ne veut pas démarrer."], explanation: "An engine \"démarre\" (starts); \"commencer\" is for events and activities." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The car must be returned before ten o'clock.", answer: "La voiture doit être rendue avant dix heures.", altAnswers: ["Il faut rendre la voiture avant dix heures.", "La voiture doit être rendue avant 10 heures."], explanation: "Passive infinitive \"être rendue\", agreeing with \"la voiture\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Is insurance included?", answer: "Est-ce que l'assurance est comprise ?", altAnswers: ["L'assurance est comprise ?", "L'assurance est-elle comprise ?", "Est-ce que l'assurance est incluse ?", "L'assurance est incluse ?"], explanation: "\"Compris\" agrees with \"l'assurance\" (feminine)." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I'd like a car with a [manual gearbox].", sentence: "Je voudrais une voiture avec une ___.", answer: "boîte manuelle", explanation: "\"Une boîte manuelle / automatique\" = a manual / automatic gearbox." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Check the tyres before leaving. (polite)", answer: "Vérifiez les pneus avant de partir.", altAnswers: ["Contrôlez les pneus avant de partir."], explanation: "\"Avant de\" + infinitive when the subject is the same." },
      { type: "translate", direction: "en-es", prompt: "Turn it into a polite question with pourriez-vous.", source: "Appelez l'assistance.", answer: "Pourriez-vous appeler l'assistance ?", explanation: "\"Pourriez-vous\" + infinitive turns an order into a polite request." },
      { type: "multiple-choice", question: "« Le voyant est allumé. » What does it mean?", options: ["The warning light is on.", "The headlights are off.", "The engine is running.", "The driver is awake."], correctIndex: 0, explanation: "\"Un voyant\" is a warning light on the dashboard; \"allumé\" = on." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The breakdown truck will be here in an hour.", answer: "La dépanneuse sera là dans une heure.", altAnswers: ["La dépanneuse arrivera dans une heure.", "La dépanneuse va arriver dans une heure."], explanation: "\"Dans\" + duration = in (from now); future \"sera\"." },
      { type: "word-order", prompt: "Put the words in order to say: The spare wheel is under the boot.", words: ["La", "roue", "de", "secours", "est", "sous", "le", "coffre."], translation: "The spare wheel is under the boot.", explanation: "\"La roue de secours\" = the spare wheel; \"le coffre\" = the boot." },
      { type: "dictation", audio: "On prend de l'essence avant l'autoroute ?", explanation: "\"Prendre de l'essence\" = to get petrol." },
      { type: "speak", text: "Je voudrais une voiture avec le kilométrage illimité.", prompt: "Ask for a car with unlimited mileage.", explanation: "\"Le kilométrage illimité\" = unlimited mileage." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The deposit is 500 euros.", answer: "La caution est de 500 euros.", altAnswers: ["La caution est de cinq cents euros.", "La caution s'élève à 500 euros."], explanation: "\"La caution\" = the deposit; \"être de\" + amount." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je cherche une location pour garer la voiture.", answer: "Je cherche un endroit pour garer la voiture.", altAnswers: ["Je cherche un emplacement pour garer la voiture.", "Je cherche une place pour garer la voiture.", "Je cherche un endroit pour me garer."], explanation: "False friend: \"une location\" is a rental; a place is \"un endroit\" or \"un emplacement\"." },
    ],
  },
  {
    slug: "b1-themed-review-travelling-alone",
    level: "FR-B1",
    number: 14,
    title: "Themed Review: Travelling Alone",
    summary: "One solo trip, the whole level: what I had planned, what went wrong, what I'd do differently, and advice for others.",
    duration: "15 min",
    sections: [
      {
        heading: "The plan: ce que j'avais prévu",
        body: [
          "Manon, 28, spent three weeks travelling alone around Corsica. Her story uses the whole Intermediate toolkit. She starts with the plan she had made, in the plus-que-parfait: \"J'avais tout prévu : j'avais réservé les ferries, j'avais imprimé les billets et j'avais téléchargé des cartes\".",
          "Her feelings before leaving go in the imparfait, with the subjunctive after emotion and fear: \"Ma mère avait peur qu'il m'arrive quelque chose\" (was afraid something would happen to me), \"J'étais impatiente de partir\", \"Mes amis ne comprenaient pas que je veuille partir seule\".",
        ],
        examples: [
          { es: "J'avais tout prévu dans les moindres détails.", en: "I had planned everything down to the last detail." },
          { es: "J'avais réservé les ferries trois mois à l'avance.", en: "I'd booked the ferries three months in advance." },
          { es: "Ma mère avait peur qu'il m'arrive quelque chose.", en: "My mother was afraid something would happen to me." },
          { es: "Mes amis ne comprenaient pas que je veuille partir seule.", en: "My friends didn't understand why I wanted to go alone." },
          { es: "J'étais à la fois impatiente et un peu angoissée.", en: "I was both excited and a bit anxious." },
          { es: "C'était la première fois que je voyageais sans personne.", en: "It was the first time I'd travelled without anyone." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I had downloaded maps of the island.", answer: "J'avais téléchargé des cartes de l'île.", explanation: "Plus-que-parfait for the preparations made before the trip." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "My father was afraid I [would get lost].", sentence: "Mon père avait peur que je ___.", answer: "me perde", altAnswers: ["ne me perde"], explanation: "\"Avoir peur que\" + subjunctive: \"se perdre\" → \"que je me perde\"." },
        ],
      },
      {
        heading: "What went wrong",
        body: [
          "The events of the trip in the passé composé, the background in the imparfait: \"Le troisième jour, il y a eu une grève des ferries\", \"Il pleuvait et je ne connaissais personne\". The passive and \"on\" for what was done to her: \"Mon sac a été volé dans un bus\", \"On m'a dit que la route était fermée\".",
          "And a lucky meeting, with relatives: \"J'ai rencontré une famille qui m'a hébergée\" (who put me up), \"le village où j'ai dormi\", \"le berger dont je t'ai parlé\".",
        ],
        examples: [
          { es: "Le troisième jour, il y a eu une grève des ferries.", en: "On the third day, there was a ferry strike." },
          { es: "Il pleuvait sans arrêt et je ne connaissais personne.", en: "It rained non-stop and I didn't know anyone." },
          { es: "Mon sac a été volé dans un bus entre Ajaccio et Corte.", en: "My bag was stolen on a bus between Ajaccio and Corte." },
          { es: "On m'a dit que la route était fermée à cause d'un éboulement.", en: "I was told the road was closed because of a landslide." },
          { es: "J'ai rencontré une famille qui m'a hébergée pendant trois jours.", en: "I met a family who put me up for three days." },
          { es: "Le village où j'ai dormi n'avait que cinquante habitants.", en: "The village where I slept had only fifty inhabitants." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My phone was stolen at the station.", answer: "Mon téléphone a été volé à la gare.", altAnswers: ["On m'a volé mon téléphone à la gare.", "Je me suis fait voler mon téléphone à la gare.", "Mon portable a été volé à la gare.", "On m'a volé mon portable à la gare."], explanation: "Passive passé composé \"a été volé\", or \"on m'a volé\"." },
          { type: "multiple-choice", question: "« La plage ___ je t'ai parlé est magnifique. » Which word fits?", options: ["dont", "que", "où", "qui"], correctIndex: 0, explanation: "\"Parler de\" → \"dont\"." },
        ],
      },
      {
        heading: "Looking back and advising others",
        body: [
          "Manon imagines doing it again with \"si\" + imparfait + conditional: \"Si je repartais, je prendrais moins de bagages\", \"Si c'était à refaire, je ne réserverais pas tout à l'avance\". She advises others with imperatives and \"il faut que\": \"Partez léger !\", \"Il faut que vous laissiez de la place à l'imprévu\" (leave room for the unexpected), \"Ne vous inquiétez pas si tout ne se passe pas comme prévu\".",
        ],
        examples: [
          { es: "Si je repartais, je prendrais moins de bagages.", en: "If I went again, I'd take less luggage." },
          { es: "Si c'était à refaire, je ne réserverais pas tout à l'avance.", en: "If I had to do it again, I wouldn't book everything in advance." },
          { es: "Partez léger et laissez de la place à l'imprévu.", en: "Travel light and leave room for the unexpected." },
          { es: "Ne vous inquiétez pas si tout ne se passe pas comme prévu.", en: "Don't worry if things don't go as planned." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change it to a hypothesis (si + imparfait).", source: "Si je pars en Italie, je prendrai le train.", answer: "Si je partais en Italie, je prendrais le train.", explanation: "Hypothesis: \"si\" + imparfait, then the conditional." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Il faut que vous faites attention.", answer: "Il faut que vous fassiez attention.", explanation: "\"Il faut que\" + subjunctive: \"faire\" → \"que vous fassiez\"." },
        ],
      },
      {
        heading: "The conclusion",
        body: [
          "Her conclusion uses \"ce qui / ce que... c'est\" and the futur antérieur: \"Ce que je retiens, c'est la gentillesse des gens\", \"Quand j'aurai économisé assez, je repartirai\".",
        ],
        examples: [
          { es: "Ce que je retiens, c'est la gentillesse des gens.", en: "What stays with me is how kind people were." },
          { es: "Quand j'aurai économisé assez, je repartirai.", en: "When I've saved enough, I'll set off again." },
          { es: "Ce qui m'a le plus surprise, c'est le silence des montagnes.", en: "What surprised me most was the silence of the mountains." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "What I liked best was the food.", answer: "Ce que j'ai préféré, c'est la cuisine.", altAnswers: ["Ce que j'ai préféré, c'était la cuisine.", "Ce que j'ai le plus aimé, c'est la cuisine.", "Ce que j'ai le plus aimé, c'était la cuisine.", "Ce que j'ai préféré, c'est la nourriture."], explanation: "\"Ce que\" is the object of \"ai préféré\"; \"c'est\" introduces the point." },
          { type: "speak", text: "Quand j'aurai fini mes études, je partirai en Asie.", prompt: "Say that when you've finished your studies, you'll go to Asia.", explanation: "Futur antérieur after \"quand\", future in the main clause." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I had packed my bag the day before.", answer: "J'avais fait mon sac la veille.", altAnswers: ["J'avais préparé mon sac la veille.", "J'avais fait mon sac le jour d'avant."], explanation: "Plus-que-parfait; \"la veille\" = the day before." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It was cold and I was tired.", answer: "Il faisait froid et j'étais fatiguée.", altAnswers: ["Il faisait froid et j'étais fatigué."], explanation: "Imparfait for the background." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "My parents didn't want me [to go] alone.", sentence: "Mes parents ne voulaient pas que je ___ seule.", answer: "parte", explanation: "\"Vouloir que\" + subjunctive: \"partir\" → \"que je parte\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We were told the museum was closed.", answer: "On nous a dit que le musée était fermé.", explanation: "English passive with tell becomes \"on nous a dit\"; imparfait for the reported state." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "When I [have found] a job, I'll travel more.", sentence: "Quand j'___ un travail, je voyagerai plus.", answer: "aurai trouvé", explanation: "Futur antérieur after \"quand\" for what's finished first." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Don't be afraid to ask for help. (polite)", answer: "N'ayez pas peur de demander de l'aide.", altAnswers: ["N'ayez pas peur de demander du secours."], explanation: "Imperative of \"avoir\": \"ayez\"; \"avoir peur de\" + infinitive." },
      { type: "multiple-choice", question: "'The family I stayed with was very kind.' Which is right?", options: ["La famille chez qui j'ai logé était très gentille.", "La famille que j'ai logé était très gentille.", "La famille dont j'ai logé était très gentille.", "La famille où j'ai logé chez était très gentille."], correctIndex: 0, explanation: "The preposition goes before the relative: \"chez qui\"." },
      { type: "word-order", prompt: "Put the words in order to say: Take little luggage and a good map.", words: ["Prenez", "peu", "de", "bagages", "et", "une", "bonne", "carte."], translation: "Take little luggage and a good map.", explanation: "Vous imperative; \"peu de\" + plural noun." },
      { type: "dictation", audio: "Le bus dans lequel j'étais est tombé en panne.", explanation: "\"Dans lequel\" after a preposition; \"tomber en panne\" takes être." },
      { type: "speak", text: "Si c'était à refaire, je partirais plus longtemps.", prompt: "Say that if you had to do it again, you'd go for longer.", explanation: "\"Si c'était à refaire\" + conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "What scared me most was the night.", answer: "Ce qui me faisait le plus peur, c'était la nuit.", altAnswers: ["Ce qui m'a fait le plus peur, c'était la nuit.", "Ce qui m'a fait le plus peur, c'est la nuit.", "Ce qui me faisait le plus peur, c'est la nuit."], explanation: "\"Ce qui\" is the subject of \"faisait peur\"." },
      { type: "translate", direction: "en-es", prompt: "Turn it into the passive.", source: "On a annulé mon ferry.", answer: "Mon ferry a été annulé.", explanation: "Passive passé composé: \"a été\" + participle agreeing with \"mon ferry\"." },
      { type: "listen-choose", audio: "J'ai dû dormir à la gare parce qu'il n'y avait plus de bus.", question: "What happened?", options: ["She had to sleep at the station because there were no more buses.", "She slept on the bus to the station.", "She missed the bus because she overslept.", "She had to wait at the station for the first bus."], correctIndex: 0, explanation: "\"J'ai dû\" = I had to; \"il n'y avait plus de\" = there were no more." },
    ],
  },
];
