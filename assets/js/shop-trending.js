
// This script waits for the DOM content to be fully loaded and then calls the `renderTrendingProducts` function, passing `trendingProducts` as an argument. This ensures that the trending products are rendered on the page only after the HTML structure is fully loaded and available.
document.addEventListener('DOMContentLoaded', () => {
    renderTrendingProducts(trendingProducts);
});

// The `renderTrendingProducts` function dynamically generates and displays a list of trending products on the page. It begins by selecting the element with the ID `trending-list` and clearing any existing content within it. For each product in the `trendingProducts` array, it creates a new `div` element with the class `card`, which includes an image, product name, pricing details, and action buttons. Each card also has AOS (Animate On Scroll) attributes for animation effects and includes event handlers for opening the product page, adding the product to the cart, and buying the product. Finally, each newly created card is appended to the `trending-list` container. This approach ensures that the trending products are rendered with interactive elements and animations as specified.
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

