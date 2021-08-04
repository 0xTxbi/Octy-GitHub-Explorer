import Head from 'next/head'

function Home() {

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Octy GitHub Explorer</title>
            </Head>

            <div>
                <nav>
                    <div>
                        <a>Octy GitHub Explorer</a>
                    </div>
                </nav>
                <div>
                    <div>
                        <h1>Search for GitHub Users</h1>
                        <p>
                            Enter a GitHub username to look up
                        </p>
                    </div>
                    <br />
                    <div id="profile">
                    </div>
                </div>
            </div>

        </>
    )

}

export default Home