const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "";
const EMAIL_USER = process.env.EMAIL_USER || "";
const EMAIL_PASS = process.env.EMAIL_PASS || "";
const JWT_SECRETE = process.env.JWT_SECRETE || " ";

module.exports = {
  PORT,
  EMAIL_PASS,
  EMAIL_USER,
  DB_URL,
  JWT_SECRETE,
};
