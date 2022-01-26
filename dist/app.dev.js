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

var calcArr = [];