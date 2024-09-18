//improve message with concantenation
let welcomeEL = document.getElementById("welcome-el")
let names = "yusuf"
let greating = "welcome back "
welcomeEL.innerText = greating + names
//adding an emoji
welcomeEL.innerText = welcomeEL.innerText + "#"
welcomeEL.innerText +="#"

//loops arrays and dom

let sentence = ["go", "fo", "do"]
let greatingsEL = document.getElementById("greatings-el")

for ( let x = 0; x < sentence.length; x++) {
    greatingsEL.textContent += sentence[x] + " "
}