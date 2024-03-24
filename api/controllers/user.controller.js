import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const UserRegister = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(422)
      .json({ success: false, error: "Please fill required inputs." });
  }
  try {
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res
        .status(403)
        .json({ success: false, message: "Account already exists." });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    // save user to database
    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "Account created successfully." });
  } catch (error) {
    console.log("Account not created: ", error);
    res.status(500).json({ success: false, message: "Account not created." });
  }
};
export const UserLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .json({ success: false, error: "Please fill required inputs." });
  }
  try {
    // check the user have account or not
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return res
        .status(404)
        .json({ success: false, message: "Account not exists." });
    }

    // compare the hashed password with database
    const matchPassword = await bcryptjs.compare(
      password,
      isUserExist.password
    );
    if (!matchPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credientials." });
    }

    // generate token
    const token = await jwt.sign(
      { userId: isUserExist._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // update token to database
    isUserExist.token = token;
    await isUserExist.save();

    res.status(200).json({
      success: true,
      message: "Login successful.",
      user: {
        _id: isUserExist?._id,
        name: isUserExist?.name,
        email: isUserExist?.email,
        token: token,
      },
    });
  } catch (error) {
    console.log("Login failed: ", error);
    res.status(500).json({ success: false, message: "Login failed." });
  }
};
