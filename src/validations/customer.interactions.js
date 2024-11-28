import Joi from "joi";

export const feedbackValidationSchema=Joi.object({
    id:Joi.string(),
    customer_id:Joi.string().required(),
    interaction_date:Joi.date(),
    type:Joi.string().min(5).required(),
    content:Joi.string().min(5).required()
})