import { REPULSION } from "@/const"

export default interface Node {
    user: string
    friends: Node[]
    root: boolean
    x: number
    y: number
    velocityX: number
    velocityY: number
}

export function createNode(
    user: string,
    friends?: Node[],
    root: boolean = false
): Node {
    return {
        user,
        friends: friends || [],
        root,
        x: 0,
        y: 0,
        velocityX: 0,
        velocityY: 0
    }
}

export function findRepulsion(a: Node, b: Node): [number, number] {
    const diffX = a.x - b.x
    const diffY = a.y - b.y
    return [
        diffX ? REPULSION / diffX / Math.abs(diffX) : 0,
        diffY ? REPULSION / diffY / Math.abs(diffY) : 0
    ]
}
