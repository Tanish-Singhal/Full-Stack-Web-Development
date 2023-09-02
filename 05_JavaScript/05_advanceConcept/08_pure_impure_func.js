// TODO: Pure function
// Conditions:-
// 1. It should always return same output for same input
// 2. It will never change/update the vlaue of a given variable

function abcd(val) {
    return Math.random()*val;
}

var ans1 = abcd(2);
var ans2 = abcd(2);


console.log("");


var abcd = 12;
function hello(a, b) {
    abcd = 24;
    return a * b;
}

var ans3 = hello(1, 2);
var ans4 = hello(1, 2);


// Both are not Pure Function