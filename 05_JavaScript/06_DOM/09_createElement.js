// It is used to add new element

// let parent = document.querySelector('#content');
// console.log(parent);

// let newElement = document.createElement('p');   // creare p
// console.log(newElement);

// // to put p tag inside content
// parent.appendChild(newElement);
// console.log(parent);

// // add content in p 
// let text_para = document.createTextNode("This is Heading");
// newElement.appendChild(text_para);

// ==================================================== 

// Quick Method
let parent = document.querySelector('#content');
let newBold = document.createElement('u');
newBold.textContent = "I am the underline statement.";
parent.appendChild(newBold);