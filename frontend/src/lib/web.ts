import Node from "@/lib/node.ts"

export default class Web {
    nodes: Node[]

    constructor() {
        this.nodes = []
    }

    addNode(node: Node) {
        this.nodes.push(node)
    }

    async update() {
        await Promise.all(this.nodes.map(this.updateNodeVelocity))
    }

    updateNodeVelocity(node: Node, index: number) {
        let accelX = 0
        let accelY = 0

        for (let j = 0; j < index; j++) {
            this.nodes[j]
        }
        for (let j = index + 1; j < this.nodes.length; j++) {

        }
    }
}