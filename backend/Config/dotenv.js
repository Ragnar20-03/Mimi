const dotenv = require("dotenv");

dotenv.config();

export const port = process.env.PORT | 3000;
export const DB_URL = process.env.DB_URL | "";
