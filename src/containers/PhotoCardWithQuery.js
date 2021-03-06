import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { PhotoCard } from '../components/PhotoCard';

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`
const renderProp = ({ loading, error, data }) => {
    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error} title={true}/>
    const { photo = {} } = data
    return <PhotoCard {...photo} />
}
export function PhotoCardWithQuery({ id }) {
    return (
        <Fragment>
            <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
                {renderProp}
            </Query>
        </Fragment>
    )
}
