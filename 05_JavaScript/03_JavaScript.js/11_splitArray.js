let combined = [1, 2, 3, 4, 5, 6];
console.log(combined);


// if you want to take some part of an array
let sliced = combined.slice(2, 5);      // it not include the second index value
console.log(sliced);

let sliced2 = combined.slice(2);        // sliced from 2nd index till end
console.log(sliced2);

// if you want to print all the elements of the array in new line
combined.forEach (e => console.log(e));