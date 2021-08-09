const db = require('../db')
const User = require('../models/user')
const faker = require('faker')

db.on("error", console.error.bind(console, "Connection Error"))

const main = async () => {
    await User.deleteMany({})
    let users = []
    for(let i=0; i<10; i++) {
        let user =  {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: "faker1234",
        posts: [],
    }
        users.push(user)
    }

    user = await User.insertMany(users)
}

const run = async () => {
    await main()
    db.close()
}

run() 