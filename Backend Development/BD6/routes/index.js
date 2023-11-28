var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createuser', async function (req, res, next) {
  let createduser = await userModel.create({
    username: "Tanish",
    password: "Tanish",
    email: "tanish@mail.com",
    fullName: "Tanish Singhal"
  })

  res.send(createduser);
});

router.get('/createpost', async function (req, res, next) {
  let createdpost = await postModel.create({
    postText: "Kaise ho Everyone!",
    user: "65535a850d7311ef1a53b614"
  });
  
  let user = await userModel.findOne({_id: "65535a850d7311ef1a53b614"});
  user.posts.push(createdpost._id);
  await user.save();
  res.send("Done");
});

router.get('/alluserposts', async function(req, res, next) {
  let user = await userModel
  .findOne({_id: "65535a850d7311ef1a53b614"})
  .populate('posts');
  res.send(user);
});

module.exports = router;
