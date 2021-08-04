
const {Router} = require('express')
const {getUsers, getUser, createUser, updateUser, deleteUser} = require("../controller/users.js")

const router = Router()

router.get("/users", getUsers)
router.post("/users/signin", getUser)
router.post("/users/signup", createUser)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)

module.exports = router 