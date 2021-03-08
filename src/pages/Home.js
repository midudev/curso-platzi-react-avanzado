import React from 'react';
import { Layout } from '../components/Layout';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

const HomePage = ({ categoryId }) => (
    <Layout title="Your pets app" subtitle="Here you can find pets images">
        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryId} />
    </Layout>

)

export const Home = React.memo(HomePage,(prevProps, props) =>{
    return prevProps.categoryId === props.categoryId;
});