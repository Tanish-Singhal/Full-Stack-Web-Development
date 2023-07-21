// TODO: Object (key-value pairs)    Here item is the reference to this object
const item = {
    Harry: true,
    Shubh: false,
    Lovish: 67,
    Rohan: undefined,

    // If we add function inside an object then it is called method.
    draw: function() {
        console.log('drawing rectangle');
    }
}
console.log(item);
console.log(item.Lovish);
console.log(item.draw());    // calling the method

// FIXME: To add things in an object (two methods)
item.color = "yellow";
item["friend"] = "Shubham";
console.log(item);

// FIXME: we can access the value by two notation .but why?
console.log(item.Lovish);
console.log(item['Lovish']);

// FIXME: we can also check if a property exists in an object or not
if ("Harry" in item) {
    console.log("Harry property exist in item");
}
else {
    console.log("Absent");
}

// This type of programming is called OOPs. (Object oriented Programming)