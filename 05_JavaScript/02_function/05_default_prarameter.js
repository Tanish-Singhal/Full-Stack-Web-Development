// Default Parameter
// It will use when, somehow the user do not pass any value and you want to use a default value
function interest(p, r=6, y=10) {   // default values
    return p*r*y/100;
}

console.log(interest(100,5,));      // if the user do not pass any value here, then it will take the default value otherwise user values were taken
console.log(interest(undefined, 3, 9));
console.log(interest(50, undefined, 5)); 