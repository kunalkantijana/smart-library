const express = require("express");
const Borrow = require("../models/Borrow");
const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, bookTitle, days, price } = req.body;

  const active = await Borrow.findOne({ userId, status: "Active" });
  if (active) return res.status(400).json({ message: "Return previous book" });

  const totalCost = days * price;

  const borrow = await Borrow.create({
    userId,
    bookTitle,
    days,
    totalCost,
    status: "Active",
    borrowDate: new Date()
  });

  res.json(borrow);
});

router.post("/return/:id", async (req, res) => {
  const overdue = 10;

  const borrow = await Borrow.findById(req.params.id);
  borrow.finalAmount = borrow.totalCost + overdue;
  borrow.status = "Returned";
  borrow.returnDate = new Date();
  await borrow.save();

  res.json(borrow);
});

router.get("/history/:userId", async (req, res) => {
  const history = await Borrow.find({ userId: req.params.userId });
  res.json(history);
});
router.get("/active/:userId", async (req, res) => {
  const activeBorrow = await Borrow.findOne({
    userId: req.params.userId,
    status: "Active"
  });
  res.json(activeBorrow);
});

module.exports = router;
