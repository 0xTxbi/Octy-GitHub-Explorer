import { useLazyQuery } from '@apollo/client'
import { Button, Heading, Icon, IconButton, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import BasicProfileCard from '../components/BasicProfileCard'
import Loader from '../components/Loader'
import NoUserFoundCard from '../components/NoUserFoundCard'
import { GET_CURRENT_RATE_LIMIT, GET_USER } from '../graphql/queries'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [inputValue, setInputValue] = useState('')
    const [searchedValue, setSearchedValue] = useState('')
    const [secDisplay, setSecDisplay] = useState('none')

    // Queries
    const [getGitHubUser, { loading: resultLoading, error: resultError, data: resultData }] = useLazyQuery(GET_USER)

    const [getRateLimit, { loading: rateLimitLoading, error: rateLimitError, data: rateLimitData }] =
        useLazyQuery(GET_CURRENT_RATE_LIMIT)

    // Change handler
    const changeHandler = (e) => {
        setInputValue(e.target.value)
    }

    const searchHandler = (e) => {
        e.preventDefault()
        getGitHubUser({
            variables: {
                login: inputValue,
            },
        })
        setSearchedValue(inputValue)

        getRateLimit()
        setSecDisplay('block')
        localStorage.setItem('searchedUser', inputValue)
    }

    console.log(resultData)

    return (
        <div className={styles.container}>
            <Head>
                <title>Octy GitHub Explorer</title>
                <meta name="description" content="View the geeky details of the GitHub account you seek." />
            </Head>

            <main className={styles.main}>
                <Heading mb={5}>Octy GitHub Explorer</Heading>

                <form onSubmit={searchHandler}>
                    <InputGroup>
                        <Input type={'text'} variant={'flushed'} value={inputValue} onChange={changeHandler} />
                        <InputRightElement>
                            <Button variant={'ghost'} outline={'none'} onClick={() => setInputValue('')}>
                                <Icon as={FaRegTimesCircle} size={'xs'} />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button
                        mt={5}
                        isLoading={resultLoading}
                        loadingText={'Searching'}
                        isDisabled={inputValue.length < 1 || inputValue == searchedValue ? true : false}
                        bg={'blue.400'}
                        colorScheme={'blue'}
                        type={'submit'}
                    >
                        Search
                    </Button>
                </form>

                {resultLoading ? <Loader /> : null}

                {/* {resultData !== undefined ? <BasicProfileCard userData={resultData?.user} /> : null} */}
                {resultData?.user == null ? <NoUserFoundCard /> : <BasicProfileCard userData={resultData?.user} />}
            </main>

            <Stack direction={'row'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
                <Text
                    my={'10'}
                    display={secDisplay}
                    bg={'blue.400'}
                    color={'white'}
                    position="fixed"
                    bottom="0"
                    py={2}
                    pl={2}
                    boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 35%), 0 10px 10px -5px rgb(66 153 225 / 35%)'}
                    w={'20rem'}
                    borderRadius={'3px'}
                    right={['2rem']}
                    zIndex={1}
                    _hover={{
                        bg: 'blue.500',
                    }}
                >
                    {`${rateLimitData?.rateLimit?.remaining}/${rateLimitData?.rateLimit?.limit} searches left`}
                </Text>
            </Stack>
        </div>
    )
}
