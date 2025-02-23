import express from "express"
import userHandler from "@user/user.handler"

const userRouter = express.Router()

userRouter.get("/", userHandler.get)

export default userRouter
