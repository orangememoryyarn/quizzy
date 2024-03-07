const today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const formattedDate = today.toLocaleDateString("en-US", options);

document.getElementById("topic-date").innerText = formattedDate;

//literally just throw the entire js file into chatgpt & tell it to replace all the words.
var listup = [
  { Spanish: "la depresión", English: "depression" },
  { Spanish: "la enfermedad", English: "disease; illness" },
  { Spanish: "la gripe", English: "flu" },
  { Spanish: "la herida", English: "wound" },
  { Spanish: "el malestar", English: "discomfort" },
  { Spanish: "la obesidad", English: "obesity" },
  { Spanish: "el resfriado", English: "a cold" },
  { Spanish: "la respiración", English: "breathing" },
  { Spanish: "la tensión (alta/baja)", English: "(high/low) blood pressure" },
  { Spanish: "la tos", English: "cough" },
  { Spanish: "el virus", English: "virus" },
  { Spanish: "contagiarse", English: "to become infected" },
  { Spanish: "desmayarse", English: "to faint" },
  { Spanish: "empeorar", English: "to get worse; to deteriorate" },
  { Spanish: "enfermarse", English: "to get sick" },
  { Spanish: "estar resfriado/a", English: "to have a cold" },
  { Spanish: "lastimarse", English: "to get hurt; hurt oneself" },
  { Spanish: "permanecer", English: "to remain; to last" },
  { Spanish: "ponerse bien/mal", English: "to get well/sick" },
  { Spanish: "sufrir (de)", English: "to suffer (from)" },
  { Spanish: "tener buen/mal aspecto", English: "to look healthy/sick" },
  { Spanish: "tener fiebre", English: "to have a fever" },
  { Spanish: "toser", English: "to cough" },
  { Spanish: "agotado/a", English: "exhausted" },
  { Spanish: "inflamado/a", English: "inflamed" },
  { Spanish: "mareado/a", English: "dizzy" },
  { Spanish: "la cirugía", English: "surgery" },
  { Spanish: "el/la cirujano/a", English: "surgeon" },
  { Spanish: "la consulta", English: "doctor’s appointment" },
  { Spanish: "el consultorio", English: "doctor’s office" },
  { Spanish: "la operación", English: "operation" },
  { Spanish: "los primeros auxilios", English: "first aid" },
  { Spanish: "la sala de emergencias", English: "emergency room" },
  { Spanish: "la alimentación", English: "nutrition / diet" },
  { Spanish: "la autoestima", English: "self-esteem" },
  { Spanish: "el bienestar", English: "well-being" },
  { Spanish: "el estado de ánimo", English: "mood" },
  { Spanish: "la salud", English: "health" },
  { Spanish: "adelgazar", English: "to lose weight" },
  { Spanish: "dejar de fumar", English: "to stop/quit smoking" },
  { Spanish: "descansar", English: "to rest" },
  { Spanish: "engordar", English: "to gain weight" },
  { Spanish: "estar a dieta", English: "to be on a diet" },
  { Spanish: "mejorar(se)", English: "to improve" },
  { Spanish: "prevenir (e:ie)", English: "to prevent" },
  { Spanish: "relajarse", English: "to relax" },
];

// Initialize the quiz box with the first Spanish term
document.getElementById("quiz_box").innerText = listup[0].Spanish;

var position = 0;
var set = "Spanish";

document.getElementById("q_forward").addEventListener("click", () => {
  position = (position + 1) % listup.length;
  document.getElementById("quiz_box").innerText = listup[position][set];
});

document.getElementById("q_back").addEventListener("click", () => {
  position = (position - 1 + listup.length) % listup.length;
  document.getElementById("quiz_box").innerText = listup[position][set];
});

document.getElementById("quiz_box").addEventListener("click", () => {
  set = set === "Spanish" ? "English" : "Spanish";
  document.getElementById("quiz_box").innerText = listup[position][set];
});
