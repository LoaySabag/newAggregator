import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  process.env.MONGO_URL ?? "mongodb://localhost:27017/usersdb",
  {}
);

app.use("/users", userRoutes);

export default app;
