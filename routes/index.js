
import { Router } from "express";
import usersRoutes from "./user.js";
import postRoutes from "./posts.js"

const router = Router();

router.get("/", (req, res) => res.send("This is api root"));

router.use("/", usersRoutes);

router.use("/", postRoutes)

export default router;