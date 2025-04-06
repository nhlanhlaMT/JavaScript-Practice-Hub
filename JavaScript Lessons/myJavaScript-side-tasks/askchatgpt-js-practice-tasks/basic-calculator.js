// Task 1. Basic Calculator

// Create a program that takes two numbers and an operator (+, -, *, /) as variables.

// Use if-statements to determine the operation and print the result.


let num1 = 20;
let num2 = 5;

let operator = "/";

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  result = "Invalid operator";
}

console.log(`Result: ${result}`);