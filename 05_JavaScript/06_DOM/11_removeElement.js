// This is used to remove any element from the HTML document
// To remove the element, we have to know following things:
// 1. parent element
// 2. child element

// suppose we have to remove the h2 tag whose class is tempText
let parentElement = document.querySelector(".heading_text");
let childElement = document.querySelector(".tempText");

parentElement.removeChild(childElement);
// now the tag with class="tempText" will be removed.

console.log(parentElement);