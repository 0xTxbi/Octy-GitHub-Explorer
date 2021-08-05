import Head from 'next/head'

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

                <div>
                    <button className='intro-button p-4 rounded-md text-gray-50 shadow-md hover:shadow-lg'>Start your search</button>
                </div>
            </div>

        </>
    )

}

export default Home