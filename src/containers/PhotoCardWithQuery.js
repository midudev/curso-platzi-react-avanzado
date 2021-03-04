import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { PhotoCard } from '../components/PhotoCard';

const query = gql`
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
    if (error) return <ErrorMessage message={error} />
    const { photo = {} } = data
    return <PhotoCard {...photo} />
}
export function PhotoCardWithQuery({ id }) {
    return (
        <Fragment>
            <Query query={query} variables={{ id }}>
                {
                    renderProp
                }
            </Query>
        </Fragment>
    )
}
