let unSort = [40, 61, 31, 75, 12];

// Sort in ascending order
console.log(unSort.sort());     // This sort function sort as a string 

// sort in descending order
console.log(unSort.reverse());
console.log();

// Sorting in objects
let objArr = [
    {id: 1, name: "Tanish"},
    {id: 3, name: "Saksham"},
    {id: 2, name: "Singhal"},
    {id: 4, name: "Gupta"},
    {id: 5, name: "Rahul"},
];
let sortable = objArr.sort((a, b) => a.id - b.id);
console.log(sortable);