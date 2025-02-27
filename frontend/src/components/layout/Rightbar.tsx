import { useState } from "react"

export default function Rightbar() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <aside
            className={`
                relative bg-gray-200 overflow-visible flex-shrink-0 transition-all duration-300
                ${isCollapsed ? "w-0" : "w-[250px]"}
            `}
        >
            <div className="w-[250px] p-4">
                <h2 className="text-lg font-medium">Right Sidebar</h2>
                <ul className="mt-4 space-y-2">
                    <li className="p-2 bg-gray-300 rounded">Widget 1</li>
                    <li className="p-2 bg-gray-300 rounded">Widget 2</li>
                    <li className="p-2 bg-gray-300 rounded">Widget 3</li>
                </ul>
                <div
                    className={`
                        absolute top-1/2 -translate-y-1/2 bg-gray-500 text-white w-6 h-12
                        flex items-center justify-center rounded-l cursor-pointer
                        transition-all duration-300 z-20 left-0
                        ${isCollapsed ? "-translate-x-6" : "-translate-x-full"}
                    `}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? "<" : ">"}
                </div>
            </div>
        </aside>
    )
}
