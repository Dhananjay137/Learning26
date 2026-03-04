const router = require('express').Router()
const stateController = require('../controllers/StateController')

router.post('/state',stateController.addState)
router.get('/states',stateController.getAllState)
router.get('/state/:id',stateController.getStateById)
router.delete('/state/:id',stateController.deleteState)

module.exports = router