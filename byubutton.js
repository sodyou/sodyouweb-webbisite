//innerHTML
container = document.getElementById("container")
//container.innerHTML =  "<button> BUY!</button>"
container.innerHTML =  "<button onclick='buy()'> BUY!</button>"


//writting function with inner.html

function  buy() {
    container.innerHTML += "<p>Thank you for buying</p>"
}


// parameter on function string
/* const welcomeEl = document.getElementById("welcome-el")
function greatuser (name) {
    welcomeEl.textContent = "welcome back, " + name + " "
}
greatuser("per") */

const welcomeEl = document.getElementById("welcome-el")
  // parameters
function greatuser (greeting,name) {
    welcomeEl.textContent = greeting + ", " + name + " "
}
// agument
greatuser("goom", "james")

// parameters on function numbers

function add(num1, num2) {
   return num1+ num2
}

console.log( add(3,4) )
console.log( add(9,100) )

//function parameters arrays

function getFirstCard(arr) {
    return arr[0]
}
let firstCard = getFirstCard ([10, 2, 5]) 
console.log(firstCard)


// ADDING EVENTS LISTENER AND OBJECTS IN ARRAYS

let data =[
   {
    playerss: "james",
    scoress: 52
   },
   {
    playerss: "mark",
    scoress: 41
   }

]

// feting the dom

const jameBtn = document.getElementById("jamess-btn")

// usng addEvent LIstener

jameBtn.addEventListener("click", function() {
    console.log (data[0].scoress)
})
 
