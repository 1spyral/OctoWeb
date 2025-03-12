import { API_ROUTE } from "@/config"
import { mapUser, User } from "@/lib/user"
import axios from "axios"

export const userService = {
    getUser: async (username: string): Promise<User> => {
        const response =  await axios.get(`${API_ROUTE}/user`, {
            params: {
                username
            }
        })

        return mapUser(response.data)
    }
}