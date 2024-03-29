// Types in JS
// primitives :- number, string, Boolean, symbol, null, undefined
// reference :- object {}, function(), array []

// asi koi bhi value jisko copy karne par real copy nhi hota, balki us main value ka reference pass hojata hai, usse hum reference valur bolte hai
// aur jiske copy karne par real copy ho jaaye wo value primitive type value hoti hai

let a = 12;
let b = a;
console.log(a, b);

b = b+2;
console.log(a, b);


console.log();


let c = [11, 12, 13, 14, 15];
let d = c;

d.pop();
console.log(d);
console.log(c);
console.log();
// because the bracket are reference type of values

// c k pass hai [11, 12, 13, 14, 15].
// and d k pass hai c ka [11, 12, 13, 14, 15]


// this is because in primitive type coopy was created
// and in reference type, same address par point karte hai 

// FIXME: Note:- Primitives are copied by their values
//               Reference are copied by their address/reference


// TODO: Reference Cloning
// but if you want to copy the value of c in d (with a reference operator)
let arr = [1, 2, 3, 4, 5];
let copyarr = [...arr];

arr.pop();
console.log(arr);
console.log(copyarr);
console.log();

// FIXME: one more example (object)
/**
 * we can clone objects by three ways:- 
 * Iteration
 * Assign
 * Spread
 */
 
let obj = {
    name: "harsh",
    class: "EC C"
};

// Iteration cloning (-----------)
let copyobj = {};

for(let key in obj) {
    copyobj[key] = obj[key];
}

// Assign cloning (-----------)
// let copyobj = Object.assign({}, obj);

// Spread Cloning (-----------)
// let copyobj = {...obj};

copyobj.name = "shubham";
console.log(obj);
console.log(copyobj);