import express from "express";

import userController from "../controllers/user.controller.js";
import roleBasedAuth from "../middlewares/roleBaseAuth.js";
import validate from "../middlewares/validate.js";
import { ROLE_ADMIN } from "../constants/roles.js";
import { updateRolesSchema, userSchema } from "../libs/schemas/user.js";

const router = express.Router();

router.get("/", roleBasedAuth(ROLE_ADMIN), userController.getUser);

router.post(
  "/",
  roleBasedAuth(ROLE_ADMIN),
  validate(userSchema),
  userController.createUser,
);

router.patch("/profile-image", userController.updateProfileImage);

router.get("/me", userController.getLoggedInUser);

router.get("/:id", roleBasedAuth(ROLE_ADMIN), userController.getUserById);

router.put("/:id", userController.updateUser);

router.delete("/:id", roleBasedAuth(ROLE_ADMIN), userController.deleteUser);

router.put(
  "/:id/roles",
  roleBasedAuth(ROLE_ADMIN),
  validate(updateRolesSchema),
  userController.updateUserRoles,
);

export default router;
