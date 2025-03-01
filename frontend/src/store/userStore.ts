import { create } from "zustand/react"

interface UserState {
    username: string
    setUsername: (username: string) => void
}

export default create<UserState>(set => ({
    username: "",
    setUsername: username => set({ username })
}))
