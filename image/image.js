const imgs = [
    "../image/pexels-julian-jagtenberg-103123 - Copy.jpg",
    "../image/pexels-julian-jagtenberg-103123 - Copy.jpg",
    "../image/pexels-julian-jagtenberg-103123 - Copy.jpg"
]

const container = document.getElementById("container")
 
function renderimage () {
    let imgsDom = ""
    for( let x = 0; x < imgs.length; x++) {
       /*  container.innerHTML  */imgsDom += `<img class="team-ing" src="${imgs[x]}>`
    }
    container.innerHTML = imgsDom
}
renderimage()