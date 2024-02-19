const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB Connected Successfully");
  app.listen(4000, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });
});
