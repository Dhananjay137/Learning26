const router = require('express').Router()
const cityController = require('../controllers/CityController')

router.post('/city',cityController.addCity)
router.get('/cities',cityController.getAllCity)
router.get('/city/:id',cityController.getCityById)
router.delete('/city/:id',cityController.deleteCity)

module.exports = router