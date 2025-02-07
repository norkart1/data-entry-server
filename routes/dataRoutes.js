const express = require("express");
const router = express.Router();
const Data = require("../models/DataModel");

// Add Data
router.post("/add", async (req, res) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).json({ message: "Data added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get Data
router.get("/get", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
