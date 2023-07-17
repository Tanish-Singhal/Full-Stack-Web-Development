// Variables 
// Variables are the buckets in the memory which stores some value
// let, var, const  (The difference between all the thress are in the scopes)

var c = 20;
console.log(c);
const h = 'abcd';
if (true) {
    let a = 10;
    console.log(a);
    console.log(c);

    var c = 15;
    console.log(c);
    // console.log(h);

    const h = 'efg';
    console.log(h);
}

console.log(c);
console.log(h);
console.log();
// Seedhi baat: Var ko use mat karo


// TODO: Difference between var and let

// 1. var is of es5 and let is of es6

// 2. var function scoped hota hai and let braces scoped hota hai

// var (use can use this i theoughout the function)
function abcd() {
    for (var i = 1; i <= 12; i++) {
        console.log(i);
    }
    console.log();
    console.log(i);
}

abcd();

// let (use can now use i wothout the braces of the for loop only)
// function abcd() {
//     for (let i = 1; i < 12; i++) {
        
//     }
//     console.log(i);
// }

// abcd();

// 3. var khudko window onject mein jodta hai and let nhi jodta hai
// window object :- things which are not the part of the language, but that things are provided to you by the browser you are working on. Like console, document, settimeout and many more (you can find them in inspect element)
// to use it :- write "window" in console and then click on the drop down menu
var a = 12;
let b = 12;
// if you see in browser "window"
// then the a = 12 inside the "window" and b = 12 wasn't shown.
// but it is not good, by this "var" exposses your variable and data to everyone, which is not good. So that's why in let this was not given