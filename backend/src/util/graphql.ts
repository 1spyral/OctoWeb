import { graphql } from "@octokit/graphql"
import { GITHUB_API_KEY } from "@/config"

export default graphql.defaults({
    headers: {
        authorization: `token ${GITHUB_API_KEY}`
    }
})
