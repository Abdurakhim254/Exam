import Joi from "joi";

export const ProductValidationSchema=Joi.object({
    id:Joi.string(),
    name:Joi.string().min(3).required(),
    description:Joi.string().min(8).required(),
    price:Joi.number().integer().required(),
    stock:Joi.number().integer().required()
})