import ApiError from "../../common/utils/api-error.js";
import { verifyAccessToken } from "../../common/utils/jwt.utils.js";
import User from "./user.model.js";

const authenticate = () => {
  return async (req, res, next) => {
    if (!req.headers.authorization)
      throw ApiError.unauthorized("Token is missing");
    if (!req.headers.authorization?.startsWith("Bearer"))
      throw ApiError.unauthorized("Token must be startswith Bearer");

    const token = req.headers.authorization.split(" ")[1];
    if (!token) throw ApiError.unauthorized("Token is missing");

    const decoded = verifyAccessToken(token);

    const user = await User.findById(decoded.id);
    if (!user) throw ApiError.notFound("User not found");

    req.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    next();
  };
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw ApiError.forbidden("You don't have permissions");

    next();
  };
};

export { authenticate, authorize };
