
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString("en-US", options);

document.getElementById("topic-date").innerText = formattedDate;

var listup = [
    { Spanish: "Cansarse", English: "to get tired" },
    { Spanish: "Quitarse", English: "to take off" },
    { Spanish: "Sentarse", English: "to sit down" },
    { Spanish: "Enojarse", English: "to get angry" },
    { Spanish: "Sentirse", English: "to feel" },
    { Spanish: "Levantarse", English: "to get up" },
    { Spanish: "Engañarse", English: "to fool oneself" },
    { Spanish: "Fiarse (de)", English: "to trust (in)" },
    { Spanish: "Despertarse", English: "to wake up" },
    { Spanish: "Encerrarse", English: "to shut oneself in" },
    { Spanish: "Desayunarse", English: "to have breakfast" },
    { Spanish: "Despedirse (de)", English: "to say goodbye (to)" },
    { Spanish: "Vestirse", English: "to get dressed" },
    { Spanish: "Burlarse (de)", English: "to mock/make fun of" },
    { Spanish: "Asustarse", English: "to get scared" },
    { Spanish: "Arrepentirse (de)", English: "to regret" },
    { Spanish: "Escaparse", English: "to escape" },
    { Spanish: "Afeitarse", English: "to shave" },
    { Spanish: "Tratarse (de)", English: "to be about" },
    { Spanish: "Pasearse", English: "to go for a walk" },
    { Spanish: "Tardarse", English: "to be late" },
    { Spanish: "Reírse (de)", English: "to laugh (at)" },
    { Spanish: "Olvidarse (de)", English: "to forget (about)" },
    { Spanish: "Desmayarse", English: "to faint" },
    { Spanish: "Esconderse", English: "to hide oneself" },
    { Spanish: "Resfriarse", English: "to catch a cold" },
    { Spanish: "Irse", English: "to leave" },
    { Spanish: "Pararse", English: "to stop/stand up" },
    { Spanish: "Parecerse (a)", English: "to resemble" },
    { Spanish: "Apresurarse (a)", English: "to hurry (to)" },
    { Spanish: "Mojarse", English: "to get wet" },
    { Spanish: "Quedarse", English: "to stay" },
    { Spanish: "Colocarse", English: "to get a job/place oneself" },
    { Spanish: "Quejarse", English: "to complain" },
    { Spanish: "Bañarse", English: "to take a bath" },
    { Spanish: "Negarse", English: "to refuse" },
    { Spanish: "Cepillarse", English: "to brush oneself" },
    { Spanish: "Peinarse", English: "to comb one's hair" },
    { Spanish: "Acostarse", English: "to go to bed" },
    { Spanish: "Dormirse", English: "to fall asleep" },
    { Spanish: "Ponerse", English: "to put on" },
    { Spanish: "Ducharse", English: "to take a shower" },
    { Spanish: "Divertirse", English: "to have fun" },
    { Spanish: "Reunirse", English: "to meet/get together" },
    { Spanish: "Entretenerse", English: "to entertain/amuse oneself" },
    { Spanish: "Acordarse (de)", English: "to remember" },
    { Spanish: "Lavarse", English: "to wash oneself" }
];

// Initialize the quiz box with the first Spanish term
document.getElementById("quiz_box").innerText = listup[0].Spanish;

var position = 0;
var set = 'Spanish';

document.getElementById("q_forward").addEventListener('click', () => {
    position = (position + 1) % listup.length;
    document.getElementById("quiz_box").innerText = listup[position][set];
});

document.getElementById("q_back").addEventListener('click', () => {
    position = (position - 1 + listup.length) % listup.length;
    document.getElementById("quiz_box").innerText = listup[position][set];
});

document.getElementById("quiz_box").addEventListener('click', () => {
    set = (set === 'Spanish') ? 'English' : 'Spanish';
    document.getElementById("quiz_box").innerText = listup[position][set];
});
