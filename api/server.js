import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectToDB } from "./db/connection.db.js";
import { router } from "./routes/router.js";

// CONFIGS
dotenv.config();
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// ROUTE
app.use(router);

// initiate database connection and server
connectToDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
