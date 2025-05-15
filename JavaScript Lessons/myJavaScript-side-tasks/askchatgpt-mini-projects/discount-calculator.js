// Task 4. Discount Calculator

// Store a price and apply a discount based on conditions:

// If the price is above 100, apply a 10% discount.

// If above 50 but ≤100, apply a 5% discount.

// Print the final price

// let price = 51;

// let discount1 = 0.1;
// let discount2 = 0.05;

// if (price > 100) {
//   console.log("10% DISCOUNT! Final price: ", price - (price * discount1));
// } else if (price > 50) {
//   console.log("5% DISCOUNT! Final price: ", price - (price * discount2));
// } else {
//   console.log(`No DISCOUNT! Final price: ${price}`);
// }

let price = 120;

let discount1 = 0.1;
let discount2 = 0.05;
 
console.log(price > 100 ? price - (price * discount1) :
            price > 50 ?  price - (price * discount2) :
            `No DISCOUNT! Final price: ${price}`
);