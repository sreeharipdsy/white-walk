function filterByCategory(category) {
  // Navigate to the shop page with the category as a query parameter
  window.location.href = `shop.html?category=${category}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Get the category from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');

  if (category) {
    filterProductsByCategory(category);
  }
});

function filterProductsByCategory(category) {
  // Assuming you have a function that renders products and accepts a filter
  const filteredProducts = products.filter(product => product.category === category);
  renderProducts(filteredProducts);
}
