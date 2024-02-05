// organization_structure_scripts.js

// Function to load content into the main section
function loadContent(pageUrl) {
    // Fetch content from the specified pageUrl
    fetch(pageUrl)
        .then(response => response.text())
        .then(content => {
            // Insert the fetched content into the main-content div
            document.getElementById('main-content').innerHTML = content;
        })
        .catch(error => console.error('Error fetching content:', error));
}
