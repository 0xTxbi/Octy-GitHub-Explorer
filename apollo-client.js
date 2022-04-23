import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const GITHUB_ENDPOINT = 'https://api.github.com/graphql'

const httpLink = createHttpLink({
    uri: GITHUB_ENDPOINT,
})

const authLink = setContext((_, { headers }) => {
    const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export default client
