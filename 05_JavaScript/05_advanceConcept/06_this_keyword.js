// FIXME: this keyword (value of this in different scenario)

// 1. Global Scope
console.log(this);          // window


// 2. Inside Function
function abcd() {
    console.log(this);      // window
}

abcd();


// 3. Inside Method
let obj = {
    name: "Tanish",
    
    // method
    someMethod: function() {
        console.log(this);      // object obj
    }
}

obj.someMethod();
console.log("");