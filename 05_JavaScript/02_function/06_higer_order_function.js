// If we send another function as a parameter in a function, or it will return a function then we can say that the function is a Higher Order Function
function abcd() {

    return function() {}
    
}

abcd(function() {})