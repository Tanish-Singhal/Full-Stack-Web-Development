// 7 Datatypes
// Null, Undefined, Boolean, string, number, symbol     => Primitive Datatypes
// Objects, Functions, Array    => Reference Datatypes

// FIXME: Primitive Datatypes
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

// Symbol
console.log(Symbol('hello'));
console.log();


// FIXME: Reference Datatypes
// Array
let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr = ['my','name','is','Priyansh'];
console.log(arr);
console.log(arr[0]);

// Object
let obj = {
    "Name" : 'Priyansh',
    "Age" : 20
};

console.log(obj["Name"]);

// Function
function abcd() {
    for (var i = 1; i <= 12; i++) {
        console.log(i);
    }
    console.log();
    console.log(i);
}

abcd();


// FIXME: typeof
console.log(typeof -0);
console.log(typeof "text");
console.log(typeof undefined);
console.log(typeof null);               // corner case
console.log(typeof {"Tanish": 12});
console.log(typeof NaN);
console.log();


FIXME:
console.log(console.log(10));
console.log();
// as console.log is a function, the inner console.log prints 10 and return undefined and then the outer console.log prints undefined as undefined and return undinedd
// so that's why the output is
// 10
// undefined