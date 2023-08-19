// TODO: Combining of Array    (two methods)
let first = [1, 2, 3];
let second = [4, 5, 6];

let combined = first.concat(second);
let spreadCombined = [...first, ...second];
let spreadCombined2 = [...first, 'a', true, ...second, 'b'];

console.log(combined);
console.log(spreadCombined);
console.log(spreadCombined2);
console.log();