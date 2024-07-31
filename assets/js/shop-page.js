
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
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p><strike>$${product.price}</strike> $${product.discountedPrice}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="buyNow('${product.name}')">Buy Now</button>
    `;
    productCard.addEventListener('click', () => openProductPage(product));
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

