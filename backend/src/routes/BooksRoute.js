const router = require('express').Router()
const bookController = require('../controllers/BookController')

router.post('/book',bookController.addBook)
router.get('/books',bookController.getAllBooks)
router.get('/book/:id',bookController.getBookById)
router.delete('/book/:id',bookController.deleteBook)

module.exports = router