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

// Get current authenticated user
export const GET_CURRENT_USER = gql`
    {
        viewer {
            login
            name
        }
    }
`
