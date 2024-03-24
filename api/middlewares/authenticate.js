import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized." });
    }

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken?.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    req.userId = userId;
    next();
  } catch (error) {
    console.log("Authentication failed: ", error);
    return res.status(401).json({ success: false, message: "Unauthorized." });
  }
};
