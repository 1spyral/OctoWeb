import { create } from "zustand/react"
import { useEffect } from "react"

interface UIState {
    theme: "light" | "dark"
    toggleTheme: () => void
}

const useUIStore = create<UIState>(set => ({
    theme: localStorage.getItem("theme") === "dark" ? "dark" : "light",
    toggleTheme: () =>
        set(state => {
            const newTheme = state.theme === "light" ? "dark" : "light"
            document.documentElement.classList.toggle(
                "dark",
                newTheme === "dark"
            )
            localStorage.setItem("theme", newTheme)
            return { theme: newTheme }
        })
}))

export const ThemeProvider = () => {
    const theme = useUIStore(state => state.theme)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
    }, [theme])

    return null
}

export default useUIStore