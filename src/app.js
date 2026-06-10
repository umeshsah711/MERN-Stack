// import bodyParser from "body-parser";
// import express from "express";
// import multer from "multer";

// import config from "./config/config.js";
// import productRoute from "./routes/product.Route.js";
// import connectDB from "./config/database.js";
// import authRoute from "./routes/auth.route.js";
// import orderRoute from "./routes/order.route.js";
// import connectCloudinary from "./config/cloudinary.js";
// import validate from "./middlewares/validate.js";
// import logger from "./middlewares/logger.js";

// const app = express();

// const upload = multer({ dest: "uploads/" });

// connectDB();
// connectCloudinary();

// app.use(bodyParser.json());

// app.use(logger);

// app.get("/", (req, res) => {
//   res.json({
//     name: config.name,
//     port: config.port,
//     version: config.version,
//     status: "OK",
//   });
// });

// app.post("/api/upload", upload.array("image", 5), async (req, res) => {
//   const files = req.files;
//   console.log(files);
//   const result = await uploadFile(files);
//   res.json(result);
// });

// app.use("/api/products", upload.array("images", 5), productRoute);
// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/auth", roleBasedAuth(ROLE_ADMIN), userRoute);

// app.listen(config.port, () => {
//   console.log("Server is running at port:5000");
// });

import bodyParser from "body-parser";
import express from "express";
import multer from "multer";

import config from "./config/config.js";
import productRoute from "./routes/product.Route.js";
import connectDB from "./config/database.js";
import authRoute from "./routes/auth.route.js";
import orderRoute from "./routes/order.route.js";
import userRoute from "./routes/user.route.js";

import connectCloudinary from "./config/cloudinary.js";
import validate from "./middlewares/validate.js";
import logger from "./middlewares/logger.js";
import roleBasedAuth from "./middlewares/roleBaseAuth.js";

import { ROLE_ADMIN } from "./constants/roles.js";
import uploadFile from "./utils/uploadFile.js";

const app = express();
const upload = multer({ dest: "uploads/" });

// DB connections
connectDB();
connectCloudinary();

// Middlewares
app.use(bodyParser.json());
app.use(logger);

// Root route
app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
    status: "OK",
  });
});

// Upload route
app.post("/api/upload", upload.array("image", 5), async (req, res) => {
  try {
    const files = req.files;
    console.log(files);

    const result = await uploadFile(files);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Routes
app.use("/api/products", productRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

// Protected admin route example (fix duplication issue)
app.use("/api/admin/users", roleBasedAuth(ROLE_ADMIN), userRoute);

// Start server
app.listen(config.port, () => {
  console.log(`Server is running at port: 5000`);
});
