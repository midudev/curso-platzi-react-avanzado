import React from 'react';
import { ErrorMessage } from '../components/ErrorMessage';
import { RedirectButton } from '../components/Buttons';
import { Layout } from '../components/Layout'; 

export const NotFound = () => {
    return (
        <Layout title="Ups">
            <ErrorMessage message="Page Not Found" title={true} />
            <RedirectButton>Back to home</RedirectButton>
        </Layout>
    )
}