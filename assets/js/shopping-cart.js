
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  updateCart();
});

function addToCart(productId) {
  // Ensure ID is treated as a string
  const product = window.products.find((p) => String(p.id) === String(productId));
  
  if (!product) {
    console.error("Product not found for cart:", productId);
    return;
  }
  
  cart.push(product);
  saveCart();
  updateCart();

  Swal.fire({
    title: "Item Added to Cart",
    icon: "success",
  });
}



function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  toast.style.display = "flex";
  toast.style.opacity = "1";
  toast.style.transform = "scale(1)";
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "scale(0.5)";
    setTimeout(() => toast.classList.remove("show"), 300);
  }, 2000);
}

function updateCart() {
  const cartCount = document.querySelector(".cart-count");
  const cartItems = document.getElementById("cart-items");
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  cart.forEach((product) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="50">
        <span class="name">${product.name}</span>
        <span>₹${product.discountedPrice}</span>
        <button onclick="removeFromCart('${product.id}')">
            Delete
            <img  src="assets/icons/delete.svg" 
                  alt="Delete">
        </button>
        `;
    cartItems.appendChild(cartItem);
  });
  const totalPrice = cart.reduce(
    (sum, product) => sum + product.discountedPrice,
    0
  );
  document.getElementById(
    "total-price"
  ).textContent = `Total: ₹${totalPrice.toFixed(2)}`;
}

function removeFromCart(productId) {
  cart = cart.filter((product) => String(product.id) !== String(productId));
  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}
