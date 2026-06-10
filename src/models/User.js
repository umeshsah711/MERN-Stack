import mongoose from "mongoose";
import { maxLength, minLength, required } from "zod/mini";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Password length must be greater than 6"],
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
    minLength: [6, "Invalid phone number"],
    maxLength: [13, "Invalid phone number"],
  },
  address: {
    city: {
      type: String,
      required: [true, "Address city is required"],
    },
    province: {
      type: String,
      default: "Nepal",
    },
  },
  createdAt: {
    type: [String],
    default: ["USER"],
    enum: ["USER", "MERCHANT", "ADMIN"],
  },
  profileImageUrl: String,
  isActive: {
    type: Boolean,
    default: true,
  },
});

const model = mongoose.model("User", userSchema);

export default model;
