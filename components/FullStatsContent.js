import {
    Avatar,
    Badge,
    Container,
    Heading,
    HStack,
    Icon,
    Link,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import { truncateText } from '../utils/utils'
import { BiLink } from 'react-icons/bi'
import { VscGithub } from 'react-icons/vsc'

function FullStatsContent({ fullStatsData }) {
    return (
        <Container maxW="3xl">
            <HStack spacing={5} justify="space-between">
                <Avatar size="lg" src={fullStatsData?.avatarUrl} />
                <div>
                    <Heading as="h2" size="lg">
                        {fullStatsData?.name}
                    </Heading>
                    <Text align="right">{fullStatsData?.bio}</Text>
                </div>
            </HStack>
            <br />
            <hr />
            <HStack justify="center">
                <Heading my="5" as="h2" size="md">
                    Repositories
                </Heading>
            </HStack>

            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>name</Th>
                        <Th>description</Th>
                        <Th isNumeric>Language</Th>
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {fullStatsData?.repositories?.nodes?.map((repo) => (
                        <Tr>
                            <Td>
                                <Text>{repo?.name.toLowerCase()}</Text>
                            </Td>
                            <Td>
                                <Text>{repo?.description}</Text>
                            </Td>
                            <Td isNumeric>
                                <Badge colorScheme="green">{repo?.primaryLanguage?.name}</Badge>
                            </Td>
                            <Td>
                                {repo?.homepageUrl != null ? (
                                    <Link target="_blank" href={repo?.homepageUrl} mr="5">
                                        <Icon as={BiLink} />
                                    </Link>
                                ) : null}
                            </Td>
                            <Td>
                                <Link target="_blank" href={repo?.url}>
                                    <Icon as={VscGithub} />
                                </Link>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Container>
    )
}

export default FullStatsContent
