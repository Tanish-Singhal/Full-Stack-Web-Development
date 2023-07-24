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