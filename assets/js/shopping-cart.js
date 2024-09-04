
// In the provided code snippet, an empty array `cart` is initialized to store cart items. Once the DOM content is fully loaded, two functions are called: `loadCart()` and `updateCart()`. The `loadCart()` function presumably retrieves and populates the cart with previously saved items (e.g., from local storage or a database), while the `updateCart()` function likely updates the cart's display or performs operations based on the current contents of the cart. This setup ensures that the cart state is properly loaded and displayed whenever the page is accessed or reloaded.
let cart = [];
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  updateCart();
});

// The `addToCart` function adds a product to the cart by first locating the product from the `window.products` array using the provided `productId`. If the product is found, it is added to the `cart` array. After updating the cart, the function calls `saveCart()` to persist the cart's state (likely to local storage or a database) and `updateCart()` to refresh the cart's display. If the product is successfully added, a SweetAlert notification with a success message is displayed, confirming that the item has been added to the cart. If the product is not found, an error message is logged to the console.
function addToCart(productId) {
  const product = window.products.find((p) => String(p.id) === String(productId));
  if (!product) {
    console.error("Product not found for cart:", productId);
    return;
  }
  cart.push(product);
  saveCart();
  updateCart();
  Swal.fire({
    title: "Item Added to Cart",
    icon: "success",
  });
}

// The `showToast` function displays a toast notification on the screen. It first retrieves the toast element by its ID and then makes it visible by adding the `show` class and setting its display to `flex`. The toast is styled to appear with full opacity and normal scale. After a delay of 2 seconds (during which the toast is visible), the opacity is gradually reduced to 0, and the scale is reduced to 0.5, creating a fade-out and shrink effect. Another delay of 300 milliseconds ensures that the `show` class is removed after the animation completes, hiding the toast element from the DOM.
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  toast.style.display = "flex";
  toast.style.opacity = "1";
  toast.style.transform = "scale(1)";
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "scale(0.5)";
    setTimeout(() => toast.classList.remove("show"), 300);
  }, 2000);
}

// The `updateCart` function updates the cart display on the webpage. It starts by updating the cart count displayed in an element with the class `cart-count` to reflect the number of items in the cart. The function then clears the current cart items displayed in an element with the ID `cart-items`. For each product in the cart, it creates a list item (`<li>`) that includes the product's image, name, discounted price, and a delete button. The delete button has an `onclick` event that triggers the `removeFromCart` function for the specific product. After populating the cart items, the function calculates the total price of all items in the cart and updates an element with the ID `total-price` to display this total, formatted to two decimal places.
function updateCart() {
  const cartCount = document.querySelector(".cart-count");
  const cartItems = document.getElementById("cart-items");
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  cart.forEach((product) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="50">
        <span class="name">${product.name}</span>
        <span>₹${product.discountedPrice}</span>
        <button onclick="removeFromCart('${product.id}')">
            Delete
            <img  src="assets/icons/delete.svg" 
                  alt="Delete">
        </button>
        `;
    cartItems.appendChild(cartItem);
  });
  const totalPrice = cart.reduce(
    (sum, product) => sum + product.discountedPrice,
    0
  );
  document.getElementById(
    "total-price"
  ).textContent = `Total: ₹${totalPrice.toFixed(2)}`;
}

// The `removeFromCart` function removes a product from the cart by its ID. It filters the `cart` array to exclude the product with the specified ID. After updating the `cart` array, it calls `saveCart` to persist the changes, and then calls `updateCart` to refresh the cart display on the webpage. This ensures that the product is removed both from the cart data and the visible cart list.
function removeFromCart(productId) {
  cart = cart.filter((product) => String(product.id) !== String(productId));
  saveCart();
  updateCart();
}

// The `saveCart` function saves the current state of the `cart` array to the browser's localStorage. It converts the `cart` array into a JSON string using `JSON.stringify` and stores it under the key `"cart"`. This allows the cart's contents to be persisted across page reloads or browser sessions, so users can maintain their cart's state even after navigating away from the page or closing the browser.
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// The `loadCart` function retrieves the saved cart data from the browser's localStorage. It checks if there is an item stored under the key `"cart"`. If found, it parses the JSON string back into an array using `JSON.parse` and assigns it to the `cart` variable. This restores the cart's previous state, allowing users to see their cart items even after refreshing the page or reopening the browser. If no cart data is found, the `cart` array remains empty.
function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}
