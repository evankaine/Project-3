import { Router } from "express";
import restrict from "../helpers/restrict.js";
import { getPosts, createPost, getPost } from "../controllers/posts.js";

const router = Router();
// get all posts
router.get("/posts", getPosts);
// get id post
router.get("/posts/:id", getPost);
// // post createpost
router.post("/posts", restrict, createPost);
// // put updatePost
// router.put("/posts/:id", restrict, updatePost);
// // delete post
// router.delete("/posts/:id", restrict, deletePost);

export default router;