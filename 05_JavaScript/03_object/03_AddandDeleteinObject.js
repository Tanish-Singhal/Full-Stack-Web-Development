const item = {
    Harry: true,
    Shubh: false,
    Lovish: 67,
    Rohan: undefined,

    draw: function() {
        console.log('drawing rectangle');
    }
}
console.log(item);
console.log(item.Lovish);
console.log(item.draw());


// FIXME: To add things in an object (two methods)
item.color = "yellow";
item["friend"] = "Shubham";
console.log(item);

// FIXME: Delete things in an object