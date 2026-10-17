// Synced from cheneygross-afk/lengo:src/lib/exams/pt/celpe-bras-3-coletiva.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { AUDIO_NOTE, VIDEO_NOTE, paras } from "./text";

// Celpe-Bras practice exam 3 (the environment and consumption) -- Parte
// Coletiva. 3 hours, 4 integrated tasks, as in the real exam: Tarefa 1
// from a video (here its soundtrack), Tarefa 2 from a radio recording,
// Tarefas 3 and 4 from reading texts. Every enunciado names the genre, the
// writer's role, the reader and the purpose; each task is marked
// holistically.
export const CELPE_BRAS_3_COLETIVA: ExamPaper = {
  id: "coletiva",
  kind: "writing",
  title: "Parte Coletiva",
  minutes: 180,
  group: 1,
  tasks: [
    {
      title: "Tarefa 1",
      instructions:
        "Você vai assistir duas vezes a uma reportagem sobre uma cooperativa de catadores de materiais recicláveis em Belo Horizonte. Você é professor de uma escola da cidade que acaba de fechar uma parceria com essa cooperativa. Escreva um texto para o blog da escola, dirigido às famílias dos alunos, explicando a importância do trabalho dos catadores, orientando sobre como separar o lixo corretamente e convidando as famílias a participar da iniciativa.",
      instructionsEn: VIDEO_NOTE,
      audio: [
        {
          label: "Vídeo: reportagem sobre uma cooperativa de reciclagem",
          plays: 2,
          lines: [
            {
              voice: "m",
              text: "Todas as manhãs, um caminhão descarrega toneladas de material reciclável no galpão da Cooperativa Recicla Vida, em Belo Horizonte. Ali, sessenta catadores separam papel, papelão, plástico, vidro e metal, que depois são vendidos para a indústria.",
            },
            {
              voice: "f",
              text: "Antes da cooperativa, eu puxava carrinho na rua, sozinha, debaixo de sol e de chuva, e vendia para o atravessador por qualquer preço. Hoje a gente tem galpão, prensa, uniforme e uma renda fixa todo mês. É um trabalho digno.",
            },
            {
              voice: "m",
              text: "A presidente da cooperativa, Rosângela Silva, conta que o maior problema é a qualidade do material que chega. Quase um terço do que é recolhido pela coleta seletiva não pode ser aproveitado.",
            },
            {
              voice: "f",
              text: "O pessoal coloca resto de comida junto com o plástico, embalagem suja de óleo, fralda. Aí estraga o papel, e a gente tem que jogar tudo fora. Se cada família desse uma lavadinha nas embalagens e separasse o lixo seco do molhado, a nossa renda aumentaria muito.",
            },
            {
              voice: "m",
              text: "O Brasil ainda recicla uma parte pequena do lixo que poderia ser reaproveitado, e boa parte desse trabalho é feita por catadores. Além de gerar renda, a reciclagem diminui o volume que vai para os aterros e economiza matéria-prima e energia.",
            },
            {
              voice: "f",
              text: "Muita gente acha que reciclar é só jogar no contêiner certo. Não é. Tem que separar direito e, se possível, procurar uma cooperativa. A gente busca de graça em condomínio, em escola, em empresa. É só ligar.",
            },
            {
              voice: "m",
              text: "A Recicla Vida quer dobrar o número de parceiros até o fim do ano. Hoje, ela atende cerca de quarenta condomínios e doze escolas da capital mineira.",
            },
          ],
        },
      ],
      write: [
        {
          prompt:
            "Você assistiu a uma reportagem sobre uma cooperativa de catadores de materiais recicláveis em Belo Horizonte. Você é professor de uma escola da cidade que acaba de fechar uma parceria com essa cooperativa. Escreva um texto para o blog da escola, dirigido às famílias dos alunos, explicando a importância do trabalho dos catadores, orientando sobre como separar o lixo corretamente e convidando as famílias a participar da iniciativa.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": a school blog post by a teacher, addressed to the pupils' families, that informs them and asks them to take part",
            "Uses the report: what the waste pickers' work means (from working alone in the street to a fixed income), why recycling matters (landfill, raw materials, energy)",
            "Gives the practical guidance from the report (dry and wet waste apart, rinse the packaging, nothing dirty with the recyclables) and why it matters (almost a third is lost)",
            "\"Adequação discursiva\": a title, a greeting to the families, the news of the partnership, the explanation, the guidance and an invitation that closes the post",
            "\"Adequação linguística\": requests to a group (\"pedimos que separem\", \"contamos com vocês\"), the vocabulary of the topic (\"coleta seletiva\", \"lixo seco\", \"recicláveis\", \"aterro\"), a warm but correct style",
          ],
          modelAnswer: paras(
            "Lixo no lugar certo: a nossa escola agora recicla",
            "Queridas famílias,",
            "A partir deste mês, a nossa escola passa a ser parceira da Cooperativa Recicla Vida, que reúne sessenta catadores em Belo Horizonte. Toda semana, a cooperativa vai buscar aqui, de graça, o material reciclável separado por alunos, professores e funcionários.",
            "O trabalho dos catadores é fundamental: no Brasil, boa parte da reciclagem depende deles. Na cooperativa, quem antes puxava carrinho na rua, sozinho e sem renda garantida, hoje tem um rendimento fixo e condições dignas. Além disso, cada embalagem reciclada deixa de ir para o aterro e economiza matéria-prima e energia.",
            "Mas há um problema: quase um terço do que chega à cooperativa não pode ser aproveitado, porque vem misturado com restos de comida ou sujo de gordura. Por isso, pedimos a ajuda de vocês, em casa e na escola:\n- separem o lixo seco (papel, plástico, vidro e metal) do lixo molhado (restos de comida);\n- deem uma lavada rápida nas embalagens antes de descartá-las;\n- não misturem fraldas, papel higiênico ou guardanapos usados com os recicláveis.",
            "Se o seu condomínio ou a sua empresa também quiser participar, a cooperativa faz a coleta gratuitamente. Basta pedir o contato na secretaria. Contamos com vocês!",
            "Professora Luana Martins, coordenadora do projeto Escola Sustentável",
          ),
        },
      ],
    },
    {
      title: "Tarefa 2",
      instructions:
        "Você vai ouvir duas vezes um boletim de rádio sobre a falta de água na região onde você mora. Você trabalha na comunicação de uma rede de academias de ginástica da cidade. Escreva um texto para ser publicado no aplicativo da academia, dirigido aos alunos, explicando a situação dos reservatórios e pedindo que eles economizem água nos vestiários, com base nas informações do boletim.",
      instructionsEn: AUDIO_NOTE,
      audio: [
        {
          label: "Áudio: boletim sobre a falta de água",
          plays: 2,
          lines: [
            {
              voice: "m",
              text: "Atenção, ouvinte. A falta de chuva continua preocupando a região. O reservatório que abastece a cidade e mais seis municípios vizinhos está hoje com apenas vinte e oito por cento da capacidade, o nível mais baixo dos últimos dez anos. A repórter Tatiana Rocha tem mais informações.",
            },
            {
              voice: "f",
              text: "Bom dia. Nos últimos três meses choveu menos da metade do esperado, e a previsão não é animadora: as chuvas só devem voltar ao normal em novembro. Por isso, a companhia de saneamento anunciou que, a partir da próxima segunda-feira, vai reduzir a pressão da água das onze da noite às cinco da manhã. Se o nível continuar caindo, não está descartado um rodízio, com bairros ficando sem água em dias alternados.",
            },
            { voice: "m", text: "E o que a população pode fazer, Tatiana?" },
            {
              voice: "f",
              text: "Eu conversei com o engenheiro Fábio Teixeira, da companhia de saneamento. Ele explica que pequenas mudanças de hábito fazem muita diferença.",
            },
            {
              voice: "m",
              text: "Um banho de quinze minutos gasta mais de cem litros de água. Se a pessoa reduz para cinco minutos e fecha o chuveiro enquanto se ensaboa, economiza dois terços disso. Outra coisa: uma torneira pingando desperdiça mais de quarenta litros por dia. Então, consertar vazamentos é urgente. E nada de lavar calçada ou carro com mangueira.",
            },
            {
              voice: "f",
              text: "O engenheiro lembra que lavar a calçada com mangueira durante a crise pode dar multa. Ele também pede que estabelecimentos que consomem muita água, como hotéis, academias e restaurantes, revisem os seus equipamentos e orientem os clientes.",
            },
            { voice: "m", text: "Obrigado, Tatiana. Voltamos com mais informações no próximo boletim." },
          ],
        },
      ],
      write: [
        {
          prompt:
            "Você ouviu um boletim de rádio sobre a falta de água na região onde você mora: o reservatório está com vinte e oito por cento da capacidade. Você trabalha na comunicação de uma rede de academias de ginástica da cidade. Escreva um texto para ser publicado no aplicativo da academia, dirigido aos alunos, explicando a situação dos reservatórios e pedindo que eles economizem água nos vestiários, com base nas informações do boletim.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": a message in the gym's app from the gym to its members: direct, friendly and motivating, not alarmist",
            "Uses the bulletin: the situation (28 %, the lowest in ten years, less than half the expected rain, lower pressure at night, a possible \"rodízio\") and the engineer's figures and advice",
            "Adapts the advice to a gym's changing rooms (short showers, taps, reporting leaks) and says what the gym itself is doing",
            "\"Adequação discursiva\": a catchy title, the situation, the requests (a list is fine), the gym's part and a short positive close",
            "\"Adequação linguística\": the imperative with \"você\" (\"tome\", \"feche\", \"avise\"), the future and conditional for what may happen (\"poderá haver rodízio\"), accurate figures",
          ],
          modelAnswer: paras(
            "Economize água: cada minuto conta",
            "Olá, aluno!",
            "A região está passando pela pior estiagem dos últimos dez anos. Segundo o boletim divulgado hoje, o reservatório que abastece a cidade está com apenas 28% da capacidade, e a companhia de saneamento vai reduzir a pressão da água à noite a partir de segunda-feira. Se o nível continuar caindo, poderá haver rodízio entre os bairros.",
            "Academias consomem muita água, principalmente nos vestiários, e queremos fazer a nossa parte. Por isso, pedimos a sua colaboração:\n- Tome banhos de no máximo cinco minutos e feche o chuveiro enquanto se ensaboa. Um banho de quinze minutos gasta mais de cem litros!\n- Não deixe a torneira aberta enquanto escova os dentes ou faz a barba.\n- Viu algum chuveiro ou torneira pingando? Avise a recepção. Um vazamento pequeno desperdiça mais de quarenta litros por dia.\n- Traga a sua garrafinha: os bebedouros continuam funcionando normalmente.",
            "Da nossa parte, já revisamos todos os chuveiros e instalamos redutores de vazão nas torneiras.",
            "Com a ajuda de todos, podemos atravessar esse período sem rodízio. Obrigado por treinar com consciência!",
            "Equipe Academia Movimento",
          ),
        },
      ],
    },
    {
      title: "Tarefa 3",
      instructions:
        "Leia o texto abaixo sobre o crescimento dos brechós no Brasil. Você e uma amiga vão abrir um brechó em Porto Alegre. Escreva o texto de apresentação do brechó para a página da loja em uma rede social, dirigido a possíveis clientes, convencendo-os a comprar roupas usadas com base nas informações do texto e convidando-os para a inauguração.",
      texts: [
        {
          title: "Roupa usada, estilo novo",
          body: paras(
            "Durante muito tempo, comprar roupa usada no Brasil era coisa de quem não tinha dinheiro, e havia até quem desconfiasse das peças de brechó. Esse preconceito está ficando para trás. Os brechós se multiplicam nas grandes cidades, e os aplicativos de revenda de roupas viraram febre entre os jovens.",
            "Os motivos são vários. O primeiro é o preço: uma jaqueta de marca pode custar um quarto do valor da loja. O segundo é a busca por peças únicas, que ninguém mais vai estar usando na festa. “Eu gosto de garimpar, de encontrar uma peça dos anos noventa com história”, conta a estudante de design Bruna Kessler, de vinte e dois anos.",
            "O terceiro motivo é ambiental. A indústria da moda está entre as que mais consomem água e geram resíduos no planeta: a fabricação de uma única calça jeans pode gastar milhares de litros de água, e boa parte das roupas descartadas vai parar em lixões. Prolongar a vida de uma peça é uma das formas mais simples de reduzir esse impacto, a chamada moda circular.",
            "Para quem quer entrar no negócio, os donos de brechós dão algumas dicas: selecionar peças limpas e em bom estado, organizar a loja por estilo e tamanho, fotografar as roupas com luz natural para as redes sociais e cobrar um preço justo. Muitos também aceitam peças dos próprios clientes em troca de desconto, o que ajuda a fidelizar o público.",
          ),
        },
      ],
      write: [
        {
          prompt:
            "Você leu um texto sobre o crescimento dos brechós no Brasil: preços mais baixos, peças únicas e a moda circular, que reduz o impacto ambiental da indústria da moda. Você e uma amiga vão abrir um brechó em Porto Alegre. Escreva o texto de apresentação do brechó para a página da loja em uma rede social, dirigido a possíveis clientes, convencendo-os a comprar roupas usadas com base nas informações do texto e convidando-os para a inauguração.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": a shop's introduction on social media, by its two owners, aimed at young potential customers: persuasive and lively",
            "Uses the text's three reasons to buy second-hand (price, one-off pieces, the environment and \"moda circular\") as selling points",
            "Shows the shop follows the good practice the text describes (clean pieces in good condition, sorted by style and size, fair prices, trade-ins for a discount)",
            "\"Adequação discursiva\": a welcome or slogan, who you are, why buy here, the invitation with date, time and address, and a call to action",
            "\"Adequação linguística\": persuasive devices (questions to the reader, the imperative: \"venha\", \"traga\"), a light register that stays correct, accurate vocabulary (\"peça\", \"garimpar\", \"brechó\")",
          ],
          modelAnswer: paras(
            "Bem-vindo ao Brechó Segunda Chance!",
            "Sabe aquela jaqueta de marca que você sempre quis, mas que custa uma fortuna na loja? Aqui você pode encontrar uma parecida por um quarto do preço. E mais: uma peça única, que ninguém vai estar usando na próxima festa.",
            "O Segunda Chance nasceu da paixão de duas amigas, a Lívia e a Carol, por garimpar roupas com história. Escolhemos cada peça com cuidado: tudo chega limpo, em bom estado e organizado por estilo e tamanho, dos anos setenta até hoje.",
            "Comprar em brechó também é um jeito simples de cuidar do planeta. A indústria da moda está entre as que mais gastam água e produzem lixo no mundo: só para fabricar uma calça jeans podem ser usados milhares de litros de água. Quando uma roupa ganha uma segunda vida, ela não vai para o lixão, e uma peça nova deixa de ser produzida. É a moda circular!",
            "Tem roupas paradas no armário? Traga para a gente avaliar e ganhe desconto nas suas compras.",
            "Venha conhecer a loja na inauguração, no sábado, dia 14, a partir das 10h, na Rua da República, 512, na Cidade Baixa. Vai ter música, café e vinte por cento de desconto em todas as peças. Esperamos você!",
          ),
        },
      ],
    },
    {
      title: "Tarefa 4",
      instructions:
        "Leia o texto abaixo sobre o turismo de base comunitária na Amazônia. Sua amiga brasileira Renata mandou uma mensagem dizendo que quer passar as férias de julho na Amazônia e pediu a sua opinião. Escreva um e-mail para ela, recomendando o turismo de base comunitária, explicando como ele funciona e dando conselhos práticos para a viagem, com base nas informações do texto.",
      texts: [
        {
          title: "Na casa do ribeirinho",
          body: paras(
            "Dormir em rede, acordar com o canto dos pássaros, aprender a pescar com quem vive do rio. É isso que oferece o turismo de base comunitária, que cresce em comunidades ribeirinhas do rio Tapajós, no Pará. Nesse modelo, são os próprios moradores que recebem os visitantes, organizam os passeios e decidem as regras, e o dinheiro fica na comunidade.",
            "Na comunidade de São Raimundo, a cerca de duas horas de barco de Santarém, vinte famílias se revezam para receber grupos de no máximo doze pessoas. Os visitantes participam do dia a dia: acompanham a produção da farinha de mandioca, fazem trilhas com guias locais, que mostram as plantas usadas como remédio, e tomam banho de rio. “Antes, o turista passava aqui de lancha, tirava foto e ia embora. Agora ele fica, conversa, e a gente ganha dinheiro sem derrubar a floresta”, diz o presidente da associação de moradores, Raimundo Lima.",
            "A experiência muda conforme a época do ano. Entre agosto e dezembro, com a seca, aparecem praias de areia branca no rio. Entre janeiro e junho, na cheia, o passeio é de canoa pela floresta alagada.",
            "Quem vai precisa se preparar: as reservas são feitas com antecedência, diretamente com a associação, e o pagamento é em dinheiro. Não há sinal de celular, e a energia, solar, é limitada. Recomenda-se levar repelente, protetor solar, lanterna e roupas leves de manga comprida, e respeitar os costumes locais, como pedir licença antes de fotografar as pessoas.",
          ),
        },
      ],
      write: [
        {
          prompt:
            "Você leu um texto sobre o turismo de base comunitária em comunidades ribeirinhas do rio Tapajós, no Pará. Sua amiga brasileira Renata quer passar as férias de julho na Amazônia e pediu a sua opinião. Escreva um e-mail para ela, recomendando o turismo de base comunitária, explicando como ele funciona e dando conselhos práticos para a viagem, com base nas informações do texto.",
          minWords: 150,
          maxWords: 250,
          rubric: [
            "\"Adequação ao contexto\": a personal e-mail to a Brazilian friend: informal and warm, answering her request for an opinion",
            "Explains community-based tourism with the text's details (families host small groups, daily life, guided trails, the money stays in the community)",
            "Relates the seasons to her July trip (beaches August to December, flooded forest January to June) and passes on the practical advice (book ahead, cash, no signal, what to pack, ask before photographing people)",
            "\"Adequação discursiva\": an informal greeting and close (\"Oi, Renata! … Beijos\"), a reaction to her plan, the explanation, the tips and a friendly ending",
            "\"Adequação linguística\": an informal but correct register (\"você\", \"a gente\", \"vale a pena\"), the imperative for tips, connectors (\"em vez de\", \"então\", \"só que\")",
          ],
          modelAnswer: paras(
            "Oi, Renata!",
            "Que ideia boa passar as férias de julho na Amazônia! Por coincidência, li esta semana um texto sobre o turismo de base comunitária no rio Tapajós, no Pará, e acho que é exatamente o tipo de viagem de que você gosta.",
            "Funciona assim: em vez de ficar num hotel, você se hospeda com famílias ribeirinhas, que organizam tudo e decidem as regras. Numa comunidade chamada São Raimundo, a umas duas horas de barco de Santarém, os grupos são pequenos, de até doze pessoas, e os visitantes participam do dia a dia: aprendem a fazer farinha de mandioca, fazem trilhas com guias que mostram as plantas medicinais e tomam banho de rio. E o melhor é que o dinheiro fica com os moradores, que ganham a vida sem derrubar a floresta.",
            "Só uma coisa: as praias de areia branca aparecem entre agosto e dezembro, e no primeiro semestre o passeio é de canoa pela floresta alagada. Em julho o rio está começando a baixar, então vale perguntar à associação como ele vai estar.",
            "Algumas dicas: reserve com antecedência, direto com a associação, e leve dinheiro, porque o pagamento não é com cartão. E não tem sinal de celular! Leve repelente, protetor solar, lanterna e roupas leves de manga comprida, e peça licença antes de fotografar as pessoas.",
            "Depois me conta tudo!\nBeijos,\nAna",
          ),
        },
      ],
    },
  ],
};
