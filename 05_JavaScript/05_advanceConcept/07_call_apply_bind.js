// TODO: Call 
/**
 * Agar hamare pass ek function and ek object hai 
 * and hume function chalana hai and by default this is value window hoti hai function me 
 * but we want jo this hai vo window ko point na kare balki vo object ko point kare
 */
function hello() {
    console.log(this);
}

let free = {age: 20};

hello.call(free);
console.log("");
// without free decalration the output will be "window"




// TODO: Apply (this is use when we hane to send some parameter in the function, so we send the parameter inside the array)
function hello2(val1, val2, val3) {
    console.log(this, val1, val2, val3);
}

let free2 = {age: 20};

hello2.apply(free2, [1,2,3]);
console.log("");




// TODO: Bind
function hello3() {
    console.log(this);
}

let free3 = {age: 20};

let bindedfun = hello3.bind(free3);
bindedfun();