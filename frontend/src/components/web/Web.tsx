import { Node } from "@/components/web"
import { uiStore } from "@/store"
import webStore from "@/store/webStore"

export default function Web() {
    const { darkMode } = uiStore()
    const { nodes } = webStore()

    return (
        <div className="flex-1">
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
