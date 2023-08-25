// TODO: Filter in array
let bunch = [1,-7,48,-67,32,8,-7,16,4,6,7,-8,5];
console.log(bunch);

// Filter which values are positive
// let filteredNum = bunch.filter(function (filternum) {
//     return filternum >= 0;
// });

// FIXME:
// function word hatao -> arrow lagao
// if there a single parameter function, then remove the bracket around filternum
// if the function body is of single line, then remove the curly braces and the return keyword
 
let filteredNum = bunch.filter( val => val >= 0 );
console.log(filteredNum);
console.log();

// Filter which values are greater than 4 and divde by 4
let ans = bunch.filter (value => value > 4 && value % 4 === 0);
console.log(ans);