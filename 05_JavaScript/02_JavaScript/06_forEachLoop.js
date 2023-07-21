// forEach loop
// forEach loop only works on array
// when you have to perform some operations in the array then we use forEach loop

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// this loop will run for each element of the array
arr.forEach (function (val) {    
    console.log(val + 2);
});
// here, val is the random valriable name of the elements in the array
console.log(arr);

// Note:- forEach loop never change the data of the main array, It change the data of the temporary array. By this the data of the main array will always be the same.

console.log();

// you can also do the same thing with for-of loop also, because forOf loop also works on arrays
for (let ans of arr) {
    console.log(ans + 2);
}
console.log(arr);