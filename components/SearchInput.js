import React from 'react'
import { Formik, Form, Field } from 'formik'

const SearchInput = () => {

    let inputValue;

    return (
        <>
            {/* Form configuration */}
            <Formik
                initialValues={{ username: 'techiejossy' }}
                onSubmit={(values, actions) => {
                    inputValue = values.username
                }}
            >

                {/* Search input field */}
                <Form>
                    <Field type="text" name="username" placeholder="User you wish to stalk"></Field>
                    <button type="submit">Search</button>
                </Form>

            </Formik>
        </>
    )
}

export default SearchInput