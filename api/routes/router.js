import dotenv from "dotenv";
import express from "express";
import { v2 as cloudinary } from "cloudinary";
import { User } from "../models/user.model.js";

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = express.Router();

router.post("/user/register", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      profilePic,
      gender,
      maritalStatus,
      dateOfBirth,
    } = req.body;
    console.log(req.body.dateOfBirth);
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
      res.status(201).json(saveUser);
    } else {
      res
        .status(500)
        .json("Cloudinary server not working. Please try after sometime.");
    }
  } catch (error) {
    console.log("User not created:User.Controller.js", error);
    res.status(500).json({ message: error });
  }
});

export { router };
