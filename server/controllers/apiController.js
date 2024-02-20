import mongoose from "mongoose";
import techModel from "../models/techModel.js";

async function getAllTech(req, res) {
  try {
    const allTech = await techModel.find({});
    res.status(200).json(allTech);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

async function getTechRating(req, res) {
  const { name, field } = req.body;

  try {
    const tech = await techModel.find({ name: name, field: field });
    res.status(200).json(tech);
  } catch (error) {
    res.status(400).json(error.message);
  }
}


export {getAllTech, getTechRating}