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

// objects (key-value pairs)
console.log({"sanket": 123});
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