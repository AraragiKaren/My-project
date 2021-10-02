let container = document.getElementById("containerVid")

function raidenSaySo() {
    //container.innerHTML ="<video width='100%' autoplay muted controls><source src='video/ei-chan.mp4' type='video/mp4'></video>"
    console.log(container.innerHTML =
                            `<video width='100%' autoplay muted controls>
                                <source src='video/ei-chan.mp4' type='video/mp4'>
                            </video>`)
}
function raidenRenai() {
    container.innerHTML =
                            `<video width='100%' autoplay muted controls>
                                <source src='video/raiden.mp4' type='video/mp4'>
                            </video>`
}
document.getElementById("rai1").addEventListener("click", raidenSaySo)
document.getElementById("rai2").addEventListener("click", raidenRenai)
