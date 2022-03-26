import mongoose from 'mongoose'

const documentSchema = mongoose.Schema({
  cardNumber: {
    type: String,
    required: true
  },
  expirationDate: {
    type: String,
    required: true
  },
  cvv: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

const Document = mongoose.model('Document', documentSchema)

export default Document