import { webStore } from "@/store"

export default function Node({ index }: { index: number }) {
    const node = webStore(state => state.nodes[index])
    const { radiusX, radiusY } = webStore()

    const x = radiusX + node.x
    const y = radiusY + node.y

    return (
        <g>
            <circle fill="blue" r="20" cx={x} cy={y} />
            <text
                fill="white"
                x={x}
                y={y}
                alignmentBaseline="middle"
                textAnchor="middle"
            >
                {node.user}
            </text>
        </g>
    )
}
