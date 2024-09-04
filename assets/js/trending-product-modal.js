
// The `openProductPage` function displays a detailed view of a product in a modal when a product is selected. It first retrieves the product information from the `trendingProducts` array using the provided `productId`. The function then updates the modal's content with the product's image, name, price, discounted price, available sizes, and a message to check size and color with the dealer. It also includes buttons to add the product to the cart or order via WhatsApp. Finally, the function toggles the visibility of the product modal by calling `toggleProductModal`.
function openProductPage(productId) {
  const trendingProduct = trendingProducts.find((p) => p.id === productId);
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <div class="content">
      <div class="p-image">
        <img src="${trendingProduct.image}" alt="${trendingProduct.name} Image">
      </div>
      <div class="p-details">
        <h1 class="p-name">${trendingProduct.name}</h1>
        <div class="price-group">
          <p class="p-price">
            <span>₹${trendingProduct.price}</span> 
            <span>₹${trendingProduct.discountedPrice}</span>
          </p>
          <div class="reviews">
            <a href="/reviews">
              Reviews
              <img src="assets/icons/arrow-forward.svg" alt="">
            </a>
          </div>
        </div>
        <p class="size">
          Sizes: 
          <span><strong>EURO <span>${trendingProduct.size}</span></strong></span> 
          Available
        </p>
        <p class="alert">
            Check Size & Colour with the dealer while ordering
        </p>
        <button class="add-to-cart" onclick="addToCartTrending(${trendingProduct.id})">Add to Cart</button>
        <button class="check-out" onclick="buyNow('${trendingProduct.name}')">Order Via WhatsApp</button>
      </div>
    </div>
  `;
  toggleProductModal();
}

// The `toggleProductModal` function manages the visibility of a product modal. When the modal is not visible (i.e., does not have the class `show`), the function adds the `show` class, sets its display style to "flex", and hides the page scrollbar by setting `document.body.style.overflow` to "hidden". It also updates the browser's history state with `window.history.pushState`, allowing the user to navigate back to the previous state using the browser's back button. If the modal is already visible (i.e., has the `show` class), the function triggers `window.history.back()` to navigate to the previous state and close the modal.
function toggleProductModal() {
  const modal = document.getElementById("product-modal");
  if (modal.classList.contains("show")) {
    window.history.back();
  } else {
    modal.classList.add("show");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    window.history.pushState({ modalOpen: true }, "");
  }
}

// The `window.addEventListener("popstate", ...)` function handles the browser's back button behavior when a modal is open. When a popstate event is detected, it checks if the product modal is currently visible (i.e., has the `show` class). If the modal is visible, the function removes the `show` class, sets its display style to "none", and restores the page scrollbar by setting `document.body.style.overflow` to "auto". This ensures that the modal closes and the page state returns to normal when the user navigates back using the browser's back button.
window.addEventListener("popstate", function (event) {
  const modal = document.getElementById("product-modal");
  if (modal.classList.contains("show")) {
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// The `buyNow` function opens a WhatsApp chat in a new browser tab with a pre-filled message indicating interest in buying a specified product. It uses the `window.open` method to launch a WhatsApp link, including the product name in the message text. Additionally, `event.stopPropagation()` prevents the event from bubbling up to parent elements, which helps ensure that only the intended action (opening WhatsApp) is triggered when the function is called.
function buyNow(productName) {
  window.open(
    `https://wa.me/+917592984622?text=I'm interested in buying ${productName}`,
    "_blank"
  );
}
