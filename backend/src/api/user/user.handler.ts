import { Request, Response } from "express"

export async function get(req: Request, res: Response) {
    try {
        const { username } = req.query
        const user = { message: `Fetched user ${username}` }
        res.status(200).json(user)
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export default {
    get
}