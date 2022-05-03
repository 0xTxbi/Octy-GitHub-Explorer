import { Badge, Button, Center, Flex, Heading, Icon, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function NoUserFoundCard() {
    return (
        <Center py={6}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px' }}
                height={{ sm: '476px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}
            >
                <Flex flex={1} bg="blue.200">
                    <Image objectFit="cover" boxSize="100%" />
                </Flex>
                <Stack flex={1} flexDirection="column" justifyContent="center" alignItems="center" p={1} pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        No User Found
                    </Heading>
                    {/* <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                        {`@${userData?.login}`}
                    </Text>
                    <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
                        {userData?.bio}
                    </Text>
                    <Badge px={2} py={1} colorScheme={'blue'} fontWeight={'400'}>
                        {userData?.followers?.totalCount} followers
                    </Badge> */}
                </Stack>
            </Stack>
        </Center>
    )
}
