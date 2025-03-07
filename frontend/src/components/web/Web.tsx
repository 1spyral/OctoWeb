import { Node } from "@/components/web"
import { uiStore } from "@/store"
import webStore from "@/store/webStore"
import { useEffect, useRef } from "react"

export default function Web() {
    const { darkMode } = uiStore()
    const { nodes, setRadiusX, setRadiusY } = webStore()

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect
                setRadiusX(width / 2)
                setRadiusY(height / 2)
            }
        })

        resizeObserver.observe(containerRef.current)

        return () => resizeObserver.disconnect()
    }, [])

    return (
        <div ref={containerRef} className="h-full w-full flex-1">
            <svg className="h-full w-full">
                {nodes.length > 0 ? (
                    nodes.map((_node, index) => (
                        <Node key={index} index={index} />
                    ))
                ) : (
                    <text
                        fill={darkMode ? "#ffffff" : "#000000"}
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                    >
                        Please provide a username
                    </text>
                )}
            </svg>
        </div>
    )
}
