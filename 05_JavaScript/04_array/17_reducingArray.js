// If I wanted to reduce whole array into somethings and then want to use it, in that case we use Reduce function in array
let hi = [1, 2, 3, 4];

let output = hi.reduce(function (accumulator, currentValue) {       // this is the callback function
    accumulator = accumulator + currentValue;
    return accumulator;
}, 0);      // this is the accumulator initial value = 0

console.log(output);

// FIXME: Working of the code
/**
 * accmulator = 0
 * currentValue = 1
 * accumulator = accumulator + currentValue  =>  0+1 = 1
 * 
 * currentValue = 2
 * accumulator = accumulator + currentValue  =>  1+2 = 3
 * 
 * currentValue = 3
 * accumulator = accumulator + currentValue  =>  3+3 = 6
 * 
 * currentValue = 4
 * accumulator = accumulator + currentValue  =>  6+4 = 10
 */

// FIXME: if we do not initialize 0 for the accumulator then, in JS automatically assign 
// 1st index value  =>  accumulator
// 2nd index value  =>  currentValue