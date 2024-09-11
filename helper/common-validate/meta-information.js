import Joi from "joi";

const metaInformationValidate = Joi.object({
  createdBy: Joi.string().trim().optional(),
  updatedBy: Joi.string().trim().optional(),
}).optional();

export default metaInformationValidate;
