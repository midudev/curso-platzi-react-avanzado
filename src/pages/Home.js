import React from 'react';
import { Layout } from '../components/Layout';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
export const Home = ({ id }) => (
    <Layout title="Your pets app" subtitle="Here you can find pets images">
        <ListOfCategories />
        <ListOfPhotoCards categoryId={id} />
    </Layout>

)