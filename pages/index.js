import Head from 'next/head'
import SearchInput from '../components/searchInput'
import { AppRunner } from '../lib/app'

function Home() {

    AppRunner()

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

                {/* Generator button */}
                <button className="bg-gray-800 p-4" style={{ color: "white" }} id="generateUser">Obtain</button>

            </div>

        </>
    )

}

export default Home