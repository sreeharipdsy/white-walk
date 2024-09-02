

function openProductPage(productId) {
  const product = products.find((p) => p.id === productId);
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
          <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="check-out" onclick="buyNow('${product.name}')">Order Via WhatsApp</button>
        </div>
      </div>
    `;

  toggleProductModal();
}

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

window.addEventListener("popstate", function (event) {
  const modal = document.getElementById("product-modal");
  if (modal.classList.contains("show")) {
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

function buyNow(productName) {
  window.open(
    `https://wa.me/+917592984622?text=I'm interested in buying ${productName}`,
    "_blank"
  );
}
