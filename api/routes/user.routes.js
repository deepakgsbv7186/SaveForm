import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const UserRegister = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).json({ error: "Fill all the fields." });
  }
  try {
    const isUserExistAlready = await User.findOne({ email: email });
    if (isUserExistAlready) {
      res.status(400).json({ error: "User already exists." });
    } else {
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
      const newUser = new User({ email, password: hashedPassword });
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
