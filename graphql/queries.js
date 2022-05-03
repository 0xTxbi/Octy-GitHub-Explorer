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

// Get a user
export const GET_USER_SINGLE_ID = gql`
    query GetUser($login: String!) {
        user(login: $login) {
            login
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
