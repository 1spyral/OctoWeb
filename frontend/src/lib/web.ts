import Node, { findRepulsion } from "@/lib/node"

export default interface Web {
    nodes: Node[]
    radiusX: number
    radiusY: number
}

export async function updateNodes({ nodes }: Web): Promise<Node[]> {
    return await Promise.all(
        nodes.map(async (_node, index) => {
            const node = await updateNodeVelocity(nodes, index)
            return await updateNode(node)
        })
    )
}

async function updateNodeVelocity(nodes: Node[], index: number): Promise<Node> {
    let accelX = 0
    let accelY = 0

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

async function updateNode(node: Node): Promise<Node> {
    return {
        ...node,
        x: node.x + node.velocityX,
        y: node.y + node.velocityY
    }
}
