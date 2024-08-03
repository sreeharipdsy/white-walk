

document.addEventListener('DOMContentLoaded', () => {
    renderTrendingProducts(trendingProducts);
});

function renderTrendingProducts(trendingProducts) {
    const trendingProductList = document.getElementById('trending-list');
    trendingProductList.innerHTML = '';
    trendingProducts.forEach(trendingProduct => {
        const trendingProductCard = document.createElement('div');
        trendingProductCard.classList.add('card');
        trendingProductCard.setAttribute('data-aos', 'zoom-in');
        trendingProductCard.innerHTML = `
            <img 
                class="w-100" 
                src="${trendingProduct.image}" 
                alt="${trendingProduct.name} Image" 
                onclick="openProductPage(${trendingProduct.id})">
            <h3 onclick="openProductPage(${trendingProduct.id})">${trendingProduct.name}</h3>
            <div class="p-price">
              <p><strike>₹${trendingProduct.price}</strike> ₹${trendingProduct.discountedPrice}</p>
              <span>5★</span>
            </div>
            <div class="card-buttons">
              <button class="add-to-cart" onclick="addToCartTrending(${trendingProduct.id})">Add to Cart</button>
              <button class="buy-now" onclick="buyNow('${trendingProduct.name}')">Buy Now</button>
            </div>
    `;
        // productCard.addEventListener('click', () => openProductPage(product));
        trendingProductList.appendChild(trendingProductCard);
    });
}

