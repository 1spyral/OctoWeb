import { ThemeToggle } from "../ui"

export default function Navbar() {
    return (
        <nav className="h-13 bg-gray-100 p-3">
            <div className="flex">
                <div className="ml-auto">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
