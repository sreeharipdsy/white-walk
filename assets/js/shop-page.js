
let cart = [];

document.addEventListener('DOMContentLoaded', () => { 
  renderProducts(products);
  document.getElementById('search-input').addEventListener('input', filterProducts);
  document.getElementById('filter').addEventListener('change', filterProducts);
  document.getElementById('checkout-cart').addEventListener('click', checkoutCart);
});


function renderProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('card');
    productCard.setAttribute('data-aos', 'zoom-in');
    productCard.innerHTML = `
      <div class="product-img">
        <img 
          src="${product.image}" 
          class="w-100" 
          alt="${product.name} Image"
          onclick="openProductPage(${product.id})">
      </div>
      <div class="product-description">
        <div class="name-rating">
          <p class="p-name mb-0">${product.name}</p>
          <div class="p-rating">5<span>★</span></div>
        </div>
        <div class="p-price">
          <p><span>₹${product.price}</span> ₹${product.discountedPrice}</p>
        </div>
        <div class="card-buttons">
          <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="buy-now" onclick="buyNow('${product.name}')">Buy Now</button>
        </div>
      </div>
    `;
    // productCard.addEventListener('click', () => openProductPage(product));
    productList.appendChild(productCard);
  });
}

function filterProducts() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const filter = document.getElementById('filter').value;
  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchTerm) && (filter === '' || product.category === filter);
  });
  renderProducts(filteredProducts);
}

function showHomePage() {
  document.getElementById('banner').style.display = 'flex';
  document.getElementById('breadcrumb').style.display = 'block';
  document.getElementById('search-container').style.display = 'flex';
  document.getElementById('product-page').style.display = 'none';
  document.getElementById('product-list').style.display = 'grid';
}

function buyNow(productName) {
  event.stopPropagation();
  window.open(`https://wa.me/?text=I'm interested in buying ${productName}`, '_blank');
}

function checkoutCart() {
  const productNames = cart.map(product => product.name).join(', ');
  window.open(`https://wa.me/?text=I'm interested in buying the following products: ${productNames}`, '_blank');
}

function checkoutSingleProduct() {
  const productName = document.getElementById('product-name').textContent;
  window.open(`https://wa.me/?text=I'm interested in buying ${productName}`, '_blank');
}



