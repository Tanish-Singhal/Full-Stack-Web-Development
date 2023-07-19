// Javascript(ECMAScript) is a multi purpose and multi paradigm programming language.

console.log("Namaste Duniya!");    // used to print the statement

// TODO: console.log
console.log(12);
console.log(true, null, 13, "Tanish");
console.log();

// process.stdout.write ("Namaste");
// process.stdout.write ("Duniya");
// console.log();


// Dynamic Typing
let a = 5;
console.log(a);

a = "Tanish Singhal";
console.log(a);
console.log();


// TODO: To take the input from the user
// Browser Code:
let name = prompt("What is your name?");     // a box appear on browser to take the input

// and to print something on that box
let message = alert("Showing alert message");

// FIXME: Note:- if you take any input from the user using prompt then, the valueyou receive will always be a string.
// if you take the input from the user as a number and you get the number as a string, by this you can convert any number string to a number by 
// Number(stringnum);
let input = prompt("Write a number");

let stringnum = input + 10;     // it uses the string input as string
let num = Number(input) + 10;   // it takes the string input and convert it to a number

console.log(stringnum);
console.log(num);

// let number = Number(prompt("Enter a number: "));