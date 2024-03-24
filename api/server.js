import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/router.js";
import { connectToDB } from "./db/connection.db.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect with database:", error);
  });
