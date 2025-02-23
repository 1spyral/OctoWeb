import express from "express"
import userRouter from "@/api/user"

const app = express()

app.use("/user", userRouter)

export default app
