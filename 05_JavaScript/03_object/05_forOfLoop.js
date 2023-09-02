// forOf loop
// forOf loop works on arrays, strings, sets, maps
// when you have to perform some operations in the array then we use forOf loop

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// this loop will run for each element of the array
for (let key of arr) {
    console.log(key + 2);
}
// here, key is the random valriable name of the elements in the array

// Note:- forOf loop never change the data of the main array, It change the data of the temporary array. By this the data of the main array will always be the same.