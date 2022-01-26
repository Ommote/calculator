// Calculator App

// 1. must take number inputs (as a minimum)

// 2. must take an operator

// 3. must perform a calculation based on number and operator INPUTS

// 4. must OUTPUT a correct result

// VARIABLES
// display
const display = document.getElementById("display");
// number buttons
const numbers = document.querySelectorAll(".number");
// operator buttons
const operators = document.querySelectorAll(".operator");
// equals button
const equals = document.getElementById("equals");
// other buttons
const reset = document.getElementById("reset");
const message = document.getElementById("message");

// array for storing inputs
let calcArr = [];

// logic for cycling through numbers and displaying result to display div
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    if (display.innerText === "+") {
      display.innerText = "";
    } else if (display.innerText === "-") {
      display.innerText = "";
    } else if (display.innerText === "*") {
      display.innerText = "";
    } else if (display.innerText === "/") {
      display.innerText = "";
    }
    display.innerText += number.innerHTML;
  });
});

// logic for cycling through operators
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    calcArr.push(display.innerText);
    display.innerText = operator.innerHTML;
    calcArr.push(operator.innerHTML);

    console.log(calcArr);
  });
});
