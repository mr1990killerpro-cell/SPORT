/* USER DATA */
let name = localStorage.getItem("name") || "Guest";
let userClass = localStorage.getItem("class") || "Unknown";

/* TEXTS */
const texts = {
en:{
welcome:"Welcome",
intro:"Choose a sport and explore famous players",
sportsTitle:"Popular Sports in France",
add:"Request your player",
addSport:"Add a Sport"
},
fr:{
welcome:"Bienvenue",
intro:"Choisissez un sport et explorez les joueurs célèbres",
sportsTitle:"Sports populaires en France",
add:"Demander un joueur",
addSport:"Ajouter un sport"
}
};

/* ✅ FIXED LANGUAGE UPDATE */
function update(lang){

document.getElementById("welcome").textContent =
texts[lang].welcome + " " + name + " (Class: " + userClass + ")";

document.getElementById("intro").textContent = texts[lang].intro;
document.getElementById("sportsTitle").textContent = texts[lang].sportsTitle;

document.querySelectorAll(".add-text").forEach(el=>{
    el.textContent = texts[lang].add;
});

document.getElementById("addSportText").textContent = texts[lang].addSport;
}

/* TOGGLE */
function toggle(id){
let el=document.getElementById(id);
el.style.display = (el.style.display==="block")?"none":"block";
}

/* BUTTONS */
function goToRequest(event){
event.stopPropagation();
window.location.href = "index2.html";
}

function goToSport(){
window.location.href = "index3.html";
}

/* LANGUAGE FIX */
let lang = localStorage.getItem("lang") || "en";

document.getElementById("language").value = lang;
update(lang);

document.getElementById("language").addEventListener("change",function(){
localStorage.setItem("lang",this.value);
update(this.value);
});