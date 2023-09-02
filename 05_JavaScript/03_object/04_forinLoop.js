// forin loop
// forin loop will be use to apply loops on object
// when you have to perform some operations on object then we use forin loop

let obj = {
    name: "Tanish",
    age: 19,
    city: "Faridabad",

    // object
    address : {
        street : 69,
        colony : "L_LASAN",
        district : "No Way Home",
    }
}

for(let key in obj) {
    // keys are reflected through key variables
    // values are reflected through square[key]
    console.log(key, obj[key]);
}
// here, key is the random variable name
console.log();

for (let key in obj.address) {
    console.log(key, obj.address[key]);
}