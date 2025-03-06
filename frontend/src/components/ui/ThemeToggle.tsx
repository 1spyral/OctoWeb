import { uiStore } from "@/store"
import { MoonIcon, SunIcon } from "@primer/octicons-react"

export default function ThemeToggle() {
    const { darkMode, toggleDarkMode } = uiStore()

    return (
        <div
            onClick={toggleDarkMode}
            className={`relative inline-flex h-10 w-20 cursor-pointer items-center rounded-full ${
                darkMode
                    ? "bg-gradient-to-r from-purple-700 to-blue-900"
                    : "bg-gradient-to-r from-yellow-400 to-orange-600"
            }`}
        >
            <div
                className={`absolute flex h-8 w-8 items-center justify-center bg-${darkMode ? "gray-900" : "white"} rounded-full transition-transform ${darkMode ? "translate-x-10" : "translate-x-1"}`}
            >
                {darkMode ? (
                    <MoonIcon className="h-5 w-5 text-white" />
                ) : (
                    <SunIcon className="h-5 w-5 text-white" />
                )}
            </div>
        </div>
    )
}
