document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { 
            id: 1, 
            name: "Product 1", 
            description: "Description 1", 
            image: "image1.jpg", 
            details: "Details 1" 
        },
        { 
            id: 2, 
            name: "Product 2", 
            description: "Description 2", 
            image: "image2.jpg", 
            details: "Details 2" 
        },
    ];
    const productContainer = document.getElementById('product-list');
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartModal = document.getElementById('cart-modal');
    const closeModalButton = document.querySelector('.modal .close');
    const cartIcon = document.getElementById('cart-icon');

    let cart = [];

    function updateCartCount() {
        cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    function updateCartModal() {
        cartItemsElement.innerHTML = '';
        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            checkoutButton.disabled = true;
        } else {
            emptyCartMessage.style.display = 'none';
            checkoutButton.disabled = false;
            cart.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" width="50">
                    ${item.name} - ${item.quantity}
                    <button class="plus" data-id="${item.id}">+</button>
                    <button class="minus" data-id="${item.id}">-</button>
                `;
                cartItemsElement.appendChild(li);

                li.querySelector('.plus').addEventListener('click', () => addToCart(item.id));
                li.querySelector('.minus').addEventListener('click', () => removeFromCart(item.id));
            });
        }
    }

    function renderProductCards() {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                <div class="product-count">
                    <button class="minus" data-id="${product.id}">-</button>
                    <span id="count-${product.id}">0</span>
                    <button class="plus" data-id="${product.id}">+</button>
                </div>
            `;
            productContainer.appendChild(card);

            card.addEventListener('click', (event) => {
                if (event.target.classList.contains('add-to-cart')) {
                    addToCart(product.id);
                } else if (event.target.classList.contains('minus')) {
                    removeFromCart(product.id);
                } else if (event.target.classList.contains('plus')) {
                    addToCart(product.id);
                } else {
                    openProductDetails(product.id);
                }
            });
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        document.getElementById(`count-${productId}`).textContent = cartItem ? cartItem.quantity : 1;
        updateCartCount();
        updateCartModal();
    }

    function removeFromCart(productId) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity -= 1;
            document.getElementById(`count-${productId}`).textContent = cartItem.quantity;
            if (cartItem.quantity === 0) {
                cart = cart.filter(item => item.id !== productId);
                document.getElementById(`count-${productId}`).textContent = 0;
            }
        }
        updateCartCount();
        updateCartModal();
    }

    function openProductDetails(productId) {
        const product = products.find(p => p.id === productId);
    
        const productDetailsPage = `
            <div class="product-details">
                <button onclick="goBack()">Back to Shop</button>
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>${product.details}</p>
                <button onclick="checkoutProduct(${product.id})">Checkout</button>
            </div>  
        `;
        document.body.innerHTML = productDetailsPage;
    }
    
    function goBack() {
        location.reload();
    }
    function checkoutProduct(productId) {
        const product = products.find(p => p.id === productId);
        const message = `${product.name} x${1}`;
        window.location.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
    }    
    window.goBack = goBack;
    window.checkoutProduct = checkoutProduct;


    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    checkoutButton.addEventListener('click', () => {
        const message = cart.map(item => `${item.name} x ${item.quantity}`).join('\n');
        window.location.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
    });

    renderProductCards();
    updateCartCount();
    updateCartModal();
});
