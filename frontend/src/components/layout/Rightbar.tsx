import { useState } from "react"
import Dropdown from "../ui/Dropdown.tsx"

export default function Rightbar() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <aside
            className={`relative flex-shrink-0 overflow-visible bg-gray-200 transition-all duration-300 ${isCollapsed ? "w-0" : "w-[250px]"} `}
        >
            <div className="h-full w-[250px] overflow-y-auto p-4">
                <Dropdown
                    title="Dropdown"
                    children={[<div>Hi</div>, <div>Ok</div>]}
                />
                <Dropdown
                    title="Dropdown"
                    children={[
                        <div>Hi</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                        <div>Ok</div>,
                    ]}
                />
                <Dropdown
                    title="Dropdown"
                    children={[<div>Hi</div>, <div>Ok</div>]}
                />
                <div
                    className={`absolute top-1/2 left-0 z-20 flex h-12 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-l bg-gray-500 text-white transition-all duration-300 ${isCollapsed ? "-translate-x-6" : "-translate-x-full"} `}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? "<" : ">"}
                </div>
            </div>
        </aside>
    )
}
