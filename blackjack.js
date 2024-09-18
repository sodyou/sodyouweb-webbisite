let firstcard = getRandomCard() //10
let secondcard = getRandomCard() //20
let cards = [firstcard,secondcard]//array  ...orderd list//[]
let sum = firstcard + secondcard//[0] 
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")
//let playerName = "ade"
//let playerChips = 145
let player = {
    name: "ade",
    chips: 203
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
 
 
 console.log(messageEl)
console.log(cards)
//geting random card 
function getRandomCard() {
// if 1  return 11
//if 11-13 return 10

   let randomNumber = Math.floor(Math.random()*13) + 1
   if (randomNumber > 10) {
    return 10
   } else if (randomNumber ===1) {
    return 11
   }else {
    return randomNumber
   }
}
/* function startgame () {
isAlive = true
let firstcard =getRandomCard
let secondcard = getRandomCard
cards = [firstcard, secondcard]
sum = firstcard + secondcard

} */




function startgame(){
    //rend out all the card
    sumEl.textContent = "sum: " + sum
    //rend out firstcard and lastcard with the arrays
    cardEl.textContent = "cards: "   //+ cards[0]+  " " + cards[1]   //firstcards and lastcards
// create a for loop that render out all the cards instead of just two
for ( let x = 0; x < cards.length; x++){
    cardEl.textContent += cards [x] + " "
}
    if (sum <= 20){
   
   message = "do you want to draw new card"
    

} else if (sum===21){
   
    message = "you hav got blackjack"
     hasBlackjack = true

    } else {
   
  message = "you are out of the game"
    isAlive = false
}
messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack ===false) {
    console.log("draw a new card from deck")
    let card = getRandomCard()
    sum += card
    startgame()
    cards.push(card)
    console.log(cards)
}
}

// cash out
console.log(hasBlackjack)
console.log(isAlive)
console.log(message)


// if and else condition
//if (sum < 21) {
   // console.log("do you want to draw a new card")
//} else if (sum ===21) {
   // console.log ("whoo! you've got blackjack")
//}else if (sum > 21) {
    //console.log("you're out of the game!")
//}

let age = 22
if (age < 21) {
    console.log("you are not  welcome")
} else {
    console.log ("you are welcome")
}
//if\else....if\else stement
console.log(3===7)
//Arrays -ordered list ogf item
//index 0
let tea = ["dad","mon","son","bro"]

console.log(tea[0])
console.log(tea[2])
console.log(tea.length)

//arrays with multiple data type
let ser = ["you",5,true]
//adding and removing items from arrays
 let red = [4,7]
 red.push(6)
 console.log(red)
 
 let messag =["red","yellow","blue"]
 let newmessag = "white"
 messag.push(newmessag)
 console.log(messag)
messag.pop()
console.log(messag)

//counting in javascript
//      START           FINISH      STEPSIZE
for ( let count = 1;  count < 21; count +=1) {
    console.log(count)
}

// write your first loop
for ( let x = 10; x  < 100; x +=10) {
    console.log(x)
}

//for loop and arrays
let news = ["y","w","q","e"]
/* console.log(news[0])
console.log(news[1])
console.log(news[2])
console.log(news[3]) */
  for ( let x = 0; x < 4; x +=1) {
 console.log(x)
} 
 //Array-based loop 
 let cardss = [7,3,9]
for (let x = 0; x < cardss.length; x++) {
    console.log(cardss[x])
}

// returning value in functions

let player1Time = 102
let player2Time = 105

function getFastestRace() {
    if (player1Time< player2Time) {
        return player1Time
    }else if (player2Time<player1Time){
        return player2Time
    }else {
        return player1Time
    }
}
let fastestRace = getFastestRace ()
console.log(fastestRace)

function getTotalRaceTime() {
    return player1Time + player2Time
}
let totalTime = getTotalRaceTime()
console.log(totalTime)


//generating random numbers with Math.random()

let randomNumber = Math.random ()
console.log(randomNumber)

let randomNumber2 = Math.random () * 6
console.log(randomNumber2)

//flooring the num with Math.random()

let floorNumber = Math.floor(16.45632)
console.log(floorNumber)

//using math.random and math.floor to create a dice 

let random = Math.floor(Math.random() * 6) +1  //completing it
//console.log(random)

function randomm() {
    let random = Math.floor(Math.random() * 6) +1 
    return random
}
console.log(randomm())

// The logical AND operator

let completeCourse  = true 
let giveCertificate = true

if (completeCourse  === true  &&  giveCertificate === true ) {
    //if(giveCertificate === true ) {
        generateCertificate()
    }

function generateCertificate() {
    console.log("Generating Certificate.....")
}


let hascompleteCourse  = false
let hasgiveCertificate = false

if (hascompleteCourse  === false  &&  hasgiveCertificate === false ) {
    //if(giveCertificate === true ) {
        showsolution()
    }

function showsolution() {
    console.log("Generating the solution.....")
}

// The logical OR operator

let likedoc  = false
let likestarup = true

if (likedoc === false  ||  likestarup=== false ) {
    //if(giveCertificate === true ) {
        showdoc()
    }

function showdoc() {
    console.log("Generating the showdoc.....")
}

//  INTRO TO OBJECT

// Objects are stored datain-depth composite/complex data type
//key-value pairs 

let course = {
    tittle: "learn css grid",
    lesson: 16,
    crator: "ade may",
    length: 63,
    isFree: true,
    level: 2,
    tags: ["html","css"]
}
console.log(course.tittle)

let castle = {
    tittle: "living in castle",
    price: 160,
    isSuperHero: true,
    images: ["img/castle.png","img/castle2.png"]
}
console.log(castle.tittle)
console.log(castle.price)
 
// random pratice
let hands = ["rock","paper","scicor"]
//crate functio for it
function getHand() {
   let randomIndex =Math.floor(Math.random() * 3) 
   return hands [randomIndex ]
}
console.log( getHand() ) 

// push,pull = last, shift,unshift = first 
let bigCountries = ["tuvalu","india", "indonesia","monaco"]
//do correction
bigCountries.pop()
bigCountries.push("pakinstan")
bigCountries.shift()
bigCountries.unshift("china")
console.log(bigCountries)


//arrays And FOR loop
let smallContries = ["china", "india","usa","pakinsta"]
console.log  ("the best country")
for ( let x = 0; x < smallContries.length; x+=1) {
    console.log(smallContries[x])
}


// object function
let person = {
    age: 12,
    name: "gof",
    contry: "north"
}
function goPerson() {
    console.log( "my" + " " + person.age + " "  + person.name  + "is " + person.contry)
}
goPerson()


// if else statement


let birth = 12

if (age < 6) {
    console.log("good")
}else if (age === 12) {
    console.log ("bad")
}else {
    console.log("fair")
}

// && 

let month = 12
let day = "monday"

if ( day === "monday" && month === 12 ) {
    console.log ("tayo")
}