const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const PORT = process.env.PORT || 2222
const routes = require("./routes")
const db = require('./db')
db.on("error", console.error.bind(console, "Connection Error"))

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
}) 