// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u01.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 1: Legal & Administrative French.

export const FR_C2_U01_WRITING: WriteExercise = {
  type: "write",
  prompt: "You are renovating the façade of your house in Dijon and need to park a skip (une benne) on the pavement for two weeks, which requires an arrêté municipal authorising the occupation of public space. Write the formal letter to the mayor (a woman) requesting it: a proper objet line, the je soussigné(e) formula, the facts and dates, why the request is justified, the documents enclosed, and the full closing formula. Then, in a short final paragraph addressed to your elderly neighbour, explain in plain everyday French what you have asked for and what it will change for her.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "Uses the frozen formulas of an official request: \"Je soussigné(e)...\", \"ai l'honneur de solliciter\", \"je vous saurais gré de bien vouloir\", \"Je vous prie d'agréer, Madame la Maire, l'expression de ma considération distinguée\"",
    "Packs the facts into administrative style: nominalisation (\"en vue de la réfection de la façade\", \"pour la durée des travaux\"), anaphora with \"ledit\" / \"ladite\" or \"susmentionné\"",
    "Lists the enclosed documents (\"Pièces jointes\", \"ci-joint\") and gives precise dates and an address",
    "Switches convincingly to plain French in the note to the neighbour (\"c'est pour...\", \"vous pourrez quand même...\"), with no legal jargon",
  ],
  modelAnswer: "Monsieur Hugo Lefèvre\n14, rue des Tanneries\n21000 Dijon\n\nMadame la Maire\nHôtel de Ville\n21000 Dijon\n\nDijon, le 2 mars 2026\n\nObjet : demande d'autorisation d'occupation temporaire du domaine public\nPièces jointes : plan de situation, devis de l'entreprise, attestation d'assurance\n\nMadame la Maire,\n\nJe soussigné, Hugo Lefèvre, propriétaire de l'immeuble situé 14, rue des Tanneries, ai l'honneur de solliciter l'autorisation d'installer une benne sur le trottoir faisant face audit immeuble, du 16 au 29 mars 2026 inclus.\n\nCette installation est rendue nécessaire par la réfection de la façade, dont la déclaration préalable a été acceptée le 10 février dernier. Ladite benne, d'une capacité de huit mètres cubes, occupera une longueur de quatre mètres et laissera un passage d'au moins un mètre cinquante pour les piétons. Elle sera signalée de jour comme de nuit et enlevée au plus tard le 29 mars au soir.\n\nVous trouverez ci-joint le plan de situation, le devis de l'entreprise Martin Bâtiment ainsi que l'attestation d'assurance de celle-ci. Je me tiens bien entendu à la disposition de vos services pour tout renseignement complémentaire, et je vous saurais gré de bien vouloir me faire connaître le montant de la redevance éventuellement due.\n\nDans l'attente de votre réponse, je vous prie d'agréer, Madame la Maire, l'expression de ma considération distinguée.\n\nHugo Lefèvre\n\n---\n\nMadame Roux, je vous laisse un petit mot pour vous expliquer : j'ai demandé à la mairie la permission de mettre une benne devant chez moi pendant deux semaines, à partir du 16 mars, parce qu'on refait la façade. Vous pourrez toujours passer sur le trottoir, il restera assez de place, même avec votre caddie. Et si quoi que ce soit vous gêne, sonnez chez moi, ne vous gênez pas !",
  explanation: "The letter follows the fixed order of a French administrative request: sender, recipient, place and date, \"Objet\", \"Pièces jointes\", the appel \"Madame la Maire\" (repeated in the closing formula), \"Je soussigné... ai l'honneur de solliciter\" (the verb agrees with \"je\", not with the name). \"Audit immeuble\" and \"ladite benne\" are legal anaphora; \"la réfection de la façade\" is administrative nominalisation; \"je vous saurais gré de bien vouloir\" is the formal request in the conditional. The note to the neighbour drops all of that for \"on refait\", \"vous pourrez\" and \"ne vous gênez pas\".",
};

export const FR_C2_U01: Lesson[] = [
  {
    slug: "c2-legal-french-1",
    level: "FR-C2",
    number: 1,
    title: "Le Français Juridique et Administratif, Part 1 of 7",
    summary: "Who is who in a legal document (le soussigné, le bailleur, le preneur, le mandant, le mandataire, l'ayant droit) and the frozen formulas that open and close it.",
    duration: "18 min",
    sections: [
      {
        heading: "Roles, not names",
        body: [
          "A French contract almost never calls people by their names after the first paragraph. Once identified, each person becomes a role, and the law attaches rights and duties to that role. In a lease the landlord is \"le bailleur\" and the tenant \"le preneur\" (in everyday speech \"le propriétaire\" and \"le locataire\").",
        ],
        examples: [
          { es: "Le bailleur s'engage à remettre au preneur un logement décent.", en: "The landlord undertakes to provide the tenant with decent housing." },
          { es: "Le preneur s'engage à entretenir le jardin.", en: "The tenant undertakes to maintain the garden." },
          { es: "Le bailleur conserve un double des clés.", en: "The landlord keeps a spare set of keys." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a lease, who is le preneur?",
            options: ["the tenant", "the landlord", "the estate agent", "the guarantor"],
            correctIndex: 0,
            explanation: "\"Le preneur\" is the one who takes the lease (\"le bail\"): the tenant. The landlord who grants it is \"le bailleur\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The landlord undertakes to repair the roof before the winter.",
            answer: "Le bailleur s'engage à réparer la toiture avant l'hiver.",
            altAnswers: [
              "Le bailleur s'engage à réparer le toit avant l'hiver.",
              "Le propriétaire s'engage à réparer la toiture avant l'hiver.",
              "Le propriétaire s'engage à réparer le toit avant l'hiver.",
              "Le bailleur s'engage à faire réparer la toiture avant l'hiver.",
            ],
            explanation: "In a lease the landlord is \"le bailleur\"; \"s'engager à\" + infinitive states the obligation.",
          },
        ],
      },
      {
        heading: "Mandant, mandataire, requérant, ayants droit",
        body: [
          "In a power of attorney the person who gives the power is \"le mandant\" and the person who receives it \"le mandataire\". Someone who files a request with an administration or a court is \"le requérant\" (\"la requérante\"). Someone who holds a right through another person is \"un ayant droit\", plural \"des ayants droit\": only the first word takes the s.",
        ],
        examples: [
          { es: "Le mandant donne pouvoir au mandataire de signer l'acte de vente en son nom.", en: "The principal authorises the agent to sign the deed of sale on his behalf." },
          { es: "La requérante sollicite l'annulation de la décision du 3 mai.", en: "The applicant requests the annulment of the decision of 3 May." },
          { es: "Les ayants droit de l'auteur perçoivent encore des droits sur ses romans.", en: "The author's heirs still receive royalties on his novels." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each role to its meaning.",
            pairs: [
              { left: "le bailleur", right: "the landlord (in a lease)" },
              { left: "le preneur", right: "the tenant (in a lease)" },
              { left: "le mandataire", right: "the person acting on someone's behalf" },
              { left: "le mandant", right: "the person who gives the power to act" },
              { left: "l'ayant droit", right: "a person who holds a right through someone else" },
            ],
            explanation: "\"Mandant\" (present participle form: the one giving) vs \"mandataire\" (the one receiving the mandate). \"Bailleur\" comes from \"bail\" (lease); \"preneur\" is the one who takes it.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Les ayant droits du défunt n'ont pas été informés.",
            answer: "Les ayants droit du défunt n'ont pas été informés.",
            explanation: "In \"ayants droit\" only \"ayant\" takes the plural s: \"droit\" is the right they hold, not a plural noun.",
          },
        ],
      },
      {
        heading: "Le soussigné agrees",
        body: [
          "Together these people are \"les parties\", and a contract is drawn up \"entre les parties\" or \"entre les soussignés\" (between the undersigned). \"Le soussigné\" is a real noun and a real past participle, so it agrees: a woman writes \"Je soussignée, Claire Martin\", a couple \"Nous soussignés\". In \"Je soussigné, Paul Durand, demeurant 4, rue Lamartine à Lyon, déclare...\" the verb is \"déclare\", agreeing with \"je\", however many lines of identity come in between.",
        ],
        examples: [
          { es: "Je soussignée, Claire Martin, demeurant 12, avenue Foch à Nancy, déclare avoir reçu la somme de deux mille euros.", en: "I, the undersigned Claire Martin, residing at 12 avenue Foch in Nancy, declare that I have received the sum of two thousand euros." },
          { es: "Nous soussignés, Marc et Lucie Bernard, déclarons...", en: "We, the undersigned Marc and Lucie Bernard, declare..." },
          { es: "Je soussigné, Ahmed Saïdi, certifie avoir reçu les clés.", en: "I, the undersigned Ahmed Saidi, certify that I have received the keys." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I, the undersigned Sophie Leroy, declare that the information above is accurate.",
            answer: "Je soussignée, Sophie Leroy, déclare que les informations ci-dessus sont exactes.",
            altAnswers: [
              "Je soussignée, Sophie Leroy, déclare que les renseignements ci-dessus sont exacts.",
              "Je soussignée Sophie Leroy déclare que les informations ci-dessus sont exactes.",
              "Je soussignée, Sophie Leroy, certifie que les informations ci-dessus sont exactes.",
            ],
            explanation: "Sophie is a woman, so \"soussignée\" takes the feminine e. The verb \"déclare\" agrees with \"je\": the name is just inserted in apposition.",
          },
        ],
      },
      {
        heading: "Define the role once",
        body: [
          "English speakers tend to keep repeating names or to translate 'the tenant' and 'the landlord' with everyday words. That is fine in a letter, but in a contract the defined role is the precise term, and switching between \"le preneur\" and \"le locataire\" in the same document can even create doubt about whether you mean the same person. Pick the role, define it once (\"ci-après dénommé « le Preneur »\", hereinafter referred to as 'the Tenant'), then stick to it.",
        ],
        examples: [
          { es: "Monsieur Karim Haddad, ci-après dénommé « le Preneur », d'une part.", en: "Mr Karim Haddad, hereinafter referred to as 'the Tenant', of the one part." },
          { es: "La société Tissot, ci-après dénommée « le Mandataire ».", en: "The company Tissot, hereinafter referred to as 'the Agent'." },
          { es: "Le Preneur reconnaît avoir visité les lieux.", en: "The Tenant acknowledges having visited the premises." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Mr Hugo Blanc, [hereinafter referred to as] 'the Principal'.",
            sentence: "Monsieur Hugo Blanc, ___ « le Mandant ».",
            answer: "ci-après dénommé",
            altAnswers: ["ci-après désigné", "ci-après nommé"],
            explanation: "\"Ci-après dénommé\" defines the role once; \"dénommé\" agrees with the person (masculine here).",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a role definition: she is the landlord.",
            source: "Madame Hélène Roux, propriétaire de l'appartement.",
            answer: "Madame Hélène Roux, ci-après dénommée « le Bailleur ».",
            altAnswers: ["Madame Hélène Roux, ci-après dénommée « la Bailleresse ».", "Madame Hélène Roux, ci-après désignée « le Bailleur »."],
            explanation: "\"Ci-après dénommée\" (agreeing with Madame) defines the role once, and the contract then uses \"le Bailleur\" throughout, never \"la propriétaire\".",
          },
        ],
      },
      {
        heading: "The opening structure",
        body: [
          "A private contract (\"un acte sous seing privé\", a contract signed by the parties themselves, without a notaire) opens with a frozen structure that every French reader recognises: \"Entre les soussignés :\", then the first party, \"d'une part\", then \"Et\", the second party, \"d'autre part\", then \"Il a été convenu et arrêté ce qui suit :\" (it has been agreed and settled as follows). Variants are \"Il est convenu ce qui suit\" and \"Il a été préalablement exposé ce qui suit\" when a preamble explains the background.",
        ],
        examples: [
          { es: "Entre les soussignés : Madame Anne Garnier, née le 4 juillet 1972 à Rennes, demeurant 8, rue de Brest à Rennes, d'une part,", en: "Between the undersigned: Mrs Anne Garnier, born on 4 July 1972 in Rennes, residing at 8 rue de Brest in Rennes, of the one part," },
          { es: "Et la société Bati-Ouest, SARL au capital de 20 000 euros, représentée par M. Yann Le Gall, agissant en qualité de gérant, d'autre part,", en: "And the company Bati-Ouest, a limited company with capital of 20,000 euros, represented by Mr Yann Le Gall, acting as manager, of the other part," },
          { es: "Il a été préalablement exposé ce qui suit :", en: "The following has first been set out:" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A contract lists the second party, followed by d'autre part. What comes next?",
            options: ["Il a été convenu et arrêté ce qui suit :", "Entre les soussignés :", "Fait à Lyon, le 12 mai 2026.", "Lu et approuvé"],
            correctIndex: 0,
            explanation: "After \"d'une part... et... d'autre part\", the formula \"il a été convenu et arrêté ce qui suit\" introduces the articles. \"Entre les soussignés\" opens the document, and \"fait à\" and \"lu et approuvé\" close it.",
          },
        ],
      },
      {
        heading: "The grammar of the formula",
        body: [
          "Notice the grammar. \"Il a été convenu\" is an impersonal passive: nobody in particular agreed, the agreement simply exists. \"Ce qui suit\" (what follows) is the subject of the real content and stands for the articles below. \"Arrêté\" here is the past participle of \"arrêter\" in its old sense of to settle, to fix: \"arrêter une liste\", \"arrêter les comptes\". It has nothing to do with being arrested.",
        ],
        examples: [
          { es: "Il a été convenu et arrêté ce qui suit :", en: "It has been agreed and settled as follows:" },
          { es: "Les parties ont arrêté d'un commun accord les conditions suivantes.", en: "The parties have settled the following terms by mutual agreement." },
          { es: "Le conseil a arrêté la liste des candidats.", en: "The board settled the list of candidates." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In the formula \"il a été convenu et arrêté ce qui suit\", what does \"arrêté\" mean?",
            options: ["settled, fixed", "arrested", "stopped, interrupted", "ordered by the mayor"],
            correctIndex: 0,
            explanation: "\"Arrêter\" keeps its old sense of to fix or settle (\"arrêter une date\", \"arrêter les comptes\"). An \"arrêté\" as a noun is an administrative order, which you meet in Part 3.",
          },
        ],
      },
      {
        heading: "Identifying a party",
        body: [
          "Each party is identified with a fixed sequence: civility, name, date and place of birth, nationality, address (\"demeurant\" for a person, \"dont le siège social est situé\" for a company), and for a company its legal form, capital and registration (\"SARL au capital de 10 000 euros, immatriculée au RCS de Lyon sous le numéro...\"), \"représentée par\" its manager, \"agissant en qualité de gérant\".",
        ],
        examples: [
          { es: "La société dont le siège social est situé 3, quai des Chartrons à Bordeaux.", en: "The company whose registered office is at 3 quai des Chartrons in Bordeaux." },
          { es: "Monsieur Luc Perrin, né le 2 mars 1980 à Lille, demeurant 5, rue Nationale à Lille.", en: "Mr Luc Perrin, born on 2 March 1980 in Lille, residing at 5 rue Nationale in Lille." },
          { es: "La société Verdi, SAS au capital de 50 000 euros, immatriculée au RCS de Lyon.", en: "The company Verdi, a simplified joint-stock company with capital of 50,000 euros, registered in the Lyon trade register." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "represented by Ms Inès Benali, acting as managing director",
            answer: "représentée par Mme Inès Benali, agissant en qualité de directrice générale",
            altAnswers: [
              "représentée par Madame Inès Benali, agissant en qualité de directrice générale",
              "représentée par Mme Inès Benali, agissant en sa qualité de directrice générale",
              "représenté par Mme Inès Benali, agissant en qualité de directrice générale",
            ],
            explanation: "\"Représentée\" agrees with \"la société\" it follows; \"agissant en qualité de\" is the fixed way to state in what capacity someone signs.",
          },
        ],
      },
      {
        heading: "Fait à...",
        body: [
          "The end of the document is just as fixed. \"Fait à Lyon, le 12 septembre 2026, en deux exemplaires originaux\" (done at Lyon on ..., in two original copies): the place and date of signature, and how many originals exist, one for each party. A lease adds \"dont un remis à chaque partie\". Then each party writes by hand \"Lu et approuvé\" (read and approved) above the signature; some documents add \"Bon pour accord\" (agreed).",
        ],
        examples: [
          { es: "Fait à Lyon, le 12 septembre 2026, en deux exemplaires originaux.", en: "Done at Lyon, on 12 September 2026, in two original copies." },
          { es: "Fait en trois exemplaires, dont un remis à chaque partie.", en: "Done in three copies, one of which has been given to each party." },
          { es: "Bon pour accord, le 4 octobre 2026.", en: "Agreed, on 4 October 2026." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Done at Marseille, on 3 June 2026, in two original copies.",
            answer: "Fait à Marseille, le 3 juin 2026, en deux exemplaires originaux.",
            altAnswers: ["Fait à Marseille le 3 juin 2026 en deux exemplaires originaux.", "Fait à Marseille, le 3 juin 2026, en deux exemplaires."],
            explanation: "\"Fait à\" + place, \"le\" + date, \"en deux exemplaires originaux\". \"Fait\" is invariable here; months take no capital in French.",
          },
        ],
      },
      {
        heading: "Two frozen formulas",
        body: [
          "Two traps. First, \"lu et approuvé\" is a frozen formula and stays invariable: a woman, a couple or a company all write \"Lu et approuvé\", never \"lue et approuvée\". It refers to the act of reading, not to the person. Second, \"fait\" in \"Fait à Paris\" is also invariable: it means this document was done, and it does not change for a contract (\"le contrat\") or a convention (\"la convention\").",
        ],
        examples: [
          { es: "Signature précédée de la mention manuscrite « Lu et approuvé ».", en: "Signature preceded by the handwritten words 'Read and approved'." },
          { es: "Fait à Paris, le 2 mai 2026.", en: "Done at Paris, on 2 May 2026. (for any document)" },
          { es: "Lu et approuvé, Marie Lambert", en: "Read and approved, Marie Lambert" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Inès signs a lease. What does she write by hand above her signature?",
            options: ["Lu et approuvé", "Lue et approuvée", "Lu et approuvée", "Lue et approuvé"],
            correctIndex: 0,
            explanation: "\"Lu et approuvé\" is a frozen formula about the act of reading, so it never agrees with the signatory.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Lue et approuvée",
            answer: "Lu et approuvé",
            explanation: "\"Lu et approuvé\" is a frozen formula about the act of reading, so it never agrees with the signatory, even a woman.",
          },
        ],
      },
      {
        heading: "Paraphes and pour valoir ce que de droit",
        body: [
          "French law today gives \"lu et approuvé\" little legal weight on its own (the signature is what binds), but its absence makes a French reader suspicious, so you write it. The same goes for initials on each page: \"parapher chaque page\", \"les paraphes\". Finally \"Pour valoir ce que de droit\" (literally 'to be worth what it is legally worth') closes certificates and attestations: it means the document may be used for any lawful purpose.",
        ],
        examples: [
          { es: "Les parties paraphent chaque page du contrat.", en: "The parties initial every page of the contract." },
          { es: "Attestation établie pour valoir ce que de droit.", en: "Certificate issued for all legal purposes." },
          { es: "Merci de parapher chaque page.", en: "Please initial every page." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does \"pour valoir ce que de droit\" at the end of an attestation mean?",
            options: ["The document may be used for any lawful purpose.", "The document is only valid in court.", "The signatory waives all rights.", "The document must be certified by a lawyer."],
            correctIndex: 0,
            explanation: "The formula says the attestation is issued to be used as the law allows, wherever it may be needed: for all legal purposes.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We, the undersigned, declare that we accept the terms of this contract.",
        answer: "Nous soussignés déclarons accepter les termes du présent contrat.",
        altAnswers: [
          "Nous, soussignés, déclarons accepter les termes du présent contrat.",
          "Nous soussignés déclarons que nous acceptons les termes du présent contrat.",
          "Nous soussignées déclarons accepter les termes du présent contrat.",
          "Nous soussignés déclarons accepter les conditions du présent contrat.",
        ],
        explanation: "\"Nous soussignés\" (plural; \"soussignées\" for women only), then the verb in the nous form. \"Du présent contrat\" is the legal way to say of this contract.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The [principal] gives the agent the power to sell the apartment.",
        sentence: "Le ___ donne au mandataire le pouvoir de vendre l'appartement.",
        answer: "mandant",
        explanation: "\"Le mandant\" gives the mandate; \"le mandataire\" receives it and acts.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Mrs Julie Petit, hereinafter referred to as 'the Tenant'.",
        words: ["Madame", "Julie Petit,", "ci-après", "dénommée", "« le Preneur »."],
        translation: "Mrs Julie Petit, hereinafter referred to as 'the Tenant'.",
        explanation: "\"Ci-après dénommée\" agrees with Madame; the role itself stays \"le Preneur\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The applicant requests the cancellation of the fine.",
        answer: "Le requérant sollicite l'annulation de l'amende.",
        altAnswers: ["La requérante sollicite l'annulation de l'amende.", "Le requérant demande l'annulation de l'amende.", "La requérante demande l'annulation de l'amende."],
        explanation: "\"Le requérant / la requérante\" is the person filing a request; \"solliciter\" is the formal verb for asking an authority for something.",
      },
      {
        type: "listen-choose",
        audio: "Fait à Bordeaux, en deux exemplaires originaux, dont un remis à chaque partie.",
        question: "What does it mean?",
        options: [
          "Done at Bordeaux, in two original copies, one given to each party.",
          "Made in Bordeaux, in two parts, each given to the landlord.",
          "Done at Bordeaux, with two witnesses, one for each party.",
          "Signed in Bordeaux, with one copy kept by the notary.",
        ],
        correctIndex: 0,
        explanation: "\"Fait à\" + place opens the closing formula; \"exemplaires originaux\" are original copies, and \"dont un remis à chaque partie\" says each party got one.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The company, whose registered office is in Nantes, is represented by its manager.",
        answer: "La société, dont le siège social est situé à Nantes, est représentée par son gérant.",
        altAnswers: [
          "La société, dont le siège social est à Nantes, est représentée par son gérant.",
          "La société, dont le siège est situé à Nantes, est représentée par son gérant.",
          "La société, dont le siège social est situé à Nantes, est représentée par sa gérante.",
        ],
        explanation: "\"Dont le siège social est situé à\" is the standard identification of a company; \"représentée\" agrees with \"la société\".",
      },
      {
        type: "speak",
        text: "Fait à Nantes, en trois exemplaires originaux.",
        tip: "Say it slowly and evenly, as a notaire reads: il-a-é-té-con-ve-nu-et-ar-rê-té. Never pronounce the t of et.",
        explanation: "\"Fait à\" + place, then the number of originals: \"fait\" stays invariable.",
        prompt: "Say it in French: Done at Nantes, in three original copies.",
      },
    ],
  },
  {
    slug: "c2-legal-french-2",
    level: "FR-C2",
    number: 2,
    title: "Le Français Juridique et Administratif, Part 2 of 7",
    summary: "The French courts (tribunal judiciaire, cour d'appel, Cour de cassation, Conseil d'État) and the people of justice, from the magistrat and the procureur to the greffier, the notaire and the commissaire de justice.",
    duration: "18 min",
    sections: [
      {
        heading: "Two orders of courts",
        body: [
          "France has two separate court systems. The judicial order (\"l'ordre judiciaire\") settles disputes between private persons and tries offences. The administrative order (\"l'ordre administratif\") settles disputes with the State, a mairie, a hospital or any public body. If the préfecture refuses your residence permit, you go to the \"tribunal administratif\", not to the ordinary courts.",
        ],
        examples: [
          { es: "Le litige a été porté devant le tribunal judiciaire de Lille.", en: "The dispute was brought before the Lille court of first instance." },
          { es: "Contre le refus du permis de construire, il faut saisir le tribunal administratif.", en: "Against the refusal of planning permission, you have to go to the administrative court." },
          { es: "Un litige entre voisins relève de l'ordre judiciaire.", en: "A dispute between neighbours falls under the judicial order." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The préfecture has refused to renew Amir's residence permit. Where does his lawyer file the challenge?",
            options: ["au tribunal administratif", "au tribunal judiciaire", "au conseil de prud'hommes", "à la Cour de cassation"],
            correctIndex: 0,
            explanation: "A dispute with an administration belongs to the administrative order, whose first-instance court is \"le tribunal administratif\".",
          },
        ],
      },
      {
        heading: "The tribunal judiciaire and specialised courts",
        body: [
          "In the judicial order, the general first-instance court is \"le tribunal judiciaire\", created on 1 January 2020 by merging the old \"tribunal d'instance\" and \"tribunal de grande instance\" (older texts and films still mention the TGI). Specialised courts sit beside it: \"le tribunal de commerce\" for business disputes and \"le conseil de prud'hommes\" for employment disputes.",
        ],
        examples: [
          { es: "Licenciée sans motif, elle a saisi le conseil de prud'hommes.", en: "Dismissed without cause, she took her case to the employment tribunal." },
          { es: "Le tribunal de commerce a prononcé la liquidation de l'entreprise.", en: "The commercial court ordered the company's liquidation." },
          { es: "Ce divorce sera jugé par le tribunal judiciaire de Metz.", en: "This divorce will be heard by the Metz court of first instance." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each dispute with the court that hears it.",
            pairs: [
              { left: "a dismissal without cause", right: "le conseil de prud'hommes" },
              { left: "a dispute between two companies", right: "le tribunal de commerce" },
              { left: "a dispute between neighbours", right: "le tribunal judiciaire" },
              { left: "a refused building permit", right: "le tribunal administratif" },
            ],
            explanation: "Employment goes to the prud'hommes, business to the tribunal de commerce, private disputes to the tribunal judiciaire, and anything against a public body to the administrative order.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "He took his former employer to the employment tribunal.",
            answer: "Il a saisi le conseil de prud'hommes contre son ancien employeur.",
            altAnswers: [
              "Il a attaqué son ancien employeur devant les prud'hommes.",
              "Il a attaqué son ancien employeur aux prud'hommes.",
              "Il a assigné son ancien employeur devant le conseil de prud'hommes.",
              "Il a poursuivi son ancien employeur devant les prud'hommes.",
            ],
            explanation: "Employment disputes go to \"le conseil de prud'hommes\" (colloquially \"les prud'hommes\"). \"Saisir\" a court means to refer a case to it.",
          },
        ],
      },
      {
        heading: "Criminal courts, appeal and cassation",
        body: [
          "For criminal cases: \"le tribunal de police\" (minor offences), \"le tribunal correctionnel\" (délits) and \"la cour d'assises\" (crimes, with a jury). Appeals go to \"la cour d'appel\", and at the top \"la Cour de cassation\" checks only whether the law was correctly applied: it does not judge the facts again.",
        ],
        examples: [
          { es: "Il a fait appel du jugement devant la cour d'appel de Douai.", en: "He appealed the judgment before the Douai court of appeal." },
          { es: "La Cour de cassation ne rejuge pas les faits : elle vérifie l'application du droit.", en: "The Court of Cassation doesn't retry the facts: it checks how the law was applied." },
          { es: "Il sera jugé par la cour d'assises du Rhône.", en: "He will be tried by the Rhone assize court." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which court tries a murder case, with a jury?",
            options: ["la cour d'assises", "le tribunal de police", "le tribunal correctionnel", "la Cour de cassation"],
            correctIndex: 0,
            explanation: "Crimes such as murder go to the cour d'assises, with a jury. The tribunal correctionnel judges délits, the tribunal de police minor offences, and the Cour de cassation never judges facts.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She appealed to the court of appeal in Rennes.",
            answer: "Elle a fait appel devant la cour d'appel de Rennes.",
            altAnswers: ["Elle a interjeté appel devant la cour d'appel de Rennes.", "Elle a fait appel auprès de la cour d'appel de Rennes.", "Elle a saisi la cour d'appel de Rennes."],
            explanation: "\"Faire appel\" (formal: \"interjeter appel\") \"devant la cour d'appel de\" + city; lower-case \"cour\" because there are many of them.",
          },
        ],
      },
      {
        heading: "The administrative ladder",
        body: [
          "In the administrative order the ladder is \"le tribunal administratif\", \"la cour administrative d'appel\" and \"le Conseil d'État\", which is both the supreme administrative court and the government's legal adviser.",
        ],
        examples: [
          { es: "Le Conseil d'État a suspendu l'arrêté du maire.", en: "The Council of State suspended the mayor's order." },
          { es: "La cour administrative d'appel de Lyon a confirmé l'annulation.", en: "The Lyon administrative court of appeal upheld the annulment." },
          { es: "Le Conseil d'État a rendu un avis sur le projet de loi.", en: "The Council of State gave an opinion on the bill." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: The case was brought before the Council of State.",
            words: ["L'affaire", "a été", "portée", "devant", "le Conseil d'État."],
            translation: "The case was brought before the Council of State.",
            explanation: "\"Porter une affaire devant\" a court; \"portée\" agrees with \"l'affaire\" (feminine).",
          },
        ],
      },
      {
        heading: "Cour or tribunal, capital or not",
        body: [
          "First-instance bodies are mostly \"tribunaux\", higher ones are \"cours\". \"Une cour\" is feminine, with no final t: never write \"une court\" or \"un cour\". \"La Cour de cassation\" and \"le Conseil d'État\" are unique institutions and take a capital; \"la cour d'appel de Lyon\" is one of many and does not.",
        ],
        examples: [
          { es: "La cour d'appel de Lyon a confirmé le jugement.", en: "The Lyon court of appeal upheld the judgment." },
          { es: "La Cour de cassation a rejeté le pourvoi.", en: "The Court of Cassation dismissed the appeal on points of law." },
          { es: "Le tribunal administratif de Nantes a annulé la décision.", en: "The Nantes administrative court annulled the decision." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il a fait appel devant la court d'appel de Nîmes.",
            answer: "Il a fait appel devant la cour d'appel de Nîmes.",
            altAnswers: ["Il a interjeté appel devant la cour d'appel de Nîmes."],
            explanation: "\"Une cour\" (feminine, no final t) is the French word; \"court\" is English (or the adjective short).",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The Court of Cassation overturned the ruling of the court of appeal.",
            answer: "La Cour de cassation a cassé l'arrêt de la cour d'appel.",
            altAnswers: ["La Cour de cassation a annulé l'arrêt de la cour d'appel."],
            explanation: "The Cour de cassation \"casse\" (quashes) a decision; a decision of a cour d'appel is \"un arrêt\", not \"un jugement\". Capital C for the unique Cour de cassation only.",
          },
        ],
      },
      {
        heading: "Magistrats: judges and prosecutors",
        body: [
          "\"Un magistrat\" is a false friend in two ways. It is not a minor local judge as in English, and it covers two professions: \"les magistrats du siège\" (the judges, who sit and decide) and \"les magistrats du parquet\" (the prosecutors, who stand and request). The prosecution service as a whole is \"le parquet\" or \"le ministère public\", headed in each tribunal judiciaire by \"le procureur de la République\". In the cour d'appel and the Cour de cassation the prosecutor is \"l'avocat général\": despite the name, he is not a lawyer for anyone.",
        ],
        examples: [
          { es: "Le procureur de la République a requis deux ans de prison avec sursis.", en: "The public prosecutor asked for a two-year suspended sentence." },
          { es: "Les magistrats du parquet se lèvent pour prendre leurs réquisitions.", en: "The public prosecutors stand to make their submissions." },
          { es: "L'avocat général a requis la réclusion à perpétuité.", en: "The prosecutor asked for life imprisonment." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which statement about \"un magistrat\" in France is true?",
            options: ["The word covers both judges and public prosecutors.", "It only means a local judge for minor offences.", "It is another word for a lawyer.", "It refers to an elected mayor acting as judge."],
            correctIndex: 0,
            explanation: "\"Magistrats du siège\" judge; \"magistrats du parquet\" prosecute. Both are career magistrates trained at the same school.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The prosecutor asked for a fine of five thousand euros.",
            answer: "Le procureur a requis une amende de cinq mille euros.",
            altAnswers: [
              "Le procureur de la République a requis une amende de cinq mille euros.",
              "Le procureur a requis une amende de 5 000 euros.",
              "Le parquet a requis une amende de cinq mille euros.",
              "Le procureur a demandé une amende de cinq mille euros.",
            ],
            explanation: "The prosecutor \"requiert\" (requérir, past participle \"requis\"): it is the precise verb for the prosecution's request for a sentence.",
          },
        ],
      },
      {
        heading: "Specialised judges and the greffier",
        body: [
          "\"Le juge d'instruction\" investigates the most serious or complex cases and can \"mettre en examen\" a suspect. \"Le greffier\" (the court clerk) keeps the record, authenticates the decisions and is your contact for practical questions. \"Le juge des enfants\", \"le juge aux affaires familiales\" (JAF, divorce and custody) and \"le juge des libertés et de la détention\" (JLD) are other specialised judges.",
        ],
        examples: [
          { es: "Le juge d'instruction a ordonné une expertise psychiatrique.", en: "The investigating judge ordered a psychiatric assessment." },
          { es: "Adressez-vous au greffe pour obtenir une copie du jugement.", en: "Go to the court registry to get a copy of the judgment." },
          { es: "Le juge aux affaires familiales a fixé la résidence des enfants chez leur mère.", en: "The family court judge ruled that the children would live with their mother." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Send your request to the [court registry] of the court.",
            sentence: "Adressez votre demande au ___ du tribunal.",
            answer: "greffe",
            explanation: "\"Le greffe\" is the registry; the person working there is \"le greffier / la greffière\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The investigating judge has ordered new examinations.",
            answer: "Le juge d'instruction a ordonné de nouvelles expertises.",
            altAnswers: ["La juge d'instruction a ordonné de nouvelles expertises.", "Le juge d'instruction a ordonné de nouveaux examens.", "La juge d'instruction a ordonné de nouveaux examens."],
            explanation: "\"Le juge d'instruction\" leads the judicial investigation; an expert examination ordered by a judge is \"une expertise\".",
          },
        ],
      },
      {
        heading: "Avocats, notaires, commissaires de justice",
        body: [
          "On the other side of the bar: \"l'avocat\" (a lawyer who advises and pleads, addressed as \"Maître\"), \"le notaire\" (a public officer who drafts and authenticates deeds: property sales, marriage contracts, successions, also addressed as \"Maître\"), and \"le commissaire de justice\", the profession created in 2022 by merging \"l'huissier de justice\" and \"le commissaire-priseur judiciaire\": he serves documents, enforces judgments and makes official findings (\"un constat\"). English 'attorney' has no single equivalent: depending on the job it is \"un avocat\", \"un mandataire\" (power of attorney) or, for the US district attorney, \"un procureur\".",
        ],
        examples: [
          { es: "Maître Dubois plaidera pour la défense.", en: "Dubois, the lawyer, will plead for the defence." },
          { es: "Le commissaire de justice a dressé un constat des dégâts.", en: "The bailiff made an official report of the damage." },
          { es: "Maître Lefèvre, notaire à Tours, a rédigé l'acte de vente.", en: "Lefevre, a notary in Tours, drafted the deed of sale." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "L'huissier s'appelle désormais commissaire de justice.",
            question: "What does it mean?",
            options: [
              "The bailiff is now called a commissaire de justice.",
              "The usher has been appointed justice commissioner.",
              "The bailiff will soon report to the justice minister.",
              "The police commissioner is now a judge.",
            ],
            correctIndex: 0,
            explanation: "Since 2022 \"l'huissier de justice\" (bailiff) and the court auctioneer form one profession: \"le commissaire de justice\". \"Désormais\" means from now on.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the profession's current name.",
            source: "L'huissier est venu signifier l'assignation.",
            answer: "Le commissaire de justice est venu signifier l'assignation.",
            altAnswers: ["Le commissaire de justice est venu délivrer l'assignation."],
            explanation: "Since 2022 \"l'huissier de justice\" and the court auctioneer form one profession: \"le commissaire de justice\". Serving a document is \"signifier\" (formal) or \"délivrer\".",
          },
        ],
      },
      {
        heading: "Reading a court report",
        body: [
          "Here is the kind of short court report you read in regional newspapers. Read it for the verbs as much as for the nouns: \"Poursuivi pour abus de confiance, l'ancien trésorier d'une association sportive de Valence comparaissait mardi devant le tribunal correctionnel. Le parquet a requis dix-huit mois d'emprisonnement avec sursis et une interdiction de gérer. Son avocate a plaidé la relaxe, soulignant que les fonds avaient été intégralement remboursés. Le jugement a été mis en délibéré au 14 novembre.\"",
        ],
        examples: [
          { es: "Le prévenu comparaissait libre devant le tribunal correctionnel.", en: "The defendant appeared in court without being in custody." },
          { es: "Son avocate a plaidé la relaxe.", en: "His lawyer argued for an acquittal." },
          { es: "La décision a été mise en délibéré au 14 novembre.", en: "The decision was reserved until 14 November." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The decision [was reserved] until 3 April.",
            sentence: "La décision ___ au 3 avril.",
            answer: "a été mise en délibéré",
            explanation: "\"Mettre en délibéré\": the judges will deliberate and give their decision at a set date. \"Mise\" agrees with \"la décision\".",
          },
        ],
      },
      {
        heading: "Comparaître, plaider, délibérer",
        body: [
          "\"Comparaître\" is to appear in court (as a defendant or a witness). \"Plaider\" is what lawyers do at the hearing (\"l'audience\"); \"plaider la relaxe\" is to argue for acquittal in a tribunal correctionnel (\"l'acquittement\" is the word for the cour d'assises). \"Mettre en délibéré\" means the judges withdraw to deliberate and will announce the decision on a given date; \"le délibéré\" is that deliberation and, by extension, the decision itself.",
        ],
        examples: [
          { es: "L'audience a été renvoyée au mois de mars.", en: "The hearing was adjourned until March." },
          { es: "Le tribunal a rendu son jugement après trois heures de délibéré.", en: "The court gave its judgment after three hours of deliberation." },
          { es: "Le témoin a été cité à comparaître le 2 février.", en: "The witness was summoned to appear on 2 February." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The hearing has been adjourned until next month.",
            answer: "L'audience a été renvoyée au mois prochain.",
            altAnswers: ["L'audience a été reportée au mois prochain.", "L'audience est renvoyée au mois prochain."],
            explanation: "\"Renvoyer une affaire / une audience\" is the court term for adjourning it; \"reporter\" is the everyday equivalent. \"L'audition\" would be the hearing of a witness.",
          },
        ],
      },
      {
        heading: "The style of legal journalism",
        body: [
          "Note also the style. \"Poursuivi pour...\", placed first, is a detached participle that names the charge before the subject; the imparfait \"comparaissait\" is the journalistic imparfait you met at the Advanced level, which sets a scene rather than reporting a completed act. These are the rhythms of French legal journalism, and you will reuse them when you summarise a case.",
        ],
        examples: [
          { es: "Poursuivie pour fraude, la gérante comparaissait jeudi.", en: "Prosecuted for fraud, the manager appeared in court on Thursday." },
          { es: "Accusé de vol, le jeune homme niait les faits.", en: "Accused of theft, the young man denied the facts." },
          { es: "Le tribunal rendait sa décision dans la soirée.", en: "The court gave its decision in the evening." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a detached participle that names the charge first.",
            source: "L'ancien maire, qui est poursuivi pour corruption, comparaissait lundi.",
            answer: "Poursuivi pour corruption, l'ancien maire comparaissait lundi.",
            altAnswers: ["Poursuivi pour corruption, l'ex-maire comparaissait lundi."],
            explanation: "Placing \"poursuivi pour...\" first names the charge before the subject: the rhythm of French court reporting.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "At the cour d'assises, who speaks for the prosecution?",
        options: ["l'avocat général", "l'avocat de la défense", "le greffier", "le notaire"],
        correctIndex: 0,
        explanation: "Above the tribunal judiciaire, the prosecutor is called \"l'avocat général\": a magistrate of the parquet, not a lawyer.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Le tribunal correctionnel a acquitté la prévenue.",
        answer: "Le tribunal correctionnel a relaxé la prévenue.",
        explanation: "Before a tribunal correctionnel, a defendant is \"relaxé\"; \"acquitter\" and \"l'acquittement\" belong to the cour d'assises.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "His lawyer argued for an acquittal, but the court sentenced him to a fine.",
        answer: "Son avocat a plaidé la relaxe, mais le tribunal l'a condamné à une amende.",
        altAnswers: [
          "Son avocate a plaidé la relaxe, mais le tribunal l'a condamné à une amende.",
          "Son avocat a plaidé la relaxe mais le tribunal l'a condamné à une amende.",
          "Son avocate a plaidé la relaxe mais le tribunal l'a condamné à une amende.",
        ],
        explanation: "\"Plaider la relaxe\" before a tribunal correctionnel (acquittal at the cour d'assises is \"l'acquittement\"); \"condamner quelqu'un à\" a sentence.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The defendant [appeared] before the court on Tuesday.",
        sentence: "Le prévenu ___ mardi devant le tribunal.",
        answer: "comparaissait",
        altAnswers: ["a comparu"],
        explanation: "\"Comparaître\" = to appear in court; the journalistic imparfait \"comparaissait\" sets the scene, the passé composé \"a comparu\" reports the fact.",
      },
      {
        type: "multiple-choice",
        question: "A notaire is mainly someone who...",
        options: ["drafts and authenticates deeds such as property sales", "pleads for a defendant in court", "prosecutes offences on behalf of the State", "keeps the court's records"],
        correctIndex: 0,
        explanation: "\"Le notaire\" is a public officer who drafts and authenticates deeds; pleading is the avocat's job, prosecuting the procureur's, and the records are kept by the greffier.",
      },
      {
        type: "dictation",
        audio: "Le tribunal a rendu son jugement mardi.",
        explanation: "A court \"rend\" its decision: \"rendre un jugement\" is the fixed collocation.",
      },
      {
        type: "speak",
        text: "Maître, je vous remercie d'avoir accepté de me défendre.",
        prompt: "Say it in French to your lawyer: Thank you for agreeing to defend me.",
        explanation: "Lawyers and notaires are addressed as \"Maître\", whether a man or a woman, with \"vous\".",
      },
    ],
  },
  {
    slug: "c2-legal-plain-language-transformations",
    level: "FR-C2",
    number: 3,
    title: "Transformations: Du Jargon Juridique au Français Clair",
    summary: "Turn legal sentences into plain French and plain French back into legal style without losing precision: nouns into verbs, il appartient à into c'est à vous de, nonobstant into malgré.",
    duration: "18 min",
    sections: [
      {
        heading: "Legal French prefers nouns",
        body: [
          "Legal and administrative French prefers nouns to verbs: \"à défaut de paiement dans le délai imparti\" (literally 'in default of payment within the allotted time'), \"en cas de non-respect des présentes dispositions\", \"la résiliation du contrat interviendra de plein droit\". Nominalisation, which you practised at the Advanced level, makes a sentence impersonal and timeless: nobody pays or fails to pay, there is only 'payment' and 'default'. That is exactly what a rule needs, and exactly what a worried reader cannot follow.",
        ],
        examples: [
          { es: "À défaut de paiement dans le délai imparti, une majoration de 10 % sera appliquée.", en: "If payment is not made within the time allowed, a 10% surcharge will be applied." },
          { es: "En cas de non-respect du règlement intérieur, l'exclusion pourra être prononcée.", en: "In the event of failure to comply with the house rules, exclusion may be ordered." },
          { es: "La résiliation du contrat interviendra de plein droit.", en: "Termination of the contract will take effect automatically." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is in legal, nominal style?",
            options: [
              "En cas de retard de paiement, des pénalités seront appliquées.",
              "Si vous payez en retard, vous paierez des pénalités.",
              "Vous avez payé en retard, donc vous payez plus.",
              "Payez à temps, sinon c'est plus cher.",
            ],
            correctIndex: 0,
            explanation: "\"En cas de retard de paiement\" turns the action into nouns: nobody pays late, there is only \"le retard\". The others use a person and a verb, which is plain style.",
          },
        ],
      },
      {
        heading: "Give each noun back its verb",
        body: [
          "To make it plain, ask three questions: who acts, what do they do, and when? Then give each noun back its verb and its subject. \"À défaut de paiement dans le délai imparti\" → \"si vous ne payez pas à temps\". \"En cas de non-respect du règlement\" → \"si vous ne respectez pas le règlement\". \"La résiliation du contrat interviendra de plein droit\" → \"le contrat prendra fin automatiquement\". The plain version is longer in words but shorter in effort.",
        ],
        examples: [
          { es: "Si vous ne payez pas avant le 30 juin, vous devrez payer 10 % de plus.", en: "If you don't pay before 30 June, you'll have to pay 10% more." },
          { es: "Si vous ne respectez pas le règlement, on pourra vous exclure.", en: "If you don't follow the rules, you may be excluded." },
          { es: "Le contrat prendra fin automatiquement, sans passer par un juge.", en: "The contract will end automatically, without going to a judge." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into plain French, speaking to the reader as vous.",
            source: "À défaut de retour du formulaire avant le 15 mai, la demande sera rejetée.",
            answer: "Si vous ne renvoyez pas le formulaire avant le 15 mai, votre demande sera rejetée.",
            altAnswers: [
              "Si vous ne renvoyez pas le formulaire avant le 15 mai, votre demande sera refusée.",
              "Si vous n'envoyez pas le formulaire avant le 15 mai, votre demande sera rejetée.",
              "Si vous ne nous renvoyez pas le formulaire avant le 15 mai, votre demande sera rejetée.",
            ],
            explanation: "Ask who acts, what they do and when: \"à défaut de retour\" becomes \"si vous ne renvoyez pas\", with a subject and a verb.",
          },
        ],
      },
      {
        heading: "Precision first",
        body: [
          "Precision is the constraint. \"De plein droit\" means automatically, without any court decision: if you translate it as 'normally' you change the law. \"Dans le délai imparti\" refers to a deadline set somewhere else in the document: in plain French, name it (\"avant le 30 juin\", \"dans les quinze jours\"). A good rewrite never adds a promise or drops a condition.",
        ],
        examples: [
          { es: "La sanction s'applique de plein droit.", en: "The penalty applies automatically." },
          { es: "Vous devez répondre dans les quinze jours.", en: "You must reply within fifteen days." },
          { es: "Le délai imparti est fixé à l'article 4.", en: "The time allowed is set in article 4." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is the most faithful plain version of \"La résiliation interviendra de plein droit\"?",
            options: ["Le contrat prendra fin automatiquement.", "Le contrat prendra normalement fin.", "Le contrat pourra éventuellement prendre fin.", "Le juge mettra fin au contrat."],
            correctIndex: 0,
            explanation: "\"De plein droit\" means automatically, by the effect of the law or the contract, with no decision needed. 'Normally', 'possibly' or 'by a judge' all change the legal meaning.",
          },
        ],
      },
      {
        heading: "Duty: il appartient à, il incombe à, être tenu de",
        body: [
          "Legal French expresses duty with impersonal turns: \"il appartient au requérant de fournir les pièces justificatives\" (it is for the applicant to...), \"il incombe au bailleur d'effectuer les grosses réparations\" (the duty falls on the landlord), \"le locataire est tenu de souscrire une assurance\" (is required to). The impersonal \"il\" puts the duty first and the person second, which is why these sentences feel cold.",
        ],
        examples: [
          { es: "Il appartient au requérant de fournir les pièces justificatives.", en: "It is for the applicant to provide the supporting documents." },
          { es: "Il incombe au bailleur d'effectuer les grosses réparations.", en: "Major repairs are the landlord's responsibility." },
          { es: "Le locataire est tenu de souscrire une assurance habitation.", en: "The tenant is required to take out home insurance." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words, in legal style.",
            en: "[It is for the tenant] to inform the landlord of his departure.",
            sentence: "___ d'informer le bailleur de son départ.",
            answer: "Il appartient au preneur",
            altAnswers: ["Il incombe au preneur", "Il appartient au locataire", "Il incombe au locataire"],
            explanation: "\"Il appartient à\" + person + \"de\" + infinitive: the impersonal duty formula. \"Il incombe à\" is a near-synonym.",
          },
        ],
      },
      {
        heading: "Plain French puts the person first",
        body: [
          "In plain French, put the person first: \"c'est à vous de fournir les documents\", \"c'est le propriétaire qui doit faire les grosses réparations\", \"vous devez prendre une assurance\". \"C'est à vous de\" (it's up to you to) is the everyday equivalent of \"il vous appartient de\"; \"vous devez\" covers \"vous êtes tenu de\".",
        ],
        examples: [
          { es: "C'est à vous de nous envoyer les justificatifs.", en: "It's up to you to send us the documents." },
          { es: "C'est le propriétaire qui doit payer les grosses réparations.", en: "It's the owner who has to pay for major repairs." },
          { es: "Vous devez prévenir la mairie de votre déménagement.", en: "You must tell the town hall that you are moving." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Il vous appartient de transmettre ces documents avant la fin du mois.",
            question: "What does it mean?",
            options: [
              "It's up to you to send these documents before the end of the month.",
              "These documents belong to you until the end of the month.",
              "You may keep these documents until the end of the month.",
              "We will send you these documents before the end of the month.",
            ],
            correctIndex: 0,
            explanation: "\"Il vous appartient de\" does not mean 'belongs to you': it states that the duty is yours.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into plain French, speaking to the reader as vous.",
            source: "Il vous appartient de prendre rendez-vous en ligne.",
            answer: "C'est à vous de prendre rendez-vous en ligne.",
            altAnswers: ["Vous devez prendre rendez-vous en ligne.", "C'est à vous de prendre rendez-vous sur internet."],
            explanation: "\"Il vous appartient de\" becomes \"c'est à vous de\" (or \"vous devez\"): the person comes first.",
          },
        ],
      },
      {
        heading: "Two traps going back to legal style",
        body: [
          "Watch two traps going the other way. \"Il appartient à\" is impersonal and takes \"de\" + infinitive: \"il lui appartient de prouver\", not \"*il appartient à lui à prouver\". And \"incomber\" is used only in the third person (\"il incombe\", \"les frais incombent à l'acheteur\"): you cannot say \"*j'incombe\". When the duty is a cost rather than an action, \"à la charge de\" is the legal phrase: \"les frais de notaire sont à la charge de l'acquéreur\" → \"c'est l'acheteur qui paie les frais de notaire\".",
        ],
        examples: [
          { es: "Les frais de notaire sont à la charge de l'acquéreur.", en: "The notary's fees are payable by the buyer." },
          { es: "C'est l'acheteur qui paie les frais de notaire.", en: "The buyer pays the notary's fees." },
          { es: "Les frais de dossier incombent au demandeur.", en: "The application fees are payable by the applicant." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is grammatically correct?",
            options: ["Les frais de déménagement incombent à l'employeur.", "J'incombe de payer les frais.", "Il appartient au locataire à payer les charges.", "Il incombe le locataire de payer les charges."],
            correctIndex: 0,
            explanation: "\"Incomber\" only has third-person subjects (the duty or cost), and the person it falls on is introduced by \"à\" (\"il incombe au locataire de\"). \"Il appartient à... de\" takes \"de\" before the infinitive, not \"à\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il appartient à l'acheteur à vérifier l'état du bien.",
            answer: "Il appartient à l'acheteur de vérifier l'état du bien.",
            altAnswers: ["Il incombe à l'acheteur de vérifier l'état du bien."],
            explanation: "\"Il appartient à\" + person takes \"de\" before the infinitive, not a second \"à\".",
          },
        ],
      },
      {
        heading: "Legal connectors",
        body: [
          "A handful of connectors carry the logic of legal texts. \"Nonobstant\" (notwithstanding) → \"malgré\", \"même si\". \"Nonobstant toute clause contraire\" means even if another clause says the opposite. \"Sous réserve de\" (subject to) → \"à condition que\", \"si\". \"En vertu de\" (under, pursuant to) → \"selon\", \"d'après\". \"Aux fins de\" (for the purpose of) → \"pour\". \"À compter de\" (as from) → \"à partir de\". \"Le cas échéant\" (where applicable) → \"si c'est le cas\", \"s'il y a lieu\".",
        ],
        examples: [
          { es: "Nonobstant toute clause contraire, le délai de préavis est réduit à un mois.", en: "Notwithstanding any clause to the contrary, the notice period is reduced to one month." },
          { es: "Sous réserve de l'accord du bailleur, le preneur pourra sous-louer le logement.", en: "Subject to the landlord's agreement, the tenant may sublet the flat." },
          { es: "En vertu de l'article 15 de la loi du 6 juillet 1989, le congé doit être motivé.", en: "Under article 15 of the law of 6 July 1989, the notice must state its grounds." },
          { es: "Ces données sont collectées aux fins de gestion de votre dossier.", en: "This data is collected for the purpose of managing your file." },
          { es: "Le cas échéant, joignez une copie du jugement de divorce.", en: "Where applicable, enclose a copy of the divorce judgment." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each legal connector with its plain equivalent.",
            pairs: [
              { left: "nonobstant", right: "malgré" },
              { left: "sous réserve de", right: "à condition que" },
              { left: "aux fins de", right: "pour" },
              { left: "à compter de", right: "à partir de" },
            ],
            explanation: "\"Nonobstant\" = malgré; \"sous réserve de\" = à condition que; \"aux fins de\" = pour; \"à compter de\" = à partir de.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words, in legal style.",
            en: "The notice period runs [as from] receipt of the letter.",
            sentence: "Le délai de préavis court ___ la réception de la lettre.",
            answer: "à compter de",
            explanation: "\"À compter de\" marks the legal starting point of a period; plain French says \"à partir de\". \"Courir\" is the verb for a deadline that runs.",
          },
        ],
      },
      {
        heading: "A clause in legal style",
        body: [
          "Here is a lease clause: \"Nonobstant toute clause contraire, le preneur pourra résilier le bail à tout moment, sous réserve de respecter un préavis de trois mois, à compter de la réception par le bailleur de la lettre de congé. Le cas échéant, le dépôt de garantie lui sera restitué dans un délai maximal de deux mois à compter de la remise des clés.\"",
        ],
        examples: [
          { es: "Le preneur pourra résilier le bail à tout moment.", en: "The tenant may terminate the lease at any time." },
          { es: "Le dépôt de garantie sera restitué dans un délai maximal de deux mois.", en: "The deposit will be returned within two months at most." },
          { es: "La lettre de congé est adressée au bailleur.", en: "The notice letter is sent to the landlord." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "According to the clause, when does the three months' notice start?",
            options: ["When the landlord receives the tenant's letter", "When the tenant sends the letter", "When the tenant returns the keys", "At the start of the following month"],
            correctIndex: 0,
            explanation: "\"À compter de la réception par le bailleur de la lettre de congé\": the period starts when the landlord receives it, not when it is sent.",
          },
        ],
      },
      {
        heading: "Its plain rewrite",
        body: [
          "The plain rewrite: \"Même si une autre clause dit le contraire, vous pouvez quitter le logement quand vous voulez, à condition de prévenir le propriétaire trois mois à l'avance. Les trois mois commencent le jour où il reçoit votre lettre. Il doit alors vous rendre votre caution au plus tard deux mois après que vous lui avez rendu les clés.\"",
        ],
        examples: [
          { es: "Même si le contrat dit autre chose, le préavis n'est que d'un mois.", en: "Even if the contract says otherwise, the notice period is only one month." },
          { es: "Vous pouvez quitter le logement quand vous voulez.", en: "You can leave the flat whenever you want." },
          { es: "Les trois mois commencent le jour où il reçoit votre lettre.", en: "The three months start on the day he receives your letter." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into plain French, speaking to the reader as vous.",
            source: "Sous réserve de l'accord du bailleur, vous pourrez repeindre les murs.",
            answer: "Si le propriétaire est d'accord, vous pourrez repeindre les murs.",
            altAnswers: [
              "Si le propriétaire est d'accord, vous pouvez repeindre les murs.",
              "À condition que le propriétaire soit d'accord, vous pourrez repeindre les murs.",
              "Si votre propriétaire est d'accord, vous pourrez repeindre les murs.",
            ],
            explanation: "\"Sous réserve de l'accord du bailleur\" becomes a plain condition with a person and a verb: \"si le propriétaire est d'accord\".",
          },
        ],
      },
      {
        heading: "What a good rewrite keeps",
        body: [
          "Notice what the rewrite keeps: the right (\"vous pouvez\"), the condition (\"à condition de\"), the exact starting point of each deadline (\"le jour où il reçoit\", \"après que vous lui avez rendu les clés\": indicative after \"après que\"), and the maximum (\"au plus tard\"). Notice too that the everyday word \"caution\" replaces \"dépôt de garantie\": strictly speaking a \"caution\" is a guarantor, but in conversation everyone says it, so a plain-language version can too, as long as the formal document keeps the precise term.",
        ],
        examples: [
          { es: "Vous devez payer au plus tard le 10 du mois.", en: "You must pay by the 10th of the month at the latest." },
          { es: "Après que vous avez signé, le contrat s'applique.", en: "Once you have signed, the contract applies." },
          { es: "La caution doit vous être rendue sous deux mois.", en: "The deposit must be returned to you within two months." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il doit vous rendre la caution deux mois après que vous ayez rendu les clés.",
            answer: "Il doit vous rendre la caution deux mois après que vous avez rendu les clés.",
            altAnswers: ["Il doit vous rendre la caution deux mois après la remise des clés."],
            explanation: "\"Après que\" takes the indicative (\"vous avez rendu\"), because what follows has really happened.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into legal style.",
        source: "Même si le contrat dit autre chose, le locataire peut partir quand il veut.",
        answer: "Nonobstant toute clause contraire, le preneur pourra résilier le bail à tout moment.",
        altAnswers: [
          "Nonobstant toute clause contraire, le preneur peut résilier le bail à tout moment.",
          "Nonobstant toute clause contraire, le locataire pourra résilier le bail à tout moment.",
          "Nonobstant toute clause contraire, le locataire peut résilier le bail à tout moment.",
        ],
        explanation: "\"Même si le contrat dit autre chose\" becomes \"nonobstant toute clause contraire\"; the person becomes the role (\"le preneur\") and \"partir\" becomes \"résilier le bail\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into plain French, speaking to the reader as vous.",
        source: "Le cas échéant, joignez une attestation de l'employeur.",
        answer: "Si c'est le cas, joignez une attestation de votre employeur.",
        altAnswers: [
          "Si nécessaire, joignez une attestation de votre employeur.",
          "Si besoin, joignez une attestation de votre employeur.",
          "S'il y a lieu, joignez une attestation de votre employeur.",
          "Si c'est votre cas, joignez une attestation de votre employeur.",
        ],
        explanation: "\"Le cas échéant\" is the formal phrase; \"si c'est le cas\", \"si nécessaire\" or \"si besoin\" say it plainly.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into legal style with être tenu de.",
        source: "Le locataire doit faire ramoner la cheminée chaque année.",
        answer: "Le preneur est tenu de faire ramoner la cheminée chaque année.",
        altAnswers: [
          "Le locataire est tenu de faire ramoner la cheminée chaque année.",
          "Le preneur est tenu de faire procéder au ramonage de la cheminée chaque année.",
          "Le preneur est tenu de faire ramoner la cheminée annuellement.",
        ],
        explanation: "\"Être tenu de\" + infinitive is the legal be required to; the tenant becomes his role, \"le preneur\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: It's the seller who pays for the inspections.",
        words: ["C'est", "le vendeur", "qui", "paie", "les diagnostics."],
        translation: "It's the seller who pays for the inspections.",
        explanation: "The cleft \"c'est... qui\" puts the person first: the plain version of \"les diagnostics sont à la charge du vendeur\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "This data is collected [for the purpose of] sending invoices.",
        sentence: "Ces données sont collectées ___ l'envoi des factures.",
        answer: "aux fins de",
        altAnswers: ["en vue de"],
        explanation: "\"Aux fins de\" + noun (for the purpose of) is the formal \"pour\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into plain everyday French, speaking to the reader as \"vous\".",
        source: "You must pay the rent on the 5th of the month at the latest.",
        answer: "Vous devez payer le loyer au plus tard le 5 du mois.",
        altAnswers: ["Vous devez payer le loyer le 5 du mois au plus tard.", "Vous devez régler le loyer au plus tard le 5 du mois.", "Vous devez payer le loyer au plus tard le cinq du mois."],
        explanation: "\"Au plus tard\" keeps the maximum: a good plain rewrite never drops a deadline.",
      },
      {
        type: "dictation",
        audio: "Sous réserve de l'accord du syndic, les travaux pourront commencer.",
        explanation: "\"Sous réserve de\" + noun = subject to; \"pourront\" is the future of permission.",
      },
      {
        type: "speak",
        text: "C'est à vous de prévenir le propriétaire trois mois à l'avance.",
        prompt: "Say it in plain French to a tenant: It's up to you to tell the landlord three months in advance.",
        explanation: "The plain version of \"il appartient au preneur de notifier son congé avec un préavis de trois mois\".",
      },
    ],
  },
  {
    slug: "c2-legal-french-3",
    level: "FR-C2",
    number: 4,
    title: "Le Français Juridique et Administratif, Part 3 of 7",
    summary: "Administrative acts from the loi to the circulaire, the anatomy of an arrêté (vu, considérant, arrête, article 1er) and the formulas of official letters (j'ai l'honneur de, je vous saurais gré de).",
    duration: "18 min",
    sections: [
      {
        heading: "Loi, ordonnance, décret",
        body: [
          "French rules form a hierarchy, and their names tell you who made them. \"La loi\" is voted by Parliament. \"Une ordonnance\" is adopted by the government in the domain of the law once Parliament has authorised it (the word also means a single judge's decision, and a prescription). \"Un décret\" is signed by the Prime Minister or the President and implements the law: \"un décret d'application\".",
        ],
        examples: [
          { es: "La loi a été votée par le Parlement et publiée au Journal officiel.", en: "The law was passed by Parliament and published in the Official Journal." },
          { es: "Le décret d'application n'est toujours pas paru.", en: "The implementing decree still hasn't been published." },
          { es: "Le gouvernement a été autorisé à légiférer par ordonnance.", en: "The government was authorised to legislate by ordinance." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Who signs un décret?",
            options: ["the Prime Minister or the President", "Parliament", "a mayor", "a single judge"],
            correctIndex: 0,
            explanation: "Decrees come from the executive: the Prime Minister or the President. Parliament votes laws, a mayor issues arrêtés, and a single judge's decision can be an ordonnance.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The implementing decree was published in the Official Journal yesterday.",
            answer: "Le décret d'application a été publié hier au Journal officiel.",
            altAnswers: ["Le décret d'application est paru hier au Journal officiel.", "Le décret d'application a été publié au Journal officiel hier.", "Le décret d'application est paru au Journal officiel hier."],
            explanation: "\"Décret d'application\" implements a law; texts are published \"au Journal officiel\" (or \"paraissent au JO\").",
          },
        ],
      },
      {
        heading: "Arrêté and circulaire",
        body: [
          "\"Un arrêté\" is an order made by a minister (\"arrêté ministériel\"), a préfet (\"arrêté préfectoral\") or a mayor (\"arrêté municipal\"). \"Une circulaire\" is an internal instruction telling civil servants how to apply the rules; in principle it binds the administration, not you.",
        ],
        examples: [
          { es: "Le préfet a pris un arrêté interdisant les barbecues en forêt.", en: "The prefect issued an order banning barbecues in the forest." },
          { es: "Une circulaire du ministère précise les modalités d'application.", en: "A ministry circular sets out how the rules are to be applied." },
          { es: "Le ministre a signé un arrêté fixant les dates des vacances.", en: "The minister signed an order setting the holiday dates." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The mayor of Colmar bans parking on the main square on market days. What has she issued?",
            options: ["un arrêté municipal", "un arrêt municipal", "un décret municipal", "une loi municipale"],
            correctIndex: 0,
            explanation: "A mayor's order is \"un arrêté municipal\". \"Un arrêt\" is a higher court's ruling; decrees come from the government, laws from Parliament.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The prefect has issued an order banning fireworks.",
            answer: "Le préfet a pris un arrêté interdisant les feux d'artifice.",
            altAnswers: [
              "Le préfet a pris un arrêté qui interdit les feux d'artifice.",
              "La préfète a pris un arrêté interdisant les feux d'artifice.",
              "Le préfet a pris un arrêté portant interdiction des feux d'artifice.",
            ],
            explanation: "One \"prend un arrêté\". \"Portant interdiction de\" is the very administrative way to name its content.",
          },
        ],
      },
      {
        heading: "Citing and dating a text",
        body: [
          "Laws and decrees are cited by type, number and date: \"la loi n° 89-462 du 6 juillet 1989\", \"le décret n° 2002-120 du 30 janvier 2002\". In speech you hear \"la loi du 6 juillet 89\", or the name of the minister who carried it: \"la loi Evin\", \"la loi Alur\". The text is published in \"le Journal officiel\" (JO) and enters into force (\"entre en vigueur\") on a set date.",
        ],
        examples: [
          { es: "La nouvelle réglementation entrera en vigueur le 1er janvier.", en: "The new regulations will come into force on 1 January." },
          { es: "La loi n° 2014-366 du 24 mars 2014, dite loi Alur, encadre les loyers.", en: "Law no. 2014-366 of 24 March 2014, known as the Alur law, regulates rents." },
          { es: "Le texte a été publié au Journal officiel du 3 mai.", en: "The text was published in the Official Journal of 3 May." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The law will come into force next month.",
            answer: "La loi entrera en vigueur le mois prochain.",
            altAnswers: ["La loi va entrer en vigueur le mois prochain.", "La loi entrera en application le mois prochain."],
            explanation: "\"Entrer en vigueur\" is the fixed expression for a text taking legal effect.",
          },
        ],
      },
      {
        heading: "Arrêté or arrêt",
        body: [
          "Trap: \"un arrêté\" (an administrative order) and \"un arrêt\" (a ruling of a higher court) are both nouns from \"arrêter\", in its old sense of to decide, to fix. The mayor \"prend un arrêté\"; the Cour de cassation \"rend un arrêt\". Mixing them up is the classic mistake even French students make, and in a legal context it changes the institution you are talking about.",
        ],
        examples: [
          { es: "La Cour de cassation a rendu un arrêt de principe sur cette question.", en: "The Court of Cassation handed down a landmark ruling on this question." },
          { es: "Le maire a pris un arrêté de circulation.", en: "The mayor issued a traffic order." },
          { es: "La cour d'appel a rendu son arrêt hier.", en: "The court of appeal handed down its ruling yesterday." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "La cour d'appel de Rennes a pris un arrêté dans cette affaire.",
            answer: "La cour d'appel de Rennes a rendu un arrêt dans cette affaire.",
            explanation: "A higher court \"rend un arrêt\" (no é); \"prendre un arrêté\" is what a mayor, préfet or minister does.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The Court of Cassation handed down its ruling on Tuesday.",
            answer: "La Cour de cassation a rendu son arrêt mardi.",
            altAnswers: ["La Cour de cassation a rendu son arrêt ce mardi.", "La Cour de cassation a rendu sa décision mardi.", "Mardi, la Cour de cassation a rendu son arrêt."],
            explanation: "A higher court \"rend un arrêt\" (no é): an \"arrêté\" would be an administrative order.",
          },
        ],
      },
      {
        heading: "The skeleton of an arrêté",
        body: [
          "Every arrêté follows the same skeleton. First the author, in capitals or bold: \"Le Maire de la commune de Saint-Malo\". Then the legal bases, each introduced by \"Vu\" (in view of, having regard to): the texts that give the author the power to act. Then the reasons, each introduced by \"Considérant que\" (whereas): the facts that justify acting now. Then the single verb \"ARRÊTE :\" in capitals, and numbered articles: \"Article 1er\" (read \"article premier\"), \"Article 2\", and so on. The last articles say who enforces the order and where it is posted.",
        ],
        examples: [
          { es: "Vu le Code général des collectivités territoriales,", en: "Having regard to the General Code of Local Authorities," },
          { es: "Considérant que des travaux de voirie doivent être réalisés rue Victor-Hugo,", en: "Whereas roadworks must be carried out on rue Victor Hugo," },
          { es: "ARRÊTE : Article 1er : La baignade est interdite au lac de la Forge.", en: "ORDERS: Article 1: Swimming is prohibited in the Forge lake." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In an arrêté, what comes right after the last Considérant que line?",
            options: ["ARRÊTE :", "Vu le Code de la route,", "Fait à Saint-Malo, le 2 juillet", "Je vous prie d'agréer..."],
            correctIndex: 0,
            explanation: "The order runs: the author, the \"Vu\" lines (legal bases), the \"Considérant que\" lines (reasons), then the single verb \"ARRÊTE :\" and the numbered articles.",
          },
        ],
      },
      {
        heading: "A typical arrêté",
        body: [
          "Written for this course: \"Le Maire de Saint-Malo, Vu le Code général des collectivités territoriales ; Considérant que le festival de musique se tiendra sur la place Chateaubriand les 12 et 13 juillet ; Considérant qu'il convient d'assurer la sécurité du public ; ARRÊTE : Article 1er : Le stationnement sera interdit sur la place du 12 au 14 juillet. Article 2 : Tout véhicule en infraction sera mis en fourrière aux frais de son propriétaire.\"",
        ],
        examples: [
          { es: "Considérant qu'il convient d'assurer la sécurité des usagers,", en: "Whereas it is necessary to ensure the safety of road users," },
          { es: "Tout véhicule en infraction sera mis en fourrière aux frais de son propriétaire.", en: "Any vehicle in breach will be towed away at its owner's expense." },
          { es: "Article 3 : Monsieur le Commissaire de police est chargé de l'exécution du présent arrêté.", en: "Article 3: The police superintendent is responsible for enforcing this order." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Whereas] the bridge is in a dangerous state,",
            sentence: "___ le pont se trouve dans un état dangereux,",
            answer: "Considérant que",
            explanation: "\"Considérant que\" introduces each reason of an administrative act, followed by the indicative.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Having regard to] the Highway Code,",
            sentence: "___ le Code de la route,",
            answer: "Vu",
            explanation: "\"Vu\" introduces each legal basis; it is invariable here (\"Vu la loi\", \"Vu les articles\").",
          },
        ],
      },
      {
        heading: "The grammar of an arrêté",
        body: [
          "Grammatically, \"vu\" here is a frozen participle used as a preposition, so it is invariable: \"Vu la loi\", \"Vu les articles\". \"Considérant que\" takes the indicative, because it states facts. The future in the articles (\"seront interdits\", \"sera mis en fourrière\") is the deontic future: not a prediction but a command. And \"le présent arrêté\" means this order: \"présent\" before the noun is the standard legal self-reference.",
        ],
        examples: [
          { es: "Le présent arrêté sera affiché en mairie.", en: "This order will be posted at the town hall." },
          { es: "Vu les articles L. 2212-1 et suivants,", en: "Having regard to articles L. 2212-1 et seq.," },
          { es: "Considérant que la route est inondée,", en: "Whereas the road is flooded," },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French in the style of an arrêté.",
            source: "Parking will be prohibited on the square on 14 July.",
            answer: "Le stationnement sera interdit sur la place le 14 juillet.",
            altAnswers: ["Le stationnement est interdit sur la place le 14 juillet.", "Le 14 juillet, le stationnement sera interdit sur la place."],
            explanation: "A nominal subject (\"le stationnement\") and the deontic future (\"sera interdit\"): an order, not a forecast.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into the deontic future of an arrêté.",
            source: "Il est interdit de se baigner dans le lac.",
            answer: "La baignade sera interdite dans le lac.",
            altAnswers: ["La baignade dans le lac sera interdite."],
            explanation: "An arrêté uses a nominal subject (\"la baignade\") and the future as a command: \"sera interdite\".",
          },
        ],
      },
      {
        heading: "Opening an official letter",
        body: [
          "Letters from an administration (and formal letters to one) have their own frozen phrases, more ceremonious than the business letters you wrote at the Advanced level. \"J'ai l'honneur de vous informer que...\" (I have the honour to inform you that) opens with neither honour nor emotion: it is simply the neutral way a civil servant or a citizen starts. \"J'ai l'honneur de solliciter...\" asks for something; \"J'ai l'honneur d'accuser réception de votre courrier\" acknowledges a letter.",
        ],
        examples: [
          { es: "J'ai l'honneur de vous informer que votre demande a été acceptée.", en: "I am writing to inform you that your application has been accepted." },
          { es: "J'ai l'honneur d'accuser réception de votre courrier du 3 mars.", en: "I acknowledge receipt of your letter of 3 March." },
          { es: "J'ai l'honneur de solliciter un rendez-vous.", en: "I am writing to request an appointment." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "J'ai l'honneur d'accuser réception de votre courrier.",
            question: "What does it mean?",
            options: ["I acknowledge receipt of your letter.", "I have the honour to accuse you in this letter.", "I am honoured to receive your visit.", "I am returning your letter with my comments."],
            correctIndex: 0,
            explanation: "\"Accuser réception\" means to acknowledge receipt; \"accuser\" here has nothing to do with blame.",
          },
        ],
      },
      {
        heading: "Obligations and polite requests",
        body: [
          "Obligations are signalled impersonally: \"il vous appartient de\", \"vous voudrez bien\" (a polite imperative: \"vous voudrez bien me faire parvenir...\" means please send me). Requests from the citizen use the conditional of politeness: \"je vous saurais gré de bien vouloir...\" (I would be grateful if you would kindly...), \"je vous serais reconnaissant(e) de...\". \"Savoir gré\" is old French for to be grateful: \"je vous saurais gré\", never \"*je vous serais gré\".",
        ],
        examples: [
          { es: "Vous voudrez bien me faire parvenir les pièces manquantes sous quinze jours.", en: "Please send me the missing documents within fifteen days." },
          { es: "Je vous saurais gré de bien vouloir réexaminer mon dossier.", en: "I would be grateful if you would kindly reconsider my file." },
          { es: "Il vous appartient de signaler tout changement de situation.", en: "It is your responsibility to report any change in your circumstances." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which phrase is wrong?",
            options: ["Je vous serais gré de bien vouloir...", "Je vous saurais gré de bien vouloir...", "Je vous serais reconnaissant de bien vouloir...", "Vous voudrez bien me faire parvenir..."],
            correctIndex: 0,
            explanation: "The expression is \"savoir gré à quelqu'un\": \"je vous saurais gré\". \"Je vous serais gré\" is a common confusion with \"je vous serais reconnaissant\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, in the formal register of an official letter.",
            source: "I would be grateful if you would kindly send me a copy of the order.",
            answer: "Je vous saurais gré de bien vouloir m'adresser une copie de l'arrêté.",
            altAnswers: [
              "Je vous saurais gré de bien vouloir m'envoyer une copie de l'arrêté.",
              "Je vous saurais gré de bien vouloir me faire parvenir une copie de l'arrêté.",
              "Je vous serais reconnaissant de bien vouloir m'adresser une copie de l'arrêté.",
              "Je vous serais reconnaissante de bien vouloir m'adresser une copie de l'arrêté.",
              "Je vous serais reconnaissant de bien vouloir m'envoyer une copie de l'arrêté.",
              "Je vous serais reconnaissante de bien vouloir m'envoyer une copie de l'arrêté.",
            ],
            explanation: "\"Je vous saurais gré de bien vouloir\" + infinitive: \"saurais\" (from savoir gré), not \"serais\". \"Je vous serais reconnaissant(e)\" is the alternative with être.",
          },
          {
            type: "multiple-choice",
            question: "\"Vous voudrez bien me faire parvenir votre avis d'imposition.\" What is this sentence?",
            options: ["A polite but firm request to send the tax notice.", "A question about whether you want to send it.", "A prediction that you will want to send it.", "An offer to send you your tax notice."],
            correctIndex: 0,
            explanation: "\"Vous voudrez bien\" + infinitive is the administrative imperative: courteous in form, compulsory in substance.",
          },
        ],
      },
      {
        heading: "Closing formulas and hierarchy",
        body: [
          "The closing formula repeats the form of address of the opening, and its strength depends on the hierarchy: \"Je vous prie d'agréer, Monsieur le Préfet, l'expression de ma haute considération\" (to a senior official), \"...de ma considération distinguée\" (the standard), \"...de mes salutations distinguées\" (neutral). A reply from the administration often ends \"Je vous prie de croire, Madame, à l'assurance de ma considération distinguée\". English speakers tend to shorten all of this to \"Cordialement\", which in this register looks offhand.",
        ],
        examples: [
          { es: "Je vous prie d'agréer, Monsieur le Préfet, l'expression de ma haute considération.", en: "Yours faithfully (to the Prefect, with deep respect)." },
          { es: "Je vous prie d'agréer, Madame, l'expression de ma considération distinguée.", en: "Yours faithfully. (the standard formula)" },
          { es: "Je vous prie de croire, Monsieur, à l'assurance de ma considération distinguée.", en: "Yours faithfully. (common in replies from an administration)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You are writing to the mayor. Which closing is the safest?",
            options: ["Je vous prie d'agréer, Monsieur le Maire, l'expression de ma considération distinguée.", "Cordialement.", "Bien à vous, Monsieur le Maire.", "Bisous, Monsieur le Maire."],
            correctIndex: 0,
            explanation: "The closing repeats the form of address (\"Monsieur le Maire\") with a full formula. \"Cordialement\" or \"bien à vous\" look offhand in this register.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make the closing fit a senior official.",
            source: "Je vous prie d'agréer, Madame la Rectrice, mes salutations distinguées.",
            answer: "Je vous prie d'agréer, Madame la Rectrice, l'expression de ma haute considération.",
            altAnswers: ["Je vous prie d'agréer, Madame la Rectrice, l'assurance de ma haute considération."],
            explanation: "For a senior official such as a rectrice (head of an education authority), \"l'expression de ma haute considération\" replaces the neutral \"mes salutations distinguées\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, in the formal register of an official letter.",
        source: "I have the honour to request a parking permit for residents.",
        answer: "J'ai l'honneur de solliciter une carte de stationnement résident.",
        altAnswers: [
          "J'ai l'honneur de solliciter un permis de stationnement pour les résidents.",
          "J'ai l'honneur de solliciter la délivrance d'une carte de stationnement résident.",
          "J'ai l'honneur de solliciter une vignette de stationnement résident.",
        ],
        explanation: "\"J'ai l'honneur de solliciter\" is the frozen formal request; \"la délivrance de\" (the issuing of) is a typical administrative nominalisation.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Considérant que la chaussée soit dangereuse,",
        answer: "Considérant que la chaussée est dangereuse,",
        explanation: "\"Considérant que\" states facts, so it takes the indicative: \"est\", not \"soit\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: This order will be published in the register of administrative acts.",
        words: ["Le présent", "arrêté", "sera", "publié", "au recueil", "des actes", "administratifs."],
        translation: "This order will be published in the register of administrative acts.",
        explanation: "\"Le présent arrêté\" is the legal self-reference; the future \"sera publié\" is a command.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, in the formal register of an official letter.",
        source: "It is your responsibility to report any change of address.",
        answer: "Il vous appartient de signaler tout changement d'adresse.",
        altAnswers: ["Il vous incombe de signaler tout changement d'adresse.", "Il vous appartient de déclarer tout changement d'adresse.", "Il vous incombe de déclarer tout changement d'adresse."],
        explanation: "\"Il vous appartient de\" + infinitive; \"tout\" + singular noun (any) is typical of rules: \"tout changement\", \"toute modification\".",
      },
      {
        type: "dictation",
        audio: "Considérant qu'il convient d'assurer la sécurité du public,",
        explanation: "\"Considérant que\" + indicative; \"il convient de\" means it is appropriate, it is necessary to.",
      },
      {
        type: "speak",
        text: "J'ai l'honneur de solliciter le renouvellement de mon titre de séjour.",
        tip: "Agréer: a-gré-é, two separate é sounds. Keep the rhythm slow and even.",
        explanation: "\"J'ai l'honneur de solliciter\" + a noun (\"le renouvellement de\"): the frozen formal request to an administration.",
        prompt: "Say it in French, in the formal register: I am writing to request the renewal of my residence permit.",
      },
    ],
  },
  {
    slug: "c2-legal-parties-word-web",
    level: "FR-C2",
    number: 5,
    title: "Word Web: Qui Est Qui dans un Procès",
    summary: "Sort the people of a trial: demandeur and défendeur in a civil case, plaignant and partie civile, prévenu vs accusé, mis en examen, témoin, juré and the lawyers on each side.",
    duration: "16 min",
    sections: [
      {
        heading: "A civil case: demandeur and défendeur",
        body: [
          "In a civil case one private person sues another. The one who starts the case is \"le demandeur\" (feminine \"la demanderesse\", a rare surviving -eresse form), and the one being sued is \"le défendeur\" (\"la défenderesse\"). The case starts with \"une assignation\" (a summons): \"assigner quelqu'un en justice\" is to sue them. On appeal the roles get new names: \"l'appelant\" (who appeals) and \"l'intimé\" (the respondent).",
        ],
        examples: [
          { es: "La demanderesse réclame vingt mille euros de dommages et intérêts.", en: "The claimant is seeking twenty thousand euros in damages." },
          { es: "Le défendeur conteste la validité du contrat.", en: "The defendant disputes the validity of the contract." },
          { es: "Il a assigné son voisin en justice pour trouble de voisinage.", en: "He sued his neighbour for nuisance." },
          { es: "L'appelant demande l'infirmation du jugement.", en: "The appellant is asking for the judgment to be overturned." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Nadia sues her former landlord to recover her deposit. What is she in the case?",
            options: ["la demanderesse", "la plaignante", "la prévenue", "la partie civile"],
            correctIndex: 0,
            explanation: "A civil claim makes her \"la demanderesse\" (the claimant). \"Plaignante\" and \"partie civile\" belong to criminal cases; \"prévenue\" is a defendant in a criminal court.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She sued her employer for unpaid wages.",
            answer: "Elle a assigné son employeur en justice pour salaires impayés.",
            altAnswers: [
              "Elle a poursuivi son employeur en justice pour salaires impayés.",
              "Elle a attaqué son employeur en justice pour salaires impayés.",
              "Elle a assigné son employeur pour salaires impayés.",
              "Elle a assigné son employeur en justice pour des salaires impayés.",
            ],
            explanation: "\"Assigner quelqu'un en justice\" is the precise verb for starting a civil case; she becomes \"la demanderesse\".",
          },
        ],
      },
      {
        heading: "Le plaignant belongs to criminal cases",
        body: [
          "\"Le plaignant\" is someone who has made a complaint (\"porter plainte\") to the police or the prosecutor about an offence. The word belongs to the criminal side, not to a civil dispute over a fence or an unpaid invoice, where you are a demandeur, not a plaignant. English 'plaintiff' is therefore usually \"demandeur\", not \"plaignant\".",
        ],
        examples: [
          { es: "La plaignante a porté plainte pour harcèlement.", en: "The complainant filed a complaint for harassment." },
          { es: "Elle a porté plainte contre X pour vol.", en: "She filed a complaint against person or persons unknown for theft." },
          { es: "Le demandeur réclame le paiement de la facture.", en: "The claimant is seeking payment of the invoice." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Dans ce litige sur une facture impayée, le plaignant réclame trois mille euros.",
            answer: "Dans ce litige sur une facture impayée, le demandeur réclame trois mille euros.",
            altAnswers: ["Dans ce litige sur une facture impayée, la demanderesse réclame trois mille euros."],
            explanation: "A civil dispute over an invoice has a \"demandeur\"; \"le plaignant\" is someone who filed a criminal complaint.",
          },
        ],
      },
      {
        heading: "La partie civile",
        body: [
          "\"La partie civile\" is the victim who joins a criminal case to obtain damages: \"se constituer partie civile\". This is a distinctively French mechanism: the victim does not need a separate civil lawsuit, and her own lawyer (\"l'avocat de la partie civile\") speaks at the criminal trial alongside the prosecution.",
        ],
        examples: [
          { es: "Les parents de la victime se sont constitués partie civile.", en: "The victim's parents joined the case as civil parties." },
          { es: "L'avocate de la partie civile a demandé une lourde peine.", en: "The civil party's lawyer asked for a heavy sentence." },
          { es: "La victime s'est portée partie civile au procès.", en: "The victim joined the trial as a civil party." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The victim's family joined the case as civil parties.",
            answer: "La famille de la victime s'est constituée partie civile.",
            altAnswers: ["Les proches de la victime se sont constitués partie civile.", "La famille de la victime s'est portée partie civile."],
            explanation: "\"Se constituer partie civile\" (or \"se porter partie civile\"): \"partie civile\" stays singular as a fixed status, the participle agrees with the subject.",
          },
        ],
      },
      {
        heading: "Suspect, garde à vue, mis en examen",
        body: [
          "The person's name changes at each stage of a criminal case, and journalists are careful about it because of \"la présomption d'innocence\". During the police inquiry he is \"un suspect\" and may be held in custody: \"placé en garde à vue\", \"un gardé à vue\". If a juge d'instruction finds serious evidence he is \"mis en examen\". This is the big trap: \"mis en examen\" does not mean examined, and it is not a conviction. It means formally placed under investigation; the old word was \"inculpé\", replaced in 1993 precisely because it sounded like guilt.",
        ],
        examples: [
          { es: "Le suspect a été placé en garde à vue pendant vingt-quatre heures.", en: "The suspect was held in police custody for twenty-four hours." },
          { es: "Mis en examen pour corruption, le maire reste présumé innocent.", en: "Placed under formal investigation for corruption, the mayor is still presumed innocent." },
          { es: "Le gardé à vue a été présenté au juge d'instruction.", en: "The person in custody was brought before the investigating judge." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A headline reads: \"Le directeur de la clinique mis en examen\". What has happened?",
            options: ["He has been formally placed under judicial investigation.", "He has undergone a medical examination.", "He has been convicted.", "He has passed an examination."],
            correctIndex: 0,
            explanation: "\"Mis en examen\" means a juge d'instruction has formally placed him under investigation. He remains presumed innocent.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The former minister has been [placed under formal investigation] for embezzlement.",
            sentence: "L'ancien ministre a été ___ pour détournement de fonds publics.",
            answer: "mis en examen",
            explanation: "\"Mis en examen\": a formal step of the judicial investigation, not a conviction.",
          },
        ],
      },
      {
        heading: "Prévenu or accusé",
        body: [
          "At trial the name depends on the court. Before the tribunal correctionnel (for délits: theft, fraud, assault) he is \"le prévenu\". Before the cour d'assises (for crimes: murder, rape, armed robbery) he is \"l'accusé\". English 'the accused' is therefore often \"le prévenu\", not \"l'accusé\". Only after a final conviction is he \"le condamné\"; if acquitted he is \"relaxé\" (tribunal correctionnel) or \"acquitté\" (cour d'assises).",
        ],
        examples: [
          { es: "Le prévenu a été condamné à six mois de prison avec sursis.", en: "The defendant was given a six-month suspended sentence." },
          { es: "L'accusé a été acquitté par la cour d'assises.", en: "The accused was acquitted by the assize court." },
          { es: "Le tribunal correctionnel a relaxé les deux prévenus.", en: "The criminal court acquitted the two defendants." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which word fits a defendant tried for theft before the tribunal correctionnel?",
            options: ["le prévenu", "l'accusé", "le défendeur", "le plaignant"],
            correctIndex: 0,
            explanation: "\"Le prévenu\" for délits at the tribunal correctionnel; \"l'accusé\" for crimes at the cour d'assises; \"le défendeur\" is the civil defendant.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The defendant was acquitted by the criminal court (tribunal correctionnel).",
            answer: "Le prévenu a été relaxé par le tribunal correctionnel.",
            altAnswers: ["La prévenue a été relaxée par le tribunal correctionnel.", "Le tribunal correctionnel a relaxé le prévenu.", "Le tribunal correctionnel a relaxé la prévenue."],
            explanation: "Before the tribunal correctionnel: \"le prévenu\", and an acquittal is \"une relaxe\" (\"relaxer\"). \"Acquitter\" belongs to the cour d'assises.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[The accused] maintained his innocence until the verdict at the assize court.",
            sentence: "___ a clamé son innocence jusqu'au verdict de la cour d'assises.",
            answer: "L'accusé",
            explanation: "At the cour d'assises, the defendant is \"l'accusé\".",
          },
        ],
      },
      {
        heading: "Writing it precisely",
        body: [
          "So a precise news report reads: \"Mis en examen pour escroquerie en 2023, l'homme comparaît aujourd'hui en tant que prévenu devant le tribunal correctionnel de Nîmes.\" And when a paper wants to protect itself it writes \"le suspect présumé\" or \"l'auteur présumé des faits\".",
        ],
        examples: [
          { es: "L'auteur présumé des faits a pris la fuite.", en: "The alleged perpetrator fled." },
          { es: "Mise en examen pour fraude, la gérante comparaît aujourd'hui.", en: "Placed under investigation for fraud, the manager appears in court today." },
          { es: "Le suspect présumé a été interpellé à la gare.", en: "The alleged suspect was arrested at the station." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The alleged perpetrator is still on the run.",
            answer: "L'auteur présumé des faits est toujours en fuite.",
            altAnswers: ["L'auteur présumé est toujours en fuite.", "L'auteur présumé des faits est encore en fuite.", "L'auteur présumé est encore en fuite."],
            explanation: "\"Présumé\" protects the presumption of innocence; \"l'auteur des faits\" is the standard press phrase for the perpetrator.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a cautious press sentence with présumé.",
            source: "Le voleur a été arrêté à Lyon.",
            answer: "L'auteur présumé du vol a été arrêté à Lyon.",
            altAnswers: ["L'auteur présumé du vol a été interpellé à Lyon.", "Le voleur présumé a été arrêté à Lyon.", "Le voleur présumé a été interpellé à Lyon."],
            explanation: "Until a conviction, a careful paper writes \"l'auteur présumé\" or adds \"présumé\": calling him \"le voleur\" ignores the presumption of innocence.",
          },
        ],
      },
      {
        heading: "Who sits where at the cour d'assises",
        body: [
          "At the cour d'assises, \"le président\" leads the trial, flanked by two other judges (\"les assesseurs\") and six \"jurés\" (jurors drawn by lot from the electoral roll) at first instance. \"L'avocat général\" sits on the prosecution side; \"l'accusé\" sits in \"le box\" with his lawyer below, and \"le greffier\" records everything. \"Les témoins\" are called one by one \"à la barre\" (to the bar, the rail where people stand to speak): \"venir témoigner à la barre\".",
        ],
        examples: [
          { es: "Le président a donné la parole à l'avocat de la partie civile.", en: "The presiding judge gave the floor to the civil party's lawyer." },
          { es: "Six jurés tirés au sort siègent aux côtés des magistrats.", en: "Six jurors drawn by lot sit alongside the judges." },
          { es: "Un témoin oculaire est venu déposer à la barre.", en: "An eyewitness came to give evidence at the bar." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Three eyewitnesses gave evidence at the bar.",
            answer: "Trois témoins oculaires sont venus témoigner à la barre.",
            altAnswers: ["Trois témoins oculaires ont témoigné à la barre.", "Trois témoins oculaires ont déposé à la barre.", "Trois témoins oculaires sont venus déposer à la barre."],
            explanation: "\"Témoigner\" or the more technical \"déposer\" (\"une déposition\"); \"à la barre\" is where witnesses stand.",
          },
        ],
      },
      {
        heading: "Réquisitoire, plaidoirie, dernier mot",
        body: [
          "Each lawyer has a title by the party they represent: \"l'avocat de la défense\" (\"la défense\" as a whole), \"l'avocat de la partie civile\". The prosecutor's speech is \"le réquisitoire\" (he \"requiert\" a sentence); the defence lawyer's is \"la plaidoirie\" (she \"plaide\"). The accused has \"le dernier mot\": by law he speaks last before the court withdraws to deliberate.",
        ],
        examples: [
          { es: "L'avocat général a requis vingt ans de réclusion criminelle.", en: "The prosecutor called for twenty years' imprisonment." },
          { es: "Sa plaidoirie a duré près de deux heures.", en: "Her closing speech lasted almost two hours." },
          { es: "L'accusé a eu le dernier mot avant que la cour ne se retire pour délibérer.", en: "The accused had the last word before the court withdrew to deliberate." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each term to its meaning.",
            pairs: [
              { left: "le réquisitoire", right: "the prosecutor's closing speech" },
              { left: "la plaidoirie", right: "a lawyer's pleading speech" },
              { left: "un témoin à décharge", right: "a witness for the defence" },
              { left: "un juré", right: "a member of the jury" },
              { left: "le box", right: "the dock" },
            ],
            explanation: "\"Réquisitoire\" comes from \"requérir\" (the prosecution requests); \"plaidoirie\" from \"plaider\". \"À charge\" / \"à décharge\" mean against / in favour of the accused.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The defence lawyer's [closing speech] moved the jurors.",
            sentence: "La ___ de l'avocate de la défense a ému les jurés.",
            answer: "plaidoirie",
            explanation: "\"La plaidoirie\" is the lawyer's speech (from \"plaider\"); the prosecutor's is \"le réquisitoire\".",
          },
        ],
      },
      {
        heading: "Kinds of witnesses and the oath",
        body: [
          "Witnesses come in kinds: \"un témoin oculaire\" (eyewitness), \"un témoin à charge\" (for the prosecution) and \"un témoin à décharge\" (for the defence), \"un expert\" (psychiatrist, ballistics, accountant). They swear \"de parler sans haine et sans crainte, de dire toute la vérité, rien que la vérité\": raise the right hand and say \"Je le jure\".",
        ],
        examples: [
          { es: "Un témoin à décharge a confirmé l'alibi.", en: "A defence witness confirmed the alibi." },
          { es: "L'expert psychiatre a été entendu ce matin.", en: "The psychiatric expert was heard this morning." },
          { es: "« Je le jure », a-t-elle déclaré.", en: "I swear, she declared." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The prosecution's witness contradicted himself several times.",
            answer: "Le témoin à charge s'est contredit à plusieurs reprises.",
            altAnswers: ["Le témoin à charge s'est contredit plusieurs fois.", "Le témoin de l'accusation s'est contredit à plusieurs reprises.", "Le témoin de l'accusation s'est contredit plusieurs fois."],
            explanation: "\"Un témoin à charge\" testifies against the defendant (\"à décharge\": for him). \"À plusieurs reprises\" is the polished several times.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The suspect was released at the end of his police custody.",
        answer: "Le suspect a été relâché à l'issue de sa garde à vue.",
        altAnswers: [
          "Le suspect a été remis en liberté à l'issue de sa garde à vue.",
          "Le suspect a été relâché à la fin de sa garde à vue.",
          "Le suspect a été libéré à l'issue de sa garde à vue.",
          "Le suspect a été remis en liberté à la fin de sa garde à vue.",
        ],
        explanation: "\"La garde à vue\" is police custody; \"à l'issue de\" (at the end of) is the journalistic phrase.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change it for a trial at the cour d'assises.",
        source: "Le prévenu a été relaxé.",
        answer: "L'accusé a été acquitté.",
        altAnswers: ["L'accusée a été acquittée."],
        explanation: "At the cour d'assises the defendant is \"l'accusé\" and an acquittal is \"un acquittement\"; \"prévenu\" and \"relaxé\" belong to the tribunal correctionnel.",
      },
      {
        type: "matching",
        instructions: "Match each French term to its meaning.",
        pairs: [
          { left: "le demandeur", right: "the claimant in a civil case" },
          { left: "le défendeur", right: "the defendant in a civil case" },
          { left: "l'intimé", right: "the respondent on appeal" },
          { left: "le plaignant", right: "the person who filed a criminal complaint" },
          { left: "la partie civile", right: "the victim seeking damages in a criminal trial" },
        ],
        explanation: "Civil roles (demandeur, défendeur, appelant, intimé) and criminal ones (plaignant, partie civile, prévenu, accusé) are separate vocabularies.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The civil party's lawyer spoke first.",
        words: ["L'avocat", "de la partie civile", "a pris", "la parole", "en premier."],
        translation: "The civil party's lawyer spoke first.",
        explanation: "Each lawyer is named after the party represented: \"l'avocat de la partie civile\"; \"prendre la parole\" = to speak.",
      },
      {
        type: "listen-choose",
        audio: "Le prévenu a été relaxé au bénéfice du doute.",
        question: "What does it mean?",
        options: [
          "The defendant was acquitted given the benefit of the doubt.",
          "The defendant was released on bail despite the doubts.",
          "The defendant was relaxed about the doubts.",
          "The defendant was convicted despite some doubt.",
        ],
        correctIndex: 0,
        explanation: "\"Relaxé\" is a false friend: it means acquitted by a tribunal correctionnel. \"Au bénéfice du doute\" is the fixed phrase.",
      },
      {
        type: "speak",
        text: "Je jure de parler sans haine et sans crainte, de dire toute la vérité, rien que la vérité.",
        tip: "No liaison or elision before haine: the h is aspirated (sans / haine).",
        explanation: "The witness's oath at the cour d'assises; \"haine\" has an h aspiré, so no liaison after \"sans\".",
      },
    ],
  },
  {
    slug: "c2-legal-french-mastery-check-1",
    level: "FR-C2",
    number: 6,
    title: "Mastery Check: Legal and Administrative French, Part 1 of 2",
    summary: "A demanding check on parties, courts and administrative acts, applied to three new documents: a summons, a municipal order and a contract preamble.",
    duration: "20 min",
    sections: [
      {
        heading: "Document 1: a summons",
        body: [
          "Read this summons, written for this course in the style of a real one: \"Tribunal judiciaire de Grenoble. Convocation. Madame Julie Perrin est convoquée à l'audience du tribunal correctionnel du 18 mars 2027 à 14 heures, salle 3, en qualité de témoin dans l'affaire Ministère public c/ Fabre. La présente convocation vaut citation à comparaître. Le défaut de comparution sans motif légitime expose le témoin à une amende civile pouvant aller jusqu'à 3 750 euros. Le témoin peut prétendre à une indemnité de comparution et au remboursement de ses frais de déplacement sur présentation des justificatifs au greffe.\"",
        ],
        examples: [
          { es: "Madame Perrin est convoquée en qualité de témoin.", en: "Ms Perrin is summoned as a witness." },
          { es: "La présente convocation vaut citation à comparaître.", en: "This notice serves as a summons to appear." },
          { es: "L'affaire Ministère public contre Fabre sera jugée en mars.", en: "The case of the Prosecution versus Fabre will be tried in March." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In this summons, what is M. Fabre?",
            options: ["le prévenu", "le témoin", "le demandeur", "la partie civile"],
            correctIndex: 0,
            explanation: "\"Ministère public c/ Fabre\" before the tribunal correctionnel: the prosecution against Fabre, who is the defendant, \"le prévenu\".",
          },
        ],
      },
      {
        heading: "Decoding the summons",
        body: [
          "Check what you can now decode. \"Ministère public c/ Fabre\" (c/ is \"contre\") tells you it is a criminal case brought by the prosecution against M. Fabre, who is therefore \"le prévenu\". \"En qualité de témoin\" sets Julie Perrin's role. \"Vaut citation à comparaître\" means this letter counts legally as a summons. \"Le défaut de comparution\" is a nominal phrase for if you fail to appear, and \"sans motif légitime\" leaves room for a valid excuse.",
        ],
        examples: [
          { es: "Le défaut de comparution expose le témoin à une amende.", en: "Failure to appear makes the witness liable to a fine." },
          { es: "Ministère public c/ Durand", en: "The Prosecution v. Durand" },
          { es: "Sans motif légitime, l'absence sera sanctionnée.", en: "Without a valid reason, absence will be penalised." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A colleague translates \"Ministère public c/ Fabre\" as 'Public Ministry with Fabre'. What does it really mean?",
            options: ["The Prosecution versus Fabre", "The Ministry of Justice on behalf of Fabre", "The public prosecutor called Fabre", "Fabre against the government"],
            correctIndex: 0,
            explanation: "\"Le ministère public\" is the prosecution (the parquet), and \"c/\" abbreviates \"contre\", the French 'v.'.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into plain French, speaking to the witness as vous.",
            source: "Le défaut de comparution sans motif légitime expose le témoin à une amende.",
            answer: "Si vous ne venez pas sans raison valable, vous risquez une amende.",
            altAnswers: [
              "Si vous ne venez pas sans bonne raison, vous risquez une amende.",
              "Si vous ne venez pas et que vous n'avez pas de bonne raison, vous risquez une amende.",
              "Si vous ne venez pas et que vous n'avez pas de raison valable, vous risquez une amende.",
              "Si vous ne vous présentez pas sans raison valable, vous risquez une amende.",
            ],
            explanation: "\"Le défaut de comparution\" gets a subject and a verb (\"si vous ne venez pas\"); \"sans motif légitime\" becomes \"sans raison valable\"; \"expose à\" becomes \"vous risquez\".",
          },
        ],
      },
      {
        heading: "Prétendre à",
        body: ["Note the verb \"prétendre à\": with \"à\" it means to be entitled to (\"prétendre à une indemnité\"), not to pretend. You will meet \"prétendre\" + que (to claim) in Unit 2."],
        examples: [
          { es: "Le témoin peut prétendre au remboursement de ses frais de déplacement.", en: "The witness is entitled to reimbursement of travel expenses." },
          { es: "Vous pouvez prétendre à une bourse.", en: "You are entitled to a grant." },
          { es: "Il prétend qu'il était absent ce jour-là.", en: "He claims he was away that day." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Tenants on low incomes are entitled to a housing allowance.",
            answer: "Les locataires aux revenus modestes peuvent prétendre à une aide au logement.",
            altAnswers: [
              "Les locataires aux revenus modestes ont droit à une aide au logement.",
              "Les locataires à revenus modestes peuvent prétendre à une aide au logement.",
              "Les locataires aux faibles revenus peuvent prétendre à une aide au logement.",
              "Les locataires aux revenus modestes peuvent prétendre à une allocation logement.",
            ],
            explanation: "\"Prétendre à\" + noun means to be entitled to; \"avoir droit à\" is the everyday version.",
          },
        ],
      },
      {
        heading: "Document 2: an arrêté municipal",
        body: [
          "\"Le Maire de la commune d'Arles, Vu le Code général des collectivités territoriales ; Vu l'arrêté préfectoral du 2 juin 2026 relatif à la prévention des incendies ; Considérant les risques élevés d'incendie liés à la sécheresse ; Considérant qu'il y a lieu de protéger les personnes et les biens ; ARRÊTE : Article 1er : L'accès au massif des Alpilles est interdit à toute personne du 1er juillet au 31 août inclus.\"",
        ],
        examples: [
          { es: "Considérant qu'il y a lieu de protéger les personnes et les biens,", en: "Whereas there are grounds to protect people and property," },
          { es: "L'accès au massif est interdit du 1er juillet au 31 août inclus.", en: "Access to the hills is prohibited from 1 July to 31 August inclusive." },
          { es: "Vu l'arrêté préfectoral du 2 juin 2026,", en: "Having regard to the prefectoral order of 2 June 2026," },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The mayor has issued an order banning access to the beach.",
            answer: "Le maire a pris un arrêté interdisant l'accès à la plage.",
            altAnswers: [
              "La maire a pris un arrêté interdisant l'accès à la plage.",
              "Le maire a pris un arrêté qui interdit l'accès à la plage.",
              "La maire a pris un arrêté qui interdit l'accès à la plage.",
              "Le maire a pris un arrêté portant interdiction d'accès à la plage.",
            ],
            explanation: "\"Prendre un arrêté\"; the present participle \"interdisant\" is typical of administrative summaries.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Swimming is prohibited from 15 June to 15 September inclusive.",
            answer: "La baignade est interdite du 15 juin au 15 septembre inclus.",
            altAnswers: [
              "La baignade est interdite du 15 juin au 15 septembre compris.",
              "La baignade sera interdite du 15 juin au 15 septembre inclus.",
              "La baignade est interdite du 15 juin au 15 septembre inclusivement.",
            ],
            explanation: "\"Du... au... inclus\" sets the exact period; \"la baignade\" is the nominal subject of a ban.",
          },
        ],
      },
      {
        heading: "Exceptions and sanctions",
        body: [
          "\"Article 2 : Par dérogation, l'interdiction ne s'applique pas aux propriétaires, à leurs ayants droit ni aux services de secours. Article 3 : Les infractions au présent arrêté seront constatées par procès-verbal et poursuivies conformément aux lois en vigueur.\" \"Par dérogation\" (by way of exception) introduces the exceptions; the \"ayants droit\" hold a right of access through the owners.",
        ],
        examples: [
          { es: "Par dérogation, l'interdiction ne s'applique pas aux services de secours.", en: "By way of exception, the ban does not apply to the emergency services." },
          { es: "Par dérogation, les véhicules de livraison sont autorisés avant 10 heures.", en: "By way of exception, delivery vehicles are allowed before 10 a.m." },
          { es: "Les contrevenants seront poursuivis conformément aux lois en vigueur.", en: "Offenders will be prosecuted in accordance with the laws in force." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French in the style of an arrêté.",
            source: "By way of exception, the ban does not apply to residents.",
            answer: "Par dérogation, l'interdiction ne s'applique pas aux riverains.",
            altAnswers: [
              "Par dérogation, l'interdiction ne s'applique pas aux résidents.",
              "Par dérogation, l'interdiction n'est pas applicable aux riverains.",
              "Par dérogation, l'interdiction n'est pas applicable aux résidents.",
            ],
            explanation: "\"Par dérogation\" introduces an exception to a rule; \"les riverains\" (people living along a street or river) is the administrative word for local residents.",
          },
        ],
      },
      {
        heading: "Two ways to give reasons",
        body: [
          "Here the reasons are introduced in two ways: \"Considérant\" + noun (\"les risques\") and \"Considérant que\" + clause. \"Il y a lieu de\" means it is necessary to or there are grounds to. \"Par dérogation\" (by way of exception) introduces the exceptions, which is where you meet the \"ayants droit\" again: people who hold a right of access through the owners (family, tenants).",
        ],
        examples: [
          { es: "Considérant la fréquentation exceptionnelle du site,", en: "Whereas the site is exceptionally busy, (noun)" },
          { es: "Considérant que le site est très fréquenté,", en: "Whereas the site is very busy, (clause)" },
          { es: "Il y a lieu de limiter l'accès au parking.", en: "It is necessary to restrict access to the car park." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Whereas [there are grounds to] protect the public,",
            sentence: "Considérant qu'___ protéger le public,",
            answer: "il y a lieu de",
            altAnswers: ["il convient de"],
            explanation: "\"Il y a lieu de\" + infinitive: it is necessary, there are grounds to. \"Il convient de\" is a near-synonym.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Considérant qu'il y a lieu à fermer la route départementale,",
            answer: "Considérant qu'il y a lieu de fermer la route départementale,",
            altAnswers: ["Considérant qu'il convient de fermer la route départementale,"],
            explanation: "\"Il y a lieu de\" + infinitive (there are grounds to); \"avoir lieu\" alone means to take place, and \"à\" is wrong here.",
          },
        ],
      },
      {
        heading: "Le procès-verbal",
        body: ["\"Constater une infraction par procès-verbal\" is to record an offence in an official report: \"un procès-verbal\" (PV) is also the everyday word for a parking ticket (\"j'ai eu un PV\")."],
        examples: [
          { es: "Les infractions seront constatées par procès-verbal.", en: "Offences will be recorded in an official report." },
          { es: "J'ai eu un PV parce que j'étais garé sur une place handicapé.", en: "I got a ticket because I was parked in a disabled space." },
          { es: "L'agent a dressé un procès-verbal.", en: "The officer wrote an official report." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The offence was [recorded in an official report] by the police.",
            sentence: "L'infraction a été ___ par la police.",
            answer: "constatée par procès-verbal",
            explanation: "\"Constater une infraction par procès-verbal\"; \"constatée\" agrees with \"l'infraction\" (feminine).",
          },
        ],
      },
      {
        heading: "Document 3: a contract preamble",
        body: [
          "\"ENTRE LES SOUSSIGNÉS : La société Lumen Conseil, SAS au capital de 50 000 euros, dont le siège social est situé à Nantes, représentée par Mme Agathe Morin en sa qualité de présidente, ci-après dénommée « le Prestataire », d'une part, ET : L'association Les Jardins du Port, association régie par la loi du 1er juillet 1901, représentée par M. Didier Caron, son trésorier, dûment habilité à cet effet, ci-après dénommée « le Client », d'autre part.\"",
        ],
        examples: [
          { es: "La société Lumen Conseil, ci-après dénommée « le Prestataire »,", en: "The company Lumen Conseil, hereinafter referred to as 'the Service Provider'," },
          { es: "M. Caron, trésorier, dûment habilité à cet effet,", en: "Mr Caron, treasurer, duly authorised for this purpose," },
          { es: "Une association régie par la loi du 1er juillet 1901.", en: "A non-profit association governed by the law of 1 July 1901." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Who signs the contract on behalf of the association?",
            options: ["Didier Caron, its treasurer", "Agathe Morin, its president", "the members of the association", "a notaire"],
            correctIndex: 0,
            explanation: "\"Représentée par M. Didier Caron, son trésorier, dûment habilité à cet effet\": the treasurer has been given the power to sign. Agathe Morin signs for the company Lumen Conseil.",
          },
        ],
      },
      {
        heading: "Agreement and authority",
        body: [
          "A few new pieces. \"Ci-après dénommée « le Client »\": \"dénommée\" agrees with \"l'association\", even though the client role sounds masculine. \"Dûment habilité à cet effet\" (duly authorised for this purpose) means the treasurer has the power to sign. \"Une association régie par la loi du 1er juillet 1901\" is the standard identification of a French non-profit association: the famous \"association loi 1901\".",
        ],
        examples: [
          { es: "La fondation, ci-après dénommée « le Bénéficiaire ».", en: "The foundation, hereinafter referred to as 'the Beneficiary'." },
          { es: "Sa directrice, dûment habilitée à cet effet, signe le contrat.", en: "Its director, duly authorised for this purpose, signs the contract." },
          { es: "C'est une association loi 1901.", en: "It is a non-profit association." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "represented by its president, duly authorised for this purpose",
            answer: "représentée par sa présidente, dûment habilitée à cet effet",
            altAnswers: [
              "représentée par son président, dûment habilité à cet effet",
              "représenté par son président, dûment habilité à cet effet",
              "représentée par son président dûment habilité à cet effet",
              "représentée par sa présidente dûment habilitée à cet effet",
            ],
            explanation: "\"Dûment habilité(e) à cet effet\": \"dûment\" keeps the circumflex of \"dû\"; \"habilité\" agrees with the person signing.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a role definition: the association is the Client.",
            source: "L'association Les Amis du Lac, qui est notre cliente,",
            answer: "L'association Les Amis du Lac, ci-après dénommée « le Client »,",
            altAnswers: ["L'association Les Amis du Lac, ci-après désignée « le Client »,"],
            explanation: "\"Ci-après dénommée\" agrees with \"l'association\" (feminine), even though the role \"le Client\" sounds masculine.",
          },
        ],
      },
      {
        heading: "Convenir de with être",
        body: [
          "And a fine point of grammar: \"les parties sont convenues de ce qui suit\". \"Convenir de\" in the sense of to agree on takes \"être\" in careful usage (\"nous sommes convenus d'une date\"), whereas \"convenir à\" (to suit) takes \"avoir\" (\"cette date m'a convenu\"). In everyday speech people say \"on a convenu\", but in a contract \"sont convenues\" is the expected form.",
        ],
        examples: [
          { es: "Nous sommes convenus d'un rendez-vous chez le notaire.", en: "We agreed on an appointment at the notary's." },
          { es: "Cette date m'a parfaitement convenu.", en: "That date suited me perfectly." },
          { es: "Les deux parties sont convenues d'un délai.", en: "The two parties agreed on a deadline." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence follows careful legal usage?",
            options: [
              "Les parties sont convenues d'un prix de 12 000 euros.",
              "Les parties ont convenues d'un prix de 12 000 euros.",
              "Les parties sont convenu d'un prix de 12 000 euros.",
              "Les parties ont convenu à un prix de 12 000 euros.",
            ],
            correctIndex: 0,
            explanation: "\"Convenir de\" (to agree on) takes \"être\" in careful French, so the participle agrees with \"les parties\": \"sont convenues\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Les deux associations ont convenues d'un calendrier.",
            answer: "Les deux associations sont convenues d'un calendrier.",
            altAnswers: ["Les deux associations ont convenu d'un calendrier."],
            explanation: "\"Convenir de\" (to agree on) takes \"être\" in careful usage, so the participle agrees: \"sont convenues\". With \"avoir\" there is no agreement: \"ont convenu\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The investigating judge placed the treasurer under formal investigation.",
        answer: "Le juge d'instruction a mis le trésorier en examen.",
        altAnswers: [
          "Le juge d'instruction a mis en examen le trésorier.",
          "La juge d'instruction a mis le trésorier en examen.",
          "La juge d'instruction a mis en examen le trésorier.",
          "Le trésorier a été mis en examen par le juge d'instruction.",
        ],
        explanation: "\"Mettre quelqu'un en examen\" is what a juge d'instruction does; the object can sit inside or after the phrase.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The case will be tried by the assize court because it is a crime, not a misdemeanour.",
        answer: "L'affaire sera jugée par la cour d'assises parce qu'il s'agit d'un crime, et non d'un délit.",
        altAnswers: [
          "L'affaire sera jugée par la cour d'assises car il s'agit d'un crime, et non d'un délit.",
          "L'affaire sera jugée devant la cour d'assises parce qu'il s'agit d'un crime et non d'un délit.",
          "L'affaire sera jugée par la cour d'assises parce que c'est un crime, pas un délit.",
          "L'affaire sera jugée devant la cour d'assises car il s'agit d'un crime et non d'un délit.",
        ],
        explanation: "French law classes offences as \"contraventions\", \"délits\" and \"crimes\": only crimes go to the cour d'assises. \"Il s'agit de\" is the formal it is.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: This letter serves as a formal notice.",
        words: ["La présente", "lettre", "vaut", "mise en demeure."],
        translation: "This letter serves as a formal notice.",
        explanation: "\"La présente\" + noun is the legal this; \"valoir\" means to count as, to have the force of.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "An association [governed by] the 1901 law cannot distribute profits to its members.",
        sentence: "Une association ___ la loi de 1901 ne peut pas distribuer de bénéfices à ses membres.",
        answer: "régie par",
        explanation: "\"Régie par\" (governed by, from \"régir\") agrees with \"association\"; after a negation \"des bénéfices\" becomes \"de bénéfices\".",
      },
      {
        type: "listen-choose",
        audio: "Le défaut de comparution expose le témoin à une amende civile.",
        question: "What does it mean?",
        options: [
          "A witness who fails to appear can be fined.",
          "The witness's appearance exposes a defect in the case.",
          "The witness must pay a fine before appearing.",
          "The defendant will be fined if the witness doesn't come.",
        ],
        correctIndex: 0,
        explanation: "\"Le défaut de\" + noun means the failure to; \"exposer à\" means to make liable to.",
      },
      {
        type: "speak",
        text: "Monsieur le Président, je souhaiterais apporter une précision.",
        prompt: "Say it in French to the presiding judge: Your Honour, I would like to clarify something.",
        explanation: "A judge presiding over the hearing is addressed as \"Monsieur le Président\" or \"Madame la Présidente\"; never 'Your Honour' translated literally.",
      },
    ],
  },
  {
    slug: "c2-contrast-jugement-arret-ordonnance",
    level: "FR-C2",
    number: 7,
    title: "Contrast Clinic: Jugement, Arrêt, Ordonnance, Décision",
    summary: "Words a layperson uses as synonyms and a lawyer keeps apart: un jugement, un arrêt, une ordonnance, une décision, un verdict, and their verbs (rendre, prononcer, casser, interjeter appel).",
    duration: "17 min",
    sections: [
      {
        heading: "Tribunal gives a jugement, cour gives an arrêt",
        body: [
          "In everyday French, any court decision is \"un jugement\". In legal French the name depends on who decides. A first-instance court (\"tribunal judiciaire\", \"tribunal correctionnel\", \"tribunal de commerce\", \"tribunal administratif\") gives \"un jugement\". A higher court, whose name begins with \"Cour\" or \"Conseil\" (\"cour d'appel\", \"Cour de cassation\", \"cour d'assises\", \"Conseil d'État\"), gives \"un arrêt\". The rule of thumb: tribunal → jugement, cour → arrêt.",
        ],
        examples: [
          { es: "Le tribunal de commerce a rendu son jugement hier.", en: "The commercial court gave its judgment yesterday." },
          { es: "La cour d'appel de Versailles a rendu un arrêt défavorable.", en: "The Versailles court of appeal handed down an unfavourable ruling." },
          { es: "Le jugement du tribunal administratif a été confirmé en appel.", en: "The administrative court's judgment was upheld on appeal." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "After a full hearing, the Conseil d'État has just ruled on a dispute over a planning permit. In traditional legal terminology, what is its decision called?",
            options: ["un arrêt", "un jugement", "un verdict", "un arrêté"],
            correctIndex: 0,
            explanation: "A body called \"Cour\" or \"Conseil\" gives \"un arrêt\" (the Conseil d'État itself now often says \"une décision\"). \"Un arrêté\" is an administrative order and \"un verdict\" belongs to the cour d'assises. In urgent proceedings a single judge of the Conseil d'État issues \"une ordonnance\", which you'll see next.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[The judgment] of the Lille administrative court was published today.",
            sentence: "___ du tribunal administratif de Lille a été publié aujourd'hui.",
            answer: "Le jugement",
            altAnswers: ["La décision"],
            explanation: "A \"tribunal\" (here the \"tribunal administratif\") gives \"un jugement\"; only a \"cour\" or a \"Conseil\" gives \"un arrêt\". The masculine \"publié\" also fits \"le jugement\".",
          },
        ],
      },
      {
        heading: "Landmark arrêts; rendre and prononcer",
        body: [
          "So \"le jugement du tribunal de Nanterre\" but \"l'arrêt de la cour d'appel de Versailles\". A journalist who writes \"le jugement de la Cour de cassation\" is understood, but a law student would lose marks. Some arrêts are so important they have names: \"l'arrêt Blanco\" (1873), founding French administrative law, or \"un arrêt de principe\" (a landmark ruling).",
          "Both are \"rendus\": \"rendre un jugement\", \"rendre un arrêt\". \"Prononcer\" is also used, especially when the decision is read out at a hearing (\"l'arrêt a été prononcé en audience publique\") and with sentences (\"prononcer une peine\", \"prononcer le divorce\").",
        ],
        examples: [
          { es: "Cet arrêt de principe a fait jurisprudence.", en: "This landmark ruling set a precedent." },
          { es: "L'arrêt a été prononcé en audience publique.", en: "The ruling was delivered in open court." },
          { es: "Le juge a prononcé le divorce aux torts partagés.", en: "The judge granted the divorce on the grounds of shared fault." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The criminal court has sentenced the defendant to two years in prison. Which verb does French use with \"une peine\"?",
            options: ["Le tribunal a prononcé une peine de deux ans.", "Le tribunal a rendu une peine de deux ans.", "Le tribunal a cassé une peine de deux ans.", "Le tribunal a interjeté une peine de deux ans."],
            correctIndex: 0,
            explanation: "A sentence is \"prononcée\" (like \"prononcer le divorce\"); \"rendre\" goes with the decision itself (\"rendre un jugement\"), not with the sentence. \"Casser\" is what the Cour de cassation does to an arrêt, and one \"interjette appel\", nothing else.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The court of appeal handed down its ruling this morning.",
            answer: "La cour d'appel a rendu son arrêt ce matin.",
            altAnswers: ["La cour d'appel a prononcé son arrêt ce matin.", "La cour d'appel a rendu sa décision ce matin."],
            explanation: "A cour d'appel gives \"un arrêt\" (no é), and the verb is \"rendre\" or \"prononcer\".",
          },
        ],
      },
      {
        heading: "Une ordonnance: one judge, and two other meanings",
        body: [
          "\"Une ordonnance\" is a decision by a single judge rather than a panel: \"une ordonnance de référé\" (an urgent interim order, from the \"juge des référés\"), \"une ordonnance de non-lieu\" (the juge d'instruction drops the case: no trial), \"une ordonnance de protection\" (a protective order in cases of domestic violence). The same word also names a government act with the force of law (\"les ordonnances Macron\" on labour law) and the doctor's prescription. Context always tells you which.",
        ],
        examples: [
          { es: "Le juge des référés a rendu une ordonnance en quarante-huit heures.", en: "The interim relief judge issued an order within forty-eight hours." },
          { es: "Le juge d'instruction a rendu une ordonnance de non-lieu.", en: "The investigating judge dismissed the case." },
          { es: "Elle a obtenu une ordonnance de protection contre son ex-conjoint.", en: "She obtained a protective order against her ex-partner." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your friend says: « Le médecin m'a fait une ordonnance pour des antibiotiques. » What is \"une ordonnance\" here?",
            options: ["a prescription", "a court order", "a government decree", "a summons to court"],
            correctIndex: 0,
            explanation: "\"Ordonnance\" has three lives: a single judge's order, a government act with the force of law, and the doctor's prescription. \"Le médecin\" and \"antibiotiques\" make the context unmistakable.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The investigating judge closed the file with a non-suit order: there will be no trial.",
            answer: "Le juge d'instruction a rendu une ordonnance de non-lieu : il n'y aura pas de procès.",
            altAnswers: ["La juge d'instruction a rendu une ordonnance de non-lieu : il n'y aura pas de procès.", "Le juge d'instruction a rendu une ordonnance de non-lieu : il n'y aura donc pas de procès.", "Le juge d'instruction a rendu une ordonnance de non-lieu, il n'y aura pas de procès.", "Le juge d'instruction a prononcé un non-lieu : il n'y aura pas de procès.", "La juge d'instruction a prononcé un non-lieu : il n'y aura pas de procès."],
            explanation: "When there is not enough evidence, the juge d'instruction, a single judge, issues \"une ordonnance de non-lieu\": there will be no trial. \"Ordonnance\" because one judge decides, not a panel.",
          },
        ],
      },
      {
        heading: "Une décision: the word that is never wrong",
        body: [
          "\"Une décision\" is the neutral umbrella term, correct for any of the above, and it is the official name for what some bodies issue: \"une décision du Conseil constitutionnel\", \"une décision de la CNIL\". When in doubt, \"décision\" is never wrong, just less precise.",
        ],
        examples: [
          { es: "Le Conseil constitutionnel a rendu sa décision vendredi.", en: "The Constitutional Council delivered its decision on Friday." },
          { es: "La décision de la CNIL a été rendue publique hier.", en: "The CNIL's decision was made public yesterday." },
          { es: "Le tribunal a rendu sa décision : la demande est rejetée.", en: "The court gave its decision: the claim is dismissed." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You are writing about a ruling but don't know whether a tribunal, a cour or a single judge gave it. Which word is safe?",
            options: ["une décision", "un arrêt", "un verdict", "une ordonnance"],
            correctIndex: 0,
            explanation: "\"Une décision\" is the neutral umbrella term, correct for a jugement, an arrêt or an ordonnance: never wrong, just less precise. The other three each belong to one kind of body.",
          },
        ],
      },
      {
        heading: "Un verdict belongs to the cour d'assises",
        body: [
          "\"Un verdict\" strictly belongs to the cour d'assises: it is the answer the court and jury give to the questions of guilt. The press uses it loosely for any judgment (\"le verdict est tombé\"), and in figurative use for any final judgement (\"le verdict des urnes\", the voters' verdict). In a legal text, reserve it for the assises.",
        ],
        examples: [
          { es: "Après six heures de délibéré, le verdict est tombé : quinze ans de réclusion.", en: "After six hours of deliberation, the verdict came in: fifteen years' imprisonment." },
          { es: "Le verdict des urnes est sans appel.", en: "The voters' verdict is final." },
          { es: "Le verdict de la cour d'assises sera rendu dans la soirée.", en: "The assize court's verdict will be delivered this evening." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which use of \"verdict\" is the most precise in legal terms?",
            options: ["Le verdict de la cour d'assises sera connu ce soir.", "Le verdict du tribunal de commerce est attendu demain.", "Le verdict du juge des référés a surpris l'entreprise.", "Le verdict du Conseil d'État a été publié."],
            correctIndex: 0,
            explanation: "Strictly, a verdict is what the cour d'assises (judges and jury) returns. The others give \"un jugement\", \"une ordonnance\" or \"un arrêt\".",
          },
        ],
      },
      {
        heading: "Appealing a jugement: confirmer or infirmer",
        body: [
          "A losing party \"fait appel\" (formal: \"interjette appel\") against a jugement, within a deadline (\"le délai d'appel\", often one month in civil cases, ten days in criminal ones). The cour d'appel then \"confirme\" the jugement (upholds it) or \"l'infirme\" (overturns it, wholly or partly). Note \"infirmer\": to invalidate, nothing to do with being infirm.",
        ],
        examples: [
          { es: "L'entreprise a décidé d'interjeter appel du jugement.", en: "The company decided to appeal against the judgment." },
          { es: "La cour d'appel a infirmé le jugement de première instance.", en: "The court of appeal overturned the first-instance judgment." },
          { es: "Elle a interjeté appel dans le délai d'un mois.", en: "She lodged an appeal within the one-month deadline." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The court of appeal [overturned] the judgment.",
            sentence: "La cour d'appel a ___ le jugement.",
            answer: "infirmé",
            explanation: "\"Infirmer\" (to overturn on appeal) is the opposite of \"confirmer\". The Cour de cassation does not infirm: it \"casse\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it so that the first judgment stands.",
            source: "La cour d'appel de Rennes a infirmé le jugement du tribunal de commerce.",
            answer: "La cour d'appel de Rennes a confirmé le jugement du tribunal de commerce.",
            explanation: "To uphold a judgment is \"confirmer\"; \"infirmer\" means to overturn it (nothing to do with being infirm). Only the verb changes: the cour d'appel still rules on a \"jugement\".",
          },
        ],
      },
      {
        heading: "Against an arrêt: the pourvoi en cassation",
        body: [
          "Against an arrêt of a cour d'appel, the only path is \"se pourvoir en cassation\" or \"former un pourvoi en cassation\". The Cour de cassation either \"rejette le pourvoi\" (the arrêt stands) or \"casse l'arrêt\" (quashes it) and usually \"renvoie l'affaire\" to another cour d'appel to judge again: \"casse et annule... et renvoie devant la cour d'appel de...\". Once no appeal is possible the decision is \"définitive\": it has \"force de chose jugée\".",
        ],
        examples: [
          { es: "Il s'est pourvu en cassation contre l'arrêt de la cour d'appel.", en: "He appealed to the Court of Cassation against the court of appeal's ruling." },
          { es: "La Cour de cassation a rejeté le pourvoi.", en: "The Court of Cassation dismissed the appeal." },
          { es: "La Cour casse et annule l'arrêt, et renvoie l'affaire devant la cour d'appel de Lyon.", en: "The Court quashes and annuls the ruling and sends the case back to the Lyon court of appeal." },
          { es: "La décision est désormais définitive.", en: "The decision is now final." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She has decided to appeal to the Court of Cassation.",
            answer: "Elle a décidé de se pourvoir en cassation.",
            altAnswers: ["Elle a décidé de former un pourvoi en cassation.", "Elle a décidé de se pourvoir devant la Cour de cassation.", "Elle a décidé de former un pourvoi devant la Cour de cassation."],
            explanation: "Against an arrêt of a cour d'appel, one \"se pourvoit en cassation\" (\"former un pourvoi\"), never \"fait appel\".",
          },
          {
            type: "listen-choose",
            audio: "Le pourvoi a été rejeté : l'arrêt est définitif.",
            question: "What does it mean?",
            options: ["The appeal to the Court of Cassation was dismissed: the ruling is final.", "The appeal was accepted: the ruling is cancelled.", "The supplies were rejected: the order is final.", "The ruling was rejected and will be reconsidered."],
            correctIndex: 0,
            explanation: "\"Le pourvoi\" is the appeal to the Cour de cassation; when it is rejected, the arrêt becomes \"définitif\".",
          },
        ],
      },
      {
        heading: "Don't « faire appel à » the Cour de cassation",
        body: [
          "Keep the verbs and their objects together: one appeals a jugement but makes a pourvoi against an arrêt; the cour d'appel infirms, the Cour de cassation casse. English 'appeal' covers both stages, which is why English speakers say \"*faire appel à la Cour de cassation*\" (and \"faire appel à\" actually means to call on, to appeal to someone: \"faire appel à un expert\").",
        ],
        examples: [
          { es: "Nous avons fait appel à un avocat spécialisé.", en: "We called on a specialist lawyer." },
          { es: "Le salarié a fait appel du jugement des prud'hommes.", en: "The employee appealed against the employment tribunal's judgment." },
          { es: "La société s'est pourvue en cassation contre l'arrêt.", en: "The company appealed to the Court of Cassation against the ruling." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Le syndicat a fait appel à la Cour de cassation contre l'arrêt.",
            answer: "Le syndicat s'est pourvu en cassation contre l'arrêt.",
            altAnswers: ["Le syndicat a formé un pourvoi en cassation contre l'arrêt.", "Le syndicat s'est pourvu en cassation contre cet arrêt."],
            explanation: "Against an arrêt the path is \"se pourvoir en cassation\" (or \"former un pourvoi en cassation\"). \"Faire appel à\" means to call on someone, and one \"fait appel\" only against a jugement, before the cour d'appel.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The employment tribunal gave its judgment in March.",
        answer: "Le conseil de prud'hommes a rendu son jugement en mars.",
        altAnswers: ["Les prud'hommes ont rendu leur jugement en mars.", "Le conseil de prud'hommes a rendu sa décision en mars.", "Le conseil de prud'hommes a prononcé son jugement en mars."],
        explanation: "A first-instance body gives \"un jugement\", which it \"rend\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The Court of Cassation quashed the ruling and sent the case back to the Lyon court of appeal.",
        answer: "La Cour de cassation a cassé l'arrêt et renvoyé l'affaire devant la cour d'appel de Lyon.",
        altAnswers: ["La Cour de cassation a cassé l'arrêt et a renvoyé l'affaire devant la cour d'appel de Lyon.", "La Cour de cassation a annulé l'arrêt et renvoyé l'affaire devant la cour d'appel de Lyon.", "La Cour de cassation a cassé l'arrêt et renvoyé l'affaire à la cour d'appel de Lyon."],
        explanation: "\"Casser un arrêt\" and \"renvoyer l'affaire devant\" another court: the standard sequence of a cassation.",
      },
      {
        type: "multiple-choice",
        question: "Your neighbour says: \"J'ai fait appel à la Cour de cassation.\" What would a lawyer say instead?",
        options: ["Je me suis pourvu en cassation.", "J'ai interjeté appel à la Cour de cassation.", "J'ai infirmé l'arrêt en cassation.", "J'ai cassé l'appel."],
        correctIndex: 0,
        explanation: "The Cour de cassation is reached by \"un pourvoi\": \"se pourvoir en cassation\". \"Faire appel à\" means to call on someone.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "She obtained [an interim order] within two days.",
        sentence: "Elle a obtenu ___ en deux jours.",
        answer: "une ordonnance de référé",
        explanation: "The urgent procedure before a single judge, \"le référé\", ends in \"une ordonnance de référé\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The losing party has one month to appeal.",
        answer: "La partie perdante dispose d'un mois pour faire appel.",
        altAnswers: ["La partie perdante a un mois pour faire appel.", "La partie perdante dispose d'un délai d'un mois pour faire appel.", "La partie perdante dispose d'un mois pour interjeter appel.", "La partie perdante a un mois pour interjeter appel."],
        explanation: "\"Disposer de\" a deadline is the precise verb; \"faire appel\" or the formal \"interjeter appel\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The Bordeaux court of appeal partly overturned the employment tribunal's judgment.",
        answer: "La cour d'appel de Bordeaux a partiellement infirmé le jugement du conseil de prud'hommes.",
        altAnswers: ["La cour d'appel de Bordeaux a infirmé en partie le jugement du conseil de prud'hommes.", "La cour d'appel de Bordeaux a partiellement infirmé le jugement des prud'hommes.", "La cour d'appel de Bordeaux a infirmé en partie le jugement des prud'hommes."],
        explanation: "To overturn is \"infirmer\" (its opposite, to uphold, is \"confirmer\"), and it can be partial: \"infirmer partiellement\" or \"en partie\". The conseil de prud'hommes is a first-instance court, so it gave \"un jugement\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Le tribunal correctionnel a rendu son arrêt hier soir.",
        answer: "Le tribunal correctionnel a rendu son jugement hier soir.",
        altAnswers: ["Le tribunal correctionnel a rendu sa décision hier soir.", "Le tribunal correctionnel a prononcé son jugement hier soir."],
        explanation: "A \"tribunal\" gives \"un jugement\"; \"un arrêt\" comes from a court called \"Cour\" or \"Conseil\". \"Sa décision\" is also correct, just less precise.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change « le tribunal judiciaire de Lille » to « la cour d'appel de Douai ».",
        source: "Le tribunal judiciaire de Lille a rendu son jugement le 3 mai.",
        answer: "La cour d'appel de Douai a rendu son arrêt le 3 mai.",
        altAnswers: ["La cour d'appel de Douai a rendu sa décision le 3 mai.", "La cour d'appel de Douai a prononcé son arrêt le 3 mai."],
        explanation: "Change the court and the name of the decision changes with it: tribunal → jugement, cour → arrêt.",
      },
      {
        type: "matching",
        instructions: "Match each decision to the body that gives it.",
        pairs: [
          { left: "un jugement", right: "a first-instance court (tribunal)" },
          { left: "un arrêt", right: "a cour d'appel, the Cour de cassation or the Conseil d'État" },
          { left: "une ordonnance de non-lieu", right: "an investigating judge closing the case" },
          { left: "un verdict", right: "the cour d'assises with its jury" },
        ],
        explanation: "Tribunal → jugement; cour or conseil → arrêt; a single judge → ordonnance; the assises → verdict.",
      },
      {
        type: "dictation",
        audio: "La chambre sociale de la Cour de cassation a rejeté le pourvoi de l'employeur.",
        explanation: "\"Rejeter le pourvoi\": the Cour de cassation (here its labour-law chamber, \"la chambre sociale\") refuses the appeal, so the arrêt of the cour d'appel stands.",
      },
      {
        type: "speak",
        prompt: "Say it in French, as a lawyer: We are going to appeal against this judgment.",
        text: "Nous allons interjeter appel de ce jugement.",
        tip: "Interjeter: in-ter-je-té, the j soft as in je.",
        explanation: "\"Interjeter appel de\" + the decision is the formal lawyer's phrase; \"faire appel de\" is the everyday one.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "After two appeals, the decision is now final.",
        answer: "Après deux recours, la décision est désormais définitive.",
        altAnswers: ["Après deux recours, la décision est maintenant définitive.", "Après un appel et un pourvoi, la décision est désormais définitive.", "Après deux recours, la décision est désormais irrévocable."],
        explanation: "\"Définitive\" (final) when no further appeal is possible; \"recours\" covers both appel and pourvoi. 'Final' is not \"finale\" here.",
      },
    ],
  },
  {
    slug: "c2-mission-courrier-mairie",
    level: "FR-C2",
    number: 8,
    title: "Real-World Mission: Écrire à la Mairie",
    summary: "Write the formal letter that accompanies a déclaration préalable de travaux: objet, references, je soussigné(e)... ai l'honneur de, justification, pièces jointes and the full closing formula to Madame la Maire.",
    duration: "19 min",
    sections: [
      {
        heading: "Your mission: a letter to the mairie",
        body: [
          "Your mission: you live in Tours, in a house near a listed building, and you want to replace a wooden window with a larger one and put up a fence. Small works like these do not need a full building permit but a \"déclaration préalable de travaux\" (DP), filed at the mairie on an official form (a \"formulaire Cerfa\"). Because your house is in a protected area, the service d'urbanisme has asked you to add a letter explaining the project. That letter is what you write here.",
        ],
        examples: [
          { es: "Les petits travaux sont soumis à une déclaration préalable.", en: "Small works require a prior declaration." },
          { es: "Le formulaire Cerfa est à déposer en mairie.", en: "The official form must be filed at the town hall." },
          { es: "Le service d'urbanisme demande une lettre explicative.", en: "The planning department asks for an explanatory letter." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You want to build a small garden shed next to your house in a protected area. What do you file at the mairie?",
            options: ["une déclaration préalable de travaux", "une mise en demeure", "une ordonnance de référé", "un acte de vente"],
            correctIndex: 0,
            explanation: "Small works that don't need a full building permit go through \"une déclaration préalable de travaux\", filed on a Cerfa form. A mise en demeure is a formal demand to someone who owes you, an ordonnance de référé is an urgent court order, and an acte de vente records a sale.",
          },
        ],
      },
      {
        heading: "The layout, top to bottom",
        body: [
          "A French formal letter has a fixed layout. Top left: your name and address. Below it, on the right: the recipient's title and address (\"Madame la Maire, Hôtel de Ville, 37000 Tours\"). Then place and date: \"Tours, le 5 avril 2026\". Then, aligned left, \"Objet :\" (subject, a short nominal phrase), \"Réf. :\" (any file number they gave you) and \"P.J. :\" or \"Pièces jointes :\" (enclosures).",
        ],
        examples: [
          { es: "Objet : déclaration préalable de travaux, remplacement d'une fenêtre et pose d'une clôture", en: "Re: prior declaration of works, replacing a window and installing a fence" },
          { es: "Réf. : dossier DP 037 261 26 00042", en: "Ref.: file DP 037 261 26 00042" },
          { es: "Pièces jointes : formulaire Cerfa, plan de situation, photographies", en: "Enclosures: official form, location plan, photographs" },
          { es: "Tours, le 5 avril 2026", en: "Tours, 5 April 2026" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In the layout of a French formal letter, what comes straight after the place and date?",
            options: ["Objet : ...", "Madame la Maire,", "Je soussignée, ...", "Je vous prie d'agréer, ..."],
            correctIndex: 0,
            explanation: "The order is fixed: your details, the recipient's title and address, place and date, then the \"Objet :\" line (with \"Réf. :\" and \"Pièces jointes :\"). Only then the form of address, the body and the closing formula.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French as the subject line of a formal letter.",
            source: "Re: request for authorisation to install a fence",
            answer: "Objet : demande d'autorisation pour l'installation d'une clôture",
            altAnswers: ["Objet : demande d'autorisation d'installation d'une clôture", "Objet : demande d'autorisation pour la pose d'une clôture", "Objet : demande d'autorisation de pose d'une clôture", "Objet : demande d'autorisation pour installer une clôture"],
            explanation: "\"Objet :\" followed by a nominal phrase: \"demande d'autorisation\", \"installation\" or \"pose\" (the professional word for putting something up).",
          },
        ],
      },
      {
        heading: "Addressing her: Madame la Maire",
        body: [
          "The form of address. Since the 2019 opinion of the Académie française, feminine titles are standard: \"Madame la Maire\", \"Madame la Préfète\", \"Madame la Directrice\". \"Madame le Maire\" is still used by some (and by some mayors themselves), so if her own letterhead says \"Madame le Maire\", follow it. What you must not do is write \"Madame\" alone, or \"Chère Madame\": the title is part of the address.",
        ],
        examples: [
          { es: "Madame la Maire, Hôtel de Ville, 37000 Tours", en: "The Mayor, Town Hall, 37000 Tours" },
          { es: "Madame la Maire,", en: "Dear Madam Mayor," },
          { es: "Madame la Préfète,", en: "Dear Madam Prefect," },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How do you open the letter to the (female) mayor of Tours?",
            options: ["Madame la Maire,", "Chère Madame la Maire,", "Madame,", "Bonjour Madame la Maire,"],
            correctIndex: 0,
            explanation: "The title alone, followed by a comma: \"Madame la Maire,\". \"Chère\" is for people you know personally; \"Bonjour\" belongs in emails.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Chère Madame la Directrice,",
            answer: "Madame la Directrice,",
            explanation: "In a formal letter the title is the whole address: \"Madame la Directrice,\" with no \"Chère\". \"Chère Madame\" belongs to warmer letters, and \"Madame\" alone would drop the title.",
          },
        ],
      },
      {
        heading: "Opening and describing the works",
        body: [
          "Open with the frozen formula: \"Je soussignée, Émilie Rousseau, demeurant 22, rue Colbert à Tours, ai l'honneur de vous adresser une déclaration préalable de travaux concernant...\" or \"...ai l'honneur de solliciter votre autorisation pour...\". Then describe the works precisely and in nominal style: \"le remplacement de la fenêtre du rez-de-chaussée donnant sur la rue\", \"la pose d'une clôture en bois d'une hauteur d'un mètre quarante\".",
        ],
        examples: [
          { es: "Je soussignée, Émilie Rousseau, ai l'honneur de vous adresser une déclaration préalable de travaux.", en: "I, Emilie Rousseau, hereby submit a prior declaration of works." },
          { es: "Les travaux portent sur le remplacement de la fenêtre donnant sur la rue.", en: "The works concern the replacement of the window overlooking the street." },
          { es: "Les travaux portent sur la réfection de la toiture.", en: "The works concern the repair of the roof." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French in the formal register of the letter.",
            source: "I, the undersigned Émilie Rousseau, hereby request your authorisation to replace a window.",
            answer: "Je soussignée, Émilie Rousseau, ai l'honneur de solliciter votre autorisation pour remplacer une fenêtre.",
            altAnswers: ["Je soussignée, Émilie Rousseau, ai l'honneur de solliciter votre autorisation pour le remplacement d'une fenêtre.", "Je soussignée Émilie Rousseau ai l'honneur de solliciter votre autorisation pour remplacer une fenêtre.", "Je soussignée, Émilie Rousseau, ai l'honneur de solliciter l'autorisation de remplacer une fenêtre.", "Je soussignée, Émilie Rousseau, sollicite votre autorisation pour remplacer une fenêtre."],
            explanation: "\"Je soussignée\" (feminine), then the verb agreeing with \"je\": \"ai l'honneur de solliciter\". No \"j'\" because \"je\" is separated from \"ai\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[The works concern] the repair of the garden wall.",
            sentence: "___ la réfection du mur du jardin.",
            answer: "Les travaux portent sur",
            altAnswers: ["Les travaux concernent"],
            explanation: "\"Porter sur\" (to concern, to bear on) introduces the works in nominal style: \"les travaux portent sur la réfection de...\" rather than a verb like \"je vais réparer\".",
          },
        ],
      },
      {
        heading: "Justifying: the future, and ledit / ladite",
        body: [
          "Then justify, especially in a protected area: show you have thought about the rules. \"Les menuiseries seront en bois peint, dans le respect du caractère de l'immeuble\". \"La clôture reprendra les teintes des façades voisines.\" Use the future for commitments, and \"ledit\" / \"ladite\" when you refer back to something you have just described: \"ladite clôture sera implantée en retrait de cinquante centimètres\".",
        ],
        examples: [
          { es: "Les menuiseries seront en bois peint, dans le respect du caractère de l'immeuble.", en: "The frames will be in painted wood, in keeping with the character of the building." },
          { es: "Ladite clôture sera implantée en retrait de cinquante centimètres.", en: "The said fence will be set back fifty centimetres." },
          { es: "Ledit portail sera peint en vert foncé.", en: "The said gate will be painted dark green." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[The said] window will be in painted wood.",
            sentence: "___ fenêtre sera en bois peint.",
            answer: "Ladite",
            explanation: "\"Ladite\" (one word) refers back to the window just mentioned; masculine \"ledit\", plural \"lesdits / lesdites\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change « la clôture » to « le portail ».",
            source: "Ladite clôture sera doublée d'une haie.",
            answer: "Ledit portail sera doublé d'une haie.",
            explanation: "\"Ledit / ladite\" agrees with the noun it refers back to: masculine \"le portail\" gives \"ledit\", and the participle follows: \"doublé\". The future \"sera\" states a commitment.",
          },
        ],
      },
      {
        heading: "Enclosures, and when ci-joint agrees",
        body: [
          "Finally, state what you enclose and offer to provide more: \"Vous trouverez ci-joint le formulaire Cerfa dûment complété, accompagné d'un plan de situation et de photographies de l'existant.\" \"Je me tiens à la disposition de vos services pour tout complément d'information.\" Remember the agreement rule for \"ci-joint\": invariable at the start of a sentence or before a noun without article (\"Vous trouverez ci-joint copie de...\"), variable after the noun (\"les photographies ci-jointes\").",
        ],
        examples: [
          { es: "Vous trouverez ci-joint le formulaire dûment complété.", en: "Please find enclosed the duly completed form." },
          { es: "Je me tiens à la disposition de vos services pour tout complément d'information.", en: "I remain at your departments' disposal for any further information." },
          { es: "Vous trouverez ci-joint copie de mon titre de propriété.", en: "Please find enclosed a copy of my title deed." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence uses \"ci-joint\" correctly?",
            options: ["Veuillez trouver ci-jointes les photographies de la façade.", "Les photographies ci-joint montrent la façade.", "Ci-jointes les photographies de la façade.", "Veuillez trouver ci-jointe copie du plan."],
            correctIndex: 0,
            explanation: "After \"trouver\", \"ci-joint\" may agree with the noun that follows when it has an article (\"ci-jointes les photographies\"). After the noun it must agree (\"les photographies ci-jointes\"), and at the head of a sentence or before a noun without article it stays invariable (\"Ci-joint les photographies\", \"ci-joint copie\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it plural.",
            source: "Le document ci-joint précise les dimensions.",
            answer: "Les documents ci-joints précisent les dimensions.",
            explanation: "After the noun, \"ci-joint\" agrees like an adjective: \"les documents ci-joints\". The verb follows the plural subject: \"précisent\".",
          },
        ],
      },
      {
        heading: "The closing formula repeats the address",
        body: [
          "Before the formula you may add a transition: \"Dans l'attente de votre réponse,\" or \"En vous remerciant par avance de l'attention que vous porterez à ma demande,\". Then the formula itself, which must repeat the form of address exactly as in the opening: \"je vous prie d'agréer, Madame la Maire, l'expression de ma considération distinguée.\" Variants: \"Veuillez agréer, Madame la Maire, l'expression de mes salutations distinguées\", or, for a deeper bow, \"l'expression de ma haute considération\" or \"de mes sentiments respectueux\".",
        ],
        examples: [
          { es: "Dans l'attente de votre réponse, je vous prie d'agréer, Madame la Maire, l'expression de ma considération distinguée.", en: "Awaiting your reply, I remain, Madam Mayor, yours faithfully." },
          { es: "En vous remerciant par avance de l'attention que vous porterez à ma demande,", en: "Thanking you in advance for the attention you will give my request," },
          { es: "Veuillez agréer, Monsieur le Maire, l'expression de mes salutations distinguées.", en: "Yours faithfully, Mr Mayor." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your letter opened with « Monsieur le Préfet, ». Which close is right?",
            options: ["Je vous prie d'agréer, Monsieur le Préfet, l'expression de ma haute considération.", "Je vous prie d'agréer, Monsieur, l'expression de ma haute considération.", "Je vous prie d'agréer, Cher Préfet, l'expression de ma haute considération.", "Cordialement, Monsieur le Préfet."],
            correctIndex: 0,
            explanation: "The formula repeats the form of address exactly as in the opening: \"Monsieur le Préfet\". Plain \"Monsieur\" drops the title, \"Cher Préfet\" is not a French form of address, and \"Cordialement\" is for emails.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French as the closing formula of the letter.",
            source: "Yours faithfully (to the female mayor, with distinguished consideration).",
            answer: "Je vous prie d'agréer, Madame la Maire, l'expression de ma considération distinguée.",
            altAnswers: ["Veuillez agréer, Madame la Maire, l'expression de ma considération distinguée.", "Je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées.", "Veuillez agréer, Madame la Maire, l'expression de mes salutations distinguées.", "Je vous prie d'agréer, Madame le Maire, l'expression de ma considération distinguée.", "Veuillez agréer, Madame le Maire, l'expression de ma considération distinguée."],
            explanation: "The formula repeats the opening title between commas; \"considération distinguée\" is the standard for an official.",
          },
        ],
      },
      {
        heading: "Why not « Cordialement »?",
        body: [
          "Why not \"Cordialement\"? Because it is the formula of the email between colleagues: friendly, efficient and slightly flat. In a letter to an elected official it reads like a shrug. The rule of thumb at the Mastery level: a letter with \"Objet\" and a title in the address gets a full formula; an email to a contact you deal with regularly can end with \"Cordialement\" or \"Bien cordialement\".",
        ],
        examples: [
          { es: "Bien cordialement, Émilie Rousseau", en: "Kind regards, Emilie Rousseau" },
          { es: "Cordialement, Karim Benali", en: "Regards, Karim Benali (an email to a colleague)" },
          { es: "Je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.", en: "Yours faithfully, Director." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which of these messages can end with « Bien cordialement » ?",
            options: ["an email to the accountant you deal with every month", "a letter to the prefect with an Objet line", "a letter to the mayor about your planning application", "a formal complaint to the tax office"],
            correctIndex: 0,
            explanation: "\"Cordialement\" and \"Bien cordialement\" close emails to regular contacts. A letter with \"Objet\" and a title in the address gets the full formula.",
          },
        ],
      },
      {
        heading: "The model letter, part 1",
        body: [
          "Here is the full model, written for this course: \"Madame la Maire, Je soussignée, Émilie Rousseau, propriétaire de la maison située 22, rue Colbert, ai l'honneur de vous adresser une déclaration préalable de travaux portant sur le remplacement de la fenêtre du rez-de-chaussée donnant sur la rue et sur la pose d'une clôture en bois en limite de propriété.\"",
        ],
        examples: [
          { es: "Mon habitation se trouvant dans un périmètre protégé, j'ai veillé à respecter le caractère du quartier.", en: "As my house is in a protected area, I have taken care to respect the character of the neighbourhood." },
          { es: "J'ai veillé à ce que le projet respecte les règles d'urbanisme.", en: "I have made sure the project complies with planning rules." },
          { es: "J'ai veillé à ce que les travaux ne gênent pas les voisins.", en: "I have made sure the works do not disturb the neighbours." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I have [made sure that] the fence respects the local planning rules.",
            sentence: "J'ai ___ la clôture respecte le plan local d'urbanisme.",
            answer: "veillé à ce que",
            explanation: "\"Veiller à ce que\" + subjunctive (\"respecte\"): to make sure that. \"Veiller à\" + infinitive when the subject is the same.",
          },
          {
            type: "multiple-choice",
            question: "In the model, what does « portant sur » introduce?",
            options: ["the works the declaration concerns", "the documents enclosed with the letter", "the reason why the house is protected", "the date of the works"],
            correctIndex: 0,
            explanation: "\"Une déclaration préalable de travaux portant sur...\" uses the participle of \"porter sur\" (to concern) to name the works in nominal style: the window and the fence.",
          },
        ],
      },
      {
        heading: "The model letter, part 2",
        body: [
          "It continues: \"Mon habitation se trouvant dans le périmètre de protection de la cathédrale, j'ai veillé à ce que le projet respecte le caractère du quartier : la nouvelle fenêtre sera en bois peint, à petits carreaux, et ladite clôture reprendra la teinte des volets. Vous trouverez ci-joint le formulaire dûment complété, un plan de situation et des photographies de l'existant. Je me tiens à la disposition de vos services pour tout complément d'information. Dans l'attente de votre réponse, je vous prie d'agréer, Madame la Maire, l'expression de ma considération distinguée.\"",
        ],
        examples: [
          { es: "Je me tiens à votre disposition pour toute précision.", en: "I remain at your disposal for any clarification." },
          { es: "La nouvelle fenêtre sera en bois peint, à petits carreaux.", en: "The new window will be in painted wood, with small panes." },
          { es: "Je vous remercie par avance de l'attention portée à mon dossier.", en: "Thank you in advance for the attention given to my file." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je vous prie de bien vouloir agréer, Monsieur, l'assurance de ma haute considération.",
            answer: "Je vous prie de bien vouloir agréer, Monsieur le Préfet, l'assurance de ma haute considération.",
            explanation: "This letter opened with \"Monsieur le Préfet,\": the closing formula must repeat that address exactly, title included. Plain \"Monsieur\" is a slip a prefecture will notice.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French in the formal register of the letter.",
        source: "The works concern the installation of a wooden fence one metre high.",
        answer: "Les travaux portent sur la pose d'une clôture en bois d'un mètre de hauteur.",
        altAnswers: ["Les travaux portent sur la pose d'une clôture en bois d'une hauteur d'un mètre.", "Les travaux portent sur l'installation d'une clôture en bois d'un mètre de hauteur.", "Les travaux portent sur l'installation d'une clôture en bois d'une hauteur d'un mètre.", "Les travaux concernent la pose d'une clôture en bois d'un mètre de haut.", "Les travaux portent sur la pose d'une clôture en bois d'un mètre de haut."],
        explanation: "\"Porter sur\" (to concern) + a nominalised action (\"la pose\", \"l'installation\"); \"en bois\" for the material.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French in the formal register of the letter.",
        source: "Please find enclosed a location plan and photographs.",
        answer: "Vous trouverez ci-joint un plan de situation et des photographies.",
        altAnswers: ["Veuillez trouver ci-joint un plan de situation et des photographies.", "Vous trouverez ci-joints un plan de situation et des photographies.", "Veuillez trouver ci-joints un plan de situation et des photographies.", "Je vous prie de trouver ci-joint un plan de situation et des photographies."],
        explanation: "\"Vous trouverez ci-joint\" or \"Veuillez trouver ci-joint\"; before the nouns, \"ci-joint\" may stay invariable.",
      },
      {
        type: "multiple-choice",
        question: "Which ending fits a letter to the mayor with an Objet line?",
        options: ["Je vous prie d'agréer, Madame la Maire, l'expression de ma considération distinguée.", "Cordialement.", "Bisous, Émilie", "Je vous prie d'agréer, Madame, l'expression de ma considération distinguée, Madame la Maire."],
        correctIndex: 0,
        explanation: "The full formula, with the title repeated once in the middle. \"Cordialement\" is for emails between regular contacts.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French in the formal register of the letter.",
        source: "I remain at your disposal to provide any further documents.",
        answer: "Je me tiens à votre disposition pour vous fournir tout document complémentaire.",
        altAnswers: ["Je reste à votre disposition pour vous fournir tout document complémentaire.", "Je me tiens à votre disposition pour vous transmettre tout document complémentaire.", "Je reste à votre disposition pour vous transmettre tout document complémentaire.", "Je me tiens à votre disposition pour fournir tout document complémentaire."],
        explanation: "\"Se tenir à la disposition de\" is the formal I remain available; \"tout document complémentaire\" uses tout + singular for any.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French in the formal register of the letter.",
        source: "As my house is in a protected area, I have taken care to respect the character of the street.",
        answer: "Mon habitation se trouvant dans un secteur protégé, j'ai veillé à respecter le caractère de la rue.",
        altAnswers: ["Ma maison se trouvant dans un secteur protégé, j'ai veillé à respecter le caractère de la rue.", "Mon habitation étant située dans un secteur protégé, j'ai veillé à respecter le caractère de la rue.", "Ma maison étant située dans un secteur protégé, j'ai veillé à respecter le caractère de la rue.", "Mon habitation se trouvant dans un périmètre protégé, j'ai veillé à respecter le caractère de la rue.", "Comme ma maison se trouve dans un secteur protégé, j'ai veillé à respecter le caractère de la rue."],
        explanation: "An absolute participle clause (\"Mon habitation se trouvant...\") gives the reason in formal style; \"veiller à\" + infinitive.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Thanking you in advance for your attention,",
        words: ["En vous", "remerciant", "par avance", "de votre", "attention,"],
        translation: "Thanking you in advance for your attention,",
        explanation: "\"En vous remerciant par avance de\": a gérondif leading into the closing formula.",
      },
      {
        type: "listen-choose",
        audio: "Madame la Maire, j'ai l'honneur de solliciter votre bienveillante attention.",
        question: "What does it mean?",
        options: ["Madam Mayor, I respectfully ask for your kind consideration.", "Madam Mayor, I am honoured to receive your attention.", "Madam Mayor, I would like to warn you about something.", "Madam Mayor, I am pleased to accept your invitation."],
        correctIndex: 0,
        explanation: "\"J'ai l'honneur de solliciter\" is the neutral formal request; \"votre bienveillante attention\" flatters politely.",
      },
      {
        type: "speak",
        text: "Je soussigné, Karim Benali, ai l'honneur de solliciter votre autorisation pour installer un portail.",
        tip: "Make the liaison in vous adresser (vou-zadresser), but not after soussignée.",
        explanation: "The frozen opening: \"Je soussigné\" (masculine here, no -e), the name between commas, then \"ai l'honneur de\" with the verb in the first person, agreeing with \"je\" across the commas.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French in the formal register of the letter.",
        source: "Awaiting your reply, I remain, Mr Mayor, yours faithfully.",
        answer: "Dans l'attente de votre réponse, je vous prie d'agréer, Monsieur le Maire, l'expression de mes salutations distinguées.",
        altAnswers: ["Dans l'attente de votre réponse, je vous prie d'agréer, Monsieur le Maire, l'expression de ma considération distinguée.", "Dans l'attente de votre réponse, veuillez agréer, Monsieur le Maire, l'expression de mes salutations distinguées.", "Dans l'attente de votre réponse, veuillez agréer, Monsieur le Maire, l'expression de ma considération distinguée."],
        explanation: "\"Dans l'attente de votre réponse,\" leads into the full formula; English 'I remain, yours faithfully' has no literal French equivalent.",
      },
    ],
  },
];
