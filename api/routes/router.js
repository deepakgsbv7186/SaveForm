import express from "express";
import UserRoutes from "./user.routes.js";

const router = express.Router();

router.use("/api/auth", UserRoutes);

export default router;
