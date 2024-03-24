import express from "express";
import {
  UserLogin,
  UserLogout,
  UserRegister,
} from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/authenticate.js";

const UserRoutes = express.Router();

UserRoutes.post("/register", UserRegister);
UserRoutes.post("/login", UserLogin);
UserRoutes.get("/logout", authenticate, UserLogout);

export default UserRoutes;
