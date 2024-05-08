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
  { Spanish: "la bienvenida", English: "welcome" },
  { Spanish: "la despedida", English: "farewell" },
  { Spanish: "el destino", English: "destination" },
  { Spanish: "el itinerario", English: "itinerary" },
  { Spanish: "la llegada", English: "arrival" },
  { Spanish: "el pasaje", English: "ticket" },
  { Spanish: "el pasaje de ida y vuelta", English: "round trip ticket" },
  { Spanish: "el pasaporte", English: "passport" },
  { Spanish: "la temporada alta", English: "high season" },
  { Spanish: "la temporada baja", English: "low season" },
  { Spanish: "el/la viajero/a", English: "traveler" },
  { Spanish: "hacer las maletas", English: "pack the suitcases" },
  { Spanish: "hacer un viaje", English: "take a trip" },
  { Spanish: "ir(se) de vacaciones", English: "go on vacation" },
  { Spanish: "perder (e-ie) el vuelo", English: "miss the flight" },
  { Spanish: "regresar", English: "return" },
  { Spanish: "a bordo", English: "on board" },
  { Spanish: "retrasado/a", English: "delayed" },
  { Spanish: "vencido/a", English: "expired" },
  { Spanish: "vigente", English: "valid" },
  { Spanish: "el albergue", English: "hostel" },
  { Spanish: "el alojamiento", English: "accommodation" },
  { Spanish: "la habitación individual", English: "single room" },
  { Spanish: "la habitación doble", English: "double room" },
  { Spanish: "la recepción", English: "reception" },
  { Spanish: "el servicio de habitación", English: "room service" },
  { Spanish: "alojarse", English: "to stay" },
  { Spanish: "cancelar", English: "cancel" },
  { Spanish: "estar lleno/a", English: "be full" },
  { Spanish: "quedarse", English: "stay" },
  { Spanish: "reservar", English: "book" },
  { Spanish: "de buena categoría", English: "high quality" },
  { Spanish: "incluido/a", English: "included" },
  { Spanish: "recomendable", English: "recommendable" },
  { Spanish: "el accidente (automovilístico)", English: "(car) accident" },
  { Spanish: "el/la agente de aduanas", English: "customs officer" },
  { Spanish: "el aviso", English: "warning" },
  { Spanish: "el cinturón de seguridad", English: "seatbelt" },
  { Spanish: "el congestionamiento", English: "congestion" },
  { Spanish: "las medidas de seguridad", English: "safety measures" },
  { Spanish: "la seguridad", English: "safety" },
  { Spanish: "el seguro", English: "insurance" },
  { Spanish: "ponerse el cinturón", English: "put on the seatbelt" },
  { Spanish: "quitarse el cinturón", English: "take off the seatbelt" },
  { Spanish: "reducir la velocidad", English: "reduce speed" },
  { Spanish: "peligroso/a", English: "dangerous" },
  { Spanish: "prohibido/a", English: "prohibited" },
  { Spanish: "la aventura", English: "adventure" },
  { Spanish: "el/la aventurero/a", English: "adventurer" },
  { Spanish: "la brújula", English: "compass" },
  { Spanish: "el buceo", English: "diving" },
  { Spanish: "el campamento", English: "camp" },
  { Spanish: "el crucero", English: "cruise" },
  { Spanish: "el ecoturismo", English: "ecotourism" },
  { Spanish: "la excursión", English: "excursion" },
  { Spanish: "la frontera", English: "border" },
  { Spanish: "el/la guía turístico/a", English: "tour guide" },
  { Spanish: "la isla", English: "island" },
  { Spanish: "las olas", English: "waves" },
  { Spanish: "el puerto", English: "port" },
  { Spanish: "las ruinas", English: "ruins" },
  { Spanish: "la selva", English: "jungle" },
  { Spanish: "el/la turista", English: "tourist" },
  { Spanish: "navegar", English: "navigate" },
  { Spanish: "recorrer", English: "travel through" },
  { Spanish: "lejano/a", English: "distant" },
  { Spanish: "turístico/a", English: "touristic" },
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
