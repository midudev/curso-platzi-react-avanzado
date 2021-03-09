import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../components/Buttons';
import { Layout } from '../components/Layout';
export default () => {
    const { removeAuth } = useContext(Context)
    return (
        <Layout title="User Details" showTitle>
            <SubmitButton onClick={removeAuth} >Log out</SubmitButton>
        </Layout>
    )
}