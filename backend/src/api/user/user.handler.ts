import { Request, Response } from "express"
import { z } from "zod"

export async function get(req: Request<{}, {}, {}, getParams>, res: Response) {
    const validate = getParamsSchema.safeParse(req.query)

    if (validate.error) {
        res.status(400).json({ error: validate.error.errors })
        return
    }

    try {
        const { username } = validate.data
        const user = { message: `Fetched user ${username}` }
        res.status(200).json(user)
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

const getParamsSchema = z.object({
    username: z.string()
})
interface getParams extends z.infer<typeof getParamsSchema> {}

export default {
    get
}