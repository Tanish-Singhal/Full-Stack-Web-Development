// There are two types of strin in JavaScript

// 1. normal string (Primitive String)
// 2. String object 

let firstName = 'Tanish';               // Primitive String
let lastName = new String('Singhal');   // String object

console.log(firstName, lastName);
console.log(typeof(firstName), typeof(lastName));
console.log();

// FIXME: but if you want to make the Primitive typr string to an object use dot notation with it
console.log(firstName.length);
console.log();

let msg = " This is my first message ";

console.log(msg.length);  // 26

console.log(msg[0]);      // " "

console.log(msg.includes('ss'));  // True

console.log(msg.startsWith(' Th'));  // True

console.log(msg.endsWith('sh'));  // False

console.log(msg.indexOf('i'));    // 3

console.log(msg.charAt(10));    // y

console.log(msg.charCodeAt(22));    // a -> 97 (ASCII value)

console.log(msg.toUpperCase());

console.log(msg.toLowerCase());

// if the string has a space at front or back
console.log(msg.trim());     // it will remove front and back space from the string

console.log(msg.replace("ani", "hii"));

// to extract words from the string
let words = msg.split(" ");
console.log(words);