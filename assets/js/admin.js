// This block of code imports the necessary Firebase modules to enable various functionalities for the application. The first import brings in `initializeApp` from Firebase, which initializes the Firebase app with its configuration. The subsequent imports from `firebase-firestore` include methods for interacting with Firestore, such as `getFirestore` to access the database, `collection` and `addDoc` to add documents to collections, `getDocs` to retrieve documents, `deleteDoc` and `doc` for removing documents, and `Timestamp` to handle time-related operations. Additionally, the code imports authentication methods from `firebase-auth`, including `getAuth` for initializing the Firebase authentication service, `signInWithEmailAndPassword` for handling user sign-in, and `onAuthStateChanged` to monitor the user's authentication state. These imports are essential for integrating database and authentication functionalities within the application.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDO9kkIZUJE1J5QcI9fJ9TF_rOmJ6icDSg",
  authDomain: "whitewalk-server.firebaseapp.com",
  projectId: "whitewalk-server",
  storageBucket: "whitewalk-server.appspot.com",
  messagingSenderId: "977648514879",
  appId: "1:977648514879:web:82dc417449b9f32baa058a",
};

// This block initializes the Firebase services used in the application. The `initializeApp(firebaseConfig)` function initializes the Firebase app with the given configuration, which typically includes API keys and project details. The `getFirestore(app)` function sets up Firestore, Firebase's cloud-based NoSQL database, allowing the app to interact with the database. The `getAuth(app)` function initializes Firebase Authentication, enabling the app to manage user authentication and sessions. This setup allows the application to handle both database operations and user authentication.
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// This script handles the login functionality for the admin section of the webpage. When the page is fully loaded, it listens for the submission of the login form. Upon form submission, it prevents the default behavior (form reloading), then triggers a loading indicator using SweetAlert (`Swal`). It retrieves the email and password entered by the user and attempts to log in using Firebase Authentication's `signInWithEmailAndPassword` method. If the login is successful, it hides the login section and displays the admin section. If there’s an error during login, such as incorrect credentials, it shows an error message using SweetAlert.
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("login-form")
    .addEventListener("submit", async function (e) {
      e.preventDefault();
      Swal.fire({
        title: "Logging in..",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        document.getElementById("login-section").style.display = "none";
        document.getElementById("admin-section").style.display = "block";
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      }
    });
});

// This code listens for changes in the authentication state using Firebase's `onAuthStateChanged` method. When a user is authenticated, the function hides the login section, displays the admin and product sections, and calls `fetchAndRenderProducts()` to load and display products. It also triggers a success alert using SweetAlert to notify the user that they've logged in successfully. If the user is not authenticated (logged out or not logged in), it ensures that the login section is displayed while hiding the admin and product sections.
onAuthStateChanged(auth, (user) => {
  if (user) {
    Swal.close();
    document.getElementById("login-section").style.display = "none";
    document.getElementById("admin-section").style.display = "block";
    document.getElementById("product-section").style.display = "block";
    fetchAndRenderProducts();
    Swal.fire({
      icon: "success",
      title: "Logged in successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    document.getElementById("login-section").style.display = "block";
    document.getElementById("admin-section").style.display = "none";
    document.getElementById("product-section").style.display = "none";
  }
});

// The `addProduct` function adds a product to the Firebase Firestore database. It shows a loading alert using SweetAlert while the product is being added. The product object is enhanced with a `createdAt` timestamp, then stored in the "products" collection in Firestore using the `addDoc` function. Once the product is successfully added, a success alert is shown, and the product's ID is displayed in the `message` element. After the product is added, the `fetchAndRenderProducts` function is called to update the product list. If an error occurs during the process, an error message is displayed in the `message` element.
async function addProduct(product) {
  Swal.fire({
    title: "Please Wait",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  try {
    const productWithTimestamp = {
      ...product,
      createdAt: Timestamp.now(),
    };
    const docRef = await addDoc(
      collection(db, "products"),
      productWithTimestamp
    );
    Swal.fire({
      title: "Product Added",
      icon: "success",
    });
    document.getElementById("message").innerText =
      "Last Product added with ID: " + docRef.id;
    fetchAndRenderProducts();
  } catch (error) {
    document.getElementById("message").innerText =
      "Error adding product: " + error.message;
  }
}

// This code listens for the `submit` event on a form with the ID `add-product-form`. When the form is submitted, it prevents the default behavior and gathers the values of the product's name, category, image URL, price, discounted price, and size from their respective input fields. These values are used to construct a `product` object. The `addProduct` function is then called to add this product to the database. After adding the product, the form is reset to clear the input fields.
document
  .getElementById("add-product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const product = {
      name: document.getElementById("productName").value,
      category: document.getElementById("category").value,
      image: document.getElementById("image").value,
      price: parseFloat(document.getElementById("price").value),
      discountedPrice: parseFloat(
        document.getElementById("discountedPrice").value
      ),
      size: document.getElementById("size").value,
    };

    addProduct(product);
    e.target.reset();
  });

// This script listens for the page's `DOMContentLoaded` event, then initializes product fetching and rendering functions. It allows users to search for products by name via a search input and a search button. When a search is performed (by clicking the button or pressing "Enter"), the `fetchAndRenderProducts` function is called, which queries the Firestore database for products. The products are filtered based on the search term, and the filtered products are displayed in a `product-list` container as HTML elements. Each product is shown with its name, price, discounted price, size, and an image. A delete button is also included to remove a product from the database by calling a `deleteProduct` function. If no products match the search, an appropriate message is displayed. If there's an error in fetching products, it logs the error and displays an error message on the page.
document.addEventListener("DOMContentLoaded", () => {
  window.fetchAndRenderProducts = fetchAndRenderProducts;

  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", () => {
    fetchAndRenderProducts(searchInput.value.toLowerCase());
  });

  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      fetchAndRenderProducts(searchInput.value.toLowerCase());
    }
  });

  async function fetchAndRenderProducts(searchTerm = "") {
    const productListContainer = document.getElementById("product-list");
    productListContainer.innerHTML = "";
    try {
      const productsCollection = collection(db, "products");
      const querySnapshot = await getDocs(productsCollection);
      if (querySnapshot.empty) {
        productListContainer.innerHTML = "<p>No products available.</p>";
        return;
      }
      const products = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .sort((a, b) => {
          if (a.createdAt && b.createdAt) {
            return a.createdAt.toMillis() - b.createdAt.toMillis();
          }
          return 0;
        });

      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );

      if (filteredProducts.length === 0) {
        productListContainer.innerHTML =
          "<p>No products match your search.</p>";
      } else {
        filteredProducts.forEach((productData) => {
          const productElement = document.createElement("div");
          productElement.classList.add("product-item");
          productElement.innerHTML = `
                  <div class="product-card" style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="product-details">
                      <p><strong>${productData.name}</strong></p>
                      <p>Max. Rate: ₹${productData.price} <br> Customer Rate: ₹${productData.discountedPrice}</p>
                      <p>Size: ${productData.size}</p>
                    </div>
                    <div class="product-image" style="max-width: 150px;">
                      <img src="${productData.image}" alt="${productData.name}" style="width: 100%; height: auto; object-fit: cover;">
                    </div>
                  </div><button class="delete" onclick="deleteProduct('${productData.id}')">Delete Product</button>
                  <hr>
              `;
          productListContainer.appendChild(productElement);
        });
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      productListContainer.innerHTML = "<p>Error loading products.</p>";
    }
  }
  fetchAndRenderProducts();
});

// This code defines a `deleteProduct` function to remove a product from the Firestore database. It integrates SweetAlert2 for a confirmation prompt before deleting a product. When a user clicks the delete button, the `deleteProduct` function is triggered, prompting a confirmation dialog with options to proceed or cancel the deletion. If the user confirms, the product with the specified `productId` is deleted from the Firestore collection using the `deleteDoc` method. After successful deletion, the list of products is refreshed by calling `fetchAndRenderProducts()` to reflect the removal on the page. If there's an error during deletion, an error message is displayed using SweetAlert2. The code handles both successful deletion and error scenarios smoothly.
window.deleteProduct = deleteProduct;
async function deleteProduct(productId) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    iconColor: "#d33",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#cd0000",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await deleteDoc(doc(db, "products", productId));
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
        fetchAndRenderProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
        Swal.fire(
          "Error!",
          "Error deleting product: " + error.message,
          "error"
        );
      }
    }
  });
}

// Scroll to Top Function
document
 .getElementById("scroll-to-top")
 .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
});

// Scroll to Bottom Function
document
  .getElementById("scroll-to-bottom")
  .addEventListener("click", function () {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
});
