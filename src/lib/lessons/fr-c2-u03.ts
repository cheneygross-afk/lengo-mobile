// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u03.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 3: Medical French.

export const FR_C2_U03_WRITING: WriteExercise = {
  type: "write",
  prompt: "You are a GP in Lille. A 58-year-old patient, M. Duval, has had chest tightness on exertion for three weeks; his ECG at the surgery is slightly abnormal and you suspect angina. Write two texts: (1) a referral letter to a cardiologist colleague, in the concise nominal style of medical correspondence (reason for referral, history, current treatment, examination findings, what you request); (2) a short message to the patient explaining in plain, reassuring but honest French why you are sending him to a specialist, what he must do until then, and when to call the 15.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "Uses the nominal and passive style of medical letters in part 1 (\"patient de 58 ans\", \"adressé pour\", \"mise en place d'un traitement\", \"un ECG a été réalisé\") and correct clinical terms (\"douleur thoracique\", \"angor\", \"antécédents\", \"HTA\", \"bilan\")",
    "Gives the history with \"depuis\" / \"il y a\" and describes the pain precisely (\"oppressive\", \"en étau\", \"à l'effort\", \"irradiant\")",
    "Attenuates in part 2 with the conditional or subjunctive (\"il se pourrait que\", \"il n'est pas exclu que\", \"il est possible que\") without hiding the risk",
    "Gives instructions with the infinitive or imperative (\"éviter les efforts\", \"prendre un comprimé\", \"appeler le 15 si...\")",
  ],
  modelAnswer: "1. Lettre au cardiologue\n\nCher confrère,\n\nJe vous adresse M. Gérard Duval, 58 ans, pour avis cardiologique et réalisation d'une épreuve d'effort.\n\nAntécédents : HTA traitée depuis 2019, dyslipidémie, tabagisme sevré il y a cinq ans (30 paquets-années). Père décédé d'un infarctus à 62 ans. Pas d'allergie connue.\nTraitement en cours : amlodipine 5 mg/j, atorvastatine 20 mg/j.\n\nHistoire de la maladie : depuis trois semaines, douleurs thoraciques rétrosternales oppressives, en étau, survenant à l'effort (montée de deux étages), irradiant vers le bras gauche et cédant en quelques minutes au repos. Pas de douleur de repos. Pas de dyspnée.\n\nExamen clinique : TA 150/90, FC 78/min, auscultation cardiaque et pulmonaire normale. L'ECG réalisé au cabinet montre un discret sous-décalage du segment ST en latéral.\n\nDevant ce tableau évocateur d'un angor d'effort, j'ai introduit de l'aspirine 75 mg/j et prescrit de la trinitrine sublinguale. Un bilan biologique a été demandé. Je vous serais reconnaissante de bien vouloir le recevoir rapidement.\n\nBien confraternellement,\nDr Anne Morel\n\n2. Message au patient\n\nMonsieur Duval,\n\nComme je vous l'ai expliqué, il se pourrait que vos douleurs viennent d'un rétrécissement des artères du cœur. Il n'est pas exclu non plus que ce soit autre chose, mais il faut le vérifier rapidement : c'est pourquoi je vous adresse au Dr Lambert, cardiologue, que vous verrez mardi.\n\nD'ici là : éviter les efforts importants, prendre l'aspirine tous les matins et garder le spray de trinitrine sur vous. En cas de douleur, s'asseoir et faire une pulvérisation sous la langue.\n\nSi la douleur dure plus de quinze minutes malgré le spray, ou si elle survient au repos, appelez immédiatement le 15, sans attendre.\n\nBien cordialement,\nDr Anne Morel",
  explanation: "Part 1 uses the conventions of a medical referral: \"Cher confrère\", \"je vous adresse M. X pour...\", nominal headings (\"Antécédents\", \"Traitement en cours\", \"Examen clinique\"), noun phrases without verbs (\"tabagisme sevré il y a cinq ans\"), the passive (\"l'ECG réalisé\", \"un bilan a été demandé\"), precise pain descriptors (\"oppressives, en étau, irradiant\") and \"depuis\" for an ongoing symptom. Part 2 attenuates with \"il se pourrait que\" and \"il n'est pas exclu que ce soit\" (subjunctive), gives instructions in the infinitive and keeps the emergency rule in the imperative (\"appelez le 15\"), the clearest form.",
};

export const FR_C2_U03: Lesson[] = [
  {
    slug: "c2-medical-french-1",
    level: "FR-C2",
    number: 1,
    title: "Le Français Médical, Part 1 of 6",
    summary: "The French health system: médecin traitant, parcours de soins, carte Vitale, mutuelle, tiers payant, ordonnance, arrêt maladie, urgences, the 15, SOS Médecins and the pharmacie de garde; and the médecin / médecine / médicament trap.",
    duration: "18 min",
    sections: [
      {
        heading: "Le médecin traitant and the parcours de soins",
        body: [
          "Every adult in France is asked to declare \"un médecin traitant\": usually a GP (\"un médecin généraliste\", colloquially \"le généraliste\" or \"mon docteur\"), who coordinates your care. Seeing specialists through your médecin traitant is called \"le parcours de soins coordonnés\". If you go straight to a cardiologist or a dermatologist without being referred (\"sans être orienté par votre médecin traitant\"), the Assurance maladie reimburses you much less. Some specialists can be seen directly: gynaecologists, ophthalmologists, dentists, and psychiatrists for patients under 26.",
        ],
        examples: [
          { es: "Vous avez déclaré un médecin traitant ?", en: "Have you registered with a GP?" },
          { es: "Sans passer par votre médecin traitant, vous serez moins bien remboursé.", en: "If you don't go through your GP, you'll be reimbursed less." },
          { es: "Je peux consulter un ophtalmologue sans passer par mon généraliste.", en: "I can see an ophthalmologist without going through my GP." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You go straight to a dermatologist without being referred by your médecin traitant. What happens?",
            options: ["The Assurance maladie reimburses you less.", "The dermatologist has to refuse to see you.", "You pay nothing at all.", "Your GP is fined."],
            correctIndex: 0,
            explanation: "Outside \"le parcours de soins coordonnés\", you can still be seen, but you are reimbursed much less. Only a few specialists (gynaecologists, ophthalmologists, dentists...) can be seen directly.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "If you see a cardiologist without being referred by your GP, you will be reimbursed less.",
            answer: "Si vous consultez un cardiologue sans être orienté par votre médecin traitant, vous serez moins bien remboursé.",
            altAnswers: ["Si vous consultez un cardiologue sans être orientée par votre médecin traitant, vous serez moins bien remboursée.", "Si vous voyez un cardiologue sans être orienté par votre médecin traitant, vous serez moins bien remboursé.", "Si vous consultez un cardiologue sans être adressé par votre médecin traitant, vous serez moins bien remboursé.", "Si vous allez voir un cardiologue sans être orienté par votre médecin traitant, vous serez moins bien remboursé.", "Si vous consultez un cardiologue sans être orienté par votre médecin traitant, vous serez moins remboursé."],
            explanation: "Being referred is \"être orienté\" (or \"adressé\") \"par votre médecin traitant\"; outside that path you are \"moins bien remboursé\".",
          },
        ],
      },
      {
        heading: "Referrals, appointments, home visits",
        body: [
          "To see a specialist you need \"une lettre d'orientation\" (a referral letter) or simply \"un courrier\" from your GP: \"Mon médecin m'a adressé à un cardiologue\" (\"adresser un patient à\" = to refer). An appointment is \"un rendez-vous\", booked by phone or online, and the visit is \"une consultation\". When the doctor comes to you, it is \"une visite à domicile\".",
        ],
        examples: [
          { es: "Mon médecin traitant m'a adressé à un dermatologue.", en: "My GP referred me to a dermatologist." },
          { es: "Le docteur Haddad fait encore des visites à domicile.", en: "Dr Haddad still does home visits." },
          { es: "J'ai pris rendez-vous en ligne pour une consultation jeudi.", en: "I booked an appointment online for a consultation on Thursday." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The doctor comes to your flat because you can't get out of bed. What is this called?",
            options: ["une visite à domicile", "une consultation au cabinet", "une lettre d'orientation", "un rendez-vous en ligne"],
            correctIndex: 0,
            explanation: "When the doctor comes to you, it is \"une visite à domicile\"; \"une consultation\" usually takes place at the surgery (\"au cabinet\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "My GP referred me to a cardiologist.",
            answer: "Mon médecin traitant m'a adressé à un cardiologue.",
            altAnswers: ["Mon médecin traitant m'a orienté vers un cardiologue.", "Mon médecin traitant m'a orientée vers un cardiologue.", "Mon médecin traitant m'a envoyé chez un cardiologue.", "Mon médecin traitant m'a envoyée chez un cardiologue.", "Mon généraliste m'a adressé à un cardiologue.", "Mon médecin m'a adressé à un cardiologue."],
            explanation: "\"Adresser un patient à\" or \"orienter vers\" = to refer; \"envoyer chez\" is everyday.",
          },
        ],
      },
      {
        heading: "Médecin, médecine, médicament (and not physicien)",
        body: [
          "A major trap for English speakers: \"un médecin\" is a doctor, \"la médecine\" is the discipline (\"faire des études de médecine\"), and \"un médicament\" is a medicine, a drug you take. \"Un physicien\" is a physicist, never a physician. And \"le docteur\" is used to address or name a doctor (\"Bonjour docteur\", \"le docteur Martin\"), while \"le médecin\" is the job: \"il est médecin\".",
        ],
        examples: [
          { es: "Ma fille fait des études de médecine à Lyon.", en: "My daughter is studying medicine in Lyon." },
          { es: "N'oubliez pas de prendre vos médicaments.", en: "Don't forget to take your medicine." },
          { es: "Il est médecin, et sa femme est physicienne.", en: "He's a doctor, and his wife is a physicist." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your friend says: \"Mon frère est physicien.\" What does her brother do?",
            options: ["He's a physicist.", "He's a doctor.", "He's a physiotherapist.", "He's a pharmacist."],
            correctIndex: 0,
            explanation: "\"Physicien\" = physicist. A doctor is \"un médecin\"; a physiotherapist is \"un kinésithérapeute\" (\"un kiné\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "N'oublie pas de prendre ta médecine.",
            answer: "N'oublie pas de prendre tes médicaments.",
            altAnswers: ["N'oublie pas de prendre ton médicament."],
            explanation: "A medicine you take is \"un médicament\"; \"la médecine\" is the discipline you study.",
          },
        ],
      },
      {
        heading: "La Sécu, la carte Vitale, la mutuelle",
        body: [
          "The national health insurance is \"l'Assurance maladie\", everywhere called \"la Sécu\" (from Sécurité sociale); its local office is \"la CPAM\". Your green card with a chip, \"la carte Vitale\", is read by the doctor's machine and triggers the reimbursement automatically. Without it, the doctor gives you \"une feuille de soins\" (a paper claim form) to send yourself. A GP consultation is reimbursed at 70% by the Sécu; the rest (\"le ticket modérateur\") is usually covered by \"la mutuelle\" (\"la complémentaire santé\"), a private top-up insurance most employees get through work.",
        ],
        examples: [
          { es: "Vous avez votre carte Vitale ?", en: "Do you have your health insurance card?" },
          { es: "La consultation est remboursée à 70 % par la Sécu.", en: "The consultation is 70% reimbursed by the national health insurance." },
          { es: "Ma mutuelle prend en charge le ticket modérateur.", en: "My top-up insurance covers the remaining share." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The doctor's card reader is broken, so he gives you « une feuille de soins ». What do you do with it?",
            options: ["Send it to your CPAM yourself to be reimbursed.", "Take it to the pharmacy.", "Give it to your employer.", "Nothing: it's only a receipt."],
            correctIndex: 0,
            explanation: "Without the carte Vitale, \"la feuille de soins\" is the paper claim form you send to your CPAM yourself.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "My top-up insurance reimburses the rest.",
            answer: "Ma mutuelle rembourse le reste.",
            altAnswers: ["Ma complémentaire santé rembourse le reste.", "Ma mutuelle prend en charge le reste.", "Ma complémentaire rembourse le reste.", "Ma mutuelle me rembourse le reste."],
            explanation: "\"La mutuelle\" / \"la complémentaire santé\" covers what the Sécu doesn't.",
          },
        ],
      },
      {
        heading: "Le tiers payant: not paying upfront",
        body: [
          "\"Le tiers payant\" means you don't pay upfront: the professional is paid directly by the Sécu and the mutuelle. It is standard in pharmacies (\"le pharmacien pratique le tiers payant\"), common in labs and hospitals, and optional at doctors'. \"Avancer les frais\" means paying first and being reimbursed later.",
        ],
        examples: [
          { es: "En pharmacie, je n'avance pas les frais grâce au tiers payant.", en: "At the pharmacy, I don't pay upfront thanks to direct billing." },
          { es: "Ce cabinet ne pratique pas le tiers payant.", en: "This practice doesn't offer direct billing." },
          { es: "J'ai avancé les frais, et la Sécu m'a remboursé en cinq jours.", en: "I paid upfront, and the health insurance reimbursed me within five days." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"J'ai dû avancer les frais.\" What happened?",
            options: ["I had to pay upfront and claim the money back later.", "I had to move my appointment forward.", "I had to pay an extra fee.", "I had to borrow money from the doctor."],
            correctIndex: 0,
            explanation: "\"Avancer les frais\" = to pay first and be reimbursed afterwards: the opposite of the tiers payant.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Thanks to [direct billing], you don't pay anything at the pharmacy.",
            sentence: "Grâce au ___, vous ne payez rien à la pharmacie.",
            answer: "tiers payant",
            explanation: "\"Le tiers payant\": a third party (Sécu and mutuelle) pays the pharmacist directly.",
          },
        ],
      },
      {
        heading: "L'ordonnance and l'arrêt de travail",
        body: [
          "The doctor writes \"une ordonnance\" (a prescription), which you take to the pharmacy. If you are too ill to work, he writes \"un arrêt de travail\" (\"un arrêt maladie\"), which you must send to your CPAM and your employer within 48 hours. \"Être en arrêt maladie\" (\"être en arrêt\") = to be on sick leave.",
        ],
        examples: [
          { es: "Le médecin m'a prescrit une semaine d'arrêt de travail.", en: "The doctor signed me off work for a week." },
          { es: "Elle est en arrêt maladie depuis lundi.", en: "She's been on sick leave since Monday." },
          { es: "La pharmacienne m'a délivré les médicaments de l'ordonnance.", en: "The pharmacist dispensed the medicines on the prescription." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The doctor gave me [a prescription] for antibiotics.",
            sentence: "Le médecin m'a fait ___ d'antibiotiques.",
            answer: "une ordonnance",
            explanation: "\"Une ordonnance\" = a prescription (\"faire / rédiger une ordonnance\"); \"prescrire\" is the verb.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I've been on sick leave for three days.",
            answer: "Je suis en arrêt maladie depuis trois jours.",
            altAnswers: ["Je suis en arrêt de travail depuis trois jours.", "Je suis en arrêt depuis trois jours.", "Ça fait trois jours que je suis en arrêt maladie.", "Cela fait trois jours que je suis en arrêt maladie."],
            explanation: "\"Être en arrêt (maladie / de travail)\" + \"depuis\" for an ongoing situation, with the present tense.",
          },
        ],
      },
      {
        heading: "Emergency numbers: 15, 18, 112, 114",
        body: [
          "Know the numbers. \"Le 15\" calls \"le SAMU\" (Service d'aide médicale urgente) for any medical emergency: a doctor answers (\"le médecin régulateur\") and decides whether to send an ambulance, a mobile intensive care unit (\"le SMUR\") or simply advice. \"Le 18\" calls \"les pompiers\" (fire brigade, who also handle accidents and rescues); \"le 112\" is the European number that works everywhere; \"le 114\" is for people who cannot speak (by SMS).",
        ],
        examples: [
          { es: "Il a fait un malaise : appelle le 15 tout de suite !", en: "He's collapsed: call the emergency number right away!" },
          { es: "Le médecin régulateur du SAMU a envoyé une ambulance.", en: "The SAMU doctor on the line sent an ambulance." },
          { es: "Les pompiers sont arrivés en dix minutes.", en: "The fire brigade arrived in ten minutes." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your neighbour collapses and isn't breathing properly. Which number do you call in France for a medical emergency?",
            options: ["le 15", "le 17", "le 114", "le 3919"],
            correctIndex: 0,
            explanation: "\"Le 15\" is the SAMU. (The 17 is the police; the 112 also works; the 114 is by text for people who can't speak.)",
          },
        ],
      },
      {
        heading: "SOS Médecins, les urgences, la pharmacie de garde",
        body: [
          "For something urgent but not life-threatening at night or at the weekend, call \"SOS Médecins\" (who visit at home) or \"le médecin de garde\" (the on-call doctor, often reached through the 15 or the 116 117). \"Les urgences\" (always plural) is the A&E department of a hospital: \"aller aux urgences\", \"passer la nuit aux urgences\". At night and on Sundays one pharmacy per area stays open: \"la pharmacie de garde\", whose address is posted on the door of every pharmacy.",
        ],
        examples: [
          { es: "On a appelé SOS Médecins à deux heures du matin.", en: "We called the emergency doctor service at two in the morning." },
          { es: "Nous avons passé toute la nuit aux urgences.", en: "We spent the whole night in A&E." },
          { es: "Quelle est la pharmacie de garde ce dimanche ?", en: "Which pharmacy is open this Sunday?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Elle a passé la nuit aux urgences.",
            question: "What does it mean?",
            options: ["She spent the night in A&E.", "She urgently spent the night out.", "She spent the night on call.", "She spent the night in intensive care."],
            correctIndex: 0,
            explanation: "\"Les urgences\" (plural) = the hospital's emergency department. Intensive care is \"la réanimation\" (\"la réa\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Is there a pharmacy open tonight?",
            answer: "Il y a une pharmacie de garde ce soir ?",
            altAnswers: ["Y a-t-il une pharmacie de garde ce soir ?", "Est-ce qu'il y a une pharmacie de garde ce soir ?", "Quelle est la pharmacie de garde ce soir ?", "Il y a une pharmacie ouverte ce soir ?", "Y a-t-il une pharmacie ouverte ce soir ?"],
            explanation: "The duty pharmacy is \"la pharmacie de garde\"; any question form is fine.",
          },
        ],
      },
      {
        heading: "The words of « garde »",
        body: [
          "The vocabulary of \"garde\" is worth noting: \"être de garde\" (to be on call), \"la garde\" (the shift), \"un médecin de garde\", \"une pharmacie de garde\". In Switzerland you will hear \"être de piquet\" for the same idea.",
        ],
        examples: [
          { es: "Le docteur Petit est de garde ce week-end.", en: "Dr Petit is on call this weekend." },
          { es: "Cette nuit, c'est l'interne qui est de garde.", en: "Tonight the junior doctor is on call." },
          { es: "Elle enchaîne les gardes de vingt-quatre heures.", en: "She does one 24-hour shift after another." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: My sister is on call at the hospital tonight.",
            words: ["Ma", "sœur", "est", "de", "garde", "à", "l'hôpital", "ce", "soir."],
            translation: "My sister is on call at the hospital tonight.",
            explanation: "\"Être de garde\" = to be on call, the same \"garde\" as in \"le médecin de garde\" and \"la pharmacie de garde\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Don't forget your health insurance card.",
        answer: "N'oubliez pas votre carte Vitale.",
        altAnswers: ["N'oublie pas ta carte Vitale.", "N'oubliez pas d'apporter votre carte Vitale.", "N'oublie pas d'apporter ta carte Vitale."],
        explanation: "\"La carte Vitale\" (capital V): the chip card for health insurance.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "She is studying medicine and wants to become a doctor.",
        answer: "Elle fait des études de médecine et veut devenir médecin.",
        altAnswers: ["Elle étudie la médecine et veut devenir médecin.", "Elle fait médecine et veut devenir médecin.", "Elle fait des études de médecine et souhaite devenir médecin."],
        explanation: "\"La médecine\" (discipline) vs \"médecin\" (the job, no article after devenir).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "You must send the sick note to your employer within forty-eight hours.",
        answer: "Vous devez envoyer l'arrêt de travail à votre employeur sous quarante-huit heures.",
        altAnswers: ["Vous devez envoyer l'arrêt de travail à votre employeur dans les quarante-huit heures.", "Vous devez envoyer l'arrêt maladie à votre employeur sous quarante-huit heures.", "Vous devez envoyer l'arrêt de travail à votre employeur dans un délai de quarante-huit heures.", "Tu dois envoyer l'arrêt de travail à ton employeur sous 48 heures.", "Vous devez envoyer l'arrêt de travail à votre employeur sous 48 heures."],
        explanation: "\"L'arrêt de travail\" is both the leave and the form; \"sous\" + time = within.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Make it plural.",
        source: "La pharmacie de garde est indiquée sur la porte.",
        answer: "Les pharmacies de garde sont indiquées sur la porte.",
        explanation: "\"De garde\" is a fixed phrase and never changes; only the noun, the verb and the participle become plural: \"les pharmacies de garde sont indiquées\".",
      },
      {
        type: "dictation",
        audio: "Appelez le 15 en cas d'urgence vitale.",
        explanation: "\"Une urgence vitale\" = a life-threatening emergency: the 15 (SAMU).",
      },
      {
        type: "speak",
        prompt: "Say it in French to the receptionist: Hello, I'd like to make an appointment with Dr Leroy, please.",
        text: "Bonjour, je voudrais prendre rendez-vous avec le docteur Leroy, s'il vous plaît.",
        explanation: "\"Prendre rendez-vous avec\" + \"le docteur\" + name.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We called the emergency doctor service because our son had a high fever.",
        answer: "Nous avons appelé SOS Médecins parce que notre fils avait beaucoup de fièvre.",
        altAnswers: ["On a appelé SOS Médecins parce que notre fils avait beaucoup de fièvre.", "Nous avons appelé SOS Médecins car notre fils avait une forte fièvre.", "Nous avons appelé SOS Médecins parce que notre fils avait une forte fièvre.", "On a appelé SOS Médecins parce que notre fils avait une forte fièvre."],
        explanation: "\"SOS Médecins\" visits at home outside surgery hours; \"avoir beaucoup de fièvre / une forte fièvre\".",
      },
    ],
  },
  {
    slug: "c2-medical-french-2",
    level: "FR-C2",
    number: 2,
    title: "Le Français Médical, Part 2 of 6",
    summary: "Describe symptoms precisely: avoir mal à, nausées, vertiges, courbatures, être enrhumé, essoufflé, la crise de foie; onset and duration with depuis, il y a and par intermittence; and the angine and grippe traps.",
    duration: "18 min",
    sections: [
      {
        heading: "Avoir mal à + the article, not a possessive",
        body: [
          "French says where it hurts with \"avoir mal à\" + the definite article: \"j'ai mal à la tête\", \"j'ai mal au dos\", \"j'ai mal aux dents\", \"elle a mal à l'oreille droite\". The body part takes \"le / la / les\", not a possessive: \"*j'ai mal à ma tête\" is a classic English-speaker error, because French considers it obvious whose head it is. The same applies to \"se casser la jambe\", \"se tordre la cheville\" (to twist one's ankle), \"se brûler la main\".",
        ],
        examples: [
          { es: "J'ai mal à la gorge depuis hier soir.", en: "I've had a sore throat since last night." },
          { es: "Je me suis tordu la cheville en descendant l'escalier.", en: "I twisted my ankle going down the stairs." },
          { es: "Elle s'est brûlé la main en sortant le plat du four.", en: "She burnt her hand taking the dish out of the oven." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct?",
            options: ["Je me suis cassé le bras au ski.", "Je me suis cassé mon bras au ski.", "J'ai cassé mon bras au ski.", "Je suis cassé le bras au ski."],
            correctIndex: 0,
            explanation: "A reflexive verb + definite article: \"se casser le bras\". The possessive is redundant in French.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "My knee hurts when I go up the stairs.",
            answer: "J'ai mal au genou quand je monte l'escalier.",
            altAnswers: ["J'ai mal au genou quand je monte les escaliers.", "Mon genou me fait mal quand je monte l'escalier.", "Mon genou me fait mal quand je monte les escaliers.", "Le genou me fait mal quand je monte l'escalier."],
            explanation: "\"Avoir mal au genou\" (article, not \"mon\") or \"mon genou me fait mal\".",
          },
        ],
      },
      {
        heading: "Faire mal, se faire mal, une douleur",
        body: [
          "\"Faire mal\" puts the body part or the action as subject: \"ma cheville me fait mal\", \"ça me fait mal quand j'avale\", \"ça fait mal ici\". \"Se faire mal\" means to hurt oneself: \"je me suis fait mal au genou en courant\" (the participle \"fait\" stays invariable, \"elle s'est fait mal\", because \"se\" is an indirect object here). \"Une douleur\" is the noun: \"une douleur au genou\", \"des douleurs abdominales\".",
        ],
        examples: [
          { es: "Ça me fait mal quand j'avale.", en: "It hurts when I swallow." },
          { es: "Je me suis fait mal au dos en portant des cartons.", en: "I hurt my back carrying boxes." },
          { es: "Ma cheville me fait encore mal.", en: "My ankle still hurts." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Elle s'est faite mal au poignet en tombant.",
            answer: "Elle s'est fait mal au poignet en tombant.",
            explanation: "In \"se faire mal\", \"se\" is an indirect object, so the participle stays invariable: \"elle s'est fait mal\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I hurt my shoulder playing tennis.",
            answer: "Je me suis fait mal à l'épaule en jouant au tennis.",
            altAnswers: ["Je me suis blessé à l'épaule en jouant au tennis.", "Je me suis blessée à l'épaule en jouant au tennis.", "Je me suis fait mal à l'épaule au tennis."],
            explanation: "\"Se faire mal à\" + article; \"en jouant\" (gérondif) for how it happened. \"Fait\" stays invariable here.",
          },
        ],
      },
      {
        heading: "Saying exactly where",
        body: [
          "With a doctor, be precise about location: \"en haut à droite du ventre\", \"derrière le genou\", \"dans le bas du dos\" (lower back, the most common complaint in France: \"un lumbago\", \"un tour de reins\"), \"au creux de l'estomac\" (in the pit of the stomach), \"sur le côté gauche\".",
        ],
        examples: [
          { es: "La douleur se situe dans le bas du dos, plutôt à gauche.", en: "The pain is in the lower back, more on the left." },
          { es: "Il a mal au ventre, en haut à droite.", en: "He has a stomach ache, in the upper right." },
          { es: "J'ai une douleur derrière le genou droit.", en: "I have a pain behind my right knee." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The pain is [in the pit of the stomach].",
            sentence: "La douleur se situe ___.",
            answer: "au creux de l'estomac",
            explanation: "\"Au creux de l'estomac\" is the pit of the stomach; a precise location helps the doctor more than \"j'ai mal au ventre\".",
          },
        ],
      },
      {
        heading: "The essential symptoms",
        body: [
          "The essential list. \"Avoir des nausées\" (to feel sick), \"vomir\" (to vomit, \"des vomissements\"), \"avoir des vertiges\" (dizziness; \"la tête qui tourne\"), \"avoir des courbatures\" (aching muscles, after sport or with flu), \"avoir des frissons\" (shivers), \"avoir de la fièvre\" (\"38,5 de fièvre\"), \"tousser\" (\"une toux sèche\" / \"une toux grasse\": dry / chesty), \"avoir le nez qui coule\" or \"le nez bouché\" (runny / blocked nose), \"être enrhumé(e)\" (to have a cold), \"être essoufflé(e)\" (out of breath), \"avoir des palpitations\", \"avoir la diarrhée\", \"être constipé(e)\" (to be constipated).",
        ],
        examples: [
          { es: "J'ai des nausées depuis ce matin.", en: "I've been feeling sick since this morning." },
          { es: "Il a des courbatures partout et 39 de fièvre.", en: "He's aching all over and has a temperature of 39." },
          { es: "Je suis enrhumé, j'ai le nez complètement bouché.", en: "I've got a cold, my nose is completely blocked." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« J'ai une toux grasse. » What kind of cough is it?",
            options: ["a chesty cough", "a dry cough", "a nervous cough", "a whooping cough"],
            correctIndex: 0,
            explanation: "\"Une toux grasse\" brings up mucus: a chesty cough. Its opposite is \"une toux sèche\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I've got a cold and a dry cough.",
            answer: "Je suis enrhumé et j'ai une toux sèche.",
            altAnswers: ["Je suis enrhumée et j'ai une toux sèche.", "J'ai un rhume et une toux sèche.", "J'ai un rhume et je tousse, une toux sèche.", "Je suis enrhumé et je tousse : une toux sèche."],
            explanation: "\"Être enrhumé(e)\" or \"avoir un rhume\"; \"une toux sèche\" (dry) vs \"grasse\" (chesty).",
          },
        ],
      },
      {
        heading: "False friends: angine, grippe, crise de foie",
        body: [
          "Now the false friends. \"Une angine\" is a sore throat infection, tonsillitis: \"j'ai une angine\" is extremely common and harmless. Angina in the cardiac sense is \"une angine de poitrine\", medically \"l'angor\". \"La grippe\" is real influenza, with high fever and aches; a cold is \"un rhume\". French speakers say \"j'ai la grippe\" less loosely than English speakers say 'I've got flu', so don't use it for a sniffle. \"Une crise de foie\" (literally a liver attack) is the French cultural name for indigestion after a rich meal: the liver is usually not involved.",
        ],
        examples: [
          { es: "Le médecin dit que c'est une angine, pas une grippe.", en: "The doctor says it's tonsillitis, not flu." },
          { es: "J'ai mangé trop de foie gras : crise de foie assurée !", en: "I ate too much foie gras: guaranteed indigestion!" },
          { es: "Ce n'est qu'un rhume, pas la grippe.", en: "It's only a cold, not flu." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your colleague Léa says: \"J'ai une angine, je ne viens pas demain.\" What does she have?",
            options: ["a throat infection", "a heart condition", "chest pain", "a stomach bug"],
            correctIndex: 0,
            explanation: "\"Une angine\" = tonsillitis, a sore throat infection. Cardiac angina is \"une angine de poitrine\".",
          },
          {
            type: "multiple-choice",
            question: "A patient says: \"Je crois que j'ai la grippe.\" What does she most likely have?",
            options: ["high fever, aches and exhaustion", "a mild runny nose", "a sore throat only", "indigestion"],
            correctIndex: 0,
            explanation: "\"La grippe\" is real influenza in French; a mild cold is \"un rhume\".",
          },
        ],
      },
      {
        heading: "Avoir mal au cœur = to feel sick",
        body: [
          "Note \"être malade\" (to be ill) vs \"avoir mal au cœur\": despite the words, \"j'ai mal au cœur\" usually means I feel sick (nauseous), not heart pain, which is \"une douleur dans la poitrine\" or \"une douleur thoracique\".",
        ],
        examples: [
          { es: "En voiture, j'ai souvent mal au cœur.", en: "I often feel sick in the car." },
          { es: "Il a une douleur thoracique depuis ce matin.", en: "He's had chest pain since this morning." },
          { es: "Elle est malade depuis dimanche.", en: "She's been ill since Sunday." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I [feel sick] every time I take the boat.",
            sentence: "J'___ chaque fois que je prends le bateau.",
            answer: "ai mal au cœur",
            altAnswers: ["ai des nausées", "ai la nausée"],
            explanation: "\"Avoir mal au cœur\" = to feel nauseous, not heart pain.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "He has chest pain when he makes an effort.",
            answer: "Il a une douleur dans la poitrine quand il fait un effort.",
            altAnswers: ["Il a mal à la poitrine quand il fait un effort.", "Il a des douleurs thoraciques à l'effort.", "Il a une douleur thoracique à l'effort.", "Il a mal à la poitrine à l'effort.", "Il a des douleurs dans la poitrine quand il fait un effort."],
            explanation: "\"Mal à la poitrine\" or, clinically, \"une douleur thoracique\"; \"à l'effort\" = on exertion. Not \"mal au cœur\" (nausea).",
          },
        ],
      },
      {
        heading: "Depuis, il y a, pendant",
        body: [
          "The first questions any doctor asks are \"Depuis quand ?\" and \"Comment ça a commencé ?\". For a symptom that is still going on, use \"depuis\" with the present: \"J'ai mal à la tête depuis trois jours\" (not \"*j'ai eu\"). For a point in the past, use \"il y a\" with the passé composé: \"Ça a commencé il y a trois jours\". \"Ça fait trois jours que j'ai mal\" is the spoken equivalent of depuis. For a finished period, \"pendant\": \"J'ai eu de la fièvre pendant deux jours, puis elle est tombée.\"",
        ],
        examples: [
          { es: "J'ai mal à la tête depuis trois jours.", en: "I've had a headache for three days." },
          { es: "Ça fait deux nuits que je ne dors pas à cause de la toux.", en: "I haven't slept for two nights because of the cough." },
          { es: "J'ai eu de la fièvre pendant deux jours, puis elle est tombée.", en: "I had a fever for two days, then it went down." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Ça fait trois jours que j'ai des vertiges.",
            question: "What does it mean?",
            options: ["I've been dizzy for three days.", "I was dizzy three days ago.", "I get dizzy every three days.", "I'll be dizzy for three days."],
            correctIndex: 0,
            explanation: "\"Ça fait + duration + que\" + present = for (and still continuing), like \"depuis\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change « depuis » to « ça fait... que ».",
            source: "J'ai mal au dos depuis trois jours.",
            answer: "Ça fait trois jours que j'ai mal au dos.",
            altAnswers: ["Cela fait trois jours que j'ai mal au dos."],
            explanation: "\"Ça fait + duration + que\" is the spoken equivalent of \"depuis\": the symptom is still going on, so the verb stays in the present.",
          },
        ],
      },
      {
        heading: "Onset, pattern and triggers",
        body: [
          "Onset: \"ça a commencé brusquement\" / \"d'un coup\" (suddenly), \"progressivement\" (gradually), \"en me levant\" (when I got up), \"après le repas\". Pattern: \"c'est continu\" (constant), \"ça va et ça vient\", \"par intermittence\" (on and off), \"par crises\" (in attacks), \"surtout la nuit\", \"de plus en plus fort\". Triggers: \"à l'effort\" (on exertion), \"au repos\" (at rest), \"quand je respire profondément\", \"quand je me penche\".",
        ],
        examples: [
          { es: "Ça a commencé il y a une semaine, assez brusquement.", en: "It started a week ago, quite suddenly." },
          { es: "J'ai des vertiges par intermittence, surtout quand je tourne la tête.", en: "I get dizzy on and off, especially when I turn my head." },
          { es: "La douleur apparaît à l'effort et disparaît au repos.", en: "The pain comes on with exertion and goes at rest." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The pain comes [on and off], mostly at night.",
            sentence: "La douleur revient ___, surtout la nuit.",
            answer: "par intermittence",
            altAnswers: ["par moments", "par crises"],
            explanation: "\"Par intermittence\" = on and off, intermittently.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as a patient.",
            source: "I've had stomach pains for a week; it started suddenly after a meal.",
            answer: "J'ai mal au ventre depuis une semaine ; ça a commencé brusquement après un repas.",
            altAnswers: ["J'ai des douleurs au ventre depuis une semaine ; ça a commencé brusquement après un repas.", "J'ai mal au ventre depuis une semaine, ça a commencé brusquement après un repas.", "J'ai des douleurs abdominales depuis une semaine ; ça a commencé brusquement après un repas.", "Ça fait une semaine que j'ai mal au ventre ; ça a commencé brusquement après un repas.", "J'ai mal au ventre depuis une semaine ; c'est venu d'un coup après un repas."],
            explanation: "\"Depuis\" + present for what continues; passé composé for the moment it began.",
          },
        ],
      },
      {
        heading: "A precise patient",
        body: [
          "Put together, a precise patient sounds like this: \"Ça a commencé il y a une semaine, assez brusquement, en me levant. Depuis, j'ai des vertiges par intermittence, surtout quand je tourne la tête, et j'ai eu des nausées pendant les deux premiers jours.\"",
        ],
        examples: [
          { es: "Ça a commencé hier soir, d'un coup, après le dîner.", en: "It started last night, all of a sudden, after dinner." },
          { es: "Depuis, j'ai des nausées par intermittence.", en: "Since then I've felt sick on and off." },
          { es: "La douleur augmente quand je me penche.", en: "The pain gets worse when I bend down." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which description gives the doctor the most useful information?",
            options: ["Ça a commencé il y a quatre jours, brusquement, et depuis j'ai mal par crises, surtout la nuit.", "J'ai mal un peu partout depuis un moment.", "J'ai eu mal depuis quatre jours.", "Ça me fait mal beaucoup."],
            correctIndex: 0,
            explanation: "A precise patient gives the start (\"il y a quatre jours\"), the onset (\"brusquement\"), the pattern (\"par crises\") and the timing (\"surtout la nuit\"). \"J'ai eu mal depuis\" mixes up the tenses: \"depuis\" takes the present.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "He has a temperature of 38.5 and shivers.",
        answer: "Il a 38,5 de fièvre et des frissons.",
        altAnswers: ["Il a 38,5 de fièvre et il a des frissons.", "Il a 38,5 de température et des frissons.", "Il a 38.5 de fièvre et des frissons."],
        explanation: "\"Avoir 38,5 de fièvre\" (with a decimal comma in French) and \"avoir des frissons\" (shivers).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, as a patient.",
        source: "I'm out of breath as soon as I climb one floor.",
        answer: "Je suis essoufflé dès que je monte un étage.",
        altAnswers: ["Je suis essoufflée dès que je monte un étage.", "Je suis essoufflé dès que je monte un seul étage.", "Je suis essoufflée dès que je monte un seul étage.", "Je m'essouffle dès que je monte un étage."],
        explanation: "\"Être essoufflé(e)\" (double f, double s); \"dès que\" = as soon as.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, as a patient.",
        source: "It started two days ago, gradually.",
        answer: "Ça a commencé il y a deux jours, progressivement.",
        altAnswers: ["C'est venu progressivement, il y a deux jours.", "Ça a commencé progressivement il y a deux jours.", "Cela a commencé il y a deux jours, progressivement.", "Ça a commencé il y a deux jours, petit à petit."],
        explanation: "\"Il y a\" + passé composé for when it began; \"progressivement\" vs \"brusquement\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I was dizzy for two days, then it stopped.",
        answer: "J'ai eu des vertiges pendant deux jours, puis ça s'est arrêté.",
        altAnswers: ["J'ai eu des vertiges pendant deux jours, puis ça a cessé.", "J'ai eu des vertiges pendant deux jours, puis ils ont disparu.", "J'ai eu des vertiges pendant deux jours, puis c'est passé.", "J'ai eu des vertiges pendant deux jours, puis ils se sont arrêtés."],
        explanation: "A finished period takes \"pendant\" and the passé composé: \"j'ai eu des vertiges pendant deux jours\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The pain gets worse when I breathe deeply.",
        words: ["La douleur", "augmente", "quand", "je", "respire", "profondément."],
        translation: "The pain gets worse when I breathe deeply.",
        explanation: "\"Augmenter\" (or \"s'aggraver\") for pain getting worse; trigger with \"quand\".",
      },
      {
        type: "dictation",
        audio: "J'ai mal à la gorge et le nez qui coule.",
        explanation: "\"Avoir le nez qui coule\" = a runny nose; \"avoir mal à la gorge\" with the article.",
      },
      {
        type: "speak",
        prompt: "Say it in French: Doctor, I've been having dizzy spells for a week, mostly in the morning.",
        text: "Docteur, j'ai des vertiges depuis une semaine, surtout le matin.",
        explanation: "\"Depuis une semaine\" + present tense: the symptom is ongoing.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "J'ai eu de la toux depuis lundi.",
        answer: "J'ai de la toux depuis lundi.",
        altAnswers: ["Je tousse depuis lundi."],
        explanation: "A symptom that is still going on takes \"depuis\" with the present, not the passé composé.",
      },
    ],
  },
  {
    slug: "c2-pain-descriptors-word-web",
    level: "FR-C2",
    number: 3,
    title: "Word Web: Décrire la Douleur comme un Clinicien",
    summary: "Sort and use pain descriptors precisely: sourde, aiguë, lancinante, pulsatile, en coup de poignard, en étau, oppressive, irradiante, à type de brûlure, continue, intermittente, and the 0 to 10 pain scale.",
    duration: "17 min",
    sections: [
      {
        heading: "Sourde or aiguë",
        body: [
          "Doctors classify pain by its character, and the French words are both everyday and clinical. \"Une douleur sourde\" is dull, deep and diffuse (\"sourd\" = deaf, muffled). \"Une douleur aiguë\" is sharp and intense; in medicine \"aigu\" also means acute, as opposed to chronic (\"une douleur aiguë\" vs \"une douleur chronique\"). Spelling: \"aigu\" in the masculine, \"aiguë\" in the feminine, with the tréma on the e to show the u is pronounced; since the 1990 reform \"aigüe\" (tréma on the u) is also accepted.",
        ],
        examples: [
          { es: "J'ai une douleur sourde dans le bas du dos depuis des mois.", en: "I've had a dull pain in my lower back for months." },
          { es: "La douleur est devenue aiguë dans la nuit.", en: "The pain became sharp during the night." },
          { es: "Il souffre d'une douleur chronique au genou.", en: "He suffers from chronic knee pain." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is spelled correctly?",
            options: ["une douleur aiguë", "une douleur aigue", "une douleur aigüé", "une douleur aïgue"],
            correctIndex: 0,
            explanation: "\"Aiguë\" (tréma on the e) is traditional; \"aigüe\" is accepted since 1990. Without the tréma, the u would be silent.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "She felt [a sharp pain] in her side.",
            sentence: "Elle a ressenti ___ au côté.",
            answer: "une douleur aiguë",
            altAnswers: ["une douleur aigüe", "une douleur vive"],
            explanation: "\"Aiguë\" (feminine, tréma on the e) or \"vive\" for a sharp pain.",
          },
        ],
      },
      {
        heading: "Lancinante, pulsatile, vive, une gêne",
        body: [
          "\"Lancinante\" describes a pain that comes back in repeated stabs or throbs and won't leave you alone (\"une douleur lancinante\", also figuratively \"une question lancinante\", a nagging question). \"Pulsatile\" means throbbing in rhythm with the pulse: typical of a migraine or an abscess (\"une douleur pulsatile\", \"ça bat\", in a patient's words). \"Une douleur vive\" is sharp and sudden; \"une gêne\" is mere discomfort, less than a pain.",
        ],
        examples: [
          { es: "Une douleur lancinante l'empêche de dormir.", en: "A nagging, shooting pain keeps him awake." },
          { es: "Le patient décrit une céphalée pulsatile.", en: "The patient describes a throbbing headache." },
          { es: "Ce n'est pas vraiment une douleur, plutôt une gêne.", en: "It's not really a pain, more of a discomfort." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A patient with a dental abscess says \"ça bat\". How does the dentist write it in the file?",
            options: ["douleur pulsatile", "douleur sourde", "douleur en étau", "douleur chronique"],
            correctIndex: 0,
            explanation: "A pain that beats with the pulse is \"pulsatile\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The patient describes [a throbbing pain] in the jaw.",
            sentence: "Le patient décrit ___ à la mâchoire.",
            answer: "une douleur pulsatile",
            explanation: "Throbbing in rhythm with the pulse is \"pulsatile\", typical of an abscess; the patient would say \"ça bat\".",
          },
        ],
      },
      {
        heading: "The patient's words, the doctor's words",
        body: [
          "Patients and doctors don't always use the same words for the same thing: a patient says \"ça lance\", \"ça tape\", \"ça tire\" (it pulls), \"ça brûle\", \"ça serre\"; the doctor writes \"lancinante\", \"pulsatile\", \"à type de tiraillement\", \"à type de brûlure\", \"constrictive\". Knowing both sides is the point of this word web.",
        ],
        examples: [
          { es: "J'ai mal à la tête, ça tape, comme si mon cœur battait dans ma tempe.", en: "I've got a headache, it's throbbing, as if my heart were beating in my temple." },
          { es: "Ça tire dans le mollet quand je marche.", en: "It pulls in my calf when I walk." },
          { es: "Le patient décrit une douleur à type de tiraillement.", en: "The patient describes a pulling-type pain." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A patient says « ça brûle ». What does the doctor write?",
            options: ["douleur à type de brûlure", "douleur pulsatile", "douleur sourde", "douleur en éclair"],
            correctIndex: 0,
            explanation: "The patient's \"ça brûle\" becomes \"à type de brûlure\" in the notes, just as \"ça tape\" becomes \"pulsatile\" and \"ça serre\" becomes \"constrictive\".",
          },
        ],
      },
      {
        heading: "Images: en coup de poignard, en étau, en barre",
        body: [
          "Clinical French uses images, introduced by \"en\" or \"à type de\": \"une douleur en coup de poignard\" (like a stab: sudden and violent, typical of a perforated ulcer), \"en étau\" (like a vice: a squeezing pain around the chest or head), \"en barre\" (like a bar across the upper abdomen), \"à type de brûlure\" (burning), \"à type de décharge électrique\" (like an electric shock, typical of nerve pain), \"en éclair\" (like lightning). \"Oppressive\" or \"constrictive\" describe a heavy, crushing chest pain: \"une douleur thoracique oppressive\" is a red flag for the heart.",
        ],
        examples: [
          { es: "Il a ressenti une douleur en coup de poignard dans le ventre.", en: "He felt a stabbing pain in his abdomen." },
          { es: "J'ai l'impression d'avoir la poitrine prise dans un étau.", en: "It feels as if my chest were caught in a vice." },
          { es: "J'ai une brûlure derrière le sternum après les repas.", en: "I get a burning feeling behind my breastbone after meals." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each patient's words to the clinical description.",
            pairs: [
              { left: "ça serre comme un étau", right: "douleur constrictive" },
              { left: "ça brûle", right: "douleur à type de brûlure" },
              { left: "ça descend dans la jambe", right: "douleur irradiante" },
              { left: "c'est comme un coup de couteau", right: "douleur en coup de poignard" },
            ],
            explanation: "Each everyday image has its clinical counterpart; doctors translate one into the other all day.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: The pain is like a bar across the upper abdomen.",
            words: ["La", "douleur", "est", "en", "barre", "au", "niveau", "de", "l'estomac."],
            translation: "The pain is like a bar across the upper abdomen.",
            explanation: "\"En barre\" (like a bar across the upper abdomen) is one of the clinical images introduced by \"en\", like \"en étau\" and \"en coup de poignard\".",
          },
        ],
      },
      {
        heading: "Irradier: where the pain spreads",
        body: [
          "\"Irradier\" means to spread to another place: \"la douleur irradie dans le bras gauche\", \"vers la mâchoire\", \"dans la jambe\" (sciatica: \"une sciatique\"). The adjective is \"irradiante\" (\"une douleur irradiante\"), and the medical noun \"l'irradiation\" (\"irradiation vers le bras gauche\"). A patient says \"ça descend dans la jambe\", \"ça remonte dans le dos\".",
        ],
        examples: [
          { es: "La douleur irradie dans tout le bras gauche.", en: "The pain spreads all the way down the left arm." },
          { es: "Ça descend dans la jambe comme une décharge électrique.", en: "It shoots down my leg like an electric shock." },
          { es: "La douleur remonte dans le dos.", en: "The pain goes up into the back." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The pain [spreads] to the jaw.",
            sentence: "La douleur ___ vers la mâchoire.",
            answer: "irradie",
            explanation: "\"Irradier\" = to spread from its origin to another area.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, in a doctor's notes.",
            source: "Crushing chest pain radiating to the left arm.",
            answer: "Douleur thoracique oppressive irradiant vers le bras gauche.",
            altAnswers: ["Douleur thoracique oppressive irradiant dans le bras gauche.", "Douleur thoracique constrictive irradiant vers le bras gauche.", "Douleur thoracique oppressive avec irradiation vers le bras gauche.", "Douleur thoracique oppressive irradiant au bras gauche."],
            explanation: "Notes use a verbless nominal style: \"douleur\" + adjectives + \"irradiant vers\" (present participle).",
          },
        ],
      },
      {
        heading: "Each pattern points to a diagnosis",
        body: [
          "These images are not decoration: each pattern points to a diagnosis. Crushing chest pain spreading to the left arm and jaw suggests a heart attack (\"un infarctus\"); burning behind the breastbone after meals suggests reflux (\"un reflux gastro-œsophagien\"); an electric shock down the leg suggests sciatica.",
        ],
        examples: [
          { es: "Douleur thoracique oppressive irradiant vers la mâchoire.", en: "Crushing chest pain radiating to the jaw." },
          { es: "Une brûlure après les repas évoque un reflux.", en: "A burning feeling after meals suggests reflux." },
          { es: "Une décharge dans la jambe fait penser à une sciatique.", en: "A shock down the leg suggests sciatica." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Crushing chest pain spreading to the jaw: what must the doctor rule out first?",
            options: ["un infarctus", "un reflux", "une sciatique", "une angine"],
            correctIndex: 0,
            explanation: "\"Une douleur thoracique oppressive irradiant vers la mâchoire\" is a red flag for the heart: \"un infarctus\". Reflux burns behind the breastbone, sciatica shoots down the leg, and \"une angine\" is a sore throat.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as a patient.",
            source: "It's like a burning feeling going up to my throat.",
            answer: "C'est comme une brûlure qui remonte jusqu'à la gorge.",
            altAnswers: ["Ça fait comme une brûlure qui remonte jusqu'à la gorge.", "C'est comme une brûlure qui monte jusqu'à la gorge.", "Ça fait comme une brûlure qui monte jusqu'à la gorge.", "C'est comme une brûlure qui me remonte jusqu'à la gorge."],
            explanation: "A patient's version of reflux: \"une brûlure qui remonte\"; the doctor would write \"à type de brûlure, rétrosternale\".",
          },
        ],
      },
      {
        heading: "Rhythm: continue, paroxystique, mécanique, inflammatoire",
        body: [
          "The last elements of a pain description: its rhythm and its intensity. \"Continue\" (constant) vs \"intermittente\" (on and off) vs \"paroxystique\" (in sudden peaks: \"des crises paroxystiques\"). \"Nocturne\" (worse at night), \"mécanique\" (worse with movement, better at rest, typical of joint wear) vs \"inflammatoire\" (worse at night and in the morning with stiffness: \"un dérouillage matinal\", the time needed to loosen up).",
        ],
        examples: [
          { es: "Il s'agit d'une douleur mécanique, calmée par le repos.", en: "It's mechanical pain, relieved by rest." },
          { es: "Les douleurs inflammatoires s'accompagnent d'un dérouillage matinal.", en: "Inflammatory pain comes with morning stiffness." },
          { es: "Il a des douleurs paroxystiques, par crises de quelques minutes.", en: "He has paroxysmal pains, in attacks lasting a few minutes." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each descriptor to its meaning.",
            pairs: [
              { left: "continue", right: "constant" },
              { left: "intermittente", right: "on and off" },
              { left: "mécanique", right: "worse with movement" },
              { left: "nocturne", right: "worse at night" },
              { left: "chronique", right: "lasting for months" },
            ],
            explanation: "Rhythm and timing descriptors help the doctor separate joint wear, inflammation and other causes.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "La douleur est intermittent et nocturne.",
            answer: "La douleur est intermittente et nocturne.",
            explanation: "The adjectives agree with \"la douleur\": \"intermittente\" (feminine); \"nocturne\" is the same in both genders.",
          },
        ],
      },
      {
        heading: "The pain scale",
        body: [
          "Intensity is measured on a scale: \"Sur une échelle de 0 à 10, 0 étant l'absence de douleur et 10 la pire douleur imaginable, à combien évaluez-vous votre douleur ?\" The patient answers \"à 7\", \"je dirais 6 sur 10\". Hospitals also use \"l'EVA\" (échelle visuelle analogique), a ruler with a slider. Note the absolute participle in the question: \"0 étant l'absence de douleur\".",
        ],
        examples: [
          { es: "Sur une échelle de 0 à 10, à combien évaluez-vous votre douleur ?", en: "On a scale of 0 to 10, how would you rate your pain?" },
          { es: "Je dirais 7 sur 10, surtout la nuit.", en: "I'd say 7 out of 10, especially at night." },
          { es: "À l'EVA, la patiente évalue sa douleur à 6.", en: "On the visual analogue scale, the patient rates her pain at 6." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[On a scale of] 0 to 10, she says 5.",
            sentence: "___ 0 à 10, elle dit 5.",
            answer: "Sur une échelle de",
            explanation: "The question is asked \"sur une échelle de 0 à 10\"; the answer is \"je dirais 5 sur 10\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "On a scale of 0 to 10, I'd say 8.",
            answer: "Sur une échelle de 0 à 10, je dirais 8.",
            altAnswers: ["Sur une échelle de zéro à dix, je dirais huit.", "Sur une échelle de 0 à 10, je dirais 8 sur 10.", "Sur une échelle de 0 à 10, je la mettrais à 8.", "Sur une échelle de 0 à 10, je dirais huit."],
            explanation: "\"Sur une échelle de... à...\"; the conditional \"je dirais\" softens the estimate.",
          },
        ],
      },
      {
        heading: "Relieved, made worse, céder",
        body: [
          "Relief and aggravation: \"la douleur est soulagée par le paracétamol\" (relieved), \"calmée par le repos\", \"aggravée par la toux\", \"cède spontanément\" (goes away on its own: \"céder\" is the clinical verb). \"Résister aux antalgiques\" means painkillers don't help: \"les antalgiques\" or \"les antidouleurs\" are painkillers.",
        ],
        examples: [
          { es: "La douleur cède spontanément en quelques minutes.", en: "The pain goes away on its own within a few minutes." },
          { es: "La douleur résiste aux antalgiques habituels.", en: "The pain doesn't respond to the usual painkillers." },
          { es: "La douleur est aggravée par la marche.", en: "The pain is made worse by walking." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The pain [goes away] on its own after a few minutes.",
            sentence: "La douleur ___ spontanément après quelques minutes.",
            answer: "cède",
            altAnswers: ["disparaît", "passe"],
            explanation: "\"Céder\" is the clinical verb for pain that stops; a patient would say \"ça passe tout seul\".",
          },
          {
            type: "listen-choose",
            audio: "La douleur est aggravée par la toux et calmée par le repos.",
            question: "What does it mean?",
            options: ["Coughing makes the pain worse and rest relieves it.", "The pain causes a cough and prevents rest.", "The cough is worse when resting.", "Rest makes the pain and the cough worse."],
            correctIndex: 0,
            explanation: "\"Aggravée par\" (made worse by) vs \"calmée / soulagée par\" (relieved by).",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, as a patient.",
        source: "It's a dull pain that never really goes away.",
        answer: "C'est une douleur sourde qui ne part jamais vraiment.",
        altAnswers: ["C'est une douleur sourde qui ne disparaît jamais vraiment.", "C'est une douleur sourde qui ne passe jamais vraiment.", "C'est une douleur sourde qui ne s'en va jamais vraiment."],
        explanation: "\"Sourde\" = dull, deep; patients say the pain \"part\", \"passe\" or \"s'en va\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, in a doctor's notes.",
        source: "Burning pain behind the breastbone after meals.",
        answer: "Douleur rétrosternale à type de brûlure après les repas.",
        altAnswers: ["Douleur rétrosternale à type de brûlure en post-prandial.", "Brûlure rétrosternale après les repas.", "Douleur à type de brûlure derrière le sternum après les repas.", "Douleur rétrosternale à type de brûlure, post-prandiale."],
        explanation: "\"Rétrosternale\" = behind the sternum; \"à type de brûlure\"; doctors also write \"post-prandiale\" (after meals).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, in a doctor's notes.",
        source: "Throbbing headache, relieved by rest in the dark.",
        answer: "Céphalée pulsatile, soulagée par le repos dans l'obscurité.",
        altAnswers: ["Céphalée pulsatile, calmée par le repos dans l'obscurité.", "Céphalées pulsatiles, soulagées par le repos dans l'obscurité.", "Céphalée pulsatile soulagée par le repos dans le noir.", "Mal de tête pulsatile, soulagé par le repos dans l'obscurité."],
        explanation: "\"Céphalée\" (headache, clinical, feminine) + \"pulsatile\"; \"soulagée par\" agrees with it.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The pain is worse at night and doesn't respond to painkillers.",
        answer: "La douleur est plus forte la nuit et résiste aux antalgiques.",
        altAnswers: ["La douleur est pire la nuit et résiste aux antidouleurs.", "La douleur est plus forte la nuit et ne cède pas aux antalgiques.", "La douleur s'aggrave la nuit et résiste aux antalgiques.", "La douleur est pire la nuit et résiste aux antalgiques.", "La douleur est plus forte la nuit et les antalgiques ne la soulagent pas."],
        explanation: "\"Résister aux antalgiques\" = not respond to painkillers.",
      },
      {
        type: "dictation",
        audio: "Cette douleur lancinante revient chaque soir.",
        explanation: "\"Lancinante\": a pain that keeps coming back in stabs or throbs, here every evening.",
      },
      {
        type: "speak",
        prompt: "Say it in French, rating your pain: I'd say seven out of ten, but at night it's worse.",
        text: "Je dirais sept sur dix, mais la nuit c'est pire.",
        explanation: "\"Je dirais\" (conditional) to estimate; \"pire\" is the comparative of \"mauvais\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change the patient's words into clinical French with « irradier ».",
        source: "Ça descend dans le bras.",
        answer: "La douleur irradie dans le bras.",
        altAnswers: ["La douleur irradie vers le bras."],
        explanation: "The patient's \"ça descend dans...\" is \"la douleur irradie dans / vers...\" in clinical French.",
      },
    ],
  },
  {
    slug: "c2-dialogue-lab-interrogatoire",
    level: "FR-C2",
    number: 4,
    title: "Dialogue Lab: L'Interrogatoire Médical",
    summary: "Answer a doctor's history-taking precisely: antécédents médicaux et chirurgicaux, allergies, traitements en cours, antécédents familiaux, tabac, alcool and vaccinations, with depuis, il y a and the passé composé.",
    duration: "18 min",
    sections: [
      {
        heading: "Scene 1: what brings you here, and your history",
        body: [
          "Mme Nathalie Lucas, 52, sees a new GP, Dr Karim Benali, after moving to Toulouse. The first visit starts with \"l'interrogatoire\" (the history-taking: a neutral medical word, nothing to do with a police interrogation). \"— Avant de parler de ce qui vous amène, j'aimerais connaître vos antécédents. Vous avez des problèmes de santé particuliers ? — Oui, je suis hypothyroïdienne depuis une dizaine d'années, et j'ai fait un diabète gestationnel pendant ma deuxième grossesse.\"",
        ],
        examples: [
          { es: "Qu'est-ce qui vous amène aujourd'hui ?", en: "What brings you here today?" },
          { es: "Je suis hypothyroïdienne depuis une dizaine d'années.", en: "I've had an underactive thyroid for about ten years." },
          { es: "J'ai fait une dépression après mon divorce.", en: "I went through a depression after my divorce." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What has Mme Lucas had, according to her first answer?",
            options: ["An underactive thyroid for ten years, and gestational diabetes in her second pregnancy.", "An overactive thyroid and type 1 diabetes since childhood.", "Nothing at all: she has never been ill.", "A thyroid operation and a heart attack."],
            correctIndex: 0,
            explanation: "\"Je suis hypothyroïdienne depuis une dizaine d'années, et j'ai fait un diabète gestationnel pendant ma deuxième grossesse\": an underactive thyroid, still present, and a pregnancy diabetes that is over.",
          },
        ],
      },
      {
        heading: "Scene 1: operations and hospital stays",
        body: [
          "It continues: \"— D'accord. Avez-vous déjà été opérée ? — Oui, de l'appendicite quand j'avais douze ans, et on m'a retiré la vésicule biliaire il y a trois ans. — Vous avez déjà été hospitalisée pour autre chose ? — Non, jamais.\"",
        ],
        examples: [
          { es: "Avez-vous déjà été opérée ?", en: "Have you ever had an operation?" },
          { es: "J'ai été opérée de l'appendicite quand j'avais douze ans.", en: "I had my appendix out when I was twelve." },
          { es: "On m'a retiré la vésicule biliaire il y a trois ans.", en: "I had my gallbladder removed three years ago." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which two operations has she had?",
            options: ["Her appendix at twelve, and her gallbladder three years ago.", "Her tonsils and her appendix, both as a child.", "Her gallbladder twice.", "None: she has only been hospitalised."],
            correctIndex: 0,
            explanation: "\"Opérée de l'appendicite quand j'avais douze ans, et on m'a retiré la vésicule biliaire il y a trois ans\". She has never been hospitalised for anything else.",
          },
        ],
      },
      {
        heading: "Les antécédents; être opéré de; faire + a disease",
        body: [
          "\"Les antécédents\" are your medical history: \"antécédents médicaux\" (illnesses), \"chirurgicaux\" (operations), \"familiaux\" (in the family). \"Ce qui vous amène\" (what brings you here) is the standard opening question. \"Être opéré(e) de\" + the organ or condition: \"être opéré de l'appendicite\", \"du genou\", \"d'une hernie\". \"Faire\" + a disease means to have an episode of it: \"faire un diabète\", \"faire une infection\", \"faire une dépression\", \"faire une crise d'asthme\".",
        ],
        examples: [
          { es: "Avez-vous des antécédents familiaux de diabète ?", en: "Is there any diabetes in your family?" },
          { es: "Il a été opéré d'une hernie l'an dernier.", en: "He had a hernia operation last year." },
          { es: "Elle a fait une crise d'asthme pendant la nuit.", en: "She had an asthma attack during the night." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[I had my knee operated on] two years ago.",
            sentence: "___ il y a deux ans.",
            answer: "J'ai été opéré du genou",
            altAnswers: ["J'ai été opérée du genou", "Je me suis fait opérer du genou"],
            explanation: "\"Être opéré(e) de\" + organ, or \"se faire opérer de\"; \"il y a\" + passé composé for the event.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, answering the doctor.",
            source: "I had my tonsils out when I was six.",
            answer: "J'ai été opéré des amygdales quand j'avais six ans.",
            altAnswers: ["J'ai été opérée des amygdales quand j'avais six ans.", "On m'a enlevé les amygdales quand j'avais six ans.", "On m'a retiré les amygdales quand j'avais six ans.", "Je me suis fait opérer des amygdales quand j'avais six ans.", "On m'a opéré des amygdales quand j'avais six ans.", "On m'a opérée des amygdales quand j'avais six ans."],
            explanation: "\"Être opéré(e) des amygdales\"; imparfait \"quand j'avais\" for age.",
          },
        ],
      },
      {
        heading: "Tenses that make an answer precise",
        body: [
          "Tense choice is what makes answers precise: \"depuis\" + present for a condition still present (\"je suis asthmatique depuis l'enfance\"), \"il y a\" + passé composé for a one-off event (\"on m'a opérée il y a trois ans\"), imparfait for the background (\"quand j'avais douze ans\"), \"pendant\" for a finished period.",
        ],
        examples: [
          { es: "Je suis diabétique depuis l'âge de trente ans.", en: "I've been diabetic since I was thirty." },
          { es: "On m'a opérée il y a trois ans.", en: "I had an operation three years ago." },
          { es: "J'ai eu de l'eczéma pendant toute mon enfance.", en: "I had eczema all through my childhood." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, answering the doctor.",
            source: "I've been asthmatic since childhood.",
            answer: "Je suis asthmatique depuis l'enfance.",
            altAnswers: ["Je suis asthmatique depuis mon enfance.", "J'ai de l'asthme depuis l'enfance.", "J'ai de l'asthme depuis mon enfance.", "Je fais de l'asthme depuis l'enfance."],
            explanation: "A condition still present: \"depuis\" + present tense.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je suis hypertendu il y a dix ans.",
            answer: "Je suis hypertendu depuis dix ans.",
            explanation: "A condition that is still present takes \"depuis\" with the present; \"il y a\" marks a one-off event in the past (\"on m'a opéré il y a dix ans\").",
          },
        ],
      },
      {
        heading: "Scene 2: current treatments",
        body: [
          "\"— Vous prenez des médicaments en ce moment ? — Oui, du Levothyrox, 75 microgrammes, tous les matins à jeun. Et parfois un somnifère, mais rarement. — Lequel ? — Je ne me souviens plus du nom, je vous montrerai la boîte.\"",
        ],
        examples: [
          { es: "Vous prenez des médicaments en ce moment ?", en: "Are you taking any medication at the moment?" },
          { es: "Je prends du Levothyrox tous les matins à jeun.", en: "I take Levothyrox every morning on an empty stomach." },
          { es: "Il est sous anticoagulants depuis son opération.", en: "He's been on blood thinners since his operation." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How does Mme Lucas take her Levothyrox?",
            options: ["75 micrograms every morning, on an empty stomach.", "75 milligrams in the evening, with food.", "Only when she feels tired.", "Twice a day, with a sleeping pill."],
            correctIndex: 0,
            explanation: "\"Du Levothyrox, 75 microgrammes, tous les matins à jeun\": \"à jeun\" means on an empty stomach. The sleeping pill is separate and rare.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, answering the doctor.",
            source: "I'm on antibiotics until Friday.",
            answer: "Je suis sous antibiotiques jusqu'à vendredi.",
            altAnswers: ["Je prends des antibiotiques jusqu'à vendredi.", "Je suis sous antibiotiques jusqu'à ce vendredi."],
            explanation: "\"Être sous\" + medicine (no article) = to be on.",
          },
        ],
      },
      {
        heading: "Scene 2: allergies",
        body: [
          "It continues: \"— Très bien. Vous êtes allergique à quelque chose ? — À la pénicilline : j'ai fait une réaction, des plaques rouges partout, il y a une vingtaine d'années. Et j'ai le rhume des foins au printemps. — Pas d'allergie alimentaire ? — Non, aucune.\"",
        ],
        examples: [
          { es: "Je suis allergique à la pénicilline.", en: "I'm allergic to penicillin." },
          { es: "J'ai fait une réaction allergique il y a une vingtaine d'années.", en: "I had an allergic reaction about twenty years ago." },
          { es: "Des allergies alimentaires ? Pas que je sache.", en: "Food allergies? Not that I know of." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The doctor asks: \"Vous avez des allergies médicamenteuses ?\" You don't think so but aren't sure. What do you say?",
            options: ["Pas que je sache.", "Pas que je sais.", "Non, jamais de la vie !", "Je n'en ai pas d'idée."],
            correctIndex: 0,
            explanation: "\"Pas que je sache\" (subjunctive of savoir) = not that I know of. \"Pas à ma connaissance\" works too.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I had [an allergic reaction] to penicillin: red blotches everywhere.",
            sentence: "J'ai fait ___ à la pénicilline : des plaques rouges partout.",
            answer: "une réaction allergique",
            explanation: "\"Faire une réaction (allergique)\" is the usual way to report it; \"des plaques rouges\" are the blotches.",
          },
        ],
      },
      {
        heading: "Être sous, à jeun, le rhume des foins",
        body: [
          "\"Prendre un traitement\", \"être sous\" + medicine (\"être sous antibiotiques\", \"être sous anticoagulants\") and \"les traitements en cours\" (current treatments) are the key phrases. \"À jeun\" means on an empty stomach. \"Un somnifère\" is a sleeping pill. \"Faire une réaction (allergique)\" = to have an allergic reaction. \"Le rhume des foins\" is hay fever (\"une rhinite allergique\" in clinical French).",
        ],
        examples: [
          { es: "Quels sont vos traitements en cours ?", en: "What treatments are you on at the moment?" },
          { es: "J'ai le rhume des foins dès le mois d'avril.", en: "I get hay fever from April onwards." },
          { es: "Il prend un somnifère de temps en temps.", en: "He takes a sleeping pill now and then." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "He [has been on] blood thinners since his stroke.",
            sentence: "Il ___ anticoagulants depuis son AVC.",
            answer: "est sous",
            explanation: "\"Être sous\" + medicine; \"depuis\" + present for an ongoing treatment.",
          },
        ],
      },
      {
        heading: "Careful negative answers",
        body: [
          "Negative answers: \"Non, aucune\" (agreeing with \"allergie\"), \"Non, aucun\", \"Pas que je sache\" (not that I know of: subjunctive of savoir), \"Pas à ma connaissance\". These are more precise than a bare \"non\", and doctors like them because they admit uncertainty.",
        ],
        examples: [
          { es: "Des allergies ? Non, aucune.", en: "Allergies? No, none." },
          { es: "Pas à ma connaissance.", en: "Not to my knowledge." },
          { es: "Non, aucun antécédent familial.", en: "No, no family history." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The doctor asks « Vous avez des antécédents familiaux de cancer ? » and you are sure there are none. Which answer is the most precise?",
            options: ["Non, aucun.", "Pas que je sache.", "Je ne sais pas trop.", "Peut-être, oui."],
            correctIndex: 0,
            explanation: "\"Non, aucun\" (agreeing with \"antécédent\") states there are none. \"Pas que je sache\" admits uncertainty, which is right only when you are not sure.",
          },
        ],
      },
      {
        heading: "Scene 3: the family history",
        body: [
          "\"— Dans votre famille, il y a des maladies particulières ? — Mon père a fait un infarctus à 60 ans, et ma mère a un diabète de type 2. Ma sœur a eu un cancer du sein, mais elle est guérie.\"",
        ],
        examples: [
          { es: "Mon père a fait un infarctus à soixante ans.", en: "My father had a heart attack at sixty." },
          { es: "Ma sœur a eu un cancer du sein, mais elle est guérie.", en: "My sister had breast cancer, but she's been cured." },
          { es: "Ma mère a un diabète de type 2 depuis vingt ans.", en: "My mother has had type 2 diabetes for twenty years." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Ma mère a un diabète de type deux et mon père a fait un infarctus.",
            question: "What does it mean?",
            options: ["My mother has type 2 diabetes and my father had a heart attack.", "My mother had two diabetic attacks and my father had a stroke.", "My mother and father both have type 2 diabetes.", "My mother is diabetic and my father has a heart murmur."],
            correctIndex: 0,
            explanation: "\"Faire un infarctus\" = to have a heart attack; \"un diabète de type 2\" takes the article.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, answering the doctor.",
            source: "My grandfather died of a stroke at seventy.",
            answer: "Mon grand-père est mort d'un AVC à soixante-dix ans.",
            altAnswers: ["Mon grand-père est décédé d'un AVC à soixante-dix ans.", "Mon grand-père est mort d'un AVC à 70 ans.", "Mon grand-père est décédé d'un AVC à 70 ans.", "Mon grand-père est mort d'un accident vasculaire cérébral à soixante-dix ans."],
            explanation: "\"Mourir / décéder de\" + cause; \"un AVC\" (accident vasculaire cérébral) = a stroke.",
          },
        ],
      },
      {
        heading: "Scene 3: smoking, alcohol, vaccinations",
        body: [
          "It continues: \"— Vous fumez ? — J'ai arrêté il y a cinq ans. Avant, je fumais un paquet par jour. J'ai fumé pendant vingt ans. — Et l'alcool ? — Un verre de vin de temps en temps, le week-end. — Vous êtes à jour de vos vaccins ? — Je crois, mais il faudrait vérifier le rappel du tétanos. — On va regarder ça.\"",
        ],
        examples: [
          { es: "J'ai arrêté de fumer il y a cinq ans.", en: "I stopped smoking five years ago." },
          { es: "J'ai fumé un paquet par jour pendant vingt ans.", en: "I smoked a pack a day for twenty years." },
          { es: "Vous êtes à jour de vos vaccins ?", en: "Are your vaccinations up to date?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is Mme Lucas's smoking history?",
            options: ["She stopped five years ago, after twenty years at a pack a day.", "She still smokes a pack a day.", "She has never smoked.", "She stopped twenty years ago."],
            correctIndex: 0,
            explanation: "\"J'ai arrêté il y a cinq ans. Avant, je fumais un paquet par jour. J'ai fumé pendant vingt ans\": twenty pack-years, stopped five years ago.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, answering the doctor.",
            source: "I stopped smoking three years ago; before that I smoked ten cigarettes a day.",
            answer: "J'ai arrêté de fumer il y a trois ans ; avant, je fumais dix cigarettes par jour.",
            altAnswers: ["J'ai arrêté de fumer il y a trois ans, avant je fumais dix cigarettes par jour.", "J'ai arrêté il y a trois ans ; avant, je fumais dix cigarettes par jour.", "J'ai arrêté de fumer il y a trois ans ; auparavant, je fumais dix cigarettes par jour."],
            explanation: "\"Il y a\" + passé composé for when you stopped; imparfait \"je fumais\" for the old habit.",
          },
        ],
      },
      {
        heading: "Paquets-années and the tenses of smoking",
        body: [
          "Smoking history is asked precisely and doctors convert it into \"paquets-années\" (pack-years): one pack a day for twenty years = 20 PA. \"J'ai arrêté de fumer il y a cinq ans\" (il y a + passé composé), \"je fumais un paquet par jour\" (imparfait for the habit), but \"j'ai fumé pendant vingt ans\": once you measure a closed period with \"pendant\", careful French switches to the passé composé. A former smoker is \"un ancien fumeur\" or, in a medical letter, \"tabagisme sevré\".",
        ],
        examples: [
          { es: "Son tabagisme est évalué à vingt paquets-années.", en: "His smoking is estimated at twenty pack-years." },
          { es: "Tabagisme sevré depuis cinq ans.", en: "Smoking stopped five years ago." },
          { es: "Avant, je fumais beaucoup plus.", en: "I used to smoke much more." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change « je fume » to a habit that is over.",
            source: "Je fume dix cigarettes par jour.",
            answer: "Avant, je fumais dix cigarettes par jour.",
            altAnswers: ["Je fumais dix cigarettes par jour."],
            explanation: "A past habit takes the imparfait: \"je fumais\". With a closed period measured by \"pendant\", careful French switches to the passé composé: \"j'ai fumé pendant vingt ans\".",
          },
        ],
      },
      {
        heading: "Vaccins, rappel, guéri or en rémission",
        body: [
          "\"Être à jour de ses vaccins\" (up to date with one's vaccinations), \"le rappel\" (booster: \"le rappel du DTP\" for diphtheria-tetanus-polio), \"le carnet de vaccination\" or \"le carnet de santé\" (the health booklet every French child has). \"Être guéri(e)\" = cured; \"être en rémission\" = in remission.",
        ],
        examples: [
          { es: "Il faudrait faire le rappel du tétanos.", en: "You should have a tetanus booster." },
          { es: "Le carnet de santé de l'enfant est à jour.", en: "The child's health booklet is up to date." },
          { es: "Il est en rémission depuis six mois.", en: "He has been in remission for six months." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Is your son [up to date with his] vaccinations?",
            sentence: "Votre fils est ___ vaccins ?",
            answer: "à jour de ses",
            explanation: "\"Être à jour de ses vaccins\" = to have one's vaccinations up to date; the possessive follows the subject: \"ses\" for \"votre fils\".",
          },
          {
            type: "multiple-choice",
            question: "A patient's cancer is under control but not declared over. What does the doctor say?",
            options: ["Il est en rémission.", "Il est guéri.", "Il est à jour.", "Il est sevré."],
            correctIndex: 0,
            explanation: "\"En rémission\" means under control but not declared cured; \"guéri\" means cured. \"À jour\" is for vaccinations and \"sevré\" for stopping smoking.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, as the doctor.",
        source: "Have you ever been hospitalised?",
        answer: "Vous avez déjà été hospitalisé ?",
        altAnswers: ["Avez-vous déjà été hospitalisé ?", "Avez-vous déjà été hospitalisée ?", "Vous avez déjà été hospitalisée ?", "Est-ce que vous avez déjà été hospitalisé ?", "Est-ce que vous avez déjà été hospitalisée ?"],
        explanation: "\"Déjà\" in a question = ever; the participle agrees with the patient.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, answering the doctor.",
        source: "I'm allergic to aspirin: I had a reaction ten years ago.",
        answer: "Je suis allergique à l'aspirine : j'ai fait une réaction il y a dix ans.",
        altAnswers: ["Je suis allergique à l'aspirine, j'ai fait une réaction il y a dix ans.", "Je suis allergique à l'aspirine : j'ai eu une réaction il y a dix ans.", "Je suis allergique à l'aspirine : j'ai fait une réaction allergique il y a dix ans."],
        explanation: "\"Allergique à\" + article; \"faire une réaction\" + \"il y a\" for the event.",
      },
      {
        type: "multiple-choice",
        question: "In \"l'interrogatoire médical\", what does \"interrogatoire\" mean?",
        options: ["the history-taking questions", "a police interrogation", "a written exam", "a second opinion"],
        correctIndex: 0,
        explanation: "In medicine \"l'interrogatoire\" is simply the structured questioning about history and symptoms.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, answering the doctor.",
        source: "I drink a glass of wine from time to time, at weekends.",
        answer: "Je bois un verre de vin de temps en temps, le week-end.",
        altAnswers: ["Je bois un verre de vin de temps en temps le week-end.", "Je prends un verre de vin de temps en temps, le week-end.", "Je bois un verre de vin de temps à autre, le week-end."],
        explanation: "\"Le week-end\" (with article) = at weekends, habitually.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: My uncle was treated for diabetes for ten years.",
        words: ["Mon", "oncle", "a", "été", "traité", "pour", "un", "diabète", "pendant", "dix ans."],
        translation: "My uncle was treated for diabetes for ten years.",
        explanation: "A closed period takes \"pendant\" with the passé composé: \"il a été traité pendant dix ans\".",
      },
      {
        type: "dictation",
        audio: "Je prends mon traitement tous les matins à jeun.",
        explanation: "\"À jeun\" = on an empty stomach; \"le traitement\" covers all the medicine you take.",
      },
      {
        type: "speak",
        prompt: "Say it in French (as a man): I've had high blood pressure for five years and I take medication every morning.",
        text: "Je suis hypertendu depuis cinq ans et je prends un traitement tous les matins.",
        explanation: "\"Être hypertendu(e)\" + \"depuis\" + present; a woman says \"hypertendue\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, answering the doctor.",
        source: "Any heart problems in the family? Not to my knowledge.",
        answer: "Des problèmes cardiaques dans la famille ? Pas à ma connaissance.",
        altAnswers: ["Des problèmes cardiaques dans la famille ? Pas que je sache.", "Des antécédents cardiaques dans la famille ? Pas à ma connaissance.", "Des problèmes cardiaques dans votre famille ? Pas à ma connaissance.", "Des problèmes cardiaques dans la famille ? Non, pas à ma connaissance."],
        explanation: "\"Pas à ma connaissance\" and \"pas que je sache\" (with the subjunctive of savoir) both admit that you are not certain, which doctors prefer to a bare \"non\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Are you [up to date with your] vaccinations?",
        sentence: "Vous êtes ___ vaccins ?",
        answer: "à jour de vos",
        altAnswers: ["à jour dans vos"],
        explanation: "\"Être à jour de ses vaccins\"; the booster is \"le rappel\".",
      },
    ],
  },
  {
    slug: "c2-medical-french-3",
    level: "FR-C2",
    number: 5,
    title: "Le Français Médical, Part 3 of 6",
    summary: "Clinical terms and their Greek and Latin roots (-ite, -algie, -ectomie, -scopie, -émie, hypo-, hyper-, tachy-, dys-), céphalée, dyspnée, asthénie, and the French acronyms HTA, AVC, IRM, ECG, read letter by letter.",
    duration: "18 min",
    sections: [
      {
        heading: "-ite and -algie: inflammation and pain",
        body: [
          "Clinical French builds most of its words from Greek and Latin pieces, often the same as in English, so decoding is fast once you know how French spells them. \"-ite\" (feminine) = inflammation: \"une appendicite\", \"une bronchite\", \"une otite\" (ear infection, very common in children), \"une gastro-entérite\" (\"une gastro\" in speech), \"une tendinite\", \"une conjonctivite\". \"-algie\" = pain: \"une névralgie\", \"une lombalgie\" (lower back pain), \"une gastralgie\", \"une arthralgie\" (joint pain).",
        ],
        examples: [
          { es: "Le petit a encore une otite, la troisième cet hiver.", en: "The little one has another ear infection, the third this winter." },
          { es: "Elle souffre d'une lombalgie chronique.", en: "She suffers from chronic lower back pain." },
          { es: "Après le match, il a développé une tendinite au coude.", en: "After the match he developed tendinitis in his elbow." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is \"une arthralgie\"?",
            options: ["joint pain", "inflammation of a joint", "removal of a joint", "looking inside a joint"],
            correctIndex: 0,
            explanation: "\"Arthr-\" (joint) + \"-algie\" (pain). Inflammation would be \"arthrite\", looking inside \"arthroscopie\".",
          },
          {
            type: "multiple-choice",
            question: "A child has an inflammation of the middle ear. What is it called in French?",
            options: ["une otite", "une otalgie", "une otectomie", "une otoscopie"],
            correctIndex: 0,
            explanation: "\"-ite\" marks inflammation: \"une otite\". \"-algie\" would be ear pain, \"-ectomie\" removal, \"-scopie\" looking inside.",
          },
        ],
      },
      {
        heading: "-ectomie, -scopie, -graphie",
        body: [
          "\"-ectomie\" = surgical removal: \"une appendicectomie\" (note the French form, with -icectomie), \"une amygdalectomie\", \"une mastectomie\", \"une hystérectomie\". \"-tomie\" = incision; \"-stomie\" = an artificial opening. \"-scopie\" = looking inside with an instrument: \"une coloscopie\", \"une gastroscopie\" (\"une fibroscopie\" in older usage), \"une arthroscopie\", \"une endoscopie\". \"-graphie\" = imaging that records: \"une échographie\" (\"une écho\"), \"une radiographie\" (\"une radio\"), \"une mammographie\".",
        ],
        examples: [
          { es: "Il a subi une appendicectomie en urgence.", en: "He had an emergency appendectomy." },
          { es: "On vous a prescrit une coloscopie de dépistage.", en: "You've been prescribed a screening colonoscopy." },
          { es: "L'échographie n'a rien montré d'anormal.", en: "The ultrasound showed nothing abnormal." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The colonoscopy showed nothing abnormal.",
            answer: "La coloscopie n'a rien montré d'anormal.",
            altAnswers: ["La coloscopie n'a rien révélé d'anormal.", "La coloscopie n'a montré aucune anomalie.", "La coloscopie n'a rien montré d'anormal du tout."],
            explanation: "\"-scopie\" means looking inside with an instrument: \"une coloscopie\". \"Rien ... d'anormal\" keeps \"de\" before the adjective.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "She is having [an ultrasound] of the knee tomorrow.",
            sentence: "Elle passe ___ du genou demain.",
            answer: "une échographie",
            explanation: "\"-graphie\" marks imaging that records: \"une échographie\" (an ultrasound, \"une écho\" in speech), \"une radiographie\", \"une mammographie\".",
          },
        ],
      },
      {
        heading: "-émie: in the blood",
        body: [
          "\"-émie\" = in the blood: \"la glycémie\" (blood sugar), \"la cholestérolémie\", \"l'anémie\" (lack of red cells), \"une septicémie\" (blood poisoning). Doctors say \"votre glycémie est un peu élevée\", while patients say \"j'ai du sucre\" or \"j'ai trop de cholestérol\".",
        ],
        examples: [
          { es: "Votre glycémie à jeun est un peu élevée.", en: "Your fasting blood sugar is slightly high." },
          { es: "Sa cholestérolémie est trop élevée.", en: "His blood cholesterol is too high." },
          { es: "Une septicémie a été diagnostiquée en réanimation.", en: "Blood poisoning was diagnosed in intensive care." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A patient says « j'ai du sucre ». How does the doctor put it?",
            options: ["Votre glycémie est élevée.", "Votre anémie est élevée.", "Votre septicémie est élevée.", "Votre cholestérolémie est basse."],
            correctIndex: 0,
            explanation: "Blood sugar is \"la glycémie\" (\"-émie\" = in the blood). \"L'anémie\" is a lack of red cells and \"une septicémie\" is blood poisoning.",
          },
        ],
      },
      {
        heading: "Hypo-, hyper-, tachy-, brady-, dys-, a-",
        body: [
          "\"Hypo-\" (below) and \"hyper-\" (above): \"l'hypertension\" (high blood pressure), \"l'hypoglycémie\" (low blood sugar, \"une hypo\" among diabetics), \"l'hyperthyroïdie\", \"l'hypothermie\". \"Tachy-\" (fast) and \"brady-\" (slow): \"une tachycardie\", \"une bradycardie\". \"Dys-\" (difficulty, abnormality): \"une dyspnée\" (difficulty breathing), \"une dysphagie\" (difficulty swallowing), \"la dyslexie\". \"A-\" or \"an-\" (absence): \"une aphasie\" (loss of speech), \"une anémie\", \"une anosmie\" (loss of smell).",
        ],
        examples: [
          { es: "Le patient présente une dyspnée d'effort.", en: "The patient is breathless on exertion." },
          { es: "Elle a fait une hypoglycémie pendant la nuit.", en: "She had a hypo during the night." },
          { es: "L'ECG montre une tachycardie à 120 battements par minute.", en: "The ECG shows tachycardia at 120 beats per minute." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The patient complains of [difficulty breathing] on exertion.",
            sentence: "Le patient se plaint d'une ___ d'effort.",
            answer: "dyspnée",
            explanation: "\"Dys-\" (difficulty) + \"-pnée\" (breathing): \"une dyspnée\", feminine.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change « hypo- » to its opposite.",
            source: "Le bilan a révélé une hypothyroïdie.",
            answer: "Le bilan a révélé une hyperthyroïdie.",
            explanation: "\"Hypo-\" means below, \"hyper-\" above: the thyroid is now overactive. The same pair gives \"hypoglycémie\" and \"hyperglycémie\".",
          },
        ],
      },
      {
        heading: "Learned symptom words",
        body: [
          "Some learned words have no transparent English twin and must be learnt: \"une céphalée\" (headache), \"une asthénie\" (fatigue, weakness), \"un œdème\" (swelling, with œ: [edɛm]), \"un prurit\" (itching), \"une ecchymose\" (bruise), \"une adénopathie\" (swollen lymph node), \"une syncope\" (fainting), \"une hémoptysie\" (coughing up blood). They are what you will read in a report.",
        ],
        examples: [
          { es: "Il se plaint de céphalées matinales et d'une asthénie importante.", en: "He complains of morning headaches and severe fatigue." },
          { es: "On note un œdème des deux chevilles.", en: "There is swelling of both ankles." },
          { es: "Depuis le Covid, elle souffre d'une anosmie partielle.", en: "Since Covid, she has partially lost her sense of smell." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each clinical term to its everyday meaning.",
            pairs: [
              { left: "une céphalée", right: "a headache" },
              { left: "une asthénie", right: "fatigue" },
              { left: "un prurit", right: "itching" },
              { left: "une syncope", right: "fainting" },
              { left: "une ecchymose", right: "a bruise" },
            ],
            explanation: "Learned words with no transparent English twin; patients say \"mal de tête\", \"fatigue\", \"ça gratte\", \"je suis tombé dans les pommes\", \"un bleu\".",
          },
        ],
      },
      {
        heading: "Gender and spelling traps",
        body: [
          "Gender: most -ite, -algie, -ie, -ée nouns are feminine (\"une céphalée\", \"une dyspnée\"), but \"un œdème\", \"un eczéma\", \"un infarctus\", \"un AVC\" are masculine. Spelling: French doubles letters differently: \"une ecchymose\", \"une hémorragie\" (two r), \"une diarrhée\" (two r, h after r).",
        ],
        examples: [
          { es: "Un œdème s'est formé autour de la cheville.", en: "Swelling formed around the ankle." },
          { es: "Le chirurgien a maîtrisé l'hémorragie.", en: "The surgeon brought the bleeding under control." },
          { es: "La diarrhée a duré deux jours.", en: "The diarrhoea lasted two days." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Une œdème a été constaté au niveau du genou.",
            answer: "Un œdème a été constaté au niveau du genou.",
            explanation: "\"Œdème\" is masculine, in spite of the final -e: \"un œdème\", like \"un eczéma\" and \"un infarctus\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Elle a été opérée d'une hémoragie digestive.",
            answer: "Elle a été opérée d'une hémorragie digestive.",
            explanation: "\"Hémorragie\" has two r's; so does \"diarrhée\", which also keeps the h after the r.",
          },
        ],
      },
      {
        heading: "Acronyms that don't match English",
        body: [
          "French medicine runs on acronyms, and they don't match English ones. \"L'HTA\" (hypertension artérielle) = high blood pressure. \"Un AVC\" (accident vasculaire cérébral) = a stroke. \"Un IDM\" (infarctus du myocarde) = a heart attack. \"Une IRM\" (imagerie par résonance magnétique) = an MRI, note the reversed letters. \"Un ECG\" (électrocardiogramme). \"La BPCO\" = COPD. \"Le sida\" (AIDS) and \"le VIH\" (HIV). \"Les IST\" = STIs.",
        ],
        examples: [
          { es: "Mon grand-père a fait un AVC l'année dernière.", en: "My grandfather had a stroke last year." },
          { es: "On m'a prescrit une IRM du genou.", en: "I've been prescribed an MRI of my knee." },
          { es: "Elle est traitée pour une HTA depuis dix ans.", en: "She has been treated for high blood pressure for ten years." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Il a fait un AVC.",
            question: "What does it mean?",
            options: ["He had a stroke.", "He had a heart attack.", "He had an MRI.", "He had a car accident."],
            correctIndex: 0,
            explanation: "\"Un AVC\" (accident vasculaire cérébral) = a stroke. A heart attack is \"un infarctus\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "My father had a heart attack and my mother has high blood pressure.",
            answer: "Mon père a fait un infarctus et ma mère a de l'hypertension.",
            altAnswers: ["Mon père a fait un infarctus et ma mère fait de l'hypertension.", "Mon père a eu un infarctus et ma mère a de l'hypertension.", "Mon père a fait une crise cardiaque et ma mère a de la tension.", "Mon père a fait un infarctus et ma mère a de la tension.", "Mon père a eu une crise cardiaque et ma mère a de l'hypertension."],
            explanation: "\"Faire un infarctus\"; \"avoir de l'hypertension\", or colloquially \"avoir de la tension\".",
          },
        ],
      },
      {
        heading: "How acronyms are pronounced, and their gender",
        body: [
          "Pronunciation: most acronyms are read letter by letter, with French letter names: AVC = \"a-vé-cé\", IRM = i + \"erre\" + \"emme\", HTA = \"ache-té-a\", ECG = \"e-cé-gé\", VIH = \"vé-i-ache\". Only those that form a pronounceable word are read as words: \"le sida\", \"le SAMU\", \"le SMUR\". Gender follows the head noun: \"un AVC\" (un accident), \"une IRM\" (une imagerie).",
        ],
        examples: [
          { es: "On lui a posé un ECG en urgence.", en: "They did an emergency ECG." },
          { es: "Le SAMU est arrivé en quelques minutes.", en: "The emergency medical service arrived within minutes." },
          { es: "Une IRM cérébrale a été programmée.", en: "A brain MRI has been scheduled." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How is \"IRM\" pronounced?",
            options: ["i-erre-emme", "irme", "aï-ar-èm", "i-ré-mé"],
            correctIndex: 0,
            explanation: "Letter by letter with French letter names: i, erre, emme.",
          },
          {
            type: "multiple-choice",
            question: "Which article goes with « IRM » ?",
            options: ["une IRM", "un IRM", "le IRM", "des IRM, always plural"],
            correctIndex: 0,
            explanation: "The gender follows the head noun: \"une imagerie par résonance magnétique\", so \"une IRM\". By the same rule \"un AVC\" (un accident).",
          },
        ],
      },
      {
        heading: "Tests: la prise de sang, le bilan, le scanner",
        body: [
          "Tests: \"une prise de sang\" (a blood test, the act), \"un bilan sanguin\" (the set of results), \"une NFS\" (numération formule sanguine: full blood count), \"une analyse d'urine\", \"un scanner\" (CT scan; in hospital jargon \"un TDM\", tomodensitométrie), \"une radio\". You have your blood taken (\"faire une prise de sang\") at \"le laboratoire d'analyses\" (\"le labo\"), usually \"à jeun\". \"Le scanner\" is the CT scan, never a supermarket scanner in this context.",
        ],
        examples: [
          { es: "Je dois faire une prise de sang à jeun demain matin.", en: "I have to have a fasting blood test tomorrow morning." },
          { es: "Le bilan sanguin est normal, à part une légère anémie.", en: "The blood tests are normal, apart from slight anaemia." },
          { es: "Le scanner a confirmé la fracture.", en: "The CT scan confirmed the fracture." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I have to have an MRI next week.",
            answer: "Je dois passer une IRM la semaine prochaine.",
            altAnswers: ["Je dois faire une IRM la semaine prochaine.", "Je vais passer une IRM la semaine prochaine.", "Je vais faire une IRM la semaine prochaine."],
            explanation: "\"Une IRM\" (feminine, reversed letters vs MRI); one \"passe\" or \"fait\" an exam.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I have to have [a blood test] before the operation.",
            sentence: "Je dois faire ___ avant l'opération.",
            answer: "une prise de sang",
            explanation: "The act of taking blood is \"une prise de sang\"; the set of results is \"un bilan sanguin\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "My son has an ear infection and a temperature.",
        answer: "Mon fils a une otite et de la fièvre.",
        altAnswers: ["Mon fils a une otite et il a de la fièvre.", "Mon fils a une otite et de la température."],
        explanation: "\"Une otite\" (ot- = ear, -ite = inflammation): the most common childhood infection.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, in a medical report.",
        source: "Patient breathless on exertion, with swelling of the ankles.",
        answer: "Patient dyspnéique à l'effort, avec œdème des chevilles.",
        altAnswers: ["Patient présentant une dyspnée d'effort avec œdème des chevilles.", "Patient dyspnéique à l'effort, avec des œdèmes des chevilles.", "Dyspnée d'effort et œdème des chevilles.", "Patient dyspnéique à l'effort avec œdèmes des chevilles."],
        explanation: "\"Dyspnéique\" (adjective of dyspnée) and \"œdème\" (masculine, with œ): report style drops verbs.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The blood tests show slight anaemia.",
        answer: "Le bilan sanguin montre une légère anémie.",
        altAnswers: ["Le bilan sanguin révèle une légère anémie.", "Les analyses de sang montrent une légère anémie.", "La prise de sang montre une légère anémie.", "Le bilan sanguin met en évidence une légère anémie."],
        explanation: "\"Le bilan sanguin\" (results); \"une anémie\" (an- = without + -émie).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "He had his tonsils removed: a tonsillectomy.",
        answer: "On lui a retiré les amygdales : une amygdalectomie.",
        altAnswers: ["Il s'est fait retirer les amygdales : une amygdalectomie.", "On lui a enlevé les amygdales : une amygdalectomie.", "Il a été opéré des amygdales : une amygdalectomie.", "Il s'est fait enlever les amygdales : une amygdalectomie."],
        explanation: "\"Amygdale\" (tonsil) + \"-ectomie\" (removal).",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: You must have a urine test tomorrow morning.",
        words: ["Vous", "devez", "faire", "une", "analyse", "d'urine", "demain", "matin."],
        translation: "You must have a urine test tomorrow morning.",
        explanation: "\"Faire une analyse d'urine\" at the lab, like \"faire une prise de sang\"; the lab is \"le laboratoire d'analyses\".",
      },
      {
        type: "dictation",
        audio: "Le patient se plaint de céphalées et d'une asthénie.",
        explanation: "\"Céphalées\" (headaches) and \"asthénie\" (fatigue): learned words of medical reports.",
      },
      {
        type: "speak",
        prompt: "Say it in French: I've been prescribed an MRI and a full blood test.",
        text: "On m'a prescrit une IRM et un bilan sanguin complet.",
        tip: "IRM: i-erre-emme, each letter clearly.",
        explanation: "Acronyms are read letter by letter; \"une IRM\" is feminine.",
      },
      {
        type: "matching",
        instructions: "Match each acronym to its English equivalent.",
        pairs: [
          { left: "un AVC", right: "a stroke" },
          { left: "l'HTA", right: "high blood pressure" },
          { left: "une IRM", right: "an MRI" },
          { left: "le VIH", right: "HIV" },
          { left: "la BPCO", right: "COPD" },
        ],
        explanation: "French acronyms follow French word order: \"virus de l'immunodéficience humaine\" → VIH.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "She had [a hypo] during the night.",
        sentence: "Elle a fait ___ pendant la nuit.",
        answer: "une hypoglycémie",
        altAnswers: ["une hypo"],
        explanation: "\"Hypo-\" (low) + \"glyc-\" (sugar) + \"-émie\" (in the blood).",
      },
    ],
  },
  {
    slug: "c2-medical-french-4",
    level: "FR-C2",
    number: 6,
    title: "Le Français Médical, Part 4 of 6",
    summary: "Medicines and dosage: la posologie, comprimé, gélule, sachet, sirop, suppositoire, le générique; à jeun, au cours du repas, à renouveler; effets indésirables, contre-indications, la notice; and the drogue and préservatif traps.",
    duration: "18 min",
    sections: [
      {
        heading: "Tablets, capsules, sachets",
        body: [
          "A medicine (\"un médicament\") comes in a form (\"une forme galénique\", in pharmacists' jargon). \"Un comprimé\" is a tablet (\"un comprimé sécable\" can be broken in two; \"effervescent\" dissolves in water; \"à croquer\" is chewable; \"orodispersible\" melts on the tongue). \"Une gélule\" is a capsule. \"Un sachet\" is a powder to dissolve.",
        ],
        examples: [
          { es: "Prenez un comprimé effervescent dans un verre d'eau.", en: "Take one effervescent tablet in a glass of water." },
          { es: "Ces gélules se prennent avec un grand verre d'eau.", en: "These capsules are taken with a large glass of water." },
          { es: "Ce comprimé est sécable : vous pouvez le couper en deux.", en: "This tablet is scored: you can break it in two." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Take one capsule with a large glass of water.",
            answer: "Prenez une gélule avec un grand verre d'eau.",
            altAnswers: ["Prendre une gélule avec un grand verre d'eau.", "Prends une gélule avec un grand verre d'eau.", "Il faut prendre une gélule avec un grand verre d'eau."],
            explanation: "A capsule is \"une gélule\"; a tablet \"un comprimé\". The infinitive \"Prendre\" is also typical of instructions.",
          },
          {
            type: "multiple-choice",
            question: "The pharmacist says a tablet is « orodispersible ». What do you do with it?",
            options: ["Let it melt on your tongue.", "Dissolve it in a glass of water.", "Chew it before swallowing.", "Break it in two."],
            correctIndex: 0,
            explanation: "\"Orodispersible\" melts on the tongue. The effervescent one dissolves in water, \"à croquer\" is chewed, and \"sécable\" can be broken in two.",
          },
        ],
      },
      {
        heading: "Syrups, drops, suppositories",
        body: [
          "\"Le sirop\" is syrup, measured in \"cuillères à café\" or with \"la pipette doseuse\". \"Les gouttes\" are drops (\"des gouttes dans le nez, dans les yeux\"). \"Un suppositoire\" is still common in France, especially for children's fever, much more than in the English-speaking world.",
        ],
        examples: [
          { es: "Pour le petit, je vous donne le sirop avec la pipette doseuse.", en: "For your little one, I'll give you the syrup with the dosing syringe." },
          { es: "Mettez deux gouttes dans chaque œil, trois fois par jour.", en: "Put two drops in each eye three times a day." },
          { es: "Un suppositoire en cas de fièvre, pas plus de trois par jour.", en: "One suppository if there's a fever, no more than three a day." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Measure the syrup with [the dosing syringe].",
            sentence: "Mesurez le sirop avec ___.",
            answer: "la pipette doseuse",
            explanation: "\"La pipette doseuse\" is the dosing syringe that comes with a children's syrup; doses can also be given in \"cuillères à café\".",
          },
        ],
      },
      {
        heading: "Creams, injections, the nurse",
        body: [
          "For the skin: \"une crème\", \"une pommade\" (ointment), \"un gel\", \"un patch\" or \"un timbre\". For injections: \"une piqûre\" (everyday: \"faire une piqûre\") or \"une injection\". A nurse (\"un infirmier\", \"une infirmière\") comes to the house for injections or dressings (\"les pansements\").",
        ],
        examples: [
          { es: "Une infirmière passera tous les matins pour la piqûre.", en: "A nurse will come every morning for the injection." },
          { es: "Appliquez la pommade matin et soir sur la zone irritée.", en: "Apply the ointment morning and evening to the irritated area." },
          { es: "L'infirmière vient refaire le pansement tous les deux jours.", en: "The nurse comes to change the dressing every two days." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your father needs a daily injection at home. Who comes?",
            options: ["une infirmière", "une pharmacienne", "une kinésithérapeute", "une sage-femme"],
            correctIndex: 0,
            explanation: "\"Un infirmier / une infirmière\" comes to the house for injections and dressings. A pharmacist dispenses, a physiotherapist rehabilitates, a midwife delivers babies.",
          },
        ],
      },
      {
        heading: "The names of drug families, and le générique",
        body: [
          "Two generic words to master: \"un antalgique\" or \"un antidouleur\" (painkiller), \"un anti-inflammatoire\", \"un antibiotique\", \"un antihistaminique\", \"un somnifère\", \"un anxiolytique\". And \"le générique\": a generic drug. Pharmacists will ask \"Vous acceptez le générique ?\", because they are expected to substitute it; refusing it can mean paying more and claiming reimbursement later.",
        ],
        examples: [
          { es: "Vous acceptez le générique ?", en: "Is the generic all right for you?" },
          { es: "Le médecin lui a prescrit un anti-inflammatoire pour trois jours.", en: "The doctor prescribed an anti-inflammatory for three days." },
          { es: "Je préfère un antidouleur simple, sans ordonnance.", en: "I'd rather have a simple painkiller, without a prescription." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The pharmacist asks: \"Vous acceptez le générique ?\" What is she offering?",
            options: ["a generic version of the medicine", "a free sample", "a general check-up", "a different brand at a higher price"],
            correctIndex: 0,
            explanation: "\"Le générique\" = the generic drug, which pharmacists substitute by default.",
          },
          {
            type: "multiple-choice",
            question: "A friend says: \"Le médecin m'a donné une ordonnance à renouveler.\" What does it mean?",
            options: ["The prescription can be refilled.", "She must see the doctor again tomorrow.", "The prescription has expired.", "She must renew her health card."],
            correctIndex: 0,
            explanation: "\"À renouveler\" (+ number of times) lets the pharmacy dispense it again.",
          },
        ],
      },
      {
        heading: "La posologie: how much and how often",
        body: [
          "\"La posologie\" is the dosage: how much, how often and for how long. Prescriptions and leaflets use the infinitive or a nominal style: \"1 comprimé matin et soir pendant 7 jours\", \"2 gélules 3 fois par jour\", \"1 sachet le soir au coucher\", \"à renouveler 3 fois\" (the prescription can be refilled three times). \"Ne pas dépasser 3 g par jour\" (do not exceed). \"Toutes les six heures\" (every six hours), \"en cas de douleur\" (as needed, when in pain), \"si besoin\".",
        ],
        examples: [
          { es: "Un comprimé matin et soir pendant sept jours.", en: "One tablet morning and evening for seven days." },
          { es: "Ne pas dépasser trois grammes par jour.", en: "Do not exceed three grams a day." },
          { es: "Ordonnance à renouveler trois fois.", en: "Prescription to be refilled three times." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, in the infinitive style of a prescription.",
            source: "Take two tablets three times a day, during meals.",
            answer: "Prendre deux comprimés trois fois par jour, au cours des repas.",
            altAnswers: ["Prendre deux comprimés trois fois par jour au cours des repas.", "Prendre deux comprimés trois fois par jour, pendant les repas.", "Prendre 2 comprimés 3 fois par jour, au cours des repas.", "Prendre deux comprimés trois fois par jour, au moment des repas."],
            explanation: "Instructions in the infinitive; \"au cours des repas\" = during meals.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into the infinitive style of a prescription.",
            source: "Vous prendrez un comprimé toutes les six heures.",
            answer: "Prendre un comprimé toutes les six heures.",
            explanation: "Prescriptions and leaflets use the infinitive: \"prendre\", \"ne pas dépasser\", \"avaler sans croquer\", with no subject.",
          },
        ],
      },
      {
        heading: "When to take it: meals and bedtime",
        body: [
          "Timing in relation to meals: \"à jeun\" (on an empty stomach, usually half an hour before eating), \"au cours du repas\" or \"au milieu du repas\" (during the meal), \"à distance des repas\" (between meals), \"au coucher\" (at bedtime). \"Avaler sans croquer\" (swallow without chewing). \"Laisser fondre sous la langue\" (let it dissolve under the tongue).",
        ],
        examples: [
          { es: "À prendre au milieu du repas.", en: "To be taken in the middle of a meal." },
          { es: "Prendre le matin à jeun, trente minutes avant le petit-déjeuner.", en: "Take in the morning on an empty stomach, thirty minutes before breakfast." },
          { es: "Un comprimé au coucher, à laisser fondre sous la langue.", en: "One tablet at bedtime, to be left to dissolve under the tongue." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Un sachet le soir au coucher, pendant dix jours.",
            question: "What does it mean?",
            options: ["One sachet in the evening at bedtime, for ten days.", "One sachet every evening after dinner, for two weeks.", "Ten sachets at bedtime.", "One sachet when lying down, every ten days."],
            correctIndex: 0,
            explanation: "\"Au coucher\" = at bedtime; \"pendant dix jours\" = for ten days.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Do not exceed] four tablets a day.",
            sentence: "___ quatre comprimés par jour.",
            answer: "Ne pas dépasser",
            explanation: "Negative infinitive: both \"ne\" and \"pas\" come before the infinitive.",
          },
        ],
      },
      {
        heading: "Duration and adherence",
        body: [
          "Duration and adherence: \"pendant 10 jours\", \"jusqu'à la fin de la boîte\", \"ne pas arrêter le traitement sans avis médical\", \"en cas d'oubli, ne pas doubler la dose\". These phrases recur on every \"ordonnance\" and every \"notice\", and the pharmacist will repeat them to you orally, usually in a very compressed way.",
        ],
        examples: [
          { es: "En cas d'oubli, ne prenez pas de dose double.", en: "If you miss a dose, don't take a double dose." },
          { es: "Le traitement est à poursuivre jusqu'à la fin de la boîte.", en: "The treatment must be continued to the end of the box." },
          { es: "N'arrêtez pas les antibiotiques au bout de deux jours.", en: "Don't stop the antibiotics after two days." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Don't stop the treatment without medical advice.",
            answer: "N'arrêtez pas le traitement sans avis médical.",
            altAnswers: ["Ne pas arrêter le traitement sans avis médical.", "N'arrête pas le traitement sans avis médical.", "N'interrompez pas le traitement sans avis médical.", "Ne pas interrompre le traitement sans avis médical."],
            explanation: "Imperative or negative infinitive; \"sans avis médical\" with no article.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "If you miss a dose, don't take a double dose.",
            answer: "En cas d'oubli, ne prenez pas de dose double.",
            altAnswers: ["En cas d'oubli, ne doublez pas la dose.", "En cas d'oubli, ne pas doubler la dose.", "Si vous oubliez une prise, ne doublez pas la dose suivante.", "En cas d'oubli, ne prenez pas une double dose."],
            explanation: "\"En cas d'oubli\" (nominal) is the leaflet's phrase; \"une prise\" = one dose taken.",
          },
        ],
      },
      {
        heading: "La notice and its sections",
        body: [
          "Every box contains \"la notice\" (the patient information leaflet). Its sections: \"Indications thérapeutiques\" (what it's for), \"Contre-indications\" (when not to take it), \"Mises en garde et précautions d'emploi\" (warnings), \"Interactions médicamenteuses\", \"Grossesse et allaitement\", \"Posologie\", \"Effets indésirables\" (side effects: \"les effets secondaires\" in speech), \"Conservation\" (storage: \"à conserver à l'abri de la lumière\").",
        ],
        examples: [
          { es: "Lisez attentivement la notice avant utilisation.", en: "Read the leaflet carefully before use." },
          { es: "Ce médicament est contre-indiqué pendant la grossesse.", en: "This medicine must not be used during pregnancy." },
          { es: "Les effets indésirables les plus fréquents sont des maux de tête.", en: "The most common side effects are headaches." },
          { es: "À conserver à l'abri de la lumière et de l'humidité.", en: "Store away from light and moisture." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which section of the notice tells you when NOT to take the medicine?",
            options: ["Contre-indications", "Indications thérapeutiques", "Posologie", "Conservation"],
            correctIndex: 0,
            explanation: "\"Contre-indications\" lists the cases where the medicine must not be used. \"Indications thérapeutiques\" says what it is for, \"posologie\" the dose, \"conservation\" how to store it.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The most common [side effects] are nausea and dizziness.",
            sentence: "Les ___ les plus fréquents sont les nausées et les vertiges.",
            answer: "effets indésirables",
            altAnswers: ["effets secondaires"],
            explanation: "\"Effets indésirables\" (official) or \"effets secondaires\" (everyday).",
          },
        ],
      },
      {
        heading: "Une drogue is not a medicine",
        body: [
          "Now the traps. \"Une drogue\" is an illegal drug (\"la drogue\", \"se droguer\"), never a medicine: \"Je prends des drogues pour mon cœur\" would alarm your listener. Say \"des médicaments\". In the same way \"une pharmacie\" is a chemist's, and you'll never find drugs in \"un drugstore\" in France (the word exists, for a shop selling a bit of everything).",
        ],
        examples: [
          { es: "Il s'est mis à se droguer à l'adolescence.", en: "He started taking drugs as a teenager." },
          { es: "La lutte contre la drogue mobilise la police.", en: "The fight against drugs keeps the police busy." },
          { es: "Je prends trois médicaments par jour.", en: "I take three medicines a day." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I take medicine for my blood pressure.",
            answer: "Je prends des médicaments pour ma tension.",
            altAnswers: ["Je prends un médicament pour ma tension.", "Je prends des médicaments contre l'hypertension.", "Je prends un traitement pour ma tension.", "Je prends des médicaments pour la tension."],
            explanation: "Medicine = \"un médicament\"; \"une drogue\" would mean an illegal drug.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je prends des drogues pour mon cœur.",
            answer: "Je prends des médicaments pour mon cœur.",
            explanation: "\"La drogue\" means illegal drugs; a prescribed medicine is \"un médicament\".",
          },
        ],
      },
      {
        heading: "Préservatif, conservateur, excité",
        body: [
          "And the most embarrassing: \"un préservatif\" is a condom. A preservative in food or cosmetics is \"un conservateur\" (\"sans conservateurs\", preservative-free). Similarly, \"excité\" is often sexual where English 'excited' is not: say \"impatient\" or \"enthousiaste\".",
        ],
        examples: [
          { es: "Ce yaourt est garanti sans conservateurs.", en: "This yoghurt is guaranteed preservative-free." },
          { es: "Ce produit est sans conservateurs ni colorants.", en: "This product contains no preservatives or colourings." },
          { es: "Les enfants sont impatients de partir en vacances.", en: "The children can't wait to go on holiday." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You want to say this jam contains no preservatives. Which is right?",
            options: ["Cette confiture est sans conservateurs.", "Cette confiture est sans préservatifs.", "Cette confiture est sans drogues.", "Cette confiture est sans préservations."],
            correctIndex: 0,
            explanation: "\"Un conservateur\" = a preservative. \"Un préservatif\" = a condom.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je suis très excité de commencer ce nouveau travail.",
            answer: "Je suis très enthousiaste à l'idée de commencer ce nouveau travail.",
            altAnswers: ["Je suis très impatient de commencer ce nouveau travail.", "Je suis très impatiente de commencer ce nouveau travail.", "Je suis très enthousiaste à l'idée de commencer ce nouvel emploi."],
            explanation: "\"Excité\" is usually sexual in French; for English 'excited' say \"impatient de\" or \"enthousiaste à l'idée de\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, in the infinitive style of a prescription.",
        source: "One tablet in the morning on an empty stomach.",
        answer: "Un comprimé le matin à jeun.",
        altAnswers: ["Prendre un comprimé le matin à jeun.", "1 comprimé le matin à jeun."],
        explanation: "\"À jeun\" = before eating anything.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "This medicine must not be taken while breastfeeding.",
        answer: "Ce médicament est contre-indiqué pendant l'allaitement.",
        altAnswers: ["Ce médicament ne doit pas être pris pendant l'allaitement.", "Ce médicament est contre-indiqué en cas d'allaitement.", "Il ne faut pas prendre ce médicament pendant l'allaitement."],
        explanation: "\"Contre-indiqué\" is the leaflet's term; \"l'allaitement\" = breastfeeding.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Store away from light, below 25 degrees.",
        answer: "À conserver à l'abri de la lumière, à une température inférieure à 25 degrés.",
        altAnswers: ["À conserver à l'abri de la lumière, à une température ne dépassant pas 25 °C.", "Conserver à l'abri de la lumière, à une température inférieure à 25 °C.", "À conserver à l'abri de la lumière et en dessous de 25 degrés.", "À conserver à l'abri de la lumière, à une température inférieure à 25 °C."],
        explanation: "\"À conserver\" (à + infinitive = to be...) + \"à l'abri de\" (sheltered from).",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Let the tablet dissolve under the tongue.",
        words: ["Laisser", "fondre", "le comprimé", "sous", "la langue."],
        translation: "Let the tablet dissolve under the tongue.",
        explanation: "\"Laisser fondre\": laisser + infinitive, with the object after both verbs.",
      },
      {
        type: "dictation",
        audio: "Ne pas dépasser six comprimés par jour.",
        explanation: "Negative infinitive: \"ne pas\" together before the verb.",
      },
      {
        type: "speak",
        prompt: "Ask the pharmacist in French: Should I take it during or after the meal?",
        text: "Est-ce que je dois le prendre pendant ou après le repas ?",
        explanation: "The key timing question; \"le\" refers to the medicine.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Swallow the capsules whole, without chewing them.",
        answer: "Avalez les gélules entières, sans les croquer.",
        altAnswers: ["Avaler les gélules entières, sans les croquer.", "Avalez les gélules telles quelles, sans les croquer.", "Avalez les gélules entières sans les mâcher.", "Avaler les gélules entières sans les mâcher."],
        explanation: "\"Entières\" agrees with \"gélules\"; \"croquer\" (bite, crunch) is the leaflet verb.",
      },
    ],
  },
  {
    slug: "c2-contrast-technical-vs-everyday-medical",
    level: "FR-C2",
    number: 7,
    title: "Contrast Clinic: Le Terme Savant et le Mot de Tous les Jours",
    summary: "Move between registers: céphalée / mal de tête, dyspnée / essoufflement, hypertension / avoir de la tension, prurit / démangeaisons, asthénie / fatigue, érythème / rougeur, ecchymose / bleu; when each sounds natural, pedantic or vague.",
    duration: "17 min",
    sections: [
      {
        heading: "Two vocabularies for one body",
        body: [
          "French medicine runs on two parallel vocabularies. The learned term (\"le terme savant\"), built on Greek or Latin, is used by professionals among themselves and in writing; the everyday word (\"le mot courant\") is what patients say and what a good doctor says back to them.",
        ],
        examples: [
          { es: "J'ai des maux de tête tous les matins.", en: "I get headaches every morning." },
          { es: "Patiente de 45 ans consultant pour des céphalées matinales.", en: "45-year-old patient seen for morning headaches." },
          { es: "Le compte rendu parle d'asthénie ; le patient dit qu'il est fatigué.", en: "The report says asthenia; the patient says he's tired." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Who uses « le terme savant » such as « une céphalée » ?",
            options: ["Professionals among themselves and in writing.", "Patients talking to their family.", "A doctor reassuring a frightened patient.", "Pharmacists explaining a dose."],
            correctIndex: 0,
            explanation: "The learned term belongs to professionals and to writing; speaking to a patient, a good doctor uses the everyday word (\"un mal de tête\").",
          },
        ],
      },
      {
        heading: "The pairs, term by term",
        body: [
          "\"Une céphalée\" / \"un mal de tête\" (plural \"des maux de tête\"). \"Une dyspnée\" / \"un essoufflement\" (\"je suis essoufflé\"). \"Un prurit\" / \"des démangeaisons\" (\"ça me gratte\", \"ça me démange\"). \"Une asthénie\" / \"de la fatigue\". \"Un érythème\" / \"une rougeur\" (\"des plaques rouges\"). \"Une ecchymose\" / \"un bleu\". \"Une épistaxis\" / \"un saignement de nez\". \"Une otalgie\" / \"un mal d'oreille\".",
        ],
        examples: [
          { es: "Ça me gratte partout depuis que j'ai changé de lessive.", en: "I've been itchy all over since I changed washing powder." },
          { es: "Prurit diffus apparu après un changement de lessive.", en: "Widespread itching that began after a change of detergent." },
          { es: "Je me suis fait une ecchymose au bras : un gros bleu.", en: "I got an ecchymosis on my arm: a big bruise." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each learned term to its everyday word.",
            pairs: [
              { left: "une dyspnée", right: "un essoufflement" },
              { left: "un prurit", right: "des démangeaisons" },
              { left: "un érythème", right: "une rougeur" },
              { left: "une ecchymose", right: "un bleu" },
              { left: "une épistaxis", right: "un saignement de nez" },
            ],
            explanation: "Each learned term has a plain twin; doctors switch between them depending on whom they speak to.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The nurse is going to [take your blood pressure].",
            sentence: "L'infirmière va vous ___.",
            answer: "prendre la tension",
            explanation: "\"Prendre la tension\": \"la tension\" alone is blood pressure; \"avoir de la tension\" is high blood pressure.",
          },
        ],
      },
      {
        heading: "Tricky everyday words",
        body: [
          "Some everyday words are themselves tricky. \"Avoir de la tension\" or \"faire de la tension\" means to have high blood pressure (the clinical \"hypertension\"), even though \"tension\" alone just means blood pressure (\"prendre la tension\"). \"Avoir de la température\" means to have a fever. \"Tomber dans les pommes\" is the colloquial \"faire un malaise\" or \"perdre connaissance\" (clinical: \"une syncope\"). \"Avoir les jambes lourdes\" is a recognised complaint in France (venous insufficiency), with its own products in every pharmacy.",
        ],
        examples: [
          { es: "Ma mère fait de la tension, elle prend un traitement.", en: "My mother has high blood pressure, she's on medication." },
          { es: "L'infirmière va vous prendre la tension.", en: "The nurse is going to take your blood pressure." },
          { es: "Il est tombé dans les pommes en voyant l'aiguille.", en: "He passed out at the sight of the needle." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your neighbour says: \"Mon mari fait de la tension.\" What does she mean?",
            options: ["Her husband has high blood pressure.", "Her husband is very stressed.", "Her husband is doing exercises.", "Her husband is tense with her."],
            correctIndex: 0,
            explanation: "\"Faire / avoir de la tension\" = to have high blood pressure, in everyday French.",
          },
          {
            type: "multiple-choice",
            question: "Which is the everyday equivalent of \"une syncope\"?",
            options: ["tomber dans les pommes", "avoir le cafard", "avoir mal au cœur", "être dans les choux"],
            correctIndex: 0,
            explanation: "\"Tomber dans les pommes\" = to faint. \"Avoir le cafard\" = to feel down; \"avoir mal au cœur\" = to feel sick.",
          },
        ],
      },
      {
        heading: "Both directions",
        body: [
          "Learn the pairs in both directions: you need to understand the term in a report and produce the everyday word in conversation, and vice versa if you work in health.",
        ],
        examples: [
          { es: "Le médecin lit « prurit » et dit « des démangeaisons ».", en: "The doctor reads 'pruritus' and says 'itching'." },
          { es: "Elle a de la température depuis hier.", en: "She's had a temperature since yesterday." },
          { es: "J'ai les jambes lourdes le soir.", en: "My legs feel heavy in the evening." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the patient's words into the learned term.",
            source: "J'ai souvent des saignements de nez.",
            answer: "Épistaxis récidivantes.",
            altAnswers: ["Épistaxis récidivantes depuis plusieurs mois."],
            explanation: "The report compresses: \"des saignements de nez\" becomes \"épistaxis\", and \"souvent\" becomes the adjective \"récidivantes\" (recurring), with no verb and no person.",
          },
        ],
      },
      {
        heading: "Pedantic in the mouth of a patient",
        body: [
          "A patient who says \"Docteur, j'ai une céphalée\" sounds odd, slightly pedantic or like someone who has spent too long on medical websites. A doctor who tells a frightened patient \"Vous présentez une dyspnée d'effort avec un œdème des membres inférieurs\" is technically precise and humanly absent. The natural version: \"Vous êtes essoufflé quand vous faites un effort, et vos jambes sont gonflées.\"",
        ],
        examples: [
          { es: "Vous êtes essoufflé quand vous faites un effort, et vos jambes sont gonflées.", en: "You get out of breath when you exert yourself, and your legs are swollen." },
          { es: "Dyspnée d'effort, œdèmes des membres inférieurs.", en: "Breathlessness on exertion, swelling of the lower limbs." },
          { es: "Docteur, j'ai mal à la tête tous les matins.", en: "Doctor, I get a headache every morning." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A doctor wants to tell a frightened patient he is breathless and his legs are swollen. Which version does the job?",
            options: ["Vous êtes essoufflé quand vous faites un effort, et vos jambes sont gonflées.", "Vous présentez une dyspnée d'effort avec un œdème des membres inférieurs.", "Dyspnée d'effort, œdèmes déclives bilatéraux.", "Votre tableau clinique évoque une insuffisance cardiaque décompensée."],
            correctIndex: 0,
            explanation: "To a patient, the everyday words are the kind ones: \"essoufflé\", \"les jambes gonflées\". The other three are notes for colleagues, technically right and humanly absent.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into everyday French, as a doctor to a patient.",
            source: "You get out of breath when you climb the stairs.",
            answer: "Vous êtes essoufflé quand vous montez l'escalier.",
            altAnswers: ["Vous êtes essoufflée quand vous montez l'escalier.", "Vous êtes essoufflé quand vous montez les escaliers.", "Vous êtes essoufflée quand vous montez les escaliers.", "Vous vous essoufflez quand vous montez l'escalier."],
            explanation: "The plain version of \"dyspnée d'effort\".",
          },
        ],
      },
      {
        heading: "Vague in a report",
        body: [
          "Conversely, in a written report or a referral letter, the everyday word sounds vague or unprofessional: \"le patient a mal à la tête et il est fatigué\" tells a colleague less than \"céphalées frontales matinales, asthénie\". In writing, the learned term also carries precision the everyday word lacks: \"une asthénie\" implies pathological fatigue not relieved by rest; \"un hématome\" is a collection of blood that forms a lump, whereas \"une ecchymose\" is flat discolouration; \"un bleu\" covers both.",
        ],
        examples: [
          { es: "Il s'agit d'un hématome, une poche de sang sous la peau.", en: "It's a haematoma, a pocket of blood under the skin." },
          { es: "Le patient décrit une asthénie non améliorée par le repos.", en: "The patient describes fatigue not improved by rest." },
          { es: "Je me suis fait un gros bleu en me cognant contre la table.", en: "I got a big bruise when I banged into the table." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence fits a referral letter to a colleague?",
            options: ["Patient présentant des céphalées frontales et une asthénie depuis trois semaines.", "Le patient a très mal à la tête et il est super fatigué.", "Le patient a une céphalée qui lui fait mal à la tête.", "Le patient a des maux de tête, enfin je crois."],
            correctIndex: 0,
            explanation: "Learned terms and a nominal style suit written communication between professionals.",
          },
          {
            type: "listen-choose",
            audio: "Ça me démange depuis trois jours.",
            question: "What does it mean?",
            options: ["It's been itching for three days.", "I've been in pain for three days.", "It's been bleeding for three days.", "I've been dizzy for three days."],
            correctIndex: 0,
            explanation: "\"Ça me démange\" or \"ça me gratte\" = it itches: the everyday version of \"prurit\".",
          },
        ],
      },
      {
        heading: "Ce qu'on appelle..., c'est-à-dire...",
        body: [
          "The skill at the Mastery level is to choose deliberately. A doctor explaining a report often does both: the term, then its translation: \"Vous avez ce qu'on appelle une tendinite, c'est-à-dire une inflammation du tendon.\" This pattern, \"ce qu'on appelle... c'est-à-dire...\", is the most useful phrase in medical explanation.",
        ],
        examples: [
          { es: "Vous avez ce qu'on appelle une tendinite, c'est-à-dire une inflammation du tendon.", en: "You have what's called tendinitis, that is, an inflammation of the tendon." },
          { es: "Vous avez ce qu'on appelle une gastro-entérite, c'est-à-dire une infection de l'intestin.", en: "You have what's called gastroenteritis, that is, an intestinal infection." },
          { es: "C'est ce qu'on appelle une entorse, c'est-à-dire un ligament étiré.", en: "That's what's called a sprain, that is, a stretched ligament." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as a doctor explaining to a patient.",
            source: "You have what's called an otitis, that is, an ear infection.",
            answer: "Vous avez ce qu'on appelle une otite, c'est-à-dire une infection de l'oreille.",
            altAnswers: ["Vous avez ce que l'on appelle une otite, c'est-à-dire une infection de l'oreille.", "Vous avez ce qu'on appelle une otite, autrement dit une infection de l'oreille.", "Tu as ce qu'on appelle une otite, c'est-à-dire une infection de l'oreille.", "Vous avez ce qu'on appelle une otite, c'est-à-dire une inflammation de l'oreille."],
            explanation: "\"Ce qu'on appelle\" + term + \"c'est-à-dire\" + plain explanation.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: You have what's called tendinitis.",
            words: ["Vous avez", "ce", "qu'on", "appelle", "une tendinite."],
            translation: "You have what's called tendinitis.",
            explanation: "\"Ce qu'on appelle\" introduces a technical term gently.",
          },
        ],
      },
      {
        heading: "From the patient's sentence to the report",
        body: [
          "Practise the switch in both directions with a whole sentence. Patient: \"J'ai le nez qui saigne souvent, et j'ai des bleus partout sans m'être cogné.\" Report: \"Épistaxis récidivantes et ecchymoses spontanées.\" Notice how the report drops the verb and the person, and uses \"récidivant\" (recurring) and \"spontané\" (without a cause) to compress whole clauses.",
        ],
        examples: [
          { es: "J'ai le nez qui saigne souvent.", en: "My nose bleeds often." },
          { es: "Épistaxis récidivantes et ecchymoses spontanées.", en: "Recurrent nosebleeds and spontaneous bruising." },
          { es: "J'ai des bleus partout sans m'être cogné.", en: "I have bruises everywhere without having banged into anything." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French in the nominal style of a medical report.",
            source: "Itching all over the body for one week.",
            answer: "Prurit diffus depuis une semaine.",
            altAnswers: ["Prurit généralisé depuis une semaine.", "Prurit diffus évoluant depuis une semaine.", "Prurit généralisé évoluant depuis une semaine."],
            explanation: "\"Prurit\" (itching), \"diffus\" or \"généralisé\" (all over); \"évoluant depuis\" is typical report style.",
          },
          {
            type: "multiple-choice",
            question: "In a report, what does « spontané » add, as in « ecchymoses spontanées » ?",
            options: ["That the bruises appeared without any knock.", "That they appeared suddenly, overnight.", "That they disappear by themselves.", "That the patient reports them spontaneously."],
            correctIndex: 0,
            explanation: "\"Spontané\" says there was no cause, no knock; \"récidivant\" would say they keep coming back. The learned adjectives compress a whole clause.",
          },
        ],
      },
      {
        heading: "Fatigue, weight, sweating",
        body: [
          "Another: Patient: \"Depuis un mois, je suis tout le temps fatigué, j'ai perdu cinq kilos sans faire de régime et je transpire la nuit.\" Report: \"Asthénie, amaigrissement de 5 kg en un mois et sueurs nocturnes.\" The learned terms (\"amaigrissement\" for weight loss, \"sueurs nocturnes\" for night sweats) are also more neutral: they describe without dramatising.",
        ],
        examples: [
          { es: "J'ai perdu cinq kilos sans faire de régime.", en: "I've lost five kilos without dieting." },
          { es: "Amaigrissement de 5 kg en un mois et sueurs nocturnes.", en: "Weight loss of 5 kg in one month and night sweats." },
          { es: "Il se plaint de sueurs nocturnes depuis trois semaines.", en: "He complains of night sweats for the past three weeks." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French in the nominal style of a medical report.",
            source: "Weight loss of four kilos in two months.",
            answer: "Amaigrissement de quatre kilos en deux mois.",
            altAnswers: ["Amaigrissement de 4 kg en deux mois.", "Perte de poids de quatre kilos en deux mois.", "Amaigrissement de 4 kilos en 2 mois.", "Perte de poids de 4 kg en deux mois."],
            explanation: "\"Amaigrissement\" (or \"perte de poids\") + \"de\" + amount: no verb, no subject.",
          },
          {
            type: "dictation",
            audio: "Je suis tout le temps fatigué et j'ai perdu du poids.",
            explanation: "The everyday version of \"asthénie et amaigrissement\".",
          },
        ],
      },
      {
        heading: "From the report back to the patient",
        body: [
          "And from report to patient: \"Tension artérielle à 16/10\" → \"Votre tension est un peu élevée : 16/10.\" (French doctors give blood pressure in centimetres of mercury, \"16/10\", where English speakers say 160/100.) \"Pas d'anomalie à l'auscultation\" → \"Quand je vous ai écouté, le cœur et les poumons étaient normaux.\"",
        ],
        examples: [
          { es: "Votre tension est un peu élevée : 16/10.", en: "Your blood pressure is a bit high: 160 over 100." },
          { es: "Quand je vous ai écouté, le cœur et les poumons étaient normaux.", en: "When I listened, your heart and lungs sounded normal." },
          { es: "Votre prise de sang est normale, tout va bien de ce côté-là.", en: "Your blood test is normal, all is well on that side." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into everyday French, as a doctor to a patient.",
            source: "Your blood pressure is a bit high.",
            answer: "Votre tension est un peu élevée.",
            altAnswers: ["Vous avez un peu de tension.", "Votre tension est un peu haute.", "Vous avez une tension un peu élevée.", "Ta tension est un peu élevée."],
            explanation: "\"La tension\" = blood pressure; \"un peu élevée\" is reassuring and accurate.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Say it to the patient instead: use everyday words.",
            source: "Pas d'anomalie à l'auscultation pulmonaire.",
            answer: "Quand je vous ai écouté, vos poumons étaient normaux.",
            altAnswers: ["Quand je vous ai écoutée, vos poumons étaient normaux.", "Quand je vous ai écouté, vos poumons allaient bien."],
            explanation: "Speaking to the patient, the nominal report (\"pas d'anomalie à l'auscultation\") becomes a sentence with a person and an everyday verb: \"quand je vous ai écouté... étaient normaux\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into everyday French, as a patient.",
        source: "I've had headaches every morning for two weeks.",
        answer: "J'ai mal à la tête tous les matins depuis deux semaines.",
        altAnswers: ["J'ai des maux de tête tous les matins depuis deux semaines.", "Ça fait deux semaines que j'ai mal à la tête tous les matins.", "J'ai mal à la tête tous les matins depuis quinze jours.", "J'ai des maux de tête tous les matins depuis quinze jours."],
        explanation: "A patient says \"mal à la tête\", not \"céphalée\"; \"depuis\" + present.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French in the nominal style of a medical report.",
        source: "Recurrent nosebleeds for three months.",
        answer: "Épistaxis récidivantes depuis trois mois.",
        altAnswers: ["Épistaxis à répétition depuis trois mois.", "Épistaxis récidivantes évoluant depuis trois mois.", "Épistaxis récidivante depuis trois mois."],
        explanation: "\"Épistaxis\" (invariable, feminine) + \"récidivantes\" (recurring).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, as a doctor explaining to a patient.",
        source: "It's a haematoma, a pocket of blood under the skin; it will go away by itself.",
        answer: "C'est un hématome, une poche de sang sous la peau ; il va se résorber tout seul.",
        altAnswers: ["C'est un hématome, une poche de sang sous la peau ; il va partir tout seul.", "C'est un hématome, une poche de sang sous la peau, il va disparaître tout seul.", "C'est un hématome, c'est-à-dire une poche de sang sous la peau ; il va se résorber tout seul.", "C'est un hématome, une poche de sang sous la peau ; ça va partir tout seul."],
        explanation: "Term + plain gloss; \"se résorber\" is the precise verb for blood or swelling being reabsorbed.",
      },
      {
        type: "speak",
        prompt: "Say it in French, as a doctor: You have what's called tendinitis, that is, an inflammation of the tendon.",
        text: "Vous avez ce qu'on appelle une tendinite, c'est-à-dire une inflammation du tendon.",
        explanation: "Term first, then \"c'est-à-dire\" + explanation: the classic pattern of medical explanation.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into everyday French, as a patient.",
        source: "I bruise easily and my legs feel heavy in the evening.",
        answer: "Je me fais facilement des bleus et j'ai les jambes lourdes le soir.",
        altAnswers: ["J'ai facilement des bleus et j'ai les jambes lourdes le soir.", "Je me fais des bleus facilement et j'ai les jambes lourdes le soir.", "J'ai des bleus facilement et les jambes lourdes le soir."],
        explanation: "\"Se faire des bleus\"; \"avoir les jambes lourdes\" is a standard French complaint.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Le patient présente une œdème des chevilles.",
        answer: "Le patient présente un œdème des chevilles.",
        explanation: "\"Œdème\" is masculine despite its final -e: \"un œdème\", like \"un eczéma\" and \"un érythème\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The report notes [fatigue] not relieved by rest.",
        sentence: "Le compte rendu note une ___ non améliorée par le repos.",
        answer: "asthénie",
        explanation: "In writing, \"une asthénie\" means pathological fatigue not relieved by rest, which the everyday \"de la fatigue\" does not say.",
      },
    ],
  },
  {
    slug: "c2-mission-expliquer-posologie",
    level: "FR-C2",
    number: 8,
    title: "Real-World Mission: Expliquer une Posologie",
    summary: "You are a pharmacist: explain a new treatment to a patient with precision and no unnecessary jargon (un comprimé matin et soir, au milieu du repas, ne pas dépasser...), give the warnings and check that it has been understood.",
    duration: "19 min",
    sections: [
      {
        heading: "Your mission: the prescription",
        body: [
          "Your mission: you work in a pharmacy in Bordeaux. M. Robert Faure, 74, hands you this prescription from his GP: \"Amoxicilline 1 g : 1 comprimé matin et soir pendant 7 jours. Paracétamol 1 g : 1 comprimé si douleur ou fièvre, à renouveler si besoin toutes les 6 heures, sans dépasser 3 g par jour. Lavages de nez au sérum physiologique, 3 fois par jour.\" He looks tired and a little lost, and his daughter is with him.",
        ],
        examples: [
          { es: "Le docteur vous a prescrit un antibiotique pour sept jours.", en: "The doctor has prescribed an antibiotic for seven days." },
          { es: "Un comprimé toutes les six heures au minimum.", en: "One tablet every six hours, no more often." },
          { es: "Sans dépasser trois grammes par jour, soit trois comprimés.", en: "Without exceeding three grams a day, that is three tablets." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How many different things has Dr Faure's GP prescribed?",
            options: ["Three: an antibiotic, paracetamol and saline nose washes.", "Two: an antibiotic and paracetamol.", "One: an antibiotic for seven days.", "Four, including a cough syrup."],
            correctIndex: 0,
            explanation: "The prescription has three lines: \"Amoxicilline\", \"Paracétamol\" and \"Lavages de nez au sérum physiologique\".",
          },
        ],
      },
      {
        heading: "Decoding it for yourself",
        body: [
          "First, decode for yourself. \"1 g\" is read \"un gramme\". \"Toutes les 6 heures\" means at least six hours between doses. \"Sans dépasser 3 g par jour\" means three tablets maximum in twenty-four hours. \"Le sérum physiologique\" is saline solution, sold in small single-dose pods (\"des dosettes\" or \"des unidoses\"). The amoxicillin is an antibiotic, so the whole course must be finished.",
        ],
        examples: [
          { es: "Le sérum physiologique est en dosettes, c'est plus pratique.", en: "The saline comes in single-dose pods, it's more practical." },
          { es: "L'amoxicilline est un antibiotique de la famille des pénicillines.", en: "Amoxicillin is an antibiotic of the penicillin family." },
          { es: "Il faut au moins six heures entre deux prises.", en: "There must be at least six hours between two doses." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"1 comprimé toutes les 6 heures, sans dépasser 3 g par jour\" (1 g tablets). What is the maximum per day?",
            options: ["three tablets", "four tablets", "six tablets", "one tablet"],
            correctIndex: 0,
            explanation: "Every six hours would allow four, but \"sans dépasser 3 g\" caps it at three 1-gram tablets.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Never more than] three tablets a day.",
            sentence: "___ trois comprimés par jour.",
            answer: "Jamais plus de",
            altAnswers: ["Pas plus de"],
            explanation: "\"Jamais plus de\" + number: a firm limit in plain words.",
          },
        ],
      },
      {
        heading: "Opening the conversation",
        body: [
          "Then open the conversation in a way that puts him at ease and checks the basics: \"Bonjour Monsieur Faure. Alors, le docteur vous a prescrit un antibiotique et du paracétamol. Avant de vous expliquer, vous n'êtes pas allergique à la pénicilline ? Et vous prenez d'autres médicaments en ce moment ?\" These two questions (allergies, current treatments) are routine before handing over any antibiotic.",
        ],
        examples: [
          { es: "Vous n'êtes pas allergique à la pénicilline ?", en: "You're not allergic to penicillin, are you?" },
          { es: "Vous prenez d'autres médicaments en ce moment ?", en: "Are you taking any other medicines at the moment?" },
          { es: "Bonjour Monsieur Faure, asseyez-vous si vous voulez.", en: "Hello Mr Faure, do sit down if you like." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as the pharmacist.",
            source: "Before I explain, are you allergic to penicillin?",
            answer: "Avant de vous expliquer, vous êtes allergique à la pénicilline ?",
            altAnswers: ["Avant de vous expliquer, êtes-vous allergique à la pénicilline ?", "Avant de vous expliquer, est-ce que vous êtes allergique à la pénicilline ?", "Avant que je vous explique, êtes-vous allergique à la pénicilline ?", "Avant que je vous explique, vous êtes allergique à la pénicilline ?", "Avant de vous expliquer, vous n'êtes pas allergique à la pénicilline ?"],
            explanation: "\"Avant de\" + infinitive (same subject) or \"avant que je\" + subjunctive. The negative question \"vous n'êtes pas allergique ?\" is natural too.",
          },
          {
            type: "multiple-choice",
            question: "Which two questions must come before handing over an antibiotic?",
            options: ["Allergies, and other medicines currently taken.", "Age, and the name of the GP.", "Weight, and blood pressure.", "Insurance, and the pharmacy's opening hours."],
            correctIndex: 0,
            explanation: "Routine before any antibiotic: \"vous n'êtes pas allergique à la pénicilline ?\" and \"vous prenez d'autres médicaments en ce moment ?\" (for interactions).",
          },
        ],
      },
      {
        heading: "Turning the prescription into his day",
        body: [
          "A good explanation turns the prescription into the patient's day. Not \"1 comprimé matin et soir au cours du repas\", but: \"L'antibiotique, vous en prenez un comprimé au petit-déjeuner et un au dîner, pendant sept jours. Il faut aller jusqu'au bout de la boîte, même si vous vous sentez mieux avant, d'accord ?\" Use the present (\"vous prenez\"), the future (\"vous en prendrez\") or \"il faut\": the infinitive of the prescription is fine on paper but cold in conversation.",
        ],
        examples: [
          { es: "Vous en prenez un au petit-déjeuner et un au dîner, pendant sept jours.", en: "You take one at breakfast and one at dinner, for seven days." },
          { es: "Il faut aller jusqu'au bout de la boîte, même si vous allez mieux.", en: "You must finish the box, even if you feel better." },
          { es: "Vous en prendrez un le matin et un le soir, toujours à la même heure.", en: "You'll take one in the morning and one in the evening, always at the same time." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into everyday French, as the pharmacist to the patient (\"vous\").",
            source: "You must finish the whole course, even if the fever has gone.",
            answer: "Il faut aller jusqu'au bout du traitement, même si la fièvre a disparu.",
            altAnswers: ["Il faut aller jusqu'au bout du traitement, même si la fièvre est tombée.", "Vous devez aller jusqu'au bout du traitement, même si la fièvre a disparu.", "Il faut finir tout le traitement, même si la fièvre a disparu.", "Il faut aller jusqu'au bout du traitement, même si vous n'avez plus de fièvre."],
            explanation: "An antibiotic course must be finished: \"aller jusqu'au bout du traitement\", whatever the patient feels. \"Même si\" takes the indicative.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into everyday French, as the pharmacist to the patient (\"vous\").",
            source: "You take one tablet at breakfast and one at dinner.",
            answer: "Vous prenez un comprimé au petit-déjeuner et un au dîner.",
            altAnswers: ["Vous prenez un comprimé au petit déjeuner et un au dîner.", "Vous prendrez un comprimé au petit-déjeuner et un au dîner.", "Vous en prenez un au petit-déjeuner et un au dîner.", "Prenez un comprimé au petit-déjeuner et un au dîner."],
            explanation: "Concrete meal times instead of \"matin et soir au cours du repas\".",
          },
        ],
      },
      {
        heading: "Give the reason, drop the jargon",
        body: [
          "Give the reason when it helps people comply: \"au milieu du repas, pour que ça ne vous fasse pas mal à l'estomac\" (pour que + subjunctive); \"jusqu'au bout, sinon l'infection risque de revenir\". Avoid jargon (\"posologie\", \"prise\", \"effets indésirables\"), or translate it at once: \"Si vous avez des effets secondaires, par exemple la diarrhée, ce n'est pas grave, mais dites-le-nous.\"",
        ],
        examples: [
          { es: "Prenez-le au milieu du repas, pour que ça ne vous fasse pas mal à l'estomac.", en: "Take it halfway through the meal, so it doesn't upset your stomach." },
          { es: "Si vous avez la diarrhée, ce n'est pas grave, mais dites-le-nous.", en: "If you get diarrhoea, it's not serious, but do tell us." },
          { es: "Jusqu'au bout, sinon l'infection risque de revenir.", en: "Right to the end, otherwise the infection may come back." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which explanation avoids unnecessary jargon?",
            options: ["Vous prenez un comprimé le matin et un le soir, en mangeant.", "La posologie est d'une prise biquotidienne au cours des repas.", "Respectez la posologie bi-journalière per os.", "Prise matin et soir, voie orale, en per-prandial."],
            correctIndex: 0,
            explanation: "\"En mangeant\" says \"au cours du repas\" in plain words; the others are jargon.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Take it during the meal [so that it doesn't upset] your stomach.",
            sentence: "Prenez-le pendant le repas, ___ mal à l'estomac.",
            answer: "pour que ça ne vous fasse pas",
            altAnswers: ["pour que cela ne vous fasse pas", "pour qu'il ne vous fasse pas"],
            explanation: "\"Pour que\" + subjunctive (\"fasse\"); \"faire mal à l'estomac\" = to upset the stomach.",
          },
        ],
      },
      {
        heading: "The 'if needed' medicine: a concrete limit",
        body: [
          "For the \"if needed\" medicine, give the rule as a concrete limit: \"Le paracétamol, c'est seulement si vous avez mal ou de la fièvre. Vous attendez au moins six heures entre deux comprimés, et jamais plus de trois dans la journée.\" And write it on the box: French pharmacists routinely write \"1 matin, 1 soir\" on the packaging with a marker.",
        ],
        examples: [
          { es: "Le paracétamol, c'est seulement si vous avez mal ou de la fièvre.", en: "The paracetamol is only if you're in pain or have a temperature." },
          { es: "Attendez au moins six heures entre deux comprimés.", en: "Wait at least six hours between two tablets." },
          { es: "Je vous l'écris sur la boîte pour que vous ne l'oubliiez pas.", en: "I'll write it on the box so you don't forget." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which explanation of the paracetamol is clearest for M. Faure?",
            options: ["Un comprimé si vous avez mal, et au moins six heures d'écart : jamais plus de trois par jour.", "Posologie : 1 g par prise, maximum 3 g par vingt-quatre heures.", "Vous en prenez si besoin, voilà.", "Trois grammes par jour, répartis selon la douleur."],
            correctIndex: 0,
            explanation: "The clear version uses everyday words, a concrete interval (\"au moins six heures d'écart\") and a hard limit (\"jamais plus de trois par jour\"). \"Posologie\", \"par prise\" and \"per os\" are jargon.",
          },
        ],
      },
      {
        heading: "The warnings that matter",
        body: [
          "Before he leaves, give the warnings that matter, and only those: \"Pas d'alcool pendant le traitement, ce n'est pas une bonne idée avec la fièvre.\" \"Si vous voyez des plaques rouges qui grattent, vous arrêtez l'antibiotique et vous appelez le médecin.\" \"Si la fièvre ne baisse pas au bout de trois jours, il faut reconsulter.\" (\"Reconsulter\" = see the doctor again.) Note the structure: \"si\" + present, then present or imperative; and \"au bout de\" + duration (after).",
        ],
        examples: [
          { es: "Pas d'alcool pendant le traitement.", en: "No alcohol during the treatment." },
          { es: "Si vous voyez des plaques rouges qui grattent, arrêtez l'antibiotique et appelez le médecin.", en: "If you notice itchy red patches, stop the antibiotic and call the doctor." },
          { es: "Si la fièvre ne baisse pas au bout de trois jours, il faut reconsulter.", en: "If the fever hasn't gone down after three days, you need to see the doctor again." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Vous attendez au moins six heures entre deux comprimés.",
            question: "What does it mean?",
            options: ["Wait at least six hours between two tablets.", "Take at least six tablets a day.", "Take two tablets every six hours.", "Wait six hours before taking the first tablet."],
            correctIndex: 0,
            explanation: "\"Au moins\" = at least; \"entre deux comprimés\" = between doses.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as the pharmacist.",
            source: "If the pain gets worse over the weekend, you must see the doctor again.",
            answer: "Si la douleur augmente pendant le week-end, il faut reconsulter.",
            altAnswers: ["Si la douleur augmente pendant le week-end, il faudra reconsulter.", "Si la douleur augmente pendant le week-end, il faut revoir le médecin.", "Si la douleur augmente pendant le week-end, il faut reconsulter un médecin.", "Si la douleur s'aggrave pendant le week-end, il faut reconsulter."],
            explanation: "\"Si\" + present, then present: \"si la douleur augmente..., il faut reconsulter\" (to see the doctor again).",
          },
        ],
      },
      {
        heading: "Checking understanding: la reformulation",
        body: [
          "Then check understanding without making him feel tested. The best technique is \"la reformulation\" by the patient (teach-back): \"Pour être sûre que je me suis bien fait comprendre, vous pouvez me redire comment vous allez prendre l'antibiotique ?\" The pharmacist puts the responsibility on her own explanation (\"que je me suis bien fait comprendre\"), not on his understanding. With the daughter present, you can involve her: \"Et vous, Madame, ça vous paraît clair ?\"",
        ],
        examples: [
          { es: "Pour être sûre que je me suis bien fait comprendre, vous pouvez me redire comment vous allez le prendre ?", en: "Just to be sure I've explained it properly, could you tell me how you're going to take it?" },
          { es: "Et vous, Madame, ça vous paraît clair ?", en: "And you, madam, is that clear to you?" },
          { es: "Vous pouvez me redire à quelle heure vous prendrez le deuxième comprimé ?", en: "Can you tell me again what time you'll take the second tablet?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is the most tactful way to check that the patient understood?",
            options: ["Pour être sûre que je me suis bien fait comprendre, vous pouvez me redire comment vous allez le prendre ?", "Vous avez compris, oui ou non ?", "Répétez ce que je viens de dire.", "Je suppose que vous n'avez rien compris."],
            correctIndex: 0,
            explanation: "The pharmacist takes responsibility (\"que je me suis bien fait comprendre\") and invites a reformulation.",
          },
          {
            type: "speak",
            prompt: "Say it in French (as a female pharmacist): Just to be sure I was clear, can you tell me when you'll take the paracetamol?",
            text: "Pour être sûre d'avoir été claire, vous pouvez me redire quand vous prendrez le paracétamol ?",
            explanation: "Teach-back, with the responsibility on the pharmacist's own words: \"pour être sûre d'avoir été claire\" (both feminine, agreeing with her).",
          },
        ],
      },
      {
        heading: "Closing warmly",
        body: [
          "Close warmly: \"N'hésitez pas à repasser ou à nous appeler si vous avez la moindre question. Bon rétablissement, Monsieur Faure !\" \"Bon rétablissement\" (get well soon) is the standard wish; \"Soignez-vous bien\" is another.",
        ],
        examples: [
          { es: "N'hésitez pas à nous appeler. Bon rétablissement !", en: "Don't hesitate to call us. Get well soon!" },
          { es: "Soignez-vous bien, et revenez si ça ne va pas mieux.", en: "Look after yourself, and come back if it doesn't get better." },
          { es: "N'hésitez pas à repasser nous voir.", en: "Don't hesitate to drop in again." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as the pharmacist.",
            source: "Get well soon, Mr Faure!",
            answer: "Bon rétablissement, Monsieur Faure !",
            altAnswers: ["Bon rétablissement, monsieur Faure !", "Soignez-vous bien, Monsieur Faure !"],
            explanation: "\"Bon rétablissement\" is the standard wish for someone ill.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Bonne rétablissement, Madame Lemoine !",
            answer: "Bon rétablissement, Madame Lemoine !",
            explanation: "\"Rétablissement\" is masculine, so the wish is \"bon rétablissement\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into everyday French, as the pharmacist.",
        source: "The paracetamol is only if you're in pain.",
        answer: "Le paracétamol, c'est seulement si vous avez mal.",
        altAnswers: ["Le paracétamol, c'est uniquement si vous avez mal.", "Le paracétamol, vous le prenez seulement si vous avez mal.", "Le paracétamol, c'est seulement en cas de douleur.", "Le paracétamol, c'est juste si vous avez mal."],
        explanation: "Dislocation (\"Le paracétamol, c'est...\") is natural in spoken explanation.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into everyday French, as the pharmacist.",
        source: "If you get a rash, stop the tablets and ring the surgery.",
        answer: "Si vous avez une éruption, arrêtez les comprimés et appelez le cabinet.",
        altAnswers: ["Si vous avez une éruption cutanée, arrêtez les comprimés et appelez le cabinet.", "Si vous avez des boutons, arrêtez les comprimés et appelez le cabinet.", "Si vous avez une éruption, arrêtez les comprimés et appelez le cabinet médical.", "Si vous avez une éruption, arrêtez les comprimés et téléphonez au cabinet."],
        explanation: "\"Si\" + present, then the imperative: a rash (\"une éruption\") is a reason to stop and call. \"Le cabinet\" is the doctor's practice.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, as the pharmacist.",
        source: "I'll write the times on the box so that you don't make a mistake.",
        answer: "Je vous écris les heures sur la boîte pour que vous ne vous trompiez pas.",
        altAnswers: ["Je vous note les heures sur la boîte pour que vous ne vous trompiez pas.", "Je vous écris les horaires sur la boîte pour que vous ne vous trompiez pas.", "Je vais vous écrire les heures sur la boîte pour que vous ne vous trompiez pas.", "J'écris les heures sur la boîte pour que vous ne vous trompiez pas."],
        explanation: "\"Pour que\" takes the subjunctive: \"que vous ne vous trompiez pas\". French pharmacists really do write the times on the packaging.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, as the pharmacist.",
        source: "No alcohol during the treatment, please.",
        answer: "Pas d'alcool pendant le traitement, s'il vous plaît.",
        altAnswers: ["Évitez l'alcool pendant le traitement, s'il vous plaît.", "Pas d'alcool pendant toute la durée du traitement, s'il vous plaît.", "Pas d'alcool pendant le traitement, merci."],
        explanation: "\"Pas de\" + noun is a short, clear prohibition in speech.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Don't hesitate to call us if you have any questions.",
        words: ["N'hésitez pas", "à nous appeler", "si vous avez", "des questions."],
        translation: "Don't hesitate to call us if you have any questions.",
        explanation: "\"N'hésitez pas à\" + infinitive: the warm formal invitation.",
      },
      {
        type: "dictation",
        audio: "Un comprimé matin et soir pendant sept jours.",
        explanation: "The written prescription style: no verb, times and duration only.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change it so that you speak to a child's mother about her son, using « lui ».",
        source: "Vous prenez un comprimé le matin et un le soir.",
        answer: "Vous lui donnez un comprimé le matin et un le soir.",
        altAnswers: ["Vous lui donnerez un comprimé le matin et un le soir."],
        explanation: "Speaking about her son, the pharmacist changes \"prendre\" to \"donner\" with the indirect pronoun \"lui\" before the verb.",
      },
    ],
  },
  {
    slug: "c2-medical-french-5",
    level: "FR-C2",
    number: 9,
    title: "Le Français Médical, Part 5 of 6",
    summary: "The hospital and the report: services, l'interne, le chef de clinique, l'aide-soignant(e), l'externe; examen clinique, diagnostic, pronostic, scanner, échographie; and the nominal style of the compte rendu (patient de 67 ans, admis pour..., mise en place de...).",
    duration: "19 min",
    sections: [
      {
        heading: "Services, bloc, réanimation",
        body: [
          "A French hospital is divided into \"services\" (departments): \"le service de cardiologie\", \"de pneumologie\", \"de gériatrie\", \"les urgences\", \"la réanimation\" (\"la réa\": intensive care), \"le bloc opératoire\" (\"le bloc\": the operating theatre). Each service is run by \"le chef de service\". \"Un praticien hospitalier\" (PH) is a senior hospital doctor, and \"le chef de clinique\" is a young senior doctor, just out of residency, who also teaches.",
        ],
        examples: [
          { es: "Il a été transféré en réanimation dans la nuit.", en: "He was transferred to intensive care during the night." },
          { es: "L'opération a lieu demain matin au bloc opératoire.", en: "The operation is tomorrow morning in the theatre." },
          { es: "Le chef de service de gériatrie reçoit les familles le jeudi.", en: "The head of the geriatrics department sees families on Thursdays." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A patient's condition worsens sharply after surgery. Which department does he go to?",
            options: ["la réanimation", "la gériatrie", "le bloc opératoire", "la pneumologie"],
            correctIndex: 0,
            explanation: "\"La réanimation\" (\"la réa\") is intensive care. \"Le bloc\" is where the operation itself takes place; the other two are ordinary wards.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She was transferred to intensive care.",
            answer: "Elle a été transférée en réanimation.",
            altAnswers: ["Elle a été transférée en réa.", "On l'a transférée en réanimation.", "Elle a été transférée dans le service de réanimation.", "Elle a été transférée aux soins intensifs."],
            explanation: "\"La réanimation\" (\"la réa\") is the intensive care unit; \"en réanimation\" without an article.",
          },
        ],
      },
      {
        heading: "Un interne is not an intern",
        body: [
          "The big trap: \"un interne\" is a resident, a qualified medical graduate in specialist training who prescribes and takes night shifts (\"être de garde\"). It is not an intern. A medical student doing hospital placements is \"un externe\"; any other trainee is \"un stagiaire\" (an intern in a company, too). The ward round is \"la visite\": \"le chef fait la visite à 10 heures\".",
        ],
        examples: [
          { es: "L'interne de garde a prescrit un scanner.", en: "The resident on call ordered a CT scan." },
          { es: "Ma nièce est externe en quatrième année de médecine.", en: "My niece is a fourth-year medical student on hospital placement." },
          { es: "La visite du chef de service a lieu le mardi.", en: "The head of department does his ward round on Tuesdays." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"L'interne m'a prescrit des antalgiques cette nuit.\" Who prescribed the painkillers?",
            options: ["a resident doctor in specialist training", "an unpaid student intern", "the head of department", "a healthcare assistant"],
            correctIndex: 0,
            explanation: "\"Un interne\" = a resident: a doctor in training who prescribes. An unpaid intern is \"un stagiaire\".",
          },
          {
            type: "multiple-choice",
            question: "Your cousin, a medical student, says: \"Je suis externe à la Pitié.\" What is she?",
            options: ["a medical student on hospital placement", "a resident doctor", "an outpatient", "an external consultant"],
            correctIndex: 0,
            explanation: "\"Externe\" = medical student (years 4 to 6) on the wards; \"interne\" comes after.",
          },
        ],
      },
      {
        heading: "The nursing side",
        body: [
          "On the nursing side: \"l'infirmier / l'infirmière\" (nurse), \"l'aide-soignant(e)\" (healthcare assistant: washing, meals, comfort), \"le cadre de santé\" (ward manager, the former \"surveillante\"), \"l'ASH\" (agent des services hospitaliers: cleaning and logistics), \"le brancardier\" (porter). Patients often call every woman in a white coat \"l'infirmière\", which aides-soignantes and female doctors find tiring: read the badge.",
        ],
        examples: [
          { es: "Une aide-soignante est venue l'aider à faire sa toilette.", en: "A healthcare assistant came to help her wash." },
          { es: "Adressez-vous au cadre de santé du service.", en: "Speak to the ward manager." },
          { es: "Le brancardier est venu la chercher pour la radio.", en: "The porter came to take her for the X-ray." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Who washes patients and helps them eat?",
            options: ["l'aide-soignante", "l'infirmière", "le cadre de santé", "l'ASH"],
            correctIndex: 0,
            explanation: "\"L'aide-soignant(e)\" takes care of washing, meals and comfort. The nurse gives treatments, the \"cadre de santé\" manages the ward, and the ASH handles cleaning and logistics.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "A healthcare assistant helped him get washed.",
            answer: "Une aide-soignante l'a aidé à faire sa toilette.",
            altAnswers: ["Un aide-soignant l'a aidé à faire sa toilette.", "Une aide-soignante l'a aidé à se laver.", "Un aide-soignant l'a aidé à se laver."],
            explanation: "\"L'aide-soignant(e)\": healthcare assistant; \"faire sa toilette\" = to wash.",
          },
        ],
      },
      {
        heading: "Admission, prise en charge, sortie",
        body: [
          "\"Être hospitalisé(e)\", \"être admis(e) aux urgences / en cardiologie\", \"être pris(e) en charge\" (to be taken care of: the essential verb of French health care), \"être transféré(e)\", \"sortir\" (\"la sortie\": discharge; \"il sort demain\"). In between: \"l'examen clinique\" (the physical examination: \"l'auscultation\", \"la palpation\"), \"les examens complémentaires\" (tests: \"un scanner\", \"une IRM\", \"une échographie\", \"une radio\", \"un bilan biologique\").",
        ],
        examples: [
          { es: "Il a été admis aux urgences pour une douleur thoracique.", en: "He was admitted to A&E with chest pain." },
          { es: "Elle a été prise en charge très rapidement.", en: "She was treated very quickly." },
          { es: "Sa sortie est prévue pour vendredi.", en: "Her discharge is planned for Friday." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "She was [taken care of] by the emergency team within ten minutes.",
            sentence: "Elle a été ___ par l'équipe des urgences en dix minutes.",
            answer: "prise en charge",
            explanation: "\"Prendre en charge\" (a patient, a cost): \"prise\" agrees with \"elle\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "He was admitted to cardiology for a heart attack.",
            answer: "Il a été admis en cardiologie pour un infarctus.",
            altAnswers: ["Il a été hospitalisé en cardiologie pour un infarctus.", "Il a été admis dans le service de cardiologie pour un infarctus.", "Il a été admis en cardiologie pour une crise cardiaque.", "Il a été hospitalisé en cardiologie pour une crise cardiaque."],
            explanation: "\"Être admis en\" + service, without article; \"pour\" + reason.",
          },
        ],
      },
      {
        heading: "Diagnostic and pronostic",
        body: [
          "\"Le diagnostic\" (the diagnosis: \"poser un diagnostic\") and \"le pronostic\" (the prognosis: \"le pronostic vital est engagé\" = the patient's life is at risk, a phrase you hear on every news bulletin after an accident). Treatments are \"mis en place\" (started), \"introduits\", \"adaptés\", \"arrêtés\"; a patient \"est mis sous\" a drug.",
        ],
        examples: [
          { es: "Le médecin a posé le diagnostic après l'IRM.", en: "The doctor made the diagnosis after the MRI." },
          { es: "Le pronostic vital du conducteur est engagé.", en: "The driver's life is in danger." },
          { es: "Le patient a été mis sous antibiotiques dès son arrivée.", en: "The patient was put on antibiotics as soon as he arrived." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as in a news report.",
            source: "The cyclist's life is in danger.",
            answer: "Le pronostic vital du cycliste est engagé.",
            altAnswers: ["Le pronostic vital de la cycliste est engagé.", "Le cycliste est entre la vie et la mort.", "La cycliste est entre la vie et la mort."],
            explanation: "\"Le pronostic vital est engagé\" is the fixed press and medical phrase; \"entre la vie et la mort\" is the dramatic everyday one.",
          },
          {
            type: "multiple-choice",
            question: "The news says « le pronostic vital est engagé ». What does it mean?",
            options: ["The patient's life is at risk.", "The patient has been diagnosed.", "The patient is out of danger.", "The patient's treatment has started."],
            correctIndex: 0,
            explanation: "\"Le pronostic vital est engagé\" means the patient may die; it is the standard phrase on the news after an accident. A diagnosis is \"posé\", a treatment \"mis en place\".",
          },
        ],
      },
      {
        heading: "Passer, demander, réaliser; la convalescence",
        body: [
          "Watch two collocations. One \"passe\" an exam as a patient (\"passer un scanner\"), the doctor \"demande\" or \"prescrit\" it, and the technician \"réalise\" it. And \"la convalescence\" (recovery period) follows \"la sortie\"; \"une maison de repos\" or \"un SSR\" (soins de suite et de réadaptation) is where some patients go next.",
        ],
        examples: [
          { es: "Je passe un scanner jeudi, c'est le médecin qui l'a demandé.", en: "I'm having a CT scan on Thursday; the doctor ordered it." },
          { es: "Après l'opération, il part en maison de repos.", en: "After the operation he's going to a convalescent home." },
          { es: "Sa convalescence durera un mois.", en: "His recovery will take a month." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "J'ai fait passer une IRM la semaine dernière.",
            answer: "J'ai passé une IRM la semaine dernière.",
            explanation: "As a patient you \"passez\" a test: \"j'ai passé une IRM\". \"Faire passer\" would mean you had someone else examined; the doctor \"demande\" or \"prescrit\" the test and the technician \"réalise\" it.",
          },
        ],
      },
      {
        heading: "The compte rendu: the genre",
        body: [
          "A \"compte rendu d'hospitalisation\" (discharge summary; no hyphen in compte rendu) follows a fixed plan and a telegraphic style. Here is an original example:",
        ],
        examples: [
          { es: "Patiente de 67 ans, admise pour dyspnée fébrile.", en: "67-year-old female patient, admitted with breathlessness and fever." },
          { es: "Une échographie abdominale a été réalisée le 5 mars.", en: "An abdominal ultrasound was performed on 5 March." },
          { es: "Sortie à domicile le 10 mars.", en: "Discharged home on 10 March." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is « un compte rendu d'hospitalisation » ?",
            options: ["The discharge summary sent after a hospital stay.", "The bill for the stay.", "The nurses' daily handover notes.", "The consent form signed before surgery."],
            correctIndex: 0,
            explanation: "\"Un compte rendu d'hospitalisation\" (no hyphen) is the discharge summary: a telegraphic account of the stay, sent to the GP.",
          },
        ],
      },
      {
        heading: "A compte rendu, line by line",
        body: [
          "\"Patiente de 67 ans, admise le 3 mars dans le service de pneumologie pour dyspnée fébrile. Antécédents : HTA, diabète de type 2. Examen clinique à l'entrée : T 39,2 °C, SpO2 89 % en air ambiant, crépitants de la base droite. Radiographie thoracique : opacité alvéolaire du lobe inférieur droit. Conclusion : pneumopathie communautaire. Mise en place d'une antibiothérapie par amoxicilline-acide clavulanique avec bonne évolution clinique. Apyrexie obtenue à J3. Sortie le 10 mars.\"",
        ],
        examples: [
          { es: "Mise en place d'une antibiothérapie avec bonne évolution clinique.", en: "Antibiotics started, with good clinical progress." },
          { es: "Apyrexie obtenue à J3.", en: "Fever resolved by day 3." },
          { es: "Saturation à 89 % en air ambiant.", en: "Oxygen saturation of 89% on room air." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Apyrexie obtenue à J3.\" What does it mean?",
            options: ["The fever was gone by day 3.", "The patient was discharged on day 3.", "The pain disappeared after 3 days.", "The test was done 3 days later."],
            correctIndex: 0,
            explanation: "\"Apyrexie\" = absence of fever; \"J3\" = day 3 of the hospital stay.",
          },
          {
            type: "listen-choose",
            audio: "Une échographie a été réalisée le lendemain.",
            question: "What does it mean?",
            options: ["An ultrasound was done the next day.", "An X-ray was done the same day.", "The ultrasound was cancelled the next day.", "The patient realised the next day."],
            correctIndex: 0,
            explanation: "\"Réaliser un examen\" = to carry it out; passive in the report: \"a été réalisée\".",
          },
        ],
      },
      {
        heading: "The grammar of the genre",
        body: [
          "Grammar of the genre: participles and nouns instead of full sentences (\"admise le 3 mars\", \"mise en place d'une antibiothérapie\"), no articles before many nouns (\"antécédents : HTA\"), \"à J3\" (on day 3), \"en air ambiant\" (on room air), \"apyrexie\" (absence of fever: a- + pyr- fire). \"Pneumopathie\" covers lung infections (pneumonia). The passive appears when a verb is needed: \"une échographie a été réalisée\", \"un traitement a été introduit\".",
        ],
        examples: [
          { es: "Antécédents : HTA, diabète de type 2.", en: "History: high blood pressure, type 2 diabetes." },
          { es: "Un traitement anticoagulant a été introduit à J2.", en: "An anticoagulant treatment was started on day 2." },
          { es: "Évolution clinique favorable sous antibiothérapie.", en: "Good clinical progress on antibiotics." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French in the style of a discharge summary.",
            source: "72-year-old male patient, admitted for chest pain.",
            answer: "Patient de 72 ans, admis pour douleur thoracique.",
            altAnswers: ["Patient de 72 ans admis pour douleur thoracique.", "Patient de soixante-douze ans, admis pour douleur thoracique.", "Patient de 72 ans, admis pour une douleur thoracique.", "Patient âgé de 72 ans, admis pour douleur thoracique."],
            explanation: "\"Patient de + age\", past participle \"admis pour\", often without article: the opening of every compte rendu.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into the telegraphic style of a compte rendu.",
            source: "La patiente a été admise le 4 mai parce qu'elle avait de la fièvre.",
            answer: "Patiente admise le 4 mai pour fièvre.",
            altAnswers: ["Patiente admise le 4 mai pour syndrome fébrile.", "Patiente admise le 4 mai pour hyperthermie."],
            explanation: "The genre drops the articles, the auxiliary and the subordinate clause: a participle (\"admise\", agreeing with \"patiente\") and a noun introduced by \"pour\".",
          },
        ],
      },
      {
        heading: "Restoring the verbs when you read",
        body: [
          "When you read it, mentally restore the verbs: she was admitted on 3 March for breathlessness with fever; examined; the X-ray showed...; she was diagnosed with pneumonia; antibiotics were started; her fever was gone by day 3; she went home on 10 March.",
        ],
        examples: [
          { es: "La radiographie a montré une opacité du lobe inférieur droit.", en: "The X-ray showed an opacity in the right lower lobe." },
          { es: "Elle est rentrée chez elle le 10 mars.", en: "She went home on 10 March." },
          { es: "Les antibiotiques ont été commencés dès l'admission.", en: "The antibiotics were started on admission." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, restoring a full sentence.",
            source: "The fever had gone by the third day.",
            answer: "La fièvre avait disparu au troisième jour.",
            altAnswers: ["La fièvre était tombée au troisième jour.", "La fièvre avait disparu dès le troisième jour.", "Au troisième jour, la fièvre avait disparu.", "La fièvre avait disparu le troisième jour.", "Au troisième jour, la fièvre était tombée."],
            explanation: "The plain version of \"Apyrexie obtenue à J3\"; pluperfect for a state reached by then.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French in the style of a discharge summary.",
            source: "An ultrasound was performed on 4 June and showed no abnormality.",
            answer: "Une échographie a été réalisée le 4 juin et n'a montré aucune anomalie.",
            altAnswers: ["Une échographie réalisée le 4 juin n'a montré aucune anomalie.", "Une échographie a été réalisée le 4 juin, sans anomalie.", "Échographie réalisée le 4 juin : absence d'anomalie.", "Une échographie a été effectuée le 4 juin et n'a montré aucune anomalie."],
            explanation: "Passive \"a été réalisée\" or a nominal phrase; \"aucune anomalie\" = no abnormality.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The resident on call ordered a CT scan.",
        answer: "L'interne de garde a prescrit un scanner.",
        altAnswers: ["L'interne de garde a demandé un scanner.", "L'interne de garde a fait faire un scanner.", "L'interne de garde a prescrit une tomodensitométrie."],
        explanation: "\"Un interne\" = a resident; \"prescrire\" or \"demander\" a test.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[Antibiotics were started] on admission.",
        sentence: "___ dès l'admission.",
        answer: "Mise en place d'une antibiothérapie",
        altAnswers: ["Une antibiothérapie a été mise en place", "Une antibiothérapie a été débutée"],
        explanation: "Report style: nominal \"Mise en place de\" or passive \"a été mise en place\"; \"antibiothérapie\" = antibiotic treatment.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Her discharge is planned for Monday, if everything goes well.",
        answer: "Sa sortie est prévue pour lundi, si tout va bien.",
        altAnswers: ["Sa sortie est prévue lundi, si tout va bien.", "Sa sortie est prévue pour lundi si tout se passe bien.", "Sa sortie est prévue lundi si tout se passe bien.", "Sa sortie est prévue pour lundi, si tout se passe bien."],
        explanation: "\"La sortie\" = discharge; \"si tout va bien\" or \"si tout se passe bien\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The head of department does the round at ten.",
        words: ["Le chef de service", "fait", "la visite", "à dix", "heures."],
        translation: "The head of department does the round at ten.",
        explanation: "\"Faire la visite\": the daily ward round; patients also say simply \"le médecin passe\" (the doctor comes round).",
      },
      {
        type: "dictation",
        audio: "Patient de soixante-sept ans, admis pour dyspnée fébrile.",
        explanation: "\"Dyspnée fébrile\" = breathlessness with fever; telegraphic report style.",
      },
      {
        type: "speak",
        prompt: "Ask in French on the ward: Excuse me, what time does the doctor come round?",
        text: "Excusez-moi, à quelle heure passe le médecin ?",
        explanation: "\"Passer\" is the everyday verb for the doctor's daily round (\"la visite\"); stylistic inversion \"passe le médecin\" after the question word.",
      },
    ],
  },
  {
    slug: "c2-medical-french-6",
    level: "FR-C2",
    number: 10,
    title: "Le Français Médical, Part 6 of 6",
    summary: "Informing and consenting: le consentement libre et éclairé, l'annonce d'un diagnostic, la personne de confiance, les directives anticipées, les soins palliatifs, the loi Claeys-Leonetti, and the formulas of a careful announcement.",
    duration: "19 min",
    sections: [
      {
        heading: "Le consentement libre et éclairé",
        body: [
          "Since the 2002 law on patients' rights (\"la loi Kouchner\"), French law states that no medical act may be performed without \"le consentement libre et éclairé\" of the patient: free (given without pressure) and informed (\"éclairé\", literally enlightened: after clear information on benefits, risks and alternatives). The patient can withdraw it at any time. The doctor has \"un devoir d'information\" (a duty to inform), and the patient \"un droit au refus de soins\" (a right to refuse treatment).",
        ],
        examples: [
          { es: "Aucun acte médical ne peut être pratiqué sans le consentement libre et éclairé du patient.", en: "No medical procedure may be carried out without the patient's free and informed consent." },
          { es: "Le patient a exercé son droit de refuser les soins.", en: "The patient exercised his right to refuse treatment." },
          { es: "Le patient peut refuser un traitement, même vital.", en: "A patient may refuse treatment, even life-saving treatment." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In \"un consentement éclairé\", what does \"éclairé\" mean?",
            options: ["informed", "lit up", "enthusiastic", "written"],
            correctIndex: 0,
            explanation: "\"Éclairé\" (literally enlightened) = given with full information.",
          },
          {
            type: "multiple-choice",
            question: "A surgeon tells a patient « si vous ne signez pas maintenant, j'annule l'opération ». Which condition of valid consent is broken?",
            options: ["It is no longer \"libre\": it is given under pressure.", "It is no longer \"éclairé\": the risks were not explained.", "None: consent can always be demanded at once.", "Only the written form matters."],
            correctIndex: 0,
            explanation: "Consent must be \"libre\" (without pressure) as well as \"éclairé\" (after clear information on benefits, risks and alternatives). Pressure destroys the first condition.",
          },
        ],
      },
      {
        heading: "Recueillir, donner, retirer son consentement",
        body: [
          "Practical phrases: \"recueillir le consentement du patient\" (obtain consent: \"recueillir\" = to gather), \"donner son consentement\", \"signer un formulaire de consentement\", \"retirer son consentement\". Before surgery: \"Je vais vous expliquer l'intervention, ses bénéfices attendus et ses risques, puis vous prendrez le temps de réfléchir.\" The adjective \"éclairé\" also appears in \"un avis éclairé\" (an informed opinion) and \"un amateur éclairé\" (a knowledgeable enthusiast).",
        ],
        examples: [
          { es: "Le chirurgien doit recueillir votre consentement avant l'intervention.", en: "The surgeon must obtain your consent before the operation." },
          { es: "Vous pouvez retirer votre consentement à tout moment.", en: "You may withdraw your consent at any time." },
          { es: "Je vais vous expliquer les bénéfices attendus et les risques de l'opération.", en: "I'll explain the expected benefits and the risks of the operation." },
          { es: "Prenez le temps de réfléchir avant de signer.", en: "Take time to think before you sign." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The doctor must obtain the patient's informed consent.",
            answer: "Le médecin doit recueillir le consentement éclairé du patient.",
            altAnswers: ["Le médecin doit obtenir le consentement éclairé du patient.", "Le médecin doit recueillir le consentement libre et éclairé du patient.", "Le médecin doit obtenir le consentement libre et éclairé du patient.", "Le médecin doit recueillir le consentement éclairé de la patiente."],
            explanation: "\"Recueillir le consentement\" is the professional collocation; \"éclairé\" = informed.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "You can change your mind right up to the day of the operation.",
            answer: "Vous pouvez changer d'avis jusqu'au jour de l'opération.",
            altAnswers: ["Vous pouvez changer d'avis jusqu'au jour de l'intervention.", "Vous pourrez changer d'avis jusqu'au jour de l'opération.", "Vous pouvez revenir sur votre décision jusqu'au jour de l'opération.", "Vous pouvez changer d'avis jusqu'au jour même de l'opération."],
            explanation: "Consent can be withdrawn at any moment: \"changer d'avis\", \"retirer son consentement\", right up to the operation itself.",
          },
        ],
      },
      {
        heading: "Minors and protected adults",
        body: [
          "Minors and adults under guardianship have their own rules: parents (\"les titulaires de l'autorité parentale\") consent for a child, but the child's opinion must be sought \"en fonction de son âge et de sa maturité\".",
        ],
        examples: [
          { es: "Les titulaires de l'autorité parentale signent pour l'enfant.", en: "The holders of parental authority sign for the child." },
          { es: "L'avis de l'adolescent doit être recherché.", en: "The teenager's opinion must be sought." },
          { es: "Le majeur sous tutelle est assisté de son tuteur.", en: "An adult under guardianship is assisted by his guardian." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A twelve-year-old needs an operation. Whose consent is required, and whose opinion must be sought?",
            options: ["The parents consent; the child's opinion must be sought according to his age and maturity.", "Only the child consents.", "Only the surgeon decides.", "The parents consent and the child is not consulted."],
            correctIndex: 0,
            explanation: "\"Les titulaires de l'autorité parentale\" consent for a minor, but the child's view must be sought \"en fonction de son âge et de sa maturité\".",
          },
        ],
      },
      {
        heading: "La personne de confiance",
        body: [
          "Every adult patient can name \"une personne de confiance\" (a trusted person: a relative, a friend, one's GP) who will be consulted if the patient can no longer express his wishes, and who can accompany him to appointments. It is designated in writing, and hospitals ask for it on admission. It is different from \"la personne à prévenir\" (the emergency contact), who is simply informed.",
        ],
        examples: [
          { es: "Avez-vous désigné une personne de confiance ?", en: "Have you named a trusted person?" },
          { es: "Ma fille est ma personne de confiance ; mon frère est la personne à prévenir.", en: "My daughter is my trusted person; my brother is my emergency contact." },
          { es: "La personne de confiance est désignée par écrit.", en: "The trusted person is designated in writing." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is the difference between \"la personne de confiance\" and \"la personne à prévenir\"?",
            options: ["The first is consulted on medical decisions; the second is only informed.", "They are the same thing.", "The first is a doctor; the second is a relative.", "The first pays the bills; the second visits."],
            correctIndex: 0,
            explanation: "The trusted person speaks for the patient's wishes if he can't; the emergency contact is just called.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "My son is my trusted person.",
            answer: "Mon fils est ma personne de confiance.",
            altAnswers: ["Ma personne de confiance, c'est mon fils.", "J'ai désigné mon fils comme personne de confiance."],
            explanation: "\"La personne de confiance\" is feminine whatever the gender of the person: \"ma personne de confiance\".",
          },
        ],
      },
      {
        heading: "Les directives anticipées",
        body: [
          "\"Les directives anticipées\" (advance directives) let anyone write down, in advance, their wishes about end-of-life care: whether to continue, limit or stop treatment if they can no longer speak for themselves. Since \"la loi Claeys-Leonetti\" of 2 February 2016, these directives are binding on doctors (\"elles s'imposent au médecin\"), except in an emergency or if they are manifestly inappropriate. The same law forbids \"l'obstination déraisonnable\" (the everyday word is \"l'acharnement thérapeutique\": futile overtreatment) and creates a right to \"une sédation profonde et continue jusqu'au décès\" in specific end-of-life situations.",
        ],
        examples: [
          { es: "Il a rédigé ses directives anticipées l'an dernier.", en: "He wrote his advance directives last year." },
          { es: "Les directives anticipées s'imposent au médecin.", en: "Advance directives are binding on the doctor." },
          { es: "La loi interdit l'obstination déraisonnable.", en: "The law prohibits unreasonable obstinacy in treatment." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "He wrote [his advance directives] when he fell ill.",
            sentence: "Il a rédigé ___ quand il est tombé malade.",
            answer: "ses directives anticipées",
            explanation: "\"Les directives anticipées\" (always plural): written end-of-life wishes, binding since 2016.",
          },
          {
            type: "multiple-choice",
            question: "Since the 2016 law, what weight do advance directives carry?",
            options: ["They are binding on the doctor, except in an emergency or if manifestly inappropriate.", "They are only an indication the doctor may ignore.", "They apply only if the family agrees.", "They must be renewed every year to be valid."],
            correctIndex: 0,
            explanation: "\"Elles s'imposent au médecin\": binding, with the two exceptions named by the law. The same law forbids \"l'obstination déraisonnable\".",
          },
        ],
      },
      {
        heading: "Les soins palliatifs and la fin de vie",
        body: [
          "\"Les soins palliatifs\" (palliative care) aim at comfort and quality of life when cure is no longer possible: \"une unité de soins palliatifs\" (USP), \"une équipe mobile de soins palliatifs\". The vocabulary of this field is precise and gentle; \"la fin de vie\" (end of life) is the standard term, and \"accompagner\" (to be with someone through it) its central verb.",
        ],
        examples: [
          { es: "Elle a été accompagnée en soins palliatifs jusqu'à la fin.", en: "She was cared for in palliative care until the end." },
          { es: "Une équipe mobile de soins palliatifs passe à domicile.", en: "A mobile palliative care team visits patients at home." },
          { es: "L'équipe accompagne la famille autant que le patient.", en: "The team supports the family as much as the patient." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "La famille refuse l'acharnement thérapeutique.",
            question: "What does it mean?",
            options: ["The family refuses futile overtreatment.", "The family refuses all therapy.", "The family refuses to pay for therapy.", "The family is determined to continue treatment."],
            correctIndex: 0,
            explanation: "\"L'acharnement thérapeutique\" (legally \"l'obstination déraisonnable\") = treatment pursued beyond any reasonable benefit.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She was cared for in a palliative care unit until the end.",
            answer: "Elle a été accompagnée dans une unité de soins palliatifs jusqu'à la fin.",
            altAnswers: ["Elle a été prise en charge dans une unité de soins palliatifs jusqu'à la fin.", "Elle a été soignée dans une unité de soins palliatifs jusqu'à la fin.", "Elle a été accompagnée en unité de soins palliatifs jusqu'à la fin."],
            explanation: "\"Accompagner\" is the key verb of end-of-life care; \"une unité de soins palliatifs\" (USP).",
          },
        ],
      },
      {
        heading: "Announcing: preparing the ground",
        body: [
          "French hospitals formalise \"le dispositif d'annonce\" for cancer: a dedicated consultation, time, a nurse available afterwards. The language of the announcement follows a recognisable path. First, preparation: \"J'ai reçu les résultats de vos examens. Vous souhaitez qu'on en parle maintenant ? Vous voulez que votre femme soit présente ?\" Then a warning shot (\"un coup de semonce\" is the image): \"Je préfère être franc avec vous : les résultats ne sont pas ceux que nous espérions.\"",
        ],
        examples: [
          { es: "Vous souhaitez qu'on en parle maintenant ?", en: "Would you like us to talk about it now?" },
          { es: "Je préfère être franc avec vous.", en: "I'd rather be honest with you." },
          { es: "Les résultats ne sont pas ceux que nous espérions.", en: "The results aren't what we were hoping for." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is the purpose of « Je préfère être franc avec vous : les résultats ne sont pas ceux que nous espérions » ?",
            options: ["To warn the patient that bad news is coming, before giving it.", "To soften the news so that the patient doesn't understand it.", "To ask the patient for permission to treat him.", "To give the diagnosis in technical terms."],
            correctIndex: 0,
            explanation: "It is the warning shot: the patient is told bad news is coming, so the diagnosis itself does not land without warning. It is neither vague nor technical.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as a doctor.",
            source: "Would you like your wife to be present?",
            answer: "Vous voulez que votre femme soit présente ?",
            altAnswers: ["Voulez-vous que votre femme soit présente ?", "Souhaitez-vous que votre épouse soit présente ?", "Vous souhaitez que votre femme soit présente ?", "Souhaitez-vous que votre femme soit présente ?", "Vous voulez que votre épouse soit présente ?"],
            explanation: "\"Vouloir / souhaiter que\" + subjunctive \"soit\".",
          },
        ],
      },
      {
        heading: "The information, in small pieces",
        body: [
          "Then the information, in plain words, in small pieces, with pauses: \"L'examen montre une tumeur au niveau du pancréas.\" Check what the patient has understood and wants to know: \"Qu'est-ce que vous avez compris de ce que je viens de dire ?\" \"Est-ce que vous voulez que je vous en dise plus aujourd'hui, ou on en reparle demain ?\" Then the plan: \"Voici ce que nous vous proposons...\", \"Vous ne serez pas seul\", \"Nous allons en discuter en réunion avec mes collègues\" (\"la RCP\", réunion de concertation pluridisciplinaire).",
        ],
        examples: [
          { es: "Qu'est-ce que vous avez compris de ce que je viens de dire ?", en: "What have you understood from what I've just said?" },
          { es: "Voici ce que nous vous proposons.", en: "This is what we suggest." },
          { es: "Vous ne serez pas seul, nous allons vous accompagner.", en: "You won't be alone, we'll be with you through this." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence best checks what the patient has understood?",
            options: ["Qu'est-ce que vous avez compris de ce que je viens de dire ?", "Vous avez compris, j'espère ?", "C'est clair, non ?", "Je répète : c'est un adénocarcinome."],
            correctIndex: 0,
            explanation: "An open question invites the patient to reformulate; the others pressure or repeat jargon.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as a doctor to a patient.",
            source: "I'd rather be honest with you: the results are not what we were hoping for.",
            answer: "Je préfère être franc avec vous : les résultats ne sont pas ceux que nous espérions.",
            altAnswers: ["Je préfère être franche avec vous : les résultats ne sont pas ceux que nous espérions.", "Je préfère être franc avec vous : les résultats ne sont pas ceux qu'on espérait.", "Je préfère être franche avec vous : les résultats ne sont pas ceux qu'on espérait.", "Je préfère être honnête avec vous : les résultats ne sont pas ceux que nous espérions."],
            explanation: "\"Ceux que nous espérions\": the demonstrative pronoun stands for \"les résultats\"; imparfait for the earlier hope.",
          },
        ],
      },
      {
        heading: "What to avoid",
        body: [
          "What to avoid: false reassurance (\"ce n'est rien\"), statistics thrown at the patient, jargon (\"un adénocarcinome\") without translation, and the cowardly vagueness that leaves the patient guessing. \"Être franc\" without being brutal is the aim; the next spiral lesson adds the grammar of attenuation.",
        ],
        examples: [
          { es: "Il ne faut pas dire « ce n'est rien » quand c'est grave.", en: "One must not say it's nothing when it is serious." },
          { es: "Les statistiques brutes n'aident pas le patient.", en: "Raw statistics don't help the patient." },
          { es: "Une tumeur du pancréas, c'est-à-dire un cancer de cet organe.", en: "A pancreatic tumour, that is, a cancer of that organ." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence should a doctor NOT say when announcing a serious diagnosis?",
            options: ["Ce n'est rien, ne vous inquiétez pas.", "L'examen montre une tumeur au niveau du pancréas.", "Est-ce que vous voulez que je vous en dise plus aujourd'hui ?", "Nous allons en discuter en réunion avec mes collègues."],
            correctIndex: 0,
            explanation: "False reassurance (\"ce n'est rien\") when the news is serious leaves the patient unprepared and destroys trust. The other three inform, check and plan.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the jargon into words the patient can understand.",
            source: "Vous présentez un adénocarcinome pulmonaire.",
            answer: "Vous avez un cancer du poumon.",
            altAnswers: ["Vous avez une tumeur du poumon.", "Vous avez un cancer au poumon."],
            explanation: "Jargon without translation leaves the patient guessing: \"un adénocarcinome pulmonaire\" becomes \"un cancer du poumon\", or is explained at once with \"c'est-à-dire\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Have you written advance directives?",
        answer: "Avez-vous rédigé des directives anticipées ?",
        altAnswers: ["Vous avez rédigé des directives anticipées ?", "Est-ce que vous avez rédigé des directives anticipées ?", "Avez-vous écrit des directives anticipées ?", "Avez-vous rédigé vos directives anticipées ?"],
        explanation: "\"Rédiger des directives anticipées\": the standard question on admission.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Families often dread [futile overtreatment] at the end of life.",
        sentence: "Les familles redoutent souvent ___ en fin de vie.",
        answer: "l'acharnement thérapeutique",
        altAnswers: ["l'obstination déraisonnable"],
        explanation: "The everyday name for futile overtreatment is \"l'acharnement thérapeutique\"; the legal term is \"l'obstination déraisonnable\", which the law forbids.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, as a doctor.",
        source: "Here is what we suggest: an operation, then chemotherapy.",
        answer: "Voici ce que nous vous proposons : une opération, puis une chimiothérapie.",
        altAnswers: ["Voici ce que nous vous proposons : une intervention, puis une chimiothérapie.", "Voilà ce que nous vous proposons : une opération, puis une chimiothérapie.", "Voici ce qu'on vous propose : une opération, puis une chimiothérapie.", "Voici ce que nous vous proposons : une opération puis une chimio."],
        explanation: "\"Voici ce que\" introduces the plan; \"une intervention\" is the formal word for an operation.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: You can think about it before giving your agreement.",
        words: ["Vous", "pouvez", "y", "réfléchir", "avant", "de", "donner", "votre", "accord."],
        translation: "You can think about it before giving your agreement.",
        explanation: "\"Y réfléchir\" (think about it) keeps the pronoun before the infinitive; \"donner son accord\" is to consent.",
      },
      {
        type: "dictation",
        audio: "Ses directives anticipées ont été respectées.",
        explanation: "\"Les directives anticipées\" are binding on the doctor, so here they \"ont été respectées\".",
      },
      {
        type: "speak",
        prompt: "Say it in French, as a doctor (a man): I'd rather tell you plainly: the tumour is malignant.",
        text: "Je préfère vous le dire clairement : la tumeur est maligne.",
        tip: "Slow down and pause after the colon: the pause is part of the message.",
        explanation: "\"Je préfère vous le dire clairement\" warns the patient that bad news follows; \"maligne\" is the feminine of \"malin\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, as a doctor.",
        source: "You won't be alone: a nurse will see you after this consultation.",
        answer: "Vous ne serez pas seul : une infirmière vous recevra après cette consultation.",
        altAnswers: ["Vous ne serez pas seule : une infirmière vous recevra après cette consultation.", "Vous ne serez pas seul : une infirmière va vous recevoir après cette consultation.", "Vous ne serez pas seule : une infirmière va vous recevoir après cette consultation.", "Vous ne serez pas seul : une infirmière vous verra après cette consultation.", "Vous ne serez pas seule : une infirmière vous verra après cette consultation."],
        explanation: "\"Seul / seule\" agrees with the patient; \"recevoir\" a patient = to see him.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Le chirurgien doit recueillir à votre consentement.",
        answer: "Le chirurgien doit recueillir votre consentement.",
        explanation: "\"Recueillir\" takes a direct object: \"recueillir le consentement du patient\", with no preposition.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The nurse will see you after this appointment.",
        answer: "L'infirmière vous recevra après cette consultation.",
        altAnswers: ["L'infirmier vous recevra après cette consultation.", "L'infirmière vous recevra après ce rendez-vous.", "L'infirmière vous verra après cette consultation."],
        explanation: "\"Recevoir\" is the verb for a professional seeing someone: \"l'infirmière vous recevra\"; the appointment itself is \"la consultation\".",
      },
    ],
  },
  {
    slug: "c2-text-detective-compte-rendu",
    level: "FR-C2",
    number: 11,
    title: "Text Detective: Le Compte Rendu d'Hospitalisation",
    summary: "Read a hospital discharge report and extract the reason for admission, the tests, the diagnosis, the treatment and the follow-up, decoding its abbreviations (ATCD, FA, ETT, RAS) and its nominal style.",
    duration: "19 min",
    sections: [
      {
        heading: "Part 1: motif and antécédents",
        body: [
          "M. Roussel's daughter asks you to help her understand the report her father brought home. Here is its first part (written for this course): \"Compte rendu d'hospitalisation. Service de cardiologie, CHU de Grenoble. M. Jean-Pierre Roussel, 61 ans, hospitalisé du 12 au 16 novembre 2025. Motif d'hospitalisation : palpitations et dyspnée d'effort. ATCD : HTA traitée, DT2 sous metformine, cholécystectomie en 2018. Pas d'allergie connue. Tabagisme sevré (20 PA).\"",
        ],
        examples: [
          { es: "Motif d'hospitalisation : palpitations et dyspnée d'effort.", en: "Reason for admission: palpitations and breathlessness on exertion." },
          { es: "Tabagisme sevré depuis 2015.", en: "Former smoker, stopped in 2015." },
          { es: "Pas d'allergie connue.", en: "No known allergies." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In the report, what does \"ATCD : HTA traitée, DT2 sous metformine\" tell you?",
            options: ["He has treated high blood pressure and type 2 diabetes on metformin.", "He had a heart attack and is diabetic.", "He has a history of stroke and takes metformin.", "He has no medical history."],
            correctIndex: 0,
            explanation: "ATCD = antécédents; HTA = hypertension; DT2 = type 2 diabetes; \"sous\" = on (a drug).",
          },
        ],
      },
      {
        heading: "Part 1: histoire de la maladie",
        body: [
          "The history then follows: \"Histoire de la maladie : patient adressé par son médecin traitant pour palpitations évoluant depuis une semaine, associées à une dyspnée d'effort d'aggravation progressive. Pas de douleur thoracique. Pas de syncope.\"",
        ],
        examples: [
          { es: "Patient adressé par son médecin traitant.", en: "Patient referred by his GP." },
          { es: "Palpitations évoluant depuis une semaine.", en: "Palpitations for one week." },
          { es: "Pas de douleur thoracique. Pas de syncope.", en: "No chest pain. No fainting." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What has M. Roussel NOT had, according to the report?",
            options: ["Chest pain or fainting.", "Palpitations.", "Breathlessness on exertion.", "High blood pressure."],
            correctIndex: 0,
            explanation: "\"Pas de douleur thoracique. Pas de syncope.\" Negative findings are listed because what is absent matters as much as what is present; the palpitations, the breathlessness and the HTA are all there.",
          },
        ],
      },
      {
        heading: "Decoding the abbreviations",
        body: [
          "Decode the abbreviations: \"ATCD\" = antécédents; \"HTA\" = hypertension artérielle; \"DT2\" = diabète de type 2; \"PA\" = paquets-années; \"CHU\" = centre hospitalier universitaire (teaching hospital). \"Cholécystectomie\" = removal of the gallbladder (chol- bile, cyst- bladder, -ectomie). \"Tabagisme sevré\" = former smoker (\"sevrer\" = to wean).",
        ],
        examples: [
          { es: "ATCD : HTA traitée, DT2 sous metformine.", en: "History: treated high blood pressure, type 2 diabetes on metformin." },
          { es: "Cholécystectomie en 2018.", en: "Gallbladder removed in 2018." },
          { es: "Tabagisme sevré (20 PA).", en: "Former smoker (20 pack-years)." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Cholécystectomie » : what has been done?",
            options: ["The gallbladder has been removed.", "The gallbladder has been examined with a camera.", "The bile duct has been opened.", "A bladder infection has been treated."],
            correctIndex: 0,
            explanation: "Chol- (bile) + cyst- (bladder) + -ectomie (removal): the gallbladder is out. A camera would be \"-scopie\", an incision \"-tomie\".",
          },
          {
            type: "matching",
            instructions: "Match each abbreviation to its meaning.",
            pairs: [
              { left: "ATCD", right: "medical history" },
              { left: "RAS", right: "nothing to report" },
              { left: "CHU", right: "teaching hospital" },
              { left: "ETT", right: "heart ultrasound" },
              { left: "TA", right: "blood pressure" },
            ],
            explanation: "Reports are dense with abbreviations; RAS is also common in everyday French.",
          },
        ],
      },
      {
        heading: "Participles and nominal phrases",
        body: [
          "The phrase \"palpitations évoluant depuis une semaine\" uses the present participle of \"évoluer\" (to develop, progress), a favourite of reports, and \"d'aggravation progressive\" (gradually worsening) is a nominal phrase in place of a clause. Negative findings are listed one by one (\"Pas de douleur thoracique. Pas de syncope.\") because what is absent matters as much as what is present.",
        ],
        examples: [
          { es: "Dyspnée d'effort d'aggravation progressive.", en: "Gradually worsening breathlessness on exertion." },
          { es: "Douleur évoluant depuis quarante-huit heures.", en: "Pain for the last forty-eight hours." },
          { es: "Essoufflement d'apparition brutale.", en: "Breathlessness of sudden onset." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French in report style.",
            source: "Patient referred by his GP for palpitations over the last two weeks.",
            answer: "Patient adressé par son médecin traitant pour palpitations évoluant depuis deux semaines.",
            altAnswers: ["Patient adressé par son médecin traitant pour des palpitations évoluant depuis deux semaines.", "Patient adressé par son médecin traitant pour palpitations depuis deux semaines.", "Patient adressé par son médecin traitant pour palpitations évoluant depuis quinze jours.", "Patient adressé par son médecin traitant pour des palpitations depuis deux semaines."],
            explanation: "\"Adressé par\", \"pour\" + symptom (often without article), \"évoluant depuis\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into report style with a present participle.",
            source: "Le patient a une toux qui évolue depuis dix jours.",
            answer: "Toux évoluant depuis dix jours.",
            altAnswers: ["Toux évoluant depuis dix jours chez ce patient."],
            explanation: "The genre drops the subject and the relative clause: the present participle \"évoluant\" replaces \"qui évolue\", and the article goes too.",
          },
        ],
      },
      {
        heading: "Part 2: the examination on admission",
        body: [
          "\"Examen clinique à l'entrée : TA 145/85 mmHg, FC 128/min irrégulière, SpO2 96 % en air ambiant. Auscultation pulmonaire : RAS. Pas d'œdème des membres inférieurs.\"",
        ],
        examples: [
          { es: "Auscultation pulmonaire : RAS.", en: "Lung examination: nothing abnormal." },
          { es: "TA 145/85 mmHg, FC 128 par minute, irrégulière.", en: "Blood pressure 145/85, heart rate 128 per minute, irregular." },
          { es: "Pas d'œdème des membres inférieurs.", en: "No swelling of the lower limbs." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Heart examination: [nothing to report].",
            sentence: "Auscultation cardiaque : ___.",
            answer: "RAS",
            altAnswers: ["rien à signaler", "rien à signaler."],
            explanation: "\"RAS\" stands for \"rien à signaler\" (nothing to report), used in reports and in everyday French alike.",
          },
        ],
      },
      {
        heading: "Part 2: the tests and the conclusion",
        body: [
          "The tests follow: \"ECG : fibrillation atriale (FA) rapide à 130/min. Biologie : NFS normale, TSH normale, fonction rénale normale (créatinine 82 µmol/L). ETT : FEVG conservée à 60 %, oreillette gauche modérément dilatée, pas de valvulopathie significative. Conclusion : FA de découverte récente, probablement favorisée par l'HTA.\"",
        ],
        examples: [
          { es: "ECG : fibrillation atriale rapide à 130 par minute.", en: "ECG: fast atrial fibrillation at 130 per minute." },
          { es: "FEVG conservée à 60 %.", en: "Left ventricular ejection fraction preserved at 60%." },
          { es: "FA de découverte récente, probablement favorisée par l'HTA.", en: "Recently discovered atrial fibrillation, probably triggered by high blood pressure." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What did the ECG show?",
            options: ["Fast atrial fibrillation at 130 per minute.", "A normal heart rhythm.", "A heart attack.", "A valve disease."],
            correctIndex: 0,
            explanation: "\"ECG : fibrillation atriale (FA) rapide à 130/min\". The echo (ETT) found no significant valve disease and a preserved pumping function.",
          },
          {
            type: "multiple-choice",
            question: "What does \"FEVG conservée\" mean?",
            options: ["The heart's pumping function is normal.", "The heart is enlarged.", "The heart rhythm is irregular.", "The left ventricle was removed."],
            correctIndex: 0,
            explanation: "FEVG = left ventricular ejection fraction; \"conservée\" = preserved, i.e. normal.",
          },
        ],
      },
      {
        heading: "How a report hedges",
        body: [
          "The conclusion hedges: \"probablement favorisée par\" (probably promoted by). Medical reports constantly qualify their claims: \"probable\", \"évocateur de\" (suggestive of), \"compatible avec\", \"en faveur de\", \"à confirmer\". \"De découverte récente\" (recently discovered) is another nominal phrase replacing a relative clause.",
        ],
        examples: [
          { es: "Tableau évocateur d'une pneumopathie.", en: "Clinical picture suggestive of pneumonia." },
          { es: "Images compatibles avec une fracture, à confirmer par un scanner.", en: "Images consistent with a fracture, to be confirmed by a CT scan." },
          { es: "Anomalie en faveur d'une origine inflammatoire.", en: "Abnormality suggesting an inflammatory cause." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French in report style.",
            source: "Clinical picture suggestive of a heart rhythm disorder.",
            answer: "Tableau évocateur d'un trouble du rythme cardiaque.",
            altAnswers: ["Tableau clinique évocateur d'un trouble du rythme cardiaque.", "Tableau évocateur d'un trouble du rythme.", "Tableau clinique évocateur d'un trouble du rythme."],
            explanation: "\"Évocateur de\" (suggestive of) hedges a diagnosis; \"un trouble du rythme\" = an arrhythmia.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Images [consistent with] a fracture, to be confirmed.",
            sentence: "Images ___ une fracture, à confirmer.",
            answer: "compatibles avec",
            explanation: "Reports qualify their claims: \"compatible avec\", \"évocateur de\", \"en faveur de\", \"probable\", \"à confirmer\". \"Compatibles\" agrees with \"images\".",
          },
        ],
      },
      {
        heading: "Part 3: the treatment given",
        body: [
          "\"Prise en charge : introduction d'un bêtabloquant (bisoprolol 2,5 mg/j) avec ralentissement de la fréquence cardiaque, et d'un anticoagulant oral (apixaban 5 mg x 2/j) compte tenu du risque thromboembolique. Retour spontané en rythme sinusal à J3.\"",
        ],
        examples: [
          { es: "Introduction d'un anticoagulant compte tenu du risque thromboembolique.", en: "An anticoagulant was started, given the risk of blood clots." },
          { es: "Retour spontané en rythme sinusal à J3.", en: "Spontaneous return to normal rhythm on day 3." },
          { es: "Introduction d'un bêtabloquant avec ralentissement de la fréquence cardiaque.", en: "A beta blocker was started, and the heart rate slowed." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why was an anticoagulant started?",
            options: ["Because of the risk of blood clots.", "Because the blood pressure was too high.", "Because the kidney function was abnormal.", "Because the patient was still smoking."],
            correctIndex: 0,
            explanation: "\"Compte tenu du risque thromboembolique\": atrial fibrillation lets clots form, so the anticoagulant prevents them. The kidney function and blood count were normal.",
          },
        ],
      },
      {
        heading: "Part 3: conduite à tenir and consignes",
        body: [
          "Then the discharge plan: \"Traitement de sortie : bisoprolol 2,5 mg 1 cp/j, apixaban 5 mg 1 cp matin et soir, metformine et amlodipine inchangées. Conduite à tenir : surveillance de la fonction rénale et de la NFS dans un mois ; Holter ECG à programmer ; à revoir en consultation de cardiologie dans un mois. Consignes données au patient : consulter en urgence en cas de saignement anormal, de douleur thoracique ou de signe neurologique.\"",
        ],
        examples: [
          { es: "Traitements habituels inchangés.", en: "Usual treatments unchanged." },
          { es: "À revoir en consultation dans un mois.", en: "To be seen again in clinic in one month." },
          { es: "Holter ECG à programmer.", en: "Holter monitor to be booked." },
          { es: "Consulter en urgence en cas de saignement anormal.", en: "Seek urgent care in the event of abnormal bleeding." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Conduite à tenir : à revoir en consultation dans un mois.\" What must M. Roussel do?",
            options: ["Have a follow-up appointment in one month.", "Stay in hospital for one more month.", "Stop his treatment in one month.", "Drive himself to hospital next month."],
            correctIndex: 0,
            explanation: "\"La conduite à tenir\" is the plan; \"à revoir en consultation\" = to be seen again as an outpatient.",
          },
          {
            type: "listen-choose",
            audio: "Traitement de sortie : bisoprolol, un comprimé par jour.",
            question: "What does it mean?",
            options: ["Discharge medication: bisoprolol, one tablet a day.", "Exit treatment: bisoprolol was stopped.", "Bisoprolol was given once, on leaving.", "Treatment outside hospital is not allowed."],
            correctIndex: 0,
            explanation: "\"Le traitement de sortie\" = the medication the patient leaves hospital with.",
          },
        ],
      },
      {
        heading: "Reading the plan: what the patient must do",
        body: [
          "\"La conduite à tenir\" (CAT: the plan, literally the conduct to hold) and \"les consignes\" (instructions) are the parts the patient must act on. \"À revoir en consultation dans un mois\" means the patient must be seen again in one month. \"Holter ECG à programmer\" is the infinitive of obligation after \"à\" (still to be booked). \"Compte tenu de\" (given, in view of) justifies the anticoagulant. \"Inchangé(e)s\" = unchanged.",
        ],
        examples: [
          { es: "Surveillance de la fonction rénale dans un mois.", en: "Kidney function to be checked in one month." },
          { es: "Bilan sanguin à programmer avant la consultation.", en: "Blood tests to be booked before the appointment." },
          { es: "Consignes données au patient et à sa famille.", en: "Instructions given to the patient and his family." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Anticoagulant started [given] the risk of stroke.",
            sentence: "Anticoagulant introduit ___ du risque d'AVC.",
            answer: "compte tenu",
            explanation: "\"Compte tenu de\" = given, in view of (\"tenu\" is invariable here).",
          },
          {
            type: "multiple-choice",
            question: "« Holter ECG à programmer. » Who does what?",
            options: ["The patient still has to book the test.", "The test has already been done in hospital.", "The test has been cancelled.", "The cardiologist will do it during the next appointment."],
            correctIndex: 0,
            explanation: "\"À\" + infinitive means it is still to be done: \"à programmer\" (to be booked), like \"à revoir en consultation\" (to be seen again).",
          },
        ],
      },
      {
        heading: "Explaining it to his daughter",
        body: [
          "So, for his daughter: \"Ton père a fait une fibrillation atriale, un trouble du rythme du cœur. On lui a donné un médicament pour ralentir le cœur et un anticoagulant pour éviter un caillot. Son rythme est redevenu normal au troisième jour. Il doit faire une prise de sang dans un mois, prendre rendez-vous pour un Holter et revoir le cardiologue dans un mois. S'il saigne anormalement, s'il a mal à la poitrine ou un problème neurologique, il faut appeler les urgences.\"",
        ],
        examples: [
          { es: "On lui a donné un médicament pour ralentir le cœur.", en: "They gave him a medicine to slow his heart down." },
          { es: "Son rythme est redevenu normal au troisième jour.", en: "His rhythm went back to normal on the third day." },
          { es: "S'il saigne anormalement, il faut appeler les urgences.", en: "If he bleeds abnormally, you must call the emergency services." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into everyday French, explaining to a friend (\"tu\") about her father.",
            source: "He has to have a blood test in a month and see the cardiologist again.",
            answer: "Il doit faire une prise de sang dans un mois et revoir le cardiologue.",
            altAnswers: ["Il doit faire une prise de sang dans un mois et retourner voir le cardiologue.", "Il doit faire une prise de sang dans un mois et revoir son cardiologue.", "Il faut qu'il fasse une prise de sang dans un mois et qu'il revoie le cardiologue.", "Il doit faire une prise de sang d'ici un mois et revoir le cardiologue."],
            explanation: "Restore the verbs: \"surveillance de la NFS\" becomes \"faire une prise de sang\"; \"à revoir\" becomes \"revoir le cardiologue\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into everyday French, explaining to a friend (\"tu\").",
            source: "Your father's heart was beating irregularly, but it went back to normal on the third day.",
            answer: "Le cœur de ton père battait de façon irrégulière, mais il est redevenu normal au troisième jour.",
            altAnswers: ["Le cœur de ton père battait de manière irrégulière, mais il est redevenu normal au troisième jour.", "Le cœur de ton père battait irrégulièrement, mais il est redevenu normal le troisième jour.", "Le cœur de ton père battait de façon irrégulière, mais son rythme est redevenu normal au troisième jour.", "Le cœur de ton père battait irrégulièrement, mais il est redevenu normal au troisième jour."],
            explanation: "The plain version of \"FA... retour spontané en rythme sinusal à J3\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French in report style.",
        source: "Reason for admission: chest pain.",
        answer: "Motif d'hospitalisation : douleur thoracique.",
        altAnswers: ["Motif d'admission : douleur thoracique.", "Motif d'hospitalisation : douleurs thoraciques.", "Motif d'hospitalisation : une douleur thoracique."],
        explanation: "\"Motif d'hospitalisation\" opens every report; no article before the symptom.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French in report style.",
        source: "Gradually worsening cough for ten days.",
        answer: "Toux d'aggravation progressive évoluant depuis dix jours.",
        altAnswers: ["Toux d'aggravation progressive depuis dix jours.", "Toux s'aggravant progressivement depuis dix jours.", "Toux évoluant depuis dix jours, d'aggravation progressive."],
        explanation: "\"D'aggravation progressive\" and \"évoluant depuis\": nominal and participial style.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French in report style.",
        source: "To be seen again in clinic in three months.",
        answer: "À revoir en consultation dans trois mois.",
        altAnswers: ["À revoir en consultation d'ici trois mois.", "Patient à revoir en consultation dans trois mois.", "À revoir en consultation dans 3 mois."],
        explanation: "\"À\" + infinitive (to be...) is the typical follow-up instruction.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French in report style.",
        source: "Seek urgent care in case of chest pain.",
        answer: "Consulter en urgence en cas de douleur thoracique.",
        altAnswers: ["Consulter en urgence en cas de douleur dans la poitrine.", "Consulter en urgence en cas de douleurs thoraciques.", "Appeler le 15 en cas de douleur thoracique."],
        explanation: "Instructions in the infinitive; \"en cas de\" + noun.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Kidney function unchanged.",
        words: ["Fonction", "rénale", "inchangée."],
        translation: "Kidney function unchanged.",
        explanation: "No verb and no article: the report states the finding with a noun and a participle, \"inchangée\" agreeing with \"fonction\".",
      },
      {
        type: "dictation",
        audio: "Holter à programmer, à revoir dans un mois.",
        explanation: "Two infinitives after \"à\": still to be booked, to be seen again.",
      },
      {
        type: "speak",
        prompt: "Say it in French: If I understand the report correctly, he has to see the cardiologist again in a month.",
        text: "Si je comprends bien le compte rendu, il doit revoir le cardiologue dans un mois.",
        explanation: "\"Le compte rendu\" (no hyphen); \"revoir\" = see again.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Patient adressé par son médecin traitant pour palpitations évoluantes depuis une semaine.",
        answer: "Patient adressé par son médecin traitant pour palpitations évoluant depuis une semaine.",
        explanation: "As a reduced relative clause (\"qui évoluent\"), the present participle \"évoluant\" is invariable; \"évoluantes\" would make it an adjective, which does not exist here.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Blood pressure to be monitored by the GP every three months.",
        answer: "Surveillance de la tension artérielle par le médecin traitant tous les trois mois.",
        altAnswers: ["Surveillance de la tension par le médecin traitant tous les trois mois.", "Surveillance de la tension artérielle tous les trois mois par le médecin traitant.", "Contrôle de la tension artérielle par le médecin traitant tous les trois mois."],
        explanation: "The plan is written as nouns: \"surveillance de...\" instead of \"il faut surveiller...\", and the agent follows with \"par\".",
      },
    ],
  },
  {
    slug: "c2-spiral-medical-tact",
    level: "FR-C2",
    number: 12,
    title: "Spiral Review: Annoncer une Mauvaise Nouvelle avec Tact",
    summary: "Breaking bad news needs attenuation: the conditional (il se pourrait que), the subjunctive after il est possible que and il n'est pas exclu que, euphemism (une masse, une lésion) and empathic formulas, reviewed in a medical context.",
    duration: "19 min",
    sections: [
      {
        heading: "Remember the rule: possibility takes the subjunctive",
        body: [
          "You know these structures from the Advanced level; here they do delicate work. Possibility takes the subjunctive: \"il est possible que la tumeur soit bénigne\", \"il se peut que le traitement doive être prolongé\", \"il n'est pas exclu que nous ayons à opérer\". The conditional softens further: \"il se pourrait que\" + subjunctive (\"il se pourrait que ce soit une infection\"), \"il semblerait que\" (\"il semblerait que le traitement n'ait pas fonctionné\"), \"nous ne pouvons pas exclure que\" + subjunctive.",
        ],
        examples: [
          { es: "Il est possible que la tumeur soit bénigne, mais il faut une biopsie.", en: "The tumour may be benign, but we need a biopsy." },
          { es: "Il se pourrait que le traitement doive être prolongé.", en: "The treatment might have to be extended." },
          { es: "Il n'est pas exclu que nous ayons à opérer.", en: "We cannot rule out having to operate." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as a doctor.",
            source: "We cannot rule out that it is an infection.",
            answer: "Il n'est pas exclu que ce soit une infection.",
            altAnswers: ["Nous ne pouvons pas exclure que ce soit une infection.", "On ne peut pas exclure que ce soit une infection.", "Il n'est pas exclu qu'il s'agisse d'une infection.", "Nous ne pouvons pas exclure qu'il s'agisse d'une infection.", "On ne peut pas exclure qu'il s'agisse d'une infection."],
            explanation: "\"Il n'est pas exclu que\" / \"ne pas exclure que\" + subjunctive (\"soit\", \"s'agisse\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il se peut que la biopsie doit être refaite.",
            answer: "Il se peut que la biopsie doive être refaite.",
            explanation: "\"Il se peut que\" expresses possibility, so it takes the subjunctive: \"doive\", not \"doit\".",
          },
        ],
      },
      {
        heading: "Probability leans towards the indicative",
        body: [
          "The trap: probability is not possibility. \"Il est probable que\" and \"il est vraisemblable que\" take the indicative in the affirmative (\"il est probable que la masse est bénigne\"), because they lean towards reality; \"il est possible que\", \"il se peut que\", \"il est peu probable que\" take the subjunctive. Doctors use this gradient on purpose: \"Il est probable que...\" commits more than \"Il n'est pas exclu que...\".",
        ],
        examples: [
          { es: "Il semblerait que le traitement n'ait pas eu l'effet attendu.", en: "It seems the treatment hasn't had the expected effect." },
          { es: "Il est probable que cette masse est d'origine inflammatoire.", en: "This mass is probably inflammatory in origin." },
          { es: "Il est peu probable que ce soit grave.", en: "It's unlikely to be serious." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence uses the correct mood?",
            options: ["Il est probable que la masse est bénigne.", "Il est possible que la masse est bénigne.", "Il se peut que la masse est bénigne.", "Il est peu probable que la masse est maligne."],
            correctIndex: 0,
            explanation: "Affirmative \"il est probable que\" takes the indicative; possibility and low probability take the subjunctive (\"soit\").",
          },
          {
            type: "multiple-choice",
            question: "Which sentence commits the doctor most?",
            options: ["Il est probable que cette masse est bénigne.", "Il n'est pas exclu que cette masse soit bénigne.", "Il se pourrait que cette masse soit bénigne.", "Il est possible que cette masse soit bénigne."],
            correctIndex: 0,
            explanation: "\"Il est probable que\" + indicative leans towards reality and so commits most. \"Il n'est pas exclu que\", \"il se pourrait que\" and \"il est possible que\" only open a possibility, with the subjunctive.",
          },
        ],
      },
      {
        heading: "Il n'est pas exclu que: gentle but serious",
        body: [
          "\"Il n'est pas exclu que\" is a double negative that sounds gentle but says something serious: the possibility is real enough to mention. A ne explétif may appear after it in very careful style (\"il n'est pas exclu que la maladie ne progresse\"), but modern doctors usually omit it to avoid ambiguity, since a patient could hear it as a negation.",
        ],
        examples: [
          { es: "Il n'est pas exclu que la maladie revienne.", en: "We cannot rule out the disease coming back." },
          { es: "Nous ne pouvons pas exclure que l'intervention soit nécessaire.", en: "We cannot rule out that the operation will be necessary." },
          { es: "Il n'est pas exclu qu'une biopsie soit nécessaire.", en: "A biopsy may well be necessary." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: We cannot rule out an operation.",
            words: ["Il", "n'est", "pas", "exclu", "que nous", "devions opérer."],
            translation: "We cannot rule out an operation.",
            explanation: "\"Il n'est pas exclu que\" + subjunctive \"devions\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it gentler: open the possibility instead of asserting it.",
            source: "Le traitement devra être prolongé.",
            answer: "Il n'est pas exclu que le traitement doive être prolongé.",
            altAnswers: ["Il se pourrait que le traitement doive être prolongé.", "Il est possible que le traitement doive être prolongé."],
            explanation: "\"Il n'est pas exclu que\" + subjunctive turns a flat assertion into a real but open possibility, which is the point of the structure.",
          },
        ],
      },
      {
        heading: "Neutral nouns before the diagnosis is certain",
        body: [
          "Before a diagnosis is certain, doctors use neutral nouns: \"une masse\", \"une lésion\", \"une image\" (on a scan), \"une anomalie\", \"un nodule\", \"une grosseur\" (the patient's word for a lump). These are not lies: they describe what is seen without prejudging what it is. \"Le scanner montre une lésion au niveau du foie, dont nous devons préciser la nature.\" (\"Au niveau de\" = in the area of, a ubiquitous medical phrase.)",
        ],
        examples: [
          { es: "Le scanner montre une lésion au niveau du foie.", en: "The scan shows a lesion in the liver." },
          { es: "Nous devons préciser la nature de cette masse.", en: "We need to determine the nature of this mass." },
          { es: "J'ai senti une grosseur sous le bras.", en: "I felt a lump under my arm." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as a doctor.",
            source: "The scan shows a mass in the area of the pancreas.",
            answer: "Le scanner montre une masse au niveau du pancréas.",
            altAnswers: ["Le scanner met en évidence une masse au niveau du pancréas.", "Le scanner révèle une masse au niveau du pancréas.", "Le scanner montre une masse dans la région du pancréas."],
            explanation: "\"Une masse\" (neutral, before a diagnosis) + \"au niveau de\" (in the area of).",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as a doctor.",
            source: "The scan shows a lesion whose nature we need to determine.",
            answer: "Le scanner montre une lésion dont nous devons préciser la nature.",
            altAnswers: ["Le scanner montre une lésion dont il faut préciser la nature.", "Le scanner montre une lésion dont nous devons déterminer la nature.", "Le scanner met en évidence une lésion dont nous devons préciser la nature.", "Le scanner montre une lésion dont on doit préciser la nature."],
            explanation: "\"Dont\" = whose (de + noun: \"la nature de la lésion\"); \"préciser la nature\" is the standard medical phrase.",
          },
        ],
      },
      {
        heading: "When euphemism becomes a problem",
        body: [
          "Once the diagnosis is established, euphemism becomes a problem. Patients have a right to the truth, and vague words can leave them confused or falsely reassured. Good practice: name it once, clearly (\"il s'agit d'un cancer\"), then explain, and let the patient choose the words used afterwards. Many French people still say \"une longue maladie\" or \"il est parti d'une longue maladie\" in death notices to avoid the word cancer.",
        ],
        examples: [
          { es: "Il s'agit d'un cancer, mais il a été découvert tôt.", en: "It is a cancer, but it was found early." },
          { es: "Une fois le diagnostic posé, le patient a droit à la vérité.", en: "Once the diagnosis is made, the patient has a right to the truth." },
          { es: "Il est décédé des suites d'une longue maladie.", en: "He died after a long illness." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a death notice you read: \"décédé des suites d'une longue maladie\". What does this usually suggest?",
            options: ["The person died of cancer.", "The person died of old age.", "The person died in an accident.", "The person was ill for a short time."],
            correctIndex: 0,
            explanation: "\"Une longue maladie\" is the traditional euphemism for cancer in French obituaries.",
          },
        ],
      },
      {
        heading: "Announcing a death",
        body: [
          "The same applies to death. Families hear \"il est décédé\" (formal), \"il nous a quittés\", \"il s'est éteint\" (he passed away peacefully: literally went out like a light), \"il est parti\". A doctor announcing a death should be clear: \"Je suis désolé, votre père est décédé à 4 heures ce matin\". The vague \"nous l'avons perdu\" can be misunderstood in the first shock.",
        ],
        examples: [
          { es: "Il s'est éteint paisiblement, entouré des siens.", en: "He passed away peacefully, surrounded by his family." },
          { es: "Je suis désolée, votre mère est décédée cette nuit.", en: "I'm so sorry, your mother died during the night." },
          { es: "Votre père nous a quittés ce matin.", en: "Your father left us this morning." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A doctor must tell a family that their mother has died. Which sentence is clear without being brutal?",
            options: ["Je suis désolée, votre mère est décédée cette nuit.", "Nous l'avons perdue.", "Elle n'est plus des nôtres, voilà.", "Elle est partie, enfin, vous voyez."],
            correctIndex: 0,
            explanation: "\"Je suis désolée, votre mère est décédée\" names the fact and the time, with an apology. \"Nous l'avons perdue\" and the vague forms can be misunderstood in the first shock.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She passed away peacefully this morning, at home.",
            answer: "Elle s'est éteinte paisiblement ce matin, chez elle.",
            altAnswers: ["Elle s'est éteinte paisiblement ce matin, à son domicile.", "Elle est décédée paisiblement ce matin, chez elle.", "Elle s'est éteinte paisiblement ce matin, dans sa maison."],
            explanation: "\"S'éteindre\" (to go out like a light) is the gentle verb for dying; the participle agrees: \"elle s'est éteinte\".",
          },
        ],
      },
      {
        heading: "Preparing and announcing",
        body: [
          "Tact is also rhythm. Prepare: \"J'ai les résultats de la biopsie. Avant que je vous en parle, voulez-vous que quelqu'un vous rejoigne ?\" (\"avant que\" + subjunctive). Announce: \"Je suis désolé d'avoir à vous annoncer que...\", \"Ce n'est pas la nouvelle que vous attendiez, je le sais.\" Acknowledge: \"Je comprends que ce soit difficile à entendre\" (\"comprendre que\" + subjunctive when it means to accept, find understandable), \"Prenez votre temps\", \"C'est normal d'avoir peur.\"",
        ],
        examples: [
          { es: "Avant que je vous en parle, voulez-vous que quelqu'un vous rejoigne ?", en: "Before I tell you, would you like someone to join you?" },
          { es: "Je suis désolé d'avoir à vous annoncer cette nouvelle.", en: "I'm sorry to have to give you this news." },
          { es: "Je comprends que ce soit difficile à entendre.", en: "I understand that this is hard to hear." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as a doctor.",
            source: "Before I tell you, would you like your husband to join us?",
            answer: "Avant que je vous en parle, voulez-vous que votre mari nous rejoigne ?",
            altAnswers: ["Avant que je vous en parle, vous voulez que votre mari nous rejoigne ?", "Avant que je vous en parle, souhaitez-vous que votre mari nous rejoigne ?", "Avant de vous en parler, voulez-vous que votre mari nous rejoigne ?", "Avant de vous en parler, souhaitez-vous que votre mari nous rejoigne ?"],
            explanation: "\"Avant que\" + subjunctive (or \"avant de\" + infinitive), and \"vouloir que\" + subjunctive \"rejoigne\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, as a doctor.",
            source: "I understand that this is hard to hear.",
            answer: "Je comprends que ce soit difficile à entendre.",
            altAnswers: ["Je comprends que ce soit dur à entendre.", "Je comprends que cela soit difficile à entendre.", "Je comprends que ça soit difficile à entendre.", "Je comprends que ce soit difficile à entendre pour vous."],
            explanation: "\"Comprendre que\" + subjunctive when it means to find something understandable; \"difficile à\" + infinitive.",
          },
        ],
      },
      {
        heading: "Opening the next step",
        body: [
          "Then open the next step, without false promises: \"Il existe des traitements, et nous allons en discuter ensemble.\" \"Je ne peux pas vous dire combien de temps, personne ne le peut, mais je peux vous dire ce que nous allons faire.\" \"Quoi qu'il arrive, nous serons là\" (whatever happens: \"quoi que\" + subjunctive, from the Advanced level).",
        ],
        examples: [
          { es: "Il existe des traitements, et nous allons en discuter ensemble.", en: "There are treatments, and we'll discuss them together." },
          { es: "Quoi qu'il arrive, nous serons là pour vous accompagner.", en: "Whatever happens, we'll be there to support you." },
          { es: "Je ne peux pas vous dire combien de temps, mais je peux vous dire ce que nous allons faire.", en: "I can't tell you how long, but I can tell you what we're going to do." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Whatever happens], we will be there.",
            sentence: "___, nous serons là.",
            answer: "Quoi qu'il arrive",
            explanation: "\"Quoi que\" + subjunctive (\"arrive\"), written in two words; not \"quoique\" (although).",
          },
          {
            type: "listen-choose",
            audio: "Ce n'est pas la nouvelle que vous attendiez, je le sais.",
            question: "What does it mean?",
            options: ["This isn't the news you were hoping for, I know.", "You haven't heard the news yet, I know.", "I know you were waiting for this news.", "This news is not new to you, I know."],
            correctIndex: 0,
            explanation: "\"Attendre\" here means to expect or hope for; the imparfait refers to the earlier expectation.",
          },
        ],
      },
      {
        heading: "What to avoid, and what to ask instead",
        body: [
          "Avoid: \"Ne vous inquiétez pas\" (dismissive when there is reason to worry), \"Il faut rester positif\" (puts the burden on the patient), \"Je sais ce que vous ressentez\" (you don't). Prefer: \"Qu'est-ce qui vous inquiète le plus ?\", \"Qu'est-ce qui serait le plus important pour vous maintenant ?\"",
        ],
        examples: [
          { es: "Qu'est-ce qui vous inquiète le plus ?", en: "What worries you most?" },
          { es: "Qu'est-ce qui serait le plus important pour vous maintenant ?", en: "What would matter most to you now?" },
          { es: "C'est normal d'avoir peur.", en: "It's normal to be afraid." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which reply is the most tactful after announcing a serious diagnosis?",
            options: ["Qu'est-ce qui vous inquiète le plus ?", "Ne vous inquiétez pas, ça va aller.", "Il faut rester positif.", "Je sais exactement ce que vous ressentez."],
            correctIndex: 0,
            explanation: "An open question lets the patient lead; the others dismiss, burden or presume.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je comprends que c'est difficile à entendre, mais il faut rester positif.",
            answer: "Je comprends que ce soit difficile à entendre. Prenez le temps qu'il vous faut.",
            altAnswers: ["Je comprends que ce soit difficile à entendre. Prenez votre temps."],
            explanation: "\"Comprendre que\" meaning to find understandable takes the subjunctive: \"que ce soit\". And \"il faut rester positif\" puts the burden on the patient, so it is replaced by an offer of time.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, as a doctor.",
        source: "It's possible that the treatment will have to be changed.",
        answer: "Il est possible que le traitement doive être modifié.",
        altAnswers: ["Il se peut que le traitement doive être modifié.", "Il est possible qu'on doive modifier le traitement.", "Il est possible que nous devions modifier le traitement.", "Il se pourrait que le traitement doive être modifié."],
        explanation: "\"Il est possible que\" + subjunctive \"doive\" (devoir).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, as a doctor.",
        source: "It's unlikely to be serious, but we must check.",
        answer: "Il est peu probable que ce soit grave, mais nous devons vérifier.",
        altAnswers: ["Il est peu probable que ce soit grave, mais il faut vérifier.", "Il est peu probable que ce soit grave, mais on doit vérifier.", "Il est peu probable que cela soit grave, mais nous devons vérifier.", "Il y a peu de chances que ce soit grave, mais nous devons vérifier."],
        explanation: "\"Peu probable\" → subjunctive (\"soit\"), unlike affirmative \"probable\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "It seems the treatment [hasn't worked].",
        sentence: "Il semblerait que le traitement ___.",
        answer: "n'ait pas fonctionné",
        altAnswers: ["n'ait pas marché", "n'a pas fonctionné"],
        explanation: "\"Il semblerait que\" usually takes the subjunctive (past: \"n'ait pas fonctionné\"); the indicative is also found.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, as a doctor.",
        source: "I'm sorry to have to tell you that the biopsy confirms a cancer.",
        answer: "Je suis désolé d'avoir à vous annoncer que la biopsie confirme un cancer.",
        altAnswers: ["Je suis désolée d'avoir à vous annoncer que la biopsie confirme un cancer.", "Je suis désolé de devoir vous annoncer que la biopsie confirme un cancer.", "Je suis désolée de devoir vous annoncer que la biopsie confirme un cancer.", "Je suis désolé d'avoir à vous dire que la biopsie confirme un cancer."],
        explanation: "\"Avoir à\" = to have to; \"annoncer\" is the verb of announcing news.",
      },
      {
        type: "dictation",
        audio: "Il est possible que ce soit une simple infection.",
        explanation: "\"Il est possible que\" + subjunctive \"soit\".",
      },
      {
        type: "speak",
        prompt: "Say it in French, as a doctor: I understand the news is hard to accept. There's no hurry.",
        text: "Je comprends que la nouvelle soit difficile à accepter. Rien ne presse.",
        tip: "Speak slowly and leave a real pause between the two sentences.",
        explanation: "\"Comprendre que\" meaning to find understandable takes the subjunctive: \"soit\". \"Rien ne presse\" offers time without dismissing the patient's feelings.",
      },
    ],
  },
  {
    slug: "c2-vocab-precise-verbs-donner-avoir-mettre",
    level: "FR-C2",
    number: 13,
    title: "Mastery Vocabulary: Precise Verbs Instead of Donner, Avoir and Mettre",
    summary: "Replace the three most worn verbs in French with the precise ones a careful writer uses: conférer, octroyer, accorder, susciter, procurer, revêtir, disposer de, détenir, receler, comporter, apposer and instaurer, with their constructions and traps.",
    duration: "19 min",
    sections: [
      {
        heading: "Conférer: a status, a right, a quality",
        body: [
          "\"Donner\" is correct almost everywhere, which is exactly why a Mastery text avoids it. Each replacement carries information about who gives, what is given and how. \"Conférer\" means to confer a status, a right or a quality, often by law or by an institution: \"le diplôme confère le titre de docteur\", \"la loi confère au maire un pouvoir de police\". It also works with abstract qualities: \"ce détail confère au récit une certaine étrangeté\".",
        ],
        examples: [
          { es: "La loi confère au maire des pouvoirs de police.", en: "The law gives the mayor police powers." },
          { es: "Ce détail confère au récit une étrange mélancolie.", en: "This detail lends the story a strange melancholy." },
          { es: "Ce diplôme confère le titre d'ingénieur.", en: "This degree confers the title of engineer." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which object goes naturally with « conférer » ?",
            options: ["un pouvoir de police", "une sieste", "un piano", "des fleurs dans un vase"],
            correctIndex: 0,
            explanation: "\"Conférer\" gives a status, a right or a quality, usually by law or institution: \"la loi confère au maire un pouvoir de police\". A nap is \"s'octroyer\", a piano is \"accorder\" (tune), flowers are \"disposer\".",
          },
        ],
      },
      {
        heading: "Octroyer: granting from above",
        body: [
          "\"Octroyer\" is to grant from a position of power, sometimes with a hint of condescension: \"l'État a octroyé une aide exceptionnelle aux agriculteurs\", \"on lui a octroyé un délai de grâce\". \"S'octroyer\" means to allow oneself, often a little cheekily: \"je me suis octroyé une sieste\".",
        ],
        examples: [
          { es: "Le gouvernement a octroyé une aide exceptionnelle aux sinistrés.", en: "The government granted exceptional aid to the disaster victims." },
          { es: "Je me suis octroyé une semaine de vacances.", en: "I allowed myself a week's holiday." },
          { es: "On lui a octroyé un délai de grâce de trois mois.", en: "He was granted a three-month grace period." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I [allowed myself] an afternoon off.",
            sentence: "Je ___ un après-midi de congé.",
            answer: "me suis octroyé",
            explanation: "\"S'octroyer\" is to allow oneself something, a little cheekily; \"octroyer\" alone is to grant from a position of power.",
          },
        ],
      },
      {
        heading: "Accorder: grant, tune, agree",
        body: [
          "\"Accorder\" is the neutral administrative grant (\"accorder un prêt, une autorisation, un rendez-vous\"), but it also means to tune an instrument (\"accorder un piano\") and to make words agree in grammar (\"accorder le participe passé\"); \"s'accorder\" is to agree with someone or to match (\"ces couleurs s'accordent bien\").",
        ],
        examples: [
          { es: "La banque lui a accordé un prêt à taux zéro.", en: "The bank granted him an interest-free loan." },
          { es: "N'oubliez pas d'accorder le participe passé.", en: "Don't forget to make the past participle agree." },
          { es: "Ces deux couleurs s'accordent parfaitement.", en: "These two colours go together perfectly." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence uses \"accorder\" in its musical sense?",
            options: ["Le violoniste accorde son instrument avant le concert.", "La mairie a accordé l'autorisation.", "N'oubliez pas d'accorder le participe passé.", "Ces deux couleurs s'accordent parfaitement."],
            correctIndex: 0,
            explanation: "\"Accorder un instrument\" = to tune it. The others are granting, grammatical agreement and matching.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change « donner » to the verb used for tuning.",
            source: "Le pianiste doit donner le bon ton à son instrument.",
            answer: "Le pianiste doit accorder son instrument.",
            explanation: "An instrument is \"accordé\" (tuned); \"accorder\" also grants a loan or makes a participle agree.",
          },
        ],
      },
      {
        heading: "Susciter: giving rise to a reaction",
        body: [
          "\"Susciter\" means to give rise to a feeling or a reaction: \"la réforme a suscité une vive opposition\", \"son discours a suscité l'enthousiasme\". Never \"donner de l'enthousiasme\" in formal writing.",
        ],
        examples: [
          { es: "La réforme a suscité une vive opposition.", en: "The reform provoked strong opposition." },
          { es: "Son discours a suscité l'enthousiasme de la salle.", en: "His speech aroused the audience's enthusiasm." },
          { es: "Cette nomination a suscité de nombreuses critiques.", en: "This appointment drew a great deal of criticism." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using a precise verb instead of donner.",
            source: "The announcement provoked a lot of anger.",
            answer: "L'annonce a suscité beaucoup de colère.",
            altAnswers: ["L'annonce a suscité une grande colère.", "Cette annonce a suscité beaucoup de colère.", "L'annonce a suscité une vive colère.", "Cette annonce a suscité une grande colère."],
            explanation: "\"Susciter\" (to arouse, to give rise to) is the precise verb for reactions and feelings.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Replace « donner » with a precise verb.",
            source: "Cette décision a donné beaucoup d'inquiétude aux familles.",
            answer: "Cette décision a suscité beaucoup d'inquiétude chez les familles.",
            altAnswers: ["Cette décision a suscité beaucoup d'inquiétude dans les familles.", "Cette décision a suscité beaucoup d'inquiétude parmi les familles."],
            explanation: "A feeling or a reaction is \"suscitée\", not \"donnée\": \"susciter l'inquiétude, l'enthousiasme, l'opposition\".",
          },
        ],
      },
      {
        heading: "Procurer: bringing something good",
        body: [
          "\"Procurer\" means to provide or bring something, usually beneficial, and is often used with a person as indirect object: \"ce traitement lui a procuré un soulagement immédiat\", \"pourriez-vous me procurer une copie du contrat ?\". Unlike English \"procure\", it does not suggest purchasing; \"se procurer\" simply means to get hold of (\"je me suis procuré le livre\").",
        ],
        examples: [
          { es: "Ce traitement lui a procuré un soulagement immédiat.", en: "This treatment brought her immediate relief." },
          { es: "Pourriez-vous me procurer une copie du dossier ?", en: "Could you get me a copy of the file?" },
          { es: "Je me suis procuré le livre à la bibliothèque.", en: "I got hold of the book at the library." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Ce séjour en cure thermale lui a procuré un bien-être durable.",
            question: "What does it mean?",
            options: ["This stay at the spa gave her lasting well-being.", "She bought a long stay at the spa.", "This stay at the spa cost her a lot.", "She booked this stay at the spa for someone."],
            correctIndex: 0,
            explanation: "\"Procurer\" = to bring, provide (a benefit), not to buy.",
          },
        ],
      },
      {
        heading: "Disposer de: having at one's disposal",
        body: [
          "\"Avoir\" says nothing about the kind of possession. \"Disposer de\" means to have at one's disposal, available for use: \"l'hôpital dispose de quarante lits\", \"vous disposez d'un délai de quinze jours\". Note the preposition \"de\" and the trap: \"disposer\" alone means to arrange (\"disposer des fleurs dans un vase\"), and \"vous pouvez disposer\" is a slightly old-fashioned way of dismissing someone (you may go).",
        ],
        examples: [
          { es: "L'hôpital dispose de quarante lits de réanimation.", en: "The hospital has forty intensive-care beds." },
          { es: "Vous disposez d'un délai de quinze jours pour répondre.", en: "You have fifteen days to reply." },
          { es: "Elle a disposé les fleurs dans un vase.", en: "She arranged the flowers in a vase." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using a precise verb instead of avoir.",
            source: "The clinic has a new scanner.",
            answer: "La clinique dispose d'un nouveau scanner.",
            altAnswers: ["La clinique dispose désormais d'un nouveau scanner.", "La clinique est dotée d'un nouveau scanner.", "La clinique est équipée d'un nouveau scanner."],
            explanation: "\"Disposer de\" = to have available; never without \"de\" in this sense.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Le laboratoire dispose un microscope électronique.",
            answer: "Le laboratoire dispose d'un microscope électronique.",
            explanation: "\"Disposer de\" needs its preposition: \"disposer d'un microscope\". Without \"de\", \"disposer\" means to arrange (\"disposer les chaises\").",
          },
        ],
      },
      {
        heading: "Détenir and receler",
        body: [
          "\"Détenir\" means to hold, especially something valuable, official or secret, or a record: \"il détient 30 % du capital\", \"elle détient le record du monde\", \"la police détient un suspect\" (holds in custody), \"détenir la vérité\". \"Receler\" means to contain something hidden: \"ce manuscrit recèle bien des mystères\", \"la région recèle des trésors méconnus\". In law, \"receler\" is to receive stolen goods (\"le recel\" is the offence), so in neutral contexts it always keeps a flavour of concealment.",
        ],
        examples: [
          { es: "Elle détient le record de France du 800 mètres.", en: "She holds the French 800-metre record." },
          { es: "Le fonds détient 30 % du capital de l'entreprise.", en: "The fund holds 30% of the company's capital." },
          { es: "Ce vieux grenier recèle des trésors insoupçonnés.", en: "This old attic hides unsuspected treasures." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does \"Ce texte recèle de nombreuses ambiguïtés\" mean?",
            options: ["This text contains many hidden ambiguities.", "This text removes many ambiguities.", "This text reveals many ambiguities openly.", "This text repeats many ambiguities."],
            correctIndex: 0,
            explanation: "\"Receler\" = to contain something concealed or not obvious.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using a precise verb.",
            source: "The museum has a remarkable collection of drawings.",
            answer: "Le musée dispose d'une remarquable collection de dessins.",
            altAnswers: ["Le musée dispose d'une collection de dessins remarquable.", "Le musée détient une remarquable collection de dessins.", "Le musée détient une collection de dessins remarquable.", "Le musée possède une remarquable collection de dessins.", "Le musée possède une collection de dessins remarquable."],
            explanation: "\"Disposer de\", \"détenir\" (holding something valuable) or \"posséder\" all improve on \"avoir\".",
          },
        ],
      },
      {
        heading: "Comporter: parts of a whole",
        body: [
          "\"Comporter\" means to include, to consist of, as parts of a whole: \"le contrat comporte douze articles\", \"le traitement comporte des risques\", \"l'appartement comporte trois chambres\". Do not confuse it with \"se comporter\" (to behave). In a medical register, \"comporter un risque\" and \"présenter un risque\" are far more natural than \"avoir un risque\".",
        ],
        examples: [
          { es: "Toute intervention chirurgicale comporte des risques.", en: "Every surgical procedure carries risks." },
          { es: "Le dossier comporte trois pièces justificatives.", en: "The file contains three supporting documents." },
          { es: "L'enfant se comporte très bien à l'école.", en: "The child behaves very well at school." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "This treatment [carries] a risk of bleeding.",
            sentence: "Ce traitement ___ un risque d'hémorragie.",
            answer: "comporte",
            altAnswers: ["présente"],
            explanation: "\"Comporter un risque\" is the standard collocation; \"présenter un risque\" also works.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Cette opération a des risques importants.",
            answer: "Cette opération comporte des risques importants.",
            altAnswers: ["Cette opération présente des risques importants."],
            explanation: "In a careful register, a procedure \"comporte\" or \"présente\" risks; \"avoir des risques\" is vague and unidiomatic here.",
          },
        ],
      },
      {
        heading: "Revêtir: taking on a character",
        body: [
          "\"Mettre\" can usually be sharpened. \"Revêtir\" literally means to put on a garment (\"revêtir l'uniforme\") or to cover a surface (\"un sol revêtu de carrelage\"), and figuratively to take on, to have: \"cette question revêt une importance capitale\", \"la cérémonie a revêtu un caractère solennel\". It never means \"revert\" (\"revenir à\", \"reprendre\"). Conjugation: like \"vêtir\": \"il revêt\", \"ils revêtent\", \"revêtu\".",
        ],
        examples: [
          { es: "Cette question revêt une importance capitale.", en: "This issue is of paramount importance." },
          { es: "La cérémonie a revêtu un caractère très solennel.", en: "The ceremony took on a very solemn character." },
          { es: "Les murs sont revêtus de carrelage blanc.", en: "The walls are covered in white tiles." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using a precise verb instead of mettre or avoir.",
            source: "This decision is of great importance.",
            answer: "Cette décision revêt une grande importance.",
            altAnswers: ["Cette décision revêt une importance considérable.", "Cette décision revêt une importance capitale.", "Cette décision revêt une importance majeure."],
            explanation: "\"Revêtir une importance\" is the elegant collocation (not \"avoir une importance\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using a precise verb.",
            source: "The meeting took on a dramatic character.",
            answer: "La réunion a revêtu un caractère dramatique.",
            altAnswers: ["La réunion a pris un caractère dramatique.", "La réunion a pris une tournure dramatique."],
            explanation: "\"Revêtir un caractère\" (formal) or \"prendre une tournure\" (more neutral).",
          },
        ],
      },
      {
        heading: "Apposer: onto a document",
        body: [
          "\"Apposer\" means to put something onto a document or a surface: \"apposer sa signature\", \"apposer le cachet de l'entreprise\", \"apposer des scellés\" (to put seals on a door, after a death or a police search), \"apposer une plaque commémorative\". It is the official verb: forms say \"signature à apposer ici\".",
        ],
        examples: [
          { es: "Veuillez apposer votre signature au bas de la page.", en: "Please sign at the bottom of the page." },
          { es: "Les gendarmes ont apposé les scellés sur la porte.", en: "The police put seals on the door." },
          { es: "Une plaque commémorative a été apposée sur la façade.", en: "A commemorative plaque was placed on the front of the building." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Please [put] the stamp of your practice next to the signature.",
            sentence: "Veuillez ___ le cachet de votre cabinet à côté de la signature.",
            answer: "apposer",
            explanation: "\"Apposer\" is the official verb for putting something onto a document: a signature, a stamp, a seal, a plaque.",
          },
        ],
      },
      {
        heading: "Instaurer: something lasting",
        body: [
          "\"Instaurer\" means to put in place something lasting: a system, a rule, a climate. \"Le gouvernement a instauré un couvre-feu\", \"instaurer un climat de confiance\", \"instaurer une taxe\". Compare \"mettre en place\" (neutral, very common), \"établir\" (to establish) and \"instituer\" (to found an institution or a rule, more formal still).",
        ],
        examples: [
          { es: "Le maire a instauré un couvre-feu pour les mineurs.", en: "The mayor imposed a curfew for minors." },
          { es: "Il faut d'abord instaurer un climat de confiance.", en: "We first need to build a climate of trust." },
          { es: "La ville a instauré une taxe sur les logements vacants.", en: "The city introduced a tax on empty homes." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using a precise verb.",
            source: "The new director introduced a weekly meeting.",
            answer: "La nouvelle directrice a instauré une réunion hebdomadaire.",
            altAnswers: ["Le nouveau directeur a instauré une réunion hebdomadaire.", "La nouvelle directrice a mis en place une réunion hebdomadaire.", "Le nouveau directeur a mis en place une réunion hebdomadaire.", "La nouvelle directrice a institué une réunion hebdomadaire.", "Le nouveau directeur a institué une réunion hebdomadaire."],
            explanation: "\"Instaurer\" something lasting (a rule, a ritual, a climate).",
          },
          {
            type: "matching",
            instructions: "Match each verb with its usual object.",
            pairs: [
              { left: "apposer", right: "une signature" },
              { left: "instaurer", right: "un couvre-feu" },
              { left: "revêtir", right: "un caractère solennel" },
              { left: "receler", right: "des trésors cachés" },
            ],
            explanation: "Each precise verb has its preferred collocates; learning them in pairs is the fastest way to use them naturally.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, using a precise verb.",
        source: "The law gives the prefect exceptional powers.",
        answer: "La loi confère au préfet des pouvoirs exceptionnels.",
        altAnswers: ["La loi confère des pouvoirs exceptionnels au préfet.", "La loi attribue au préfet des pouvoirs exceptionnels.", "La loi attribue des pouvoirs exceptionnels au préfet."],
        explanation: "\"Conférer\" a power or status, typically by law; \"attribuer\" is also correct.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, using a precise verb.",
        source: "The bank granted us a loan.",
        answer: "La banque nous a accordé un prêt.",
        altAnswers: ["La banque nous a octroyé un prêt.", "La banque nous a consenti un prêt."],
        explanation: "\"Accorder\" (neutral), \"octroyer\" (from above) or \"consentir un prêt\" (banking term).",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "His speech [aroused] real enthusiasm.",
        sentence: "Son discours a ___ un réel enthousiasme.",
        answer: "suscité",
        explanation: "\"Susciter\" + feeling or reaction.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, using a precise verb.",
        source: "Please put the company stamp next to your signature.",
        answer: "Veuillez apposer le cachet de l'entreprise à côté de votre signature.",
        altAnswers: ["Veuillez apposer le cachet de la société à côté de votre signature.", "Merci d'apposer le cachet de l'entreprise à côté de votre signature.", "Veuillez apposer le tampon de l'entreprise à côté de votre signature."],
        explanation: "\"Apposer\" a stamp, a signature, seals: the official verb.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Every procedure carries risks.",
        words: ["Toute", "intervention", "comporte", "des", "risques."],
        translation: "Every procedure carries risks.",
        explanation: "\"Comporter des risques\": the standard medical collocation.",
      },
      {
        type: "speak",
        prompt: "Say it in French: This issue is of paramount importance for the hospital's future.",
        text: "Cette question revêt une importance capitale pour l'avenir de l'hôpital.",
        tip: "The t of \"revêt\" is silent, though careful speakers may link it to \"une\" (revê-t-une); keep \"importance capitale\" as one smooth group.",
        explanation: "\"Revêtir une importance\" is a hallmark of formal written and spoken French.",
      },
    ],
  },
  {
    slug: "c2-vocab-verbs-of-argument-decision",
    level: "FR-C2",
    number: 14,
    title: "Mastery Vocabulary: Verbs of Argument and Decision",
    summary: "The verbs that structure debate, expertise and judgement: trancher, statuer, entériner, avaliser, démentir, réfuter, infirmer, corroborer, éluder, subordonner, élucider and en déduire, with the false friend infirmer and the difference between denying a fact and refuting an argument.",
    duration: "19 min",
    sections: [
      {
        heading: "Trancher: settling it",
        body: [
          "\"Trancher\" literally means to slice; figuratively, to settle a question decisively, often one that divided people: \"le ministre a tranché en faveur du projet\", \"il faut trancher\", \"trancher un débat\". Used alone it implies firmness, even bluntness. The related \"tranché\" describes a clear-cut opinion (\"un avis très tranché\").",
        ],
        examples: [
          { es: "Après des mois de débat, le ministre a tranché.", en: "After months of debate, the minister made a decision." },
          { es: "Elle a des opinions très tranchées sur la question.", en: "She has very clear-cut opinions on the matter." },
          { es: "Il a fallu trancher entre les deux candidats.", en: "A choice had to be made between the two candidates." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Elle a des opinions très tranchées. » What does it tell you?",
            options: ["Her opinions are clear-cut, with no hesitation.", "Her opinions keep changing.", "She has been overruled.", "She refuses to give her opinion."],
            correctIndex: 0,
            explanation: "\"Tranché\" describes a clear-cut opinion, from \"trancher\" (to slice, to settle decisively).",
          },
        ],
      },
      {
        heading: "Statuer sur: a body ruling",
        body: [
          "\"Statuer\" is the formal verb of a body ruling on a matter: \"le tribunal statuera sur la demande le 12 mars\", \"la commission doit statuer sur le dossier\". Note the construction \"statuer sur\". It is neutral as to the result, whereas \"trancher\" stresses that a choice was made.",
        ],
        examples: [
          { es: "Le tribunal statuera sur la demande le 12 mars.", en: "The court will rule on the application on 12 March." },
          { es: "La commission doit statuer sur son dossier avant juin.", en: "The committee must rule on her case before June." },
          { es: "Le juge statuera en référé.", en: "The judge will rule in summary proceedings." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using a precise verb.",
            source: "The commission will rule on the case next week.",
            answer: "La commission statuera sur le dossier la semaine prochaine.",
            altAnswers: ["La commission va statuer sur le dossier la semaine prochaine.", "La commission statuera sur l'affaire la semaine prochaine.", "La commission va statuer sur l'affaire la semaine prochaine.", "La commission se prononcera sur le dossier la semaine prochaine."],
            explanation: "\"Statuer sur\" is the formal verb for an official body ruling on a matter.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Le tribunal statuera la demande en mars.",
            answer: "Le tribunal statuera sur la demande en mars.",
            explanation: "\"Statuer\" needs \"sur\": a body \"statue sur\" a matter. \"Trancher\", by contrast, takes a direct object (\"trancher la question\").",
          },
        ],
      },
      {
        heading: "Entériner and avaliser",
        body: [
          "\"Entériner\" means to ratify, to make official what has already been decided or done elsewhere: \"le conseil municipal a entériné la décision du maire\", \"le Parlement a entériné l'accord\". It often carries the nuance of a formality, a rubber stamp. \"Avaliser\" (from \"un aval\", a guarantee) means to endorse, to give one's backing: \"la direction a avalisé le projet\", \"je ne peux pas avaliser de telles méthodes\". You also hear \"donner son aval\".",
        ],
        examples: [
          { es: "Le conseil d'administration a entériné la nomination.", en: "The board ratified the appointment." },
          { es: "La direction a avalisé le nouveau protocole de soins.", en: "Management endorsed the new care protocol." },
          { es: "Le comité d'éthique a donné son aval à l'essai clinique.", en: "The ethics committee approved the clinical trial." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"L'assemblée générale n'a fait qu'entériner une décision déjà prise.\" What is implied?",
            options: ["The meeting merely rubber-stamped a decision made elsewhere.", "The meeting reversed the decision.", "The meeting postponed the decision.", "The meeting debated the decision at length."],
            correctIndex: 0,
            explanation: "\"Entériner\" = to ratify formally; with \"ne faire que\" it stresses the formality.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The ethics committee [gave its backing] to the trial.",
            sentence: "Le comité d'éthique a ___ à l'essai clinique.",
            answer: "donné son aval",
            explanation: "\"Donner son aval à\" (from \"un aval\", a guarantee) is to endorse something; the verb \"avaliser\" says the same in one word.",
          },
        ],
      },
      {
        heading: "Démentir: denying a report",
        body: [
          "\"Démentir\" means to deny officially that something is true, typically a rumour or a report: \"le ministère a démenti l'information\", \"un démenti\" (an official denial). It also means to contradict through facts: \"les résultats ont démenti les prévisions\".",
        ],
        examples: [
          { es: "Le ministère a formellement démenti cette information.", en: "The ministry formally denied the report." },
          { es: "Les chiffres ont démenti les prévisions les plus pessimistes.", en: "The figures proved the most pessimistic forecasts wrong." },
          { es: "Le club a publié un démenti dans la soirée.", en: "The club issued a denial that evening." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which verb fits: \"Le porte-parole a ___ toute rumeur de démission.\"",
            options: ["démenti", "réfuté", "corroboré", "infirmé"],
            correctIndex: 0,
            explanation: "A rumour is officially denied: \"démentir\". \"Réfuter\" is for arguments.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it an official denial by the ministry.",
            source: "Le ministère confirme l'information.",
            answer: "Le ministère dément l'information.",
            explanation: "\"Démentir\" is the official denial of a report, and it conjugates like \"mentir\": \"il dément\". Its noun is \"un démenti\".",
          },
        ],
      },
      {
        heading: "Réfuter: disproving an argument",
        body: [
          "\"Réfuter\" is to disprove an argument by reasoning: \"elle a réfuté point par point les objections\". A rumour is \"démentie\", a thesis is \"réfutée\". The common error \"réfuter une accusation\" in the sense of simply denying it is widely used in the press but criticised by careful writers: prefer \"rejeter\", \"contester\" or \"nier\".",
        ],
        examples: [
          { es: "Elle a réfuté point par point les arguments de son adversaire.", en: "She refuted her opponent's arguments point by point." },
          { es: "Cette étude réfute l'hypothèse d'un lien de cause à effet.", en: "This study disproves the hypothesis of a causal link." },
          { es: "L'accusé nie les faits qui lui sont reprochés.", en: "The defendant denies the acts he is accused of." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A spokesman wants to say the accusation is false, with no argument to offer. Which verb do careful writers prefer?",
            options: ["nier", "réfuter", "corroborer", "élucider"],
            correctIndex: 0,
            explanation: "\"Réfuter\" means to disprove by reasoning, so it needs an argument. To deny flatly, careful French uses \"nier\", \"rejeter\" or \"contester\"; a rumour is \"démentie\".",
          },
        ],
      },
      {
        heading: "Infirmer: not 'infirm'",
        body: [
          "\"Infirmer\" is the trap. It has nothing to do with English \"infirm\" (weak, ill: \"infirme\", \"l'infirmerie\"). It means to invalidate, to show something to be false, and is the opposite of \"confirmer\": \"les analyses ont infirmé le diagnostic initial\", \"cette hypothèse a été infirmée\". In law, a court of appeal \"infirme\" a judgment (overturns it) or \"confirme\" it.",
        ],
        examples: [
          { es: "La biopsie a infirmé le diagnostic initial.", en: "The biopsy invalidated the initial diagnosis." },
          { es: "La cour d'appel a infirmé le jugement de première instance.", en: "The court of appeal overturned the first-instance judgment." },
          { es: "Les premiers résultats ont été infirmés par une seconde analyse.", en: "The first results were invalidated by a second test." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does \"Les nouvelles données infirment cette théorie\" mean?",
            options: ["The new data disprove this theory.", "The new data weaken the patient.", "The new data confirm this theory.", "The new data complete this theory."],
            correctIndex: 0,
            explanation: "\"Infirmer\" = to invalidate; not related to English \"infirm\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using a precise verb.",
            source: "The scan invalidated the first hypothesis.",
            answer: "Le scanner a infirmé la première hypothèse.",
            altAnswers: ["Le scanner a infirmé l'hypothèse initiale.", "Le scanner a infirmé la première hypothèse diagnostique.", "Le scanner a infirmé l'hypothèse de départ."],
            explanation: "\"Infirmer\" = to show to be false; the opposite of \"confirmer\".",
          },
        ],
      },
      {
        heading: "Corroborer: adding evidence",
        body: [
          "\"Corroborer\" means to support with further evidence: \"plusieurs témoignages corroborent sa version\", \"l'IRM a corroboré le diagnostic\". It is used of evidence, not of people agreeing: a witness statement corroborates, a colleague \"approuve\" or \"abonde dans le sens de\".",
        ],
        examples: [
          { es: "Plusieurs témoignages corroborent sa version des faits.", en: "Several witness statements corroborate his version of events." },
          { es: "L'IRM a corroboré le diagnostic du généraliste.", en: "The MRI corroborated the GP's diagnosis." },
          { es: "Ma collègue a abondé dans mon sens.", en: "My colleague backed me up." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using a precise verb.",
            source: "The blood tests corroborate the diagnosis.",
            answer: "Les analyses de sang corroborent le diagnostic.",
            altAnswers: ["Les examens sanguins corroborent le diagnostic.", "Le bilan sanguin corrobore le diagnostic.", "Les prises de sang corroborent le diagnostic."],
            explanation: "\"Corroborer\": evidence that supports a claim or diagnosis.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Mon collègue a corroboré mon avis en réunion.",
            answer: "Mon collègue a abondé dans mon sens en réunion.",
            altAnswers: ["Mon collègue a approuvé mon avis en réunion."],
            explanation: "\"Corroborer\" is used of evidence (a test, a statement), not of a person agreeing: a colleague \"approuve\" or \"abonde dans le sens de\" someone.",
          },
        ],
      },
      {
        heading: "Éluder and élucider",
        body: [
          "\"Éluder\" means to dodge a question or a problem: \"le candidat a habilement éludé la question\". It is transitive, never \"éluder à\". Its near-opposite is \"élucider\", to clear up, to solve something obscure: \"l'enquête a permis d'élucider les circonstances du décès\", \"un crime non élucidé\" (an unsolved crime). The two look alike; keep them apart by meaning: \"éluder\" leaves in the dark, \"élucider\" brings to light.",
        ],
        examples: [
          { es: "Le ministre a soigneusement éludé la question des coûts.", en: "The minister carefully avoided the question of costs." },
          { es: "L'enquête n'a jamais permis d'élucider ce mystère.", en: "The investigation never managed to solve this mystery." },
          { es: "Le dossier est resté non élucidé pendant vingt ans.", en: "The case remained unsolved for twenty years." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "She skilfully [dodged] the question.",
            sentence: "Elle a habilement ___ la question.",
            answer: "éludé",
            altAnswers: ["esquivé"],
            explanation: "\"Éluder\" is transitive: \"éluder la question\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The causes of the accident have never been [cleared up].",
            sentence: "Les causes de l'accident n'ont jamais été ___.",
            answer: "élucidées",
            explanation: "\"Élucider\" (to clear up); feminine plural agreement with \"les causes\".",
          },
        ],
      },
      {
        heading: "Subordonner A à B",
        body: [
          "\"Subordonner A à B\" means to make A conditional on B: \"la banque a subordonné l'octroi du prêt à une caution\", \"l'opération est subordonnée aux résultats des examens\". It is the formal equivalent of \"cela dépend de\", and very frequent in contracts and medical reports.",
        ],
        examples: [
          { es: "L'opération est subordonnée aux résultats des examens.", en: "The operation depends on the test results." },
          { es: "La banque a subordonné le prêt à une caution parentale.", en: "The bank made the loan conditional on a parental guarantee." },
          { es: "L'aide est subordonnée à la présentation d'un justificatif.", en: "The benefit is conditional on producing proof." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using a precise verb.",
            source: "Treatment is conditional on the patient's consent.",
            answer: "Le traitement est subordonné au consentement du patient.",
            altAnswers: ["Le traitement est subordonné au consentement de la patiente.", "Le traitement est subordonné à l'accord du patient.", "Le traitement est subordonné à l'accord de la patiente."],
            explanation: "\"Être subordonné à\" = to be conditional on.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into formal French with « subordonner ».",
            source: "Le remboursement dépend de l'accord du médecin-conseil.",
            answer: "Le remboursement est subordonné à l'accord du médecin-conseil.",
            explanation: "\"Subordonner A à B\" is the formal equivalent of \"A dépend de B\": the thing conditioned becomes the subject, with \"être subordonné à\".",
          },
        ],
      },
      {
        heading: "En déduire and il s'ensuit que",
        body: [
          "\"En déduire que\" is to infer, to conclude from: \"on peut en déduire que le traitement est efficace\", \"j'en déduis que vous n'êtes pas d'accord\". The \"en\" refers back to what precedes (from that). Related: \"en conclure que\", \"il s'ensuit que\" (it follows that, with the indicative).",
        ],
        examples: [
          { es: "J'en déduis que vous n'avez pas reçu ma lettre.", en: "I take it you didn't receive my letter." },
          { es: "Il s'ensuit que la clause est nulle.", en: "It follows that the clause is void." },
          { es: "On peut en conclure que la méthode est fiable.", en: "One can conclude from this that the method is reliable." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using a precise verb.",
            source: "From this, we can infer that the treatment works.",
            answer: "On peut en déduire que le traitement est efficace.",
            altAnswers: ["Nous pouvons en déduire que le traitement est efficace.", "On peut en déduire que le traitement fonctionne.", "Nous pouvons en déduire que le traitement fonctionne.", "On peut en conclure que le traitement est efficace.", "Nous pouvons en conclure que le traitement est efficace."],
            explanation: "\"En déduire que\" + indicative; \"en\" = from this.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, using a precise verb.",
        source: "The president finally settled the question.",
        answer: "Le président a finalement tranché la question.",
        altAnswers: ["La présidente a finalement tranché la question.", "Le président a fini par trancher la question.", "La présidente a fini par trancher la question.", "Le président a finalement tranché."],
        explanation: "\"Trancher\" (une question, un débat) = to settle decisively.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, using a precise verb.",
        source: "The government denied the rumours of a reshuffle.",
        answer: "Le gouvernement a démenti les rumeurs de remaniement.",
        altAnswers: ["Le gouvernement a démenti les rumeurs d'un remaniement.", "Le gouvernement a démenti les rumeurs de remaniement ministériel."],
        explanation: "\"Démentir\" = to deny officially; \"un remaniement\" is a cabinet reshuffle.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, using a precise verb.",
        source: "The board ratified the agreement without discussion.",
        answer: "Le conseil d'administration a entériné l'accord sans discussion.",
        altAnswers: ["Le conseil d'administration a entériné l'accord sans débat.", "Le conseil a entériné l'accord sans discussion.", "Le conseil a entériné l'accord sans débat."],
        explanation: "\"Entériner\" = to ratify, often as a formality.",
      },
      {
        type: "matching",
        instructions: "Match each verb with its meaning.",
        pairs: [
          { left: "réfuter", right: "to disprove an argument" },
          { left: "démentir", right: "to deny a report" },
          { left: "avaliser", right: "to endorse" },
          { left: "élucider", right: "to clear up" },
        ],
        explanation: "Arguments are refuted, reports denied, projects endorsed, mysteries cleared up.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The court of appeal overturned the judgment.",
        words: ["La", "cour", "d'appel", "a", "infirmé", "le", "jugement."],
        translation: "The court of appeal overturned the judgment.",
        explanation: "In law, \"infirmer\" a judgment = to overturn it.",
      },
      {
        type: "dictation",
        audio: "Le tribunal statuera sur la demande le mois prochain.",
        explanation: "\"Statuer sur\": future \"statuera\".",
      },
      {
        type: "speak",
        prompt: "Say it in French: The committee endorsed the project but made its funding conditional on an assessment.",
        text: "Le comité a avalisé le projet, mais il a subordonné son financement à une évaluation.",
        tip: "Stress the contrast after \"mais\" with a short pause.",
        explanation: "\"Avaliser\" (to endorse) and \"subordonner à\" (to make conditional on) in one sentence.",
      },
    ],
  },
];
