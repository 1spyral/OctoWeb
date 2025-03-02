import { useEffect } from "react"
import { create } from "zustand/react"

interface UIState {
    darkMode: boolean
    toggleDarkMode: () => void
}

const useUIStore = create<UIState>(set => {
    const systemDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches
    const savedDarkMode = localStorage.getItem("theme")

    return {
        darkMode: savedDarkMode ? savedDarkMode === "dark" : systemDarkMode,
        toggleDarkMode: () =>
            set(state => {
                const newDarkMode = state.darkMode ? "light" : "dark"
                document.documentElement.classList.toggle(
                    "dark",
                    newDarkMode === "dark"
                )
                localStorage.setItem("theme", newDarkMode)
                return { darkMode: newDarkMode === "dark" }
            })
    }
})

// For loading dark mode on page load
export const DarkModeProvider = () => {
    const darkMode = useUIStore(state => state.darkMode)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode)
    }, [darkMode])

    return null
}

export default useUIStore
