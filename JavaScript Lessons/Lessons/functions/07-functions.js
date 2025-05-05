// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output

//   A function let's us reused code

/*function function1 () {
  console.log("Hello");
  console.log(2 + 2);
}

function1 ();
function1();*/

function calculateTax(cost, taxPercent = 0.1) {
  console.log(cost * taxPercent);
}

calculateTax(2000, 0.2);
calculateTax(5000);