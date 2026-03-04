const { data } = require('react-router-dom')
const bookSchema = require('../models/BookModel')

const addBook = async (req, res) => {
  const book = await bookSchema.create(req.body)
  if(book){
    res.status(201).json({
      message:'book is added successfully!',
      data:book
    })
  } else {
    res.json({
      message:'Error while adding book'
    })
  }
}

const getAllBooks = async (req, res) => {
  const books = await bookSchema.find()

  if(books){
    res.status(200).json({
      message: 'book fetched successfully',
      data: books
    })
  } else {
    res.json({
      message: 'error while fetching books'
    })
  }
}

const getBookById = async (req, res) => {
  const book = await bookSchema.findById(req.params.id)

  if(book) {
    res.json({
      message: 'book fetched successfully!',
      data: book
    })
  } else {
    res.json({
      message: 'error while fetching the book'
    })
  }
}

const deleteBook = async (req, res) => {
  const book = await bookSchema.findByIdAndDelete(req.params.id)

  if(book) {
    res.json({
      message: 'book deleted successfully!',
      data: book
    })
  } else {
    res.json({
      message: 'error while deleting the book'
    })
  }
}

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  deleteBook
}