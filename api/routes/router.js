import express from "express";
import { UserRegister } from "./user.routes.js";

const router = express.Router();

router.post("/user/register", UserRegister);

export { router };
