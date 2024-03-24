import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
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
    token: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
