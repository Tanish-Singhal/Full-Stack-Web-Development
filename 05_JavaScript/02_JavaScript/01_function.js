// TODO: Functions
function abcd(a, b, c) {
    console.log(a, b, c);
}
abcd(12, 13, 14);
console.log();


// FIXME: another way to write the function (Arrow Function)
// function word hatao -> arrow lagao
// if there a single parameter function, then remove the bracket around filternum
// if the function body is of single line, then remove the curly braces and the return keyword

const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}
console.log(mean(4, 5, 6, 7));

console.log();



// TODO: function Assignment
// 1. Named Function Assignment
let stand = function walk() {
    console.log('walking');
}
console.log(stand);

// 2. Anonimys Function Assignment
let stand2 = function() {
    console.log('walking');
}
console.log(stand2);

// Difference between named ana ananisymys function assignment
// Ans:- named function assignment => function name is present
//    anonimys function assignment => function name is not present
console.log();



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
console.log();



// TODO: Rest Operator (It will make an array not object like above)
function sub(num, value, ...args) {
    console.log(num);
    console.log(value);
    console.log(args);      
}

sub(1, 2, 3, 4, 5);
console.log();



// Default Parameter
// It will use when, somehow the user do not pass any value and you want to use a default value
function interest(p, r=6, y=10) {   // default values
    return p*r*y/100;
}

console.log(interest(100,5,));      // if the user do not pass any value here, then it will take the default value otherwise user values were taken
console.log(interest(undefined, 3, 9));
console.log(interest(50, undefined, 5));

