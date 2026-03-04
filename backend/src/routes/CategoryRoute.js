const router = require('express').Router()
const categoryContoller = require('../controllers/CategoryController')

router.post('/category',categoryContoller.addCategory)
router.get('/categories',categoryContoller.getAllCategory)
router.get('/category/:id',categoryContoller.getCategoryById)
router.delete('/category/:id',categoryContoller.deleteCategory)

module.exports = router