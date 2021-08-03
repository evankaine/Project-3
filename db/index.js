const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/imgNation', 
{useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log("mongoDB connected"))
.catch((err) => console.log(err.message))

mongoose.set("debug", true)

const db = mongoose.connection
module.exports = db 