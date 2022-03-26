const { json } = require("express");
const express = require("express");
const router = express.Router();
const Document = require("../models/documentModel");

router.route("/pay").post((req, res) => {
  const cardNumber = req.body.cardNumber;
  const expirationDate = req.body.expirationDate;
  const cvv = req.body.cvv;
  const amount = req.body.amount;

  const newPay = new Document({
    cardNumber,
    expirationDate,
    cvv,
    amount
  });

  newPay.save();
  console.log(newPay._id + " " + newPay.amount);

  // return { id: newPay._id, amount: newPay.amount };
})

/*
router.route("/payedSuccess").get((req, res) => {
  Document.find().then(foundDoc => res.json(foundDoc));
})
*/

module.exports = router;