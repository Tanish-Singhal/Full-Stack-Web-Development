let number1 = [1, 2, 3, 4, 5];
let number2 = number1;

// number1 = [];    (not a good practice)
number1.length = 0

console.log(number1);
console.log(number2);
console.log();


// another method
let array = [1, 6, 8, 2, 7, 3];
console.log(array);

array.splice(0, array.length);
console.log(array);