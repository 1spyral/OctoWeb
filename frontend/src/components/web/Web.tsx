import webStore from "@/store/webStore"

export default function Web() {
    const { web } = webStore()

    return (
        <div className="flex-1">
            <svg className="h-full w-full">
                {web.nodes.length > 0 ? (
                    <div>hi</div>
                ) : (
                    <text fill="white" x="50%" y="50%">
                        Please provide a username
                    </text>
                )}
            </svg>
        </div>
    )
}
