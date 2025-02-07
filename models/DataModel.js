const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  email: String,
}, { timestamps: true });

module.exports = mongoose.model("Data", DataSchema);
