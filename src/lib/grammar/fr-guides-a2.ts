// Synced from cheneygross-afk/lengo:src/lib/grammar/fr-guides-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { FrGrammarGuide } from "./fr-types";

// French grammar guides, A2 (see ./fr-types.ts and docs/french-course/guide-brief.md).
export const FR_A2_GUIDES: FrGrammarGuide[] = [
  {
    slug: "passe-compose-avoir",
    title: "The Passé Composé with Avoir",
    description:
      "How to form the French passé composé with avoir, regular and irregular past participles, negation and questions, and where to put short adverbs like déjà and bien.",
    level: "A2",
    intro: [
      `The passé composé is the everyday past tense of spoken French. It is built like the English present perfect, with a helping verb and a past participle ("j'ai mangé", literally I have eaten), but it does the job of both English I ate and I have eaten. "Hier, j'ai mangé une pizza" is simply yesterday I ate a pizza.`,
      `Most verbs form it with "avoir". A smaller group, mainly verbs of movement, use "être", and that group has its own guide. This guide covers the "avoir" verbs: how to build the participle, the irregular participles you need every day, and where "ne...pas" and adverbs go.`,
    ],
    sections: [
      {
        heading: "Avoir + past participle",
        body: [
          `Conjugate "avoir" in the present and add the past participle of the main verb. Regular participles are easy: "-er" verbs end in "-é" ("parlé"), "-ir" verbs like "finir" end in "-i" ("fini"), and "-re" verbs like "vendre" end in "-u" ("vendu").`,
          `"J'ai parlé" covers I spoke, I have spoken and I did speak. French doesn't distinguish a finished time (yesterday) from an open one (ever, this week) the way English does: both use the passé composé.`,
        ],
        table: {
          headers: ["Person", "parler", "finir", "vendre"],
          rows: [
            ["je / j'", "j'ai parlé", "j'ai fini", "j'ai vendu"],
            ["tu", "tu as parlé", "tu as fini", "tu as vendu"],
            ["il / elle / on", "il a parlé", "elle a fini", "on a vendu"],
            ["nous", "nous avons parlé", "nous avons fini", "nous avons vendu"],
            ["vous", "vous avez parlé", "vous avez fini", "vous avez vendu"],
            ["ils / elles", "ils ont parlé", "elles ont fini", "ils ont vendu"],
          ],
        },
        examples: [
          { fr: "Hier soir, j'ai regardé un film.", en: "Last night I watched a film." },
          { fr: "Tu as fini tes devoirs ?", en: "Have you finished your homework?" },
          { fr: "Nous avons visité le Louvre en 2019.", en: "We visited the Louvre in 2019." },
          { fr: "Ils ont vendu leur maison.", en: "They've sold their house." },
          { fr: "Elle a choisi la robe rouge.", en: "She chose the red dress." },
        ],
      },
      {
        heading: "Irregular past participles",
        body: [
          `Many of the most common verbs have irregular participles. They fall into families by ending, which makes them easier to learn: "-u" ("bu", "lu", "vu", "pu", "voulu", "dû", "su", "reçu"), "-is" ("pris", "mis", "appris", "compris"), "-it" ("dit", "écrit", "fait") and "-ert" ("ouvert", "offert", "découvert").`,
          `Two deserve special attention: "avoir" gives "eu" (pronounced like "u"), so "j'ai eu" means I had or I got; and "être" gives "été", so "j'ai été" means I was or I have been. The past of "il y a" is "il y a eu" (there was, there has been).`,
        ],
        table: {
          headers: ["Ending", "Verb → participle"],
          rows: [
            ["-u", "boire → bu, lire → lu, voir → vu, pouvoir → pu, vouloir → voulu, devoir → dû"],
            ["-is", "prendre → pris, mettre → mis, comprendre → compris"],
            ["-it", "dire → dit, écrire → écrit, faire → fait"],
            ["-ert", "ouvrir → ouvert, offrir → offert"],
            ["special", "avoir → eu, être → été, naître → né, mourir → mort"],
          ],
        },
        examples: [
          { fr: "J'ai pris le train de 8 heures.", en: "I took the 8 o'clock train." },
          { fr: "Tu as vu le dernier film d'Ozon ?", en: "Have you seen Ozon's latest film?" },
          { fr: "Qu'est-ce que tu as fait ce week-end ?", en: "What did you do this weekend?" },
          { fr: "Elle m'a offert des fleurs.", en: "She gave me flowers." },
          { fr: "J'ai eu de la chance.", en: "I was lucky." },
          { fr: "Il y a eu un accident sur l'autoroute.", en: "There's been an accident on the motorway." },
        ],
      },
      {
        heading: "Negation and questions",
        body: [
          `In the passé composé, "ne...pas" wraps the auxiliary only: "je n'ai pas mangé". The participle comes after "pas". The same goes for "jamais", "plus" and "rien": "je n'ai jamais vu", "il n'a rien dit". (The exception is "personne", which goes after the participle: "je n'ai vu personne".)`,
          `For questions, use intonation or "est-ce que" with no change ("tu as mangé ?", "est-ce que tu as mangé ?"). With inversion, the pronoun goes after the auxiliary: "as-tu mangé ?", "a-t-il fini ?".`,
        ],
        examples: [
          { fr: "Je n'ai pas compris.", en: "I didn't understand." },
          { fr: "Il n'a jamais pris l'avion.", en: "He's never been on a plane." },
          { fr: "On n'a rien acheté.", en: "We didn't buy anything." },
          { fr: "Est-ce que vous avez réservé ?", en: "Have you booked?" },
          { fr: "Avez-vous reçu mon message ?", en: "Did you get my message?" },
        ],
      },
      {
        heading: "Short adverbs: déjà, bien, encore",
        body: [
          `Short, common adverbs go between the auxiliary and the participle: "j'ai bien dormi", "tu as déjà mangé ?", "il a beaucoup travaillé", "je n'ai pas encore fini". This is the opposite of what English instinct suggests for some of them (I slept well).`,
          `Time expressions like "hier", "aujourd'hui", "ce matin", "la semaine dernière" go at the beginning or the end of the sentence, never between the two parts of the verb.`,
        ],
        examples: [
          { fr: "J'ai très bien dormi.", en: "I slept very well." },
          { fr: "Tu as déjà vu ce film ?", en: "Have you already seen this film?" },
          { fr: "Je n'ai pas encore réservé.", en: "I haven't booked yet." },
          { fr: "On a trop mangé.", en: "We ate too much." },
          { fr: "La semaine dernière, il a beaucoup plu.", en: "Last week it rained a lot." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "J'ai mangé pas.",
        right: "Je n'ai pas mangé.",
        why: `"Ne...pas" wraps the auxiliary "avoir", not the participle.`,
      },
      {
        wrong: "J'ai prendu le bus.",
        right: "J'ai pris le bus.",
        why: `"Prendre" has an irregular participle, "pris". So do "mettre" ("mis") and "comprendre" ("compris").`,
      },
      {
        wrong: "J'ai dormi bien.",
        right: "J'ai bien dormi.",
        why: `Short adverbs like "bien", "mal", "déjà" and "beaucoup" go between the auxiliary and the participle.`,
      },
      {
        wrong: "Hier, je mange au restaurant.",
        right: "Hier, j'ai mangé au restaurant.",
        why: `A finished event in the past needs a past tense. The present here sounds like a storyteller's device, not a normal report.`,
      },
      {
        wrong: "J'ai parler avec Paul.",
        right: "J'ai parlé avec Paul.",
        why: `"Parlé" and "parler" sound the same, but after "avoir" you need the participle "-é". A quick test: replace it with "vendre". If you would say "vendu", write "-é".`,
      },
    ],
    faqs: [
      {
        q: "Is the passé composé the same as the English present perfect?",
        a: `It looks the same, but it is used for any completed past action, including ones English puts in the simple past (I went, she called). "Hier, j'ai vu Marc" is perfectly normal French.`,
      },
      {
        q: "What about the passé simple?",
        a: `The passé simple ("il parla") is a literary tense found in novels and history books. You need to recognise it for reading at higher levels, but in speech and everyday writing it has been replaced by the passé composé.`,
      },
      {
        q: "Does the participle ever agree with avoir?",
        a: `Only when a direct object comes before the verb, usually as a pronoun: "la lettre ? Je l'ai écrite". The direct object pronouns guide explains this rule.`,
      },
    ],
    related: ["passe-compose-etre", "passe-compose-vs-imparfait", "french-imparfait"],
    lessons: ["a2-passe-compose-avoir-1", "a2-passe-compose-avoir-2", "a2-pc-negation-questions", "a2-pc-short-adverbs", "a2-irregular-participles-1", "a2-irregular-participles-2"],
  },
  {
    slug: "passe-compose-etre",
    title: "The Passé Composé with Être",
    description:
      "Which French verbs take être in the passé composé, how the past participle agrees with the subject, and the verbs that switch to avoir when they have a direct object.",
    level: "A2",
    intro: [
      `A small but very frequent group of French verbs forms the passé composé with "être" instead of "avoir": "je suis allé", "elle est partie", "nous sommes arrivés". They are mostly verbs of movement from one place to another, or of a change of state, such as being born and dying. Pronominal verbs ("se lever") also use "être".`,
      `With "être", the past participle behaves like an adjective: it agrees with the subject. "Il est parti", "elle est partie", "ils sont partis". In speech the agreement is usually silent, but in writing it is required, and examiners notice it.`,
    ],
    sections: [
      {
        heading: "The être verbs",
        body: [
          `About fifteen basic verbs take "être", along with their compounds ("revenir", "devenir", "rentrer", "remonter"). Many learners use the mnemonic DR & MRS VANDERTRAMP, or picture a house: you arrive, go in, go up the stairs, fall, go down, come out, leave. Most are about moving from one place or state to another, but not every movement verb qualifies: "marcher", "courir" and "voyager" take "avoir".`,
        ],
        table: {
          headers: ["Verb", "Participle", "Verb", "Participle"],
          rows: [
            ["aller", "allé", "venir", "venu"],
            ["arriver", "arrivé", "partir", "parti"],
            ["entrer", "entré", "sortir", "sorti"],
            ["monter", "monté", "descendre", "descendu"],
            ["naître", "né", "mourir", "mort"],
            ["rester", "resté", "tomber", "tombé"],
            ["retourner", "retourné", "passer (par)", "passé"],
            ["rentrer", "rentré", "devenir", "devenu"],
          ],
        },
        examples: [
          { fr: "Je suis allé à Lyon le week-end dernier.", en: "I went to Lyon last weekend." },
          { fr: "Le train est arrivé en retard.", en: "The train arrived late." },
          { fr: "Nous sommes restés à la maison.", en: "We stayed at home." },
          { fr: "Mon grand-père est né en 1940.", en: "My grandfather was born in 1940." },
          { fr: "Elle est devenue médecin.", en: "She became a doctor." },
        ],
      },
      {
        heading: "Agreement with the subject",
        body: [
          `With "être", add "-e" to the participle for a feminine subject, "-s" for a masculine or mixed plural, and "-es" for a feminine plural. "Je" and "tu" agree with the real person: a woman writes "je suis allée". With polite "vous" to one person, agree with that person: "vous êtes arrivée, madame ?".`,
          `With "on" meaning we, agreement with the real group is accepted and common: "on est partis à huit heures".`,
        ],
        table: {
          headers: ["Subject", "partir"],
          rows: [
            ["je (man / woman)", "je suis parti / partie"],
            ["il / elle", "il est parti / elle est partie"],
            ["nous (men or mixed / women)", "nous sommes partis / parties"],
            ["ils / elles", "ils sont partis / elles sont parties"],
          ],
        },
        examples: [
          { fr: "Ma sœur est partie à Montréal.", en: "My sister went off to Montreal." },
          { fr: "Léa et Manon sont arrivées hier.", en: "Léa and Manon arrived yesterday." },
          { fr: "Mes parents sont rentrés tard.", en: "My parents got home late." },
          { fr: "Je suis tombée dans l'escalier.", en: "I fell on the stairs. (a woman speaking)" },
          { fr: "Vous êtes venus en voiture ?", en: "Did you (all) come by car?" },
        ],
      },
      {
        heading: "Negation and questions",
        body: [
          `It works exactly as with "avoir": "ne...pas" wraps "être", and inversion puts the pronoun after it. "Je ne suis pas sorti", "êtes-vous déjà allé en Grèce ?".`,
        ],
        examples: [
          { fr: "Je ne suis jamais allé au Japon.", en: "I've never been to Japan." },
          { fr: "Elle n'est pas encore arrivée.", en: "She hasn't arrived yet." },
          { fr: "Tu es déjà monté sur la tour Eiffel ?", en: "Have you ever been up the Eiffel Tower?" },
          { fr: "Pourquoi est-ce qu'ils ne sont pas venus ?", en: "Why didn't they come?" },
        ],
      },
      {
        heading: "Verbs that switch to avoir",
        body: [
          `Six of the "être" verbs can also take a direct object: "sortir", "monter", "descendre", "rentrer", "passer" and "retourner". With an object they take "avoir", and their meaning shifts: "je suis sorti" (I went out) but "j'ai sorti la poubelle" (I took the bin out).`,
          `The test is simple: is there a direct object right after the verb? If yes, "avoir", and no agreement with the subject. "Elle est montée" (she went up) but "elle a monté les valises" (she carried the cases up).`,
        ],
        examples: [
          { fr: "Nous sommes descendus à la plage.", en: "We went down to the beach." },
          { fr: "Nous avons descendu les cartons.", en: "We brought the boxes down." },
          { fr: "Il est rentré à minuit.", en: "He came home at midnight." },
          { fr: "Il a rentré la voiture au garage.", en: "He put the car in the garage." },
          { fr: "J'ai passé une semaine en Corse.", en: "I spent a week in Corsica." },
          { fr: "Elle a retourné la crêpe.", en: "She flipped the crêpe over." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "J'ai allé au cinéma.",
        right: "Je suis allé au cinéma.",
        why: `"Aller" is one of the verbs that take "être".`,
      },
      {
        wrong: "Elle est parti.",
        right: "Elle est partie.",
        why: `With "être", the participle agrees with the subject: feminine adds "-e".`,
      },
      {
        wrong: "Je suis sorti le chien.",
        right: "J'ai sorti le chien.",
        why: `With a direct object, "sortir" takes "avoir" and means to take out.`,
      },
      {
        wrong: "J'ai né à Londres.",
        right: "Je suis né à Londres.",
        why: `"Naître" takes "être". Being born is a change of state, like dying ("il est mort").`,
      },
      {
        wrong: "Nous sommes marchés jusqu'au port.",
        right: "Nous avons marché jusqu'au port.",
        why: `Not every movement verb takes "être". "Marcher", "courir", "voyager" and "nager" take "avoir".`,
      },
    ],
    faqs: [
      {
        q: "Why do these verbs take être?",
        a: `Historically they describe a change of place or state that results in a new condition of the subject, so the participle works like an adjective describing the subject: "elle est partie" is close to she is gone. English once did the same (he is come, they are gone).`,
      },
      {
        q: "Do I pronounce the agreement?",
        a: `Usually not: "allé", "allée" and "allés" sound the same. It becomes audible only with participles ending in a consonant, such as "mort / morte" and, with avoir verbs, "pris / prise". It still has to be written.`,
      },
      {
        q: `"Je suis passé" or "j'ai passé"?`,
        a: `"Je suis passé chez toi" means I dropped by your place (movement). "J'ai passé une bonne soirée" means I spent a good evening, and "j'ai passé un examen" means I sat an exam (direct object).`,
      },
    ],
    related: ["passe-compose-avoir", "french-pronominal-verbs", "passe-compose-vs-imparfait"],
    lessons: ["a2-passe-compose-etre-1", "a2-passe-compose-etre-2", "a2-pc-etre-agreement-pattern", "a2-choose-avoir-or-etre", "a2-contrast-sortir-monter-object"],
  },
  {
    slug: "french-imparfait",
    title: "The Imparfait: Formation and Uses",
    description:
      "How to form the French imparfait from the nous stem, the one irregular stem (être), and its uses: description, background, habits in the past, and what English says with used to, would and was -ing.",
    level: "A2",
    intro: [
      `The imparfait is French's second main past tense. Where the passé composé reports events (what happened), the imparfait paints the picture around them: what things were like, what was going on, what used to happen. "Il faisait beau, les enfants jouaient dans le jardin": it was sunny, the children were playing in the garden.`,
      `It is the most regular tense in French. Every verb but one builds it the same way, and the endings are identical for all verbs. The challenge isn't the form; it's knowing when to use it, and English is no help, because it spreads the same idea across was -ing, used to, would and the simple past.`,
    ],
    sections: [
      {
        heading: "Formation: the nous stem",
        body: [
          `Take the "nous" form of the present, remove "-ons", and add "-ais", "-ais", "-ait", "-ions", "-iez", "-aient". "Nous parlons" gives "parl-", "nous finissons" gives "finiss-", "nous faisons" gives "fais-", "nous prenons" gives "pren-". Four of the six forms ("-ais", "-ais", "-ait", "-aient") sound the same.`,
          `The only irregular stem is "être": "ét-" ("j'étais"). Verbs in "-ger" and "-cer" keep their soft sound before "a": "je mangeais", "je commençais" (but "nous mangions", "nous commencions"). Verbs whose stem ends in "i" get a double "i" in "nous" and "vous": "nous étudiions".`,
        ],
        table: {
          headers: ["Person", "parler (nous parlons)", "être (ét-)", "faire (nous faisons)"],
          rows: [
            ["je", "je parlais", "j'étais", "je faisais"],
            ["tu", "tu parlais", "tu étais", "tu faisais"],
            ["il / elle / on", "il parlait", "elle était", "on faisait"],
            ["nous", "nous parlions", "nous étions", "nous faisions"],
            ["vous", "vous parliez", "vous étiez", "vous faisiez"],
            ["ils / elles", "ils parlaient", "elles étaient", "ils faisaient"],
          ],
        },
        examples: [
          { fr: "Quand j'étais petit, j'habitais à Toulouse.", en: "When I was little, I lived in Toulouse." },
          { fr: "Nous finissions tard le vendredi.", en: "We used to finish late on Fridays." },
          { fr: "Il mangeait toujours trop vite.", en: "He always ate too fast." },
          { fr: "Vous étiez où ?", en: "Where were you?" },
          { fr: "Elles prenaient le bus ensemble.", en: "They used to take the bus together." },
        ],
      },
      {
        heading: "Description and background",
        body: [
          `Use the imparfait to describe a scene or a situation in the past: the weather, the time, what people looked like, how they felt, what was there. "Il y avait" (there was, there were) and "c'était" (it was) are two of the most frequent past forms in French.`,
          `Think of it as the camera showing the setting, with no beginning or end in view. The events of the story, in the passé composé, happen against this background.`,
        ],
        examples: [
          { fr: "Il faisait froid et il pleuvait.", en: "It was cold and it was raining." },
          { fr: "Il y avait beaucoup de monde au concert.", en: "There were a lot of people at the concert." },
          { fr: "C'était génial !", en: "It was great!" },
          { fr: "Elle avait les cheveux longs.", en: "She had long hair." },
          { fr: "J'étais fatigué et j'avais faim.", en: "I was tired and hungry." },
        ],
      },
      {
        heading: "Habits: used to and would",
        body: [
          `For repeated actions in the past, things that used to happen, French uses the imparfait. English has three ways to say this (I used to go, I would go, I went every summer) and French has one: "j'allais".`,
          `Words like "tous les jours", "le samedi", "souvent", "d'habitude", "toujours" and "chaque été" often signal a habit. Be careful with English would: when it describes a past habit, it's the imparfait; when it means a hypothetical (I would go if...), it's the conditional, which you'll learn later.`,
        ],
        examples: [
          { fr: "Le dimanche, on allait chez ma grand-mère.", en: "On Sundays we would go to my grandmother's." },
          { fr: "Avant, je fumais.", en: "I used to smoke." },
          { fr: "Chaque été, nous partions en Bretagne.", en: "Every summer we went to Brittany." },
          { fr: "D'habitude, il rentrait vers six heures.", en: "He usually got home around six." },
          { fr: "Mon père lisait le journal tous les matins.", en: "My father read the paper every morning." },
        ],
      },
      {
        heading: "Ongoing actions: was -ing",
        body: [
          `When English uses was / were -ing for an action in progress at a past moment, French uses the imparfait: "je dormais" (I was sleeping). It often appears with "quand" and a passé composé event that interrupts it, which is the subject of the passé composé vs imparfait guide.`,
          `The imparfait also expresses ages and states of mind in the past: "j'avais dix ans", "je pensais que...", "je voulais...".`,
        ],
        examples: [
          { fr: "À minuit, je dormais déjà.", en: "At midnight I was already asleep." },
          { fr: "Qu'est-ce que tu faisais ?", en: "What were you doing?" },
          { fr: "Nous regardions la télé quand tu as appelé.", en: "We were watching TV when you called." },
          { fr: "J'avais seize ans.", en: "I was sixteen." },
          { fr: "Je pensais que tu étais au travail.", en: "I thought you were at work." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quand j'ai été petit, j'ai habité à Lille.",
        right: "Quand j'étais petit, j'habitais à Lille.",
        why: `Childhood is a background situation with no defined end, so both verbs go in the imparfait.`,
      },
      {
        wrong: "Je mangais souvent chez mes grands-parents.",
        right: "Je mangeais souvent chez mes grands-parents.",
        why: `"-ger" verbs keep the "e" before "a" so the g stays soft.`,
      },
      {
        wrong: "Avant, j'ai joué au tennis tous les week-ends.",
        right: "Avant, je jouais au tennis tous les week-ends.",
        why: `A repeated action in the past, used to, is a habit: imparfait. "Avant" and "tous les week-ends" are strong signals.`,
      },
      {
        wrong: "Il a fait beau et il y a eu beaucoup de monde sur la plage.",
        right: "Il faisait beau et il y avait beaucoup de monde sur la plage.",
        why: `Weather and what was there are scene-setting description, the job of the imparfait.`,
      },
    ],
    faqs: [
      {
        q: "Why is it called imparfait?",
        a: `"Imparfait" means unfinished, incomplete. It presents an action without its end point: in progress, repeated, or simply a state. The passé composé presents an action as a completed whole.`,
      },
      {
        q: `How do I say used to in French?`,
        a: `With the imparfait: "je jouais au tennis" (I used to play tennis). Add "avant" (before, in the past) to make the contrast with now clear: "avant, je jouais au tennis".`,
      },
      {
        q: "Are the endings really pronounced the same?",
        a: `Yes: "parlais", "parlait" and "parlaient" all end in the same "è" sound. Only "parlions" and "parliez" are different. That's why it's essential to hear the difference between "j'ai parlé" (é) and "je parlais" (è).`,
      },
    ],
    related: ["passe-compose-vs-imparfait", "passe-compose-avoir", "depuis-pendant-il-y-a"],
    lessons: ["a2-imparfait-1", "a2-imparfait-2", "a2-imparfait-spelling-stems", "a2-contrast-used-to-would", "a2-minimal-pairs-pc-imparfait-sound"],
  },
  {
    slug: "passe-compose-vs-imparfait",
    title: "Passé Composé vs Imparfait",
    description:
      "How to choose between the passé composé and the imparfait: completed events vs background, habits and ongoing actions, the interrupted action pattern, signal words, and verbs that change meaning.",
    level: "A2",
    intro: [
      `This is the central difficulty of French past tenses, and the one English speakers search for most. English uses the simple past for nearly everything (I went, it was, I knew), so it gives you no clue. French forces a choice every time: was this an event that happened, or the situation around it?`,
      `The short version: the passé composé moves the story forward, one completed event after another. The imparfait stops the clock to describe what was going on, what things were like, or what used to happen. The same verb can go in either, and the choice changes how the listener sees the action.`,
    ],
    sections: [
      {
        heading: "Events vs scenery",
        body: [
          `Ask: did this happen at a point, or as a complete action with an end? Then it's the passé composé. Was it the setting, a description, or an action in progress with no end in view? Then it's the imparfait.`,
          `A useful picture is a play: the imparfait is the stage set and the lighting (it was night, it was raining, everyone was asleep); the passé composé is what the actors do (the phone rang, I got up, I answered).`,
        ],
        table: {
          headers: ["Passé composé", "Imparfait"],
          rows: [
            ["a completed event", "a description or state"],
            ["a series of events (then, then)", "an action in progress (was -ing)"],
            ["a single occurrence", "a habit (used to, would)"],
            ["a defined duration (pendant deux ans)", "a background with no end in view"],
          ],
        },
        examples: [
          { fr: "Il était tard. J'ai fermé la porte et je suis parti.", en: "It was late. I shut the door and left." },
          { fr: "Hier, j'ai vu Sophie au marché.", en: "Yesterday I saw Sophie at the market." },
          { fr: "La maison était grande et elle avait un jardin.", en: "The house was big and had a garden." },
          { fr: "Je me suis levé, j'ai pris une douche et j'ai bu un café.", en: "I got up, had a shower and drank a coffee." },
          { fr: "Il pleuvait, alors on est restés à la maison.", en: "It was raining, so we stayed at home." },
        ],
      },
      {
        heading: "The interrupted action",
        body: [
          `The most common pattern combining the two tenses: something was in progress (imparfait) when something else happened (passé composé). "Je dormais quand le téléphone a sonné." The ongoing action is the background; the interruption is the event.`,
          `The reverse also works with "pendant que" (while), which almost always takes the imparfait: "pendant que je cuisinais, les enfants ont rangé leur chambre".`,
        ],
        examples: [
          { fr: "Je prenais ma douche quand tu as appelé.", en: "I was having a shower when you called." },
          { fr: "Nous dînions quand il y a eu une coupure de courant.", en: "We were having dinner when there was a power cut." },
          { fr: "Quand je suis arrivé, tout le monde dansait.", en: "When I arrived, everyone was dancing." },
          { fr: "Pendant que je travaillais, il a fait les courses.", en: "While I was working, he did the shopping." },
          { fr: "Il traversait la rue quand il est tombé.", en: "He was crossing the street when he fell." },
        ],
      },
      {
        heading: "Signal words",
        body: [
          `Some time expressions lean strongly towards one tense. "Soudain", "tout à coup", "un jour", "hier", "une fois", "ce matin-là" and "pendant deux heures" usually introduce events: passé composé. "Tous les jours", "souvent", "d'habitude", "toujours", "le lundi", "autrefois" and "à cette époque" usually signal habits or backgrounds: imparfait.`,
          `These are tendencies, not rules. "Toujours" can go with the passé composé when the whole period is closed and summed up ("j'ai toujours aimé le jazz": I've always liked jazz). Duration matters most: a closed period with "pendant" takes the passé composé, even if it was long: "j'ai habité à Rome pendant dix ans".`,
        ],
        examples: [
          { fr: "Tout à coup, la lumière s'est éteinte.", en: "Suddenly the light went out." },
          { fr: "Le samedi, on jouait au foot.", en: "On Saturdays we used to play football." },
          { fr: "Un jour, il a décidé de partir.", en: "One day he decided to leave." },
          { fr: "J'ai habité à Rome pendant dix ans.", en: "I lived in Rome for ten years. (closed period)" },
          { fr: "À cette époque, j'habitais à Rome.", en: "At that time I was living in Rome." },
        ],
      },
      {
        heading: "Verbs that change meaning",
        body: [
          `Verbs of knowledge, ability and wanting are usually in the imparfait because they describe states: "je savais", "je pouvais", "je voulais", "je connaissais". In the passé composé they turn into events, and the English translation changes.`,
          `"Je savais" is I knew; "j'ai su" is I found out. "Je connaissais Marc" is I knew Marc; "j'ai connu Marc en 2015" is I met Marc in 2015. "Je pouvais" is I was able to; "j'ai pu" is I managed to. "Je voulais" is I wanted to; "je n'ai pas voulu" is I refused.`,
        ],
        table: {
          headers: ["Verb", "Imparfait (state)", "Passé composé (event)"],
          rows: [
            ["savoir", "je savais: I knew", "j'ai su: I found out"],
            ["connaître", "je connaissais: I knew", "j'ai connu: I met"],
            ["pouvoir", "je pouvais: I could", "j'ai pu: I managed to"],
            ["vouloir", "je ne voulais pas: I didn't want to", "je n'ai pas voulu: I refused"],
            ["avoir", "j'avais peur: I was afraid", "j'ai eu peur: I got a fright"],
          ],
        },
        examples: [
          { fr: "Je savais qu'il mentait.", en: "I knew he was lying." },
          { fr: "J'ai su la vérité le lendemain.", en: "I found out the truth the next day." },
          { fr: "J'ai connu ma femme à l'université.", en: "I met my wife at university." },
          { fr: "Il n'a pas pu venir.", en: "He couldn't come. (didn't manage to)" },
          { fr: "J'ai eu peur quand j'ai entendu le bruit.", en: "I got scared when I heard the noise." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Hier, je regardais un film.",
        right: "Hier, j'ai regardé un film.",
        why: `As a plain report of what you did, a completed action takes the passé composé. The imparfait would leave the listener waiting for the event that interrupted you.`,
      },
      {
        wrong: "Quand j'ai été jeune, j'ai joué du piano.",
        right: "Quand j'étais jeune, je jouais du piano.",
        why: `Childhood and youth are background states, and a regular activity in that period is a habit: imparfait.`,
      },
      {
        wrong: "J'habitais à Rome pendant dix ans.",
        right: "J'ai habité à Rome pendant dix ans.",
        why: `A closed period with "pendant" is treated as one completed block: passé composé.`,
      },
      {
        wrong: "Je lisais quand le téléphone sonnait.",
        right: "Je lisais quand le téléphone a sonné.",
        why: `The phone ringing is the event that interrupts; it needs the passé composé.`,
      },
    ],
    faqs: [
      {
        q: "Is there one rule that always works?",
        a: `No single rule covers every case, but this question comes close: am I telling what happened next, or describing what was going on? Events that move the story forward: passé composé. Everything else: imparfait.`,
      },
      {
        q: "Can both tenses be correct?",
        a: `Often, with a difference in meaning. "Il a été malade" sums up an illness that's over; "il était malade" describes his state at the time of the story. Choosing a tense is choosing a point of view.`,
      },
      {
        q: `Why "c'était" so often?`,
        a: `When you give your opinion of a past experience, French usually uses "c'était": "c'était super", "c'était nul". "Ça a été" exists too, often for an ordeal you got through ("ça a été dur"), but "c'était" is the default.`,
      },
    ],
    related: ["french-imparfait", "passe-compose-avoir", "depuis-pendant-il-y-a"],
    lessons: ["a2-pc-vs-imparfait-1", "a2-pc-vs-imparfait-2", "a2-signal-words-speed-round", "a2-contrast-meaning-shift-verbs", "a2-pattern-when-while"],
  },
  {
    slug: "depuis-pendant-il-y-a",
    title: "Depuis, Pendant and Il y a: For, Since and Ago",
    description:
      "How to say for, since and ago in French: depuis with the present for actions still going on, pendant for a closed period, il y a for ago, and ça fait... que.",
    level: "A2",
    intro: [
      `English for does two very different jobs. In I've lived here for five years, the action is still going on. In I lived there for five years, it is over. French uses two different words: "depuis" for the first, "pendant" for the second. And the tense changes too: "j'habite ici depuis cinq ans" uses the present, because you still live here.`,
      `Add "il y a", which means ago ("il y a deux jours") and is unrelated to the "il y a" meaning there is, and you have the three time expressions that English speakers mix up most. This guide shows how to tell them apart.`,
    ],
    sections: [
      {
        heading: "Depuis + present: still going on",
        body: [
          `For an action that started in the past and continues now, French uses the present tense with "depuis". English uses the present perfect (have been doing). Think of it as: I live here, and that has been true since five years ago.`,
          `"Depuis" works with a duration (for) and with a starting point (since): "depuis trois ans", "depuis 2020", "depuis lundi", "depuis mon arrivée". To ask, say "depuis quand ?" (since when?) or "depuis combien de temps ?" (for how long?).`,
        ],
        examples: [
          { fr: "J'apprends le français depuis un an.", en: "I've been learning French for a year." },
          { fr: "Elle habite à Lille depuis 2018.", en: "She's lived in Lille since 2018." },
          { fr: "Je t'attends depuis une heure !", en: "I've been waiting for you for an hour!" },
          { fr: "Depuis combien de temps tu travailles ici ?", en: "How long have you been working here?" },
          { fr: "J'ai mal à la gorge depuis hier.", en: "I've had a sore throat since yesterday." },
        ],
      },
      {
        heading: "Ça fait... que and il y a... que",
        body: [
          `Two common alternatives to "depuis" put the duration first: "ça fait deux ans que j'habite ici" and "il y a deux ans que j'habite ici". Both mean the same as "j'habite ici depuis deux ans", and both still take the present. "Ça fait... que" is especially common in speech.`,
          `In the negative, the passé composé is used for something that hasn't happened for a while: "je ne l'ai pas vu depuis des mois" (I haven't seen him for months), "ça fait longtemps qu'on ne s'est pas vus".`,
        ],
        examples: [
          { fr: "Ça fait trois mois que je cherche un appartement.", en: "I've been looking for a flat for three months." },
          { fr: "Il y a longtemps que tu le connais ?", en: "Have you known him long?" },
          { fr: "Ça fait une semaine qu'il pleut.", en: "It's been raining for a week." },
          { fr: "Je n'ai pas fumé depuis six mois.", en: "I haven't smoked for six months." },
          { fr: "Ça fait longtemps qu'on ne s'est pas vus !", en: "Long time no see!" },
        ],
      },
      {
        heading: "Pendant: a closed period",
        body: [
          `"Pendant" gives the length of a period that is complete, or that you see as a whole: in the past, the future or as a general habit. It goes with whatever tense fits; in the past that is usually the passé composé: "j'ai habité à Berlin pendant deux ans" (and I don't any more).`,
          `In the past and future, "pendant" is often dropped entirely: "j'ai dormi huit heures". To ask, say "pendant combien de temps ?". Don't confuse it with "pour", which in time expressions is mainly for a planned duration with verbs like "partir": "je pars pour une semaine".`,
        ],
        examples: [
          { fr: "J'ai travaillé à Londres pendant cinq ans.", en: "I worked in London for five years." },
          { fr: "On a attendu pendant une heure.", en: "We waited for an hour." },
          { fr: "Pendant les vacances, je vais lire.", en: "During the holidays I'm going to read." },
          { fr: "Il a plu toute la journée.", en: "It rained all day." },
          { fr: "Je pars en Espagne pour dix jours.", en: "I'm going to Spain for ten days." },
        ],
      },
      {
        heading: "Il y a: ago",
        body: [
          `"Il y a" + a duration means ago, and it comes before the duration, not after: "il y a trois jours" (three days ago). It places a past event on the timeline, so the verb is in a past tense, usually the passé composé.`,
          `Compare the three: "j'habite ici depuis deux ans" (still here), "j'ai habité là-bas pendant deux ans" (over), "je suis arrivé il y a deux ans" (the moment I arrived).`,
        ],
        table: {
          headers: ["Expression", "Meaning", "Tense", "Example"],
          rows: [
            ["depuis", "for / since (still true)", "present", "J'habite ici depuis deux ans."],
            ["ça fait... que", "for (still true)", "present", "Ça fait deux ans que j'habite ici."],
            ["pendant", "for (closed period)", "any, usually passé composé", "J'ai habité là pendant deux ans."],
            ["il y a", "ago", "past", "Je suis arrivé il y a deux ans."],
          ],
        },
        examples: [
          { fr: "Je l'ai rencontré il y a dix ans.", en: "I met him ten years ago." },
          { fr: "Le train est parti il y a cinq minutes.", en: "The train left five minutes ago." },
          { fr: "Il y a une semaine, j'étais à la plage.", en: "A week ago I was at the beach." },
          { fr: "Elle a appelé il y a une heure.", en: "She called an hour ago." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "J'ai habité à Paris depuis trois ans.",
        right: "J'habite à Paris depuis trois ans.",
        why: `If you still live there, French uses the present with "depuis", not a past tense.`,
      },
      {
        wrong: "J'habite ici pendant trois ans.",
        right: "J'habite ici depuis trois ans.",
        why: `"Pendant" is for a closed period. For something still going on, use "depuis".`,
      },
      {
        wrong: "Je suis arrivé deux jours il y a.",
        right: "Je suis arrivé il y a deux jours.",
        why: `"Il y a" comes before the duration, unlike English ago.`,
      },
      {
        wrong: "J'ai étudié l'espagnol depuis deux ans au lycée.",
        right: "J'ai étudié l'espagnol pendant deux ans au lycée.",
        why: `Your school years are over, so the period is closed: "pendant".`,
      },
    ],
    faqs: [
      {
        q: `What tense goes with "depuis" in the past?`,
        a: `To say I had been doing something for a while when something else happened, use the imparfait with "depuis": "j'attendais depuis une heure quand il est arrivé".`,
      },
      {
        q: `Can I leave out "pendant"?`,
        a: `Usually, yes: "j'ai attendu deux heures", "j'ai vécu dix ans à Lyon". It is never optional with "depuis", which changes the meaning.`,
      },
      {
        q: `Is this "il y a" the same as there is?`,
        a: `Same words, different job. Followed by a noun it means there is / there are ("il y a deux chats"); followed by a duration it means ago ("il y a deux ans"). The word after it always tells you which.`,
      },
    ],
    related: ["passe-compose-vs-imparfait", "french-imparfait", "passe-compose-avoir"],
    lessons: ["a2-depuis-present", "a2-pendant-il-y-a", "a2-contrast-depuis-pendant-il-y-a"],
  },
  {
    slug: "direct-object-pronouns",
    title: "Direct Object Pronouns: Le, La, Les",
    description:
      "French direct object pronouns (me, te, le, la, nous, vous, les), why they go before the verb, their position with infinitives and the passé composé, and past participle agreement.",
    level: "A2",
    intro: [
      `In English, the object pronoun follows the verb: I see him, I'm buying it. In French, it comes before the conjugated verb: "je le vois", "je l'achète". That single fact, the pronoun moving in front of the verb, is what makes object pronouns hard for English speakers. The forms themselves are simple.`,
      `The direct object is the person or thing that receives the action with no preposition in between: I see Marie, I'm watching the film. This guide covers the forms, where they go in every tense, the verbs where French and English disagree about what counts as a direct object, and the agreement rule in the passé composé.`,
    ],
    sections: [
      {
        heading: "The forms",
        body: [
          `"Le" replaces a masculine noun (him, it), "la" a feminine noun (her, it), and "les" any plural (them). They agree with the noun they replace, so a thing is "le" or "la" by its gender: "le film ? Je le regarde", "la série ? Je la regarde".`,
          `"Me", "te", "le" and "la" become "m'", "t'", "l'" before a vowel or mute h: "je t'aime", "il m'attend", "je l'écoute". "Nous" and "vous" don't change.`,
        ],
        table: {
          headers: ["Subject", "Direct object", "Example"],
          rows: [
            ["je", "me (m')", "Il me voit."],
            ["tu", "te (t')", "Je t'aime."],
            ["il / elle", "le / la (l')", "Je le connais. Je la connais."],
            ["nous", "nous", "Ils nous invitent."],
            ["vous", "vous", "Je vous remercie."],
            ["ils / elles", "les", "Je les vois souvent."],
          ],
        },
        examples: [
          { fr: "Tu vois le bus ? Oui, je le vois.", en: "Can you see the bus? Yes, I can see it." },
          { fr: "Cette chanson, je l'adore !", en: "I love this song!" },
          { fr: "Mes clés ? Je les cherche partout.", en: "My keys? I'm looking everywhere for them." },
          { fr: "Tu m'entends ?", en: "Can you hear me?" },
          { fr: "Je vous appelle demain.", en: "I'll call you tomorrow." },
        ],
      },
      {
        heading: "Where the pronoun goes",
        body: [
          `The pronoun goes immediately before the verb it belongs to. In a simple tense, that's the conjugated verb: "je le prends". In the negative, "ne" goes before the pronoun and "pas" after the verb: "je ne le prends pas".`,
          `With a verb + infinitive ("vouloir", "pouvoir", "aller" + infinitive), the pronoun goes before the infinitive, because that's the verb whose object it is: "je vais le prendre", "je ne peux pas la voir". In the passé composé, it goes before the auxiliary: "je l'ai pris", "je ne l'ai pas pris".`,
        ],
        table: {
          headers: ["Structure", "Example"],
          rows: [
            ["present", "Je le prends."],
            ["negative", "Je ne le prends pas."],
            ["verb + infinitive", "Je vais le prendre."],
            ["passé composé", "Je l'ai pris."],
            ["passé composé, negative", "Je ne l'ai pas pris."],
          ],
        },
        examples: [
          { fr: "Le gâteau ? Je ne le mange pas.", en: "The cake? I'm not eating it." },
          { fr: "Je dois la voir demain.", en: "I have to see her tomorrow." },
          { fr: "On va les inviter samedi.", en: "We're going to invite them on Saturday." },
          { fr: "Tu l'as vu ?", en: "Did you see it / him?" },
          { fr: "Je ne vous ai pas entendu.", en: "I didn't hear you." },
        ],
      },
      {
        heading: "Verbs that take a direct object in French",
        body: [
          `Several common verbs take a preposition in English but a direct object in French: "chercher" (look for), "attendre" (wait for), "écouter" (listen to), "regarder" (look at), "payer" (pay for), "demander" (ask for). So you say "j'attends le bus" (no "pour") and "je l'attends".`,
          `Others go the other way: "téléphoner à", "répondre à", "obéir à" take an indirect object in French. Those use "lui" and "leur", covered in the indirect object guide.`,
        ],
        examples: [
          { fr: "Je cherche mes lunettes. Je les cherche.", en: "I'm looking for my glasses. I'm looking for them." },
          { fr: "Tu attends Paul ? Oui, je l'attends.", en: "Are you waiting for Paul? Yes, I'm waiting for him." },
          { fr: "J'écoute la radio le matin.", en: "I listen to the radio in the morning." },
          { fr: "Je paie les cafés.", en: "I'm paying for the coffees." },
          { fr: "Regarde ces photos ! Regarde-les !", en: "Look at these photos! Look at them!" },
        ],
      },
      {
        heading: "Past participle agreement",
        body: [
          `In the passé composé with "avoir", the participle normally doesn't agree. But when the direct object comes before the verb, as it does with a pronoun, the participle agrees with it: "la robe ? Je l'ai mise", "les clés ? Je les ai prises".`,
          `The agreement is usually silent ("vu", "vue", "vus" sound the same) but audible with participles ending in a consonant: "mis / mise", "pris / prise", "fait / faite", "écrit / écrite". In everyday speech, many French people don't pronounce it; in writing it is expected.`,
        ],
        examples: [
          { fr: "Ta lettre ? Je l'ai lue.", en: "Your letter? I've read it." },
          { fr: "Mes chaussures ? Je les ai mises dans le placard.", en: "My shoes? I put them in the cupboard." },
          { fr: "Les filles ? Je les ai vues hier.", en: "The girls? I saw them yesterday." },
          { fr: "Cette photo, c'est toi qui l'as prise ?", en: "Did you take this photo?" },
          { fr: "Le film ? Je l'ai vu deux fois.", en: "The film? I've seen it twice. (masculine, no change)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je vois le.",
        right: "Je le vois.",
        why: `Object pronouns go before the verb in French, not after.`,
      },
      {
        wrong: "Je l'attends pour.",
        right: "Je l'attends.",
        why: `"Attendre" already means wait for; it takes a direct object with no preposition. The same goes for "chercher", "écouter" and "regarder".`,
      },
      {
        wrong: "Je le vais prendre.",
        right: "Je vais le prendre.",
        why: `The pronoun goes before the infinitive it is the object of.`,
      },
      {
        wrong: "Je n'ai pas le vu.",
        right: "Je ne l'ai pas vu.",
        why: `In the passé composé, the pronoun goes before the auxiliary, inside "ne...pas".`,
      },
      {
        wrong: "La porte ? Je l'ai ouvert.",
        right: "La porte ? Je l'ai ouverte.",
        why: `A direct object pronoun before "avoir" makes the participle agree: "la porte" is feminine.`,
      },
    ],
    faqs: [
      {
        q: `How do I know whether "l'" is "le" or "la"?`,
        a: `You don't, from "l'" alone. The noun it replaces tells you, and in the passé composé the agreement shows it in writing: "je l'ai vu" (him, it) vs "je l'ai vue" (her, it).`,
      },
      {
        q: "What about the imperative?",
        a: `In the affirmative imperative the pronoun goes after the verb with a hyphen, and "me" becomes "moi": "prends-le", "écoute-moi". In the negative, it goes back before: "ne le prends pas".`,
      },
      {
        q: `Can "le" replace a whole idea?`,
        a: `Yes. "Le" can stand for a clause or an adjective: "je le sais" (I know that), "tu es fatigué ? Oui, je le suis". English often leaves this out: I know, Yes, I am.`,
      },
    ],
    related: ["indirect-object-pronouns", "double-object-pronouns", "passe-compose-avoir"],
    lessons: ["a2-direct-object-pronouns-1", "a2-direct-object-pronouns-2", "a2-dop-me-te-nous-vous", "a2-verbs-without-preposition", "a2-dop-participle-agreement"],
  },
  {
    slug: "indirect-object-pronouns",
    title: "Indirect Object Pronouns: Lui, Leur, and Le vs Lui",
    description:
      "French indirect object pronouns (me, te, lui, nous, vous, leur), verbs that take à + person, choosing le or lui, plaire and manquer, and stressed pronouns after prepositions.",
    level: "A2",
    intro: [
      `An indirect object is the person who receives something through the preposition "à": you give something to someone, speak to someone, write to someone. In French, "à + a person" is replaced by an indirect object pronoun: "je parle à Marie" becomes "je lui parle". Like direct object pronouns, it goes before the verb.`,
      `Two points cause most of the trouble. First, "lui" means both to him and to her, and "leur" means to them. Second, French and English don't always agree on which verbs take "à": you "téléphone à" someone (indirect), but you "aide" someone (direct). This guide sorts both out, plus the special verbs "plaire" and "manquer".`,
    ],
    sections: [
      {
        heading: "The forms, and lui for him and her",
        body: [
          `"Me", "te", "nous" and "vous" are the same as the direct object pronouns. Only the third person differs: "lui" (to him, to her) and "leur" (to them). "Lui" has no gender; "je lui parle" can mean I speak to him or to her.`,
          `Don't confuse "leur" the pronoun (to them, never with an "-s") with "leur / leurs" the possessive (their). "Je leur donne leurs cadeaux": I give them their presents.`,
        ],
        table: {
          headers: ["Person", "Direct", "Indirect"],
          rows: [
            ["me", "me", "me"],
            ["you (tu)", "te", "te"],
            ["him / her / it", "le / la", "lui"],
            ["us", "nous", "nous"],
            ["you (vous)", "vous", "vous"],
            ["them", "les", "leur"],
          ],
        },
        examples: [
          { fr: "Je parle à Sophie. Je lui parle.", en: "I'm talking to Sophie. I'm talking to her." },
          { fr: "Tu as écrit à ton frère ? Oui, je lui ai écrit.", en: "Did you write to your brother? Yes, I wrote to him." },
          { fr: "Je leur donne des bonbons.", en: "I give them sweets." },
          { fr: "Il nous a dit la vérité.", en: "He told us the truth." },
          { fr: "Je te prête mon vélo.", en: "I'll lend you my bike." },
        ],
      },
      {
        heading: "Verbs with à + person",
        body: [
          `Verbs of communicating and giving take "à" before the person: "parler à", "dire à", "demander à", "répondre à", "téléphoner à", "écrire à", "donner à", "prêter à", "offrir à", "envoyer à", "montrer à", "rendre à". Many of them have both a thing (direct) and a person (indirect): "je donne le livre à Paul" → "je lui donne le livre".`,
          `Position is the same as for direct object pronouns: before the conjugated verb, before an infinitive, before the auxiliary in the passé composé. Unlike direct pronouns, indirect pronouns never cause participle agreement: "je lui ai écrit" whether "lui" is a man or a woman.`,
        ],
        examples: [
          { fr: "Je vais lui téléphoner ce soir.", en: "I'm going to phone him / her tonight." },
          { fr: "Tu leur as répondu ?", en: "Did you answer them?" },
          { fr: "Je ne lui ai rien dit.", en: "I didn't tell him / her anything." },
          { fr: "On lui offre un livre pour son anniversaire.", en: "We're giving her a book for her birthday." },
          { fr: "Demande-lui l'heure.", en: "Ask him / her the time." },
        ],
      },
      {
        heading: "Le or lui?",
        body: [
          `The French verb decides, not the English one. If the verb takes "à" before the person, use "lui" / "leur". If it takes the person directly, use "le" / "la" / "les". The trap is the verbs where English and French differ.`,
          `"Aider", "appeler", "remercier", "écouter", "attendre" and "inviter" take a direct object: "je l'aide", "je l'appelle". "Téléphoner à", "répondre à", "obéir à" and "ressembler à" take an indirect one: "je lui téléphone", "je lui ressemble".`,
        ],
        table: {
          headers: ["Direct (le, la, les)", "Indirect (lui, leur)"],
          rows: [
            ["aider quelqu'un: je l'aide", "téléphoner à quelqu'un: je lui téléphone"],
            ["appeler quelqu'un: je l'appelle", "parler à quelqu'un: je lui parle"],
            ["remercier quelqu'un: je le remercie", "répondre à quelqu'un: je lui réponds"],
            ["voir quelqu'un: je la vois", "ressembler à quelqu'un: je lui ressemble"],
          ],
        },
        examples: [
          { fr: "Ma voisine ? Je l'aide souvent.", en: "My neighbour? I often help her." },
          { fr: "Ma voisine ? Je lui téléphone souvent.", en: "My neighbour? I often phone her." },
          { fr: "Je les remercie pour leur aide.", en: "I thank them for their help." },
          { fr: "Il ressemble à son père. Il lui ressemble beaucoup.", en: "He looks like his father. He looks a lot like him." },
          { fr: "Appelle-la demain.", en: "Call her tomorrow." },
        ],
      },
      {
        heading: "Plaire and manquer: the upside-down verbs",
        body: [
          `"Plaire à" (to please) and "manquer à" (to be missed by) work backwards compared with English. The thing that pleases, or the person who is missed, is the subject; the person who feels it is the indirect object. "Ce film me plaît" is literally this film pleases me: I like this film.`,
          `"Tu me manques" means I miss you (literally you are missing to me). To say you miss me, flip it: "je te manque". This is one of the most famous traps in French, so build the sentence from the French logic, not the English.`,
        ],
        examples: [
          { fr: "Ça te plaît ?", en: "Do you like it?" },
          { fr: "Paris lui a beaucoup plu.", en: "He / she really liked Paris." },
          { fr: "Tu me manques.", en: "I miss you." },
          { fr: "Mes amis me manquent.", en: "I miss my friends." },
          { fr: "Je te manque ?", en: "Do you miss me?" },
        ],
      },
      {
        heading: "Stressed pronouns after prepositions",
        body: [
          `After any preposition other than "à" in these constructions ("avec", "pour", "chez", "sans", "de"), use the stressed pronouns "moi", "toi", "lui", "elle", "nous", "vous", "eux", "elles": "avec moi", "pour elle", "chez eux".`,
          `A few verbs keep "à" + stressed pronoun instead of using "lui" / "leur": "penser à" ("je pense à elle"), "faire attention à", "s'intéresser à", and "être à" for possession ("c'est à moi").`,
        ],
        examples: [
          { fr: "Tu viens avec moi ?", en: "Are you coming with me?" },
          { fr: "Ce cadeau, c'est pour toi.", en: "This present is for you." },
          { fr: "On dîne chez eux ce soir.", en: "We're having dinner at their place tonight." },
          { fr: "Je pense souvent à elle.", en: "I often think about her." },
          { fr: "Il parle souvent de vous.", en: "He often talks about you." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je le téléphone ce soir.",
        right: "Je lui téléphone ce soir.",
        why: `"Téléphoner" takes "à" + person, so the pronoun is indirect: "lui".`,
      },
      {
        wrong: "Je lui aide.",
        right: "Je l'aide.",
        why: `"Aider" takes a direct object in French ("aider quelqu'un"), even though help someone with something feels indirect.`,
      },
      {
        wrong: "Je leurs donne les clés.",
        right: "Je leur donne les clés.",
        why: `The pronoun "leur" never takes an "-s". Only the possessive does ("leurs clés").`,
      },
      {
        wrong: "Je manque toi.",
        right: "Tu me manques.",
        why: `With "manquer", the person who is missed is the subject. I miss you is "tu me manques".`,
      },
      {
        wrong: "Je lui pense.",
        right: "Je pense à lui.",
        why: `"Penser à" keeps "à" + stressed pronoun for people.`,
      },
    ],
    faqs: [
      {
        q: `How can "lui" mean him and her?`,
        a: `"Lui" as an indirect object pronoun has no gender; context makes it clear. As a stressed pronoun, though, "lui" is only him, and her is "elle": "avec lui", "avec elle".`,
      },
      {
        q: `Is "demander" direct or indirect?`,
        a: `Both: the thing is direct and the person indirect. "Je demande l'heure à Paul" → "je la lui demande". The same pattern applies to "dire", "donner", "prêter" and "montrer".`,
      },
      {
        q: `What about "à" + a thing?`,
        a: `"À" + a thing or idea is replaced by "y", not "lui": "je réponds à la lettre" → "j'y réponds". See the guide to y and en.`,
      },
    ],
    related: ["direct-object-pronouns", "y-and-en", "double-object-pronouns"],
    lessons: ["a2-stressed-pronouns", "a2-indirect-object-pronouns-1", "a2-indirect-object-pronouns-2", "a2-iop-minimal-pairs-le-lui", "a2-contrast-aider-telephoner", "a2-plaire-manquer"],
  },
  {
    slug: "french-pronominal-verbs",
    title: "Pronominal Verbs: Se Lever, S'appeler, Se Voir",
    description:
      "How French pronominal (reflexive) verbs work: me, te, se in the present, position in the negative and with an infinitive, être and agreement in the passé composé, reciprocal uses and verbs that change meaning.",
    level: "A2",
    intro: [
      `Pronominal verbs are verbs used with an extra pronoun that refers back to the subject: "je me lève" (I get up), "elle s'appelle Inès" (her name is Inès), "on se voit demain" (see you tomorrow). English has a few reflexives (I hurt myself), but French uses them much more, especially for daily routine, where English says nothing at all: I wash, I get dressed.`,
      `The pronoun changes with the subject ("je me", "tu te", "il se"), it goes before the verb like other object pronouns, and in the passé composé every pronominal verb takes "être". Those three facts cover most of what you need.`,
    ],
    sections: [
      {
        heading: "The present: me, te, se, nous, vous, se",
        body: [
          `The reflexive pronoun matches the subject. "Me", "te" and "se" become "m'", "t'" and "s'" before a vowel or mute h: "je m'appelle", "il s'habille". The verb itself conjugates normally.`,
          `In dictionaries these verbs are listed with "se": "se lever", "se coucher", "s'habiller", "se laver", "se doucher", "se réveiller", "se brosser les dents", "se dépêcher". With body parts, French uses the article, not a possessive: "je me lave les mains" (I wash my hands).`,
        ],
        table: {
          headers: ["Person", "se lever", "s'habiller"],
          rows: [
            ["je", "je me lève", "je m'habille"],
            ["tu", "tu te lèves", "tu t'habilles"],
            ["il / elle / on", "il se lève", "elle s'habille"],
            ["nous", "nous nous levons", "nous nous habillons"],
            ["vous", "vous vous levez", "vous vous habillez"],
            ["ils / elles", "ils se lèvent", "elles s'habillent"],
          ],
        },
        examples: [
          { fr: "Je me réveille à sept heures.", en: "I wake up at seven." },
          { fr: "Tu te couches tard ?", en: "Do you go to bed late?" },
          { fr: "Il se rase tous les matins.", en: "He shaves every morning." },
          { fr: "Nous nous dépêchons.", en: "We're hurrying." },
          { fr: "Je me brosse les dents.", en: "I brush my teeth." },
        ],
      },
      {
        heading: "Negation and infinitives",
        body: [
          `In the negative, "ne" goes before the reflexive pronoun and "pas" after the verb: "je ne me lève pas". The pronoun stays glued to the verb.`,
          `With an infinitive, the pronoun goes right before the infinitive and still matches the subject: "je vais me coucher", "tu vas te coucher", "nous devons nous lever tôt". A common mistake is to leave "se" in every person.`,
        ],
        examples: [
          { fr: "Je ne me sens pas bien.", en: "I don't feel well." },
          { fr: "Ils ne se parlent plus.", en: "They don't talk to each other any more." },
          { fr: "Je vais me promener.", en: "I'm going to go for a walk." },
          { fr: "Tu dois te reposer.", en: "You need to rest." },
          { fr: "On va s'amuser !", en: "We're going to have fun!" },
        ],
      },
      {
        heading: "The passé composé: être and agreement",
        body: [
          `All pronominal verbs form the passé composé with "être": "je me suis levé", "elle s'est habillée". The pronoun goes before "être", and in the negative it's "je ne me suis pas levé".`,
          `In most cases the participle agrees with the subject, as with other "être" verbs: "elle s'est levée", "ils se sont couchés". There is one exception worth knowing now: when the verb is followed by a direct object, such as a body part, there is no agreement: "elle s'est lavée" but "elle s'est lavé les mains".`,
        ],
        examples: [
          { fr: "Ce matin, je me suis levé tard.", en: "This morning I got up late." },
          { fr: "Elle s'est couchée à minuit.", en: "She went to bed at midnight." },
          { fr: "Nous nous sommes bien amusés.", en: "We had a great time." },
          { fr: "Ils ne se sont pas réveillés à temps.", en: "They didn't wake up in time." },
          { fr: "Elle s'est cassé la jambe.", en: "She broke her leg. (no agreement: la jambe is the object)" },
        ],
      },
      {
        heading: "Each other: reciprocal verbs",
        body: [
          `With a plural subject (including "on" for we), the pronoun can mean each other: "ils s'aiment" (they love each other), "on s'appelle ce soir" (we'll call each other tonight). Almost any verb that takes a person as object can be used this way.`,
          `"On se voit demain ?" is one of the most common sentences in French, and "on se tutoie ?" (shall we say tu?) is a useful one too. In the passé composé: "ils se sont rencontrés en 2010" (they met in 2010).`,
        ],
        examples: [
          { fr: "On se voit samedi ?", en: "Shall we meet on Saturday?" },
          { fr: "Ils se sont rencontrés à Lyon.", en: "They met in Lyon." },
          { fr: "Nous nous écrivons souvent.", en: "We write to each other often." },
          { fr: "Les deux sœurs se ressemblent.", en: "The two sisters look alike." },
          { fr: "On se tutoie ?", en: "Shall we say tu to each other?" },
        ],
      },
      {
        heading: "Verbs that change meaning with se",
        body: [
          `Some verbs have a different, not just reflexive, meaning with "se". These are best learned as separate vocabulary items.`,
        ],
        table: {
          headers: ["Without se", "With se"],
          rows: [
            ["appeler: to call", "s'appeler: to be called"],
            ["ennuyer: to bore, bother", "s'ennuyer: to be bored"],
            ["rendre compte: to report", "se rendre compte: to realise"],
            ["trouver: to find", "se trouver: to be located"],
            ["passer: to pass, spend", "se passer: to happen"],
            ["tromper: to deceive", "se tromper: to make a mistake"],
          ],
        },
        examples: [
          { fr: "Je m'ennuie au travail.", en: "I'm bored at work." },
          { fr: "Qu'est-ce qui se passe ?", en: "What's happening?" },
          { fr: "Excusez-moi, je me suis trompé.", en: "Sorry, I made a mistake." },
          { fr: "La gare se trouve au centre-ville.", en: "The station is in the town centre." },
          { fr: "Tu te rends compte ?", en: "Can you believe it? (literally: do you realise?)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je lève à sept heures.",
        right: "Je me lève à sept heures.",
        why: `"Lever" alone means to lift or raise something. To get up yourself, you need the pronoun.`,
      },
      {
        wrong: "Je vais se coucher.",
        right: "Je vais me coucher.",
        why: `The pronoun before the infinitive still matches the subject: "je... me", "tu... te".`,
      },
      {
        wrong: "Marie s'est levé tôt.",
        right: "Marie s'est levée tôt.",
        why: `Pronominal verbs take "être", and the participle agrees with the subject, here feminine.`,
      },
      {
        wrong: "Je m'ai couché tard.",
        right: "Je me suis couché tard.",
        why: `All pronominal verbs use "être" in the passé composé, never "avoir".`,
      },
      {
        wrong: "Je me lave mes mains.",
        right: "Je me lave les mains.",
        why: `With body parts, the reflexive pronoun already shows whose they are, so French uses the article.`,
      },
    ],
    faqs: [
      {
        q: "Are pronominal verbs and reflexive verbs the same?",
        a: `"Pronominal" is the broader term: any verb used with "se". Some are truly reflexive (I wash myself), some reciprocal (each other), and some just have a different meaning (s'ennuyer, se souvenir).`,
      },
      {
        q: "Where does the pronoun go in the imperative?",
        a: `In the affirmative it follows the verb, and "te" becomes "toi": "lève-toi !", "dépêchez-vous !", "asseyez-vous". In the negative it stays in front: "ne te lève pas", "ne t'inquiète pas".`,
      },
      {
        q: `Why "nous nous"?`,
        a: `The first "nous" is the subject, the second the reflexive pronoun. In speech, "on se" is far more common: "on se lève tôt".`,
      },
    ],
    related: ["passe-compose-etre", "direct-object-pronouns", "indirect-object-pronouns"],
    lessons: ["a2-pronominal-verbs-1", "a2-pronominal-verbs-2", "a2-pronominal-infinitive-placement", "a2-pronominal-reciprocal", "a2-contrast-pronominal-meaning"],
  },
  {
    slug: "french-comparatives-superlatives",
    title: "Comparatives and Superlatives: Plus, Moins, Meilleur, Mieux",
    description:
      "How to compare in French with plus, moins, aussi and autant, how to form superlatives with le plus, and the classic trap: meilleur vs mieux.",
    level: "A2",
    intro: [
      `English compares in two ways: add -er (taller, cheaper) or use more (more expensive). French has only one: "plus" (more), "moins" (less) or "aussi" (as) before the adjective, and "que" (than, as) before the second element. "Plus grand que", "moins cher que", "aussi intéressant que". No endings to learn.`,
      `The difficulties are elsewhere: comparing quantities ("plus de"), comparing verbs ("autant"), the repeated article in superlatives ("la ville la plus belle"), and above all "meilleur" and "mieux", which both translate as better.`,
    ],
    sections: [
      {
        heading: "Plus, moins, aussi + adjective or adverb",
        body: [
          `Put "plus", "moins" or "aussi" before the adjective or adverb, and "que" before what you compare with. The adjective still agrees with its noun: "ma sœur est plus grande que moi". After "que", use the stressed pronoun: "que moi", "que toi", "que lui", "qu'eux".`,
          `The same pattern works with adverbs: "plus vite", "moins souvent", "aussi bien". In the negative, "pas aussi" is often shortened to "pas si": "ce n'est pas si difficile que ça".`,
        ],
        table: {
          headers: ["Comparison", "Pattern", "Example"],
          rows: [
            ["more ... than", "plus + adj. + que", "Lyon est plus petit que Paris."],
            ["less ... than", "moins + adj. + que", "Le train est moins cher que l'avion."],
            ["as ... as", "aussi + adj. + que", "Elle est aussi grande que moi."],
          ],
        },
        examples: [
          { fr: "Mon frère est plus âgé que moi.", en: "My brother is older than me." },
          { fr: "Cette robe est moins chère que l'autre.", en: "This dress is cheaper than the other one." },
          { fr: "Il est aussi sympa que sa sœur.", en: "He's as nice as his sister." },
          { fr: "Tu parles plus vite que lui.", en: "You speak faster than him." },
          { fr: "Ce n'est pas si loin.", en: "It's not that far." },
        ],
      },
      {
        heading: "Nouns and verbs: plus de, autant",
        body: [
          `To compare quantities of a noun, use "plus de", "moins de", "autant de" (as much, as many) + the noun, with plain "de" and no article: "j'ai plus de travail que toi", "il y a autant de filles que de garçons".`,
          `To compare verbs, put "plus", "moins" or "autant" after the verb: "il travaille plus que moi", "je dors autant que toi". The difference between "aussi" and "autant" is what they go with: "aussi" + adjective or adverb, "autant" + verb or noun. "Plus de" also means more than with numbers: "plus de cent personnes".`,
        ],
        examples: [
          { fr: "Paris a plus d'habitants que Marseille.", en: "Paris has more inhabitants than Marseille." },
          { fr: "J'ai moins de temps qu'avant.", en: "I have less time than before." },
          { fr: "Il y a autant de vélos que de voitures.", en: "There are as many bikes as cars." },
          { fr: "Elle travaille autant que son mari.", en: "She works as much as her husband." },
          { fr: "Il y avait plus de mille personnes.", en: "There were more than a thousand people." },
        ],
      },
      {
        heading: "Superlatives: le plus, la moins",
        body: [
          `The superlative is "le", "la" or "les" + "plus" or "moins" + adjective. The article agrees with the noun. When the adjective normally goes after the noun, the article is repeated: "la ville la plus belle", "le film le plus intéressant". When the adjective goes before the noun (the BAGS adjectives), there is only one article: "la plus belle ville".`,
          `In English, the superlative is followed by in (the tallest building in the world); in French, use "de": "le plus grand bâtiment du monde", "la meilleure élève de la classe".`,
        ],
        examples: [
          { fr: "C'est le restaurant le plus cher de la ville.", en: "It's the most expensive restaurant in town." },
          { fr: "C'est la plus belle plage de Bretagne.", en: "It's the most beautiful beach in Brittany." },
          { fr: "Ce sont les questions les moins difficiles.", en: "These are the least difficult questions." },
          { fr: "Le mont Blanc est la plus haute montagne d'Europe occidentale.", en: "Mont Blanc is the highest mountain in Western Europe." },
          { fr: "C'est lui qui court le plus vite.", en: "He's the one who runs the fastest." },
        ],
      },
      {
        heading: "Meilleur or mieux?",
        body: [
          `Both mean better, and their superlatives both mean best. The difference is grammatical. "Meilleur" is the comparative of the adjective "bon" (good): it describes a noun and agrees with it ("meilleur", "meilleure", "meilleurs", "meilleures"). "Mieux" is the comparative of the adverb "bien" (well): it modifies a verb and never changes.`,
          `Ask: would I say good or well here? A better film is a good film, more so: "un meilleur film". She sings better: she sings well, more so: "elle chante mieux". "Plus bon" is wrong, and "plus bien" too. After "c'est", "mieux" is used for it's better (as a general comment): "c'est mieux comme ça". "Pire" (worse) is the irregular comparative of "mauvais", though "plus mauvais" is also correct.`,
        ],
        table: {
          headers: ["", "Adjective (good)", "Adverb (well)"],
          rows: [
            ["base", "bon / bonne", "bien"],
            ["better", "meilleur(e)(s)", "mieux"],
            ["the best", "le / la / les meilleur(e)(s)", "le mieux"],
          ],
        },
        examples: [
          { fr: "Ce gâteau est meilleur que l'autre.", en: "This cake is better than the other one." },
          { fr: "C'est ma meilleure amie.", en: "She's my best friend." },
          { fr: "Tu parles mieux français que moi.", en: "You speak French better than me." },
          { fr: "Je me sens mieux aujourd'hui.", en: "I feel better today." },
          { fr: "C'est lui qui chante le mieux.", en: "He's the one who sings best." },
          { fr: "La situation est pire qu'avant.", en: "The situation is worse than before." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Il est plus grand de moi.",
        right: "Il est plus grand que moi.",
        why: `Than is "que" in comparisons. "De" is for superlatives (in) and for more than with numbers.`,
      },
      {
        wrong: "C'est plus bon.",
        right: "C'est meilleur.",
        why: `"Bon" has an irregular comparative, "meilleur". "Plus bon" is never correct.`,
      },
      {
        wrong: "Elle chante meilleur que moi.",
        right: "Elle chante mieux que moi.",
        why: `Sing is a verb, so it takes the adverb "mieux". "Meilleur" only describes nouns.`,
      },
      {
        wrong: "le restaurant plus cher",
        right: "le restaurant le plus cher",
        why: `When the adjective follows the noun, the superlative repeats the article.`,
      },
      {
        wrong: "J'ai plus du temps que toi.",
        right: "J'ai plus de temps que toi.",
        why: `"Plus de", "moins de" and "autant de" take plain "de" with no article.`,
      },
    ],
    faqs: [
      {
        q: `What's the difference between "aussi" and "autant"?`,
        a: `"Aussi" goes with adjectives and adverbs ("aussi grand", "aussi vite"); "autant" with verbs and nouns ("il mange autant que moi", "autant de livres"). Both use "que" for as.`,
      },
      {
        q: `Is it "plus bien" or "mieux"?`,
        a: `Always "mieux". In the same way, "plus bon" is replaced by "meilleur". "Plus mal" and "plus mauvais" do exist, alongside "pire".`,
      },
      {
        q: "Is the -s of plus pronounced?",
        a: `It depends. In "plus grand" (more), it's silent. At the end of a phrase meaning more ("j'en veux plus") and in "plus de" (more of), it is often pronounced; in "ne...plus" (no more) it's silent. Pronunciation is how speakers tell "j'en veux plus" (I want more) from "j'en veux plus" (I don't want any more, with the "ne" dropped).`,
      },
    ],
    related: ["french-adjective-agreement", "french-partitive-articles", "french-futur-simple"],
    lessons: ["a2-comparisons-1", "a2-comparisons-2", "a2-contrast-meilleur-mieux", "a2-drill-aussi-autant", "a2-error-hunt-comparisons"],
  },
  {
    slug: "french-futur-simple",
    title: "The Futur Simple",
    description:
      "How to form the French futur simple (infinitive + endings), the irregular stems (ser-, aur-, ir-, fer-), quand + future, si + present, and the difference from the futur proche.",
    level: "A2",
    intro: [
      `The futur simple is French's one-word future: "je partirai" (I will leave), "nous verrons" (we'll see). It is built on the infinitive itself, with endings that look a lot like "avoir" in the present. Once you know the dozen irregular stems, it is one of the easiest tenses to form.`,
      `You already know the futur proche ("je vais partir"), which dominates in conversation. The futur simple is common in writing, in promises and predictions, in forecasts and plans further ahead, and after "quand" when you talk about the future, where French insists on it and English doesn't.`,
    ],
    sections: [
      {
        heading: "Infinitive + endings",
        body: [
          `Take the whole infinitive and add "-ai", "-as", "-a", "-ons", "-ez", "-ont". "-Re" verbs drop their final "e" first: "prendre" → "prendr-", "vendre" → "vendr-". Every future stem ends in "r", which is the sound to listen for.`,
          `Spelling-change -er verbs carry their change into the future stem: "acheter" → "j'achèterai", "appeler" → "j'appellerai". Verbs like "préférer" keep the "é" in standard spelling ("je préférerai").`,
        ],
        table: {
          headers: ["Person", "parler", "finir", "prendre"],
          rows: [
            ["je", "je parlerai", "je finirai", "je prendrai"],
            ["tu", "tu parleras", "tu finiras", "tu prendras"],
            ["il / elle / on", "il parlera", "elle finira", "on prendra"],
            ["nous", "nous parlerons", "nous finirons", "nous prendrons"],
            ["vous", "vous parlerez", "vous finirez", "vous prendrez"],
            ["ils / elles", "ils parleront", "elles finiront", "ils prendront"],
          ],
        },
        examples: [
          { fr: "Je t'appellerai demain.", en: "I'll call you tomorrow." },
          { fr: "Nous finirons le projet en juin.", en: "We'll finish the project in June." },
          { fr: "Vous prendrez un dessert ?", en: "Will you have a dessert?" },
          { fr: "Ils arriveront vers midi.", en: "They'll arrive around noon." },
          { fr: "Demain, il fera beau dans le sud.", en: "Tomorrow it will be sunny in the south." },
        ],
      },
      {
        heading: "Irregular stems",
        body: [
          `About fifteen common verbs have an irregular stem, but the endings never change. The most important ones are below. Notice that many are the verbs you use most: "être", "avoir", "aller", "faire".`,
        ],
        table: {
          headers: ["Infinitive", "Stem", "Example"],
          rows: [
            ["être", "ser-", "je serai"],
            ["avoir", "aur-", "tu auras"],
            ["aller", "ir-", "il ira"],
            ["faire", "fer-", "nous ferons"],
            ["venir / devenir", "viendr- / deviendr-", "vous viendrez"],
            ["pouvoir", "pourr-", "ils pourront"],
            ["vouloir", "voudr-", "je voudrai"],
            ["devoir", "devr-", "tu devras"],
            ["savoir", "saur-", "il saura"],
            ["voir", "verr-", "on verra"],
            ["envoyer", "enverr-", "j'enverrai"],
            ["falloir / pleuvoir", "faudr- / pleuvr-", "il faudra, il pleuvra"],
          ],
        },
        examples: [
          { fr: "Je serai à la maison ce soir.", en: "I'll be at home tonight." },
          { fr: "Tu auras trente ans l'année prochaine.", en: "You'll be thirty next year." },
          { fr: "On ira à la plage si tu veux.", en: "We'll go to the beach if you like." },
          { fr: "Il faudra partir tôt.", en: "We'll have to leave early." },
          { fr: "On verra !", en: "We'll see!" },
        ],
      },
      {
        heading: "Quand + future, si + present",
        body: [
          `When a sentence with "quand" (when), "dès que" or "aussitôt que" (as soon as), or "lorsque" refers to the future, French puts both verbs in the future. English uses the present after when: When I'm older, I'll travel. French says, literally, when I will be older: "quand je serai grand, je voyagerai".`,
          `"Si" (if) works the other way, exactly as in English: present after "si", future in the main clause. "S'il pleut, on restera à la maison." Never put the future directly after "si" meaning if.`,
        ],
        examples: [
          { fr: "Quand je serai à Paris, je t'appellerai.", en: "When I'm in Paris, I'll call you." },
          { fr: "Dès qu'il arrivera, on mangera.", en: "As soon as he arrives, we'll eat." },
          { fr: "Quand tu auras fini, tu pourras sortir.", en: "When you've finished, you can go out." },
          { fr: "Si tu viens, je ferai un gâteau.", en: "If you come, I'll make a cake." },
          { fr: "S'il fait beau demain, on ira à la plage.", en: "If it's sunny tomorrow, we'll go to the beach." },
        ],
      },
      {
        heading: "Futur simple or futur proche?",
        body: [
          `In everyday speech, "je vais partir" is the default way to talk about plans and things about to happen, especially if they're connected to now. The futur simple sounds more distant, more formal or more definite. It is standard in writing, in forecasts ("il pleuvra"), in promises ("je t'aiderai"), in official instructions, and after "quand".`,
          `Often both are possible with only a nuance: "je vais l'appeler" (I'm going to call her: it's my plan), "je l'appellerai" (I'll call her: a promise or a more open future).`,
        ],
        examples: [
          { fr: "Attention, tu vas tomber !", en: "Careful, you're going to fall!" },
          { fr: "Un jour, je vivrai à la campagne.", en: "One day I'll live in the countryside." },
          { fr: "Je te promets, je ne recommencerai pas.", en: "I promise, I won't do it again." },
          { fr: "Ce soir, on va regarder un film.", en: "Tonight we're going to watch a film." },
          { fr: "Les magasins seront fermés le 1er mai.", en: "Shops will be closed on 1 May." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quand je suis grand, je serai pilote.",
        right: "Quand je serai grand, je serai pilote.",
        why: `After "quand" referring to the future, French uses the future, unlike English when I'm older.`,
      },
      {
        wrong: "Si tu viendras, on mangera ensemble.",
        right: "Si tu viens, on mangera ensemble.",
        why: `After "si" meaning if, use the present, never the future.`,
      },
      {
        wrong: "Je prendreai le train.",
        right: "Je prendrai le train.",
        why: `"-Re" verbs drop the final "e" of the infinitive before the endings.`,
      },
      {
        wrong: "J'allerai à Rome.",
        right: "J'irai à Rome.",
        why: `"Aller" has the irregular stem "ir-".`,
      },
      {
        wrong: "Je vais ferai mes devoirs.",
        right: "Je ferai mes devoirs. / Je vais faire mes devoirs.",
        why: `Don't mix the two futures. The futur simple is one word with no helping verb; the futur proche is "aller" + infinitive.`,
      },
    ],
    faqs: [
      {
        q: `How do I hear the difference between "je parlerai" and "je parlerais"?`,
        a: `"Je parlerai" (future) ends in an "é" sound; "je parlerais" (conditional) ends in "è". Many speakers barely distinguish them in the "je" form, and context usually decides. In writing, the "s" matters.`,
      },
      {
        q: "Does the futur simple sound formal?",
        a: `Not in itself: "on verra", "ça ira", "je t'appellerai" are everyday phrases. But for a plan you're about to carry out, the futur proche sounds more natural in conversation.`,
      },
      {
        q: `Is the future after "quand" always required?`,
        a: `Yes, whenever the time referred to is future. When "quand" means whenever, about a general habit, the present is used: "quand il pleut, je prends le bus".`,
      },
    ],
    related: ["futur-proche-venir-de", "french-comparatives-superlatives", "passe-compose-vs-imparfait"],
    lessons: ["a2-futur-simple-1", "a2-futur-simple-2", "a2-futur-stems-drill", "a2-quand-plus-futur", "a2-minimal-pairs-futur-proche"],
  },
  {
    slug: "y-and-en",
    title: "The Pronouns Y and En",
    description:
      "What y and en replace in French: y for places and à + thing, en for de + noun, quantities and the partitive. Placement, set expressions like il y en a, and how to choose between them.",
    level: "A2",
    intro: [
      `"Y" and "en" are two short pronouns with no single English equivalent, which is why learners avoid them, and why their absence makes French sound foreign. Roughly, "y" replaces "à" + a place or thing (there, about it), and "en" replaces "de" + a noun (some, of it, of them, from there). "Tu vas à Lyon ? Oui, j'y vais." "Tu veux du café ? Oui, j'en veux."`,
      `French uses them because it dislikes leaving a verb without its complement. English can say yes, I'm going or yes, I want some; French needs the pronoun: "j'y vais", "j'en veux". This guide covers what each replaces, where they go, and the set phrases that use them.`,
    ],
    sections: [
      {
        heading: "Y: places",
        body: [
          `"Y" replaces a place introduced by "à", "en", "dans", "chez", "sur" or "sous": there. "Je vais à la poste" → "j'y vais". "Elle habite en Espagne" → "elle y habite". It can't be dropped: "je vais" alone sounds incomplete, whereas English I'm going is fine.`,
          `With "aller" in the future and conditional, "y" is dropped for sound: "j'irai" (not "j'y irai").`,
        ],
        examples: [
          { fr: "Tu vas souvent à la piscine ? Oui, j'y vais le mardi.", en: "Do you often go to the pool? Yes, I go on Tuesdays." },
          { fr: "Mes clés sont dans mon sac. Elles y sont toujours.", en: "My keys are in my bag. They're always there." },
          { fr: "On va chez Marc ? On y va !", en: "Shall we go to Marc's? Let's go!" },
          { fr: "Tu es déjà allé au Canada ? Non, je n'y suis jamais allé.", en: "Have you been to Canada? No, I've never been." },
          { fr: "Elle travaille à Paris, elle y habite depuis dix ans.", en: "She works in Paris; she's lived there for ten years." },
        ],
      },
      {
        heading: "Y: à + thing or idea",
        body: [
          `With verbs that take "à" + a thing, "y" replaces "à" + that thing: "penser à" ("j'y pense"), "répondre à" ("j'y réponds"), "s'intéresser à" ("je m'y intéresse"), "jouer à" ("on y joue"), "croire à" ("j'y crois").`,
          `For people, don't use "y". Use "lui" / "leur" with most verbs ("je lui réponds") or "à" + stressed pronoun with "penser à" and "s'intéresser à" ("je pense à elle").`,
        ],
        examples: [
          { fr: "Tu as répondu à son mail ? Pas encore, j'y réponds ce soir.", en: "Have you answered his email? Not yet, I'll answer it tonight." },
          { fr: "Je pense à mes vacances. J'y pense tout le temps.", en: "I'm thinking about my holiday. I think about it all the time." },
          { fr: "Tu joues aux échecs ? Oui, j'y joue avec mon père.", en: "Do you play chess? Yes, I play with my dad." },
          { fr: "La politique ? Je ne m'y intéresse pas.", en: "Politics? I'm not interested in it." },
          { fr: "Je pense à Léa. Je pense à elle.", en: "I'm thinking about Léa. I'm thinking about her. (a person: no y)" },
        ],
      },
      {
        heading: "En: some, any, of it",
        body: [
          `"En" replaces a noun introduced by "du", "de la", "des" or "de": the partitive and the indefinite plural. "Tu veux du thé ? Oui, j'en veux." "Il a des enfants ? Oui, il en a." In the negative: "non, je n'en veux pas".`,
          `With numbers and quantities, "en" replaces the noun, and the number or quantity stays at the end: "j'ai deux frères" → "j'en ai deux"; "il boit beaucoup de café" → "il en boit beaucoup". English often drops the noun (I have two); French needs "en". The very common "il y en a" means there is some / there are some.`,
        ],
        examples: [
          { fr: "Tu as des frères et sœurs ? Oui, j'en ai trois.", en: "Do you have brothers and sisters? Yes, I have three." },
          { fr: "Il reste du pain ? Non, il n'y en a plus.", en: "Is there any bread left? No, there's none left." },
          { fr: "Tu veux des cerises ? J'en ai acheté un kilo.", en: "Do you want some cherries? I bought a kilo." },
          { fr: "Des problèmes ? On en a beaucoup.", en: "Problems? We have lots." },
          { fr: "Combien de cafés tu bois ? J'en bois deux par jour.", en: "How many coffees do you drink? I drink two a day." },
        ],
      },
      {
        heading: "En: verbs with de, and from there",
        body: [
          `"En" also replaces "de" + a thing after verbs and expressions built with "de": "parler de" ("on en parle"), "avoir besoin de" ("j'en ai besoin"), "avoir envie de" ("j'en ai envie"), "avoir peur de" ("j'en ai peur"), "s'occuper de" ("je m'en occupe"). For people, use "de" + stressed pronoun: "je parle de lui".`,
          `With verbs of coming back from somewhere, "en" means from there: "tu viens de la gare ? Oui, j'en viens". In the passé composé, "en" never causes participle agreement: "des pommes ? J'en ai mangé".`,
        ],
        examples: [
          { fr: "Tu as besoin de la voiture ? Oui, j'en ai besoin.", en: "Do you need the car? Yes, I need it." },
          { fr: "On en parle demain ?", en: "Shall we talk about it tomorrow?" },
          { fr: "Les réservations ? Je m'en occupe.", en: "The bookings? I'll take care of it." },
          { fr: "Il est allé à la banque et il en revient.", en: "He went to the bank and he's coming back from there now." },
          { fr: "Tu en as envie ?", en: "Do you feel like it?" },
        ],
      },
      {
        heading: "Placement, and y or en?",
        body: [
          `"Y" and "en" go where other object pronouns go: before the conjugated verb ("j'y vais"), before an infinitive ("je vais y aller", "je veux en acheter"), before the auxiliary in the passé composé ("j'y suis allé", "j'en ai pris"). In the negative, "ne" comes first: "je n'y vais pas", "il n'en a pas". In the affirmative imperative they follow the verb, and "-er" verbs regain their "s": "vas-y !", "manges-en !".`,
          `To choose, look at the preposition the verb uses: "à" → "y", "de" → "en". "Je pense à mon examen" → "j'y pense"; "je parle de mon examen" → "j'en parle".`,
        ],
        table: {
          headers: ["Replaces", "Pronoun", "Example"],
          rows: [
            ["à / en / dans / chez + place", "y", "Je vais à Nice. → J'y vais."],
            ["à + thing", "y", "Je réponds à la lettre. → J'y réponds."],
            ["du / de la / des + noun", "en", "Je bois du thé. → J'en bois."],
            ["number / quantity + noun", "en", "J'ai deux chats. → J'en ai deux."],
            ["de + thing", "en", "Je parle du film. → J'en parle."],
          ],
        },
        examples: [
          { fr: "Je vais y réfléchir.", en: "I'll think about it." },
          { fr: "Je n'en sais rien.", en: "I have no idea." },
          { fr: "Ça y est, j'ai fini !", en: "That's it, I've finished!" },
          { fr: "Je n'y peux rien.", en: "There's nothing I can do about it." },
          { fr: "J'en ai marre !", en: "I'm fed up! (casual)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Tu vas au marché ? Oui, je vais.",
        right: "Tu vas au marché ? Oui, j'y vais.",
        why: `"Aller" needs a destination; "y" stands in for it. "Je vais" on its own sounds unfinished.`,
      },
      {
        wrong: "J'ai deux.",
        right: "J'en ai deux.",
        why: `When you drop the noun after a number, French needs "en" to stand for it.`,
      },
      {
        wrong: "Je pense à Paul. J'y pense.",
        right: "Je pense à Paul. Je pense à lui.",
        why: `"Y" replaces things and places, not people.`,
      },
      {
        wrong: "Des fraises ? J'en ai achetées.",
        right: "Des fraises ? J'en ai acheté.",
        why: `"En" never triggers past participle agreement.`,
      },
      {
        wrong: "Je vais aller y.",
        right: "Je vais y aller.",
        why: `"Y" goes before the infinitive, like other object pronouns.`,
      },
    ],
    faqs: [
      {
        q: `What does "il y en a" mean?`,
        a: `There is some / there are some (of it, of them). It combines "il y a" with "en": "il y a du lait ?" "Oui, il y en a." "Il n'y en a plus" means there's none left.`,
      },
      {
        q: `What are "on y va" and "vas-y"?`,
        a: `"On y va" (let's go) and "vas-y" (go on, go ahead) are among the most frequent phrases in spoken French. "Allez-y" is the vous form. In all of them "y" has faded to a general sense of there, to it.`,
      },
      {
        q: `Can I use "en" with a definite article?`,
        a: `No. "J'aime le chocolat" becomes "je l'aime", not "j'en aime". "En" is for "de" + noun: partitive, indefinite, quantities and verbs with "de".`,
      },
      {
        q: `What happens when "y" and "en" are used together?`,
        a: `"Y" comes first: "il y en a". Other combinations are covered in the guide to two pronouns together.`,
      },
    ],
    related: ["indirect-object-pronouns", "double-object-pronouns", "french-partitive-articles"],
    lessons: ["a2-pronoun-y-1", "a2-pronoun-y-2", "a2-pronoun-en-1", "a2-pronoun-en-2", "a2-contrast-y-or-en", "a2-y-set-expressions"],
  },
  {
    slug: "negatives-and-indefinites",
    title: "Ne...Que, Aucun, Quelqu'un: Negatives and Indefinites",
    description:
      "French negative words beyond ne...pas (ne...aucun, ne...nulle part, ne...ni...ni, personne and rien as subjects), ne...que for only, and the indefinites quelqu'un, quelque chose, quelques, plusieurs, chaque and tout.",
    level: "A2",
    intro: [
      `At the beginner level you met "ne...pas", "ne...jamais", "ne...plus", "ne...rien" and "ne...personne". This guide adds the rest of the family and the details that trip people up: where "rien" and "personne" go in the passé composé, how they work as subjects ("personne n'est venu"), and "ne...que", which looks negative but means only.`,
      `It also covers the positive words these negatives answer: "quelqu'un" (someone), "quelque chose" (something), "quelque part" (somewhere), plus the quantity words "quelques", "plusieurs", "chaque", "chacun" and "tout". English speakers mix these up because English uses some and any for almost everything.`,
    ],
    sections: [
      {
        heading: "The full set of negatives",
        body: [
          `All negatives work like "ne...pas": "ne" before the conjugated verb, the second word after it. "Ne...aucun(e)" means not a single, no (and agrees with its noun, singular only): "je n'ai aucune idée". "Ne...nulle part" means nowhere. "Ne...ni...ni" means neither... nor, and the articles usually disappear after "ni": "je ne bois ni thé ni café".`,
          `Each negative has a positive partner, which helps you choose: "quelqu'un" ↔ "personne", "quelque chose" ↔ "rien", "quelque part" ↔ "nulle part", "toujours / souvent" ↔ "jamais", "encore" ↔ "plus".`,
        ],
        table: {
          headers: ["Positive", "Negative", "Example"],
          rows: [
            ["quelqu'un", "ne...personne", "Je ne connais personne ici."],
            ["quelque chose", "ne...rien", "Il ne dit rien."],
            ["quelque part", "ne...nulle part", "Je ne trouve mes clés nulle part."],
            ["un, des, quelques", "ne...aucun(e)", "Je n'ai aucun problème."],
            ["et... et / ou... ou", "ne...ni...ni", "Elle n'aime ni le thé ni le café."],
          ],
        },
        examples: [
          { fr: "Je n'ai aucune idée.", en: "I have no idea." },
          { fr: "On ne va nulle part ce week-end.", en: "We're not going anywhere this weekend." },
          { fr: "Il ne mange ni viande ni poisson.", en: "He eats neither meat nor fish." },
          { fr: "Il n'y a aucun problème.", en: "There's no problem at all." },
          { fr: "Tu as vu quelqu'un ? Non, personne.", en: "Did you see anyone? No, nobody." },
        ],
      },
      {
        heading: "Personne and rien: as subjects and in the passé composé",
        body: [
          `"Personne" and "rien" can be the subject. Then they come first, followed by "ne" and the verb, with no "pas": "personne n'est venu" (nobody came), "rien ne marche" (nothing works). Adding "pas" here is a common mistake.`,
          `In the passé composé, "rien" (like "pas", "jamais", "plus") goes between the auxiliary and the participle: "je n'ai rien vu". But "personne", "aucun" and "nulle part" go after the participle: "je n'ai vu personne", "je ne l'ai trouvé nulle part". The same split applies before an infinitive: "je ne veux rien manger" but "je ne veux voir personne".`,
        ],
        examples: [
          { fr: "Personne ne m'a appelé.", en: "Nobody called me." },
          { fr: "Rien n'a changé.", en: "Nothing has changed." },
          { fr: "Je n'ai rien compris.", en: "I didn't understand anything." },
          { fr: "Je n'ai rencontré personne.", en: "I didn't meet anyone." },
          { fr: "Aucun train n'est parti ce matin.", en: "Not a single train left this morning." },
        ],
      },
      {
        heading: "Ne...que: only",
        body: [
          `"Ne...que" means only. It isn't really negative: "je n'ai que dix euros" means I have only ten euros, so I do have something. "Que" goes right before the word it restricts, which gives it flexibility: "je ne travaille que le lundi" (I only work on Mondays). After "ne...que", articles stay as they are: "il ne boit que du thé", not "de thé".`,
          `"Seulement" is a near synonym and often interchangeable: "j'ai seulement dix euros". In speech the "ne" is often dropped: "j'ai que dix euros", which can sound like "j'ai pas" to learners, so listen for the "que".`,
        ],
        examples: [
          { fr: "Je n'ai que cinq minutes.", en: "I've only got five minutes." },
          { fr: "Il ne parle que de foot.", en: "He only talks about football." },
          { fr: "Elle ne boit que de l'eau.", en: "She only drinks water." },
          { fr: "On n'est allés qu'une fois à Paris.", en: "We've only been to Paris once." },
          { fr: "Il n'y a que toi qui peux m'aider.", en: "Only you can help me." },
        ],
      },
      {
        heading: "Agreeing and disagreeing: aussi, non plus, si",
        body: [
          `To agree with a positive statement, say "moi aussi" (me too). To agree with a negative one, say "moi non plus" (me neither); "moi aussi" there would be a contradiction. To disagree with a negative, use "moi si" (I do), and with a positive, "pas moi" or "moi non" (not me).`,
          `"Si" also answers a negative question with yes: "tu ne viens pas ? Si !" (aren't you coming? Yes I am!).`,
        ],
        examples: [
          { fr: "Je n'aime pas les huîtres. Moi non plus.", en: "I don't like oysters. Me neither." },
          { fr: "J'adore ce film. Moi aussi !", en: "I love this film. Me too!" },
          { fr: "Je ne parle pas allemand. Moi si.", en: "I don't speak German. I do." },
          { fr: "Tu n'as pas faim ? Si, un peu.", en: "Aren't you hungry? Yes, a little." },
          { fr: "Elle n'est pas venue, et son frère non plus.", en: "She didn't come, and neither did her brother." },
        ],
      },
      {
        heading: "Quelques, plusieurs, chaque, tout",
        body: [
          `"Quelques" (a few, some) and "plusieurs" (several) go before plural nouns with no article: "quelques amis", "plusieurs fois". "Chaque" (each, every) goes with a singular noun: "chaque jour". Its pronoun is "chacun / chacune" (each one): "chacun paie sa part".`,
          `"Tout" agrees with its noun: "tout le temps", "toute la journée", "tous les jours", "toutes les semaines". Note the meaning shift: "toute la journée" is all day, "tous les jours" is every day. "Quelque chose" and "rien" take "de" + a masculine adjective: "quelque chose d'intéressant", "rien de grave".`,
        ],
        examples: [
          { fr: "J'ai invité quelques amis.", en: "I've invited a few friends." },
          { fr: "Je l'ai appelé plusieurs fois.", en: "I called him several times." },
          { fr: "Chaque matin, je cours vingt minutes.", en: "Every morning I run for twenty minutes." },
          { fr: "Il a plu toute la semaine.", en: "It rained all week." },
          { fr: "Tu veux boire quelque chose de chaud ?", en: "Do you want something hot to drink?" },
          { fr: "Ce n'est rien de grave.", en: "It's nothing serious." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Personne n'est pas venu.",
        right: "Personne n'est venu.",
        why: `"Personne" already does the job of "pas". Never combine them.`,
      },
      {
        wrong: "Je n'ai personne vu.",
        right: "Je n'ai vu personne.",
        why: `Unlike "rien", "personne" goes after the past participle.`,
      },
      {
        wrong: "Il ne boit que d'eau.",
        right: "Il ne boit que de l'eau.",
        why: `"Ne...que" is not a true negative, so articles don't change to "de" after it: "je ne bois que du café".`,
      },
      {
        wrong: "Je n'aime pas le jazz. Moi aussi.",
        right: "Je n'aime pas le jazz. Moi non plus.",
        why: `Agreeing with a negative needs "non plus".`,
      },
      {
        wrong: "J'ai aucunes idées.",
        right: "Je n'ai aucune idée.",
        why: `"Aucun(e)" is singular and needs "ne" before the verb.`,
      },
    ],
    faqs: [
      {
        q: `Can "jamais", "rien" and "personne" be used alone?`,
        a: `Yes, as short answers with no verb: "qui est là ? Personne.", "tu as fait quoi ? Rien.", "tu fumes ? Jamais !". With a verb, you need "ne" in writing.`,
      },
      {
        q: "Can I combine negatives?",
        a: `Yes, with "plus", "jamais" and "rien" or "personne", but without "pas": "je ne vois plus personne" (I don't see anyone any more), "il ne dit jamais rien" (he never says anything).`,
      },
      {
        q: `What's the difference between "quelques" and "quelque"?`,
        a: `"Quelques" (plural) means a few: "quelques jours". Singular "quelque" survives mainly in fixed words like "quelque chose", "quelque part" and "quelqu'un".`,
      },
    ],
    related: ["french-questions-and-negation", "french-partitive-articles", "passe-compose-avoir"],
    lessons: ["a2-negatives-1", "a2-negatives-2", "a2-ne-que", "a2-pattern-aussi-non-plus-si", "a2-indefinites", "a2-quantities"],
  },
  {
    slug: "adverbs-and-bon-vs-bien",
    title: "Adverbs in -ment, and Bon vs Bien",
    description:
      "How to form French adverbs in -ment from adjectives, the irregular ones (bien, mal, vite), where adverbs go in the sentence, and the bon vs bien and mauvais vs mal contrast.",
    level: "A2",
    intro: [
      `English makes most adverbs by adding -ly: quick, quickly. French adds "-ment", usually to the feminine adjective: "lent" → "lente" → "lentement" (slowly). There are a handful of rules for awkward endings and a few irregular adverbs to memorise, but most of the system is mechanical.`,
      `The harder part is the difference between an adjective and an adverb, which English often blurs (he did good, it went real well). French doesn't: "bon" describes a noun, "bien" describes a verb. Mixing them up is one of the most noticeable learner errors.`,
    ],
    sections: [
      {
        heading: "Feminine adjective + -ment",
        body: [
          `Take the feminine form of the adjective and add "-ment": "heureux" → "heureuse" → "heureusement", "doux" → "douce" → "doucement", "sérieux" → "sérieusement". If the masculine already ends in a vowel, use the masculine: "vrai" → "vraiment", "poli" → "poliment", "absolu" → "absolument".`,
          `Adjectives in "-ant" and "-ent" change to "-amment" and "-emment", both pronounced "-amment": "courant" → "couramment", "évident" → "évidemment", "récent" → "récemment". (Exception: "lent" → "lentement".)`,
        ],
        table: {
          headers: ["Adjective", "Rule", "Adverb"],
          rows: [
            ["lent / lente", "feminine + -ment", "lentement"],
            ["vrai", "masculine vowel + -ment", "vraiment"],
            ["courant", "-ant → -amment", "couramment"],
            ["évident", "-ent → -emment", "évidemment"],
            ["gentil", "irregular", "gentiment"],
            ["précis / énorme", "-ément", "précisément, énormément"],
          ],
        },
        examples: [
          { fr: "Parle plus lentement, s'il te plaît.", en: "Speak more slowly, please." },
          { fr: "Heureusement, il ne pleuvait pas.", en: "Luckily, it wasn't raining." },
          { fr: "Elle parle couramment trois langues.", en: "She speaks three languages fluently." },
          { fr: "Tu viens ? Évidemment !", en: "Are you coming? Of course!" },
          { fr: "J'ai vraiment aimé ce livre.", en: "I really liked this book." },
        ],
      },
      {
        heading: "Irregular adverbs and adjectives used as adverbs",
        body: [
          `Some of the most common adverbs don't end in "-ment" at all: "bien" (well), "mal" (badly), "vite" (fast, quickly), "mieux" (better), "beaucoup" (a lot), "trop" (too much), "souvent" (often), "déjà", "toujours", "encore".`,
          `A few adjectives are used as invariable adverbs in set combinations: "parler fort" (speak loudly), "coûter cher" (cost a lot), "sentir bon" (smell nice), "travailler dur" (work hard), "chanter faux" (sing out of tune). They don't agree: "ces chaussures coûtent cher".`,
        ],
        examples: [
          { fr: "Il conduit trop vite.", en: "He drives too fast." },
          { fr: "J'ai mal dormi.", en: "I slept badly." },
          { fr: "Ces fleurs sentent bon.", en: "These flowers smell nice." },
          { fr: "Les billets coûtent cher.", en: "The tickets are expensive." },
          { fr: "Parlez plus fort, je ne vous entends pas.", en: "Speak up, I can't hear you." },
        ],
      },
      {
        heading: "Where adverbs go",
        body: [
          `In a simple tense, the adverb usually goes right after the conjugated verb, never between the subject and the verb as in English: "je mange souvent ici" (I often eat here), not "je souvent mange".`,
          `In the passé composé, short common adverbs ("bien", "mal", "déjà", "souvent", "beaucoup", "trop", "vraiment", "toujours") go between the auxiliary and the participle: "j'ai bien dormi". Longer "-ment" adverbs usually go after the participle ("il a parlé lentement"), and adverbs of time and place ("hier", "ici", "demain") at the beginning or end of the sentence.`,
        ],
        examples: [
          { fr: "Je vais souvent au cinéma.", en: "I often go to the cinema." },
          { fr: "Il a beaucoup travaillé cette semaine.", en: "He worked a lot this week." },
          { fr: "Tu as vraiment bien chanté.", en: "You sang really well." },
          { fr: "Elle a répondu calmement.", en: "She answered calmly." },
          { fr: "Hier, on a mangé ici.", en: "We ate here yesterday." },
        ],
      },
      {
        heading: "Bon or bien? Mauvais or mal?",
        body: [
          `"Bon" (good) is an adjective: it describes a noun and agrees ("un bon film", "une bonne idée"). "Bien" (well) is an adverb: it describes how something is done and never changes ("elle chante bien"). Likewise "mauvais" (bad, adjective) vs "mal" (badly, adverb).`,
          `After "être", the choice follows the meaning. "C'est bon" is about taste or being OK and settled ("c'est bon, j'ai fini"); "c'est bien" is about quality or approval ("c'est bien, ce que tu fais"). "Ce gâteau est bon" (tastes good), "ce livre est bien" (is good, worth reading). For the comparatives, "meilleur" and "mieux", see the comparatives guide.`,
        ],
        table: {
          headers: ["", "Adjective (describes a noun)", "Adverb (describes a verb)"],
          rows: [
            ["good / well", "bon, bonne", "bien"],
            ["bad / badly", "mauvais, mauvaise", "mal"],
          ],
        },
        examples: [
          { fr: "C'est un bon restaurant.", en: "It's a good restaurant." },
          { fr: "On a bien mangé.", en: "We ate well." },
          { fr: "Mmm, c'est bon !", en: "Mmm, it's delicious!" },
          { fr: "Ce film est vraiment bien.", en: "This film is really good." },
          { fr: "Quel mauvais temps !", en: "What awful weather!" },
          { fr: "J'ai mal compris la question.", en: "I misunderstood the question." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Elle chante bon.",
        right: "Elle chante bien.",
        why: `Describing how she sings needs the adverb "bien". "Bon" only describes nouns.`,
      },
      {
        wrong: "Je souvent vais au marché.",
        right: "Je vais souvent au marché.",
        why: `The adverb goes after the conjugated verb, not before it as in English.`,
      },
      {
        wrong: "heureuxment",
        right: "heureusement",
        why: `"-Ment" is added to the feminine form: "heureuse" + "-ment".`,
      },
      {
        wrong: "évidentment",
        right: "évidemment",
        why: `Adjectives in "-ent" become "-emment", and "-ant" becomes "-amment".`,
      },
      {
        wrong: "J'ai dormi bien.",
        right: "J'ai bien dormi.",
        why: `Short adverbs go between the auxiliary and the participle in the passé composé.`,
      },
    ],
    faqs: [
      {
        q: `Why "c'est bon" and "c'est bien" if both mean it's good?`,
        a: `"C'est bon" is mainly about taste and sensations, or means OK, that's settled. "C'est bien" is a judgement of quality or morality: good, well done. "C'est bon" said about a film sounds odd; "c'est bien" said about food sounds like a comment on the menu rather than the taste.`,
      },
      {
        q: `Is "vite" an adjective?`,
        a: `No, "vite" is an adverb ("il court vite"). The adjective is "rapide" ("un train rapide"), whose adverb is "rapidement".`,
      },
      {
        q: "How do I say better and best?",
        a: `"Mieux" (better, adverb) and "meilleur" (better, adjective) follow the same split as "bien" and "bon". The comparatives guide covers them in detail.`,
      },
    ],
    related: ["french-comparatives-superlatives", "passe-compose-avoir", "french-adjective-agreement"],
    lessons: ["a2-ment-adverbs-1", "a2-ment-adverbs-2", "a2-contrast-bon-bien", "a2-build-up-adjective-adverb"],
  },
  {
    slug: "french-imperative",
    title: "The Imperative: Giving Orders and Instructions",
    description:
      "How to form the French imperative (tu, nous, vous), why parle and va lose their -s, the irregular forms sois, aie, sache and veuillez, negative commands, and how commands are used politely.",
    level: "A2",
    intro: [
      `The imperative is the form for commands, instructions, advice and invitations: "viens !" (come!), "allons-y" (let's go), "tournez à gauche" (turn left). It has only three forms, "tu", "nous" and "vous", and no subject pronoun, exactly like English come here.`,
      `It is mostly built from the present tense, so you already know it. The things to learn are a spelling rule (the "-s" that disappears in "parle"), four irregular verbs, and how to use it without sounding abrupt. Where object pronouns go in commands ("dis-le", "ne le dis pas") is covered in the B1 guide to the imperative with pronouns.`,
    ],
    sections: [
      {
        heading: "Forms: the present without the subject",
        body: [
          `Take the "tu", "nous" and "vous" forms of the present and drop the pronoun: "tu finis" → "finis !", "nous partons" → "partons !", "vous prenez" → "prenez !". The "nous" form means let's: "partons" (let's leave), though in speech "on y va" and "allez, on part" are more common.`,
          `For "-er" verbs, the "tu" form drops its "-s": "tu parles" → "parle !", "tu manges" → "mange !". The same goes for "aller" ("va !") and for verbs conjugated like "-er" verbs, such as "ouvrir" ("ouvre !") and "offrir". The "-s" comes back before "y" and "en" for sound: "vas-y", "manges-en".`,
        ],
        table: {
          headers: ["Verb", "tu", "nous", "vous"],
          rows: [
            ["parler", "parle", "parlons", "parlez"],
            ["aller", "va", "allons", "allez"],
            ["finir", "finis", "finissons", "finissez"],
            ["prendre", "prends", "prenons", "prenez"],
            ["faire", "fais", "faisons", "faites"],
            ["dire", "dis", "disons", "dites"],
          ],
        },
        examples: [
          { fr: "Regarde ça !", en: "Look at that!" },
          { fr: "Va au lit !", en: "Go to bed!" },
          { fr: "Prenez la deuxième rue à droite.", en: "Take the second street on the right." },
          { fr: "Finis ton assiette.", en: "Finish your plate." },
          { fr: "Faites attention, le sol est glissant.", en: "Be careful, the floor is slippery." },
          { fr: "Partons tôt demain.", en: "Let's leave early tomorrow." },
        ],
      },
      {
        heading: "Irregular imperatives",
        body: [
          `Four verbs have special imperative forms, based on the subjunctive: "être" ("sois, soyons, soyez"), "avoir" ("aie, ayons, ayez"), "savoir" ("sache, sachons, sachez") and "vouloir" ("veuillez"). "Sois sage !" (be good!) and "n'aie pas peur" (don't be afraid) are everyday phrases.`,
          `"Veuillez" + infinitive is a formal written please, common in emails, notices and announcements: "veuillez patienter" (please wait), "veuillez trouver ci-joint..." (please find attached). In speech it sounds very formal.`,
        ],
        table: {
          headers: ["Verb", "tu", "nous", "vous"],
          rows: [
            ["être", "sois", "soyons", "soyez"],
            ["avoir", "aie", "ayons", "ayez"],
            ["savoir", "sache", "sachons", "sachez"],
            ["vouloir", "(veuille)", "(veuillons)", "veuillez"],
          ],
        },
        examples: [
          { fr: "Sois prudent sur la route.", en: "Be careful on the road." },
          { fr: "Soyez les bienvenus !", en: "Welcome!" },
          { fr: "N'aie pas peur, il est gentil.", en: "Don't be scared, he's friendly." },
          { fr: "Sachez que le magasin ferme à 19 heures.", en: "Please note that the shop closes at 7 p.m." },
          { fr: "Veuillez fermer la porte.", en: "Please close the door." },
        ],
      },
      {
        heading: "Negative commands",
        body: [
          `Put "ne...pas" around the verb as usual: "ne touche pas !", "ne partez pas". The "-s" rule doesn't change: "ne mange pas ça".`,
          `In written instructions, signs and recipes, French often uses the infinitive instead of the imperative: "ne pas fumer", "ne pas se pencher au-dehors", "mélanger la farine et le sucre". This sounds neutral and impersonal.`,
        ],
        examples: [
          { fr: "Ne touche pas, c'est chaud !", en: "Don't touch, it's hot!" },
          { fr: "Ne soyez pas en retard.", en: "Don't be late." },
          { fr: "N'oublie pas ton parapluie.", en: "Don't forget your umbrella." },
          { fr: "Ne parlons pas de ça.", en: "Let's not talk about that." },
          { fr: "Ne pas déranger.", en: "Do not disturb. (sign)" },
        ],
      },
      {
        heading: "Uses, register and set phrases",
        body: [
          `The imperative is used for instructions and directions ("tournez à gauche"), advice ("essaie ce restaurant"), invitations ("venez dîner samedi") and warnings ("attention, ralentis !"). It isn't rude in itself, but for a request to a stranger, add "s'il vous plaît" or turn it into a question: "vous pouvez fermer la porte ?" sounds softer than "fermez la porte".`,
          `Several imperatives work as everyday interjections: "allez !" (come on!), "tiens !" / "tenez !" (here you are, or well well!), "voyons" (let's see), "dis donc" (hey, I say). You will also hear a few commands with pronominal verbs as fixed phrases, such as "assieds-toi", "dépêche-toi" and "ne t'inquiète pas". Where pronouns go in commands is covered in the B1 guide to the imperative with pronouns.`,
        ],
        examples: [
          { fr: "Venez dîner chez nous samedi !", en: "Come and have dinner with us on Saturday!" },
          { fr: "Essaie le gâteau au chocolat, il est délicieux.", en: "Try the chocolate cake, it's delicious." },
          { fr: "Tiens, voilà ton café.", en: "Here you go, here's your coffee." },
          { fr: "Allez, courage !", en: "Come on, you can do it!" },
          { fr: "Dépêche-toi, on va rater le train !", en: "Hurry up, we're going to miss the train!" },
          { fr: "Ne t'inquiète pas, tout va bien.", en: "Don't worry, everything's fine." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Parles plus fort !",
        right: "Parle plus fort !",
        why: `The "tu" imperative of "-er" verbs drops the "-s" of the present.`,
      },
      {
        wrong: "Disez-moi.",
        right: "Dites-moi.",
        why: `"Dire" and "faire" keep their irregular vous forms: "dites", "faites".`,
      },
      {
        wrong: "Es calme !",
        right: "Sois calme !",
        why: `"Être" has a special imperative: "sois", "soyons", "soyez".`,
      },
      {
        wrong: "N'ayez pas peur pas.",
        right: "N'ayez pas peur.",
        why: `Negative commands use "ne...pas" once, around the verb, exactly as in the present.`,
      },
      {
        wrong: "Vas au lit !",
        right: "Va au lit !",
        why: `"Aller" drops its "-s" in the tu imperative too. The "-s" only returns before "y": "vas-y".`,
      },
    ],
    faqs: [
      {
        q: "Is the imperative rude?",
        a: `Not in itself. Instructions, directions and advice use it all the time ("tournez à droite", "goûte ça !"). Add "s'il te plaît" / "s'il vous plaît" for requests, or turn it into a question ("tu peux fermer la fenêtre ?") to soften it further.`,
      },
      {
        q: `What does "allez" mean when it's not about going?`,
        a: `"Allez !" is an all-purpose interjection: come on!, go on!, right then! ("allez, on y va"). You'll even hear "allez" said to one person you call "tu". "Allons" is an older, more formal version.`,
      },
      {
        q: "How do I give instructions politely in writing?",
        a: `Use "veuillez" + infinitive in formal messages ("veuillez nous contacter"), or the infinitive alone in instructions and forms ("remplir en majuscules").`,
      },
    ],
    related: ["french-imperative-with-pronouns", "double-object-pronouns", "french-pronominal-verbs"],
    lessons: ["a2-imperative-1", "a2-imperative-2", "a2-giving-directions"],
  },
  {
    slug: "tricky-verb-pairs",
    title: "Partir, Sortir, Quitter, Laisser: Tricky Verb Pairs",
    description:
      "French verb pairs English speakers confuse: partir, sortir, quitter and laisser (to leave), visiter vs rendre visite à, apporter, amener, emporter and emmener, très vs beaucoup, and jouer à vs jouer de.",
    level: "A2",
    intro: [
      `Some of the most common English verbs split into two, three or four French ones. To leave is "partir", "sortir", "quitter" or "laisser", depending on what you leave and how. To bring and to take are "apporter", "amener", "emporter" and "emmener", depending on whether you carry a thing or accompany a person. Translate word for word and you will be understood, but you will sound obviously foreign.`,
      `The good news is that each split follows a clear logic, usually about whether the verb has a direct object, and whether that object is a place, a thing or a person. This guide goes through the pairs in turn.`,
    ],
    sections: [
      {
        heading: "To leave: partir, sortir, quitter, laisser",
        body: [
          `"Partir" means to leave, set off, go away. It has no direct object; add "de" for the place you leave ("partir de Paris") and "pour" or "à" for the destination. "Sortir" means to go out, exit, from an enclosed space or for an evening out: "sortir du bureau", "on sort ce soir ?". Both take "être" in the passé composé.`,
          `"Quitter" needs a direct object, a place or a person you leave: "quitter la maison", "il a quitté sa femme". It also means to hang up or log off ("ne quittez pas", hold the line). "Laisser" means to leave something or someone behind somewhere, or to let: "j'ai laissé mon sac au café", "laisse-moi tranquille" (leave me alone).`,
        ],
        table: {
          headers: ["Verb", "Use", "Example"],
          rows: [
            ["partir", "leave, set off (no object)", "Le train part à 9 h."],
            ["sortir", "go out, exit", "Elle est sortie du magasin."],
            ["quitter", "leave a place or person (object)", "J'ai quitté Londres en 2020."],
            ["laisser", "leave something behind; let", "J'ai laissé mes clés chez toi."],
          ],
        },
        examples: [
          { fr: "Nous partons en vacances demain.", en: "We're going on holiday tomorrow." },
          { fr: "Je sors avec des amis ce soir.", en: "I'm going out with friends tonight." },
          { fr: "Il quitte le travail à six heures.", en: "He leaves work at six." },
          { fr: "Tu peux laisser la porte ouverte ?", en: "Can you leave the door open?" },
          { fr: "Elle est partie sans dire au revoir.", en: "She left without saying goodbye." },
        ],
      },
      {
        heading: "Visiter or rendre visite à?",
        body: [
          `"Visiter" is for places: a city, a museum, a flat you might rent. For people, use "rendre visite à" ("je rends visite à ma tante") or, more casually, "aller voir" ("je vais voir ma tante"). "Visiter quelqu'un" is a classic anglicism and sounds wrong.`,
        ],
        examples: [
          { fr: "On a visité le château de Versailles.", en: "We visited the Palace of Versailles." },
          { fr: "Je rends visite à mes grands-parents le dimanche.", en: "I visit my grandparents on Sundays." },
          { fr: "Je vais voir un ami à l'hôpital.", en: "I'm going to visit a friend in hospital." },
          { fr: "Elle nous a rendu visite l'été dernier.", en: "She visited us last summer." },
        ],
      },
      {
        heading: "Bring and take: apporter, amener, emporter, emmener",
        body: [
          `The verbs with "-porter" are for things you carry; the verbs with "-mener" are for people and animals (anything that walks). The prefix "a-" means bringing towards here or to a place; "em-" means taking away with you.`,
          `So: "apporter" (bring a thing), "amener" (bring a person), "emporter" (take a thing away), "emmener" (take a person somewhere). "À emporter" on a menu means takeaway. In everyday speech "amener" is often used for things too, but careful speakers keep the distinction.`,
        ],
        table: {
          headers: ["", "Thing (carried)", "Person (walks)"],
          rows: [
            ["bring (to here, to a place)", "apporter", "amener"],
            ["take (away with you)", "emporter", "emmener"],
          ],
        },
        examples: [
          { fr: "J'apporte le dessert ce soir.", en: "I'll bring the dessert tonight." },
          { fr: "Tu peux amener ta copine.", en: "You can bring your girlfriend." },
          { fr: "Sur place ou à emporter ?", en: "Eat in or takeaway?" },
          { fr: "J'emmène les enfants à l'école.", en: "I'm taking the children to school." },
          { fr: "N'oublie pas d'emporter un parapluie.", en: "Don't forget to take an umbrella." },
        ],
      },
      {
        heading: "Très or beaucoup? Demander or poser?",
        body: [
          `"Très" (very) goes with adjectives and adverbs: "très grand", "très vite". "Beaucoup" (a lot, much) goes with verbs and, with "de", nouns: "j'aime beaucoup", "beaucoup de gens". Never "très beaucoup": "very much" is just "beaucoup". The same split explains "j'ai très faim" (faim behaves like an adjective here) but "je t'aime beaucoup".`,
          `To ask a question is "poser une question", not "demander une question". "Demander" is to ask for something or ask someone: "demander l'addition", "demander à Paul". And to ask someone to do something is "demander à quelqu'un de faire".`,
        ],
        examples: [
          { fr: "Ce livre est très intéressant.", en: "This book is very interesting." },
          { fr: "Merci beaucoup !", en: "Thank you very much!" },
          { fr: "Il travaille beaucoup.", en: "He works a lot." },
          { fr: "Je peux vous poser une question ?", en: "Can I ask you a question?" },
          { fr: "On demande l'addition ?", en: "Shall we ask for the bill?" },
          { fr: "Il m'a demandé de l'aider.", en: "He asked me to help him." },
        ],
      },
      {
        heading: "Jouer à or jouer de?",
        body: [
          `"Jouer à" + a game or sport: "jouer au foot", "jouer aux cartes", "jouer aux échecs". "Jouer de" + a musical instrument: "jouer du piano", "jouer de la guitare". The usual contractions apply ("au", "aux", "du", "des"). For sports, "faire de" is also common, especially for individual sports: "faire du tennis", "faire de la natation".`,
        ],
        examples: [
          { fr: "Il joue au tennis le samedi.", en: "He plays tennis on Saturdays." },
          { fr: "Tu joues d'un instrument ?", en: "Do you play an instrument?" },
          { fr: "Ma fille joue du violon.", en: "My daughter plays the violin." },
          { fr: "On joue aux cartes ?", en: "Shall we play cards?" },
          { fr: "Je fais du vélo tous les week-ends.", en: "I go cycling every weekend." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je pars la maison à huit heures.",
        right: "Je quitte la maison à huit heures. / Je pars de la maison à huit heures.",
        why: `"Partir" has no direct object. Use "quitter" + place, or "partir de" + place.`,
      },
      {
        wrong: "J'ai quitté mon téléphone dans le taxi.",
        right: "J'ai laissé mon téléphone dans le taxi.",
        why: `Leaving something behind is "laisser". "Quitter" is for leaving a place or person.`,
      },
      {
        wrong: "Je visite ma mère ce week-end.",
        right: "Je rends visite à ma mère ce week-end.",
        why: `"Visiter" is for places. For people, use "rendre visite à" or "aller voir".`,
      },
      {
        wrong: "J'aime très beaucoup ce film.",
        right: "J'aime beaucoup ce film.",
        why: `"Beaucoup" already means very much; "très" never goes with it.`,
      },
      {
        wrong: "Je peux demander une question ?",
        right: "Je peux poser une question ?",
        why: `A question is "posée". "Demander" is for asking for something or asking someone.`,
      },
    ],
    faqs: [
      {
        q: `Is "amener" for things really wrong?`,
        a: `In casual speech many French people say "amène ton ordinateur", and nobody will blink. In writing and careful speech, "apporte ton ordinateur" is the standard. Learning the distinction helps you understand the nuance, even if you hear it bent.`,
      },
      {
        q: `What's the difference between "sortir" and "partir" for an evening?`,
        a: `"Sortir" is going out, to a restaurant, a bar, a show, and coming back later. "Partir" is setting off or leaving: "je pars" (I'm off), "on part à 20 heures" (we're leaving at 8).`,
      },
      {
        q: `How do I say I left the room?`,
        a: `"Je suis sorti de la pièce" (I went out of the room) or "j'ai quitté la pièce" (more formal, with a direct object). Both are correct.`,
      },
    ],
    related: ["passe-compose-etre", "french-prepositions-cities-countries", "adverbs-and-bon-vs-bien"],
    lessons: ["a2-partir-sortir-quitter", "a2-visiter-rendre-visite", "a2-apporter-amener", "a2-tres-beaucoup-demander", "a2-jouer-a-jouer-de"],
  },
  {
    slug: "double-object-pronouns",
    title: "Two Pronouns Together: Me Le, Le Lui, Il Y En A",
    description:
      "The order of French object pronouns when two appear together (je te le donne, je le lui dis, il y en a), in the negative, the passé composé, before an infinitive and in the imperative.",
    level: "A2",
    intro: [
      `Once you can replace a direct object, an indirect object, a place and a quantity with pronouns, you'll want to replace two at once: "je donne le livre à Marie" → "je le lui donne". French allows two pronouns before the verb, but in a fixed order that doesn't follow English at all (I give it to her).`,
      `The good news is that the order is the same in every tense and structure, and there are only a few combinations in common use. Learn the chart and the four or five combinations you hear daily ("je te le dis", "je le lui dis", "il y en a", "je vous en prie"), and the rest follows.`,
    ],
    sections: [
      {
        heading: "The order chart",
        body: [
          `Two pronouns before the verb follow this order: first "me", "te", "se", "nous", "vous"; then "le", "la", "les"; then "lui", "leur"; then "y"; then "en". You never use more than one from the same column, and in practice you rarely use more than two pronouns in total.`,
          `The famous flip: with "me", "te", "nous", "vous", the indirect pronoun comes first ("il me le donne": he gives it to me). With "lui" and "leur", the direct pronoun comes first ("il le lui donne": he gives it to him). The chart handles this automatically, because "me / te / nous / vous" sit to the left of "le / la / les" and "lui / leur" to the right.`,
        ],
        table: {
          headers: ["1", "2", "3", "4", "5"],
          rows: [
            ["me, te, se, nous, vous", "le, la, les", "lui, leur", "y", "en"],
          ],
        },
        examples: [
          { fr: "Il me le donne.", en: "He gives it to me." },
          { fr: "Je te la prête.", en: "I'll lend it to you." },
          { fr: "Je le lui donne.", en: "I give it to him / her." },
          { fr: "Elle les leur montre.", en: "She shows them to them." },
          { fr: "Je vous en prie.", en: "You're welcome. / Please, go ahead." },
        ],
      },
      {
        heading: "The common combinations",
        body: [
          `Some combinations are so frequent they are worth learning as sounds: "je te le dis" (I'm telling you), "je te l'ai dit" (I told you), "je le lui ai dit" (I told him / her), "il y en a" (there is some), "je m'en occupe" (I'll handle it), "je lui en ai parlé" (I talked to him / her about it).`,
          `"Lui" and "leur" can combine with "en" ("je lui en donne", "je leur en ai parlé"), but not with "y" in normal speech. "Me", "te" and "se" become "m'", "t'", "s'" before "y" and "en": "je m'en vais" (I'm leaving), "il s'y intéresse".`,
        ],
        examples: [
          { fr: "Je te le promets.", en: "I promise you." },
          { fr: "Tu as dit la nouvelle à ta mère ? Oui, je la lui ai dite.", en: "Did you tell your mum the news? Yes, I told her." },
          { fr: "Il y en a dans le frigo.", en: "There's some in the fridge." },
          { fr: "Je lui en ai parlé hier.", en: "I talked to him about it yesterday." },
          { fr: "Je m'en vais.", en: "I'm off." },
        ],
      },
      {
        heading: "Negation, passé composé and infinitives",
        body: [
          `The pair of pronouns stays together as a block and goes where a single pronoun would go. In the negative, "ne" goes in front of the block: "je ne le lui donne pas". In the passé composé, the block goes before the auxiliary: "je le lui ai donné", "je ne le lui ai pas donné".`,
          `With an infinitive, the block goes before the infinitive: "je vais le lui donner", "tu peux me l'envoyer ?". The participle still agrees with a preceding direct object: "la photo ? Je la lui ai envoyée".`,
        ],
        table: {
          headers: ["Structure", "Example"],
          rows: [
            ["present", "Je le lui donne."],
            ["negative", "Je ne le lui donne pas."],
            ["passé composé", "Je le lui ai donné."],
            ["negative passé composé", "Je ne le lui ai pas donné."],
            ["infinitive", "Je vais le lui donner."],
          ],
        },
        examples: [
          { fr: "Je ne te le dirai pas.", en: "I won't tell you." },
          { fr: "Il ne nous en a pas parlé.", en: "He didn't tell us about it." },
          { fr: "Tu peux me le passer ?", en: "Can you pass it to me?" },
          { fr: "Les clés ? Je les leur ai rendues.", en: "The keys? I gave them back to them." },
          { fr: "Je vais vous en apporter.", en: "I'll bring you some." },
        ],
      },
      {
        heading: "In the affirmative imperative",
        body: [
          `In positive commands, the pronouns follow the verb, joined by hyphens, and the direct object always comes first: "donne-le-moi", "dites-le-lui", "envoie-la-nous". "Me" and "te" become "moi" and "toi" at the end, but "m'" and "t'" before "en": "donne-m'en".`,
          `In negative commands, the normal order returns and the pronouns go before the verb: "ne me le donne pas", "ne le lui dis pas".`,
        ],
        examples: [
          { fr: "Donne-le-moi !", en: "Give it to me!" },
          { fr: "Dites-le-lui demain.", en: "Tell him / her tomorrow." },
          { fr: "Ne me le dis pas !", en: "Don't tell me!" },
          { fr: "Ne le lui montre pas.", en: "Don't show it to him / her." },
          { fr: "Achète-nous-en.", en: "Buy us some." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je lui le donne.",
        right: "Je le lui donne.",
        why: `With "lui" or "leur", the direct pronoun comes first.`,
      },
      {
        wrong: "Il le me donne.",
        right: "Il me le donne.",
        why: `With "me", "te", "nous", "vous", the indirect pronoun comes first.`,
      },
      {
        wrong: "Je ne le lui ai donné pas.",
        right: "Je ne le lui ai pas donné.",
        why: `In the passé composé, "pas" goes right after the auxiliary.`,
      },
      {
        wrong: "Donne-moi-le !",
        right: "Donne-le-moi !",
        why: `In the affirmative imperative, the direct object pronoun comes first.`,
      },
      {
        wrong: "Il en y a.",
        right: "Il y en a.",
        why: `"Y" always comes before "en".`,
      },
    ],
    faqs: [
      {
        q: "Do French people really say all these combinations?",
        a: `The common ones, constantly. In casual speech, "le lui" and "la lui" are often reduced to just "lui" ("je lui ai donné"), and three-pronoun combinations are avoided. In writing, the full forms are expected.`,
      },
      {
        q: "Is there a trick to remember the order?",
        a: `Many learners remember the chart as "me te se nous vous, le la les, lui leur, y, en", said as a rhythm. Another trick: "lui" and "leur" always come after "le", "la", "les", and "y" and "en" always come last, in that order.`,
      },
      {
        q: `Why "donne-m'en" and not "donne-moi-en"?`,
        a: `Before "en", "moi" and "toi" go back to "m'" and "t'" for sound. In casual speech you will hear "donne-moi-z-en", but it is considered incorrect.`,
      },
    ],
    related: ["direct-object-pronouns", "indirect-object-pronouns", "y-and-en", "french-imperative"],
    lessons: ["a2-double-pronouns-me-le", "a2-double-pronouns-le-lui", "a2-pattern-le-lui", "a2-double-pronouns-y-en", "a2-double-pronouns-placement"],
  },
];
