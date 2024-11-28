import express from "express"
import {authRouter} from "./auth.router/auth.routes.js"

export const mainRouter=express.Router()

mainRouter.use("/auth",authRouter)