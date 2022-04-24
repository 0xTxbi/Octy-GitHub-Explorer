import { useLazyQuery } from '@apollo/client'
import { Button, Heading, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import BasicProfileCard from '../components/BasicProfileCard'
import Loader from '../components/Loader'
import { GET_USER } from '../graphql/queries'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [inputValue, setInputValue] = useState('')

    // Query
    const [getGitHubUser, { loading: resultLoading, error, data }] = useLazyQuery(GET_USER)

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
        console.log(data)
    }

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
                            <Button variant={'ghost'} onClick={() => setInputValue('')}>
                                <Icon as={FaRegTimesCircle} size={'xs'} />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button
                        mt={5}
                        isLoading={resultLoading}
                        loadingText={'Searching'}
                        isDisabled={inputValue.length < 1 ? true : false}
                        bg={'blue.400'}
                        colorScheme={'blue'}
                        type={'submit'}
                    >
                        Search
                    </Button>
                </form>

                {resultLoading ? <Loader /> : null}

                {data !== undefined ? <BasicProfileCard userData={data?.user} /> : null}
            </main>
        </div>
    )
}
