import express from "express";

import productController from "../controllers/product.Controller.js";

const router = express.Router();

router.get("/", productController.getProducts);

router.get("/one", (req, res) => {
  res.json({ name: "Iphone" });
});

router.get("/one", (req, res) => {
  res.json({ name: "Samsung" });
});

export default router;