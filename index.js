// player object
player = {
  namee: "Rakin",
  chips: 150,
}

// declaring variables
let card = []
let sum = 0
let hasBlackJack = false
let isALive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerName = document.getElementById("player-el")

// pushing the name of player
playerName.textContent = player.namee + ": $" + player.chips

// generating random number and putting conditions
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

// Start game button
function startGame() {
  isALive = true
  let firstCard = getRandomNumber()
  let secondCard = getRandomNumber()
  card = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

// redering message and results with proper conditions
function renderGame() {
  if (sum <= 20) {
    message = "Do you wanna draw a new card?"
  } else if (sum === 21) {
    message = "whooh!You've got the blackjack"
    hasBlackJack = true
  } else {
    message = "oops!You're out of the game"
    isALive = false
  }
  sumEl.textContent = "Sum: " + sum
  messageEl.textContent = message

  cardEl.textContent = "Card: "
  for (i = 0; i < card.length; i++) {
    cardEl.textContent += card[i] + " "
  }
}

// new card button and its condition
function newCard() {
  if (isALive === true && hasBlackJack === false) {
    let cardvalue = getRandomNumber()
    sum += cardvalue
    card.push(cardvalue)
    renderGame()
  }
}
