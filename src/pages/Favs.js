import React from 'react';
import { FavsWithQuery } from '../containers/GetFavs';
import { Layout } from '../components/Layout';
export default ({ favs = [] }) => (
    <Layout title="Your favorites" showTitle={true} subtitle="Here you can find your favorites pets">
        <FavsWithQuery />
    </Layout>
)