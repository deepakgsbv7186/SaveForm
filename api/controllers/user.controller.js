import { v2 as cloudinary } from "cloudinary";
import { User } from "../models/user.model.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const userRegister = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      profilePic,
      gender,
      maritalStatus,
      dateOfBirth,
    } = req.body;
    const cloudImageResult = await cloudinary.uploader.upload(profilePic);
    if (cloudImageResult) {
      const newUser = new User({
        firstName,
        lastName,
        profilePicURL: cloudImageResult?.secure_url,
        gender,
        maritalStatus,
        dateOfBirth,
      });
      const saveUser = await newUser.save();
      res.status(200).json(saveUser);
    } else {
      res
        .status(500)
        .json("Cloudinary server not working. Please try after sometime.");
    }
  } catch (error) {
    console.log("User not created:User.Controller.js", error);
    res.status(500).json({ message: error });
  }
};
