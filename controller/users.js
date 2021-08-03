const db = require('../db')
const User = require('../models/user.js')

db.on("error", console.error.bind(console, "Connection Error"))
//get all the users
const getUsers = async (req,res) => {
    try {
        const users = await User.find({}).populate("posts")
        return res.status(200).json(users)
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}
//get a user
const getUser = async (req,res) => {
    try {
        const user = await User.findById(req.params.id).populate("posts")
        if(user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).send("User Not Found")
        }
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}
//create a user
const createUser = async (req,res) => {
    try {
        const user = await User.create(req.body)
        return res.status(200).json(user)
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

const updateUser = async (req,res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (user) {
            return res.status(201).send("User Updated")
        } else {
            return res.status(404).send("User Not Found")
        }
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

const deleteUser = async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (user) {
            return res.status(200).send("User Deleted")
        } else {
            return res.status(404).send("User Not Found")
        }
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser} 