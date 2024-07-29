function searchProducts() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        // Replace the following line with your search logic
        console.log(`Searching for: ${query}`);
        // Example: Redirect to a search results page
        window.location.href = `/search?query=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term');
    }
}