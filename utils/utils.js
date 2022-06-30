import { useQuery } from '@apollo/client'
import moment from 'moment'
import { GET_USER, GET_USER_SINGLE_ID } from '../graphql/queries'

export const convertToUTCMonth = (time) => {
    return moment(time).format('MMMM, YYYY')
}

export const getUsersID = (username) => {
    const { data } = useQuery(GET_USER_SINGLE_ID, {
        variables: {
            login: username,
        },
    })

    return {
        params: {
            id: data,
        },
    }
}

// Truncate text
export function truncateText(input) {
    if (input.length > 20) {
        return input.substring(0, 30) + '...'
    }
    return input
}
