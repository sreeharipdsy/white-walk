
function openProductPage(product) {
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
}
