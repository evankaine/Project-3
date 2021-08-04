const db = require('../db')
const Post = require('../models/post.js')
const User = require('../models/user.js')

db.on("error", console.error.bind(console, "Connection Error"))
//get all post and populate user 
const getPosts = async (req,res) => {
    try {
        const posts = await Post.find({}).populate("user_id")
        return res.status(200).json(posts)
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}
//get one post by ID and populate user
const getPost = async (req,res) => {
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
//create a new post
const createPost = async (req,res) => {
    try {
        let {username, imgURL, caption, user_id} = req.body
        let newPost = {
            username, 
            imgURL,
            caption,
            user_id,
        }
        //look for the user by the username that is coming in
        let foundUser = await User.find({username: user_id})
        //if there is one, then update the user_id 
        if(foundUser) {
            newPost.user_id = foundUser[0]._id
        } 
        //create the post
        const post = await Post.create(newPost)
        //get the post ID to add to the user
        const postId = post._id
        //find the user and push post ID into the array
        await User.findByIdAndUpdate(
            {_id: foundUser[0]._id},
            {$push: {posts: postId}}
        )
        return res.status(200).json(post)
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

const updatePost = async (req,res) => {
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
//delete the post
const deletePost = async (req,res) => {
    try {
        //find and delete the post
        const post = await Post.findByIdAndDelete(req.params.id)
        //get the user by the user ID in the post and remove it from the array
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

module.exports = {getPosts, getPost, createPost, updatePost, deletePost} 