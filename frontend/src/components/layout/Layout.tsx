import { NavBar, LeftBar, RightBar } from "@/components/layout"
import { Web } from "@/components/web"

export default function Layout() {
    return (
        <div className="flex h-screen flex-col">
            <NavBar />
            <div className="flex flex-1 overflow-hidden">
                <LeftBar />
                <Web />
                <RightBar />
            </div>
        </div>
    )
}
