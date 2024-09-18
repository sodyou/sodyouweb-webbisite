//let firstcard = 10
//let firstcard = getRandomCard()
//let secondcard = 10
//let secondcard = getRandomCard()
let cards = []
//let cards = [firstcard,secondcard]
//let sum = firstcard + secondcard
let sum = 0
let hasBlackjack = false
//let isAlive = true
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
 let player = {
    name: "roy",
    chips: 65
 }

 let playerEl = document.getElementById ("player-el")
//object
playerEl.textContent = player.name + ": $" + player.chips

function startgame () {
    isAlive = true
    let firstcard = getRandomCard ()
    let secondcard = getRandomCard ()
    cards = [firstcard,secondcard]
    sum = firstcard + secondcard
      rendergame()  
}

 

 
function getRandomCard() {
  let randomNumber = Math.floor(Math.random()*13) + 1
  if (randomNumber > 10) {
    return  10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }

}



function rendergame() {
    //cardEl.textContent = "card: " + firstcard + " " + secondcard
   // cardEl.textContent = "card: " + cards[0] + " " + cards[1]
    cardEl.textContent = "card: " 
   for ( x = 0; x < cards.length; x++ ) {
    cardEl.textContent += cards[x] + " "
   }
    sumEl.textContent = "sum: " + sum
if ( cards <= 20) {
  message = "do you want to play"
} else if (cards ===21) {
    message = "won black jack"
    hasBlackjack = false
} else {
    message= "you are out"
    isAlive = false
}
messageEl.textContent = message
//console.log(message)
}


 function newCard() {
    if (isAlive === true && hasBlackjack === false ) {
    // let card = 7
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    rendergame()

 }
}