// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u09-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u09 (practice unit: past modals, wishes, conditionals): a short recap, then graded practice.

// ---- small authoring helpers (local to this file) ----------------------
// Answer patterns use {a|b|} for alternatives; every combination is
// accepted, and the first combination is the main answer.
function x(p: string): string[] {
  const m = p.match(/\{([^{}]*)\}/);
  if (!m || m.index === undefined) return [p.replace(/\s+/g, " ").replace(/\s+([,.!?;])/g, "$1").trim()];
  const out: string[] = [];
  for (const opt of m[1].split("|")) out.push(...x(p.slice(0, m.index) + opt + p.slice(m.index + m[0].length)));
  return out;
}
function xs(ps: string | string[]): string[] {
  return [...new Set((Array.isArray(ps) ? ps : [ps]).flatMap(x))];
}
const tr = (source: string, answers: string | string[], explanation: string, prompt = "Translate into English."): Exercise => {
  const [answer, ...alts] = xs(answers);
  return { type: "translate", direction: "es-en", prompt, source, answer, ...(alts.length ? { altAnswers: alts } : {}), explanation };
};
const fb = (sentence: string, answers: string | string[], en: string, explanation: string): Exercise => {
  const [answer, ...alts] = xs(answers);
  return { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, ...(alts.length ? { altAnswers: alts } : {}), explanation };
};
const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });
const wo = (sentence: string, translation: string, explanation: string, alts?: string[]): Exercise => ({
  type: "word-order",
  prompt: "Put the words in order.",
  words: sentence.split(" "),
  translation,
  ...(alts ? { altOrders: alts.map((a) => a.split(" ")) } : {}),
  explanation,
});
const dc = (audio: string, explanation: string): Exercise => ({ type: "dictation", audio, explanation });
const lc = (audio: string, options: string[], explanation: string, question = "What does it mean?"): Exercise => ({ type: "listen-choose", audio, question, options, correctIndex: 0, explanation });
const sp = (text: string, explanation: string, tip?: string, prompt?: string): Exercise => ({ type: "speak", text, ...(prompt ? { prompt } : {}), ...(tip ? { tip } : {}), explanation });
const mt = (instructions: string, pairs: [string, string][], explanation: string): Exercise => ({ type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation });

const SECONDS: Record<Exercise["type"], number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 300,
};
const lesson = (
  n: number,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Exercise[],
): Lesson => ({
  slug: `en-b2-past-modals-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U09_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Regrets, wishes, lucky escapes, past deduction, hope vs wish
  // (Talk About Yourself, Sentence by Sentence, Correct the Learner, Minimal Pairs)
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Should Have, Wish, Must Have",
    "You will be able to express regrets, wishes and lucky escapes about the past, make deductions with must have, might have and can't have, and choose between hope and wish for «ojalá».",
    "Recap: modal + have + past participle",
    [
      "Regrets and criticism use \"should have\" / \"shouldn't have\" + past participle; a lucky escape or a missed chance uses \"could have\". \"I wish\" + past perfect is the emotional version of a regret, and \"wish\" + past simple is about now.",
      "Deductions: \"must have\" (sure it happened), \"might/may/could have\" (maybe), \"can't/couldn't have\" (sure it didn't), never *mustn't have. «Ojalá» + present subjunctive is \"I hope\"; «ojalá» + imperfect or pluperfect subjunctive is \"I wish\".",
    ],
    [
      ["I should have booked the hotel earlier.", "Debería haber reservado el hotel antes."],
      ["I wish I had learned to swim as a child.", "Ojalá hubiera aprendido a nadar de niño."],
      ["The door is open. Someone must have left it like that.", "La puerta está abierta. Alguien debe de haberla dejado así."],
      ["I hope you liked the present.", "Ojalá te haya gustado el regalo."],
    ],
    [
      fb("Looking back, I ___ more money when I had a good salary.", ["should have saved", "ought to have saved"], "Mirando atrás, [debería haber ahorrado] más dinero cuando tenía un buen sueldo.",
        "A regret about something you didn't do: \"should have\" + past participle \"saved\". Do not add a second infinitive: *should have to save means something else."),
      fb("We ___ that old car. It broke down a week later.", "shouldn't have bought", "[No deberíamos haber comprado] ese carro viejo. Se descompuso una semana después.",
        "A regret about something you DID do: \"shouldn't have\" + participle. The participle of \"buy\" is \"bought\"."),
      mc("Which sentence is correct?", [
        "I should have gone to the doctor sooner.",
        "I should have went to the doctor sooner.",
        "I should have to go to the doctor sooner.",
        "I should of gone to the doctor sooner.",
      ], "After \"have\" you need the past participle \"gone\", not the past simple \"went\". *Should of is a spelling mistake that comes from the sound of \"should've\", and *should have to go adds an infinitive that Spanish «haber» does not need."),
      tr("Debería haber estudiado más para el examen de matemáticas.", "I should have studied {more |harder |}for the {math|maths} {exam|test}.",
        "«Debería haber» + participle = \"should have\" + past participle. «Tendría que haber estudiado» would translate exactly the same way."),
      fb("I wish I ___ to my brother's advice.", "had listened", "Ojalá [hubiera hecho caso] a los consejos de mi hermano.",
        "A wish about the past takes the past perfect: \"I wish I had listened\". *I wish I would have listened and *I wish I listened are typical Spanish-speaker mistakes for this meaning."),
      tr("Ojalá no hubiera vendido mi bicicleta.", ["I wish I hadn't sold my {bike|bicycle}.", "If only I hadn't sold my {bike|bicycle}."],
        "«Ojalá» + pluperfect subjunctive is a regret: \"I wish\" + past perfect, negative \"hadn't sold\". \"If only\" is an even stronger version."),
      mc("«Ojalá hablara mejor francés.» Which translation is correct?", [
        "I wish I spoke better French.",
        "I wish I had spoken better French.",
        "I hope I speak better French.",
        "I wish I would speak better French.",
      ], "This wish is about now, so English uses \"wish\" + past simple: \"spoke\". The past here means \"not real\", not past time. \"Had spoken\" would be a regret about the past, and \"wish ... would\" is not used about yourself."),
      wo("If only I had known about the sale.", "¡Si al menos hubiera sabido lo de las ofertas!",
        "\"If only\" + past perfect (\"had known\") is a strong regret about the past."),
      tr("Podríamos haber perdido el vuelo.", "We could have missed the {flight|plane}.",
        "A lucky escape: something bad almost happened but didn't. English always uses \"could have\" + participle here, even when Spanish says «podíamos haber perdido». «Perder un vuelo» is \"miss\", not *lose."),
      fb("That was close! You ___ hurt.", ["could have been", "could have gotten", "might have been", "might have gotten"], "¡Por los pelos! [Te podrías haber] lastimado.",
        "\"Could have been hurt\" or \"could have gotten hurt\": it was possible, but it didn't happen. \"You could be hurt\" would be about now or the future."),
      tr("Si no hubiera frenado a tiempo, habría chocado con la moto.", ["If I hadn't braked in time, I would have {hit|crashed into} the {motorcycle|motorbike}.", "I would have {hit|crashed into} the {motorcycle|motorbike} if I hadn't braked in time."],
        "A third conditional explains why the lucky escape happened: past perfect in the \"if\" clause, \"would have\" + participle in the result. Never put \"would\" in the \"if\" clause."),
      dc("We could have lost everything in that fire.",
        "\"Could have lost\": in fast speech \"could have\" sounds like \"could-uv\". Write the full form \"could have\", never *could of."),
      fb("He ___ tired. He's been working since six this morning.", "must be", "[Debe de estar] cansado. Lleva trabajando desde las seis de la mañana.",
        "A present deduction: \"must\" + bare infinitive \"be\". No \"to\" after \"must\": *must to be is a classic mistake."),
      fb("The lights are off. They ___ to bed already.", "must have gone", "Las luces están apagadas. Ya [deben de haberse ido] a la cama.",
        "A deduction about the past: \"must have\" + past participle. The evidence (the lights are off) makes you almost sure."),
      mc("«Ya se habrá ido.» Which translation is correct?", [
        "She must have left already.",
        "She would leave already.",
        "She had to leave already.",
        "She must left already.",
      ], "Spanish uses the future perfect («se habrá ido») for a guess about the past. English uses \"must have\" + participle. \"Had to leave\" is a past obligation, not a guess, and *must left has no \"have\"."),
      tr("Debe de haber olvidado la contraseña.", ["{She|He} must have forgotten {the|her|his} password."],
        "«Debe de haber» + participle is a deduction about the past: \"must have\" + \"forgotten\"."),
      tr("No puede haber sido mi hermano. Estaba en Bogotá.", "It {can't|couldn't} have been my brother. He was in Bogota.",
        "Sure it didn't happen: \"can't have\" or \"couldn't have\" + participle. Never *mustn't have: \"mustn't\" is a prohibition."),
      mc("Which sentence is correct?", [
        "He can't have seen me. I was behind a tree.",
        "He mustn't have seen me. I was behind a tree.",
        "He can't saw me. I was behind a tree.",
        "He mustn't see me. I was behind a tree.",
      ], "A negative deduction about the past is \"can't have\" + participle. \"Mustn't\" means «no debes» (prohibition), so *He mustn't have seen me is wrong. *Can't saw mixes a modal with the past simple."),
      tr("Puede que se le haya olvidado la reunión.", "{He|She} {might|may|could} have forgotten {about |}the meeting.",
        "«Puede que» + perfect subjunctive is a possibility, about 50 percent: \"might/may/could have\" + participle."),
      lc("He might not have read the email.", [
        "Puede que no haya leído el correo.",
        "Es imposible que haya leído el correo.",
        "No debería haber leído el correo.",
        "Seguro que leyó el correo.",
      ], "\"Might not have\" = maybe it didn't happen. \"Can't have read\" would be «es imposible que», \"must have read\" «seguro que», and \"shouldn't have read\" a criticism."),
      mt("Match each past modal with its meaning.", [
        ["She must have left.", "Seguro que se fue."],
        ["She might have left.", "Puede que se haya ido."],
        ["She can't have left.", "Es imposible que se haya ido."],
        ["She should have left.", "Debería haberse ido (y no lo hizo)."],
      ], "Change one modal and the story changes: \"must have\" is sure yes, \"might have\" is maybe, \"can't have\" is sure no, and \"should have\" is a criticism of what didn't happen."),
      wo("The kids must have eaten all the cookies.", "Los niños deben de haberse comido todas las galletas.",
        "Subject + \"must have\" + past participle \"eaten\" + object."),
      tr("¡Podrías haberme ayudado con las maletas!", "You could have helped me with the {suitcases|bags|luggage}!",
        "«Podrías haber» as a complaint: you had the chance but didn't. English says \"You could have\" + participle, with strong stress on \"could\"."),
      tr("No tenías que haber pagado la cena.", ["You didn't have to pay for {the |}dinner.", "You didn't need to pay for {the |}dinner.", "You needn't have paid for {the |}dinner."],
        "«No tenías que haber...» means it wasn't necessary: \"You didn't have to\" or \"You didn't need to\". British English also says \"You needn't have paid\"."),
      fb("I ___ she passed her driving test.", "hope", "[Ojalá] haya aprobado el examen de manejo.",
        "«Ojalá» + present perfect subjunctive is a real hope about something that may already be true, so it is \"I hope\" + a normal past tense. \"I wish she passed\" would sound like it is not true."),
      wo("I wish my sister lived closer to us.", "Ojalá mi hermana viviera más cerca de nosotros.",
        "«Ojalá» + imperfect subjunctive is an unreal wish about now: \"I wish\" + past simple \"lived\"."),
      tr("Ojalá no llueva el sábado.", ["I hope it {doesn't|won't} rain {on Saturday|this Saturday|Saturday}.", "Hopefully it {doesn't|won't} rain {on Saturday|this Saturday|Saturday}."],
        "«Ojalá» + present subjunctive is a real hope: \"I hope\" + present simple. *I wish it doesn't rain mixes two structures."),
      mc("«Ojalá haya llegado bien.» Which translation is correct?", [
        "I hope she got there safely.",
        "I wish she had arrived well.",
        "I wish she got there safely.",
        "I hope she would arrive safely.",
      ], "It may already be true, so it is a hope: \"I hope\" + past simple. \"Wish\" would mean it did NOT happen. \"Arrive well\" is a calque; English says \"get there safely\" or \"arrive safely\"."),
      dc("I should have checked the weather before we left.",
        "\"Should have checked\": the \"have\" is weak (/əv/), so listen for it between \"should\" and the participle."),
      sp("You should have told me you were sick.", "\"Should have\" + \"told\" for criticism of the past. Stress \"SHOULD\" and \"TOLD\"; \"have\" is almost silent.",
        "Say \"should've\" as one unit: /ʃʊdəv/.", "Say it in English: Me tendrías que haber dicho que estabas enfermo."),
      tr("Si lo hubiera sabido, habría venido antes.", ["If I had known, I would have come {earlier|sooner}.", "I would have come {earlier|sooner} if I had known."],
        "Trap: *If I would have known. The \"if\" clause of a third conditional takes the past perfect (\"had known\"); \"would have\" goes only in the result."),
      mc("Which sentence is correct?", [
        "I wish I hadn't eaten that fish.",
        "I wish I didn't eat that fish.",
        "I wish I wouldn't have eaten that fish.",
        "I hope I hadn't eaten that fish.",
      ], "A regret about the past needs \"wish\" + past perfect: \"hadn't eaten\". \"Wish\" + past simple is about now, \"would have\" doesn't go after \"wish\" for your own regrets, and \"hope\" is for real possibilities."),
      tr("Ella tuvo que irse temprano, pero él debe de haberse quedado hasta el final.", "She had to leave early, but he must have stayed {until|till|to} the end.",
        "Trap: «tuvo que» is an obligation (\"had to\"), «debe de haberse quedado» is a deduction (\"must have stayed\"). Don't translate both with \"must\"."),
      tr("Debes de estar agotado después del viaje.", "You must be {exhausted|really tired|very tired|so tired} after the {trip|journey|flight}.",
        "Trap: *You must to be. Modals take the bare infinitive. And this is a present deduction, so no \"have\"."),
      sp("If only I hadn't left my phone in the taxi.", "\"If only\" + past perfect, negative \"hadn't left\": a strong regret.",
        "Stress \"only\" and \"phone\"; contract \"hadn't\" clearly so it isn't heard as \"had\".", "Say it in English: Si al menos no hubiera dejado el celular en el taxi."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Pattern practice, obligation vs deduction, theories, famous
  // mistakes, conditionals and wishes (whole unit mixed)
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Past Modals, Conditionals and Wishes",
    "You will be able to switch quickly between obligation, deduction, criticism, wishes and second, third and mixed conditionals, choosing the right form for each kind of unreality.",
    "Recap: one step back from reality",
    [
      "Obligation in the past is \"had to\"; \"mustn't\" is a prohibition and \"don't have to\" means it isn't necessary. Deductions use \"must / might / can't\" + be (now) or + have + participle (past), never \"will\" or \"would\" as in «estará» or «sería».",
      "Unreal situations move one step back: \"If I had time, I would...\" (now), \"If I had had time, I would have...\" (past), \"If I had studied, I would be...\" (mixed). \"Wish\" follows the same rule, and \"I wish you would...\" complains about someone else's habit.",
    ],
    [
      ["I had to work on Sunday.", "Tuve que trabajar el domingo."],
      ["It might have been the wind.", "A lo mejor fue el viento."],
      ["If I had taken that job, I would live in Miami now.", "Si hubiera aceptado ese trabajo, ahora viviría en Miami."],
      ["I wish you would answer my messages.", "Ojalá contestaras mis mensajes."],
    ],
    [
      fb("She ___ the bus. She isn't at the stop anymore.", "must have taken", "[Debe de haber tomado] el autobús. Ya no está en la parada.",
        "Pattern 1: subject + \"must have\" + past participle. The participle of \"take\" is \"taken\", not *took."),
      fb("They ___ already. The concert only started ten minutes ago.", ["can't have left", "couldn't have left"], "[No pueden haberse ido] ya. El concierto empezó hace solo diez minutos.",
        "Pattern 2: \"can't have\" + participle when the evidence makes it impossible. *They mustn't have left is the typical mistake."),
      fb("You ___ a jacket. It's freezing!", "should have worn", "[Deberías haberte puesto] una chaqueta. ¡Hace un frío tremendo!",
        "Pattern 3: \"should have\" + participle for criticism that comes too late. The participle of \"wear\" is \"worn\"; *should have wore is a frequent mistake."),
      fb("I wish I ___ so much coffee last night.", "hadn't drunk", "Ojalá [no hubiera tomado] tanto café anoche.",
        "Pattern 4: \"I wish I hadn't\" + participle for a regret. Participle of \"drink\": \"drunk\" (drink, drank, drunk)."),
      mc("Which sentence is correct?", [
        "You shouldn't have driven so fast.",
        "You shouldn't have drove so fast.",
        "You shouldn't had driven so fast.",
        "You shouldn't of driven so fast.",
      ], "Modal + \"have\" (base form, never \"had\") + past participle \"driven\". \"Drove\" is the past simple, and *shouldn't of is a spelling of the weak sound, not a real form."),
      tr("Debe de haberse caído de la bicicleta.", "{She|He} must have fallen off {the|her|his} {bike|bicycle}.",
        "\"Must have\" + participle \"fallen\" (fall, fell, fallen). «Caerse de» is \"fall off\"."),
      tr("Estaría durmiendo cuando llamaste.", ["{She|He} must have been {sleeping|asleep} when you called.", "{She|He} was probably {sleeping|asleep} when you called."],
        "The Spanish conditional «estaría» is a guess about the past. English uses \"must have been\" + -ing for an action in progress, never *would be sleeping."),
      wo("They can't have finished the whole project already.", "Es imposible que ya hayan terminado todo el proyecto.",
        "\"Can't have\" + participle \"finished\"; \"already\" goes at the end."),
      fb("You ___ come to the meeting if you're busy. It's optional.", ["don't have to", "don't need to"], "[No hace falta que] vengas a la reunión si estás ocupado. Es opcional.",
        "Not necessary = \"don't have to\" or \"don't need to\". \"You mustn't come\" would be a prohibition, the opposite of what the speaker means."),
      mc("«No pueden usar el celular durante el examen; está prohibido.» Which translation is correct?", [
        "You mustn't use your phone during the exam.",
        "You don't have to use your phone during the exam.",
        "You mustn't to use your phone during the exam.",
        "You don't must use your phone during the exam.",
      ], "A prohibition is \"mustn't\" + bare infinitive. \"Don't have to\" means «no hace falta», and \"must\" never takes \"to\" or \"do\"."),
      tr("Ayer tuve que llevar a mi mamá al hospital.", ["Yesterday I had to take my {mom|mother} to the hospital.", "I had to take my {mom|mother} to the hospital yesterday."],
        "Past obligation = \"had to\". *I must have taken would be a deduction («debo de haberla llevado»), not an obligation."),
      sp("We didn't have to pay for parking.", "«No tuvimos que pagar» = \"We didn't have to pay\": not necessary in the past.",
        "Link \"didn't have to\" as /dɪdnt hæftə/: \"have to\" sounds like \"hafta\".", "Say it in English: No tuvimos que pagar el estacionamiento."),
      lc("He must be at the dentist.", [
        "Estará en el dentista.",
        "Tiene que ir al dentista.",
        "Estaba en el dentista.",
        "Debería ir al dentista.",
      ], "\"Must be\" here is a deduction about now, which Spanish often expresses with the future: «estará». It isn't an obligation (\"has to go\") or advice (\"should go\")."),
      tr("No puede ser ella. Está de vacaciones en Cancún.", "It can't be her. She's on {vacation|holiday} in Cancun.",
        "Sure it's not true now: \"can't be\". \"Mustn't be\" is not the safe choice here; use \"can't be\". In English, Cancun is usually written without the accent."),
      tr("Serían las once cuando volvimos a casa.", "It must have been {about|around} eleven when we {got|came|went} {back home|home|back}.",
        "Spanish uses the conditional «serían» for a guess about a past time. English uses \"must have been\" + \"about\", never *would be eleven."),
      fb("I wish you ___ using my computer without asking.", "would stop", "Ojalá [dejaras de] usar mi computadora sin preguntar.",
        "\"I wish you would\" + base verb complains about another person's annoying habit and asks for a change."),
      mc("Which sentence is correct?", [
        "I wish I had more free time.",
        "I wish I would have more free time.",
        "I wish I have more free time.",
        "I hope I had more free time.",
      ], "A wish about your present situation: \"wish\" + past simple. You can't use \"wish ... would\" about yourself, and the present tense is impossible after \"wish\"."),
      tr("Ojalá mis vecinos no pusieran la música tan alta.", "I wish my {neighbors|neighbours} {wouldn't|didn't} play {their |}music so {loud|loudly}.",
        "A complaint about someone else's behavior: \"I wish they wouldn't...\". \"Didn't play\" is also correct for a present situation. «Poner la música» is \"play music\", not *put the music."),
      fb("The car is still here, so they ___ on foot.", ["must have left", "must have gone"], "El carro sigue aquí, así que [deben de haberse ido] a pie.",
        "A theory based on evidence: \"must have\" + participle. Don't use \"had to leave\": that would be an obligation, not a deduction."),
      tr("No pueden haber sido ladrones; no se llevaron nada.", "It {can't|couldn't} have been {thieves|burglars|robbers}. They didn't take anything.",
        "Impossible in the past: \"can't have been\". Note \"It can't have been...\" with \"it\" as the subject; Spanish has no subject here."),
      tr("Puede que el perro se haya escapado por el jardín.", "The dog {might|may|could} have {escaped|gotten out|got out} through the {yard|backyard|garden}.",
        "A possibility in the past: \"might/may/could have\" + participle. American English says \"yard\" or \"backyard\"; British English \"garden\"."),
      dc("Some of the windows might have been open that night.",
        "\"Might have been open\": \"have\" is weak, almost /ə/, so \"might have been\" can sound like \"might-a-been\"."),
      fb("If the company ___ the app, it would have made millions.", "had bought", "Si la empresa [hubiera comprado] la aplicación, habría ganado millones.",
        "Third conditional: past perfect in the \"if\" clause. *If the company would have bought is the most common mistake."),
      fb("If I had studied nursing, I ___ in a hospital now.", ["would be working", "would work", "might be working", "could be working"], "Si hubiera estudiado enfermería, ahora [estaría trabajando] en un hospital.",
        "Mixed conditional: past condition (\"had studied\"), present result (\"would be working now\"). The word \"now\" tells you the result is present."),
      tr("Debería haber habido más baños en el festival.", "There should have been more {bathrooms|restrooms|toilets} at the festival.",
        "«Debería haber habido» looks complicated, but English is simple: \"there should have been\". It's the past modal of \"there is\"."),
      wo("If they had listened to the engineer, the bridge wouldn't have collapsed.", "Si hubieran escuchado al ingeniero, el puente no se habría caído.",
        "Third conditional: \"if\" + past perfect, then \"wouldn't have\" + participle."),
      mc("Which sentence is correct?", [
        "If we had left earlier, we wouldn't have missed the start.",
        "If we would have left earlier, we wouldn't have missed the start.",
        "If we left earlier, we wouldn't have missed the start.",
        "If we had left earlier, we didn't miss the start.",
      ], "Third conditional: \"had left\" in the \"if\" clause, \"wouldn't have missed\" in the result. Keep \"would\" out of the \"if\" clause."),
      tr("Si tuviera carro, te llevaría al aeropuerto.", ["If I had a car, I would {take|drive} you to the airport.", "If I had a car, I would give you a ride to the airport."],
        "Second conditional for an unreal present: \"if\" + past simple, \"would\" + base verb. «Llevar a alguien en carro» is \"drive\" or \"take\", or \"give someone a ride\"."),
      tr("Si no fuera tan tímida, le habría hablado en la fiesta.", "If I {weren't|wasn't} so shy, I would have {talked|spoken} to {him|her} at the party.",
        "Mixed conditional: present condition (\"weren't so shy\", always true), past result (\"would have talked\"). \"Weren't\" is the careful form; \"wasn't\" is common in speech."),
      mt("Match each sentence with its meaning.", [
        ["I wish I knew.", "Ojalá lo supiera."],
        ["I wish I had known.", "Ojalá lo hubiera sabido."],
        ["I wish you would call.", "Ojalá llamaras (me molesta que no lo hagas)."],
        ["I hope you call.", "Ojalá llames."],
      ], "Past simple after \"wish\" = now; past perfect = the past; \"would\" = another person's behavior; \"hope\" + present = a real possibility."),
      sp("If I had known you were coming, I would have cooked something.", "Third conditional: \"had known\" in the \"if\" clause, \"would have cooked\" in the result.",
        "Contract naturally: \"If I'd known... I'd have cooked\".", "Say it in English: Si hubiera sabido que venías, habría cocinado algo."),
      tr("Debí de dejar las llaves en la oficina; tuve que volver a buscarlas.", "I must have left {the|my} keys {at|in} the office. I had to go back {for them|to get them}.",
        "Trap: two «deber/tener que» ideas in one sentence. «Debí de dejar» is a deduction (\"must have left\"); «tuve que volver» is an obligation (\"had to go back\")."),
      tr("Si hubiera aceptado aquel trabajo, ahora viviría en Chicago.", "If I had {accepted|taken} that job, I would {be living|live} in Chicago now.",
        "Trap: the past condition has a present result (\"now\"), so this is a mixed conditional: \"had accepted\" + \"would live\", not \"would have lived\"."),
      mc("«Ojalá me hubieras llamado.» Which translation is correct?", [
        "I wish you had called me.",
        "I wish you would call me.",
        "I hope you called me.",
        "I wish you called me.",
      ], "Pluperfect subjunctive = a regret about the past: \"wish\" + past perfect. \"Would call\" asks for a change now, and \"wish you called\" is about the present."),
      dc("You could have asked me before you borrowed my car.",
        "\"Could have asked\" is a complaint about a missed chance. In speech, \"could\" is stressed and \"have\" is weak."),
    ],
  ),
];
