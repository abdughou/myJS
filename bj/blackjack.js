/* 
Arrays
objects
booleans
if else statements
comparison operators
logical operators
for loops
The Math Objects
function with returns
function in an object

*/


let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerel = document.getElementById("player-el");

let player = {
    playerName: "Per",
    playerChips: 150,
    hellofunc : function() {
        console.log("Hi22");
    }
}

playerel.textContent = player.playerName + ": $" + player.playerChips;
player.hellofunc()
function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    hasBlackJack = false;
    isAlive = true;
    message = "";
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards:";
    for (let i = 0; i < cards.length; i++ ) {
        cardsEl.textContent = cardsEl.textContent + cards[i] + " "; 
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card
        cards.push(card);
        // Push the card to the cards array
        renderGame();
        console.log(cards);
    }
}


function getRandomCard() {
    
    r = Math.floor((Math.random()*13) + 1)  // returns 1 to 13
    if (r === 1)  
        return 11; // Ace to 11
    else if (r === 11 || r === 12 || r === 13)  // J, Q, K to 10
        return 10;
    else
        return r;
    
}

let hands = ["rock", "paper", "scissor"];

function getHand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return randomIndex
}

console.log(hands[getHand()]);

let fruit = ['🍎','🍎','🍊','🍎','🍎','🍊','🍊','🍊','🍎','🍎']

let appleShelf = document.getElementById("apple-shelf");
let oragneShelf = document.getElementById("orange-shelf");

function sortFruit() {
    for (i=0;i<fruit.length;i++) {
        if (fruit[i] === '🍎') {
            appleShelf.textContent += fruit[i]
        }
        else {
            oragneShelf.textContent += fruit[i]
        }

    }
}

sortFruit();