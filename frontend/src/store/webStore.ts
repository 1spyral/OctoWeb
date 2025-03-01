import Web from "@/lib/web"
import { create } from "zustand/react"

interface WebState {
    web: Web
    updateWeb: () => void
}

export default create<WebState>(set => ({
    web: new Web(),
    updateWeb: () => {
        set(state => {
            state.web.update()
            return state
        })
    }
}))
