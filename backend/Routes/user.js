const express = require("express");
const { User, Post } = require("../Schema/schema");
const jwt = require("jsonwebtoken");

const { M_userMiddleware } = require("../Middlewares/user");
const { JWT_SECRETE } = require("../Config/dotenv");

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
      let token = jwt.sign({ userId: res1._id }, JWT_SECRETE);
      res.status(200).json({
        msg: "user created Succesfully",
        token,
      });
    })
    .catch((err) => {
      console.log("error is : ", err);
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

router.post("/add-post", M_userMiddleware, async (req, res) => {
  const { description, location, date } = req.body;

  Post.create({
    description: description,
    location: location,
    date: date,
    imageUrl: "#",
    likes: [],
    comments: [],
  })
    .then(async (res1) => {
      let uid = req.userId;
      let user = await User.findByIdAndUpdate({ _id: uid });
      await user.updateOne({ $push: { posts: res1._id } });

      res.status(200).json({
        msg: "Post Added Succesfully !",
      });
    })
    .catch((err) => {
      res.status(501).json({
        msg: "Failed !",
      });
    });
});

router.get("/get-posts", async (req, res) => {
  await Post.find({}).then((res1) => [
    res.status(200).json({
      posts: res1,
    }),
  ]);
});

// router.post("/like", M_);
module.exports = router;
