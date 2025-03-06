import { GRAVITY, REPULSION, ROOT_GRAVITY } from "@/const"

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
    {
        friends,
        root,
        x,
        y
    }: {
        friends?: Node[]
        root?: boolean
        x?: number
        y?: number
    } = {}
): Node {
    return {
        user,
        friends: friends ?? [],
        root: root ?? false,
        x: x ?? 0,
        y: y ?? 0,
        velocityX: 0,
        velocityY: 0
    }
}

export function findGravity(node: Node): [number, number] {
    const diffX = -node.x
    const diffY = -node.y
    const distanceSquared = diffX ** 2 + diffY ** 2
    const distance = Math.sqrt(distanceSquared)

    if (distanceSquared === 0) return [0, 0]

    const force = node.root ? ROOT_GRAVITY : GRAVITY

    return [force * diffX * distance, force * diffY * distance]
}

export function findRepulsion(a: Node, b: Node): [number, number] {
    const diffX = a.x - b.x
    const diffY = a.y - b.y
    const distanceSquared = diffX ** 2 + diffY ** 2
    const distance = Math.sqrt(distanceSquared)

    if (distanceSquared === 0) return [0, 0]

    const force = REPULSION / distanceSquared

    return [(force * diffX) / distance, (force * diffY) / distance]
}
