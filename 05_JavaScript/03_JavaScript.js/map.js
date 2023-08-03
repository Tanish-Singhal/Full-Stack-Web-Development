// TODO: Map function
// map ka matlab array ek ek ek member par koi calculation perform karo and uska answer save karo ek naye array me
let numbers = [7, 8, 9, 10];
console.log(numbers);

// Mapping Each Number to its corresponding Square
let arrSquare = numbers.map(val => val * val);
console.log(arrSquare);

// Mapping with Object  (convert it into arrow function if you want)
let objArray = numbers.map(function (val) {
    return {element : val};
});
console.log(objArray);
console.log();

// FIXME: you always have to return a value in map, without this it doesn't work.
