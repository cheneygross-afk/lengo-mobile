// Synced from cheneygross-afk/lengo:src/lib/grammar/pt-guides-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { PtGrammarGuide } from "./pt-types";

// Brazilian Portuguese grammar guides, A1 (see the notes at the top of ./pt-types.ts).
export const PT_A1_GUIDES: PtGrammarGuide[] = [
  {
    slug: "ser-present-tense",
    title: "Ser: To Be for Who and What You Are",
    description:
      "The verb ser in the present (sou, é, somos, são), how Brazilians use it for names, origin, nationality, jobs and description, and why there is no article before a job.",
    level: "A1",
    intro: [
      `Portuguese has two verbs for to be, "ser" and "estar", and you need both from your first conversation. "Ser" is the one for what something is: who you are, where you are from, what you do, what a thing is like by nature. "Eu sou a Ana. Sou de Recife. Sou professora." (I'm Ana. I'm from Recife. I'm a teacher.)`,
      `The good news is that Brazilian Portuguese has only four present forms of "ser" in everyday use. "Você" (you) takes the same form as "ele" and "ela", and "vocês" (you, plural) the same form as "eles" and "elas", so the whole verb fits in a small table.`,
    ],
    sections: [
      {
        heading: `The forms of "ser"`,
        body: [
          `"Ser" is irregular, as to be is in English, so the forms simply have to be learned. Notice that "você" goes with "é", not with a form of its own: "você é" (you are), exactly like "ele é" (he is). The same goes for "a gente" (we, in speech), which takes the singular: "a gente é de São Paulo".`,
          `Because the "eu" and "nós" forms can only mean I and we, Brazilians often drop the pronoun: "Sou de Curitiba", "Somos brasileiros". With "é" and "são" the pronoun is usually kept, since they could mean several people.`,
        ],
        table: {
          headers: ["Subject", "Ser", "Example"],
          rows: [
            ["eu", "sou", "Eu sou o Lucas."],
            ["você, ele, ela, a gente", "é", "Você é de Salvador?"],
            ["nós", "somos", "Nós somos amigos."],
            ["vocês, eles, elas", "são", "Elas são médicas."],
          ],
        },
        examples: [
          { pt: "Eu sou a Mariana. E você?", en: "I'm Mariana. And you?" },
          { pt: "Ele é o meu irmão.", en: "He's my brother." },
          { pt: "Somos de Belo Horizonte.", en: "We're from Belo Horizonte." },
          { pt: "Vocês são estudantes?", en: "Are you students?" },
          { pt: "Isso é muito bom!", en: "That's really good!" },
        ],
      },
      {
        heading: `Origin and nationality: "ser de" and agreement`,
        body: [
          `To say where someone is from, use "ser de" plus the place: "Sou de Manaus", "Ela é do Rio", "Eles são dos Estados Unidos". Some places take an article and contract with "de" ("do Brasil", "da Bahia"), most cities do not ("de São Paulo"); the guide to contractions covers this.`,
          `Nationalities are adjectives, so they agree with the person: masculine or feminine, singular or plural. They are written with a small letter, unlike in English: "ela é brasileira", "eles são ingleses". Nationalities in "-ês" add "-a" for the feminine and lose the accent: "inglês, inglesa", "português, portuguesa". Those in "-e" do not change for gender: "canadense", "estadunidense".`,
        ],
        table: {
          headers: ["Country", "Masculine", "Feminine", "Plural"],
          rows: [
            ["o Brasil", "brasileiro", "brasileira", "brasileiros, brasileiras"],
            ["os Estados Unidos", "americano", "americana", "americanos, americanas"],
            ["a Inglaterra", "inglês", "inglesa", "ingleses, inglesas"],
            ["o Japão", "japonês", "japonesa", "japoneses, japonesas"],
            ["o Canadá", "canadense", "canadense", "canadenses"],
            ["a Argentina", "argentino", "argentina", "argentinos, argentinas"],
          ],
        },
        examples: [
          { pt: "Eu sou americano, mas moro no Brasil.", en: "I'm American, but I live in Brazil." },
          { pt: "A Beatriz é brasileira, de Porto Alegre.", en: "Beatriz is Brazilian, from Porto Alegre." },
          { pt: "Os meus vizinhos são japoneses.", en: "My neighbours are Japanese." },
          { pt: "De onde você é?", en: "Where are you from?" },
        ],
      },
      {
        heading: `Jobs without an article`,
        body: [
          `English says I'm a teacher. Portuguese leaves out the article: "Sou professor" (a man) or "Sou professora" (a woman). Adding "um" or "uma" here is one of the most common beginner mistakes. Most job words have a masculine and a feminine form ("médico, médica", "advogado, advogada"); words in "-ista" and "-ente" stay the same ("o dentista, a dentista", "o estudante, a estudante").`,
          `The article comes back when you describe the person with an adjective, because then you are saying what kind of professional they are: "Ela é uma ótima médica" (she's a great doctor). To ask what someone does, say "O que você faz?" or "Qual é a sua profissão?"`,
        ],
        examples: [
          { pt: "O João é engenheiro.", en: "João is an engineer." },
          { pt: "Minha mãe é enfermeira.", en: "My mother is a nurse." },
          { pt: "Ela é uma excelente cozinheira.", en: "She's an excellent cook." },
          { pt: "O que você faz? Sou motorista.", en: "What do you do? I'm a driver." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu sou um médico.",
        right: "Eu sou médico.",
        why: `No article before a job after "ser". Use "um" or "uma" only with an adjective: "um bom médico".`,
      },
      {
        wrong: "Você são de onde?",
        right: "Você é de onde?",
        why: `"Você" is singular and takes the ele/ela form, "é". "São" is for "vocês".`,
      },
      {
        wrong: "Ela é brasileiro.",
        right: "Ela é brasileira.",
        why: `Nationalities agree with the person. A woman is "brasileira".`,
      },
      {
        wrong: "Ele é Inglês.",
        right: "Ele é inglês.",
        why: `Nationalities and languages are written with a small letter in Portuguese.`,
      },
      {
        wrong: "Eu é de Recife.",
        right: "Eu sou de Recife.",
        why: `Each person has its own form. With "eu" the form is always "sou".`,
      },
    ],
    faqs: [
      {
        q: `What is the difference between "é" and "e"?`,
        a: `"É" with an accent is the verb (is, are with "você"); "e" without one means and. They also sound different: "é" has an open e, as in bet, and "e" on its own sounds like the ee in see. "Ela é alta e bonita" (she is tall and pretty).`,
      },
      {
        q: `Do I have to say "eu" every time?`,
        a: `No. "Sou" and "somos" already show the person, so Brazilians often leave the pronoun out: "Sou de Fortaleza". Keeping it is never wrong, and in speech many people do keep it. With "é" and "são" keep the subject unless it is obvious, since these forms cover several people.`,
      },
      {
        q: `Is it different in Portugal?`,
        a: `The verb is the same, but in Portugal friends call each other "tu", which has its own form: "tu és" (you are). Brazilian Portuguese uses "você é" in most of the country, and this course teaches "você".`,
      },
    ],
    related: ["estar-present-tense", "ser-vs-estar", "subject-pronouns-voce", "adjective-agreement"],
    lessons: [
      "a1-greetings-ser-1",
      "a1-greetings-ser-2",
      "a1-nationalities",
      "a1-jobs-ser",
      "a1-contrast-sou-e-sao",
      "a1-error-hunt-ser",
      "a1-transform-person-number",
    ],
  },
  {
    slug: "estar-present-tense",
    title: "Estar: To Be for How and Where",
    description:
      "The verb estar in the present (estou, está, estamos, estão) for how you feel, where people and things are, and the weather, plus estar com fome and the spoken tô and tá.",
    level: "A1",
    intro: [
      `"Estar" is the second verb for to be. It describes states, how someone or something is at the moment, and where people and things are: "Estou cansado" (I'm tired), "A chave está na mesa" (the key is on the table). You use it in the most common greeting of all: "Tudo bem? Estou bem, e você?"`,
      `Like "ser", it has four everyday forms, and in casual speech Brazilians shorten it constantly: "tô" for "estou", "tá" for "está". You will hear "Tá bom!" (OK!) many times a day.`,
    ],
    sections: [
      {
        heading: `The forms of "estar"`,
        body: [
          `The stress falls on the ending in every form: es-TOU, es-TÁ, es-TA-mos, es-TÃO. Note the accent marks on "está" and "estão"; without the accent, "esta" is a different word (this).`,
        ],
        table: {
          headers: ["Subject", "Estar", "Spoken short form"],
          rows: [
            ["eu", "estou", "tô"],
            ["você, ele, ela, a gente", "está", "tá"],
            ["nós", "estamos", "tamos"],
            ["vocês, eles, elas", "estão", "tão"],
          ],
        },
        examples: [
          { pt: "Como você está?", en: "How are you?" },
          { pt: "Estou ótimo, obrigado.", en: "I'm great, thanks. (a man speaking)" },
          { pt: "A Ana está doente hoje.", en: "Ana is sick today." },
          { pt: "Nós estamos atrasados!", en: "We're late!" },
          { pt: "Tá bom, até amanhã.", en: "OK, see you tomorrow." },
        ],
      },
      {
        heading: `How you are: feelings and states`,
        body: [
          `Use "estar" with adjectives that describe a condition that can change: tired, happy, sick, busy, ready, angry, full, open, closed. The adjective agrees with the person or thing: "ele está cansado", "ela está cansada", "as lojas estão fechadas".`,
          `Many physical feelings use "estar com" plus a noun, where English uses an adjective: "Estou com fome" (I'm hungry, literally I'm with hunger), "estou com sede" (thirsty), "estou com frio" (cold), "estou com sono" (sleepy), "estou com pressa" (in a hurry). "Tenho fome" also exists, but "estou com fome" is what you hear most in Brazil.`,
        ],
        examples: [
          { pt: "Você está ocupado agora?", en: "Are you busy now?" },
          { pt: "O mercado já está aberto.", en: "The market is already open." },
          { pt: "Estou com muita fome.", en: "I'm really hungry." },
          { pt: "As crianças estão com sono.", en: "The children are sleepy." },
        ],
      },
      {
        heading: `Where you are, and the weather`,
        body: [
          `"Estar" tells you where a person or a movable thing is: "Estou em casa" (I'm at home), "O Rafael está no trabalho", "Meu celular está na bolsa". The little word after "estar" is usually "em" or one of its contractions: "no", "na" (in the, at the).`,
          `The weather often uses "estar" too, with no subject at all: "Está calor" (it's hot), "Está frio", "Está chovendo" (it's raining). Portuguese has no word for this it; the verb stands alone.`,
        ],
        examples: [
          { pt: "Onde você está?", en: "Where are you?" },
          { pt: "Estou na padaria, perto de casa.", en: "I'm at the bakery, near home." },
          { pt: "As chaves estão em cima da mesa.", en: "The keys are on the table." },
          { pt: "Hoje está muito calor no Rio.", en: "It's really hot in Rio today." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu sou cansado.",
        right: "Eu estou cansado.",
        why: `Tiredness is a passing state, so it takes "estar".`,
      },
      {
        wrong: "Eles está em casa.",
        right: "Eles estão em casa.",
        why: `"Eles", "elas" and "vocês" take the plural form, "estão".`,
      },
      {
        wrong: "Eu estou fome.",
        right: "Eu estou com fome.",
        why: `Hunger, thirst, cold and sleepiness are nouns in Portuguese, so you need "com": "estou com fome".`,
      },
      {
        wrong: "Ela esta no escritório.",
        right: "Ela está no escritório.",
        why: `The verb needs its accent: "está". "Esta" without it means this.`,
      },
    ],
    faqs: [
      {
        q: `Can I write "tô" and "tá"?`,
        a: `In text messages and chats to friends, yes, Brazilians write them all the time. In an email, a form or anything formal, write the full forms "estou" and "está".`,
      },
      {
        q: `Why does "tudo bem?" get the answer "tudo bem"?`,
        a: `"Tudo bem?" means is everything good?, and the usual reply repeats it as a statement: "Tudo bem, e você?" You can also answer "Estou bem" or "Tudo ótimo". It is a greeting more than a real question.`,
      },
      {
        q: `Is "estar" used the same way in Portugal?`,
        a: `The forms and uses are the same, but in Portugal the short spoken forms are rarer, friends use "tu estás" (you are), and to say what someone is doing right now Portugal says "está a trabalhar" where Brazil says "está trabalhando".`,
      },
    ],
    related: ["ser-vs-estar", "ser-present-tense", "present-progressive-estar-gerundio", "ter-and-tem-ha"],
    lessons: ["a1-estar-1", "a1-estar-2", "a1-contrast-ser-estar", "a1-ter-2"],
  },
  {
    slug: "ser-vs-estar",
    title: "Ser vs Estar: Choosing the Right To Be",
    description:
      "A first map of ser and estar: identity, origin and lasting traits with ser; states and location with estar; events with ser; and the adjectives that change meaning with each verb.",
    level: "A1",
    intro: [
      `English has one verb, to be. Portuguese splits it in two, and the choice changes the meaning: "Ele é chato" (he's a boring, annoying person) but "Ele está chato hoje" (he's being annoying today). Choosing well is one of the clearest signs that you think in Portuguese.`,
      `The usual shortcut, permanent versus temporary, works for most beginner sentences, but it has holes. A better rule of thumb: "ser" says what something is, its identity and characteristics; "estar" says how or where it is at a given moment.`,
    ],
    sections: [
      {
        heading: `The core uses`,
        body: [
          `Start with this table. Identity, origin, profession, nationality and lasting description take "ser"; feelings, conditions and the location of people and things take "estar". Times and dates are "ser" too: "São três horas", "Hoje é sexta".`,
        ],
        table: {
          headers: ["Ser", "Example", "Estar", "Example"],
          rows: [
            ["identity, name", "Eu sou a Júlia.", "feelings", "Eu estou feliz."],
            ["origin", "Ela é de Salvador.", "health", "Ela está doente."],
            ["job, nationality", "Ele é advogado.", "location of people", "Ele está em Salvador."],
            ["description, character", "A casa é grande.", "location of things", "A chave está na bolsa."],
            ["time, days", "São oito horas.", "conditions", "A porta está aberta."],
            ["events: where and when", "A festa é no sábado.", "weather", "Está frio hoje."],
          ],
        },
        examples: [
          { pt: "O Pedro é alto e moreno.", en: "Pedro is tall and dark-haired." },
          { pt: "O Pedro está no banheiro.", en: "Pedro is in the bathroom." },
          { pt: "Esta cidade é muito tranquila.", en: "This city is very quiet." },
          { pt: "A cidade está vazia no feriado.", en: "The city is empty on the holiday." },
        ],
      },
      {
        heading: `Same adjective, different meaning`,
        body: [
          `With many adjectives both verbs are possible, and the verb carries the meaning. "Ser" describes the person or thing in general; "estar" describes how it is now, or how it looks or seems to you. "A Ana é bonita" (Ana is pretty) is a compliment about her; "A Ana está bonita" (Ana looks pretty) is about how she looks today.`,
          `Food is a classic example: "O feijão é bom" (beans are good, in general) versus "O feijão está bom" (the beans taste good, this plate). When you taste something and like it, say "Está ótimo!"`,
        ],
        table: {
          headers: ["Adjective", "With ser", "With estar"],
          rows: [
            ["chato", "boring, annoying (as a person)", "being annoying, in a bad mood"],
            ["bonito", "good-looking", "looking good today"],
            ["bom", "good (in general)", "tasting good, well"],
            ["calmo", "a calm person", "calm right now"],
            ["pronto", "(not used)", "ready"],
          ],
        },
        examples: [
          { pt: "Meu chefe é muito calmo.", en: "My boss is a very calm person." },
          { pt: "Hoje o mar está calmo.", en: "The sea is calm today." },
          { pt: "Nossa, você está bonita!", en: "Wow, you look great!" },
          { pt: "O almoço está pronto.", en: "Lunch is ready." },
        ],
      },
      {
        heading: `Where things are: people and things versus events`,
        body: [
          `The location of people and objects uses "estar": "Onde está o meu celular?" An event, something that happens, uses "ser": "A reunião é na sala dois" (the meeting is in room two), "O show é no sábado". English uses is for both, so this one needs attention.`,
          `For buildings and places that never move, Brazilians say "Onde fica...?" or simply "Onde é...?": "Onde fica o banheiro?", "Onde é a rodoviária?" Both are natural. You will meet "ficar" properly at the next level.`,
        ],
        examples: [
          { pt: "A festa é na casa do Lucas.", en: "The party is at Lucas's house." },
          { pt: "O Lucas está na festa.", en: "Lucas is at the party." },
          { pt: "Onde fica a farmácia?", en: "Where's the pharmacy?" },
          { pt: "Com licença, onde é o banheiro?", en: "Excuse me, where's the bathroom?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ela está brasileira.",
        right: "Ela é brasileira.",
        why: `Nationality is part of who she is, so it takes "ser".`,
      },
      {
        wrong: "Eu estou de Curitiba.",
        right: "Eu sou de Curitiba.",
        why: `Origin always takes "ser de", even if you have moved away.`,
      },
      {
        wrong: "Ela é feliz hoje.",
        right: "Ela está feliz hoje.",
        why: `"Hoje" (today) shows a state at a moment, which is "estar". "Ela é feliz" means she is a happy person.`,
      },
      {
        wrong: "A festa está no sábado.",
        right: "A festa é no sábado.",
        why: `Events take "ser" for when and where they happen.`,
      },
      {
        wrong: "A sopa é fria.",
        right: "A sopa está fria.",
        why: `You mean this soup has gone cold, a condition right now, so use "estar".`,
      },
    ],
    faqs: [
      {
        q: `Is married "ser" or "estar"?`,
        a: `Both are used in Brazil. "Sou casado" is the most common way to give your marital status, as part of who you are; "Estou casado há dez anos" (I've been married for ten years) puts the focus on the current state. Either is correct.`,
      },
      {
        q: `What about things that last but can change, like being young?`,
        a: `Description of what someone is like takes "ser", even if it will change one day: "Ele é jovem", "Ela é estudante". The test is not how long it lasts but whether you are describing the person or their state at a moment.`,
      },
      {
        q: `Does European Portuguese choose differently?`,
        a: `The basic split is the same on both sides of the Atlantic. Differences are small, mostly in how often "ficar" is used for locations, which is especially common in Brazil.`,
      },
    ],
    related: ["ser-present-tense", "estar-present-tense", "adjective-agreement"],
    lessons: ["a1-estar-1", "a1-estar-2", "a1-contrast-ser-estar", "a1-error-hunt-gender-estar", "a1-spiral-articles-estar"],
  },
  {
    slug: "subject-pronouns-voce",
    title: "Subject Pronouns: Você, O Senhor and A Gente",
    description:
      "Eu, você, ele, ela, nós, a gente, vocês, eles and elas; when to say o senhor or a senhora; why you takes the he/she verb; and when Brazilians drop the pronoun.",
    level: "A1",
    intro: [
      `Brazilian Portuguese has a pronoun system that is simpler than its grammar books suggest. In everyday speech you need "eu" (I), "você" (you), "ele" and "ela" (he, she), "a gente" or "nós" (we), "vocês" (you all), "eles" and "elas" (they). That is almost all.`,
      `Two points surprise English speakers: "você" takes the same verb form as "ele" and "ela", and there is a respectful you, "o senhor" for a man and "a senhora" for a woman, that you use with older people, customers and in formal situations.`,
    ],
    sections: [
      {
        heading: `The pronouns and their verb forms`,
        body: [
          `Portuguese verbs change their ending with the subject. Because "você" and "a gente" share the ele/ela form, and "vocês" shares the eles/elas form, a regular verb has only four forms in daily use: "falo", "fala", "falamos", "falam".`,
          `"Eles" covers a group of men or a mixed group; "elas" is only for an all-female group. Even one man in a group of ten women makes it "eles".`,
        ],
        table: {
          headers: ["Pronoun", "Meaning", "Ser", "Falar"],
          rows: [
            ["eu", "I", "sou", "falo"],
            ["você", "you", "é", "fala"],
            ["o senhor, a senhora", "you (respectful)", "é", "fala"],
            ["ele, ela", "he, she", "é", "fala"],
            ["a gente", "we (everyday)", "é", "fala"],
            ["nós", "we", "somos", "falamos"],
            ["vocês", "you (plural)", "são", "falam"],
            ["eles, elas", "they", "são", "falam"],
          ],
        },
        examples: [
          { pt: "Você fala inglês?", en: "Do you speak English?" },
          { pt: "Ela é de Fortaleza e ele é de Natal.", en: "She's from Fortaleza and he's from Natal." },
          { pt: "A gente mora em Niterói.", en: "We live in Niterói." },
          { pt: "Vocês são de onde?", en: "Where are you all from?" },
          { pt: "Elas trabalham no centro.", en: "They work downtown." },
        ],
      },
      {
        heading: `Você or o senhor / a senhora?`,
        body: [
          `"Você" is the default: friends, colleagues, people your age, shop staff in a casual place. "O senhor" and "a senhora" show respect and are used with older people, with customers in a shop or hotel, with a doctor, and with anyone you would address as sir or madam in English. They take the ele/ela form of the verb: "O senhor quer um café?" (would you like a coffee, sir?).`,
          `With first names, Brazilians use the respectful titles "Dona" for a woman and "seu" (short for "senhor") for a man: "Dona Maria", "seu Antônio". These are warm and polite at the same time, typical for a neighbour, the doorman or a friend's parents.`,
        ],
        examples: [
          { pt: "A senhora precisa de ajuda?", en: "Do you need help, madam?" },
          { pt: "O senhor é de Belo Horizonte?", en: "Are you from Belo Horizonte, sir?" },
          { pt: "Bom dia, Dona Maria! Tudo bem?", en: "Good morning, Dona Maria! How are you?" },
          { pt: "Seu Antônio, o senhor tem um minuto?", en: "Mr. Antônio, do you have a minute?" },
        ],
      },
      {
        heading: `No pronoun for it, and dropping the pronoun`,
        body: [
          `Portuguese has no subject pronoun for it. For a thing already named, use "ele" or "ela" according to its gender ("O livro? Ele é ótimo."), or more often no pronoun at all: "É ótimo." For the weather, the time and general statements there is never a subject: "É tarde" (it's late), "Está chovendo" (it's raining).`,
          `Since "falo" and "falamos" can only mean I speak and we speak, "eu" and "nós" are often left out: "Moro em Recife." With the other forms Brazilians usually keep the pronoun, especially "você", to make clear who is meant.`,
        ],
        examples: [
          { pt: "É muito longe daqui.", en: "It's very far from here." },
          { pt: "Gosto muito do seu bairro.", en: "I really like your neighbourhood." },
          { pt: "Somos brasileiros, mas moramos em Londres.", en: "We're Brazilian, but we live in London." },
          { pt: "Cadê a mochila? Ela está no carro.", en: "Where's the backpack? It's in the car." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Você são muito simpático.",
        right: "Você é muito simpático.",
        why: `"Você" means you but takes the he/she form of the verb: "você é", "você fala".`,
      },
      {
        wrong: "Isso é ele livro.",
        right: "Esse é o livro dele.",
        why: `"Ele" is only a subject or object pronoun. For his, Portuguese says "dele" after the noun.`,
      },
      {
        wrong: "Elas são meus pais.",
        right: "Eles são meus pais.",
        why: `A mixed group, here a mother and a father, takes the masculine plural "eles".`,
      },
      {
        wrong: "Ele é tarde.",
        right: "É tarde.",
        why: `There is no it as a subject. For time, weather and general statements the verb stands alone.`,
      },
      {
        wrong: "Você quer um café, senhor?",
        right: "O senhor quer um café?",
        why: `"O senhor" is itself the pronoun you. Use it in place of "você", with the same verb form.`,
      },
    ],
    faqs: [
      {
        q: `Don't Brazilians also say "tu"?`,
        a: `In some regions, yes: in Rio Grande do Sul, parts of the North and Northeast, and in casual speech in Rio. Often it is used with the "você" verb form, as in "tu vai". You will understand it easily, but "você" works everywhere in Brazil, so it is the one this course teaches.`,
      },
      {
        q: `Is "a gente" slang?`,
        a: `No. "A gente" (literally the people) is the normal spoken way to say we in Brazil, used by everyone, and it takes the ele/ela verb form: "a gente vai". "Nós" is used in writing and formal speech, and is never wrong. The course has a whole lesson on it.`,
      },
      {
        q: `What about Portugal?`,
        a: `In Portugal friends and family use "tu" with its own verb forms ("tu falas", "tu és"), and "você" can sound distant or even rude if used to someone's face. "O senhor" and "a senhora" are common in both countries for respectful address.`,
      },
    ],
    related: ["ser-present-tense", "regular-present-tense", "possessives-dele-dela"],
    lessons: ["a1-greetings-ser-1", "a1-greetings-ser-2", "a1-voce-o-senhor", "a1-contrast-sou-e-sao", "a1-a-gente"],
  },
  {
    slug: "gender-articles-plurals",
    title: "Gender, Articles and Plurals: O, A, Os, As",
    description:
      "How noun gender works in Portuguese, the articles o, a, um, uma, the endings that predict gender and their exceptions (o dia, o problema, a mão), and every plural pattern including -ão.",
    level: "A1",
    intro: [
      `Every Portuguese noun is masculine or feminine, and the article in front shows which: "o livro" (the book), "a casa" (the house), "um carro" (a car), "uma mesa" (a table). There is no neuter. The gender also decides the form of adjectives and pronouns, so learn every noun with its article.`,
      `Unlike in some languages, gender is usually easy to spot in Portuguese: most nouns in "-o" are masculine and most in "-a" feminine. The exceptions are few and very common, so they are worth learning early.`,
    ],
    sections: [
      {
        heading: `The articles`,
        body: [
          `The definite article (the) is "o", "a", "os", "as". The indefinite article (a, an) is "um" and "uma"; its plurals "uns" and "umas" mean some or a few. Articles are used more than in English: "O Brasil é grande", "A vida é bela", "Eu gosto do café" (I like coffee, with "de" plus "o").`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine"],
          rows: [
            ["the (singular)", "o carro", "a casa"],
            ["the (plural)", "os carros", "as casas"],
            ["a, an", "um carro", "uma casa"],
            ["some, a few", "uns carros", "umas casas"],
          ],
        },
        examples: [
          { pt: "O café está quente.", en: "The coffee is hot." },
          { pt: "A praia é linda.", en: "The beach is beautiful." },
          { pt: "Tem um mercado aqui perto.", en: "There's a market near here." },
          { pt: "Comprei umas frutas na feira.", en: "I bought some fruit at the street market." },
        ],
      },
      {
        heading: `Endings that predict gender, and the exceptions`,
        body: [
          `Nouns in "-o" are masculine and nouns in "-a" are feminine, with a short list of exceptions. Several endings are reliably feminine: "-ção" ("a informação"), "-dade" ("a cidade", "a verdade"), "-agem" ("a viagem", "a garagem"), "-gem" ("a imagem"). Nouns in "-e" or a consonant can be either, so learn them with the article: "o leite", "a noite", "o hotel", "a flor".`,
          `The exceptions to learn first: many words of Greek origin in "-ma" are masculine ("o problema", "o sistema", "o programa", "o tema", "o idioma"), as are "o dia", "o mapa" and "o planeta". A few short words in "-o" are feminine because they are abbreviations or simply old: "a foto" (from "a fotografia"), "a moto", "a tribo". And the important body word "a mão" (the hand) is feminine.`,
        ],
        table: {
          headers: ["Rule", "Examples", "Exceptions"],
          rows: [
            ["-o is masculine", "o livro, o quarto, o carro", "a foto, a moto, a tribo"],
            ["-a is feminine", "a casa, a mesa, a rua", "o dia, o mapa, o problema, o sistema"],
            ["-ção, -dade, -agem are feminine", "a lição, a cidade, a viagem", "(none common)"],
            ["-e and consonants: learn them", "o leite, a noite, o mar, a dor", ""],
          ],
        },
        examples: [
          { pt: "O problema é o trânsito.", en: "The problem is the traffic." },
          { pt: "Hoje é um dia especial.", en: "Today is a special day." },
          { pt: "A viagem foi longa.", en: "The trip was long." },
          { pt: "Essa foto é muito bonita.", en: "This photo is really nice." },
        ],
      },
      {
        heading: `Plurals, including -ão`,
        body: [
          `Most nouns add -s. Nouns ending in a consonant change in regular ways: -r, -z and -s on a stressed syllable add -es ("mulher, mulheres", "luz, luzes", "país, países"); -m becomes -ns ("homem, homens"); -l becomes -is, with the accent kept or added to show the stress ("animal, animais", "papel, papéis", "farol, faróis"). Words ending in an unstressed -s do not change: "o ônibus, os ônibus", "o lápis, os lápis".`,
          `Nouns in -ão have three plurals. Most take -ões ("a lição, as lições", "o limão, os limões"); a few take -ães ("o pão, os pães", "o alemão, os alemães") or -ãos ("a mão, as mãos", "o irmão, os irmãos", "o cidadão, os cidadãos"). When in doubt -ões is the safest guess, but the common short words are worth memorising.`,
        ],
        table: {
          headers: ["Ending", "Plural", "Examples"],
          rows: [
            ["vowel", "-s", "o livro, os livros; a mãe, as mães"],
            ["-r, -z", "-es", "a mulher, as mulheres; a luz, as luzes"],
            ["-m", "-ns", "o homem, os homens; a viagem, as viagens"],
            ["-al, -el, -ol, -ul", "-ais, -éis, -óis, -uis", "o jornal, os jornais; o hotel, os hotéis"],
            ["-ão (most)", "-ões", "a estação, as estações; o avião, os aviões"],
            ["-ão (some)", "-ães or -ãos", "o pão, os pães; a mão, as mãos"],
            ["unstressed -s", "no change", "o ônibus, os ônibus"],
          ],
        },
        examples: [
          { pt: "Os hotéis da praia são caros.", en: "The hotels on the beach are expensive." },
          { pt: "Eu quero dois pães, por favor.", en: "I'd like two bread rolls, please." },
          { pt: "As estações de metrô estão cheias.", en: "The subway stations are crowded." },
          { pt: "Os meus irmãos moram em Manaus.", en: "My brothers live in Manaus." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "A problema é grande.",
        right: "O problema é grande.",
        why: `"Problema" ends in -a but is masculine, like "sistema", "programa" and "tema".`,
      },
      {
        wrong: "Uma dia eu vou ao Brasil.",
        right: "Um dia eu vou ao Brasil.",
        why: `"Dia" is masculine: "o dia", "um dia", "bom dia".`,
      },
      {
        wrong: "As mãoes estão frias.",
        right: "As mãos estão frias.",
        why: `"Mão" is one of the -ão nouns with the plural "-ãos".`,
      },
      {
        wrong: "Os papels estão na mesa.",
        right: "Os papéis estão na mesa.",
        why: `Nouns in -el form the plural in -éis. Portuguese never adds -s straight after an l.`,
      },
      {
        wrong: "O foto ficou boa.",
        right: "A foto ficou boa.",
        why: `"Foto" is short for "a fotografia" and keeps its feminine gender.`,
      },
    ],
    faqs: [
      {
        q: `Why is "os pais" used for parents?`,
        a: `A masculine plural covers mixed groups. "Os pais" is the father plus the mother, "os filhos" can be sons and daughters, "os irmãos" brothers and sisters. Context tells you whether only men are meant.`,
      },
      {
        q: `Do I put an article before people's names?`,
        a: `It depends on the region. In São Paulo, Rio and the South, "a Ana" and "o João" are normal in speech; in much of the Northeast people say just "Ana". Both are correct. With "seu" and "Dona" there is no article: "Dona Maria".`,
      },
      {
        q: `Are the rules different in Portugal?`,
        a: `Gender and plurals are the same. Portugal uses the article before names everywhere ("o João"), and a few words differ in gender or form in everyday use, but nothing you need at this level.`,
      },
    ],
    related: ["adjective-agreement", "contractions-no-na-do-da", "possessives-dele-dela"],
    lessons: ["a1-gender-articles-1", "a1-gender-articles-2", "a1-error-hunt-gender-estar"],
  },
  {
    slug: "adjective-agreement",
    title: "Adjective Agreement and Position",
    description:
      "How Portuguese adjectives agree with their noun (bonito, bonita, bonitos, bonitas), which ones never change for gender, why they usually come after the noun, and the few that change meaning before it.",
    level: "A1",
    intro: [
      `In Portuguese an adjective takes the gender and number of the noun it describes: "um carro novo", "uma casa nova", "os carros novos", "as casas novas". English adjectives never change, so this is something to practise until it is automatic.`,
      `Adjectives also usually come after the noun, the opposite of English: a new car is "um carro novo". A handful of common adjectives go before it, and a few change their meaning with the position.`,
    ],
    sections: [
      {
        heading: `The four forms`,
        body: [
          `Adjectives in "-o" have four forms. Those ending in "-e" or a consonant have no separate feminine and change only for the plural: "um homem feliz, uma mulher feliz, pessoas felizes". The plural follows the same patterns as nouns: "legal, legais", "jovem, jovens", "simples" stays "simples".`,
          `Adjectives of nationality in "-ês" and a few in "-or" do have a feminine: "inglês, inglesa", "português, portuguesa", "trabalhador, trabalhadora".`,
        ],
        table: {
          headers: ["Type", "Masc. singular", "Fem. singular", "Masc. plural", "Fem. plural"],
          rows: [
            ["-o", "bonito", "bonita", "bonitos", "bonitas"],
            ["-e", "grande", "grande", "grandes", "grandes"],
            ["-l", "legal", "legal", "legais", "legais"],
            ["-z", "feliz", "feliz", "felizes", "felizes"],
            ["-ês", "inglês", "inglesa", "ingleses", "inglesas"],
          ],
        },
        examples: [
          { pt: "O apartamento é pequeno, mas a cozinha é grande.", en: "The apartment is small, but the kitchen is big." },
          { pt: "As praias de Florianópolis são lindas.", en: "The beaches in Florianópolis are beautiful." },
          { pt: "Meus colegas são muito legais.", en: "My colleagues are really nice." },
          { pt: "Ela é uma pessoa feliz.", en: "She's a happy person." },
        ],
      },
      {
        heading: `Mixed groups, and "muito"`,
        body: [
          `When one adjective describes a masculine and a feminine noun together, it takes the masculine plural: "o pai e a mãe são altos", "um livro e uma revista caros". This is the same rule as "eles" for a mixed group.`,
          `"Muito" is tricky. Before a noun it means much or many and agrees: "muitas pessoas", "muito trabalho". Before an adjective it means very and never changes: "elas são muito bonitas". A good check: if you could say very in English, use "muito" with no ending.`,
        ],
        examples: [
          { pt: "O Rafael e a Bia são simpáticos.", en: "Rafael and Bia are friendly." },
          { pt: "Tem muitas lojas novas no shopping.", en: "There are lots of new shops in the mall." },
          { pt: "A comida é muito boa.", en: "The food is very good." },
          { pt: "Eles estão muito cansados.", en: "They're very tired." },
        ],
      },
      {
        heading: `Before or after the noun`,
        body: [
          `Most adjectives, especially colours, shapes, nationalities and anything that classifies, come after the noun: "uma camisa azul", "um restaurante japonês". A few short, common ones often come first: "bom" and "mau" ("um bom filme"), "grande" in the sense of great, "pequeno", "novo", "velho", and numbers and words like "outro", "primeiro", "último".`,
          `With some adjectives the position changes the meaning. Before the noun the sense is more figurative or emotional; after it, literal. Learn these as pairs.`,
        ],
        table: {
          headers: ["Adjective", "Before the noun", "After the noun"],
          rows: [
            ["grande", "um grande homem (a great man)", "um homem grande (a big man)"],
            ["velho", "um velho amigo (an old friend, for years)", "um amigo velho (an elderly friend)"],
            ["pobre", "o pobre menino (the poor boy, pitied)", "o menino pobre (the boy with no money)"],
            ["novo", "um novo carro (another, different car)", "um carro novo (a brand-new car)"],
          ],
        },
        examples: [
          { pt: "É um bom restaurante.", en: "It's a good restaurant." },
          { pt: "Eu comprei uma bolsa preta.", en: "I bought a black bag." },
          { pt: "Ela é uma grande artista.", en: "She's a great artist." },
          { pt: "Esse é o último ônibus?", en: "Is this the last bus?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "A casa é bonito.",
        right: "A casa é bonita.",
        why: `"Casa" is feminine, so the adjective takes "-a", even after the verb.`,
      },
      {
        wrong: "Os livros são caro.",
        right: "Os livros são caros.",
        why: `Adjectives are plural with a plural noun. Every word in the phrase shows the plural.`,
      },
      {
        wrong: "Ela é muita bonita.",
        right: "Ela é muito bonita.",
        why: `Before an adjective, "muito" means very and never changes.`,
      },
      {
        wrong: "Eu tenho um azul carro.",
        right: "Eu tenho um carro azul.",
        why: `Colours come after the noun.`,
      },
    ],
    faqs: [
      {
        q: `What is the difference between "bom" and "bem"?`,
        a: `"Bom" (good) is an adjective and agrees: "um bom dia", "uma boa ideia". "Bem" (well) is an adverb and never changes: "ela fala bem", "estou bem". In the answer to "tudo bem?" you say "bem", since it describes how you are doing.`,
      },
      {
        q: `Do colours agree too?`,
        a: `Most do: "um carro preto, uma casa preta"; "azul" and "verde" change only for the plural ("azuis", "verdes"). Colours named after things, like "rosa" (pink) and "laranja" (orange), usually do not change at all: "camisas rosa".`,
      },
      {
        q: `Is agreement the same in Portugal?`,
        a: `Yes. The rules of agreement and position are the same; only some everyday adjectives differ, such as "legal" (nice, cool), which is very Brazilian.`,
      },
    ],
    related: ["gender-articles-plurals", "ser-vs-estar", "comparatives-superlatives"],
    lessons: ["a1-adjective-agreement", "a1-error-hunt-gender-estar", "a1-spiral-articles-estar"],
  },
  {
    slug: "regular-present-tense",
    title: "The Present Tense of Regular Verbs: -AR, -ER, -IR",
    description:
      "Falar, comer and abrir in the present: the four forms Brazilians use, verbs that come with a preposition (morar em, gostar de, precisar de), negation with não, and what the present can mean.",
    level: "A1",
    intro: [
      `Portuguese verbs fall into three groups by their infinitive ending: "-ar" ("falar", to speak), "-er" ("comer", to eat) and "-ir" ("abrir", to open). The "-ar" group is by far the largest, and new verbs join it ("deletar", "postar").`,
      `To make the present tense, take off the "-ar", "-er" or "-ir" and add the ending for the person. Because "você" and "a gente" use the ele/ela form, and "vocês" the eles/elas form, there are only four endings to learn for each group.`,
    ],
    sections: [
      {
        heading: `The endings`,
        body: [
          `The "-er" and "-ir" groups are identical except for the "nós" form: "comemos" but "abrimos". The stress is on the stem in all forms except "nós": "FA-lo", "FA-la", "fa-LA-mos", "FA-lam".`,
        ],
        table: {
          headers: ["Subject", "falar", "comer", "abrir"],
          rows: [
            ["eu", "falo", "como", "abro"],
            ["você, ele, ela, a gente", "fala", "come", "abre"],
            ["nós", "falamos", "comemos", "abrimos"],
            ["vocês, eles, elas", "falam", "comem", "abrem"],
          ],
        },
        examples: [
          { pt: "Eu trabalho num banco.", en: "I work at a bank." },
          { pt: "Você mora perto daqui?", en: "Do you live near here?" },
          { pt: "A gente come muito arroz e feijão.", en: "We eat a lot of rice and beans." },
          { pt: "Nós abrimos às nove.", en: "We open at nine." },
          { pt: "Eles estudam português à noite.", en: "They study Portuguese in the evening." },
        ],
      },
      {
        heading: `What the present means`,
        body: [
          `The Portuguese present covers English I speak, I do speak and often I'm speaking: "Você fala português?" (do you speak Portuguese?). There is no helper like do in questions and negatives; you just use the verb.`,
          `It also covers habits ("Eu corro todo dia", I run every day) and fixed plans in the near future ("Amanhã eu trabalho", I'm working tomorrow). For something happening right this moment Brazilians often prefer "estar" plus "-ndo": "Estou trabalhando".`,
          `To make a sentence negative, put "não" right before the verb: "Não falo francês." In answers Brazilians love a double "não": "Você mora aqui? Não, não moro."`,
        ],
        examples: [
          { pt: "Ela não bebe café.", en: "She doesn't drink coffee." },
          { pt: "Vocês entendem?", en: "Do you understand?" },
          { pt: "No sábado a gente viaja para Paraty.", en: "On Saturday we're going to Paraty." },
          { pt: "Você fuma? Não, não fumo.", en: "Do you smoke? No, I don't." },
        ],
      },
      {
        heading: `Verbs that come with a preposition`,
        body: [
          `Several common verbs need a little word before their object, where English has none. Learn them as a unit: "morar em" (live in), "gostar de" (like), "precisar de" (need), "assistir a" (watch, in careful Portuguese), "chegar a" or "chegar em" (arrive at). The preposition combines with the article: "moro no Rio", "gosto da praia".`,
          `A few verbs are almost regular but change their spelling to keep the sound: "conhecer" has "eu conheço", "ler" has "eu leio, ele lê, eles leem". Verbs like "dormir" change the vowel in the "eu" form: "eu durmo".`,
        ],
        examples: [
          { pt: "Eu moro em Curitiba.", en: "I live in Curitiba." },
          { pt: "Você precisa de ajuda?", en: "Do you need help?" },
          { pt: "Ela gosta de cozinhar.", en: "She likes cooking." },
          { pt: "Eu conheço um restaurante ótimo.", en: "I know a great restaurant." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu falar inglês.",
        right: "Eu falo inglês.",
        why: `The infinitive is the dictionary form. In a sentence the verb takes the ending for its subject.`,
      },
      {
        wrong: "Nós comimos às oito.",
        right: "Nós comemos às oito.",
        why: `In the present, "-er" verbs have "-emos": "comemos". Only "-ir" verbs have "-imos".`,
      },
      {
        wrong: "Eu preciso ajuda.",
        right: "Eu preciso de ajuda.",
        why: `"Precisar" takes "de" before a noun.`,
      },
      {
        wrong: "Ela fala não português.",
        right: "Ela não fala português.",
        why: `"Não" goes before the verb.`,
      },
      {
        wrong: "Eles fala muito rápido.",
        right: "Eles falam muito rápido.",
        why: `The plural subject takes the plural ending "-am". You may hear "eles fala" in very casual speech, but it is nonstandard.`,
      },
    ],
    faqs: [
      {
        q: `Why is "falamos" both present and past?`,
        a: `For regular "-ar" and "-ir" verbs the "nós" form is the same in the present and the past (we speak, we spoke). Context and time words make it clear: "hoje falamos" or "ontem falamos". You will meet this again with the past tense.`,
      },
      {
        q: `Is "assistir a" really with "a"?`,
        a: `In careful written Portuguese, yes: "assistir ao filme". In everyday speech most Brazilians say "assistir o filme". Use the version with "a" in formal writing and do not worry about it in conversation.`,
      },
      {
        q: `What do verbs look like in Portugal?`,
        a: `The same, plus a separate form for "tu": "tu falas", "tu comes", "tu abres". Brazil uses the "você" form, so you can ignore those forms for now.`,
      },
    ],
    related: ["ir-fazer-querer-poder", "gostar-de", "questions-and-question-words", "present-progressive-estar-gerundio"],
    lessons: ["a1-ar-verbs-1", "a1-ar-verbs-2", "a1-negation-questions", "a1-transform-ar-verbs", "a1-er-ir-verbs-1", "a1-er-ir-verbs-2"],
  },
  {
    slug: "ter-and-tem-ha",
    title: "Ter, Ter Que and Tem for There Is",
    description:
      "The verb ter for having, age and obligation (tenho que), the set phrases with fome and medo, and how Brazilians say there is: tem in speech, há in writing.",
    level: "A1",
    intro: [
      `"Ter" means to have, and it is one of the busiest verbs in Portuguese. You use it for what you own ("Tenho um carro"), for your age ("Tenho trinta anos"), for obligation ("Tenho que trabalhar") and, in Brazil, to say there is: "Tem uma farmácia aqui perto?"`,
      `It is irregular, but only slightly: four forms, with an accent that tells singular "tem" from plural "têm".`,
    ],
    sections: [
      {
        heading: `The forms and the basic uses`,
        body: [
          `"Tem" and "têm" sound almost the same; the circumflex on the plural is a spelling difference to learn for writing. Age always uses "ter": "Quantos anos você tem?" (how old are you?, literally how many years do you have?).`,
        ],
        table: {
          headers: ["Subject", "Ter", "Example"],
          rows: [
            ["eu", "tenho", "Tenho dois irmãos."],
            ["você, ele, ela, a gente", "tem", "Ela tem vinte e cinco anos."],
            ["nós", "temos", "Temos uma reunião às dez."],
            ["vocês, eles, elas", "têm", "Eles têm um cachorro."],
          ],
        },
        examples: [
          { pt: "Você tem filhos?", en: "Do you have children?" },
          { pt: "Eu não tenho carro.", en: "I don't have a car." },
          { pt: "Quantos anos o seu filho tem?", en: "How old is your son?" },
          { pt: "Vocês têm tempo amanhã?", en: "Do you have time tomorrow?" },
        ],
      },
      {
        heading: `Obligation and feelings: "ter que" and "ter fome"`,
        body: [
          `"Ter que" plus an infinitive means to have to: "Tenho que acordar cedo" (I have to get up early). "Ter de" means the same and is a little more formal; in speech "ter que" is far more common.`,
          `Some feelings use "ter" with a noun, where English uses be plus an adjective: "ter fome" (to be hungry), "ter sede" (thirsty), "ter medo" (afraid), "ter pressa" (in a hurry), "ter sorte" (lucky). In Brazil the same idea is often said with "estar com": "estou com fome". Fear and luck mostly stay with "ter": "Tenho medo de avião".`,
        ],
        examples: [
          { pt: "Amanhã eu tenho que trabalhar.", en: "Tomorrow I have to work." },
          { pt: "A gente tem que pegar o ônibus das sete.", en: "We have to catch the seven o'clock bus." },
          { pt: "Ela tem medo de cachorro.", en: "She's afraid of dogs." },
          { pt: "Está com fome? Tem pão de queijo.", en: "Hungry? There's cheese bread." },
        ],
      },
      {
        heading: `There is, there are: "tem" and "há"`,
        body: [
          `To say that something exists or is somewhere, Brazilians use "tem", with no subject and always singular, even for plural things: "Tem um banco na esquina", "Tem muitos turistas no centro". The negative is "não tem": "Não tem ônibus hoje".`,
          `The written, more formal equivalent is "há" (from "haver"), also invariable: "Há muitas opções". You will read "há" in newspapers, signs and emails, and hear it in formal speech; in conversation "tem" is what people say.`,
        ],
        table: {
          headers: ["Meaning", "Speech", "Writing"],
          rows: [
            ["there is", "Tem um restaurante aqui.", "Há um restaurante aqui."],
            ["there are", "Tem muitas pessoas na fila.", "Há muitas pessoas na fila."],
            ["there isn't", "Não tem água.", "Não há água."],
            ["is there...?", "Tem farmácia por aqui?", "Há farmácia por aqui?"],
          ],
        },
        examples: [
          { pt: "Tem uma padaria ótima perto de casa.", en: "There's a great bakery near home." },
          { pt: "Não tem lugar no ônibus.", en: "There's no room on the bus." },
          { pt: "Tem alguém aí?", en: "Is anyone there?" },
          { pt: "Há vagas para estudantes.", en: "There are places for students." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu sou vinte anos.",
        right: "Eu tenho vinte anos.",
        why: `Age is something you have in Portuguese: "ter" plus the number of years.`,
      },
      {
        wrong: "Têm muitos turistas aqui.",
        right: "Tem muitos turistas aqui.",
        why: `There is and there are use "tem" with no subject, always singular.`,
      },
      {
        wrong: "Eu tenho que trabalho.",
        right: "Eu tenho que trabalhar.",
        why: `After "ter que" the verb stays in the infinitive.`,
      },
      {
        wrong: "Hay uma farmácia aqui?",
        right: "Tem uma farmácia aqui?",
        why: `That is the Spanish word. Brazilian speech says "tem", and writing says "há".`,
      },
      {
        wrong: "Eles tem dois filhos.",
        right: "Eles têm dois filhos.",
        why: `The plural "têm" has a circumflex in writing.`,
      },
    ],
    faqs: [
      {
        q: `Is "tem" for there is correct Portuguese?`,
        a: `It is standard Brazilian speech, used by everyone including teachers and news presenters in conversation. Formal writing prefers "há", so use "há" in an essay or a formal email.`,
      },
      {
        q: `"Ter que" or "ter de"?`,
        a: `Both are correct and mean the same. "Ter que" is the everyday Brazilian choice; "ter de" sounds a little more careful and is common in writing.`,
      },
      {
        q: `How does Portugal say there is?`,
        a: `In Portugal "há" is the normal word in speech as well as writing ("há um café ali"); "tem" with this meaning sounds Brazilian there.`,
      },
    ],
    related: ["estar-present-tense", "ir-fazer-querer-poder", "numbers-time-dates"],
    lessons: ["a1-ter-1", "a1-ter-2", "a1-tem-ha-places", "a1-spiral-ar-ter"],
  },
  {
    slug: "ir-fazer-querer-poder",
    title: "Everyday Irregular Verbs: Ir, Fazer, Querer, Poder",
    description:
      "The present of the irregular verbs you need first (ir, fazer, querer, poder, ver, vir, dizer), ir + infinitive for plans, ir para and ir de for getting around, and fazer for the weather.",
    level: "A1",
    intro: [
      `The most useful verbs are, as in English, the irregular ones. Fortunately most of the irregularity is in the "eu" form: "faço" (I do), "quero" (I want), "posso" (I can), "digo" (I say). The other forms follow the regular pattern closely.`,
      `"Ir" (to go) is the exception: it is irregular throughout, and it is also the verb Brazilians use for the future: "Vou viajar amanhã" (I'm going to travel tomorrow).`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `Look at the "eu" column first: that is where the surprises are. "Ver" (to see) and "vir" (to come) look alike and are easy to mix up: "ele vê" (he sees) but "ele vem" (he comes), "eles veem" but "eles vêm".`,
        ],
        table: {
          headers: ["Infinitive", "eu", "você, ele, ela", "nós", "vocês, eles, elas"],
          rows: [
            ["ir (go)", "vou", "vai", "vamos", "vão"],
            ["fazer (do, make)", "faço", "faz", "fazemos", "fazem"],
            ["querer (want)", "quero", "quer", "queremos", "querem"],
            ["poder (can, may)", "posso", "pode", "podemos", "podem"],
            ["dizer (say)", "digo", "diz", "dizemos", "dizem"],
            ["ver (see)", "vejo", "vê", "vemos", "veem"],
            ["vir (come)", "venho", "vem", "vimos", "vêm"],
          ],
        },
        examples: [
          { pt: "O que você faz no fim de semana?", en: "What do you do at the weekend?" },
          { pt: "Eu quero um suco de laranja.", en: "I want an orange juice." },
          { pt: "Posso entrar?", en: "May I come in?" },
          { pt: "Ela vem do trabalho de metrô.", en: "She comes from work by subway." },
          { pt: "Eu não vejo nada daqui.", en: "I can't see anything from here." },
        ],
      },
      {
        heading: `Plans with "ir" + infinitive`,
        body: [
          `"Ir" plus an infinitive is the everyday future in Brazil, just like going to: "Vou trabalhar amanhã", "A gente vai viajar no sábado", "Vai chover". There is no "a" between the two verbs.`,
          `"Vamos" on its own means let's go, and "vamos" plus an infinitive means let's: "Vamos comer?" (shall we eat?).`,
        ],
        examples: [
          { pt: "Eu vou estudar hoje à noite.", en: "I'm going to study tonight." },
          { pt: "Vocês vão viajar no feriado?", en: "Are you going away for the holiday?" },
          { pt: "Acho que vai chover.", en: "I think it's going to rain." },
          { pt: "Vamos tomar um café?", en: "Shall we get a coffee?" },
        ],
      },
      {
        heading: `Getting around, and "fazer" for the weather`,
        body: [
          `To say where you are going, use "ir para" (or "ir a", a bit more formal): "Vou para casa", "Vou ao mercado" ("a" + "o"). Transport takes "de": "de ônibus", "de metrô", "de carro", "de avião"; on foot is "a pé". The opposite direction, coming, is "vir": "Venho de Campinas" (I come from Campinas).`,
          `"Fazer" is used for some weather and for many activities: "Faz frio" (it's cold), "Faz calor", "fazer compras" (go shopping), "fazer exercício", "fazer aniversário" (have a birthday). With the weather, "está frio" and "faz frio" are both common.`,
        ],
        examples: [
          { pt: "Eu vou para o trabalho de bicicleta.", en: "I go to work by bike." },
          { pt: "Ela vai à escola a pé.", en: "She walks to school." },
          { pt: "Em julho faz frio em Porto Alegre.", en: "It's cold in Porto Alegre in July." },
          { pt: "Hoje eu faço aniversário!", en: "It's my birthday today!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu fazo o jantar.",
        right: "Eu faço o jantar.",
        why: `The "eu" form of "fazer" is irregular: "faço", with a cedilla.`,
      },
      {
        wrong: "Eu podo ajudar.",
        right: "Eu posso ajudar.",
        why: `The "eu" form of "poder" is "posso".`,
      },
      {
        wrong: "Ela vai trabalha amanhã.",
        right: "Ela vai trabalhar amanhã.",
        why: `After "ir", the second verb stays in the infinitive.`,
      },
      {
        wrong: "Eles vem amanhã.",
        right: "Eles vêm amanhã.",
        why: `The plural of "vir" has a circumflex: "eles vêm". "Ele vem" is singular.`,
      },
      {
        wrong: "Eu vou em casa.",
        right: "Eu vou para casa.",
        why: `Going somewhere takes "para" or "a". "Ir em" is heard in casual speech, but "para" is the safe standard.`,
      },
    ],
    faqs: [
      {
        q: `Does Brazilian Portuguese have a future tense?`,
        a: `It does ("falarei", I will speak), but in speech it is rare. Brazilians say "vou falar" for almost every future. You will meet the written future at the next level.`,
      },
      {
        q: `"Poder" or "saber" for can?`,
        a: `"Poder" is can in the sense of permission or possibility: "Posso sentar aqui?" For a learned skill, Portuguese uses "saber": "Você sabe nadar?" (can you swim?).`,
      },
      {
        q: `Are these verbs different in Portugal?`,
        a: `The forms are the same, plus the "tu" forms ("tu vais", "tu fazes", "tu queres", "tu podes"), which Brazil does not use in most regions.`,
      },
    ],
    related: ["regular-present-tense", "future-ir-vs-futuro-simples", "ter-and-tem-ha"],
    lessons: ["a1-ir-transport", "a1-ir-infinitive-plans", "a1-fazer-querer-poder", "a1-ver-vir", "a1-contrast-ir-vir", "a1-error-hunt-verbs", "a1-spiral-plans"],
  },
  {
    slug: "questions-and-question-words",
    title: "Questions and Question Words",
    description:
      "How to ask yes/no questions with intonation alone, how to answer with the verb, the question words (o que, quem, onde, quando, como, qual, quanto), and por que versus porque.",
    level: "A1",
    intro: [
      `Asking questions in Portuguese is easier than in English. There is no do and no change of word order: a statement becomes a question just by raising your voice at the end. "Você fala inglês." (you speak English) becomes "Você fala inglês?"`,
      `Question words go at the start, again without changing the order of the rest: "Onde você mora?" (where do you live?). In relaxed speech they can even stay at the end: "Você mora onde?"`,
    ],
    sections: [
      {
        heading: `Yes/no questions and short answers`,
        body: [
          `A yes/no question has the same words as the statement, with rising intonation. To answer, Brazilians usually repeat the verb instead of saying just yes: "Você mora aqui? Moro." (Do you live here? I do.) "Sim" alone can sound abrupt.`,
          `To say no, put "não" first and often again before the verb: "Não, não moro." A tag like "né?" (short for "não é?", isn't it?) at the end asks for agreement: "Está calor hoje, né?"`,
        ],
        examples: [
          { pt: "Você gosta de samba? Gosto muito!", en: "Do you like samba? I love it!" },
          { pt: "Ela é casada? Não, não é.", en: "Is she married? No, she isn't." },
          { pt: "Vocês têm mesa para dois? Temos, sim.", en: "Do you have a table for two? Yes, we do." },
          { pt: "O ônibus já passou, né?", en: "The bus has already gone, hasn't it?" },
        ],
      },
      {
        heading: `The question words`,
        body: [
          `"Qual" and "quanto" change form: "qual" for one, "quais" for more; "quanto, quanta, quantos, quantas" agree with the noun. "O que" asks what in general ("O que é isso?"), while "qual" asks which one of several and is also used with "ser" for names, numbers and addresses: "Qual é o seu nome?", "Qual é o seu telefone?"`,
          `Many Brazilians add "é que" after the question word in speech, which softens the question: "O que é que você quer?", "Onde é que fica?" It means nothing extra, so you can use it or not.`,
        ],
        table: {
          headers: ["Word", "Meaning", "Example"],
          rows: [
            ["o que", "what", "O que você faz?"],
            ["quem", "who", "Quem é ele?"],
            ["onde", "where", "Onde você trabalha?"],
            ["aonde", "where to (with ir)", "Aonde você vai?"],
            ["de onde", "where from", "De onde vocês são?"],
            ["quando", "when", "Quando é a festa?"],
            ["como", "how, what like", "Como é a sua casa?"],
            ["qual, quais", "which, what", "Qual é o seu e-mail?"],
            ["quanto, quanta, quantos, quantas", "how much, how many", "Quantas pessoas vêm?"],
            ["por que", "why", "Por que você está rindo?"],
          ],
        },
        examples: [
          { pt: "Quem é a moça de vermelho?", en: "Who's the young woman in red?" },
          { pt: "Quanto custa esse pastel?", en: "How much is this pastel?" },
          { pt: "Como é o nome dele?", en: "What's his name?" },
          { pt: "Quando você chega?", en: "When do you arrive?" },
        ],
      },
      {
        heading: `"Por que", "porque" and "por quê"`,
        body: [
          `Why and because sound the same but are spelled differently. In a question, why is two words, "por que": "Por que você está triste?" The answer, because, is one word, "porque": "Porque estou cansado."`,
          `At the very end of a sentence, why gets an accent and becomes "por quê": "Você não vem? Por quê?" There is also the noun "o porquê" (the reason), which you will rarely need at this stage.`,
        ],
        examples: [
          { pt: "Por que você estuda português?", en: "Why do you study Portuguese?" },
          { pt: "Porque eu vou morar no Brasil.", en: "Because I'm going to live in Brazil." },
          { pt: "Ela não quer ir. Por quê?", en: "She doesn't want to go. Why?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Que é o seu nome?",
        right: "Qual é o seu nome?",
        why: `With "ser" and a name, number or address, the question word is "qual".`,
      },
      {
        wrong: "Porque você mora aqui?",
        right: "Por que você mora aqui?",
        why: `In a question, why is two words: "por que". "Porque" is the answer, because.`,
      },
      {
        wrong: "Quantos pessoas moram aqui?",
        right: "Quantas pessoas moram aqui?",
        why: `"Quanto" agrees with its noun, and "pessoa" is feminine.`,
      },
      {
        wrong: "Onde mora você?",
        right: "Onde você mora?",
        why: `Brazilians keep the normal word order after the question word. The inverted order is possible but sounds formal or old-fashioned.`,
      },
    ],
    faqs: [
      {
        q: `What does "cadê" mean?`,
        a: `"Cadê" is a very common spoken Brazilian word for where is: "Cadê o meu celular?" It is informal, so use "onde está" in writing.`,
      },
      {
        q: `"Onde" or "aonde"?`,
        a: `"Aonde" means where to, and goes with verbs of motion like "ir": "Aonde você vai?" "Onde" is for where something is: "Onde você está?" In speech many Brazilians use "onde" for both.`,
      },
      {
        q: `Is "por que" spelled the same in Portugal?`,
        a: `No. European Portuguese usually writes why as one word in questions, "porque", as in "Porque é que não vens?" Brazil writes "por que" in questions and keeps "porque" for because.`,
      },
    ],
    related: ["regular-present-tense", "numbers-time-dates", "ser-present-tense"],
    lessons: ["a1-negation-questions", "a1-question-words-1", "a1-question-words-2", "a1-spiral-questions-time"],
  },
  {
    slug: "numbers-time-dates",
    title: "Numbers, Time and Dates",
    description:
      "Counting from zero to a thousand, the numbers that agree with their noun (um, uma, dois, duas, duzentos), telling the time, days of the week, months and saying the date.",
    level: "A1",
    intro: [
      `Numbers in Portuguese are regular once you know the building blocks, with one twist: "um" and "dois", and all the hundreds from two hundred, agree with the noun: "um livro, uma casa", "dois carros, duas bicicletas", "duzentos reais, duzentas pessoas".`,
      `Numbers are joined with "e" (and): "vinte e um" (21), "cento e trinta e dois" (132). Telling the time and dates uses the same numbers with a few fixed phrases.`,
    ],
    sections: [
      {
        heading: `Building numbers`,
        body: [
          `Learn 0 to 20 and the tens, then join with "e". One hundred on its own is "cem", but "cento" as soon as anything follows: "cem pessoas" but "cento e dez pessoas". From two hundred to nine hundred, the hundreds have a masculine and a feminine form.`,
          `In phone numbers Brazilians often say "meia" for six, from "meia dúzia" (half a dozen), so that "seis" and "três" are not confused: 96 is read "nove meia". Prices use a comma for the cents: R$ 15,90 is "quinze e noventa" or "quinze reais e noventa centavos".`,
        ],
        table: {
          headers: ["Number", "Portuguese", "Number", "Portuguese"],
          rows: [
            ["1", "um, uma", "16", "dezesseis"],
            ["2", "dois, duas", "17", "dezessete"],
            ["11", "onze", "19", "dezenove"],
            ["14", "catorze", "21", "vinte e um, vinte e uma"],
            ["15", "quinze", "50", "cinquenta"],
            ["100", "cem", "101", "cento e um"],
            ["200", "duzentos, duzentas", "500", "quinhentos, quinhentas"],
            ["1.000", "mil", "1.500", "mil e quinhentos"],
          ],
        },
        examples: [
          { pt: "Tenho duas irmãs e um irmão.", en: "I have two sisters and one brother." },
          { pt: "O ingresso custa cem reais.", en: "The ticket costs a hundred reais." },
          { pt: "Moram trezentas pessoas no prédio.", en: "Three hundred people live in the building." },
          { pt: "Meu telefone é nove, nove meia, quatro, dois.", en: "My phone number is nine, nine six, four, two." },
        ],
      },
      {
        heading: `Telling the time`,
        body: [
          `Ask "Que horas são?" One o'clock is singular, "É uma hora"; all other hours are plural, "São duas horas", "São dez horas". Noon and midnight are "meio-dia" and "meia-noite". Half past is "e meia" and quarter past "e quinze"; for times before the hour Brazilians say "quinze para as três" (quarter to three, literally fifteen for the three).`,
          `At a time is "à" or "às": "à uma hora", "às oito". For morning, afternoon and evening add "da manhã", "da tarde", "da noite". Timetables, tickets and offices use the 24-hour clock: "às dezoito horas".`,
        ],
        table: {
          headers: ["Time", "Portuguese"],
          rows: [
            ["1:00", "É uma hora."],
            ["3:00", "São três horas."],
            ["12:30 (day)", "É meio-dia e meia."],
            ["4:15", "São quatro e quinze."],
            ["2:45", "São quinze para as três."],
            ["at 8 p.m.", "às oito da noite, às vinte horas"],
          ],
        },
        examples: [
          { pt: "A que horas abre o banco?", en: "What time does the bank open?" },
          { pt: "Abre às dez e fecha às quatro.", en: "It opens at ten and closes at four." },
          { pt: "O voo sai às vinte e uma e trinta.", en: "The flight leaves at 21:30." },
          { pt: "Já são onze e meia!", en: "It's already half past eleven!" },
        ],
      },
      {
        heading: `Days, months and dates`,
        body: [
          `The weekdays are numbered: "segunda-feira" (Monday, the second day) to "sexta-feira" (Friday), plus "sábado" and "domingo". In speech "-feira" is usually dropped: "na segunda", "na sexta". On a day is "no sábado", "na segunda"; every Saturday is "aos sábados" or "nos sábados". Days and months are written with a small letter.`,
          `For a date say "dia" plus the number and "de" plus the month: "dia 25 de dezembro". The first of the month is "primeiro": "primeiro de maio". In a month is "em": "em março". Brazilian dates are written day, month, year: 07/09 is the 7th of September, Independence Day.`,
        ],
        examples: [
          { pt: "Hoje é quinta-feira, dia doze de junho.", en: "Today is Thursday, the twelfth of June." },
          { pt: "Meu aniversário é dia três de outubro.", en: "My birthday is on the third of October." },
          { pt: "Aos domingos a gente almoça na casa da minha avó.", en: "On Sundays we have lunch at my grandmother's." },
          { pt: "As aulas começam em fevereiro.", en: "Classes start in February." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Tenho dois irmãs.",
        right: "Tenho duas irmãs.",
        why: `"Dois" agrees with the noun: "duas" with feminine nouns like "irmã".`,
      },
      {
        wrong: "É duas horas.",
        right: "São duas horas.",
        why: `Only one o'clock, midday and midnight are singular. Every other hour is plural: "são".`,
      },
      {
        wrong: "Cento pessoas vieram.",
        right: "Cem pessoas vieram.",
        why: `A hundred on its own is "cem". "Cento" is only used when another number follows: "cento e vinte".`,
      },
      {
        wrong: "Eu trabalho em segunda-feira.",
        right: "Eu trabalho na segunda-feira.",
        why: `Days take "no" or "na" (on the), not "em" alone.`,
      },
      {
        wrong: "Hoje é um de maio.",
        right: "Hoje é primeiro de maio.",
        why: `The first of the month uses the ordinal "primeiro". The other days use ordinary numbers.`,
      },
    ],
    faqs: [
      {
        q: `How do I write big numbers and decimals?`,
        a: `The other way round from English. Thousands take a dot and decimals a comma: 1.500 is one thousand five hundred, and 2,5 is two and a half ("dois e meio"). Prices follow the same rule: R$ 1.250,00.`,
      },
      {
        q: `"Catorze" or "quatorze"?`,
        a: `Both spellings are correct in Brazil, and both are said. "Catorze" is the more common spelling.`,
      },
      {
        q: `Are the numbers different in Portugal?`,
        a: `Mostly no, but 16, 17 and 19 are spelled and said differently: Portugal has "dezasseis", "dezassete" and "dezanove", where Brazil has "dezesseis", "dezessete" and "dezenove". Portugal also does not use "meia" for six.`,
      },
    ],
    related: ["questions-and-question-words", "ter-and-tem-ha", "contractions-no-na-do-da"],
    lessons: ["a1-numbers-0-100", "a1-numbers-100-1000", "a1-telling-time", "a1-days-months-dates", "a1-dialogue-schedules"],
  },
  {
    slug: "possessives-dele-dela",
    title: "Possessives: Meu, Seu, Nosso and Dele, Dela",
    description:
      "My, your, our and their in Brazilian Portuguese: why possessives agree with the thing owned, why seu usually means your, and how dele and dela say his and her.",
    level: "A1",
    intro: [
      `Portuguese possessives agree with the thing owned, not with the owner. A man says "minha mãe" (my mother) because "mãe" is feminine, and a woman says "meu pai" (my father) because "pai" is masculine. This is the opposite of what English speakers expect.`,
      `Brazil has a second twist: "seu" and "sua" mean your in speech, so for his, her and their Brazilians use "dele", "dela", "deles" and "delas" after the noun: "o carro dele" (his car), "a casa dela" (her house).`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `"Meu", "seu" and "nosso" each have four forms, chosen by the gender and number of the noun that follows. "Dele" and the rest are different: they are "de" plus "ele", so they agree with the owner, and they come after the noun.`,
          `Your for several people is "de vocês", also after the noun: "a casa de vocês" (your house, speaking to two or more people).`,
        ],
        table: {
          headers: ["Meaning", "Masc. singular", "Fem. singular", "Masc. plural", "Fem. plural"],
          rows: [
            ["my", "meu", "minha", "meus", "minhas"],
            ["your (você)", "seu", "sua", "seus", "suas"],
            ["our", "nosso", "nossa", "nossos", "nossas"],
            ["his", "o ... dele", "a ... dele", "os ... dele", "as ... dele"],
            ["her", "o ... dela", "a ... dela", "os ... dela", "as ... dela"],
            ["their", "o ... deles, delas", "a ... deles, delas", "os ... deles, delas", "as ... deles, delas"],
            ["your (vocês)", "o ... de vocês", "a ... de vocês", "os ... de vocês", "as ... de vocês"],
          ],
        },
        examples: [
          { pt: "Minha irmã mora em Brasília.", en: "My sister lives in Brasília." },
          { pt: "Meus avós são do interior.", en: "My grandparents are from the countryside." },
          { pt: "Qual é o seu número?", en: "What's your number?" },
          { pt: "Nossa casa é pequena.", en: "Our house is small." },
          { pt: "O carro de vocês está na garagem.", en: "Your car is in the garage." },
        ],
      },
      {
        heading: `"Seu" or "dele"?`,
        body: [
          `In theory "seu" can mean your, his, her, its or their. In Brazilian speech it almost always means your, the possessive of "você". To talk about someone else's things, use "dele" (his), "dela" (her), "deles" or "delas" (their), placed after the noun with an article in front: "o irmão dela", "as filhas deles".`,
          `In formal writing "seu" for his or her is still common, especially when the owner is the subject of the sentence: "O autor apresenta seu novo livro." In conversation, "dele" and "dela" avoid any doubt about who is meant.`,
        ],
        examples: [
          { pt: "O João mora com a irmã dele.", en: "João lives with his sister." },
          { pt: "A Carla esqueceu a chave dela.", en: "Carla forgot her key." },
          { pt: "O apartamento deles é perto da praia.", en: "Their apartment is near the beach." },
          { pt: "Esse é o seu celular ou o dela?", en: "Is this your phone or hers?" },
        ],
      },
      {
        heading: `With or without the article`,
        body: [
          `Before "meu", "seu" and "nosso" the article is optional in Brazil: "o meu carro" and "meu carro" mean the same. Leaving it out is very common in speech and at the start of a sentence; after a preposition it often contracts: "na minha casa", "do meu pai".`,
          `With "dele" and "dela" the article is needed, because they come after the noun: "a casa dela", never "casa dela" in careful speech. To say mine or yours on its own, keep the article: "Esse livro é o meu" or simply "É meu".`,
        ],
        examples: [
          { pt: "O meu trabalho é perto daqui.", en: "My work is near here." },
          { pt: "Eu moro na casa da minha mãe.", en: "I live in my mother's house." },
          { pt: "De quem é essa bolsa? É minha.", en: "Whose bag is this? It's mine." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Minha pai é médico.",
        right: "Meu pai é médico.",
        why: `The possessive agrees with "pai", which is masculine, whoever is speaking.`,
      },
      {
        wrong: "Meus irmãs moram no Recife.",
        right: "Minhas irmãs moram no Recife.",
        why: `"Irmãs" is feminine plural, so the possessive is "minhas".`,
      },
      {
        wrong: "Dele carro é novo.",
        right: "O carro dele é novo.",
        why: `"Dele" and "dela" come after the noun, with an article before it.`,
      },
      {
        wrong: "A casa de ela é bonita.",
        right: "A casa dela é bonita.",
        why: `"De" and "ela" always contract to "dela".`,
      },
      {
        wrong: "A Ana mora com sua mãe.",
        right: "A Ana mora com a mãe dela.",
        why: `In speech "sua" sounds like your mother. "A mãe dela" makes clear it is Ana's mother.`,
      },
    ],
    faqs: [
      {
        q: `Does "nossa" mean our or wow?`,
        a: `Both. "Nossa!" on its own is a very common exclamation of surprise, short for "Nossa Senhora" (Our Lady). "Nossa casa" means our house.`,
      },
      {
        q: `How do I say my friend's car?`,
        a: `Portuguese has no apostrophe s. Use "de": "o carro do meu amigo" (the car of my friend), "a casa da Júlia".`,
      },
      {
        q: `How are possessives used in Portugal?`,
        a: `In Portugal the article is almost always used ("o meu carro"), "teu" and "tua" go with "tu" among friends, and "seu" sounds more formal. The use of "dele" and "dela" for his and her is shared by both countries.`,
      },
    ],
    related: ["contractions-no-na-do-da", "subject-pronouns-voce", "gender-articles-plurals"],
    lessons: ["a1-family-possessives-1", "a1-family-possessives-2", "a1-contrast-seu-dele", "a1-error-hunt-possessives", "a1-spiral-family-places"],
  },
  {
    slug: "contractions-no-na-do-da",
    title: "Contractions: No, Na, Do, Da, Ao, Pelo",
    description:
      "How em, de, a and por join the article (no, na, do, da, ao, à, pelo, pela), the pronoun contractions dele and nele, and which places take an article: no Brasil, em São Paulo, no Rio.",
    level: "A1",
    intro: [
      `Some short prepositions always fuse with the article that follows: "em" + "o" becomes "no", "de" + "a" becomes "da". Writing "em o" or "de a" is simply wrong, so these contractions are not optional extras: you need them in almost every sentence.`,
      `They are also the reason why place names matter. Countries and some states take an article ("o Brasil", "a Bahia"), most cities do not ("São Paulo"), so you say "moro no Brasil" but "moro em São Paulo".`,
    ],
    sections: [
      {
        heading: `The main contractions`,
        body: [
          `"Em" (in, on, at) becomes "no", "na", "nos", "nas" before the article. "De" (of, from) becomes "do", "da", "dos", "das". "A" (to) becomes "ao", "aos", and with the feminine article "à", "às", written with a grave accent called the "crase". "Por" (through, by) becomes "pelo", "pela", "pelos", "pelas".`,
          `With the indefinite article, "em um" can contract to "num", "numa": "num restaurante". Both are fine in speech; Brazilian writing often keeps "em um".`,
        ],
        table: {
          headers: ["", "o", "a", "os", "as", "um, uma"],
          rows: [
            ["em", "no", "na", "nos", "nas", "num, numa"],
            ["de", "do", "da", "dos", "das", "de um, de uma"],
            ["a", "ao", "à", "aos", "às", ""],
            ["por", "pelo", "pela", "pelos", "pelas", ""],
          ],
        },
        examples: [
          { pt: "O livro está na mesa.", en: "The book is on the table." },
          { pt: "Eu sou do Rio Grande do Sul.", en: "I'm from Rio Grande do Sul." },
          { pt: "A gente vai à praia no domingo.", en: "We're going to the beach on Sunday." },
          { pt: "Vou ao cinema com a Bia.", en: "I'm going to the cinema with Bia." },
          { pt: "Obrigado pela ajuda!", en: "Thanks for the help!" },
        ],
      },
      {
        heading: `Contractions with pronouns`,
        body: [
          `"De" and "em" also fuse with "ele", "ela", "eles" and "elas": "dele", "dela", "deles", "delas" (of him, his...), "nele", "nela", "neles", "nelas" (in him, in it). This is how Brazilians say his and her: "a casa dele".`,
          `They fuse with the place words "aqui" and "ali" too: "daqui" (from here), "dali" (from there). "Perto daqui" means near here.`,
        ],
        examples: [
          { pt: "Eu gosto muito dela.", en: "I really like her." },
          { pt: "Não confio nele.", en: "I don't trust him." },
          { pt: "A estação fica longe daqui?", en: "Is the station far from here?" },
        ],
      },
      {
        heading: `Places: with or without the article`,
        body: [
          `Most countries take an article: "o Brasil", "os Estados Unidos", "a Inglaterra", "o Japão". So: "moro no Brasil", "sou dos Estados Unidos", "vou à Inglaterra". A few do not, notably "Portugal", "Angola" and "Moçambique": "moro em Portugal".`,
          `Most cities take no article: "em São Paulo", "de Salvador", "em Curitiba". The famous exception is Rio: "no Rio", "do Rio", because "rio" is a common noun (river). Recife is said both ways, "em Recife" and "no Recife". States vary: "na Bahia", "no Ceará", "em Minas Gerais", "em São Paulo".`,
        ],
        table: {
          headers: ["Place", "In", "From"],
          rows: [
            ["o Brasil", "no Brasil", "do Brasil"],
            ["os Estados Unidos", "nos Estados Unidos", "dos Estados Unidos"],
            ["a Bahia", "na Bahia", "da Bahia"],
            ["o Rio de Janeiro", "no Rio", "do Rio"],
            ["São Paulo", "em São Paulo", "de São Paulo"],
            ["Portugal", "em Portugal", "de Portugal"],
          ],
        },
        examples: [
          { pt: "Ela mora no Rio, mas é de Belém.", en: "She lives in Rio, but she's from Belém." },
          { pt: "Meus pais moram nos Estados Unidos.", en: "My parents live in the United States." },
          { pt: "Ele trabalha em Manaus.", en: "He works in Manaus." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu moro em o centro.",
        right: "Eu moro no centro.",
        why: `"Em" and "o" always contract to "no".`,
      },
      {
        wrong: "Eu venho de a escola.",
        right: "Eu venho da escola.",
        why: `"De" and "a" always contract to "da".`,
      },
      {
        wrong: "Ele mora em Rio.",
        right: "Ele mora no Rio.",
        why: `Rio de Janeiro takes the article, so "em" becomes "no".`,
      },
      {
        wrong: "Sou de o Brasil.",
        right: "Sou do Brasil.",
        why: `"O Brasil" has an article, and "de" + "o" is "do".`,
      },
      {
        wrong: "Vou a a praia.",
        right: "Vou à praia.",
        why: `"A" (to) + "a" (the) is written "à", with the grave accent.`,
      },
    ],
    faqs: [
      {
        q: `How do I know if a city takes an article?`,
        a: `Assume it does not, and learn the exceptions as you meet them. Cities named after common nouns take one: "o Rio", "o Recife", "a Bahia" (bay, as a state), "o Porto" (in Portugal). Listen to how Brazilians say it.`,
      },
      {
        q: `When do I write "à"?`,
        a: `When "a" (to) meets the feminine article "a": "vou à farmácia", "às três horas". Before a masculine word there is no crase: "vou ao mercado". This accent is a classic problem even for Brazilians, so don't worry if it takes time.`,
      },
      {
        q: `Are contractions different in Portugal?`,
        a: `They are the same, but Portugal contracts "de" with "um" more freely in writing ("dum", "duma"), where Brazil prefers "de um", "de uma".`,
      },
    ],
    related: ["gender-articles-plurals", "possessives-dele-dela", "prepositions-place-time", "por-vs-para"],
    lessons: ["a1-contractions-de-em", "a1-tem-ha-places", "a1-error-hunt-possessives", "a1-mission-my-neighbourhood"],
  },
  {
    slug: "present-progressive-estar-gerundio",
    title: "The Present Progressive: Estou Falando",
    description:
      "Estar + gerúndio (estou falando, está comendo, estão dormindo): how to form the -ndo form, when Brazilians use it, how it differs from the simple present, and why it is never estou a falar in Brazil.",
    level: "A1",
    intro: [
      `To say what is happening right now, Brazilian Portuguese uses "estar" plus the "-ndo" form of the verb, called the "gerúndio": "Estou falando" (I'm speaking), "Ela está comendo" (she's eating). It works much like the English be + -ing.`,
      `The "gerúndio" is the most regular form in the language: every verb forms it the same way, and there are no exceptions in the forms you will use.`,
    ],
    sections: [
      {
        heading: `Making the gerúndio`,
        body: [
          `Take the "-r" off the infinitive and add "-ndo": "falar" gives "falando", "comer" gives "comendo", "partir" gives "partindo". The only verb that looks odd is "pôr" (to put), which gives "pondo". Then put "estar" in the right form before it.`,
        ],
        table: {
          headers: ["Subject", "Estar", "falar", "comer", "dormir"],
          rows: [
            ["eu", "estou", "falando", "comendo", "dormindo"],
            ["você, ele, ela, a gente", "está", "falando", "comendo", "dormindo"],
            ["nós", "estamos", "falando", "comendo", "dormindo"],
            ["vocês, eles, elas", "estão", "falando", "comendo", "dormindo"],
          ],
        },
        examples: [
          { pt: "Estou trabalhando agora, te ligo depois.", en: "I'm working right now, I'll call you later." },
          { pt: "O que você está fazendo?", en: "What are you doing?" },
          { pt: "As crianças estão dormindo.", en: "The children are sleeping." },
          { pt: "Está chovendo muito em São Paulo.", en: "It's raining a lot in São Paulo." },
        ],
      },
      {
        heading: `Progressive or simple present?`,
        body: [
          `The simple present describes habits and general facts: "Trabalho em casa" (I work from home). The progressive describes what is going on now or in a temporary period: "Estou trabalhando em casa esta semana" (I'm working from home this week). English draws the same line, so your instinct mostly works.`,
          `Portuguese is more relaxed than English with verbs of feeling: "Estou gostando muito do curso" (I'm really enjoying the course) is perfectly natural. In speech, "estar" is often shortened: "Tô chegando!" (I'm almost there!).`,
        ],
        examples: [
          { pt: "Ela mora em Recife, mas está morando em Lisboa este ano.", en: "She lives in Recife, but she's living in Lisbon this year." },
          { pt: "Eu sempre almoço ao meio-dia.", en: "I always have lunch at noon." },
          { pt: "Estou gostando muito da cidade.", en: "I'm really liking the city." },
          { pt: "Tô chegando, cinco minutos!", en: "I'm almost there, five minutes!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Estou falar com a minha mãe.",
        right: "Estou falando com a minha mãe.",
        why: `After "estar" the verb takes the "-ndo" form.`,
      },
      {
        wrong: "Eu estou a trabalhar.",
        right: "Eu estou trabalhando.",
        why: `"Estar a" + infinitive is how Portugal says it. In Brazil it is always "estar" + gerúndio.`,
      },
      {
        wrong: "Ela está comindo.",
        right: "Ela está comendo.",
        why: `The vowel of the infinitive stays: "comer" gives "comendo", "partir" gives "partindo".`,
      },
      {
        wrong: "Eu falando com ele agora.",
        right: "Eu estou falando com ele agora.",
        why: `The "-ndo" form needs "estar" in front of it to make a sentence.`,
      },
    ],
    faqs: [
      {
        q: `Can I use the progressive for the future, as in I'm leaving tomorrow?`,
        a: `Not as freely as in English. For plans, Brazilians use "ir" + infinitive ("Vou viajar amanhã") or the simple present ("Amanhã eu viajo"). Keep the progressive for what is in progress.`,
      },
      {
        q: `What is "gerundismo"?`,
        a: `It is a much-mocked habit of call centres to say things like "vou estar transferindo a sua ligação" (I will be transferring your call). Brazilians find it stiff; just say "vou transferir".`,
      },
      {
        q: `How does Portugal say it?`,
        a: `With "estar a" and the infinitive: "estou a falar", "está a comer". The gerúndio is used in the south of Portugal, but the standard is "estar a". In Brazil, "estou a falar" sounds unmistakably Portuguese.`,
      },
    ],
    related: ["estar-present-tense", "regular-present-tense", "perfeito-vs-imperfeito"],
    lessons: ["a1-present-progressive-1", "a1-present-progressive-2", "a1-dialogue-weekend"],
  },
  {
    slug: "gostar-de",
    title: "Gostar de: Saying What You Like",
    description:
      "How gostar de works with nouns and verbs, its contractions (gosto do Rio, gosto da praia), how to answer gosta?, and the other verbs of liking: adorar, amar, odiar, preferir.",
    level: "A1",
    intro: [
      `In English the thing you like is the direct object: I like coffee. In Portuguese "gostar" always needs "de" before it: "Eu gosto de café." Think of it as to be fond of: you are fond of something.`,
      `The person who likes is the subject, as in English, so the verb agrees with them: "eu gosto", "ela gosta", "nós gostamos". This makes "gostar" much easier than the to please verbs some languages have.`,
    ],
    sections: [
      {
        heading: `"Gostar de" with nouns and verbs`,
        body: [
          `Before a noun with an article, "de" contracts: "gosto do Brasil", "gosto da praia", "gosto dos filmes dele". With a general noun and no article it stays "de": "gosto de música", "gosto de chocolate". Before a verb, use the infinitive: "gosto de dançar".`,
          `To say really like, add "muito" after the verb: "Gosto muito de samba." For not at all, "não gosto nada de...".`,
        ],
        table: {
          headers: ["After de", "Example", "Meaning"],
          rows: [
            ["noun, general", "Gosto de futebol.", "I like football."],
            ["o + noun", "Gosto do bairro.", "I like the neighbourhood."],
            ["a + noun", "Ela gosta da novela.", "She likes the soap opera."],
            ["os, as + noun", "Gostamos das praias do Nordeste.", "We like the beaches in the Northeast."],
            ["infinitive", "Vocês gostam de viajar?", "Do you like travelling?"],
          ],
        },
        examples: [
          { pt: "Eu gosto muito de comida baiana.", en: "I really like food from Bahia." },
          { pt: "Você gosta do seu trabalho?", en: "Do you like your job?" },
          { pt: "A gente gosta de ir à praia cedo.", en: "We like going to the beach early." },
          { pt: "Ele não gosta nada de acordar cedo.", en: "He doesn't like getting up early at all." },
        ],
      },
      {
        heading: `Answering, and other verbs of liking`,
        body: [
          `As with other yes/no questions, answer with the verb, without "de": "Você gosta de feijoada? Gosto!" or "Não, não gosto."`,
          `"Adorar" (to love, to adore) and "amar" (to love) take a direct object, with no "de": "Adoro samba", "Amo essa música". "Odiar" (to hate) works the same way: "Odeio trânsito". "Preferir" (to prefer) changes its vowel in the "eu" form, "prefiro", and uses "a" for the thing you like less: "Prefiro chá a café".`,
        ],
        examples: [
          { pt: "Você gosta de pagode? Gosto, mas prefiro samba.", en: "Do you like pagode? I do, but I prefer samba." },
          { pt: "Adoro o Rio no inverno.", en: "I love Rio in the winter." },
          { pt: "Eu odeio esperar.", en: "I hate waiting." },
          { pt: "Prefiro ficar em casa hoje.", en: "I'd rather stay home today." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu gosto café.",
        right: "Eu gosto de café.",
        why: `"Gostar" always takes "de" before what you like.`,
      },
      {
        wrong: "Eu gosto de o Rio.",
        right: "Eu gosto do Rio.",
        why: `"De" contracts with the article: "de" + "o" is "do".`,
      },
      {
        wrong: "Eu adoro de dançar.",
        right: "Eu adoro dançar.",
        why: `Only "gostar" takes "de". "Adorar", "amar" and "odiar" take their object directly.`,
      },
      {
        wrong: "Eu prefero suco.",
        right: "Eu prefiro suco.",
        why: `"Preferir" changes e to i in the "eu" form: "prefiro".`,
      },
      {
        wrong: "O Brasil me gusta.",
        right: "Eu gosto do Brasil.",
        why: `This is the Spanish pattern. In Portuguese the person who likes is the subject: "eu gosto de".`,
      },
    ],
    faqs: [
      {
        q: `How do I say I liked it?`,
        a: `With the past tense: "Gostei!" (I liked it), "Você gostou?" (did you like it?). You will learn the past tense at the next level, but these two are worth knowing now. Note that the "de" disappears when there is no object.`,
      },
      {
        q: `How do I say I would like?`,
        a: `For polite requests Brazilians say "eu queria" or "eu gostaria de": "Eu gostaria de um café, por favor." At this level, "eu quero" with "por favor" is fine too.`,
      },
      {
        q: `Is it the same in Portugal?`,
        a: `"Gostar de" works the same way. For polite requests, Portugal often uses "gostava de" ("gostava de um café"), where Brazil prefers "gostaria de" or "queria".`,
      },
    ],
    related: ["regular-present-tense", "contractions-no-na-do-da", "questions-and-question-words"],
    lessons: ["a1-ar-verbs-2", "a1-gostar-de", "a1-dialogue-weekend"],
  },
  {
    slug: "pronunciation-and-accents",
    title: "Pronunciation and Written Accents",
    description:
      "The sounds of Brazilian Portuguese that English speakers find hard: open and closed vowels, nasal vowels, t and d before i, the r sounds, lh and nh, and the stress rules behind the written accents.",
    level: "A1",
    intro: [
      `Brazilian Portuguese is spelled fairly regularly, but its sounds differ a lot from English. Getting a few of them right, the nasal vowels and the Brazilian t and d above all, makes you much easier to understand.`,
      `Written accents are not decoration: they show the stressed syllable and sometimes the quality of the vowel, and they can change the meaning. "Avó" is grandmother, "avô" grandfather; "é" is is, "e" is and.`,
    ],
    sections: [
      {
        heading: `Vowels: open, closed and nasal`,
        body: [
          `Portuguese has an open e as in bet ("é", "café") and a closed e like the start of the a in say ("ê", "você"); an open o as in law ("ó", "avó") and a closed o as in go ("ô", "avô"). The acute accent marks open vowels, the circumflex closed ones.`,
          `Nasal vowels are said with air through the nose, and they do not end in a full n or m sound. They are written with a tilde ("ã", "õ") or with "m" or "n" after the vowel: "mãe", "pão", "não", "lições", "bem", "sim", "bom", "um". At the end of a word, unstressed "-e" sounds like i ("nome" sounds like "nomi") and unstressed "-o" like u ("obrigado" ends in u).`,
        ],
        table: {
          headers: ["Sound", "Spelling", "Examples"],
          rows: [
            ["open e, open o", "é, ó (and many unmarked)", "café, pé, avó, só"],
            ["closed e, closed o", "ê, ô (and many unmarked)", "você, três, avô, ônibus"],
            ["nasal a", "ã, am, an", "irmã, campo, cantar"],
            ["nasal diphthongs", "ão, ãe, õe, em", "pão, mãe, põe, também"],
            ["final -e, -o", "unstressed e, o", "leite, nome, carro, obrigado"],
          ],
        },
        examples: [
          { pt: "minha avó e o meu avô", en: "my grandmother and my grandfather" },
          { pt: "Não, obrigado.", en: "No, thank you." },
          { pt: "Minha mãe faz pão em casa.", en: "My mother makes bread at home." },
          { pt: "Você também vem?", en: "Are you coming too?" },
        ],
      },
      {
        heading: `Consonants that change`,
        body: [
          `In most of Brazil, "t" and "d" before an i sound become ch and j: "tia" sounds like chee-a, "dia" like jee-a. Since final "-e" sounds like i, this happens at the ends of words too: "leite" sounds like "leitchi", "cidade" like "cidadji".`,
          `"R" at the start of a word and "rr" sound like an English h: "Rio", "carro", "rua". A single "r" between vowels is a quick tap, like the tt in American butter: "caro", "para". So "caro" (expensive) and "carro" (car) are different words. At the end of a syllable "r" varies by region; an h-like sound is common: "porta", "falar".`,
          `"S" between vowels sounds like z ("casa", "mesa"); "ss" and "ç" like s ("passo", "açúcar"). "Lh" is like the lli in million ("filho", "trabalho") and "nh" like the ny in canyon ("vinho", "amanhã"). "X" is most often sh ("xícara", "caixa").`,
        ],
        table: {
          headers: ["Spelling", "Sounds like", "Examples"],
          rows: [
            ["t before i or final -e", "ch", "tia, noite, leite"],
            ["d before i or final -e", "j", "dia, cidade, tarde"],
            ["r at the start, rr", "h", "Rio, rua, carro"],
            ["r between vowels", "a quick tap", "caro, para, Brasil"],
            ["s between vowels", "z", "casa, mesa, rosa"],
            ["lh", "lli in million", "filho, mulher, trabalho"],
            ["nh", "ny in canyon", "vinho, banheiro, minha"],
          ],
        },
        examples: [
          { pt: "Boa noite, tudo bem?", en: "Good evening, how are you?" },
          { pt: "O carro é caro.", en: "The car is expensive." },
          { pt: "Meu filho trabalha no Rio.", en: "My son works in Rio." },
          { pt: "Até amanhã, Dona Rita!", en: "See you tomorrow, Dona Rita!" },
        ],
      },
      {
        heading: `Stress and the written accents`,
        body: [
          `Words ending in a vowel, "-s" or "-m" are stressed on the second-to-last syllable: "CA-sa", "FA-lam", "LI-vros". Words ending in "-r", "-l", "-z", "-i" or "-u" are stressed on the last: "fa-LAR", "pa-PEL", "fe-LIZ", "a-QUI". These two rules need no accent.`,
          `Any word that breaks the rules carries a written accent on the stressed vowel: "café", "você", "ônibus", "fácil", "lâmpada". The tilde also usually marks the stressed syllable: "irmã", "limão". So when you see an accent, stress that syllable.`,
        ],
        examples: [
          { pt: "O ônibus para na próxima rua.", en: "The bus stops on the next street." },
          { pt: "É fácil, você vai ver.", en: "It's easy, you'll see." },
          { pt: "Um café e um pão de queijo.", en: "A coffee and a cheese bread." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Minha avô mora em Natal.",
        right: "Minha avó mora em Natal.",
        why: `"Avó" (open ó) is grandmother; "avô" (closed ô) is grandfather. The accent is the difference.`,
      },
      {
        wrong: "Voce e de onde?",
        right: "Você é de onde?",
        why: `The accents are part of the spelling: "você", and "é" for is, not "e" (and).`,
      },
      {
        wrong: "Eu como pao no café da manhã.",
        right: "Eu como pão no café da manhã.",
        why: `Without the tilde "pao" is not a word; the nasal "ão" needs it.`,
      },
      {
        wrong: "Esse carro é muito carro.",
        right: "Esse carro é muito caro.",
        why: `"Caro" (expensive) has a single tapped r; "carro" (car) has the h-like rr.`,
      },
    ],
    faqs: [
      {
        q: `Does everyone in Brazil say "tia" with a ch sound?`,
        a: `Most Brazilians do, including in Rio, São Paulo and Brasília. In parts of the Northeast and the South, "t" and "d" stay as in English. Both are correct; the ch and j version is the one most learners copy.`,
      },
      {
        q: `Why do people from Rio say sh for "s"?`,
        a: `In Rio, "s" at the end of a syllable sounds like sh: "mesmo", "três", "Paris". Most of Brazil says a plain s there. Both are natural Brazilian accents.`,
      },
      {
        q: `How different does Portugal sound?`,
        a: `Very. European Portuguese swallows many unstressed vowels, keeps "t" and "d" as in English ("tia", "dia"), says sh for "s" at the end of syllables everywhere, and has a different rhythm. Brazilians and Portuguese understand each other, but learners often find the other variety hard at first.`,
      },
    ],
    related: ["ser-present-tense", "gender-articles-plurals"],
    lessons: [
      "a1-sounds-vowels-open-closed",
      "a1-sounds-nasal-vowels",
      "a1-sounds-t-d-before-i",
      "a1-sounds-r",
      "a1-sounds-s-z-x",
      "a1-sounds-lh-nh",
      "a1-sounds-stress-accents",
    ],
  },
];
