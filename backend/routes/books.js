const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.get("/seed", async (req, res) => {
  await Book.insertMany([
    { title: "Java Basics", author: "James", pricePerDay: 10 },
    { title: "Python Guide", author: "Guido", pricePerDay: 12 },
    { title: "DBMS", author: "Navathe", pricePerDay: 15 }
  ]);
  res.json({ message: "Books inserted" });
});

module.exports = router;
