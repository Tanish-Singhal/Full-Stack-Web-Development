// TODO: Javascript(ECMAScript) is a multi purpose and multi paradigm programming language.

console.log("Namaste Duniya!");    // used to print the statement


// TODO: 7 Datatypes
// Null, Undefined, Boolean, string, number, symbol     => Primitive Datatypes
// Objects

// Number
console.log(12);
console.log(3.45);
console.log(-45);
console.log(0);
console.log(-0);
console.log();

// String
console.log("This is a text");
console.log('single quoted string');
console.log(`This is a backtick string`);
console.log();

// Boolean
console.log(false);
console.log(true);
console.log();

// undefined, null
console.log(undefined);
console.log(null);
console.log();

// objects (key-value pairs)    Here item is the reference to this object
const item = {
    Harry: true,
    Shubh: false,
    Lovish: 67,
    Rohan: undefined,
}
console.log(item["Lovish"]);
console.log(item);
item["friend"] = "Shubham";
console.log(item);
console.log();

// symbol
console.log(Symbol('hello'));
console.log();


// TODO: Operators
// typeof
console.log(typeof -0);
console.log(typeof "text");
console.log(typeof undefined);
console.log(typeof null);               // corner case
console.log(typeof {"Tanish": 12});
console.log(typeof NaN);
console.log();


// TODO: consol.log
console.log(12);
console.log(13);
console.log(true, null, 13, "Tanish");
console.log();

process.stdout.write ("Namaste");
process.stdout.write ("Duniya");
console.log();


// TODO: 3 Variables 
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


// TODO: Operators
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);    // normal division (with decimals)
console.log(10 % 2);    // remainder
console.log(10 ** 2);   // power
console.log();

// FIXME: Note if we want to have floor divison
// 1 way -> parseint(5/2);
// 2 way -> Math.floor(5/2);


//TODO: Assignment Operator
let a = 10;
a += 2;     // x = x + 2 -> 12
console.log();


// TODO: Comparison Operator
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);
console.log(10 == 5);    // Abstract Equality
console.log(10 === 5);    // Strict Equality
console.log(10 != 5);    // Abstract Not Equal
console.log(10 !== 5);    // Strict Not Equal
console.log();


// TODO: Logical Operator (in logical operator the operands are evaluated as booleans and then operators are applied.)
// && (and), || (or), ! (not)
console.log((10 > 5) && (7 < 6));
console.log((10 > 5) || (7 < 6));
console.log(4 && 0);    // 0    (false)
console.log(4 || 0);    // 4    (true)
console.log(0 && 4);    // 0    (false)
console.log(0 || 4);    // 4    (true)
console.log(4 || 5);    // 4    (true and the first value was printed)
console.log(3 && 4);    // 4    (true and the second value was printed)
console.log(3 || 4);    // 3    (true and the second value was printed)
console.log(-0 && 9);   // -0
console.log();


// TODO: String BAsed Operator
console.log("abc" + "Tanish");    // abcTanish
console.log(5 + 5 + "5" + 5 + 5);
console.log();


// TODO: Bitwise Operator
// Bitwise and -> &,    Bitwise or -> |,    Bitwise XOR -> ^,    Bitwise not -> ~
// Left Shift -> <<,    Right Shift -> >>
console.log(5 & 3);
console.log(5 | 4);
console.log(3 ^ 3);
console.log(5 << 2);    // 101 -> 10100
console.log(5 >> 1);    // 101 -> 10
console.log();


// TODO: Terenary Operator
console.log((3 > 2) ? "Tanish" : "Singhal");
console.log((3 < 2) ? "Tanish" : "Singhal");
console.log();


// TODO: If-else Conditions
if (2 < 1) {
    console.log("Hi");
}
else if (10 > 11) {
    console.log("By");
}
else {
    console.log("Nothing");
}
console.log();


// TODO: While Loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.log();


// TODO: For Loop
for (let j = 0; j < 10; j++) {
    console.log(j);
}
console.log();

// TODO: Break (cursor came out of the nearest loop)
for (let p = 1; p < 10; p++) {
    if (p%7 === 0) {
        console.log("breaking now");
        break;
    }
    console.log(p);
}
console.log();

// TODO: COntinue (it will take back to the nearest loop)
for (let r = 0; r < 10; r++) {
    if (r%3 ===0) {
        continue;
    }
    console.log(r);
}
console.log();

// TODO: Swith case 
let exp = "-";
let e = 10;
let f = 3;
switch(exp) {
    case "+":
        console.log(e + f);
        break;
    case "-":
        console.log(e - f);
        // break;
    case "*":
        console.log(e * f);
        break;
    case "/":
        console.log(e / f);
        break;
    default:
        console.log("invalid input");
        break;
}
console.log()

// TODO: functions
function fun(k) {
    console.log(k + 10);
    return k*10;
}

let k = fun(10);
console.log(fun(10));
// ruturn keyword retuens an output out of the function and immediately stops the function execution.
console.log()
console.log(console.log(10));
console.log()
// as console.log is a afunction, the inner console.log prints 10 and return undefined and then the outer console.log prints undefined as undefined and return undinedd
// so that's why the output is
// 10
// undefined

// TODO: Unary Operators
let abc = 10;
let efg = abc++;
let ijk = abc++;
console.log(abc, efg, ijk);
console.log()

let lmn = 10;
let opq = ++lmn;
let rst = ++lmn;
console.log(lmn, opq, rst);
console.log()


// TODO: Browser Code
let age = prompt("Hey, What is your age?");
age = Number,parseInt(age);     // converting the string into a number
if (age > 18) {
    alert ("This is a valid age");
}
else {
    alert ("This is not a valid age");
}
console.log("Done");
console.log("You can", (age<18? "not valid" : "valid"));