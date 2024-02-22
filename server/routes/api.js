import express from "express";
import { getAllTech, getTechRating } from "../controllers/apiController.js";

const router = express.Router();

router.get("/getalltech", getAllTech);
router.post("/gettechrating", getTechRating);

export default router;
