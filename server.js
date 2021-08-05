const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const routes = require("./routes")
const db = require('./db')
db.on("error", console.error.bind(console, "Connection Error"))

const app = express();
const PORT = process.env.PORT || 2222;

// gives access to req.body
app.use(express.json());
app.use(cors());
// change after deploy and we know everything is working 'tiny'
app.use(morgan("dev"));

app.use("/api", routes);

app.get("/", (req, res) => res.send("<h1>Hello, world</h1>"));

db.on("connected", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, console.log(`Connected to port: ${PORT}`));
});