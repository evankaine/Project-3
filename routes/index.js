import { Router } from 'express'
import usersRoutes from "./users"
import postRoutes from './posts'

const router = Router();

router.get("/", (req, res) => res.send("This is api root"));
router.use("/", usersRoutes);
router.use('/', postRoutes)

module.exports = router 