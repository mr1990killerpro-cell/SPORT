emailjs.init("cOfc1oIICCOkxb1Dw");

let generatedCode = "";

/* 🌍 LANGUAGE SYSTEM */
function changeLang(){
    let lang = document.getElementById("lang").value;

    if(lang === "fr"){
        document.getElementById("title").innerText = "Demande de joueur";
        document.getElementById("sport").placeholder = "Nom du sport (Plusieurs sports acceptés)";
        document.getElementById("player").placeholder = "Nom du joueur (Plusieurs joueurs acceptés)";
        document.getElementById("email").placeholder = "Email (@gmail.com uniquement)";
        document.getElementById("sendBtn").innerText = "Envoyer code";
        document.getElementById("confirmBtn").innerText = "Confirmer";
        document.getElementById("code").placeholder = "Entrez le code";
    } else {
        document.getElementById("title").innerText = "Request Player";
        document.getElementById("sport").placeholder = "Sport Name (Multiple sports accepted)";
        document.getElementById("player").placeholder = "Player Name (Multiple players accepted)";
        document.getElementById("email").placeholder = "Email (@gmail.com only)";
        document.getElementById("sendBtn").innerText = "Send Code";
        document.getElementById("confirmBtn").innerText = "Confirm";
        document.getElementById("code").placeholder = "Enter code";
    }
}

/* STEP 1 */
function sendCode(){

let sport = document.getElementById("sport").value;
let player = document.getElementById("player").value;
let email = document.getElementById("email").value;

/* ALL FIELDS REQUIRED */
if(sport === "" || player === "" || email === ""){
    document.getElementById("msg").innerText =
    "Fill all fields / Remplissez tous les champs";
    return;
}

/* 🔥 STRICT GMAIL VALIDATION */
let gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

if(!gmailPattern.test(email)){
    document.getElementById("msg").innerText =
    "Use valid Gmail only (example@gmail.com)";
    return;
}

generatedCode = Math.floor(1000 + Math.random()*9000);

emailjs.send("service_elh9khi","template_1emvuxj",{
    email: email,
    passcode: generatedCode
})
.then(()=>{
    document.getElementById("msg").innerText =
    "Code sent / Code envoyé";
    document.getElementById("verifyBox").style.display="block";
})
.catch((err)=>{
    console.log(err);
    document.getElementById("msg").innerText = "Error sending code";
});

}

/* STEP 2 */
function verifyCode(){

let inputCode = document.getElementById("code").value;
let sport = document.getElementById("sport").value;
let player = document.getElementById("player").value;
let email = document.getElementById("email").value;

if(inputCode != generatedCode){
    document.getElementById("msg").innerText =
    "Wrong code / Code incorrect";
    return;
}

if(sport === "" || player === "" || email === ""){
    document.getElementById("msg").innerText =
    "Fill all fields / Remplissez tous les champs";
    return;
}

emailjs.send("service_elh9khi","template_q6v16ah",{
    name: player,
    email: email,
    sport: sport,
    message: "Player request: " + player + " | Sport: " + sport
})
.then(()=>{
    window.location.href="index4.html";
})
.catch((err)=>{
    console.log(err);
    document.getElementById("msg").innerText="Error sending request";
});

}