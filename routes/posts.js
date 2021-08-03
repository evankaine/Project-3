const {Router} = require('express')
const {getPosts, getPost, createPost, updatePost, deletePost} = require("../controller/posts.js")

const router = Router()

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", createPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)

module.exports = router 