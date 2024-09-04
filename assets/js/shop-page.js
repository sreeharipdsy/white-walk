// Importing necessary Firebase modules and functions from Firebase SDK version 9.0.0
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

// Importing Firestore related functions from the Firebase Firestore SDK
import {
  getFirestore, // Function to get the Firestore instance
  collection, // Function to create a reference to a Firestore collection
  getDocs, // Function to retrieve all documents from a Firestore collection
  addDoc, // Function to add a new document to a Firestore collection
  onSnapshot, // Function to listen to real-time updates on a Firestore collection
  Timestamp, // Utility for creating and using Firestore Timestamps
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Importing a list of products from an external file called 'products-list.js'
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

// Initialize the Firebase app and get the Firestore instance
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Setting flag as true because products are already added
let productsAdded = true;

// This function, `addAllProductsToFirestore`, asynchronously adds all products from the `productList` array to a Firestore collection called "products." It first checks if the products have already been added, and if so, it skips the process. If not, it iterates through each product in the list, appends the current timestamp (`createdAt`), and adds each product to the Firestore collection using the `addDoc` method. After adding a product, it logs the product's name to the console. Once all products are successfully added, a success message is logged, and a flag (`productsAdded`) is set to true to prevent duplicates. Any errors encountered are caught and logged to the console.
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
addAllProductsToFirestore();

// This code initializes an empty array named `products` and then assigns it to the `window` object, effectively making the `products` array globally accessible throughout the browser's window context. This allows other scripts or functions on the page to reference or manipulate the `products` array from anywhere in the application.
let products = [];
window.products = products;

// This `fetchProducts` function asynchronously retrieves all documents from the "products" collection in Firestore using `getDocs`. It clears the `products` array, then iterates through each document (`doc`) in the retrieved snapshot. For each product, if the `createdAt` field is a Firestore `Timestamp`, it is converted to a JavaScript `Date` object. Each product is then pushed into the `products` array with its document ID included. The array is sorted by the `createdAt` field in descending order (newest first), and the `products` array is made globally accessible via `window.products`. Finally, the `renderProducts` function is called to display the fetched products. Any errors during the fetching process are logged to the console.
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

// This code snippet initializes several variables for handling product pagination and filtering. `currentProductIndex` tracks the index of the currently displayed product in the list, starting from 0. `productsPerPage` defines the number of products to be displayed per page or batch (set to 10 here). `filteredProducts` is an array that will hold products that have been filtered based on some criteria (e.g., search or category filters). `allProducts` is an array that stores all available products fetched from the database or source. These variables are used to manage product display, pagination, and filtering logic throughout the application.
let currentProductIndex = 0;
const productsPerPage = 10;
let filteredProducts = [];
let allProducts = [];

// The `renderProducts` function dynamically displays a list of products on the webpage. It first clears the existing product list and sorts the products array by the `createdAt` timestamp in descending order. It then selects a batch of products based on the `currentProductIndex` and `productsPerPage` values and slices the product array accordingly. If no products are available, a message is displayed. Otherwise, for each product in the batch, a product card is created and populated with the product's image, name, rating, price, and action buttons for adding to the cart or buying. These product cards are then appended to the product list. The visibility of a "Show More" button is toggled based on whether more products are available to display beyond the current batch.
function renderProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.sort((a, b) => {
    const timeA = a.createdAt || new Date(0);
    const timeB = b.createdAt || new Date(0);
    return timeB - timeA;
  });
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

// The `showMoreProducts` function is responsible for loading and displaying the next batch of products when a user clicks the "Show More" button. It increments the `currentProductIndex` by the number of products per page (`productsPerPage`) to move the index forward, indicating which products to display next. It then calls the `renderProducts` function, passing either the filtered products (if any exist) or all products, along with the updated index range, to display the next set of products in the list. This function ensures that more products are shown incrementally without reloading the entire list.
function showMoreProducts() {
  currentProductIndex += productsPerPage;
  renderProducts(filteredProducts.length > 0 ? filteredProducts : products, currentProductIndex, currentProductIndex + productsPerPage);
}


// This code sets up an event listener for the `DOMContentLoaded` event, which triggers when the initial HTML document has been completely loaded and parsed. When this event occurs, it calls `fetchProductsFromFirebase`, which retrieves product data from Firebase. Once the products are fetched, they are assigned to the `allProducts` array, and `filteredProducts` is set to `allProducts`, ensuring that initially all products are displayed. The `renderProducts` function is then called to display the products. Additionally, the code sets up an event listener on the "Show More" button, which, when clicked, calls the `showMoreProducts` function to load and display additional products.
document.addEventListener("DOMContentLoaded", () => {
  fetchProductsFromFirebase().then((products) => {
    allProducts = products; 
    filteredProducts = allProducts; 
    renderProducts(filteredProducts);
    const showMoreButton = document.getElementById("show-more-button");
    showMoreButton.addEventListener("click", () => {
      showMoreProducts();
    });
  });
});

// The `fetchProductsFromFirebase` function asynchronously retrieves all documents from the "products" collection in Firestore. It uses the `collection` and `getDocs` functions to access and fetch the data. After fetching the documents, it maps over the `querySnapshot.docs` array to create a new array of product objects, where each object includes the document's ID and its data. This array is then returned, providing a list of all products with their respective IDs and data.
async function fetchProductsFromFirebase() {
  const productsCollection = collection(db, "products");
  const querySnapshot = await getDocs(productsCollection);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

// This code sets up a real-time listener on the "products" collection in Firestore using `onSnapshot`. Whenever there is a change in the collection (such as additions, deletions, or updates), the callback function is triggered. Inside the callback, it maps over the updated `snapshot.docs` to create a new array of product objects, including each document's ID and its data. This array is then assigned to the global `window.products` variable, making it accessible throughout the application. The `renderProducts` function is called with the updated products to refresh the displayed product list in real-time.
onSnapshot(collection(db, "products"), (snapshot) => {
  const updatedProducts = snapshot.docs.map((doc) => ({
    id: String(doc.id),
    ...doc.data(),
  }));
  window.products = updatedProducts;
  renderProducts(updatedProducts);
});

// This code sets up event listeners that activate after the HTML document has loaded. It first calls `fetchProducts` to load and display products. It then adds event listeners to handle user interactions: clicking the search button or pressing "Enter" in the search input triggers the `filterProducts` function, with a mobile touch event on the search button also hiding recommendations before filtering. Changes to the filter dropdown will apply the selected filter through `filterProducts`, and clicking the checkout cart button will invoke the `checkoutCart` function to manage the checkout process. These listeners ensure that product filtering, search, and checkout functionalities respond to user actions.
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

// The `showRecommendations` function dynamically displays a list of product recommendations in a designated container. It first clears any existing content in the `recommendations` container. It then limits the recommendations to a maximum of 8 items. If there are no recommendations, it displays a message indicating no suggestions are available. Otherwise, it creates a new `div` element for each recommendation, adds a class for styling, and sets its inner HTML to include the product name as a clickable element that triggers the `openProductPage` function with the product's ID. Each recommendation item is appended to the container, updating the displayed list of suggestions.
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

// The `hideRecommendations` function clears the contents of the `recommendations` container by setting its inner HTML to an empty string. This effectively hides any displayed recommendations, providing a way to remove suggestion items from view when needed.
function hideRecommendations() {
  document.getElementById("recommendations").innerHTML = "";
}

// This code adds an event listener to the `search-input` field that triggers whenever the input value changes. It retrieves the current value, converts it to lowercase, and trims any extra spaces. If the query is not empty, it filters the `products` array to find products whose names include the query string. The filtered list of recommended products is then passed to the `showRecommendations` function to display matching suggestions. If the query is empty, it clears the recommendations container by setting its inner HTML to an empty string.
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

// The `showPageLoader` function displays a loading indicator while hiding the product list. It first attempts to find the `page-loader` element and makes it visible by removing the `hidden` class. If the `page-loader` element is not found, it logs an error to the console. Next, it finds the `product-list` element and hides it by adding the `hidden` class. If the `product-list` element is not found, it also logs an error. This function is useful for indicating that content is being loaded and temporarily obscuring the product list during this process.
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

// The `hidePageLoader` function hides the loading indicator and reveals the product list after a brief delay. It first attempts to find the `page-loader` element and hides it by adding the `hidden` class. If the `page-loader` element is not found, it logs an error. After that, it uses `setTimeout` to wait for 100 milliseconds before attempting to show the `product-list` element by removing the `hidden` class. If the `product-list` element is not found, it logs an error. This function ensures that the page loader is removed before displaying the product list, allowing a smooth transition between loading and content display.
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
  }, 100);
}

// This code sets up initial functionality for the webpage when the DOM content is fully loaded. It starts by displaying a page loader using `showPageLoader`. It then retrieves the `category` parameter from the URL, if present, and fetches the product data asynchronously. If a category is specified, it filters the products by that category and updates the category filter, otherwise, it renders all products. After fetching and filtering, the page loader is hidden using `hidePageLoader`. Event listeners are added for user interactions: changing the category filter triggers `filterByCategory`, clicking the search button calls `filterProducts`, and clicking the "Show More" button loads additional products with `showMoreProducts`.
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

  document
    .getElementById("filter")
    .addEventListener("change", () => {
      const selectedCategory = document.getElementById("filter").value;
      filterByCategory(selectedCategory);
  });
  document
    .getElementById("search-button")
    .addEventListener("click", filterProducts);
  document
    .getElementById("show-more-button")
    .addEventListener("click", showMoreProducts);
});

// The `filterProductsByCategory` function filters the `products` array to include only those products that match the specified `category`. It updates the `filteredProducts` array with these filtered items and resets the `currentProductIndex` to 0. Then, it calls `renderProducts` to display the filtered products, showing the first set of products according to the `productsPerPage` limit. This function ensures that the displayed products match the selected category and resets pagination for the new filtered results.
function filterProductsByCategory(category) {
  filteredProducts = products.filter((product) => product.category === category);
  currentProductIndex = 0;
  renderProducts(filteredProducts, currentProductIndex, currentProductIndex + productsPerPage);
}

// The `updateCategoryFilter` function updates the value of the category filter dropdown to match the specified `category`. It first checks if the `categoryFilter` element exists in the document. If it does, it sets its value to the given `category`, effectively selecting that category in the dropdown. If the element is not found, it logs an error to the console. This function ensures that the dropdown reflects the current category filter in the UI.
function updateCategoryFilter(category) {
  const categoryFilter = document.getElementById("filter");
  if (categoryFilter) {
    categoryFilter.value = category;
  } else {
    console.error("Category filter element not found");
  }
}

// The `filterByCategory` function updates the current URL to include a `category` query parameter, which effectively navigates to a new page with the filtered category. By setting `window.location.href` to `shop?category=${category}`, it reloads the page with the specified category in the query string, triggering any associated filtering logic for that category. This function is used to apply category-based filtering through URL navigation.
function filterByCategory(category) {
  window.location.href = `shop?category=${category}`;
}

// The `showLoadingSpinner` function makes a loading spinner visible by removing the `hidden` class from the `spinner-container` element. If the `spinner-container` is not found in the document, it logs an error to the console. This function is used to indicate that content is being loaded, providing a visual cue to the user that a process is ongoing.
function showLoadingSpinner() {
  const spinnerContainer = document.getElementById("spinner-container");
  if (spinnerContainer) {
    spinnerContainer.classList.remove("hidden");
  } else {
    console.error("Spinner container not found");
  }
}

// The `hideLoadingSpinner` function hides the loading spinner by adding the `hidden` class to the `spinner-container` element. If the `spinner-container` is not found, it logs an error to the console. This function is used to remove the visual indicator once the loading process is complete, signaling to the user that the content is ready or the process has finished.
function hideLoadingSpinner() {
  const spinnerContainer = document.getElementById("spinner-container");
  if (spinnerContainer) {
    spinnerContainer.classList.add("hidden");
  } else {
    console.error("Spinner container not found");
  }
}

// The `filterProducts` function manages the process of filtering and displaying products based on user input. It begins by showing a loading spinner and hiding recommendations. It retrieves the search term from the input field and the selected filter from the dropdown. If the search term is empty, it resets the `filteredProducts` to include all products, renders them, and hides the loading spinner. If there is a search term, it filters the `allProducts` array to match both the search term and the selected category (if any), then displays recommendations for the filtered products. After a 300-millisecond delay, it resets the product index, renders the filtered products, and hides the loading spinner, ensuring the UI updates smoothly.
function filterProducts() {
  showLoadingSpinner();
  document.getElementById("recommendations").style.display = "none";
  const searchTerm = document.getElementById("search-input").value.toLowerCase();
  const filter = document.getElementById("filter").value;

  if (searchTerm.length === 0) {
    hideRecommendations();
    filteredProducts = allProducts;
    renderProducts(filteredProducts);
    hideLoadingSpinner();
    return;
  }
  filteredProducts = allProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm) &&
      (filter === "" || product.category === filter)
    );
  });
  
  showRecommendations(filteredProducts);

  setTimeout(() => {
    currentProductIndex = 0;
    renderProducts(filteredProducts);
    hideLoadingSpinner();
  }, 300);
}

// The `DOMContentLoaded` event listener checks if there is a `viewedProduct` ID stored in `localStorage`. If an ID is found, it searches for the product card with a matching `data-product-id` attribute. If the product card is found, the function smoothly scrolls it into view and adds a `highlight` class to visually emphasize it. After this, the `viewedProduct` item is removed from `localStorage` to prevent the highlight from being applied again in future page loads. This functionality enhances user experience by bringing attention to the product they recently viewed.
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

// The `buyNow` function opens a WhatsApp chat in a new browser tab with a pre-filled message indicating interest in buying a specified product. It uses the `window.open` method to launch a WhatsApp link, including the product name in the message text. Additionally, `event.stopPropagation()` prevents the event from bubbling up to parent elements, which helps ensure that only the intended action (opening WhatsApp) is triggered when the function is called.
function buyNow(productName) {
  event.stopPropagation();
  window.open(
    `https://wa.me/+917592984622?text=I'm interested in buying ${productName}`,
    "_blank"
  );
}

// The `checkoutCart` function generates a WhatsApp message containing the names of all products in the cart, formatted as a comma-separated list. It opens a new browser tab with a pre-filled WhatsApp chat, where the message indicates the user's interest in purchasing the listed products. The function uses `window.open` to create the WhatsApp link, allowing users to proceed with the checkout process by sending the message to the specified phone number.
function checkoutCart() {
  const productNames = cart.map((product) => product.name).join(", ");
  window.open(
    `https://wa.me/+917592984622?text=I'm interested in buying the following products: ${productNames}`,
    "_blank"
  );
}
