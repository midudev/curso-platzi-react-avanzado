import React from 'react';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';
import { Layout } from '../components/Layout';
export const Detail = ({ detailId }) => {
    return (
        <Layout title="Pet Details">
            <PhotoCardWithQuery id={detailId} />
        </Layout>
    )
}