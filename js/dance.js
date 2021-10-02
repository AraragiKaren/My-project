let container = document.getElementById("containerVid")

function playVid() {
    container.innerHTML ="<video width='100%' autoplay muted controls><source src='video/ei-chan.mp4' type='video/mp4'></video>"
         
}
function anotherVid() {
    container.innerHTML ="<video width='100%' autoplay muted controls><source src='video/raiden.mp4' type='video/mp4'></video>"
}
document.getElementById("watch").addEventListener("click", playVid)
document.getElementById("next").addEventListener("click", anotherVid)
