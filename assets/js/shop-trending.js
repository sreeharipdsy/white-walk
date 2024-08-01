

function renderTrendingProducts(trendingProducts) {
  const trendingProductList = document.getElementById('product-list');
  trendingProductList.innerHTML = '';
  trendingProducts.forEach(trendingProduct => {
    const trendingProductCard = document.createElement('div');
    trendingProductCard.classList.add('card');
    trendingProductCard.setAttribute('data-aos', 'zoom-in');
    trendingProductCard.innerHTML = `
      <div class="product-img">
        <img 
          src="${trendingProduct.image}" 
          class="w-100" 
          alt="${trendingProduct.name} Image"
          onclick="openProductPage(${trendingProduct.id})">
      </div>
      <div class="product-description">
        <div class="name-rating">
          <p class="p-name mb-0">${trendingProduct.name}</p>
          <div class="p-rating">5<span>★</span></div>
        </div>
        <div class="p-price">
          <p><span>₹${trendingProduct.price}</span> ₹${trendingProduct.discountedPrice}</p>
        </div>
        <div class="card-buttons">
          <button class="add-to-cart" onclick="addToCart(${trendingProduct.id})">Add to Cart</button>
          <button class="buy-now" onclick="buyNow('${trendingProduct.name}')">Buy Now</button>
        </div>
      </div>
    `;
    // productCard.addEventListener('click', () => openProductPage(product));
    trendingProductList.appendChild(trendingProductCard);
  });
}

