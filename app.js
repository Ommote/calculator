
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
    } else if (display.innerText === "%") {
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

// logic for equals button: performs calculation based on value of calcArr[1] (whether it is a +, -, *, /)

equals.addEventListener("click", (event) => {
  console.log(display.innerText);
  calcArr.push(display.innerText);
  display.innerText = equals.innerHTML;
  calcArr.push(equals.innerHTML);
  let total = 0;
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

reset.addEventListener("click", (event) => {
  display.innerText = "";
  calcArr = [];
});

// const hello = () => {
//   display.innerText = "Hello";
// };

const hello = () => {
  display.innerText = "Hello";
};
const world = () => {
  display.innerText = "World";
};

const blank = () => {
  display.innerText = "";
};

message.addEventListener("click", (event) => {
  hello();
  setTimeout(world, 1200);
  setTimeout(blank, 3000);
  //   setTimeout((display.innerText = ""), 1000);
});
