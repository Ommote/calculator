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
