let container = document.getElementById("containerVid")
let video = document.createElement("video")
video.autoplay = true
video.muted = true
video.setAttribute("controls", "")
function raidenSaySo() {
    video.src = "video/ei-chan.mp4"
    container.appendChild(video)
                            // `<video width='100%' autoplay muted controls>
                            //     <source src='video/ei-chan.mp4' type='video/mp4'>
                            // </video>`
}
function raidenRenai() {
    video.src = "video/raiden.mp4"
    container.appendChild(video)    
                            // `<video width='100%' autoplay muted controls>
                            //     <source src='video/raiden.mp4' type='video/mp4'>
                            // </video>`
}
function raidenSummer() {
    video.src = "video/ei-raiden.mp4"
    container.appendChild(video)
                            // `<video width='100%' autoplay muted controls>
                            //     <source src='video/ei-chan.mp4' type='video/mp4'>
                            // </video>`
}
function raiden105() {
    video.src = "video/ei.mp4"
    container.appendChild(video)
                            // `<video width='100%' autoplay muted controls>
                            //     <source src='video/ei-chan.mp4' type='video/mp4'>
                            // </video>`
}
document.getElementById("vid1").addEventListener("click", raidenSaySo)
document.getElementById("vid2").addEventListener("click", raidenRenai)
document.getElementById("vid3").addEventListener("click", raidenSummer)
document.getElementById("vid4").addEventListener("click", raiden105)
