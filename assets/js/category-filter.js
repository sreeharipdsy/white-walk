document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('search-input').addEventListener('input', filterProducts);
    document.getElementById('filter').addEventListener('change', filterProducts);
    document.getElementById('checkout-cart').addEventListener('click', checkoutCart);
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
      filterProductsByCategory(category);
      updateCategoryFilter(category);
    }
  
    function filterProductsByCategory(category) {
      const filteredProducts = products.filter(product => product.category === category);
      renderProducts(filteredProducts);
    }
  
    function updateCategoryFilter(category) {
      const categoryFilter = document.getElementById('filter');
      categoryFilter.value = category;
    }
  });
  
  function filterByCategory(category) {
    window.location.href = `shop.html?category=${category}`;
  }
  
  function filterProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filter = document.getElementById('filter').value;
    const filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(searchTerm) && (filter === '' || product.category === filter);
    });
    renderProducts(filteredProducts);
  }