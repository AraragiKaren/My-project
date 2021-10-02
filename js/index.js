//Your Self
//Variable
let urName = document.getElementById("name")
let btn = document.getElementById("name-btn")
let myLocalStorage = JSON.parse( localStorage.getItem("urName") )
let makeTheNameLogOut = document.getElementById("render-out")

if (myLocalStorage) {
    makeTheNameLogOut.innerHTML =  "<p>" + "Hello "  + myLocalStorage  + "</p>"
}
btn.addEventListener("click", function() {
    localStorage.setItem("urName", JSON.stringify(urName.value))
})
// Main Process
// variable
let textLink = []
//input
const inputEl = document.getElementById("link")
//savebuton
const saveBtn = document.getElementById("save-input")
//list of link
const linkGoOut = document.getElementById("render-link") 
//delete button
const deleteBtn = document.getElementById("delete-link")
//save tab button
const saveTab = document.getElementById("save-tab")
//get key from localStorage
const saveLocalStorage = JSON.parse( localStorage.getItem("textLink") )

//Log out localStorage
if (saveLocalStorage) {
    textLink = saveLocalStorage
    createLink()
}
//Crate Link List
function createLink() { 
    let emptyString = ""
    //loop to create list links
    let i = 0
    while (i < textLink.length) {
        emptyString += `<ul>
                            <li>
                                <a href="${textLink[i]}" target="_blank">
                                    ${textLink[i]}
                                </a>
                            </li>                            
                        </ul>`
        i++   
    }
    linkGoOut.innerHTML = emptyString
}
//save button
saveBtn.addEventListener("click", function() {
    //push input value to textLink array
    textLink.push(inputEl.value)
    createLink()
    //save key into localStorage
    localStorage.setItem( "textLink", JSON.stringify( textLink ) )
})
//delete button
deleteBtn.addEventListener("click", function() {
    textLink = []
    //clear localStorage
    localStorage.removeItem("textLink")
    createLink()
})
//save tab button
saveTab.addEventListener("click", function() {
    //chrome API
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        textLink.push(tabs[0].url)
        //save key into localStorage
        localStorage.setItem( "textLink", JSON.stringify( textLink ) )
        createLink()
    })  
})
