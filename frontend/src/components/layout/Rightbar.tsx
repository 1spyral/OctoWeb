import { useState } from "react"
import { Dropdown } from "@/components/ui"

export default function Rightbar() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <aside
            className={`relative flex-shrink-0 overflow-visible bg-bg-secondary transition-[width] transition-colors duration-300 dark:bg-dark-bg-secondary ${isCollapsed ? "w-0" : "w-[250px]"} `}
        >
            <div className="scrollbar-hide h-full w-[250px] overflow-y-auto p-4">
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
                        <div>Ok</div>
                    ]}
                />
                <Dropdown
                    title="Dropdown"
                    children={[<div>Hi</div>, <div>Ok</div>]}
                />
                <div
                    className={`absolute top-1/2 left-0 z-20 flex h-12 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-l bg-gray-500 text-white transition-transform duration-300 ${isCollapsed ? "-translate-x-6" : "-translate-x-full"} `}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? "<" : ">"}
                </div>
            </div>
        </aside>
    )
}
