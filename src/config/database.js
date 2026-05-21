import { config } from "dotenv";
import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(config.mongodbUrl);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
