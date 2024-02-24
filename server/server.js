import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import apiRoute from "./routes/api.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use("/api", apiRoute);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB Connected Successfully");
  app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });
});
