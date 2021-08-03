const {Router} = require('express')
const postRouter = require('./posts.js')
const userRouter = require("./users.js")

const router = Router()
router.use("/posts", postRouter)
router.use("/", userRouter)

module.exports = router 