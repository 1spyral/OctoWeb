import { create } from "zustand/react"

interface UserState {
    username: string
}

export default create<UserState>(set => ({
    username: "",
    setUsername: (username: string) => set({ username }),
}))
