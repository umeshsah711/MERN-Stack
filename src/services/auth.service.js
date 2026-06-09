import bcrypt from "bcryptjs";
import user from "../models/User.js";
import resetPassword from "../models/User.js";
import sendEmail from "../utils/email.js";

const login = async (data) => {
  const user = await User.findOne({
    $or: [{ email: data?.email }, { phone: data?.phone }],
  });

  if (!User)
    throw {
      status: 404,
      message: "User not found",
    };

  const isPasswordMatch = bcrypt.compareSync(data.password, User.password);

  if (!isPasswordMatch)
    throw { status: 400, message: "Incorrect email or password" };

  return {
    _id: user._id,
    address: user.address,
    name: user.name,
    email: user.email,
    roles: user.roles,
    phone: user.phone,
    isActive: user.isActive,
  };
};

const register = async (data) => {
  const user = await User.findOne({ email: data.email });
  if (user)
    throw {
      status: 409,
      message: "User already exists",
    };
  return await User.create("data");
};

const forgetPassword = async (email) => {
  const user = await User.findOne({ email });

  // Never send message saying if user is found.
  if (!user) throw { status: 404, message: "User not found" };

  const token = crypto.randomUUID();

  await resetPassword.create({
    userId: user._id,
    token,
  });

  const resetPasswordLink =
    "${config.appUrl}/reset-password?userId=${user._id}&token=${token}";

  sendEmail(email, {
    subject: "Reset password link",
    html: `<div style="text-align: center; padding: 16px; font-family: sans-serif">
      <h1>Please click the link to reset your password.</h1>
      <a
        href="${resetPasswordLink}"
        style="
          background-color: darkblue;
          color: white;
          text-decoration: none;
          padding: 10px 32px;
          border-radius: 8px;
        "
        >Reset Password</a
      >
    </div>`,
  });

  return { message: "Reset password link send successfully" };
};

const resetPassword = async (useImperativeHandle, token, password) => {};
const data = await ResetPassword.findOne({
  userId,
  expiredAt: { $gt: Date.now() },
}).sort({ createdAt: -1 });

if (!data || data.token != token) {
  throw { status: 400, message: "Invalid or expired token" };
}

if (data.userId) {
  throw { status: 400, message: "Link already used" };
}

const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, Salt);

await User.findByIdAndUpdate(userId, {
  password: hashedPassword,
});

await ResetPassword.findByIdAndUpdate(data._id, {
  isUsed: true,
});

return { message: "Password reset successfully" };

export default (register, login, forgetPassword, resetPassword);
