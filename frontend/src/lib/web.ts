import { GRAVITY, ROOT_GRAVITY } from "@/const"
import Node, { findRepulsion } from "@/lib/node"

export default interface Web {
    nodes: Node[]
    radiusX: number
    radiusY: number
}

export async function updateNodes({ nodes, radiusX, radiusY }: Web): Promise<Node[]> {
    return await Promise.all(
        nodes.map(async (_node, index) => {
            const node = await updateNodeVelocity(nodes, index)
            console.log("x", node.x, "y", node.y)
            console.log(node.velocityX, node.velocityY)
            return await updateNode(node, radiusX, radiusY)
        })
    )
}

async function updateNodeVelocity(nodes: Node[], index: number): Promise<Node> {
    let accelX = 0
    let accelY = 0

    // Gravity
    if (!nodes[index].root) {
        const diffX = 0 - nodes[index].x
        const diffY = 0 - nodes[index].y
        accelX += diffX ? GRAVITY / diffX / Math.abs(diffX) : 0
        accelY += diffY ? GRAVITY / diffY / Math.abs(diffY) : 0
    } else {
        const diffX = 0 - nodes[index].x
        const diffY = 0 - nodes[index].y
        accelX += diffX ? ROOT_GRAVITY / diffX / Math.abs(diffX) : 0
        accelY += diffY ? ROOT_GRAVITY / diffY / Math.abs(diffY) : 0
    }

    // Repulsion
    for (let j = 0; j < index; j++) {
        const repulsion = findRepulsion(nodes[index], nodes[j])
        accelX += repulsion[0]
        accelY += repulsion[0]
    }
    for (let j = index + 1; j < nodes.length; j++) {
        const repulsion = findRepulsion(nodes[index], nodes[j])
        accelX += repulsion[0]
        accelY += repulsion[0]
    }

    return {
        ...nodes[index],
        velocityX: nodes[index].velocityX + accelX,
        velocityY: nodes[index].velocityY + accelY
    }
}

async function updateNode(node: Node, radiusX: number, radiusY: number): Promise<Node> {
    return {
        ...node,
        x: node.x + node.velocityX > radiusX ? radiusX : node.x + node.velocityX < -radiusX ? -radiusX : node.x + node.velocityX,
        y: node.y + node.velocityY > radiusY ? radiusY : node.y + node.velocityY < -radiusY ? -radiusY : node.y + node.velocityY
    }
}
