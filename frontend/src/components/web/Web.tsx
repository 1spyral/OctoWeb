import webStore from "@/store/webStore"

export default function Web() {
    const { nodes } = webStore()

    return (
        <div className="flex-1">
            <svg className="h-full w-full">
                {nodes.length > 0 ? (
                    nodes.map(node => (
                        <text fill="white" x="50%" y="50%" key={node.user}>
                            {node.user}
                        </text>
                    ))
                ) : (
                    <text fill="white" x="50%" y="50%">
                        Please provide a username
                    </text>
                )}
            </svg>
        </div>
    )
}
