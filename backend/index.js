const express = require('express');
const { PORT } = require('./Config/dotenv');
const startMongo = require('./Schema/schema');
const app = express();

app.listen(PORT, () => {

     console.log("Server Stared on Port number : ", PORT);
     startMongo();
})