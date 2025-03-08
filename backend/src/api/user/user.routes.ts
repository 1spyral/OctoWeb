import express from "express"
import userHandler from "@/api/user/user.handler"

const userRouter = express.Router()

userRouter.get("/", userHandler.get)

export default userRouter
