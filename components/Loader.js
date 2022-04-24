import { Box, Skeleton } from '@chakra-ui/react'
import React from 'react'

function Loader() {
    return (
        <Box mt={5}>
            <Skeleton height={'10rem'} />
        </Box>
    )
}

export default Loader
