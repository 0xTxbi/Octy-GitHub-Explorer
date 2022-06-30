import { gql } from '@apollo/client'

// Get a user
export const GET_USER = gql`
    query GetUser($login: String!) {
        user(login: $login) {
            avatarUrl
            name
            bio
            login
            createdAt
            followers {
                totalCount
            }
            url
        }
    }
`

// Get user full stats
export const GET_USER_FULL_STATS = gql`
    query GetUserFullStats($login: String!, $privacy: RepositoryPrivacy, $isFork: Boolean, $last: Int) {
        user(login: $login) {
            avatarUrl
            name
            bio
            repositories(privacy: $privacy, isFork: $isFork, last: $last) {
                totalCount
                nodes {
                    name
                    description
                    primaryLanguage {
                        name
                        color
                    }
                    commitComments {
                        totalCount
                    }
                    createdAt
                    updatedAt
                    homepageUrl
                    pushedAt
                    url
                    stargazerCount
                }
            }
        }
    }
`

// Get current authenticated user
export const GET_CURRENT_USER = gql`
    {
        viewer {
            login
            name
        }
    }
`

export const GET_CURRENT_RATE_LIMIT = gql`
    query GetRateLimit {
        rateLimit {
            cost
            limit
            remaining
            resetAt
        }
    }
`
