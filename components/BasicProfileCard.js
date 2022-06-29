import { Badge, Button, Center, Flex, Heading, Icon, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { VscGithubAlt } from 'react-icons/vsc'
import { convertToUTCMonth } from '../utils/utils'
import Link from 'next/link'

export default function BasicProfileCard({ userData, displayValue }) {
    return (
        <Center py={6} display={displayValue}>
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
                    <Image objectFit="cover" boxSize="100%" src={userData?.avatarUrl} />
                </Flex>
                <Stack flex={1} flexDirection="column" justifyContent="center" alignItems="center" p={1} pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {userData?.name}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                        {`@${userData?.login}`}
                    </Text>
                    <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
                        {userData?.bio}
                    </Text>
                    <Badge px={2} py={1} colorScheme={'green'} fontWeight={'400'}>
                        Joined {convertToUTCMonth(userData?.createdAt)}
                    </Badge>
                    <Badge px={2} py={1} colorScheme={'blue'} fontWeight={'400'}>
                        {userData?.followers?.totalCount} followers
                    </Badge>

                    <Stack
                        width={'100%'}
                        mt={'2rem'}
                        direction={'row'}
                        padding={2}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            rightIcon={<Icon as={VscGithubAlt} />}
                            _focus={{
                                bg: 'blue.500',
                            }}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            bg={'blue.400'}
                        >
                            <Link href={userData?.url}>
                                <a target={'_blank'}>View on</a>
                            </Link>
                        </Button>
                        {/* <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'blue.400'}
                            rightIcon={<Icon as={VscGithubAlt} />}
                            _focus={{
                                bg: 'blue.500',
                            }}
                            _hover={{
                                bg: 'blue.500',
                            }}
                        >
                            <Link href={`/summary`}>Full Stats</Link>
                        </Button> */}
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    )
}
