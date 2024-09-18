// document.getElementById("rd").innerText=5

let count = 5+7

console.log(count)

//let myage = 3
//console.log(myage)
//let firstbatch = 5
//let secondbatch = 6
//let pi =  firstbatch + secondbatch 
//console.log(pi)

//let myage = 35
//let humandogratio = 7
//let mydog = myage * humandogratio
//console.log(mydog)

let y = 5
y = y + 1
y = y + 10
y = y - 2

console.log(y)
let bonus = 50
console.log(bonus)
bonus = bonus + 50
console.log(bonus)
bonus = bonus - 25
console.log(bonus)
bonus = bonus - 50
console.log(bonus)

function increment() {
    console.log("the button was clicked")
}
//setting up the race
function countdown () {
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
}
countdown ()
// restart of another
countdown ()
//function that has 42 
function win () {
    console.log(42)
}
win ()
  
let lap1 = 34
let lap2 = 33
let lap3 = 36
let qus  = lap1 + lap2 + lap3
function times () {
    
    console.log(qus)  

}
times()

let chel = 1
console.log(chel)
chel = chel + 1
console.log(chel)
chel = chel + 1
console.log(chel)
let lapscompleted = chel
console.log(lapscompleted)
function man () {
    console.log(lapscompleted)
}
man ()

let lapscompleteds = 0
function incrementlap () {
    lapscompleteds = lapscompleteds + 1
}
incrementlap()
incrementlap()
incrementlap()
console.log(lapscompleteds)

// writig sting variable

let username = "ade"
console.log(username)
let message = "you have three new notification"
console.log(message)
let MessageToUser = message + "," + username + "!"
console.log(MessageToUser)

let user = "ayo"
let alert = "we have logged"
console.log(user + "," + alert +"!" )

console.log(5 + 9)
console.log("5" + "9")
console.log(50 + "9")
console.log("5" + 9)

//creating function for add,subtract,multiply,division for calculator
//on clicl add sub etc
let num1 = 8
let num2 = 4
document.getElementById("num-el").textContent= num1
document.getElementById("num-el").textContent= num2
let sumEl = document.getElementById("sum-el")
function add() {
    let result = num1 + num2
    sumEl.textContent = "sum: " + result
}
function subtract() {
    let result = num1 - num2
    sumEl.textContent = "sum: " + result
}
function multiply() {
    let result = num1 * num2
    sumEl.textContent = "sum: " + result
}