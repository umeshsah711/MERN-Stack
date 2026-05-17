import express from "express";
import config from "./config/config.js";
import productRoute from "./routes/product.Route.js";

const app = express();

// HTTP GET
app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
    status: "OK",
  });
});

app.use("/", productRoute);

app.listen(config.port, () => {
  console.log('Server is running at port 5000');
});

