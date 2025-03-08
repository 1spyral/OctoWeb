import dotenv from "dotenv"

dotenv.config()

const env = process.env

// Port
export const PORT = parseInt(env.PORT as string) || 3000

// GitHub
export const GITHUB_API_KEY = env.GITHUB_API_KEY
