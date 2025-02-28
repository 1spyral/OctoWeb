import { useState } from "react"
import * as React from "react"

export default function Leftbar() {
    const [width, setWidth] = useState(250)

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
            className="relative overflow-y-auto bg-gray-200 p-4"
            style={{ width: `${width}px` }}
        >
            <h2 className="text-lg font-medium">Left Sidebar</h2>
            <ul className="mt-4 space-y-2">
                <li className="rounded bg-gray-300 p-2">Item 1</li>
                <li className="rounded bg-gray-300 p-2">Item 2</li>
                <li className="rounded bg-gray-300 p-2">Item 3</li>
            </ul>
            <div
                className="absolute top-1/2 right-0.5 h-12 w-1.5 -translate-y-1/2 transform cursor-ew-resize rounded-full bg-gray-400"
                onMouseDown={e => handleMouseDown(e)}
            />
        </aside>
    )
}
