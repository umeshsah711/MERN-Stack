import bodyParser from "body-parser";
import express from "express";

import config from "./config/config.js";
import productRoute from "./routes/product.Route.js";
import connectDB from "./config/database.js";
import authRoute from "./routes/auth.route.js";

const app = express();
app.use(bodyParser.json());

app.use(logger);

connectDB();

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
    status: "OK",
  });
});

app.use("/api/products", productRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", roleBasedAuth(ROLE_ADMIN), userRoute);

app.listen(config.port, () => {
  console.log("Server is running at port:5000");
});
