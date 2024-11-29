import express from 'express'
import {feedbackObj} from "../../controllers/index.js"
import {checkFeedbackDatamiddleware,UpdatecheckFeedbackDatamiddleware} from "../../middlewares/index.js"
import {feedbackValidationSchema} from "../../validations/index.js"


export const feedbackRouter=express.Router()

feedbackRouter.get("/",feedbackObj.getAllFedbacksCon)
feedbackRouter.get("/:id",feedbackObj.getFedbackByIdCon)
feedbackRouter.post("/",checkFeedbackDatamiddleware(feedbackValidationSchema),feedbackObj.CreateFedbackCon)
feedbackRouter.put("/:id",UpdatecheckFeedbackDatamiddleware(feedbackValidationSchema),feedbackObj.UpdateFedbackCon)
feedbackRouter.delete("/:id",feedbackObj.deleteFedbackCon)