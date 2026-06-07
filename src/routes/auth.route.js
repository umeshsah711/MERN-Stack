import express from "express";
import authController from "../controllers/auth.controller.js";
import validate from "../middlewares/validate.js";

const router = express.Router();

router.post("/login", authController.login);
router.post("/register", validate(userSchema), authController.register);

export default router;
