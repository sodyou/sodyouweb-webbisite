const imgs = [
    "pexels-julian-jagtenberg-103123 - Copy.jpg",
    "pexels-julian-jagtenberg-103123 - Copy.jpg",
    "pexels-julian-jagtenberg-103123 - Copy.jpg"
]

const container = document.getElementById("container")
 
function renderimage () {
    for( let x = 0; x < imgs.length; x++) {
        container.innerHTML += `<img class="team-ing" src="${imgs[x]}>`
    }
}
renderimage()