// we can change the style of the HTML document by using the JavaScript
// by using:
// .style
// .csstext

// Specificity: inline CSS > internal CSS > external CSS

let a = document.querySelector("h1");


// FIXME: .style
// a.style.color = "yellow";
// a.style.backgroundColor = "black";

// Problem: we can only apply single property at a time


// FIXME: .cssText
a.style.cssText = "color: darkblue; background-color: aquamarine; font-size: 2em;";
