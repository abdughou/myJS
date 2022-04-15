// initialize the button
// listen for button click
// increment count
// display in the element

let count = 0;
let countEl = document.getElementById("count-el");
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    saveEl.innerText += count + "," 
    count = 0;
}

let name = 42;
let greeting = "Hi, my name is ";
let myGreeting = greeting + name;

let points = 4;
let bonusPoints = "10";

let totalPoints = 4 + 10;
console.log(points+bonusPoints);
console.log(totalPoints);

welcomeEl.innerText = "Welcome Abdulla!";
welcomeEl.innerText = welcomeEl.innerText + "😎"