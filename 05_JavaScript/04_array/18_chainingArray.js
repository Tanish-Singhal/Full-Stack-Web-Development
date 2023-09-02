// Chaining (we can apply one than one property)
// we have to filter positive number and then make an object
let number = [1, 5, 89, -41, -412, 356, -542];

// let filtered = number.filter (value => value >= 0);
// let items = filtered.map (num => {value: num});

// console.log(items);

// if we replace the code of "filtered" in the "items"
// then this is called chaining
let items = number.filter(value => value >= 0).map(num => ({ value: num }));

console.log(items);