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
        <div className="bg-bg-primary dark:bg-dark-bg-primary rounded-lg border shadow-md">
            <button
                className="bg-bg-secondary dark:bg-dark-bg-secondary hover:bg-bg-primary hover:dark:bg-dark-bg-primary flex w-full items-center justify-between p-3 text-lg font-semibold"
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
                <div className="border-t p-2">{children}</div>
            </motion.div>
        </div>
    )
}
