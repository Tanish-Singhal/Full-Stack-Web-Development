var a;
// Hoisting- variable and functions are hoisted which means there declaration is moved on the top of code


console.log(a);

// var a = 12;
// then the above line get converted into below thing
// var a;
// a = 12;

// as we know hoisting means, the declaration is moved on the top of the code
a = 12;

// that's why the output of a is undefined

// FIXME: In Variables it is happens with only var varible. we use hoisting most in functions
// let and const type variable also have hoisting but not declare by undefined just like var

run();

function run() {
    console.log('Running');
}



console.log();


// stand();

// Function Assignment
let stand = function walk() {
    console.log('walking');
};

// note that here stand is a variable not the function. but why we write stand like stand();
stand();    // by this if you want to access then things inside the function so you can write like stand(), but if you want to print it like a function then you have to write like console.log(stand)

// FIXME: Note: we cannot do hoisting in stand as stand is a variable declaration not a function.