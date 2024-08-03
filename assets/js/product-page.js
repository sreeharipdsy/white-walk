
function openProductPage(productId) {
    const product = products.find(p => p.id === productId);
    document.getElementById('banner').style.display = 'none';
    document.getElementById('breadcrumb').style.display = 'none';
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('product-list').style.display = 'none';
    document.getElementById('product-page').style.display = 'block';
    document.getElementById('breadcrumb-product-name').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('p-original-price').innerHTML = `₹${product.price}`;
    document.getElementById('p-discount-price').innerHTML = `₹${product.discountedPrice}`;
    document.getElementById('p-size').innerHTML = `${product.size}`;
    document.getElementById('add-to-cart').onclick = function() {
        addToCart(product.id);
    }
    scrollToTop();
}
