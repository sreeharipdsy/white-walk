
// The `openProductPage` function is designed to handle the dynamic display of product details when a user selects a specific product on an e-commerce platform. It first searches through the global `window.products` array to find the corresponding product based on the provided `productId`. If the product exists, the function proceeds to update the content of a modal with various product details, including the product's image, name, original price, discounted price, available sizes, and a message prompting users to confirm the size and color with the dealer. Additionally, the modal includes buttons that allow users to either add the product to their cart or proceed with purchasing via WhatsApp. The function also disables right-click functionality on the product images to prevent users from saving or downloading them. Finally, it invokes the `toggleProductModal` function to display the modal, ensuring that users can view the product's details in an organized and visually appealing layout.
function openProductPage(productId) {
  const product = window.products.find((p) => String(p.id) === String(productId));
  if (!product) {
    console.error("Product not found:", productId);
    return;
  }
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <div class="content">
      <div class="p-image">
        <img src="${product.image}" alt="${product.name} Image">
      </div>
      <div class="p-details">
        <h1 class="p-name">${product.name}</h1>
        <div class="price-group">
          <p class="p-price">
            <span>₹${product.price}</span> 
            <span>₹${product.discountedPrice}</span>
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
          <span><strong>${product.size}</strong></span> 
          Available
        </p>
        <p class="alert">
            Check Size & Colour with the dealer while ordering
        </p>
        <button class="add-to-cart" onclick="addToCart('${product.id}')">Add to Cart</button>
        <button class="check-out" onclick="buyNow('${product.name}')">Order Via WhatsApp</button>
      </div>
    </div>
  `;
  const productImages = document.querySelectorAll(".p-image img");
  productImages.forEach((image) => {
    image.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  });
  toggleProductModal();
}


// The `toggleProductModal` function manages the display of a product detail modal on a webpage. If the modal is already visible (indicated by the presence of the "show" class), the function navigates back in the browser's history, effectively closing the modal and returning to the previous page state. If the modal is not visible, the function makes it visible by adding the "show" class and setting its display style to "flex", which ensures the modal overlays the content properly. It also prevents the body from scrolling by setting `overflow` to "hidden". Additionally, the function uses the `window.history.pushState` method to update the browser's history, allowing users to navigate back to the modal state if they use the back button, thereby preserving the modal's open state in the navigation history.
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

// The `popstate` event listener listens for changes to the browser's history, specifically when the user navigates back or forward through the history stack. When the event is triggered, the function checks if the product detail modal is currently visible (i.e., it has the "show" class). If the modal is visible, it removes the "show" class and sets the modal's display style to "none" to hide it. Additionally, it restores the body's ability to scroll by setting `overflow` back to "auto". This ensures that if the user navigates back to a previous state where the modal was open, the modal is properly hidden and the page returns to its normal scrolling behavior.
window.addEventListener("popstate", function (event) {
  const modal = document.getElementById("product-modal");
  if (modal.classList.contains("show")) {
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// The `buyNow` function opens a new browser tab or window to initiate a WhatsApp chat. It uses `window.open` to navigate to a specific URL, which is a WhatsApp chat link. The URL is constructed with a query parameter that pre-fills the message with a text indicating the user's interest in buying a product. The `productName` parameter is included in the message, allowing the user to easily inquire about a specific product by clicking the "Order Via WhatsApp" button. The `"_blank"` target ensures that the chat opens in a new tab or window.
function buyNow(productName) {
  window.open(
    `https://wa.me/+917592984622?text=I'm interested in buying ${productName}`,
    "_blank"
  );
}
