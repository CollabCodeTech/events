import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const {
  DB_PROTOCOL,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_QUERYSTRING
} = process.env;

mongoose.connect(
  `${DB_PROTOCOL}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}${DB_QUERYSTRING}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", () => console.error.bind(console, "connection error"));
db.on("open", () => console.log("Open Mongo"));
