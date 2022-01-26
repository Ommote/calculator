"use strict";

// Calculator App
// 1. must take number inputs (as a minimum)
// 2. must take an operator
// 3. must perform a calculation based on number and operator INPUTS
// 4. must OUTPUT a correct result
// VARIABLES
// display
var display = document.getElementById("display"); // number buttons

var numbers = document.querySelectorAll(".number"); // operator buttons

var operators = document.querySelectorAll(".operator"); // equals button

var equals = document.getElementById("equals"); // other buttons

var reset = document.getElementById("reset");
var message = document.getElementById("message"); // array for storing inputs

var calcArr = []; // logic for cycling through numbers and displaying result to display div

numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    if (display.innerText === "+") {
      display.innerText = "";
    } else if (display.innerText === "-") {
      display.innerText = "";
    } else if (display.innerText === "*") {
      display.innerText = "";
    } else if (display.innerText === "/") {
      display.innerText = "";
    } else if (display.innerText === "%") {
      display.innerText = "";
    }

    display.innerText += number.innerHTML;
  });
}); // logic for cycling through operators

operators.forEach(function (operator) {
  operator.addEventListener("click", function (event) {
    calcArr.push(display.innerText);
    display.innerText = operator.innerHTML;
    calcArr.push(operator.innerHTML);
    console.log(calcArr);
  });
}); // logic for equals button: performs calculation based on value of calcArr[1] (whether it is a +, -, *, /)

equals.addEventListener("click", function (event) {
  console.log(display.innerText);
  calcArr.push(display.innerText);
  display.innerText = equals.innerHTML;
  calcArr.push(equals.innerHTML);
  var total = 0;

  switch (calcArr[1]) {
    case "+":
      total = Number(calcArr[0]) + Number(calcArr[2]);
      break;

    case "-":
      total = Number(calcArr[0]) - Number(calcArr[2]);
      break;

    case "/":
      total = Number(calcArr[0]) / Number(calcArr[2]);
      break;

    case "*":
      total = Number(calcArr[0]) * Number(calcArr[2]);
      break;

    case "%":
      total = Number(calcArr[0]) % Number(calcArr[2]);
      break;

    default:
      display.innerText = "Error";
  }

  display.innerText = total;
});
reset.addEventListener("click", function (event) {
  display.innerText = "";
  calcArr = [];
});

var hello = function hello() {
  display.innerText = "Hello";
};

message.addEventListener("click", function (event) {
  hello(); //   setTimeout((display.innerText = ""), 1000);
});