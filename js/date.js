const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const mois = [
  "Jan", "Fév", "Mars", "Avril", "Mai", "Juin",
  "Juil", "Août", "Sept", "Oct", "Nov", "Déc"
];

const today = new Date();
const jour = jours[today.getDay()];
const date = today.getDate();
const moisNom = mois[today.getMonth()];

const fullDate = `${jour} ${date} ${moisNom}`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("date-display").textContent = fullDate;
});
