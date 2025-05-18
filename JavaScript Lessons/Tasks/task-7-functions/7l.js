// 7l. Modify 'updateCartQuantity' so that if the quantity is invalid, alert(); and then return; (this is called an early return). An early return make our code cleaner because we can remove the 'else-if' / 'else'.l

      let cartQuantity = 0;

      function updateCartQuantity(change) {
        if (cartQuantity + change > 10) {
          alert('The cart is full');
          return;
        }

        if (cartQuantity + change < 0) {
          alert('Not enough items in the cart');
          return;
        }

        cartQuantity += change;
        console.log(`Cart quantity: ${cartQuantity}`);
      }