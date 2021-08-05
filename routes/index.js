
const { Router } = require('express')

import usersRoutes from "./user.js";

const router = Router();

router.get("/", (req, res) => res.send("This is api root"));

router.use("/", usersRoutes);

module.exports = router 