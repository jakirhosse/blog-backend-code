import Joi from "joi";
import metaInformationValidate from "../helper/common-validate/meta.information.js";

// Define Joi schema for Blog
const blogValidate = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  category: Joi.object({
    _id: Joi.string().required().pattern(new RegExp("^[0-9a-fA-F]{24}$")), // Validating MongoDB ObjectId
    slug: Joi.string().required().trim(),
    category: Joi.string().required().trim(),
    parentCategoryId: Joi.string().allow(null).required().default(null),
  }).required(),
  images: Joi.object({
    imageUrl: Joi.string().uri().required(),
    altText: Joi.string().required(),
    pathName: Joi.string().required(),
  }).required(),
  status: Joi.string().valid("published", "draft", "pending").default("draft"),
  metaInformation: metaInformationValidate, // External validation for meta information
});

export default blogValidate;
