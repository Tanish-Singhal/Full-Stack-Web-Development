var express = require("express");
var router = express.Router();


// importing users.js
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index");
});

router.get("/createData", function (req, res, next) {
    // It is not possible, to send the data of one route to another route

    // Task:
    // agar login ho jaaye to login page k baad profile page dekha do
    // and if login nhi hua, to mujhe is route se kisi aur route le jaao like "/error" and wha par show karo FAILED.

    // So, Flash message aapko ye allow karte hai ki aap is route mein bane hue data ko doosre route mein use kar sake

    req.flash("age", 12);
    req.flash("name", "Tanish");
    res.send("Data ban gya");
});

router.get("/checkData", function (req, res) {
    console.log(req.flash("age"), req.flash("name"));
    res.send("Data print ho gya. Check karlo terminal par");
});
// by this we can send the data from one route to another

// TODO:
// 1. How can I perform a case-insensitive search in Mongoose?
// 2. How can I find documents where an array field contains all of a set of values?
// 3. How can I search for documents with a specific date range in Mongoose?
// 4. How can I filter documents based on the existence of a field in Mongoose?
// 5. How can I filter documents based on a specific field's length in Mongoose?

// Data Creation
router.get("/ques1", async function (req, res) {
    let userdata1 = await userModel.create({
        username: "Harshita",
        nickname: "Harshitaaaa",
        description: "Hello Everyone! I'm Harshita.",
        categories: ["Fashion", "Life", "Gen-Z"],
    });

    let userdata2 = await userModel.create({
        username: "Harshi",
        nickname: "Harshitiiii",
        description: "Hello Everyone! I'm Harshi.",
        categories: ["Office", "College", "School"],
    });

    let userdata3 = await userModel.create({
        username: "Harsh",
        nickname: "Harshu",
        description: "Hello Everyone! I'm Harsh.",
        categories: ["Fashion", "React", "Gen-Z"],
    });

    res.send({ userdata1, userdata2, userdata3 });
});

// list all the user of the data
router.get("/listUser", async function (req, res) {
    let alluser = await userModel.find();
    res.send(alluser);
});

// FIXME: answer of problem 1
router.get("/findingUser", async function (req, res) {
    // for making this case-incencitive
    let regex = new RegExp("^harshita$", "i");

    // if we gonna "harsh" with small H, it don't gonna return anything
    let user = await userModel.findOne({ username: regex });

    // now it will make the things case-incencitive
    // but there is a catch, that it will return all the username who have "harsh" word in it.
    // that's why we use ^$
    // ^ -> tells the starting of the word
    // $ -> tell the ending of the word

    res.send(user);
});

// FIXME: answer of problem 2
router.get("/similarCategory", async function (req, res) {
    let user = await userModel.find({
        categories: { $all: ["Fashion", "Gen-Z"] },
    });
    res.send(user);
});

// FIXME: answer of problem 3
router.get("/dateRange", async function (req, res) {
    let date1 = new Date("2023-10-02");
    let date2 = new Date("2023-10-03");
    let user = await userModel.find({
        datecreated: { $gte: date1, $lte: date2 },
    });
    res.send(user);
    // now all the user who are created between these dates are showed
});

// FIXME: answer of problem 4
router.get("/fieldFilter", async function (req, res) {
    let user = await userModel.find({ categories: { $exists: true } });
    res.send(user);
    // prenst user based of category, whether it is empty or not
});

// FIXME: answer of problem 5
router.get("/filterFieldLength", async function (req, res) {
  let user = await userModel.find({
    $expr: {
      $and: [
        {$gte: [{$strLenCP: "$nickname"}, 0]},
        {$lte: [{$strLenCP: "$nickname"}, 10]}
      ]
    }
  });

  res.send(user);
  // so in nickname, the length of th nickname of Harsh adn Harshit are between 0 and 10, so these two data are printed
});

module.exports = router;
