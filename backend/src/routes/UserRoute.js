const router = require("express").Router()

//require controllers
const userController = require("../controllers/UserController")

router.get("/dummy",userController.getUser)
router.get("/user",userController.getUserData)
router.get("/users",userController.getUsers)
router.get("/user/:id",userController.getUserById)

module.exports = router