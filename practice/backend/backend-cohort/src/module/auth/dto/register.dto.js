import Joi from "joi";
import BaseDto from "../../../common/dto/base.dto.js";

class RegisterDto extends BaseDto {
  static schema = Joi.object({
    name: Joi.string()
      .trim()
      .min(2)
      .max(50)
      .message("Name is required")
      .required(),
    email: Joi.string()
      .trim()
      .lowercase()
      .email()
      .message("Email is required")
      .required(),
    password: Joi.string()
      .trim()
      .min(8)
      .message("Password is required")
      .required(),
    role: Joi.string().valid("customer", "seller").default("customer"),
  });
}

export default RegisterDto;
