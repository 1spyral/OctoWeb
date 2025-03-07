import { createNode } from "@/lib/node"
import Web, { updateNodes } from "@/lib/web"
import { create } from "zustand/react"

interface WebState extends Web {
    initWeb: (user: string) => void
    updateWeb: () => void
    addNode: (user: string) => void

    setRadiusX: (radiusX: number) => void
    setRadiusY: (radiusY: number) => void
}

export default create<WebState>((set, get) => ({
    nodes: [],
    radiusX: 300,
    radiusY: 300,

    initWeb: user => {
        set(state => ({
            ...state,
            nodes: [createNode(user, { root: true })]
        }))
    },

    updateWeb: async () => {
        const nodes = await updateNodes(get())
        set(state => ({ ...state, nodes }))
    },

    addNode: user => {
        set(state => ({
            ...state,
            nodes: [
                ...state.nodes,
                createNode(user, {
                    x:
                        Math.floor(Math.random() * state.radiusX * 2 + 1) -
                        state.radiusX,
                    y:
                        Math.floor(Math.random() * state.radiusY * 2 + 1) -
                        state.radiusY
                })
            ]
        }))
    },

    setRadiusX: radiusX => set(state => ({ ...state, radiusX })),
    setRadiusY: radiusY => set(state => ({ ...state, radiusY }))
}))
