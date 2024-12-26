const express = require("express");
const { PORT } = require("./Config/dotenv");
const cors = require("cors");

const userRouter = require("./Routes/user");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.get("/me", (req, res) => {
  res.status(200).json({
    msg: "Jay Ganesh !",
  });
});

app.listen(PORT, async () => {
  console.log("Server Stared on Port number : ", PORT);
});
