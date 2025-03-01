import { Navbar, Leftbar, Rightbar } from "@/components/layout"
import { Web } from "@/components/web"

export default function Layout() {
    return (
        <div className="flex h-screen flex-col">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Leftbar />
                <Web />
                <Rightbar />
            </div>
        </div>
    )
}
