import ApiError from "../../common/utils/api-error.js";
import ApiResponse from "../../common/utils/api-response.js";
import {
  generateAccessToken,
  generateRefreshToken,
  generateResetToken,
  verifyRefreshToken,
} from "../../common/utils/jwt.utils.js";
import User from "./user.model.js";

import crypto from "node:crypto";

const hashToken = (token) =>
  crypto.createHash("sha256").update(token).digest("hex");

const register = async ({ name, email, password, role }) => {
  const existing = await User.findOne({ email });

  if (existing)
    throw ApiError.conflict(`User already exist with this email ${email}`);

  const { rawToken, hashedToken } = generateResetToken();

  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken: hashedToken,
  });

  // todo: send an email with raw token
  console.log(rawToken);

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.verificationToken;

  return userObj;
};

const verifyEmail = async (token) => {
  if (!token) throw ApiError.badRequest("Token not found");

  const hashedToken = hashToken(token);
  const user = await User.findOne({ verificationToken: hashedToken }).select(
    "+verificationToken",
  );

  if (!user) throw ApiError.unauthorized("Token is invalid or exp");

  if (user.isVerified) throw ApiError.conflict("User already verified");

  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save({ validateBeforeSave: false });

  return;
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) throw ApiError.unauthorized("Invalid email or password");

  if (!user.isVerified)
    throw ApiError.forbidden("Please verify your email first");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw ApiError.unauthorized("Invalid email or password");

  const accessToken = generateAccessToken({
    id: user._id,
    role: user.role,
  });
  const refreshToken = generateRefreshToken({ id: user._id });

  user.refreshToken = hashToken(refreshToken);
  user.save({ validateBeforeSave: false });

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.refreshToken;

  return { user: userObj, accessToken, refreshToken };
};

const refresh = async (token) => {
  if (!token) throw ApiError.unauthorized("Token not found");

  const decoded = await verifyRefreshToken(token);
  const user = await User.findById(decoded.id).select("+refreshToken");
  if (!user) throw ApiError.notFound("User not found");

  const accessToken = generateAccessToken({
    id: user._id,
    role: user.role,
  });
  const refreshToken = generateRefreshToken({ id: user._id });

  user.refreshToken = hashToken(refreshToken);
  await user.save({ validateBeforeSave: false });

  const userObj = user.toObject();
  delete userObj.refreshToken;

  return { accessToken, refreshToken };
};

const forgotPassword = async ({ email }) => {
  const user = await User.findOne({ email }).select(
    "+resetToken +resetExpires",
  );

  if (!user) throw ApiError.notFound("User not found");

  const { rawToken, hashedToken } = generateResetToken();

  user.resetToken = hashedToken;
  user.resetExpires = Date.now() + 5 * 60 * 1000;
  await user.save({ validateBeforeSave: false });

  // send an email to user with raw token
  console.log("raw token:", rawToken);
  return;
};

const resetPassword = async (token, password) => {
  if (!token) throw ApiError.notFound("Token is missing");

  const user = await User.findOne({ resetToken: hashToken(token) }).select(
    "+resetToken +resetExpires",
  );

  if (!user) throw ApiError.notFound("User not found");

  if (user.resetExpires < Date.now())
    throw ApiError.forbidden("Token is invalid or exp");

  user.password = password;
  user.resetToken = undefined;
  user.resetExpires = undefined;
  await user.save({ validateBeforeSave: false });

  return;
};

const logout = async (userId) => {
  await User.findByIdAndUpdate(userId, { refreshToken: null });
};

const getMe = async (userId) => {
  const user = User.findById(userId);

  return user;
};

export {
  register,
  login,
  verifyEmail,
  refresh,
  forgotPassword,
  resetPassword,
  logout,
  getMe,
};
