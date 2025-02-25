import { ThemeToggle } from "../ui"

export default function Navbar() {
    return (
        <nav className="bg-gray-100 p-3 h-13">
            <div className="flex">
                <div className="ml-auto">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}