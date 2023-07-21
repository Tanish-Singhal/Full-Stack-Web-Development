// Object Creation

/** Two types:-     (learn any of them)
 * Factory Function
 * Constructor Function
 */

// TODO: Factory Function
function createRectangle() {
    let rectangle = {
        length: 1,
        breadth: 2,

        draw: function() {
            console.log('drawing rectangle');
        },
        area: function () {
            console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
        },
    };
    return rectangle;
}
// now this function, creates an object and returns it

let rectangle1 = createRectangle();
console.log(rectangle1);
console.log(rectangle1.length);
console.log(rectangle1.area());
console.log();


// TODO: Factory Function with coustom output
function createSquare(len, bre) {
    let square = {
        length: len,
        breadth: bre,

        draw: function() {
            console.log('drawing square');
        },
        area: function () {
            console.log(`Area of square: ${square.length * square.breadth}`);
        },
    };
    return square;
}

let square1 = createSquare(5,6);
console.log(square1.length);
console.log(square1.breadth);
square1.area();
console.log();

// FIXME: by this we can add more properties in the function
square1.color = 'yellow';
console.log(square1);

// FIXME: by this we can delete any properties in the function
delete square1.color;
console.log(square1);