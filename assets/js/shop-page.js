

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  document
    .getElementById("search-input")
    .addEventListener("input", filterProducts);
  document.getElementById("filter").addEventListener("change", filterProducts);
  document
    .getElementById("checkout-cart")
    .addEventListener("click", checkoutCart);
});

function renderProducts(products) {
  products.sort((a, b) => b.id - a.id);
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("card");
    productCard.setAttribute("data-aos", "zoom-in");
    productCard.setAttribute("data-product-id", product.id);
    productCard.innerHTML = `
      <div class="product-img">
        <img 
          src="${product.image}" 
          class="w-100" 
          alt="${product.name} Image"
          onclick="openProductPage(${product.id})">
      </div>
      <div class="product-description">
        <div class="name-rating" onclick="openProductPage(${product.id})">
          <p class="p-name mb-0">${product.name}</p>
          <div class="p-rating">5<span>★</span></div>
        </div>
        <div class="p-price">
          <p><span>₹${product.price}</span> ₹${product.discountedPrice}</p>
        </div>
        <div class="card-buttons">
          <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="buy-now" onclick="buyNow('${product.name}')">Buy Now</button>
        </div>
      </div>
    `;
    productList.appendChild(productCard);
  });
}




document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  if (category) {
    filterProductsByCategory(category);
    updateCategoryFilter(category);
  }
  function filterProductsByCategory(category) {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    renderProducts(filteredProducts);
  }
  function updateCategoryFilter(category) {
    const categoryFilter = document.getElementById("filter");
    categoryFilter.value = category;
  }
});

function filterByCategory(category) {
  window.location.href = `shop?category=${category}`;
}

function filterProducts() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const filter = document.getElementById("filter").value;
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm) &&
      (filter === "" || product.category === filter)
    );
  });
  renderProducts(filteredProducts);
}

document.addEventListener("DOMContentLoaded", () => {
  const viewedProductId = localStorage.getItem("viewedProduct");
  if (viewedProductId) {
    const productCard = document.querySelector(
      `[data-product-id="${viewedProductId}"]`
    );
    if (productCard) {
      productCard.scrollIntoView({ behavior: "smooth" });
      productCard.classList.add("highlight");
    }
    localStorage.removeItem("viewedProduct");
  }
});




function showHomePage(productId) {
  document.getElementById("banner").style.visibility = "flex";
  document.getElementById("breadcrumb").style.visibility = "block";
  document.getElementById("search-container").style.visibility = "flex";
  document.getElementById("product-page").style.visibility = "none";
  document.getElementById("product-list").style.visibility = "grid";
  localStorage.setItem("viewedProduct", productId);
  window.location.href = `shop?id=${productId}`;
}

function buyNow(productName) {
  event.stopPropagation();
  window.open(
    `https://wa.me/+917592984622?text=I'm interested in buying ${productName}`,
    "_blank"
  );
}

function checkoutCart() {
  const productNames = cart.map((product) => product.name).join(", ");
  window.open(
    `https://wa.me/+917592984622?text=I'm interested in buying the following products: ${productNames}`,
    "_blank"
  );
}

function checkoutSingleProduct() {
  const productName = document.getElementById("product-name").textContent;
  window.open(
    `https://wa.me/+917592984622?text=I'm interested in buying ${productName}`,
    "_blank"
  );
}
