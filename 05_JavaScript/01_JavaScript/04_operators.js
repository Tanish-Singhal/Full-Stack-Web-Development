// Operators

// Arithematic Operator
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


// Assignment Operator
let a = 10;
a += 2;     // x = x + 2 -> 12
console.log();


// Comparison Operator
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);
console.log(10 == 5);    // Abstract Equality   (it do type conversion)
console.log(10 === 5);    // Strict Equality    (to don't do type conversion)
console.log(10 != 5);    // Abstract Not Equal
console.log(10 !== 5);    // Strict Not Equal
console.log();


// Logical Operator (in logical operator the operands are evaluated as booleans and then operators are applied.)
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


// String Based Operator
console.log("abc" + "Tanish");    // abcTanish
console.log(5 + 5 + "5" + 5 + 5);
console.log();


// Bitwise Operator
// Bitwise and -> &,    Bitwise or -> |,    Bitwise XOR -> ^,    Bitwise not -> ~
// Left Shift -> <<,    Right Shift -> >>
console.log(5 & 3);
console.log(5 | 4);
console.log(3 ^ 3);
console.log(5 << 2);    // 101 -> 10100
console.log(5 >> 1);    // 101 -> 10
console.log();


// Terenary Operator
console.log((3 > 2) ? "Tanish" : "Singhal");
console.log((3 < 2) ? "Tanish" : "Singhal");
console.log();


// Unary Operators
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