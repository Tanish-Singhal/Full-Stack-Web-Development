// TODO: Javascript(ECMAScript) is a multi purpose and multi paradigm programming language.

console.log("Namaste Duniya!");    // used to print the statement


// TODO: 7 Datatypes
// Null, Undefined, Boolean, string, number, symbol     => Primitive Datatypes
// Objects, Functions, Array    => Reference Datatypes

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
console.log(undefined);     // Something not defined yet but may be defined later
console.log(null);          // It actually represents empty value.
console.log();

// Object is at the bottom

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
console.log(10 == 5);    // Abstract Equality   (it do type conversion)
console.log(10 === 5);    // Strict Equality    (to don't do type conversion)
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
console.log(!(3 > 4));
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


// TODO: For Loop
for (let j = 0; j < 10; j++) {
    console.log(j);
}
console.log();


// TODO: While Loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.log();


// TODO: Do-while Loop (It execute atlest one time always whether the consdititon is true or false)
let m = 0;
do {
    console.log(m);
    m++;
}while (m < 10);
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


// TODO: Continue (it will take back to the nearest loop)
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
// return keyword returns an output out of the function and immediately stops the function execution.
console.log()

// FIXME: another way to write the function (Arrow Function)
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}
console.log(mean(4, 5, 6, 7));
console.log();


// TODO: Object (key-value pairs)    Here item is the reference to this object
const item = {
    Harry: true,
    Shubh: false,
    Lovish: 67,
    Rohan: undefined,

    // If we add function inside an object then it is called method.
    draw: function() {
        console.log('drawing rectangle');
    }
}
console.log(item);
console.log(item.Lovish);
console.log(item.draw());    // calling the method

// FIXME: To add things in an object (two methods)
item.color = "yellow";
item["friend"] = "Shubham";
console.log(item);

// FIXME: we can access the value by two notation .but why?
console.log(item.Lovish);
console.log(item['Lovish']);


// FIXME: function to create an object (Factory Function)
function createRectangle(l, b) {
    let rectangle = {
        length1 : l,
        breadth1 : b,

        drawing: function() {
            console.log('drawing Rectangle JI');
        }
    }
    return rectangle;
}
let rectangleobj1 = createRectangle(5, 4);
let rectangleobj2 = createRectangle(6, 3);
let rectangleobj3 = createRectangle(2, 7);
console.log();


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

// FIXME: Unary Plus (+) 
// it tries to convert the variable into a number if it is not already a number
let hu = "22";
let pu = +hu;     // x type converted
console.log(typeof hu, ",", hu);
console.log(typeof pu, ",", pu);
console.log();

// FIXME: Unary Mius (-)
// It also converts the operands to a number, but always make the result negative
let tu = "22";
let ku = -tu;     // x type converted
console.log(typeof tu, ",", tu);
console.log(typeof ku, ",", ku);
console.log();


// TODO: Browser Code (this code will only works on browser)
// let age = prompt("Hey, What is your age?");
// age = Number,parseInt(age);     // converting the string into a number
// if (age > 18) {
//     alert ("This is a valid age");
// }
// else {
//     alert ("This is not a valid age");
// }
// console.log("Done");
// console.log("You can", (age<18? "not valid" : "valid"));
// console.log();


// TODO:
console.log(console.log(10));
console.log();
// as console.log is a function, the inner console.log prints 10 and return undefined and then the outer console.log prints undefined as undefined and return undinedd
// so that's why the output is
// 10
// undefined

// TODO: Difference between Primitive and Reference Datatypes
let pri_1 = 10;
let pri_2 = pri_1;
pri_1++;

console.log(pri_1);
console.log(pri_2);

console.log();

let ref_1 = {value : 10};
let ref_2 = ref_1;
ref_1.value++;

console.log(ref_1.value);
console.log(ref_2.value);
console.log();

// this is because in primitive type coopy was created
// and in reference type, same address par point karte hai 

// FIXME: Note:- Primitives are copied by their values
//               Reference are copied by their address/reference

let asd = 10;
function inc (asd) {
   asd++;
}

inc(asd);
console.log(asd);
console.log();


// TODO: for-in and for-of loop
let square = {
    length: 2,
    breadth: 4 
};

// for-in loop  (by this i can iterate on object)
for (let key in square) {
    // keys are reflected through key variables
    // values are reflected through square[key]
    console.log(key, square[key]);
}

// for-of loop (this loop can only use on iterables like Arrays and Maps)