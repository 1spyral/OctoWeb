import { API_ROUTE } from "@/config"
import axios from "axios"

export const userService = {
    getUser: async (username: string) => {
        const response =  await axios.get(`${API_ROUTE}/user`, {
            params: {
                username
            }
        })
        
        return response.data
    }
}