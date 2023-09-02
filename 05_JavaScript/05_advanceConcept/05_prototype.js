// Prototypes are the pre-built properties, functions and methods which we can use to complete our task.
let obj = {
    name: "Tanish"
}

// output:
            // name: Tanish
            // [[Prototype]]: Object




// TODO: Prototype Inheritance
// In this we inherate the things from the parents

let human = {
    canTalk: true, 
    canWalk: true,
    canFly: false,
    haveEmotion: true
};

let tanish = {
    makeAmazingWebiste: true,
    makeAwesomeAnimations: true
}

tanish.__proto__ = human;
// now tanish has bith the properties of Tanish individual and human both (inside prototype)

console.log(tanish.canFly);     // flase