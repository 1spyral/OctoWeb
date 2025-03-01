import { userStore } from "@/store"
import { useState } from "react"
import * as React from "react"

export default function UsernameForm() {
    const [usernameField, setUsernameField] = useState("")
    const { setUsername } = userStore()

    function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUsernameField(e.target.value)
    }

    function handleUsernameSubmit() {
        if (usernameField.trim()) {
            setUsername(usernameField)
        }
    }

    return (
        <div className="mt-4">
            <input
                type="text"
                value={usernameField}
                onChange={handleUsernameChange}
                placeholder="Enter username"
                className="w-full rounded border border-gray-300 p-2"
            />
            <button
                onClick={handleUsernameSubmit}
                className="mt-2 w-full rounded bg-blue-500 p-2 text-white"
            >
                Enter
            </button>
        </div>
    )
}
