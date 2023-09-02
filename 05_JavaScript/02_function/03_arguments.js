// Arguments in JavaScript
function sum() {
    // console.log(arguments);
    let total = 0;
    for(let key of arguments)
        total = total + key;
    return total;
}

// console.log(sum(1,2));   // 3
// console.log(sum(1));     // NaN
// console.log(sum());      // NaN
console.log(sum(1, 2, 3, 4, 5));    // 3 (Objects) (all the number are stored in the arguments)
// Here the sum are of the forst two number s and rest are ignored