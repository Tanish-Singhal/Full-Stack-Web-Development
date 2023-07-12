console.log("1" + "2");
console.log(1 + "2");
console.log("1" - "1");
console.log();

// Coresion stands for type inter-conversion.
// Same as implicit and explicit

// in other languages (c, C++, Java) -> types exists for variable
// like    int x = 10;

// in javascript -> types exist for values
// like    let x = 10;
//             x = "str";

// in javascript types are undefined, null, boolean. string, symbol, number and object.

// How JS handles coersion?
// Abstract Operations -> These are the operations/functions which are not available for end user to use.
// ToString, ToNumber, ToBoolean, ToPrimitive


// TODO: Q) What are the falsy values in JS?
// Null, undefined, "" (empty string), +0, -0, NaN, false
// apart from the upper 7 things everything is true.

// FIXME: AND GATE
// in and gate, if the first input is false, then it doesnot evalute the second input and immediately returns the first input.
// as well as if the first input is true, then the second input has to be evaluated and then the second input is returned.
console.log(10 && 6);
console.log((5>3) && (6<7));
console.log();

// FIXME: OR GATE
// in or gate, if the first input is true, then it doesnot evalute the second input and immediately returns the first input.
// as well as if the first input is false, then the second input has to be evaluated and then the second input is returned.
console.log(10 || 0);
console.log(0 || -0);
console.log();




// TODO: ToNumber ("-" is use to mimic this)
// Subtraction always converts both the operands to a number.
console.log(12 - 4);

console.log(undefined - 3);
/**
  * undefined is not a valid number, to we make it undergo ToNumber abstract operation
  * ToNumber(undefined) -> NaN
  * NaN - 3 -> and for any number when you do any operation with NaN it results NaN
  * NaN - 3 -> NaN
*/

console.log(null - 5);
/**
  * null is not a valid number, SO we make it undergo ToNumber abstract operation
  * ToNumber(null) -> +0
  * +0 - 5 -> -5
*/

console.log("132" - 10);
/**    
  * "132" EN a string so we make it undergo ToNumber abstract operation
  * ToNumber("123") -> 123
  * 132 - 10 = 120
*/

console.log("12fd" - 20);
/**
 * "12fd" is a string, 30 we make if undergo ToNumber abstract operation
 * ToNumber("12fd") -> NAN because this string cannot DO parsed of NUMBER
 * NaN - 20 -> NaN
*/

// console.log(Symbol("123") - 30);  // gives error  

console.log(4 - true);
/**
 * true 15 a boolean, so we make it undergo ToNumber abstract operation
 * ToNumber(true) -> 1
 * 4- 1 = 3
*/

console.log("0xf" - 1);
/**
 * "0xf", is a string, but in the starting we have 0x which denotes start of hexadecimal value
 * so if we can convert this string to a valid hexadecimal, we will do it
 * 15 - 1 = 14
 */

console.log("0xz" - 1);
/**
 * "0xz" is having "0x" in the starting to denote hexadecimal, but "z" is not a valid hexadecimal, so we get NaN
 * ToNumber("0xz") -> NaN
 * NaN - 1 = NaN
 */

console.log("abcd" - 2);    // NaN
console.log("0xabcd" - 2);  // 43979