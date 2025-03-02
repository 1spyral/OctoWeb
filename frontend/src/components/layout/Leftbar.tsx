import { UsernameForm } from "@/components/ui"
import { userStore } from "@/store"
import { useState } from "react"
import * as React from "react"

export default function LeftBar() {
    const [width, setWidth] = useState(250)
    const { username } = userStore()

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault()
        document.addEventListener("mousemove", resizeSidebar)
        document.addEventListener("mouseup", stopResizing)
    }

    function resizeSidebar(e: MouseEvent) {
        setWidth(Math.max(100, e.clientX))
    }

    function stopResizing() {
        document.removeEventListener("mousemove", resizeSidebar)
        document.removeEventListener("mouseup", stopResizing)
    }

    return (
        <aside
            className={`relative overflow-y-auto bg-bg-secondary p-4 transition-colors duration-300 dark:bg-dark-bg-secondary`}
            style={{ width: `${width}px` }}
        >
            <h2 className="text-lg font-medium">{username}</h2>
            <UsernameForm />
            <div
                className="absolute top-1/2 right-0.5 h-12 w-1.5 -translate-y-1/2 transform cursor-ew-resize rounded-full bg-gray-400"
                onMouseDown={e => handleMouseDown(e)}
            />
        </aside>
    )
}
