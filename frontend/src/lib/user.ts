export interface User {
    login: string
    followers?: User[]
    following?: User[]
}

export function mapUser(user: any): User {
    return {
        login: user.login,
        followers: user.followers?.nodes.map(mapUser),
        following: user.following?.nodes.map(mapUser)
    }
}