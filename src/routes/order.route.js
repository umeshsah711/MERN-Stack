import ecpress from "express";

import { ROLE_USER } from "../constants/roles.js";
import auth from "../middlewares/auth.js";
import orderController from "../controllers/order.controller.js";
import roleBasedAuth from "../middlewares/roleBaseAuth.js";
import validate from "../middlewares/validate.js";
import { orderSchema } from "../libs/schemas/order.js";

const router = express.Router();

router.get("/", auth, orderController.getOrder);

router.post(
  "/",
  auth,
  roleBasedAuth(ROLE_USER),
  validate(orderSchema),
  orderController.createOrder,
);

export default router;
