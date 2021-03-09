import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../components/Buttons';
import { Layout } from '../components/Layout';
// import { useFetchData } from '../hooks/useFetchData';
export default () => {
    // const BASE_URL = 'https://petgram-server-mateombar.vercel.app/users'
    // const { data: categories, loading, error } = useFetchData(`${BASE_URL}/${userId})`
    const { removeAuth } = useContext(Context)
    return (
        <Layout title="User Details" showTitle>
            <SubmitButton onClick={removeAuth} >Log out</SubmitButton>
        </Layout>
    )
}