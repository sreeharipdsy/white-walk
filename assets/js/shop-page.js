import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import productList from "./products-list.js";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDO9kkIZUJE1J5QcI9fJ9TF_rOmJ6icDSg",
  authDomain: "whitewalk-server.firebaseapp.com",
  projectId: "whitewalk-server",
  storageBucket: "whitewalk-server.appspot.com",
  messagingSenderId: "977648514879",
  appId: "1:977648514879:web:82dc417449b9f32baa058a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Setting flag as true because products are already added
let productsAdded = true;
// Function to add all products from product-list.js to Firestore Database
async function addAllProductsToFirestore() {
  try {
    if (productsAdded) {
      console.log("Products already added. Skipping...");
      return;
    }
    const productsCollection = collection(db, "products");
    for (let product of productList) {
      const productData = {
        ...product,
        createdAt: Timestamp.now(),
      };

      await addDoc(productsCollection, productData);
      console.log(`Added product: ${product.name}`);
    }
    console.log("All products added to Firebase!");
    productsAdded = true;
  } catch (error) {
    console.error("Error adding products to Firebase:", error);
  }
}
// addAllProductsToFirestore();

let products = [];
window.products = products;

async function fetchProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    products = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.createdAt instanceof Timestamp) {
        data.createdAt = data.createdAt.toDate();
      }
      products.push({ id: String(doc.id), ...data });
    });
    products.sort((a, b) => b.createdAt - a.createdAt);
    window.products = products;
    renderProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

let currentProductIndex = 0; // Keeps track of the current index of products shown
const productsPerPage = 20; // Number of products to display per page

function renderProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear existing content

  // Sort the products based on createdAt (latest first)
  products.sort((a, b) => {
    const timeA = a.createdAt || new Date(0);
    const timeB = b.createdAt || new Date(0);
    return timeB - timeA;
  });

  // Get the next set of products to show
  const productsToShow = products.slice(
    0,
    currentProductIndex + productsPerPage
  );

  if (productsToShow.length === 0) {
    productList.innerHTML = `
      <p style="font-size: 14px; color: #3f0055; padding-top: 1em; text-align: center;">
        No products available...
      </p>`;
  } else {
    productsToShow.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("card");
      productCard.setAttribute("data-product-id", product.id);
      productCard.setAttribute("data-aos", "zoom-in");
      productCard.innerHTML = `
        <div class="product-img">
          <img 
            src="${product.image}" 
            class="w-100" 
            alt="${product.name} Image"
            onclick="openProductPage('${product.id}')"> <!-- Ensure ID is passed as a string -->
        </div>
        <div class="product-description">
          <div class="name-rating" onclick="openProductPage('${product.id}')"> <!-- ID as string -->
            <p class="p-name mb-0">${product.name}</p>
            <div class="p-rating">5<span>★</span></div>
          </div>
          <div class="p-price">
            <p><span>₹${product.price}</span> ₹${product.discountedPrice}</p>
          </div>
          <div class="card-buttons">
            <button class="add-to-cart" onclick="addToCart('${product.id}')">Add to Cart</button> <!-- ID as string -->
            <button class="buy-now" onclick="buyNow('${product.name}')">Buy Now</button>
          </div>
        </div>
      `;
      productList.appendChild(productCard);
    });
  }
  const showMoreButton = document.getElementById("show-more-button");
  if (productsToShow.length < products.length) {
    showMoreButton.style.display = "flex";
  } else {
    showMoreButton.style.display = "none";
  }
}

function showMoreProducts(products) {
  currentProductIndex += productsPerPage;
  renderProducts(products);
}

document.addEventListener("DOMContentLoaded", () => {
  let allProducts = [];
  fetchProductsFromFirebase().then((products) => {
    allProducts = products;
    renderProducts(allProducts);
    const showMoreButton = document.getElementById("show-more-button");
    showMoreButton.addEventListener("click", () => {
      showMoreProducts(allProducts);
    });
  });
});

async function fetchProductsFromFirebase() {
  const productsCollection = collection(db, "products");
  const querySnapshot = await getDocs(productsCollection);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

onSnapshot(collection(db, "products"), (snapshot) => {
  const updatedProducts = snapshot.docs.map((doc) => ({
    id: String(doc.id),
    ...doc.data(),
  }));
  window.products = updatedProducts;
  renderProducts(updatedProducts);
});

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
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
      recommendationItem.innerHTML = `<p onclick="openProductPage('${product.id}')">${product.name}</p>`;
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

document.addEventListener("DOMContentLoaded", async () => {
  showPageLoader();

  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");

  await fetchProducts();

  if (category) {
    filterProductsByCategory(category);
    updateCategoryFilter(category);
  } else {
    renderProducts(products);
  }

  hidePageLoader();

  document.getElementById("filter").addEventListener("change", () => {
    const selectedCategory = document.getElementById("filter").value;
    filterByCategory(selectedCategory);
  });

  document
    .getElementById("search-button")
    .addEventListener("click", filterProducts);
});

function filterProductsByCategory(category) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  renderProducts(filteredProducts);
}

function updateCategoryFilter(category) {
  const categoryFilter = document.getElementById("filter");
  if (categoryFilter) {
    categoryFilter.value = category;
  } else {
    console.error("Category filter element not found");
  }
}

function filterByCategory(category) {
  window.location.href = `shop?category=${category}`;
}

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

// function showHomePage(productId) {
//   document.getElementById("banner").style.visibility = "flex";
//   document.getElementById("breadcrumb").style.visibility = "block";
//   document.getElementById("search-container").style.visibility = "flex";
//   document.getElementById("product-page").style.visibility = "none";
//   document.getElementById("product-list").style.visibility = "grid";
//   localStorage.setItem("viewedProduct", productId);
//   window.location.href = `shop?id=${productId}`;
// }

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
