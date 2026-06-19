import Joi from "joi";
import BaseDto from "../../../common/dto/base.dto.js";

class ChangePasswordDto extends BaseDto {
  static schema = Joi.object({
    oldPassword: Joi.string(),
    newPassword: Joi.string().trim().min(8).required(),
  });
}

export default ChangePasswordDto;
