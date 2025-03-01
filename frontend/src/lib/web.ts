import Node from "@/lib/node"
import { REPULSION } from "@/const"

export default class Web {
    nodes: Node[]
    radiusX: number
    radiusY: number

    constructor() {
        this.nodes = []
        this.radiusX = 300
        this.radiusY = 300
    }

    async update() {
        await Promise.all(this.nodes.map(this.updateNodeVelocity))
        await Promise.all(this.nodes.map(this.updateNode))
    }

    updateNodeVelocity(node: Node, index: number) {
        let accelX = 0
        let accelY = 0

        for (let j = 0; j < index; j++) {
            accelX +=
                REPULSION /
                (node.x - this.nodes[j].x) /
                Math.abs(node.x - this.nodes[j].x)
            accelY +=
                REPULSION /
                (node.y - this.nodes[j].y) /
                Math.abs(node.y - this.nodes[j].y)
        }
        for (let j = index + 1; j < this.nodes.length; j++) {
            accelX +=
                REPULSION /
                (node.x - this.nodes[j].x) /
                Math.abs(node.x - this.nodes[j].x)
            accelY +=
                REPULSION /
                (node.y - this.nodes[j].y) /
                Math.abs(node.y - this.nodes[j].y)
        }

        node.velocityX += accelX
        node.velocityY += accelY
    }

    updateNode(node: Node) {
        node.x += node.velocityX
        node.y += node.velocityY
    }
}
