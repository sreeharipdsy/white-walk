

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
            <h3>${trendingProduct.name}</h3>
            <div class="p-price">
                <p><strike>₹${trendingProduct.price}</strike> ₹${trendingProduct.discountedPrice}</p>
                <span>5★</span>
            </div>
            <a  class="buy-button text-center"
                onclick="buyNow('${trendingProduct.name}')">
                    Enquire Now
            </a>
    `;
        // productCard.addEventListener('click', () => openProductPage(product));
        trendingProductList.appendChild(trendingProductCard);
    });
}

