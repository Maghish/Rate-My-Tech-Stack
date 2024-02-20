const mongoose = require("mongoose");

const techModel = require("../models/techModel");

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

module.exports = {
  getAllTech,
  getTechRating,
};