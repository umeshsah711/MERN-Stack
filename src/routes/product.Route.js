import express from "express";

const router = express.Router();

router.get("/api/products", (req, res) => {
  res.json(["Iphone", "Samsung"]);
});

export default router;
