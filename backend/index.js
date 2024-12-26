const express = require("express");
const { PORT } = require("./Config/dotenv");

const userRouter = require("./Routes/user");

const app = express();
app.use(express.json());

app.use("/user", userRouter);

app.listen(PORT, async () => {
  console.log("Server Stared on Port number : ", PORT);
});
