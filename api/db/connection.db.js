import mongoose from "mongoose";

const DATABASE_NAME = "testusers";

export const connectToDB = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGOO_URI}/${DATABASE_NAME}`
    );
    console.log("Database connected.");
  } catch (error) {
    console.log("Database connection error: ", error);
  }
};
