import { Node, createNode } from "@/lib/node"
import { Web, updateNodes } from "@/lib/web"
import { userService } from "@/services/userService"
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

    initWeb: async username => {
        const user = await userService.getUser(username)
        console.log(            user.followers//?.map(follower => createNode(follower.login))
        )
        const nodes: Node[] = [
            createNode(user.login, { root: true }),
            ...user.followers?.map(follower => createNode(follower.login)) ?? []
        ]
        set(state => ({ ...state, nodes }))
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
                createNode(user)
            ]
        }))
    },

    setRadiusX: radiusX => set(state => ({ ...state, radiusX })),
    setRadiusY: radiusY => set(state => ({ ...state, radiusY }))
}))
