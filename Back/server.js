const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://DataBaseAdmin:password12345@cluster0.c6ngd.mongodb.net/paymentOperations`);


app.use("/", require("./backend/routes/payRoute"));

app.listen(5000, function () {
  console.log("express server is running on port 5000")
})