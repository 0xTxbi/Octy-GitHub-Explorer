import React, { useState } from 'react'
import { useSessionStorageString } from 'react-use-window-sessionstorage'
import { Formik, Form, Field } from 'formik'

function SearchInput({ stars }) {

    // const [userInput, setUserInput] = useState()
    console.log(stars)

    return (
        <>
            {/* Form configuration */}
            <Formik
                initialValues={{ username: 'techiejossy' }}
                onSubmit={(values) => {
                    let userInput = values.username
                    console.log(userInput)
                    // setUserInput(inputValue)
                }}
            >

                {/* Search input field */}
                <div className="mt-10">
                    <Form className="w-full max-w-sm m-auto">
                        <div className="flex items-center content-center border-b py-1 border-blue-400">
                            <Field type="text" name="username" placeholder="user you wish to stalk 👻" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none"></Field>
                            <button type="submit" className=" bg-blue-400 hover:bg-blue-700 text-sm text-white px-3 py-3 rounded-sm intro-button" style={{ color: "white" }}>Search</button>
                            {/* <p>{userInput}</p> */}
                        </div>
                    </Form>
                </div>

            </Formik>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch('https://api.github.com/repos/vercel/vercel')
    const json = await res.json()
    return { stars: json.stargazers_count }
}

export default SearchInput