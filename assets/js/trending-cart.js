// This line of code retrieves the `trendingCart` data from local storage and parses it from a JSON string into a JavaScript array. If no data is found (i.e., `localStorage.getItem("trendingCart")` returns `null`), it initializes `trendingCart` as an empty array (`[]`). This approach ensures that `trendingCart` always contains a valid array, even if the local storage is empty or doesn't contain the expected data.
let trendingCart = JSON.parse(localStorage.getItem("trendingCart")) || [];

// This code snippet sets up an event listener for the `DOMContentLoaded` event, which fires when the initial HTML document has been completely loaded and parsed. When this event occurs, it calls the `updateTrendingCart` function. This function is likely responsible for updating the state or content related to trending items in the cart, ensuring that the latest data is reflected in the user interface as soon as the page is ready.
document.addEventListener("DOMContentLoaded", () => {
  updateTrendingCart();
});

// The `addToCartTrending` function adds a product to the `trendingCart` array based on the provided `productId`. It first locates the product in the `trendingProducts` array, then pushes it to `trendingCart`. After updating the cart, it calls `updateTrendingCart` to reflect the changes in the user interface and `saveCartToLocalStorage` to store the updated cart data persistently. Additionally, it uses SweetAlert (`Swal.fire`) to display a success message indicating that the item has been added to the cart.
function addToCartTrending(productId) {
  const product = trendingProducts.find((p) => p.id === productId);
  trendingCart.push(product);
  updateTrendingCart();
  saveCartToLocalStorage();
  // showToast("Item Added to Cart");
  Swal.fire({
    title: "Item Added to Cart",
    icon: "success",
  });
}

// The `saveCartToLocalStorage` function saves the `trendingCart` array to local storage. It converts the `trendingCart` array into a JSON string using `JSON.stringify()` and stores it under the key `"trendingCart"` in local storage. This ensures that the current state of the `trendingCart` is persisted across page reloads or browser sessions.
function saveCartToLocalStorage() {
  localStorage.setItem("trendingCart", JSON.stringify(trendingCart));
}

// The `updateTrendingCart` function updates the cart's display with the current contents of the `trendingCart`. It updates the cart count by setting the text content of the `.cart-count` element to the length of the `trendingCart`. It then clears and repopulates the `cart-items` element with a list of items in the cart, creating a new list item (`<li>`) for each product that includes an image, name, price, and a delete button. The delete button calls the `removeFromTrendingCart` function when clicked. Finally, it calculates the total price of all items in the cart and displays it in the `total-price` element.
function updateTrendingCart() {
  const cartCountTrending = document.querySelector(".cart-count");
  const cartItemsTrending = document.getElementById("cart-items");
  cartCountTrending.textContent = trendingCart.length;
  cartItemsTrending.innerHTML = "";
  trendingCart.forEach((trendingProduct) => {
    const cartItemTrending = document.createElement("li");
    cartItemTrending.innerHTML = `
        <img src="${trendingProduct.image}" alt="${trendingProduct.name}" width="50">
        <span class="name">${trendingProduct.name}</span>
        <span>₹${trendingProduct.discountedPrice}</span>
        <button 
          onclick="removeFromTrendingCart(${trendingProduct.id})">
            Delete
          <img src="assets/icons/delete.svg" alt="Delete">
        </button>
        `;
    cartItemsTrending.appendChild(cartItemTrending);
  });
  const totalPrice = trendingCart.reduce(
    (sum, trendingProduct) => sum + trendingProduct.discountedPrice,
    0
  );
  document.getElementById(
    "total-price"
  ).textContent = `Total: ₹${totalPrice.toFixed(2)}`;
}

// The `removeFromTrendingCart` function removes a product from the `trendingCart` based on its `productId`. It filters out the product with the specified `productId` from the `trendingCart` array. After updating the cart by calling `updateTrendingCart`, it saves the updated cart state to local storage with `saveCartToLocalStorage`.
function removeFromTrendingCart(productId) {
  trendingCart = trendingCart.filter(
    (trendingProduct) => trendingProduct.id !== productId
  );
  updateTrendingCart();
  saveCartToLocalStorage();
}

// The `checkoutTrendingCart` function manages the checkout process for items in the `trendingCart` by creating a comma-separated list of product names and opening a new tab or window with a WhatsApp link. This link pre-fills a message indicating the user's interest in purchasing the listed products. The function maps through the `trendingCart` to extract product names, joins them into a single string, and then uses `window.open` to direct the user to WhatsApp with the message ready for sending. Ensure that product names are properly encoded to handle any special characters in the final message.
function checkoutTrendingCart() {
  const productNames = trendingCart
    .map((trendingProduct) => trendingProduct.name)
    .join(", ");
  window.open(
    `https://wa.me/+917592984622?text=I'm interested in buying the following products: ${productNames}`,
    "_blank"
  );
}

// The `showToast` function is designed to display a toast notification to the user. It first selects the toast element by its ID and applies styles to make it visible, including setting `opacity` to 1 and scaling it to its normal size with `transform`. After a delay of 2000 milliseconds, the function gradually fades out the toast by reducing its opacity and scaling it down, with an additional timeout to remove the `show` class after the fade-out animation completes. This ensures that the toast appears briefly and then disappears smoothly.
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
