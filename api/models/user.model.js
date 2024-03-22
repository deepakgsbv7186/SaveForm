import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email not valid.");
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
    tokens: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
