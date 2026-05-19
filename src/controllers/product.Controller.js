import productService from "../services/product.Service.js";
const getProducts = (req, res) => {
  const data = getProductsFromDB();
  res.json(data);
};

const getOneProducts = (res, req) => {
  res.json({ name: "Iphone" });
};
export default { getProducts, getOneProducts };
