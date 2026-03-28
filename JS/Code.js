const texts = {
en: {
title: "Enter your details",
name: "Full Name:",
class: "Class:",
btn: "Continue",
alertEmpty: "Please fill all fields!",
placeholderName: "Type your name here",
placeholderClass: "Type your class here"
},
fr: {
title: "Entrez vos informations",
name: "Nom et Prénom :",
class: "Classe :",
btn: "Continuer",
alertEmpty: "Veuillez remplir tous les champs !",
placeholderName: "Tapez votre nom ici",
placeholderClass: "Tapez votre classe ici"
}
};

const langSelect = document.getElementById("language");

function updateLanguage(lang) {
    document.getElementById("titleText").textContent = texts[lang].title;
    document.getElementById("nameLabel").textContent = texts[lang].name;
    document.getElementById("classLabel").textContent = texts[lang].class;
    document.getElementById("btn").textContent = texts[lang].btn;
    document.getElementById("name").placeholder = texts[lang].placeholderName;
    document.getElementById("class").placeholder = texts[lang].placeholderClass;
}

let savedLang = localStorage.getItem("lang") || "en";
langSelect.value = savedLang;
updateLanguage(savedLang);

langSelect.addEventListener("change", function () {
    let lang = this.value;
    localStorage.setItem("lang", lang);
    updateLanguage(lang);
});

/* Button click with validation */
document.getElementById("btn").onclick = function () {

    let name = document.getElementById("name").value.trim();
    let userClass = document.getElementById("class").value.trim();

    /* CHECK EMPTY */
    if (name === "" || userClass === "") {
        let lang = localStorage.getItem("lang") || "en";
        alert(texts[lang].alertEmpty);
        return;
    }

    /* Save */
    localStorage.setItem("name", name);
    localStorage.setItem("class", userClass);

    /* Go to next page */
    window.location.href = "index1.html";
};