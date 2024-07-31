
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.getElementById('cart-items');
    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';
    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="50">
        <span>${product.name}</span>
        <span>$${product.discountedPrice}</span>
        <button onclick="removeFromCart(${product.id})">Delete<img src="assets/icons/delete.svg" alt="Delete"></button>
        `;
        cartItems.appendChild(cartItem);
    });
    const totalPrice = cart.reduce((sum, product) => sum + product.discountedPrice, 0);
    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    updateCart();
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}
