import Document from '../models/usersModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getDocuments = asyncHandler(async (req, res) => {
  const documents = await Document.find({})
  res.json(documents)
})

//getUserById function to retrieve user by id
export const getDocumentById = asyncHandler(async (req, res) => {
  const document = await Document.findById(req.params.id)

  //if user id match param id send user else throw error
  if (document) {
    res.json(document)
  } else {
    res.status(404).json({ message: "document not found" })
    res.status(404)
    throw new Error('document not found')
  }
})