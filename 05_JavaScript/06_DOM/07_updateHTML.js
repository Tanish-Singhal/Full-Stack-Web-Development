// If we want to update the existing content in the web page
// 1. innerHTML  ->  By this we can change the text inside any class, id or tag
// 2. outerHTML
// 3. textContent
// 4. innerText

// FIXME: innerHTML
let changed_text = document.querySelector('.colorname');
console.log(changed_text.innerHTML);
changed_text.innerHTML = "He He He He";
console.log(changed_text.innerHTML);




// FIXME: outerHTML
// innerHTML is used to access or modify only the content inside an element
// outerHTML is used to access or modify the entire element along with its content
let inner_outer = document.querySelector(".example");
// console.log(inner_outer.innerHTML);
console.log(inner_outer.outerHTML);
let poo = inner_outer.outerHTML = '<section class="new-example">Updated content</section>';
console.log(poo);
// in this we change the div into section
// and also the content inside the div




// FIXME: textContent
// Difference between innerHTML and textContent is
// innerHTML renders in Tag inside it 
// textContent treats the tag as a text inside it
let box = document.querySelector(".box");
box.innerHTML = "<h1>Hello</h1>";
box.textContent = "<h1>Bye!</h1>";




// FIXME: innerText
// Differnce between textContent nad innerText is
// textContent shows all the text including the media queries chaning text also
// innerText don't show the text which you were written in the media queries or the tag whose display property is hidden or none
let boldy = document.querySelector(".huihui");
console.log(boldy.textContent);
console.log(boldy.innerText);
// as innerText don't show the things whose display are hidden or none.