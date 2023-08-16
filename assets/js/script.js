// let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13]
// let sum = 0
// let isAlive = false
// let hasBlackJack = false
// let message = ""
// let messageContent = document.getElementById("message-content")
// let cardsContent = document.getElementById("cards-content")
// let sumContent = document.getElementById("sum-content") 
// function getRandomCard() {
//     let num = math.floor(math.floor() *[cards[i]]) +1
//     if (num == 1) return 11
//     else if (num == 11 || num == 12 || num == 13)return 13
//     else return num
// }
// let startGameEl = document.getElementById("startGame")
// startGameEl.EventListener("click" , 
// function startGame() {
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard , secondCard]
//     sum = firstCard + secondCard
//     isAlive = true
//     renderGame()
// })
// function renderGame() {
//     cardsContent.textContent = "cards:"
//     for (let i = 0; i <cards.length; i++) cardsContent.
//     textContent += " " + cards[i]
//     sumContent.textContent = "sum: " + sum
//     if (sum < 21) {
//         message = "Drw a new card"
//     }
//     else if (sum === 21) {
//         messagemessage = "blackJack"
//         hasBlackJack = true
//     }
//     else{
//         message = " Game over"
//         isAlive = false
//     }
//     messageContent.textContent = message
// }
// function newCard() {
//     if (isAlive) {
//         let card = getRandomCard()
//         cards.push(cards)
//         sum += card
//         renderGame()
//     }
// }
let player = {
    name: "ali",
    chips: 200
}

let isAlive = false

let sum = 0
let messageEl = document.getElementById("message-content")
let cardsEl = document.getElementById("cards-content")
let sumEl = document.getElementById("sum-content")
let playerEl = document.getElementById("player-content")


messageEl.innerHTML = "Want to play around?"
cardsEl.innerHTML = "cards:"
sumEl.innerHTML = "sum:"
playerEl.innerHTML = `${player.name} : $${player.chips}`

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13) +1
    return randomNumber 
 }
function startGame(){
   if(isAlive == false){
        isAlive = true
        player.chips -= 50
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = firstCard + secondCard
        cardsEl.innerHTML = `cards: ${firstCard} ${secondCard}`
        sumEl.innerHTML = `sum: ${sum}`
        playerEl.innerHTML = `${player.name} : $${player.chips}`
        renderGame()
    
  }else{
    alert(`you already have started the game`)
  }

}
function newCard(){
    if(isAlive == true && player.chips >= 50 && sum < 21){
        player.chips -= 50
        let card = getRandomCard()
        cardsEl.innerHTML += ` ${card}`
        sum += card
        sumEl.innerHTML = `sum: ${sum}`
        playerEl.innerHTML = `${player.name} : $${player.chips}`
        renderGame()
    }
}
function renderGame(){
    if(sum < 21){
        messageEl.innerHTML = "do you want a new card ?"
    }else if(sum == 21){
        messageEl.innerHTML = "you win !"
    }else if (player.chips == 0){
        messageEl.innerHTML = "you are out money , try againe"

    }else{
        messageEl.innerHTML = "sorry, you lose, try again"
    }

}
function reset(){
    if(sum > 21 || player.chips == 0 ){
        location.reload()
        
    }
}

    