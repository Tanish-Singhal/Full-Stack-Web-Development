// normal function jisme "this" ka use ho and function ko call karte time aap "new" keyword ka use karein
function circularButton(color) {
    this.radius = 2;
    this.color = color;
    this.icon = false;
    this.pressable = true;
};

let redbtn = new circularButton("red");      // this will make the biscuit which we can eat
let bluebtn = new circularButton("blue");
let yellowbtn = new circularButton("yellow");

// Why we use Constructor function?
// because when we have to make many elements with nearly-same property

console.log(redbtn);
console.log("");
console.log(bluebtn);
console.log("");
console.log(yellowbtn);
console.log("");

// most of the property of all the elements are same but the color was different


// FIXME: new Keyword
// new => jab bhi new lagta hai hamesha ek blank object apne man me bana lo and uske aage k saare "this" ko uss object me daal do

function abcd() {
    this.age = 12;
}

new abcd()

// output:
// {
//     age: 12;
// }