import Head from 'next/head'
import SearchInput from '../components/searchInput'

function Home() {

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Octy GitHub Explorer</title>
            </Head>

            <div className="h-screen flex flex-col justify-center content-center text-center">
                <div>
                    <h1 className="intro-text text-7xl font-bold p-1 m-4">Octy GitHub Explorer</h1>
                </div>

                {/* Search input form */}
                <SearchInput />

            </div>

        </>
    )

}

export default Home