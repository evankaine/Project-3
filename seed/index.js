const db = require("../db")
const Post = require("../models/post.js")
const User = require('../models/user.js')
const faker = require("faker")
db.on("error", console.error.bind(console, "Connection Error"))

const main = async () => {
    await User.deleteMany({})
    await Post.deleteMany({}) 

    let user = {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: "faker1234",
            posts: [],
        }

    await User.create(user)
    let createdUser = await User.find({})

    const post = {
            username: faker.internet.userName(),
            imgURL: faker.image.imageUrl(),
            caption: faker.lorem.paragraph(),
            user_id: createdUser[0]._id
        }
    let createdPost = await Post.create(post)
    await User.findOneAndUpdate(
        {_id: createdUser[0]._id},
        {$push: {posts: createdPost}}
    ) 
}

const run = async () => {
    await main()
    db.close()
}

run() 