import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Icon,
    Image,
    Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react'
import { VscGithubAlt } from 'react-icons/vsc'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { convertToUTCMonth } from '../utils/utils'
import FullStatsContent from './FullStatsContent'
import { GET_USER_FULL_STATS } from '../graphql/queries'
import { useLazyQuery } from '@apollo/client'

export default function BasicProfileCard({ userData, displayValue }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // Queries
    const [getGitHubUserFullStats, { loading: resultLoading, error: resultError, data: resultData }] =
        useLazyQuery(GET_USER_FULL_STATS)

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
                        <Link href={userData?.url} target="_blank">
                            <Button
                                flex={1}
                                fontSize={'sm'}
                                rounded={'full'}
                                rightIcon={<Icon as={VscGithubAlt} />}
                                colorScheme="blue"
                                variant="outline"
                            >
                                View on
                            </Button>
                        </Link>
                        <Button
                            isLoading={resultLoading}
                            loadingText="Loading"
                            onClick={() => {
                                onOpen()
                                getGitHubUserFullStats({
                                    variables: {
                                        login: userData?.login,
                                        privacy: 'PUBLIC',
                                        isFork: false,
                                        last: 5,
                                    },
                                })
                            }}
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'blue.400'}
                            rightIcon={<Icon as={FiEye} />}
                            _focus={{
                                bg: 'blue.500',
                            }}
                            _hover={{
                                bg: 'blue.500',
                            }}
                        >
                            Full Stats
                        </Button>
                    </Stack>
                </Stack>

                {/* Modal */}
                <Modal onClose={onClose} isOpen={isOpen} size="4xl" isCentered closeOnOverlayClick={false}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{`${userData?.login}'s Full Stats`}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody p={10}>
                            <FullStatsContent fullStatsData={resultData?.user} />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                onClick={onClose}
                                bg={'blue.400'}
                                _hover={{ bg: 'blue.500' }}
                                leftIcon={<Icon as={FiEyeOff} />}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack>
        </Center>
    )
}
