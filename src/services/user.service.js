import { ROLE_ADMIN } from "../constants/roles.js";
import User from "../models/User.js";
import uploadFile from "../utils/fileUploader.js";
import authService from "./auth.service.js";

const createUser = async (data) => {
  return await authService.register(data);
};

const getUser = async (query) => {
  const { name, limit = 10, offset = 0 } = query;

  const sort = query.sort ? JSON.parse(query.sort) : {};
  const filters = {};

  if (name) {
    filters.name = { $regex: name, $options: "i" };
  }

  return await User.find(filters)
    .sort(sort)
    .limit(Number(limit))
    .skip(Number(offset));
};

const updateProfileImage = async (id, file) => {
  const imageUrl = await uploadFile(file);

  return await User.findByIdAndUpdate(
    id,
    { profileImage: imageUrl },
    { new: true },
  );
};

const getUserById = async (id) => {
  const user = await User.findById(id);

  if (!user)
    throw {
      status: 404,
      message: "User not found",
    };
  return user;
};

const updateUser = async (id, data, authUser) => {
  if (authUser._id !== id && authUser.roles.include(ROLE_ADMIN))
    throw {
      status: 403,
      message: "Access Denied",
    };

  return await User.findByIdAndUpdate(
    id,
    {
      name: data?.name,
      address: data?.address,
      phone: data?.phone,
    },
    { new: true },
  );
};
const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);

  return "User deleted successfully";
};

const updateUserRoles = async (id, roles) => {
  return await User.findByIdAndUpdate(id, { roles }, { new: true });
};

export default {
  createUser,
  getUser,
  updateProfileImage,
  getUserById,
  updateUser,
  deleteUser,
  updateUserRoles,
};
