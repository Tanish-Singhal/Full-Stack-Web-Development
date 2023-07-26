function createRectangle(l, b) {
    let rectangle = {
        length1 : l,
        breadth1 : b,

        drawing: function() {
            console.log('drawing Rectangle JI');
        }
    }
    return rectangle;
}

console.log(createRectangle(rectangle()));