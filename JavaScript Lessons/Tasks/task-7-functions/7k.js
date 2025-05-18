// 7k. Create a copy of the Cart Quantity project from exercise 6l.
// • Create a function 'updateCartQuantity' and reuse the code. 

      let cartQuantity = 0;

      function updateCartQuantity(change) {
        if (cartQuantity + change > 10) {
          alert('The cart is full');

        } else if (cartQuantity + change < 0) {
          alert('Not enough items in the cart');

        } else {
          cartQuantity += change;
          console.log(`Cart quantity: ${cartQuantity}`);
        }
      }