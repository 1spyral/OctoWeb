import Navbar from "./Navbar.tsx"
import Leftbar from "./Leftbar.tsx"
import Rightbar from "./Rightbar.tsx"

export default function Layout() {
    return (
        <div className="flex h-screen flex-col">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Leftbar />
                <div className="flex-1">Content</div>
                <Rightbar />
            </div>
        </div>
    )
}
