//initilize to be zero
//listen for click on yhe increment button
//increment when button is clicked
//change the id in HTML to reflect new count
// document.getElementById("rx").innerText=5
/* let saveEl = document.getElementById("save-el")
console.log(saveEl)
let elrx = document.getElementById("rw")
console.log(elrx)
let row = 0
function increment (){
     row = row + 1
     saveEl.innerText += row
    //console.log(row)
   
}

function save () {
    let rowstr = row + "-" 
    saveEl.innerText += rowstr
    elrx.innerText = 0
    row = 0
    console.log(row)
}

 */
let totalEl = document.getElementById("total-el")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
console.log(totalEl)

 function increment() {
    count = count + 1
    countEl.innerText = count
   
 }

 function save ()  {
    //console.log(count)
    let countstr = count + "- "
   saveEl.textContent += countstr
   //totalEl.textContent +=  countstr
   countEl.innerText = 0
   count = 0

    console.log(count)
 }
  function total()  {
    totalEl.textContent +=  count + countstr
  }