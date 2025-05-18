// 7j. Create a copy of the Calculator project from exercise 5r (if you didn't do 5r, copy the code for 5r from the solutions).
// • Notice there's a lot of duplicated code in the buttons. 
// •Create a function 'updateCalculation' and reuse the code. 

 let calculation = '';

      function updateCalculation(value) {
        calculation += value;
        console.log(calculation);
      }