
    // Function to update localStorage with the cart data
    function updateCartInStorage(cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Initialize an empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Event handler for Add to Cart button click
    $(document).on('click', '.add-to-cart', function() {
      const id = $(this).data('id');
      const name = $(this).data('name');
      const price = $(this).data('price');

      const existingProduct = cart.find(item => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ id: id, name: name, price: price, quantity: 1 });
      }

      // Update the cart in localStorage
      updateCartInStorage(cart);

      alert(name + " added to cart!");
    });
   