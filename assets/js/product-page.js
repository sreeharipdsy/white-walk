
// This `openProductPage` function is designed to display a detailed view of a product on a dedicated product page. It first hides various elements like the banner, breadcrumb, search container, and product list to focus on the product details. It then displays the product page and populates it with the selected product’s details, including name, image, original price, discounted price, and size. The function also sets up event handlers for the "Add to Cart" button to call the `addToCart` function with the product's ID, and for the "Back to Shop" button to call the `showHomePage` function. Finally, it scrolls to the top of the page to ensure the product details are visible.
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
    document.getElementById('back-to-shop').onclick = function() {
        showHomePage(product.id);
    }
    scrollToTop();
}

