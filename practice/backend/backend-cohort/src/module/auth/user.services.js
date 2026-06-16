import ApiError from "../../common/utils/api-error.js";
import ApiResponse from "../../common/utils/api-response.js";
import { generateResetToken } from "../../common/utils/jwt.utils.js";
import User from "./user.model.js";

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

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.verificationToken;

  return userObj;
};

export { register };
