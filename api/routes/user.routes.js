import express from "express";
import {
  UserLogin,
  UserLogout,
  UserRegister,
} from "../controllers/user.controller.js";

const UserRoutes = express.Router();

UserRoutes.post("/register", UserRegister);
UserRoutes.post("/login", UserLogin);
UserRoutes.post("/logout", UserLogout);

export default UserRoutes;
