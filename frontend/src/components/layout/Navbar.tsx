import { ThemeToggle } from "../ui"

export default function Navbar() {
    return (
        <nav className="bg-bg-secondary dark:bg-dark-bg-secondary h-13 p-3">
            <div className="flex">
                <div className="ml-auto">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
