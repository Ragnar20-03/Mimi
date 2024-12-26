const mongoose = require("mongoose");

const { DB_URL } = require("../Config/dotenv");
const { string } = require("zod");

const startMongo = async () => {
  console.log("here");
  await mongoose
    .connect(DB_URL)
    .then((res1) => {
      console.log("mongodb Commected Succcesfully !");
    })
    .catch((err) => {
      console.log("failed to start mongoose !");
    });
};
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  fname: String,
  lname: String,
  email: String,
  profilePic: String,
});

const postSchema = new mongoose.Schema({
  description: String,
  location: String,
  date: Date,
  imageUrl: String,
  likes: [
    {
      uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    },
  ],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
});

const commentSchema = new mongoose.Schema({
  uid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  comment: String,
});

const User = mongoose.model("user", userSchema);
const Post = mongoose.model("post", postSchema);
const Comment = mongoose.model("comments", commentSchema);

module.exports = { startMongo, User, Post, Comment };
