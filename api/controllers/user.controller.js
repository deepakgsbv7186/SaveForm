import bcryptjs from "bcryptjs";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const UserRegister = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(422).json({ error: "Fill all the fields." });
  }
  try {
    const isUserExistAlready = await User.findOne({ email: email });
    if (isUserExistAlready) {
      res.status(400).json({ error: "User already exists." });
    } else {
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
      const newUser = new User({ name, email, password: hashedPassword });
      const savedUser = await newUser.save();

      const responseToClient = await User.findById(savedUser?._id).select(
        "-password"
      );
      res
        .status(201)
        .json({ message: "User created successfully.", responseToClient });
    }
  } catch (error) {
    console.log("User not registered.", error);
    res.status(500).json({ error: error.message });
  }
};

export const UserLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Fill all the fields." });
  }
  try {
    const isUserFound = await User.findOne({ email: email });
    if (!isUserFound) {
      return res.status(404).json({ error: "User not found." });
    } else {
      const isPasswordMatch = await bcryptjs.compare(
        password,
        isUserFound?.password
      );
      if (!isPasswordMatch) {
        return res.status(401).json({ error: "Invalid credientials." });
      }

      const token = await jwt.sign(
        { userId: isUserFound?._id },
        process.env.JWT_SECRET
      );

      isUserFound.tokens = token;
      await isUserFound.save();

      return res.status(200).json({
        user: {
          _id: isUserFound?._id,
          name: isUserFound.name,
          email: isUserFound.email,
          token: token,
        },
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
