var express = require('express');
var router = express.Router();
const userModel = require("./users");
const passport = require('passport');
const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/profile", isLoggedIn, function (req, res) {
  res.render("profile");
})

router.post('/register', function (req, res) {
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });

  userModel.register(userdata, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req, res, function() {
        res.redirect("/profile");
      })
    })
});

router.post("/login", passport.authenticate("local", {
  successRedirect:"/profile",
  failureRedirect: "/"
}), function (req,res) { })

// code for logout
router.get("/logout", function(req, res, next) {
  req.logout(function(err) {
    if (err) { 
      return next(err);
    }
    res.redirect("/");
  })
})

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = router;
