
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString("en-US", options);

document.getElementById("topic-date").innerText = formattedDate;

const teacher_name = localStorage.getItem('t_name');

var list_up = localStorage.getItem('t_plan');

var listup = [
  ['Las diversiones', 'hobbies, pastimes, diversions, amusements'],
  ['La música y el teatro', 'music & theatre'],
  ['el/la árbitro/a', 'referee'],
  ['el álbum', 'the album'],
  ['el asiento', 'the seat'],
  ['el/la cantante', 'the singer'],
  ['el concierto', 'the concert'],
  ['el conjunto', 'the group'],
  ['el grupo musical', 'the music group/band'],
  ['el escenario', 'the stage'],
  ['el espectáculo', 'the show'],
  ['el estreno', 'the premiere/debut'],
  ['la función', 'the performance/showing'],
  ['el/la músico/a', 'the musician'],
  ['la obra de teatro', 'the play/theater production'],
  ['la taquilla', 'the ticket window/booth'],
  ['aplaudir', 'to applaud'],
  ['conseguir boletos/entradas', 'to get tickets'],
  ['hacer cola', 'to stand in line'],
  ['poner un disco compacto', 'to put on a CD'],
  ['el cine', 'the movie theater'],
  ['el circo', 'the circus'],
  ['la discoteca', 'the nightclub'],
  ['la feria', 'the fair'],
  ['el festival', 'the festival'],
  ['el parque de atracciones', 'the amusement park'],
  ['el zoológico', 'the zoo'],
  ['el ajedrez', 'chess'],
  ['el billar', 'billiards/pool'],
  ['el boliche/los bolos', 'bowling'],
  ['las cartas/los naipes', 'playing cards'],
  ['los dardos', 'darts'],
  ['el juego de mesa', 'the board game'],
  ['el pasatiempo', 'pastime'],
  ['la televisión', 'television'],
  ['el tiempo libre', 'free time'],
  ['los ratos libres', 'free time'],
  ['el videojuego', 'the videogame'],
  ['aburrirse', 'to become bored'],
  ['alquilar una película', 'to rent a movie'],
  ['brindar', 'to toast (in celebration)'],
  ['celebrar/festejar', 'to celebrate'],
  ['dar un paseo', 'to go for a walk'],
  ['disfrutar (de)', 'to enjoy'],
  ['divertir(se)', 'to have fun'],
  ['entretener(se)', 'to entertain/amuse (oneself)'],
  ['gustar', 'to like/be pleasing to'],
  ['reunir(se) con', 'to meet with; to get together'],
  ['salir a comer; cenar', 'to go out to eat; to go out for dinner'],
  ['aficionado/a', 'a fan; fond of'],
  ['animado/a', 'lively; animated; cheerful'],
  ['divertido/a', 'fun'],
  ['entretenido/a', 'entertaining']
];


document.getElementById("q_card_front").innerText = listup[0][0];

var position = 0;
var set = 0;

document.getElementById("q_forward").addEventListener('click',() =>
{
  position = position+1;
  if(position>=listup.length)
  {
    position = 0;
  }
  document.getElementById("quiz_box").innerText = listup[position][0];
});

document.getElementById("q_back").addEventListener('click',() =>
{
  position = position-1;
  if(position<0)
  {
    position = listup.length-1;
  }
  document.getElementById("quiz_box").innerText = listup[position][0];
});





document.getElementById("quiz_box").addEventListener('click',() =>
{
  if(set==0) {set=1;} else {set=0;}
  document.getElementById("quiz_box").innerText = listup[position][set];
});
