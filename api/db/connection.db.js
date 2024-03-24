import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}`
    );
    console.log("DB connected");
  } catch (error) {
    console.log("Database connection error: ", error);
  }
};
