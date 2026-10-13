// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";
import { spaced } from "./fr-units";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const FR_C2_WRITING: UnitWriting = spaced({
  "c2-legal-french-2": [
    {
      "type": "write",
      "prompt": "Your British friend Tom asks how your two-year dispute with a builder over a botched roof has gone, because he has a similar problem. Write him an informal email in French (tu) that walks him through the stages of your case: who served you or the builder the papers, which court gave the first decision, what happened on appeal, and whether anyone mentioned the Cour de cassation. Name the people of justice involved precisely, but keep the tone of a friendly email.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Names the courts in the right order and with the right article: \"le tribunal judiciaire\", \"la cour d'appel\", \"la Cour de cassation\" (with its capital).",
        "Gives each person of justice their precise role: \"le commissaire de justice\" who serves the papers, \"le greffier\", \"le magistrat\" or \"le juge\", \"mon avocate\".",
        "Uses the verbs that go with court decisions and procedure: \"rendre une décision\", \"faire appel\", \"confirmer\", \"se pourvoir en cassation\".",
        "Keeps a friendly, informal register (tu, \"bref\", \"crois-moi\") while staying legally precise."
      ],
      "modelAnswer": "Salut Tom,\n\nTu m'as demandé comment s'était terminée l'affaire du toit : voilà le résumé, ça pourra peut-être te servir.\n\nComme le couvreur refusait de reprendre ses travaux, mon avocate a d'abord fait délivrer une assignation par un commissaire de justice (l'ancien huissier, si tu préfères). L'affaire a été portée devant le tribunal judiciaire de Rennes. À l'audience, tout s'est passé très vite : le juge a écouté les deux avocats, le greffier prenait des notes, et la décision a été rendue six semaines plus tard. Le tribunal a condamné l'entreprise à me verser 9 000 euros.\n\nÉvidemment, le couvreur a fait appel. Il a fallu attendre encore un an avant que la cour d'appel ne confirme le jugement, en ajoutant même 1 500 euros de frais. Son avocat a parlé un moment de se pourvoir en cassation, mais mon avocate m'a expliqué que la Cour de cassation ne rejuge pas les faits : elle vérifie seulement que le droit a été bien appliqué. Ils ont fini par renoncer.\n\nBref, crois-moi, garde toutes tes factures et tes photos !\n\nJe t'embrasse,\nCamille",
      "explanation": "The email follows the case up the French court system: \"le tribunal judiciaire\", then \"la cour d'appel\", with \"la Cour de cassation\" explained as a judge of law, not of facts. Each actor has a precise role (\"le commissaire de justice\" serves the \"assignation\", \"le greffier\" keeps the record), and the procedural verbs collocate correctly: \"rendre une décision\", \"faire appel\", \"confirmer le jugement\", \"se pourvoir en cassation\". \"Avant que la cour d'appel ne confirme\" shows the subjunctive with the optional ne explétif."
    }
  ],
  "c2-legal-french-3": [
    {
      "type": "write",
      "prompt": "You chair the residents' association of a building in Montpellier. The town hall has just published an arrêté about night-time noise on the square below your windows, and many residents do not understand it. Write a short notice for the noticeboard (an information note) that sums up, in plain modern French, what the arrêté says: which text it is based on, why it was taken, what is now forbidden, from when, and what residents can do if it is not respected. Quote two short phrases of the original legal wording and translate them into everyday French.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Explains the anatomy of the arrêté in plain words: what the \"vu\" and the \"considérant\" correspond to, and what the \"article 1er\" decides.",
        "Turns legal style into plain French: nominalisations into verbs, \"il appartient à\" into \"c'est à... de\", \"nonobstant\" into \"malgré\".",
        "Gives precise practical information: dates, times, who to contact.",
        "Uses the impersonal and neutral register of a notice, addressed to \"les résidents\" with \"vous\"."
      ],
      "modelAnswer": "À l'attention de tous les résidents\n\nObjet : le nouvel arrêté municipal sur le bruit place Saint-Roch\n\nBeaucoup d'entre vous nous ont interrogés sur l'arrêté publié par la mairie le 3 juin. Voici ce qu'il dit, en clair.\n\nLe maire s'appuie sur le Code de la santé publique (c'est le sens des lignes qui commencent par « Vu ») et explique son choix dans les « considérant » : les plaintes des riverains se sont multipliées depuis l'an dernier.\n\nL'article 1er décide qu'à partir du 15 juin, la diffusion de musique amplifiée sur la place est interdite de 22 heures à 7 heures, « nonobstant toute autorisation antérieure ». Autrement dit : même les bars qui avaient une autorisation devront baisser le son.\n\nL'arrêté précise aussi qu'« il appartient aux exploitants de prendre toutes mesures utiles ». En français courant : c'est aux patrons des bars de faire le nécessaire, pas à vous.\n\nSi le bruit continue, vous pouvez appeler la police municipale au 04 67 34 70 00 ou nous le signaler par écrit. Nous transmettrons à la mairie.\n\nLe bureau de l'association",
      "explanation": "The notice decodes the structure of an arrêté (\"Vu\" for the legal basis, \"considérant\" for the reasons, \"article 1er\" for the decision) and translates two frozen formulas: \"nonobstant\" becomes \"même\", and \"il appartient aux exploitants de\" becomes \"c'est aux patrons des bars de\". The register stays neutral and practical, with precise dates, times and a contact."
    }
  ],
  "c2-contrast-solidaire-conjointe": [
    {
      "type": "write",
      "prompt": "Your friend Inès is about to sign, as guarantor, the lease her younger brother is taking with two flatmates in Bordeaux. The document says « caution solidaire » and the lease contains a « clause de solidarité » between the tenants. Write the conversation (dialogue) you have with her over coffee, in which you explain what she is committing to, the difference between solidaire and conjointe, and the ways out of a contract she might confuse (résilier, résoudre, annuler, se rétracter).",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Explains joint and several liability correctly: with \"solidaire\" the creditor can claim the whole debt from any one person; with \"conjointe\" each owes only their share.",
        "Uses \"caution solidaire\" and the bénéfice de discussion idea accurately (the landlord does not have to pursue the tenant first).",
        "Distinguishes at least three ways out of a contract: \"résilier\" (for the future), \"annuler\" (as if it never existed), \"se rétracter\" (within a legal cooling-off period).",
        "Is a natural dialogue in an informal register (tu, questions, reactions), punctuated with dashes or names."
      ],
      "modelAnswer": "Inès : Bon, je signe juste en bas, c'est une formalité, non ?\nMoi : Pas vraiment. Tu te portes caution solidaire : si ton frère ne paie pas, le propriétaire peut te réclamer directement le loyer, sans même essayer de le récupérer auprès de lui d'abord.\nInès : D'accord, mais seulement sa part à lui ?\nMoi : Justement, non. Le bail contient une clause de solidarité entre les trois colocataires. Ça veut dire que chacun peut être tenu de payer la totalité du loyer. Et comme tu garantis Hugo, tu peux te retrouver à payer pour les deux autres aussi.\nInès : Et si c'était conjoint ?\nMoi : Chacun ne devrait que sa part, un tiers. C'est toute la différence.\nInès : Et si je change d'avis après avoir signé, je peux me rétracter ?\nMoi : Non, le délai de rétractation existe pour certains achats, pas pour un cautionnement comme celui-là. Tu ne pourras pas non plus faire annuler l'acte, sauf vice grave. En revanche, ton frère pourra résilier le bail avec un préavis d'un mois.\nInès : Bon... je vais relire la clause avant de signer, alors.",
      "explanation": "The dialogue sets out the core contrast: with \"solidaire\", any co-debtor (and the \"caution solidaire\") can be asked for the whole sum; with \"conjoint\", each owes only a share. It also keeps the exits apart: \"se rétracter\" (a legal cooling-off period, not available here), \"faire annuler\" (the act disappears retroactively) and \"résilier\" (ends the contract for the future, with a \"préavis\"). The register is informal but the terms are exact."
    }
  ],
  "c2-legal-french-6": [
    {
      "type": "write",
      "prompt": "You and your partner have just signed a compromis de vente for a flat in Nantes at the notaire's office. Your sister, who lives abroad, wants to understand what happens next. Write her an informal email (tu) explaining the difference between the compromis and the acte authentique, the ten-day cooling-off period, the condition suspensive linked to your loan, the frais de notaire and the date of the final signature.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Contrasts the \"compromis de vente\" (an \"avant-contrat\" signed now) with \"l'acte authentique\" signed later before the notaire.",
        "Explains \"le délai de rétractation de dix jours\" and \"la condition suspensive d'obtention de prêt\" accurately, with \"à condition que\" or \"si\" + the right mood.",
        "Gives precise figures for \"les frais de notaire\" and the \"dépôt de garantie\" or \"séquestre\".",
        "Keeps an informal, warm register while using the legal terms correctly."
      ],
      "modelAnswer": "Coucou Léa,\n\nÇa y est : hier, on a signé le compromis de vente chez le notaire ! Je t'explique la suite, parce que ce n'est pas encore tout à fait fini.\n\nLe compromis, c'est un avant-contrat : le vendeur et nous, on s'engage l'un envers l'autre, mais l'appartement ne sera vraiment à nous qu'à la signature de l'acte authentique, prévue le 18 septembre, toujours chez Maître Garnier.\n\nD'ici là, on a dix jours de délai de rétractation : si on change d'avis, on peut renoncer sans rien payer. Le délai court à partir du lendemain de la réception du compromis par lettre recommandée.\n\nIl y a surtout une condition suspensive : la vente ne se fera qu'à condition que la banque nous accorde notre prêt. Si elle refuse, on récupère les 12 000 euros de dépôt de garantie, qui sont pour l'instant sous séquestre chez le notaire.\n\nQuant aux frais de notaire, il faut compter environ 7,5 % du prix, soit à peu près 21 000 euros, dont la plus grande partie revient en réalité à l'État.\n\nJe t'envoie des photos dès qu'on a les clés !\n\nBisous,\nMargaux",
      "explanation": "The email separates the two acts of a French property sale: the \"compromis\", an avant-contrat, and \"l'acte authentique\" that actually transfers ownership. It explains the ten-day \"délai de rétractation\" and the \"condition suspensive\" with \"à condition que\" + subjunctive (\"accorde\"), the money held \"sous séquestre\", and the \"frais de notaire\", noting that most of them are taxes."
    }
  ],
  "c2-pain-descriptors-word-web": [
    {
      "type": "write",
      "prompt": "For five days you have had a pain in your lower back that sometimes runs down your left leg. Your GP's surgery asks patients to describe their symptoms in writing through its secure messaging service before booking an urgent appointment. Write the message: where the pain is, what it feels like, how strong it is on the 0 to 10 scale, when it started, what makes it better or worse, and what you have already taken.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Describes the pain with precise descriptors: \"sourde\", \"lancinante\", \"aiguë\", \"en coup de poignard\", \"irradiante\" or \"qui irradie dans\", \"à type de brûlure\".",
        "Situates it in time with \"depuis\", \"il y a\", \"par intermittence\", \"continue\" or \"intermittente\".",
        "Uses the 0 to 10 scale (\"à 7 sur 10\") and what relieves or aggravates it (\"elle est soulagée par\", \"elle s'aggrave quand\").",
        "Keeps a polite, concise register suitable for a message to a doctor (\"Docteur\", \"je vous remercie\")."
      ],
      "modelAnswer": "Bonjour Docteur,\n\nJe souffre depuis cinq jours d'une douleur dans le bas du dos, à gauche. Elle a commencé lundi matin, il y a donc presque une semaine, alors que je soulevais un carton.\n\nLa plupart du temps, c'est une douleur sourde et continue, que j'évaluerais à 4 sur 10. Mais par intermittence, notamment quand je me penche ou que je tousse, elle devient aiguë, en coup de poignard, et irradie dans la fesse puis à l'arrière de la cuisse gauche, jusqu'au genou. À ces moments-là, elle monte à 7 sur 10. Depuis hier, j'ai aussi une sensation à type de brûlure le long du mollet.\n\nLa douleur est un peu soulagée quand je suis allongé sur le côté, et elle s'aggrave en position assise prolongée. Je n'ai ni fièvre ni problème urinaire.\n\nJ'ai pris du paracétamol, un gramme trois fois par jour, sans grande amélioration.\n\nPourriez-vous me recevoir rapidement ? Je vous remercie par avance.\n\nBien cordialement,\nJulien Morel",
      "explanation": "The message uses the doctor's descriptors precisely: \"sourde et continue\" for the baseline, \"aiguë, en coup de poignard\" for the peaks, \"irradie dans\" for the spread down the leg and \"à type de brûlure\" for the new sensation. Timing is given with \"depuis cinq jours\", \"il y a presque une semaine\" and \"par intermittence\", intensity on the 0 to 10 scale, and the conditional \"j'évaluerais\" softens the self-assessment politely."
    }
  ],
  "c2-contrast-technical-vs-everyday-medical": [
    {
      "type": "write",
      "prompt": "The pharmacy where you work publishes a short monthly article in its newsletter. This month's topic: « Ce que veulent dire les mots de votre compte rendu ». Write the article for patients who receive hospital reports full of jargon. Explain at least five technical terms with their everyday equivalent, say when each register is used, and reassure readers without being condescending.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Pairs at least five technical terms with their everyday equivalents (\"céphalée / mal de tête\", \"dyspnée / essoufflement\", \"prurit / démangeaisons\", \"asthénie / fatigue\", \"ecchymose / bleu\").",
        "Explains why professionals use the technical term (precision, brevity, writing to colleagues) and when the everyday word is better.",
        "Uses the register of a public-information article: a title, \"vous\", impersonal constructions (\"il arrive que\", \"il est normal de\").",
        "Ends with practical advice that invites readers to ask questions."
      ],
      "modelAnswer": "Ce que veulent dire les mots de votre compte rendu\n\nVous rentrez de l'hôpital avec un compte rendu que vous ne comprenez qu'à moitié ? C'est normal : il n'est pas d'abord écrit pour vous, mais pour votre médecin traitant.\n\nLes soignants utilisent entre eux des termes techniques, plus précis et plus brefs. Ainsi, une « céphalée » n'est rien d'autre qu'un mal de tête, et une « dyspnée » un essoufflement. Si l'on vous parle de « prurit », il s'agit de démangeaisons ; une « asthénie » désigne une fatigue anormale, qui dure ; quant à l'« ecchymose », c'est tout simplement un bleu.\n\nCes mots ne signifient pas que votre état est plus grave : « érythème » paraît inquiétant, mais il ne veut dire que « rougeur ». Le terme savant permet surtout aux médecins d'éviter toute ambiguïté.\n\nÀ l'oral, en revanche, un bon soignant choisit le mot de tous les jours. Il est donc parfaitement légitime de lui demander : « Qu'est-ce que cela veut dire, concrètement ? »\n\nN'hésitez pas non plus à nous apporter votre compte rendu : nous vous l'expliquerons volontiers, ligne par ligne.",
      "explanation": "The article pairs each technical term with its everyday equivalent (\"céphalée\" / mal de tête, \"dyspnée\" / essoufflement, \"prurit\" / démangeaisons, \"asthénie\" / fatigue, \"ecchymose\" / bleu, \"érythème\" / rougeur) and explains the division of labour: the learned word for written reports between colleagues, the everyday word when speaking to patients. \"Ne... que\" and \"rien d'autre que\" deflate the jargon without condescension."
    }
  ],
  "c2-idioms-image-word-web": [
    {
      "type": "write",
      "prompt": "Write a short anecdote for a French blog about life abroad, telling the story of a day when a misunderstanding with your French in-laws turned into a family joke. Build it around at least five idioms drawn from the body, food and animals (for example avoir la tête dans les nuages, se mettre le doigt dans l'œil, raconter des salades, ne pas être dans son assiette, avoir un chat dans la gorge, poser un lapin), each used naturally in context.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least five idioms from the body, food and animal families with their exact fixed form (\"se mettre le doigt dans l'œil\", \"raconter des salades\", \"ne pas être dans son assiette\").",
        "Makes the meaning of each idiom clear from context, without explaining it.",
        "Tells a coherent anecdote with the passé composé and imparfait, and a punchline.",
        "Keeps a lively, conversational register suitable for a blog."
      ],
      "modelAnswer": "Le jour où j'ai posé un lapin à ma belle-mère\n\nC'était mon premier dimanche chez les parents de Julien. J'avais la tête dans les nuages depuis le matin, et quand ma belle-mère m'a dit : « On se retrouve au marché à onze heures », j'ai compris « on se retrouve à la maison ». Résultat : je lui ai posé un lapin sans le savoir.\n\nQuand je suis enfin arrivée, elle m'a regardée d'un air soupçonneux. J'ai essayé de m'expliquer, mais j'avais un chat dans la gorge et je bafouillais. Mon beau-père a éclaté de rire : « Allez, elle ne te raconte pas de salades, elle s'est trompée, c'est tout ! »\n\nLe pire, c'est que je n'étais vraiment pas dans mon assiette : j'étais persuadée qu'ils me trouvaient impolie. Mais je me mettais le doigt dans l'œil. À table, ma belle-mère m'a servi deux fois du gigot et a déclaré : « Celle-là, elle a du caractère, elle ne vient pas quand on la siffle ! »\n\nDepuis, dans la famille, quand quelqu'un est en retard, on dit qu'il « fait sa Britannique ».",
      "explanation": "The anecdote weaves in idioms from the three image families: the body (\"avoir la tête dans les nuages\", \"se mettre le doigt dans l'œil\"), food (\"raconter des salades\", \"ne pas être dans son assiette\") and animals (\"poser un lapin\", \"avoir un chat dans la gorge\"). Each meaning is clear from context. The imparfait sets the scene and the passé composé moves the story forward to the punchline."
    }
  ],
  "c2-idioms-2": [
    {
      "type": "write",
      "prompt": "Two old friends, Karim and Sophie, meet by chance at a train station after a year without speaking: Karim had been upset with Sophie after she missed his wedding. Write their conversation (a dialogue) as they patch things up, using at least five idioms with fused pronouns or fixed grammar, such as en vouloir à quelqu'un, s'en sortir, en avoir marre, s'y prendre, ne pas y aller par quatre chemins, prendre la mouche, il y a anguille sous roche.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least five idioms with fused pronouns, keeping the pronoun in its exact place (\"je t'en ai voulu\", \"tu t'y es mal pris\", \"je m'en suis sortie\").",
        "Conjugates the pronominal idioms correctly in compound tenses (agreement with \"être\", position of \"en\" and \"y\").",
        "Makes the reconciliation clear: reproach, explanation, apology, reconciliation.",
        "Sounds like spoken French between friends (tu, \"bon\", \"écoute\", questions and short replies)."
      ],
      "modelAnswer": "Sophie : Karim ? Ça alors ! Ça fait un an...\nKarim : Oui. Je ne vais pas y aller par quatre chemins : je t'en ai beaucoup voulu, tu sais.\nSophie : Pour le mariage. Je sais. Et tu as eu raison.\nKarim : Tu n'as même pas appelé. Je me suis dit qu'il y avait anguille sous roche, que tu m'en voulais pour quelque chose.\nSophie : Pas du tout. Cette semaine-là, j'ai perdu mon travail, j'en avais marre de tout, je ne voulais voir personne. Je m'y suis vraiment mal prise, j'aurais dû t'expliquer.\nKarim : Pourquoi tu ne m'as rien dit ?\nSophie : J'avais peur que tu prennes la mouche, que tu croies à une excuse.\nKarim : Moi, prendre la mouche ? Jamais. Enfin... presque jamais.\nSophie : Bref, je m'en suis sortie, j'ai retrouvé un poste en mars. Et toi, la vie de couple ?\nKarim : On s'en sort très bien. Viens dîner samedi, Nadia sera ravie.\nSophie : Avec plaisir. Et cette fois, je ne te poserai pas de lapin.",
      "explanation": "The dialogue keeps each idiom's fused pronoun in place: \"je t'en ai voulu\", \"tu m'en voulais\", \"j'en avais marre\", \"je m'y suis mal prise\" (agreeing with Sophie), \"je m'en suis sortie\", \"on s'en sort\". \"Ne pas y aller par quatre chemins\", \"il y a anguille sous roche\" and \"prendre la mouche\" keep their frozen grammar, and \"avoir peur que\" takes the subjunctive (\"prennes\", \"croies\")."
    }
  ],
  "c2-proverbs-contradictory-contrast": [
    {
      "type": "write",
      "prompt": "A French personal-finance forum asks members: « Faut-il tout quitter pour réaliser son rêve ? ». Write your post. Weigh at least two pairs of contradictory proverbs (for example Qui ne tente rien n'a rien vs Prudence est mère de sûreté; Rien ne sert de courir, il faut partir à point vs Il faut battre le fer pendant qu'il est chaud), say which you think fits which situation, and give your own conclusion.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Quotes at least two pairs of contradictory proverbs in their exact traditional form.",
        "Introduces them with natural framing phrases (\"comme on dit\", \"le proverbe a beau dire que\", \"on pourrait m'objecter que\").",
        "Decides which proverb fits which situation, with conditions (\"si\", \"à condition que\" + subjunctive, \"tant que\").",
        "Has the structure and register of a forum post: a direct opening, an argued middle and a personal conclusion."
      ],
      "modelAnswer": "Bonne question, et les proverbes eux-mêmes ne sont pas d'accord !\n\nD'un côté, « qui ne tente rien n'a rien » : si l'on attend d'avoir toutes les garanties, on ne se lance jamais. De l'autre, « prudence est mère de sûreté », et je connais plus d'un ami qui a vidé son épargne pour un projet monté en trois semaines.\n\nMême chose pour le moment de partir. On vous dira qu'« il faut battre le fer pendant qu'il est chaud », et c'est vrai quand une occasion se présente : un local à céder, un associé fiable. Mais « rien ne sert de courir, il faut partir à point » : démissionner sur un coup de tête, sans clients ni trésorerie, c'est courir sans savoir où l'on va.\n\nPour ma part, je crois que les deux ont raison, à condition qu'on les applique dans le bon ordre. D'abord la prudence : tester son idée le soir et le week-end, mettre de côté un an de dépenses. Ensuite seulement l'audace, et là, il ne faut plus hésiter.\n\nBref : tentez, mais pas à l'aveugle !",
      "explanation": "The post sets two pairs of contradictory proverbs against each other (\"qui ne tente rien n'a rien\" / \"prudence est mère de sûreté\"; \"il faut battre le fer pendant qu'il est chaud\" / \"rien ne sert de courir, il faut partir à point\"), quoted in full with framing phrases (\"on vous dira que\"). Each is assigned to a situation, and the conclusion reconciles them with \"à condition qu'on les applique\" + subjunctive."
    }
  ],
  "c2-proverbs-3": [
    {
      "type": "write",
      "prompt": "Write a short modern fable in prose, in the spirit of La Fontaine, set in a French office or neighbourhood instead of the forest (for example a hard-working colleague and a show-off, or a flatterer and a vain manager). Use the passé simple for the story, give the characters animal traits or names, and end with a moral: either a line of La Fontaine you know (La raison du plus fort est toujours la meilleure, Tout flatteur vit aux dépens de celui qui l'écoute, On a souvent besoin d'un plus petit que soi...) or your own maxim in the same style.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Tells the story in the passé simple and imparfait, as a written tale.",
        "Gives the characters clear animal traits or names in the manner of La Fontaine (\"maître\", \"dame\", a capitalised animal name).",
        "Ends with a moral quoted exactly or a new maxim in the gnomic present, set apart from the narrative.",
        "Includes at least one line of direct speech that reveals the character's flaw."
      ],
      "modelAnswer": "Le Paon et la Fourmi\n\nDans une agence de communication du quartier de la Défense travaillaient deux collègues. Maître Paon, chef de projet, soignait sa cravate et ses présentations ; Dame Fourmi, discrète, préparait les dossiers que personne ne lisait.\n\nUn lundi, le directeur annonça qu'un grand client viendrait le vendredi. Maître Paon déclara aussitôt : « Laissez-moi faire, ma chère, j'ai le sens du spectacle. » Toute la semaine, il choisit des couleurs et répéta ses formules devant le miroir des toilettes. Dame Fourmi, elle, vérifia les chiffres, appela les fournisseurs et corrigea trois erreurs dans le budget.\n\nLe vendredi, le client écouta poliment les envolées du Paon, puis posa une question précise sur les coûts. Le Paon blêmit et bredouilla. Ce fut la Fourmi qui répondit, chiffres à l'appui. Le client signa le contrat et demanda qu'elle suive désormais le dossier.\n\nOn a souvent besoin d'un plus petit que soi :\nLe plumage éblouit, mais c'est le travail qui paie.",
      "explanation": "The fable follows La Fontaine's model: animal characters with titles (\"Maître Paon\", \"Dame Fourmi\"), a narrative in the passé simple (\"annonça\", \"déclara\", \"blêmit\", \"signa\") over an imparfait background, and one revealing line of direct speech. The moral is set apart, quoting La Fontaine's \"On a souvent besoin d'un plus petit que soi\" and adding a new maxim in the gnomic present."
    }
  ],
  "c2-humour-2": [
    {
      "type": "write",
      "prompt": "You have just given your first presentation in French to your new team in Lyon, and it went comically wrong: a slide in English, a microphone that whistled and a pun you did not intend. Write an email to a French friend telling the story with autodérision. Use irony (saying the opposite of what you mean), at least one pince-sans-rire understatement, and a self-mocking conclusion.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses autodérision: the narrator makes fun of their own mistakes (\"en bon/bonne débutant(e)\", \"j'ai brillé par\").",
        "Includes at least one ironic antiphrase (\"un triomphe\", \"quelle réussite\") whose real meaning is clear from context.",
        "Includes a pince-sans-rire understatement delivered flatly (\"ce fut, disons, un moment\", \"j'ai connu des débuts plus discrets\").",
        "Keeps the friendly register of an email between friends, with a closing joke."
      ],
      "modelAnswer": "Salut Mathilde,\n\nJe te dois le récit de mon grand triomphe d'hier : ma première présentation devant toute l'équipe.\n\nTout a commencé à merveille. Dès la deuxième diapositive, je me suis aperçue qu'elle était restée en anglais. Douze collègues m'ont regardée avec cette politesse lyonnaise qui veut tout dire. J'ai voulu rattraper le coup en parlant plus fort ; le micro a choisi ce moment pour siffler comme une bouilloire. J'ai connu des débuts plus discrets.\n\nPuis est venu mon chef-d'œuvre. Voulant dire que notre projet devait « prendre de la hauteur », j'ai annoncé qu'il fallait « prendre de la sauteuse ». Silence. Ensuite, un fou rire général. Mon chef a même pris des notes, sans doute pour l'anthologie.\n\nBref, j'ai brillé par mon originalité. On m'a d'ailleurs déjà surnommée « la cuisinière », ce qui, vu mes talents aux fourneaux, est presque flatteur.\n\nLa semaine prochaine, je présente le budget. Je compte sur toi pour prier.\n\nBises,\nEmma",
      "explanation": "The email is built on autodérision: the writer mocks her own blunders. \"Mon grand triomphe\", \"à merveille\" and \"mon chef-d'œuvre\" are antiphrases whose real meaning the facts make obvious; \"J'ai connu des débuts plus discrets\" is a deadpan understatement; and the last line ends the story on a self-mocking joke."
    }
  ],
  "c2-humour-dialogue-lab": [
    {
      "type": "write",
      "prompt": "At the coffee machine, your colleague Bastien teases you about your accent and your habit of arriving with a bike helmet on your head. Write the dialogue in which you first play along, then return the joke, then fail to understand one of his puns and admit it gracefully, and end on a shared laugh.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Plays along with a joke at your own expense (\"touché !\", \"bon, je l'ai bien cherché\").",
        "Returns the joke with a quick repartee of your own.",
        "Admits not getting a joke naturally (\"là, je ne te suis pas\", \"tu peux m'expliquer ? je sens qu'il y a un jeu de mots\").",
        "Sounds like natural spoken French between colleagues (tu, short turns, interjections)."
      ],
      "modelAnswer": "Bastien : Tiens, voilà notre cycliste ! Tu as gardé ton casque pour la réunion ? Prudent, avec le chef.\nMoi : Touché. Je l'ai bien cherché. Mais au moins, moi, j'arrive à l'heure.\nBastien : Ah, la ponctualité britannique ! Avec ton accent, on croirait la reine qui vient prendre son café.\nMoi : Et toi, avec le tien, on croirait un Marseillais qui fait semblant d'être lyonnais.\nBastien : Aïe ! Bien envoyé. Bon, tu veux un café ou tu restes sur ton thé ?\nMoi : Un café. Je m'intègre.\nBastien : Attention, notre machine, c'est comme le chef : elle ne sert que des serrés.\nMoi : Là, je ne te suis pas. Je sens qu'il y a un jeu de mots, mais il m'échappe complètement.\nBastien : Un serré, c'est un café très court, très concentré. Et le chef, avec les budgets, il nous tient serrés : pas un euro de trop.\nMoi : Ah ! D'accord. Je vais le replacer cet après-midi, au chef.\nBastien : Surtout pas, malheureuse !",
      "explanation": "The dialogue runs through the pragmatic responses to humour: accepting a joke at one's expense (\"Touché. Je l'ai bien cherché\"), returning it with a matching jibe, and admitting gracefully that a pun has been missed (\"Là, je ne te suis pas... il m'échappe complètement\"). Bastien's \"Aïe ! Bien envoyé\" acknowledges the comeback, and the double meaning of \"serré\" (a short, strong coffee / kept on a tight budget) is unpacked within the dialogue."
    }
  ],
  "c2-simile-to-metaphor-transformations": [
    {
      "type": "write",
      "prompt": "Write a short description of a city you know well at dawn, for a travel magazine's « Instantané » column. Move from comparison to metaphor: include at least one simile with comme or pareil à, one metaphor without a comparison word, and one métaphore filée that runs over two or three sentences, so that the image grows stronger through the text.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Includes at least one comparaison with an explicit tool (\"comme\", \"pareil à\", \"semblable à\", \"tel\").",
        "Includes at least one direct metaphor where the comparison word has disappeared.",
        "Develops one métaphore filée across several sentences with a coherent lexical field.",
        "Uses the present tense and precise sensory vocabulary, in the register of a literary travel column."
      ],
      "modelAnswer": "Marseille, six heures\n\nÀ cette heure-là, le Vieux-Port est encore pâle, comme une photographie qu'on n'aurait pas fini de développer. Les mâts des voiliers se dressent, pareils à une forêt d'allumettes plantées dans l'eau.\n\nPuis la ville ouvre un œil. Notre-Dame-de-la-Garde, sentinelle dorée, est la première à recevoir la lumière.\n\nBientôt, Marseille devient un orchestre qui s'accorde. Les rideaux de fer des cafés donnent le premier coup d'archet ; les mouettes reprennent le thème, aigu et criard ; les livreurs ajoutent leurs percussions de caisses et de diables sur le pavé. À sept heures, le chef d'orchestre invisible lève enfin la baguette, et la symphonie de la journée commence, désordonnée, bruyante, magnifique.\n\nQuand le soleil frappe la Canebière, il ne reste plus rien de la ville pâle de l'aube. Marseille a retrouvé sa voix.",
      "explanation": "The column moves from explicit similes (\"comme une photographie\", \"pareils à une forêt d'allumettes\") to direct metaphors (\"sentinelle dorée\", \"la ville ouvre un œil\") and then to a métaphore filée: the waking city as an orchestra, carried through \"s'accorde\", \"coup d'archet\", \"thème\", \"percussions\", \"chef d'orchestre\", \"baguette\" and \"symphonie\". The present tense keeps the snapshot vivid."
    }
  ],
  "c2-hyperbole-personification-style-workshop": [
    {
      "type": "write",
      "prompt": "You stayed two nights in a 'charming' country hotel in the Auvergne that was a disaster from start to finish. Write a review for a travel website in an expressive style: exaggerate with hyperbole, bring at least two objects to life with personification, and add one litote or ironic understatement for contrast. Stay funny but believable, and end with a clear verdict.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least two hyperboles (\"une éternité\", \"un froid de canard sibérien\", \"mille\").",
        "Personifies at least two inanimate things (the radiator, the shower, the bed) with verbs of human action or feeling.",
        "Includes one litote or understatement (\"ce n'était pas tout à fait le Ritz\", \"je ne suis pas sûr d'y revenir\").",
        "Has the structure of an online review: a title, the facts (dates, room), the experience and a verdict."
      ],
      "modelAnswer": "« Charmant », vraiment ?\n\nNous avons passé deux nuits, les 14 et 15 février, dans la chambre 7 de ce « charmant hôtel de campagne ». Disons-le tout de suite : ce n'était pas tout à fait le Ritz.\n\nL'accueil a duré une éternité : nous avons attendu le propriétaire si longtemps que j'ai cru voir pousser ma barbe. La chambre, elle, était glaciale. Le radiateur, visiblement en grève, soupirait toute la nuit sans jamais se décider à chauffer. Quant à la douche, elle avait son caractère : elle crachait un filet d'eau tiède, puis se vexait et s'arrêtait net dès qu'on osait la toucher.\n\nLe lit gémissait au moindre mouvement, comme s'il nous reprochait d'exister. Au petit-déjeuner, on nous a servi un croissant qui avait, sans exagérer, assisté au couronnement de Napoléon.\n\nIl faut être juste : la vue sur les volcans est sublime et le fromage, délicieux.\n\nVerdict : un cadre superbe, un confort préhistorique. Je ne suis pas certain d'y revenir.",
      "explanation": "The review mixes hyperbole (\"une éternité\", \"assisté au couronnement de Napoléon\") with personification: the radiator \"en grève\" that \"soupirait\", the shower that \"se vexait\", the bed that \"gémissait\". The litotes \"ce n'était pas tout à fait le Ritz\" and \"je ne suis pas certain d'y revenir\" provide understated contrast, and the review closes with an antithetical verdict (\"un cadre superbe, un confort préhistorique\")."
    }
  ],
  "c2-euphemisms-2": [
    {
      "type": "write",
      "prompt": "You are the communications officer of a chain of fitness clubs. Management has decided to raise prices by 15%, close two clubs in the suburbs and let go of several coaches. Write the internal communiqué announcing these measures to staff in typical corporate French, using euphemism and langue de bois where the company would (ajustement tarifaire, rationaliser, se séparer de, réorganisation), while still giving the essential facts and dates.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least four corporate euphemisms (\"ajustement tarifaire\", \"rationalisation du réseau\", \"se séparer de\", \"plan d'accompagnement\", \"évolution de l'organisation\").",
        "Uses agentless and impersonal structures to blur responsibility (passive without agent, \"il a été décidé\", nominalisations).",
        "Still contains the essential facts: figures, places and dates.",
        "Has the layout and formal register of an internal communiqué (title, \"Chers collaborateurs\", closing formula)."
      ],
      "modelAnswer": "Communiqué interne\nObjet : évolution de notre organisation\n\nChers collaboratrices, chers collaborateurs,\n\nDans un contexte économique exigeant, marqué par la hausse durable des coûts de l'énergie, il a été décidé d'engager une démarche de transformation destinée à garantir la pérennité de notre réseau.\n\nCelle-ci se traduira tout d'abord par un ajustement tarifaire de 15 % sur l'ensemble des abonnements à compter du 1er mars, afin d'accompagner la montée en gamme de nos services.\n\nPar ailleurs, une rationalisation de notre implantation géographique conduira au regroupement des activités des clubs de Bobigny et de Créteil au sein de nos sites parisiens, à partir du 30 avril.\n\nEnfin, l'évolution de notre organisation nous amènera à nous séparer de huit collaborateurs coachs. Un plan d'accompagnement personnalisé leur sera proposé, et les représentants du personnel seront associés à chaque étape.\n\nNous savons pouvoir compter sur votre engagement pour réussir ensemble cette nouvelle étape.\n\nLa Direction",
      "explanation": "The communiqué uses corporate euphemism throughout: \"ajustement tarifaire\" for a price rise, \"rationalisation de notre implantation\" and \"regroupement des activités\" for closing two clubs, \"nous séparer de\" for dismissals, softened by \"un plan d'accompagnement\". Responsibility is blurred by \"il a été décidé\", the agentless future passive and nominalisations, while the figures (15 %, eight coaches) and dates remain."
    }
  ],
  "c2-implicature-contrast": [
    {
      "type": "write",
      "prompt": "Your partner's parents have invited you to stay for a weekend at their country house. It is hot, the guest room is above the noisy farmyard, and your future father-in-law suggests a 6 a.m. hike you do not want to go on. Write the dialogue at dinner on the first evening in which you make indirect requests, refuse indirectly and soften a criticism, the way a French speaker would, without ever saying no directly. Your hosts also reply indirectly at least once.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Makes at least one indirect request (\"il fait un peu chaud ici, non ?\", \"est-ce que ça vous dérangerait si...\").",
        "Refuses indirectly at least once (\"on verra\", \"pourquoi pas une autre fois\", \"je crains de ne pas être très matinal(e)\").",
        "Softens a criticism with an implicature (\"c'est... intéressant\", \"c'est original\", the conditional of politeness).",
        "Uses vous with the parents-in-law, and the hosts also speak indirectly at least once."
      ],
      "modelAnswer": "Gérard : Alors, demain, on part à six heures pour le Puy Mary. Vous venez avec nous ?\nMoi : Ah, six heures... C'est sûrement magnifique à l'aube. On verra comment je me sens demain matin.\nGérard : Vous verrez, c'est la meilleure heure.\nMoi : Je n'en doute pas. Je crains simplement de ne pas être très matinale. Mais une autre fois, avec grand plaisir.\nMartine : Encore un peu de potée ?\nMoi : Volontiers, c'est délicieux. Dites-moi, il fait un peu chaud ce soir, non ?\nMartine : Vous avez raison. Gérard, ouvre donc la fenêtre.\nMoi : Merci beaucoup. Et la chambre est vraiment charmante. Juste au-dessus de la basse-cour, c'est... original.\nMartine : Ah, les poules se lèvent tôt, c'est vrai. Remarquez, avec elles, vous n'aurez pas besoin de réveil pour la randonnée.\nMoi : Justement, est-ce que ça vous dérangerait que je prenne la petite chambre du fond ?\nMartine : Pas du tout. Gérard, tu n'oublieras pas de déplacer le ventilateur ?\nGérard : Je vois qu'on m'a déjà attribué une mission.",
      "explanation": "The guest never says no directly: the hike is refused with \"on verra\", \"je crains de ne pas être très matinale\" and \"une autre fois\"; the heat is mentioned so that the hosts open the window (\"il fait un peu chaud ce soir, non ?\"); the room is criticised by the hesitant \"c'est... original\". The hosts reply in kind: Martine's remark about the hens is an ironic hint, and her question to Gérard is a disguised order he decodes himself."
    }
  ],
  "c2-exclamations-2": [
    {
      "type": "write",
      "prompt": "It is the evening of the day you received the keys to your first flat, which turned out to have no hot water, a broken lock and a spectacular view of the Alps. Write your diary entry. Pour out your mixed feelings using the grammar of exclamation: quel, que de, ce que, comme, si tu savais (or si j'avais su), et dire que, pourvu que, and an infinitive exclamation.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Uses at least five different exclamative structures: \"quel(le)\", \"que de\", \"ce que\" or \"comme\", \"et dire que\", \"pourvu que\" + subjunctive.",
        "Includes an infinitive exclamation (\"Moi, appeler un serrurier un dimanche !\", \"Dormir sans eau chaude !\").",
        "Keeps the word order of exclamatives (no inversion after \"comme\" or \"ce que\") and correct agreement of \"quel\".",
        "Has the personal, spontaneous tone of a diary entry, with the date."
      ],
      "modelAnswer": "Dimanche 3 octobre\n\nQuelle journée ! Je n'arrive toujours pas à y croire : j'ai mes clés. Mes clés à moi !\n\nBon, commençons par le pire. Que de mauvaises surprises en une seule après-midi ! Pas d'eau chaude, une serrure qui ne ferme qu'à moitié et une odeur de peinture à vous faire tourner la tête. Moi, appeler un serrurier un dimanche ! Et à quel prix !\n\nEt dire que l'agent immobilier m'avait juré que tout était « nickel »... Si j'avais su, j'aurais tout vérifié pendant la visite.\n\nMais alors, la vue ! Ce que c'est beau ! Ce soir, le soleil s'est couché sur les Alpes, et les sommets sont devenus roses, puis violets. Comme je me suis sentie bête de m'énerver pour une serrure ! J'ai dîné d'un sandwich assise par terre, devant la fenêtre, et j'étais heureuse.\n\nPourvu que le plombier vienne demain matin ! Se doucher à l'eau froide en octobre, quelle horreur !\n\nBon, au lit. Dans MON lit.",
      "explanation": "The entry uses the whole range of exclamatives: \"Quelle journée !\", \"Que de mauvaises surprises !\", \"Ce que c'est beau !\", \"Comme je me suis sentie bête !\" (no inversion after \"ce que\" and \"comme\"), \"Et dire que\" for indignant regret and \"Pourvu que le plombier vienne\" with the subjunctive. \"Moi, appeler un serrurier un dimanche !\" and \"Se doucher à l'eau froide en octobre\" are infinitive exclamations."
    }
  ],
  "c2-suffixes-2": [
    {
      "type": "write",
      "prompt": "You rented a holiday flat on the Côte d'Azur that looked luxurious online and turned out to be shabby. Write a scathing but funny online review using pejorative and intensifying affixes: at least two suffixes such as -ard, -asse, -âtre, -aud or a verb in -ailler / -asser, and at least two intensifying prefixes (super-, hyper-, archi-, ultra-, méga-) or the jocular -issime.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Uses at least two pejorative suffixes with their contemptuous or approximate value (\"blanchâtre\", \"une paperasse\", \"criard\", \"rêvasser\", \"traînasser\").",
        "Uses at least two intensifying prefixes or \"-issime\" (\"archi-plein\", \"hyper-bruyant\", \"rarissime\").",
        "Spells each derived word correctly, with a hyphen only where usage requires it.",
        "Has the shape of a review: a title, the facts, a verdict and a rating."
      ],
      "modelAnswer": "« Appartement de standing » : archifaux !\n\nSur les photos, un studio lumineux avec vue mer. Dans la réalité, une cuisine aux murs jaunâtres, un rideau d'un rose criard et une moquette d'un gris douteux. La « vue mer », c'est un bout de bleu entre deux immeubles, à condition de se pencher dangereusement du balcon.\n\nLe propriétaire, un vantard plein d'assurance, nous avait promis un quartier « ultracalme ». Nous avons eu droit à un bar hyper-bruyant jusqu'à trois heures du matin et à une bande de fêtards qui braillaient dans la rue.\n\nPour récupérer la caution, il a fallu remplir une paperasse invraisemblable, et il a encore trouvé le moyen de nous retenir vingt euros pour « usure de la vaisselle ». La vaisselle, justement, était ébréchée et grisâtre.\n\nSeuls points positifs : la literie, correcte, et la boulangerie d'en bas, excellentissime.\n\nNote : 1/5. À éviter, sauf si vous aimez rêvasser devant un mur.",
      "explanation": "The review piles up pejorative suffixes: \"-âtre\" for dubious colours (\"jaunâtres\", \"grisâtre\"), \"-ard\" for loud or contemptible things and people (\"criard\", \"vantard\", \"fêtards\"), \"-asse\" in \"une paperasse\", and the verb \"rêvasser\". Intensity comes from \"archifaux\", \"ultracalme\" (welded) and \"hyper-bruyant\" (with a hyphen, as is common), and the jocular superlative \"excellentissime\" praises the bakery."
    }
  ],
  "c2-business-idioms-1": [
    {
      "type": "write",
      "prompt": "You have just come out of a project meeting about the launch of a new mobile app. Your colleague Nadia, who missed it, asks you what happened. Write her an informal email between colleagues summarising the meeting with at least five idioms of projects and meetings (faire le point, avoir le feu vert, mettre la main à la pâte, avoir du pain sur la planche, être sur la même longueur d'onde, avoir le vent en poupe, être dans le rouge).",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Uses at least five project idioms in their exact form and in context (\"on a eu le feu vert\", \"on a du pain sur la planche\").",
        "Conjugates and adapts each idiom correctly (\"tout le monde devra mettre la main à la pâte\").",
        "Gives the concrete content of the meeting: decisions, deadlines, who does what.",
        "Keeps the friendly but professional register of an email between colleagues (tu, \"bref\", \"je te tiens au courant\")."
      ],
      "modelAnswer": "Salut Nadia,\n\nJe te fais un petit point sur la réunion de ce matin, puisque tu n'as pas pu venir.\n\nBonne nouvelle d'abord : on a enfin eu le feu vert de la direction pour lancer l'appli le 15 mai. Le projet a le vent en poupe depuis les bons retours des tests, et pour une fois, le marketing et l'équipe technique étaient sur la même longueur d'onde.\n\nEn revanche, on a du pain sur la planche. Le budget est déjà presque dans le rouge à cause des retards du prestataire, donc pas question d'embaucher : tout le monde devra mettre la main à la pâte, y compris les chefs. Thomas reprend les tests sur Android, Inès s'occupe des textes de l'appli, et moi, je gère le calendrier.\n\nLe chef souhaiterait que tu prennes en charge la communication sur les réseaux sociaux. On refera le point tous ensemble jeudi à 10 heures.\n\nBref, ça va être sportif, mais on y croit ! Je te tiens au courant.\n\nBonne journée,\nLéo",
      "explanation": "The email uses project idioms naturally and correctly adapted: \"faire un petit point\", \"avoir le feu vert\", \"avoir le vent en poupe\", \"être sur la même longueur d'onde\", \"avoir du pain sur la planche\", \"être dans le rouge\", \"mettre la main à la pâte\". Around them it gives precise content (date, roles, next meeting), and \"souhaiterait que tu prennes\" adds a polite conditional with the subjunctive."
    }
  ],
  "c2-business-idioms-2": [
    {
      "type": "write",
      "prompt": "Your small design agency has just survived a difficult year: you lost your biggest client, had to cut costs and nearly closed, but a partner company helped you with new contracts. At the end-of-year drinks, you give a short, warm speech to the team. Use at least five risk and crisis idioms (jeter l'éponge, sauver les meubles, éteindre l'incendie, mettre la clé sous la porte, renvoyer l'ascenseur, prendre le train en marche) and thank people precisely.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least five crisis idioms correctly in context, including in the negative or the conditional (\"nous aurions pu mettre la clé sous la porte\", \"personne n'a jeté l'éponge\").",
        "Tells the year in order with the past tenses and an unreal past conditional.",
        "Thanks specific people with precise reasons.",
        "Has the oral rhythm of a speech: address to the audience, short sentences, a toast at the end."
      ],
      "modelAnswer": "Chers tous,\n\nJe serai bref, promis : le buffet nous attend.\n\nIl y a un an, à la même époque, nous avons perdu notre plus gros client. Je ne vous cache pas qu'à ce moment-là, j'ai cru que nous allions devoir mettre la clé sous la porte. Beaucoup d'agences auraient jeté l'éponge. Pas vous.\n\nPendant des mois, nous avons passé notre temps à éteindre des incendies : des factures à négocier, des projets à reprendre en urgence, des économies partout. Nous avons d'abord sauvé les meubles, puis, petit à petit, nous avons reconstruit.\n\nJe veux remercier Sarah, qui a tenu les comptes avec un calme olympien, et Malik, qui a convaincu trois nouveaux clients en plein mois d'août. Et je veux saluer nos amis de l'agence Lumen, qui nous ont confié deux contrats quand personne ne croyait plus en nous. Un jour, nous leur renverrons l'ascenseur, c'est une promesse.\n\nQuant aux nouveaux, qui ont pris le train en marche en septembre : bienvenue, vous arrivez au bon moment !\n\nAlors levons nos verres : à nous, et à l'année prochaine !",
      "explanation": "The speech runs through the crisis idioms: \"mettre la clé sous la porte\" (with the future in the past \"allions devoir\"), \"auraient jeté l'éponge\" (unreal conditional), \"éteindre des incendies\", \"sauver les meubles\", \"renvoyer l'ascenseur\" and \"prendre le train en marche\". Short sentences (\"Pas vous.\"), direct address and a closing toast give it the rhythm of a spoken speech."
    }
  ],
  "c2-infer-unknown-word-text-detective": [
    {
      "type": "write",
      "prompt": "A French language blog invites learners to share « un mot que j'ai deviné ». Write a post telling how you met a rare word in a newspaper article or a novel (for example une gabegie, s'esbaudir, un baragouin, indéboulonnable), quote the sentence, and explain step by step how you worked out its meaning from its parts, the context and the tone, before checking in the dictionary.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Quotes the original sentence correctly with French guillemets.",
        "Explains the inference from morphology (prefix, root, suffix), from context and from tone or text type.",
        "Uses the language of hypothesis and deduction (\"j'en ai déduit que\", \"il devait s'agir de\", \"tout laissait penser que\", \"vraisemblablement\").",
        "Says whether the guess was confirmed and what was learned, in the register of a personal blog post."
      ],
      "modelAnswer": "Un mot que j'ai deviné : « indéboulonnable »\n\nLa semaine dernière, je lisais un article du Monde sur un maire réélu pour la sixième fois, quand je suis tombée sur cette phrase : « À soixante-dix-huit ans, l'édile semble plus indéboulonnable que jamais. »\n\nJe n'avais jamais vu ce mot, mais je ne me suis pas précipitée sur le dictionnaire. J'ai d'abord découpé le mot. « In- » et « -able », je connaissais : « qu'on ne peut pas... ». Au milieu, « déboulonner » : « dé- » enlève quelque chose, et un « boulon », c'est la pièce qui fixe une machine ou une statue. Déboulonner, c'est donc démonter.\n\nLe contexte confirmait cette piste : un homme âgé, réélu six fois, qui ne quitte pas son poste. Le ton, légèrement ironique, laissait aussi penser que le journaliste ne trouvait pas cela entièrement positif. J'en ai déduit qu'il s'agissait de quelqu'un qu'on ne peut pas faire tomber de sa place.\n\nLe dictionnaire m'a donné raison, en ajoutant que « déboulonner » s'emploie au figuré pour les personnalités qu'on chasse de leur position. Depuis, je vois des statues partout !",
      "explanation": "The post shows the three inference routes: morphology (\"in-\" + \"dé-\" + \"boulon\" + \"-able\"), context (an old mayor re-elected six times) and tone (the journalist's irony). The language of deduction (\"cette piste\", \"laissait penser que\", \"j'en ai déduit qu'il s'agissait de\") frames the reasoning, and the dictionary confirms the figurative sense of \"déboulonner\"."
    }
  ],
  "c2-comprehension-strategies-3": [
    {
      "type": "write",
      "prompt": "Write a short anecdote for a literary magazine's « Instants » column about a small scene you witnessed on a train or in a café. Write it in a sober, elliptical style: express cause, consequence, opposition and concession without explicit connectors (no parce que, donc, mais, bien que), using juxtaposition, the colon, the gérondif, a participle clause and simple word order instead.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Expresses at least one cause or consequence through the colon or juxtaposition alone.",
        "Expresses an opposition or concession implicitly (juxtaposition of contrasting clauses, \"il avait beau\", or simple order).",
        "Uses at least one gérondif and one participle clause to carry a logical link (cause, time, condition).",
        "Avoids the explicit connectors \"parce que\", \"donc\", \"mais\" and \"bien que\", and keeps a sober, literary narration."
      ],
      "modelAnswer": "Le billet\n\nTrain de 7 h 12, Lyon–Grenoble. Une vieille dame cherche sa place, son billet à la main. Le contrôleur arrive : elle n'a pas composté.\n\nIl lui explique le règlement d'une voix lasse. Elle ne répond pas, elle sourit. Il insiste ; elle sourit encore. Les voyageurs lèvent les yeux de leur téléphone, gênés.\n\nSortant enfin de son sac une enveloppe jaunie, elle la lui tend. Il l'ouvre en soupirant. À l'intérieur, une photo : un jeune homme en uniforme de la SNCF, en 1962, sur ce même quai.\n\n« Mon mari. Il a fait cette ligne pendant trente ans. »\n\nLe contrôleur reste un moment immobile. Il a son carnet d'amendes à la main ; il le range. Il touche le bord de sa casquette, lui rend l'enveloppe, passe au wagon suivant.\n\nEn descendant à Grenoble, j'ai cherché la vieille dame des yeux. Elle avait disparu, déjà fondue dans la foule.",
      "explanation": "Every logical link stays implicit. The colon gives the cause (\"Le contrôleur arrive : elle n'a pas composté\"), juxtaposition carries opposition (\"Elle ne répond pas, elle sourit\") and concession (\"Il avait son carnet d'amendes à la main ; il le range\"), the participle clause \"Sortant enfin de son sac une enveloppe jaunie\" marks time, and the gérondifs \"en soupirant\" and \"en descendant\" carry manner and time. None of \"parce que\", \"donc\", \"mais\" or \"bien que\" appears."
    }
  ],
  "c2-comprehension-strategies-6": [
    {
      "type": "write",
      "prompt": "Write a short news article in the style of a dépêche or brève for a regional daily, about a local event of your choice (for example a bridge closed for repairs, a festival cancelled because of the weather, or a school that has banned mobile phones). Include the paratext that allows fast reading: a title, a chapô (lead paragraph) answering who, what, when, where and why, then the body with the details in decreasing order of importance and one attributed quotation.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Has a short informative title and a chapô that answers qui, quoi, quand, où and pourquoi.",
        "Orders the body as an inverted pyramid, from the essential to the details.",
        "Uses the neutral journalistic register: passé composé, the present for current facts, the hearsay conditional for unconfirmed information.",
        "Includes one quotation attributed with a precise reporting verb (\"précise\", \"indique\", \"souligne\")."
      ],
      "modelAnswer": "Annecy : le pont des Amours fermé jusqu'à l'été\n\nLe pont des Amours, l'un des sites les plus photographiés d'Annecy, est fermé au public depuis lundi pour des travaux de consolidation. La mairie a pris cette décision après la découverte de fissures sur l'une des piles de l'ouvrage.\n\nLes travaux devraient durer quatre mois, pour un coût estimé à 850 000 euros, financé en partie par le département. Un passage provisoire a été aménagé à une centaine de mètres en aval, le long du canal.\n\n« Il n'y a aucun danger immédiat, mais nous ne voulons prendre aucun risque à l'approche de la saison touristique », précise l'adjoint chargé de l'urbanisme. Selon plusieurs commerçants du quartier, la fermeture aurait déjà entraîné une baisse de la fréquentation des terrasses.\n\nLa réouverture est prévue fin juin, avant le début des festivités estivales.",
      "explanation": "The brève follows the press model: an informative title, a chapô answering who, what, when, where and why (the bridge, closed since Monday, in Annecy, because of cracks), then details in decreasing order of importance. It uses the passé composé for facts, \"devraient durer\" for a forecast and the hearsay conditional \"aurait déjà entraîné\" for an unconfirmed claim attributed to shopkeepers, and the quotation is introduced by \"précise\"."
    }
  ],
  "c2-comprehension-strategies-7": [
    {
      "type": "write",
      "prompt": "A classmate, Lucas, missed yesterday's public lecture on the history of the bicycle in France and asks for your notes. Instead of sending the abbreviated notes, write him an email that rebuilds the lecture from them: its plan, its main ideas in order, two key figures or dates, and the speaker's own signposts (d'abord, j'insiste sur, j'y reviendrai, pour conclure). End with a one-sentence summary.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Rebuilds the lecture's structure and hierarchy (parts, main ideas, examples) in order.",
        "Reports the speaker's signposts and emphasis in indirect speech (\"elle a insisté sur\", \"elle a annoncé qu'elle y reviendrait\").",
        "Turns note-style fragments into full sentences with connectors, keeping figures and dates precise.",
        "Ends with a one-sentence summary, in the friendly register of an email to a classmate."
      ],
      "modelAnswer": "Salut Lucas,\n\nPlutôt que de t'envoyer mes notes, illisibles même pour moi, je te résume la conférence.\n\nLa conférencière a annoncé un plan en trois parties. D'abord, la naissance du vélo au XIXe siècle : elle a rappelé que la « draisienne » de 1817 n'avait pas de pédales, et que le vélo est resté longtemps un loisir de bourgeois.\n\nEnsuite, et c'est sur ce point qu'elle a le plus insisté, sa démocratisation entre 1900 et 1950 : grâce à la baisse des prix, le vélo est devenu le moyen de transport des ouvriers, surtout après les congés payés de 1936. Elle a précisé qu'en 1950, on comptait environ dix millions de bicyclettes en France.\n\nEnfin, le déclin face à la voiture, puis le retour du vélo en ville depuis les années 2000. Elle a dit qu'elle reviendrait sur les vélos en libre-service, mais elle a manqué de temps.\n\nPour conclure, elle a souligné que le vélo avait toujours été un objet politique autant que technique.\n\nEn une phrase : le vélo est passé du luxe à l'outil ouvrier, puis à un symbole écologique.\n\nÀ demain,\nChloé",
      "explanation": "The email turns notes back into connected prose that keeps the lecture's hierarchy (\"d'abord\", \"ensuite\", \"enfin\", \"pour conclure\") and its precise figures (1817, 1936, ten million bicycles). The speaker's signposts are reported with tense agreement (\"elle a annoncé un plan\", \"elle a dit qu'elle reviendrait\", \"elle a souligné que le vélo avait toujours été\"), and \"c'est sur ce point qu'elle a le plus insisté\" uses a cleft for emphasis."
    }
  ],
  "c2-debate-2": [
    {
      "type": "write",
      "prompt": "Your town is considering making a school uniform compulsory in its primary schools. Write a short for-and-against essay for a civic education website, in French. Present the arguments on each side fairly, then give a reasoned conclusion. Use a range of concessive structures, each with its correct mood: bien que or quoique, même si, avoir beau, quand bien même, tout... que, il n'en demeure pas moins que.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Presents arguments for and against in a balanced, clearly organised way, with an introduction and a conclusion.",
        "Uses \"bien que\" or \"quoique\" + subjunctive and \"même si\" + indicative correctly.",
        "Uses at least two advanced concessives: \"avoir beau\" + infinitive, \"quand bien même\" + conditional, \"tout... que\" + indicative, \"il n'en demeure pas moins que\" or \"toujours est-il que\".",
        "Keeps a measured, impersonal register (on, \"il convient de\", \"force est de constater\")."
      ],
      "modelAnswer": "L'uniforme à l'école primaire : progrès ou fausse bonne idée ?\n\nLa mairie envisage d'imposer une tenue commune dans ses écoles primaires. La mesure divise les parents.\n\nSes partisans font valoir qu'elle effacerait les différences sociales visibles. Bien que les enfants ne choisissent pas toujours leurs vêtements, les marques deviennent très tôt un sujet de moquerie, et l'uniforme couperait court à cette concurrence. Il simplifierait aussi la vie des familles le matin.\n\nSes opposants rappellent cependant que l'uniforme a un coût. On a beau promettre une aide aux familles modestes, il faudra acheter plusieurs tenues par an. Surtout, tout égalitaire qu'il est en apparence, l'uniforme ne fait pas disparaître les inégalités : elles se déplacent vers les chaussures, les cartables ou les téléphones.\n\nQuand bien même la mesure serait financée entièrement par la commune, il n'en demeure pas moins qu'elle ne répond pas au fond du problème. Même si l'uniforme peut créer un sentiment d'appartenance, le harcèlement se combat d'abord par l'éducation.\n\nIl conviendrait donc, avant toute décision, de consulter les enseignants et d'expérimenter la mesure dans une seule école.",
      "explanation": "The essay balances both sides before concluding, and uses each concessive with its mood: \"bien que les enfants ne choisissent pas\" (subjunctive), \"même si l'uniforme peut\" (indicative), \"on a beau promettre\" (infinitive), \"tout égalitaire qu'il est\" (indicative), \"quand bien même la mesure serait financée\" (conditional) and \"il n'en demeure pas moins que\" to reassert the main point after a concession."
    }
  ],
  "c2-debate-4": [
    {
      "type": "write",
      "prompt": "During a local radio debate on whether supermarkets should be forced to give unsold food to charities, your opponent keeps interrupting you and twisting your words. Write the exchange as a dialogue between you, the opponent and the presenter. Refute and reframe his arguments (vous confondez A et B, là n'est pas la question, c'est un raccourci) and use the formulas for taking and keeping the floor under pressure (permettez-moi de terminer, si vous me laissez finir, je n'ai pas dit cela).",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least two reframing formulas (\"vous confondez... et...\", \"là n'est pas la question\", \"c'est un raccourci\", \"ce n'est pas le sujet\").",
        "Uses at least two formulas to take or keep the floor (\"permettez-moi de terminer\", \"si vous me laissez finir\", \"je n'ai pas dit cela\", \"j'y viens\").",
        "Stays courteous with vous and titles, even under pressure.",
        "Has three voices, including the presenter's moderating language."
      ],
      "modelAnswer": "Présentatrice : Madame Duval, vous souhaitez obliger les supermarchés à donner leurs invendus. Pourquoi ?\nMoi : Parce qu'on jette chaque année des tonnes de nourriture parfaitement consommable, alors que...\nOpposant : Donc vous voulez punir les commerçants !\nMoi : Permettez-moi de terminer. Je n'ai pas dit cela. Je dis qu'il est absurde de jeter ce qui pourrait nourrir des familles.\nOpposant : Les supermarchés font déjà des dons, ils n'ont pas attendu les donneurs de leçons.\nMoi : Certains, oui. Mais vous confondez une démarche volontaire et une obligation générale. Là n'est pas la question : il s'agit de savoir si la règle doit s'appliquer à tous.\nOpposant : Et demain, vous obligerez les boulangers à donner leurs croissants ?\nMoi : C'est un raccourci. La mesure ne concerne que les surfaces de plus de 400 mètres carrés.\nPrésentatrice : Monsieur Garnier, laissez répondre votre contradictrice.\nOpposant : Mais enfin, qui paiera la logistique ?\nMoi : J'y viens, si vous me laissez finir. Les associations reçoivent une aide de l'État pour le transport, et les dons ouvrent droit à une réduction d'impôt pour l'enseigne.\nPrésentatrice : Merci à tous les deux, nous allons marquer une pause.",
      "explanation": "The speaker keeps the floor with \"Permettez-moi de terminer\", \"Je n'ai pas dit cela\" and \"J'y viens, si vous me laissez finir\", and reframes each attack: \"vous confondez une démarche volontaire et une obligation générale\", \"Là n'est pas la question\", \"C'est un raccourci\". She stays courteous (vous, no insult), while the presenter's \"laissez répondre votre contradictrice\" shows the moderator's language."
    }
  ],
  "c2-debate-6": [
    {
      "type": "write",
      "prompt": "Write the introduction of a French-style argumentative essay (dissertation) on the subject « Le tourisme de masse est-il une chance pour les territoires ? ». It must follow the classic sequence: an accroche (a fact, quotation or anecdote), the presentation and analysis of the subject's key terms, the problématique, and the annonce du plan for a dialectical plan in two or three parts.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Opens with a concrete accroche (a figure, quotation or recent fact).",
        "Defines or analyses the key terms of the subject (\"tourisme de masse\", \"chance\", \"territoires\").",
        "States the problématique as a direct or indirect question that reveals a tension.",
        "Announces the plan with the expected formulas (\"Nous verrons dans un premier temps...\", \"avant de montrer...\", \"pour enfin nous demander...\")."
      ],
      "modelAnswer": "En 2024, Venise a commencé à faire payer l'entrée de son centre historique à certains visiteurs, comme on facture l'accès à un musée. Le geste aurait paru impensable il y a vingt ans : il dit assez combien la question du tourisme de masse est désormais brûlante.\n\nPar « tourisme de masse », on entend l'afflux de visiteurs en très grand nombre, souvent concentrés sur quelques lieux et quelques semaines. Parler de « chance » suppose un bénéfice, d'abord économique, mais pas seulement. Quant aux « territoires », le terme désigne à la fois les lieux et ceux qui y vivent toute l'année.\n\nOr c'est précisément là que réside la tension : ce qui enrichit un territoire peut aussi le vider de ses habitants. Dès lors, on peut se demander dans quelle mesure l'afflux touristique, source indéniable de revenus, ne finit pas par menacer ce qu'il prétend valoriser.\n\nNous verrons dans un premier temps que le tourisme de masse constitue un levier de développement réel, avant de montrer qu'il fragilise les équilibres sociaux et environnementaux. Nous nous demanderons enfin à quelles conditions il pourrait redevenir une chance durable.",
      "explanation": "The introduction follows the French sequence: an accroche (Venice's entry fee), an analysis of each key term (\"on entend par\", \"suppose\", \"désigne\"), a problématique introduced by \"Or\" and \"Dès lors, on peut se demander dans quelle mesure\" as an indirect question without inversion, and an annonce du plan for a three-part dialectical plan (\"Nous verrons dans un premier temps... avant de montrer... Nous nous demanderons enfin\")."
    }
  ],
  "c2-debate-9": [
    {
      "type": "write",
      "prompt": "You attended a televised debate between the two candidates in the second round of your city's mayoral election. Write a press report (compte rendu) for a local news website: describe how the debate was run (speaking time, the moderators' interventions), the key exchanges, at least one moment when a candidate kept their composure under interruption, and a brief, balanced assessment.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses the vocabulary of the live debate: \"le temps de parole\", \"les modérateurs\", \"couper la parole\", \"recadrer\", \"le chronomètre\", \"l'entre-deux-tours\".",
        "Reports key exchanges with precise reporting verbs (\"a rétorqué\", \"a objecté\", \"a martelé\") and at least one short quotation.",
        "Describes one moment of composure under interruption.",
        "Stays balanced and factual, in the register of a press report (passé composé, nominal headline)."
      ],
      "modelAnswer": "Débat de l'entre-deux-tours : un face-à-face tendu mais maîtrisé\n\nLes deux candidats encore en lice, Hélène Morin (Divers gauche) et Pierre Castel (Les Républicains), se sont affrontés mardi soir sur TV Bordeaux pendant un peu plus d'une heure et demie.\n\nLes deux modérateurs ont veillé au strict respect du temps de parole, affiché en permanence à l'écran, et ont dû recadrer les échanges à plusieurs reprises, notamment sur la sécurité.\n\nLe passage le plus vif a porté sur les transports. Pierre Castel a accusé son adversaire de vouloir « faire la guerre aux voitures ». Hélène Morin a rétorqué que la ville avait « besoin de solutions, pas de slogans ». À plusieurs reprises, le candidat lui a coupé la parole ; elle a attendu, sans hausser le ton, avant de reprendre : « Si vous me laissez finir, je vous donnerai les chiffres. » Un moment de sang-froid remarqué sur les réseaux sociaux.\n\nPierre Castel, de son côté, s'est montré plus convaincant sur les finances, martelant sa promesse de ne pas augmenter les impôts.\n\nAucun des deux n'a commis de faux pas majeur. Verdict dimanche.",
      "explanation": "The report uses the vocabulary of the televised debate (\"l'entre-deux-tours\", \"le temps de parole\", \"les modérateurs\", \"recadrer\", \"couper la parole\") and precise reporting verbs (\"a accusé\", \"a rétorqué\", \"martelant\"). The composure moment is told with \"sans hausser le ton\" and a quotation, and the even-handed assessment (\"de son côté\", \"aucun des deux\") keeps the press register."
    }
  ],
  "c2-presentation-openings-contrast": [
    {
      "type": "write",
      "prompt": "You are presenting a project for a shared garden on an abandoned car park to a public meeting of residents in your neighbourhood, with the deputy mayor present. Write the opening of your presentation (the first minute): thank the audience and situate yourself, choose a hook suited to this audience (a question, a surprising figure, an anecdote or a quotation), state your aim and announce your plan.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Opens with thanks and situates the speaker (\"Merci à tous d'être venus\", \"je suis... et je représente...\").",
        "Uses one clear hook suited to a town meeting, avoiding the \"alors, euh, je vais vous parler de\" opening.",
        "States the aim of the presentation and announces a plan in two or three parts with ordinal markers.",
        "Adapts the register to a mixed audience: \"Madame l'adjointe\", vous, oral rhythm."
      ],
      "modelAnswer": "Madame l'adjointe au maire, chers voisins, bonsoir, et merci d'être venus si nombreux un mardi soir.\n\nJe m'appelle Julie Bertrand, j'habite rue des Lilas depuis douze ans, et je représente ce soir le collectif « Un jardin pour le quartier ».\n\nAvant de commencer, je voudrais vous poser une question. Combien d'entre vous sont passés devant le parking de la rue Pasteur cette semaine ? Levez la main... Presque tout le monde. Et combien d'entre vous y ont vu une seule voiture ? Personne. Depuis la fermeture du supermarché, il y a quatre ans, ces 2 000 mètres carrés de bitume ne servent plus à rien.\n\nNotre objectif, ce soir, est de vous convaincre qu'ils pourraient devenir un jardin partagé ouvert à tous.\n\nPour cela, je vous présenterai d'abord le projet lui-même : les parcelles, les arbres, l'espace pour les enfants. J'aborderai ensuite son financement, qui ne coûterait presque rien à la ville. Enfin, je vous dirai comment chacun d'entre vous peut y participer.\n\nCommençons, si vous le voulez bien, par le projet.",
      "explanation": "The opening thanks the audience, addresses \"Madame l'adjointe au maire\" first, and situates the speaker before using a two-step question hook that involves the residents physically. A surprising fact (2,000 m² of empty tarmac) leads to the aim, and the plan is announced with \"d'abord\", \"ensuite\" and \"enfin\", ending on an oral transition (\"Commençons, si vous le voulez bien\")."
    }
  ],
  "c2-presentations-negotiation-4": [
    {
      "type": "write",
      "prompt": "You are negotiating the renewal of a cleaning contract for your company's offices. After two meetings, talks are deadlocked: the supplier wants a 12% price increase, you can accept 4%. Write a short internal report (note) to your director that sums up where things stand, reformulates each side's position, identifies the underlying interests behind the positions, and proposes two or three new options to break the deadlock.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Sums up the state of the negotiation in a nominal, report-like style (\"Objet\", \"État des lieux\", \"Propositions\").",
        "Distinguishes positions from interests (\"au-delà de sa position, son intérêt est de...\").",
        "Proposes new options with the conditional or si + imparfait (\"nous pourrions\", \"si nous acceptions..., il serait prêt à...\").",
        "Uses the vocabulary of negotiation: \"la marge de manœuvre\", \"un terrain d'entente\", \"une contre-proposition\", \"une impasse\"."
      ],
      "modelAnswer": "Note à l'attention de M. Lambert, directeur administratif\nObjet : renouvellement du contrat de nettoyage, état des lieux\n\n1. État des lieux\nAprès deux réunions, la négociation avec Nettoplus est dans l'impasse. Le prestataire demande une hausse de 12 % ; notre marge de manœuvre ne dépasse pas 4 %.\n\n2. Positions et intérêts\nAu-delà de sa position chiffrée, l'intérêt de Nettoplus est de compenser la hausse du SMIC et de sécuriser un client sur la durée. Le nôtre est de maîtriser le budget sans dégrader la qualité, qui fait l'objet de plaintes régulières le lundi matin.\n\n3. Propositions\nPlusieurs options permettraient de trouver un terrain d'entente :\n- un contrat de trois ans au lieu d'un, en échange d'une hausse limitée à 6 % ;\n- une réduction du nettoyage des bureaux peu occupés le vendredi, ce qui diminuerait le coût réel pour le prestataire ;\n- une clause de qualité : si les plaintes diminuaient de moitié, la hausse passerait à 8 % la deuxième année.\n\nJe propose de soumettre cette contre-proposition lors de la réunion du 12 mars, après accord de votre part.\n\nSophie Renard",
      "explanation": "The note uses the nominal headings of an internal report and the vocabulary of negotiation (\"dans l'impasse\", \"marge de manœuvre\", \"terrain d'entente\", \"contre-proposition\"). It moves from positions (12 % vs 4 %) to interests (\"au-delà de sa position chiffrée, l'intérêt de Nettoplus est de\"), and frames the new options with the conditional (\"permettraient\", \"diminuerait\") and \"si\" + imparfait (\"si les plaintes diminuaient..., la hausse passerait\")."
    }
  ],
  "c2-presentations-negotiation-6": [
    {
      "type": "write",
      "prompt": "You have just presented your city's plan to replace paper forms with an online service at the town hall. Write the dialogue of the question-and-answer session that follows with three people: a retired resident worried about older people, a journalist who asks about the cost, and an IT consultant whose question you cannot fully answer. Welcome and clarify questions, buy time, admit what you do not know and promise a follow-up, and redirect without evading.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Welcomes and clarifies questions (\"Merci pour cette question\", \"si je vous comprends bien, vous demandez si...\").",
        "Buys time or redirects without evading (\"c'est une question importante, permettez-moi d'y revenir dans un instant\", \"pour être précis\").",
        "Admits not knowing and promises a follow-up (\"je ne dispose pas de ce chiffre à l'instant, je vous le transmettrai d'ici vendredi\").",
        "Keeps a calm, courteous professional register with three different questioners."
      ],
      "modelAnswer": "Retraitée : Et les personnes âgées qui n'ont pas d'ordinateur, vous les oubliez ?\nMoi : Merci pour cette question, elle est essentielle. Si je vous comprends bien, vous craignez que certains habitants se retrouvent exclus. Rassurez-vous : l'accueil au guichet sera maintenu deux matinées par semaine, et un conseiller numérique aidera ceux qui le souhaitent.\nJournaliste : Combien coûtera ce service, exactement ?\nMoi : Pour être précis, l'investissement initial s'élève à 180 000 euros, dont la moitié est financée par l'État. J'y reviendrai en détail dans le document que nous publierons demain.\nJournaliste : Et le coût annuel de maintenance ?\nMoi : C'est une question légitime. Je ne veux pas vous donner un chiffre approximatif ; je vous le communiquerai d'ici vendredi.\nConsultant : Les données seront-elles hébergées en France ou chez un prestataire américain ?\nMoi : Là, je dois être honnête : je ne dispose pas de cette information à l'instant. Je vérifie auprès de notre direction informatique et je vous réponds par écrit dans la semaine. Puis-je vous demander votre adresse électronique à la fin de la réunion ?\nConsultant : Bien sûr.\nMoi : Merci. D'autres questions ?",
      "explanation": "The answers welcome and reformulate the question (\"Si je vous comprends bien, vous craignez que\" + subjunctive), redirect to a later document without dodging (\"J'y reviendrai en détail\"), and refuse to guess (\"Je ne veux pas vous donner un chiffre approximatif\"). Faced with a question it cannot answer, the speaker admits it (\"je ne dispose pas de cette information à l'instant\") and commits to a precise follow-up (\"dans la semaine\", \"par écrit\")."
    }
  ],
  "c2-presentations-negotiation-8": [
    {
      "type": "write",
      "prompt": "You took the minutes at a meeting between your events company and a hotel in Annecy about the organisation of a three-day seminar for 80 people. Write the relevé de décisions to be sent to all participants: date, people present, the decisions taken in the nominal and impersonal style of minutes (il a été convenu que, il a été décidé de), an action list stating who does what and by when, and the date of the next meeting.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Has the format of a relevé de décisions: date, place, \"Présents\", decisions, actions, next meeting.",
        "Uses the impersonal and passive style of minutes (\"il a été convenu que\", \"il a été décidé de\", \"la question de... reste en suspens\").",
        "Includes an action list with who does what by when (\"Responsable\", \"Échéance\").",
        "Uses nominalisation and avoids the first person singular."
      ],
      "modelAnswer": "Relevé de décisions\nRéunion du 4 février 2026, Hôtel du Lac, Annecy\n\nPrésents : Mme Claire Vidal (directrice commerciale, Hôtel du Lac), M. Antoine Roche (responsable banquets), Mme Inès Faure et M. Paul Simon (Événements Alpins)\n\nObjet : organisation du séminaire Lumetech, du 15 au 17 mai 2026 (80 participants)\n\nDécisions\n1. Il a été convenu que l'hôtel réserverait 70 chambres individuelles et 5 chambres doubles.\n2. Il a été décidé de tenir la plénière dans la salle Belvédère, avec deux salles de sous-commission le 16 mai.\n3. Le dîner de gala aura lieu le 16 mai sur la terrasse, avec repli prévu en salle en cas de pluie.\n4. Le tarif forfaitaire de 245 € HT par personne et par jour a été validé.\n5. La question des transferts depuis la gare reste en suspens.\n\nActions\n- Envoi de la liste nominative des participants : Événements Alpins, avant le 1er mars.\n- Proposition de trois menus de gala : Hôtel du Lac, avant le 15 février.\n- Devis pour les navettes : M. Simon, avant le 20 février.\n\nProchaine réunion : le 3 mars 2026 à 10 h, par visioconférence.",
      "explanation": "The relevé uses the expected format (date, place, \"Présents\", \"Objet\", decisions, actions, next meeting) and the impersonal style of minutes: \"il a été convenu que\" with the future in the past (\"réserverait\"), \"il a été décidé de\", the agentless passive (\"a été validé\") and \"reste en suspens\". The action list is fully nominal (\"Envoi de\", \"Proposition de\", \"Devis pour\") with a person and a deadline for each."
    }
  ],
  "c2-citations-2": [
    {
      "type": "write",
      "prompt": "Your city plans to build a cable car (un téléphérique urbain) linking a hilltop neighbourhood to the centre. Write a short press review (revue de presse) for a local news website reporting what four different people have said about it: the mayor, an association of residents, an engineer and a political opponent. Use attribution verbs that reveal the source's stance and yours (affirmer, avancer, souligner, reconnaître, déplorer, prétendre), selon / d'après / pour, and the hearsay conditional for unconfirmed claims.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least four different attribution verbs, chosen for the stance they convey (\"souligne\", \"reconnaît\", \"déplore\", \"prétend\", \"avance\").",
        "Uses \"selon\", \"d'après\" or \"pour\" to attribute a view.",
        "Uses the hearsay conditional at least twice for information the writer does not vouch for (\"le projet coûterait\", \"il aurait été\").",
        "Keeps the structure and neutral tone of a press review: a title, a short introduction, one paragraph per voice."
      ],
      "modelAnswer": "Téléphérique de la Croix-Rousse : ce qu'ils en disent\n\nPrésenté la semaine dernière, le projet de téléphérique urbain fait déjà réagir. Tour d'horizon.\n\nLe maire affirme que la ligne « changera la vie de quinze mille habitants » en reliant le plateau au centre en six minutes. Il souligne que la cabine émettrait dix fois moins de CO2 qu'un bus.\n\nPour l'association Croix-Rousse Vivante, en revanche, le projet est mal conçu. Sa présidente déplore que les riverains n'aient pas été consultés et redoute le survol permanent des cours d'immeubles.\n\nD'après Jeanne Morel, ingénieure spécialiste des transports par câble, la technique est éprouvée. Elle reconnaît toutefois que la capacité annoncée, 3 000 voyageurs par heure, serait difficile à atteindre aux heures de pointe.\n\nL'opposition municipale, enfin, prétend que le budget a été sous-estimé : le projet coûterait en réalité plus de 90 millions d'euros, et non 60. Une étude interne aurait même été écartée par la majorité, ce que la mairie dément.\n\nLe conseil municipal se prononcera le 12 avril.",
      "explanation": "Each attribution verb signals a stance: \"affirme\" and \"souligne\" report neutrally, \"déplore\" conveys regret, \"reconnaît\" marks a concession by an expert, and \"prétend\" signals the writer's doubt. \"Pour l'association\" and \"d'après Jeanne Morel\" attribute views, and the hearsay conditional (\"coûterait\", \"aurait été écartée\") marks claims the journalist does not vouch for. \"Déplore que\" takes the past subjunctive (\"n'aient pas été consultés\")."
    }
  ],
  "c2-citations-4": [
    {
      "type": "write",
      "prompt": "You teach a university course in Lyon. One of your students, Thomas Girard, has handed in an essay in which a paragraph closely follows a passage from a published article, with a few synonyms changed and no reference. Write him a formal but supportive email: explain why this counts as plagiarism, distinguish an honest paraphrase from a disguised borrowing, and tell him concretely how to rewrite the paragraph (the techniques of reformulation and correct referencing) before a given deadline.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Names the problem precisely with the vocabulary of plagiarism: \"le plagiat\", \"un emprunt\", \"la reprise\", \"sans citer la source\".",
        "Explains the techniques of honest reformulation: changing the structure, nominalisation, reorganising ideas, not just synonyms, plus the reference.",
        "Uses the formal register of a teacher's email (vous, \"Monsieur\", \"je vous invite à\", \"je vous saurais gré de\") while staying supportive.",
        "Gives a precise deadline and next step."
      ],
      "modelAnswer": "Objet : votre dossier sur l'économie collaborative\n\nMonsieur Girard,\n\nJ'ai lu votre dossier avec intérêt : le plan est clair et votre problématique pertinente. Je dois cependant attirer votre attention sur le deuxième paragraphe de la partie II.\n\nCelui-ci reprend de très près un passage de l'article de Laure Vasseur paru en 2019, sans que la source soit mentionnée. Remplacer quelques mots par des synonymes ne suffit pas : la structure des phrases et l'enchaînement des idées restent ceux de l'auteur. Il s'agit donc, au sens strict, d'un plagiat, même si je suis convaincue qu'il n'était pas intentionnel.\n\nUne paraphrase honnête suppose de s'approprier l'idée : changer la construction des phrases, recourir par exemple à la nominalisation, réorganiser les arguments selon votre propre logique et, surtout, indiquer la référence en note. Si une formule vous paraît irremplaçable, citez-la entre guillemets.\n\nJe vous invite donc à réécrire ce paragraphe et à me renvoyer le dossier avant le vendredi 14 mars. Je vous recevrai volontiers pendant ma permanence du mardi si vous le souhaitez.\n\nBien cordialement,\n\nNathalie Perrin\nMaîtresse de conférences",
      "explanation": "The email names the fault precisely (\"reprend de très près\", \"sans que la source soit mentionnée\", \"un plagiat\") and explains why synonyms are not enough: the structure and sequence of ideas still belong to the author. It lists the techniques of honest paraphrase (changing the construction, nominalisation, reorganising) and correct referencing, softens the judgement with \"même si je suis convaincue qu'il n'était pas intentionnel\", and ends with a precise deadline in a formal but kind register."
    }
  ],
  "c2-citations-5": [
    {
      "type": "write",
      "prompt": "Your book club's newsletter asks members to write a compte rendu of a non-fiction book they have recently read (choose a real one you know, or invent a plausible essay on a social topic such as sleep, cities or work). Present the book (author, title, publisher, year), summarise its thesis and main arguments faithfully in the author's order, and only then, in a separate final paragraph, give your own brief assessment.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Presents the book's reference precisely (author, title in italics or guillemets, publisher, year).",
        "Summarises the thesis and arguments faithfully and in order, with reporting verbs and without quoting at length.",
        "Keeps the summary separate from the personal judgement, which comes only in the last paragraph.",
        "Uses the condensed style of a compte rendu: nominalisation, \"l'auteur(e) montre que\", \"selon elle\", connectors of structure."
      ],
      "modelAnswer": "Compte rendu : Le Sommeil volé, de Claire Lemoine (Éditions du Seuil, 2022)\n\nNeurobiologiste de formation, Claire Lemoine part d'un constat : en cinquante ans, les Français auraient perdu en moyenne une heure et demie de sommeil par nuit. Son essai cherche à comprendre les causes de ce recul et à en mesurer les conséquences.\n\nDans une première partie, l'autrice montre que la privation de sommeil n'est pas un choix individuel, mais le produit de transformations sociales : allongement des trajets, travail en horaires décalés, omniprésence des écrans. Elle analyse ensuite les effets de cette dette de sommeil sur la santé, de l'obésité aux troubles de l'attention, en s'appuyant sur de nombreuses études internationales. La dernière partie, plus politique, plaide pour que le sommeil soit reconnu comme un enjeu de santé publique, au même titre que l'alimentation.\n\nPour ma part, j'ai trouvé l'ouvrage remarquablement clair et documenté. On regrettera toutefois que les solutions proposées restent assez générales : le lecteur referme le livre convaincu, mais un peu démuni.",
      "explanation": "The compte rendu gives the full reference, then summarises the thesis and the three parts in the author's order with reporting verbs (\"montre que\", \"analyse\", \"plaide pour que\" + subjunctive) and nominal style (\"l'allongement des trajets\", \"cette dette de sommeil\"). The hearsay conditional \"auraient perdu\" attributes the figure to the author, and the personal judgement is kept for a separate final paragraph, signalled by \"Pour ma part\"."
    }
  ],
  "c2-citations-7": [
    {
      "type": "write",
      "prompt": "A French university is organising a one-day colloquium on « La ville après la pandémie ». Write your proposition de communication (abstract proposal, about 150 to 200 words) presenting the paper you would like to give: your research question, your corpus or method, your hypothesis and expected contribution. Use the academic author's voice: the nous de modestie with its agreement, impersonal constructions, and hedging (il semble que, nous serions tenté(e)s de, il apparaît que).",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses the nous de modestie with singular agreement of adjectives and participles (\"nous sommes convaincue\", \"nous nous sommes intéressé\").",
        "Uses impersonal constructions and hedging (\"il semble que\", \"il apparaît que\", \"nous serions tentée de\", \"il s'agira de\").",
        "Presents the four parts of a proposal: question, corpus or method, hypothesis, contribution.",
        "Has a title and the condensed, formal register of an academic abstract."
      ],
      "modelAnswer": "Proposition de communication\n« Le retour du quartier ? Les commerces de proximité à Lyon depuis 2020 »\n\nOn a beaucoup annoncé, au lendemain des confinements, la « revanche des quartiers » sur les centres-villes. La présente communication se propose de mettre cette affirmation à l'épreuve des faits.\n\nNous nous sommes intéressée à trois quartiers lyonnais aux profils sociaux contrastés : la Croix-Rousse, Gerland et Vaulx-en-Velin. Notre corpus réunit les données d'immatriculation des commerces entre 2018 et 2024, ainsi qu'une trentaine d'entretiens menés auprès de commerçants et d'habitants.\n\nIl semble que la progression des commerces de proximité, réelle dans les quartiers favorisés, soit beaucoup plus incertaine ailleurs. Nous serions donc tentée de voir dans ce « retour du quartier » moins une tendance générale qu'un phénomène socialement situé, étroitement lié à la généralisation du télétravail chez les cadres.\n\nIl s'agira, plus largement, d'interroger la manière dont les discours sur la « ville d'après » ont pu masquer des inégalités territoriales persistantes.",
      "explanation": "The proposal uses the nous de modestie with singular feminine agreement (\"nous nous sommes intéressée\", \"nous serions tentée\"), impersonal constructions (\"la présente communication se propose de\", \"il s'agira de\") and hedging (\"il semble que\" + subjunctive \"soit\"). It covers the four expected moves: the question, the corpus, the hypothesis (\"moins une tendance générale qu'un phénomène socialement situé\") and the wider contribution."
    }
  ],
  "c2-rhetorical-questions-2": [
    {
      "type": "write",
      "prompt": "A French culture blog has a column called « Pourquoi ? » that explains French habits to foreign readers. Write this week's post on the question « Pourquoi les Français râlent-ils autant ? ». Build it on hypophora: ask questions and answer them yourself (pourquoi ? parce que... ; que faut-il en retenir ? ; est-ce à dire que... ? certainement pas), with at least one formal question using inversion.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Uses hypophora at least three times: a question immediately answered by the writer.",
        "Includes at least one formal question with complex inversion (\"Les Français sont-ils...?\", \"Faut-il en conclure que...?\").",
        "Includes the move \"Est-ce à dire que... ? Certainement pas\" or an equivalent denial of a wrong inference.",
        "Has a title, an engaging opening and the lively register of a blog post."
      ],
      "modelAnswer": "Pourquoi les Français râlent-ils autant ?\n\nVous venez d'arriver en France et vous avez l'impression que tout le monde se plaint : de la météo, des grèves, du prix du pain. Les Français sont-ils donc un peuple malheureux ?\n\nPas du tout. Selon plusieurs enquêtes, ils se déclarent plutôt satisfaits de leur vie personnelle. Alors pourquoi ce concert permanent de soupirs ? Parce que râler, en France, n'est pas d'abord une plainte : c'est une manière d'entrer en contact. On râle contre le bus en retard avec un inconnu, et la conversation commence.\n\nQue faut-il en retenir ? Que la critique est souvent une forme d'engagement. Celui qui râle s'intéresse ; celui qui se tait a abandonné.\n\nEst-ce à dire qu'il faut prendre tous les reproches à la légère ? Certainement pas. Mais quand un collègue vous dit que la cantine « n'est pas terrible », il ne vous demande pas de résoudre le problème. Il vous invite à râler avec lui.\n\nAlors, la prochaine fois, ne vous inquiétez pas. Soupirez à votre tour : vous êtes intégré.",
      "explanation": "The post is built on hypophora: \"Alors pourquoi... ? Parce que...\", \"Que faut-il en retenir ? Que...\" and \"Est-ce à dire que... ? Certainement pas\", which denies a wrong inference. The title and \"Les Français sont-ils donc un peuple malheureux ?\" use complex inversion for formal questions, and the blog register comes from direct address (\"vous\") and short punchy sentences."
    }
  ],
  "c2-rhetorical-questions-4": [
    {
      "type": "write",
      "prompt": "The regional council has cut the funding of the only night train serving your town, and its president has not answered residents' letters. Write an open letter (lettre ouverte) to him, to be published in the local press. Use interpellation (Et vous, Monsieur le Président, ...?), at least one prétérition (je ne parlerai pas de..., je passerai sous silence...), a feigned doubt (dubitation), and end with a firm request.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Directly interpellates the addressee with a question (\"Et vous, Monsieur le Président, qu'avez-vous fait... ?\").",
        "Uses at least one prétérition that mentions what it claims to leave out.",
        "Uses a feigned doubt or hesitation (\"Comment qualifier...?\", \"Faut-il y voir de l'indifférence ou de la négligence ?\").",
        "Has the form of an open letter (title, \"Monsieur le Président\", formal closing) and ends with a precise request."
      ],
      "modelAnswer": "Lettre ouverte au président du conseil régional\n\nMonsieur le Président,\n\nDepuis le 1er mars, le train de nuit Paris–Aurillac ne circule plus. Trois lettres de notre collectif sont restées sans réponse. Nous avons donc choisi de vous écrire publiquement.\n\nJe ne rappellerai pas que ce train était, pour beaucoup d'entre nous, le seul moyen de rejoindre Paris sans voiture. Je passerai sous silence les étudiants, les malades suivis dans les hôpitaux parisiens, les personnes âgées qui ne conduisent plus. Je ne dirai rien non plus des promesses de votre campagne sur le « désenclavement des territoires ».\n\nComment qualifier votre silence ? Faut-il y voir de l'indifférence, ou simplement de l'embarras ? Je ne sais pas, et je préfère ne pas choisir.\n\nCar enfin, Monsieur le Président, lorsque la décision a été prise, qu'avez-vous fait pour la contester ? Avez-vous seulement pris le train de nuit une fois ?\n\nNous vous demandons de recevoir notre collectif avant la fin du mois et de soumettre au vote de l'assemblée régionale le rétablissement de la ligne.\n\nVeuillez agréer, Monsieur le Président, l'expression de notre considération.\n\nPour le collectif Train de nuit Cantal, Martine Delmas",
      "explanation": "The second paragraph is a series of prétéritions (\"Je ne rappellerai pas que...\", \"Je passerai sous silence...\", \"Je ne dirai rien non plus de...\") that list exactly what they claim to leave out. \"Comment qualifier votre silence ? Faut-il y voir de l'indifférence, ou simplement de l'embarras ?\" is feigned doubt, and \"Car enfin, Monsieur le Président, qu'avez-vous fait... ?\" is a direct interpellation before the precise request and the formal closing."
    }
  ],
  "c2-rhetorical-questions-5": [
    {
      "type": "write",
      "prompt": "Your flatmate Élodie has, once again, invited ten friends round on a weeknight without telling you, the night before your important exam. Write the dialogue of the argument between you, full of the rhetorical questions of everyday reproach and exasperation (tu ne pouvais pas prévenir ?, tu te rends compte ?, tu crois que j'ai que ça à faire ?, c'est une blague ?, qu'est-ce que ça te coûtait de... ?), and let it end with a calmer exchange.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Uses at least four rhetorical questions of reproach or exasperation with their colloquial forms (\"tu ne pouvais pas prévenir ?\", \"c'est une blague ?\", \"tu crois que j'ai que ça à faire ?\").",
        "Uses the right tenses in reproaches: the imparfait of \"pouvoir\" and the past conditional (\"tu aurais pu\").",
        "Lets the other character answer, at least once, with a rhetorical question of her own.",
        "Sounds like real spoken French (dropped ne, \"t'es\", \"enfin\") and ends on a de-escalation."
      ],
      "modelAnswer": "Moi : Élodie, c'est une blague ? Il y a dix personnes dans le salon !\nÉlodie : Bah oui, c'est l'anniversaire de Karim.\nMoi : Un mardi soir ? La veille de mon partiel ? Tu ne pouvais pas prévenir ?\nÉlodie : Je t'ai envoyé un message ce matin.\nMoi : À sept heures, quand j'étais déjà à la bibliothèque. Tu te rends compte que je révise depuis trois semaines ?\nÉlodie : Oh là là, ça va, ce n'est pas la fin du monde.\nMoi : Pas la fin du monde ? Tu crois que j'ai que ça à faire, passer la nuit à écouter de la musique à travers le mur ? Qu'est-ce que ça te coûtait de demander, franchement ?\nÉlodie : Et toi, la fois où ta sœur a dormi ici une semaine, tu m'as demandé mon avis ?\nMoi : ... D'accord, touché. Mais j'aurais au moins pu prévoir.\nÉlodie : Bon. Tu as raison, j'aurais dû te demander. On baisse la musique à dix heures et on finit au bar, ça te va ?\nMoi : Ça me va. Et souhaite un bon anniversaire à Karim de ma part.",
      "explanation": "The argument uses the stock rhetorical questions of reproach: \"c'est une blague ?\", \"Tu ne pouvais pas prévenir ?\" (imparfait of \"pouvoir\" as reproach), \"Tu te rends compte que\", \"Tu crois que j'ai que ça à faire ?\" (with the spoken drop of ne) and \"Qu'est-ce que ça te coûtait de demander ?\". Élodie turns the device back with her own rhetorical question, and the past conditionals \"j'aurais dû\", \"j'aurais pu\" mark the move to de-escalation."
    }
  ],
  "c2-rhetorical-questions-7": [
    {
      "type": "write",
      "prompt": "Your former French teacher, Monsieur Bernard, is retiring after thirty-five years in the same lycée, and the school magazine is publishing tributes from former pupils. Write a portrait of him (a short article). Use emphasis beyond questions: inversion after à peine, sans doute, peut-être, aussi or ainsi, at least two clefts (c'est... que / c'est... qui, ce que..., c'est), and one dislocation.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Uses at least two emphatic inversions after an adverb (\"À peine était-il entré que...\", \"Sans doute était-il\", \"Aussi a-t-il\").",
        "Uses at least two cleft sentences (\"c'est lui qui\", \"ce que nous retenions, c'était\").",
        "Uses at least one dislocation (\"Ses dictées, personne ne les a oubliées\").",
        "Describes the person vividly (appearance, habits, an anecdote) in the warm register of a tribute."
      ],
      "modelAnswer": "Monsieur Bernard, ou l'art de la dictée\n\nÀ peine était-il entré dans la salle que le silence se faisait. Ce n'était pas la peur : c'était la curiosité. Avec sa veste de velours, son cartable de cuir usé et ses lunettes qu'il retirait pour réfléchir, Monsieur Bernard ne ressemblait à aucun autre professeur.\n\nSes dictées, personne ne les a oubliées. Il les choisissait chez Colette ou chez Giono, les lisait lentement, comme on raconte une histoire, et c'est ainsi que beaucoup d'entre nous ont découvert la littérature.\n\nSans doute était-il exigeant. Peut-être même l'était-il un peu trop, aux yeux de certains. Mais ce que nous retenions surtout, c'était sa patience. C'est lui qui restait après les cours pour expliquer une dernière fois l'accord du participe passé.\n\nEn trente-cinq ans, il a vu passer près de quatre mille élèves. Aussi n'est-il pas étonnant que le lycée tout entier veuille lui dire merci.\n\nBonne retraite, Monsieur Bernard. Et pardon pour toutes nos fautes.",
      "explanation": "The portrait uses emphatic inversion after adverbs (\"À peine était-il entré que\", \"Sans doute était-il\", \"Peut-être même l'était-il\", \"Aussi n'est-il pas étonnant que\" + subjunctive), clefts (\"c'est ainsi que\", \"ce que nous retenions surtout, c'était\", \"C'est lui qui\") and a dislocation (\"Ses dictées, personne ne les a oubliées\") with the resumptive pronoun and agreement of the participle."
    }
  ],
  "c2-job-interview-2": [
    {
      "type": "write",
      "prompt": "You are applying for a post as chef(fe) de projet événementiel at a cultural centre in Lille. Write the body of your cover letter (lettre de motivation), from the opening formula to the closing formula. Present two concrete achievements with verbs of accomplishment (piloter, mener à bien, contribuer à, être amené(e) à, j'ai su + infinitive) and quantified results, and link them to what the employer needs.",
      "minWords": 140,
      "maxWords": 220,
      "rubric": [
        "Uses at least three verbs of accomplishment (\"piloter\", \"mener à bien\", \"contribuer à\", \"être amené(e) à\", \"j'ai su\" + infinitive).",
        "Gives quantified results (budgets, numbers of visitors, percentages, deadlines).",
        "Links the experience to the post with \"vous\" / \"je\" structure (\"Votre projet de... correspond à...\", \"Je serais heureux(se) de mettre au service de...\").",
        "Uses the expected opening and closing formulas of a French cover letter (\"Madame, Monsieur,\", \"Je vous prie d'agréer...\")."
      ],
      "modelAnswer": "Madame, Monsieur,\n\nC'est avec un vif intérêt que j'ai pris connaissance de votre offre de chef de projet événementiel, publiée sur le site de l'Espace culturel des Moulins. Votre ambition de rapprocher la création contemporaine des habitants du quartier correspond exactement à ce qui m'anime depuis dix ans.\n\nAu sein de l'association Musiques en Ville, à Amiens, j'ai piloté pendant quatre ans un festival gratuit de trois jours. Avec un budget de 180 000 euros et une équipe de quarante bénévoles, j'ai su porter la fréquentation de 6 000 à 15 000 spectateurs, tout en réduisant les coûts techniques de 12 %.\n\nJ'ai également été amené à mener à bien, en un délai de six mois, la réouverture d'une salle de concert fermée pour travaux, en coordonnant architectes, artistes et services municipaux. J'ai enfin contribué à la création d'ateliers musicaux pour les écoles, qui accueillent aujourd'hui plus de 500 enfants par an.\n\nJe serais heureux de mettre cette expérience au service de votre programmation et de vous exposer mes idées lors d'un entretien.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\nAntoine Lefèvre",
      "explanation": "The letter uses the verbs of accomplishment French recruiters expect (\"j'ai piloté\", \"j'ai su porter\", \"j'ai été amené à mener à bien\", \"j'ai contribué à\") backed by figures (budget, audience growth, percentage savings, deadline). The opening cleft \"C'est avec un vif intérêt que\" and the link between the employer's project and the candidate's experience frame it, and it closes with the conditional \"Je serais heureux de\" and the standard formula."
    }
  ],
  "c2-job-interview-4": [
    {
      "type": "write",
      "prompt": "You have received two job offers in France: a CDI in a large company in La Défense and a CDD of eighteen months in a start-up in Nantes. Write an informal email (tu) to your French friend Romain, who works in HR, comparing the two offers precisely (gross annual salary, variable pay, trial period, RTT, remote work, meal vouchers, mutuelle) and asking his opinion.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses the vocabulary of French employment conditions precisely: \"brut annuel\", \"la part variable\", \"la période d'essai\", \"les RTT\", \"les tickets-restaurant\", \"la mutuelle\", \"CDI\" / \"CDD\".",
        "Compares the offers with comparative structures and concessive or contrastive connectors (\"alors que\", \"en revanche\", \"certes... mais\").",
        "Asks for advice with indirect questions and the conditional (\"à ta place, qu'est-ce que tu ferais ?\", \"je me demande si\").",
        "Keeps an informal, friendly register appropriate to a friend."
      ],
      "modelAnswer": "Salut Romain,\n\nJ'ai besoin de tes lumières de pro des RH : j'ai reçu deux offres et je n'arrive pas à me décider.\n\nLa première, c'est un CDI chez Axora, à La Défense : 52 000 euros brut annuel, plus une part variable pouvant aller jusqu'à 10 %. Période d'essai de quatre mois, renouvelable une fois. Douze RTT par an, des tickets-restaurant à 11 euros et une très bonne mutuelle, prise en charge à 70 % par l'employeur. En revanche, deux jours de télétravail seulement.\n\nLa seconde, c'est un CDD de dix-huit mois dans une start-up à Nantes : 46 000 euros brut, sans variable, mais avec des actions gratuites, et le télétravail est presque illimité. Pas de RTT, puisqu'ils sont aux 35 heures, et une mutuelle plus basique.\n\nCertes, le CDI est plus sûr, mais le projet nantais me passionne et la vie y est nettement moins chère qu'à Paris. Je me demande aussi si un CDD peut déboucher sur un CDI dans une start-up, ou si c'est un peu illusoire.\n\nÀ ma place, qu'est-ce que tu ferais ?\n\nMerci d'avance, je t'invite au resto pour la peine !\n\nJulie",
      "explanation": "The email uses the terms of French employment precisely (\"brut annuel\", \"part variable\", \"période d'essai renouvelable\", \"RTT\", \"tickets-restaurant\", \"mutuelle prise en charge à 70 %\", CDI / CDD). The comparison is organised with \"en revanche\", \"sans... mais\", \"certes... mais\" and \"nettement moins chère\", and advice is requested with the indirect question \"je me demande si\" and the conditional \"À ma place, qu'est-ce que tu ferais ?\"."
    }
  ],
  "c2-job-interview-5": [
    {
      "type": "write",
      "prompt": "After a two-year gap (your post was eliminated in a licenciement économique, then you spent a year caring for a parent and a year retraining as a data analyst), you are back on the job market. Write a post for a professional social network, in French, presenting your path honestly and positively: explain the gap and the change of career with tact, without complaining or lying, and say what you are looking for.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Explains the departure with the precise and neutral term (\"mon poste a été supprimé dans le cadre d'un licenciement économique\").",
        "Presents the gap and the retraining positively, with no complaint and no lie (\"j'ai choisi de\", \"cette période m'a permis de\").",
        "Links past skills to the new career (\"mon expérience de... me permet aujourd'hui de...\").",
        "Ends with a clear request and has the register of a professional post (direct, sober, positive)."
      ],
      "modelAnswer": "Nouveau départ\n\nIl y a deux ans, mon poste de responsable logistique a été supprimé dans le cadre d'un licenciement économique, après huit années dans la même entreprise.\n\nJ'ai alors choisi de consacrer une année à accompagner mon père, gravement malade. Ce fut une période difficile, mais elle m'a appris à m'organiser dans l'urgence et à garder mon calme face à l'imprévu.\n\nL'année suivante, j'ai décidé de transformer une passion de longue date en métier : j'ai suivi une formation certifiante d'analyste de données de neuf mois, conclue par un stage chez un transporteur lyonnais. J'y ai conçu un tableau de bord qui a permis de réduire de 15 % les trajets à vide.\n\nMon expérience de la logistique me permet aujourd'hui de comprendre de l'intérieur les données que j'analyse : les stocks, les flux, les retards ont pour moi un visage concret.\n\nJe recherche un poste d'analyste de données dans le transport ou l'industrie, en région lyonnaise. Si mon profil vous intéresse, ou si vous connaissez quelqu'un qui recrute, je serais ravi d'échanger.",
      "explanation": "The post explains each delicate point with tact: the departure in the neutral legal term (\"mon poste a été supprimé dans le cadre d'un licenciement économique\"), the caring year as a choice that taught something (\"elle m'a appris à\"), and the retraining as a deliberate move backed by a quantified result. \"Mon expérience de la logistique me permet aujourd'hui de\" links the two careers, and it closes on a clear, polite request in the conditional."
    }
  ],
  "c2-job-interview-7": [
    {
      "type": "write",
      "prompt": "You have accepted a new job and must leave your current post as an accountant in a firm in Strasbourg, where you are on a CDI with a two-month notice period. Write your formal letter of resignation (lettre de démission) to your employer: the expected layout and objet line, the clear statement of resignation, the notice period and your last working day, a request about the remaining holidays or the solde de tout compte, a polite word of thanks, and the closing formula.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Has the formal layout of a French letter: sender, recipient, place and date, \"Objet : démission\", mention of \"lettre remise en main propre\" or \"recommandée avec accusé de réception\".",
        "States the resignation unambiguously (\"je vous informe de ma décision de démissionner de mon poste de\").",
        "Gives the notice period and last day precisely, and mentions \"le solde de tout compte\", \"le certificat de travail\" or the remaining \"congés payés\".",
        "Thanks the employer soberly and ends with the full closing formula."
      ],
      "modelAnswer": "Léa Muller\n8, rue des Juifs\n67000 Strasbourg\n\nCabinet Hoffmann & Associés\nÀ l'attention de M. Daniel Hoffmann\n22, quai Kléber\n67000 Strasbourg\n\nStrasbourg, le 2 juin 2026\n\nLettre remise en main propre contre décharge\nObjet : démission\n\nMonsieur,\n\nPar la présente, je vous informe de ma décision de démissionner de mon poste de comptable, que j'occupe au sein du cabinet depuis le 1er septembre 2019.\n\nConformément à mon contrat de travail, j'effectuerai un préavis de deux mois, qui prendra fin le 2 août 2026 au soir. Je souhaiterais, si cela vous convient, solder mes six jours de congés payés restants pendant cette période.\n\nJe vous remercie de bien vouloir me remettre, à l'issue du préavis, mon certificat de travail, mon reçu pour solde de tout compte ainsi que l'attestation France Travail.\n\nJe tiens à vous remercier pour la confiance que vous m'avez accordée pendant ces sept années, qui ont été très formatrices.\n\nJe vous prie d'agréer, Monsieur, l'expression de mes salutations distinguées.\n\nLéa Muller",
      "explanation": "The letter follows the expected layout (sender, recipient, place and date, \"Lettre remise en main propre contre décharge\", \"Objet : démission\") and states the resignation in the standard formula \"Par la présente, je vous informe de ma décision de démissionner\". It gives the notice and last day precisely, asks politely about leave in the conditional (\"Je souhaiterais\"), lists the documents due at departure (\"certificat de travail\", \"reçu pour solde de tout compte\", the France Travail certificate) and closes with sober thanks and the full formula."
    }
  ],
  "c2-conflict-resolution-2": [
    {
      "type": "write",
      "prompt": "Your colleague and friend Hugo comes to see you, furious, because his manager has given a project he wanted to a newer colleague. He is talking about resigning. Write the dialogue in which you practise active listening: reformulate what he says (si je comprends bien...), validate his feelings with the subjunctive (je comprends que tu sois...), ask open questions, and help him work out what he actually wants, without judging or giving advice too soon.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Reformulates at least twice (\"si je comprends bien\", \"autrement dit\", \"tu veux dire que\").",
        "Validates feelings with a verb or expression + subjunctive (\"je comprends que tu sois déçu\", \"c'est normal que tu le prennes mal\").",
        "Asks open questions (\"qu'est-ce qui te blesse le plus ?\", \"qu'est-ce que tu attendrais de lui ?\") instead of closed ones or advice.",
        "Shows a progression from anger to a clearer need, in natural spoken French."
      ],
      "modelAnswer": "Hugo : C'est fini, je démissionne. Le projet Delta, il l'a donné à Maxime. Maxime ! Il est là depuis six mois !\nMoi : Si je comprends bien, tu espérais ce projet et c'est un collègue plus récent qui l'a obtenu.\nHugo : Je ne l'espérais pas, il me revenait ! Ça fait deux ans que je prépare ce dossier.\nMoi : Je comprends que tu sois furieux. Deux ans de travail, c'est énorme. Qu'est-ce qui te blesse le plus, dans cette histoire ?\nHugo : Que personne ne m'ait rien dit. Je l'ai appris par un mail collectif.\nMoi : Autrement dit, ce n'est pas seulement le projet, c'est la manière dont ça s'est passé.\nHugo : Oui... Exactement. J'ai l'impression de ne pas compter.\nMoi : C'est normal que tu te sentes mis de côté. Et qu'est-ce que tu attendrais de ton chef, aujourd'hui ?\nHugo : Qu'il m'explique. Qu'il me dise ce qu'il me reproche, s'il me reproche quelque chose.\nMoi : Et la démission, tu y penses toujours ?\nHugo : Pas tout de suite. D'abord, je vais lui demander un entretien.\nMoi : Ça me paraît une bonne idée. Tu veux qu'on prépare ce que tu vas lui dire ?",
      "explanation": "The listener reformulates (\"Si je comprends bien\", \"Autrement dit\") rather than judging, validates feelings with the subjunctive (\"Je comprends que tu sois furieux\", \"C'est normal que tu te sentes mis de côté\"), and asks open questions (\"Qu'est-ce qui te blesse le plus ?\", \"qu'est-ce que tu attendrais de ton chef ?\"). The dialogue moves from anger to the real need, to be heard and told why, and Hugo's \"Que personne ne m'ait rien dit\" uses the past subjunctive."
    }
  ],
  "c2-conflict-resolution-4": [
    {
      "type": "write",
      "prompt": "At your best friend Clara's birthday dinner, you made a joke in front of everyone about her recent breakup, and she left the table in tears. She has not answered your calls for three days. Write her a sincere letter of apology: take full responsibility (no si j'ai pu te blesser), name what you did and its effect on her, express regret with the subjunctive and the past infinitive, and suggest a way to make amends without putting pressure on her.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Takes full responsibility with a past infinitive (\"je suis désolé(e) de t'avoir blessée\", \"je m'en veux d'avoir dit\").",
        "Uses \"je regrette sincèrement que\" or another regret formula + subjunctive.",
        "Avoids false apologies (\"si j'ai pu te blesser\", \"je suis désolé(e) que tu l'aies mal pris\") and names the act and its effect precisely.",
        "Proposes amends without pressure and keeps a warm, personal register."
      ],
      "modelAnswer": "Ma chère Clara,\n\nJe t'écris parce que je ne sais pas si tu as envie de m'entendre, et je le comprends.\n\nSamedi soir, devant tous tes amis, j'ai fait une plaisanterie sur ta rupture avec Julien. Je voulais faire rire, j'ai humilié la personne que j'aime le plus au monde, le jour de son anniversaire. Je suis profondément désolée de t'avoir blessée, et je m'en veux d'avoir transformé ta fête en souvenir pénible.\n\nIl n'y a pas d'excuse à cela. Ce n'était ni la fatigue ni le vin : c'était de la maladresse et un manque d'attention à ce que tu traverses. Je regrette sincèrement que tu aies dû quitter la table à cause de moi.\n\nJe te dois des excuses, et pas seulement par écrit. Quand tu te sentiras prête, et seulement à ce moment-là, j'aimerais t'inviter à dîner, toutes les deux, pour te les présenter en face.\n\nD'ici là, je ne t'appellerai plus. Je serai là quand tu le voudras.\n\nJe t'embrasse très fort,\nInès",
      "explanation": "The apology takes full responsibility with past infinitives (\"désolée de t'avoir blessée\", \"je m'en veux d'avoir transformé\") and \"je regrette sincèrement que tu aies dû\" with the past subjunctive. It names the act and its effect precisely, explicitly refuses excuses (\"Ce n'était ni la fatigue ni le vin\"), avoids the false \"si j'ai pu te blesser\", and offers amends without pressure (\"Quand tu te sentiras prête, et seulement à ce moment-là\")."
    }
  ],
  "c2-historical-narrative-2": [
    {
      "type": "write",
      "prompt": "A science museum is preparing a panel on Marie Curie for its entrance hall. Write the panel text: a short biographical narrative from her arrival in Paris to her death and entry into the Panthéon. Use the imparfait narratif (or de rupture) for several key events, combined with the passé simple, and precise dates.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Uses the imparfait narratif for at least three single, dated events (\"En 1903, elle recevait le prix Nobel\").",
        "Combines it with the passé simple and the imparfait of background in a coherent narrative.",
        "Gives precise dates and facts in chronological order.",
        "Has the concise, informative register of a museum panel, with a title."
      ],
      "modelAnswer": "Marie Curie (1867-1934), une vie pour la science\n\nEn 1891, une jeune Polonaise de vingt-quatre ans, Maria Skłodowska, arriva à Paris pour étudier à la Sorbonne. Elle vivait alors dans une mansarde glaciale et travaillait jusqu'à la nuit.\n\nQuatre ans plus tard, elle épousait le physicien Pierre Curie. Ensemble, ils découvrirent en 1898 deux nouveaux éléments, le polonium et le radium. En 1903, Marie Curie recevait, avec Pierre et Henri Becquerel, le prix Nobel de physique : elle était la première femme à obtenir cette distinction.\n\nLe 19 avril 1906, Pierre mourait, renversé par une voiture à cheval. Quelques mois après, sa veuve lui succédait à la Sorbonne, première femme à y enseigner. En 1911, elle obtenait un second prix Nobel, de chimie cette fois.\n\nPendant la Grande Guerre, elle équipa des voitures de radiologie qui permirent de soigner des milliers de blessés.\n\nElle mourut en 1934, victime des radiations qu'elle avait tant étudiées. En 1995, ses cendres entraient au Panthéon.",
      "explanation": "The panel alternates the passé simple (\"arriva\", \"découvrirent\", \"équipa\", \"mourut\") with the imparfait narratif for single dated events (\"elle épousait\", \"recevait\", \"Pierre mourait\", \"succédait\", \"obtenait\", \"ses cendres entraient au Panthéon\"), which slows the pace and highlights each turning point. The ordinary imparfait (\"vivait\", \"travaillait\", \"était\") describes the background."
    }
  ],
  "c2-historical-narrative-4": [
    {
      "type": "write",
      "prompt": "You are a tour guide at the Château de Versailles. Write the short text you deliver to visitors in the royal apartments about the events of 5 and 6 October 1789, when the women of Paris marched to Versailles and brought the royal family back to the capital. Tell it in the présent de narration to make it vivid, with at least one futur historique and one futur dans le passé (or allait / devait + infinitive) to anticipate what the king and queen do not yet know.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Tells the main events in the présent de narration.",
        "Uses at least one futur historique to anticipate a later event (\"il sera guillotiné en 1793\").",
        "Uses at least one futur dans le passé or \"allait / devait\" + infinitive for what the characters could not know (\"elle ne reverrait jamais Versailles\").",
        "Addresses the visitors as a guide would (vous, imperatives, deictics like \"ici\", \"cette fenêtre\")."
      ],
      "modelAnswer": "Mesdames et messieurs, regardez bien cette pièce. Nous sommes le 5 octobre 1789.\n\nCe matin-là, à Paris, le pain manque. Des milliers de femmes se rassemblent devant l'Hôtel de Ville, puis prennent la route de Versailles, sous la pluie, armées de piques et même de canons. Elles arrivent ici en fin d'après-midi et réclament du pain au roi.\n\nLouis XVI les reçoit, promet, temporise. La nuit tombe. Mais à l'aube du 6 octobre, une partie de la foule pénètre dans le château. Des gardes sont tués. Marie-Antoinette s'enfuit par un passage secret jusqu'à la chambre du roi, à quelques mètres d'où vous vous trouvez.\n\nDans la matinée, la famille royale paraît au balcon de la cour de marbre. La foule exige son départ pour Paris. À une heure de l'après-midi, le cortège quitte Versailles.\n\nEn quittant la cour, la reine croyait sans doute revenir bientôt. Elle ne reverrait jamais Versailles. Le roi sera guillotiné en janvier 1793 ; elle le suivra neuf mois plus tard.\n\nSuivez-moi, je vous prie, vers la galerie des Glaces.",
      "explanation": "The guide tells the events in the présent de narration (\"le pain manque\", \"elles arrivent\", \"le cortège quitte Versailles\") to make them immediate. \"Elle ne reverrait jamais Versailles\" is a futur dans le passé that measures the queen's ignorance, while \"sera guillotiné\" and \"le suivra\" are futurs historiques that jump ahead. Direct address (\"regardez\", \"suivez-moi\") and deictics (\"cette pièce\", \"ici\", \"d'où vous vous trouvez\") anchor the story in the room."
    }
  ],
  "c2-historical-narrative-7": [
    {
      "type": "write",
      "prompt": "Write a short review of a historical film or series you know (for example Ridley Scott's Napoléon, or a film about the French Revolution or the Occupation) for a history society's newsletter, focusing on its historical accuracy. Keep clearly apart what is established fact, what is a reasonable inference and what is your own judgement, and modalise your claims with the historian's tools (tout porte à croire que, il est vraisemblable que, il est peu probable que, devoir of probability).",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Separates facts, inferences and judgements explicitly.",
        "Uses at least three modalising expressions (\"tout porte à croire que\", \"il est vraisemblable que\", \"il est peu probable que\" + subjunctive, \"il a dû\").",
        "Gives at least two precise examples of accuracy or inaccuracy.",
        "Has the structure of a short critical review: the film, the analysis, a verdict."
      ],
      "modelAnswer": "Napoléon, de Ridley Scott : le spectacle contre l'histoire\n\nLe film de Ridley Scott, sorti en 2023, retrace la carrière de Bonaparte du siège de Toulon à Sainte-Hélène. Son ambition visuelle est indéniable ; sa fidélité historique, beaucoup moins.\n\nCommençons par les faits. Le film montre Bonaparte assistant à l'exécution de Marie-Antoinette en octobre 1793 : aucun document ne l'atteste, et le jeune officier se trouvait alors devant Toulon. De même, les canons tirant sur les pyramides relèvent de la pure invention.\n\nCertaines libertés relèvent davantage de l'interprétation. Il est vraisemblable que la relation avec Joséphine ait été passionnelle et orageuse : leur correspondance le suggère. En revanche, il est peu probable que Napoléon se soit montré aussi maladroit en société que le film le dépeint. Tout porte à croire, au contraire, que son charme a dû jouer un rôle dans son ascension.\n\nMon jugement, maintenant : le film n'est pas un documentaire, et on ne saurait le lui reprocher. Mais en réduisant l'Empereur à un homme jaloux et colérique, il passe à côté de ce qui fascine encore les historiens : l'administrateur, le législateur, le stratège.",
      "explanation": "The review keeps three levels apart: documented facts (\"aucun document ne l'atteste\", \"relèvent de la pure invention\"), inferences (\"Il est vraisemblable que... ait été\", \"il est peu probable que... se soit montré\", both with the subjunctive, and \"Tout porte à croire que son charme a dû jouer\" with devoir of probability), and an explicitly signposted personal judgement (\"Mon jugement, maintenant\"). \"On ne saurait le lui reprocher\" adds a learned concession."
    }
  ],
  "c2-historical-narrative-9": [
    {
      "type": "write",
      "prompt": "Your (real or imaginary) town in the north of France is opening a museum in the old textile mill that once employed half its inhabitants. As the museum's director, write the short speech you will give at the inauguration, retracing the history of the town's industry with the vocabulary of historical processes: essor, apogée, tournant, déclin, crise, reconversion, and the dates and figures that mark each stage.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least five words of historical process in context (\"essor\", \"apogée\", \"tournant\", \"charnière\", \"déclin\", \"reconversion\", \"mutation\").",
        "Organises the history in clear stages with dates and figures.",
        "Uses varied past tenses and at least one learned connector (\"au lendemain de\", \"à la faveur de\", \"au terme de\").",
        "Has the register of an official speech: address to the guests, thanks, a final appeal."
      ],
      "modelAnswer": "Monsieur le Maire, Mesdames et Messieurs les élus, chers anciens de la filature, chers amis,\n\nC'est une émotion particulière de vous accueillir aujourd'hui dans ces murs, où tant d'entre vous ont travaillé.\n\nL'histoire de notre ville commence vraiment en 1852, lorsque la famille Delattre installe ici ses premiers métiers à tisser. À la faveur du chemin de fer, la laine brute arrive par wagons entiers, et la filature connaît un essor fulgurant. À son apogée, au début des années 1950, elle emploie 2 400 ouvriers, soit près d'un habitant sur deux.\n\nLe tournant survient au cours des années 1970. Face à la concurrence asiatique, les commandes s'effondrent, les ateliers ferment un à un : c'est le début d'un long déclin. Au terme de vingt ans de crise, la dernière machine s'arrête en 1993.\n\nMais une ville ne se résume pas à ses usines. La reconversion a été douloureuse ; elle a pourtant fait naître de nouveaux métiers, dans la logistique et les services.\n\nCe musée n'est pas un lieu de nostalgie. C'est un lieu de mémoire, pour que nos enfants sachent d'où ils viennent.\n\nJe vous remercie.",
      "explanation": "The speech structures the town's history with the vocabulary of historical process: \"essor\", \"apogée\", \"tournant\", \"déclin\", \"crise\", \"reconversion\". Learned connectors (\"à la faveur du chemin de fer\", \"au terme de vingt ans de crise\") link the stages, the présent de narration makes the past vivid, and the passé composé (\"a été douloureuse\", \"a fait naître\") brings it up to the present. The final \"pour que nos enfants sachent\" uses the subjunctive of purpose."
    }
  ],
  "c2-hypothesis-language-transformations": [
    {
      "type": "write",
      "prompt": "Your friend Baptiste has shared on a group chat a headline that says « Le chocolat noir rend plus intelligent, selon une étude ». You have read the study: it observed, in 900 adults, that those who ate dark chocolate several times a week scored slightly higher on memory tests. Write him an informal but precise email (tu) explaining what the study does and does not show: correlation versus causation, possible biases, and how the claim should be phrased cautiously.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Distinguishes correlation from causation explicitly (\"corrélation n'est pas causalité\", \"être associé à\" vs \"provoquer\").",
        "Names at least one possible bias or confounding factor (\"un biais\", \"un facteur de confusion\", \"l'échantillon\").",
        "Rewrites the claim as a cautious hypothesis with the conditional or hedging (\"serait associée à\", \"il semblerait que\", \"rien ne permet d'affirmer que\").",
        "Keeps a friendly, informal register (tu, humour) while being precise."
      ],
      "modelAnswer": "Salut Baptiste,\n\nDésolé de jouer les rabat-joie, mais j'ai lu l'étude dont parle ton article, et le titre va un peu vite en besogne.\n\nLes chercheurs ont interrogé 900 adultes sur leurs habitudes alimentaires et leur ont fait passer des tests de mémoire. Ceux qui mangeaient du chocolat noir plusieurs fois par semaine ont obtenu des scores légèrement supérieurs. C'est intéressant, mais c'est une corrélation, pas une causalité : l'étude ne montre pas que le chocolat rend plus intelligent.\n\nIl peut y avoir des facteurs de confusion. Par exemple, les gens qui achètent du chocolat noir à 70 % ont peut-être un niveau d'études ou de revenus plus élevé, ce qui joue aussi sur les résultats aux tests. Et comme il n'y avait pas de groupe témoin, impossible de trancher.\n\nSi on voulait être rigoureux, il faudrait dire quelque chose comme : « Une consommation régulière de chocolat noir serait associée à de meilleures performances de mémoire, sans qu'un lien de cause à effet ait été établi. » Moins vendeur, je te l'accorde !\n\nBref, tu peux continuer à manger du chocolat, mais pas pour ton QI.\n\nÀ plus,\nNico",
      "explanation": "The email separates what was observed (a correlation in 900 adults) from what the headline claims (causation), names a confounding factor (education and income) and the missing control group (\"groupe témoin\"). The cautious reformulation uses the conditional \"serait associée à\" and \"sans qu'un lien de cause à effet ait été établi\", with the past subjunctive after \"sans que\"."
    }
  ],
  "c2-innovation-word-web": [
    {
      "type": "write",
      "prompt": "You are the co-founder of a start-up in Grenoble that has developed a small sensor which detects water leaks in old buildings. Write the three-minute pitch you will deliver to a panel of investors at a regional innovation competition: the problem, your solution and prototype, the market, the state of your patent, how you plan to scale up, and how much you want to raise.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses the vocabulary of innovation precisely: \"le prototype\", \"le brevet\", \"la levée de fonds\", \"passer à l'échelle\", \"l'innovation de rupture\" or \"incrémentale\", \"l'apprentissage automatique\".",
        "Follows the logic of a pitch: problem, solution, market, traction, request.",
        "Gives precise figures (market size, tests, amount to raise) and uses the future and conditional for plans.",
        "Has the oral, persuasive register of a pitch addressed to investors (vous, short sentences, a strong ending)."
      ],
      "modelAnswer": "Mesdames et messieurs, bonjour.\n\nEn France, une fuite d'eau sur cinq dans les immeubles anciens n'est découverte qu'après avoir causé des dégâts. Coût moyen d'un sinistre : 4 000 euros. Et pendant ce temps, des milliers de litres partent dans les murs.\n\nNotre solution s'appelle Goutte. C'est un capteur de la taille d'une pièce de deux euros, que l'on fixe sur les canalisations. Grâce à l'apprentissage automatique, il distingue un écoulement normal d'une micro-fuite et alerte le syndic en temps réel.\n\nCe n'est pas une innovation de rupture : c'est une innovation incrémentale, simple, bon marché, et c'est justement sa force. Notre prototype a été testé pendant un an dans quarante logements grenoblois : il a détecté 27 fuites, dont 22 invisibles à l'œil nu.\n\nNotre brevet a été déposé en mars dernier. Le marché ? Plus de huit millions de logements construits avant 1970 en France.\n\nPour passer à l'échelle, nous devons industrialiser la production et signer avec deux grands bailleurs sociaux, avec qui nous sommes déjà en discussion. C'est pourquoi nous cherchons à lever 800 000 euros.\n\nAidez-nous à faire en sorte que plus aucune fuite ne passe inaperçue. Merci.",
      "explanation": "The pitch follows the expected sequence (problem, solution, proof, market, request) and uses the vocabulary of innovation precisely: \"apprentissage automatique\", \"innovation de rupture\" vs \"incrémentale\", \"prototype\", \"brevet déposé\", \"passer à l'échelle\", \"lever 800 000 euros\". Short nominal sentences (\"Coût moyen d'un sinistre\"), a hypophora (\"Le marché ? Plus de huit millions...\") and a closing imperative give it an oral, persuasive rhythm."
    }
  ],
  "c2-environment-politics-1": [
    {
      "type": "write",
      "prompt": "You live in a 1970s apartment building in Rennes whose heating bills have doubled. Write a short proposal to the other co-owners (copropriétaires), to be discussed at the next general meeting, for an energy renovation of the building. Use precise climate and energy vocabulary (l'empreinte carbone, la sobriété énergétique, la rénovation thermique, l'isolation, les énergies renouvelables, atténuation vs adaptation), state the costs and aids, and end with a concrete request for a vote.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least five terms of climate and energy precisely (\"la rénovation énergétique\", \"l'isolation thermique par l'extérieur\", \"la sobriété\", \"l'empreinte carbone\", \"la passoire thermique\", \"l'adaptation aux canicules\").",
        "Distinguishes mitigation from adaptation, or justifies the project on both grounds.",
        "Gives figures (costs, savings, aids such as MaPrimeRénov') and uses the conditional or future to present the expected effects.",
        "Has the structure and register of a proposal: title, context, proposal, costs, request."
      ],
      "modelAnswer": "Proposition à l'attention des copropriétaires de la résidence Les Tilleuls\nObjet : rénovation énergétique de l'immeuble\n\nConstat\nNotre immeuble, construit en 1972, est classé F au diagnostic de performance énergétique : c'est une passoire thermique. En deux ans, nos charges de chauffage ont doublé, et notre empreinte carbone reste très élevée, puisque la chaudière collective fonctionne au fioul.\n\nProposition\nJe propose un programme en deux volets. Le premier relève de l'atténuation : isolation thermique par l'extérieur, remplacement des fenêtres des parties communes et raccordement au réseau de chaleur urbain, alimenté à 60 % par des énergies renouvelables. Le second relève de l'adaptation : des volets extérieurs et la végétalisation de la cour, pour mieux supporter les canicules, de plus en plus fréquentes.\n\nCoût et aides\nSelon le devis du bureau d'études, l'ensemble coûterait 640 000 euros, soit environ 16 000 euros par logement. Grâce à MaPrimeRénov' Copropriété et aux certificats d'économies d'énergie, le reste à charge serait ramené à 7 000 euros en moyenne, et nos factures baisseraient d'environ 45 %.\n\nDemande\nJe vous demande d'inscrire ce projet à l'ordre du jour de l'assemblée générale du 15 mai et de voter le lancement d'un audit énergétique complet.",
      "explanation": "The proposal uses the vocabulary of energy precisely (\"passoire thermique\", \"diagnostic de performance énergétique\", \"isolation thermique par l'extérieur\", \"réseau de chaleur\", \"énergies renouvelables\", \"empreinte carbone\") and separates \"l'atténuation\" (cutting emissions) from \"l'adaptation\" (coping with heatwaves). The conditional (\"coûterait\", \"serait ramené\", \"baisseraient\") presents estimated effects, and the headed structure ends on a concrete request for a vote."
    }
  ],
  "c2-environment-politics-2": [
    {
      "type": "write",
      "prompt": "Your friend Sarah in Canada has read that the French government has just used the 49.3 to pass its budget and survived a motion de censure, and she is confused. Write her an informal email (tu) explaining how this works: the Assemblée nationale and the Sénat, the majorité relative since the last elections, the 49.3, the motion de censure and what would have happened if it had been adopted (dissolution, cohabitation...).",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Explains the institutions with precise terms: \"l'Assemblée nationale\", \"le Sénat\", \"les députés\", \"la majorité relative\" vs \"absolue\", \"le gouvernement\", \"le Premier ministre\".",
        "Explains the mechanism of the 49.3 and the \"motion de censure\" accurately.",
        "Uses an unreal past conditional (\"si la motion avait été adoptée, le gouvernement aurait dû démissionner\").",
        "Keeps an informal, explanatory register (tu, \"en gros\", \"pour faire simple\")."
      ],
      "modelAnswer": "Salut Sarah,\n\nPas de panique, même beaucoup de Français ont du mal à suivre ! Je t'explique.\n\nEn France, le Parlement a deux chambres : l'Assemblée nationale, élue directement par les citoyens, et le Sénat. Pour le budget, c'est l'Assemblée qui a le dernier mot. Le problème, c'est que depuis les dernières législatives, aucun camp n'a la majorité absolue : le gouvernement n'a qu'une majorité relative. Autrement dit, il ne peut pas être sûr de faire voter ses textes.\n\nC'est là qu'intervient le fameux 49.3, un article de la Constitution. En gros, le Premier ministre peut faire adopter un texte sans vote, à condition d'engager la responsabilité de son gouvernement. Les députés ont alors 24 heures pour déposer une motion de censure. Si elle n'obtient pas la majorité absolue des députés, le texte est considéré comme adopté. C'est ce qui s'est passé cette semaine.\n\nSi la motion avait été adoptée, le gouvernement aurait dû démissionner, et le texte serait tombé. Le président aurait pu nommer un autre Premier ministre, voire dissoudre l'Assemblée.\n\nBref, c'est légal, mais très critiqué : beaucoup y voient un passage en force.\n\nBises,\nClément",
      "explanation": "The email explains the institutions precisely (\"l'Assemblée nationale\", \"le Sénat\", \"majorité absolue\" vs \"relative\") and the mechanism of the 49.3: the government \"engage sa responsabilité\", deputies have 24 hours to table a \"motion de censure\", and the text is adopted unless the motion wins an absolute majority. The unreal past conditional (\"Si la motion avait été adoptée, le gouvernement aurait dû démissionner... aurait pu... dissoudre\") sets out what would have happened."
    }
  ],
  "c2-free-will-dialogue-lab": [
    {
      "type": "write",
      "prompt": "Two friends, Léa, a law student, and Samir, a neuroscience student, argue on a terrace about whether we are really responsible for our actions. Write their dialogue. Each must argue with conceptual precision: distinguish liberté from absence de contrainte, libre arbitre from déterminisme, cause from raison, and use the phrases of philosophical discussion (tu confonds..., cela suppose que..., en tant que..., si l'on admet que...).",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least four key notions precisely: \"le libre arbitre\", \"le déterminisme\", \"la contrainte\", \"la responsabilité\", \"la conscience\", \"la cause\" vs \"la raison\".",
        "Uses the formulas of philosophical argument (\"tu confonds A et B\", \"cela suppose que\", \"si l'on admet que\", \"en tant que\").",
        "Builds a real exchange: a thesis, an objection, a distinction that moves the debate forward.",
        "Keeps the tone of a lively but rigorous conversation between friends (tu)."
      ],
      "modelAnswer": "Samir : Franchement, le libre arbitre, c'est une illusion. Nos décisions sont déterminées par notre cerveau, nos gènes, notre éducation.\nLéa : Si l'on admet que tout est déterminé, alors plus personne n'est responsable de rien. Tu supprimes les tribunaux ?\nSamir : Pas forcément. On peut punir pour protéger la société, sans parler de faute morale.\nLéa : Tu confonds deux choses : la cause d'un acte et sa raison. Ton cerveau est peut-être la cause physique de ma décision, mais quand je choisis de tenir une promesse, j'agis pour une raison.\nSamir : Et d'où vient cette raison ? Elle aussi a une histoire.\nLéa : Sans doute. Mais être libre, ce n'est pas agir sans cause, c'est agir sans contrainte extérieure, en accord avec ce que l'on a réfléchi.\nSamir : Cela suppose qu'il existe un « moi » qui réfléchit, distinct des neurones.\nLéa : Pas nécessairement distinct. En tant qu'être conscient, je peux prendre de la distance avec mes désirs. C'est peut-être ça, la liberté : pas une exception aux lois de la nature, mais une manière de les habiter.\nSamir : Joli. Mais je reste sceptique.\nLéa : Tant mieux. Le doute aussi, c'est une liberté.",
      "explanation": "The dialogue uses the core notions precisely (\"le libre arbitre\", \"déterminées\", \"responsable\", \"la cause\" vs \"la raison\", \"contrainte extérieure\", \"être conscient\") and the moves of philosophical discussion: \"Si l'on admet que\", \"Tu confonds deux choses\", \"Cela suppose qu'il existe\", \"En tant qu'être conscient\". The debate advances through a distinction: freedom defined not as acting without a cause but as acting without external constraint."
    }
  ],
  "c2-abstract-nouns-word-web": [
    {
      "type": "write",
      "prompt": "You run a monthly café philo in a bookshop in Toulouse. This month's question was « Faut-il se fier aux apparences ? ». Write the short report (compte rendu) of the session for the bookshop's newsletter: the question, how the discussion unfolded, the main distinctions participants drew (essence / apparence, nécessité / contingence, universel / particulier, fait / droit...), and an opening question for next time.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least three pairs of philosophical opposites precisely (\"l'essence\" / \"l'apparence\", \"le nécessaire\" / \"le contingent\", \"l'universel\" / \"le particulier\", \"le fait\" / \"le droit\").",
        "Uses the substantivised adjective at least twice (\"le vrai\", \"le visible\", \"l'essentiel\").",
        "Reports the participants' positions with varied reporting verbs and nominal style.",
        "Has the structure of a compte rendu: the question, the progression of the discussion, a conclusion and an opening."
      ],
      "modelAnswer": "Café philo du 14 novembre : « Faut-il se fier aux apparences ? »\n\nUne trentaine de participants s'étaient réunis jeudi soir autour de cette question, en apparence très simple.\n\nD'emblée, plusieurs intervenants ont opposé l'apparence à l'essence : ce qui se montre ne serait qu'un masque, derrière lequel se cacherait le vrai. Une étudiante a rappelé que cette méfiance remonte à Platon et à son allégorie de la caverne.\n\nUn enseignant a toutefois objecté que nous n'avons jamais accès qu'au visible. Si l'essence est par définition cachée, comment la connaître sans passer par ce qui apparaît ? L'apparence ne serait donc pas l'ennemie du vrai, mais son seul chemin.\n\nLa discussion s'est ensuite déplacée vers le particulier et l'universel : juger quelqu'un sur sa tenue, c'est faire d'un trait contingent une vérité nécessaire. Plusieurs participants ont souligné qu'il faut distinguer le fait, nous jugeons tous sur les apparences, du droit : avons-nous raison de le faire ?\n\nEn conclusion, l'essentiel ne serait peut-être pas de fuir les apparences, mais d'apprendre à les interroger.\n\nProchaine séance, le 12 décembre : « Peut-on être juste sans être bienveillant ? »",
      "explanation": "The report uses the opposites of philosophical vocabulary (\"l'apparence\" / \"l'essence\", \"le particulier\" / \"l'universel\", \"contingent\" / \"nécessaire\", \"le fait\" / \"le droit\") and substantivised adjectives (\"le vrai\", \"le visible\", \"l'essentiel\"). Positions are reported with varied verbs (\"ont opposé\", \"a rappelé\", \"a objecté\", \"ont souligné\") and the conditional (\"ne serait qu'un masque\") marks views that are reported, not endorsed."
    }
  ],
  "c2-ambivalence-dissonance-contrast": [
    {
      "type": "write",
      "prompt": "Write a personal opinion post for a French blog about ecology and everyday life, on the theme « J'aime prendre l'avion, et j'en ai honte ». Describe honestly the tension between your convictions and your behaviour, and make the difference clear between ambivalence (mixed feelings about the same thing) and cognitive dissonance (acting against what you believe), using the precise vocabulary of each.",
      "minWords": 120,
      "maxWords": 240,
      "rubric": [
        "Uses the vocabulary of ambivalence precisely (\"être partagé(e)\", \"tiraillé(e) entre\", \"des sentiments mêlés\", \"ambivalent\").",
        "Uses the vocabulary of cognitive dissonance precisely (\"la dissonance cognitive\", \"se justifier\", \"se trouver des excuses\", \"en contradiction avec mes valeurs\").",
        "Distinguishes the two concepts explicitly with an example of each.",
        "Has the honest, reflective register of a personal blog post, with a title and a conclusion."
      ],
      "modelAnswer": "J'aime prendre l'avion, et j'en ai honte\n\nJe l'avoue : j'adore l'avion. Le moment où l'appareil quitte le sol, la vue sur les nuages, l'idée de me réveiller dans une autre langue. Et pourtant, chaque fois que je réserve un billet, quelque chose se serre en moi.\n\nPendant longtemps, j'ai cru que j'étais simplement ambivalente. Après tout, je suis partagée vis-à-vis de beaucoup de choses : j'aime Paris et je m'y sens étouffer, j'aime ma famille et je la fuis un peu. Ces sentiments mêlés ne se contredisent pas vraiment ; ils coexistent.\n\nMais avec l'avion, c'est autre chose. Je sais combien pèse un aller-retour Paris-Montréal dans mon empreinte carbone. Je milite pour le climat. Et je pars quand même. Ce n'est plus de l'ambivalence, c'est de la dissonance cognitive : mes actes sont en contradiction avec mes valeurs.\n\nLe plus troublant, c'est la façon dont mon esprit réduit l'inconfort. Je me trouve des excuses : « c'est pour voir ma sœur », « je compenserai ». Je me justifie pour ne pas avoir à changer.\n\nAlors cette année, j'essaie autre chose : un seul vol, assumé, et le train pour tout le reste. Pas pour être pure. Pour être un peu plus cohérente.",
      "explanation": "The post separates the two concepts with examples: ambivalence is \"être partagée\", \"des sentiments mêlés\" that \"coexistent\" (loving Paris and suffocating there), while \"la dissonance cognitive\" is acting \"en contradiction avec mes valeurs\" and reducing the discomfort by justifying oneself (\"Je me trouve des excuses\", \"Je me justifie\"). The pivot \"Ce n'est plus de l'ambivalence, c'est de la dissonance cognitive\" makes the distinction explicit."
    }
  ],
  "c2-emotions-literature-spiral": [
    {
      "type": "write",
      "prompt": "Write an extract from a short story (in the third person) in which a woman in her sixties, Hélène, empties her late mother's flat in Lyon and finds a bundle of old letters. Render her complex inner life through precise emotion vocabulary (le désarroi, l'amertume, la nostalgie, le remords, le soulagement...), at least one passage in style indirect libre, and one image or figure of speech.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least four precise emotion nouns or verbs (\"le désarroi\", \"l'amertume\", \"la nostalgie\", \"le remords\", \"éprouver\", \"un pincement\").",
        "Includes at least one passage of style indirect libre (the character's thoughts in the third person and past tenses, with her questions or exclamations).",
        "Uses at least one metaphor, comparison or personification to express emotion.",
        "Is a coherent narrative extract in the passé simple and imparfait (or a consistent tense system)."
      ],
      "modelAnswer": "Hélène ouvrit la dernière armoire un mardi, en fin d'après-midi. L'appartement de la rue Vendôme sentait encore la lavande et le café froid, comme si sa mère allait revenir d'une minute à l'autre.\n\nSous une pile de nappes, elle trouva une boîte en fer. Des lettres, une cinquantaine, nouées d'un ruban bleu. L'écriture n'était pas celle de son père.\n\nElle s'assit sur le lit. Qui était cet homme qui signait « ton Jean » ? Depuis quand ? Et pourquoi sa mère, si droite, si sévère, avait-elle gardé tout cela pendant soixante ans ? Elle qui lui avait tant reproché, à elle, son divorce !\n\nHélène éprouva d'abord un désarroi presque physique, puis une amertume qui lui serra la gorge. Toutes ces leçons de morale... Mais à mesure qu'elle lisait, quelque chose céda. Ces lettres racontaient une jeune femme qu'elle n'avait jamais connue, rieuse, hésitante, amoureuse.\n\nLa nostalgie l'envahit comme une marée lente, et avec elle, un remords tardif : elle n'avait jamais posé de questions.\n\nDehors, la nuit tombait sur la Saône. Hélène rangea les lettres dans son sac. Elle ne les jetterait pas.",
      "explanation": "The extract names Hélène's emotions precisely and in sequence: \"désarroi\", \"amertume\", \"nostalgie\", \"remords\". The questions and the exclamation \"Elle qui lui avait tant reproché, à elle, son divorce !\" are style indirect libre: her thoughts, in the third person and past tenses, without a verb of saying. \"Comme une marée lente\" and \"quelque chose céda\" give emotion a physical image, and \"Elle ne les jetterait pas\" ends on a futur dans le passé."
    }
  ],
  "c2-plot-character-word-web": [
    {
      "type": "write",
      "prompt": "You have written a first novel and are sending it to a French publishing house. Write the cover email (lettre d'accompagnement) to the editorial committee presenting your manuscript: title, genre and length, a short synopsis that does not give away the ending, and the critic's vocabulary to describe its construction (incipit, nœud, coup de théâtre, huis clos, arc du personnage, mise en abyme).",
      "minWords": 120,
      "maxWords": 240,
      "rubric": [
        "Uses at least four terms of narrative analysis precisely (\"l'incipit\", \"le nœud\", \"le coup de théâtre\", \"le huis clos\", \"l'arc\", \"la mise en abyme\", \"le dénouement\").",
        "Gives a synopsis in the present tense that withholds the ending.",
        "Presents the manuscript's facts (title, genre, length) and the author briefly.",
        "Uses the formal register of a submission (\"Madame, Monsieur\", \"j'ai l'honneur de\" or \"je me permets de\", a closing formula)."
      ],
      "modelAnswer": "Objet : proposition de manuscrit, La Maison des Ormes\n\nMadame, Monsieur,\n\nJe me permets de vous adresser mon premier roman, La Maison des Ormes, un récit à suspense d'environ 280 000 signes.\n\nUn soir de novembre, six cousins se retrouvent dans la maison familiale de Corrèze pour la lecture du testament de leur grand-mère. Une tempête coupe la route et l'électricité : commence alors un huis clos de trois jours. L'incipit s'ouvre sur une phrase de la défunte, lue à voix haute par le notaire : « Je sais lequel d'entre vous m'a menti. »\n\nLe nœud de l'intrigue repose sur ce secret, que chacun croit être le sien. À mi-parcours, un coup de théâtre (la découverte d'un manuscrit inachevé de la grand-mère, qui raconte cette même soirée) introduit une mise en abyme qui trouble la frontière entre le récit et sa fiction. Le personnage principal, Mathilde, la plus effacée des cousines, accomplit un arc complet, de la soumission à la révolte.\n\nProfesseure de lettres à Limoges, j'écris depuis dix ans ; deux de mes nouvelles ont été primées.\n\nVous trouverez ci-joint le manuscrit complet. Je vous remercie de l'attention que vous voudrez bien lui porter et vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\nClaire Fournier",
      "explanation": "The email presents the novel with the critic's vocabulary used precisely: \"huis clos\", \"l'incipit\", \"le nœud de l'intrigue\", \"un coup de théâtre\", \"une mise en abyme\" and the character's \"arc\". The synopsis is in the present and stops before the dénouement, and the formal submission frame (\"Je me permets de vous adresser\", \"ci-joint\", \"l'attention que vous voudrez bien lui porter\") suits a letter to a publisher."
    }
  ],
  "c2-criticism-3": [
    {
      "type": "write",
      "prompt": "The Art Institute of Chicago is preparing a French-language audioguide. Write the text for Gustave Caillebotte's Rue de Paris, temps de pluie (1877): describe the painting precisely for a visitor standing in front of it (composition, foreground and background, the light, the palette, the touch), situate it in the context of Impressionism, and say what makes it remarkable.",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Uses the vocabulary of painting precisely: \"la toile\", \"la composition\", \"le premier plan\" / \"l'arrière-plan\", \"la palette\", \"la touche\", \"la perspective\", \"le cadrage\".",
        "Guides the visitor's eye with spatial expressions and imperatives (\"regardez\", \"à droite\", \"au centre\").",
        "Situates the work in its movement and period accurately.",
        "Has the oral, engaging register of an audioguide."
      ],
      "modelAnswer": "Rue de Paris, temps de pluie, Gustave Caillebotte, 1877\n\nVous voici devant l'une des toiles les plus célèbres de ce musée. Prenez un peu de recul : nous sommes à Paris, près de la gare Saint-Lazare, un jour de pluie.\n\nRegardez d'abord le premier plan, à droite : un couple élégant avance vers nous sous un parapluie. Tout au bord, un autre passant est coupé par le cadre, comme dans une photographie prise sur le vif. Au centre, un réverbère vert divise la composition en deux moitiés presque égales.\n\nLaissez ensuite votre regard glisser vers l'arrière-plan. Les immeubles haussmanniens, tout neufs à l'époque, dessinent une perspective vertigineuse. Les pavés mouillés brillent sous un ciel laiteux ; la palette est faite de gris, de bleus et d'ocres.\n\nCaillebotte expose avec les impressionnistes, dont il est l'ami et le mécène. Pourtant, sa touche est lisse, presque invisible, très différente de celle de Monet. Ce qui le rapproche d'eux, c'est le sujet : la ville moderne, saisie dans un instant ordinaire.\n\nCe tableau ne raconte rien. Et c'est justement ce qui le rend fascinant.",
      "explanation": "The audioguide uses the vocabulary of painting (\"la toile\", \"le premier plan\", \"la composition\", \"l'arrière-plan\", \"la perspective\", \"la palette\", \"la touche\") and guides the eye with imperatives and spatial markers (\"Regardez d'abord le premier plan, à droite\", \"Au centre\", \"Laissez ensuite votre regard glisser\"). It situates Caillebotte among the Impressionists while contrasting his smooth touch with Monet's, and the cleft \"c'est justement ce qui\" closes on the work's paradox."
    }
  ],
  "c2-business-economics-2": [
    {
      "type": "write",
      "prompt": "You are the chief executive of a medium-sized listed company that makes bicycles in the Vendée. Write the opening speech you deliver at the annual general meeting of shareholders: present the year's accounts (chiffre d'affaires, résultat net, marge, endettement), explain the planned acquisition of a smaller competitor, and announce the proposed dividend.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses the vocabulary of company accounts precisely: \"le chiffre d'affaires\", \"le résultat net\", \"la marge opérationnelle\", \"l'endettement\", \"le dividende\", \"les actionnaires\".",
        "Gives precise figures with percentages and comparisons with the previous year (\"en hausse de\", \"en recul de\", \"soit\").",
        "Presents the acquisition with the vocabulary of corporate strategy (\"le rachat\", \"une filiale\", \"des synergies\", \"la part de marché\").",
        "Has the formal register of a speech to shareholders (\"Mesdames et Messieurs les actionnaires\", the future and conditional)."
      ],
      "modelAnswer": "Mesdames et Messieurs les actionnaires,\n\nJe vous remercie de votre présence à cette assemblée générale.\n\nL'exercice 2025 a été, pour notre groupe, une année de croissance solide dans un marché difficile. Notre chiffre d'affaires s'établit à 212 millions d'euros, en hausse de 9 % par rapport à l'an dernier, porté par le succès de nos vélos à assistance électrique, qui représentent désormais 58 % de nos ventes.\n\nNotre marge opérationnelle progresse de 7,1 % à 8,4 %, grâce à la modernisation de l'usine de La Roche-sur-Yon. Le résultat net atteint ainsi 14,6 millions d'euros. Dans le même temps, nous avons réduit notre endettement de 18 millions.\n\nCette solidité nous permet de franchir une nouvelle étape. Votre conseil d'administration vous propose aujourd'hui d'approuver le rachat de la société Cycles Moreau, spécialisée dans les vélos cargos. Elle deviendrait une filiale à part entière. Les synergies attendues, notamment dans les achats et la distribution, sont estimées à 4 millions d'euros par an, et notre part de marché en France passerait de 11 à 14 %.\n\nEnfin, nous vous proposons de verser un dividende de 1,20 euro par action, contre 0,95 euro l'an dernier.\n\nJe vous remercie de votre confiance.",
      "explanation": "The speech uses the vocabulary of accounts precisely (\"l'exercice\", \"le chiffre d'affaires s'établit à\", \"la marge opérationnelle\", \"le résultat net\", \"l'endettement\", \"le dividende par action\") with comparisons (\"en hausse de 9 %\", \"progresse de... à...\", \"contre 0,95 euro\"). The acquisition is presented with \"le rachat\", \"une filiale\", \"les synergies\" and \"la part de marché\", in the conditional (\"deviendrait\", \"passerait\") because it still needs the shareholders' approval."
    }
  ],
  "c2-business-economics-3": [
    {
      "type": "write",
      "prompt": "A French economics website invites readers to post their opinion on « La relocalisation de l'industrie en France : mirage ou nécessité ? ». Write your post: take a clear position, use the vocabulary of trade and strategy (délocaliser / relocaliser, la balance commerciale, les droits de douane, la mondialisation, la concurrence, les chaînes d'approvisionnement, la souveraineté), acknowledge one counter-argument and end with a concrete suggestion.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least five terms of trade and strategy precisely (\"relocaliser\", \"la balance commerciale\", \"les chaînes d'approvisionnement\", \"les droits de douane\", \"la concurrence\", \"la souveraineté\").",
        "Takes a clear position and links causes and consequences (\"entraîner\", \"se traduire par\", \"il en résulte que\").",
        "Concedes one counter-argument before answering it (\"certes... mais\", \"il n'en reste pas moins que\").",
        "Has the register of a reasoned online opinion post, with a concrete conclusion."
      ],
      "modelAnswer": "Ni mirage ni miracle : une nécessité ciblée\n\nLa crise sanitaire nous a rappelé une évidence : en délocalisant massivement depuis les années 1990, la France a fragilisé ses chaînes d'approvisionnement. Quand les masques, puis les médicaments ont manqué, il est apparu que notre dépendance n'était pas seulement économique, mais politique.\n\nLa relocalisation n'est donc pas une lubie nostalgique. Notre balance commerciale est déficitaire depuis vingt ans, et chaque usine fermée s'est traduite par des emplois perdus dans des territoires déjà fragiles. Produire certains biens stratégiques sur notre sol relève de la souveraineté.\n\nCertes, ses détracteurs objectent que le coût du travail rend impossible toute concurrence avec l'Asie, et que relever les droits de douane entraînerait une hausse des prix pour les consommateurs. L'argument est sérieux. Il n'en reste pas moins que l'automatisation réduit la part des salaires dans le coût de production, et que les consommateurs se montrent prêts à payer un peu plus pour un produit fiable et proche.\n\nPlutôt que de tout relocaliser, concentrons-nous sur quelques filières clés : santé, énergie, composants électroniques. Et conditionnons les aides publiques à des engagements de production durable en France.",
      "explanation": "The post takes a nuanced but clear position and uses the vocabulary of trade precisely (\"délocalisant\", \"chaînes d'approvisionnement\", \"balance commerciale déficitaire\", \"souveraineté\", \"droits de douane\", \"concurrence\"). Cause and consequence are linked with \"s'est traduite par\" and \"entraînerait\", and the counter-argument is conceded (\"Certes, ses détracteurs objectent\", \"L'argument est sérieux\") before \"Il n'en reste pas moins que\" answers it, leading to a concrete proposal in the imperative."
    }
  ],
  "c2-creative-writing-2": [
    {
      "type": "write",
      "prompt": "Write a short descriptive passage (not a full story) in which a ten-year-old boy discovers his grandparents' farm in the Jura for the first time, told in internal focalisation: everything must be seen, heard and felt through his eyes and with his limited understanding. Choose your narrator (first person or third person) and your tense deliberately, and include at least one line of dialogue with correct French punctuation and an inverted incise (dit-il, demanda sa grand-mère).",
      "minWords": 110,
      "maxWords": 200,
      "rubric": [
        "Keeps a consistent internal focalisation: only what the boy perceives, understands or misunderstands.",
        "Uses concrete sensory details (sight, sound, smell, touch) appropriate to a child's perception.",
        "Includes at least one line of dialogue punctuated the French way, with guillemets or a dash and an inverted incise (\"demanda-t-elle\", \"dit mon grand-père\").",
        "Keeps the chosen person and tense consistent throughout."
      ],
      "modelAnswer": "La ferme est beaucoup plus grande que sur la photo. Il y a une cour en terre, des flaques partout et une odeur bizarre, un peu comme le fromage que papa achète au marché, mais en plus fort.\n\nJe descends de la voiture et mes baskets s'enfoncent tout de suite dans la boue. Maman ne dit rien. Elle regarde la maison, qui a des volets rouges et un toit qui descend presque jusqu'au sol, comme un chapeau trop grand.\n\nDerrière la grange, quelque chose fait un bruit de cloche. Plusieurs cloches, en fait, qui ne sonnent pas en même temps. Je ne vois rien, juste l'herbe très verte et la forêt noire tout au fond.\n\nUne vieille dame sort sur le perron en s'essuyant les mains sur son tablier. Elle a les joues toutes rouges.\n\n« Alors, c'est toi, Théo ? demande-t-elle. Tu as fait bon voyage ? »\n\nJe ne sais pas s'il faut lui faire la bise ou lui serrer la main. Je regarde maman. Maman pleure un peu, et je ne comprends pas pourquoi, puisque tout le monde a l'air content.",
      "explanation": "The passage keeps a strict internal focalisation in the first person and present tense: the farm is filtered through a child's comparisons (\"comme le fromage que papa achète\", \"comme un chapeau trop grand\"), his partial understanding (bells he cannot see, his mother's tears he cannot explain) and his hesitation over \"la bise\". The dialogue line follows French punctuation, with guillemets and the inverted incise \"demande-t-elle\" inside the quotation."
    }
  ],
  "c2-editor-writer-dialogue-lab": [
    {
      "type": "write",
      "prompt": "Your editor at a Paris publishing house has sent you detailed notes on the draft of your novel: the middle section s'essouffle, the secondary character Paul manque d'épaisseur, the dialogue is too explanatory, and the ending feels rushed. Write your reply email: thank her, accept some criticisms and explain how you will rework those parts (élaguer, resserrer, étoffer, retravailler), defend one choice you want to keep with reasons, and propose a new deadline.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses the vocabulary of revision precisely: \"élaguer\", \"resserrer\", \"étoffer\", \"retravailler\", \"remanier\", \"le rythme\", \"la tension narrative\".",
        "Accepts criticism gracefully (\"vous avez raison\", \"je vous rejoins sur\") and defends one choice with arguments (\"je tiens à garder\", \"il me semble que\").",
        "Explains concretely how each part will be reworked.",
        "Uses the cordial but professional register of an author writing to their editor (vous, a precise deadline)."
      ],
      "modelAnswer": "Chère Véronique,\n\nMerci pour votre lecture si attentive : vos notes m'ont d'abord un peu sonnée, je l'avoue, puis elles m'ont donné envie de me remettre au travail.\n\nVous avez raison, la partie centrale s'essouffle. En la relisant, j'ai compté trois scènes de dîner qui disent à peu près la même chose. Je vais élaguer la deuxième et resserrer les deux autres, pour que la tension narrative ne retombe pas avant la découverte de la lettre.\n\nJe vous rejoins aussi sur Paul. Il n'existe que par rapport à Anna ; je vais étoffer son passé, sans doute avec une courte scène dans son atelier, pour lui donner une vraie épaisseur.\n\nQuant aux dialogues, je vais les reprendre un par un et supprimer tout ce qui explique au lecteur ce qu'il a déjà compris.\n\nEn revanche, je tiens à garder la brièveté de la fin. Il me semble que la brusquerie du dernier chapitre répond à celle de l'accident du début : c'est une fin qui doit faire mal. Je peux en revanche retravailler les dernières lignes pour que la chute soit plus nette.\n\nJe pense pouvoir vous envoyer une version remaniée d'ici le 30 avril.\n\nBien amicalement,\nHélène",
      "explanation": "The reply uses the vocabulary of revision precisely (\"élaguer la deuxième\", \"resserrer les deux autres\", \"étoffer son passé\", \"retravailler les dernières lignes\", \"une version remaniée\", \"la tension narrative\") and explains each change concretely. It accepts criticism (\"Vous avez raison\", \"Je vous rejoins aussi sur Paul\") before defending one choice (\"En revanche, je tiens à garder\", \"Il me semble que\"), with \"pour que\" + subjunctive expressing the aim of each revision."
    }
  ],
  "c2-comprehensive-review-2": [
    {
      "type": "write",
      "prompt": "You booked a guided cultural week in Provence for two people with a travel agency (2,900 euros). The hotel was not the one in the contract, two of the five guided visits were cancelled without notice, and the agency has ignored your first email. Write a formal letter of complaint to the agency's director. Show full control of register: the formulas of a formal letter, precise verbs instead of faire / mettre / dire, learned collocations, no false friends or anglicisms, and a clear demand with a deadline.",
      "minWords": 130,
      "maxWords": 220,
      "rubric": [
        "Uses the formal register throughout: formal layout, \"Objet\", \"je me permets de\", \"je m'étonne que\" + subjunctive, the full closing formula.",
        "Replaces all-purpose verbs with precise ones (\"formuler une réclamation\", \"effectuer une réservation\", \"apporter une réponse\", \"procéder au remboursement\").",
        "Uses learned collocations and connectors (\"à titre de dédommagement\", \"en vertu de\", \"au demeurant\", \"de surcroît\") and avoids false friends and anglicisms.",
        "States the facts precisely and ends with a clear demand, a deadline and the next step if it is ignored."
      ],
      "modelAnswer": "Madame la Directrice,\n\nLe 12 février dernier, j'ai effectué auprès de votre agence la réservation d'un séjour culturel d'une semaine en Provence pour deux personnes, du 5 au 12 mai, pour un montant de 2 900 euros, intégralement réglé.\n\nOr, à notre arrivée à Avignon, nous avons été logés non pas à l'hôtel Le Cloître, mentionné dans le contrat, mais dans un établissement de catégorie inférieure, situé à huit kilomètres du centre. De surcroît, deux des cinq visites guidées prévues ont été annulées sans le moindre préavis ni la moindre explication.\n\nLe 20 mai, j'ai formulé une première réclamation par courrier électronique, à laquelle vous n'avez pas jugé bon d'apporter une réponse. Je m'étonne qu'une agence de votre réputation fasse aussi peu de cas de ses clients.\n\nEn vertu du Code du tourisme, vous êtes responsable de la bonne exécution des prestations vendues. Je vous saurais donc gré de bien vouloir procéder, dans un délai de quinze jours, au remboursement de 900 euros à titre de dédommagement.\n\nÀ défaut, je me verrai contrainte de saisir le médiateur du tourisme et du voyage.\n\nJe vous prie d'agréer, Madame la Directrice, l'expression de mes salutations distinguées.\n\nAnne Leclerc",
      "explanation": "The letter keeps a controlled formal register: precise verbs replace faire and dire (\"effectué la réservation\", \"formulé une réclamation\", \"apporter une réponse\", \"procéder au remboursement\"), with learned connectors and collocations (\"Or\", \"De surcroît\", \"En vertu de\", \"à titre de dédommagement\", \"faire peu de cas de\"). \"Je m'étonne qu'une agence... fasse\" takes the subjunctive, \"Je vous saurais gré de bien vouloir\" makes the formal demand, and \"À défaut, je me verrai contrainte de saisir le médiateur\" states the next step."
    }
  ]
});
