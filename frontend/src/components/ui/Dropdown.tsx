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
        <motion.div
            className="rounded-lg border shadow-md"
            initial={{ backgroundColor: "var(--bg-primary)", opacity: 0 }}
            animate={{
                backgroundColor: isOpen
                    ? "var(--bg-secondary)"
                    : "var(--bg-primary)",
                opacity: 1
            }}
            transition={{ duration: 0.3 }}
        >
            <button
                className="flex w-full items-center justify-between bg-bg-secondary p-3 text-lg font-semibold transition-colors duration-300 hover:bg-bg-primary dark:bg-dark-bg-secondary hover:dark:bg-dark-bg-primary"
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
                transition={{ duration: 0.3 }} // Keep the duration in sync with the outer transitions
            >
                <div className="border-t p-2">{children}</div>
            </motion.div>
        </motion.div>
    )
}
