import { create } from "zustand/react"

interface UIState {
    theme: "light" | "dark"
    toggleTheme: () => void
}

export default create<UIState>(set => ({
    theme: "light",
    toggleTheme: () =>
        set(state => ({ theme: state.theme === "light" ? "dark" : "light" }))
}))
