const mongoose = require("mongoose");

const BorrowSchema = new mongoose.Schema({
  userId: String,
  bookTitle: String,
  days: Number,
  totalCost: Number,
  finalAmount: Number,
  status: String,
  borrowDate: Date,
  returnDate: Date
});

module.exports = mongoose.model("Borrow", BorrowSchema);
