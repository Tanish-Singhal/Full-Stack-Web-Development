const express = require('express');
var bodyParser = require('body-parser');    // this is use to acces the things inside the body parameter
const app = express();
const port = 3000;


// Req - Agar ek banda instagram se koi request kar rha hai to, Req me uss person ka data hoga like IP, location, device, etc.
// Res - Res me controls hote hai jinke basis par hum server se response behj paate hai to the person


// Middleware
// yeh ek aisa function hai jo kisi bhi route se phele chalta hai, jiska mtlab hamara route chalne se phele agar hum koi kaam karna chaate hai to hum middleware ka use kar sakte hai
app.use(function (req, res, next){
    console.log("Hello from Middleware!");
    next();
});
// but ek problem hai, agar hamara middleware chagya to request jam ho jaati hai aur route tak nhi pouchti
// that's why we use next();
let numOfReq = 0;
function middleware2(req, res, next){
    numOfReq = numOfReq + 1;
    console.log("number of request are: ", numOfReq);
    next();
}
app.use(middleware2);


// this is use to acces the things inside the body parameter
app.use(bodyParser.json());



// TODO: Method which we can attach to a request
// GET :- Whenever we want to get the data from the server
// POST :- Whenever we want to put the data in the server
// PUT :- Whenever we want to update the data in the server
// DELETE :- Whenever we want to delete something from the server


// This is the first page of the website
app.get('/', function (req, res) {
    res.send("Hello! Tanish from the main page.");
});

// /profile is called router
app.get('/profile', function (req, res) {
    res.send("Hello! Tanish from the profile page.");
});

function givePage(req, res) {
    res.send(`
    <head>
        <title>Hello from Page</title>
    </head>
    <body>
        <h1>hi there!</h1>
    </body>
`)
}
app.get("/page", givePage);



// Below are the three ways by which you can send the data to the backend
function calculatedSum(counter) {
    let sum = 0;
    for (let i = 1; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function calculatedMul(counter) {
    let mul = 1;
    for (let i = 1; i <= counter; i++) {
        mul = mul * i;
    }
    return mul;
}


// FIXME: QUERY Paramater
// function handleFirstSum (req, res) {
//     let counter = req.query.counter;            // by this we can take the input from the user and then return the value
//     // but in the url you have to write this
//     // localhost:3000/handleSum?counter=10

//     let result = calculatedSum(counter);
//     let answer = "The sum is " + result;
//     res.send(answer);
// }


// FIXME: HEADERS
// function handleFirstSum (req, res) {
//     let counter = req.headers.counter;

//     let result = calculatedSum(counter);
//     let answer = "The sum is " + result;
//     res.send(answer);
// }


// FIXME: BODY Paramater
// function handleFirstSum (req, res) {
//     console.log(req.body);
//     let counter = req.body.counter;

//     let result = calculatedSum(counter);
//     let answer = "The sum is " + result;
//     res.send(answer);
// }




// TODO: Dynamic Routing
// Aisa koi bhi route jiska kuch part baar baar same rehta hai and kuch part baar baar change hot hai, iske liye hum ek Dynamic Route bana sakte hai
// For example:  instagram.com/profile/Neelam    instagram.com/profile/Sandeep    instagram.com/profile/Tanish     instagram.com/profile/Pratyush
app.get('/profile/:username', function (req, res) {
    res.send(`Hello from ${req.params.username}`);
});
// this :username is call the route parameter (we can choose any name in pplace of username)



// TODO: STATUS Code
// 1. Informational Responses  (100 - 199)
// 2. Successful Responses (200 - 299)
// 3. Redirectional Messages (300 - 399)
// 4. Client Error Responses (400 - 499)
// 5. Server Error Resposes (500 - 599)

function handleFirstSum (req, res) {
    let counter = req.body.counter;

    let sumResult = calculatedSum(counter);
    let MulResult = calculatedMul(counter);

    let answerObj = {
        "sum": sumResult,
        "mul": MulResult
    };

    res.status(200).send(answerObj);
}
app.post('/handleSum', handleFirstSum);



app.listen(port);