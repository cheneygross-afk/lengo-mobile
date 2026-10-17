// Synced from cheneygross-afk/lengo:src/lib/grammar/pt-guides-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { PtGrammarGuide } from "./pt-types";

// Brazilian Portuguese grammar guides, C2 (see the notes at the top of ./pt-types.ts).
export const PT_C2_GUIDES: PtGrammarGuide[] = [
  {
    slug: "figures-of-speech",
    title: "Figuras de Linguagem: Metaphor, Irony, Antithesis and the Rest",
    description:
      "The figures of speech every Brazilian learns at school and meets in poems, songs, speeches and ads: metáfora and metonímia, hipérbole, eufemismo and ironia, antítese, paradoxo and gradação, anáfora, aliteração and assonância, elipse and zeugma, and the line between expressive and vicious pleonasmo.",
    level: "C2",
    intro: [
      `"Figuras de linguagem" are a fixed part of the Brazilian school curriculum and of the ENEM: students are expected to name them and explain their effect. They are also everywhere outside school. Brazilians "tomam um copo", "leem Machado", say "já falei mil vezes", and recognise Camões's "Amor é fogo que arde sem se ver" as the classic paradox.`,
      `At the Mastery level you need to recognise figures in literature, lyrics and political speech, use a few deliberately in your own writing, and avoid the accidental ones: mixed metaphors and the vicious pleonasms ("subir para cima") that Brazilian teachers circle in red.`,
    ],
    sections: [
      {
        heading: `Figures of meaning: metaphor, metonymy, comparison`,
        body: [
          `A "metáfora" transfers a meaning without a comparison word ("Minha vida é um livro aberto"); a "comparação" or "símile" keeps it ("forte como um touro"). "Metonímia" names something by something closely associated: the author for the work ("ler Machado"), the container for the content ("tomar um copo"), the place for the institution ("o Planalto vetou o projeto"). "Personificação" (or "prosopopeia") gives human qualities to things.`,
          `"Catacrese" is a metaphor so worn that it's the only word available: "o pé da mesa", "o céu da boca", "embarcar no ônibus". Nobody hears these as figures anymore, but the ENEM sometimes asks about them.`,
        ],
        table: {
          headers: ["Figure", "Example", "What it does"],
          rows: [
            ["metáfora", "Aquela reunião foi uma tortura.", "identifies two things"],
            ["comparação", "Ele dorme como uma pedra.", "compares with como, feito, tal qual"],
            ["metonímia", "O Planalto vetou o projeto. / Bebi dois copos.", "names by association"],
            ["personificação", "A cidade acordou cedo.", "makes a thing act like a person"],
            ["catacrese", "o braço da poltrona, a asa da xícara", "a dead metaphor that fills a gap"],
          ],
        },
        examples: [
          { pt: "O tempo é um rio que não volta.", en: "Time is a river that doesn't flow back." },
          { pt: "O Itamaraty divulgou uma nota sobre o assunto.", en: "The Foreign Ministry issued a statement on the matter." },
          { pt: "A cidade inteira parou para ver o jogo.", en: "The whole city stopped to watch the game." },
        ],
      },
      {
        heading: `Saying more, less, or the opposite`,
        body: [
          `"Hipérbole" exaggerates ("Já te disse mil vezes", "Estou morrendo de fome"); "eufemismo" softens ("Ele nos deixou", "pessoa idosa"); "ironia" says the opposite of what it means, and depends on context and tone ("Que belo trabalho!" in front of a disaster). Brazilian conversation uses all three constantly; written irony needs more signals, such as quotation marks or an exaggerated adjective.`,
          `"Antítese" sets opposites side by side ("Ele é rico de dinheiro e pobre de espírito"). "Paradoxo" fuses them into an apparent contradiction ("Amor é fogo que arde sem se ver"). "Gradação" builds a series that rises or falls ("Um dia, uma semana, um mês, e nada de resposta").`,
        ],
        examples: [
          { pt: "Esperei uma eternidade na fila do banco.", en: "I waited an eternity in the bank queue." },
          { pt: "Ele partiu cedo demais, aos quarenta anos.", en: "He left us far too soon, at forty." },
          { pt: "Ótimo, agora acabou a luz. Era só o que faltava!", en: "Great, now the power's gone. That's all we needed!" },
          { pt: "Era um silêncio ensurdecedor.", en: "It was a deafening silence." },
        ],
      },
      {
        heading: `Sound, repetition and omission`,
        body: [
          `"Anáfora" repeats words at the start of successive lines or clauses, a staple of speeches and samba ("É hora de mudar, é hora de lutar, é hora de vencer"). "Aliteração" repeats consonant sounds ("O rato roeu a roupa do rei de Roma"); "assonância" repeats vowel sounds. Advertising slogans rely on both.`,
          `"Elipse" omits a word that context supplies ("Na sala, apenas um sofá velho"); "zeugma" omits a word already used ("Eu gosto de samba; ela, de rock"), marked in writing by a comma. "Pleonasmo" repeats an idea. Expressive pleonasm adds emphasis on purpose ("Vi com meus próprios olhos"); vicious pleonasm is a style error.`,
        ],
        table: {
          headers: ["Vicious pleonasm", "Correct"],
          rows: [
            ["subir para cima, descer para baixo", "subir, descer"],
            ["há dez anos atrás", "há dez anos / dez anos atrás"],
            ["elo de ligação", "elo"],
            ["encarar de frente", "encarar"],
            ["surpresa inesperada", "surpresa"],
            ["repetir de novo", "repetir"],
            ["planejar antecipadamente", "planejar"],
          ],
        },
        examples: [
          { pt: "Ninguém me contou: eu vi com os meus próprios olhos.", en: "Nobody told me: I saw it with my own eyes." },
          { pt: "Ele pediu feijoada; eu, uma salada.", en: "He ordered feijoada; I, a salad." },
          { pt: "Queremos escolas, queremos hospitais, queremos respeito.", en: "We want schools, we want hospitals, we want respect (anaphora)." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Isso aconteceu há dez anos atrás.",
        right: "Isso aconteceu há dez anos.",
        why: `"Há" already marks past time, so "atrás" repeats it. Use one or the other: "há dez anos" or "dez anos atrás".`,
      },
      {
        wrong: "Ele é o elo de ligação entre as equipes.",
        right: "Ele é o elo entre as equipes.",
        why: `An "elo" is a link; "de ligação" repeats it. A classic vicious pleonasm.`,
      },
      {
        wrong: "Vamos plantar as sementes do problema para colher a solução no horizonte.",
        right: "Vamos entender a origem do problema para encontrar uma solução.",
        why: `A mixed metaphor (sowing, harvesting, horizon) collapses. Keep one image or none.`,
      },
      {
        wrong: "O avô dela bateu as botas ontem, e a família está de luto.",
        right: "O avô dela faleceu ontem, e a família está de luto.",
        why: `"Bater as botas" is a jokey idiom for dying. In a serious context, the euphemism "faleceu" is the respectful choice.`,
      },
    ],
    faqs: [
      {
        q: `What's the difference between antítese and paradoxo?`,
        a: `In an antítese the opposites stay separate and contrast ("rico de dinheiro, pobre de espírito"). In a paradoxo they are attributed to the same thing at the same time, creating an apparent contradiction ("silêncio ensurdecedor", "é dor que desatina sem doer").`,
      },
      {
        q: `Is every pleonasm wrong?`,
        a: `No. Expressive pleonasm is a legitimate figure: "Vi com meus próprios olhos", "Sonhei um sonho lindo". The problem is the unintended repetition that adds nothing, like "subir para cima".`,
      },
      {
        q: `Will I be asked to name figures in an exam?`,
        a: `In the ENEM and Brazilian university exams, yes. The Celpe-Bras doesn't ask for terms, but it rewards your understanding of irony and figurative meaning in the oral and written tasks.`,
      },
    ],
    related: ["style-and-register", "proverbs-and-idioms", "spelling-pairs-and-homophones", "pragmatic-particles"],
    lessons: [
      "c2-metaphor-metonymy",
      "c2-irony-hyperbole",
      "c2-antithesis-paradox",
      "c2-sound-repetition",
      "c2-ellipsis-pleonasm",
      "c2-style-analysis",
      "c2-contrast-literal-figurative",
      "c2-error-hunt-style",
      "c2-mission-slogan",
      "c2-spiral-style",
      "c2-metaphor-metonymy-unit-review",
      "c2-style-extra-1",
      "c2-style-extra-2",
      "c2-poetic-syntax",
    ],
  },
  {
    slug: "style-and-register",
    title: "Style and Register: Moving a Text from the Street to the Supreme Court",
    description:
      "How Brazilian Portuguese marks register through vocabulary, pronouns, contractions and syntax; one message rewritten across five registers; the levers of style (rhythm, sentence length, word choice); and the register clashes that give away near-native writers.",
    level: "C2",
    intro: [
      `Brazilian Portuguese has an unusually wide gap between the spoken language and the written norm. The same person who texts "cê tá onde?" writes "Informo que me encontro em trânsito" to a court. A Mastery-level user moves along this scale deliberately, and keeps each text at one point on it.`,
      `Register is marked at every level: words ("pegar" vs "obter"), pronouns ("a gente" vs "nós", "ele" vs "o" as object), contractions ("tá", "pra", "cê"), syntax (reduced clauses, passive "se") and even punctuation. This guide maps those markers and shows how to shift a text deliberately.`,
    ],
    sections: [
      {
        heading: `One message, five registers`,
        body: [
          `Look at the same request in five registers. Notice how each step changes several features at once: pronoun, verb form, vocabulary and sentence structure. Mixing features from different rows (a "pra" next to a "solicito") is what makes a text sound wrong.`,
        ],
        table: {
          headers: ["Register", "Where", "Example"],
          rows: [
            ["íntimo / gíria", "friends, messages", "Mano, me manda aquele arquivo aí, por favor?"],
            ["coloquial", "colleagues, family", "Você pode me mandar o arquivo da reunião?"],
            ["neutro", "work email", "Poderia me enviar o arquivo da reunião, por favor?"],
            ["formal", "institution, client", "Solicito, por gentileza, o envio do arquivo referente à reunião."],
            ["oficial / jurídico", "court, public body", "Requer-se a juntada aos autos do documento referente à audiência."],
          ],
        },
        examples: [
          { pt: "Tô morrendo de fome, bora comer alguma coisa?", en: "I'm starving, shall we grab something to eat?" },
          { pt: "Sugiro que façamos uma pausa para o almoço.", en: "I suggest we break for lunch." },
          { pt: "Fica suspensa a sessão para o intervalo de almoço.", en: "The session is adjourned for the lunch break." },
        ],
      },
      {
        heading: `The markers of register`,
        body: [
          `Each register has a bundle of features. In vocabulary, formal Portuguese prefers Latinate verbs ("adquirir" for "comprar", "residir" for "morar", "solicitar" for "pedir", "efetuar" for "fazer"). In grammar, it prefers "nós" to "a gente", "o / a" to "ele / ela" as object, the future and conditional to "vou" and "ia", and written pronoun placement. Informal speech prefers contractions ("tá", "pra", "num", "cê"), "ter" for "haver", and topics with resumptive pronouns.`,
        ],
        table: {
          headers: ["Feature", "Informal", "Formal"],
          rows: [
            ["we", "a gente vai", "nós vamos"],
            ["object pronoun", "Eu vi ele.", "Eu o vi."],
            ["there is", "Tem muita gente.", "Há muitas pessoas."],
            ["future", "Vou fazer amanhã.", "Farei amanhã."],
            ["polite wish", "Queria pedir uma coisa.", "Gostaria de solicitar..."],
            ["verbs", "pegar, ter, fazer, morar", "obter, possuir, efetuar, residir"],
            ["contractions", "tá, pra, cê, num", "está, para, você, não"],
          ],
        },
        examples: [
          { pt: "A gente tá pensando em ir pra praia no feriado.", en: "We're thinking of going to the beach on the holiday." },
          { pt: "Pretendemos viajar para o litoral durante o feriado.", en: "We intend to travel to the coast over the holiday." },
        ],
      },
      {
        heading: `Style beyond register: rhythm, length, plain language`,
        body: [
          `Within one register, style is a set of choices: short sentences for impact, long periodic sentences for argument, concrete words for vividness, abstract nouns for distance. Brazilian journalism and the "linguagem simples" movement in public bodies push for short sentences, the active voice and everyday words; academic and legal writing still favour long, nominal sentences.`,
          `A useful exercise is to rewrite a text for a different reader: a "bula" (medicine leaflet) for a patient, a court decision for a news site, a scientific abstract for a podcast. Keep the facts, change the register markers consistently.`,
        ],
        examples: [
          { pt: "Efetue o pagamento até a data de vencimento para evitar a incidência de juros.", en: "Make the payment by the due date to avoid interest charges." },
          { pt: "Pague até o vencimento e não pague juros.", en: "Pay by the due date and you won't pay interest." },
          { pt: "Ela entrou. Olhou. Não disse nada.", en: "She came in. Looked. Said nothing." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Venho, por meio deste, pedir pra vocês me mandarem o boleto.",
        right: "Venho, por meio deste, solicitar o envio do boleto.",
        why: `A formal formula followed by "pra vocês me mandarem" is a register clash. Keep the whole sentence at one level.`,
      },
      {
        wrong: "Prezado cliente, a gente informa que o pedido tá atrasado.",
        right: "Prezado cliente, informamos que o pedido está atrasado.",
        why: `"A gente" and "tá" are spoken forms; a written notice that opens with "Prezado" needs "nós" (or an impersonal verb) and "está".`,
      },
      {
        wrong: "Mano, efetuei a aquisição dos ingressos!",
        right: "Mano, comprei os ingressos!",
        why: `Bureaucratic verbs in a message to a friend sound ironic or odd. Use the everyday verb.`,
      },
      {
        wrong: "O réu pegou o dinheiro e meteu o pé.",
        right: "O réu apropriou-se do dinheiro e fugiu.",
        why: `Slang in a legal or journalistic text is out of register.`,
      },
    ],
    faqs: [
      {
        q: `Is "a gente" wrong in writing?`,
        a: `Not wrong, but informal. It's normal in emails to colleagues, chats and informal articles, and avoided in essays, reports and official texts. Note that it takes a third person singular verb: "a gente vai", never "a gente vamos" in standard Portuguese.`,
      },
      {
        q: `Should I write formally when in doubt?`,
        a: `No. Over-formal Portuguese ("efetuar", "procedimento", mesóclise) in an ordinary context sounds stiff or ironic. The neutral register (você, standard grammar, everyday vocabulary) is right for most situations.`,
      },
      {
        q: `How do I learn where each word sits?`,
        a: `Good dictionaries (Houaiss, Aulete) label words as "informal", "pejorativo", "jurídico" and so on. Reading widely across genres does the rest: news, columns, contracts, chats, novels.`,
      },
    ],
    related: ["figures-of-speech", "legal-and-press-language", "linguistic-variation", "spoken-discourse-markers", "official-portuguese", "register-and-the-written-norm"],
    lessons: [
      "c2-style-analysis",
      "c2-error-hunt-style",
      "c2-contrast-specialist-plain",
      "c2-mission-plain-language",
      "c2-review-style-register",
      "c2-transform-mastery",
    ],
  },
  {
    slug: "spelling-pairs-and-homophones",
    title: "Por Que, Porque, Por Quê, Porquê, and Other Pairs That Sound Alike",
    description:
      "The spelling distinctions Brazilians themselves get wrong: the four porquês, \"mas\" and \"mais\", \"mal\" and \"mau\", \"há\" and \"a\", \"senão\" and \"se não\", \"a fim\" and \"afim\", \"onde\" and \"aonde\", plus the homophones behind Brazilian puns (\"concerto\" / \"conserto\", \"sessão\" / \"seção\" / \"cessão\").",
    level: "C2",
    intro: [
      `Many Portuguese words sound identical and are spelled differently, and the difference is grammatical or lexical. Brazilians learn these at school and still confuse them; on social media, "mais" for "mas" and the wrong "porque" are everywhere. In a formal text, though, they are read as markers of education.`,
      `The same homophones power Brazilian wordplay: a "trocadilho" often depends on "concerto" and "conserto" sounding alike. Knowing the spelling is what makes the pun work in writing.`,
    ],
    sections: [
      {
        heading: `The four porquês`,
        body: [
          `"Por que" (two words, no accent) asks a question or means for which / why in the middle of a sentence. "Por quê" (with a circumflex) is the same, but at the end of a sentence or before a pause, where it is stressed. "Porque" (one word) means because. "Porquê" (one word, accent) is a noun, the reason, usually after an article.`,
        ],
        table: {
          headers: ["Form", "Use", "Example"],
          rows: [
            ["por que", "question (start or middle); = pelo qual", "Por que você saiu cedo? / O motivo por que saí é pessoal."],
            ["por quê", "at the end, before a pause", "Você saiu cedo por quê?"],
            ["porque", "because (answer, explanation)", "Saí cedo porque estava cansada."],
            ["porquê", "noun: the reason", "Ninguém entendeu o porquê da decisão."],
          ],
        },
        examples: [
          { pt: "Não sei por que ela não veio.", en: "I don't know why she didn't come." },
          { pt: "Ela não veio, e ninguém sabe por quê.", en: "She didn't come, and nobody knows why." },
          { pt: "Explique os porquês da sua escolha.", en: "Explain the reasons for your choice." },
        ],
      },
      {
        heading: `Pairs that sound the same`,
        body: [
          `Most Brazilians pronounce "mas" (but) and "mais" (more) the same way, with a diphthong, so spelling is the only distinction. For "mal" and "mau", use the opposites test: "mal" is the opposite of "bem" (adverb, or the noun evil); "mau" is the opposite of "bom" (adjective). "Há" (from "haver") is past time or existence; "a" is future time or distance.`,
          `"Senão" means otherwise, except or but rather; "se não" is if not, and can always be replaced by "caso não". "A fim de" is in order to; "afim" means akin. "Onde" is where with static verbs; "aonde" is to where with verbs of motion that take "a".`,
        ],
        table: {
          headers: ["Pair", "Meaning", "Example"],
          rows: [
            ["mas / mais", "but / more", "Quis ir, mas não deu. / Quero mais café."],
            ["mal / mau", "badly, evil / bad", "Dormi mal. / Ele não é um mau sujeito."],
            ["há / a", "ago / from now, at", "Cheguei há dois dias. / Volto daqui a dois dias. / Fica a dois quilômetros."],
            ["senão / se não", "otherwise / if not", "Corra, senão vai perder o ônibus. / Se não chover, vamos."],
            ["a fim de / afim", "in order to / related", "Estudo a fim de passar. / Áreas afins."],
            ["onde / aonde", "where (at) / where (to)", "Onde você está? / Aonde você vai?"],
            ["demais / de mais", "too much, the others / too many (vs de menos)", "Falou demais. / Não vi nada de mais."],
            ["acerca de / há cerca de", "about / about ... ago", "Falamos acerca do projeto. / Moro aqui há cerca de dez anos."],
            ["em vez de / ao invés de", "instead of / the opposite of", "Em vez de café, tomei chá. / Ao invés de subir, desceu."],
          ],
        },
        examples: [
          { pt: "Não fazia outra coisa senão reclamar.", en: "He did nothing but complain." },
          { pt: "Se não for possível, me avise.", en: "If it isn't possible, let me know." },
          { pt: "Não era um mau aluno, mas estudava mal.", en: "He wasn't a bad student, but he studied badly." },
        ],
      },
      {
        heading: `Homophones and the trocadilho`,
        body: [
          `Brazilian Portuguese has many homophones that differ only in spelling, mostly through "s", "ss", "ç" and "c", or "x" and "ch". They are frequent in puns, ads and headlines, and frequent in errors. Paronyms, words that sound similar but not identical ("eminente" / "iminente"), cause similar trouble.`,
        ],
        table: {
          headers: ["Word", "Meaning", "Word", "Meaning"],
          rows: [
            ["concerto", "concert", "conserto", "repair"],
            ["sessão", "session, showing", "seção / cessão", "section / transfer of rights"],
            ["cela", "cell", "sela", "saddle"],
            ["censo", "census", "senso", "sense"],
            ["caçar", "to hunt", "cassar", "to revoke (a mandate)"],
            ["acender", "to light", "ascender", "to rise"],
            ["cheque", "cheque", "xeque", "check (chess), threat"],
            ["eminente", "eminent", "iminente", "imminent"],
            ["mandato", "term of office", "mandado", "warrant, court order"],
            ["comprimento", "length", "cumprimento", "greeting, fulfilment"],
          ],
        },
        examples: [
          { pt: "O deputado teve o mandato cassado.", en: "The congressman had his mandate revoked." },
          { pt: "A polícia cumpriu um mandado de busca.", en: "The police executed a search warrant." },
          { pt: "Oficina de pianos: fazemos concertos e consertos.", en: "Piano workshop: we do concerts and repairs (a pun)." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Porque você não me ligou?",
        right: "Por que você não me ligou?",
        why: `A question uses "por que", two words. "Porque" is the answer.`,
      },
      {
        wrong: "Você não veio por que?",
        right: "Você não veio por quê?",
        why: `At the end of a sentence "quê" is stressed and takes a circumflex.`,
      },
      {
        wrong: "Eu queria ir, mais estava chovendo.",
        right: "Eu queria ir, mas estava chovendo.",
        why: `"Mas" is but; "mais" is more. They sound alike in Brazil, so check the meaning.`,
      },
      {
        wrong: "Ele é um homem mal.",
        right: "Ele é um homem mau.",
        why: `Opposite test: "um homem bom", so "mau". "Mal" is the opposite of "bem".`,
      },
      {
        wrong: "Daqui há dois meses eu me formo.",
        right: "Daqui a dois meses eu me formo.",
        why: `Future time takes "a"; "há" is for the past ("há dois meses").`,
      },
      {
        wrong: "Estude, se não você não passa.",
        right: "Estude, senão você não passa.",
        why: `Here the meaning is otherwise, so it's one word. Test: "caso não" doesn't fit.`,
      },
    ],
    faqs: [
      {
        q: `"Por que" or "porque" after "é"?`,
        a: `In "É por isso que..." there's no porquê at all. In "A razão é porque..." purists prefer "A razão é que..."; in "Não sei por que" it's two words, because it means why (por qual razão).`,
      },
      {
        q: `"Seção" or "secção"?`,
        a: `Brazilian spelling is "seção" (section, department). "Secção" is the European spelling, and "sessão" and "cessão" are different words.`,
      },
      {
        q: `Is "aonde" ever used with static verbs?`,
        a: `Very often in speech ("Aonde você mora?"), and some writers accept it, but the norm reserves "aonde" for movement: "Aonde vamos?", "Onde você mora?".`,
      },
    ],
    related: ["crase-traps", "punctuation-norma-culta", "figures-of-speech", "agreement-traps"],
    lessons: [
      "c2-puns-homophones",
      "c2-double-meaning",
      "c2-error-hunt-wordplay",
      "c2-humour-extra-1",
      "c2-spelling-pairs",
      "c2-contrast-near-native",
      "c2-precision-extra-1",
    ],
  },
  {
    slug: "proverbs-and-idioms",
    title: "Ditados Populares and Advanced Idioms",
    description:
      "The proverbs Brazilians actually use (and the habit of saying only the first half), advanced idioms from \"dar com os burros n'água\" to \"tirar onda\", football expressions used everywhere, and the grammar of fixed expressions that can't be changed.",
    level: "C2",
    intro: [
      `Brazilians quote proverbs constantly, often ironically and often only in part: "Quem não tem cão..." is enough, because everyone knows the rest. Idioms are just as frequent, in conversation, columns, political speeches and headlines. A Mastery-level speaker understands them instantly and uses a few naturally.`,
      `Fixed expressions are fixed: you can't change their articles, tenses or word order without breaking them, and they often preserve old grammar ("ficar a ver navios", "dize-me com quem andas"). Translating them word for word from English produces nonsense.`,
    ],
    sections: [
      {
        heading: `Proverbs in everyday use`,
        body: [
          `These are the proverbs you'll hear most. Many have an English equivalent with a different image. Brazilians often say just the first half and let the listener complete it, especially when the proverb is used ironically.`,
        ],
        table: {
          headers: ["Ditado", "Meaning", "English equivalent"],
          rows: [
            ["Quem não tem cão caça com gato.", "make do with what you have", "needs must"],
            ["De grão em grão a galinha enche o papo.", "little by little you get there", "every little helps"],
            ["Em casa de ferreiro, o espeto é de pau.", "experts neglect their own home", "the cobbler's children have no shoes"],
            ["Quem vê cara não vê coração.", "appearances deceive", "don't judge a book by its cover"],
            ["Águas passadas não movem moinho.", "the past is past", "let bygones be bygones"],
            ["Mais vale um pássaro na mão do que dois voando.", "keep what's certain", "a bird in the hand"],
            ["Cada macaco no seu galho.", "mind your own business", "each to their own"],
            ["Deus ajuda quem cedo madruga.", "effort is rewarded", "the early bird catches the worm"],
            ["Gato escaldado tem medo de água fria.", "bad experiences make you wary", "once bitten, twice shy"],
            ["O seguro morreu de velho.", "caution pays", "better safe than sorry"],
            ["Pimenta nos olhos dos outros é refresco.", "others' problems seem small", "easy to bear others' pain"],
            ["Filho de peixe, peixinho é.", "children resemble parents", "the apple doesn't fall far from the tree"],
          ],
        },
        examples: [
          { pt: "Não tinha martelo, usei um sapato. Quem não tem cão...", en: "I didn't have a hammer, so I used a shoe. Needs must..." },
          { pt: "Ela é nutricionista e só come besteira. Em casa de ferreiro...", en: "She's a nutritionist and eats nothing but junk. The cobbler's children..." },
          { pt: "Esquece essa briga. Águas passadas não movem moinho.", en: "Forget that fight. Let bygones be bygones." },
        ],
      },
      {
        heading: `Advanced idioms`,
        body: [
          `Idioms are the hardest part of the vocabulary because their meaning can't be guessed. Learn them with a typical context and register. Most of these are informal; a few ("pôr a mão no fogo", "pagar o pato") are fine in journalism and speeches.`,
        ],
        table: {
          headers: ["Idiom", "Meaning", "Example"],
          rows: [
            ["dar com os burros n'água", "to fail, come to nothing", "O plano deu com os burros n'água."],
            ["fazer uma vaquinha", "to chip in, club together", "Fizemos uma vaquinha para o presente."],
            ["ficar a ver navios", "to be left empty-handed", "Esperei a resposta e fiquei a ver navios."],
            ["pôr a mão no fogo por alguém", "to vouch for someone", "Eu ponho a mão no fogo por ela."],
            ["ser um zero à esquerda", "to be useless", "Em cozinha, sou um zero à esquerda."],
            ["tirar onda", "to show off; to tease", "Ele adora tirar onda com o carro novo."],
            ["pagar o pato", "to take the blame for others", "Os outros erraram e eu paguei o pato."],
            ["engolir sapo", "to put up with something", "Engoli muito sapo naquele emprego."],
            ["quebrar o galho", "to help out, make do", "Você me quebra um galho e me empresta o carro?"],
            ["chutar o balde", "to give up, lose patience", "Cansei e chutei o balde."],
            ["enfiar o pé na jaca", "to overdo it", "Enfiei o pé na jaca no Carnaval."],
            ["segurar vela", "to be the third wheel", "Não vou ao cinema com o casal para segurar vela."],
          ],
        },
        examples: [
          { pt: "Ninguém tinha dinheiro para a festa, então fizemos uma vaquinha.", en: "Nobody had money for the party, so we chipped in." },
          { pt: "O ministro disse que põe a mão no fogo pelo secretário.", en: "The minister said he would vouch for the secretary." },
        ],
      },
      {
        heading: `Football everywhere`,
        body: [
          `Football supplies Brazilian Portuguese with a large stock of metaphors used in business, politics and love. "Pisar na bola" (to mess up, let someone down) is as common as any verb; "show de bola" means excellent; "aos 45 do segundo tempo" means at the last minute.`,
        ],
        table: {
          headers: ["Expression", "Literal", "Meaning"],
          rows: [
            ["pisar na bola", "step on the ball", "to mess up, let someone down"],
            ["show de bola", "a ball show", "excellent"],
            ["virar o jogo", "turn the game around", "to turn a situation around"],
            ["aos 45 do segundo tempo", "at 45 minutes of the second half", "at the last minute"],
            ["bola pra frente", "ball forward", "let's move on"],
            ["dar um chapéu", "to chip the ball over someone", "to outwit someone"],
            ["jogar a toalha", "throw in the towel (boxing)", "to give up"],
          ],
        },
        examples: [
          { pt: "Ele pisou na bola quando esqueceu o aniversário dela.", en: "He really messed up when he forgot her birthday." },
          { pt: "Entreguei o projeto aos 45 do segundo tempo.", en: "I handed the project in at the last minute." },
          { pt: "Perdemos o cliente, mas bola pra frente.", en: "We lost the client, but let's move on." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quem não tem um cachorro caça com um gato.",
        right: "Quem não tem cão caça com gato.",
        why: `Proverbs are fixed. Don't add articles or swap "cão" for the everyday "cachorro".`,
      },
      {
        wrong: "Está chovendo gatos e cachorros.",
        right: "Está chovendo canivetes.",
        why: `A literal translation of an English idiom. The Brazilian images are "chover canivetes" or "cair o mundo".`,
      },
      {
        wrong: "Ele chutou o balde do emprego.",
        right: "Ele chutou o balde e pediu demissão.",
        why: `"Chutar o balde" is intransitive; it doesn't take a complement.`,
      },
      {
        wrong: "O cliente ficou vendo navios.",
        right: "O cliente ficou a ver navios.",
        why: `This idiom preserves the old construction "ficar a ver". It's fixed even in Brazil, where the gerund is otherwise the rule.`,
      },
    ],
    faqs: [
      {
        q: `Is "dize-me com quem andas" Brazilian?`,
        a: `Yes, as a proverb: "Diga-me com quem andas e eu te direi quem és". Its second person verb forms are archaic, preserved because the proverb is fixed. Brazilians use it without thinking of the grammar.`,
      },
      {
        q: `Can I use proverbs in an essay?`,
        a: `Sparingly, and in informal genres (crônicas, columns, speeches). In the ENEM essay a proverb is a weak form of repertório and can sound like a cliché.`,
      },
      {
        q: `Are idioms regional?`,
        a: `Many are national, but each region has its own: "massa" (great) in the Northeast, "bah" and "tri" in Rio Grande do Sul, "uai" in Minas Gerais. Recognise them; adopt them only if you live there.`,
      },
    ],
    related: ["figures-of-speech", "false-friends-and-translation", "linguistic-variation", "verb-expressions-dar-ficar-pegar"],
    lessons: [
      "c2-proverbs-1",
      "c2-proverbs-2",
      "c2-idioms-advanced",
      "c2-football-language",
      "c2-pop-references",
      "c2-contrast-proverb-meaning",
      "c2-dialogue-family-wisdom",
      "c2-error-hunt-idioms-c2",
      "c2-mission-column",
      "c2-spiral-idioms",
      "c2-proverbs-1-unit-review",
      "c2-proverbs-extra-1",
      "c2-proverbs-extra-2",
    ],
  },
  {
    slug: "false-friends-and-translation",
    title: "False Friends, the -ing Form and Noun Stacks: Translating from English",
    description:
      "The false cognates that trap even advanced English speakers (\"pretender\", \"eventualmente\", \"atualmente\", \"realizar\", \"esquisito\"), how English \"-ing\" forms and phrasal verbs become Portuguese, how to unpack noun stacks, and how to render the English passive naturally.",
    level: "C2",
    intro: [
      `English and Portuguese share thousands of Latin words, which makes reading easy and writing treacherous. "Eventualmente" doesn't mean eventually; "pretender" doesn't mean pretend; "esquisito" is weird, not exquisite. At the Mastery level, the remaining errors in an English speaker's Portuguese are mostly of this kind: words and structures carried over from English.`,
      `This guide collects the false friends that matter most and the English structures that don't map: the -ing form, phrasal verbs, noun stacks and the agentless passive.`,
    ],
    sections: [
      {
        heading: `False friends`,
        body: [
          `Some of these are completely false; others overlap partly. "Realizar" does mean to realise a dream (fulfil), but never to realise a fact (that's "perceber" or "se dar conta"). "Assistir" means to watch (with "a" in the norm) and, in medical contexts, to assist.`,
        ],
        table: {
          headers: ["Portuguese", "Means", "English look-alike", "Portuguese for that"],
          rows: [
            ["pretender", "to intend", "pretend", "fingir"],
            ["eventualmente", "occasionally, possibly", "eventually", "finalmente, com o tempo"],
            ["atualmente", "currently", "actually", "na verdade"],
            ["realizar", "to carry out, fulfil", "realise (a fact)", "perceber, se dar conta"],
            ["puxar", "to pull", "push", "empurrar"],
            ["compromisso", "appointment, commitment", "compromise", "acordo, meio-termo"],
            ["livraria", "bookshop", "library", "biblioteca"],
            ["parentes", "relatives", "parents", "pais"],
            ["esquisito", "weird", "exquisite", "requintado, primoroso"],
            ["sensível", "sensitive", "sensible", "sensato"],
            ["costume", "habit, custom", "costume", "fantasia"],
            ["injúria", "insult (legal: defamation)", "injury", "lesão, ferimento"],
            ["educado", "polite", "educated", "instruído, culto"],
            ["suportar", "to bear, stand", "support", "apoiar"],
            ["prejuízo", "loss, damage", "prejudice", "preconceito"],
          ],
        },
        examples: [
          { pt: "Pretendo me mudar para Florianópolis no ano que vem.", en: "I intend to move to Florianópolis next year." },
          { pt: "Atualmente, trabalho como tradutora autônoma.", en: "I currently work as a freelance translator." },
          { pt: "Só percebi o erro depois de enviar o e-mail.", en: "I only realised the mistake after sending the email." },
          { pt: "Eventualmente, trabalho de casa, mas em geral vou ao escritório.", en: "Occasionally I work from home, but usually I go to the office." },
        ],
      },
      {
        heading: `The -ing form and phrasal verbs`,
        body: [
          `English -ing has many jobs, and Portuguese uses different forms for each. As a subject or after a preposition, it is an infinitive ("Fumar faz mal", "depois de ler", "sem saber", "obrigado por vir"). As a progressive, it is the gerund ("Estou lendo"). For a planned future, Portuguese uses the present or "ir" + infinitive ("Viajo amanhã", "Vou viajar amanhã"). As an adjective, it's often a relative clause or a noun ("um prédio em construção").`,
          `Phrasal verbs usually correspond to a single Portuguese verb, often of Latin origin: give up is "desistir", find out is "descobrir", put off is "adiar", turn down is "recusar", and run out of is "ficar sem" or "acabar".`,
        ],
        table: {
          headers: ["English", "Portuguese", "Form"],
          rows: [
            ["Swimming is good for you.", "Nadar faz bem.", "infinitive"],
            ["Thanks for coming.", "Obrigado por ter vindo.", "infinitive"],
            ["I'm leaving tomorrow.", "Vou embora amanhã.", "ir / present"],
            ["the building being built", "o prédio em construção", "noun phrase"],
            ["We ran out of coffee.", "Acabou o café.", "single verb"],
            ["She turned the offer down.", "Ela recusou a proposta.", "single verb"],
            ["Let's put off the meeting.", "Vamos adiar a reunião.", "single verb"],
          ],
        },
        examples: [
          { pt: "Depois de muito pensar, ela desistiu da viagem.", en: "After a lot of thought, she gave up on the trip." },
          { pt: "Descobri que o voo tinha sido cancelado.", en: "I found out the flight had been cancelled." },
        ],
      },
      {
        heading: `Noun stacks and the passive`,
        body: [
          `English stacks nouns in front of the head noun (customer service team leader). Portuguese puts the head first and attaches the rest with "de" (and other prepositions), working backwards from the end of the English: "líder da equipe de atendimento ao cliente". Use articles where a specific thing is meant ("a lei de proteção de dados").`,
          `The English agentless passive often reads better as a Portuguese impersonal "se", an active third person plural, or an active sentence with a subject: it is believed that is "Acredita-se que"; I was told is "Me disseram"; the decision was taken last week can be "A decisão foi tomada na semana passada" or "Decidiu-se na semana passada".`,
        ],
        examples: [
          { pt: "líder da equipe de atendimento ao cliente", en: "customer service team leader" },
          { pt: "estratégia de mitigação das mudanças climáticas", en: "climate change mitigation strategy" },
          { pt: "Me disseram que a loja fecha às seis.", en: "I was told the shop closes at six." },
          { pt: "Acredita-se que o quadro tenha sido pintado em 1920.", en: "The painting is believed to have been painted in 1920." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eu realizei que tinha esquecido a chave.",
        right: "Eu percebi que tinha esquecido a chave.",
        why: `"Realizar" is to carry out or fulfil, never to become aware.`,
      },
      {
        wrong: "Eventualmente, ela conseguiu o visto.",
        right: "Finalmente, ela conseguiu o visto.",
        why: `"Eventualmente" means occasionally or possibly. For eventually, use "finalmente", "por fim" or "com o tempo".`,
      },
      {
        wrong: "Atualmente, eu não gosto de café.",
        right: "Na verdade, eu não gosto de café.",
        why: `"Atualmente" is currently. Actually is "na verdade" or "na realidade".`,
      },
      {
        wrong: "Estou saindo para Paris semana que vem.",
        right: "Vou para Paris semana que vem.",
        why: `The English present progressive for future plans is a calque that many Brazilians notice. Portuguese prefers the present or "ir" + infinitive.`,
      },
      {
        wrong: "o cliente serviço time líder",
        right: "o líder da equipe de atendimento ao cliente",
        why: `Portuguese doesn't stack nouns. Put the head noun first and link the rest with prepositions.`,
      },
    ],
    faqs: [
      {
        q: `Is "assistir o filme" a false-friend problem?`,
        a: `No, that's regência. "Assistir" means to watch, and the norm requires "assistir ao filme". The false-friend problem is using "assistir" for to help someone outside medical or legal contexts: say "ajudar".`,
      },
      {
        q: `How do I localise rather than translate?`,
        a: `Adapt dates (dd/mm/aaaa), numbers (decimal comma: "3,5"; thousands with a point: "1.000"), currency ("R$ 1.234,56"), units, humour and politeness. Brazilian readers expect warmer openings and "você" in most web copy.`,
      },
      {
        q: `Why does my translation sound stiff even without errors?`,
        a: `Usually because it keeps English syntax: too many passives with "ser", possessives everywhere ("ela lavou suas mãos" instead of "ela lavou as mãos"), and English word order. Read it aloud and ask how a Brazilian would say it.`,
      },
    ],
    related: ["regencia-traps", "style-and-register", "infinitive-or-subjunctive", "proverbs-and-idioms"],
    lessons: [
      "c2-false-friends",
      "c2-ing-and-phrasal-verbs",
      "c2-noun-stacks",
      "c2-localisation",
      "c2-mediation",
      "c2-contrast-literal-natural",
      "c2-dialogue-interpreting",
      "c2-error-hunt-translation",
      "c2-mission-translate-localise",
      "c2-spiral-translation",
      "c2-false-friends-unit-review",
      "c2-translation-extra-1",
      "c2-translation-extra-2",
      "c2-mediation-task",
    ],
  },
  {
    slug: "spoken-discourse-markers",
    title: "Então, Aí, Tipo, Né: Discourse Markers in Speech and Speeches",
    description:
      "The words that organise spoken Brazilian Portuguese: \"então\", \"aí\", \"tipo\", \"né\", \"olha\", \"bom\", \"enfim\", \"quer dizer\" and backchannels, what each one does in a conversation, and their formal counterparts for speeches, debates and answering questions in public.",
    level: "C2",
    intro: [
      `Transcribe a relaxed Brazilian conversation and you'll find a word every few seconds that adds no content: "então", "aí", "tipo", "né", "olha", "bom". These discourse markers open and close turns, hold the floor, mark a new topic, soften an opinion, or check that the listener is following. Without them, a fluent speaker sounds oddly abrupt; with too many, a learner sounds nervous.`,
      `Formal speech has its own markers: "Senhoras e senhores", "Passo agora a", "Peço a palavra", "Se me permite". This guide maps both ends of the scale.`,
    ],
    sections: [
      {
        heading: `Conversation markers and what they do`,
        body: [
          `Each marker has typical positions and functions. "Então" opens a turn or a topic (so...); "aí" moves a story forward (and then); "tipo" introduces an example, an approximation or a quotation (like); "né" checks agreement (right?), "olha" claims attention before an opinion or a correction, "bom" (well) opens a reply after a pause, "enfim" (anyway) closes a digression.`,
        ],
        table: {
          headers: ["Marker", "Function", "Example"],
          rows: [
            ["então", "opening, topic shift, conclusion", "Então, sobre a viagem, eu pensei numa coisa."],
            ["aí", "narrative sequence", "Aí ele chegou e começou a gritar."],
            ["tipo", "example, approximation, quotation", "Tinha tipo cinquenta pessoas. Ela ficou tipo: o quê?"],
            ["né", "checking, seeking agreement", "Você vem amanhã, né?"],
            ["olha", "attention, softening an opinion", "Olha, eu não concordo muito com isso."],
            ["bom", "thinking, opening a reply", "Bom, depende do preço."],
            ["enfim", "closing a digression", "Enfim, o importante é que deu certo."],
            ["quer dizer", "self-repair, clarification", "Ela chega às oito, quer dizer, às nove."],
            ["sabe?", "involving the listener", "Foi estranho, sabe? Ninguém falou nada."],
          ],
        },
        examples: [
          { pt: "Então, gente, vamos começar?", en: "So, everyone, shall we start?" },
          { pt: "Aí eu falei pra ele: não dá mais.", en: "So then I told him: I can't do this anymore." },
          { pt: "Olha, sinceramente, eu acho que não vai dar tempo.", en: "Look, honestly, I don't think there'll be time." },
        ],
      },
      {
        heading: `Listening and closing`,
        body: [
          `Brazilian listeners give frequent feedback: "uhum", "sei", "é", "pois é", "ah, é?", "nossa!", "sério?". Silence can sound like disapproval. Closing a conversation is gradual: "Bom, é isso", "Então tá", "Vamos falando", "Qualquer coisa, me chama", "Beijo, tchau" (common even between colleagues in some contexts, more among women and close friends).`,
        ],
        examples: [
          { pt: "Nossa, sério? Não acredito!", en: "Wow, seriously? I can't believe it!" },
          { pt: "Então tá, qualquer coisa me chama.", en: "OK then, if you need anything, give me a shout." },
          { pt: "Bom, é isso. Vamos nos falando.", en: "Well, that's it. Let's keep in touch." },
        ],
      },
      {
        heading: `Formal speech: speeches, debates, questions`,
        body: [
          `A speech replaces conversational markers with signposting for the ear: an opening that addresses the audience, announcements of structure, explicit transitions and a clear closing. Debates have a fixed procedural vocabulary. When answering questions, Brazilian speakers thank, reformulate and then concede or disagree politely.`,
        ],
        table: {
          headers: ["Moment", "Formal markers"],
          rows: [
            ["opening", "Senhoras e senhores, Caros colegas, Boa noite a todos e a todas"],
            ["structure", "Em primeiro lugar, Passo agora a, Por último"],
            ["anticipating objections", "Alguns dirão que..., É bem verdade que..., mas"],
            ["debate", "Peço a palavra, Pela ordem, Com a palavra o candidato, réplica, tréplica"],
            ["answering", "Agradeço a pergunta, Se entendi bem, Permita-me discordar"],
            ["closing", "Para concluir, Por fim, Muito obrigado pela atenção"],
          ],
        },
        examples: [
          { pt: "Alguns dirão que a medida é cara. É bem verdade, mas a inação custa mais.", en: "Some will say the measure is expensive. True, but doing nothing costs more." },
          { pt: "Agradeço a pergunta. Se entendi bem, a senhora quer saber quem vai pagar.", en: "Thank you for the question. If I understood correctly, you want to know who will pay." },
          { pt: "Peço a palavra, senhor presidente, pela ordem.", en: "I request the floor, Mr President, on a point of order." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Então, aí, tipo, né, eu acho que, tipo, sim.",
        right: "Então, eu acho que sim.",
        why: `Stacked fillers make you sound unsure. One marker per turn is plenty.`,
      },
      {
        wrong: "Tipo, conforme exposto anteriormente, o projeto é viável.",
        right: "Conforme exposto anteriormente, o projeto é viável.",
        why: `"Tipo" is conversational; it clashes with a formal connector.`,
      },
      {
        wrong: "Aí, em 1822, ocorreu a Independência.",
        right: "Em seguida, em 1822, ocorreu a Independência.",
        why: `Narrative "aí" is spoken. In writing or a formal talk use "em seguida", "depois" or "então".`,
      },
    ],
    faqs: [
      {
        q: `Is "né" rude in formal situations?`,
        a: `Not rude, just informal. Many educated Brazilians use it in interviews and meetings. In a prepared speech or presentation, replace it with "não é?" sparingly or drop it.`,
      },
      {
        q: `Can I use "tipo" in writing?`,
        a: `In chats and informal posts, yes. In emails it sounds casual, and in essays it's out of register.`,
      },
      {
        q: `What's the difference between "então" and "aí" in a story?`,
        a: `Both move the story on. "Aí" is distinctly spoken and informal; "então" works in speech and writing. In formal narration use "então", "em seguida" or "depois".`,
      },
    ],
    related: ["pragmatic-particles", "style-and-register", "linguistic-variation", "figures-of-speech"],
    lessons: [
      "c2-speech-structure",
      "c2-speech-devices",
      "c2-formal-debate",
      "c2-handling-questions",
      "c2-ceremonial-speech",
      "c2-contrast-written-spoken-argument",
      "c2-dialogue-debate",
      "c2-error-hunt-rhetoric",
      "c2-mission-speech",
      "c2-spiral-rhetoric",
      "c2-speech-structure-unit-review",
      "c2-rhetoric-extra-1",
      "c2-rhetoric-extra-2",
    ],
  },
  {
    slug: "legal-and-press-language",
    title: "Data Venia, Outrossim, Destarte: Legal Language, Latinisms and Headlines",
    description:
      "The specialist registers you meet as a reader: the impersonal, infinitive and future-subjunctive structures of laws and court decisions, the Latin and archaic words of legal Portuguese, and the grammar of Brazilian headlines and news reporting.",
    level: "C2",
    intro: [
      `Brazilian legal Portuguese is famously dense: long sentences, Latin phrases, archaisms like "outrossim" and "destarte", and ritual courtesy ("data venia"). The press, in contrast, is compressed: headlines drop articles, put the present for the past and the infinitive for the future. Both are registers you mostly need to read, and occasionally to imitate or translate into plain language.`,
      `This guide covers the grammar and vocabulary that make these texts hard, so you can read a court summary, a contract or a front page with full comprehension.`,
    ],
    sections: [
      {
        heading: `The grammar of laws and court decisions`,
        body: [
          `Brazilian laws state rules impersonally. Criminal offences are defined with a bare infinitive followed by the penalty: article 121 of the Código Penal reads simply "Matar alguém: Pena - reclusão, de seis a vinte anos." Conditions and subjects use the future subjunctive ("Quem infringir...", "O locatário que deixar de pagar..."), and duties use deontic formulas ("compete a", "incumbe a", "é vedado", "é facultado").`,
          `Court decisions favour nominalisation and the passive "se": "Trata-se de ação de indenização", "Julga-se procedente o pedido", "Defere-se a liminar". The parties are "o autor" (plaintiff) and "o réu" (defendant); "a sentença" is the first-instance judgment, "o acórdão" an appeal court's, "o recurso" the appeal.`,
        ],
        table: {
          headers: ["Structure", "Example", "Meaning"],
          rows: [
            ["infinitive + penalty", "Subtrair coisa alheia móvel: Pena - reclusão", "the offence of theft is defined as"],
            ["future subjunctive", "Quem descumprir a norma será multado.", "whoever breaches the rule"],
            ["deontic formula", "Compete à União legislar sobre...", "it is the Union's responsibility"],
            ["impersonal se", "Julga-se procedente o pedido.", "the claim is upheld"],
            ["salvo / ressalvado", "salvo disposição em contrário", "unless otherwise provided"],
            ["sob pena de", "sob pena de multa diária", "on pain of a daily fine"],
          ],
        },
        examples: [
          { pt: "O réu foi condenado, mas a defesa vai recorrer da sentença.", en: "The defendant was convicted, but the defence will appeal against the judgment." },
          { pt: "O juiz concedeu uma liminar suspendendo a obra.", en: "The judge granted an injunction suspending the building work." },
          { pt: "Quem dirigir sob efeito de álcool terá a carteira suspensa.", en: "Anyone who drives under the influence of alcohol will have their licence suspended." },
        ],
      },
      {
        heading: `Latinisms and archaisms`,
        body: [
          `Legal and academic Portuguese keep many Latin phrases, written in italics in careful texts. Some are general educated vocabulary ("a priori", "ad hoc", "sine qua non", "in loco"); some are specifically legal ("data venia", "habeas corpus", "erga omnes"). "Lato sensu" and "stricto sensu" are also the everyday names of two kinds of Brazilian postgraduate course.`,
          `Archaic connectors survive in legal and very formal writing: "outrossim" (furthermore), "destarte" (thus), "porquanto" (since), "conquanto" (although, + subjunctive), "mister" in "faz-se mister" (it is necessary), "precípuo" (main). Recognise them; in your own writing prefer the modern equivalents.`,
        ],
        table: {
          headers: ["Term", "Meaning", "Example"],
          rows: [
            ["data venia", "with all due respect (to disagree)", "Data venia, discordo do eminente relator."],
            ["sine qua non", "essential condition", "A assinatura é condição sine qua non."],
            ["in loco", "on site", "Os fiscais fizeram uma vistoria in loco."],
            ["a priori", "at first sight, in advance", "A priori, não vejo problema."],
            ["ad hoc", "for this purpose", "Foi criada uma comissão ad hoc."],
            ["ipsis litteris", "word for word", "O texto foi copiado ipsis litteris."],
            ["outrossim", "furthermore", "Outrossim, requer a produção de provas."],
            ["destarte", "thus, therefore", "Destarte, o pedido deve ser negado."],
            ["faz-se mister", "it is necessary", "Faz-se mister analisar os documentos."],
          ],
        },
        examples: [
          { pt: "O advogado impetrou um habeas corpus em favor do cliente.", en: "The lawyer filed a habeas corpus petition on behalf of his client." },
          { pt: "Ela fez uma especialização lato sensu em gestão pública.", en: "She did a postgraduate specialisation course in public management." },
        ],
      },
      {
        heading: `The grammar of headlines and news`,
        body: [
          `Brazilian headlines use the present for recent past events ("Governo anuncia corte no orçamento"), "vai" or "deve" + infinitive for the future ("STF deve julgar o caso na quinta"), drop articles, and often put the verb first ("Morre aos 90 anos o compositor..."). Quotes come first with the attribution after: "'Não vou renunciar', diz ministro."`,
          `In the body of the article, attribution is constant ("segundo", "de acordo com", "afirmou") and unconfirmed facts take the conditional ("teria"). Economic news has its own stock vocabulary: "a taxa Selic", "o PIB", "a inflação", "o câmbio", "juros", "recessão", "superávit".`,
        ],
        examples: [
          { pt: "Banco Central eleva a Selic para 11,25% ao ano", en: "Central Bank raises the Selic rate to 11.25% a year (headline)" },
          { pt: "'Não vou renunciar', diz prefeito", en: "'I will not resign,' says mayor (headline)" },
          { pt: "Chuvas deixam mais de mil desabrigados no litoral", en: "Rains leave over a thousand homeless on the coast (headline)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Data venia, o senhor está completamente errado!",
        right: "Data venia, discordo do entendimento de Vossa Excelência.",
        why: `"Data venia" is a ritual of courteous disagreement in legal debate. Following it with a blunt attack misreads its function.`,
      },
      {
        wrong: "A priore, não vejo problema.",
        right: "A priori, não vejo problema.",
        why: `The Latin phrases are "a priori" and "a posteriori". "A priore" is a common misspelling.`,
      },
      {
        wrong: "Destarte, a gente acha que o pedido não procede.",
        right: "Destarte, o pedido não procede.",
        why: `An archaic legal connector next to "a gente acha" is a register clash.`,
      },
      {
        wrong: "Ontem o governo anuncia corte no orçamento.",
        right: "Ontem o governo anunciou corte no orçamento.",
        why: `The headline present is a convention of headlines only. In the body of a text, past events take past tenses.`,
      },
    ],
    faqs: [
      {
        q: `Should Latin phrases be italicised?`,
        a: `In careful writing, yes, as foreign words; many legal texts and newspapers don't bother. They are usually written without Portuguese accents ("a priori", "habeas corpus"), although the hybrid spelling "data vênia" is also common.`,
      },
      {
        q: `Do Brazilian lawyers really write like this?`,
        a: `Traditionally, yes, and the style is often criticised. Courts and the plain-language movement now push for shorter, clearer texts, but you'll still meet "outrossim" and "destarte" in petitions and decisions.`,
      },
      {
        q: `Why is "STF" often the subject of headlines?`,
        a: `Institutions are named by their acronyms or seats: "STF" (Supremo Tribunal Federal), "o Planalto" (the presidency), "o Congresso", "o Itamaraty" (the Foreign Ministry). It's metonymy as standard news style.`,
      },
    ],
    related: ["official-portuguese", "media-stance-and-distance", "style-and-register", "figures-of-speech"],
    lessons: [
      "c2-legal-register",
      "c2-medical-register",
      "c2-economic-register",
      "c2-science-popularisation",
      "c2-latinisms-jargon",
      "c2-contrast-specialist-plain",
      "c2-dialogue-consultation",
      "c2-error-hunt-specialist",
      "c2-mission-plain-language",
      "c2-spiral-specialist",
      "c2-legal-register-unit-review",
      "c2-specialist-extra-1",
      "c2-specialist-extra-2",
    ],
  },
  {
    slug: "linguistic-variation",
    title: "Os Menino, A Gente, Tu Vai: Variation, Change and the Norm",
    description:
      "The sociolinguistics of Brazilian Portuguese: the features that separate everyday speech from the written norm (plural agreement, \"a gente\", \"tu\" with third-person verbs, object \"ele\", \"ter\" for \"haver\"), regional and social markers, the norma culta vs norma padrão debate, ongoing change, and the debate on gender-neutral language.",
    level: "C2",
    intro: [
      `No one speaks the grammar book. Educated Brazilians say "a gente vai", "eu vi ele" and "tem muita gente aqui" without a second thought, while "os menino chegou" marks a speaker as less schooled and is the target of prejudice. Linguists distinguish the "norma padrão" (the prescriptive ideal of grammars) from the "norma culta" (what educated speakers actually use), and both from popular varieties.`,
      `At the Mastery level you need to recognise these features, understand what they signal about region, class and situation, and talk about them without judgement, as the Celpe-Bras and Brazilian public debate increasingly expect.`,
    ],
    sections: [
      {
        heading: `Features of spoken Brazilian Portuguese`,
        body: [
          `Some features are used by almost everyone in informal speech and carry no stigma; others mark social class or region. The table shows where each feature stands. In formal writing all of them give way to the norm.`,
        ],
        table: {
          headers: ["Feature", "Speech", "Norm", "Status"],
          rows: [
            ["we", "a gente vai", "nós vamos", "universal, neutral"],
            ["object pronoun", "Eu vi ele.", "Eu o vi.", "universal in speech"],
            ["null object", "Você viu o filme? Vi.", "Vi, sim. / Eu o vi.", "universal"],
            ["existential", "Tem muita gente.", "Há muitas pessoas.", "universal in speech"],
            ["you", "\"tu vai\" (South, North, Northeast)", "você vai / \"tu vais\"", "regional, neutral"],
            ["plural marking", "os menino", "os meninos", "socially marked"],
            ["verb agreement", "nós vai, eles foi", "nós vamos, eles foram", "socially marked"],
            ["subject of infinitive", "para mim fazer", "para eu fazer", "socially marked"],
            ["r for l", "pranta, Framengo", "planta, Flamengo", "strongly stigmatised"],
          ],
        },
        examples: [
          { pt: "A gente se vê amanhã, então.", en: "We'll see each other tomorrow, then." },
          { pt: "Encontrei ele no mercado ontem.", en: "I ran into him at the market yesterday." },
          { pt: "Tem um restaurante novo ali na esquina.", en: "There's a new restaurant on the corner there." },
        ],
      },
      {
        heading: `Region, class and the norm debate`,
        body: [
          `Regional features are mostly phonetic and lexical: the Carioca "s" that sounds like "sh", the caipira retroflex "r" of the São Paulo interior, the Northeastern "t" and "d" that don't become "tch" and "dj" before "i", the "tu" of Porto Alegre and Belém. Vocabulary varies too ("mandioca", "aipim" and "macaxeira" are the same root).`,
          `Marcos Bagno's book "Preconceito linguístico" (1999) popularised the argument that judging people by non-standard grammar is social prejudice. Grammarians and many commentators answer that schools must teach the norm as a tool of access. The debate returns every time a textbook includes popular forms. You don't have to take sides, but you should be able to discuss it.`,
        ],
        examples: [
          { pt: "Em Porto Alegre, bah e tri aparecem em qualquer conversa.", en: "In Porto Alegre, bah and tri turn up in every conversation." },
          { pt: "No Nordeste, a mandioca costuma ser chamada de macaxeira; no Rio, de aipim.", en: "In the Northeast, cassava is usually called macaxeira; in Rio, aipim." },
        ],
      },
      {
        heading: `Change in progress and the gender debate`,
        body: [
          `Brazilian Portuguese is changing in visible ways: "a gente" is replacing "nós" in speech, the object pronoun "o / a" is disappearing from conversation, English verbs are absorbed into the first conjugation ("deletar", "printar", "stalkear", "postar"), and internet writing has its own conventions ("vc", "pq", "tb", "kkkk").`,
          `The debate on "linguagem neutra" proposes forms like "todes" and "elu" to avoid the masculine generic. Supporters see inclusion; critics, including many linguists, point out that the forms are hard to generalise, and several states have tried to ban them in schools. Widely accepted alternatives avoid the issue: "todas e todos", "as pessoas", "quem estuda" instead of "os estudantes".`,
        ],
        examples: [
          { pt: "Vou printar a tela e te mando.", en: "I'll take a screenshot and send it to you." },
          { pt: "Bom dia a todas e a todos.", en: "Good morning, everyone." },
          { pt: "Quem quiser participar deve se inscrever até sexta.", en: "Anyone who wants to take part must register by Friday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "A gente vamos ao cinema.",
        right: "A gente vai ao cinema.",
        why: `"A gente" takes a third person singular verb. The plural is stigmatised.`,
      },
      {
        wrong: "Isso é para mim fazer amanhã.",
        right: "Isso é para eu fazer amanhã.",
        why: `"Eu" is the subject of "fazer", so it takes the subject pronoun. "Mim" is for objects of prepositions: "Isso é para mim."`,
      },
      {
        wrong: "Nós vai sair cedo amanhã.",
        right: "Nós vamos sair cedo amanhã.",
        why: `With "nós", the verb takes the first person plural. "Nós vai" is a socially marked popular form; "a gente vai" is the neutral spoken alternative.`,
      },
    ],
    faqs: [
      {
        q: `Should I use "a gente" in my own speech?`,
        a: `Yes. It's the normal spoken form for most Brazilians in most situations. Use "nós" in writing and formal speech.`,
      },
      {
        q: `Is "eu vi ele" wrong?`,
        a: `In speech it's the standard form for practically every Brazilian, including the highly educated. In formal writing, use "eu o vi" (or rephrase). Grammars that call it wrong describe the written norm, not speech.`,
      },
      {
        q: `What is the difference between norma culta and norma padrão?`,
        a: `The norma padrão is the prescriptive model codified in grammars. The norma culta, in Brazilian linguistics, is the language actually used by educated urban speakers, which already includes forms the padrão rejects (such as "me dá" at the start of a sentence).`,
      },
    ],
    related: ["regional-variation-in-brazil", "register-and-the-written-norm", "spoken-brazilian-portuguese", "brazilian-vs-european-portuguese", "agreement-traps"],
    lessons: [
      "c2-dialect-areas",
      "c2-social-variation",
      "c2-norm-debate",
      "c2-internet-language",
      "c2-language-change",
      "c2-gender-language-debate",
      "c2-contrast-norm-variant",
      "c2-dialogue-language-debate",
      "c2-mission-language-essay",
      "c2-spiral-variation",
      "c2-dialect-areas-unit-review",
      "c2-variation-extra-1",
      "c2-variation-extra-2",
    ],
  },
  {
    slug: "agreement-traps",
    title: "Concordância: The Agreement Traps (Faz Dois Anos, Havia Pessoas, A Maioria Chegou)",
    description:
      "The verbal and nominal agreement points that still trip up near-native writers and many Brazilians: impersonal \"haver\" and \"fazer\", collective and partitive subjects, percentages, \"um dos que\", the passive \"se\", inverted subjects, and \"meio\", \"bastante\", \"anexo\", \"é proibido\" and \"menos\".",
    level: "C2",
    intro: [
      `Agreement (concordância) is where the written norm and Brazilian speech differ most systematically. "Fazem dois anos que moro aqui" and "Haviam muitas pessoas na festa" are heard every day, from educated speakers too, and are corrected in every formal text. Professional proofreaders spend much of their time on exactly these points.`,
      `This guide collects the traps in two groups: verb agreement (concordância verbal) and agreement of adjectives and similar words (concordância nominal). For each one, it gives the norm and, where the norm allows two options, both.`,
    ],
    sections: [
      {
        heading: `Impersonal verbs: "haver", "fazer" and their auxiliaries`,
        body: [
          `"Haver" meaning there is / there are and "fazer" for elapsed time are impersonal: they have no subject, so they stay in the third person singular whatever follows. The auxiliary in front of them stays singular too: "Deve haver soluções", "Vai fazer dez anos". "Existir", "acontecer" and "ocorrer" do have a subject and agree with it: "Existem soluções".`,
          `In speech, "ter" usually replaces existential "haver" ("Tinha muitas pessoas"). It is singular too, and informal.`,
        ],
        table: {
          headers: ["Wrong", "Right", "Note"],
          rows: [
            ["Haviam muitas pessoas.", "Havia muitas pessoas.", "impersonal haver"],
            ["Houveram problemas.", "Houve problemas.", "impersonal haver"],
            ["Devem haver soluções.", "Deve haver soluções.", "auxiliary stays singular"],
            ["Fazem dois anos que moro aqui.", "Faz dois anos que moro aqui.", "elapsed time"],
            ["Vão fazer dez anos.", "Vai fazer dez anos.", "auxiliary stays singular"],
            ["Existe muitas dúvidas.", "Existem muitas dúvidas.", "existir agrees"],
          ],
        },
        examples: [
          { pt: "Houve muitas reclamações sobre o novo sistema.", en: "There were many complaints about the new system." },
          { pt: "Faz três meses que não vejo meus pais.", en: "I haven't seen my parents for three months." },
          { pt: "Pode haver atrasos por causa da chuva.", en: "There may be delays because of the rain." },
        ],
      },
      {
        heading: `Tricky subjects: collectives, partitives, percentages, "se"`,
        body: [
          `A collective noun on its own takes a singular verb ("A turma chegou"). A partitive followed by a plural ("a maioria dos alunos", "grande parte dos eleitores", "um grupo de turistas") allows both: singular agreeing with the head, plural agreeing with the meaning. Percentages agree with the number or with the noun after "de": "30% dos eleitores votaram", "1% da turma faltou". "Mais de um" takes the singular ("Mais de um aluno faltou"), "menos de dois" the plural.`,
          `"Um dos que" is best followed by the plural: "Ela é uma das que mais trabalham" (the singular is accepted). With the passive "se", the verb agrees with the thing: "Vendem-se casas", "Alugam-se salas". With a preposition, "se" is indeterminate and the verb stays singular: "Precisa-se de vendedores". And a subject after the verb still controls agreement: "Chegaram as encomendas".`,
        ],
        table: {
          headers: ["Subject", "Agreement", "Example"],
          rows: [
            ["collective alone", "singular", "O público aplaudiu."],
            ["a maioria de + plural", "singular or plural", "A maioria dos alunos aprovou / aprovaram."],
            ["percentage", "number or noun", "40% dos entrevistados disseram... / 1% da população votou."],
            ["mais de um", "singular", "Mais de um candidato desistiu."],
            ["um dos que", "plural (preferred)", "É um dos que mais reclamam."],
            ["passive se", "agrees with the thing", "Consertam-se celulares."],
            ["se + preposition", "singular", "Trata-se de casos raros."],
          ],
        },
        examples: [
          { pt: "A maioria dos moradores votou contra a obra.", en: "Most residents voted against the building work." },
          { pt: "Alugam-se quartos para estudantes.", en: "Rooms to let for students." },
          { pt: "Mais de um funcionário reclamou do horário.", en: "More than one employee complained about the hours." },
        ],
      },
      {
        heading: `Nominal agreement: "meio", "bastante", "anexo", "é proibido"`,
        body: [
          `Several words agree when they are adjectives and don't when they are adverbs. "Meio" (half) agrees ("meia hora", "meio-dia e meia"), but as an adverb (a bit) it's invariable ("meio cansada"). "Bastante" agrees as an adjective (enough, many: "bastantes livros" in the norm) and is invariable as an adverb ("bastante caras"). "Caro" and "barato" after "custar" are adverbs: "As frutas custam caro".`,
          `"Anexo", "incluso", "obrigado", "mesmo" and "próprio" agree with the noun ("Seguem anexas as planilhas", "Elas mesmas fizeram"); "em anexo" is invariable. "É proibido entrada" (no article: invariable) vs "É proibida a entrada" (article: agreement); likewise "Água é bom" vs "A água é boa". "Menos" never changes: "menos pessoas", never "menas".`,
        ],
        table: {
          headers: ["Word", "Agrees (adjective)", "Invariable (adverb / fixed)"],
          rows: [
            ["meio", "meia garrafa, meio-dia e meia", "Ela está meio nervosa."],
            ["bastante", "Há bastantes motivos.", "As provas foram bastante difíceis."],
            ["anexo", "Segue anexa a fatura.", "Segue em anexo a fatura."],
            ["proibido", "É proibida a entrada.", "É proibido entrada."],
            ["só", "Elas ficaram sós. (alone)", "Só elas ficaram. (only); a sós"],
            ["menos", "never agrees", "menos dúvidas, menos vezes"],
          ],
        },
        examples: [
          { pt: "Seguem anexos os documentos solicitados.", en: "Please find the requested documents attached." },
          { pt: "Ela ficou meio decepcionada com o resultado.", en: "She was a bit disappointed with the result." },
          { pt: "É necessária a apresentação de um documento com foto.", en: "Photo ID must be presented." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Fazem cinco anos que trabalho aqui.",
        right: "Faz cinco anos que trabalho aqui.",
        why: `"Fazer" for elapsed time is impersonal and always singular.`,
      },
      {
        wrong: "Haviam poucas pessoas na reunião.",
        right: "Havia poucas pessoas na reunião.",
        why: `Existential "haver" has no subject; "pessoas" is its object.`,
      },
      {
        wrong: "Vende-se apartamentos.",
        right: "Vendem-se apartamentos.",
        why: `With a direct object the "se" is passive: "apartamentos" are sold, so the verb is plural. Very common on signs, still an error in the norm.`,
      },
      {
        wrong: "Segue anexo as planilhas.",
        right: "Seguem anexas as planilhas.",
        why: `Both the verb and "anexo" agree with "as planilhas". Or use the invariable "em anexo": "Seguem em anexo as planilhas."`,
      },
      {
        wrong: "Tinha menas pessoas do que eu esperava.",
        right: "Tinha menos pessoas do que eu esperava.",
        why: `"Menos" is invariable. "Menas" is strongly stigmatised.`,
      },
      {
        wrong: "Mais de um aluno faltaram.",
        right: "Mais de um aluno faltou.",
        why: `"Mais de um" agrees with "um": singular.`,
      },
    ],
    faqs: [
      {
        q: `"A maioria chegou" or "a maioria chegaram"?`,
        a: `With "a maioria" alone, singular: "A maioria chegou". With "a maioria dos" + plural, both are correct; the singular is more traditional, the plural stresses the individuals.`,
      },
      {
        q: `Is "tem" for "há" acceptable?`,
        a: `In speech and informal writing, yes, and it's almost universal. In formal writing use "há" (and keep it singular).`,
      },
      {
        q: `"Obrigado" or "obrigada"?`,
        a: `It agrees with the speaker: a woman says "obrigada", a group of women "obrigadas", a man "obrigado". It doesn't agree with the person thanked.`,
      },
    ],
    related: ["se-passive-and-impersonal-se", "register-and-the-written-norm", "word-order-and-emphasis", "regencia-traps", "crase-traps"],
    lessons: [
      "c2-social-variation",
      "c2-agreement-traps",
      "c2-contrast-near-native",
      "c2-editing-practice",
      "c2-error-hunt-c2",
      "c2-spiral-precision",
      "c2-agreement-traps-unit-review",
      "c2-precision-extra-1",
      "c2-review-precision",
      "c2-error-hunt-mastery",
    ],
  },
  {
    slug: "regencia-traps",
    title: "Regência and Collocations: Assistir a, Preferir... a, Implicar, Visar",
    description:
      "Verb complements at near-native precision: verbs whose meaning changes with the preposition (\"assistir\", \"aspirar\", \"visar\", \"proceder\", \"implicar\"), the norm vs speech (\"ir ao\" vs \"ir no\", \"namorar\" without \"com\", \"preferir... a\"), prepositions in relative clauses, and the verb-noun collocations English speakers get wrong.",
    level: "C2",
    intro: [
      `Regência is the system of which preposition, if any, a verb or noun takes. Many verbs take different prepositions in the written norm than in speech ("assistir ao jogo" vs "assistir o jogo"), and several change meaning with the preposition ("aspirar o pó" is to vacuum, "aspirar a um cargo" is to aspire to a post).`,
      `Collocations are the other half of precision: Portuguese "toma" decisions, "presta" attention, "corre" risks and "faz" questions. English speakers who make a decision in Portuguese ("fazer uma decisão") are understood, but they sound foreign.`,
    ],
    sections: [
      {
        heading: `Verbs that change meaning with their complement`,
        body: [
          `Each of these verbs has two or more constructions with different meanings. The norm forms are expected in essays, exams and professional texts; the spoken alternatives are noted where they are widespread.`,
        ],
        table: {
          headers: ["Verb", "Construction", "Meaning", "Example"],
          rows: [
            ["assistir", "assistir a algo", "to watch, attend", "Assisti ao jogo. (speech: assisti o jogo)"],
            ["assistir", "assistir alguém", "to assist, care for", "O médico assistiu o paciente."],
            ["aspirar", "aspirar a algo", "to aspire to", "Ela aspira a uma vaga no STF."],
            ["aspirar", "aspirar algo", "to inhale, vacuum", "Aspirei o tapete."],
            ["visar", "visar a algo (or visar algo)", "to aim at", "O projeto visa à redução de custos."],
            ["visar", "visar algo", "to stamp, sign", "O cônsul visou o passaporte."],
            ["proceder", "proceder a algo", "to carry out", "Procedeu-se à leitura da ata."],
            ["proceder", "proceder de", "to come from", "O voo procede de Lisboa."],
            ["proceder", "(no complement)", "to be valid", "O argumento não procede."],
            ["implicar", "implicar algo", "to entail", "A mudança implica custos."],
            ["implicar", "implicar com alguém", "to pick on", "Ele implica com o irmão."],
          ],
        },
        examples: [
          { pt: "Milhões de pessoas assistiram à final pela televisão.", en: "Millions of people watched the final on television." },
          { pt: "A reforma visa a ampliar o acesso ao ensino superior.", en: "The reform aims to widen access to higher education." },
          { pt: "Em seguida, procedeu-se à votação.", en: "The vote was then held." },
        ],
      },
      {
        heading: `The norm vs speech`,
        body: [
          `A second group of verbs has a norm construction and a spoken one that everyone uses. Write the norm in formal texts. Among the most important: "ir a" and "chegar a" for destinations ("ir no" and "chegar em" are spoken), "preferir algo a algo" (never "preferir mais... do que"), "namorar alguém" (no "com" in the norm), "obedecer a", "responder a", "simpatizar com" (not reflexive), and "esquecer algo" / "esquecer-se de algo".`,
        ],
        table: {
          headers: ["Norm", "Speech", "English"],
          rows: [
            ["Fui ao médico.", "Fui no médico.", "I went to the doctor's."],
            ["Cheguei a Salvador ontem.", "Cheguei em Salvador ontem.", "I arrived in Salvador yesterday."],
            ["Prefiro praia a montanha.", "Prefiro mais praia do que montanha.", "I prefer the beach to the mountains."],
            ["Ela namora o Rafael.", "Ela namora com o Rafael.", "She's going out with Rafael."],
            ["Obedeça aos sinais.", "Obedeça os sinais.", "Obey the signs."],
            ["Respondi ao e-mail.", "Respondi o e-mail.", "I replied to the email."],
            ["Simpatizei com ela.", "Me simpatizei com ela.", "I took to her."],
            ["Esqueci o nome. / Esqueci-me do nome.", "Esqueci do nome.", "I forgot the name."],
          ],
        },
        examples: [
          { pt: "Prefiro trabalhar de casa a enfrentar o trânsito todo dia.", en: "I'd rather work from home than face the traffic every day." },
          { pt: "Os motoristas devem obedecer à sinalização.", en: "Drivers must obey the road signs." },
        ],
      },
      {
        heading: `Prepositions in relative clauses`,
        body: [
          `When the verb in a relative clause takes a preposition, the norm puts that preposition before the relative pronoun: "o filme a que assisti", "o livro de que preciso", "a vaga a que me candidatei", "a pessoa com quem falei". Spoken Portuguese simply drops it ("o filme que eu assisti", "o livro que eu preciso"), and this is one of the clearest markers of written vs spoken style.`,
        ],
        examples: [
          { pt: "Este é o cargo a que ela sempre aspirou.", en: "This is the post she always aspired to." },
          { pt: "Ainda não recebi os documentos de que preciso.", en: "I still haven't received the documents I need." },
          { pt: "A empresa com que fechamos o contrato é de Curitiba.", en: "The company we signed the contract with is from Curitiba." },
        ],
      },
      {
        heading: `Collocations: which verb goes with which noun`,
        body: [
          `Many nouns choose their verb. These are learned, not deduced; the English verb is often a poor guide.`,
        ],
        table: {
          headers: ["Portuguese", "English", "Not"],
          rows: [
            ["tomar uma decisão", "make a decision", "fazer uma decisão"],
            ["fazer uma pergunta", "ask a question", "perguntar uma pergunta"],
            ["prestar atenção", "pay attention", "pagar atenção"],
            ["correr um risco", "run / take a risk", "tomar um risco"],
            ["fazer uma visita", "pay a visit", "pagar uma visita"],
            ["tirar uma foto", "take a photo", "tomar uma foto"],
            ["tirar férias", "take a holiday", "tomar férias"],
            ["cometer um erro", "make a mistake", "fazer um erro"],
            ["dar um passeio", "take a walk", "tomar um passeio"],
          ],
        },
        examples: [
          { pt: "Precisamos tomar uma decisão até sexta.", en: "We need to make a decision by Friday." },
          { pt: "Quem não arrisca corre o risco de ficar parado.", en: "Whoever doesn't take chances runs the risk of standing still." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "A medida implica em demissões.",
        right: "A medida implica demissões.",
        why: `In the sense of to entail, "implicar" takes a direct object. "Implicar em" is very common but corrected in formal texts.`,
      },
      {
        wrong: "Prefiro mais ler do que ver televisão.",
        right: "Prefiro ler a ver televisão.",
        why: `"Preferir" already contains the comparison: "preferir algo a algo", without "mais" or "do que".`,
      },
      {
        wrong: "O filme que assisti ontem ganhou o Oscar.",
        right: "O filme a que assisti ontem ganhou o Oscar.",
        why: `"Assistir a" keeps its preposition in a relative clause in the written norm.`,
      },
      {
        wrong: "Eu me simpatizei com a nova chefe.",
        right: "Eu simpatizei com a nova chefe.",
        why: `"Simpatizar" isn't reflexive.`,
      },
      {
        wrong: "Ele fez uma decisão importante.",
        right: "Ele tomou uma decisão importante.",
        why: `Decisions are "tomadas" in Portuguese.`,
      },
      {
        wrong: "Ela namora com um colega de trabalho.",
        right: "Ela namora um colega de trabalho.",
        why: `In the norm, "namorar" takes a direct object. "Namorar com" is widespread in speech.`,
      },
    ],
    faqs: [
      {
        q: `Is "assistir o jogo" wrong?`,
        a: `In speech it's universal. In the written norm, exams and professional writing, "assistir a" is expected. Some modern grammars accept the direct object, but a C2 writer should know the norm and use it in formal texts.`,
      },
      {
        q: `"Chegar em casa" or "chegar a casa"?`,
        a: `"Chegar em casa" is what everyone says and writes informally. The traditional norm prefers "chegar a casa" (no article for one's own home). In formal texts, "chegar a" + place is safe: "chegou ao aeroporto".`,
      },
      {
        q: `"Visar a" or "visar"?`,
        a: `Meaning to aim at, traditional grammar requires "a" ("visa ao lucro"); modern usage and many grammars also accept the direct object ("visa o lucro"). With an infinitive, both are common: "visa (a) reduzir".`,
      },
    ],
    related: ["crase-traps", "agreement-traps", "false-friends-and-translation", "relative-pronouns-in-depth", "regencia-and-crase"],
    lessons: [
      "c2-regencia-traps",
      "c2-collocations",
      "c2-contrast-near-native",
      "c2-editing-practice",
      "c2-error-hunt-c2",
      "c2-precision-extra-2",
      "c2-review-precision",
    ],
  },
  {
    slug: "crase-traps",
    title: "Crase Traps: À Medida Que, Àquele, Às 8h, A Distância",
    description:
      "The crase at near-native precision: \"àquele\", \"à qual\" and \"à que\", times and the \"das... às\" parallel, places with and without the article, \"casa\" and \"distância\", \"à medida que\" vs \"na medida em que\", optional crase, fixed expressions, and the places it never goes.",
    level: "C2",
    intro: [
      `The crase (à) marks the fusion of the preposition "a" with the article "a" or with pronouns that begin with "a" ("aquele", "aquilo", "a qual"). The basic rule is simple: if the word requires "a" and the next word takes the feminine article, write "à". The traps are in the details, and even Brazilian journalists argue about them.`,
      `This guide assumes you know the basic swap test (replace the feminine noun with a masculine one: if you get "ao", write "à") and covers the cases that still cause errors at the Mastery level.`,
    ],
    sections: [
      {
        heading: `Pronouns: "àquele", "àquilo", "à qual", "à que"`,
        body: [
          `When a verb or noun requiring "a" meets "aquele", "aquela", "aqueles", "aquelas" or "aquilo", the two a's fuse: "Refiro-me àquele livro", "Não dei importância àquilo". The same happens with the relative "a qual" ("a reunião à qual compareci") and with the demonstrative "a" before "que" ("Essa blusa é igual à que comprei", meaning igual à blusa que comprei).`,
          `Test with a masculine: "Refiro-me ao livro", "o encontro ao qual compareci". If "ao" appears, the feminine is "à".`,
        ],
        examples: [
          { pt: "Ela não deu atenção àquilo que eu disse.", en: "She paid no attention to what I said." },
          { pt: "A conferência à qual assisti foi excelente.", en: "The lecture I attended was excellent." },
          { pt: "Sua opinião é semelhante à que o diretor defendeu.", en: "Your opinion is similar to the one the director defended." },
        ],
      },
      {
        heading: `Times, places, "casa" and "distância"`,
        body: [
          `Clock times take the crase because they imply "as horas": "às 8h", "à uma hora", "das 8h às 18h". The parallel rule matters: "das... às" (with articles) or "de... a" (without), never mixed. "Daqui a duas horas" has no crase: it's future time from now (and "há duas horas" is past).`,
          `Places: use the "voltar de / da" test. "Volto da Bahia" so "Vou à Bahia"; "Volto de Salvador" so "Vou a Salvador". A place name that takes no article gets one when modified: "Vou à Roma dos césares". "Casa" meaning one's own home has no article ("Voltei a casa", in the traditional norm); specified, it does ("Fui à casa da minha mãe"). "Distância" has no crase unless the distance is specified: "ensino a distância", "à distância de cem metros".`,
        ],
        table: {
          headers: ["Case", "Crase", "No crase"],
          rows: [
            ["hours", "às 8h, à uma, das 8h às 18h", "de 8h a 18h, daqui a uma hora"],
            ["places", "Vou à Bahia. (volto da)", "Vou a Salvador. (volto de)"],
            ["casa", "Fui à casa da Ana.", "Cheguei a casa tarde."],
            ["distância", "à distância de 5 km", "educação a distância"],
            ["terra (dry land)", "Voltou à terra natal.", "Os marinheiros desceram a terra."],
          ],
        },
        examples: [
          { pt: "A loja funciona das 9h às 21h.", en: "The shop is open from 9 a.m. to 9 p.m." },
          { pt: "O resultado sai daqui a duas semanas.", en: "The result comes out in two weeks' time." },
          { pt: "Ela fez a graduação a distância.", en: "She did her degree by distance learning." },
        ],
      },
      {
        heading: `"À medida que" vs "na medida em que", and fixed expressions`,
        body: [
          `"À medida que" means as, proportionally ("À medida que o tempo passa, a dor diminui"). "Na medida em que" means insofar as, since ("O projeto é importante na medida em que gera empregos"). Mixed forms ("à medida em que", "na medida que") are errors.`,
          `Many feminine adverbial expressions take the crase: "à noite", "às vezes", "à vista", "às pressas", "à toa", "à beça", "à espera de", "à procura de", "à custa de", "à mercê de", "à base de", "à moda de" (also implied: "bife à milanesa", "um gol à Pelé"). Masculine and verbal expressions don't: "a pé", "a prazo", "a partir de", "a respeito de", "a fim de".`,
        ],
        examples: [
          { pt: "À medida que a cidade cresce, o trânsito piora.", en: "As the city grows, the traffic gets worse." },
          { pt: "A proposta é justa na medida em que beneficia os mais pobres.", en: "The proposal is fair insofar as it benefits the poorest." },
          { pt: "Comprei à vista e ganhei desconto.", en: "I paid in full upfront and got a discount." },
        ],
      },
      {
        heading: `Optional crase and where it never goes`,
        body: [
          `The crase is optional before feminine possessives ("Entreguei o livro a / à minha irmã"), before women's first names (depending on whether you use the article), and after "até" ("Fui até a / à praia"; in Brazil "até a" is far more frequent).`,
          `It is never used before masculine words, verbs, indefinite articles ("a uma"), most pronouns ("a ela", "a você", "a esta", "a Vossa Senhoria", but "à senhora"), plural nouns after singular "a" ("a pessoas"), or between repeated words ("cara a cara", "gota a gota", "frente a frente").`,
        ],
        examples: [
          { pt: "Ele entregou o relatório a uma colega.", en: "He gave the report to a colleague." },
          { pt: "Começou a chover logo depois.", en: "It started raining right after." },
          { pt: "Encaminho a Vossa Senhoria o documento solicitado.", en: "I am forwarding you the requested document." },
          { pt: "Os dois candidatos ficaram frente a frente no debate.", en: "The two candidates came face to face in the debate." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "O desconto vale à partir de segunda.",
        right: "O desconto vale a partir de segunda.",
        why: `"Partir" is a verb; there's no article before a verb.`,
      },
      {
        wrong: "À medida em que estudava, aprendia mais.",
        right: "À medida que estudava, aprendia mais.",
        why: `The forms are "à medida que" (as) and "na medida em que" (insofar as). Don't cross them.`,
      },
      {
        wrong: "Atendemos de 8h às 18h.",
        right: "Atendemos das 8h às 18h.",
        why: `Keep the parallel: "das... às" or "de... a".`,
      },
      {
        wrong: "Daqui à uma semana eu volto.",
        right: "Daqui a uma semana eu volto.",
        why: `"Uma" here is the indefinite article (a week), not a clock time, and "daqui a" has no article.`,
      },
      {
        wrong: "Vou à Curitiba na sexta.",
        right: "Vou a Curitiba na sexta.",
        why: `"Volto de Curitiba", without an article, so there's no crase.`,
      },
      {
        wrong: "Refiro-me aquele relatório de março.",
        right: "Refiro-me àquele relatório de março.",
        why: `"Referir-se a" + "aquele" fuses into "àquele".`,
      },
    ],
    faqs: [
      {
        q: `Is it "ensino a distância" or "à distância"?`,
        a: `The Ministry of Education and most grammarians write "educação a distância" (unspecified distance, no crase). "À distância" is widespread and some authors defend it for clarity, but "a distância" is the safer choice in formal writing.`,
      },
      {
        q: `"Às vezes" or "as vezes"?`,
        a: `As an adverb (sometimes), always "às vezes". Without the crase it's an article + noun ("Contei as vezes que ele ligou").`,
      },
      {
        q: `Why does "à moda" disappear in "bife à milanesa"?`,
        a: `It doesn't disappear: it's understood. "À milanesa" means "à moda milanesa", which is why the crase stays even before a masculine idea, as in "um gol à Pelé".`,
      },
    ],
    related: ["regencia-traps", "spelling-pairs-and-homophones", "agreement-traps", "punctuation-norma-culta", "regencia-and-crase"],
    lessons: [
      "c2-crase-traps",
      "c2-contrast-near-native",
      "c2-error-hunt-c2",
      "c2-mission-proofread",
      "c2-spiral-precision",
      "c2-review-precision",
      "c2-error-hunt-mastery",
    ],
  },
  {
    slug: "punctuation-norma-culta",
    title: "Punctuation in the Norma Culta: The Comma, the Semicolon and the Travessão",
    description:
      "Portuguese punctuation as Brazilian editors apply it: the comma rules that differ from English intuition (never between subject and verb, always with the vocative, restrictive vs explanatory clauses, displaced adverbials and connectors), the semicolon, colon and travessão, and the conventions for dates, times and numbers.",
    level: "C2",
    intro: [
      `Portuguese punctuation is more syntactic than English: the comma follows the structure of the sentence, not your breathing. The single most frequent error in Brazilian school essays is a comma between a long subject and its verb, because that's where the speaker pauses.`,
      `At the Mastery level, punctuation is part of style and precision. The difference between "Os alunos que estudaram passaram" and "Os alunos, que estudaram, passaram" is a difference in meaning, and editors and examiners notice it.`,
    ],
    sections: [
      {
        heading: `The comma: the core rules`,
        body: [
          `Never separate the subject from its verb, or the verb from its object, however long they are. Always set off the vocative ("Ana, venha cá"), explanatory appositions ("Machado de Assis, fundador da ABL, nasceu no Rio") and explanatory relative clauses. Set off adverbials moved to the front (optional when short) and connectors moved inside the clause ("O plano, contudo, falhou").`,
          `Before "e", normally no comma, except when the subjects differ and confusion is possible, or in a deliberate repetition (polysyndeton). Before "mas", always a comma. A comma also marks an omitted verb (zeugma): "Eu prefiro café; ela, chá."`,
        ],
        table: {
          headers: ["Rule", "Correct", "Wrong"],
          rows: [
            ["no comma subject / verb", "Os alunos que chegaram atrasados perderam a prova.", "Os alunos que chegaram atrasados, perderam a prova."],
            ["vocative", "Obrigada, João.", "Obrigada João."],
            ["explanatory apposition", "Brasília, a capital, foi inaugurada em 1960.", "Brasília a capital foi inaugurada em 1960."],
            ["displaced connector", "O resultado, porém, foi positivo.", "O resultado porém foi positivo."],
            ["before mas", "Tentei, mas não consegui.", "Tentei mas não consegui."],
            ["omitted verb", "Ele mora em Recife; a irmã, em Natal.", "Ele mora em Recife; a irmã em Natal."],
          ],
        },
        examples: [
          { pt: "No ano passado, a empresa abriu duas filiais.", en: "Last year, the company opened two branches." },
          { pt: "Senhoras e senhores, sejam bem-vindos.", en: "Ladies and gentlemen, welcome." },
          { pt: "A reforma, que foi aprovada ontem, entra em vigor em janeiro.", en: "The reform, which was approved yesterday, comes into force in January." },
        ],
      },
      {
        heading: `Restrictive vs explanatory clauses`,
        body: [
          `A restrictive relative clause (oração adjetiva restritiva) identifies which ones and takes no commas. An explanatory one (explicativa) adds information about all of them and goes between commas. English makes the same distinction (that vs which), but English speakers often ignore it in Portuguese.`,
        ],
        table: {
          headers: ["Sentence", "Meaning"],
          rows: [
            ["Os alunos que estudaram passaram.", "only those who studied passed"],
            ["Os alunos, que estudaram, passaram.", "all the students studied, and they passed"],
            ["Meu irmão que mora em Manaus é médico.", "I have several brothers; the one in Manaus is a doctor"],
            ["Meu irmão, que mora em Manaus, é médico.", "I have one brother; he lives in Manaus"],
          ],
        },
        examples: [
          { pt: "Os funcionários que trabalharam no feriado vão receber em dobro.", en: "The employees who worked on the holiday will be paid double." },
          { pt: "Os funcionários, que trabalharam no feriado, vão receber em dobro.", en: "The employees, who all worked on the holiday, will be paid double." },
        ],
      },
      {
        heading: `Semicolon, colon, travessão and conventions`,
        body: [
          `The semicolon (ponto e vírgula) separates long coordinated clauses, especially when they contain commas, and items in legal lists. The colon (dois-pontos) introduces an explanation, a list or a quotation. Brazilian fiction marks dialogue with the travessão (an em dash), not quotation marks; it also sets off a parenthetical comment more strongly than commas.`,
          `Conventions: months are lowercase ("17 de outubro de 2026"), a letter's date line reads "São Paulo, 17 de outubro de 2026.", times are written "8h", "8h30" or "8h30min", the decimal separator is a comma ("3,5") and thousands take a point ("1.500"), money is "R$ 1.250,90".`,
        ],
        examples: [
          { pt: "— Você vem amanhã? — perguntou a Beatriz.", en: "'Are you coming tomorrow?' asked Beatriz." },
          { pt: "Faltava uma coisa: coragem.", en: "One thing was missing: courage." },
          { pt: "O ingresso custa R$ 45,50 e a sessão começa às 20h30.", en: "The ticket costs R$45.50 and the showing starts at 8.30 p.m." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Todos os candidatos que fizeram a inscrição até sexta, receberão um e-mail.",
        right: "Todos os candidatos que fizeram a inscrição até sexta receberão um e-mail.",
        why: `However long the subject, no comma between it and the verb.`,
      },
      {
        wrong: "Bom dia professora, tudo bem?",
        right: "Bom dia, professora, tudo bem?",
        why: `The vocative is always set off by commas.`,
      },
      {
        wrong: "A proposta contudo não foi aceita.",
        right: "A proposta, contudo, não foi aceita.",
        why: `A connector moved inside the clause goes between commas.`,
      },
      {
        wrong: "A reunião será em 5 de Novembro, às 14:30h.",
        right: "A reunião será em 5 de novembro, às 14h30.",
        why: `Months are lowercase, and Brazilian convention writes the time as "14h30".`,
      },
      {
        wrong: "O valor é de R$ 1,500.00.",
        right: "O valor é de R$ 1.500,00.",
        why: `Portuguese uses the point for thousands and the comma for decimals, the opposite of English.`,
      },
    ],
    faqs: [
      {
        q: `Is there a comma before "e"?`,
        a: `Usually not. Use it when the clauses have different subjects and the sentence could be misread ("Ele saiu, e a mãe ficou preocupada"), with "e" meaning but, or in a deliberate series ("E ri, e chora, e grita").`,
      },
      {
        q: `Comma before "que"?`,
        a: `Only when the "que" clause is explanatory (between commas) or when something else requires it. Never before a "que" introducing an object clause: "Ele disse que vinha", not "Ele disse, que vinha".`,
      },
      {
        q: `Do Brazilians use quotation marks for dialogue?`,
        a: `In fiction, the travessão is standard. Quotation marks (aspas) are for quoting someone in journalism and essays, for titles of short works, and for irony.`,
      },
    ],
    related: ["spelling-pairs-and-homophones", "crase-traps", "argumentative-connectors", "style-and-register"],
    lessons: [
      "c2-ellipsis-pleonasm",
      "c2-editing-practice",
      "c2-error-hunt-c2",
      "c2-mission-proofread",
      "c2-spiral-precision",
      "c2-review-precision",
      "c2-error-hunt-mastery",
    ],
  },
  {
    slug: "infinitive-or-subjunctive",
    title: "Infinitive or Subjunctive? The Finest Choices",
    description:
      "Choosing between \"para que façamos\" and \"para fazermos\", \"é importante que vocês cheguem\" and \"é importante vocês chegarem\"; when the personal infinitive must, may or must not inflect; causative and perception verbs (\"mandei-os sair\", \"vi as crianças brincarem\"); and the subject of the infinitive in the written norm.",
    level: "C2",
    intro: [
      `Portuguese often lets you choose between a conjugated subjunctive clause and an infinitive, personal or not: "Saí cedo para que ninguém me visse" or "Saí cedo para ninguém me ver". Both are correct; they differ in register, rhythm and emphasis. At the Mastery level the question is no longer whether you can form both, but which one a careful Brazilian writer would choose.`,
      `The personal infinitive itself has fine rules: it must not inflect after auxiliaries ("querem sair", not "querem saírem"), it may inflect when the subject is the same, and it must when the subject is different and otherwise invisible. This guide sets out those rules and the near-native errors around them.`,
    ],
    sections: [
      {
        heading: `Conjunction + subjunctive or preposition + infinitive`,
        body: [
          `Most subordinating conjunctions have a prepositional twin that takes the infinitive. With the same subject in both clauses, the infinitive is required: "Estudo para passar", never "para que eu passe". With different subjects, both are possible; the subjunctive sounds more formal and more deliberate, the personal infinitive lighter and very common in speech.`,
          `Watch "depois que": it takes the indicative for past and habitual facts ("Depois que ele chegou, jantamos") and the future subjunctive for the future ("Depois que ele chegar, jantamos"), never the present subjunctive.`,
        ],
        table: {
          headers: ["Conjunction + subjunctive", "Preposition + infinitive"],
          rows: [
            ["para que vocês entendam", "para vocês entenderem"],
            ["antes que ele saia", "antes de ele sair"],
            ["sem que ninguém percebesse", "sem ninguém perceber"],
            ["até que todos cheguem", "até todos chegarem"],
            ["a fim de que os alunos participem", "a fim de os alunos participarem"],
            ["embora estivesse cansada", "apesar de estar cansada"],
            ["depois que eles saíram (indicative)", "depois de eles saírem"],
          ],
        },
        examples: [
          { pt: "Falei devagar para que todos me entendessem.", en: "I spoke slowly so that everyone would understand me." },
          { pt: "Falei devagar para todos me entenderem.", en: "I spoke slowly so everyone would understand me." },
          { pt: "Ela saiu sem que ninguém notasse.", en: "She left without anyone noticing." },
        ],
      },
      {
        heading: `Impersonal expressions and verbs of wishing`,
        body: [
          `After "é importante", "é preciso", "é necessário", "é bom" and similar: with no specific subject, use the plain infinitive ("É importante chegar cedo"). With a specific subject, use "que" + subjunctive ("É importante que vocês cheguem cedo") or the personal infinitive ("É importante vocês chegarem cedo"). The subjunctive is more formal and insistent.`,
          `Verbs of wishing and ordering ("querer", "desejar", "pedir", "exigir") take "que" + subjunctive for a different subject and the infinitive for the same subject: "Quero sair" but "Quero que você saia". "Quero eu sair" is not Portuguese. Verbs of permitting and ordering ("deixar", "mandar", "proibir") also allow the infinitive with a different subject: "Ele proibiu os filhos de sair" or "proibiu que os filhos saíssem".`,
        ],
        examples: [
          { pt: "É fundamental que o governo apresente um plano.", en: "It is essential that the government present a plan." },
          { pt: "É melhor a gente sair agora.", en: "We'd better leave now." },
          { pt: "O médico proibiu o paciente de fumar.", en: "The doctor forbade the patient to smoke." },
        ],
      },
      {
        heading: `To inflect or not to inflect`,
        body: [
          `Never inflect an infinitive that forms a verbal phrase with an auxiliary or modal ("querer", "poder", "dever", "ir", "começar a", "acabar de"): "Eles querem sair", "Podemos começar", "Vamos fazer". Inflect when the infinitive has its own subject that is different from the main verb's, or when it would otherwise be ambiguous: "É hora de vocês decidirem", "Pedi para eles esperarem".`,
          `When the subject is the same and the infinitive follows a preposition, inflection is optional and a matter of rhythm and clarity: "Saímos cedo para chegar / chegarmos a tempo." Inflection is more likely when the infinitive comes first or is far from the main verb: "Para chegarmos a tempo, saímos cedo."`,
          `With "mandar", "deixar", "fazer", "ver" and "ouvir": when the subject of the infinitive is a clitic pronoun, the infinitive doesn't inflect ("Mandei-os sair", "Deixe-nos entrar"); with a noun, both are accepted ("Mandei os alunos sair / saírem", "Vi as crianças brincar / brincarem", and "brincando"). Speech says "Deixa eu ver", the norm "Deixe-me ver".`,
        ],
        table: {
          headers: ["Case", "Inflect?", "Example"],
          rows: [
            ["after auxiliary or modal", "never", "Eles podem sair. / Vamos começar."],
            ["own, different subject", "yes", "Está na hora de vocês saírem."],
            ["same subject after preposition", "optional", "Estudamos muito para passar / passarmos."],
            ["infinitive first, same subject", "usually", "Ao entrarmos, vimos a bagunça."],
            ["causative + clitic", "no", "Mandei-os entrar."],
            ["causative + noun", "optional", "Deixei os meninos jogar / jogarem."],
          ],
        },
        examples: [
          { pt: "Os convidados começaram a chegar às oito.", en: "The guests started arriving at eight." },
          { pt: "Pedi para os vizinhos baixarem o som.", en: "I asked the neighbours to turn the music down." },
          { pt: "Deixe-me explicar melhor.", en: "Let me explain more clearly." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Eles querem saírem mais cedo.",
        right: "Eles querem sair mais cedo.",
        why: `After a modal or auxiliary the infinitive never inflects: the verbal phrase already shows the subject.`,
      },
      {
        wrong: "Nós podemos fazermos isso amanhã.",
        right: "Nós podemos fazer isso amanhã.",
        why: `Same rule: "poder" + plain infinitive.`,
      },
      {
        wrong: "Quero que eu termine o relatório hoje.",
        right: "Quero terminar o relatório hoje.",
        why: `Same subject: infinitive. "Que" + subjunctive is for a different subject.`,
      },
      {
        wrong: "Depois que ele chegue, a gente conversa.",
        right: "Depois que ele chegar, a gente conversa.",
        why: `"Depois que" takes the future subjunctive for the future, the indicative for the past. The present subjunctive is wrong here.`,
      },
      {
        wrong: "Mandei-os saírem da sala.",
        right: "Mandei-os sair da sala.",
        why: `With a clitic subject ("os"), the infinitive of a causative verb stays uninflected.`,
      },
      {
        wrong: "Está na hora da gente decidir.",
        right: "Está na hora de decidirmos.",
        why: `In formal writing the subject of an infinitive doesn't contract with "de", and "a gente" is informal. The personal infinitive does the job neatly.`,
      },
    ],
    faqs: [
      {
        q: `Is "para mim fazer" ever correct?`,
        a: `No. When the pronoun is the subject of the infinitive it must be "eu": "para eu fazer". "Para mim" is correct when "mim" is the object of "para": "Isso é difícil para mim", "Para mim, fazer isso é difícil".`,
      },
      {
        q: `Which sounds more natural: "para que façamos" or "para fazermos"?`,
        a: `In conversation and most writing, "para fazermos" (or "pra gente fazer" informally). "Para que façamos" sounds deliberate and formal, which suits speeches, legal texts and essays.`,
      },
      {
        q: `Does European Portuguese differ here?`,
        a: `The rules for the personal infinitive are largely shared. The visible difference is elsewhere: European Portuguese uses "a" + infinitive where Brazil uses the gerund ("estar a fazer", "vi as crianças a brincar"). This guide describes Brazilian usage.`,
      },
    ],
    related: ["personal-infinitive", "mood-as-meaning", "reduced-clauses", "subjunctive-after-conjunctions", "linguistic-variation"],
    lessons: [
      "c1-reduced-infinitive",
      "c2-contrast-near-native",
      "c2-editing-practice",
      "c2-error-hunt-c2",
      "c2-precision-extra-2",
      "c2-review-precision",
      "c2-transform-mastery",
    ],
  },
];
