

function openProductPage(productId) {
  const product = trendingProducts.find(p => p.id === productId);
  
  const modalBody = document.getElementById('modal-body');
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
          Sizes Available: 
          <span><strong>EURO <span>${product.size}</span></strong></span> 
        </p>
        <p class="alert">
            Check Size & Colour with the dealer while ordering
        </p>
        <button class="check-out" onclick="buyNow('${product.name}')">Order Via WhatsApp</button>
      </div>
    </div>
  `;

  toggleProductModal();
}

function toggleProductModal() {
  const modal = document.getElementById('product-modal');
  modal.classList.toggle('show');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function buyNow(productName) {
  window.open(`https://wa.me/?text=I'm interested in buying ${productName}`, '_blank');
}
