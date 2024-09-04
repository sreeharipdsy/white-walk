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

// This below code initializes a Firebase app using the given configuration and obtains an instance of Firestore. It defines a function addAllProductsToFirestore, which is responsible for adding all products from the productList array to a Firestore collection named "products." Before performing the operation, it checks if the products have already been added using a boolean flag productsAdded to prevent duplicates. If the products haven't been added, it iterates through each product in the list, appends a timestamp to the product data, and then adds each product as a new document in the Firestore collection. Once all products are successfully added, the function logs a success message and updates the productsAdded flag. In case of any errors during the process, the error is caught and logged. Finally, the function is invoked to initiate the product upload to Firestore.
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

// The below code initializes an empty `products` array and assigns it to the `window` object for global access. The `fetchProducts` function retrieves product documents from the "products" collection in Firestore. It uses the `getDocs` function to fetch the data and then iterates over the query snapshot to process each document. For each product, if the `createdAt` field is a Firestore `Timestamp`, it converts it to a JavaScript `Date` object. Each product is then added to the `products` array with its document ID as the `id`. After fetching all products, they are sorted in descending order based on the `createdAt` timestamp, ensuring that the most recent products appear first. The updated `products` array is then re-assigned to `window.products` for global usage, and the `renderProducts` function is called to display the products on the page. Error handling is implemented to log any issues that occur during the fetching process.
let products = [];
window.products = products;

// Fetching products from firestore database
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

// The below code manages the rendering of products fetched from a Firestore database, displaying them in a paginated manner. The `currentProductIndex` keeps track of the starting point for the products currently being displayed, and `productsPerPage` defines the number of products to show per page. The `renderProducts` function first selects the element with the ID `product-list` and clears any existing content. It sorts the products array in descending order based on the `createdAt` timestamp to ensure the most recent products appear first. The products to be displayed are then determined by slicing the `products` array from the start to the end of the current page based on `currentProductIndex` and `productsPerPage`. If no products are available to display, the function shows a message indicating "No products available...". Otherwise, it creates a card for each product, displaying its image, name, rating, price, and buttons for adding to the cart or buying immediately. Each product card includes the product's ID and handles user interactions like opening the product page, adding to the cart, or buying the product. Finally, the function controls the visibility of a "Show More" button. If there are more products to load beyond the current page, the button is displayed; otherwise, it is hidden. This enables users to load additional products dynamically.
let currentProductIndex = 0;
const productsPerPage = 10;

// Rendering products from firestore database
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

// This function handles displaying additional products when the user clicks the "Show More" button. The `showMoreProducts` function increments the `currentProductIndex` by the number of products per page (`productsPerPage`), effectively moving the starting point to the next set of products. It then calls the `renderProducts` function to update the product display with the new set of products, ensuring that the next batch of products is shown to the user. This approach enables paginated loading of products without refreshing the entire page.
function showMoreProducts(products) {
  currentProductIndex += productsPerPage;
  renderProducts(products);
}

// This code initializes the product loading and display process when the DOM content is fully loaded. It first defines an empty `allProducts` array to store the products fetched from Firebase. The `fetchProductsFromFirebase` function is called to retrieve the products, which are then stored in the `allProducts` array. Once the products are fetched, the `renderProducts` function is called to display the products on the page. Additionally, the code sets up an event listener for the "Show More" button. When this button is clicked, the `showMoreProducts` function is invoked with the `allProducts` array as its argument, allowing the next set of products to be displayed based on the current pagination state. This setup ensures that the product list is populated and that the user can load more products as needed.
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

// This asynchronous function, `fetchProductsFromFirebase`, retrieves all product documents from the Firestore database. It first creates a reference to the "products" collection using `collection(db, "products")`. It then fetches the documents from this collection with `getDocs(productsCollection)`, which returns a `querySnapshot` containing all the documents. The function maps over the documents in the `querySnapshot`, creating an array of product objects. Each product object includes the document ID (`doc.id`) and the document data (`doc.data()`). The resulting array of product objects is then returned by the function. This approach provides a structured way to access and use product data fetched from Firestore.
async function fetchProductsFromFirebase() {
  const productsCollection = collection(db, "products");
  const querySnapshot = await getDocs(productsCollection);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

// This code sets up a real-time listener on the Firestore "products" collection using `onSnapshot`, which triggers the callback function whenever there are changes to the collection. The callback processes the updated documents, mapping them to an array of product objects with their IDs and data. This array is then assigned to `window.products`, making the latest product data globally available. The `renderProducts` function is subsequently called with the updated product array to refresh the display on the page, ensuring that any changes in the Firestore collection are immediately reflected in the user interface.
onSnapshot(collection(db, "products"), (snapshot) => {
  const updatedProducts = snapshot.docs.map((doc) => ({
    id: String(doc.id),
    ...doc.data(),
  }));
  window.products = updatedProducts;
  renderProducts(updatedProducts);
});

// This code sets up event listeners for various user interactions on the page once the DOM content has fully loaded. It first calls `fetchProducts()` to load and display products. Then, it attaches event listeners to different elements: the "search-button" triggers the `filterProducts` function when clicked or touched; the "search-input" field listens for the "Enter" key press to perform the search and hide recommendations; the "filter" dropdown triggers `filterProducts` when its value changes; and the "checkout-cart" button initiates the `checkoutCart` process when clicked. This setup ensures that user actions such as searching, filtering, and checking out are properly handled and integrated into the page's functionality.
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

// This function, `showRecommendations`, displays a list of product recommendations in a specified container on the page. It begins by selecting the container element with the ID "recommendations" and clears its existing content. The function limits the number of recommendations shown to a maximum of 8 by slicing the `recommendations` array. If there are no recommendations to display, it shows a message indicating "No suggestions found...". Otherwise, for each recommendation, it creates a new `div` element with the class "recommendation-item", sets its inner HTML to include the product name, and adds an `onclick` event to open the product page when the name is clicked. Each recommendation item is then appended to the container, thus updating the UI with the latest suggestions.
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

// To hide recommendations/suggestions
function hideRecommendations() {
  document.getElementById("recommendations").innerHTML = "";
}

// This code snippet sets up an event listener on the "search-input" element that responds to input events. When the user types into the search field, the function captures the input value, converts it to lowercase, and trims any extra spaces. If the query is not empty, it filters the global `products` array to find products whose names include the query string. The filtered recommendations are then passed to the `showRecommendations` function to update the suggestions displayed to the user. If the query is empty, it clears any existing recommendations by setting the inner HTML of the "recommendations" container to an empty string. This functionality allows for dynamic, real-time search suggestions as the user types.
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

// These functions manage the visibility of a page loader and the product list during data loading. `showPageLoader` makes the page loader visible and hides the product list by manipulating their "hidden" classes, while logging errors if the elements are not found. Conversely, `hidePageLoader` hides the page loader and, after a brief 100-millisecond delay, reveals the product list by removing the "hidden" class. This delay ensures a smooth transition between hiding the loader and displaying the product list, with error logging if the elements are not present.
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
  }, 100);
}

// This code initializes the page's content and functionality once the DOM is fully loaded. It starts by showing a page loader to indicate that data is being loaded. It then retrieves any category filter from the URL parameters and fetches the product data. Depending on whether a category is specified, it either filters the products by that category and updates the category filter or simply renders all products. After data loading and processing, it hides the page loader. Additionally, it sets up event listeners for changes in the category filter dropdown and the search button, triggering functions to filter products based on the selected category or search criteria.
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

// This function, `filterProductsByCategory`, filters the global `products` array based on a specified category. It creates a new array, `filteredProducts`, which includes only the products whose `category` matches the provided `category` parameter. The filtered array is then passed to the `renderProducts` function to update the product display with the products that belong to the selected category. This ensures that only products from the chosen category are shown on the page.
function filterProductsByCategory(category) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  renderProducts(filteredProducts);
}

// This function, `updateCategoryFilter`, updates the value of the category filter dropdown to reflect the specified category. It first checks if the element with the ID "filter" exists. If it does, it sets the dropdown's value to the provided `category` parameter, ensuring the filter shows the selected category. If the element is not found, it logs an error to the console. This function ensures that the category filter reflects the current selection, maintaining consistency between the displayed products and the filter interface.
function updateCategoryFilter(category) {
  const categoryFilter = document.getElementById("filter");
  if (categoryFilter) {
    categoryFilter.value = category;
  } else {
    console.error("Category filter element not found");
  }
}

// This function, `filterByCategory`, updates the current page URL to include a query parameter for the specified category. It sets the `window.location.href` to a new URL with the `category` parameter, redirecting the user to the "shop" page with the selected category applied as a filter. This approach effectively refreshes the page with the appropriate category filter, allowing the user to view products specific to the chosen category.
function filterByCategory(category) {
  window.location.href = `shop?category=${category}`;
}

// These functions manage the visibility of a loading spinner on the page. `showLoadingSpinner` makes the spinner visible by removing the "hidden" class from the element with the ID "spinner-container", and logs an error if the element is not found. Conversely, `hideLoadingSpinner` hides the spinner by adding the "hidden" class to the same element, with an error logged if the element is missing. This ensures that the spinner is displayed during loading processes and hidden when they are complete, providing visual feedback to users.
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

// This function, `filterProducts`, filters the global `products` array based on a search term and a selected category. It first shows a loading spinner and hides an element with the ID "empty". It then retrieves the search term from the input field and the selected filter category from a dropdown. The `filteredProducts` array is created by filtering the `products` based on whether the product name includes the search term and if it matches the selected category (if one is specified). After a brief delay of 500 milliseconds, the filtered products are rendered on the page, and the loading spinner is hidden, providing a smooth user experience while the filtering operation completes.
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
  }, 500);
}

// This code snippet sets up an event listener that executes when the DOM content is fully loaded. It checks if there's a stored product ID in `localStorage` under the key "viewedProduct". If such an ID exists, it finds the corresponding product card element using a query selector with the attribute `data-product-id` matching the stored ID. If the product card is found, the script scrolls smoothly to the card's position and adds a "highlight" class to it, drawing attention to the viewed product. After processing, it removes the "viewedProduct" item from `localStorage` to clean up. This functionality enhances the user experience by directing attention to a recently viewed product.
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

// This function, `buyNow`, opens a new browser tab to initiate a WhatsApp conversation with a specified phone number. It first stops the event from propagating further to avoid triggering additional event handlers. It then constructs a URL to open a WhatsApp chat with a pre-filled message indicating the user's interest in buying the specified `productName`. The `window.open` method is used to open this URL in a new tab, allowing the user to quickly start a conversation regarding their purchase inquiry.
function buyNow(productName) {
  event.stopPropagation();
  window.open(
    `https://wa.me/+917592984622?text=I'm interested in buying ${productName}`,
    "_blank"
  );
}

// This function, `checkoutCart`, generates a WhatsApp message for checking out the products in the cart. It creates a string of product names by mapping over the `cart` array, joining the names with commas. The function then constructs a URL to open a WhatsApp chat with a specified phone number and includes a pre-filled message listing the products the user is interested in buying. Using `window.open`, it opens this URL in a new tab, allowing the user to easily initiate a conversation for their cart checkout.
function checkoutCart() {
  const productNames = cart.map((product) => product.name).join(", ");
  window.open(
    `https://wa.me/+917592984622?text=I'm interested in buying the following products: ${productNames}`,
    "_blank"
  );
}
