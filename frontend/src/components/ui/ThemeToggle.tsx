import { uiStore } from "../../store"
import { MoonIcon, SunIcon } from "@primer/octicons-react"

export default function ThemeToggle() {
    const { theme, toggleTheme } = uiStore()

    return (
        <div
            onClick={toggleTheme}
            className={`relative inline-flex items-center cursor-pointer w-20 h-10 rounded-full transition-colors ${
                theme === "dark" 
                    ? "bg-gradient-to-r from-purple-700 to-blue-900"
                    : "bg-gradient-to-r from-yellow-400 to-yellow-500"
            }`}
        >
            <div
                className={`absolute flex justify-center items-center w-8 h-8
                    bg-${theme === 'dark' ? 'gray-900' : 'white'} rounded-full transition-transform
                    ${theme === "dark" ? "translate-x-10" : "translate-x-1"}
                `}
            >
                {theme === "dark"
                    ? <MoonIcon className="w-5 h-5 text-white"/>
                    : <SunIcon className="w-5 h-5 text-yellow-500"/>
                }
            </div>
        </div>
    )
}