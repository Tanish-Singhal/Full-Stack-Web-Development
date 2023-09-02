// TODO: Functions
function abcd(a, b, c) {
    console.log(a, b, c);
}
abcd(12, 13, 14);
console.log();


// FIXME: another way to write the function (Arrow Function)
// function word hatao -> arrow lagao
// if there a single parameter function, then remove the bracket around filternum
// if the function body is of single line, then remove the curly braces and the return keyword

const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}
console.log(mean(4, 5, 6, 7));