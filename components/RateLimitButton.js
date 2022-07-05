import { Text } from '@chakra-ui/react'
import styles from '../styles/RateLimitButton.module.css'

function RateLimitButton({ rateLimitData }) {
    return (
        <Text
            className={styles.floating}
            my={'10'}
            display={rateLimitData === undefined ? 'none' : 'block'}
            bg={'blue.500'}
            color={'white'}
            position="fixed"
            bottom="0"
            py={2}
            px={2}
            boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 35%), 0 10px 10px -5px rgb(66 153 225 / 35%)'}
            w={'auto'}
            borderRadius={'3px'}
            right={['2rem']}
            zIndex={1}
        >
            {`${rateLimitData?.rateLimit?.remaining}/${rateLimitData?.rateLimit?.limit} searches left`}
        </Text>
    )
}

export default RateLimitButton
