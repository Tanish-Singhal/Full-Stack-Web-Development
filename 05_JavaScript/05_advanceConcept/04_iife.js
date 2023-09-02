// iife => Immediately invoked function expression
// iife hai function ko turant chalane ki kala, is teereke se ki hum log koi private variable bana paaye

// private variables => variables whose value we can't able to change or access in future (if we want to print the variable it doesn't print)

let ans = (function() {
    let pvt_var = 10;

    return {
        // age: 12
        getter: function() {
            console.log(pvt_var);       // now we can access the private variable
        },
        setter: function(val) {         // by this wecan change the value of the private variable
            pvt_var = val;
        }
    }
})()
// console.log(pvt_var);

// see we cant able to access the variable (bacause line:6 to line:12 there is a iife)