import express from "express";
import { UserLogin, UserRegister } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", UserRegister);
userRouter.post("/login", UserLogin);

export { userRouter };
