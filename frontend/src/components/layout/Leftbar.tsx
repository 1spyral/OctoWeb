import { useState } from "react"
import * as React from "react"

export default function Leftbar() {
    const [width, setWidth ] = useState(250)

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        document.addEventListener("mousemove", resizeSidebar)
        document.addEventListener("mouseup", stopResizing)
    }

    function resizeSidebar(e: MouseEvent) {
        setWidth(Math.max(100, e.clientX))
    }

    function stopResizing() {
        document.removeEventListener("mousemove", resizeSidebar);
        document.removeEventListener("mouseup", stopResizing);
    }

    return (
        <aside
            className="bg-gray-200 p-4 overflow-y-auto relative"
            style={{ width: `${width}px` }}
        >
            <h2 className="text-lg font-medium">Left Sidebar</h2>
            <ul className="mt-4 space-y-2">
                <li className="p-2 bg-gray-300 rounded">Item 1</li>
                <li className="p-2 bg-gray-300 rounded">Item 2</li>
                <li className="p-2 bg-gray-300 rounded">Item 3</li>
            </ul>
            <div
                className="absolute top-1/2 right-0.5 h-12 w-1.5 bg-gray-400 rounded-full cursor-ew-resize transform -translate-y-1/2"
                onMouseDown={(e) => handleMouseDown(e)}
            />
        </aside>
    )
}