function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

// Wait for the document to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Get the sticky_index and content_container elements
    const stickyIndex = document.querySelector(".sticky_index");
    const contentContainer = document.querySelector(".content_container");

    // Create an ordered list element to hold the contents list
    const contentsList = document.createElement("ul");

    // Loop through the h1 and h2 elements inside content_container
    contentContainer.querySelectorAll("h1, h2").forEach(function (header) {
        // Create list items for h1 and h2 elements
        const listItem = document.createElement("li");

        // Set the list item's text to the text content of the header element
        listItem.textContent = header.textContent;

        // Set a class to differentiate h1 and h2 items
        listItem.classList.add(header.tagName.toLowerCase() === "h1" ? "h1-item" : "h2-item");

        // Add an event listener to scroll to the corresponding section when clicked
        listItem.addEventListener("click", function () {
            header.scrollIntoView({ behavior: "smooth" });
        });
        
        const randStr = generateRandomString(5)
        header.id += randStr


        // Append the list item to the contents list
        contentsList.appendChild(listItem);
    });

    // Append the contents list to the sticky_index
    stickyIndex.appendChild(contentsList);
});
