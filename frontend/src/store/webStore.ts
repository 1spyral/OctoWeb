import { createNode } from "@/lib/node"
import Web, { updateNodes } from "@/lib/web"
import { create } from "zustand/react"

interface WebState extends Web {
    initWeb: (user: string) => void
    updateWeb: () => void
}

export default create<WebState>((set, get) => ({
    nodes: [],
    radiusX: 300,
    radiusY: 300,

    initWeb: user => {
        set(state => ({
            ...state,
            nodes: [createNode(user, [], true)]
        }))
    },

    updateWeb: async () => {
        const nodes = await updateNodes(get())
        set(state => ({ ...state, nodes }))
    }
}))
