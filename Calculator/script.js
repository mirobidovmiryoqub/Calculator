let firstNumber = "";
let secondNumber = "";
let operator = "";
let display = document.querySelector(".display");

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : "Error"; }

function operate(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        default: return num2;
    }
}

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => {
        if (operator === "") {
            firstNumber += button.textContent;
            display.textContent = firstNumber;
        } else {
            secondNumber += button.textContent;
            display.textContent = secondNumber;
        }
    });
});

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber !== "") {
            operator = button.textContent;
        }
    });
});

document.querySelector(".equal").addEventListener("click", () => {
    if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
        firstNumber = operate(operator, firstNumber, secondNumber).toString();
        display.textContent = firstNumber;
        secondNumber = "";
        operator = "";
    }
});

document.querySelector(".clear").addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "0";
});

document.querySelector(".backspace").addEventListener("click", () => {
    if (secondNumber !== "") {
        secondNumber = secondNumber.slice(0, -1);
        display.textContent = secondNumber || "0";
    } else if (operator !== "") {
        operator = "";
    } else {
        firstNumber = firstNumber.slice(0, -1);
        display.textContent = firstNumber || "0";
    }
});

document.querySelector(".decimal").addEventListener("click", () => {
    if (operator === "" && !firstNumber.includes(".")) {
        firstNumber += ".";
        display.textContent = firstNumber;
    } else if (!secondNumber.includes(".")) {
        secondNumber += ".";
        display.textContent = secondNumber;
    }
});
