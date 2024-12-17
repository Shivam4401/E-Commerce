const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://shivampoddar4401:Shivam787032@cluster0.vqrhf.mongodb.net/"
  )
  .then(() => console.log("Mongodb Connected"))
  .catch((error) => console.log("error"));

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
