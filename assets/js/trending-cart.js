let trendingCart = JSON.parse(localStorage.getItem("trendingCart")) || [];

document.addEventListener("DOMContentLoaded", () => {
  updateTrendingCart();
});

function addToCartTrending(productId) {
  const product = trendingProducts.find((p) => p.id === productId);
  trendingCart.push(product);
  updateTrendingCart();
  saveCartToLocalStorage();
  showToast("Item Added to Cart");
}

function saveCartToLocalStorage() {
  localStorage.setItem("trendingCart", JSON.stringify(trendingCart));
}

function updateTrendingCart() {
  const cartCountTrending = document.querySelector(".cart-count");
  const cartItemsTrending = document.getElementById("cart-items");
  cartCountTrending.textContent = trendingCart.length;
  cartItemsTrending.innerHTML = "";
  trendingCart.forEach((trendingProduct) => {
    const cartItemTrending = document.createElement("li");
    cartItemTrending.innerHTML = `
        <img src="${trendingProduct.image}" alt="${trendingProduct.name}" width="50">
        <span class="name">${trendingProduct.name}</span>
        <span>₹${trendingProduct.discountedPrice}</span>
        <button onclick="removeFromTrendingCart(${trendingProduct.id})">Delete<img src="assets/icons/delete.svg" alt="Delete"></button>
        `;
    cartItemsTrending.appendChild(cartItemTrending);
  });
  const totalPrice = trendingCart.reduce(
    (sum, trendingProduct) => sum + trendingProduct.discountedPrice,
    0
  );
  document.getElementById(
    "total-price"
  ).textContent = `Total: ₹${totalPrice.toFixed(2)}`;
}

function removeFromTrendingCart(productId) {
  trendingCart = trendingCart.filter(
    (trendingProduct) => trendingProduct.id !== productId
  );
  updateTrendingCart();
  saveCartToLocalStorage();
}

function checkoutTrendingCart() {
  const productNames = trendingCart
    .map((trendingProduct) => trendingProduct.name)
    .join(", ");
  window.open(
    `https://wa.me/+917592984622?text=I'm interested in buying the following products: ${productNames}`,
    "_blank"
  );
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
