import { FRICTION } from "@/const"
import { Node, findGravity, findRepulsion } from "@/lib/node"

export interface Web {
    nodes: Node[]
    radiusX: number
    radiusY: number
}

export async function updateNodes({
    nodes,
    radiusX,
    radiusY
}: Web): Promise<Node[]> {
    return await Promise.all(
        (
            await Promise.all(
                nodes.map(async (_node, index) => {
                    return await updateNodeVelocity(nodes, index)
                })
            )
        ).map(async node => await updateNode(node, radiusX, radiusY))
    )
}

async function updateNodeVelocity(nodes: Node[], index: number): Promise<Node> {
    let accelX = 0
    let accelY = 0

    // Gravity
    const gravity = findGravity(nodes[index])
    accelX += gravity[0]
    accelY += gravity[1]

    // Repulsion
    for (let j = 0; j < index; j++) {
        const repulsion = findRepulsion(nodes[index], nodes[j])
        accelX += repulsion[0]
        accelY += repulsion[1]
    }
    for (let j = index + 1; j < nodes.length; j++) {
        const repulsion = findRepulsion(nodes[index], nodes[j])
        accelX += repulsion[0]
        accelY += repulsion[1]
    }

    return {
        ...nodes[index],
        velocityX: nodes[index].velocityX * FRICTION + accelX,
        velocityY: nodes[index].velocityY * FRICTION + accelY
    }
}

async function updateNode(
    node: Node,
    radiusX: number,
    radiusY: number
): Promise<Node> {
    return {
        ...node,
        x:
            node.x + node.velocityX > radiusX
                ? radiusX
                : node.x + node.velocityX < -radiusX
                  ? -radiusX
                  : node.x + node.velocityX,
        y:
            node.y + node.velocityY > radiusY
                ? radiusY
                : node.y + node.velocityY < -radiusY
                  ? -radiusY
                  : node.y + node.velocityY
    }
}
