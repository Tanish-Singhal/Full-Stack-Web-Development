// Previously we search things on primitive types, but what about reference types
let course = [
    {no:1, naam:'Tanish'},
    {no:2, naam:'Saksham'},
    {no:3, naam:'Rahul'},
    {no:4, naam:'Yash'},
    {no:5, naam:'Utkarsh'}
];
console.log(course);

// console.log( course.includes( {no:1, naam:'Tanish'} ) );
// This is because the reference of the object inside the array and the refernce of the object which you want ot search are different.
// so that's why the answer doesnot returns true

// FIXME: but to search the element inside a reference is by using callback Functions

// FIXME: Callback Function
// A callback function is a function passed into another function as an function, which is then call inside the outer function to complete some kind of routine or action.

// function1 has another function (function2) inside it, and function1 is dependednt on function2 for its action. so we call function2 for the action.
// so we call function2 a callback function

// In Hindi,
// agar ghar par mummy to panner banana hai, then 
// mummy ne aapse poucha ki aap paneer laaye    (mummy => Tanish)
// then, Tanish par dependkarega ki panner banega ya nhi (Tanish => callback function)

let findObj = course.find(function(course) {
    return course.naam === 'Rahul';
});
console.log(findObj);

let findObj2 = course.find(function(course) {
    return course.naam === 'Pratyush';
});
console.log(findObj2);



// FIXME: // Callback Functions
// jab bhi koi aisa code jo baad me chalta hai aap likoge, kuyuki wo code baad me chalta hai js ko yeh pata nhi hota ki wo complete hua hai ya nhi, aise code ke completion par js ko bataya jata hai ki wo complete hogya aur aap usse chala sakte hai, ye batane ka kaam callback function ka hota hai

setTimeout (function () {
    console.log("2000 means 2 sec");
}, 2000);
// This is called Asynchronous JavaScript

// asisa code jo baad me chalta hai use hum ek function de dete hai ki bhaiya jab complete hojaana to ye chala dena, aur wo function jo hum dete hai wo ek normal function hota hai aur usse hum khate hai callback function