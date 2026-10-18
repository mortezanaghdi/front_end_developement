let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "morteza",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function startGame() {
    isAlive = true
    let randomNum1 = getRandomCard()
    let randomNum2 = getRandomCard()
    cards.push(randomNum1, randomNum2)
    sum = randomNum1 + randomNum2
    renderGame()
}


function getRandomCard() {
    let randomCardNumber = Math.floor( Math.random()*13 ) + 1
    if (randomCardNumber === 1) {
        return 11
    } else if (randomCardNumber === 11 || randomCardNumber === 12 || randomCardNumber === 13) {
        return 10
    } else {
        return randomCardNumber
    }
}
    

function renderGame() {
    cardsEl.textContent = "Cards "
    sumEl.textContent = "Sum: " + sum

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    else {
        window.alert("Can't allow!")
    }
}