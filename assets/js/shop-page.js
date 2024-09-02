let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  document
    .getElementById("search-button")
    .addEventListener("click", filterProducts);
  document.getElementById("search-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      hideRecommendations();
      filterProducts();
    }
  });
  document.getElementById("search-button").addEventListener("touchend", () => {
    hideRecommendations();
    filterProducts();
  });
  document.getElementById("filter").addEventListener("change", filterProducts);
  document
    .getElementById("checkout-cart")
    .addEventListener("click", checkoutCart);
});

function showRecommendations(recommendations) {
  const recommendationsContainer = document.getElementById("recommendations");
  recommendationsContainer.innerHTML = "";

  const limitedRecommendations = recommendations.slice(0, 8);

  if (limitedRecommendations.length === 0) {
    recommendationsContainer.innerHTML = "<p>No suggestions found...</p>";
  } else {
    limitedRecommendations.forEach((product) => {
      const recommendationItem = document.createElement("div");
      recommendationItem.classList.add("recommendation-item");
      recommendationItem.innerHTML = `<p onclick="openProductPage(${product.id})">${product.name}</p>`;
      recommendationsContainer.appendChild(recommendationItem);
    });
  }
}

function hideRecommendations() {
  document.getElementById("recommendations").innerHTML = "";
}

document.getElementById("search-input").addEventListener("input", function () {
  const query = this.value.toLowerCase().trim();

  if (query.length > 0) {
    const recommendedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    showRecommendations(recommendedProducts);
  } else {
    document.getElementById("recommendations").innerHTML = "";
  }
});

function renderProducts(products) {
  const sortedProducts = products.sort((a, b) => {
    const idA = parseInt(a.id, 10);
    const idB = parseInt(b.id, 10);
    return idB - idA;
  });
  const uniqueProducts = [];
  const seenIds = new Set();
  sortedProducts.forEach((product) => {
    if (!seenIds.has(product.id)) {
      uniqueProducts.push(product);
      seenIds.add(product.id);
    }
  });
  const productList = document.getElementById("product-list");
  const emptyProduct = document.getElementById("empty");

  productList.innerHTML = "";
  if (products.length === 0) {
    document.getElementById("empty").style.display = "block";
    emptyProduct.innerHTML = `<p style="
                                      font-size: 14px; 
                                      color: #3f0055; 
                                      padding-top: 1em; 
                                      text-align: center;">
                                      No results found...
                              </p>`;
  } else {
    uniqueProducts.forEach((product) => {
      document.getElementById("empty").style.display = "none";
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
          <div class="overlay"></div>
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
      const productImages = document.querySelectorAll(".card img");
      productImages.forEach((image) => {
        image.addEventListener("contextmenu", (event) => {
          event.preventDefault();
        });
      });
      function disableLongPress(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          element.addEventListener("contextmenu", (event) =>
            event.preventDefault()
          );
          element.addEventListener(
            "touchstart",
            (event) => {
              element.setAttribute("data-touch-start", new Date().getTime());
            },
            { passive: true }
          );
          element.addEventListener(
            "touchend",
            (event) => {
              const touchStartTime = parseInt(
                element.getAttribute("data-touch-start"),
                10
              );
              const touchEndTime = new Date().getTime();
              if (touchEndTime - touchStartTime >= 500) {
                event.preventDefault();
              }
            },
            { passive: true }
          );
        });
      }
      disableLongPress(".card img");
      productList.appendChild(productCard);
    });
  }
}

function showPageLoader() {
  const pageLoader = document.getElementById("page-loader");
  const productList = document.getElementById("product-list");

  if (pageLoader) {
    pageLoader.classList.remove("hidden");
  } else {
    console.error("Page loader not found");
  }

  if (productList) {
    productList.classList.add("hidden");
  } else {
    console.error("Product list not found");
  }
}

function hidePageLoader() {
  const pageLoader = document.getElementById("page-loader");
  const productList = document.getElementById("product-list");

  if (pageLoader) {
    pageLoader.classList.add("hidden");
  } else {
    console.error("Page loader not found");
  }
  setTimeout(() => {
    if (productList) {
      productList.classList.remove("hidden");
    } else {
      console.error("Product list not found");
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  showPageLoader();

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

  hidePageLoader();

  document.getElementById("filter").addEventListener("change", () => {
    const selectedCategory = document.getElementById("filter").value;
    filterByCategory(selectedCategory);
  });
});

function filterByCategory(category) {
  window.location.href = `shop?category=${category}`;
}
document
  .getElementById("search-button")
  .addEventListener("click", filterProducts);

function showLoadingSpinner() {
  const spinnerContainer = document.getElementById("spinner-container");
  if (spinnerContainer) {
    spinnerContainer.classList.remove("hidden");
  } else {
    console.error("Spinner container not found");
  }
}

function hideLoadingSpinner() {
  const spinnerContainer = document.getElementById("spinner-container");
  if (spinnerContainer) {
    spinnerContainer.classList.add("hidden");
  } else {
    console.error("Spinner container not found");
  }
}

function filterProducts() {
  showLoadingSpinner();
  document.getElementById("empty").style.display = "none";
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

  setTimeout(() => {
    renderProducts(filteredProducts);
    hideLoadingSpinner();
  }, 1000);
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
