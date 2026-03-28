function changeLang(){
    let lang = document.getElementById("lang").value;

    if(lang === "fr"){
        document.getElementById("title").innerText = "Succès !";
        document.getElementById("msg").innerHTML =
        "Merci de nous avoir contactés ! Nous avons bien reçu votre demande et nous ferons de notre mieux pour ajouter votre joueur dans 3 à 4 jours.<br><br>Cordialement.";
    } else {
        document.getElementById("title").innerText = "Success!";
        document.getElementById("msg").innerHTML =
        "Thank you for reaching out to us! We have received your request and we'll do our best to add your player within 3-4 days.<br><br>Best Regards.";
    }
}