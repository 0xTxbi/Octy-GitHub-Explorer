import Head from 'next/head'
import { useState } from 'react'
import SearchInput from '../components/SearchInput'

function Home() {

    const [userDetails, setUserDetails] = useState(null)

    if (userDetails) {
        console.log(userDetails.repos)
    } else {
        console.log('hey')
    }

    // userDetails.repos.map(repo => {

    //     console.log(repo.name)


    // })


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
                <SearchInput setUserDetails={setUserDetails} />

                {/* Display User Results */}
                {userDetails ? (
                    <div id="search-result-success" className="mt-5 container">

                        {userDetails.repos.map(repo => {

                            <h1>{repo.name}</h1>


                        })}

                        <div id="user-avatar" className="container flex justify-center mb-2">
                            <img src={userDetails.profile.avatar_url} alt="" className="rounded-full h-20" />
                        </div>
                        <div className="user-profile-info">
                            <h2 className="text-2xl font-bold">{userDetails.profile.name}</h2>
                            <p className="text-sm italic">{userDetails.profile.bio}</p>
                            <p className="text-sm italic">{userDetails.profile.followers} followers</p>
                        </div>

                        <h1>{userDetails.profile.name}'s Repositories</h1>



                    </div>

                ) : <p className="mt-5">start searching 🥱</p>}

            </div>


        </>
    )

}

export default Home