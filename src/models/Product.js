import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    minLength: [2, "Invalid product name"],
  },
  brand: String,
  category: String,
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [1, "Price must be graeter than 1"],
    max: [999999, "Price must be less than 99,99,999"],
  },
  createdAt: Date,
});

const model = mongoose.model("Product", productSchema);

export default model;
