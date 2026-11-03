// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u21.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 21: Job Interviews.

export const FR_C2_U21: Lesson[] = [
  {
    slug: "c2-job-interview-1",
    level: "FR-C2",
    number: 1,
    title: "L'Entretien d'Embauche, Part 1 of 7",
    summary: "How recruitment works in France, the vocabulary of applying, and a polished two-minute answer to « Présentez-vous » built on the narrative tenses.",
    duration: "19 min",
    sections: [
      {
        heading: "Candidature, cabinets and headhunters",
        body: [
          "A French application (\"une candidature\") usually means a CV plus \"une lettre de motivation\", even when the ad only says « Envoyez votre CV ». Many large employers go through \"un cabinet de recrutement\" (a recruitment agency), and senior profiles are approached by \"un chasseur de têtes\" (a headhunter). You may be screened by \"un entretien téléphonique\", meet a panel or other candidates in \"un entretien collectif\", and more and more often do the first round \"en visio\" (short for visioconférence).",
        ],
        examples: [
          { es: "Le premier échange se fera en visio, le second dans nos locaux.", en: "The first conversation will be by video call, the second at our offices." },
          { es: "C'est un chasseur de têtes qui m'a contacté sur un réseau professionnel.", en: "It was a headhunter who contacted me on a professional network." },
          { es: "Envoyez votre CV et une lettre de motivation.", en: "Send your CV and a cover letter." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is « un chasseur de têtes » ?",
            options: ["A headhunter who approaches senior profiles", "A written recruitment test", "A rival candidate", "A video interview"],
            correctIndex: 0,
            explanation: "\"Un chasseur de têtes\" is a headhunter; \"un cabinet de recrutement\" is a recruitment agency.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a recruiter speaking).",
            source: "The second round will take place by video call.",
            answer: "Le deuxième tour se fera en visio.",
            altAnswers: ["Le second tour se fera en visio.", "Le deuxième tour aura lieu en visio.", "Le deuxième tour se déroulera en visio.", "Le second tour aura lieu en visioconférence.", "Le deuxième entretien se fera en visio."],
            explanation: "\"En visio\" (short for visioconférence) is the everyday way to say by video call; \"se faire\" or \"avoir lieu\" for where it happens.",
          },
        ],
      },
      {
        heading: "To apply: postuler, never appliquer",
        body: [
          "The verb that causes most trouble is to apply. French says \"postuler à un poste\" or \"postuler pour un poste\" (both are accepted; \"postuler à\" is the more traditional), or \"poser sa candidature\" / \"présenter sa candidature\". \"Appliquer pour\" is a pure calque of English: \"appliquer\" means to apply a rule, a method or a cream, never to apply for a job. The person who applies is \"le candidat\" / \"la candidate\", and the job is \"le poste\" (not \"la position\", which is a posture or a stance).",
        ],
        examples: [
          { es: "J'ai postulé à un poste de cheffe de projet dans une agence lyonnaise.", en: "I applied for a project manager job at an agency in Lyon." },
          { es: "Je me permets de vous adresser une candidature spontanée.", en: "I am taking the liberty of sending you an unsolicited application." },
          { es: "Elle a posé sa candidature pour le poste de directrice.", en: "She applied for the director's post." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "J'ai appliqué pour un poste de comptable.",
            answer: "J'ai postulé à un poste de comptable.",
            altAnswers: ["J'ai postulé pour un poste de comptable.", "J'ai posé ma candidature pour un poste de comptable.", "J'ai présenté ma candidature pour un poste de comptable."],
            explanation: "\"Appliquer\" means to apply a rule or a cream. For a job, say \"postuler à\" (or \"pour\"), or \"poser sa candidature\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I applied for the job last week.",
            answer: "J'ai postulé à ce poste la semaine dernière.",
            altAnswers: ["J'ai postulé pour ce poste la semaine dernière.", "J'ai postulé au poste la semaine dernière.", "J'ai postulé pour le poste la semaine dernière.", "J'ai posé ma candidature à ce poste la semaine dernière.", "J'ai posé ma candidature pour ce poste la semaine dernière.", "J'ai présenté ma candidature pour ce poste la semaine dernière."],
            explanation: "To apply for a job is \"postuler à / pour un poste\" or \"poser sa candidature\". \"*Appliquer pour*\" is a calque: \"appliquer\" means to apply a rule or a method.",
          },
        ],
      },
      {
        heading: "The process in fixed phrases",
        body: [
          "The process has its own fixed phrases: \"une offre d'emploi\" (a job ad), \"le processus de recrutement\", \"être retenu pour un entretien\" (to be shortlisted), \"être convoqué à un entretien\" (to be invited to an interview: \"convoquer\" sounds stern in English but is neutral in French), and \"une candidature spontanée\" (an unsolicited application).",
        ],
        examples: [
          { es: "Votre candidature a retenu toute notre attention.", en: "Your application caught our full attention." },
          { es: "Vous êtes convoquée à un entretien le jeudi 14 mars à 10 heures.", en: "You are invited to an interview on Thursday 14 March at 10 a.m." },
          { es: "Nous avons bien reçu votre candidature spontanée.", en: "We have received your unsolicited application." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A recruiter writes to say you've been shortlisted. Which sentence does that?",
            options: ["Vous avez été retenu pour un entretien.", "Vous avez été appliqué pour un entretien.", "Votre position a été acceptée pour un entretien.", "Vous avez été postulé pour un entretien."],
            correctIndex: 0,
            explanation: "\"Être retenu pour un entretien\" is to be shortlisted. \"Postuler\" is what the candidate does, so it can't be passive with the candidate as subject, and \"position\" is a false friend.",
          },
        ],
      },
      {
        heading: "« Présentez-vous » : what they expect",
        body: [
          "Almost every French interview opens with « Présentez-vous » or « Parlez-moi de votre parcours ». The recruiter expects about two minutes: who you are professionally, the key stages of your career (\"votre parcours\"), and why you are here today. It is not your life story and not a recitation of your CV, which they already have.",
        ],
        examples: [
          { es: "Parlez-moi de votre parcours.", en: "Tell me about your career path." },
          { es: "Vous avez environ deux minutes.", en: "You have about two minutes." },
          { es: "Je ne vais pas vous réciter mon CV.", en: "I'm not going to recite my CV to you." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does a French recruiter expect after « Présentez-vous » ?",
            options: ["About two minutes on your career path and why you are here", "Your life story from childhood", "A word-for-word reading of your CV", "A list of your hobbies"],
            correctIndex: 0,
            explanation: "\"Présentez-vous\" asks for about two minutes: who you are professionally, the key stages of \"votre parcours\", and why you are here.",
          },
        ],
      },
      {
        heading: "The tenses do the structuring",
        body: [
          "The tenses do the structuring. The passé composé carries the steps forward: \"j'ai rejoint\", \"j'ai pris la responsabilité de\", \"j'ai été promu\". The imparfait sets the scene of each job, what it was like and what you did regularly: \"l'entreprise comptait alors trente salariés\", \"je gérais un portefeuille de clients\". The plus-que-parfait steps back to something earlier than the moment you're narrating: \"j'avais déjà travaillé deux ans en Allemagne, ce qui m'a permis de...\". Then you close in the present and the conditional: \"aujourd'hui, je souhaiterais...\".",
        ],
        examples: [
          { es: "Après un master en logistique, j'ai rejoint un grand groupe de distribution à Lille.", en: "After a master's in logistics, I joined a large retail group in Lille." },
          { es: "À l'époque, l'entreprise comptait une trentaine de salariés et tout restait à construire.", en: "At the time, the company had about thirty employees and everything was still to be built." },
          { es: "Je gérais un portefeuille d'une quarantaine de clients dans le sud-ouest.", en: "I managed a portfolio of around forty clients in the south-west." },
          { es: "Comme j'avais déjà vécu deux ans à Munich, on m'a confié le marché allemand.", en: "Since I had already lived in Munich for two years, I was given the German market." },
          { es: "Aujourd'hui, je souhaiterais mettre cette expérience au service d'une structure plus internationale.", en: "Today I would like to put this experience to work for a more international organisation." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "In 2019 I [became] head of sales.",
            sentence: "En 2019, je ___ responsable commercial.",
            answer: "suis devenu",
            altAnswers: ["suis devenue", "devins"],
            explanation: "A step in a career is an event: passé composé, with \"être\" for \"devenir\" (and agreement: \"devenue\" for a woman). The imparfait \"devenais\" would describe a process that never finishes.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (in an interview).",
            source: "Since I had already worked in Spain, I was given the Spanish market.",
            answer: "Comme j'avais déjà travaillé en Espagne, on m'a confié le marché espagnol.",
            altAnswers: ["Comme j'avais déjà travaillé en Espagne, on m'a confié le marché de l'Espagne.", "Ayant déjà travaillé en Espagne, je me suis vu confier le marché espagnol.", "Comme j'avais déjà travaillé en Espagne, je me suis vu confier le marché espagnol.", "Étant donné que j'avais déjà travaillé en Espagne, on m'a confié le marché espagnol."],
            explanation: "The earlier background takes the plus-que-parfait (\"j'avais travaillé\"), the event the passé composé. French prefers \"on m'a confié\" or \"je me suis vu confier\" to a passive with I as subject. \"Vu\" stays invariable here even for a woman, because the subject does not do the confiding.",
          },
        ],
      },
      {
        heading: "Two classic errors",
        body: [
          "A classic English-speaker error is to narrate everything in the imparfait because it feels like 'used to': \"*je travaillais chez Renault, puis je devenais manager*\". The promotion is a step, so \"je suis devenu(e)\". Another is to use the present for the past, as in I've been working there for five years: French says \"j'y travaille depuis cinq ans\" if you're still there, but \"j'y ai travaillé cinq ans\" if you've left.",
        ],
        examples: [
          { es: "En 2021, je suis devenue responsable de l'équipe, que j'ai fait passer de quatre à neuf personnes.", en: "In 2021 I became head of the team, which I grew from four to nine people." },
          { es: "J'y travaille depuis cinq ans.", en: "I've been working there for five years. (still there)" },
          { es: "J'y ai travaillé cinq ans.", en: "I worked there for five years. (I've left)" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "J'étais stagiaire chez Orange, puis j'obtenais un CDI.",
            answer: "J'étais stagiaire chez Orange, puis j'ai obtenu un CDI.",
            explanation: "Getting the permanent contract is a step forward in the story, so it takes the passé composé (\"j'ai obtenu\"). The imparfait only sets the scene (\"j'étais stagiaire\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I worked there for five years before joining a consultancy.",
            answer: "J'y ai travaillé cinq ans avant de rejoindre un cabinet de conseil.",
            altAnswers: ["J'y ai travaillé pendant cinq ans avant de rejoindre un cabinet de conseil.", "J'y ai travaillé cinq ans avant d'intégrer un cabinet de conseil.", "J'y ai travaillé pendant cinq ans avant d'intégrer un cabinet de conseil.", "J'ai travaillé là-bas cinq ans avant de rejoindre un cabinet de conseil.", "J'ai travaillé là-bas pendant cinq ans avant de rejoindre un cabinet de conseil."],
            explanation: "A finished period takes the passé composé (\"j'y ai travaillé cinq ans\"); \"avant de\" + infinitive when the subject is the same. A consultancy is \"un cabinet de conseil\".",
          },
        ],
      },
      {
        heading: "Signposting the three movements",
        body: [
          "A strong French presentation has three movements, and French recruiters like to hear them signposted: \"je vais vous présenter rapidement mon parcours\", then the stages linked with \"dans un premier temps\", \"par la suite\", \"c'est ainsi que\", \"depuis trois ans\", and finally the link to this job: \"c'est ce qui m'amène aujourd'hui à postuler chez vous\", \"c'est tout naturellement que je me suis tourné(e) vers votre entreprise\".",
        ],
        examples: [
          { es: "Je vais vous présenter brièvement mon parcours, puis ce qui me motive dans ce poste.", en: "I'll briefly walk you through my career, then what motivates me in this role." },
          { es: "Dans un premier temps, j'ai travaillé en cabinet d'audit, ce qui m'a donné une grande rigueur.", en: "Initially I worked at an audit firm, which gave me great rigour." },
          { es: "Par la suite, j'ai eu l'occasion de piloter le lancement de deux applications.", en: "Later I had the opportunity to lead the launch of two apps." },
          { es: "C'est ce qui m'amène aujourd'hui à postuler chez vous.", en: "That's what brings me to apply to your company today." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            explanation: "The third movement links the story to the job: \"c'est ce qui m'amène aujourd'hui à postuler chez vous\". The others open the answer or mark its stages.",
            question: "Which phrase links your path to this job at the end of your answer?",
            options: ["C'est ce qui m'amène aujourd'hui à postuler chez vous.", "Dans un premier temps, j'ai travaillé en audit.", "Je vais vous présenter mon parcours.", "Par la suite, j'ai piloté un projet."],
            correctIndex: 0,
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Later, I had the opportunity to lead the launch of a new range.",
            answer: "Par la suite, j'ai eu l'occasion de piloter le lancement d'une nouvelle gamme.",
            altAnswers: ["Par la suite, j'ai eu l'occasion de diriger le lancement d'une nouvelle gamme.", "Ensuite, j'ai eu l'occasion de piloter le lancement d'une nouvelle gamme.", "Ensuite, j'ai eu l'occasion de diriger le lancement d'une nouvelle gamme.", "Par la suite, j'ai eu l'opportunité de piloter le lancement d'une nouvelle gamme.", "Plus tard, j'ai eu l'occasion de piloter le lancement d'une nouvelle gamme."],
            explanation: "\"Avoir l'occasion de\" is the polished way to present a step; \"piloter un projet\" is the standard business verb for leading one.",
          },
        ],
      },
      {
        heading: "Register from the first sentence",
        body: [
          "Register matters from the first sentence. You stay in \"vous\" even if the recruiter is young and relaxed; if they offer \"tu\" (some start-ups do), you may accept, but never initiate it. Avoid fillers like \"du coup\" and \"genre\", and prefer \"j'ai eu l'occasion de\" to the flat \"j'ai fait\".",
        ],
        examples: [
          { es: "J'ai eu l'occasion de travailler avec des clients japonais.", en: "I had the opportunity to work with Japanese clients." },
          { es: "Nous pouvons nous tutoyer, si vous voulez.", en: "We can use first names, if you like." },
          { es: "J'ai donc décidé de changer de secteur.", en: "So I decided to change sector." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The interviewer, about 28, says \"Bon, présentez-vous\". Which opening is the right register?",
            options: ["Je vais vous présenter brièvement mon parcours.", "Du coup, ben, je vais te raconter un peu mon parcours.", "Alors genre, moi, j'ai fait plein de trucs.", "Je vais te présenter mon CV que tu as déjà."],
            correctIndex: 0,
            explanation: "Stay in \"vous\" and in a neutral-formal register whatever the recruiter's age; \"du coup\", \"ben\" and \"genre\" are fillers to avoid.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it more polished with j'ai eu l'occasion de.",
            source: "J'ai fait des présentations devant des clients.",
            answer: "J'ai eu l'occasion de faire des présentations devant des clients.",
            altAnswers: ["J'ai eu l'occasion de présenter devant des clients."],
            explanation: "\"J'ai eu l'occasion de\" + infinitive is more polished than the flat \"j'ai fait\".",
          },
        ],
      },
      {
        heading: "A coherent story",
        body: [
          "Finally, French interviewers value a coherent story more than an impressive list. If your path zigzags, give it a thread (\"le fil conducteur de mon parcours, c'est...\"), and don't apologise for it. The word \"parcours\" itself suggests a journey with a direction: use it.",
        ],
        examples: [
          { es: "Le fil conducteur de mon parcours, c'est la relation avec l'utilisateur final.", en: "The common thread in my career is the relationship with the end user." },
          { es: "C'est tout naturellement que je me suis tournée vers le secteur de la santé.", en: "It was only natural that I turned to the healthcare sector." },
          { es: "Mon parcours peut sembler varié, mais il a une logique.", en: "My path may look varied, but it has a logic." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: The common thread in my career is customer relations.",
            words: ["Le fil conducteur", "de mon parcours,", "c'est", "la relation", "client."],
            translation: "The common thread in my career is customer relations.",
            explanation: "Dislocation with \"c'est\" puts the theme first and the key idea last, where French puts emphasis.",
          },
        ],
      },
      {
        heading: "A model answer: the start",
        body: [
          "Here is a complete answer by Camille Rousseau, applying for a post of \"responsable marketing\" in a cosmetics firm in Grasse. She opens: « Je vais vous présenter brièvement mon parcours. Après une école de commerce à Rennes, j'ai commencé chez un distributeur de produits bio, où je m'occupais des relations avec les magasins. L'entreprise était en pleine croissance et j'ai rapidement pris en charge le lancement de nouvelles gammes. »",
        ],
        examples: [
          { es: "J'ai commencé chez un distributeur de produits bio, où je m'occupais des relations avec les magasins.", en: "I started at an organic products distributor, where I looked after relations with the shops." },
          { es: "L'entreprise était en pleine croissance.", en: "The company was growing fast." },
          { es: "J'ai rapidement pris en charge le lancement de nouvelles gammes.", en: "I quickly took charge of launching new ranges." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "At the time, the start-up [had] fifteen employees.",
            sentence: "À l'époque, la start-up ___ quinze salariés.",
            answer: "comptait",
            altAnswers: ["avait", "employait"],
            explanation: "A description of the setting takes the imparfait. \"Compter\" is the idiomatic verb for the size of a company (\"compter quinze salariés\").",
          },
        ],
      },
      {
        heading: "A model answer: up to today",
        body: [
          "Then she brings the story up to the present: « Comme j'avais effectué mon stage de fin d'études en Italie, on m'a ensuite confié l'ouverture du marché italien. Depuis quatre ans, je dirige une équipe de cinq personnes. Ce qui me plaît dans votre offre, c'est la dimension internationale et l'attachement à un savoir-faire local : c'est ce qui m'amène aujourd'hui à postuler chez vous. »",
        ],
        examples: [
          { es: "J'avais effectué mon stage de fin d'études en Italie.", en: "I had done my final-year internship in Italy." },
          { es: "Depuis quatre ans, je dirige une équipe de cinq personnes.", en: "For the past four years I have been leading a team of five." },
          { es: "Ce qui me plaît dans votre offre, c'est la dimension internationale.", en: "What I like about your offer is the international dimension." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Depuis deux ans, je pilote les achats du groupe.",
            question: "What does it mean?",
            options: ["For the past two years I have been running the group's purchasing.", "Two years ago I ran the group's purchasing.", "I ran the group's purchasing for two years.", "In two years I will run the group's purchasing."],
            correctIndex: 0,
            explanation: "\"Depuis\" + present: an action that started in the past and is still going on.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I have been leading a team of six people for three years.",
            answer: "Je dirige une équipe de six personnes depuis trois ans.",
            altAnswers: ["Depuis trois ans, je dirige une équipe de six personnes.", "Cela fait trois ans que je dirige une équipe de six personnes.", "Ça fait trois ans que je dirige une équipe de six personnes.", "Il y a trois ans que je dirige une équipe de six personnes.", "Je manage une équipe de six personnes depuis trois ans."],
            explanation: "Still true now, so present + \"depuis\" (or \"cela fait... que\"). \"J'ai dirigé... pendant trois ans\" would mean it's over.",
          },
        ],
      },
      {
        heading: "The tense map",
        body: [
          "Notice the tense map: \"j'ai commencé\", \"j'ai pris en charge\", \"on m'a confié\" (steps); \"je m'occupais\", \"l'entreprise était\" (the setting); \"j'avais effectué\" (earlier background); \"je dirige depuis\" (still true); \"me plaît\" (now). Notice too that she never lists tasks for long: each sentence moves the story forward.",
        ],
        examples: [
          { es: "J'ai commencé, j'ai pris en charge, on m'a confié : ce sont les étapes.", en: "I started, I took charge, I was given: these are the steps." },
          { es: "Je m'occupais des magasins : c'est le décor.", en: "I looked after the shops: that is the setting." },
          { es: "Je dirige depuis quatre ans : c'est encore vrai.", en: "I have been leading for four years: it is still true." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to show that you have left the job.",
            source: "J'y travaille depuis six ans.",
            answer: "J'y ai travaillé six ans.",
            altAnswers: ["J'y ai travaillé pendant six ans."],
            explanation: "\"Depuis\" + present means you are still there; a finished period takes the passé composé with a bare duration: \"j'y ai travaillé six ans\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I applied for a sales job in Bordeaux.",
        answer: "J'ai postulé à un poste de commercial à Bordeaux.",
        altAnswers: ["J'ai postulé pour un poste de commercial à Bordeaux.", "J'ai postulé à un poste commercial à Bordeaux.", "J'ai postulé pour un poste commercial à Bordeaux.", "J'ai postulé à un poste de commerciale à Bordeaux.", "J'ai posé ma candidature à un poste de commercial à Bordeaux.", "J'ai posé ma candidature pour un poste de commercial à Bordeaux."],
        explanation: "\"Postuler à / pour un poste\": never \"*appliquer pour*\". A sales job is \"un poste de commercial\" or \"un poste commercial\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: It was a former colleague who told me about this job.",
        words: ["C'est", "une ancienne collègue", "qui m'a parlé", "de ce poste."],
        translation: "It was a former colleague who told me about this job.",
        explanation: "The cleft \"c'est... qui\" puts the person who referred you in focus.",
      },
      {
        type: "dictation",
        audio: "Vous êtes convoqué à un second entretien.",
        explanation: "\"Être convoqué à un entretien\" is neutral in French: you are simply invited.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Since I had done my internship in Canada, I was given the North American clients.",
        answer: "Comme j'avais fait mon stage au Canada, on m'a confié les clients nord-américains.",
        altAnswers: ["Comme j'avais effectué mon stage au Canada, on m'a confié les clients nord-américains.", "Ayant fait mon stage au Canada, je me suis vu confier les clients nord-américains.", "Comme j'avais fait mon stage au Canada, je me suis vu confier les clients nord-américains.", "Comme j'avais effectué mon stage au Canada, je me suis vu confier les clients nord-américains."],
        explanation: "Plus-que-parfait for the earlier background, passé composé for the step. \"Effectuer un stage\" is more formal than \"faire un stage\".",
      },
      {
        type: "speak",
        text: "Je vais vous présenter mon parcours en trois temps.",
        prompt: "Say it in French: I'll present my career in three stages.",
        tip: "\"Brièvement\" has three syllables: bri-èv-ment.",
        explanation: "Signposting the structure at the start is what French recruiters like to hear.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "What attracts me to this company is its commitment to the environment.",
        answer: "Ce qui m'attire dans cette entreprise, c'est son engagement pour l'environnement.",
        altAnswers: ["Ce qui m'attire dans cette entreprise, c'est son engagement en faveur de l'environnement.", "Ce qui m'attire dans cette entreprise, c'est son engagement environnemental.", "Ce qui m'attire dans cette société, c'est son engagement pour l'environnement."],
        explanation: "The pseudo-cleft \"ce qui m'attire..., c'est...\" builds up to the reason you are applying.",
      },
      {
        type: "speak",
        text: "Après une licence d'anglais, j'ai rejoint une maison d'édition.",
        prompt: "Say it in French: After a degree in English, I joined a publishing house.",
        tip: "Keep \"master\" French: the r is uvular and the final syllable gets the stress.",
        explanation: "\"J'ai rejoint\" (passé composé) moves the story forward one step.",
      },
    ],
  },
  {
    slug: "c2-strengths-tone-contrast",
    level: "FR-C2",
    number: 2,
    title: "Contrast Clinic: Point Fort, Vantardise et Fausse Modestie",
    summary: "Three answers to « Quel est votre principal point fort ? »: learn to sound confident without the brashness French recruiters distrust, and modest without disappearing.",
    duration: "17 min",
    sections: [
      {
        heading: "Self-promotion lands badly",
        body: [
          "English-language interview culture, especially American, rewards confident self-promotion: I'm an exceptional leader, I'm the best closer in the company. Translated literally, this lands badly in France. \"Je suis un leader exceptionnel\" sounds like \"la vantardise\" (boasting) or \"l'arrogance\", and French recruiters may hear \"un manque de recul\" (a lack of self-awareness).",
        ],
        examples: [
          { es: "Je suis le meilleur négociateur que vous puissiez trouver.", en: "I'm the best negotiator you could find. (boastful)" },
          { es: "Je suis un leader exceptionnel.", en: "I'm an exceptional leader. (sounds boastful in France)" },
          { es: "Il manque de recul sur lui-même.", en: "He lacks self-awareness." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How does « Je suis un leader exceptionnel » sound to a French recruiter?",
            options: ["Boastful, lacking self-awareness", "Appropriately confident", "Falsely modest", "Too informal"],
            correctIndex: 0,
            explanation: "Literal self-promotion sounds like \"la vantardise\" in France, and suggests \"un manque de recul\".",
          },
        ],
      },
      {
        heading: "False modesty, and the ideal",
        body: [
          "The opposite mistake is \"la fausse modestie\": « Oh, je ne sais pas, je n'ai pas vraiment de point fort... ». It sounds either insincere or alarmingly unprepared. The French ideal is \"l'assurance sans l'arrogance\": state the strength plainly, attribute some of it to others' judgement, and prove it with a fact.",
        ],
        examples: [
          { es: "Je ne sais pas trop, je fais de mon mieux comme tout le monde.", en: "I don't really know, I do my best like everyone. (falsely modest)" },
          { es: "Je ne suis pas le plus extraverti de l'équipe, mais je suis celui qu'on vient voir quand un dossier se complique.", en: "I'm not the most outgoing person on the team, but I'm the one people come to when a case gets complicated." },
          { es: "Je suis sûr de mes compétences, et je peux le prouver.", en: "I'm sure of my skills, and I can prove it." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Asked about her strengths, a candidate says: \"Oh, je ne sais pas trop, je fais comme tout le monde.\" What's the problem?",
            options: ["False modesty: it gives nothing and sounds unprepared.", "Boasting: she sounds arrogant.", "Wrong register: she uses tu.", "Nothing: it's the ideal French answer."],
            correctIndex: 0,
            explanation: "\"La fausse modestie\" is as damaging as boasting. \"Je ne sais pas trop\" is also too casual for an interview.",
          },
        ],
      },
      {
        heading: "Three tools: others, moderation, proof",
        body: [
          "Three tools make this work. First, let others speak: \"on me reconnaît une grande capacité d'écoute\", \"mes collègues diraient que\", \"mes responsables ont souvent souligné\". Second, moderate the adjective rather than inflate it: \"je pense être assez rigoureux\", \"c'est, je crois, l'un de mes atouts\". Third, prove it: \"concrètement, cela s'est traduit par...\".",
        ],
        examples: [
          { es: "On me reconnaît généralement une grande capacité d'écoute.", en: "People generally credit me with being a very good listener." },
          { es: "Mes collègues diraient sans doute que je suis quelqu'un de fiable.", en: "My colleagues would probably say I'm someone reliable." },
          { es: "Mes responsables ont souvent souligné ma rigueur.", en: "My managers have often pointed out my rigour." },
          { es: "C'est, je crois, l'un de mes principaux atouts.", en: "It is, I believe, one of my main assets." },
          { es: "Concrètement, cela s'est traduit par une baisse de 20 % des réclamations.", en: "In concrete terms, this led to a 20% drop in complaints." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which phrase moderates a strength the French way?",
            options: ["Je pense être assez rigoureuse.", "Je suis la personne la plus rigoureuse que vous rencontrerez.", "Rigoureuse ? Moi ? Pas vraiment.", "Je suis extrêmement, incroyablement rigoureuse."],
            correctIndex: 0,
            explanation: "\"Je pense être assez...\" states the quality while leaving room for the recruiter to judge. The others are boasting or false modesty.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (in an interview).",
            source: "My colleagues would probably say that I'm very organised.",
            answer: "Mes collègues diraient sans doute que je suis très organisé.",
            altAnswers: ["Mes collègues diraient sans doute que je suis très organisée.", "Mes collègues diraient probablement que je suis très organisé.", "Mes collègues diraient probablement que je suis très organisée.", "Mes collègues diraient certainement que je suis très organisé.", "Mes collègues diraient certainement que je suis très organisée."],
            explanation: "The conditional \"diraient\" plus \"sans doute\" lets others vouch for you. Careful: \"sans doute\" means probably, not without doubt (that's \"sans aucun doute\").",
          },
        ],
      },
      {
        heading: "Three candidates",
        body: [
          "Read three candidates' answers to « Quel est votre principal point fort ? ». Answer A, by Julien: « Honnêtement, je suis le meilleur négociateur que vous puissiez trouver. Personne ne me résiste. » Answer B, by Sarah: « Oh, je ne sais pas trop... je fais de mon mieux, comme tout le monde. » Answer C, by Nadia: « Je dirais ma capacité à négocier. Mes responsables l'ont souvent souligné, et concrètement, l'an dernier, j'ai su renégocier nos trois principaux contrats fournisseurs, avec une économie de 12 %. »",
        ],
        examples: [
          { es: "Je dirais ma capacité à négocier.", en: "I'd say my ability to negotiate." },
          { es: "L'an dernier, j'ai su renégocier nos trois principaux contrats.", en: "Last year I managed to renegotiate our three main contracts." },
          { es: "Si je devais n'en retenir qu'un, ce serait mon sens de l'organisation.", en: "If I had to pick just one, it would be my organisational skills." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which candidate gives the answer French recruiters prefer?",
            options: ["Nadia, who names the strength, cites her managers and gives a figure", "Julien, who says nobody can resist him", "Sarah, who says she does her best like everyone", "None of them"],
            correctIndex: 0,
            explanation: "The ideal is assurance without arrogance: state the strength, borrow authority from others, prove it with a fact.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Last year I managed to reduce costs by ten percent.",
            answer: "L'an dernier, j'ai su réduire les coûts de dix pour cent.",
            altAnswers: ["L'année dernière, j'ai su réduire les coûts de dix pour cent.", "L'an dernier, j'ai réussi à réduire les coûts de dix pour cent.", "L'année dernière, j'ai réussi à réduire les coûts de dix pour cent.", "L'an dernier, j'ai su réduire les coûts de 10 %.", "L'an dernier, j'ai réussi à réduire les coûts de 10 %.", "L'an passé, j'ai su réduire les coûts de dix pour cent."],
            explanation: "\"J'ai su\" + infinitive (passé composé) means I managed to; \"j'ai réussi à\" is the neutral equivalent. A reduction by takes \"de\": \"réduire de 10 %\".",
          },
        ],
      },
      {
        heading: "Why each answer lands as it does",
        body: [
          "Answer A is technically elegant (note the subjunctive after the superlative, \"le meilleur... que vous puissiez trouver\") but socially disastrous: it's \"de la vantardise\", and \"personne ne me résiste\" sounds aggressive. Answer B gives the recruiter nothing to hold on to and \"je ne sais pas trop\" is colloquial. Answer C states the strength with \"je dirais\" (a softening conditional), borrows authority from others, and proves it with a number.",
        ],
        examples: [
          { es: "Je crois avoir un vrai talent pour fédérer une équipe autour d'un projet.", en: "I believe I have a real talent for bringing a team together around a project." },
          { es: "Personne ne me résiste.", en: "Nobody can resist me. (aggressive)" },
          { es: "C'est la plus belle réussite que nous ayons connue.", en: "It is the finest success we have known." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "C'est le meilleur poste que je peux imaginer.",
            answer: "C'est le meilleur poste que je puisse imaginer.",
            explanation: "After a superlative (\"le meilleur... que\"), careful French uses the subjunctive: \"que je puisse\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "If I had to choose one quality, [it would be] patience.",
            sentence: "Si je devais choisir une qualité, ___ la patience.",
            answer: "ce serait",
            explanation: "\"Si\" + imparfait (\"je devais\") pairs with the conditional (\"ce serait\"): a measured way to name a strength.",
          },
        ],
      },
      {
        heading: "J'ai su: an achievement as a skill",
        body: [
          "Note \"j'ai su\" + infinitive in Answer C: in the passé composé, \"savoir\" means I managed to, I succeeded in. It's one of the most useful verbs in an interview, because it presents an achievement as a skill rather than luck.",
        ],
        examples: [
          { es: "J'ai su convaincre la direction.", en: "I managed to convince management." },
          { es: "Elle a su garder son calme.", en: "She managed to keep calm." },
          { es: "Nous avons su réduire les délais.", en: "We managed to cut lead times." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Last year I [managed to] win back two major clients.",
            sentence: "L'an dernier, j'ai ___ reconquérir deux gros clients.",
            answer: "su",
            explanation: "\"J'ai su\" + infinitive: in the passé composé, \"savoir\" means managed to. It presents the success as a skill.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into an achievement with j'ai su.",
            source: "J'ai réussi à fidéliser nos clients.",
            answer: "J'ai su fidéliser nos clients.",
            explanation: "In the passé composé, \"savoir\" + infinitive means managed to, and presents the result as a skill rather than luck.",
          },
        ],
      },
      {
        heading: "Repairing the boast",
        body: [
          "To repair a boastful answer, keep the content and change the frame: replace the superlative with a measured adjective, add a source, add a fact. « Je suis le meilleur manager de ma boîte » becomes « Je crois savoir fédérer une équipe : l'an dernier, mon service a eu le taux de turnover le plus bas du groupe. » The fact now does the boasting for you, which French listeners find far more convincing.",
        ],
        examples: [
          { es: "Je crois savoir fédérer une équipe.", en: "I think I know how to bring a team together." },
          { es: "L'an dernier, mon service a eu le taux de turnover le plus bas du groupe.", en: "Last year my department had the lowest staff turnover in the group." },
          { es: "Je crois savoir gérer les urgences.", en: "I think I know how to handle emergencies." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is the best rewrite of \"Je suis le meilleur commercial de France\" ?",
            options: ["Je crois avoir un vrai sens commercial : l'an dernier, j'ai dépassé mes objectifs de 30 %.", "Je suis sans doute le meilleur commercial de France.", "Je ne suis pas très bon, mais j'essaie.", "Tout le monde dit que je suis le meilleur, donc c'est vrai."],
            correctIndex: 0,
            explanation: "The rewrite keeps the strength, moderates it with \"je crois\", and lets a fact (30% above target) carry the weight.",
          },
        ],
      },
      {
        heading: "Repairing false modesty",
        body: [
          "To repair false modesty, commit: start with \"je dirais\", \"mon principal atout, c'est\", \"ce qui me caractérise, c'est\". Then show you know your value without apologising: « Je ne suis pas un expert en tout, mais sur la gestion de crise, je sais ce que je vaux. » That last idiom, \"savoir ce qu'on vaut\" (to know one's worth), is confident but grounded.",
        ],
        examples: [
          { es: "Mon principal atout, c'est ma capacité d'adaptation.", en: "My main asset is my adaptability." },
          { es: "Sur la gestion de crise, je sais ce que je vaux.", en: "When it comes to crisis management, I know what I'm worth." },
          { es: "Ce qui me caractérise, c'est le goût du travail bien fait.", en: "What characterises me is a love of a job well done." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a measured answer).",
            source: "My main asset is my sense of humour.",
            answer: "Mon principal atout, c'est mon sens de l'humour.",
            altAnswers: ["Mon principal atout est mon sens de l'humour.", "Mon atout principal, c'est mon sens de l'humour."],
            explanation: "Commit with \"mon principal atout, c'est\": the detached subject and \"c'est\" put the strength in focus.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it committed instead of falsely modest, starting with je dirais.",
            source: "Je ne sais pas trop... peut-être l'organisation ?",
            answer: "Je dirais l'organisation.",
            altAnswers: ["Je dirais mon sens de l'organisation.", "Je dirais que c'est l'organisation."],
            explanation: "\"Je dirais\" (a softening conditional) commits to an answer without sounding brash.",
          },
        ],
      },
      {
        heading: "Two traps: ambitieux and perfectionniste",
        body: [
          "Watch two traps. \"Je suis très ambitieux\" is risky in French: \"ambitieux\" can sound like careerist; \"j'ai envie d'évoluer\" is safer. And \"je suis perfectionniste\" as a strength sounds rehearsed; the Style Workshop later in this unit shows what to do with it.",
        ],
        examples: [
          { es: "J'ai envie d'évoluer vers des fonctions d'encadrement.", en: "I'd like to move into management roles." },
          { es: "J'ai envie de prendre davantage de responsabilités.", en: "I'd like to take on more responsibility." },
          { es: "Je suis perfectionniste.", en: "I'm a perfectionist. (sounds rehearsed)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which phrase is the safest way to show drive in a French interview?",
            options: ["J'ai envie d'évoluer.", "Je suis très ambitieux.", "Je veux votre poste.", "Je suis perfectionniste."],
            correctIndex: 0,
            explanation: "\"Ambitieux\" can sound careerist and \"perfectionniste\" rehearsed; \"j'ai envie d'évoluer\" shows drive safely.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I'd like to move towards more international roles.",
            answer: "J'ai envie d'évoluer vers des fonctions plus internationales.",
            altAnswers: ["J'aimerais évoluer vers des fonctions plus internationales.", "Je souhaite évoluer vers des fonctions plus internationales.", "J'ai envie d'évoluer vers des postes plus internationaux."],
            explanation: "\"Évoluer vers\" + roles expresses ambition without the careerist ring of \"ambitieux\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "My managers credit me with real composure.",
        answer: "Mes responsables me reconnaissent un vrai sang-froid.",
        altAnswers: ["Mes responsables me reconnaissent un réel sang-froid.", "Mes managers me reconnaissent un vrai sang-froid."],
        explanation: "\"Reconnaître quelque chose à quelqu'un\": let others name the strength for you.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I'd say my main strength is my rigour.",
        answer: "Je dirais que mon principal point fort, c'est ma rigueur.",
        altAnswers: ["Je dirais que mon principal point fort est ma rigueur.", "Je dirais que mon point fort principal, c'est ma rigueur.", "Je dirais que mon point fort principal est ma rigueur.", "Je dirais que ma principale qualité, c'est ma rigueur.", "Je dirais que ma principale qualité est ma rigueur.", "Mon principal point fort, je dirais que c'est ma rigueur."],
        explanation: "The conditional \"je dirais\" softens the claim without weakening it. \"Point fort\" is the standard term for a strength.",
      },
      {
        type: "fill-blank",
        explanation: "The conditional \"diraient\" lets others speak for you, which sounds modest but confident.",
        prompt: "Write the French for the bold words.",
        en: "My former colleagues [would say] I'm a patient person.",
        sentence: "Mes anciens collègues ___ que je suis quelqu'un de patient.",
        answer: "diraient",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I believe I have a real talent for calming tensions.",
        answer: "Je crois avoir un vrai talent pour apaiser les tensions.",
        altAnswers: ["Je crois avoir un réel talent pour apaiser les tensions.", "Je pense avoir un vrai talent pour apaiser les tensions."],
        explanation: "\"Je crois avoir\" + noun moderates the claim; same subject, so the infinitive.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "In concrete terms, this led to a fifteen percent rise in sales.",
        answer: "Concrètement, cela s'est traduit par une hausse de quinze pour cent des ventes.",
        altAnswers: ["Concrètement, cela s'est traduit par une hausse des ventes de quinze pour cent.", "Concrètement, cela s'est traduit par une hausse de 15 % des ventes.", "Concrètement, cela s'est traduit par une hausse des ventes de 15 %.", "Concrètement, ça s'est traduit par une hausse de quinze pour cent des ventes.", "Concrètement, cela s'est traduit par une augmentation de quinze pour cent des ventes.", "Concrètement, cela s'est traduit par une augmentation des ventes de 15 %."],
        explanation: "\"Se traduire par\" (to result in, to show up as) is the bridge from claim to proof. \"Une hausse de 15 %\": \"de\" for the amount.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: When it comes to negotiation, I know what I'm worth.",
        words: ["Sur la négociation,", "je", "sais", "ce que", "je", "vaux."],
        translation: "When it comes to negotiation, I know what I'm worth.",
        explanation: "\"Savoir ce qu'on vaut\": confident but grounded. \"Vaux\" is the je form of \"valoir\".",
      },
      {
        type: "dictation",
        audio: "C'est, je pense, ma principale qualité.",
        explanation: "The inserted \"je pense\" moderates the claim.",
      },
      {
        type: "speak",
        text: "Je crois savoir fédérer une équipe : l'an dernier, mon service a eu le taux de turnover le plus bas du groupe.",
        prompt: "Say it in French: I think I know how to bring a team together: last year my department had the lowest turnover in the group.",
        tip: "\"Turnover\" is said the French way, stress on the last syllable.",
        explanation: "The fact carries the boast, which French recruiters find more convincing than a superlative about yourself.",
      },
      {
        type: "speak",
        text: "Je dirais ma capacité à négocier. Mes responsables l'ont souvent souligné.",
        prompt: "Say it in French: I'd say my ability to negotiate. My managers have often pointed it out.",
        tip: "In \"souligné\", the gn is like ny in canyon.",
        explanation: "The softening conditional plus others' judgement: confident without bragging.",
      },
    ],
  },
  {
    slug: "c2-job-interview-2",
    level: "FR-C2",
    number: 3,
    title: "L'Entretien d'Embauche, Part 2 of 7",
    summary: "Presenting strengths and achievements: the verbs of accomplishment (piloter, mener à bien, contribuer à, être amené à), j'ai su + infinitive, and quantified results.",
    duration: "19 min",
    sections: [
      {
        heading: "Verbs that show your role",
        body: [
          "A French interview rewards precise verbs. \"J'ai fait un projet\" says nothing; choose the verb that shows your role. \"Piloter un projet\" (to lead and steer it), \"mener à bien\" (to bring to a successful conclusion), \"conduire\" (to run, as in \"conduire le changement\"), \"mettre en place\" (to set up a process or tool), \"contribuer à\" (to contribute to, when you were one of several), \"être amené(e) à\" (to find oneself doing, to have occasion to: it presents a responsibility as something your role led you to).",
        ],
        examples: [
          { es: "J'ai piloté la migration de notre système d'information vers le cloud.", en: "I led the migration of our IT system to the cloud." },
          { es: "J'ai mené à bien la fusion de deux services en moins de six mois.", en: "I successfully completed the merger of two departments in under six months." },
          { es: "J'ai mis en place un outil de suivi des commandes qui est toujours utilisé.", en: "I set up an order-tracking tool that is still in use." },
          { es: "J'ai contribué à l'ouverture de notre filiale au Maroc.", en: "I contributed to opening our subsidiary in Morocco." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it precise: replace j'ai fait with piloter.",
            source: "J'ai fait le lancement de l'application.",
            answer: "J'ai piloté le lancement de l'application.",
            explanation: "\"J'ai fait\" says nothing about your role; \"piloter\" says you led and steered the project.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I led the launch of our online shop.",
            answer: "J'ai piloté le lancement de notre boutique en ligne.",
            altAnswers: ["J'ai dirigé le lancement de notre boutique en ligne.", "J'ai conduit le lancement de notre boutique en ligne.", "J'ai piloté le lancement de notre site marchand.", "J'ai géré le lancement de notre boutique en ligne."],
            explanation: "\"Piloter\" is the standard verb for leading a project in business French; \"diriger\" and \"conduire\" also work.",
          },
        ],
      },
      {
        heading: "Être amené à, assurer",
        body: [
          "\"Être amené à\" deserves attention: it is extremely common in professional French and has no neat English equivalent. « Dans mes fonctions, j'ai été amenée à gérer des situations de crise » means my role meant I had to handle crises, and it sounds both modest and experienced. Similarly, \"être en charge de\" or \"avoir la responsabilité de\" describe scope, while \"assurer\" means to provide or handle (\"j'assurais la formation des nouveaux arrivants\").",
        ],
        examples: [
          { es: "Dans mes fonctions, j'ai été amenée à gérer des situations de crise.", en: "My role involved handling crisis situations." },
          { es: "J'assurais la formation des nouveaux arrivants.", en: "I handled the training of new arrivals." },
          { es: "J'étais en charge de la relation fournisseurs.", en: "I was in charge of supplier relations." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "In my previous job, [I had occasion to] train new recruits.",
            sentence: "Dans mon précédent poste, ___ former les nouvelles recrues.",
            answer: "j'ai été amené à",
            altAnswers: ["j'ai été amenée à"],
            explanation: "\"Être amené(e) à\" + infinitive presents a responsibility as a natural part of the role: modest and experienced at once.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: My role involved negotiating with the unions.",
            words: ["Dans mes fonctions,", "j'ai été", "amené", "à négocier", "avec", "les syndicats."],
            translation: "My role involved negotiating with the unions.",
            explanation: "\"Être amené à\" + infinitive presents a responsibility as part of the job.",
          },
        ],
      },
      {
        heading: "Réaliser: a trap",
        body: [
          "\"Réaliser\" is a trap. \"J'ai réalisé un audit complet\" (I carried out) is correct French. But \"*j'ai réalisé que l'équipe était démotivée*\" is an anglicism for I realised; careful speakers say \"je me suis rendu compte que\" or \"j'ai pris conscience que\". In an interview, a calque like this is noticed.",
        ],
        examples: [
          { es: "Je me suis rendu compte que l'équipe manquait de visibilité sur les objectifs.", en: "I realised that the team lacked visibility on the objectives." },
          { es: "J'ai réalisé un audit complet.", en: "I carried out a full audit." },
          { es: "J'ai pris conscience que le budget était insuffisant.", en: "I realised that the budget was insufficient." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is a calque that a careful recruiter would notice?",
            options: ["J'ai réalisé que l'équipe était démotivée.", "J'ai réalisé un audit complet du service.", "Je me suis rendu compte que l'équipe était démotivée.", "J'ai pris conscience que l'équipe était démotivée."],
            correctIndex: 0,
            explanation: "\"Réaliser un audit\" (carry out) is fine; \"réaliser que\" for to realise is an anglicism. Use \"se rendre compte que\" or \"prendre conscience que\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "J'ai réalisé que le client était mécontent.",
            answer: "Je me suis rendu compte que le client était mécontent.",
            altAnswers: ["J'ai pris conscience que le client était mécontent.", "Je me suis rendue compte que le client était mécontent."],
            explanation: "\"Réaliser\" means to carry out. For to realise that, say \"se rendre compte que\" or \"prendre conscience que\".",
          },
        ],
      },
      {
        heading: "Je suis reconnu(e) pour",
        body: [
          "Two structures turn an achievement into a skill. \"Je suis reconnu(e) pour\" + noun (or \"pour\" + past infinitive) borrows the authority of others: \"je suis reconnue pour ma capacité à désamorcer les tensions\", \"je suis reconnu pour avoir redressé un service en difficulté\". The agreement matters: a woman says \"reconnue\".",
        ],
        examples: [
          { es: "Je suis reconnue pour ma capacité à désamorcer les tensions.", en: "I'm known for my ability to defuse tension." },
          { es: "Je suis reconnu pour avoir redressé un service en difficulté.", en: "I'm known for having turned around a struggling department." },
          { es: "Elle est reconnue pour son sens de l'écoute.", en: "She is known for her listening skills." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a woman speaking).",
            source: "I'm known for my rigour.",
            answer: "Je suis reconnue pour ma rigueur.",
            altAnswers: ["On me reconnaît pour ma rigueur."],
            explanation: "\"Je suis reconnue pour\" + noun borrows others' authority; a woman makes the participle agree: \"reconnue\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I'm known for having modernised the warehouse.",
            answer: "Je suis reconnu pour avoir modernisé l'entrepôt.",
            altAnswers: ["Je suis reconnue pour avoir modernisé l'entrepôt."],
            explanation: "\"Reconnu pour\" + past infinitive (\"avoir modernisé\") for a past achievement.",
          },
        ],
      },
      {
        heading: "J'ai su, j'ai pu, j'ai réussi à",
        body: [
          "\"J'ai su\" + infinitive is the other key. In the imparfait, \"je savais\" is knowledge (I knew); in the passé composé, \"j'ai su\" is an achieved ability, I managed to, I was able to and did. Compare \"j'ai pu\" + infinitive (I was able to, the circumstances allowed it) and \"j'ai réussi à\" (neutral, I succeeded in). In an interview, \"j'ai su convaincre la direction\" puts the merit on you; \"j'ai pu convaincre\" credits the circumstances a little more.",
        ],
        examples: [
          { es: "Grâce au soutien de la direction, j'ai pu recruter deux développeurs.", en: "Thanks to management's support, I was able to recruit two developers." },
          { es: "J'ai su convaincre un client qui menaçait de partir.", en: "I managed to win over a client who was threatening to leave." },
          { es: "Dans un contexte tendu, j'ai réussi à préserver la cohésion de l'équipe.", en: "In a tense context, I succeeded in keeping the team together." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence presents the success most clearly as the candidate's own skill?",
            options: ["J'ai su convaincre la direction.", "Je savais convaincre la direction.", "La direction a été convaincue.", "J'ai pu convaincre la direction grâce à la conjoncture."],
            correctIndex: 0,
            explanation: "\"J'ai su\" + infinitive = I managed to, by my own ability. \"Je savais\" is a habitual or background ability, and the passive hides the agent.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to put the merit on you: drop the circumstances and use j'ai su.",
            source: "Grâce aux circonstances, j'ai pu rassurer les investisseurs.",
            answer: "J'ai su rassurer les investisseurs.",
            explanation: "\"J'ai pu\" credits the circumstances; \"j'ai su\" + infinitive presents the success as your own skill.",
          },
        ],
      },
      {
        heading: "The obstacle makes it visible",
        body: [
          "These can be combined with a concessive frame that makes the story more credible: \"malgré un budget réduit, j'ai su...\", \"dans un contexte tendu, j'ai pu...\". The obstacle makes the achievement visible.",
        ],
        examples: [
          { es: "Malgré un budget réduit de moitié, j'ai su maintenir la qualité de service.", en: "Despite a budget cut in half, I managed to maintain the quality of service." },
          { es: "Dans un contexte tendu, j'ai pu maintenir les délais.", en: "In a tense context, I was able to keep to the deadlines." },
          { es: "Malgré le départ de deux collègues, j'ai su tenir les objectifs.", en: "Despite two colleagues leaving, I managed to meet the targets." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Despite a tight deadline, I managed to deliver the project on time.",
            answer: "Malgré un délai serré, j'ai su livrer le projet à temps.",
            altAnswers: ["Malgré un délai serré, j'ai réussi à livrer le projet à temps.", "Malgré des délais serrés, j'ai su livrer le projet à temps.", "Malgré des délais serrés, j'ai réussi à livrer le projet à temps.", "Malgré un délai serré, j'ai su livrer le projet dans les temps.", "Malgré un délai serré, j'ai réussi à livrer le projet dans les temps.", "Malgré des délais serrés, j'ai su livrer le projet dans les temps."],
            explanation: "\"Malgré\" + noun frames the obstacle; \"j'ai su\" + infinitive claims the success. \"Un délai serré\" is a tight deadline.",
          },
        ],
      },
      {
        heading: "Rises, falls, and de",
        body: [
          "French recruiters like figures, as long as they're credible. The grammar is precise: \"une hausse de 15 %\" (a 15% rise), \"une baisse de 8 %\", \"réduire les délais de trois semaines\" (by three weeks), \"passer de 2 à 5 millions d'euros\" (to go from 2 to 5 million euros), \"multiplier par deux\" (to double), \"diviser par trois\". The amount of a change is introduced by \"de\"; the comparison point by \"par rapport à\".",
        ],
        examples: [
          { es: "Le chiffre d'affaires est passé de 2 à 3,4 millions d'euros en deux ans.", en: "Turnover went from 2 to 3.4 million euros in two years." },
          { es: "Nous avons réduit les délais de livraison de trois semaines.", en: "We cut delivery times by three weeks." },
          { es: "Les réclamations ont baissé de près de 30 % par rapport à l'année précédente.", en: "Complaints fell by nearly 30% compared with the previous year." },
          { es: "Ce nouvel outil a permis de diviser par deux le temps de traitement des dossiers.", en: "This new tool halved the time it took to process files." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Sales [went from] 1 to 1.8 million euros.",
            sentence: "Les ventes ___ 1 à 1,8 million d'euros.",
            answer: "sont passées de",
            explanation: "\"Passer de... à...\" for a change in figures, with \"être\" in the passé composé (agreeing with \"ventes\"). Note the decimal comma: \"1,8\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Nous avons réduit les coûts par 10 %.",
            answer: "Nous avons réduit les coûts de 10 %.",
            explanation: "The amount of a change is introduced by \"de\": \"réduire de 10 %\". \"Par\" is only for multiplying or dividing (\"diviser par deux\").",
          },
        ],
      },
      {
        heading: "People and number format",
        body: [
          "For people, say \"une équipe de huit personnes\", \"encadrer six collaborateurs\" (\"collaborateur\" is the polite word for someone who works with or under you), \"un portefeuille de quarante clients\". Numbers are written with a space for thousands and a comma for decimals: \"1 200 clients\", \"3,5 millions\". The percent sign has a space before it: \"12 %\".",
        ],
        examples: [
          { es: "J'encadrais une équipe de huit collaborateurs.", en: "I managed a team of eight people." },
          { es: "J'ai géré un portefeuille d'une soixantaine de clients grands comptes.", en: "I managed a portfolio of about sixty key accounts." },
          { es: "Le service compte 1 200 clients.", en: "The department has 1,200 clients." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How is three and a half million euros written in French?",
            options: ["3,5 millions d'euros", "3.5 millions d'euros", "3,5 million d'euros", "3.500.000,0 euros"],
            correctIndex: 0,
            explanation: "French uses a comma for decimals, and \"million\" takes an s above one: \"3,5 millions d'euros\".",
          },
        ],
      },
      {
        heading: "Approximations and causes",
        body: [
          "Approximations make figures sound honest rather than inflated: \"une trentaine de\" (about thirty), \"près de\" (nearly), \"plus de\", \"environ\". And tie the figure to a cause: \"grâce à\", \"suite à la mise en place de\", \"ce qui a permis de\".",
        ],
        examples: [
          { es: "Nous avons recruté une trentaine de personnes.", en: "We recruited about thirty people." },
          { es: "Grâce à ce logiciel, les erreurs ont baissé de moitié.", en: "Thanks to this software, errors fell by half." },
          { es: "Suite à la mise en place du télétravail, l'absentéisme a reculé.", en: "Following the introduction of remote work, absenteeism fell." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I managed a team of about twenty people.",
            answer: "J'encadrais une équipe d'une vingtaine de personnes.",
            altAnswers: ["J'ai encadré une équipe d'une vingtaine de personnes.", "Je dirigeais une équipe d'une vingtaine de personnes.", "J'ai dirigé une équipe d'une vingtaine de personnes.", "J'encadrais une équipe d'environ vingt personnes.", "Je gérais une équipe d'une vingtaine de personnes."],
            explanation: "\"Une vingtaine de\" is the natural about twenty. Imparfait for an ongoing role (\"j'encadrais\"), passé composé if you see the whole period as closed.",
          },
        ],
      },
      {
        heading: "A model answer: the project",
        body: [
          "Here is how Thomas Lefebvre, an engineer applying to a rail manufacturer in Belfort, answers « Quelles sont vos principales réalisations ? ». He starts with the project and its context: « Je citerais d'abord le projet de maintenance prédictive que j'ai piloté chez mon employeur actuel. Les pannes imprévues coûtaient alors près de deux millions d'euros par an. J'ai mis en place, avec une équipe de six ingénieurs, un système de capteurs qui a permis de réduire ces pannes de 40 %. »",
        ],
        examples: [
          { es: "Je citerais d'abord le projet de maintenance prédictive que j'ai piloté.", en: "I'd mention first the predictive maintenance project I led." },
          { es: "Les pannes imprévues coûtaient alors près de deux millions d'euros par an.", en: "Unplanned breakdowns were then costing nearly two million euros a year." },
          { es: "Ce système a permis de réduire ces pannes de 40 %.", en: "This system made it possible to cut these breakdowns by 40%." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Ce logiciel a permis de réduire les erreurs de vingt pour cent.",
            question: "What does it mean?",
            options: ["This software cut errors by 20%.", "This software cut errors to 20%.", "This software caused 20% more errors.", "This software was allowed to run at 20%."],
            correctIndex: 0,
            explanation: "\"Réduire de\" + amount gives the size of the cut: by 20%, not to 20%.",
          },
        ],
      },
      {
        heading: "A model answer: the close",
        body: [
          "Then he widens the story and ends on measured pride: « Ensuite, j'ai été amené à former les équipes de deux autres sites, ce qui n'était pas prévu au départ. Je suis assez fier de ce projet, parce que j'ai su convaincre une direction au départ sceptique. »",
        ],
        examples: [
          { es: "Je suis assez fier de ce projet.", en: "I'm quite proud of this project." },
          { es: "J'ai su convaincre une direction au départ sceptique.", en: "I managed to win over a management team that was sceptical at first." },
          { es: "Ensuite, j'ai été amené à former les équipes de deux autres sites.", en: "Then I had occasion to train the teams at two other sites." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I'm rather pleased with this result.",
            answer: "Je suis plutôt satisfait de ce résultat.",
            altAnswers: ["Je suis assez satisfait de ce résultat.", "Je suis plutôt content de ce résultat.", "Je suis plutôt satisfaite de ce résultat.", "Je suis assez satisfaite de ce résultat."],
            explanation: "\"Plutôt\" or \"assez\" softens the pride: measured, not boastful.",
          },
        ],
      },
      {
        heading: "Every technique in one answer",
        body: [
          "Every technique is there: a precise verb (\"piloté\", \"mis en place\"), context in the imparfait (\"coûtaient alors\"), a figure with \"de\", the modest-experienced \"j'ai été amené à\", the skill-claiming \"j'ai su\", and a final note of measured pride: \"je suis assez fier de\" (assez softens), not \"je suis extrêmement fier\".",
        ],
        examples: [
          { es: "Elle est assez fière de son équipe.", en: "She is quite proud of her team." },
          { es: "Les ventes stagnaient alors depuis trois ans.", en: "Sales had been stagnating for three years at the time." },
          { es: "J'ai mis en place un tableau de bord partagé.", en: "I set up a shared dashboard." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make the pride measured with assez.",
            source: "Je suis extrêmement fière de cette campagne.",
            answer: "Je suis assez fière de cette campagne.",
            explanation: "\"Assez\" softens the pride; \"extrêmement\" sounds boastful to a French recruiter.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I realised that the process was too slow.",
        answer: "Je me suis rendu compte que le processus était trop lent.",
        altAnswers: ["J'ai pris conscience que le processus était trop lent.", "Je me suis aperçu que le processus était trop lent.", "Je me suis aperçue que le processus était trop lent."],
        explanation: "To realise (become aware) is \"se rendre compte que\", not \"*réaliser que*\". The participle \"rendu\" stays invariable even for a woman, because \"compte\" is the direct object: \"elle s'est rendu compte\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: I successfully completed the move to new offices.",
        explanation: "\"Mener à bien\" (to bring to a successful conclusion) keeps \"à bien\" right after the verb.",
        words: ["J'ai mené", "à bien", "le déménagement", "dans les nouveaux locaux."],
        translation: "I successfully completed the move to new offices.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "This tool halved processing times.",
        answer: "Cet outil a permis de diviser par deux les délais de traitement.",
        altAnswers: ["Cet outil a divisé par deux les délais de traitement.", "Cet outil a permis de diviser par deux les temps de traitement.", "Cet outil a divisé par deux les temps de traitement.", "Cet outil a permis de réduire de moitié les délais de traitement.", "Cet outil a réduit de moitié les délais de traitement.", "Cet outil a réduit de moitié les temps de traitement."],
        explanation: "To halve is \"diviser par deux\" or \"réduire de moitié\"; \"permettre de\" credits the tool for the result.",
      },
      {
        type: "dictation",
        audio: "Nous avons mis en place un suivi hebdomadaire des ventes.",
        explanation: "\"Mettre en place\" (to set up) a process or tool.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I contributed to the redesign of our website.",
        answer: "J'ai contribué à la refonte de notre site internet.",
        altAnswers: ["J'ai contribué à la refonte de notre site web.", "J'ai participé à la refonte de notre site internet.", "J'ai contribué à la refonte de notre site."],
        explanation: "\"Contribuer à\" when you were one of several: \"à la refonte\".",
      },
      {
        type: "speak",
        text: "Je suis reconnue pour mon sens de la diplomatie.",
        prompt: "Say it in French (a woman): I'm known for my diplomacy.",
        tip: "\"Désamorcer\": dé-za-mor-cé, the s between vowels sounds like z.",
        explanation: "\"Reconnue\" agrees with a female speaker.",
      },
      {
        type: "speak",
        text: "Malgré la crise, j'ai su garder tous nos clients.",
        prompt: "Say it in French: Despite the crisis, I managed to keep all our clients.",
        tip: "Keep \"malgré\" crisp: mal-gré, stress on the last syllable.",
        explanation: "The obstacle (\"malgré la crise\") makes the achievement (\"j'ai su\") visible.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        answer: "réduit les coûts de",
        altAnswers: ["Nous avons réduit les coûts de 12 %.", "On a réduit les coûts de douze pour cent.", "On a réduit les coûts de 12 %.", "Nous avons baissé les coûts de douze pour cent.", "Nous avons baissé les coûts de 12 %.", "Nous avons diminué les coûts de 12 %.", "Nous avons diminué les coûts de douze pour cent."],
        explanation: "The amount of a change is introduced by \"de\": \"réduire les coûts de douze pour cent\".",
        en: "We [cut costs by] twelve percent.",
        sentence: "Nous avons ___ douze pour cent.",
      },
    ],
  },
  {
    slug: "c2-weakness-answer-style-workshop",
    level: "FR-C2",
    number: 4,
    title: "Style Workshop: Parler d'un Axe d'Amélioration",
    summary: "Rewrite the clichéd « je suis trop perfectionniste » into an honest answer about a weakness, with context, a real example and an improvement plan.",
    duration: "18 min",
    sections: [
      {
        heading: "Axes d'amélioration: the HR codes",
        body: [
          "French recruiters ask it in several ways: « Quel est votre principal défaut ? », « Quels sont vos points faibles ? », or the more modern and tactful « Quels sont vos axes d'amélioration ? » / « Quels sont vos points de vigilance ? ». \"Un axe d'amélioration\" (an area for improvement) and \"un point de vigilance\" (something you keep an eye on) are the euphemisms of HR French, and using them in your answer shows you know the codes.",
        ],
        examples: [
          { es: "Quels sont, selon vous, vos principaux axes d'amélioration ?", en: "What do you see as your main areas for improvement?" },
          { es: "C'est un point de vigilance pour moi.", en: "It's something I keep an eye on." },
          { es: "Quel est votre principal défaut ?", en: "What is your main weakness?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is the most tactful way for a recruiter to ask about weaknesses?",
            options: ["Quels sont vos axes d'amélioration ?", "Quels sont vos défauts ?", "Qu'est-ce qui ne va pas chez vous ?", "Vous êtes mauvais en quoi ?"],
            correctIndex: 0,
            explanation: "\"Un axe d'amélioration\" is the tactful HR euphemism; using it in your answer shows you know the codes.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a recruiter, formally).",
            source: "What are your points to watch?",
            answer: "Quels sont vos points de vigilance ?",
            altAnswers: ["Quels sont, selon vous, vos points de vigilance ?"],
            explanation: "\"Un point de vigilance\" (something you keep an eye on) is another HR euphemism for a weakness.",
          },
        ],
      },
      {
        heading: "The clichés",
        body: [
          "The cliché answers are well known and recruiters are tired of them: \"je suis trop perfectionniste\", \"je suis trop exigeant(e) avec moi-même\", \"je travaille trop\". They're hidden boasts, and in France they're also seen as a lack of sincerity. The opposite cliché, \"je n'ai pas vraiment de défaut\", is worse.",
        ],
        examples: [
          { es: "Je suis trop perfectionniste.", en: "I'm too much of a perfectionist. (stock answer)" },
          { es: "Je suis trop exigeante avec moi-même.", en: "I'm too demanding of myself. (stock answer)" },
          { es: "Je n'ai pas vraiment de défaut.", en: "I don't really have a weakness. (worse)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which answer would a French recruiter find most credible?",
            options: ["J'ai tendance à vouloir tout vérifier moi-même ; depuis un an, j'apprends à déléguer davantage.", "Je suis trop perfectionniste.", "Je n'ai pas vraiment de défaut.", "Je travaille trop, je ne compte pas mes heures."],
            correctIndex: 0,
            explanation: "A real weakness plus what you're doing about it. The other three are recognised clichés or hidden boasts.",
          },
        ],
      },
      {
        heading: "Three moves",
        body: [
          "What works is a real but non-disqualifying weakness, told in three moves: the weakness and its context (\"j'ai longtemps eu du mal à déléguer\"), a concrete example of its cost (\"ce qui m'a amené à...\"), and what you've done about it since (\"depuis, je...\", \"aujourd'hui, je veille à...\"). The past tense of \"j'ai longtemps eu du mal à\" is doing a lot of work: it places the weakness partly behind you without denying it.",
        ],
        examples: [
          { es: "J'ai longtemps eu du mal à déléguer.", en: "For a long time I found it hard to delegate." },
          { es: "J'ai tendance à vouloir tout vérifier moi-même.", en: "I tend to want to check everything myself." },
          { es: "Depuis, je veille à fixer des points d'étape plutôt qu'à tout contrôler.", en: "Since then I make sure I set checkpoints rather than control everything." },
          { es: "La prise de parole en public n'a jamais été mon point fort.", en: "Public speaking has never been my strong point." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "For a long time I found it hard to say no.",
            answer: "J'ai longtemps eu du mal à dire non.",
            altAnswers: ["Pendant longtemps, j'ai eu du mal à dire non.", "J'ai longtemps eu des difficultés à dire non.", "J'ai longtemps eu de la peine à dire non.", "Pendant longtemps, j'ai eu des difficultés à dire non."],
            explanation: "\"Avoir du mal à\" + infinitive = to find it hard to. The passé composé with \"longtemps\" places the weakness in the past while admitting it.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a weakness partly behind you, with j'ai longtemps eu du mal à.",
            source: "J'ai du mal à parler en réunion.",
            answer: "J'ai longtemps eu du mal à parler en réunion.",
            explanation: "The passé composé with \"longtemps\" places the weakness partly in the past without denying it.",
          },
        ],
      },
      {
        heading: "From cliché to context",
        body: [
          "Start with the classic: « Mon défaut, c'est que je suis trop perfectionniste. » A rewrite keeps the kernel of truth but makes it concrete and costly: « J'ai tendance à passer trop de temps sur les détails d'un livrable. Sur mon dernier projet, cela m'a conduit à rendre un rapport avec deux jours de retard, alors que la version de la veille était largement suffisante. »",
        ],
        examples: [
          { es: "J'ai tendance à passer trop de temps sur les détails.", en: "I tend to spend too much time on details." },
          { es: "Cela m'a conduit à rendre un rapport avec deux jours de retard.", en: "It led me to hand in a report two days late." },
          { es: "La version de la veille était largement suffisante.", en: "The previous day's version was more than good enough." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "It led me to miss a deadline.",
            answer: "Cela m'a conduit à rater une échéance.",
            altAnswers: ["Cela m'a conduite à rater une échéance.", "Cela m'a amené à rater une échéance.", "Cela m'a amenée à rater une échéance.", "Cela m'a conduit à manquer une échéance.", "Cela m'a conduite à manquer une échéance.", "Ça m'a conduit à rater une échéance.", "Cela m'a fait rater une échéance.", "Cela m'a conduit à dépasser un délai."],
            explanation: "\"Conduire quelqu'un à\" + infinitive (to lead someone to). The participle agrees with \"m'\" if the speaker is a woman: \"conduite\".",
          },
        ],
      },
      {
        heading: "J'ai tendance à, not je suis",
        body: [
          "Notice the moves. \"J'ai tendance à\" (I tend to) describes a habit without making it an identity: it's not \"je suis\" but \"j'ai tendance à\". The example uses the passé composé for the event and an \"alors que\" of contrast that shows self-awareness. \"Largement suffisant\" (more than good enough) is the sort of precise, idiomatic touch Mastery answers need.",
        ],
        examples: [
          { es: "J'ai tendance à trop parler en réunion.", en: "I tend to talk too much in meetings." },
          { es: "Le résultat était largement suffisant.", en: "The result was more than good enough." },
          { es: "J'ai rendu le dossier en retard, alors que tout était prêt la veille.", en: "I handed in the file late, even though everything was ready the day before." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the label into a habit with j'ai tendance à.",
            source: "Je suis impatient avec les nouveaux.",
            answer: "J'ai tendance à être impatient avec les nouveaux.",
            altAnswers: ["J'ai tendance à être impatiente avec les nouveaux.", "J'ai tendance à manquer de patience avec les nouveaux."],
            explanation: "\"J'ai tendance à\" describes a habit without making it your identity, unlike \"je suis\" + adjective.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I tend to underestimate deadlines.",
            answer: "J'ai tendance à sous-estimer les délais.",
            altAnswers: ["J'ai tendance à sous-estimer les échéances.", "J'ai tendance à sous-évaluer les délais."],
            explanation: "\"Avoir tendance à\" + infinitive: a habit, not a fixed trait.",
          },
        ],
      },
      {
        heading: "Other nuanced habits",
        body: [
          "Other ways to describe a habit without labelling yourself: \"il m'arrive de\" (I sometimes...), \"je peux avoir tendance à\" (softer), \"mon premier réflexe est de\" (my first instinct is to). Each is more nuanced than \"je suis\" + adjective.",
        ],
        examples: [
          { es: "Il m'arrive de m'investir trop vite dans un projet sans en mesurer la charge.", en: "I sometimes throw myself into a project too quickly without measuring the workload." },
          { es: "Mon premier réflexe est de régler les problèmes seul.", en: "My first instinct is to solve problems on my own." },
          { es: "Je peux avoir tendance à être un peu direct dans mes retours.", en: "I can tend to be a bit blunt in my feedback." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which phrase describes a weakness as a habit rather than a fixed trait?",
            options: ["Il m'arrive d'être un peu trop direct.", "Je suis quelqu'un de très direct.", "Je suis trop direct, c'est comme ça.", "Direct, c'est ma nature."],
            correctIndex: 0,
            explanation: "\"Il m'arrive de\" (I sometimes...) frames the trait as occasional and correctable; \"je suis\" + adjective makes it your identity.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[I sometimes] answer emails too quickly.",
            sentence: "___ répondre trop vite aux mails.",
            answer: "Il m'arrive de",
            explanation: "\"Il m'arrive de\" + infinitive = I sometimes (find myself)... It admits the habit lightly.",
          },
        ],
      },
      {
        heading: "Depuis and aujourd'hui",
        body: [
          "The second half of the answer is what the recruiter really listens for: what have you done about it? Use \"depuis\" to link the past weakness to a present practice: « Depuis, je me fixe une limite de temps par livrable et je demande un retour à mi-parcours. » Then \"aujourd'hui\" for the present result: « Aujourd'hui, je rends mes dossiers dans les délais, sans sacrifier la qualité. »",
        ],
        examples: [
          { es: "Depuis, je me fixe une limite de temps par livrable.", en: "Since then I've set myself a time limit for each deliverable." },
          { es: "Aujourd'hui, je veille à demander un retour à mi-parcours.", en: "Now I make sure to ask for feedback halfway through." },
          { es: "Aujourd'hui, je rends mes dossiers dans les délais.", en: "Today I hand in my files on time." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Since then, [I make sure to] set deadlines for each stage.",
            sentence: "Depuis, ___ fixer des échéances pour chaque étape.",
            answer: "je veille à",
            altAnswers: ["je m'efforce de", "je prends soin de"],
            explanation: "\"Veiller à\" + infinitive = to make sure to; it shows an active habit of correction.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Depuis deux ans, je me fixais une limite de temps.",
            answer: "Depuis deux ans, je me fixe une limite de temps.",
            explanation: "\"Depuis\" + a practice that still goes on takes the present: \"je me fixe\". The imparfait would place it in a finished past.",
          },
        ],
      },
      {
        heading: "Verbs of improvement",
        body: [
          "Useful verbs: \"veiller à\" + infinitive (to make sure to), \"s'efforcer de\" (to strive to), \"apprendre à\" (to learn to), \"se faire accompagner\" (to get coaching or support), \"suivre une formation\" (to take a course). And the present progressive feel of \"je travaille sur ce point\" (I'm working on it) is very natural.",
        ],
        examples: [
          { es: "J'ai suivi une formation à la prise de parole en public l'an dernier.", en: "I took a public speaking course last year." },
          { es: "Je me suis fait accompagner par un coach pendant six mois.", en: "I worked with a coach for six months." },
          { es: "Je m'efforce de prendre la parole à chaque réunion.", en: "I make an effort to speak up at every meeting." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Last year I took a course in time management.",
            answer: "L'an dernier, j'ai suivi une formation en gestion du temps.",
            altAnswers: ["L'année dernière, j'ai suivi une formation en gestion du temps.", "L'an dernier, j'ai suivi une formation à la gestion du temps.", "L'année dernière, j'ai suivi une formation à la gestion du temps.", "L'an dernier, j'ai suivi une formation sur la gestion du temps.", "L'année dernière, j'ai suivi une formation sur la gestion du temps."],
            explanation: "\"Suivre une formation\" (to take a course). \"Prendre un cours\" is for a single lesson; \"une formation\" is professional training.",
          },
        ],
      },
      {
        heading: "Under control, not erased",
        body: [
          "End by showing that the weakness is under control, not erased: « C'est un point sur lequel je reste vigilant », « je ne dirais pas que c'est réglé, mais j'ai beaucoup progressé ». This honesty, rare in English-style interviews, is valued in France.",
        ],
        examples: [
          { es: "C'est un point sur lequel je reste vigilante.", en: "It's something I remain careful about." },
          { es: "Je ne dirais pas que c'est réglé, mais j'ai beaucoup progressé.", en: "I wouldn't say it's solved, but I've made a lot of progress." },
          { es: "Je travaille encore sur ce point.", en: "I'm still working on it." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "It's not completely solved, but it's no longer a problem.",
            answer: "Ce n'est pas complètement réglé, mais ce n'est plus un problème.",
            altAnswers: ["Ce n'est pas entièrement réglé, mais ce n'est plus un problème.", "Ce n'est pas totalement réglé, mais ce n'est plus un problème."],
            explanation: "A balanced close: the weakness is under control (\"ce n'est plus un problème\") without being erased (\"pas complètement réglé\").",
          },
        ],
      },
      {
        heading: "A model answer: the habit and its cost",
        body: [
          "Here is Lea Moreau's complete answer, as a project manager. First the weakness, the old habit and what it cost: « Mon principal axe d'amélioration, c'est la délégation. Pendant longtemps, mon premier réflexe était de tout faire moi-même, par souci de qualité. Il y a deux ans, cela m'a valu de finir un projet complètement épuisée, alors que mon équipe aurait pu prendre une bonne partie du travail. »",
        ],
        examples: [
          { es: "Mon principal axe d'amélioration, c'est la délégation.", en: "My main area for improvement is delegating." },
          { es: "Mon premier réflexe était de tout faire moi-même, par souci de qualité.", en: "My first instinct was to do everything myself, out of concern for quality." },
          { es: "Cela m'a valu de finir un projet complètement épuisée.", en: "It meant I finished a project completely exhausted." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "J'aurais pu demander de l'aide plus tôt.",
            question: "What does it mean?",
            options: ["I could have asked for help sooner.", "I was able to ask for help sooner.", "I will be able to ask for help sooner.", "I should ask for help sooner."],
            correctIndex: 0,
            explanation: "The past conditional \"j'aurais pu\" names the alternative that did not happen: I could have.",
          },
        ],
      },
      {
        heading: "A model answer: the plan and the close",
        body: [
          "Then the plan and a balanced close: « Depuis, je me suis fait accompagner par mon manager, je répartis les tâches dès le lancement et je fixe des points d'étape hebdomadaires. Je ne dirais pas que c'est entièrement réglé, mais c'est devenu un point de vigilance plutôt qu'un frein. »",
        ],
        examples: [
          { es: "Mon équipe aurait pu prendre une bonne partie du travail.", en: "My team could have taken a good part of the work." },
          { es: "C'est devenu un point de vigilance plutôt qu'un frein.", en: "It has become something I keep an eye on rather than an obstacle." },
          { es: "Je répartis les tâches dès le lancement.", en: "I share out the tasks from the start." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "My colleagues could have helped me.",
            answer: "Mes collègues auraient pu m'aider.",
            altAnswers: ["Mes collègues auraient pu me donner un coup de main.", "Mes collègues auraient pu m'épauler."],
            explanation: "The past conditional of \"pouvoir\" (\"auraient pu\") shows the cost of the old habit: help was there.",
          },
        ],
      },
      {
        heading: "Map the answer",
        body: [
          "Map it: the HR term (\"axe d'amélioration\"), the imparfait for the old habit (\"mon premier réflexe était\"), a dated example in the passé composé with its cost (\"cela m'a valu de\", which means it cost me or earned me), a conditional past for the alternative (\"aurait pu\"), the plan in the present after \"depuis\", and a balanced close contrasting \"un point de vigilance\" with \"un frein\" (a brake, an obstacle).",
        ],
        examples: [
          { es: "Cela m'a valu une remarque de mon directeur.", en: "It earned me a comment from my director." },
          { es: "Mon premier réflexe était de tout vérifier.", en: "My first instinct used to be to check everything." },
          { es: "Ce retard m'a valu de perdre un client.", en: "That delay cost me a client." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "That mistake [cost me] a weekend of work.",
            sentence: "Cette erreur ___ un week-end de travail.",
            answer: "m'a valu",
            altAnswers: ["m'a coûté"],
            explanation: "\"Valoir quelque chose à quelqu'un\" means to cost or earn them something: \"cela m'a valu\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "My first instinct is to say yes to everything.",
        answer: "Mon premier réflexe est de dire oui à tout.",
        altAnswers: ["Mon premier réflexe, c'est de dire oui à tout.", "Mon premier réflexe est de tout accepter."],
        explanation: "\"Mon premier réflexe est de\" + infinitive describes a habit without labelling yourself.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Negotiating has never been my strong point.",
        explanation: "A real but non-disqualifying weakness, stated plainly.",
        words: ["La négociation", "n'a jamais été", "mon point fort."],
        translation: "Negotiating has never been my strong point.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: It's a skill I keep working on.",
        words: ["C'est", "une compétence", "sur laquelle", "je continue de travailler."],
        translation: "It's a skill I keep working on.",
        explanation: "\"Travailler sur\" gives \"sur laquelle\" (feminine, for \"compétence\").",
      },
      {
        type: "dictation",
        audio: "Il m'arrive de manquer de patience.",
        explanation: "\"Il m'arrive de\" (I sometimes) describes a habit rather than a trait.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        answer: "je me fais accompagner",
        altAnswers: ["Depuis, je suis accompagné par un coach.", "Depuis, je suis accompagnée par un coach.", "Depuis, je travaille avec un coach.", "Depuis, je me fais accompagner par une coach.", "Depuis, je travaille avec une coach."],
        explanation: "\"Se faire accompagner\" (to get support); \"depuis\" + present for an ongoing practice.",
        en: "Since then, [I've been working with] a coach.",
        sentence: "Depuis, ___ par un coach.",
      },
      {
        type: "speak",
        text: "Ce n'est pas encore parfait, mais je progresse chaque mois.",
        prompt: "Say it in French: It's not perfect yet, but I'm improving every month.",
        tip: "\"Dirais\" ends in an open è sound.",
        explanation: "A balanced close: under control, not erased.",
      },
      {
        type: "speak",
        text: "Depuis, je veille à déléguer davantage et à faire confiance à mon équipe.",
        prompt: "Say it in French: Since then I make sure to delegate more and to trust my team.",
        tip: "\"Davantage\": da-van-tage, nasal an in the middle.",
        explanation: "\"Veiller à\" + infinitive, repeated before each infinitive (\"à déléguer... et à faire\").",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It is no longer an obstacle, just something I keep an eye on.",
        answer: "Ce n'est plus un frein, juste un point de vigilance.",
        altAnswers: ["Ce n'est plus un frein, simplement un point de vigilance.", "Ce n'est plus un obstacle, juste un point de vigilance."],
        explanation: "\"Un frein\" (a brake) against \"un point de vigilance\": the weakness is under control.",
      },
    ],
  },
  {
    slug: "c2-job-interview-3",
    level: "FR-C2",
    number: 5,
    title: "L'Entretien d'Embauche, Part 3 of 7",
    summary: "Competency questions (« Parlez-moi d'une situation où vous avez dû... ») answered with the STAR method in French, a precise tense map, and a closing lesson learned.",
    duration: "20 min",
    sections: [
      {
        heading: "Behavioural questions",
        body: [
          "Competency-based (behavioural) questions have become standard in French recruitment, especially in large groups and the public sector. They come in recognisable forms: « Parlez-moi d'une situation où vous avez dû gérer un conflit », « Racontez-moi une fois où vous avez échoué », « Donnez-moi un exemple de projet que vous avez mené dans l'urgence », « Comment avez-vous réagi lorsque... ? ».",
        ],
        examples: [
          { es: "Parlez-moi d'une situation où vous avez dû gérer un client mécontent.", en: "Tell me about a time when you had to deal with an unhappy client." },
          { es: "Racontez-moi une fois où vous avez dû prendre une décision impopulaire.", en: "Tell me about a time you had to make an unpopular decision." },
          { es: "Comment avez-vous réagi lorsque le projet a pris du retard ?", en: "How did you react when the project fell behind schedule?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does « Racontez-moi une fois où vous avez échoué » call for?",
            options: ["A concrete story about a real situation", "A list of your qualities", "A general reflection on failure", "A polite refusal to answer"],
            correctIndex: 0,
            explanation: "Competency questions ask for one real situation, told as a story: what happened, what you did, what came of it.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a recruiter, formally).",
            source: "Tell me about a time when you had to meet a very tight deadline.",
            answer: "Parlez-moi d'une situation où vous avez dû tenir un délai très serré.",
            altAnswers: ["Parlez-moi d'une situation où vous avez dû respecter un délai très serré.", "Racontez-moi une situation où vous avez dû tenir un délai très serré.", "Parlez-moi d'une fois où vous avez dû tenir un délai très serré."],
            explanation: "The question uses \"où\" after \"une situation\" and the passé composé \"vous avez dû\": an obligation actually met.",
          },
        ],
      },
      {
        heading: "J'ai dû, je devais, j'aurais dû",
        body: [
          "Notice the tense in the question itself: \"où vous avez dû\" (where you had to) uses the passé composé of \"devoir\", meaning an obligation that was actually met. \"Vous deviez\" would be a background obligation, and \"vous auriez dû\" would mean you should have (and didn't). Your answer will mirror this: \"j'ai dû\" for the moment you were forced to act.",
        ],
        examples: [
          { es: "J'ai dû annoncer à l'équipe que le budget était gelé.", en: "I had to tell the team that the budget had been frozen." },
          { es: "J'aurais dû alerter ma hiérarchie plus tôt, et c'est ce que j'en ai retenu.", en: "I should have alerted my managers sooner, and that's what I took from it." },
          { es: "Je devais rendre le rapport chaque vendredi.", en: "I had to hand in the report every Friday. (background)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence means I should have warned my manager?",
            options: ["J'aurais dû prévenir mon manager.", "J'ai dû prévenir mon manager.", "Je devais prévenir mon manager.", "Je devrai prévenir mon manager."],
            correctIndex: 0,
            explanation: "\"J'aurais dû\" = should have (but didn't). \"J'ai dû\" = I had to (and did); \"je devais\" = I was supposed to; \"je devrai\" = I will have to.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I should have asked for help sooner.",
            answer: "J'aurais dû demander de l'aide plus tôt.",
            altAnswers: ["J'aurais dû demander de l'aide plus vite.", "J'aurais dû solliciter de l'aide plus tôt.", "J'aurais dû demander du soutien plus tôt.", "J'aurais dû demander de l'aide avant."],
            explanation: "Should have + past participle = past conditional of \"devoir\" + infinitive: \"j'aurais dû demander\".",
          },
        ],
      },
      {
        heading: "STAR, and je rather than nous",
        body: [
          "French recruiters call the method \"la méthode STAR\" too (some write \"SOAR\" or \"CAR\"), with the French glosses \"situation, tâche, action, résultat\". They expect a story of about two minutes, concrete, in the first person singular. A frequent mistake by candidates is to answer in \"nous\" or \"on\" throughout: the recruiter wants to know what you did. Use \"nous\" for the team context, \"je\" for the actions.",
        ],
        examples: [
          { es: "Nous étions quatre sur le projet, et c'est moi qui coordonnais les livraisons.", en: "There were four of us on the project, and I was the one coordinating deliveries." },
          { es: "Nous avions trois semaines ; j'ai réparti les tâches.", en: "We had three weeks; I shared out the tasks." },
          { es: "C'est moi qui ai rédigé le cahier des charges.", en: "I was the one who wrote the specifications." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to make your own role clear with je.",
            source: "On a renégocié le contrat avec le fournisseur.",
            answer: "J'ai renégocié le contrat avec le fournisseur.",
            explanation: "The recruiter wants your actions: keep \"nous\" or \"on\" for the team context and use \"je\" for what you did.",
          },
        ],
      },
      {
        heading: "Setting the scene: imparfait and venir de",
        body: [
          "The first two letters of STAR set the scene, and the scene is the domain of the imparfait. « En 2022, je travaillais comme chargée de clientèle dans une banque à Nantes. Notre agence venait de fusionner avec une autre, et les clients se plaignaient des délais. » \"Venir de\" in the imparfait (\"venait de fusionner\") is a precise tool for something that had just happened at the time of the story.",
        ],
        examples: [
          { es: "En 2022, je travaillais comme chargée de clientèle dans une banque à Nantes.", en: "In 2022 I was working as a client adviser in a bank in Nantes." },
          { es: "Notre agence venait de fusionner avec une autre.", en: "Our branch had just merged with another one." },
          { es: "Le service venait de changer de logiciel.", en: "The department had just changed software." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Our company [had just been] bought by an American group.",
            sentence: "Notre entreprise ___ rachetée par un groupe américain.",
            answer: "venait d'être",
            explanation: "\"Venir de\" in the imparfait = had just; with a passive infinitive: \"venait d'être rachetée\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "In 2021 I was working as a buyer in a supermarket chain.",
            answer: "En 2021, je travaillais comme acheteur dans une chaîne de supermarchés.",
            altAnswers: ["En 2021, je travaillais comme acheteuse dans une chaîne de supermarchés.", "En 2021, j'étais acheteur dans une chaîne de supermarchés.", "En 2021, j'étais acheteuse dans une chaîne de supermarchés.", "En 2021, je travaillais en tant qu'acheteur dans une chaîne de supermarchés.", "En 2021, je travaillais en tant qu'acheteuse dans une chaîne de supermarchés."],
            explanation: "The situation is background: imparfait. \"Comme\" or \"en tant que\" + job, with no article.",
          },
        ],
      },
      {
        heading: "The background behind the background",
        body: [
          "Anything that happened before the scene goes in the plus-que-parfait: « La direction avait déjà supprimé deux postes, si bien que l'équipe était sous pression. » This is the background behind the background, and English speakers often simplify it to a passé composé, which flattens the chronology.",
        ],
        examples: [
          { es: "La direction avait déjà supprimé deux postes, si bien que l'équipe était sous pression.", en: "Management had already cut two posts, so the team was under pressure." },
          { es: "Mon prédécesseur avait quitté l'entreprise sans transmettre ses dossiers.", en: "My predecessor had left the company without handing over his files." },
          { es: "Le client avait déjà annulé deux commandes.", en: "The client had already cancelled two orders." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Quand je suis arrivé, la direction a déjà fermé le site.",
            answer: "Quand je suis arrivé, la direction avait déjà fermé le site.",
            altAnswers: ["Quand je suis arrivée, la direction avait déjà fermé le site."],
            explanation: "Something that happened before the moment of the story takes the plus-que-parfait: \"avait déjà fermé\".",
          },
        ],
      },
      {
        heading: "The task: consister à, il s'agissait de",
        body: [
          "The task (la tâche) is your specific mission, often with \"on m'a confié\", \"je devais\", \"ma mission consistait à\", \"il s'agissait de\": « On m'avait confié la mission de réduire le délai de traitement des réclamations. » Note \"consister à\" + infinitive (not \"*consister de*\") and \"il s'agissait de\" (impersonal, never \"*la mission s'agissait de*\").",
        ],
        examples: [
          { es: "Ma mission consistait à réduire le délai de traitement des réclamations.", en: "My job was to reduce the time it took to handle complaints." },
          { es: "Il s'agissait de livrer le nouveau site avant le salon de septembre.", en: "The task was to deliver the new website before the September trade fair." },
          { es: "On m'avait confié la coordination de trois équipes réparties sur deux sites.", en: "I had been put in charge of coordinating three teams spread over two sites." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[The task was to] find a new supplier in two weeks.",
            sentence: "___ trouver un nouveau fournisseur en deux semaines.",
            answer: "Il s'agissait de",
            altAnswers: ["Ma mission était de", "Ma mission consistait à", "Ma tâche consistait à", "Ma tâche était de"],
            explanation: "\"Il s'agissait de\" is impersonal: the subject is always \"il\". \"*La tâche s'agissait de*\" is a frequent error.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "La mission s'agissait de former les équipes.",
            answer: "Il s'agissait de former les équipes.",
            altAnswers: ["La mission consistait à former les équipes."],
            explanation: "\"S'agir de\" is impersonal: its only subject is \"il\". With \"la mission\", use \"consister à\".",
          },
        ],
      },
      {
        heading: "Action: one step per verb",
        body: [
          "The action is the heart of the answer and should take half the time. Here the passé composé takes over, one step per verb: « J'ai d'abord analysé les réclamations des trois derniers mois. J'ai constaté que 60 % concernaient le même problème. J'ai donc proposé à ma responsable un circuit simplifié, que nous avons testé pendant un mois. » Connectors give the order: \"d'abord\", \"ensuite\", \"dans un second temps\", \"enfin\", and logic: \"donc\", \"c'est pourquoi\", \"si bien que\".",
        ],
        examples: [
          { es: "J'ai d'abord analysé les réclamations des trois derniers mois.", en: "First I analysed the last three months of complaints." },
          { es: "J'ai constaté que 60 % d'entre elles concernaient le même problème.", en: "I found that 60% of them were about the same problem." },
          { es: "J'ai donc proposé un circuit simplifié, que nous avons testé pendant un mois.", en: "So I proposed a simplified process, which we tested for a month." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a STAR answer, which sentence belongs to the action and is in the right tense?",
            options: ["J'ai organisé une réunion avec les deux équipes.", "J'organisais une réunion avec les deux équipes.", "J'avais organisé une réunion avec les deux équipes.", "J'organiserais une réunion avec les deux équipes."],
            correctIndex: 0,
            explanation: "Actions that move the story forward take the passé composé. The imparfait would make it background, the plus-que-parfait earlier background.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I first analysed the figures, then I proposed a plan to my manager.",
            answer: "J'ai d'abord analysé les chiffres, puis j'ai proposé un plan à ma responsable.",
            altAnswers: ["J'ai d'abord analysé les chiffres, puis j'ai proposé un plan à mon responsable.", "J'ai d'abord analysé les chiffres, ensuite j'ai proposé un plan à mon responsable.", "J'ai d'abord analysé les chiffres, ensuite j'ai proposé un plan à ma responsable.", "J'ai d'abord analysé les chiffres, puis j'ai proposé un plan à mon manager.", "J'ai d'abord analysé les chiffres, puis j'ai proposé un plan à ma manager.", "D'abord, j'ai analysé les chiffres, puis j'ai proposé un plan à mon responsable."],
            explanation: "The action steps are in the passé composé; \"d'abord\" sits between auxiliary and participle. \"Responsable\" works for either gender.",
          },
        ],
      },
      {
        heading: "Result: a figure, and the passive",
        body: [
          "The result comes with a figure if possible and, at the Mastery level, a perspective. « Résultat : le délai moyen est passé de quinze à six jours. » « Le dispositif a ensuite été étendu à toute la région. » The passive here is welcome: it shows the result outlived your direct involvement.",
        ],
        examples: [
          { es: "Résultat : le délai moyen est passé de quinze à six jours.", en: "The result: the average turnaround fell from fifteen to six days." },
          { es: "Le dispositif a ensuite été étendu à toute la région.", en: "The scheme was then extended to the whole region." },
          { es: "La méthode a ensuite été adoptée par deux autres services.", en: "The method was then adopted by two other departments." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Turnover went from 5 to 8 million euros.",
            answer: "Le chiffre d'affaires est passé de 5 à 8 millions d'euros.",
            altAnswers: ["Le chiffre d'affaires est passé de cinq à huit millions d'euros."],
            explanation: "\"Passer de... à...\" gives the before and after; \"passer\" takes \"être\" here.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into the passive to show the result outlived you.",
            source: "La direction a ensuite généralisé l'outil.",
            answer: "L'outil a ensuite été généralisé par la direction.",
            altAnswers: ["L'outil a ensuite été généralisé."],
            explanation: "The passive (\"a été généralisé\") puts the result first and shows it lasted beyond your own involvement.",
          },
        ],
      },
      {
        heading: "The lesson learned",
        body: [
          "French recruiters often add a fifth step, sometimes called the \"R\" of \"retour d'expérience\" (lessons learned): « Ce que j'en ai retenu, c'est que... », « Avec le recul, je... », « Si c'était à refaire, je... ». The last formula takes the conditional: « Si c'était à refaire, j'impliquerais l'équipe plus tôt. » It shows maturity and is one of the most appreciated moves in a French interview.",
        ],
        examples: [
          { es: "Si c'était à refaire, j'impliquerais l'équipe beaucoup plus tôt.", en: "If I had to do it again, I'd involve the team much earlier." },
          { es: "Avec le recul, je déléguerais davantage.", en: "With hindsight, I would delegate more." },
          { es: "Ce que j'en ai retenu, c'est l'importance de la préparation.", en: "What I took from it is the importance of preparation." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "If I had to do it again, I would plan a test phase.",
            answer: "Si c'était à refaire, je prévoirais une phase de test.",
            altAnswers: ["Si c'était à refaire, je prévoirais une phase de tests.", "Si c'était à refaire, je planifierais une phase de test."],
            explanation: "\"Si c'était à refaire\" (imparfait) is followed by the conditional: \"je prévoirais\".",
          },
        ],
      },
      {
        heading: "A model answer: situation and task",
        body: [
          "Question: « Parlez-moi d'une situation où vous avez dû gérer un client mécontent. » Answer by Karim Benali, account manager in a software firm in Toulouse, starting with the situation and the task: « Il y a deux ans, je gérais le compte d'un grand distributeur. Une mise à jour de notre logiciel avait provoqué des erreurs de facturation, et le directeur des achats menaçait de résilier le contrat. Ma mission était de sauver la relation sans engager l'entreprise sur des pénalités. »",
        ],
        examples: [
          { es: "Le directeur des achats menaçait de résilier le contrat.", en: "The purchasing director was threatening to cancel the contract." },
          { es: "Une mise à jour avait provoqué des erreurs de facturation.", en: "An update had caused billing errors." },
          { es: "Ma mission était de sauver la relation.", en: "My job was to save the relationship." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Une panne avait bloqué toutes les commandes.",
            question: "What does it mean?",
            options: ["A breakdown had blocked all the orders.", "A breakdown blocked all the orders.", "A breakdown would have blocked all the orders.", "A breakdown was blocking all the orders."],
            correctIndex: 0,
            explanation: "\"Avait bloqué\" is the plus-que-parfait: the breakdown came before the moment of the story.",
          },
        ],
      },
      {
        heading: "A model answer: action, result, lesson",
        body: [
          "Then the action, the result and the lesson: « Je l'ai appelé le jour même pour reconnaître le problème, puis j'ai organisé une réunion avec nos développeurs et ses équipes. Nous avons corrigé les erreurs en une semaine et j'ai proposé un suivi hebdomadaire pendant trois mois. Non seulement le client est resté, mais il a renouvelé son contrat pour trois ans. Ce que j'en ai retenu, c'est qu'un client mécontent attend d'abord d'être entendu. »",
        ],
        examples: [
          { es: "Je l'ai appelé le jour même pour reconnaître le problème.", en: "I called him that very day to acknowledge the problem." },
          { es: "Non seulement le client est resté, mais il a renouvelé son contrat pour trois ans.", en: "Not only did the client stay, he renewed his contract for three years." },
          { es: "Un client mécontent attend d'abord d'être entendu.", en: "An unhappy client first and foremost expects to be heard." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Not only did the client stay, but he also recommended us.",
            answer: "Non seulement le client est resté, mais il nous a aussi recommandés.",
            altAnswers: ["Non seulement le client est resté, mais en plus il nous a recommandés.", "Non seulement le client est resté, mais il nous a recommandés.", "Non seulement le client est resté, mais il nous a également recommandés."],
            explanation: "\"Non seulement... mais (aussi)\" without inversion in French, unlike English Not only did... The past participle \"recommandés\" agrees with the direct object \"nous\" placed before it (plural: the company's team).",
          },
        ],
      },
      {
        heading: "Check the architecture",
        body: [
          "Check the architecture: imparfait (\"je gérais\", \"menaçait\"), plus-que-parfait (\"avait provoqué\"), task with \"ma mission était de\", passé composé chain (\"je l'ai appelé\", \"j'ai organisé\", \"nous avons corrigé\"), result with \"non seulement... mais\", and the lesson learned. Note \"le jour même\" (that very day) and \"attend d'être entendu\" (expects to be heard).",
        ],
        examples: [
          { es: "Je l'ai rappelée le jour même.", en: "I called her back that very day." },
          { es: "Le fournisseur menaçait de tout arrêter.", en: "The supplier was threatening to stop everything." },
          { es: "Un salarié inquiet attend d'abord d'être rassuré.", en: "A worried employee first expects to be reassured." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: What I took from it is that you have to listen first.",
            words: ["Ce que", "j'en ai retenu,", "c'est", "qu'il faut", "d'abord", "écouter."],
            translation: "What I took from it is that you have to listen first.",
            explanation: "The pseudo-cleft \"ce que..., c'est que\" frames the lesson; \"en\" stands for from that experience.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "word-order",
        prompt: "Put the words in order to say: Management had just cut the budget.",
        explanation: "\"Venir de\" in the imparfait: something that had just happened at the time of the story.",
        words: ["La direction", "venait de", "réduire", "le budget."],
        translation: "Management had just cut the budget.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "My job was to reorganise the warehouse.",
        answer: "Ma mission consistait à réorganiser l'entrepôt.",
        altAnswers: ["Il s'agissait de réorganiser l'entrepôt.", "Ma mission était de réorganiser l'entrepôt.", "Ma tâche consistait à réorganiser l'entrepôt.", "Ma tâche était de réorganiser l'entrepôt.", "On m'avait confié la mission de réorganiser l'entrepôt.", "On m'avait chargé de réorganiser l'entrepôt.", "On m'avait chargée de réorganiser l'entrepôt."],
        explanation: "\"Consister à\" + infinitive, or the impersonal \"il s'agissait de\". The imparfait describes the mission as the frame of the story.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        answer: "c'est moi qui gérais",
        altAnswers: ["Nous étions cinq sur le projet, et c'était moi qui gérais le budget.", "On était cinq sur le projet, et c'est moi qui gérais le budget.", "Nous étions cinq sur le projet et c'est moi qui m'occupais du budget.", "Nous étions cinq sur le projet, et c'est moi qui m'occupais du budget.", "Nous étions cinq sur le projet, et c'est moi qui étais en charge du budget."],
        explanation: "\"Nous\" for the team, then \"c'est moi qui\" to single out your role; the verb agrees with \"moi\".",
        en: "There were five of us on the project, and [I was the one handling] the budget.",
        sentence: "Nous étions cinq sur le projet, et ___ le budget.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The process was then adopted by all the branches.",
        answer: "Le processus a ensuite été adopté par toutes les agences.",
        altAnswers: ["Le processus a ensuite été adopté dans toutes les agences.", "La procédure a ensuite été adoptée par toutes les agences."],
        explanation: "The passive shows the result spread beyond you.",
      },
      {
        type: "dictation",
        audio: "Comment avez-vous réagi lorsque votre manager est parti ?",
        explanation: "\"Comment avez-vous réagi lorsque...?\" is a typical competency question.",
      },
      {
        type: "speak",
        text: "Avec le recul, j'aurais consulté les clients plus tôt.",
        prompt: "Say it in French: With hindsight, I would have consulted the clients sooner.",
        tip: "\"Impliquerais\": the e after qu is usually silent in speech, im-pli-krè, three syllables.",
        explanation: "\"Avec le recul\" + past conditional: a mature lesson learned.",
      },
      {
        type: "speak",
        text: "Ce que j'en ai retenu, c'est qu'il faut alerter sa hiérarchie dès les premiers signaux.",
        prompt: "Say it in French: What I took from it is that you have to alert your managers at the first warning signs.",
        tip: "\"Hiérarchie\" begins with a silent h, but it's an aspirated h: \"la hiérarchie\", no elision.",
        explanation: "\"Ce que j'en ai retenu, c'est que\": the pseudo-cleft and \"en\" (from it) frame the lesson learned.",
      },
    ],
  },
  {
    slug: "c2-star-method-transformations",
    level: "FR-C2",
    number: 6,
    title: "Transformations: Le Récit par Compétences (Méthode STAR)",
    summary: "Take jumbled, flat or present-tense stories and rebuild them into tight STAR answers: reorder the steps, fix the tenses, and add the connectors that carry the logic.",
    duration: "18 min",
    sections: [
      {
        heading: "The present tense sounds like a sketch",
        body: [
          "Nervous candidates often tell a story in the present: « Je suis chef d'équipe, il y a un conflit entre deux collègues, je les réunis, ça se calme. » It's vivid but sounds like a sketch, not a professional account. Transform it into the narrative system: the frame in the imparfait, the events in the passé composé.",
        ],
        examples: [
          { es: "Je suis chef d'équipe, il y a un conflit, je les réunis.", en: "I'm team leader, there's a conflict, I bring them together. (present: a sketch)" },
          { es: "J'étais chef d'équipe dans un centre d'appels.", en: "I was a team leader in a call centre." },
          { es: "Nous avons trouvé ensemble une règle de rotation.", en: "Together we found a rotation rule." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into narrative tenses: the frame in the imparfait, the events in the passé composé.",
            source: "Je suis vendeur, un client se plaint, je le rembourse.",
            answer: "J'étais vendeur, un client s'est plaint, je l'ai remboursé.",
            altAnswers: ["J'étais vendeur ; un client s'est plaint et je l'ai remboursé.", "J'étais vendeuse, un client s'est plaint, je l'ai remboursé."],
            explanation: "The frame (\"j'étais vendeur\") takes the imparfait; each event (\"s'est plaint\", \"l'ai remboursé\") takes the passé composé.",
          },
        ],
      },
      {
        heading: "Each verb changed for a reason",
        body: [
          "« J'étais chef d'équipe dans un centre d'appels. Un conflit avait éclaté entre deux collègues au sujet des plannings. Je les ai réunis, j'ai écouté chacun séparément, puis nous avons trouvé ensemble une règle de rotation. La tension est retombée en quelques jours. » Each verb changed for a reason: \"j'étais\" (state), \"avait éclaté\" (before the story starts), \"je les ai réunis\" (step), \"est retombée\" (result).",
        ],
        examples: [
          { es: "Un conflit avait éclaté entre deux collègues au sujet des plannings.", en: "A conflict had broken out between two colleagues over the rotas." },
          { es: "La tension est retombée en quelques jours.", en: "The tension subsided within a few days." },
          { es: "Le client nous a finalement accordé un délai supplémentaire.", en: "The client eventually granted us extra time." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The tension [subsided] within a week.",
            sentence: "La tension ___ en une semaine.",
            answer: "est retombée",
            altAnswers: ["s'est apaisée", "est redescendue"],
            explanation: "\"Retomber\" takes \"être\" and agrees with \"la tension\": \"est retombée\". It's the result, so passé composé.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, in narrative tenses.",
            source: "I was in charge of stock; an ordering error had occurred, and I contacted the supplier.",
            answer: "J'étais responsable du stock ; une erreur de commande s'était produite, et j'ai contacté le fournisseur.",
            altAnswers: ["J'étais responsable des stocks ; une erreur de commande s'était produite, et j'ai contacté le fournisseur.", "J'étais responsable du stock ; une erreur de commande avait eu lieu, et j'ai contacté le fournisseur.", "J'étais responsable du stock, une erreur de commande s'était produite et j'ai contacté le fournisseur.", "J'étais chargé du stock ; une erreur de commande s'était produite, et j'ai contacté le fournisseur.", "J'étais chargée du stock ; une erreur de commande s'était produite, et j'ai contacté le fournisseur."],
            explanation: "State in the imparfait, earlier event in the plus-que-parfait (\"s'était produite\", with \"être\" as a pronominal verb), step in the passé composé.",
          },
        ],
      },
      {
        heading: "Ripple effects: pronouns, agreement, être",
        body: [
          "The ripple effects matter. Object pronouns move before the auxiliary (\"je les ai réunis\"), and the past participle agrees with a preceding direct object (\"réunis\", masculine plural; \"réunies\" if both were women). Verbs of motion and change of state take \"être\": \"la tension est retombée\".",
        ],
        examples: [
          { es: "Je les ai réunies et j'ai écouté chacune séparément.", en: "I brought them together and listened to each one separately." },
          { es: "Je les ai appelés un par un.", en: "I called them one by one." },
          { es: "La situation est revenue à la normale.", en: "The situation returned to normal." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (the two colleagues are women).",
            source: "I brought them together and listened to each of them.",
            answer: "Je les ai réunies et je les ai écoutées chacune.",
            altAnswers: ["Je les ai réunies et j'ai écouté chacune d'elles.", "Je les ai réunies et j'ai écouté chacune d'entre elles.", "Je les ai réunies, puis je les ai écoutées chacune.", "Je les ai réunies et je les ai écoutées l'une après l'autre."],
            explanation: "The direct object \"les\" comes before \"avoir\", so the participle agrees: \"réunies\", \"écoutées\" (feminine plural).",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Elle a devenu responsable du service.",
            answer: "Elle est devenue responsable du service.",
            explanation: "\"Devenir\" is a verb of change of state: it takes \"être\", and the participle agrees with the subject: \"elle est devenue\".",
          },
        ],
      },
      {
        heading: "A jumbled story",
        body: [
          "Here is a story told in the order it came to mind: « Au final, on a gagné l'appel d'offres. J'ai monté une équipe de trois personnes. C'était un appel d'offres européen, très technique. Le dossier devait être rendu en dix jours. On n'avait jamais répondu à ce type d'appel d'offres. » The facts are all there, but the recruiter has to reconstruct them.",
        ],
        examples: [
          { es: "Au final, on a gagné l'appel d'offres.", en: "In the end we won the tender. (said first: wrong place)" },
          { es: "Le dossier devait être rendu en dix jours.", en: "The bid had to be submitted within ten days." },
          { es: "C'était un appel d'offres européen, très technique.", en: "It was a highly technical European tender." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In STAR order, which part of this story should come first?",
            options: ["The situation: the tender and its deadline", "The result: we won", "The action: I built a team", "The lesson learned"],
            correctIndex: 0,
            explanation: "STAR starts with the situation (the scene and its constraints), then the task, the action and finally the result.",
          },
        ],
      },
      {
        heading: "The story in STAR order",
        body: [
          "In STAR order: « Il y a un an, nous devions répondre à un appel d'offres européen très technique, à rendre en dix jours. Nous n'avions jamais répondu à ce type de marché. On m'a confié la coordination du dossier. J'ai monté une équipe de trois personnes, j'ai réparti les chapitres et j'ai organisé un point chaque soir. Au final, nous avons remporté le marché. » The plus-que-parfait (\"nous n'avions jamais répondu\") now has its natural place as background.",
        ],
        examples: [
          { es: "Nous devions répondre à un appel d'offres européen, à rendre en dix jours.", en: "We had to respond to a European tender, due in ten days." },
          { es: "Nous n'avions jamais répondu à ce type de marché.", en: "We had never bid for this kind of contract." },
          { es: "On m'a confié la coordination du dossier.", en: "I was put in charge of coordinating the bid." },
          { es: "J'ai réparti les chapitres et j'ai organisé un point chaque soir.", en: "I shared out the sections and organised a catch-up every evening." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which version of the background sentence fits best before \"On m'a confié la coordination du dossier\" ?",
            options: ["Nous n'avions jamais répondu à ce type de marché.", "Nous n'avons jamais répondu à ce type de marché.", "Nous ne répondions jamais à ce type de marché.", "Nous n'aurons jamais répondu à ce type de marché."],
            correctIndex: 0,
            explanation: "The fact is prior to the story's moment, so plus-que-parfait: \"nous n'avions jamais répondu\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We had never worked with this client before.",
            answer: "Nous n'avions jamais travaillé avec ce client auparavant.",
            altAnswers: ["Nous n'avions jamais travaillé avec ce client avant.", "On n'avait jamais travaillé avec ce client auparavant.", "On n'avait jamais travaillé avec ce client avant.", "Nous n'avions encore jamais travaillé avec ce client."],
            explanation: "Background prior to the story: plus-que-parfait. \"Auparavant\" is the formal before (that).",
          },
        ],
      },
      {
        heading: "Register upgrades",
        body: [
          "Small register upgrades come with the reordering: \"on a gagné\" becomes \"nous avons remporté\" (\"remporter un marché, un appel d'offres, un prix\"), \"au final\" is fine in speech but \"finalement\" or \"en définitive\" are more polished, and \"on\" for the team becomes \"nous\" in a careful answer.",
        ],
        examples: [
          { es: "En définitive, nous avons remporté le marché.", en: "In the end, we won the contract." },
          { es: "C'était la première fois que l'entreprise remportait un marché européen.", en: "It was the first time the company had won a European contract." },
          { es: "Finalement, nous avons remporté le prix de l'innovation.", en: "In the end, we won the innovation prize." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it more polished: nous, remporter, en définitive.",
            source: "Au final, on a gagné le contrat avec Airbus.",
            answer: "En définitive, nous avons remporté le contrat avec Airbus.",
            altAnswers: ["Finalement, nous avons remporté le contrat avec Airbus."],
            explanation: "In a careful answer \"on\" becomes \"nous\", \"gagner\" a contract becomes \"remporter\", and \"au final\" becomes \"en définitive\" or \"finalement\".",
          },
          {
            type: "multiple-choice",
            question: "Which sentence is the most polished way to state the result?",
            options: ["Nous avons remporté l'appel d'offres.", "Au final, on l'a eu, l'appel d'offres.", "Bon, ben, ça a marché.", "L'appel d'offres, on l'a gagné, quoi."],
            correctIndex: 0,
            explanation: "\"Remporter\" is the precise collocation, and \"nous\" fits the register; the others are colloquial dislocations and fillers.",
          },
        ],
      },
      {
        heading: "Connectors that state the relation",
        body: [
          "A STAR answer should sound logical, not just chronological. Replace a chain of \"et puis\" with connectors that state the relation: cause (\"comme\", \"étant donné que\", \"faute de\"), consequence (\"si bien que\", \"de sorte que\", \"c'est pourquoi\"), opposition (\"or\", \"pourtant\", \"alors que\"), and goal (\"afin de\", \"pour que\" + subjunctive).",
        ],
        examples: [
          { es: "Faute de budget, nous avons dû internaliser la conception.", en: "For lack of budget, we had to bring the design in-house." },
          { es: "J'ai réorganisé les plannings de sorte que chacun ait un week-end sur deux.", en: "I reorganised the rotas so that everyone would have every other weekend off." },
          { es: "J'ai prévenu le client afin de préserver la relation de confiance.", en: "I warned the client in order to preserve our relationship of trust." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "For lack of time, we had to simplify the project.",
            answer: "Faute de temps, nous avons dû simplifier le projet.",
            altAnswers: ["Faute de temps, on a dû simplifier le projet.", "Par manque de temps, nous avons dû simplifier le projet.", "Par manque de temps, on a dû simplifier le projet.", "Faute de temps, nous avons été obligés de simplifier le projet."],
            explanation: "\"Faute de\" + noun with no article = for lack of. \"Nous avons dû\" = we had to (and did).",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "J'ai tout préparé pour que l'équipe peut partir à l'heure.",
            answer: "J'ai tout préparé pour que l'équipe puisse partir à l'heure.",
            explanation: "\"Pour que\" expresses a goal and takes the subjunctive: \"puisse\", not \"peut\".",
          },
        ],
      },
      {
        heading: "Or: the moment the story turns",
        body: [
          "\"Or\" is especially useful: it introduces the complicating fact, the moment the story turns. « Le lancement était prévu en mars. Or, deux semaines avant, notre fournisseur principal a fait faillite. » English has no single equivalent (now, however, but); it signals 'and here's the problem'.",
        ],
        examples: [
          { es: "Le lancement était prévu en mars. Or, notre fournisseur principal a fait faillite.", en: "The launch was planned for March. But then our main supplier went bankrupt." },
          { es: "Tout était prêt. Or, la veille, le client a changé d'avis.", en: "Everything was ready. But then, the day before, the client changed his mind." },
          { es: "Le budget était validé. Or, en juin, il a été divisé par deux.", en: "The budget had been approved. But in June it was halved." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The launch was planned for May. [But then] the supplier went bankrupt.",
            sentence: "Le lancement était prévu en mai. ___, le fournisseur a fait faillite.",
            answer: "Or",
            explanation: "\"Or\" introduces the fact that changes everything; it's a Mastery marker of a well-built narrative.",
          },
        ],
      },
      {
        heading: "Nominalise the stages",
        body: [
          "Finally, nominalise the stages to give the answer a professional crispness, as you practised in the Advanced level: instead of « après qu'on a fini de tester », say « à l'issue de la phase de test »; instead of « quand le projet a commencé », « dès le lancement du projet ». Two or three nominal phrases per answer are enough; more would sound like a report.",
        ],
        examples: [
          { es: "À l'issue de la phase de test, nous avons corrigé une vingtaine d'anomalies.", en: "At the end of the test phase, we fixed about twenty bugs." },
          { es: "Dès le lancement du projet, j'ai associé les utilisateurs.", en: "From the very start of the project, I involved the users." },
          { es: "À l'issue de la réunion, j'ai rédigé un compte rendu.", en: "At the end of the meeting, I wrote up the minutes." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the clause into a nominal phrase with dès.",
            source: "Quand la crise a commencé, j'ai prévenu la direction.",
            answer: "Dès le début de la crise, j'ai prévenu la direction.",
            altAnswers: ["Dès le déclenchement de la crise, j'ai prévenu la direction.", "Dès le début de la crise, j'ai averti la direction."],
            explanation: "Nominalising the stage (\"dès le début de la crise\") gives the answer a professional crispness.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "From the start of the merger, I met every team.",
        answer: "Dès le début de la fusion, j'ai rencontré chaque équipe.",
        altAnswers: ["Dès le début de la fusion, j'ai rencontré toutes les équipes.", "Dès le lancement de la fusion, j'ai rencontré chaque équipe."],
        explanation: "\"Dès\" + noun phrase replaces a \"quand\" clause.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: A dispute had broken out between two departments.",
        words: ["Un différend", "avait", "éclaté", "entre", "deux", "services."],
        translation: "A dispute had broken out between two departments.",
        explanation: "\"Éclater\" (to break out) with \"avoir\" here; plus-que-parfait for the background.",
      },
      {
        type: "listen-choose",
        audio: "C'était la première fois que je dirigeais une équipe.",
        question: "What does it mean?",
        options: ["It was the first time I had led a team.", "I led a team for the first time last time.", "It was the first team I wanted to lead.", "It will be the first time I lead a team."],
        correctIndex: 0,
        explanation: "\"C'était la première fois que\" + imparfait: background for the story.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I called the supplier in order to secure the deliveries.",
        answer: "J'ai appelé le fournisseur afin de sécuriser les livraisons.",
        altAnswers: ["J'ai appelé le fournisseur pour sécuriser les livraisons.", "J'ai contacté le fournisseur afin de sécuriser les livraisons."],
        explanation: "\"Afin de\" + infinitive states the goal when the subject is the same.",
      },
      {
        type: "dictation",
        audio: "Faute de personnel, nous avons fermé le samedi.",
        explanation: "\"Faute de\" + noun with no article: for lack of.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: I shared out the files and set up a weekly meeting.",
        explanation: "The action is a chain of passé composé steps, one per verb.",
        words: ["J'ai réparti", "les dossiers", "et j'ai mis en place", "une réunion hebdomadaire."],
        translation: "I shared out the files and set up a weekly meeting.",
      },
      {
        type: "speak",
        text: "Le lancement était prévu en mars. Or, deux semaines avant, notre fournisseur a fait faillite.",
        prompt: "Say it in French: The launch was planned for March. But two weeks before, our supplier went bankrupt.",
        tip: "Pause after \"Or\": it's a turning point.",
        explanation: "Imparfait for the plan, \"or\" for the twist, passé composé for the event.",
      },
      {
        type: "speak",
        text: "J'ai monté une équipe de trois personnes et j'ai organisé un point chaque soir.",
        prompt: "Say it in French: I put together a team of three and organised a catch-up every evening.",
        tip: "\"Un point\" here is a short meeting; nasal oin, final t silent.",
        explanation: "\"Monter une équipe\" (to put a team together) and \"faire / organiser un point\" (a status meeting) are everyday office French.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I reorganised the schedule so that everyone could take a holiday.",
        answer: "J'ai réorganisé le planning de sorte que chacun puisse prendre des congés.",
        altAnswers: ["J'ai réorganisé le planning pour que chacun puisse prendre des congés.", "J'ai réorganisé le planning afin que chacun puisse prendre des congés.", "J'ai réorganisé le planning de façon que chacun puisse prendre des congés.", "J'ai réorganisé le planning de sorte que chacun puisse partir en vacances.", "J'ai réorganisé le planning pour que chacun puisse partir en vacances.", "J'ai réorganisé le planning de manière à ce que chacun puisse prendre des congés."],
        explanation: "\"De sorte que\" expressing purpose takes the subjunctive (\"puisse\"); with a real result it would take the indicative.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "At the end of the training, I obtained the certification.",
        answer: "À l'issue de la formation, j'ai obtenu la certification.",
        altAnswers: ["À l'issue de la formation, j'ai décroché la certification.", "À la fin de la formation, j'ai obtenu la certification."],
        explanation: "\"À l'issue de\" + noun is a crisp, nominal way to mark the end of a stage.",
      },
    ],
  },
  {
    slug: "c2-job-interview-4",
    level: "FR-C2",
    number: 7,
    title: "L'Entretien d'Embauche, Part 4 of 7",
    summary: "Salary and conditions the French way: gross annual pay, the salary range, variable pay, the trial period, CDI and CDD, RTT, remote work, meal vouchers, the company mutuelle and the thirteenth month.",
    duration: "20 min",
    sections: [
      {
        heading: "Brut annuel",
        body: [
          "The single most important convention: in France, salaries are discussed \"en brut annuel\" (gross per year). A recruiter who asks « Quelles sont vos prétentions salariales ? » expects an answer like « autour de 48 000 euros brut annuel », often shortened to « 48 K » in speech (said « quarante-huit K », pronounced like the letter k).",
        ],
        examples: [
          { es: "Quelles sont vos prétentions salariales ?", en: "What are your salary expectations?" },
          { es: "Je me situe autour de 48 000 euros brut annuel.", en: "I'm looking at around 48,000 euros gross a year." },
          { es: "Le poste est affiché à 50 K.", en: "The job is advertised at 50K." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A recruiter asks about your salary expectations. Which answer follows French conventions?",
            options: ["Je me situe autour de 52 000 euros brut annuel.", "Je voudrais 3 200 euros net par mois.", "Je veux le maximum possible.", "Le salaire, ce n'est pas important pour moi."],
            correctIndex: 0,
            explanation: "French salaries are discussed in gross annual terms; net monthly sounds uninformed, and the last two are evasive.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (in an interview).",
            source: "My expectations are between 50,000 and 55,000 euros gross a year.",
            answer: "Mes prétentions se situent entre 50 000 et 55 000 euros brut annuel.",
            altAnswers: ["Mes prétentions salariales se situent entre 50 000 et 55 000 euros brut annuel.", "Mes prétentions sont comprises entre 50 000 et 55 000 euros brut annuel.", "Mes prétentions se situent entre 50 000 et 55 000 euros brut par an."],
            explanation: "Salaries are discussed \"en brut annuel\"; \"se situer entre... et...\" gives a range.",
          },
        ],
      },
      {
        heading: "Net mensuel",
        body: [
          "Your bank account sees \"le net mensuel\" (net per month), roughly 75% to 78% of the gross for an employee, after \"les cotisations sociales\" (social contributions) and before income tax, which since 2019 is deducted at source (\"le prélèvement à la source\").",
        ],
        examples: [
          { es: "Cela représente environ 2 700 euros net par mois.", en: "That's about 2,700 euros net a month." },
          { es: "Mon net mensuel est d'environ 3 100 euros.", en: "My net monthly pay is about 3,100 euros." },
          { es: "L'impôt est prélevé à la source.", en: "Income tax is deducted at source." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Roughly what share of gross pay does an employee receive as net pay, before income tax?",
            options: ["About 75 to 78%", "About 50%", "About 95%", "All of it"],
            correctIndex: 0,
            explanation: "Social contributions take roughly a quarter, so \"le net\" is about 75 to 78% of \"le brut\", before income tax.",
          },
        ],
      },
      {
        heading: "Salaire or rémunération",
        body: [
          "English speakers make two classic mistakes: answering in net monthly pay (« je voudrais 3 000 euros ») and leaving the recruiter to guess, or confusing \"le salaire\" with \"la rémunération\". \"La rémunération\" is the whole package: fixed salary (\"le fixe\"), variable pay (\"la part variable\", \"les primes\", bonuses), and \"les avantages\" (benefits). In job ads you'll read \"rémunération selon profil\" (pay depending on experience) or \"package attractif\".",
        ],
        examples: [
          { es: "La rémunération comprend un fixe et une part variable pouvant atteindre 15 %.", en: "The package includes a base salary and a variable part of up to 15%." },
          { es: "Les primes sont-elles indexées sur les objectifs individuels ou collectifs ?", en: "Are the bonuses tied to individual or team targets?" },
          { es: "Rémunération selon profil.", en: "Pay depending on experience." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Le salaire comprend un fixe, une part variable et des avantages.",
            answer: "La rémunération comprend un fixe, une part variable et des avantages.",
            explanation: "The whole package (base salary, variable pay, benefits) is \"la rémunération\"; \"le salaire\" is only the pay itself.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: The pay consists of a base salary and a bonus.",
            words: ["La rémunération", "se compose", "d'un fixe", "et", "d'une prime."],
            translation: "The pay consists of a base salary and a bonus.",
            explanation: "\"Se composer de\" (to consist of), with \"de\" repeated before each element: \"d'un fixe et d'une prime\".",
          },
        ],
      },
      {
        heading: "Le treizième mois",
        body: [
          "\"Le treizième mois\" is an extra month's salary, usually paid in December, which some employers and many collective agreements (\"conventions collectives\") provide. When comparing offers, ask whether a figure is « sur douze ou sur treize mois »: 39,000 euros over thirteen months means 3,000 euros gross a month plus a December bonus.",
        ],
        examples: [
          { es: "Le poste est rémunéré 42 K sur treize mois.", en: "The job pays 42K over thirteen months." },
          { es: "Le treizième mois est versé en décembre.", en: "The thirteenth month is paid in December." },
          { es: "La convention collective prévoit un treizième mois.", en: "The collective agreement provides for a thirteenth month." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A friend in Paris says her new job pays \"39 K sur treize mois\". What does she earn per month (gross), excluding the December bonus?",
            options: ["3 000 euros brut", "3 250 euros brut", "3 900 euros brut", "3 000 euros net"],
            correctIndex: 0,
            explanation: "39,000 ÷ 13 = 3,000 euros gross a month, plus a thirteenth payment in December. Net would be roughly 2,300 euros.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The salary is 40K [over thirteen months].",
            sentence: "Le salaire est de 40 K ___.",
            answer: "sur treize mois",
            altAnswers: ["sur 13 mois"],
            explanation: "\"Sur treize mois\" tells you the annual figure is split into thirteen payments, the last in December.",
          },
        ],
      },
      {
        heading: "CDI, CDD, intérim",
        body: [
          "\"Le CDI\" (contrat à durée indéterminée, a permanent contract) is still the norm and the goal; \"le CDD\" (contrat à durée déterminée) is a fixed-term contract, legally limited and normally ending with \"une indemnité de fin de contrat\" (often called \"la prime de précarité\", 10% of the total gross pay). Interim work is \"l'intérim\" (\"une mission d'intérim\"), and freelancing \"le freelance\" or \"travailler en indépendant\".",
        ],
        examples: [
          { es: "Il s'agit d'un CDD de six mois pour remplacer un congé maternité.", en: "It's a six-month fixed-term contract to cover maternity leave." },
          { es: "À l'issue du CDD, une embauche en CDI est envisageable.", en: "At the end of the fixed-term contract, a permanent position may be possible." },
          { es: "Il enchaîne les missions d'intérim depuis un an.", en: "He has been doing one temp assignment after another for a year." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "It's a nine-month fixed-term contract.",
            answer: "C'est un CDD de neuf mois.",
            altAnswers: ["Il s'agit d'un CDD de neuf mois.", "C'est un contrat à durée déterminée de neuf mois."],
            explanation: "A fixed-term contract is \"un CDD\" (masculine, like \"le contrat\"), followed by \"de\" + duration.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "At the end of a fixed-term contract, you receive [an end-of-contract payment].",
            sentence: "À la fin d'un CDD, on touche ___.",
            answer: "une indemnité de fin de contrat",
            altAnswers: ["la prime de précarité", "une prime de précarité", "l'indemnité de fin de contrat"],
            explanation: "A CDD normally ends with \"une indemnité de fin de contrat\", often called \"la prime de précarité\".",
          },
        ],
      },
      {
        heading: "The trial period and cadre status",
        body: [
          "Every contract can start with \"une période d'essai\" (a trial period), during which either side can end the contract with short notice. For a CDI, the legal maximum is two months for employees (\"employés\"), three for supervisors (\"agents de maîtrise\" and \"techniciens\") and four for \"cadres\" (managerial and professional staff), renewable once if the collective agreement allows it. \"Le statut cadre\" matters in France: it affects pension contributions, working-time rules and how you're perceived.",
        ],
        examples: [
          { es: "Le poste est proposé en CDI, avec une période d'essai de quatre mois.", en: "The job is offered on a permanent contract, with a four-month trial period." },
          { es: "La période d'essai est-elle renouvelable ?", en: "Can the trial period be renewed?" },
          { es: "Le poste relève-t-il du statut cadre ?", en: "Does the position come with managerial (cadre) status?" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[The trial period] lasts four months for managers.",
            sentence: "___ dure quatre mois pour les cadres.",
            answer: "La période d'essai",
            explanation: "\"La période d'essai\" (feminine) is at most four months for \"cadres\" on a CDI, renewable once if the agreement allows.",
          },
        ],
      },
      {
        heading: "En CDI, un CDD",
        body: [
          "Use the preposition carefully: \"être en CDI\" (to be on a permanent contract), \"signer un CDI\", \"un poste en CDD de six mois\", \"être en période d'essai\". The article is masculine (\"le contrat\"), so \"un CDI\", \"un CDD\".",
        ],
        examples: [
          { es: "Je suis actuellement en CDI, avec un préavis de trois mois.", en: "I'm currently on a permanent contract, with three months' notice." },
          { es: "Elle a signé un CDI en mars.", en: "She signed a permanent contract in March." },
          { es: "Je suis encore en période d'essai.", en: "I'm still in my trial period." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I'm currently on a permanent contract.",
            answer: "Je suis actuellement en CDI.",
            altAnswers: ["Je suis en CDI actuellement.", "Actuellement, je suis en CDI.", "Je suis actuellement en contrat à durée indéterminée."],
            explanation: "\"Être en CDI\" uses \"en\". \"Actuellement\" is a false friend: it means currently, not actually (\"en fait\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je suis sur un CDI depuis deux ans.",
            answer: "Je suis en CDI depuis deux ans.",
            explanation: "You are \"en CDI\" or \"en CDD\", with \"en\" and no article; \"sur un CDI\" is an anglicism.",
          },
        ],
      },
      {
        heading: "RTT and congés payés",
        body: [
          "\"Les RTT\" (\"réduction du temps de travail\") are extra days off granted when you work more than 35 hours a week: someone on 39 hours often gets around twenty RTT days a year, depending on the company agreement, on top of five weeks of \"congés payés\". People say « je pose une RTT » or « je suis en RTT vendredi » (the word is used in the feminine or masculine, and in the plural it means the days themselves).",
        ],
        examples: [
          { es: "Le poste ouvre droit à douze jours de RTT par an.", en: "The job comes with twelve RTT days a year." },
          { es: "Je serai en RTT vendredi, on se voit lundi.", en: "I'm taking a day off on Friday, see you Monday." },
          { es: "J'ai cinq semaines de congés payés.", en: "I have five weeks of paid leave." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I'm taking a day off in lieu on Monday.",
            answer: "Je pose une RTT lundi.",
            altAnswers: ["Je suis en RTT lundi.", "Je pose un RTT lundi.", "Je prends une RTT lundi.", "Je prends un RTT lundi.", "Je serai en RTT lundi."],
            explanation: "\"Poser une RTT\" or \"être en RTT\": the word can be masculine or feminine.",
          },
        ],
      },
      {
        heading: "Télétravail, tickets-restaurant, mutuelle",
        body: [
          "\"Le télétravail\" is negotiated in days per week: « deux jours de télétravail par semaine », « télétravail possible jusqu'à trois jours ». \"Les tickets-restaurant\" (a brand name used generically; also \"titres-restaurant\" or \"la carte déjeuner\") are meal vouchers partly paid by the employer. \"La mutuelle d'entreprise\" (company top-up health insurance) has been compulsory for private-sector employers since 2016, with at least half the cost paid by the employer. Others: \"le comité social et économique\" (CSE) and its perks, \"l'intéressement\" and \"la participation\" (profit-sharing), and the reimbursement of half your public transport pass.",
        ],
        examples: [
          { es: "Deux jours de télétravail par semaine sont possibles après la période d'essai.", en: "Two days a week of remote work are possible after the trial period." },
          { es: "L'entreprise prend en charge 60 % des tickets-restaurant.", en: "The company pays 60% of the meal vouchers." },
          { es: "La mutuelle d'entreprise couvre-t-elle aussi la famille ?", en: "Does the company health insurance also cover family members?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Is the health insurance fully paid by the employer?",
            answer: "La mutuelle est-elle entièrement prise en charge par l'employeur ?",
            altAnswers: ["La mutuelle est-elle prise en charge en totalité par l'employeur ?", "Est-ce que la mutuelle est entièrement prise en charge par l'employeur ?", "La mutuelle est-elle intégralement prise en charge par l'employeur ?"],
            explanation: "\"Prendre en charge\" (to pay for); the employer must pay at least half of \"la mutuelle d'entreprise\".",
          },
        ],
      },
      {
        heading: "Asking about benefits",
        body: [
          "Asking about these is normal and not greedy in France, as long as it comes late in the process and in neutral words: « Pourriez-vous me préciser la politique de télétravail ? », « Quels sont les avantages associés au poste ? ».",
        ],
        examples: [
          { es: "Pourriez-vous me préciser la politique de télétravail ?", en: "Could you tell me more about the remote-work policy?" },
          { es: "Quels sont les avantages associés au poste ?", en: "What benefits come with the position?" },
          { es: "Je me permets une dernière question sur les avantages.", en: "May I ask one last question about benefits?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make the question neutral and polite with pourriez-vous me préciser.",
            source: "Combien de jours de télétravail j'ai ?",
            answer: "Pourriez-vous me préciser le nombre de jours de télétravail ?",
            altAnswers: ["Pourriez-vous me préciser combien de jours de télétravail sont possibles ?"],
            explanation: "\"Pourriez-vous me préciser\" + noun asks about benefits in neutral, polite words.",
          },
        ],
      },
      {
        heading: "The offer: contract and pay",
        body: [
          "Listen to the end of an interview between Mme Garnier, HR manager at a logistics firm in Lyon, and the candidate, Hugo Martin. Mme Garnier: « Le poste est proposé en CDI, statut cadre, avec une période d'essai de quatre mois. La rémunération se compose d'un fixe de 46 000 euros brut annuel sur treize mois et d'une part variable de 10 % sur objectifs. »",
        ],
        examples: [
          { es: "La rémunération se compose d'un fixe et d'une part variable de 10 % sur objectifs.", en: "The pay consists of a base salary and a 10% target-based bonus." },
          { es: "Le poste est proposé en CDI, statut cadre.", en: "The job is offered on a permanent contract, with managerial status." },
          { es: "Le fixe est de 46 000 euros brut annuel.", en: "The base salary is 46,000 euros gross a year." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In this offer, how is the variable pay worked out?",
            options: ["10% based on targets", "46,000 euros a year", "Four months' salary", "70% of the health insurance"],
            correctIndex: 0,
            explanation: "\"Une part variable de 10 % sur objectifs\": up to 10% on top of the base, depending on targets.",
          },
        ],
      },
      {
        heading: "The offer: targets and benefits",
        body: [
          "Hugo: « Très bien. Pourriez-vous me préciser comment sont fixés les objectifs ? » Mme Garnier: « Ils sont définis chaque année lors de l'entretien annuel, moitié individuels, moitié collectifs. Vous aurez aussi deux jours de télétravail, des tickets-restaurant et une mutuelle prise en charge à 70 %. »",
        ],
        examples: [
          { es: "Pourriez-vous me préciser comment sont fixés les objectifs ?", en: "Could you tell me how the targets are set?" },
          { es: "Ils sont définis chaque année lors de l'entretien annuel.", en: "They're set every year at the annual review." },
          { es: "La mutuelle est prise en charge à 70 % par l'employeur.", en: "The employer pays 70% of the health insurance." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Les tickets-restaurant sont pris en charge à cinquante pour cent.",
            question: "What does it mean?",
            options: ["The employer pays 50% of the meal vouchers.", "The meal vouchers cover 50% of your lunch.", "The employer pays 15% of the meal vouchers.", "The meal vouchers cost the employer 50 euros."],
            correctIndex: 0,
            explanation: "\"Pris en charge à 50 %\": the employer pays half of the vouchers' value.",
          },
        ],
      },
      {
        heading: "A well-judged question",
        body: [
          "Hugo's question is well judged: specific, neutral, and focused on how the variable pay works rather than on how much he'll get. \"Comment sont fixés les objectifs\" uses stylistic inversion after \"comment\" (the subject \"les objectifs\" after the verb), common in careful French questions.",
        ],
        examples: [
          { es: "Quand la prise de poste serait-elle prévue ?", en: "When would the start date be?" },
          { es: "Comment sont calculées les primes ?", en: "How are the bonuses calculated?" },
          { es: "Où se trouvent les bureaux ?", en: "Where are the offices?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it careful with stylistic inversion after comment.",
            source: "Comment les horaires sont fixés ?",
            answer: "Comment sont fixés les horaires ?",
            altAnswers: ["Comment les horaires sont-ils fixés ?"],
            explanation: "After \"comment\", careful French puts the noun subject after the verb: \"comment sont fixés les horaires\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (a recruiter, formally).",
        source: "What salary are you hoping for?",
        answer: "Quel salaire espérez-vous ?",
        altAnswers: ["Quelle rémunération espérez-vous ?", "Quel salaire souhaitez-vous ?", "Quelle rémunération souhaitez-vous ?"],
        explanation: "A formal question with inversion: \"espérez-vous\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Do you offer a permanent contract after the trial period?",
        answer: "Proposez-vous un CDI à l'issue de la période d'essai ?",
        altAnswers: ["Proposez-vous un CDI après la période d'essai ?", "Est-ce que vous proposez un CDI à l'issue de la période d'essai ?"],
        explanation: "\"Un CDI\" (masculine) and \"à l'issue de\" (at the end of).",
      },
      {
        type: "dictation",
        audio: "Le contrat prévoit vingt jours de RTT par an.",
        explanation: "RTT days compensate for working more than 35 hours a week.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The employer pays half the cost of the meal vouchers.",
        answer: "L'employeur prend en charge la moitié du coût des tickets-restaurant.",
        altAnswers: ["L'employeur prend en charge la moitié des tickets-restaurant.", "L'employeur prend en charge 50 % des tickets-restaurant.", "L'employeur paie la moitié des tickets-restaurant.", "L'employeur finance la moitié des tickets-restaurant.", "L'employeur prend en charge la moitié du coût des titres-restaurant.", "L'employeur prend en charge la moitié des titres-restaurant."],
        explanation: "\"Prendre en charge\" is the standard verb for an employer covering a cost; \"tickets-restaurant\" or \"titres-restaurant\".",
      },
      {
        type: "speak",
        text: "Pourriez-vous me préciser comment est calculée la part variable ?",
        prompt: "Say it in French: Could you tell me how the variable pay is calculated?",
        tip: "\"Pourriez-vous\": pou-ri-é-vou, four syllables.",
        explanation: "Stylistic inversion after \"comment\": \"comment est calculée la part variable\".",
      },
      {
        type: "speak",
        text: "Le poste ouvre-t-il droit au statut cadre ?",
        prompt: "Say it in French: Does the job come with managerial status?",
        tip: "The t between \"relève\" and \"il\" is pronounced: re-lèv-til.",
        explanation: "\"Ouvrir droit à\" (to entitle to) with complex inversion: \"le poste ouvre-t-il\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Three days of remote work are possible.",
        answer: "Trois jours de télétravail sont possibles.",
        altAnswers: ["Trois jours de télétravail par semaine sont possibles.", "Il est possible de faire trois jours de télétravail."],
        explanation: "Remote work is counted in days: \"trois jours de télétravail\".",
      },
    ],
  },
  {
    slug: "c2-questions-salary-dialogue-lab",
    level: "FR-C2",
    number: 8,
    title: "Dialogue Lab: Vos Questions et Vos Prétentions",
    summary: "The last ten minutes of an interview: ask intelligent questions in the conditional, answer the salary question with poise, and close the meeting with the right formula.",
    duration: "19 min",
    sections: [
      {
        heading: "« Avez-vous des questions ? »",
        body: [
          "The scene: an interview for a post of \"responsable des achats\" at a food company near Rennes. The interviewer is M. Lambert, purchasing director; the candidate is Élodie Fournier. After forty minutes, M. Lambert asks: « Bien. Avez-vous des questions de votre côté ? » Answering « Non, tout est clair » is a mistake in France as anywhere: it suggests a lack of interest or preparation.",
        ],
        examples: [
          { es: "Avez-vous des questions de votre côté ?", en: "Do you have any questions for us?" },
          { es: "Oui, j'en ai quelques-unes.", en: "Yes, I have a few." },
          { es: "Non, tout est clair, merci.", en: "No, everything is clear, thanks. (a mistake)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "M. Lambert asks \"Avez-vous des questions ?\". What's the best reply?",
            options: ["Oui, j'en ai quelques-unes. Quelles seraient mes priorités les premiers mois ?", "Non, tout est clair, merci.", "Oui : combien de jours de congé j'aurai ?", "Oui : est-ce que j'ai le poste ?"],
            correctIndex: 0,
            explanation: "A prepared question in the conditional shows interest without presumption. \"J'en ai quelques-unes\": \"en\" replaces \"des questions\", and \"quelques-unes\" agrees with the feminine noun.",
          },
        ],
      },
      {
        heading: "Questions in the conditional",
        body: [
          "Élodie: « Oui, j'en ai quelques-unes. Tout d'abord, quelles seraient mes priorités pendant les six premiers mois ? » The conditional (\"seraient\") is the key: it projects her into the job without presuming she has it. Other good questions use the same mood: « Comment se passerait l'intégration ? », « Avec quelles équipes serais-je amenée à travailler au quotidien ? », « Qu'est-ce qui distinguerait, selon vous, une personne qui réussit dans ce poste ? ».",
        ],
        examples: [
          { es: "Quelles seraient mes priorités pendant les six premiers mois ?", en: "What would my priorities be in the first six months?" },
          { es: "Comment se passerait l'intégration ?", en: "How would onboarding work?" },
          { es: "Avec quelles équipes serais-je amenée à travailler au quotidien ?", en: "Which teams would I be working with day to day?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it project you into the job with the conditional.",
            source: "Qui est mon responsable direct ?",
            answer: "Qui serait mon responsable direct ?",
            explanation: "The conditional (\"serait\") projects you into the job without presuming you already have it.",
          },
        ],
      },
      {
        heading: "Questions to avoid",
        body: [
          "Questions to avoid at this stage: the salary (unless the recruiter has raised it), holidays and RTT as a first question, or anything you could have found on the website. And avoid \"est-ce que je vais avoir le poste ?\": prefer « Quelles sont les prochaines étapes du processus ? ».",
        ],
        examples: [
          { es: "Quelles sont les prochaines étapes du processus ?", en: "What are the next steps in the process?" },
          { es: "Est-ce que je vais avoir le poste ?", en: "Am I going to get the job? (to avoid)" },
          { es: "Combien de jours de congé j'aurai ?", en: "How many days off will I get? (too early)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which question is best at the end of a first interview?",
            options: ["Quel serait le calendrier de votre décision ?", "Est-ce que j'ai le poste ?", "Combien de RTT j'aurai ?", "Quel est le chiffre d'affaires de l'entreprise ?"],
            correctIndex: 0,
            explanation: "Ask about the process, not the outcome; holidays come later, and the turnover is on the website.",
          },
        ],
      },
      {
        heading: "The poised salary answer",
        body: [
          "M. Lambert: « Parlons rémunération. Quelles sont vos prétentions ? » Élodie has done her homework: « Compte tenu de mon expérience et des responsabilités du poste, je me situe dans une fourchette de 55 à 60 000 euros brut annuel. Cela dit, je suis ouverte à la discussion selon la part variable et les avantages proposés. »",
        ],
        examples: [
          { es: "Compte tenu de mon expérience, je me situe dans une fourchette de 55 à 60 000 euros brut annuel.", en: "Given my experience, I'm looking at a range of 55 to 60,000 euros gross a year." },
          { es: "Cela dit, je suis ouverte à la discussion selon les avantages proposés.", en: "That said, I'm open to discussion depending on the benefits offered." },
          { es: "Parlons rémunération.", en: "Let's talk about pay." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I'm looking at [a range] of 40 to 45,000 euros.",
            sentence: "Je me situe dans ___ de 40 à 45 000 euros.",
            answer: "une fourchette",
            explanation: "\"Une fourchette\" (literally a fork) is the salary range: informed and flexible at once.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "That said, I'm open to discussion.",
            answer: "Cela dit, je suis ouvert à la discussion.",
            altAnswers: ["Cela dit, je suis ouverte à la discussion.", "Ceci dit, je suis ouvert à la discussion.", "Ceci dit, je suis ouverte à la discussion.", "Cela dit, je reste ouvert à la discussion.", "Cela dit, je reste ouverte à la discussion."],
            explanation: "\"Cela dit\" (that said) introduces the opening; \"ouvert(e)\" agrees with the speaker.",
          },
        ],
      },
      {
        heading: "Justify, give a range, stay open",
        body: [
          "Three elements make this answer poised. A justification first (\"compte tenu de\", \"au vu de\", \"eu égard à\" in very formal speech). Then a range, \"une fourchette\" (literally a fork, the bracket between two figures), which sounds informed and flexible. Then an opening: \"cela dit, je suis ouvert(e) à la discussion\", \"je reste ouvert(e) selon le package global\".",
        ],
        examples: [
          { es: "Au vu des responsabilités du poste, cela me paraît cohérent.", en: "Given the responsibilities of the post, that seems consistent to me." },
          { es: "Eu égard à mon expérience, cette fourchette me paraît juste.", en: "In view of my experience, this range seems fair to me." },
          { es: "Je reste ouvert selon le package global.", en: "I remain open depending on the overall package." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Given] my experience, I'm looking at around 50K.",
            sentence: "___ mon expérience, je me situe autour de 50 K.",
            answer: "Compte tenu de",
            altAnswers: ["Au vu de", "Eu égard à"],
            explanation: "The justification comes first: \"compte tenu de\" (or \"au vu de\", \"eu égard à\") + noun.",
          },
        ],
      },
      {
        heading: "If the figure is too low",
        body: [
          "If you'd rather the recruiter spoke first, a legitimate move is: « Pourriez-vous m'indiquer la fourchette prévue pour ce poste ? » If the figure offered is too low, stay courteous: « C'est un peu en deçà de ce que j'envisageais. Y aurait-il une marge de manœuvre, par exemple sur la part variable ? » \"En deçà de\" (below) and \"une marge de manœuvre\" (room for manoeuvre) are the Mastery tools of a calm negotiation.",
        ],
        examples: [
          { es: "Pourriez-vous m'indiquer la fourchette prévue pour ce poste ?", en: "Could you tell me the salary range planned for this position?" },
          { es: "C'est un peu en deçà de ce que j'envisageais.", en: "It's a little below what I had in mind." },
          { es: "Y aurait-il une marge de manœuvre sur la part variable ?", en: "Would there be any room for manoeuvre on the variable pay?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The recruiter offers a figure below your expectations. Which reply keeps the negotiation calm?",
            options: ["C'est un peu en deçà de ce que j'envisageais. Y aurait-il une marge de manœuvre ?", "C'est ridicule, je ne viendrai pas pour si peu.", "Ah. Bon, d'accord, tant pis.", "Vous plaisantez ? Mon salaire actuel est plus élevé."],
            correctIndex: 0,
            explanation: "\"En deçà de\" states the gap neutrally, and the conditional question opens the door; the others are aggressive or give up.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Would there be [any room for manoeuvre] on the start date?",
            sentence: "Y aurait-il ___ sur la date de prise de poste ?",
            answer: "une marge de manœuvre",
            altAnswers: ["une marge de manoeuvre", "de la marge de manœuvre", "une certaine marge de manœuvre"],
            explanation: "\"Une marge de manœuvre\", with œ. The conditional \"y aurait-il\" keeps the request tentative.",
          },
        ],
      },
      {
        heading: "Closing the interview",
        body: [
          "M. Lambert: « Très bien. Nous rencontrons encore deux candidats cette semaine ; nous reviendrons vers vous d'ici le 20. » Élodie: « Parfait. Je vous remercie pour cet échange très enrichissant, qui a confirmé mon intérêt pour le poste. Je reste à votre disposition si vous avez besoin d'informations complémentaires. » M. Lambert: « Merci à vous. Je vous raccompagne. »",
        ],
        examples: [
          { es: "Je vous remercie pour cet échange très enrichissant.", en: "Thank you for this very interesting conversation." },
          { es: "Cet entretien a confirmé mon intérêt pour le poste.", en: "This interview has confirmed my interest in the position." },
          { es: "Je vous raccompagne.", en: "I'll see you out." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Nous reviendrons vers vous d'ici le vingt.",
            question: "What does it mean?",
            options: ["We'll get back to you by the 20th.", "We'll come and see you on the 20th.", "We'll come back here on the 20th.", "We came back to you on the 20th."],
            correctIndex: 0,
            explanation: "\"Revenir vers quelqu'un\" = to get back to someone; \"d'ici le 20\" = by the 20th.",
          },
        ],
      },
      {
        heading: "Revenir vers quelqu'un",
        body: [
          "\"Revenir vers quelqu'un\" (to get back to someone) is ubiquitous in French business, though purists criticise it as an anglicism; you'll hear it, so recognise it, and you can use the more classical \"nous vous recontacterons\" or \"nous vous tiendrons informé(e)\". \"D'ici le 20\" means by the 20th.",
        ],
        examples: [
          { es: "Nous reviendrons vers vous d'ici le 20.", en: "We'll get back to you by the 20th." },
          { es: "Nous vous tiendrons informée de la suite donnée à votre candidature.", en: "We'll keep you informed of the outcome of your application." },
          { es: "Nous vous recontacterons d'ici vendredi.", en: "We will contact you again by Friday." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is the more classical alternative to « nous reviendrons vers vous » ?",
            options: ["Nous vous recontacterons.", "Nous vous retournerons.", "Nous reviendrons à vous.", "Nous vous reviendrons."],
            correctIndex: 0,
            explanation: "\"Revenir vers quelqu'un\" is common but criticised; \"nous vous recontacterons\" or \"nous vous tiendrons informé(e)\" are classical.",
          },
        ],
      },
      {
        heading: "Thank, reaffirm, offer availability",
        body: [
          "Élodie's closing sentence does three things: thanks (\"je vous remercie pour cet échange\"), reaffirms interest (\"qui a confirmé mon intérêt\"), and offers availability (\"je reste à votre disposition\"). \"Un échange\" is the polite way to call an interview a conversation, and \"enrichissant\" is the standard compliment.",
        ],
        examples: [
          { es: "Je reste à votre disposition pour toute information complémentaire.", en: "I remain available should you need any further information." },
          { es: "Merci pour cet échange, qui m'a beaucoup appris.", en: "Thank you for this conversation, which taught me a lot." },
          { es: "Je reste joignable à tout moment.", en: "I can be reached at any time." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: I remain available should you need references.",
            words: ["Je reste", "à votre disposition", "si vous avez besoin", "de références."],
            translation: "I remain available should you need references.",
            explanation: "\"Je reste à votre disposition\" offers availability, the third move of a good closing.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je reste à votre disponibilité pour toute question.",
            answer: "Je reste à votre disposition pour toute question.",
            explanation: "The fixed phrase is \"rester à votre disposition\"; \"disponibilité\" is availability as a noun, not part of this formula.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (to an interviewer).",
        source: "Which tools would I be using every day?",
        answer: "Quels outils serais-je amené à utiliser au quotidien ?",
        altAnswers: ["Quels outils serais-je amenée à utiliser au quotidien ?", "Quels outils utiliserais-je au quotidien ?"],
        explanation: "\"Serais-je amené(e) à\" in the conditional projects you into the job.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (to an interviewer).",
        source: "Which projects would I be working on first?",
        answer: "Sur quels projets serais-je amené à travailler en premier ?",
        altAnswers: ["Sur quels projets serais-je amenée à travailler en premier ?", "Sur quels projets travaillerais-je en premier ?"],
        explanation: "\"Travailler sur\" gives \"sur quels projets\"; the conditional keeps it tactful.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "When could I expect an answer?",
        answer: "Quand pourrais-je espérer une réponse ?",
        altAnswers: ["Quand pourrais-je avoir une réponse ?", "Dans quels délais pourrais-je espérer une réponse ?"],
        explanation: "Ask about the next step, in the conditional, rather than whether you have the job.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Could you tell me the budget planned for the team?",
        answer: "Pourriez-vous m'indiquer le budget prévu pour l'équipe ?",
        altAnswers: ["Pourriez-vous me préciser le budget prévu pour l'équipe ?"],
        explanation: "\"Pourriez-vous m'indiquer\" + noun: a polite, precise question.",
      },
      {
        type: "dictation",
        audio: "Merci pour votre accueil et pour cet échange.",
        explanation: "\"Un échange\" is the polite word for the interview conversation.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "How would the first week go?",
        answer: "Comment se passerait la première semaine ?",
        altAnswers: ["Comment se déroulerait la première semaine ?"],
        explanation: "\"Se passer\" in the conditional: a question that projects you into the job.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We'll keep you informed.",
        answer: "Nous vous tiendrons informé.",
        altAnswers: ["Nous vous tiendrons informée.", "Nous vous tiendrons informés.", "Nous vous tiendrons informées.", "On vous tiendra informé.", "On vous tiendra informée.", "Nous vous tiendrons au courant."],
        explanation: "\"Tenir quelqu'un informé\": the adjective agrees with the person (\"informée\" for a woman). \"Tiendrons\" is the future of \"tenir\".",
      },
      {
        type: "speak",
        text: "Oui, j'en ai quelques-unes. Tout d'abord, quelles seraient mes priorités pendant les six premiers mois ?",
        prompt: "Say it in French: Yes, I have a few. First of all, what would my priorities be in the first six months?",
        tip: "\"Six premiers\": the x of six is silent before a consonant.",
        explanation: "\"En\" + \"quelques-unes\" (agreeing with \"questions\"), then a conditional question that shows you're projecting into the job.",
      },
      {
        type: "speak",
        text: "Compte tenu de mon expérience, je me situe dans une fourchette de cinquante-cinq à soixante mille euros brut annuel.",
        prompt: "Say it in French: Given my experience, I'm looking at a range of 55 to 60 thousand euros gross a year.",
        tip: "\"Compte tenu\": the p is silent, kon-te-nu.",
        explanation: "Justification, range, unit: the three elements of a poised salary answer.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It's slightly below my current salary.",
        answer: "C'est légèrement en deçà de mon salaire actuel.",
        altAnswers: ["C'est un peu en deçà de mon salaire actuel.", "C'est légèrement inférieur à mon salaire actuel."],
        explanation: "\"En deçà de\" (below) keeps the negotiation calm.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "This conversation has strengthened my motivation.",
        answer: "Cet échange a renforcé ma motivation.",
        altAnswers: ["Cet entretien a renforcé ma motivation.", "Cette discussion a renforcé ma motivation."],
        explanation: "Reaffirming interest is the second move of a good closing.",
      },
    ],
  },
];

export const FR_C2_U21_WRITING: WriteExercise = {
  type: "write",
  prompt: "You have a second-round interview for a senior post at a French company. The recruiter has sent three questions to prepare in writing beforehand: \"Présentez votre parcours\", \"Parlez-moi d'une situation où vous avez dû surmonter une difficulté importante\" and \"Quelles sont vos prétentions salariales ?\". Write your answers as one continuous text in sustained vouvoiement: a career path in the narrative tenses, a STAR story with a lesson learned, and a poised salary answer with a range.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "A career path with passé composé for steps, imparfait for context and at least one plus-que-parfait (\"j'ai rejoint\", \"l'entreprise comptait\", \"j'avais déjà\").",
    "Achievements with precise verbs and a quantified result: \"j'ai piloté\", \"j'ai su\" + infinitive, \"j'ai été amené(e) à\", \"une baisse de 20 %\".",
    "A STAR story with \"il s'agissait de\" or \"ma mission consistait à\", a turning point with \"or\", and a lesson learned (\"si c'était à refaire, je...\" + conditional).",
    "A salary answer in gross annual terms with a justification and a range (\"compte tenu de\", \"je me situe dans une fourchette de\", \"brut annuel\").",
  ],
  modelAnswer: "Après un master de gestion à Lille, j'ai rejoint en 2014 un groupe de distribution alimentaire, où je m'occupais des achats de produits frais. L'entreprise comptait alors une centaine de magasins et se développait rapidement. Comme j'avais déjà effectué un stage de six mois en Espagne, on m'a confié en 2017 les relations avec nos fournisseurs espagnols. Depuis quatre ans, je dirige le service achats d'une PME de l'agroalimentaire, avec une équipe de six collaborateurs. Le fil conducteur de mon parcours, c'est la négociation, et c'est ce qui m'amène aujourd'hui à postuler chez vous.\n\nLa difficulté la plus importante que j'aie eu à surmonter date de 2022. Nous venions de signer un contrat majeur avec une enseigne nationale. Or, notre principal fournisseur de légumes a fait faillite trois semaines avant la première livraison. Il s'agissait de trouver une solution en quelques jours sans dégrader la qualité. J'ai d'abord dressé la liste des producteurs capables de suivre, puis j'ai négocié avec trois d'entre eux un approvisionnement partagé. Nous avons livré à la date prévue, et le contrat a été renouvelé l'année suivante. Avec le recul, j'ai été amené à reconnaître que nous dépendions beaucoup trop d'un seul fournisseur : si c'était à refaire, je diversifierais nos sources bien plus tôt, et c'est d'ailleurs ce que j'ai mis en place depuis.\n\nQuant à la rémunération, compte tenu de mon expérience et des responsabilités du poste, je me situe dans une fourchette de 62 000 à 68 000 euros brut annuel. Cela dit, je reste ouvert à la discussion selon la part variable et les avantages proposés.",
  explanation: "The text keeps the interview tense map: imparfait for settings (\"je m'occupais\", \"comptait\"), plus-que-parfait for earlier background (\"j'avais effectué\"), \"venir de\" in the imparfait for what had just happened, passé composé for each step and action. \"Or\" marks the turn, the conditional (\"je diversifierais\") the lesson learned, and the subjunctive after the superlative (\"la plus importante que j'aie eu à\") adds a Mastery touch. The salary answer follows the French convention: justification, range, \"brut annuel\", then an opening with \"cela dit\".",
};
