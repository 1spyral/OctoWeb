import { userService } from "@/services/userService"
import { userStore, webStore } from "@/store"
import { useState } from "react"
import * as React from "react"

export default function UsernameForm() {
    const [usernameField, setUsernameField] = useState("")
    const { setUsername } = userStore()
    const { initWeb } = webStore()

    function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUsernameField(e.target.value)
    }

    async function handleUsernameSubmit() {
        console.log(await userService.getUser(usernameField))
        if (usernameField.trim()) {
            setUsername(usernameField)
            initWeb(usernameField)
        }
    }

    return (
        <div className="mt-4">
            <input
                type="text"
                value={usernameField}
                onChange={handleUsernameChange}
                placeholder="Enter username"
                className="w-full rounded border border-gray-300 p-2 text-text-primary dark:text-dark-text-primary"
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
