// By this, we can select any tag, class, id of any html document, with the help of JS.


// Tag Name 
let tagItem = document.querySelector('h1');
console.log(tagItem);

let tagItem2 = document.querySelectorAll('h1');
console.log(tagItem2);


// class 
let classItem = document.querySelector('.colorname');
console.log(classItem);

let classItem2 = document.querySelectorAll('.colorname');
console.log(classItem2);


// id 
let idItem = document.querySelector('#content');
console.log(idItem);

let idItem2 = document.querySelectorAll('#content'); // Use idItem2 here
console.log(idItem2);


// FIXME: querySelector is used to select a single element from the DOM tree, while document.querySelectorAll is used to select multiple elements from the DOM tree