import React, { Fragment, useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../components/SubmitButton';
// import { useFetchData } from '../hooks/useFetchData';
export const User = () => {
    // const BASE_URL = 'https://petgram-server-mateombar.vercel.app/users'
    // const { data: categories, loading, error } = useFetchData(`${BASE_URL}/${userId})`
    const { removeAuth } = useContext(Context)
    return (
        <Fragment>
            <h1>User</h1>
            <SubmitButton onClick={removeAuth} >Log out</SubmitButton>
        </Fragment>
    )
}