
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString("en-US", options);

document.getElementById("topic-date").innerText = formattedDate;

const teacher_name = localStorage.getItem('t_name');

var list_up = localStorage.getItem('t_plan');
var listup = [
    {"Spanish": "en casa", "English": "at home"},
    {"Spanish": "el balcón", "English": "balcony"},
    {"Spanish": "la escalera", "English": "staircase"},
    {"Spanish": "el hogar", "English": "home; hearth; fireplace"},
    {"Spanish": "la limpieza", "English": "cleaning"},
    {"Spanish": "los muebles", "English": "furniture"},
    {"Spanish": "los quehaceres", "English": "chores"},
    {"Spanish": "apagar", "English": "to turn off"},
    {"Spanish": "barrer", "English": "to sweep"},
    {"Spanish": "calentar", "English": "to warm up, to heat"},
    {"Spanish": "cocinar", "English": "to cook"},
    {"Spanish": "encender", "English": "to turn on/switch on"},
    {"Spanish": "freír", "English": "to fry"},
    {"Spanish": "hervir", "English": "to boil"},
    {"Spanish": "lavar", "English": "to wash"},
    {"Spanish": "limpiar", "English": "to clean"},
    {"Spanish": "pasar la aspiradora", "English": "to vacuum"},
    {"Spanish": "quitar el polvo", "English": "to dust"},
    {"Spanish": "tocar el timbre", "English": "to ring the doorbell"},
    {"Spanish": "de compras", "English": "shopping"},
    {"Spanish": "el centro comercial", "English": "mall"},
    {"Spanish": "el dinero en efectivo", "English": "cash"},
    {"Spanish": "la ganga", "English": "a bargain"},
    {"Spanish": "el probador", "English": "dressing room"},
    {"Spanish": "el reembolso", "English": "refund"},
    {"Spanish": "el supermercado", "English": "supermarket"},
    {"Spanish": "la tarjeta de crédito", "English": "credit card"},
    {"Spanish": "la tarjeta de débito", "English": "debit card"},
    {"Spanish": "devolver", "English": "to return (items)"},
    {"Spanish": "hacer mandados", "English": "to run errands"},
    {"Spanish": "ir de compras", "English": "to go shopping"},
    {"Spanish": "probarse", "English": "to try on"},
    {"Spanish": "seleccionar", "English": "to select; to pick out"},
    {"Spanish": "auténtico/a", "English": "authentic; genuine"},
    {"Spanish": "barato/a", "English": "cheap; inexpensive"},
    {"Spanish": "caro/a", "English": "expensive"},
    {"Spanish": "a menudo", "English": "frequently; often"},
    {"Spanish": "a propósito", "English": "on purpose"},
    {"Spanish": "a tiempo", "English": "on time"},
    {"Spanish": "a veces", "English": "at times, sometimes; from time to time"},
    {"Spanish": "apenas", "English": "hardly; scarcely"},
    {"Spanish": "así", "English": "like this; so"},
    {"Spanish": "bastante", "English": "quite; enough"},
    {"Spanish": "casi", "English": "almost"},
    {"Spanish": "casi nunca", "English": "rarely; almost never"},
    {"Spanish": "de repente", "English": "suddenly"},
    {"Spanish": "de vez en cuando", "English": "now and then; once in awhile"},
    {"Spanish": "en aquel entonces", "English": "at that time"},
    {"Spanish": "en el acto", "English": "immediately; on the spot"},
    {"Spanish": "en seguida", "English": "right away"},
    {"Spanish": "por casualidad", "English": "by chance"},
    {"Spanish": "la vida diaria", "English": "daily life"},
    {"Spanish": "la agenda", "English": "agenda; datebook; planner"},
    {"Spanish": "la costumbre", "English": "custom; habit"},
    {"Spanish": "el horario", "English": "schedule"},
    {"Spanish": "la rutina", "English": "routine"},
    {"Spanish": "la soledad", "English": "solitude; loneliness"},
    {"Spanish": "acostumbrarse a", "English": "to be accustomed to; to get used to"},
    {"Spanish": "arreglarse", "English": "to get ready"},
    {"Spanish": "averiguar", "English": "to find out; to check; to verify"},
    {"Spanish": "probar", "English": "to try/to taste"},
    {"Spanish": "soler", "English": "to be in the habit of; to usually"},
    {"Spanish": "atrasado(a)", "English": "late; with a delay"},
    {"Spanish": "cotidiano(a)", "English": "everyday; daily"},
    {"Spanish": "diario(a)", "English": "daily"},
    {"Spanish": "inesperado(a)", "English": "unexpected"}
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
