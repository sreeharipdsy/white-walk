// Importing the necessary Firebase modules
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Admin login
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

// Check if user is logged in
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

// Add product to Firestore
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
  } catch (error) {
    document.getElementById("message").innerText =
      "Error adding product: " + error.message;
  }
}

// Handle form submission
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
                      <p>Price: ₹${productData.price} | Discounted Price: ₹${productData.discountedPrice}</p>
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
        fetchAndRenderProducts(); // Refresh the product list after deletion
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
