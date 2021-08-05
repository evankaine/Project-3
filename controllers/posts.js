const db = require('../db')
const Post = require('../models/post.js')
const User = require('../models/user.js')

db.on("error", console.error.bind(console, "Connection Error"))

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).populate("user_id")
        return res.status(200).json(posts)
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("user_id")
        if(post) {
            return res.status(200).json(post)
        } else {
            return res.status(404).send("Post Not Found")
        }
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

const createPost = async (req, res) => {
    try {
        let {title, content, imgURL, user_id} = req.body
        let newPost = {
            title, 
            content,
            imgURL,
            user_id,
        }
        let foundUser = await User.find({username: user_id})
        if(foundUser) {
            newPost.user_id = foundUser[0]._id
        } 
        const post = await Post.create(newPost)
        const postId = post._id
        await User.findByIdAndUpdate(
            {_id: foundUser[0]._id},
            {$push: {posts: postId}}
        )
        return res.status(200).json(post)
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (post) {
            return res.status(201).send("Post Updated")
        } else {
            return res.status(404).send("Post Not Found")
        }
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        await User.findByIdAndUpdate({_id: post.user_id}, {$pull: {posts: post._id}})
        if (post) {
            return res.status(200).send("Post Deleted")
        } else {
            return res.status(404).send("Post Not Found")
        }
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

module.exports = {getAllPosts, getPost, createPost, updatePost, deletePost} 