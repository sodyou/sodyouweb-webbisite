



function savelead() {
    console.log("button-clicked from onclick attributes")
}



//let myleads = ["www.g.com","www.f.com","www.hgs.com"]
// deployment steps
//chrome://extensions/
// click upacked button from icons
// navigate to lead tracker folder clicked select


//storing lead to local storage
/* let myleads = `["www.ahue.com"]`
myleads = JSON.parse(myleads)
myleads.push("www.epiclead.com")
myleads = JSON.stringify(myleads)
console.log(typeof myleads)
console.log(myleads) */

let myleads = []
let oldleads = []
const inputEl = document.getElementById("input-el")
let urlEl = document.getElementById("url-el")
console.log(urlEl)

// using local storage 
//localstorage.setitem(key,value)
//localstorage.getitem(key)
//localstorage.setitem("myName","boy yuo keo")
//let name =  localstorage.getitem("myName")
//console.log(name)
console.log( localStorage.getItem("myleads") )
let inputBtn = document.getElementById("input-btn")

const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
   myleads = leadsFromLocalStorage
   render(myleads)
}

const tab = [
   {
      url: "http://127.0.0.1:5500/chromeEx.html"  
   } 
]

tabBtn.addEventListener("clicked", function(){
  // console.log(tab [0].url)
   myleads.push(tab[0].url)
   localStorage.setItem("myleads", JSON.stringify(myleads))
   render(myleads)
   // API = chrome.tab.query({active: true, currentwindow: true}, function(tab) cosole.log (tab)) 
})


function render (leads)   {
   let listitems = ""
   for (let x = 0; x < leads.length; x ++) {
      // console.log(myleads[x])
     // urlEl.textContent +=  myleads[x] + " "
      //urlEl.innerHTML += "<li>" +  myleads[x] + "</li> "
      
      
      // adding <a> links
   //listitems += "<li><a href= '#'>" +  myleads[x] + "</a></li>"
   //listitems += "<li><a targent = '_blank' href= '" + myleads[x] +"'>" +  myleads[x] + "</a></li>"
   // templete strings
   listitems += 
   `<li>
   <a 
   targent = '_blank' href= '${leads [x]}'>${leads[x]}
   </a>
   </li>`
   }
   urlEl.innerHTML = listitems
   
      //usinh create element() and append() instead of innerHTML
      // create element
      // set text content
      // append to ul
     /*  const li = document.createElement("li")
      li.textContent = myleads[x]
      urlEl.append(li)
    */
   
   
   }

deleteBtn.addEventListener ("dblclick", function (){
   console.log("double-clicked")
   //when clicked, clear storage,  myleads add dom
   localStorage.clear()
   myleads = []
   render(myleads)
})

inputBtn.addEventListener("click", function () {
   // console.log("Button-clicked from addEventListener")
  
   //push the value from the input inpuuEl into the mylead arrays
  //push to the mylead array
   myleads.push(inputEl.value)         //("www.awesomelead.com")
  inputEl.value = ""

  localStorage.setItem("myleads",JSON.stringify(myleads))
console.log (localStorage.getItem("myleads"))
   //console.log(myleads)
   render (myleads)
})
    
//loggin out the items in the myleads array using a for loop
//render the leads in the unordered list using UrlEl.textcontent

// ...........___________........

//function render ()   {
//let listitems = ""
//for (let x = 0; x < myleads.length; x ++) {
   // console.log(myleads[x])
  // urlEl.textContent +=  myleads[x] + " "
   //urlEl.innerHTML += "<li>" +  myleads[x] + "</li> "
   
   
   // adding <a> links
//listitems += "<li><a href= '#'>" +  myleads[x] + "</a></li>"
//listitems += "<li><a targent = '_blank' href= '" + myleads[x] +"'>" +  myleads[x] + "</a></li>"
// templete strings
//listitems += 
/* `<li>
<a 
targent = '_blank' href= '${myleads [x]}'>${myleads[x]}
</a>
</li>` */
//}
//urlEl.innerHTML = listitems

   //usinh create element() and append() instead of innerHTML
   // create element
   // set text content
   // append to ul
  /*  const li = document.createElement("li")
   li.textContent = myleads[x]
   urlEl.append(li)
 */


//}
//............______________................



 

//ADD BUTTON AND INPUT TAG
//INPUT BUTTON WORK ONCLICK
//REFACTOR TO addEventListener

let box = document.getElementById("box")
box.addEventListener ("click", function(){
  console.log("i want to open box")
})
//create the mylead array and inputEl

// when to say const and let
let mon = "rg"
const son = "rat"

//writting innerHTML

//templete strings/literals

const recipent = "james"
const gou = "hey buy you"

//const email = "hey " + recipent + "!this it going? chear per"
const email = `
hey  ${recipent}! !
this it going? chear ${gou}
`
console.log(email)


// using local storage 
//1 clear = localstorage.clear()
//2 puy = localstorage.setitems("keys", "url")

//truthy and falsy values

const credit = 0
 if (credit) {
   console.log("let play") 
 } else {
   console.log("sooru, you no credit")
 }

//false value
// 0
// ""
// null how developer signalize emptiness
// undefined how javascript signalized emptiness
// NaN
 
console. log (Boolean ("")  )  // false
console. log (Boolean ("0"))   // true
console. log (Boolean (100))    // ture
console. log (Boolean (null))   // false
console. log (Boolean ([0]))    // true
console. log (Boolean (-0))      // false

// let and const

let player = "son"
let opponents = "nick"
let games = "AminzingFighter"

let point = 0
let haswon = false

// playing the games
point = 100
haswon = true

if (haswon) {""
   console.log(player + " got " + point + " and won the  " + games +"  game!")
}else  {
   console.log ("The winner is " + opponents + " ! " + player + " lost the game")

}

// log out items in arrays using parameters function

let myCourse = ["learn cs  animation", "UI dessign foundation", "intro to clean code"]

   function logItems (arr){
      for ( let x = 0; x < arr.length; x++) {
         console.log(arr[x])
      }
   }

   logItems(myCourse)



   // save to localstorage

   //localStorage.setItem("mycredit", "100")
let mycredit =    localStorage.getItem("mycredit")
console.log(mycredit)


// ADDING EVENTS LISTENER AND OBJECTS IN ARRAYS
// generate sentencw

function generateSentence(desc,arr) {
   let baseString = `The ${arr.length} ${desc} are`
   const lastindex = arr.length - 1
   for (let x = 0; x < arr.length; x++) {
      if ( x ===lastindex) {
         baseString += arr[x]
      } else {
      baseString += arr[x] + ", "
   }

   }
   return baseString
}
const sentence = generateSentence ("highest moutain", ["mount Everest", "k2"])

console.log(sentence)


// RENDER IMAGE
