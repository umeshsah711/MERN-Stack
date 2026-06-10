// import express from "express";

// import { loginSchema, registerSchema } from "../libs/schemas/auth.js";
// import authController from "../controllers/auth.controller.js";
// import validate from "../middlewares/validate.js";

// const router = express.Router();

// router.post("/login", authController.login);

// router.post("/register", validate(userSchema), authController.register);

// router.post(
//   "/forget-password",
//   validate(forgetPasswordSchema),
//   authController.forgetPassword,
// );

// router.post(
//   "/reset-password",
//   validate(resetPasswordSchema),
//   authController.resetPassword,
// );

// export default router;

import express from "express";

import {
  loginSchema,
  registerSchema,
  forgetPasswordSchema,
  resetPasswordSchema,
} from "../libs/schemas/auth.js";

import authController from "../controllers/auth.controller.js";
import validate from "../middlewares/validate.js";
import { userSchema } from "../libs/schemas/user.js";

const router = express.Router();

router.post("/login", validate(loginSchema), authController.login);

router.post("/register", validate(registerSchema), authController.register);

router.post(
  "/forget-password",
  validate(forgetPasswordSchema),
  authController.forgetPassword,
);

router.post(
  "/reset-password",
  validate(resetPasswordSchema, userSchema),
  authController.resetPassword,
);

export default router;
