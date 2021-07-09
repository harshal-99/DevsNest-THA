const baseUrl = 'https://api.quotable.io'
const random = '/random?'


// DOM elements
const button = document.querySelector("#newQuote");
const quote = document.querySelector("blockquote p");
const cite = document.querySelector("blockquote cite");
const rightColumn = document.querySelector('#right')

async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch(`${baseUrl}${random}`);
    const data = await response.json();
    for (let i = 1; i < rightColumn.childNodes.length; i++) {
        rightColumn.childNodes[i].remove()
    }
    if (response.ok) {
        // Update DOM elements
        quote.textContent = data.content;
        cite.textContent = data.author;
        if (data.tags !== null) {
            for (let i = 0; i < data.tags.length; i++) {
                const div = document.createElement('div')
                div.textContent = data.tags[i] + ' ';
                rightColumn.append(div)
            }
        }
    } else {
        quote.textContent = "An error occurred";
        console.log(data);
    }
}

// Attach an event listener to the `button`
button.addEventListener("click", updateQuote);

// call updateQuote once when page loads
updateQuote().then(r => {
    if (r !== undefined) console.log(r)
});

