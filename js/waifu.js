const randomBtn = document.getElementById("random-btn")
//character's images
let waifuArr = {
    "chizuru":"images/Chizuru.jpg",
    "ruka": "images/ruka.jpg",
    "sumi": "images/sumi.jpg",
    "zerotwo": "images/z2.jpg",
    "gura": "images/gura.jpg",
    "mai": "images/mai.jpg",
    "chitanda": "images/eru.jpg",
    "asuna": "images/Asuna.jpg",
    "hiyori": "images/hiyori.jpg",
    "hitagi": "images/hitagi.jpg",
    "hanekawa": "images/tsubasa.jpg",
    "violet": "images/violet.jpg"

}

//DOM
const renderRandomNum = document.getElementById("lucky-num")
const renderImg = document.getElementById("render-imgs")
const luckNum = document.getElementById("lucky-number")
const luckCha = document.getElementById("lucky-char")
const Wish = document.getElementById("wish")
// const waifuStorage =  localStorage.getItem("waifuArr") 

// if (waifuStorage) {
//     waifuArr.chitanda = waifuStorage
//     waifuFunction()
// }

function waifuFunction() {
    let charName = ""
    luckNum.textContent = "Your Lucky NumBer Is"    
    let randomNum = Math.floor(Math.random() * 12)
    renderRandomNum.innerHTML = "<p id='lucky-number'>" + randomNum + "</p>"
    //Render picture
    if(randomNum == 0) {
        //localStorage.setItem("waifuArr", waifuArr.chitanda)
        renderImg.innerHTML = `<img src="${waifuArr.chitanda}" width ="500px">`
        charName = "Chitanda"
    }
    if(randomNum == 1) {
        renderImg.innerHTML = `<img src="${waifuArr.chizuru}" width ="500px">`
        charName = "Chizuru"
    }
    if(randomNum == 2) {
        renderImg.innerHTML = `<img src="${waifuArr.ruka}" width ="500px">`
        charName = "Ruka"
    }
    if(randomNum == 3) {
        renderImg.innerHTML = `<img src="${waifuArr.sumi}" width ="500px">`
        charName = "Sumi"
    }
    if(randomNum == 4) {
        renderImg.innerHTML = `<img src="${waifuArr.zerotwo}" width ="500px">`
        charName = "Zero Two"
    }  
    if(randomNum == 5) {
        renderImg.innerHTML = `<img src="${waifuArr.mai}" width ="500px">`
        charName = "Mai"
    }
    if(randomNum == 6) {
        renderImg.innerHTML = `<img src="${waifuArr.asuna}" width ="500px">`
        charName = "Asuna"
    }   
    if(randomNum == 7) {
        renderImg.innerHTML = `<img src="${waifuArr.hiyori}" width ="500px">`
        charName = "Hiyori"
    }  
    if(randomNum == 8) {
        renderImg.innerHTML = `<img src="${waifuArr.hanekawa}" width ="500px">`
        charName = "Hanekawa"
    }     
    if(randomNum == 9) {
        renderImg.innerHTML = `<img src="${waifuArr.hitagi}" width ="500px">`
        charName = "Senjougahara"
    }   
    if(randomNum == 10) {
        renderImg.innerHTML = `<img src="${waifuArr.violet}" width ="500px">`
        charName = "Violet"
    }
    if(randomNum == 11) {
        renderImg.innerHTML = `<img src="${waifuArr.gura}" width ="500px">`
        charName = "Gawr Gura"
    }
    //Character's name
    luckCha.innerHTML = "Your Lucky Character Is " + charName  
    Wish.textContent = "✨✨Have a nice day✨✨"
    
}


randomBtn.addEventListener("click", function() {   
    waifuFunction()
})
