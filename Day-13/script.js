"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseUrl = 'https://api.quotable.io';
const random = '/random?';
// DOM elements
const button = document.querySelector("#newQuote");
const quote = document.querySelector("blockquote p");
const cite = document.querySelector("blockquote cite");
const rightColumn = document.querySelector('#right');
function updateQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        // Fetch a random quote from the Quotable API
        const response = yield fetch(`${baseUrl}${random}`);
        const data = yield response.json();
        for (let i = 1; i < rightColumn.childNodes.length; i++) {
            rightColumn.childNodes[i].remove();
        }
        if (response.ok) {
            // Update DOM elements
            quote.textContent = data.content;
            cite.textContent = data.author;
            if (data.tags !== null) {
                for (let i = 0; i < data.tags.length; i++) {
                    const div = document.createElement('div');
                    div.textContent = data.tags[i] + ' ';
                    rightColumn.append(div);
                }
            }
        }
        else {
            quote.textContent = "An error occurred";
            console.log(data);
        }
    });
}
// Attach an event listener to the `button`
button.addEventListener("click", updateQuote);
// call updateQuote once when page loads
updateQuote().then(r => {
    if (r !== undefined)
        console.log(r);
});
