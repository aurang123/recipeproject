document.getElementById("search-button").addEventListener("click", function() {
    const searchTerm = document.getElementById("recipe-search").value;

    // Perform an API call to retrieve recipes based on the searchTerm
    // Update the "recipe-list" and "result-message" elements with the fetched data

    // Show the "Results Section" by setting its display property to "block"
    document.querySelector(".results").style.display = "block";
});
