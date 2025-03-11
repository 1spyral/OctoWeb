import cors from "cors"
import express from "express"
import userRouter from "@/api/user"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

const apiRouter = express.Router()

apiRouter.use("/user", userRouter)

app.use("/api", apiRouter)

export default app
