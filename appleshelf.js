let fruit = ["orange","yellow","orange","yellow","orange"]
let yellowEL = document.getElementById("yellow-el")
let orangeEl = document.getElementById("orange-el")


function sortFruit()  {
    for ( let x = 0; x < fruit.length; x ++) {
         if (fruit[x] === "orange") {
            orangeEl.textContent += "orange"

        } else if (fruit [x] === "yellow") {
            yellowEL.textContent += "yellow"
        }
    }

}
sortFruit()