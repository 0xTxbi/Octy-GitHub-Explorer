import { Box, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Octy GitHub Explorer</title>
        <meta name="description" content="View the geeky details of your GitHub account that you seek." />
      </Head>

      <main className={styles.main}>
        <Heading mb={5}>
          Octy GitHub Explorer
        </Heading>

        <Text>
          view the geeky details of the GitHub account that you seek.
        </Text>
      </main>
    </div>
  )
}
