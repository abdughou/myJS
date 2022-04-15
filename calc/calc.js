let val1 = 8;
let val2 = 10;

let num1_el = document.getElementById("num1-el");
let num2_el = document.getElementById("num2-el");
let result_el = document.getElementById("result-el");

num1_el.textContent = val1;
num2_el.textContent = val2;
result_el.textContent = "";

function add() {
    result_el.textContent = "Result :" + (val1 + val2)
}

function subtract() {
    result_el.textContent = "Result :" + (val1 - val2)
}

function multiply() {
    result_el.textContent = "Result :" + (val1 * val2)
}

function divide() {
    result_el.textContent = "Result :" + (val1 / val2)
}

function modulus() {
    result_el.textContent = "Result :" + (val1 % val2)
}