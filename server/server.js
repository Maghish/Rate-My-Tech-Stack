const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoute = require("./routes/api");

dotenv.config();
const app = express();

app.use(cors());
app.use('/api', apiRoute);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB Connected Successfully");
  app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });
});
