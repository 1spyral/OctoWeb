import { Navbar, Leftbar, Rightbar } from "@/components/layout"

export default function Layout() {
    return (
        <div className="flex h-screen flex-col">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Leftbar />
                <div className="bg-bg-primary dark:bg-dark-bg-primary flex-1">
                    Content
                </div>
                <Rightbar />
            </div>
        </div>
    )
}
