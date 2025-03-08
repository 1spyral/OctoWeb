import graphql from "@/util/graphql"
import { GraphQlQueryResponseData } from "@octokit/graphql"

export const userService = {
    async getUser(username: string) {
        const { user } = await graphql<GraphQlQueryResponseData>(
            `
                query User($login: String!) {
                    user(login: $login) {
                        login
                        followers(first: 100) {
                            nodes {
                                login
                            }
                        }
                        following(first: 100) {
                            nodes {
                                login
                            }
                        }
                    }
                }
            `,
            {
                login: username
            }
        )

        console.log(user)

        return user
    }
}
