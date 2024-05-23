//quotes
const array = ["quote one longer longer is good its even longerrrr oh wow ita crazyyyy noooo this is lorem  lorem also long so i can swee how it looks in a long box that i have created oh wow its long", "so is quote two","so is three","and five","and more","exapmle text", "we will continue","and on and on it goes"]
const authors = ["man1","man2",'Man3',"man4","man5","man6","man7","man8","man9", "man10"]

// select the div in the html by the id name 
const button = document.getElementById("quoteBox")
const holder = document.getElementById("holder")
const author = document.getElementById("author")
const body = document.getElementById("body")


//when body is clicked change quote
quoteBox.addEventListener("click", () => {
    changeQuote()
})

// use random number to select text from the 
// arrays and append them to the html
function changeQuote () {
let randomChoice = getRandomQuote()
holder.textContent = `"${array[randomChoice]}"`
author.textContent = `-${authors[randomChoice]}`
return randomChoice
}

//get random number
function getRandomQuote() {
    let number = Math.floor(Math.random() * 10)
    return number
    }

//appending the dynamical created div to the html in the location (holder)
//document.body.holder.appendChild(holder)


setInterval(changeQuote, 10000);