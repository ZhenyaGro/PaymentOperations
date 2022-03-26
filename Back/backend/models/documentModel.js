const mongoose = require("mongoose");

const documentSchema = {
  cardNumber: String,
  expirationDate: String,
  cvv: String,
  amount: String
}

const Document = mongoose.model('Document', documentSchema)

module.exports = Document;