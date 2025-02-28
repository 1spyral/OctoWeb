import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDownIcon } from "@primer/octicons-react"
import * as React from "react"

export default function Dropdown({
    title,
    children
}: {
    title: string
    children: React.ReactNode[]
}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="rounded-lg border bg-white shadow-md">
            <button
                className="flex w-full items-center justify-between bg-gray-100 p-3 text-lg font-semibold hover:bg-gray-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <ChevronDownIcon
                    className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
            </button>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
            >
                <div className="border-t bg-white p-2">{children}</div>
            </motion.div>
        </div>
    )
}
