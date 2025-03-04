import { UsernameForm } from "@/components/ui"
import { webStore } from "@/store"
import { useEffect, useState } from "react"
import * as React from "react"

export default function LeftBar() {
    const [width, setWidth] = useState(250)

    const { addNode, updateWeb } = webStore()

    useEffect(() => {
        setInterval(() => {
            updateWeb()
        }, 20)
    }, [])

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
            <UsernameForm />
            <button
                onClick={() => addNode("hi")}
                className="mt-2 w-full rounded bg-blue-500 p-2 text-white"
            >
                Add
            </button>
            <button
                onClick={updateWeb}
                className="mt-2 w-full rounded bg-blue-500 p-2 text-white"
            >
                Update
            </button>

            <div
                className="absolute top-1/2 right-0.5 h-12 w-1.5 -translate-y-1/2 transform cursor-ew-resize rounded-full bg-gray-400"
                onMouseDown={e => handleMouseDown(e)}
            />
        </aside>
    )
}
