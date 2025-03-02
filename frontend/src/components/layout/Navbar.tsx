import { ThemeToggle } from "@/components/ui"

export default function Navbar() {
    return (
        <nav className="h-13 bg-bg-secondary p-3 transition-colors duration-300 dark:bg-dark-bg-secondary">
            <div className="flex">
                <div className="ml-auto">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
