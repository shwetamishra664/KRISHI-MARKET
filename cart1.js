
<div class="product">
  <h3>Product Name</h3>
  <p>Price: $10.00</p>
  <button class="add-to-cart" data-name="Product Name" data-price="10.00">Add to Cart</button>
</div>
  // Example event listener for "Add to Cart" buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      // Get product details
      const productName = this.getAttribute('data-name');
      const productPrice = parseFloat(this.getAttribute('data-price'));

      // Store cart items in localStorage (or use a backend API)
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItem = cart.find(item => item.name === productName);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      // Redirect to cart page
      window.location.href = 'cart.html';
    });
  });

  // Example event listener for "Add to Cart" buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      // Get product details
      const productName = this.getAttribute('data-name');
      const productPrice = parseFloat(this.getAttribute('data-price'));

      // Store cart items in localStorage (or use a backend API)
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItem = cart.find(item => item.name === productName);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      // Redirect to cart page
      window.location.href = 'cart.html';
    });
  });


