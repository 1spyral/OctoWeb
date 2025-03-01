export default class Node {
    user: string
    friends: Node[]
    root: boolean
    x: number
    y: number
    velocityX: number
    velocityY: number

    constructor(user: string, friends?: Node[], root: boolean = false) {
        this.user = user
        this.friends = friends || []
        this.root = root
        this.x = 0
        this.y = 0
        this.velocityX = 0
        this.velocityY = 0
    }

    addFriend(friend: Node) {
        this.friends.push(friend)
    }

    setFriends(friends: Node[]) {
        this.friends = friends
    }

    setX(x: number) {
        this.x = x
    }

    setY(y: number) {
        this.y = y
    }

    setVelocityX(velocityX: number) {
        this.velocityX = velocityX
    }

    setVelocityY(velocityY: number) {
        this.velocityY = velocityY
    }
}