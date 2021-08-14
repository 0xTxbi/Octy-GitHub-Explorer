import React from 'react'
import { Formik, Form, Field } from 'formik'

import Github from '../lib/github'

const SearchInput = ({ setUserDetails }) => {

    // Instantiate GitHub class
    const gh = new Github

    return (

        <>
            {/* Form configuration */}
            <Formik
                initialValues={{ username: 'techiejossy' }}
                onSubmit={(values) => {
                    gh.getUser(values.username).then(response => setUserDetails(response))
                }}
            >
                {/* Search input field */}
                <div className="mt-10">
                    <Form className="w-full max-w-sm m-auto">
                        <div className="flex items-center content-center border-b py-1 border-blue-400">
                            <Field type="text" name="username" placeholder="user you wish to stalk 👻" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none"></Field>
                            <button type="submit" className=" bg-blue-400 hover:bg-blue-700 text-sm text-white px-3 py-3 rounded-sm intro-button" style={{ color: "white" }}>Search</button>

                        </div>
                    </Form>
                </div>

            </Formik>

        </>
    )
}

export default SearchInput