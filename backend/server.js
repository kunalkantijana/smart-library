const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/books", require("./routes/books"));
app.use("/borrow", require("./routes/borrow"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
