import express from "express";
import router from "./routes/restaurant.routes";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import "reflect-metadata";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", router);

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 2000;
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  });
