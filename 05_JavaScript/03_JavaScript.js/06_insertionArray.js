let arr = [1, 3, 5, 7, 9];
console.log(arr);


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