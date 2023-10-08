const express = require('express');
const app = express();
const port = 3000;


// Req - Agar ek banda instagram se koi request kar rha hai to, Req me uss person ka data hoga like IP, location, device, etc.
// Res - Res me controls hote hai jinke basis par hum server se response behj paate hai to the person


// Middleware
// yeh ek aisa function hai jo kisi bhi route se phele chalta hai, jiska mtlab hamara route chalne se phele agar hum koi kaam karna chaate hai to hum middleware ka use kar sakte hai
app.use (function (req, res, next){
    console.log("Hello from Middleware!");
    next();
});
// but ek problem hai, agar hamara middleware chagya to request jam ho jaati hai aur route tak nhi pouchti
// that's why we use next();
app.use (function (req, res, next){
    console.log("Hello from the Middleware2");
    next();
});



function calculatedSum(counter) {
    let sum = 0
    for (let i = 0; i < counter; i++) {
        sum = sum + i;
    }
    return sum;
}



app.get('/', function (req, res) {
    res.send("Hello! Tanish from the main page.");
});

// /profile is called router
app.get('/profile', function (req, res) {
    res.send("Hello! Tanish from the profile page.");
});


app.get('/handleSum', function (req, res) {
    let counter = req.query.counter;            // by this we can take the input from the user and then return the value
    // but in the url you have to write this
    // localhost:3000/handleSum?counter=10

    let result = calculatedSum(counter);
    let answer = "The sum is " + result;
    res.send(answer);
});



// Dynamic Routing
// Aisa koi bhi route jiska kuch part baar baar same rehta hai and kuch part baar baar change hot hai, iske liye hum ek Dynamic Route bana sakte hai
// For example:  instagram.com/profile/Neelam    instagram.com/profile/Sandeep    instagram.com/profile/Tanish     instagram.com/profile/Pratyush
app.get('/profile/:username', function (req, res) {
    res.send(`Hello from ${req.params.username}`);
});
// this :username is call the route parameter (we can choose any name in pplace of username)



app.listen(port);