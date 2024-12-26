const mongoose = require("mongoose");

const { DB_URL } = require("../Config/dotenv");

const startMongo = () => {

     mongoose.connect(DB_URL).then((res1) => {
          console.log("mongodb Commected Succcesfully !");
     }).catch((err) => {
          console.log("failed to start mongoose !");
     })
}
const userSchema = new mongoose.Schema({
     username: String,
     password: String,
     fname: String,
     lname: String,
     email: String,
     profilePic: String
})

const postSchema = new mongoose.Schema({
     likes: [{
          uid: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'user'
          }
     }],
     Comments: [{
          uid: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'user'
          }
     }]
})
module.exports = startMongo