import Joi from "joi";

export const feedbackValidationSchema=Joi.object({
    id:Joi.string(),
    name:Joi.string().min(3).required(),
    description:Joi.string().min(8).required(),
    price:Joi.number().integer().required(),
    stock:Joi.number().integer().required()
})