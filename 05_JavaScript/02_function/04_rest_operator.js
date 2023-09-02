// Rest Operator (It will make an array not object like above)
function sub(num, value, ...args) {
    console.log(num);
    console.log(value);
    console.log(args);      
}

sub(1, 2, 3, 4, 5);