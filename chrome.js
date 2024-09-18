//let myleads = `["ww.awesome.come"]`
//myleads = JSON.parse(myleads)
//myleads.push("www.lead.com")
//myleads = JSON.stringify(myleads)
//console.log(typeof myleads)

let myleads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
let listitems = ""
const deleteBtn = document.getElementById("delete-btn")
let leadsfromleadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))
let tabBtn = document.getElementById("tab-btn")

const tab = [
    {url:"http://127.0.0.1:5500/chrome.html"}
]

tabBtn.addEventListener ("click", function(){
    console.log(tab[0].url)
})

if (leadsfromleadsFromLocalStorage) {
   myleads = leadsfromleadsFromLocalStorage
   render(myleads)
}

function render(leads) {
    for (x = 0; x < leads.length; x++) {
        //ulEl.innerHTML += "<li>" + myleads[x] + "</li> "
    listitems += "<li><a href = '#'>" + leads[x] + "</a></li>"
    }
    ulEl.innerHTML = listitems
    }


deleteBtn.addEventListener("dblclick", function(){
    console.log("gf")
    localStorage.clear()
    myleads = []
    render(myleads)
})

//envent listerner
inputBtn.addEventListener ("click", function() {
    //console.log("button clicked from mr")
    //myleads.push("www.awesomelead.com")
    myleads.push(inputEl.value)
    inputEl.value = ""
    //local storage json
    localStorage.setItem("myleads", JSON.stringify(myleads))
    render(myleads)
    console.log(myleads)

 console.log(localStorage.getItem("myleads")) 
})

