let arr = [1, 3, 5, 7, 9];
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
