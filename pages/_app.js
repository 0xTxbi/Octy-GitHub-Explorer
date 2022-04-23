import '@fontsource/inter'

import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { theme } from '../utils/theme'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'

function OctyGitHubExplorer({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </ApolloProvider>
    )
}

export default OctyGitHubExplorer
