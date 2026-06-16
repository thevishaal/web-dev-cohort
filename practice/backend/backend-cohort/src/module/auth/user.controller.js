import ApiResponse from "../../common/utils/api-response.js";
import * as authService from "./user.services.js";

const register = async (req, res) => {
  const user = await authService.register(req.body);
  return ApiResponse.ok(res, "Registration success", user);
};

export { register };
