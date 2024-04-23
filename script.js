function addToCart(productId) {
  let productName, productPrice;

  if (productId === 'Product1') {
    productName = 'iPhone 15';
    productPrice = 699.99;
  } else if (productId === 'Product2') {
    productName = 'Samsung S24 Ultra';
    productPrice = 1399.99;
  } else if (productId === 'Product3') {
    productName = 'Samsung A15';
    productPrice = 179.99;
  } else if (productId === 'Product4') {
    productName = 'Playstation 5';
    productPrice = 699.99;
  } else if (productId === 'Product5') {
    productName = 'Playstation 4';
    productPrice = 399.99;
  } else if (productId === 'Product6') {
    productName = 'Xbox One';
    productPrice = 599.99;
  }

  let quantityInputId = 'product' + productId.slice(-1);
  let quantity = parseInt(document.getElementById(quantityInputId).value);

  if (isNaN(quantity) || quantity <= 0) {
    alert('Please enter a valid quantity.');
    return;
  }

  let totalPrice = productPrice * quantity;

  let cartItem = {
    name: productName,
    quantity: quantity,
    price: totalPrice
  };

  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  cartItems.push(cartItem);

  localStorage.setItem('cart', JSON.stringify(cartItems));

  alert('Item added to cart successfully!');
}

function loadCartItems() {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let totalPrice = 0;

  let cartTableBody = document.getElementById('cart-items');
  cartTableBody.innerHTML = '';

  cartItems.forEach((item, index) => {
    let row = cartTableBody.insertRow();

    let cellIndex = row.insertCell(0);
    cellIndex.textContent = index + 1;

    let cellName = row.insertCell(1);
    cellName.textContent = item.name;

    let cellQuantity = row.insertCell(2);
    cellQuantity.textContent = item.quantity;

    let cellTotal = row.insertCell(3);
    cellTotal.textContent = item.price;

    totalPrice += item.price;
  });

  document.getElementById('total-price').textContent = totalPrice;
}

function clearCart() {
  localStorage.removeItem('cart');
  loadCartItems(); // Reload cart items after clearing
}

  document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Your files have been submitted. You will be contacted shortly with a quote.');
  });