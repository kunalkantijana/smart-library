const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pricePerDay: Number
});

module.exports = mongoose.model("Book", BookSchema);
