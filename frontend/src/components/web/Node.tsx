import { webStore } from "@/store"

export default function Node({ index }: { index: number }) {
    const node = webStore(state => state.nodes[index])

    return (
        <g>
            <circle fill="blue" r="20" cx="50%" cy="50%" />
            <text
                fill="white"
                x="50%"
                y="50%"
                alignmentBaseline="middle"
                textAnchor="middle"
            >
                {node.user}
            </text>
        </g>
    )
}
