const express = require("express");
const { User, Post } = require("../Schema/schema");

const router = express.Router();

// Auth :
// register -> getOtp -> verifyotp ( usrename , fname ,lname ,password , )
router.post("/register", async (req, res) => {
  const { username, fname, lname, password, email } = req.body;
  User.create({
    username: username,
    fname: fname,
    lname: lname,
    password: password,
    email: email,
    profilePic: "#",
  })
    .then((res1) => {
      res.status(200).json({
        msg: "user created Succesfully",
      });
    })
    .catch((err) => {
      res.status(501).json({
        msg: "user created Faield",
      });
    });
});

// login -> username  password

// /-----------------
//////////////////////////////////////////////////////
////////////////////////////////////
// Home
//  get allposts -> getPosts .
//  get sepcifucPost -> getpostById

// like post ,
// commentpost

// view Profile
//////////////////////////////////////////////////////

// follow
// unfollow

////////////////////////////////////

// Profile //////////
// Get Profile
// updateprofile

router.post("/add-post", async (req, res) => {
  const { description, location, date } = req.body;

  Post.create({
    description: description,
    location: location,
    date: date,
    imageUrl: "#",
    likes: [],
    comments: [],
  }).then((res1) => {
    res.status(200).json({
      msg: "Post Added Succesfully !",
    });
  });
});

// router.ppost("/like");
module.exports = router;
