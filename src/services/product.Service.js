import fs from "fs";
const getProducts = () => {
  const products = fs.readFileSync("data/products.json", "utf8");
  return JSON.parse(products);
};
export default { getProducts };
