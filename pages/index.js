import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Octy GitHub Explorer</title>
        <meta name="description" content="View the geeky details of your GitHub account that you seek." />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Octy GitHub Explorer
        </h1>

        <p className={styles.description}>
          View the geeky details of the GitHub account that you seek.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/0xTxbi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by 0xTxbi
        </a>
      </footer>
    </div>
  )
}
