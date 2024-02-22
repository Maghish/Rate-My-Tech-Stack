import express from "express";
import {
  getAllTech,
  getTechRating,
  getTechThroughField,
} from "../controllers/apiController.js";

const router = express.Router();

router.get("/getalltech", getAllTech);
router.post("/gettechrating", getTechRating);
router.post("/gettechthroughfield", getTechThroughField);

export default router;
