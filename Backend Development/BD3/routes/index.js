var express = require('express');
var router = express.Router();

// here we import the data
const userModel = require("./users");


// in render function we have to tell the name of our file present inside the views folder
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// this route will create a user, and the times you refresh the page it will create more users
router.get('/create', async function(req, res, next) {
  // this is always a async function
  const createduser1 = await userModel.create({
    username: "Tanish2003",
    age: 20,
    name: "Tanish Singhal"
  });

  const createduser2 = await userModel.create({
    username: "Pratyush2006",
    age: 17,
    name: "Pratyush Singhal"
  });

  res.send({createduser1, createduser2});
});

// this will display all the users created
router.get("/allUsers", async function(req, res){
  let allUsers = await userModel.find();
  res.send(allUsers);
});

// this will tell the unique user according to the parameter passed in it
router.get("/findingUser", async function(req, res){
  let allUsers = await userModel.findOne({username: "Tanish2003"});
  res.send(allUsers);
});

// this will tell the deleted user info
router.get("/deletedUser", async function (req, res){
  let deletedUser = await userModel.findOneAndDelete({
    username: "Tanish2003"
  });
  res.send(deletedUser);
});



// TODO: Session
router.get("/banUser", function(req, res) {
  req.session.ban = true;
  res.send("You are banned.");
});

router.get("/checkBan", function(req, res) {
  if (req.session.ban === true) {
    console.log(req.session);
    res.send("You are Banned. Check kiya hai console dekho");
  }
  else {
    console.log(req.session);
    res.send("You are not banned. Enjoy!")
  }
}); 

router.get("/removeBan", function(req, res) {
  req.session.destroy(function(err) {
    console.log(err);
    res.send("Ban removerd");
  })
});



// TODO: Cookies
router.get("/createCookie", function(req, res) {
  res.cookie("age", 20);
  res.send("Cookie Created, you can now check it!");
});

router.get("/readCookie", function(req, res) {
  console.log(req.cookies.age);
  res.send("To read the data, you can check the console");
});

router.get("/deleteCookie", function(req, res) {
  res.clearCookie("age");
  res.send("Cookie has been cleared");
})


module.exports = router;