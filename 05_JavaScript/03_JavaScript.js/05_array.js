// Array 
// It is an object and it was of reference type.
// In array, we can store different types of data in it.

// TODO: Creation of array
let arr = [1, 3, 5, 7, 9];
console.log(arr);


// FIXME: Insertion
// Insertion at the Beginning of Array
arr.unshift(10);
console.log(arr);

// Insertion at End of Array 
arr.push(8);
console.log(arr);

// Insertion at the Middle og Array
arr.splice(3, 0, 'a', 'b', 'c');            // (array, deletion count, elent to be inserted)
console.log(arr);
console.log();


// FIXME: Searching
console.log(arr);

// Searching of number's index
console.log(arr.indexOf('a'));

// if the element was not present in the array it always print -1.
console.log(arr.indexOf(15));

// if i want to search the element between some index
console.log(arr.indexOf(5, 2));     // it will start the searching from 2nd index till last and search for the element 5
console.log(arr.indexOf(1, 3));     // -1 (1 was not present because the searching starts from 3rd index)

// if we want to check if an element is present in the array or not
console.log(arr.includes(3));   // true
console.log(arr.includes(50));  // false
console.log();


// FIXME: Removing element in array
console.log(arr);

// Remove at Beginning of Array
arr.shift();
console.log(arr);

// Remove at End of Array 
arr.pop();
console.log(arr);

// Remove at Middle 
arr.splice(1, 2);   // index of the element to be removed, no. of element to be removed.
console.log(arr);
console.log();





// TODO: Emptying an array
let number1 = [1, 2, 3, 4, 5];
let number2 = number1;

// number1 = [];    (not a good practice)
number1.length = 0

console.log(number1);
console.log(number2);
console.log();





// TODO: Combining of Array    (two methods)
let first = [1, 2, 3];
let second = [4, 5, 6];

let combined = first.concat(second);
let spreadCombined = [...first, ...second];
let spreadCombined2 = [...first, 'a', true, ...second, 'b'];

console.log(combined);
console.log(spreadCombined);
console.log(spreadCombined2);
console.log();


// FIXME: Spliting of Array
console.log(combined);
// if you want to take some part of an array
let sliced = combined.slice(2, 5);      // it not include the second index value
console.log(sliced);

let sliced2 = combined.slice(2);        // sliced from 2nd index till end
console.log(sliced2);
console.log();


// FIXME: Make a Copy of an Array   (Two methods)
console.log(combined);

let copyCombined = combined.slice();
let anotherCombined = [...combined];

console.log(copyCombined);
console.log(anotherCombined);
console.log();





// TODO: Joining and spliting of an array
let message = "This is my first message";

// this will split the message whenever it see space(" ") and make it an array
let parts = message.split(" ");
console.log(parts);

// This will join thr array, and make it one
let joined = parts.join("_");
console.log(joined);
console.log();





// TODO: Sorting of an array
let unSort = [40, 61, 31, 75, 12];

// Sort in ascending order
console.log(unSort.sort());     // This sort function sort as a string 

// sort in descending order
console.log(unSort.reverse());
console.log();

// Sorting in objects
let objArr = [
    {id: 1, name: "Tanish"},
    {id: 2, name: "Saksham"},
    {id: 3, name: "Singhal"},
    {id: 4, name: "Gupta"},
    {id: 5, name: "Rahul"},
];
let sortable = objArr.sort((a, b) => a.id - b.id);
console.log(sortable);





// TODO: Filter in array
let bunch = [1,-7,48,-67,8,-7,4,6,7,-8,5];
console.log(bunch);

// Filter which values are positive
// let filteredNum = bunch.filter(function (filternum) {
//     return filternum >= 0;
// });

// FIXME:
// function word hatao -> arrow lagao
// if there a single parameter function, then remove the bracket around filternum
// if the function body is of single line, then remove the curly braces and the return keyword
 
let filteredNum = bunch.filter( val => val >= 0 );
console.log(filteredNum);
console.log();





// TODO: Map function
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



 

