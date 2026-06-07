import fs from "fs";
import Product from "../models/Product.js";

const products = fs.readFileSync("data/products.json", "utf-8");

const getProducts = async (query) => {
  const products = await Product.find();
  return products;
  const data = JSON.parse(products);

  
};

const getProductsById = (id) => {
  const product = await Product.findById(id);

  return products;
};

const createProduct = async (data) => {
  return await Product.create(data);
};

const deleteProduct = async(id) => {
 await Product.findByIdAndDelete(id);
};

const updateProduct = async(id) => {
 await Product.findByIdAndUpdate(id);
};

export default { getProducts, getProductsById, createProduct, deleteProduct, updateProduct };