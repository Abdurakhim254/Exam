import express from "express"
import {authRouter, feedbackRouter, userRouter} from "./router.export.js"

export const mainRouter=express.Router()

mainRouter.use("/auth",authRouter)
mainRouter.use("/user",userRouter)
mainRouter.use("/feedback",feedbackRouter)