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

console.log("abcd" - 2);    // NaN
console.log("0xabcd" - 2);  // here "0x" reresnt hexadecimal number
console.log("0o11" - 1);    // here "0o" represent octal number

/**
 * More rules
 * "" (empty string) => 0
 * "(Any number)"    => number
 * "."               => NaN
 * "$"               => NaN
 * "ab32"            => NaN
 * true              => 1
 * false             => 0
 * null              => 0
 * undefined         => NaN
 * 
 * [""]              => 0
 * ["0"]             => 0
 * [null]            => 0
 * [undefined]       => 0
 * [1,2,3]           => NaN
 * []                => 0
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
console.log();

// TODO: ToString

/**
 * More Rules
 * null      => "null"
 * undefined => "undefined"
 * true      => "true"
 * false     => "false"
 * 3.145     => "3.145"
 * 0         => "0"
 * -0        => "-0"
 * 
 * []                => ""
 * [1,2,3]           => "1,2,3"
 * [null, undefined] => ","
 * [[], [], []]      => ",,"
 * [,,,]             => ",,,"
 */

console.log("Tanish" + "Singhal");
/**
 * Both of them are already a string.
 * so toprimitive conversation will also be a string
 * and we concatenate them
 */

console.log(undefined + "node");
/**
 * undefined -> "undefined"
 * "undefined" + "node" -> "undefinednode"
 */

console.log("5" + null);
/**
 * one of them is already a string, so both of them becomes a string
 * "5" + "null" -> "5null"
 */

console.log("tanish" + true);
console.log("tanish" + [null, undefined]);

console.log("tanish" + {"a" : 10});
/**
 * "tanish" -> is already a string
 * {"a" : 10} -> is not a primitive, so we call toPrimitive without a hint
 * means hint -> number
 * we first call valurOf on {"a" : 10} -> it returns same onject
 * we call toString -> toString will return '[object, object]'
 */
console.log();


// TODO: ToPrimitive
// This function takes an input argument and tries to convert it into a non object type(primitive type). If it can't it can throw error.
// It takes one more optional parameter called as preferred type. If we have 2 or more than 2 values that can become answer,  this optional argument helps us.

let a = {"english":90, "maths":100};
console.log(a.toString());
console.log(a.valueOf());

let x = [1,2,3];
console.log(x.toString());
console.log(x.valueOf());