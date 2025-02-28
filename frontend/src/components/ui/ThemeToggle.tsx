import { uiStore } from "../../store"
import { MoonIcon, SunIcon } from "@primer/octicons-react"

export default function ThemeToggle() {
    const { theme, toggleTheme } = uiStore()

    return (
        <div
            onClick={toggleTheme}
            className={`relative inline-flex h-10 w-20 cursor-pointer items-center rounded-full transition-colors ${
                theme === "dark"
                    ? "bg-gradient-to-r from-purple-700 to-blue-900"
                    : "bg-gradient-to-r from-yellow-400 to-yellow-500"
            }`}
        >
            <div
                className={`absolute flex h-8 w-8 items-center justify-center bg-${theme === "dark" ? "gray-900" : "white"} rounded-full transition-transform ${theme === "dark" ? "translate-x-10" : "translate-x-1"} `}
            >
                {theme === "dark" ? (
                    <MoonIcon className="h-5 w-5 text-white" />
                ) : (
                    <SunIcon className="h-5 w-5 text-yellow-500" />
                )}
            </div>
        </div>
    )
}
