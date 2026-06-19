import ApiResponse from "../../common/utils/api-response.js";
import * as authService from "./user.services.js";

const register = async (req, res) => {
  const user = await authService.register(req.body);
  return ApiResponse.created(res, "Registration success", user);
};

const verifyEmail = async (req, res) => {
  await authService.verifyEmail(req.params.token);
  return ApiResponse.ok(res, "Verify user");
};

const login = async (req, res) => {
  const { user, accessToken, refreshToken } = await authService.login(req.body);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
  });

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
  });

  return ApiResponse.ok(res, "Welcome to the application", {
    user,
    accessToken,
    refreshToken,
  });
};

const refreshToken = async (req, res) => {
  const tokens = await authService.refreshToken(req.headers.authorization);
  return ApiResponse.ok(res, "refresh tokens", tokens);
};

const forgotPassword = async (req, res) => {
  await authService.forgotPassword(req.body);
  return ApiResponse.ok(res, "Email send");
};

const resetPassword = async (req, res) => {
  const token = req.params.token;
  const { password } = req.body;
  await authService.resetPassword(token, password);
  return ApiResponse.ok(res, "your password is reseted");
};

const logout = async (req, res) => {
  await authService.logout(req.user.id);
  res.clearCookie("refreshToken");
  res.clearCookie("accessToken");
  return ApiResponse.ok(res, "Logout Successfully");
};

const getMe = async (req, res) => {
  const user = await authService.getMe(req.user.id);
  return ApiResponse.ok(res, "User profile", user);
};

const changePassword = async (req, res) => {
  const userId = req.user.id;
  const { oldPassword, newPassword } = req.body;
  await authService.changePassword(userId, oldPassword, newPassword);
  return ApiResponse.ok(res, "Password changed successfully");
};

export {
  register,
  login,
  verifyEmail,
  refreshToken,
  forgotPassword,
  resetPassword,
  logout,
  getMe,
  changePassword,
};
